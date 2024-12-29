export default function calculateAge(birthday) {
  const now = new Date();
  return now.getFullYear() - birthday.getFullYear();
}
