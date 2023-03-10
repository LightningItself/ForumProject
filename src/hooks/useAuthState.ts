import { useSession } from "next-auth/react";

const useAuthState = () => {
  const { data } = useSession();
  const user = data?.user;
  return user;
};

export default useAuthState;
