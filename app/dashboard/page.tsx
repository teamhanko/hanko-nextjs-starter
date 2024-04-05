import { fetchCurrentUser } from '@/lib/fetchCurrentUser';
import dynamic from 'next/dynamic';
import { useUserData } from "@/hooks/useUserData";
// import { useSessionData } from "@/hooks/useSessionData";

const HankoProfile = dynamic(() => import('@/components/hanko/HankoProfile'), { ssr: false })

const DashboardPage = async () => {
  const user = await fetchCurrentUser()

  // const { id, email, loading: userDataLoading, error: userDataError } = useUserData();
  // const { userID, jwt, isValid, loading: sessionDataLoading, error: sessionDataError } = useSessionData();

  // if (userDataLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div>User id: {id}</div>
      <div>User email: {email}</div>
      <div>{"hello world"}</div>
      <div>{userID}</div>
      <div>{jwt} </div>
      <div>{isValid? "session is valid" : "not valid"} </div> */}
      <HankoProfile />
    </div>
  );
};

export default DashboardPage;
