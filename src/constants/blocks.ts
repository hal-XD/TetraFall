
export enum TetraFallBlockTypes {
    None = "none",
    Rectangle = "rectange",
};

export const TetraFallBlockShapes = {
    // オブジェクトリテラルで計算されたプロパティ名(Computed Property Names)を使用する
    [TetraFallBlockTypes.None]:[],
    [TetraFallBlockTypes.Rectangle]: [ 
        [1,1,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
    ], 
};