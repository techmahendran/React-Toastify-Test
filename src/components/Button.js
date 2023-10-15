const Button = ({ onSuccess, onWarningBtn, onInfoBtn, onErrorBtn }) => {
  return (
    <>
      <div className="buttons">
        <button className="btn" onClick={onSuccess} id="success">
          Success
        </button>

        <button className="btn" onClick={onWarningBtn} id="warning">
          Warning
        </button>

        <button className="btn" onClick={onInfoBtn} id="info">
          Info
        </button>

        <button className="btn" onClick={onErrorBtn} id="error">
          Error
        </button>
      </div>
    </>
  );
};

export default Button;
