export default function Header() {
  return (
    <div className="flex w-full justify-between py-3 md:py-6 px-4 md:px-8 items-center">
      <strong className="text-xl md:text-2xl">Columbus Study</strong>
      <div className="md:hidden">
        <button className="text-2xl">☰</button>
      </div>
      <div className="hidden md:flex space-x-8">
        <p className="text-lg">Main</p>
        <p className="text-lg">Class</p>
      </div>
    </div>
  );
}
