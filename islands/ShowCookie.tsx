import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import { Character } from "../routes/index.tsx";

const ShowCookie:FunctionalComponent = () => {

    const [listFav, setListFav] = useState<Character[]>([]);

    useEffect(() => {
        
        setListFav([]);
        const myCookie = document.cookie.split("; ");
        const fav = myCookie.find((e) => e.startsWith("favorites="));
        if(!fav){
            console.error("Cookie no existente");
        } else {
            const aux = JSON.parse(fav.split("=")[1]);
            setListFav(aux);
        }
    }, [])

    return(
        <>
            <div class="container">
                {listFav.map((e) => (
                    <div>
                        <img src={e.image} class="imagen"></img>
                        <a href={`/characters/${e.id}`}>
                            <h2>{e.name}</h2>
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ShowCookie;