function Bedroom() {
    computer = new Computer();
    tv = new Tv();
    Room.call(this, "BEDROOM", [computer, tv]);
}

Bedroom.prototype = Object.create(Room.prototype);