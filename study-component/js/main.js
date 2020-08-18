Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">{{ count }}</button>'
})
// グローバルコンポーネント
// Vue.component('hello-component', {
//     template: '<p>hello</p>'
// })

var app = new Vue({
    el: '#app',
    // components: {
    //     'hello-component' : helloComponent
    // },
    data: {},
    watch: {},
})