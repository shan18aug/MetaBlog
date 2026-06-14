import { useSelector } from "react-redux";
import authService from "@/services/appwrite/auth.service";

function Home() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  // logout
  const logout = async () => {
    await authService.logout();
    window.location.reload();
  };

  return (
    <div>
      Home
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
