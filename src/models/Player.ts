import Config from '@/Config';

class Player {
    public name: string;
    public color: string;
    public isAI: boolean;
    public nextPlayer: Player | null;
    public constructor(name?: string, color?: string, isAI?: boolean) {
        this.name = name || '';
        this.color = color || Config.ball.empty;
        this.isAI = isAI || false;
        this.nextPlayer = null;
    }
}

export default Player;
