var CreateMap = (function (_super) {
    __extends(CreateMap, _super);
    function CreateMap() {
        _super.call(this);
        /*
        var config = [
            [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            [1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
            [0, 1, 0, 1, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
            [1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]]
            */
        //地形配置文件
        this.terrains = [
            { x: 0, y: 0, tex: 0 },
            { x: 1, y: 0, tex: 1 },
            { x: 2, y: 0, tex: 0 },
            { x: 3, y: 0, tex: 0 },
            { x: 4, y: 0, tex: 0 },
            { x: 5, y: 0, tex: 0 },
            { x: 6, y: 0, tex: 0 },
            { x: 7, y: 0, tex: 0 },
            { x: 8, y: 0, tex: 1 },
            { x: 9, y: 0, tex: 0 },
            { x: 0, y: 1, tex: 0 },
            { x: 1, y: 1, tex: 1 },
            { x: 2, y: 1, tex: 1 },
            { x: 3, y: 1, tex: 1 },
            { x: 4, y: 1, tex: 1 },
            { x: 5, y: 1, tex: 1 },
            { x: 6, y: 1, tex: 1 },
            { x: 7, y: 1, tex: 0 },
            { x: 8, y: 1, tex: 1 },
            { x: 9, y: 1, tex: 0 },
            { x: 0, y: 2, tex: 0 },
            { x: 1, y: 2, tex: 0 },
            { x: 2, y: 2, tex: 0 },
            { x: 3, y: 2, tex: 0 },
            { x: 4, y: 2, tex: 1 },
            { x: 5, y: 2, tex: 0 },
            { x: 6, y: 2, tex: 1 },
            { x: 7, y: 2, tex: 0 },
            { x: 8, y: 2, tex: 1 },
            { x: 9, y: 2, tex: 0 },
            { x: 0, y: 3, tex: 0 },
            { x: 1, y: 3, tex: 1 },
            { x: 2, y: 3, tex: 1 },
            { x: 3, y: 3, tex: 1 },
            { x: 4, y: 3, tex: 1 },
            { x: 5, y: 3, tex: 0 },
            { x: 6, y: 3, tex: 1 },
            { x: 7, y: 3, tex: 1 },
            { x: 8, y: 3, tex: 1 },
            { x: 9, y: 3, tex: 0 },
            { x: 0, y: 4, tex: 0 },
            { x: 1, y: 4, tex: 1 },
            { x: 2, y: 4, tex: 0 },
            { x: 3, y: 4, tex: 0 },
            { x: 4, y: 4, tex: 0 },
            { x: 5, y: 4, tex: 0 },
            { x: 6, y: 4, tex: 0 },
            { x: 7, y: 4, tex: 1 },
            { x: 8, y: 4, tex: 0 },
            { x: 9, y: 4, tex: 0 },
            { x: 0, y: 5, tex: 1 },
            { x: 1, y: 5, tex: 1 },
            { x: 2, y: 5, tex: 0 },
            { x: 3, y: 5, tex: 1 },
            { x: 4, y: 5, tex: 1 },
            { x: 5, y: 5, tex: 1 },
            { x: 6, y: 5, tex: 1 },
            { x: 7, y: 5, tex: 0 },
            { x: 8, y: 5, tex: 1 },
            { x: 9, y: 5, tex: 0 },
            { x: 0, y: 6, tex: 0 },
            { x: 1, y: 6, tex: 1 },
            { x: 2, y: 6, tex: 0 },
            { x: 3, y: 6, tex: 1 },
            { x: 4, y: 6, tex: 0 },
            { x: 5, y: 6, tex: 1 },
            { x: 6, y: 6, tex: 0 },
            { x: 7, y: 6, tex: 0 },
            { x: 8, y: 6, tex: 1 },
            { x: 9, y: 6, tex: 0 },
            { x: 0, y: 7, tex: 0 },
            { x: 1, y: 7, tex: 1 },
            { x: 2, y: 7, tex: 1 },
            { x: 3, y: 7, tex: 1 },
            { x: 4, y: 7, tex: 0 },
            { x: 5, y: 7, tex: 1 },
            { x: 6, y: 7, tex: 0 },
            { x: 7, y: 7, tex: 0 },
            { x: 8, y: 7, tex: 1 },
            { x: 9, y: 7, tex: 1 },
            { x: 0, y: 8, tex: 0 },
            { x: 1, y: 8, tex: 1 },
            { x: 2, y: 8, tex: 0 },
            { x: 3, y: 8, tex: 1 },
            { x: 4, y: 8, tex: 0 },
            { x: 5, y: 8, tex: 1 },
            { x: 6, y: 8, tex: 1 },
            { x: 7, y: 8, tex: 1 },
            { x: 8, y: 8, tex: 1 },
            { x: 9, y: 8, tex: 0 },
            { x: 0, y: 9, tex: 0 },
            { x: 1, y: 9, tex: 1 },
            { x: 2, y: 9, tex: 0 },
            { x: 3, y: 9, tex: 0 },
            { x: 4, y: 9, tex: 0 },
            { x: 5, y: 9, tex: 0 },
            { x: 6, y: 9, tex: 0 },
            { x: 7, y: 9, tex: 0 },
            { x: 8, y: 9, tex: 0 },
            { x: 9, y: 9, tex: 0 }
        ];
        this.gridX = 100; //格子宽
        this.gridY = 100; //格子高
        this.cols = 10; //格子列数
        this.rows = 10; //格子行数
        this.createMap();
    } //构造函数
    var d = __define,c=CreateMap,p=c.prototype;
    p.createMap = function () {
        //var map = this.createBitmapByName("ground_jpg");
        //this.addChild(map);
        this.mapGrids = new Grid(this.cols, this.rows, this.gridX, this.gridY);
        this.createTerrain();
    }; //加载地图，格子化
    p.createTerrain = function () {
        this.mapGrids.setWalkable(8, 2, true); //npc1位置
        this.mapGrids.setWalkable(0, 5, true); //npc2位置
        for (var i = 0; i < this.terrains.length; i++) {
            if (this.terrains[i].tex == 0) {
                this.mapGrids.setWalkable(this.terrains[i].x, this.terrains[i].y, false);
                var obstacles = this.createBitmapByName("map02_png");
                obstacles.width = 100;
                obstacles.height = 100;
                this.addChild(obstacles);
            }
            if (this.terrains[i].tex == 1) {
                var obstacles = this.createBitmapByName("map01_png");
                obstacles.width = 100;
                obstacles.height = 100;
                this.addChild(obstacles);
            }
            obstacles.x = this.terrains[i].x * this.gridX;
            obstacles.y = this.terrains[i].y * this.gridY;
        }
    };
    p.countPath = function (x1, y1, x2, y2) {
        this.mapGrids.setStartPnode(this.checkPointX(x1), this.checkPointY(y1));
        this.mapGrids.setEndPnode(this.checkPointX(x2), this.checkPointY(y2));
        AStar.getInstance().findPath(this.mapGrids);
        return AStar.getInstance().getPath();
    }; //计算路径并返回结果路径
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }; //读入位图
    p.checkPointX = function (x) {
        return Math.floor(x / this.gridX);
    }; //X像素坐标改为格子坐标
    p.checkPointY = function (y) {
        return Math.floor(y / this.gridY);
    }; //Y像素坐标改为格子坐标
    p.getGridX = function () {
        return this.gridX;
    }; //获得格子像素宽
    p.getGridY = function () {
        return this.gridY;
    }; //获得格子像素高
    return CreateMap;
}(egret.DisplayObjectContainer));
egret.registerClass(CreateMap,'CreateMap');
//# sourceMappingURL=Map.js.map