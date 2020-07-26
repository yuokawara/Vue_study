// コンポーネントの練習 Vue.component(コンポーネント名, コンポーネント定義)
Vue.component('hello-conponent', {
    // templateを定義
    template: '<p>Hello</p>',
})



var app = new Vue({
    el: '#app',
    data: {
        // tutorial
        message: 'hello vue',
        toggle: true,
        toggle2: true,
        languages: ['Ruby', 'Python', 'Dart'],

        // v-for
        user: {
            firstName: 'Fujikido',
            lastName: 'NinjaSlayer',
            age: 30,
        },

        // v-on
        now: '',
    },
    // eventhandler ボタンを押したら時刻表示の処理
    methods: {
        onclick: function () {
            // alert('ボタン押したよー')
            this.now = new Date().toLocaleString();
            this.message = '変わったよー';
            this.languages = ['Java', 'HTML', 'CSS','Go']
        }
    },
})