function Computer() {
    var harddrive = new Harddrive(5);
    var processor = new Processor(3);
    var psu = new PSU(4);
    var ram = new Ram(2);

    Device.call(this, "COMPUTER", [harddrive, processor, psu, ram]);
}

Computer.prototype = Object.create(Device.prototype);