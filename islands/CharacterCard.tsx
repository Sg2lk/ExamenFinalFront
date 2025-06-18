import { FunctionalComponent } from "preact";
import { Character } from "../routes/index.tsx";
import { useEffect } from "preact/hooks";

type Props = {
    personajes: Character[],
}

const CharacterCard:FunctionalComponent<Props> = (props) => {


    useEffect(() =>  {
        const myCookie = document.cookie.split("; ");
        const fav = myCookie.find((e) => e.startsWith("favorites="));
        if(!fav){
            document.cookie = `favorites=${JSON.stringify([])}; path=/;`;
        } else {
            console.log("ya existe la cookie!");
        }
    }, []);

    function addFav(pj: Character){
        const myCookie = document.cookie.split("; ");
        const fav = myCookie.find((e) => e.startsWith("favorites="));

        if(fav){
            const aux:Character[] = JSON.parse(fav.split("=")[1]);
            if(!aux.some((e) => e.name === pj.name)){
                aux.push(pj);
                document.cookie = `favorites=${JSON.stringify(aux)}; path=/;`;
                alert("Personaje añadido a favorito");
            } else {
                // Si entra aqui es que el personaje ya esta en  favoritos, asi que solo habria que eliminarlo del array aux
                // Y crear una nueva cookies sin ese personaje (con el nuevo valor de aux) como en la linea 32
                alert("Personaje ya añadido!");
            }

        } else {
            console.error("Error en la cookie!");
        }

    }

    return(
        <div class="container">
            {/*
                <a href={`/favorites`}>Favoritos</a> Solo para tener acceso mas facil a los favoritos
            */}
            {props.personajes.map((e) => (
                <div>
                    <img src={e.image} class="imagen"></img>
                    <a href={`/characters/${e.id}`}>
                        <h2>{e.name}</h2>
                    </a>
                    <button type="button" onClick={() => {addFav(e)}}>Añadir/Quitar</button>
                </div>
            ))}
        </div>
    )
}

export default CharacterCard;