<template>
	<v-app-bar
		ref="mainHeader"
		fixed
		app
	>
		<v-toolbar-title v-text="'guebbit'" />
	</v-app-bar>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import { shyScroll } from 'guebbit-javascript-library';

interface vueRefsMap {
	$refs: {
		//mainHeader :HTMLElement,
		mainHeader :any
	}
}

export default (Vue as VueConstructor<Vue & vueRefsMap>).extend({
	name: 'website-main-header',
	mounted(){
		shyScroll(this.$refs.mainHeader.$el);
	}
});
</script>
