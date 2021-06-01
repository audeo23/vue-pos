import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

import { Article, TopArticle, CartArticle, Transaction } from '../../types';
import { seed } from '../seed'

// Documentation on how to type Vuex store :
// https://next.vuex.vuejs.org/guide/typescript-support.html#simplifying-usestore-usage

interface State {
	articles: Array<Article>,
	cart: Array<CartArticle>,
	transactions: Array<Transaction>
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
	state: {
		articles: [],
		cart: [],
		transactions: []
	},
	mutations: {
		loadData(state) {
			if (localStorage.getItem('articles')) {
				state.articles = JSON.parse(localStorage.getItem('articles') || '')
			}
			if (localStorage.getItem('transactions')) {
				state.transactions = JSON.parse(localStorage.getItem('transactions') || '')
			}
		},
		saveData(state) {
			localStorage.setItem('articles', JSON.stringify(state.articles))
			localStorage.setItem('transactions', JSON.stringify(state.transactions))
		},
		addArticle(state, article) {
			let newArticleId = 1;

			state.articles.forEach((article) => {
				if (article.id >= newArticleId) {
					newArticleId = article.id + 1;
				}
			});
			article.id = newArticleId
			state.articles.push(article)
			localStorage.setItem('articles', JSON.stringify(state.articles))

		},
		saveEdition(state, articleEdited) {
			const index = state.articles.findIndex(article => article.id === articleEdited.id);
			state.articles[index].name = articleEdited.name
			state.articles[index].price = articleEdited.price
			localStorage.setItem('articles', JSON.stringify(state.articles))
		},
		removeArticle(state, id) {
			state.articles = state.articles.filter(
				(article) => article.id != id
			);
			localStorage.setItem('articles', JSON.stringify(state.articles))
		},
		deleteAllData(state) {
			state.articles = [];
			state.cart = [];
			state.transactions = [];
		},
		// CART
		increaseCart(state, articleAdded) {
			const cartItem = state.cart.find(article => article.id === articleAdded.id)
			if (!cartItem) {
				state.cart.push({ id: articleAdded.id, name: articleAdded.name, price: articleAdded.price, quantity: 1 });
			} else {
				cartItem.quantity++
			}
		},
		decreaseCart(state, articleDecreased) {
			const cartItem = state.cart.find(article => article.id === articleDecreased.id)
			const cartItemIndex = state.cart.findIndex(article => article.id === articleDecreased.id)
			if (cartItem && cartItem.quantity > 1) {
				cartItem.quantity--
			}
			if (cartItem && cartItem.quantity === 1) {
				state.cart.splice(cartItemIndex, 1)
			}
		},
		resetCart(state) {
			state.cart = []
		},
		checkoutCart(state) {

			const newTransactionId = state.transactions.reduce(function (max, transaction) {
				return max >= transaction.id ? max = transaction.id + 1 : max
			}, 1)

			const cartTotalPrice = state.cart.reduce((total, article) => total + article.price * article.quantity, 0)

			state.transactions.push({ id: newTransactionId, totalPrice: cartTotalPrice, cart: state.cart })
			localStorage.setItem('transactions', JSON.stringify(state.transactions))
			state.cart = []
		},
		// LOAD DEMO MODE
		loadDemo(state) {
			state.articles = seed.articles;
			state.transactions = seed.transactions;
			localStorage.setItem('articles', JSON.stringify(state.articles))
			localStorage.setItem('transactions', JSON.stringify(state.transactions))
		}
	},
	getters: {
		cartTotalPrice: (state) => {
			return state.cart.reduce((total, article) => total + article.price * article.quantity, 0)
		},
		numberOfTransactions: (state) => {
			return state.transactions.length
		},
		transactionsTotalPrice: (state) => {
			return state.transactions.reduce((total, transaction) => total + transaction.totalPrice, 0)
		},
		topSellingArticles: function (state) {

			let topSellingArticles: Array<TopArticle> = []

			state.transactions.forEach(function (transaction) {
				transaction.cart.forEach(function (article) {
					const articleItem = topSellingArticles.find(topArticle => topArticle.id === article.id)
					if (!articleItem) {
						topSellingArticles.push({ id: article.id, name: article.name, quantity: article.quantity, progress: 0 });
					} else {
						articleItem.quantity += article.quantity
					}
				})
			});

			topSellingArticles.sort((article1, article2) => {
				if (article1.quantity > article2.quantity) {
					return -1
				} else if (article1.quantity < article2.quantity) {
					return 1
				} else {
					return 0
				}
			});

			// Keep the top 3 and add % of total
			topSellingArticles = topSellingArticles.slice(0, 3)

			if (topSellingArticles.length >= 1) {
				topSellingArticles[0].progress = 100
			}

			if (topSellingArticles.length >= 2) {
				topSellingArticles[1].progress = Math.round(topSellingArticles[1].quantity / topSellingArticles[0].quantity * 100)
			}

			if (topSellingArticles.length >= 3) {
				topSellingArticles[2].progress = Math.round(topSellingArticles[2].quantity / topSellingArticles[0].quantity * 100)
			}

			return topSellingArticles
		}
	},
	modules: {
	}
})

export function useStore() {
	return baseUseStore(key)
}