export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgb(245,245,247)] text-[rgba(0,0,0,0.56)] py-4 mt-12">
      <div className="container mx-auto px-4 text-center md:text-left">
        <p className="text-mobile-description md:text-desktop-description">
          Copyright©{currentYear}ColumbusStudy - All right reserved
        </p>
      </div>
    </footer>
  );
}
