import Player from '@/models/Player';

class PlayerList {
    public players: Array<Player>;
    public headPlayer: Player | null;
    public constructor(players: Array<Player>) {
        this.players = players;
        this.headPlayer = null;
    }
    public createPlayersChain(): PlayerList {
        /**
         * set headPlayer
         */
        this.headPlayer = this.players[0];

        const l = this.players.length - 1;

        /**
         * chain all exept last one
         */
        for (let i = 0; i < l; i++) {
            const player = this.players[i];
            const nextPlayer = this.players[i + 1];

            player.nextPlayer = nextPlayer;
        }

        /**
         * chain last one and first one
         */
        const lastPlayer = this.players[l];
        lastPlayer.nextPlayer = this.headPlayer;

        return this;
    }
    public getFirstPlayer(): Player | null {
        return this.headPlayer;
    }
}

export default PlayerList;
