<template>
  <div>
    <!-- drop buttons -->
    <div class="d-flex justify-content-center mt-5">
      <div class="d-flex justify-content-center drop-btn">
        <div>
          <MDBBtn color="primary" class="w-100">↓</MDBBtn>
        </div>
        <div>
          <MDBBtn color="primary" class="w-100">↓</MDBBtn>
        </div>
        <div>
          <MDBBtn color="primary" class="w-100">↓</MDBBtn>
        </div>
      </div>
    </div>

    <!-- board -->
    <div class="d-flex justify-content-center">
      <div class="px-3 pb-3 border border-5 bg-danger rounded shadow-lg my-4">
        <div class="board bg-white">
          <div class="d-flex">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="d-flex">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="d-flex">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- playesr -->
    <div class="d-flex justify-content-center flex-wrap">
      <MDBCol md="3">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Player Name</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-vue-ui-kit';
import { MDBCol } from 'mdb-vue-ui-kit';

export default defineComponent({
  components: {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCol,
  },
});
</script>

<style scoped>
.board div div {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.drop-btn div {
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
}
</style>
