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

  const [letraErrada, setLetraErrada] = useState(0);

  const [classPalavra, setClassPalavra] = useState('preto');

  const [palavraEscolhida, setPalavraEscolhida] = useState('');

  const [palavra, setPalavra] = useState([]);

  const imagem = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

  return (
    <div>
      
      <Jogo 
        imagem={imagem}
        classPalavra={classPalavra}
        setClassPalavra={setClassPalavra}
        palavra={palavra}
        setPalavra={setPalavra}
        palavraEscolhida={palavraEscolhida} 
        setPalavraEscolhida={setPalavraEscolhida}
        teclasClicadas={teclasClicadas}
        setTeclasClicadas={setTeclasClicadas}
        letraErrada={letraErrada}
        setLetraErrada={setLetraErrada}
      />

      <Letras 
        alfabeto={alfabeto}
        imagem={imagem}
        classPalavra={classPalavra}
        setClassPalavra={setClassPalavra}
        palavra={palavra}
        setPalavra={setPalavra}
        palavraEscolhida={palavraEscolhida} 
        setPalavraEscolhida={setPalavraEscolhida}
        teclasClicadas={teclasClicadas}
        setTeclasClicadas={setTeclasClicadas}
        letraErrada={letraErrada}
        setLetraErrada={setLetraErrada}
      />

      
    </div>
  );
}

