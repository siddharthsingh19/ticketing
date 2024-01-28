import Link from "next/link";
import { FaTicketAlt } from "react-icons/fa";
import { FaFedora } from "react-icons/fa6";
const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FaFedora className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FaTicketAlt className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">canis@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
