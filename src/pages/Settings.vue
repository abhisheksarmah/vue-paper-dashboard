<template>
  <div class="row">
    <div class="col-12">
      <card>
        <div class="row">
          <div class="col-12">
            <settings-item
              v-for="item in settings"
              :key="item.id"
              :item="item"
              :checkHandler="checkedItem"
            ></settings-item>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { SettingsItem } from "@/components";
import DashboardVue from "./Dashboard.vue";
const settingsData = [
  {
    id: 1,
    title: "Side Menu Color",
    subTitle: "toggle side menu color",
    dataProperty: "backgroundColor",
    handler: "changeBackgroundColor",
    handlerRoot: "$sidebar"
  },
  {
    id: 2,
    title: "Side Menu Logo",
    subTitle: "show or hide the sidemenu logo",
    dataProperty: "showLogo",
    handler: "toggleBrandLogo",
    handlerRoot: "$sidebar"
  }
  // {
  // 	id: 3,
  // 	title: "Enable Email Statistics",
  // 	subTitle: "keep the email statistics on dashboard",
  // 	dataProperty: "hide",
  // 	handler: "hideChart",
  // 	handlerRoot: "$data",
  // },
];

export default {
  mixins: [DashboardVue],
  components: {
    SettingsItem
  },
  data() {
    return {
      settings: [...settingsData]
    };
  },
  methods: {
    checkedItem(root, handler) {
      this[`${root}`][`${handler}`]();
    }
  },
  created() {
    console.log(this);
  }
};
</script>
<style></style>
