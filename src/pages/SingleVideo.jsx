import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchSingleVideo } from "../utils/singleVideoData";
import { useParams, Link } from "react-router-dom";
import { Navbar, Videos } from "../components";
import { fetchRelatedData } from "../utils/relatedVideos";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { demoChannelTitle, demoChannelUrl } from "../utils/variables";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const SingleVideo = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState({});
  const [user, setUser] = useState(null);
  const [videos, setVideos] = useState([]);
  const [text, setText] = useState("");

  // fetch single video data
  useEffect(() => {
    fetchSingleVideo(id).then((response) => {
      setVideoDetails(response.items[0]);
    });
  }, [id]);

  // fetch  related videos data
  useEffect(() => {
    fetchRelatedData(id).then((response) => {
      setVideos(response.items);
    });
  }, [id]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        setUser(user);
      }
    });
  }, []);

  // handle comment submit
  const handleComment = (e) => {
    e.preventDefault();
    setText("");
  };

  // return loading while fetch data
  if (!videoDetails?.snippet) return;

  const {
    snippet: { title, channelTitle, channelId },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <>
      <Navbar />
      <section className="mt-[90px]">
        <div className="flex flex-col sm:flex-row mt-5 mx-5">
          {/* playing video description */}
          <div className="flex-grow">
            <div className="w-full mb-3">
              <ReactPlayer
                className="react-player"
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
              />
            </div>

            {/* video title */}
            <h1 className="font-semibold text-sm sm:text-[16px] md:text-lg">
              {title}
            </h1>

            {/* details about playing video */}
            <div className="mt-1 mb-5 flex items-center justify-between">
              {/* channel name */}

              <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
                <p className="font-semibold text-sm text-gray-500 flex items-center">
                  {" "}
                  {channelTitle || demoChannelTitle}{" "}
                  <BsFillPatchCheckFill className="text-sm pl-1" />
                </p>
              </Link>

              {/*  video statistics*/}
              <div className="flex gap-2 items-center">
                <p className="text-gray-500 text-sm">
                  {parseInt(viewCount).toLocaleString()} views
                </p>
                <p className="text-gray-500 text-sm">
                  {parseInt(likeCount).toLocaleString()} likes
                </p>
              </div>
            </div>

            {/* Video comment */}
            <div className="mb-8">
              <h1 className="font-bold text-xl mb-3">12 Comments</h1>
              {user ? (
                <div>
                  <div className="flex gap-2">
                    <img
                      src={user?.photoURL}
                      alt="userProfile"
                      className="w-9 h-9 rounded-full"
                    />
                    <form onSubmit={handleComment} className="flex-grow">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        className="outline-none w-full border-b-2 py-1 px-4"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                    </form>
                  </div>
                  <div className="flex justify-end mt-1">
                    <button
                      className="bg-blue-800 text-white font-semibold px-3 py-1 rounded-2xl"
                      onClick={handleComment}
                      disabled={text.length === 0 ? true : false}
                    >
                      Comment
                    </button>
                  </div>
                </div>
              ) : (
                <p>Sign in to comment.</p>
              )}
              <div className="max-w-[600px] mt-4">
                <div className="flex gap-4 mb-3">
                  <img
                    src={user?.photoURL}
                    alt="userProfile"
                    className="w-9 h-9 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="font-bold">Samuel Brhane</p>
                      <p className="text-[13px] font-light mt-[0.1rem] text-gray-500">
                        12 days ago
                      </p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quo, rerum.
                    </p>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1">
                        <AiOutlineLike className="text-lg" />{" "}
                        <p className="text-sm">2</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <AiOutlineDislike className="text-lg" />{" "}
                        <p className="text-sm">2</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mb-3">
                  <img
                    src={user?.photoURL}
                    alt="userProfile"
                    className="w-9 h-9 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="font-bold">Samuel Brhane</p>
                      <p className="text-[13px] font-light mt-[0.1rem] text-gray-500">
                        12 days ago
                      </p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quo, rerum.
                    </p>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1">
                        <AiOutlineLike className="text-lg" />{" "}
                        <p className="text-sm">2</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <AiOutlineDislike className="text-lg" />{" "}
                        <p className="text-sm">2</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mb-3">
                  <img
                    src={user?.photoURL}
                    alt="userProfile"
                    className="w-9 h-9 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="font-bold">Samuel Brhane</p>
                      <p className="text-[13px] font-light mt-[0.1rem] text-gray-500">
                        12 days ago
                      </p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quo, rerum.
                    </p>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1">
                        <AiOutlineLike className="text-lg" />{" "}
                        <p className="text-sm">2</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <AiOutlineDislike className="text-lg" />{" "}
                        <p className="text-sm">2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* related videos */}
          <div className="mx-3">
            <Videos videos={videos} direction={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleVideo;
