<template>
  <div id="app" class="bg-image"
      style="
        background-image: url('https://www.launch-marketing.com/wp-content/uploads/2012/01/GettyImages-1127556731.jpg');
        height: 100vh;
      ">
    <div class="navbar navbar-dark bg-success">
      <a class="navbar-brand" href="/"> App </a>
    </div>
    <div class="container pr-4">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
