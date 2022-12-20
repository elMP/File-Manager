export function sortCaseInsensitive(a, b) {
  if (a.Name.toLowerCase() < b.Name.toLowerCase()) return -1;
  else return 1;
}
