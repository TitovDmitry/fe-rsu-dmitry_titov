function Application() {
    var bedroom = new Bedroom();
    var livingroom = new Livingroom();

    this.flat = new Flat([bedroom, livingroom]);
}

Application.prototype.start = function() {
    this.flat.getRoom("LIVINGROOM").showPower(); 
    this.flat.getRoom("BEDROOM").showPower(); 
    this.flat.showPower();
}