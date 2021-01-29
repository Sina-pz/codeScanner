export class Device {
    constructor(
        public deviceId?: string,
        public groupId?: string,
        public kind?: string,
        public label?: string,
    ) { }

    public fromZScanner(device: any): Device {

        for (const propName in device) {
            this[propName] = device[propName];
        }
        console.log(this);

        return this;
    }

}