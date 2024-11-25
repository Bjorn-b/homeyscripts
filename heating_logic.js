/*
Script relies on Global Variables set by script "heating_store_variables.js".
*/

if (typeof args[0] !== 'string') {
  throw new Error('This script must be run from a Flow!');
}

const flow_args = JSON.parse(args[0]);


//const flow_args = JSON.parse('{"Room": "Kontor", "Mode": "ECO", "ECODiff": "3"}');

const RoomDevices = JSON.parse(global.get('HeatingDeviceIds_' + flow_args.Room));

//Target temp
let targettempsensor = await Homey.devices.getDevice({id: RoomDevices.Termostat});
let target_temp = await targettempsensor.capabilitiesObj.target_temperature.value;
console.log(target_temp);

//Current Temp
let currenttempsensor = await Homey.devices.getDevice({id: RoomDevices.Temperatur});
let current_temp = await currenttempsensor.capabilitiesObj.measure_temperature.value;
console.log(current_temp);

if(flow_args.Mode == "ECO")
{
  target_temp = (target_temp - flow_args.ECODiff);
}

//console.log(target_temp);

if(target_temp > current_temp)
{
  //TURN ON THE HEAT
  return true;
}
else
{
  //TURN OFF THE HEAT
  return false;
}
