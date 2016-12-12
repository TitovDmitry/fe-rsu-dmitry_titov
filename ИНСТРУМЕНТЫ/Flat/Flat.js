function Flat(rooms) {
    this.rooms = rooms;
    this.power = this.getPower();
}


Flat.prototype.getPower = function() {
    var power = 0;
    this.rooms.forEach(function(i) {
        power = power + i.getPower();
    }, this);
    return power;
}

Flat.prototype.getRoom = function(name) {
    for (var i = 0; i < this.rooms.length; i++)
        if (this.rooms[i].name === name) 
        return this.rooms[i];
        return null;
}

Flat.prototype.showPower = function() {
    console.log("Мощность квартиры составляет: " + this.getPower());
}

Flat.prototype.getDevice = function(name) {
    var found = null;
    for (var i = 0; i < this.rooms.length; i++) {
        found = this.rooms[i].getDevice(name);
        if (found) return found;
    }

    return found;
}