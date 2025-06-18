import { FunctionalComponent } from "preact";
import { Character } from "../routes/index.tsx";

/*
    Para poder añadir/quitar de favoritos en esta ruta tambien, se deberia hacer en un island nuevo, de la misma forma que se ha hecho
    CharacterCard.tsx
*/

type Props = {
    personaje: Character,
}

const CharacterDesc:FunctionalComponent<Props> = (props) => {
    const {id, name, image, gender, house, yearOfBirth} = props.personaje;
    return(
        <div>
            <div>
                    <img src={image} class="imagen"></img>
                    <a href={`/characters/${id}`}>
                        <h2>{name}</h2>
                    </a>
                    <p>{gender}</p>
                    <p>{house}</p>
                    <p>{yearOfBirth}</p>
                    <button type="button">Añadir/Quitar</button>
            </div>
            <a href={`/`}>Volver al inicio</a>
        </div>
    )
}

export default CharacterDesc;