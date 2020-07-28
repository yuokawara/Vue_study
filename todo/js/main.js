var app = new Vue({
    el: '#app',
    data: {
        newEvent: '',
        events: [],
        now: '',
    },
    methods: {
        addEvent: function (event) {
            if (this.newEvent == '') return alert('empty');
            var event = {
                item: this.newEvent,
                isDone: false,

            };
            this.events.push(event);
            this.newEvent = '';

            this.now = new Date().toLocaleString();
        },

        deleteEvent: function (index) {
            // alert(index, 'is this delete?');
            this.events.splice(index, 1);
        },

        alldeleteEvent: function (index) {
            this.events.splice(index);
        }
    },
})