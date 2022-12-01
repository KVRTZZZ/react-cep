import {useState} from 'react'
import API from './services/api'


import {FiSearch} from 'react-icons/fi'
import './style.css'


function App() {
    
    const [input, setInput] = useState('');
    const [cep, setCep] = useState({})
    
    
    async function handleSearch(){
        //06700575/json/
        if (input === '') {
            alert('digite algum cep')
            return;
        }
        
        try {
            const response = await API.get(`${input}/json/`);
            setCep(response.data)
            setInput('')
            console.log(response.data)
            
            } catch {
            alert('erro ao buscar espere um pouco e tente novamente')
            setInput('')
        }
        
    };
    
    
    
  return (
    <div className="App">
    <div className="container">
        <h1 className="title-1">Buscador De Cep</h1>
        
        <div className="containerInput">
        <input
        type="text"
        placeholder="Digite o cep"
        value={input}
        required='required'
        onChange={(e) => setInput(e.target.value)}
        />
        
        
        
        
        <button className="buttonSearch" onClick={handleSearch}> 
        <FiSearch size={25} color='#FFF'/>
        
        </button>
        </div>
        {Object.keys(cep).length > 0 && (
            <main className='main'>
            <h2>Cep: {cep.cep}</h2>
            <span> Bairro: {cep.bairro}</span>
            <span> Cidade: {cep.localidade}</span> 
            <span> Rua: {cep.logradouro}</span> 
            <span> Estado: {cep.uf} </span>
            <span> DDD: {cep.ddd} </span> 
            <span> Complemento: {cep.complemento} </span> 
        </main>
            )}
    </div>
    </div>
  );
}

export default App;