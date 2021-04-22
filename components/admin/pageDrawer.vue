<template>
	<v-navigation-drawer
			v-model="drawer"
			fixed
			app
		>
		<v-list>
			<v-list-item
				v-for="(item, i) in items"
				:key="i"
				:to="item.to"
				router
				exact
			>
				<v-list-item-action>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-action>
				<v-list-item-content>
					<v-list-item-title v-text="item.title" />
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'admin-main-drawer',
	data () {
		return {
			drawer: true,
			items: [
				{
					icon: 'mdi-apps',
					title: 'Welcome',
					to: '/'
				},
				{
					icon: 'mdi-chart-bubble',
					title: 'Inspire',
					to: '/'
				}
			],
		}
	},
});
</script>
