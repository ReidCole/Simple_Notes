import Link from "next/link";
import NavbarLink from "./NavbarLink";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-row justify-evenly items-center bg-gray-200 border-t border-gray-300 h-12 w-full shrink-0">
      <NavbarLink
        colorClass="text-green-600"
        iconClass="file-earmark-plus"
        linkTitle="New Note"
        href="/"
      />
      <NavbarLink
        colorClass="text-blue-600"
        iconClass="card-list"
        linkTitle="View All Notes"
        href="/notes"
      />
      <NavbarLink
        colorClass="text-yellow-600"
        iconClass="person"
        linkTitle="Sign In"
        href="/signin"
      />
      <NavbarLink
        colorClass="text-red-600"
        iconClass="gear"
        linkTitle="Settings"
        href="/settings"
      />
      <button
        className={`text-purple-600 text-3xl flex items-center hover:text-black focus-visible:text-black focus-visible:outline-1 outline-black transition-colors p-1`}
        title="Toggle Dark Mode"
      >
        <i className="bi-moon flex"></i>
      </button>
    </nav>
  );
};

export default Navbar;
