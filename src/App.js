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

  //const [teclasClicadas,setTeclasClicadas] = useState([]);
  const [teclado,setTeclado] = useState(true);

  function iniciarJogo(){
    setTeclado(false);
  }

  function alerta(){
    alert("oi");
  }
  return (
    <div>
      <div className="jogo">
        <img src={forca0}/>
        <div>
            <button className="iniciar" onClick={iniciarJogo}>Escolher Palavra</button>
        </div>
        
      </div>
      <div className="teclado">
        {alfabeto.map((letra)=> <button className="botaoTeclado" disabled={teclado} onClick={alerta}>{letra}</button>)}
      </div>
    </div>
  );
}

