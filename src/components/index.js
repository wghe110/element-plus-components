import Upload from './Upload/index.vue'
import AddressSelect from './AddressSelect/index.vue'
import CarNoInput from './CarNoInput/index.vue'
import DateRangePicker from './DateRangePicker/index.vue'
import CustomDateRangePicker from './CustomDateRangePicker/index.vue'
import Location from './Location/index.vue'
import ActionBtns from './ActionBtns/index.vue'

const customPlus = {
  install(Vue, options) {
    // 组件
    Vue.component('c-upload', Upload);
    Vue.component('c-address-select', AddressSelect);
    Vue.component('c-car-number-input', CarNoInput);
    Vue.component('c-date-range-picker', DateRangePicker);
    Vue.component('c-custom-date-range-picker', CustomDateRangePicker);
    Vue.component('c-location', Location);
    Vue.component('c-action-btns', ActionBtns);
  }
}


export default customPlus;