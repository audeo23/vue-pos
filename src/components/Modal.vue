<template>
	<div
		id="modal"
		class="flex flex-row justify-center items-center pt-10"
	>
		<div class="ctn bg-white p-4 rounded-lg">
			<div class="flex flex-row">
				<div class="flex-1 text-xl font-bold pb-5">
					<slot name="title">Modal tile</slot>
				</div>
				<button
					class=" h-8 w-8 leading-8 text-center hover:bg-gray-100 rounded-full"
					@click="$emit('close')"
				>
					<i class="fas fa-times"></i>
				</button>

			</div>
			<slot name="content">Modal body</slot>
			<div class="pt-10">
				<slot name="footer">Modal footer</slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	emits: ['close'],
	setup() {
		return {};
	},
});
</script>

<style scoped>
#modal {
	position: absolute;
	background-color: rgba(17, 24, 39, 0.5);
	top: 0%;
	left: 0%;
	width: 100%;
	height: 100%;
	z-index: 9999;
}
.ctn {
	/* max-height: 300px; */
	min-width: 500px;
}
</style>