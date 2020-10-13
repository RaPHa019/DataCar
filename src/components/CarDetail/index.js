import React from "react";
import { useState, useEffect } from 'react';

import "./styles.css";

function CarDetail({ onClose, children, id = 'car-detail'}) {

    // função para fechar modal quando click fora da página
    const handleOutsideClick = (e) => {
      if(e.target.id === id) onClose();
    }
  
    // Retorno do modal
    return(
      <div id={id} className="modal-overlay" onClick={handleOutsideClick}>
        <div className="modal">
          <p className="close-modal" onClick={onClose}>X</p>
  
          <div className="modal-content">
  
          { children }
  
          </div>
        </div>
      </div>
    );
  };
  
  export default CarDetail;