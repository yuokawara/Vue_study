var app = new Vue({
    el: '#app',
    data: {
        km: 0,
        m: 0,
        cm: 0
    },
    watch: {
        km: function(value) {
            // console.log(value)
            this.km = value
            this.m = value * 1000
            this.cm = value * 1000000
        },
        m: function(value) {
            this.km = value / 1000
            this.m = value
            this.cm = value * 1000
        },
        cm: function(value) {
            this.km = value / 1000000
            this.m = value / 1000
            this.cm = value
        }
    },
})