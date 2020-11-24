<template>
  <div id="app">
    <router-view />
    <div id="nav">
      <router-link to="/">Your ToDos</router-link> |
      <router-link to="/create">Create a ToDo</router-link>
    </div>
  </div>
</template>

<style>
body {
  background-color: #ececec;
  margin: 0;
}
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #474747;
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(assets/back.png);
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  border-radius: 12px;
  width: 80%;
  height: 10px;
  align-self: center;
  align-items: center;
  position: fixed;
  bottom: 2%;
}

#nav a {
  font-weight: bold;
  color: #474747;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #FEAD34;
}
</style>
