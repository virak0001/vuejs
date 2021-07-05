<template>
  <v-app-bar app :style="{ background: background || 'blue' }">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>
    <v-spacer></v-spacer>
    <ul>
      <li
        v-for="link in navLinks"
        :key="link.id"
        @mouseenter="
          $event.currentTarget.style.background = hoverBackground || '#189CB3'
        "
        @mouseleave="
          $event.currentTarget.style.background = background || 'blue'
        "
      >
        <router-link :to="link.path" :style="{ color: linkColor || '#DDD' }">
          <span class="material-icons menu-icons">{{ link.icons }}</span>
          {{ link.text }}
        </router-link>
      </li>
    </ul>
  </v-app-bar>
</template>
<script>
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader
export default {
  props: ["linkColor", "hoverBackground", "background"],
  data: () => ({
    navLinks: [
      {
        text: "Explore",
        path: "/exploreEvent",
        icons: "explore"
      },
      {
        text: "Your event",
        path: "/yourEvent",
        icons: "event"
      },
      {
        text: "Manage",
        path: "",
        icons: "settings"
      },
      {
        text: "Profile",
        path: "",
        icons: "person"
      }
    ]
  })
};
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  li {
    list-style: none;
    padding: 10px;
    a {
      text-decoration: none;
      display: flex;
      margin-left: 20px;
    }
  }
}
</style>
