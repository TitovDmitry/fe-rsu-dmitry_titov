function Tv() {
    var processor = new Processor(2);
    var psu = new PSU(5);
    var ram = new Ram(1);
    var display = new Display(10);

    Device.call(this, "TV", [processor, psu, ram, display]);
}

Tv.prototype = Object.create(Device.prototype);