function Room(name, devices) {
    this.name = name;
    this.devices = devices;
    this.power = this.getPower();
}

Room.prototype.getPower = function() {
    var power = 0;
    this.devices.forEach(function(i) {
    if (i.included) {
        power = power + i.getPower();
    }
    }, this);
    return power;
}

Room.prototype.showPower = function() {
    console.log(this.name + " общая мощность составояет: " + this.getPower());
}

Room.prototype.getDevice = function(name) {
    for (var i = 0; i < this.devices.length; i++)
        if (this.devices[i].name == name) 
        return this.devices[i];
        return null;
}