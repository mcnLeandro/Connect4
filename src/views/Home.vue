<template>
    <div class="home d-flex justify-content-center align-items-center vh-100">
        <router-link to="/setting">
            <MDBBtn color="primary">
                GO
            </MDBBtn>
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MDBBtn } from 'mdb-vue-ui-kit';

export default defineComponent({
    components: {
        MDBBtn,
    },
});
</script>
