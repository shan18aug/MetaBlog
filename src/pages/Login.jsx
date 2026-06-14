import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import authService from "@/services/appwrite/auth.service";
import Input from "@/components/forms/Input";
import { loginSuccess } from "@/features/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    setError("");

    try {
      const session = await authService.login(data);

      if (session) {
        const currentUser = await authService.getCurrentUser();

        if (currentUser) {
          const userData = {
            $id: currentUser.$id,
            name: currentUser.name,
            email: currentUser.email,
          };

          dispatch(loginSuccess(userData));
          console.log("Navigating to home");
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);

      setError(error?.message || "Failed to login");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border rounded-xl p-8">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: true,
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            {...register("password", {
              required: true,
            })}
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
