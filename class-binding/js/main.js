var app = new Vue({
    el: '#app',
    data: {
        isLarge: true,
        hasError: true,
        // largeClass: 'large',
        // dangerClass: 'text-danger',
        largeClass: {
            large: true,
            'bg-gray': true
        },
        dangerClass: {
            'text-danger': true
        }
    },
    
})