const Button = ({ children, onClick }) => {
  const handleClick = () => {
    console.log('Button clicked!');
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
    >
      {children}
    </button>
  );
};

export default Button; 