function Light(power) {
    Element.call(this, "LIGHT", power);
}

Light.prototype = Object.create(Element.prototype);