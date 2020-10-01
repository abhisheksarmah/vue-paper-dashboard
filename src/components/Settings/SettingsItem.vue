<template>
	<div class="d-flex justify-content-between mb-4">
		<div>
			<h4 class="card-title">{{item.title}}</h4>
			<p class="card-category">{{item.description}}</p>
		</div>
		<label class="switch">
			<input
				type="checkbox"
				:id="`checkbox${item.name}`"
				v-model="$root.settings[item.name]['status']"
			/>
			<div class="slider round"></div>
		</label>
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
	data() {
		return {
			itemData: this.item,
		};
	},
	methods: {
		handleChecked(item) {
			console.log(item);
		},
	},
};
</script>

<style lang="scss" scoped>
.switch {
	border-radius: 999px;
	display: inline-block;
	height: 1rem;
	position: relative;
	width: 2.5rem;
	box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}

.switch input {
	display: none;
}

.slider {
	bottom: 0;
	cursor: pointer;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	transition: 0.4s;
	background-color: rgba(203, 213, 224, 1);
}

.slider:before {
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	background-color: #fff;
	bottom: -4px;
	content: "";
	height: 26px;
	left: -2px;
	position: absolute;
	transition: 0.4s;
	width: 26px;
}

input:checked + .slider:before {
	background-color: #66bb6a;
}

input:checked + .slider:before {
	transform: translateX(20px);
}

.slider.round {
	border-radius: 34px;
}

.slider.round:before {
	border-radius: 50%;
}
</style>

