import React, { useState, FormEvent, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Menu from '../../components/Menu';
import Input from '../../components/Input';
import api from '../../services/api';
import './styles.css';

function EditCar() {
    const history = useHistory();
    const { idCar } = useParams();
    const [carInfo, setCarInfo] = useState({});
    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [age, setAge] = useState('');


    useEffect(() => {     
        api.get(`/api/cars/${idCar}`).then(response => {
            setCarInfo(response.data);
        })
    },[]);

    useEffect(() => {
        setTitle(carInfo.title);
        setBrand(carInfo.brand);
        setPrice(carInfo.price);
        setAge(carInfo.age);        
    },[carInfo]);

    
    function handleEditCar(e) {
        e.preventDefault();
        api.put(`/api/cars/${idCar}`, {
            title,
            brand,
            price,
            age: Number(age)
        }).then(() => {
            alert('Edição realizada com sucesso!');

            history.push('/');
        }).catch(() => {
            alert('Erro na edição');
        })
        console.log(title, brand, age, price);
    }

    return(
        <div id="page-edit-car">
            <Menu />            
            
            <div id='edit-car-form' className="container">
                <h1> Editar carro </h1>
                <form id="car-form" onSubmit={handleEditCar}>
                        
                        <legend>Altere os valores que desejar do carro</legend>
                        
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

export default EditCar;
