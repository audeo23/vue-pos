<template>
	<div class="overflow-auto w-full">
		<div class="max-w-[1000px] m-auto px-3 py-4">
			<h1 class="font-bold text-4xl pb-4">Settings</h1>
			<div class="bg-white shadow p-4 text-lg">
				<div class="flex flex-row mb-2">
					<h2 class="flex-1 font-bold text-2xl pb-2">Edit articles</h2>
					<button
						class="self-center bg-blue-800 hover:bg-blue-700 text-white rounded-full px-5 py-1 font-bold text-base"
						@click="modalContext = 'NewArticle'"
					><i class="fas fa-plus pr-2"></i> Add an article</button>
				</div>
				<div class="flex flex-row font-bold py-2 border-b text-lg">
					<div class="flex-1">Article</div>
					<div class="w-2/12">Price</div>
					<div class="w-1/12"></div>
					<div class="w-1/12"></div>
				</div>
				<div
					v-for="article in articles"
					:key="article"
					class="flex flex-row border-b last:border-0 py-1 items-center"
				>
					<div class="flex-1"> {{article.name}} </div>
					<div class="w-2/12"> {{article.price}} €</div>
					<div class="w-1/12">
						<div
							class="w-10 h-10 leading-[2.5rem] text-center cursor-pointer hover:bg-gray-100 rounded-full text-gray-500"
							@click="editArticle(article)"
						> <i class="far fa-edit"></i> </div>
					</div>
					<div class="w-1/12">
						<div
							class="w-10 h-10 leading-[2.5rem] text-center cursor-pointer hover:bg-red-100 rounded-full text-red-500"
							@click="removeArticle(article.id, article.name)"
						> <i class="far fa-trash-alt"></i> </div>
					</div>
				</div>
			</div>
			<div class="bg-white shadow p-4 mt-3 flex flex-row justify-around text-base">
				<button
					class="hover:bg-gray-100 rounded-full py-1 px-4"
					@click="loadDemo()"
				>
					<i class="far fa-file-alt pr-2"></i> Load demo data
				</button>
				<button
					class="hover:bg-red-100 rounded-full text-red-500 py-1 px-4"
					@click="deleteAllData()"
				>
					<i class="far fa-trash-alt pr-2"></i> Delete all data
				</button>
			</div>

			<!-- Modal to create a new article -->
			<Modal
				@close="closeModal"
				v-show="modalContext === 'NewArticle' "
			>
				<template v-slot:title>
					Add an article
				</template>
				<template v-slot:content>
					<div class="flex flex-row items-center mb-2">
						<div class="w-5/12">Article name</div>
						<input
							class="border-2 border-gray-100 p-2"
							v-model="newArticle.name"
							placeholder="Article name"
							type="text"
						>
					</div>
					<div class="flex flex-row  items-center mb-2">
						<div class="w-5/12">Price (€)</div>
						<input
							class="border-2 border-gray-100 p-2"
							v-model="newArticle.price"
							type="number"
						>
					</div>
				</template>
				<template v-slot:footer>
					<div class="flex justify-around flex-row">
						<button
							@click="closeModal"
							class="hover:bg-gray-100 rounded-full px-3"
						>Cancel</button>
						<button
							@click="addArticle(newArticle)"
							class="hover:bg-blue-100 rounded-full px-3 h-8 text-blue-800 font-bold"
						>Add article</button>
					</div>
				</template>
			</Modal>

			<!-- Modal to edit an article -->
			<Modal
				@close="closeModal"
				v-show="modalContext === 'EditArticle' "
			>
				<template v-slot:title>
					Edit an article
				</template>
				<template v-slot:content>
					<div class="flex flex-row items-center mb-2">
						<div class="w-5/12">Article name</div>
						<input
							class="border-2 border-gray-100 p-2"
							v-model="articleEdited.name"
							placeholder="Nom de l'article"
							type="text"
						>
					</div>
					<div class="flex flex-row  items-center mb-2">
						<div class="w-5/12">Price (€)</div>
						<input
							class="border-2 border-gray-100 p-2"
							v-model="articleEdited.price"
							type="number"
						>
					</div>
				</template>
				<template v-slot:footer>
					<div class="flex justify-around flex-row">
						<button
							@click="closeModal"
							class="hover:bg-gray-100 rounded-full px-3"
						>Cancel</button>
						<button
							@click="saveEdition(articleEdited)"
							class="hover:bg-blue-100 rounded-full px-3 h-8 text-blue-800 font-bold"
						>Save article</button>
					</div>
				</template>
			</Modal>

		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import router from '../router/router';
import Modal from '../components/Modal.vue';
import { Article } from '../../types';

export default defineComponent({
	components: {
		Modal,
	},
	setup() {
		// STORE
		const store = useStore();
		const articles = computed(() => store.state.articles);

		// ADD AN ARTICLE
		var newArticle: Article = { id: 0, name: '', price: 2 };

		function addArticle(newArticle: Article) {
			store.commit('addArticle', {
				id: newArticle.id,
				name: newArticle.name,
				price: newArticle.price,
			});
			newArticle.name = '';
			newArticle.price = 2;
			modalContext.value = 'Hidden';
		}

		// EDIT AN ARTICLE
		var articleEdited: Article = reactive({ id: 0, name: '', price: 2 });

		function editArticle(article: Article) {
			modalContext.value = 'EditArticle';
			articleEdited.id = article.id;
			articleEdited.name = article.name;
			articleEdited.price = article.price;
		}

		function saveEdition(articleEdited: Article) {
			store.commit('saveEdition', articleEdited);
			modalContext.value = 'Hidden';
		}

		// DELETE AN ARTICLE
		function removeArticle(articleID: number, articleName: string) {
			if (window.confirm('Delete article "' + articleName + '" ?')) {
				store.commit('removeArticle', articleID);
			}
		}

		// DELETE ALL DATA
		function deleteAllData() {
			if (window.confirm('Delete all data ?')) {
				store.commit('deleteAllData');
			}
		}

		// LOAD DEMO MODE
		function loadDemo() {
			router.push('demo');
		}

		// SHARED MODAL
		var modalContext = ref<'Hidden' | 'NewArticle' | 'EditArticle'>('Hidden');

		function closeModal() {
			newArticle.name = '';
			newArticle.price = 2;
			modalContext.value = 'Hidden';
		}

		// FEATURE : MODAL EDIT AN ARTICLE

		return {
			articles,
			newArticle,
			addArticle,
			removeArticle,
			editArticle,
			// MODAL
			modalContext,
			articleEdited,
			saveEdition,
			closeModal,
			deleteAllData,
			loadDemo,
		};
	},
});
</script>
