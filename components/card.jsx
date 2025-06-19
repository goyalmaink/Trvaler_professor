export const Card = ({ children, className = '', hover = true }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg ${hover ? 'hover:shadow-xl transition-shadow duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
};