function Device(name, elements) {
    this.elements = elements;
    this.included = false;
    
    Element.call(this, name, this.getPower());
}


Device.prototype = Object.create(Element.prototype);

Device.prototype.getPower = function() {
    var power = 0;

    this.elements.forEach(function(i) {
        power = power + i.getPower();
    }, this);

    return power;
}


Device.prototype.showPower = function() {
    if (this.included)
        console.log("Мощность объекта " + this.name + " составляет: " + this.power);
    else
        console.log(this.name + " выключен.");
}