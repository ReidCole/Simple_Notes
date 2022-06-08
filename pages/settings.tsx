import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import Input from "../components/Input";
import LoadingSpinner from "../components/LoadingSpinner";
import MainContainer from "../components/MainContainer";
import MobileNavbar from "../components/MobileNavbar";
import Modal from "../components/Modal";
import Notification from "../components/Notification";
import PageHeading from "../components/PageHeading";
import useNotificationState from "../hooks/useNotificationState";
import { RootState } from "../redux";
import { deleteAccount, deleteAllLocalStorageNotes } from "../util/noteUtils";

const Settings: NextPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [deleteNotesModalShowing, setDeleteNotesModalShowing] = useState<boolean>(false);
  const [deleteAccountModalShowing, setDeleteAccountModalShowing] = useState<boolean>(false);
  const [notificationState, showNotification] = useNotificationState();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  function deleteLocalStorageNotes() {
    deleteAllLocalStorageNotes();
    setDeleteNotesModalShowing(false);
  }

  async function onDeleteAccount() {
    if (user === null) {
      showNotification(
        "Something went wrong. Please sign in again to try again.",
        "bg-red-400 border-red-500"
      );
      return;
    }
    try {
      setIsLoading(true);
      await deleteAccount(user.email, password);
      setIsLoading(false);
      router.push("/");
    } catch (e: any) {
      console.error(e.code);
      if (e.code === "auth/wrong-password") {
        showNotification("Incorrect password", "bg-red-400 border-red-500");
      } else {
        showNotification(
          "Something went wrong. Please try again later.",
          "bg-red-400 border-red-500"
        );
      }

      setIsLoading(false);
    }
  }

  return (
    <>
      <MainContainer>
        <PageHeading>Settings</PageHeading>
        <div className="p-2 flex flex-col items-center h-full">
          <p className="mb-2">{user ? `Signed in as ${user.email}` : "Not signed in"}</p>

          <ButtonGroup>
            <Button
              className="gap-1.5"
              enabledClasses="bg-red-700 text-white"
              onClick={() => {
                setDeleteNotesModalShowing(true);
              }}
              title="Delete All Browser Storage Notes"
            >
              <i className="bi-window text-xl flex" /> Delete Browser Storage Notes
            </Button>
            <Button
              className="gap-1"
              enabledClasses="bg-red-700 text-white"
              onClick={() => setDeleteAccountModalShowing(true)}
              title="Delete All Browser Storage Notes"
            >
              <i className="bi-person text-xl flex" /> Delete Account
            </Button>
          </ButtonGroup>
        </div>

        <MobileNavbar />
      </MainContainer>

      <Modal
        isOpen={deleteNotesModalShowing}
        setIsOpen={setDeleteNotesModalShowing}
        heading="Delete All Browser Storage Notes"
      >
        <p>This action cannot be undone</p>
        <Button
          className="gap-1.5"
          enabledClasses="bg-red-700 text-white"
          onClick={deleteLocalStorageNotes}
          title="Delete All Browser Storage Notes"
        >
          <i className="bi-trash text-xl flex" /> Delete Notes
        </Button>
      </Modal>

      <Modal
        isOpen={deleteAccountModalShowing}
        setIsOpen={setDeleteAccountModalShowing}
        heading="Delete Account"
      >
        <p>Please re-enter your password.</p>
        <Input
          name="Password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          title="Enter Your Password"
          type="password"
        />

        <Button
          className="gap-1.5"
          enabledClasses="bg-red-700 text-white"
          onClick={onDeleteAccount}
          title="Delete Account"
        >
          <i className="bi-trash text-xl flex" /> Delete Account
        </Button>
      </Modal>

      <Notification state={notificationState} />
      <LoadingSpinner isVisible={isLoading} />
    </>
  );
};

export default Settings;
