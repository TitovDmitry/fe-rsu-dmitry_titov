function Livingroom() {
    computer = new Computer();
    projector = new Projector;
    tv = new Tv();
    Room.call(this,"LIVINGROOM",[computer, projector, tv]);
}

Livingroom.prototype = Object.create(Room.prototype);