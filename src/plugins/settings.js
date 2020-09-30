import settings from "./settings.json";
Object.filter = (obj, predicate) =>
  Object.keys(obj)
  .filter(key => predicate(obj[key]))
  .reduce((res, key) => ((res[key] = obj[key]), res), {});

const Settings = {
  install: function install(Vue, options) {
    Vue.mixin({
      data: function data() {
        return {
          settings
        };
      },
      computed: {
        allSettings() {
          if (!this.settings.adminRole.status) {
            return Object.filter(
              this.settings,
              setting => setting.defaultAccess
            );
          }
          return this.settings;
        }
      }
    });
  }
};

export default Settings;
