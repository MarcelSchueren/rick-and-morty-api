
export function fetchCharacters(page) {
    let url = "https://rickandmortyapi.com/api/character?page="+page;
    return fetch(url)
        .then(response => response.json())
        .then(p=> p.results)
}