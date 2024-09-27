const FortalezaBarra = ({ strength }) => {
  const getSeguridad = () => {
    if (strength <= 2) return {color: 'red', label: 'Poco segura'};
    if (strength <= 5) return {color: 'yellow', label: 'Segura'};
    if (strength <= 6) return {color: 'green', label: 'Muy segura'};
  };

  const {color, label} = getSeguridad();
  const isVisible = strength > 0;

  return (
    <div>
      {isVisible && (
        <>
          <div className="strength-bar">
            <div
              className="strength-fill"
              style={{
                width: `${(strength / 6) * 100}%`,
                backgroundColor: color,
              }}
            />
          </div>
          <p className="strength-label">{label}</p>
        </>
      )}
    </div>
  );
};
export default FortalezaBarra;
