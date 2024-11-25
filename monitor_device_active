//Set time intervall
const reportThresholdMs = 60 * 60 * 1000 //24h
const reportThreshold = new Date(Date.now() - reportThresholdMs);

//Initiate Better Logic App and reset value
let BLApp = await Homey.apps.getApp({id:"net.i-dev.betterlogic" });
await BLApp.put({path: "InactiveDevices/" + null});

//fetch all devices
let devices = await Homey.devices.getDevices();

//Function to validate type of device
function isRelevant(device) {
  //Check for temperature sensors
  if (device.class.match(/sensor/i) && device.name.startsWith("Temperatur")) {
    return true;
  }

  return false;
}

//Function to check if device reported within intervall
function isUnresponsive(device) {
  let unresponsive = true;

  // So long as one capability is updated after reportThreshold,
  // the device is considered responsive.
  Object.values(device.capabilitiesObj).forEach(capability => {
    let lastUpdated = new Date(capability.lastUpdated ?? 0);
    if (lastUpdated > reportThreshold) {
      unresponsive = false;
    }
  });
  return unresponsive;
}

//Filter all devices
let devicesToCheck = Object.values(devices).filter(isRelevant);

//Validate report intervall
let unresponsiveDevices = Object.values(devicesToCheck).filter(isUnresponsive);

//Store all device names into variable
let unresponsiveDevicesNames = Object.values(unresponsiveDevices).map(device => device.name);
//Uncomment below for manual validation of script
//log(unresponsiveDevicesNames);
//log(unresponsiveDevicesNames.length);

//Send all device names to Better Logic App Variable if there are any
if(unresponsiveDevicesNames.length > 0)
{
  BLApp.put({path: "InactiveDevices/" + unresponsiveDevicesNames});
  await wait(1000);
  return false;
}
else
{
  return true;
}
