export const Button = ({ label, textColor, onClick }) => {
    return (
      <button style={{ color: textColor }} onClick={onClick}>
        {label}
      </button>
    );
  };











