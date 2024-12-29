import dateFunctions from "./utils/dateUtils.mjs";

const PASSENGER_INFO = [
  {
    personName: "Kacper",
    surname: "Sokołowski",
    birthday: new Date("1992-10-01"),
    flightDate: new Date("2025-10-05T03:24:00"),
    seat: 21,
    seatDesignation: "A",
    aircraftManufacturer: 0,
  },
  {
    personName: "Filip",
    surname: "Mamcarczyk",
    birthday: new Date("1993-09-10"),
    flightDate: new Date("2025-12-01T15:27:00"),
    seat: 37,
    seatDesignation: "B",
    aircraftManufacturer: 1,
  },
];

const SEAT_DESIGNATION_MAPPING = {
  A: "Okno",
  B: "Środek",
  C: "Alejka",
  D: "Alejka",
  E: "Środek",
  F: "Okno",
};
function renderSinglePassengerInfo({
  personName,
  surname,
  birthday,
  flightDate,
  seat,
  seatDesignation,
}) {
  return {
    "Imię i nazwisko": `${personName} ${surname}`,
    Wiek: dateFunctions.calculateAge(birthday),
    "Dni do wylotu": dateFunctions.daysToDeparture(flightDate),
    Miejsce: `${seat}${seatDesignation} (${SEAT_DESIGNATION_MAPPING[seatDesignation]})`,
  };
}

function renderPassengerInfo(passengerInfo) {
  return console.table(passengerInfo.map(renderSinglePassengerInfo));
}

renderPassengerInfo(PASSENGER_INFO);
