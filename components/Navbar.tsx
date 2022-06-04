import { useSelector } from "react-redux";
import NavbarButton from "./NavbarButton";
import { RootState, store } from "../redux";
import { signOut } from "firebase/auth";
import { auth } from "../pages/_app";

const Navbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <nav className="flex flex-row justify-evenly items-center bg-gray-200 border-t border-gray-300 h-12 w-full shrink-0">
      <NavbarButton
        colorClass="text-green-600"
        iconClass="file-earmark-plus"
        title="New Note"
        href="/"
        type="link"
      />
      <NavbarButton
        colorClass="text-blue-600"
        iconClass="card-list"
        title="View All Notes"
        href="/notes"
        type="link"
      />
      {user === null ? (
        <NavbarButton
          colorClass="text-yellow-600"
          iconClass="person"
          title="Sign In"
          href="/signin"
          type="link"
        />
      ) : (
        <NavbarButton
          colorClass="text-yellow-600"
          iconClass="box-arrow-left"
          title="Sign Out"
          type="button"
          onClick={() => {
            signOut(auth);
          }}
        />
      )}

      <NavbarButton
        colorClass="text-red-600"
        iconClass="gear"
        title="Settings"
        href="/settings"
        type="link"
      />
      <NavbarButton
        colorClass="text-purple-600"
        iconClass="moon"
        type="button"
        onClick={() => console.log("toggle dark mode")}
        title="Toggle Dark Mode"
      />
    </nav>
  );
};

export default Navbar;
