<template>
	<div class="flex flex-row h-full w-full bg-gray-50 min-w-[1000px]">
		<div
			id="nav"
			class="flex flex-col font-bold w-12 min-w-[3rem] text-2xl bg-blue-800 text-white"
		>
			<router-link
				to="/entry"
				class="flex-1 flex justify-center items-center"
			>
				<div class="w-full text-center py-6">
					<i class="far fa-file-alt"></i>
				</div>
			</router-link>
			<router-link
				to="/history"
				class="flex-1 flex justify-center items-center"
			>
				<div class="w-full text-center py-6">
					<i class="far fa-chart-bar"></i>
				</div>
			</router-link>
			<router-link
				to="/settings"
				class="flex-1 flex justify-center items-center"
			>
				<div class="w-full text-center py-6">
					<i class="fas fa-sliders-h"></i>
				</div>
			</router-link>
		</div>
		<div class="flex-1 flex flex-row justify-center">
			<router-view class="flex-1" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
	setup() {
		const store = useStore();

		// STORE
		store.commit('loadData');

		return { store };
	},
});
</script>


<style scopped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
.router-link-active > div {
	background-color: rgb(249, 250, 251) !important;
	border-radius: 250% / 40%;
	color: rgba(30, 64, 175);
}
a > div:hover {
	background-color: rgba(249, 250, 251, 0.301);
	border-radius: 250% / 40%;
}
</style>

