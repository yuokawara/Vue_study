var app = new Vue({
    el: '#app',
    data: {
        color: 'red',
        counter: 0,
        message: ''
    },
    methods: {
        clickHandler: function($event, message) {
            this.message = new Date().toLocaleTimeString()
            this.counter++
            console.log($event)
        }
    },
    watch: {},
})