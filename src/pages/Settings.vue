<template>
	<div class="row">
		<div class="col-12">
			<card>
				<div class="row">
					<div class="col-12">
						<settings-item
							v-for="item in $root.allSettings"
							:key="item.id"
							:item="item"
						></settings-item>
					</div>
				</div>
			</card>
		</div>
	</div>
</template>
<script>
import { SettingsItem } from "@/components";

export default {
	components: {
		SettingsItem,
	},
};
</script>
<style></style>
