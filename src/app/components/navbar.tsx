import Image from "next/image";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-2 px-6 w-full md:w-3/4 mx-auto rounded-2xl bg-gradient-to-b from-gray-500 to bg-gray-900 mt-2 sticky top-2 z-50 opacity-50">
        <div>
          {/* image */}
          <Image src="/logo/logo.jpg" alt="logo" width={40} height={40} />
        </div>
        <div className="flex space-x-2 items-center">
          <a href="/about" className="text-gray-800">
            about
          </a>
          <a href="/login" className="text-gray-800">
            Login
          </a>
          <a href="/register" className="text-gray-800">
            Register
          </a>
        </div>
      </div>
    </>
  );
};
