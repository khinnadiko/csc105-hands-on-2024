import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

const userSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    navigate("/");
  };
  return (
    <div className="container flex flex-col min-w-screen min-h-screen justify-center items-center bg-gray-100">
      <div className="form shadow-lg w-1/4 p-6 bg-white rounded-lg">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="font-bold">Email</label>
            <input
              className="rounded-sm"
              {...register("email")}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </div>
          <div>
            <label className="font-bold">Password</label>
            <input
              className="rounded-sm"
              {...register("password")}
              placeholder="Enter your password"
            />
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
            )}
          </div>

          <button
            className="bg-blue-500 py-2 text-white rounded-sm"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 font-semibold">
          Don't have an account?{" "}
          <Link className="text-blue-500 underline" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
