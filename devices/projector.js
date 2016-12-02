function Projector() {
    var processor = new Processor(3);
    var psu = new PSU(4);
    var ram = new Ram(2);
    var light = new Light(15);

    Device.call(this, "PROJECTOR", [processor, psu, ram, light]);
}

Projector.prototype = Object.create(Device.prototype);