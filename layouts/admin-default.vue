<template>
	<v-app dark>
		<page-header
			:title="'test'"
		/>
		<page-drawer />

		<v-main>
			<v-container>
				<nuxt />
			</v-container>
		</v-main>

		<modal-compatibility
			:show="!isCompatible && compatibilityModal"
			@input="(value) => compatibilityModal = value"
		/>

		<v-footer />
	</v-app>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';

import layoutDefaultStructure from './mixins/layoutDefaultStructure';
import pageHeader from '@/components/admin/pageHeader.vue';
import pageDrawer from '@/components/admin/pageDrawer.vue';
import pageFooter from '@/components/admin/pageFooter.vue';
import modalCompatibility from '@/components/generic/modals/modalCompatibility.vue';

//export default (Vue as VueConstructor<Vue & InstanceType<typeof layoutDefaultStructure>>).extend({
export default Vue.extend({
	name: 'admin-default-layout',
	mixins: [
		layoutDefaultStructure,
	],
	components: {
		pageHeader,
		pageDrawer,
		pageFooter,
		modalCompatibility,
	},
});
</script>
