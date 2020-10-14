
class StopWatch {
    constructor() {
        this.init;
        this.end;
        this.elapsed = 0;
    }
    startWatch(){
        this.init = new Date();
    }
    stopWatch(){
        this.end = new Date();
        var time = this.init.getTime() - this.init.getTime();
        return time;
    }
    resetWatch(){
        this.elapsed = 0;
        return this.elapsed;
    }
}