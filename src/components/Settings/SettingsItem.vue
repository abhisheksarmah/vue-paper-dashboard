<template>
	<div class="d-flex justify-content-between mb-4">
		<div>
			<h4 class="card-title">{{item.title}}</h4>
			<p class="card-category">{{item.description}}</p>
		</div>
		<div class="custom-control custom-switch d-flex">
			<input
				type="checkbox"
				class="custom-control-input"
				:id="`customSwitch${item.name}`"
				:value="item.status"
				v-model="$root.settings[item.name]['status']"
			>
			<label
				class="custom-control-label"
				:for="`customSwitch${item.name}`"
			>{{item.status}}</label>
		</div>
	</div>
</template>

<script>
export default {
	name: "SettingsItem",
	props: {
		item: {
			type: Object,
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
