const useFirebaseErrors = () => {
  function getFirebaseError(errorCode: any) {
    switch (errorCode) {
      case "auth/wrong-password":
        return "Wrong password for this email.";
      case "auth/user-not-found":
        return "No account with this email. Did you mean to create an account?";
      case "auth/email-already-in-use":
        return "This email is already in use by another account. Did you mean to sign in?";
      case "auth/weak-password":
        return "Password is too weak. Please use a stronger or longer password.";
      case "auth/invalid-email":
        return "Email is invalid.";
      case "auth/too-many-requests":
        return "Too many requests to the server. Please try again later.";
      case "auth/internal-error":
        return "Internal server error. Please try again later.";
      case "firebase-context-null":
        return "Couldn't connect to authentication servers. Please try again later.";
      case "auth/user-disabled":
        return "This account has been disabled.";
      default:
        return errorCode;
    }
  }

  return getFirebaseError;
};

export default useFirebaseErrors;
