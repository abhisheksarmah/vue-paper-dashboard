<template>
	<div
		class="popup d-block"
		data-pd-popup="popupNew"
	>
		<div class="popup-inner">
			<h4 class="m-0 mb-4">{{title}}</h4>
			<a
				class="popup-close"
				data-pd-popup-close="popupNew"
				href="#"
				role="button"
				@click="closeModal"
			> </a>
			<slot></slot>
		</div>
		sdsdf
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		close: {
			type: Function,
		},
	},
	data() {
		return {
			showModal: true,
		};
	},
	methods: {
		closeModal() {
			this.close();
		},
	},
};
</script>

<style lang="scss" scoped>
.popup {
	width: 100%;
	height: 100%;
	display: none;
	position: fixed;
	top: 0px;
	left: 0px;
	background: rgba(#000, 0.75);
	text-align: center;
	z-index: 999;
	overflow: hidden;
	overflow-y: auto;

	&:before {
		content: "";
		display: inline-block;
		height: 100%;
		margin-right: -4px;
		vertical-align: middle;
	}

	&-inner {
		display: inline-block;
		text-align: left;
		vertical-align: middle;
		position: relative;
		max-width: 700px;
		width: 90%;
		padding: 40px;
		box-shadow: 0px 2px 6px #000;
		border-radius: 3px;
		background: #fff;
		// text-align: center;

		h1 {
			font-family: "Roboto Slab", serif;
			font-weight: 700;
		}

		p {
			font-size: 24px;
			font-weight: 400;
		}
	}

	&-close {
		width: 34px;
		height: 34px;
		line-height: 34px;
		display: inline-block;
		position: absolute;
		top: 30px;
		right: 30px;
		-webkit-transform: translate(50%, -50%);
		transform: translate(50%, -50%);
		border-radius: 50%;
		background: transparent;
		border: solid 4px #808080;

		&:after,
		&:before {
			content: "";
			position: absolute;
			top: 11px;
			left: 5px;
			height: 4px;
			width: 16px;
			border-radius: 30px;
			background: #808080;
			-webkit-transform: rotate(45deg);
			transform: rotate(45deg);
		}

		&:after {
			-webkit-transform: rotate(-45deg);
			transform: rotate(-45deg);
		}

		&:hover {
			-webkit-transform: translate(50%, -50%) rotate(180deg);
			transform: translate(50%, -50%) rotate(180deg);
			background: #cacaca;
			text-decoration: none;
			border-color: #cacaca;

			&:after,
			&:before {
				background: #fff;
			}
		}
	}
}
</style>
