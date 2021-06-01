<template>
	<div class="overflow-auto w-full">
		<div class="max-w-[1000px] m-auto px-3 py-4">
			<div class="bg-white shadow">
				<div class="flex flex-row p-2">
					<div class="w-6/12 p-2 flex flex-col justify-around">
						<div class="flex flex-row">
							<div class="text-gray-500 w-8/12 text-right pr-5 self-center">Number of transactions</div>
							<div class="text-4xl">{{store.getters.numberOfTransactions}}</div>
						</div>
						<div class="flex flex-row">
							<div class="text-gray-500 w-8/12 text-right pr-5 self-center">Sum of revenue</div>
							<div class="text-4xl">{{store.getters.transactionsTotalPrice}} €</div>
						</div>
					</div>
					<div class="w-6/12 p-2">
						<div class="text-gray-500 mb-2">Top 3 selling articles</div>
						<div
							class="text-base"
							v-for="article in store.getters.topSellingArticles"
							:key="article"
						>
							<div class="flex flex-row items-center">
								<div class="w-4/12">{{article.name}} </div>
								<div class="w-2/12">{{article.quantity}}</div>
								<div class="w-6/12">
									<div
										class="bg-blue-600 rounded h-[5px]"
										v-bind:style="{ width:  article.progress + '%' }"
									></div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div class="mt-2">
				<div v-if="store.state.transactions.length === 0">No transaction to show</div>
				<div
					v-for="transaction in transactions"
					:key="transaction"
					class=""
				>
					<div class="flex flex-row p-2 items-center bg-white shadow mb-2">
						<div class="w-2/12 flex justify-center">#{{transaction.id}}</div>
						<div class="w-2/12 flex justify-center">{{transaction.totalPrice}} €</div>
						<div class="w-7/12">
							<div
								v-for="article in transaction.cart"
								:key="article"
								class="flex flex-row"
							>
								<div class="w-4/12 text-right"> {{article.quantity}}</div>
								<div class="pl-3"> {{article.name}} </div>
							</div>
						</div>
						<div class="w-1/12 flex justify-center">
							<button
								class="w-12 h-12 text-center cursor-pointer hover:bg-red-100 rounded-full text-red-500"
								@click="removeArticle(article.id, article.name)"
							> <i class="far fa-trash-alt"></i> </button>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
	setup() {
		const store = useStore();

		const transactions = computed(() => {
			return store.state.transactions.slice(0).reverse();
		});

		return { store, transactions };
	},
});
</script>
