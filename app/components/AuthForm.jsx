"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const tempEmailDomains = [
  "10minutemail.com",
  "temp-mail.org",
  "guerrillamail.com",
  "mailinator.com",
  "throwawaymail.com",
  "maildrop.cc",
  "mailinator2.com",
  "mailinator.net",
  "mailinator.org",
  "sogetthis.com",
  "spambox.us",
  "spamhole.com",
  "tempinbox.com",
  "tempmail.us",
  "tempmail2.com",
];

const isTemporaryEmail = (email) => {
  const domain = email.split("@")[1];
  return tempEmailDomains.includes(domain.toLowerCase());
};

const passwordStrength = (password) => {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  return strength;
};

const AuthForm = () => {
  const [authMode, setAuthMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrengthScore, setPasswordStrengthScore] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setError,
  } = useForm();

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  useEffect(() => {
    setPasswordStrengthScore(passwordStrength(password));
  }, [password]);

  const onSubmit = (data) => {
    if (isTemporaryEmail(data.email)) {
      setError("email", {
        type: "manual",
        message: "Temporary email addresses are not allowed.",
      });
    } else {
      console.log(data);
      // Handle form submission here
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign-in clicked");
  };

  useEffect(() => {
    reset();
  }, [authMode, reset]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-2xl w-full max-w-md transition-all duration-300 ease-in-out">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          {authMode === "login" ? "Welcome Back" : "Create Account"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {authMode === "register" && (
            <div className="transition-all duration-300 ease-in-out">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-150 ease-in-out"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500 dark:text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
                validate: (value) =>
                  !isTemporaryEmail(value) ||
                  "Temporary email addresses are not allowed",
              })}
              className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-150 ease-in-out"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password
            </label>
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  validate: (value) =>
                    passwordStrength(value) >= 3 ||
                    "Password must include uppercase, lowercase, number, and special character",
                })}
                className={`mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-150 ease-in-out ${
                  errors.password
                    ? "border-red-500"
                    : password
                    ? passwordStrengthScore >= 3
                      ? "border-green-500"
                      : "border-yellow-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-8 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">
                {errors.password.message}
              </p>
            )}
            {password && !errors.password && (
              <div className="mt-2">
                <div className="flex justify-between mb-1">
                  <span className="text-xs">Password strength:</span>
                  <span className="text-xs font-semibold">
                    {passwordStrengthScore < 3
                      ? "Weak"
                      : passwordStrengthScore < 5
                      ? "Medium"
                      : "Strong"}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${
                      passwordStrengthScore < 3
                        ? "bg-red-500"
                        : passwordStrengthScore < 5
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                    style={{ width: `${(passwordStrengthScore / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
          {authMode === "register" && (
            <div className="transition-all duration-300 ease-in-out">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className={`mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm transition duration-150 ease-in-out ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : confirmPassword
                    ? confirmPassword === password
                      ? "border-green-500"
                      : "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500 dark:text-red-400">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          )}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out transform hover:scale-105 active:scale-95"
          >
            {authMode === "login" ? "Sign In" : "Create Account"}
          </button>
        </form>
        <div className="mt-6">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
          >
            <FcGoogle className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() =>
              setAuthMode(authMode === "login" ? "register" : "login")
            }
            className="text-sm text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 transition duration-150 ease-in-out"
          >
            {authMode === "login"
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
