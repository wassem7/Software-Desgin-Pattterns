abstract class Television {
  abstract properties: any;
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
  properties = {
    width: '50in',
    height: '50in',
  };
}

const tv = new Samsung();
console.log(tv.properties.height);
console.log(tv.powerOn());
