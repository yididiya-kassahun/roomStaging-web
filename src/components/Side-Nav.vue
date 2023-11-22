<template>
  <v-layout>
    <v-navigation-drawer
      theme="dark"
      style="margin: 20px; height: 95%; border-radius: 5px"
      rail
      permanent
    >
      <v-list color="transparent">
      
        <router-link>
        <v-list-item prepend-icon="mdi-home" to="/"></v-list-item>
        </router-link>
        <v-list-item prepend-icon="mdi-draw"></v-list-item>
        <v-list-item prepend-icon="mdi-clipboard-edit"></v-list-item>
        <v-list-item prepend-icon="mdi-account-box"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
    <RouterView/>
</template>

<script>

</script>