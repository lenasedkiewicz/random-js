import dateFunctions from "./dateUtils.mjs";
import aircraftinfo from "./aircraftinfo.mjs";

function renderSinglePassengerInfo({
  personName,
  surname,
  birthday,
  flightDate,
  seat,
  seatDesignation,
  aircraftManufacturer,
}) {
  return {
    "Imię i nazwisko": `${personName} ${surname}`,
    Wiek: dateFunctions.calculateAge(birthday),
    "Dni do wylotu": dateFunctions.daysToDeparture(flightDate),
    Miejsce: `${seat}${seatDesignation} (${aircraftinfo.SEAT_DESIGNATION_MAPPING[seatDesignation]})`,
    "Typ samolotu": aircraftinfo.AIRCRAFT_MAPPING[aircraftManufacturer],
  };
}

export default function renderPassengerInfo(passengerInfo) {
  return console.table(passengerInfo.map(renderSinglePassengerInfo));
}
