import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import CharacterCard from "../islands/CharacterCard.tsx";

export type Character = {
  id: string,
  name: string,
  image: string,
  gender: string,
  house: string,
  yearOfBirth: string,
}

export const handler:Handlers = {
  GET: async(_req: Request, c: FreshContext) => {

    const res = await axios.get<Character[]>(`https://hp-api.onrender.com/api/characters`);
    if(res.status !== 200){
      console.error("Peticion sin exito!");
    }

    return c.render(res.data);
  }
}

const Page = (props: PageProps<Character[]>) => {
  return(
    <div>
      <CharacterCard personajes={props.data}/>
    </div>
  )
}

export default Page;