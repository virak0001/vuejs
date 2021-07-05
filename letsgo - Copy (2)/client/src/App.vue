
<template>
  <div id="app">
    <Navegation
		:nav-links="navLinks"
		:image-path="require('./assets/logo.png')"
		background="#fff"
		link-color="#777"
		hoverBackground="#ddd"
    />
    <div class="main">
      <User/>
      <Home/>
    </div>
  </div>
</template>

<script>
import Navegation from "./components/Navegation";
import User from "./components/users/users";
import Home from "./views/Home";
export default {
  components: {
    Navegation,
    User,
    Home
  },
  props:['marigin'],
  data: () => ({
    navLinks: [
      {
        text: 'Explore',
        path: '/explore',
        icon: 'explore'
      },
      {
        text: 'Your event',
        path: '/yourevent',
        icon: 'event'
      },
      {
        text: 'Manage',
        path: '/blog',
        icon: 'settings'
      },
      {
        text: 'Profile',
        path: '/profile',
        icon: 'person'
      }
    ]
  })
}
</script>

<style lang="scss">
figure {
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 10px;
	margin-inline-end: 0;
}
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
