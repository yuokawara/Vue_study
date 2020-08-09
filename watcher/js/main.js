var app = new Vue({
    el: '#app',
    data: {
        message: 'watcherテスト'
    },
    watch: {
        message: function(newValue, oldValue) {
            console.log('new: %s, old: %s', newValue, oldValue)
        }
    },
})