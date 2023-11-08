import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv5 } from "uuid";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsKeyboard } from "react-icons/bs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  return (
    <div className="min-h-screen flex flex-col items-center w-full ">
      <header className="bg-white w-full ">
        <nav className=" flex items-center justify-between px-6 py-3 w-full max-w-7xl mx-auto  ">
          <Link to={"/"} className="text-xl sm:text-2xl font-bold flex items-center ">
            <img src="icon.png" alt="logo" className="w-8 h-8 object-contain" />
            Zoom
          </Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link to={"/signin"}>Sign In</Link>
          </SignedOut>
        </nav>
      </header>

      <section className="flex flex-col  md:flex-row items-center md:justify-between pt-12 md:pt-24  w-full h-[calc(100vh-48px)] max-w-7xl mx-auto">
        <div className="flex flex-col items-center sm:items-start max-w-xl p-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Premium video meetings.{" "}
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            {" "}
            Now free for everyone
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 mt-4 text-center sm:text-left">
            We re-engineered the service that we built for secure business
            meetings, zoom Meet, to make it free and available for all.
          </p>
          <div className="flex items-center gap-2 pt-12 flex-wrap">
            <Link
              to={`/room/${uuidv5()}`}
              className="px-6 py-3 outline-none rounded bg-blue-700 text-white flex items-center gap-1.5"
            >
              <AiOutlineVideoCameraAdd className="w-5 h-5" />
              New Meeting
            </Link>
            <div className="flex items-center gap-1.5 flex-1 max-w-xs sm:max-w-sm border focus-within:border-blue-500  px-3 py-3 ">
              <BsKeyboard className="w-5 h-5 text-gray-500" />
              <input
                className="outline-none flex-1 ml-1.5"
                placeholder="Enter code"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
              />
            </div>
            <Link
              className="ml-1.5 text-zinc-500 font-bold"
              to={`/room/${roomId.trim().length === 0 ? uuidv5() : roomId.trim()
                }`}
            >
              Join
            </Link>
          </div>
        </div>

        <div className="h-96 sm:h-full relative">
          <img
            src="src/assets/preview.jpg"
            alt="preview"
            className="w-full h-full object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
