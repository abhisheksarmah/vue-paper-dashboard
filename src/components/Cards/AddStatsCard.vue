<template>
  <div>
    <form @submit.prevent="submitStatData">
      <div class="form-group">
        <label class="control-label">
          Stat Type
        </label>
        <select name="type" class="custom-select" v-model="newStat.type">
          <option value="info">info</option>
          <option value="success">success</option>
          <option value="warning">warning</option>
        </select>
      </div>
      <div class="form-group">
        <label class="control-label">
          Stat Icon
        </label>
        <select name="icons" class="custom-select" v-model="newStat.icon">
          <option :value="icon.icon" v-for="icon in icons" :key="icon.icon">
            {{ icon.icon }}
          </option>
        </select>
      </div>
      <fg-input label="Stat Title" v-model="newStat.title"> </fg-input>
      <fg-input label="Stat Value" v-model="newStat.value"> </fg-input>
      <fg-input label="Stat Footer Text" v-model="newStat.footerText">
      </fg-input>
      <div class="form-group">
        <label class="control-label">
          Stat Footer Icon
        </label>
        <select name="icons" class="custom-select" v-model="newStat.footerIcon">
          <option :value="icon.icon" v-for="icon in icons" :key="icon.icon">
            {{ icon.icon }}
          </option>
        </select>
      </div>
      <p-button round native-type="submit">Submit</p-button>
    </form>
  </div>
</template>

<script>
import icons from "@/plugins/icons.json";
export default {
  name: "AddStatsCard",
  props: {
    submit: {
      type: Function
    }
  },
  data() {
    return {
      icons: icons,
      newStat: {
        type: "warning",
        icon: "ti-server",
        title: "Capacity",
        value: "105GB",
        footerText: null,
        footerIcon: null
      }
    };
  },
  methods: {
    submitStatData() {
      this.submit(this.newStat);
    }
    // Pass a value to the parent through the function
  }
};
</script>

<style lang="scss" scoped></style>
