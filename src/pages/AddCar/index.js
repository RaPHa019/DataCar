import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '../../components/Menu';
import api from '../../services/api';
import './styles.css';
import Input from '../../components/Input';

function AddCar() {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [age, setAge] = useState('');

    function handleCreateCar(e) {
        e.preventDefault();
        api.post('/api/cars', {
            title,
            brand,
            price,
            age: Number(age)
        }).then(() => {
            alert('cadastro realizado com sucesso!');

            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro');
        })
        console.log(title, brand, age, price);
    }

    return(
        <div id="page-car-form">
            <Menu />
            <div id="car-form-content" className="container">
            <h1> Adicionar Carro </h1>
            
                <form id="car-form" onSubmit={handleCreateCar}>
                    
                        <legend>Dados do Carro</legend>
                        
                        <Input 
                            type="text"
                            placeholder="Nome do carro"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input 
                            type="text"
                            placeholder="Marca"
                            value={brand}
                            onChange={e => setBrand(e.target.value)}
                        />
                        <Input 
                            type="text"
                            placeholder="Preço em Reais"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                        <Input 
                            type="number"
                            placeholder="Ano"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                        />
                        <div className="input-block">  
                            <button type="submit">Salvar</button>                          
                            
                        </div>
                    
                </form>
            
        </div>
        </div>
        
    );
}

export default AddCar;
