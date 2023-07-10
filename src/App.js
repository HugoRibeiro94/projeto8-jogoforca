import { useState } from "react";
import forca0 from "./css/assets/forca0.png";
/*import forca1 from "./css/assets/forca1.png";
import forca2 from "./css/assets/forca2.png";
import forca3 from "./css/assets/forca3.png";
import forca4 from "./css/assets/forca4.png";
import forca5 from "./css/assets/forca5.png";
import forca6 from "./css/assets/forca6.png";
import Jogo from "./Jogo";
import Letras from "./Letras";*/
import palavras from "./palavras";

export default function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const [teclasClicadas,setTeclasClicadas] = useState([]);

  function desabilitarTeclas(i){
    setTeclasClicadas([...teclasClicadas,i]);
  }
  
  const [teclado,setTeclado] = useState(true);

  const [palavraEscolhida, setPalavraEscolhida] = useState('');

  const [palavra, setPalavra] = useState([]);

  function iniciarJogo(){
    setTeclado(false);
    const arrayEmbaralhado = palavras.sort(comparador);
    setPalavraEscolhida(arrayEmbaralhado[0]);
    console.log(palavraEscolhida);
    const palavraEscolhidaArray = palavraEscolhida.split('');
    console.log(palavraEscolhidaArray);
    console.log(palavraEscolhida.length);

    const palavraTracejado = palavraEscolhidaArray.map( letra => ' _' );
    console.log(palavraTracejado);
    setPalavra(palavraTracejado);
  }

  function comparador() { 
    return Math.random() - 0.5; 
  }

  return (
    <div>
      <div className="jogo">
        <img data-test="game-image" src={forca0}/>
        <div>
            <button data-test="choose-word" className="iniciar" onClick={iniciarJogo}>Escolher Palavra</button>
            <div data-test="word" className="palavra">{palavra}</div>
        </div>
        
      </div>
      <div className="teclado">

        {alfabeto.map((letra, indice)=> 
          <button 
            onClick={() => desabilitarTeclas(indice) }
            className={`botaoTeclado ${teclasClicadas.includes(indice) ? "botaoClicado" : "botao"}`}
            disabled={teclado}
            data-test="letter" 
            >
              {letra}
          </button>
        )}

      </div>
    </div>
  );
}

