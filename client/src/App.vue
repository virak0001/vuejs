<template>
  <v-app>
    <Navegation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navegation from "./components/Navegation";

export default {
  name: "App",
  components: {
    Navegation
  }
};
</script>
