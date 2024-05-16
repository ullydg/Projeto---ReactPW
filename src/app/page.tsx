import Link from "next/link";
import { NavBar } from "./components/navbar";
import { Title } from "./components/title";
import { Card } from "./components/card";

export default function Home() {

  const Cursos = [

    {
      id: 1,
    title: "Libras 01",
    poster_path:"https://sinasefe.org.br/site/wp-content/uploads/sites/3/2023/11/775-portal.jpg",
    vote_average: 6.6
  },
  
  {
  
    id: 2,
    title: "Inglês 01",
    poster_path:"https://cdn.wizard.com.br/wp-content/uploads/2019/06/14171239/diferen%C3%A7a-do-ingl%C3%AAs-americano-e-brit%C3%A2nico.jpg",
    vote_average: 8.6
  
  },
  
  {
  
    id: 3,
    title: "Espanhol 01",
    poster_path:"https://www.infomoney.com.br/wp-content/uploads/2019/06/brasao-bandeira-da-espanha.jpg?w=900&quality=70&strip=all",
    vote_average: 9.6
  
  },

  {
  
    id: 4,
    title: "Francês 01",
    poster_path:"https://s3.static.brasilescola.uol.com.br/be/2021/07/bandeira-francesa.jpg",
    vote_average: 5.6
  
  }

  ]

  
  return ( // JSX - TSX 
    <main className="flex min-h-screen flex-col ">

      <NavBar/>
        <Title>Idiomas para desenvolvedores</Title>
      <section className="flex gap-10 m-4 flex-wrap">
        {Cursos.map( curso=> <Card curso={curso}/>)}
      

      </section>

      <section>
        <Title>Cursos de programação</Title>
      </section>

    </main>
  );
}
