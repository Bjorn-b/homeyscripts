//Highest difference in temperature allowed before alert
let allowed_diff = 3;

//Function for diff calculation with round 1 decimals
function diff(a,b){return Math.abs(a-b).toFixed(1);}

//Initiate variable in BLApp
let BLApp = await Homey.apps.getApp({id:"net.i-dev.betterlogic" });
await BLApp.put({path: "TemperatureDifference/" + null});
let devices_to_report = null;
function amend_device(Room, temperature_diff){
  if (devices_to_report == null) {
    devices_to_report = Room + ": " + temperature_diff;
  } else {
    devices_to_report = devices_to_report + " | " + Room + ": " + temperature_diff;
  }
}


//Create list of all rooms to parse
const Rooms = Array(18);
Rooms[0] = "Kontor";
Rooms[1] = "MasterBedroom";
Rooms[2] = "Sovrum2";
Rooms[3] = "Sovrum3";
Rooms[4] = "Allrum";
Rooms[5] = "AllrumWC";
Rooms[6] = "MasterBedroomWC";
Rooms[7] = "Kladkamare";
Rooms[8] = "Kok";
Rooms[9] = "Vardagsrum";
Rooms[10] = "Garage";
Rooms[11] = "Hall";
Rooms[12] = "Gastrum";
Rooms[13] = "Passage";
Rooms[14] = "Tvattstuga";
Rooms[15] = "Badrum";
Rooms[16] = "Gym";
Rooms[17] = "Forrad";

//Read the globalvariable
//_.forEach(Rooms, Room => {
for(const Room of Rooms) {

const RoomDevices = JSON.parse(global.get('HeatingDeviceIds_' + Room));

//console.log(Room + ":");

let targettempsensor = await Homey.devices.getDevice({id: RoomDevices.Termostat});
let target_temp = await targettempsensor.capabilitiesObj.target_temperature.value;
//console.log("T:" + target_temp);

//Current Temp
let currenttempsensor = await Homey.devices.getDevice({id: RoomDevices.Temperatur});
let current_temp = await currenttempsensor.capabilitiesObj.measure_temperature.value;
//console.log("C:" + current_temp);

let temperature_diff = diff(current_temp, target_temp);

if(temperature_diff > allowed_diff)
{
  amend_device(Room, temperature_diff);
  //console.log(Room + ":" + temperature_diff);
}

};

//Store data to better logic variable
//console.log(devices_to_report);
await BLApp.put({path: "TemperatureDifference/" + devices_to_report});

//report status to flowcard
if (devices_to_report == null) {
  return true;
} else {
  return false;
}
