const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-8">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;