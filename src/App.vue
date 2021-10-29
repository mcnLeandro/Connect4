<template>
    <div class="vh-100 bg-white">
        <router-view @players="setPlayers" @board="setBoard"></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            players: [],
            board: [],
        };
    },
    methods: {
        setPlayers: function (players) {
            this.players = players;
        },
        setBoard: function (board) {
            this.board = board;
        },
        log: function () {
            console.log(this.players, this.board);
        },
    },
};
</script>

<style>
#app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
