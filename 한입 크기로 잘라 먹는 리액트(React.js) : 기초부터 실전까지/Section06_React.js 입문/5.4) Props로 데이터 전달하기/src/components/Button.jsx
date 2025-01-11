const Button = ({ text, color = "red", children }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
