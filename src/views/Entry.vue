<template>
	<div class="flex flex-row h-full">
		<div class="flex flex-col content-start p-2 w-7/12">
			<div class="flex flex-row flex-wrap justify-around overflow-auto">
				<div
					v-for="article in sortedArticles"
					:key="article"
					class=" text-xl mb-2 p-3 w-[200px] bg-white rounded text-center shadow"
				>
					<div class="font-bold">{{article.name}}</div>
					<div class="text-gray-500">{{article.price}} €</div>
					<div class="flex flex-row justify-around font-bold text-2xl">
						<button
							class="hover:bg-blue-100 rounded-full p-2 text-blue-800 w-4/12"
							@click="decreaseCart(article)"
						>-</button>
						<button
							class="hover:bg-blue-100 rounded-full p-2 text-blue-800 w-4/12"
							@click="increaseCart(article)"
						>+</button>
					</div>
				</div>
			</div>
			<div class="flex-1"></div>
			<div class="bg-white rounded-xl m-2 text-center shadow w-[30rem] self-center text-lg">
				<div class="">
					<div class="flex flex-row justify-around leading-[4rem] p-1 border-b">
						<div
							v-for="key in ['1','2','3','4','5','6']"
							:key="key"
							@click="updateCashReturn(key)"
							class="w-16 h-16 hover:bg-gray-100 rounded-full cursor-pointer"
						>
							{{key}}
						</div>
					</div>
					<div class="flex flex-row justify-around leading-[4rem] p-1">
						<div
							v-for="key in ['7','8','9','0','C','.']"
							:key="key"
							@click="updateCashReturn(key)"
							class="w-16 h-16 hover:bg-gray-100 rounded-full cursor-pointer"
						>
							{{key}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			id="cart"
			class="flex-1 flex flex-col justify-center text-sm w-6/12 shadow bg-white p-5 min-w-[480px]"
		>
			<h2 class="font-bold text-4xl pb-2">Cart</h2>
			<div class="text-lg">
				<div class="font-bold flex flex-row text-center py-2 border-b">
					<div class="w-6/12 text-left"> Article</div>
					<div class="w-2/12"> Quantity</div>
					<div class="w-2/12"> Price</div>
					<div class="w-2/12"> Total</div>
				</div>
				<div
					v-for="item in store.state.cart"
					:key="item"
					class="flex flex-row text-center py-2 border-b"
				>
					<div class="w-6/12 text-left">
						{{item.name}}
					</div>
					<div class="w-2/12">
						{{item.quantity}}
					</div>
					<div class="w-2/12">
						{{item.price}} €
					</div>
					<div class="w-2/12">
						{{item.quantity * item.price}} €
					</div>
				</div>
			</div>
			<div class="my-5 text-lg ">
				<div class="flex font-bold py-1">
					<div class="w-3/12">Total</div>
					<div class="w-2/12 font-bold text-right">{{store.getters.cartTotalPrice}} €</div>
				</div>
				<div class="flex py-1">
					<div class="w-3/12">Cash</div>
					<div class="w-2/12 text-right">{{cash}} €</div>
				</div>
				<div class="flex py-1">
					<div class="w-3/12">Return</div>
					<div class="w-2/12 text-right">{{Math.round((cash - store.getters.cartTotalPrice) * 100) / 100 }} €</div>
				</div>
			</div>
			<div class="flex-1"></div>
			<div class="text-xl flex flex-row justify-around">
				<button
					class="hover:bg-gray-100 rounded-full px-4 py-2 text-gray-600"
					@click="resetCart()"
				>Cancel order</button>
				<button
					class="bg-blue-800 hover:bg-blue-700 text-white rounded-full px-5 py-2 font-bold"
					@click="checkoutCart()"
				> <i class="far fa-save px-2"></i> Checkout</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { Article } from 'types';
import { toaster } from '@/components/alert';

export default defineComponent({
	setup() {
		const store = useStore();
		const articles = store.state.articles;
		const cash = ref(0);
		const previousKey = ref('C');

		const sortedArticles = computed(function () {
			// Used to copy the array by value
			let articles = store.state.articles.slice();
			return articles.sort((article1: Article, article2: Article) =>
				article1.name.localeCompare(article2.name)
			);
		});

		function increaseCart(article: Article) {
			store.commit('increaseCart', article);
		}

		function decreaseCart(article: Article) {
			store.commit('decreaseCart', article);
		}

		function resetCart() {
			if (window.confirm('Order will be cancelled')) {
				store.commit('resetCart');
			}
		}

		function checkoutCart() {
			if (store.state.cart.length > 0) {
				store.commit('checkoutCart');
				toaster.showToast('Transaction saved in the history');
				cash.value = 0;
			}
		}

		function updateCashReturn(key: string) {
			if (key === 'C') {
				cash.value = 0;
			} else {
				if (previousKey.value === '.') {
					cash.value = parseFloat(cash.value + '.' + key);
				} else {
					cash.value = parseFloat(cash.value + key);
				}
			}
			console.log(
				'Key : ' +
					key +
					' / Previous : ' +
					previousKey.value +
					' / Total : ' +
					cash.value
			);
			previousKey.value = key;
		}

		return {
			store,
			articles,
			sortedArticles,
			increaseCart,
			decreaseCart,
			resetCart,
			checkoutCart,
			updateCashReturn,
			cash,
			previousKey,
		};
	},
});
</script>

<style scoped>
</style>