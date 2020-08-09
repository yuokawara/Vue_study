<template>
  <div id="app">
    <button class="btn btn-primary" @click="login()">Twitterでログイン</button>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      // request_tokenの取得
      fetch('<Request Token取得APIのURI>', {method:"POST"})
    .then( response => {
      return response.text()
    })
    .then( auth_token => {
      // 取得したrequest_tokenを使ってTwitterの認証画面に遷移
      window.location.href = 'https://api.twitter.com/oauth/authorize?' + auth_token
    })
    .catch( () => {
    });
  }}
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>