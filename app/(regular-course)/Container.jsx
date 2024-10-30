export default function Container({ children }) {
  return (
    <div className="container mx-auto px-4 md:px-16 max-w-7xl w-full">
      {children}
    </div>
  );
}
