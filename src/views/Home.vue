<template>
  <div class="home d-flex justify-content-center align-items-center vh-100">
    <MDBBtn color="primary">GO</MDBBtn>
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
