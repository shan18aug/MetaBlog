import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import authService from "@/services/appwrite/auth.service";
import Input from "@/components/forms/Input";

function Signup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");

    try {
      const session = await authService.createAccount(data);
      if (session) {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md border rounded-xl p-8">
        <h1 className="text-2xl font-bold mb-6">Create Account</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit(create)} className="space-y-4">
          <Input
            label="Name"
            placeholder="Enter your name"
            {...register("name", {
              required: true,
            })}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
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
              minLength: 8,
            })}
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            Signup
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
