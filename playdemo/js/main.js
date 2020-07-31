var app = new Vue({
    el: '#app',
    data: {
        message: 'hello Vue',
        message1: 'テンプレート Test <span style="color:red;">ここが赤くなる!</span>',
        message2: 'V-cloakを表示テスト',
        message3: 'V-textの表示テスト中',
        number: 100,
        ok: true,
    },
    methods: {
        clickHandler: function(event) {
            this.message = this.message.split('').reverse().join('')
        }
    },
})