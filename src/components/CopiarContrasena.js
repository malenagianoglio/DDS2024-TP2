import React, { useState } from 'react';

const CopiarContrasena = ({ password }) => {
  const [copiado, setCopiado] = useState(false);

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(password);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 3000); 
  };

  return (
    <div>
      <button onClick={copiarAlPortapapeles} disabled={!password}>
        Copiar contraseña
      </button>
      {copiado && <p>¡Contraseña copiada al portapapeles!</p>}
    </div>
  );
};
export default CopiarContrasena;

