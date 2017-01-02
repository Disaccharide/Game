class Player {

    animate: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

    constructor() {
        this.getMoveStatus(0);
    }

    private animationMode = 1;

    private setAnimationMode(mode: Animation) {
        this.animationMode = mode;
        switch (this.animationMode) {
            case 0: this.getMoveStatus(0);
                break;
            case 1: this.getMoveStatus(1);
                break;
        }
    }

    turnOver(mode: Animation) {
        this.setAnimationMode(mode);
    }//外部使然的转向

    private frameRate = 200;

    private getMoveStatus(status: Animation) {
        var str;
        var animate: egret.Bitmap;
        switch (status) {
            case 0: str = ["stand_01_png", "stand_02_png", "stand_03_png", "stand_04_png", "stand_05_png",
                "stand_06_png", "stand_07_png", "stand_08_png", "stand_09_png", "stand_10_png"];
                animate = this.createBitmapByName("stand_01png");
                break;
            case 1: str = ["run_01_png", "run_02_png", "run_03_png", "run_04_png",
                "run_05_png", "run_06_png", "run_07_png", "run_08_png"];
                animate = this.createBitmapByName("run_01_png");
                break;
        }
        this.animate.removeChildren();
        this.animate.addChild(animate);
        this.playAnimation(animate, str, this.frameRate);
    }

    private playAnimation(bit: egret.Bitmap, s: string[], t: number) {
        var i = 1;
        var change: Function = function () {
            var tw = egret.Tween.get(bit);
            tw.wait(t);
            tw.call(function changetex(): void {
                bit.texture = RES.getRes(s[i]);
            }, this);
            i++;
            if (i == s.length) {
                i = 1;
            }
            tw.call(change);
        };
        change();
    }//播放帧动画

    private targetX: number;
    private targetY: number;
    private xMove: number;
    private yMove: number;
    private ifLeftRight = 0;
    private timeOnEnterFrame = 0;
    private speed = 0.15;//像素每毫秒

    moveTo(x: number, y: number) {
        this.targetX = x;
        this.targetY = y;
        var lengthX = this.targetX - this.animate.x;
        var lengthY = this.targetY - this.animate.y;

        if (lengthX != 0 || lengthY != 0) {
            this.setAnimationMode(1);
        } else {
            this.setAnimationMode(0);
        }

        var pathLength = 0;
        pathLength = Math.pow(lengthX * lengthX + lengthY * lengthY, 1 / 2);
        this.xMove = lengthX / pathLength;
        this.yMove = lengthY / pathLength;//帧位移量

        this.animate.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
        this.timeOnEnterFrame = egret.getTimer();
    }

    private onMove(e: egret.Event) {
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = now - time;
        var getToTarget: GetToEvent = new GetToEvent(GetToEvent.getTo);

        this.animate.x += this.speed * pass * this.xMove;
        this.animate.y += this.speed * pass * this.yMove;
        this.timeOnEnterFrame = egret.getTimer();

        if (this.animate.x - this.targetX < 3 && this.animate.x - this.targetX > -3 &&
            this.animate.y - this.targetY < 3 && this.animate.y - this.targetY > -3) {
            this.animate.removeEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
            this.animate.dispatchEvent(getToTarget);
        }
    }

    private createBitmapByName(name: string): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        result.anchorOffsetX = result.width * 1/2;
        result.anchorOffsetY = result.height * 1/2;
        return result;
    }
}