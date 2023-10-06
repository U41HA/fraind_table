export function checkLocalStorageFavorite(name: string) {
  const favoritesStr = localStorage.getItem('tableFavorites');
  if (favoritesStr) {
    const favorites = JSON.parse(favoritesStr);
    return !!favorites.find((person) => person.name === name);
  }
  return false;
}
