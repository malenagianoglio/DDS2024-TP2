import React, { useState } from 'react';
import './App.css';
import IngresoContrasena from './components/IngresoContrasena';
import FortalezaBarra from './components/FortalezaBarra';
import CopiarContrasena from './components/CopiarContrasena'; 
import PanelAvanzado from './components/PanelAvanzado';

function App() {
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [fortaleza, setFortaleza] = useState(0);
  const [mostrarPanel, setMostrarPanel] = useState(false); 
  const [error, setError] = useState('');

  const calcularFortaleza = (nuevoPassword) => {
    let fortaleza = 0;
    
    if (nuevoPassword.length === 0) return 0;  
    if (nuevoPassword.length >= 8) fortaleza += 1;  
    if (nuevoPassword.length >= 12) fortaleza += 1;
    if (nuevoPassword.match(/[a-z]/)) fortaleza += 1;  
    if (nuevoPassword.match(/[A-Z]/)) fortaleza += 1;  
    if (nuevoPassword.match(/[0-9]/)) fortaleza += 1;  
    if (nuevoPassword.match(/[@$!%*?&]/)) fortaleza += 1;  
    return fortaleza;
  };

  const manejarCambios = (e) => {
    const nuevoPassword = e.target.value;
    setPassword(nuevoPassword);
    setFortaleza(calcularFortaleza(nuevoPassword));  
  };

  const generarContrasenaAleatoria = ({ longitud, incluirMinusculas, incluirMayusculas, incluirNumeros, incluirEspeciales }) => {
    const mayusculas = incluirMayusculas ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    const minusculas = incluirMinusculas ? 'abcdefghijklmnopqrstuvwxyz' : '';
    const numeros = incluirNumeros ? '0123456789' : '';
    const especiales = incluirEspeciales ? '@$!%*?&' : '';

    if (!mayusculas && !minusculas && !numeros && !especiales) {
      setError('Debes seleccionar al menos un tipo de carácter');
      return '';
    } else {
      setError(''); 
    }    

    const contrasenaArray = [];
    if (incluirMayusculas) contrasenaArray.push(mayusculas.charAt(Math.floor(Math.random() * mayusculas.length)));
    if (incluirMinusculas) contrasenaArray.push(minusculas.charAt(Math.floor(Math.random() * minusculas.length)));
    if (incluirNumeros) contrasenaArray.push(numeros.charAt(Math.floor(Math.random() * numeros.length)));
    if (incluirEspeciales) contrasenaArray.push(especiales.charAt(Math.floor(Math.random() * especiales.length)));

    const caracteres = mayusculas + minusculas + numeros + especiales;
    for (let i = contrasenaArray.length; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      contrasenaArray.push(caracteres.charAt(indice));
    }

    const contrasena = contrasenaArray.sort(() => Math.random() - 0.5).join('');
    setPassword(contrasena);
    setFortaleza(calcularFortaleza(contrasena)); 
  };

  return (
    <div className="app-container">
      <h1 className="app-title">FORTALEZA DE CONTRASEÑA</h1>
      <div className='ingreso-contrasena'>
      <IngresoContrasena value={password} onChange={manejarCambios} mostrarPassword={mostrarPassword} />
      <button onClick={() => setMostrarPassword(!mostrarPassword)}>
        {mostrarPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
      </button>
      <CopiarContrasena password={password} />
      </div>
      <div className='barra-fortaleza'>
        <FortalezaBarra strength={fortaleza} />
      </div>
      <div className='panel-avanzado'>
      <button onClick={() => setMostrarPanel(!mostrarPanel)}>
        {mostrarPanel ? 'Ocultar Panel Avanzado' : 'Mostrar Panel Avanzado'}
      </button>
      {mostrarPanel && <PanelAvanzado onGenerate={generarContrasenaAleatoria} />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}
export default App;
