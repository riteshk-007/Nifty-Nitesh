"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";

const AuthDialog = ({ isOpen, onClose }) => {
  const [authMode, setAuthMode] = useState("login");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-green-400">
            {authMode === "login" ? "Login" : "Register"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-green-400 dark:hover:text-green-300"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>
        <p className="mb-6 text-sm text-gray-600 dark:text-green-300">
          {authMode === "login"
            ? "Enter your credentials to access your account."
            : "Create a new account to get started."}
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {authMode === "register" && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-green-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
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
              className="block text-sm font-medium text-gray-700 dark:text-green-400"
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
              })}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-green-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>
          {authMode === "register" && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 dark:text-green-400"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
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
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            {authMode === "login" ? "Login" : "Register"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() =>
              setAuthMode(authMode === "login" ? "register" : "login")
            }
            className="text-sm text-primary-600 hover:text-primary-500 dark:text-green-400 dark:hover:text-green-300"
          >
            {authMode === "login"
              ? "Don't have an account? Register here"
              : "Already have an account? Login here"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthDialog;
