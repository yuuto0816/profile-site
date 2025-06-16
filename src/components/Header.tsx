import Link from 'next/link';

const Header = () => {
  // HeaderのCSSはまだ適用していないので、一旦classNameは空にします
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="/works" className="hover:text-gray-400">Works</Link></li>
            {/* <li><Link href="/blog" className="hover:text-gray-400">Blog</Link></li> */}
            <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;