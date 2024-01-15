'use client'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();


  
  const [vida, setVida] = useState(6);
  const [resposta, setResposta] = useState(['']);
  const [verificar, setVerificar] = useState('');

  useEffect(() => {
    const palavra = 'Clara';
    const Arrays = palavra.split('');
    setResposta(Arrays.map(() => '_'));
  }, []);

  
  function Teste() {
    const palavra = 'Clara';
    const Arrays = palavra.split('');
    let letraEncontrada = false;

    const novasRespostas = resposta.map((letra, index) => {
      if (Arrays[index].toUpperCase() === verificar.toUpperCase()) {
        letraEncontrada = true;
        return Arrays[index].toUpperCase();
      }
      return letra;
    });

    setResposta(novasRespostas);

    if (!letraEncontrada) {
      setVida((prevVida) => prevVida > 0 ? prevVida - 1 : 0);
    
  

    }

    console.log('Letra encontrada?', letraEncontrada, novasRespostas);
  }


 

  if(vida===0){

    router.push('/Pages');
  

  }

  return (
    <main className="flex flex-col h-full w-full">
      <h1 className="flex flex-row justify-center">FORCA</h1>

      <div className="gap-6 flex flex-col w-full h-full justify-center text-center items-center">
        <p className="Linhas"> {resposta.join(' ')}</p>

        <input
          type="text"
          maxLength={1}
          className="border-black/50 border-b-2 w-56 flex justify-center text-center"
          placeholder="Digite aqui a letra"
          value={verificar}
          id="vai"
          onChange={(e) => setVerificar(e.target.value)}
        />
        <p>Vidas restantes: {vida}</p>
        <button onClick={Teste}>Enviar</button>

     
      </div>
    </main>
  );
}
