<template>
	<div>

		<transition name="fade">
			<div
				id="ctn"
				class="bg-gray-900 text-white shadow py-3 px-5 rounded flex flex-row items-center"
				v-if="showing"
			>
				<div>{{message}}</div>
				<button
					class="ml-5 w-8 h-8 leading-8 rounded-full flex flex-row justify-center items-center
							focus:ring focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:bg-gray-500
							focus:outline-none
							hover:bg-gray-500"
					@click="close()"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="white"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
	props: {
		message: String,
	},
	// eslint-disable-next-line
	setup(props) {
		let showing = ref(false);

		onMounted(() => (showing.value = true));

		function close() {
			showing.value = false;
		}

		return { showing, close };
	},
});
</script>

<style scoped>
#ctn {
	position: absolute;
	left: 5%;
	bottom: 5%;
}

.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: translateY(40%);
}
</style>
