import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchSingleVideo } from "../utils/singleVideoData";
import { useParams, Link } from "react-router-dom";
import { Navbar, Videos, VideoComment } from "../components";
import { fetchRelatedData } from "../utils/relatedVideos";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { demoChannelTitle, demoChannelUrl } from "../utils/variables";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

const SingleVideo = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState({});
  const [user, setUser] = useState(null);
  const [videos, setVideos] = useState([]);
  const [text, setText] = useState("");
  const [comments, setComments] = useState(null);

  // fetch single video data
  useEffect(() => {
    fetchSingleVideo(id).then((response) => {
      setVideoDetails(response?.items[0]);
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
      } else {
        setUser(null);
      }
    });
  }, [user]);

  // handle comment submit
  const handleComment = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "video", id, "comments"), {
      text,
      timestamp: serverTimestamp(),
      userImage: user?.photoURL,
      userName: user?.displayName,
      userEmail: user?.email,
      videoId: id,
    });
    setText("");
  };

  // Get video comments
  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "video", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [id]);

  // return while loading
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
              <h1 className="font-bold text-xl mb-3">
                {comments?.length < 2
                  ? comments?.length + " Comment"
                  : comments?.length + " Comments"}
              </h1>
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
                <p className="font-bold text-sm">Sign in to comment.</p>
              )}
              <div className="max-w-[600px] mt-4">
                {comments?.map((comment, index) => (
                  <VideoComment
                    key={index}
                    comment={comment}
                    commentId={comment.id}
                    videoId={id}
                  />
                ))}
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
