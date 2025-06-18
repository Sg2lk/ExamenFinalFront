import { Handlers, PageProps } from "$fresh/server.ts";
import { FreshContext } from "$fresh/src/server/mod.ts";
import axios from "npm:axios";
import { Character } from "../index.tsx";
import CharacterDesc from "../../components/CharacterDesc.tsx";

export const handler:Handlers = {
    GET: async(_req: Request, c: FreshContext) => {

        const {id} = c.params;
        const res = await axios.get<Character[]>(`https://hp-api.onrender.com/api/character/${id}`);
        if(res.status !== 200){
            console.error("Peticion sin exito!")
        }

        return c.render(res.data[0]);
    }
}

const Page = (props: PageProps<Character>) => {
    return(
        <div>
            <CharacterDesc personaje={props.data}/>
        </div>
    )
}

export default Page;