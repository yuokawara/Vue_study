var app = new Vue({
    el: '#app',
    data: {
        newEvent: '',
        events: [],
        now: '',
        imageData: '',
    },
    methods: {
        addEvent: function (event) {
            if (this.newEvent == '') return alert('未入力です');
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
        },

        // 画像追加
        onFileChange(e) {
            const files = e.target.files;
            if(files.length > 0)  {
                const file = files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                };
                reader.readAsDataURL(file)
            }
        },
        resetFile() {
            const input = this.$refs.file;
            input.type = 'text';
            input.type = 'file';
            this.imageData = '';
        }
    },
})