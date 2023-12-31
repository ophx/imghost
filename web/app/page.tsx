"use client";

import Link from "next/link";
import { toast } from "react-toastify";

export default function Home() {
  async function handleLogin(e: any) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/login", { method: "POST", body: formData });
    const data = await response.json();

    if (data.type === "ERROR") {
      toast.error(data.message);
    } else {
      toast.success(data.message);
      window.location.href = "/dashboard";
    }
  }

  async function handleRegister(e: any) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/register", { method: "POST", body: formData });
    const data = await response.json();

    if (data.type === "ERROR") {
      toast.error(data.message);
    } else {
      toast.success(data.message);
    }
  }

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-8 px-8 bg-transparent w-full flex items-center justify-between">
        <div>
          <Link href="/">
            <p className="text-gray-300 text-xl">OH</p>
          </Link>
        </div>
        <div></div>
      </div>

      {/* Main */}
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <p className="text-white text-4xl">OphxHost</p>
            <p className="text-gray-300 text-xl max-w-lg py-4">A secure image host for Discord, Revolt or any other chat app that supports embeds.</p>
            <label htmlFor="loginModal" className="btn bg-[#111] hover:bg-[#222] border-none mr-4">
              Login
            </label>
            <label htmlFor="registerModal" className="btn bg-[#111] hover:bg-[#222] border-none mr-4">
              Register
            </label>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-8 px-8 bg-transparent w-full">
        <p className="text-gray-300 text-sm text-center">&copy; 2023 OphxHost &mdash; All rights reserved.</p>
      </div>

      {/* Login Modal */}
      <input type="checkbox" id="loginModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-[#111] rounded-lg shadow-lg">
          <p className="text-white text-2xl text-center">Login</p>
          <form onSubmit={handleLogin} className="px-4 space-y-4">
            <div>
              <p className="text-gray-300 uppercase text-sm">Username</p>
              <input required type="text" name="username" id="username" className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
            </div>
            <div>
              <p className="text-gray-300 uppercase text-sm">Password</p>
              <input required type="password" name="password" id="password" className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
            </div>
            <div>
              <button type="submit" className="btn bg-blue-700 hover:bg-blue-700 text-white w-full">
                Submit
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="loginModal">Close</label>
      </div>

      {/* Register Modal */}
      <input type="checkbox" id="registerModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-[#111] rounded-lg shadow-lg">
          <p className="text-white text-2xl text-center">Register</p>
          <form onSubmit={handleRegister} className="px-4 space-y-4">
            <div>
              <p className="text-gray-300 uppercase text-sm">Username</p>
              <input required type="text" name="username" id="username" className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
            </div>
            <div>
              <p className="text-gray-300 uppercase text-sm">Password</p>
              <input required type="password" name="password" id="password" className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
            </div>
            <div>
              <p className="text-gray-300 uppercase text-sm">Confirm Password</p>
              <input required type="password" name="confirmPassword" id="confirmPassword" className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
            </div>
            <div>
              <button type="submit" className="btn bg-blue-700 hover:bg-blue-700 text-white w-full">
                Submit
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="registerModal">Close</label>
      </div>
    </>
  )
}