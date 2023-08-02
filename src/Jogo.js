import palavras from "./palavras";

export default function Jogo(props){

    const {setTeclasClicadas,setClassPalavra,setLetraErrada,setPalavraEscolhida,setPalavra,letraErrada,imagem,classPalavra,palavra} = props

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

    return(
        <div className="jogo">
            <img data-test="game-image" src={imagem[letraErrada]}/>
            <div>
                <button data-test="choose-word" className="iniciar" onClick={iniciarJogo}>Escolher Palavra</button>
                <div data-test="word" className="palavra" >
                <p className={classPalavra}>{palavra}</p>
                </div>
            </div>
        </div>
    );
}