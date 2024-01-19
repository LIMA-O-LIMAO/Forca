'use client'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import Image from 'next/image'
import { Result } from "postcss";

export default function Home() {




  const [vida, setVida] = useState(6);
  const [resposta, setResposta] = useState(['']);
  const [verificar, setVerificar] = useState('');
  const palavras = ['Jogo', 'Vida', 'Construcao', 'Lindo', 'Universidade','Amor', 'Pele', 'Cristiano Ronaldo'];
  const [palavra, setPalavra] = useState('');




  useEffect(() => {
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(palavraAleatoria);

    const Arrays = palavraAleatoria.split('');
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
    // Verificar vitória
    if (!novasRespostas.includes('_')) {
      // O jogador venceu!



      Swal.fire({
        title: 'PARABÉNS!',
        text: 'Você acertou todas as letras. Você venceu!',
        icon: 'success',
        confirmButtonText: 'Confirmar',
      }).then((result) => {
        if (result.isConfirmed) {
          // Ação quando o botão de confirmação for pressionado
          window.location.reload();
        }
      });
    }



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



  }
  function Reiniciar() {

    location.reload()

  }
  return (
    <main className="flex flex-col h-full w-full">
      <h1 className="flex flex-row justify-center">FORCA</h1>

      <div className="gap-6 flex flex-col w-full h-full justify-center text-center items-center ">
  
      <p className="absolute  mr-7 text-[10px]">Sem dicas por enquanto</p>
        {vida == 6 && <Image
          src="/fase1.png"
          width={300}
          height={300}
          alt="Picture of the author"
          className="mr-16 "

        />}
        {vida == 5 && <Image
          src="/cabeca.png"
          width={300}
          height={300}
          alt="Picture of the author"
          className="mr-16"

        />}
        {vida == 4 && <Image
          src="/tronco.png"
          width={300}
          height={300}
          alt="Picture of the author"
          className="mr-16"

        />}
        {vida == 3 && <Image
          src="/braco1.png"
          width={300}
          height={300}
          alt="Picture of the author"
          className="mr-16"

        />}
        {vida == 2 && <Image
          src="/braco2.png"
          width={300}
          height={300}
          alt="Picture of the author"
          className="mr-16"

        />}
        {vida == 1 && <Image
          src="/perna1.png"
          width={300}
          height={300}
          alt="Picture of the author"
          className="mr-16"

        />}
        {vida == 0 && <Image
          src="/fim.png"
          width={300}
          height={300}
          alt="Picture of the author"
          className="mr-16"

        />}


        <p className=" animate-pulse Linhas"> {resposta.join(' ')}</p>
        {vida > 0 &&
          <input
            type="text"
            maxLength={1}
            className=" text-center uppercase  w-44 bg-transparent outline-0 border-b-2 border-gray-800 ;
          "
            placeholder="Digite aqui a letra"
            value={verificar}
            id="vai"
            onChange={(e) => setVerificar(e.target.value)}
          />
        }
        <p>Vidas restantes: {vida}</p>
        {vida > 0 &&
          <button className=" text-white  rounded-lg w-40 h-7 bg-cyan-500 shadow-lg shadow-cyan-500/50 " onClick={Bt} id="botao">Enviar</button>
        }

        {vida == 0 &&
          <button onClick={Reiniciar} className="text-white  rounded-lg w-40 h-7 bg-cyan-500 shadow-lg shadow-cyan-500/50"> Reiniciar jogo</button>
        }
      </div>
    </main>
  );
}
