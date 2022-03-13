import './App.css';
import { useState } from 'react';

 export default function App(){
  const [peso,setPeso]=useState('');
  const [altura,setAlt]=useState('');
  const [mensagem, setMensagem]= useState('')

  function calcularIMC(){
    const alt= altura / 100
    const imc= peso / (alt*alt);

    if(imc < 18.6){
      setMensagem ('Você está abaixo do peso. Seu IMC é ' + imc.toFixed(2))
    } else if (imc >= 18.6 && imc < 24.9){
      setMensagem ('Peso ideal, seu IMC é ' + imc.toFixed(2) )
    } else if ( imc >= 24.9 && imc < 34.9 ){
      setMensagem ('Você está um pouco acima do peso, seu IMC é ' + imc.toFixed(2))
    }else if ( imc > 34.9){
      setMensagem('Obesidade! seu imc é ' + imc.toFixed(2))
    } 
    
  }

  return(
  <div className="app">
      
      <h1>Calculadora IMC</h1>
      <span>Vamo calcular seu IMC</span>
     

      <div className="area-input">
          <input type='text' placeholder='Peso em KG' value={peso} onChange={ (e)=> setPeso(e.target.value) }/>
          <input type='text' placeholder='Altura em CM' value={altura} onChange={ (e)=> setAlt(e.target.value)}/>
          <button onClick={calcularIMC}>Calcular</button>
      </div>
      <h2>{mensagem}</h2>
  </div>
  )
}