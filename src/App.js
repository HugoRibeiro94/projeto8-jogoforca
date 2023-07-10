import { useState } from "react";
import forca0 from "./css/assets/forca0.png";
import forca1 from "./css/assets/forca1.png";
import forca2 from "./css/assets/forca2.png";
import forca3 from "./css/assets/forca3.png";
import forca4 from "./css/assets/forca4.png";
import forca5 from "./css/assets/forca5.png";
import forca6 from "./css/assets/forca6.png";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";

export default function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const [teclasClicadas,setTeclasClicadas] = useState([...alfabeto]);
  const [letraErrada, setLetraErrada] = useState(0)
  const [classPalavra, setClassPalavra] = useState('preto');
  const imagem = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  
  function jogar(letra){
    setTeclasClicadas([...teclasClicadas,letra]);

    if(palavraEscolhida.includes(letra)){

      const aparecerLetras = [...palavra];
      console.log(aparecerLetras);

      palavraEscolhida.map( (letraCerta,indice) => {

        if(letraCerta===letra)
        aparecerLetras[indice]=letraCerta;
      })
      
      setPalavra(aparecerLetras);
      if(aparecerLetras.join('') === palavraEscolhida.join('')){
        setClassPalavra('verde');
        setTeclasClicadas([...alfabeto]);
      }
    }else{
      const erro = letraErrada + 1;
      setLetraErrada(erro);

      if(erro == 6){
        setPalavra(palavraEscolhida);
        setTeclasClicadas([...alfabeto]);
        setClassPalavra('vermelho');
      }
    }
  }

  //const [teclado,setTeclado] = useState(true);

  const [palavraEscolhida, setPalavraEscolhida] = useState('');

  const [palavra, setPalavra] = useState([]);

  function iniciarJogo(){
    setTeclasClicadas([]);
    setClassPalavra('preto');
    setLetraErrada(0);
    const palavraArray = Math.floor(Math.random() * palavras.length);
    const palavraSorteada = palavras[palavraArray];
    console.log(palavraSorteada);
    
    
    const palavraSorteadaArray = palavraSorteada.split('');
    console.log(palavraSorteadaArray);
    setPalavraEscolhida(palavraSorteadaArray);

    const palavraTracejado = palavraSorteadaArray.map( letra => ' _' );
    console.log(palavraTracejado);
    setPalavra(palavraTracejado);
  }

  return (
    <div>
      <div className="jogo">
        <img data-test="game-image" src={imagem[letraErrada]}/>
        <div>
            <button data-test="choose-word" className="iniciar" onClick={iniciarJogo}>Escolher Palavra</button>
            <div data-test="word" className="palavra" >
              <p className={classPalavra}>{palavra}</p>
            </div>
        </div>
        
      </div>
      <div className="teclado">

        {alfabeto.map((letra, indice)=> 
          <button 
            key = {indice}
            onClick={() => jogar(letra) }
            className={`botaoTeclado ${teclasClicadas.includes(letra) ? "botaoClicado" : "botao"}`}
            disabled={teclasClicadas.includes(letra) ? true : false}
            data-test="letter" 
            >
              {letra}
          </button>
        )}

      </div>
    </div>
  );
}

