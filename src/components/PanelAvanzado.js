import React, { useState } from 'react';

const PanelAvanzado = ({ onGenerate }) => {
  const [longitud, setLongitud] = useState(0);
  const [incluirMinusculas, setIncluirMinusculas] = useState(true);
  const [incluirMayusculas, setIncluirMayusculas] = useState(true);
  const [incluirNumeros, setIncluirNumeros] = useState(true);
  const [incluirEspeciales, setIncluirEspeciales] = useState(true);
  
  const manejarGenerar = () => {
    onGenerate({ longitud, incluirMinusculas, incluirMayusculas, incluirNumeros, incluirEspeciales });
  };

  return (
    <div className="panel">
      <h3>Configuración de Contraseña</h3>
      <label>
        Longitud:
        <input type="number" value={longitud} onChange={(e) => setLongitud(Number(e.target.value))} min="0" />
        <button className='controladoresLongitud' onClick={() => setLongitud((prev) => Math.max(0, prev - 1))}>-</button>
        <button className='controladoresLongitud' onClick={() => setLongitud((prev) => prev + 1)}>+</button>
      </label>
      <label>
        Incluir letras minúsculas:
        <input type="checkbox" checked={incluirMinusculas} onChange={() => setIncluirMinusculas(!incluirMinusculas)} />
      </label>
      <label>
        Incluir letras mayúsculas:
        <input type="checkbox" checked={incluirMayusculas} onChange={() => setIncluirMayusculas(!incluirMayusculas)} />
      </label>
      <label>
        Incluir números:
        <input type="checkbox" checked={incluirNumeros} onChange={() => setIncluirNumeros(!incluirNumeros)} />
      </label>
      <label>
        Incluir caracteres especiales:
        <input type="checkbox" checked={incluirEspeciales} onChange={() => setIncluirEspeciales(!incluirEspeciales)} />
      </label>
      <button onClick={manejarGenerar}>Generar Contraseña</button>
    </div>
  );
};
export default PanelAvanzado;
