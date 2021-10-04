import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import CharacterGallery from "./components/CharacterGallery";
import {useEffect, useState} from "react";
import {fetchCharacters} from "./Services/rick-and-morty-api-service";

function App() {

    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchCharacters(page)
            .then(characters => setCharacters(characters))
            .catch(error => console.log(error))
    }, [page])

    const searchCharacters = (event) => {
        const newSearch = event.target.value;
        setSearch(newSearch);
    }

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(search.toLowerCase()));

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const handleNextPage = () => {
        if (page < 34) {
            setPage(page + 1);
        }
    }

    if (characters.length === 0){
        return <p>Sorry, there are no characters</p>
    }

    return (
        <div>
            <Header title="Rick & Morty App"/>
            <Body title="Charakterübersicht"/>

            <button onClick={handlePreviousPage}>Previous Page</button>
            <button onClick={handleNextPage}>Next Page</button>

            <input type="text" onChange={searchCharacters} value={search}/>
            <CharacterGallery characters={filteredCharacters}/>
        </div>
    );
}

export default App;