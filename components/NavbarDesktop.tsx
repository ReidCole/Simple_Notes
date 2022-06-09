import { useSelector } from "react-redux";
import NavbarButtonDesktop from "./NavbarButtonDesktop";
import { RootState, store } from "../redux";
import { signOut } from "firebase/auth";
import { auth } from "../pages/_app";
import { useRouter } from "next/router";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import useNotificationState from "../hooks/useNotificationState";
import Notification from "./Notification";

const NavbarDesktop: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notificationState, showNotification] = useNotificationState();
  const router = useRouter();

  return (
    <>
      <nav className="hidden items-center justify-between bg-gray-200 border-b border-gray-300 h-12 w-full shrink-0 md:flex flex-row">
        <h1 className="px-4 text-xl">Simple Notes</h1>
        <div className="flex flex-row h-full">
          <NavbarButtonDesktop
            iconClass="file-earmark-plus"
            text="New Note"
            title="New Note"
            href="/"
            type="link"
            gap="gap-1"
          />
          <NavbarButtonDesktop
            iconClass="card-list"
            text="All Notes"
            title="View All Notes"
            href="/notes"
            type="link"
            gap="gap-1.5"
          />
          {user === null ? (
            <NavbarButtonDesktop
              iconClass="person"
              text="Sign In"
              title="Sign In"
              href="/signin"
              type="link"
              gap="gap-1.5"
            />
          ) : (
            <NavbarButtonDesktop
              iconClass="box-arrow-left"
              text="Sign Out"
              title="Sign Out"
              type="button"
              gap="gap-1.5"
              onClick={async () => {
                setIsLoading(true);
                try {
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
          <NavbarButtonDesktop
            iconClass="gear"
            title="Settings"
            text="Settings"
            href="/settings"
            type="link"
            gap="gap-1.5"
          />
        </div>

        <LoadingSpinner isVisible={isLoading} />

        <Notification state={notificationState} />
      </nav>
    </>
  );
};

export default NavbarDesktop;
