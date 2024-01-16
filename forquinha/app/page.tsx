'use client'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'


export default function Home() {

  const router = useRouter();



  const [vida, setVida] = useState(6);
  const [resposta, setResposta] = useState(['']);
  const [verificar, setVerificar] = useState('');
  const [palavra, setpalavra] = useState ('Clara')


    useEffect(() => {
      const Arrays = palavra.split('');
      setResposta(Arrays.map(() => '_'));
    }, []);


  function Teste() {
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



  if (vida === 0) {
    document.getElementById('resp').innerText = palavra

    Swal.fire({
      title: 'QUE PENA!',
      titleText: 'Voce Perdeu, Quem sabe na proxima. A Palavra era:',
      text: 'A palavra era ' +palavra,
      icon: 'error',
      confirmButtonText: 'Reiniciar',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Ação quando o botão de confirmação for pressionado
        window.location.reload();
      }
      // router.push('/Pages');
    })
 
  }

  return (
    <main className="flex flex-col h-full w-full">
      <h1 className="flex flex-row justify-center">FORCA</h1>

      <p id="resp" >saa</p>
      <div className="gap-6 flex flex-col w-full h-full justify-center text-center items-center pt-40">
        <p className="Linhas"> {resposta.join(' ')}</p>

        <input
          type="text"
          maxLength={1}
          className=" 
          w-56 flex justify-center 
          text-center text-black
        
          "
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
