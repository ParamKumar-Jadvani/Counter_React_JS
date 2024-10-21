import React, { useState, useEffect } from "react";
import "./InstagramPost.css";
import { FaHeart, FaRegComment, FaBookmark, FaShareAlt } from "react-icons/fa";

const InstagramPost = () => {
  const [likes, setLikes] = useState(0);
  const [shares, setShares] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Get data from sessionStorage
    const savedLikes = sessionStorage.getItem("likes");
    const savedShares = sessionStorage.getItem("shares");
    const savedComments = sessionStorage.getItem("comments");
    const savedPost = localStorage.getItem("savedPost");

    if (savedLikes) setLikes(parseInt(savedLikes));
    if (savedShares) setShares(parseInt(savedShares));
    if (savedComments) setComments(JSON.parse(savedComments));
    if (savedPost) setIsSaved(JSON.parse(savedPost));
  }, []);

  useEffect(() => {
    // Save likes, shares, and comments to sessionStorage
    sessionStorage.setItem("likes", likes);
    sessionStorage.setItem("shares", shares);
    sessionStorage.setItem("comments", JSON.stringify(comments));
  }, [likes, shares, comments]);

  useEffect(() => {
    // Save post status to localStorage
    localStorage.setItem("savedPost", JSON.stringify(isSaved));
  }, [isSaved]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  const handleComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="instagram-post">
      <div className="post-header">
        <img
          className="profile-pic"
          src="https://img.pikbest.com/png-images/20240718/lord-krishna-vector-design-image_10670443.png!w700wp"
          alt="profile"
        />
        <span className="username">Radhe Krishna</span>
      </div>
      <div className="post-image">
        <img
          src="https://gallerypng.com/wp-content/uploads/2024/05/god-krishna-png-images.png"
          alt="post"
          className="post-photo"
        />
      </div>
      <div className="post-actions">
        <button onClick={handleLike} className="action-btn icon">
          <FaHeart className="faicon" size="17px" />
          {likes} Likes
        </button>
        <button onClick={handleShare} className="action-btn icon">
          <FaShareAlt className="faicon" size="17px" /> {shares} Shares
        </button>
        <button className="action-btn icon" onClick={handleSave}>
          {isSaved ? (
            <FaBookmark className="faicon" size="17px" />
          ) : (
            <FaRegComment className="faicon" size="17px" />
          )}{" "}
          {isSaved ? "Unsave" : "Save Post"}
        </button>
      </div>
      <div className="comments-section">
        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <span className="username">user_{index + 1}: </span>
              {comment}
            </div>
          ))}
        </div>
        <div className="comment-input">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <button onClick={handleComment}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default InstagramPost;
