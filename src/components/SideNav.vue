<template>
  <v-layout>
    <v-navigation-drawer
      theme="dark"
      v-model="drawer"
      :permanent="isPermanent"
      app
      class="sidebar"
      rail
      style="
        margin: 20px;
        border-radius: 5px;
        width: 5%;
        height: 95%;
        padding: 15px;
        outline: 0.5px solid #5e5e5e;
      "
      location="left"
    >
      <v-list color="transparent" density="compact" nav>
        <router-link to="/" class="links">
          <v-list-item prepend-icon="mdi-home" class="items"></v-list-item>
        </router-link>
        <router-link to="/design" class="links">
          <v-list-item prepend-icon="mdi-draw" class="items"></v-list-item>
        </router-link>
        <router-link to="/img" class="links">
          <v-list-item prepend-icon="mdi-clipboard-edit" class="items"></v-list-item>
        </router-link>
        <v-list-item prepend-icon="mdi-account-box" class="items"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const drawer = ref(true);
    const isPermanent = computed(() => {
      return window.innerWidth > 960;
    });

    window.addEventListener("resize", () => {
      drawer.value = window.innerWidth > 960;
    });

    return { drawer, isPermanent };
  },
};
</script>

<style scoped>
@media (max-width: 720px) {
  .sidebar {
    width: 100%;
    min-width: 200px;
  }
}

@media (min-width: 721px) {
  .sidebar {
    width: 5%;
  }
}

.links {
  text-decoration: none;
  color: white;
}
.items:hover{
  background-color: #e0e0e08e; 
  cursor: pointer; 
}
</style>
