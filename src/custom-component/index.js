import Vue from 'vue'

const components = [
    'Picture',
    'VText',
    'VTable',
]

components.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/${key}/Component`))
    Vue.component(key + 'Attr', () => import(`@/custom-component/${key}/Attr`))
})
