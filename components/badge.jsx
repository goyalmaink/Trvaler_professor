export const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-orange-100 text-orange-800',
    success: 'bg-green-100 text-green-800',
    info: 'bg-blue-100 text-blue-800'
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};