var app = new Vue({
    el: '#app',
    data: {
        FirstName: '',
        LastName: '',
        // FullName: '',
    },
    // watch: {
    //     FirstName: function(value) {
    //         this.FullName = value + ' ' + this.LastName
    //     },
    //     LastName: function (value) {
    //         this.FullName = this.FirstName + ' ' + value
    //     },
    // },

    // 算出プロパティの方が楽に書ける
    computed: {
        FullName: function() {
            return this.FirstName + ' ' + this.LastName
        }
    },
})