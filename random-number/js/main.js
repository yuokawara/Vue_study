var app = new Vue({
    el: '#app',
    data: {},
    computed: {
        computedNumber: function() {
            return Math.random()
        }
    },
    methods: {
        methodsNumber: function() {
            return Math.random()
        }
    },
})