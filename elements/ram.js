function Ram(power) {
    Element.call(this, "RAM", power);
}

Ram.prototype = Object.create(Element.prototype);