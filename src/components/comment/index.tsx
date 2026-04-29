import React from "react";
import "./index.scss";
import shareIcon from "../../assets/icon/share.svg";
import likeIcon from "../../assets/icon/like.svg";
import commentIcon from "../../assets/icon/comment.svg";

interface CommentProps {
  id: string;
  username: string;
  time: string;
  level: string;
  content: string;
  images?: string[];
  expense?: {
    total: number;
    raised: number;
    label: string;
  };
  likes: number;
  comments: number;
  shares: number;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

const Comment: React.FC<CommentProps> = ({
  username,
  time,
  level,
  content,
  images,
  expense,
  likes,
  comments,
  shares,
  onLike,
  onComment,
  onShare,
}) => {
  return (
    <div className="comment-card">
      {/* 用户信息 */}
      <div className="comment-header">
        <div className="comment-avatar"></div>
        <div className="comment-user-info">
          <div className="comment-user-details">
            <div className="comment-username">{username}</div>
            <div className="comment-time">{time}</div>
          </div>
          <div className="comment-user-level">{level}</div>
          {/* 评论内容 */}
          <div className="comment-content">{content}</div>
        </div>
      </div>

      {/* 图片展示 */}
      {images && images.length > 0 && (
        <div className="comment-images">
          {images.map((image, index) => (
            <div key={index} className="comment-image-container">
              <img
                src={image}
                alt={`Comment image ${index + 1}`}
                className="comment-image"
              />
            </div>
          ))}
        </div>
      )}

      {/* 费用展示 */}
      {expense && (
        <div className="comment-expense-section">
          <div className="comment-expense-label">{expense.label}</div>
          <div className="comment-expense-bar-container">
            <div
              className="comment-expense-bar"
              style={{ width: `${(expense.raised / expense.total) * 100}%` }}
            ></div>
          </div>
          <div className="comment-expense-details">
            <span className="comment-expense-raised">
              已筹集 ¥{expense.raised}
            </span>
            <span className="expense-target">目标 ¥{expense.total}</span>
            <span className="comment-expense-amount">¥{expense.total}</span>
          </div>
        </div>
      )}

      {/* 互动按钮 */}
      <div className="comment-actions">
        <button className="comment-action-button" onClick={onLike}>
          <span className="comment-action-icon">
            <img
              src={likeIcon}
              className="comment-action-icon-image"
              alt="Like"
            />
          </span>
          <span className="comment-action-count">{likes}</span>
        </button>
        <button className="comment-action-button" onClick={onComment}>
          <span className="comment-action-icon">
            <img
              src={commentIcon}
              className="comment-action-icon-image"
              alt="Comment"
            />
          </span>
          <span className="comment-action-count">{comments}</span>
        </button>
        <button className="comment-action-button" onClick={onShare}>
          <span className="comment-action-icon">
            <img
              src={shareIcon}
              className="comment-action-icon-image"
              alt="Share"
            />
          </span>
          <span className="comment-action-count">{shares}</span>
        </button>
      </div>
    </div>
  );
};

export default Comment;
