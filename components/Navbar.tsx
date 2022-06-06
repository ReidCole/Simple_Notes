import { useSelector } from "react-redux";
import NavbarButton from "./NavbarButton";
import { RootState, store } from "../redux";
import { signOut } from "firebase/auth";
import { auth } from "../pages/_app";

const Navbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <nav className="flex flex-row justify-evenly items-center bg-gray-200 border-t border-gray-300 h-12 w-full shrink-0">
      <NavbarButton iconClass="file-earmark-plus" title="New Note" href="/" type="link" />
      <NavbarButton iconClass="card-list" title="View All Notes" href="/notes" type="link" />
      {user === null ? (
        <NavbarButton iconClass="person" title="Sign In" href="/signin" type="link" />
      ) : (
        <NavbarButton
          iconClass="box-arrow-left"
          title="Sign Out"
          type="button"
          onClick={() => {
            signOut(auth);
          }}
        />
      )}

      <NavbarButton iconClass="gear" title="Settings" href="/settings" type="link" />
      <NavbarButton
        iconClass="moon"
        type="button"
        onClick={() => console.log("toggle dark mode")}
        title="Toggle Dark Mode"
      />
    </nav>
  );
};

export default Navbar;
