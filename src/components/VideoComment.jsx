import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import Moment from "react-moment";
import { auth, db } from "../firebase/config";

const VideoComment = ({ comment, videoId, commentId }) => {
  const [commentLikes, setCommentLikes] = useState([]);
  const [commentDislikes, setCommentDislikes] = useState([]);
  const [userLiked, setUserLiked] = useState(false);
  const [userDisliked, setUserDisliked] = useState(false);

  // fetch comment likes and dislikes
  useEffect(() => {
    onSnapshot(
      collection(db, "video", videoId, "comments", commentId, "likes"),
      (snapshot) => {
        setCommentLikes(snapshot.docs);
      }
    );

    onSnapshot(
      collection(db, "video", videoId, "comments", commentId, "dislikes"),
      (snapshot) => {
        setCommentDislikes(snapshot.docs);
      }
    );
  }, [videoId, commentId]);

  // find user id in comment likes and dislikes
  useEffect(() => {
    setUserLiked(
      commentLikes.findIndex((like) => like.id === auth?.currentUser?.uid) !==
        -1
    );

    setUserDisliked(
      commentDislikes.findIndex(
        (like) => like.id === auth?.currentUser?.uid
      ) !== -1
    );
  }, [commentLikes, commentDislikes]);

  //   handle comment likes
  const handleLike = async () => {
    if (userLiked)
      await deleteDoc(
        doc(
          db,
          "video",
          videoId,
          "comments",
          commentId,
          "likes",
          auth?.currentUser?.uid
        )
      );
    else {
      await setDoc(
        doc(
          db,
          "video",
          videoId,
          "comments",
          commentId,
          "likes",
          auth?.currentUser?.uid
        ),
        {
          username: auth?.currentUser?.displayName,
        }
      );
    }
  };

  //handle comment dislike
  const handleDislike = async () => {
    if (userDisliked)
      await deleteDoc(
        doc(
          db,
          "video",
          videoId,
          "comments",
          commentId,
          "dislikes",
          auth?.currentUser?.uid
        )
      );
    else {
      await setDoc(
        doc(
          db,
          "video",
          videoId,
          "comments",
          commentId,
          "dislikes",
          auth?.currentUser?.uid
        ),
        {
          username: auth?.currentUser?.displayName,
        }
      );
    }
  };
  return (
    <div className="flex gap-4 mb-3">
      <img
        src={comment?.data()?.userImage}
        alt="userProfile"
        className="w-9 h-9 rounded-full"
      />
      <div>
        <div className="flex items-center gap-1">
          <p className="font-bold">{comment?.data()?.userName}</p>
          <p className="text-[13px] font-light mt-[0.1rem] text-gray-500">
            {<Moment fromNow>{comment?.data()?.timestamp?.toDate()}</Moment>}
          </p>
        </div>
        <p>{comment?.data()?.text}</p>
        <div className="flex items-center gap-4 mt-1">
          <div className="flex items-center gap-[0.1rem]">
            <AiOutlineLike
              className={`text-lg ${userLiked && "text-green-500"}`}
              onClick={auth?.currentUser && handleLike}
            />{" "}
            <p className="text-sm mb-[1px]">{commentLikes.length}</p>
          </div>
          <div className="flex items-center gap-[0.1rem]">
            <AiOutlineDislike
              className={`text-lg ${userDisliked && "text-red-500"}`}
              onClick={auth?.currentUser && handleDislike}
            />{" "}
            <p className="text-sm mb-[1px]">{commentDislikes.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComment;
