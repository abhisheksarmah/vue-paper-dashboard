<template>
	<div>
		<!--Stats cards-->
		<div class="row">
			<div
				class="col-md-6 col-xl-3"
				v-for="stats in statsCards"
				:key="stats.id"
			>
				<stats-card>
					<div
						class="icon-big text-center"
						:class="`icon-${stats.type}`"
						slot="header"
					>
						<i :class="stats.icon"></i>
					</div>
					<div
						class="numbers"
						slot="content"
					>
						<p>{{ stats.title }}</p>
						{{ stats.value }}
					</div>
					<div
						v-if="stats.footerIcon && stats.footerText"
						class="stats"
						slot="footer"
					>
						<i :class="stats.footerIcon"></i> {{ stats.footerText }}
					</div>
				</stats-card>
			</div>
			<div class="col-md-6 col-xl-3">
				<a
					role="button"
					@click.prevent="showModal = !showModal"
					class="d-block"
				>
					<stats-card>
						<div
							class="icon-big text-center icon-success"
							slot="header"
						>
							<i class="ti-plus"></i>
						</div>
						<div
							class="numbers"
							slot="content"
						>
							<p>New</p>
							Statistics
						</div>
					</stats-card>
				</a>
			</div>
		</div>
		<p-modal
			:close="handleModalClose"
			v-if="showModal"
			title="Add a new Statistics Card"
		>
			<add-stats-card :submit="addNewStat" />
		</p-modal>
	</div>
</template>
<script>
import { StatsCard, ChartCard, AddStatsCard } from "@/components/index";
import Chartist from "chartist";
export default {
	name: "Dashboard",
	components: {
		StatsCard,
		ChartCard,
		AddStatsCard,
	},
	/**
	 * Chart data used to render stats, charts. Should be replaced with server data
	 */
	data() {
		return {
			showModal: false,
			statsCards: [
				{
					id: 1,
					type: "warning",
					icon: "ti-server",
					title: "Capacity",
					value: "105GB",
					footerText: "Updated now",
					footerIcon: "ti-reload",
				},
				{
					id: 2,
					type: "success",
					icon: "ti-wallet",
					title: "Revenue",
					value: "$1,345",
					footerText: "Last day",
					footerIcon: "ti-calendar",
				},
				{
					id: 3,
					type: "danger",
					icon: "ti-pulse",
					title: "Errors",
					value: "23",
					footerText: "In the last hour",
					footerIcon: "ti-timer",
				},
				{
					id: 4,
					type: "info",
					icon: "ti-twitter-alt",
					title: "Followers",
					value: "+45",
					footerText: "Updated now",
					footerIcon: "ti-reload",
				},
			],
			usersChart: {
				data: {
					labels: [
						"9:00AM",
						"12:00AM",
						"3:00PM",
						"6:00PM",
						"9:00PM",
						"12:00PM",
						"3:00AM",
						"6:00AM",
					],
					series: [
						[287, 385, 490, 562, 594, 626, 698, 895, 952],
						[67, 152, 193, 240, 387, 435, 535, 642, 744],
						[23, 113, 67, 108, 190, 239, 307, 410, 410],
					],
				},
				options: {
					low: 0,
					high: 1000,
					showArea: true,
					height: "245px",
					axisX: {
						showGrid: false,
					},
					lineSmooth: Chartist.Interpolation.simple({
						divisor: 3,
					}),
					showLine: true,
					showPoint: false,
				},
			},
			activityChart: {
				data: {
					labels: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"Mai",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec",
					],
					series: [
						[
							542,
							543,
							520,
							680,
							653,
							753,
							326,
							434,
							568,
							610,
							756,
							895,
						],
						[
							230,
							293,
							380,
							480,
							503,
							553,
							600,
							664,
							698,
							710,
							736,
							795,
						],
					],
				},
				options: {
					seriesBarDistance: 10,
					axisX: {
						showGrid: false,
					},
					height: "245px",
				},
			},
			preferencesChart: {
				data: {
					labels: ["62%", "32%", "6%"],
					series: [62, 32, 6],
				},
				options: {},
			},
		};
	},
	methods: {
		addNewStat(data) {
			this.statsCards.push(
				Object.assign({ id: this.statsCards.length + 1 }, data)
			);
			this.showModal = false;
		},
		handleModalClose() {
			this.showModal = false;
		},
	},
};
</script>
