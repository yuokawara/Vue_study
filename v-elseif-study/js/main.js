var app = new Vue({
    el: '#app',
    data: {
        colors: [],
        color2: [],
        counter: 0,
        message: '',
        selected: []
    },
    methods: {
        clickHandler: function($event, message) {
            this.message = new Date().toLocaleTimeString()
            this.counter++
            console.log($event)
        },
        clear: function() {
            this.message = ''
        }
    },
    watch: {},
})