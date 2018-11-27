<template>
  <div id="layout-frame">
    <div style="z-index: 1;">
      <v-toolbar>
        <nuxt-link to="/home" tag="v-toolbar-title" class="logo" >SAWAN - YA</nuxt-link>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn to="/home" flat color="#4B9DC3" class="button-toolbar">HOME</v-btn>
          <v-btn to="/cartoon" flat color="#C66653" class="button-toolbar">CARTOON</v-btn>
          <v-btn to="/member" flat color="#7047C2" class="button-toolbar">MEMBER</v-btn>
          <v-btn to="/" flat color="red" style="font-weight: 600; font-size: 1.7rem;">LOGOUT</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //
      }
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+SC');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

#layout-frame {
  font-family: 'Source Sans Pro', sans-serif;
}

.logo {
  font-family: 'Noto Sans SC', sans-serif;
  color: #7DD4AA;
  font-size: 3rem;
  font-weight: 600;
  cursor: pointer;
}

.button-toolbar {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.7rem;
}

</style>
