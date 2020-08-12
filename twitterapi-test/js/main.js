var app = new Vue({
    el: '#app',
    data: {
       results: [],
    },
    mounted: function() {
        // axios
        axios.get('')
        .then(function(response){
            this.results = response.data.results
        }.bind(this))
        // .catch(function(error) {
        //     console.log(error)
        //     this.hasError = true
        // }.bind(this))
        // .finally(function(){
        //     this.loading = false
        // }.bind(this))
    },
})