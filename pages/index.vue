<template>
	<div>
		<h1>LANDING PAGE</h1>
		<h1>LANDING PAGE</h1>
		<br /><br /><br /><br /><br /><br />
		<br /><br /><br /><br /><br /><br />
		<h1>LANDING PAGE</h1>
		<h1>LANDING PAGE</h1>
		<br /><br /><br /><br /><br /><br />
		<br /><br /><br /><br /><br /><br />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { LocaleMessages } from 'vue-i18n';

import headMaker from '../plugins/headMaker';

export default Vue.extend({
	name: 'website-index',
	head(){
		const { meta, htmlAttrs } = (this as any).$nuxtI18nHead();
		return headMaker({
			title: this.$t('website.index.meta.title') as string,
			description: this.$t('website.index.meta.description') as string,
			meta: {
				...meta,
				...this.$t('website.index.meta.og') as LocaleMessages,
				"og:url": process.env.baseUrl + this.$router.currentRoute.path,
			},
			htmlAttrs: {
				//amp: true,
				...htmlAttrs,
			},
		});
	}
});
</script>
