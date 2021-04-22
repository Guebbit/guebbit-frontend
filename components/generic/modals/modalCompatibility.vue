<template>
	<v-dialog
		v-model="trueShow"
	>
		<template v-slot:modal-header>
			<h5 class="theme-modal-title">{{ $t('generic.old-browser-modal-title') }}</h5>
			<b-link class="theme-close-btn"
				@click="emitClose"
			>
				fa-times
			</b-link>
		</template>
		<div class="theme-modal-body text-center">
			<p>
				{{ $t('generic.old-browser-modal-title') }},
				{{ $t('generic.old-browser-modal-text') }}
			</p>
		</div>
		<template v-slot:modal-footer>
			<b-button variant="light"
				href="https://www.google.com/intl/it_it/chrome/"
				target="_blank"
			>
				{{ $t('generic.chrome') }}
				chrome-browser
			</b-button>
			<b-button variant="light"
				href="https://www.mozilla.org/it/firefox/new/"
				target="_blank"
			>
				{{ $t('generic.firefox') }}
				firefox-browser
			</b-button>
		</template>
	</v-dialog>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';

import showStructureMixin from './mixin/defaultShowStructure';

export default (Vue as VueConstructor<Vue & InstanceType<typeof showStructureMixin>>).extend({
	name: 'compatibility-modal',
	mixins: [
		showStructureMixin,
	],
});
</script>
