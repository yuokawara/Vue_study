var app = new Vue({
    el: '#app',
    data: {
        items: null,
        keyword: '',
        message: '',
    },
    watch: {
        keyword: function(newkeyword, oldKeyword) {
            // console.log(newkeyword)
            this.message = '入力止まるまで待つよー'
            this.debouncedGetAnswer()
        }
    },
    created: function() {
        // this.keyword  ='Vue.js'
        // this.getAnswer()
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },
    methods: {
        getAnswer: function() {
            if(this.keyword === '') {
                this.items = null
                this.message = ''
                return
            }

            this.message = 'loading中'
            var vm = this
            var params = { page: 1, per_page: 20, query: this.keyword }
            axios.get('https://qiita.com/api/v2/items', { params })
            .then(function(response) {
                console.log(response)
                vm.items = response.data
            })
            .catch(function(error) {
                vm.message = 'errorですよ' + error
            })
            .finally(function() {
                vm.message = ''
            })
        }
    },
})