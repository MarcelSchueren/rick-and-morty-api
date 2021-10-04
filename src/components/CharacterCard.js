import "./CharacterCard.css"

export default function CharacterCard(props) {

    return (
        <div className="characterCard">
            <h4>{props.character.name}</h4>
            <p>{props.character.origin.name}</p>
            <img className="characterCard__image" src={props.character.image} alt="rick and morty logo"/>
        </div>
    )
}

