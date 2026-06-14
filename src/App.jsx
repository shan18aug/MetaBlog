import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "@/services/appwrite/auth.service";
import { loginSuccess, logoutSuccess, authChecked } from "@/features/authSlice";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  /*  
  Session Persistence (VERY IMPORTANT)
    When app loads,it checks existing session,fetch current user and update redux. 
  */
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((currentUser) => {
        if (currentUser) {
          const userData = {
            $id: currentUser.$id,
            name: currentUser.name,
            email: currentUser.email,
          };

          dispatch(loginSuccess(userData));
        } else {
          dispatch(logoutSuccess());
        }
      })
      .catch(() => {
        dispatch(logoutSuccess());
      })
      .finally(() => {
        dispatch(authChecked());
      });
  }, [dispatch]);

  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
