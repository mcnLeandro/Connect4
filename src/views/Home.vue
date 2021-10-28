<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <MDBBtn color="primary">Primary</MDBBtn>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { MDBBtn } from 'mdb-vue-ui-kit';

@Options({
  components: {
    HelloWorld,
    MDBBtn,
  },
})
export default class Home extends Vue {}
</script>
