import CrudTable from './components/CrudTable.vue';
import CrudForm from './components/CrudForm.vue';
import CrudFormGroup from './components/CrudFormGroup.vue';

export function install(Vue) {
  if (install.installed) {
    return;
  }

  install.installed = true;
  Vue.component('CrudTable', CrudTable);
  Vue.component('CrudForm', CrudForm);
  Vue.component('CrudFormGroup', CrudFormGroup);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default {
  CrudTable,
  CrudForm,
  CrudFormGroup,
};
