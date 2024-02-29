export default function sortByHealth(a, b) {
  if (a.health > b.health) {
    return 1;
  }
  if (a.health < b.health) {
    return -1;
  }
  return 0;
}
