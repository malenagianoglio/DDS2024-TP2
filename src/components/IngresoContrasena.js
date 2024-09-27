const IngresoContrasena = ({ value, onChange, mostrarPassword }) => {
    return (
        <input 
            type={mostrarPassword ? 'text' : 'password'}
            value={value} 
            onChange={onChange} 
            placeholder="Ingresa tu contraseña"
            className="password-input"
        />
    );
};
export default IngresoContrasena;

