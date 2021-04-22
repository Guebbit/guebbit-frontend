<template>
	<v-app-bar
		fixed
		app
	>
		<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
		<v-toolbar-title v-text="title" />
	</v-app-bar>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
	name: 'admin-main-header',
	data () {
		return {
			drawer: true,
		}
	},
	props: {
		title: {
			type: String,
			default: () => {
				return '';
			}
		} as PropOptions<string>,
	},
});
</script>
