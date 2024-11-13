const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-400">&copy; {currentYear} Hanna Parfenava</p>
      </div>
    </footer>
  );
};
export default Footer