<template>
	<v-app dark>
		<page-header />

		<v-main>
			<v-container>
				<nuxt />
			</v-container>
		</v-main>

		<modal-compatibility
			:show="!isCompatible && compatibilityModal"
			@input="(value) => compatibilityModal = value"
		/>

		<page-footer />
	</v-app>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';

import layoutDefaultStructure from './mixins/layoutDefaultStructure';
import pageHeader from '@/components/website/pageHeader.vue';
import pageFooter from '@/components/website/pageFooter.vue';
import modalCompatibility from '@/components/generic/modals/modalCompatibility.vue';

//export default (Vue as VueConstructor<Vue & InstanceType<typeof layoutDefaultStructure>>).extend({
export default Vue.extend({
	name: 'website-default-layout',
	mixins: [
		layoutDefaultStructure,
	],
	components: {
		pageHeader,
		pageFooter,
		modalCompatibility,
	},
});
</script>
