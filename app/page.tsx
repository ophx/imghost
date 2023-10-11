import Link from "next/link";

export default function Home() {
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
            <p className="text-gray-300 text-xl max-w-lg py-4">Private & secure image host for Discord, Revolt or any other chat app that supports embeds.</p>
            <label htmlFor="loginModal" className="btn btn-outline border-blue-600 hover:border-blue-700 hover:bg-blue-700 text-blue-600 hover:text-white mr-4">
              Login
            </label>
            <label htmlFor="registerModal" className="btn btn-outline border-blue-600 hover:border-blue-700 hover:bg-blue-700 text-blue-600 hover:text-white mr-4">
              Register
            </label>
            <Link href="https://discord.gg/3DRqNct4vM" target="_blank" className="btn btn-outline border-[#5865F2] hover:border-[#5865F2] hover:bg-[#5865F2] text-[#5865F2] hover:text-white">
              Discord
            </Link>
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
        <div className="modal-box bg-gray-900 rounded-lg shadow-lg">
          <p className="text-white text-2xl text-center">Login</p>
          <div className="px-4 space-y-4">
            <div>
              <p className="text-gray-300 uppercase text-sm">Username</p>
              <input type="text" className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
            </div>
            <div>
              <p className="text-gray-300 uppercase text-sm">Password</p>
              <input type="password" className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
            </div>
            <div>
              <button className="btn bg-blue-700 hover:bg-blue-700 text-white w-full">
                Submit
              </button>
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="loginModal">Close</label>
      </div>

      {/* Register Modal */}
      <input type="checkbox" id="registerModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-gray-900 rounded-lg shadow-lg">
          <p className="text-white text-2xl text-center">Register</p>
          <div className="px-4 space-y-4">
            <div>
              <p className="text-gray-300 uppercase text-sm">Username</p>
              <input type="text" className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
            </div>
            <div>
              <p className="text-gray-300 uppercase text-sm">Password</p>
              <input type="password" className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
            </div>
            <div>
              <p className="text-gray-300 uppercase text-sm">Confirm Password</p>
              <input type="password" className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
            </div>
            <div>
              <p className="text-gray-300 uppercase text-sm">Invite Code</p>
              <input type="text" className="input input-bordered focus:outline-none bg-transparent placeholder-gray-300 text-gray-300 w-full" />
            </div>
            <div>
              <button className="btn bg-blue-700 hover:bg-blue-700 text-white w-full">
                Submit
              </button>
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="registerModal">Close</label>
      </div>
    </>
  )
}