import React, { useEffect, useState } from "react";
import { logo } from "../utils/variables";
import { useNavigate, Link } from "react-router-dom";
import { BiSearchAlt, BiLogInCircle } from "react-icons/bi";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/config";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  // handle search
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search/${searchQuery}`);
    }
    setSearchQuery("");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        setUser(user);
      }
    });
  }, []);

  return (
    <div className=" fixed top-0 left-0 w-full h-[70px] shadow-md z-[100] bg-white">
      <div className="flex items-center px-1 py-2 sm:px-8 justify-between h-full">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Youtube logo"
            className="h-[60px] w-[100px] sm:w-[120px] rounded"
          />
        </Link>
        <div className="flex items-center gap-2">
          <form
            className="md:w-[300px] lg:w-[430px] relative"
            onSubmit={handleSubmit}
          >
            <input
              className="border-none outline-none w-full h-full rounded-xl py-2 px-4 pr-10 bg-gray-200"
              type="text"
              placeholder="Search Videos"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            <button
              type="submit"
              className="text-[#c22113] absolute top-2 right-2 text-xl"
            >
              <BiSearchAlt />
            </button>
          </form>
          <div>
            {!user ? (
              <BiLogInCircle
                className="bg-[#c22113] text-white rounded-full text-4xl p-2 cursor-pointer"
                onClick={() => signInWithPopup(auth, provider)}
              />
            ) : (
              <img
                src={user?.photoURL}
                alt="userProfile"
                className="w-9 h-9 rounded-full"
                onClick={() => signOut(auth)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
