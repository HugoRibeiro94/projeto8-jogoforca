export default function Letras(props){

    const {teclasClicadas,setTeclasClicadas,palavraEscolhida, setClassPalavra,setLetraErrada,alfabeto,setPalavra,letraErrada,palavra} = props

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
    
    return (
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
    )
}