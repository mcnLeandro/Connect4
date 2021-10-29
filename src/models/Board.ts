import Ball from '@/models/Ball';

class Board {
    public size: number;
    public balls: Array<Array<Ball>>;

    public constructor(size: number) {
        this.size = size;
        this.balls = this.createBalls();
    }
    /**
     * 座標と同じく
     * 右上に行くほど+
     * 左下にいくほど-
     * Boardの原点は左下
     * _____________ (x3, y4)
     * |___|___|___|
     * |___|___|___|
     * |___|___|___|
     * |___|___|___|
     * (x0, y0)
     */
    public createBalls(): Array<Array<Ball>> {
        const array: Array<Array<Ball>> = [];

        for (let y = this.size; y >= 0; y--) {
            const row: Array<Ball> = [];
            for (let x = 0; x < this.size; x++) {
                row.push(new Ball(x, y));
            }
            array.push(row);
        }

        return array;
    }
}

export default Board;
