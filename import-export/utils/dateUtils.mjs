export default function calculateAge(birthday) {
  const now = new Date();
  return now.getFullYear() - birthday.getFullYear();
}

export function daysToDeparture(date) {
  const now = new Date();
  return Math.ceil((date.getTime() - now.getTime()) / (1000 * 3600 * 24));
}
