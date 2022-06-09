import { useSelector } from "react-redux";
import NavbarButton from "./NavbarButton";
import { RootState, store } from "../redux";
import { signOut } from "firebase/auth";
import { auth } from "../pages/_app";
import { useRouter } from "next/router";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import useNotificationState from "../hooks/useNotificationState";
import Notification from "./Notification";

const NavbarMobile: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notificationState, showNotification] = useNotificationState();
  const router = useRouter();

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
          onClick={async () => {
            setIsLoading(true);
            try {
              throw "chee";
              await signOut(auth);
              router.reload();
            } catch (e) {
              console.error(e);
              setIsLoading(false);
              showNotification(
                "Something went wrong while signing out. Please try again later.",
                "bg-red-400 border-red-500"
              );
            }
          }}
        />
      )}

      <NavbarButton iconClass="gear" title="Settings" href="/settings" type="link" />

      <LoadingSpinner isVisible={isLoading} />

      <Notification state={notificationState} />
    </nav>
  );
};

export default NavbarMobile;
