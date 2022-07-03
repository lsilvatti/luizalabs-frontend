export function getValue(key: string): Array<any> {
  const retrievedItem = localStorage.getItem(key);
  if (retrievedItem) return JSON.parse(retrievedItem);
  return [];
}

export function setValue(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
  return true;
}
