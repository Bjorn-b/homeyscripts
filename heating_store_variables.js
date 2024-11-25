//Precreate empty JSON Objects
let HeatingDeviceIds_Kontor = JSON.parse("{}");
let HeatingDeviceIds_MasterBedroom = JSON.parse("{}");
let HeatingDeviceIds_Sovrum2 = JSON.parse("{}");
let HeatingDeviceIds_Sovrum3 = JSON.parse("{}");
let HeatingDeviceIds_Allrum = JSON.parse("{}");
let HeatingDeviceIds_AllrumWC = JSON.parse("{}");
let HeatingDeviceIds_MasterBedroomWC = JSON.parse("{}");
let HeatingDeviceIds_Kladkamare = JSON.parse("{}");
let HeatingDeviceIds_Kok = JSON.parse("{}");
let HeatingDeviceIds_Vardagsrum = JSON.parse("{}");
let HeatingDeviceIds_Garage = JSON.parse("{}");
let HeatingDeviceIds_Hall = JSON.parse("{}");
let HeatingDeviceIds_Gastrum = JSON.parse("{}");
let HeatingDeviceIds_Passage = JSON.parse("{}");
let HeatingDeviceIds_Tvattstuga = JSON.parse("{}");
let HeatingDeviceIds_Badrum = JSON.parse("{}");
let HeatingDeviceIds_Gym = JSON.parse("{}");
let HeatingDeviceIds_Forrad = JSON.parse("{}");

//Fetch all devices
let AllDevices = await Homey.devices.getDevices();

//Store data in JSON Objects
//Set the device.name to the same value of the device to use as the "Name" property
   _.forEach(AllDevices, device => {
     //HeatingDeviceIds_Kontor
      if (device.name == 'Temperatur Kontor') HeatingDeviceIds_Kontor.Temperatur = device.id;
      if (device.name == 'Termostat Kontor') HeatingDeviceIds_Kontor.Termostat = device.id;

      //HeatingDeviceIds_MasterBedroom
      if (device.name == 'Temperatur Master Bedroom') HeatingDeviceIds_MasterBedroom.Temperatur = device.id;
      if (device.name == 'Termostat Master Bedroom') HeatingDeviceIds_MasterBedroom.Termostat = device.id;
      
      //HeatingDeviceIds_Sovrum2
      if (device.name == 'Temperatur Sovrum 2') HeatingDeviceIds_Sovrum2.Temperatur = device.id;
      if (device.name == 'Termostat Sovrum 2') HeatingDeviceIds_Sovrum2.Termostat = device.id;
      
      //HeatingDeviceIds_Sovrum3
      if (device.name == 'Temperatur Sovrum 3') HeatingDeviceIds_Sovrum3.Temperatur = device.id;
      if (device.name == 'Termostat Sovrum 3') HeatingDeviceIds_Sovrum3.Termostat = device.id;
      
     //HeatingDeviceIds_Allrum
      if (device.name == 'Temperatur Allrum') HeatingDeviceIds_Allrum.Temperatur = device.id;
      if (device.name == 'Termostat Allrum') HeatingDeviceIds_Allrum.Termostat = device.id;
      
     //HeatingDeviceIds_AllrumWC
      if (device.name == 'Temperatur Allrum WC') HeatingDeviceIds_AllrumWC.Temperatur = device.id;
      if (device.name == 'Termostat Allrum WC') HeatingDeviceIds_AllrumWC.Termostat = device.id;
      
     //HeatingDeviceIds_MasterBedroomWC
      if (device.name == 'Temperatur Master Bedroom WC') HeatingDeviceIds_MasterBedroomWC.Temperatur = device.id;
      if (device.name == 'Termostat Master Bedroom WC') HeatingDeviceIds_MasterBedroomWC.Termostat = device.id;
      
     //HeatingDeviceIds_Kladkamare
      if (device.name == 'Temperatur Klädkammare') HeatingDeviceIds_Kladkamare.Temperatur = device.id;
      if (device.name == 'Termostat Klädkammare') HeatingDeviceIds_Kladkamare.Termostat = device.id;
      
     //HeatingDeviceIds_Kok
      if (device.name == 'Temperatur Kök') HeatingDeviceIds_Kok.Temperatur = device.id;
      if (device.name == 'Termostat Kök') HeatingDeviceIds_Kok.Termostat = device.id;
      
     //HeatingDeviceIds_Vardagsrum
      if (device.name == 'Temperatur Vardagsrum') HeatingDeviceIds_Vardagsrum.Temperatur = device.id;
      if (device.name == 'Termostat Vardagsrum') HeatingDeviceIds_Vardagsrum.Termostat = device.id;
      
     //HeatingDeviceIds_Garage
      if (device.name == 'Temperatur Garage') HeatingDeviceIds_Garage.Temperatur = device.id;
      if (device.name == 'Termostat Garage') HeatingDeviceIds_Garage.Termostat = device.id;
      
     //HeatingDeviceIds_Hall
      if (device.name == 'Temperatur Hall') HeatingDeviceIds_Hall.Temperatur = device.id;
      if (device.name == 'Termostat Hall') HeatingDeviceIds_Hall.Termostat = device.id;
      
     //HeatingDeviceIds_Gastrum
      if (device.name == 'Temperatur Gästrum') HeatingDeviceIds_Gastrum.Temperatur = device.id;
      if (device.name == 'Termostat Gästrum') HeatingDeviceIds_Gastrum.Termostat = device.id;
      
     //HeatingDeviceIds_Passage
      if (device.name == 'Temperatur Passage') HeatingDeviceIds_Passage.Temperatur = device.id;
      if (device.name == 'Termostat Passage') HeatingDeviceIds_Passage.Termostat = device.id;
      
     //HeatingDeviceIds_Tvattstuga
      if (device.name == 'Temperatur Tvättstuga') HeatingDeviceIds_Tvattstuga.Temperatur = device.id;
      if (device.name == 'Termostat Tvättstuga') HeatingDeviceIds_Tvattstuga.Termostat = device.id;
      
     //HeatingDeviceIds_Badrum
      if (device.name == 'Temperatur Badrum') HeatingDeviceIds_Badrum.Temperatur = device.id;
      if (device.name == 'Termostat Badrum') HeatingDeviceIds_Badrum.Termostat = device.id;
      
     //HeatingDeviceIds_Gym
      if (device.name == 'Temperatur Gym') HeatingDeviceIds_Gym.Temperatur = device.id;
      if (device.name == 'Termostat Gym') HeatingDeviceIds_Gym.Termostat = device.id;
      
     //HeatingDeviceIds_Forrad
      if (device.name == 'Temperatur Förråd') HeatingDeviceIds_Forrad.Temperatur = device.id;
      if (device.name == 'Termostat Förråd') HeatingDeviceIds_Forrad.Termostat = device.id;
  });




//Convert data to JSON Strings
HeatingDeviceIds_Kontor = JSON.stringify(HeatingDeviceIds_Kontor);
HeatingDeviceIds_MasterBedroom = JSON.stringify(HeatingDeviceIds_MasterBedroom);
HeatingDeviceIds_Sovrum2 = JSON.stringify(HeatingDeviceIds_Sovrum2);
HeatingDeviceIds_Sovrum3 = JSON.stringify(HeatingDeviceIds_Sovrum3);
HeatingDeviceIds_Allrum = JSON.stringify(HeatingDeviceIds_Allrum);
HeatingDeviceIds_AllrumWC = JSON.stringify(HeatingDeviceIds_AllrumWC);
HeatingDeviceIds_MasterBedroomWC = JSON.stringify(HeatingDeviceIds_MasterBedroomWC);
HeatingDeviceIds_Kladkamare = JSON.stringify(HeatingDeviceIds_Kladkamare);
HeatingDeviceIds_Kok = JSON.stringify(HeatingDeviceIds_Kok);
HeatingDeviceIds_Vardagsrum = JSON.stringify(HeatingDeviceIds_Vardagsrum);
HeatingDeviceIds_Garage = JSON.stringify(HeatingDeviceIds_Garage);
HeatingDeviceIds_Hall = JSON.stringify(HeatingDeviceIds_Hall);
HeatingDeviceIds_Gastrum = JSON.stringify(HeatingDeviceIds_Gastrum);
HeatingDeviceIds_Passage = JSON.stringify(HeatingDeviceIds_Passage);
HeatingDeviceIds_Tvattstuga = JSON.stringify(HeatingDeviceIds_Tvattstuga);
HeatingDeviceIds_Badrum = JSON.stringify(HeatingDeviceIds_Badrum);
HeatingDeviceIds_Gym = JSON.stringify(HeatingDeviceIds_Gym);
HeatingDeviceIds_Forrad = JSON.stringify(HeatingDeviceIds_Forrad);

//Store it as global variable
global.set('HeatingDeviceIds_Kontor', HeatingDeviceIds_Kontor);
global.set('HeatingDeviceIds_MasterBedroom', HeatingDeviceIds_MasterBedroom);
global.set('HeatingDeviceIds_Sovrum2', HeatingDeviceIds_Sovrum2);
global.set('HeatingDeviceIds_Sovrum3', HeatingDeviceIds_Sovrum3);
global.set('HeatingDeviceIds_Allrum', HeatingDeviceIds_Allrum);
global.set('HeatingDeviceIds_AllrumWC', HeatingDeviceIds_AllrumWC);
global.set('HeatingDeviceIds_MasterBedroomWC', HeatingDeviceIds_MasterBedroomWC);
global.set('HeatingDeviceIds_Kladkamare', HeatingDeviceIds_Kladkamare);
global.set('HeatingDeviceIds_Kok', HeatingDeviceIds_Kok);
global.set('HeatingDeviceIds_Vardagsrum', HeatingDeviceIds_Vardagsrum);
global.set('HeatingDeviceIds_Garage', HeatingDeviceIds_Garage);
global.set('HeatingDeviceIds_Hall', HeatingDeviceIds_Hall);
global.set('HeatingDeviceIds_Gastrum', HeatingDeviceIds_Gastrum);
global.set('HeatingDeviceIds_Passage', HeatingDeviceIds_Passage);
global.set('HeatingDeviceIds_Tvattstuga', HeatingDeviceIds_Tvattstuga);
global.set('HeatingDeviceIds_Badrum', HeatingDeviceIds_Badrum);
global.set('HeatingDeviceIds_Gym', HeatingDeviceIds_Gym);
global.set('HeatingDeviceIds_Forrad', HeatingDeviceIds_Forrad);


//Construct JSON with all rooms to loop for output
let Rooms = JSON.parse('{}');
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
_.forEach(Rooms, Room => {
console.log("HeatingDeviceIds_" + Room, global.get('HeatingDeviceIds_' + Room));
});

/*
//Read the globalvariable
let Room = "Kontor";
console.log("HeatingDeviceIds_" + Room, global.get('HeatingDeviceIds_' + Room));

Room = "MasterBedroom";
console.log("HeatingDeviceIds_" + Room, global.get('HeatingDeviceIds_' + Room));
*/
