import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CarDetail from '../../components/CarDetail';


import Menu from '../../components/Menu';
import api from '../../services/api';



import './styles.css';

function Home() {  
  const [detailVisible, setDetailVisible] = useState(false);
  const [carlist, setCarList] = useState([
  ]);
  const [carDetail, setCarDetail] = useState({});
  

  useEffect(() => {
      api.get('/api/cars').then(response => {
          setCarList(response.data);
      })
  }, []);

  function handleOpenDetail (id) {
    api.get(`/api/cars/${id}`).then(response => {
      setCarDetail(response.data);
    }).then(() => {
      setDetailVisible(true);
    })    
  }

  function handleDeleteCar (){
    let res = window.confirm('Deseja excluir Carro?');

        if (res == true) {                      
            api.delete(`/api/cars/${carDetail._id}`).then(() => {
                alert('Excluido com sucesso!');
    
                setDetailVisible(false);
                api.get('/api/cars').then(response => {
                  setCarList(response.data);
              })
            }).catch(() => {
                alert('Erro ao excluir');
            })          
            
        }
  }

  return (
    <div id="page-home">
      <Menu />
      <div id="home-content" className="container">
        <div className="title">
          <h1>Lista de carros</h1>
        </div>
        <div className="cars">

        {/* map() para mostrar todos itens salvos da API */}
        {carlist.map(car => {
          return (
            <article className="car-item" key={car._id}>
              {/* Rota para navegar para detalhes do carro escolhido */}
              <button className="car-item-button" onClick={() => handleOpenDetail(car._id)} >
                <div className="details">
                  <h2 className="car-name">{car.title}</h2>
                  <p className="car-detail">{car.brand} {car.title}</p>
                  <p className="car-price">R$ {car.price}</p>
                  <p className="car-age">{car.age}/{car.age}</p>                  
                </div>
              </button> 
               
            </article>
          );
        })}
        
        </div>
        <div className="button">
          {/* Rota da nevageção para anúncio */}
          <Link to="/addcar">Cadastrar carro</Link>
        </div>
      </div>
      {detailVisible ?
                <CarDetail onClose={() => {setDetailVisible(false)}}>
                  <div className="modal-page">
                    <section>
                      <h1>Detalhes do carro</h1>
                      <p>Altere as informações desejadas do anúncio</p>
                    </section>
                    <h2 className="car-name">{carDetail.title}</h2>
                    <p className="car-detail">{carDetail.brand}</p>
                    <p className="car-price">R${carDetail.price}</p>
                    <p className="car-age">{carDetail.age}</p>

                    <div className="div-option-buttons" >
                      <Link to={`/editcar/${carDetail._id}`} >
                        <button className="button" >Editar</button>
                      </Link>
                      <button  className="button" onClick={handleDeleteCar} >Excluir Carro</button>
                    </div>
                  </div>
                </CarDetail>
              : null}        
    </div>
  );
};

export default Home;