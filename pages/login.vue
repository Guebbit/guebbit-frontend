<template>
	<div>
		<h1>LOGIN PAGE</h1>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { LocaleMessages } from 'vue-i18n';

import headMaker from '../plugins/headMaker';

export default Vue.extend({
	name: 'login-page',
	head(){
		const { meta, htmlAttrs } = (this as any).$nuxtI18nHead();
		return headMaker({
			title: this.$t('website.login.meta.title') as string,
			description: this.$t('website.login.meta.description') as string,
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
	},
});
</script>
