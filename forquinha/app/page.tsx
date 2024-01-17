'use client'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import Image from 'next/image'

export default function Home() {




  const [vida, setVida] = useState(6);
  const [resposta, setResposta] = useState(['']);
  const [verificar, setVerificar] = useState('');
  const [palavra, setpalavra] = useState('Clara');





  useEffect(() => {
    const Arrays = palavra.split('');
    setResposta(Arrays.map(() => '_'));
  }, []);


  function Bt() {
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






  if (vida === 5) {




  }




  if (vida === 0) {


    Swal.fire({
      title: 'QUE PENA!',
      titleText: 'Voce Perdeu, Quem sabe na proxima. A Palavra era:',
      text: 'A palavra era ' + palavra,
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


    document.getElementById('vai').disabled = true


  }
  function Reiniciar() {

    location.reload()

  }
  return (
    <main className="flex flex-col h-full w-full">
      <h1 className="flex flex-row justify-center">FORCA</h1>

    
      <div className="gap-6 flex flex-col w-full h-full justify-center text-center items-center ">
        {vida==6 &&    <Image
      src="/fase1.png"
      width={300}
      height={300}
      alt="Picture of the author"
      className="mr-16"
  
/>}
        {vida==5 &&    <Image
      src="/cabeca.png"
      width={300}
      height={300}
      alt="Picture of the author"
      className="mr-16"
  
/>}
        {vida==4 &&    <Image
      src="/tronco.png"
      width={300}
      height={300}
      alt="Picture of the author"
      className="mr-16"
  
/>}
        {vida==3 &&    <Image
      src="/braco1.png"
      width={300}
      height={300}
      alt="Picture of the author"
      className="mr-16"
  
/>}
        {vida==2 &&    <Image
      src="/braco2.png"
      width={300}
      height={300}
      alt="Picture of the author"
      className="mr-16"
  
/>}
        {vida==1 &&    <Image
      src="/perna1.png"
      width={300}
      height={300}
      alt="Picture of the author"
      className="mr-16"
  
/>}
        {vida==0 &&    <Image
      src="/fim.png"
      width={300}
      height={300}
      alt="Picture of the author"
      className="mr-16"
  
/>}


        <p className="Linhas"> {resposta.join(' ')}</p>

        <input
          type="text"
          maxLength={1}
          className="text-center w-44 bg-transparent text-white outline-0 border-b-2 border-yellow-500 ;
          "
          placeholder="Digite aqui a letra"
          value={verificar}
          id="vai"
          onChange={(e) => setVerificar(e.target.value)}
        />
        <p>Vidas restantes: {vida}</p>
        <button onClick={Bt} id="botao">Enviar</button>

        <button onClick={Reiniciar}> Reiniciar jogo</button>
      </div>
    </main>
  );
}
