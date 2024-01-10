"use client"
import { useState, useEffect } from "react";


  

export default function Home() {


  const [vida, setVida] = useState(6);
  const [resposta, setResposta] = useState(['']);

useEffect(()=>{

const letras= 3;

setResposta([...Array(10).fill('_ ')]);

},[]);


  function contagem() {
    //if ( vida >0) {
      //setVida((prevVida) => prevVida - 1);
    //}


 
}

  return (


    
   <main className=" flex  flex-col h-full w-full">

<nav className=" flex flex-row justify-center">
FORCA
</nav>




<div className=" gap-6 flex flex-col w-full h-full justify-center text-center items-center ">
<p>linhas {resposta}</p>

  <input type="text" maxLength={1}  className="border-black/50 border-b-2 w-56 flex justify-center text-center" placeholder="Digite aqui a letra" onChange={contagem}/>
      <p>Vidas restantes: {vida}</p>
      
    
    </div>

   </main>
  )
}
