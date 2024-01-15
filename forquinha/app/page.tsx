'use client'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();


  
  const [vida, setVida] = useState(6);
  const [resposta, setResposta] = useState(['']);
  const [verificar, setVerificar] = useState('');

  useEffect(() => {
    const palavra = 'Samara';
    const Arrays = palavra.split('');
    setResposta(Arrays.map(() => '_'));
  }, []);

  
  function Teste() {
    const palavra = 'Samara';
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
    
      document.getElementById('vai').disabled = true;

    }

    console.log('Letra encontrada?', letraEncontrada, novasRespostas);
  }

if(vida===0){

  router.push('/Pages');



}
  function reiniciar(){

location.reload();


  }



  return (
    <main className="flex flex-col h-full w-full">
      <nav className="flex flex-row justify-center">FORCA</nav>

      <div className="gap-6 flex flex-col w-full h-full justify-center text-center items-center">
        <p>Linhas {resposta.join(' ')}</p>

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

        <button onClick={reiniciar}>Reiniciar o jogo</button>
      </div>
    </main>
  );
}
