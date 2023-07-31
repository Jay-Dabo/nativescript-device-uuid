const { device } = require('@nativescript/core/platform');

function getUUID() {
  return device ? device.uuid : null;
}

exports.getUUID = getUUID;