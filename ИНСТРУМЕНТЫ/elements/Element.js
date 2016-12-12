function Element(name, power) {
    this.name = name;
    this.power = power;
    this.included = true;
}

/*задаю прототипы*/

Element.prototype.getName = function() {
    return this.name;
}

Element.prototype.getPower = function() {
    return this.power;
}

Element.prototype.includedOn = function() {
    this.included = true;
}

Element.prototype.includedOff = function() {
    this.included = false;
}