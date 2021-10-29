<template>
    <div>
        <div class="col-md-6 my-5 m-auto p-3 shadow rounded bg-white">
            <!-- board size -->
            <h2>Board Size</h2>
            <div class="col-6">
                <MDBRange
                    v-model="boardSize"
                    :min="Config.board.size.min"
                    :max="Config.board.size.max"
                />
            </div>

            <!-- Number of Playesrs -->
            <h2 class="mt-2">Number of Players</h2>
            <div class="col-6">
                <MDBRange
                    v-model="playerNumber"
                    :min="Config.player.number.min"
                    :max="Config.player.number.max"
                />
            </div>

            <!-- player number -->
            <h2 class="mt-2">Players Info</h2>
            <div>
                <div
                    class="d-flex justify-content-between my-3"
                    v-for="(player, index) in players"
                    :key="index"
                >
                    <div class="col-6">
                        <MDBInput label="name" v-model="player.name" />
                    </div>

                    <div class="col-4">
                        <select class="form-select" v-model="player.color">
                            <option
                                class="text-center"
                                v-for="(color, index) in colors"
                                :key="index"
                                :value="Config.ball.color[color]"
                            >
                                <!-- 後々ball自体を表示させる。ballコンポーネントが完成したら変更する -->
                                {{ color }}
                                {{ Config.ball.color[color] }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-end mt-3">
                <MDBBtn color="primary" @click="gameStart"> Game Start </MDBBtn>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Config from '@/Config';
import Player from '@/models/Player';
import Board from '@/models/Board';
import { MDBRange, MDBBtn, MDBInput } from 'mdb-vue-ui-kit';

export default defineComponent({
    components: {
        MDBRange,
        MDBBtn,
        MDBInput,
    },
    data() {
        return {
            Config: Config,
            boardSize: Config.board.size.min,
            playerNumber: Config.player.number.min,
            players: new Array(Config.player.number.min)
                .fill({})
                .map(() => new Player()),
            colors: Object.keys(Config.ball.color),
        };
    },
    methods: {
        gameStart: function () {
            this.$emit('players', this.players);
            this.$emit('board', new Board(this.boardSize));

            this.$router.push('game');
        },
    },
});
</script>
