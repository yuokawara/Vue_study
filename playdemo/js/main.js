Vue.filter('toUSD', function(jpy) {
    return jpy / 100
})

Vue.filter('numberFormat', function(value) {
    return value.toLocaleString()
})

Vue.filter('readMore', function(text, length, suffix) {
    return text.substring(0, length) + suffix
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'hello Vue',
        message1: 'テンプレート Test <span style="color:red;">ここが赤くなる!</span>',
        message2: 'V-cloakを表示テスト',
        message3: 'V-textの表示テスト中',
        number: 100,
        ok: true,
        price: 30000,
        jpyprice: 3150000,
        text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
    },
    // filters: {
    //     numberFormat: function (value) {
    //         return value.toLocaleString()
    //     }
    // },
    methods: {
        clickHandler: function(event) {
            this.message = this.message.split('').reverse().join('')
        }
    },
})