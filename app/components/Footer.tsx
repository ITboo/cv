import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} Hanna Parfenava.</p>
      </div>
    </footer>
  );
};
export default Footer
