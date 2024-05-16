import { Button } from "@/app/components/button";
import { NavBar } from "@/app/components/navbar";
import { ArrowLeft, Eye, Link, Youtube } from "lucide-react";

export default function Detalhe() {
  return ( // JSX - TSX 
    <main className="flex min-h-screen flex-col ">

     <NavBar/>
      <section className="flex p-12 gap-9 bg-[url('https://sinasefe.org.br/site/wp-content/uploads/sites/3/2023/11/775-portal.jpg')]">

          <div className="w-[300px] rounded overflow-hidden">
          <img src="https://www.sed.ms.gov.br/wp-content/uploads/2024/02/Curso-de-Libras.png" alt="" />
          </div>

          <div className="flex flex-col gap-9">
          <h2 className="text-4xl font-bold">Título Curso</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore architecto saepe delectus quis rem sed harum neque quia et a. Sunt autem quam iure est eum et ex dolorum perferendis?</p>
          </div>


      </section>

          <section className="flex gap-6 m-4">

            <Button label="voltar" href="/" icon= {<ArrowLeft />} />
            <Button label="site" href="/" icon= {<Link />} />
            <Button label="prévia" href="/" icon= {<Eye />} />

          </section>
    </main>
  );
}
