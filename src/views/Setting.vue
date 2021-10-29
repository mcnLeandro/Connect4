<template>
    <div>
        <div class="col-md-6 my-5 m-auto p-3 shadow rounded bg-white">
            <!-- board size -->
            <h2>Board Size</h2>
            <MDBRange label="Example range" :min="0" :max="5" />

            <!-- Number of Playesrs -->
            <h2 class="mt-2">Number of Players</h2>
            <MDBRange label="Example range" :min="0" :max="5" />

            <!-- player number -->
            <h2 class="mt-2">Players Info</h2>

            <div class="d-flex justify-content-between">
                <div class="col-6">
                    <MDBInput label="Example label" v-model="input1" />
                </div>
                <div class="col-4">
                    <MDBInput label="Example label" v-model="input1" />
                </div>
            </div>

            <div class="d-flex justify-content-end mt-3">
                <MDBBtn color="primary"> Game Start </MDBBtn>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBRange, MDBBtn, MDBInput } from 'mdb-vue-ui-kit';

export default defineComponent({
    components: { MDBRange, MDBBtn, MDBInput },
});
</script>
