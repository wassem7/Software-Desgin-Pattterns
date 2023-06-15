"use strict";
class Television {
    powerOn() {
        return 'Powering On..';
    }
    powerOff() {
        return 'Powering Off..';
    }
    channelUp() {
        return 'Channel Up...';
    }
    channelDown() {
        return 'Channel Down...';
    }
}
class Samsung extends Television {
    constructor() {
        super(...arguments);
        this.properties = {
            width: '50in',
            height: '50in',
        };
    }
}
const tv = new Samsung();
console.log(tv.properties.height);
console.log(tv.powerOn());
