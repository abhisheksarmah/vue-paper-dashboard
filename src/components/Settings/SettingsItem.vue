<template>
	<div class="d-flex justify-content-between mb-4">
		<div>
			<h4 class="card-title">{{item.title}}</h4>
			<p class="card-category">{{item.subTitle}}</p>
		</div>
		<div class="custom-control custom-switch d-flex">
			<input
				type="checkbox"
				class="custom-control-input"
				:id="`customSwitch${item.id}`"
				:value="item.dataProperty"
				@change="checkHandler(item.handlerRoot, item.handler)"
			>
			<label
				class="custom-control-label"
				:for="`customSwitch${item.id}`"
			>{{settingValue}}</label>
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
		checkHandler: {
			type: Function,
		},
	},
	computed: {
		settingValue() {
			let value = this[`${this.item.handlerRoot}`][
				this.item.dataProperty
			];
			if (typeof value == "boolean") {
				return value ? "Yes" : "No";
			}
			return value;
		},
	},
};
</script>

<style lang="scss" scoped>
</style>
