import { useEffect, useState } from "react";
import { NotificationState } from "../hooks/useNotificationState";

type Props = {
  state: NotificationState;
};

const Notification: React.FC<Props> = ({ state }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (state.count === 0) return;

    setIsOpen(true);
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [state.count]);

  return (
    <div className="fixed bottom-0 w-full flex flex-col items-center justify-center p-2 pointer-events-none">
      <div
        className={
          "border-4 rounded-lg shadow-2xl shadow-black p-2 text-white max-w-sm transition-transform " +
          (isOpen ? "translate-y-0 " : "translate-y-36 ") +
          state.styles
        }
      >
        {state.text}
      </div>
    </div>
  );
};

export default Notification;
