var app = new Vue({
    el: '#app',
    data: {
        colors: [
            { name: 'red'},
            { name: 'blue'},
            { name: 'green'},
        ],
    },
    watch: {
        colors: {
            handler: function(newValue, oldValue) {
                console.log('update')
            },
            deep: true
        }
    },
})