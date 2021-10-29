import Config from '@/Config';

class Ball {
    public color: string;
    public x: number;
    public y: number;
    public constructor(x: number, y: number) {
        this.color = Config.ball.empty;
        this.x = x;
        this.y = y;
    }
}

export default Ball;
