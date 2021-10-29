class Player {
    public name: string;
    public color: string;
    public isAI: boolean;
    public nextPlayer: Player | null;
    public constructor(name: string, color: string, isAI = false) {
        this.name = name;
        this.color = color;
        this.isAI = isAI;
        this.nextPlayer = null;
    }
}

export default Player;
