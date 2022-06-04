type Props = {
  isVisible: boolean;
};

const LoadingSpinner: React.FC<Props> = ({ isVisible }) => {
  if (isVisible) {
    return (
      <div className="bg-black bg-opacity-25 fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div className="bg-white p-2 rounded-full">
          <i className="bi-arrow-repeat flex text-4xl animate-spin" />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default LoadingSpinner;
