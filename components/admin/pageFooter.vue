<template>
	<v-footer>
		<span>&copy; {{ new Date().getFullYear() }}</span>
	</v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'admin-main-footer',
});
</script>
