<template>
  <v-layout>
    <v-navigation-drawer
      theme="dark"
      style="
        margin: 20px;
        height: 95%;
        border-radius: 5px;
        width: 5%;
        padding: 15px;
        outline: 0.5px solid #5e5e5e;
      "
      rail
      permanent
    >
      <v-list color="transparent">
        <router-link to="/" class="links">
          <v-list-item  prepend-icon="mdi-home"></v-list-item>
        </router-link>
        <router-link to="/design" class="links">
          <v-list-item prepend-icon="mdi-draw"></v-list-item>
        </router-link>
        <router-link to="/img" class="links">
          <v-list-item prepend-icon="mdi-clipboard-edit"></v-list-item>
        </router-link>
        <v-list-item prepend-icon="mdi-account-box"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script></script>

<style>
.links{
    text-decoration: none;
    color: white;
}
</style>
