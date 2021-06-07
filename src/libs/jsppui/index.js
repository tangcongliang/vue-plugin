import Crousel from './components/Crousel/Crousel.vue';
import CarItem from './components/Crousel/item.vue'
let JsppUi={};
JsppUi.install=function(Vue){
    Vue.component(Crousel.name,Crousel)
    Vue.component(CarItem.name,CarItem)
}
export default JsppUi