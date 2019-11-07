import VueMyToastPlugin from './mytoast.vue'

const mytoastPlugin = {
    install: function(Vue) {
        Vue.component(VueMyToastPlugin.name,VueMyToastPlugin);
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(mytoastPlugin)
}

export default mytoastPlugin;