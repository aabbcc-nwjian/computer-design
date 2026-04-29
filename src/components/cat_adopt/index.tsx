import React from "react";
import "./index.scss";

interface CatAdoptProps {
  image: string;
  name: string;
  id: string;
  tags: string[];
  requiredPoints: number;
  currentPoints: number;
  onAdopt: () => void;
  onEarnPoints: () => void;
}

const CatAdopt: React.FC<CatAdoptProps> = ({
  image,
  name,
  id,
  tags,
  requiredPoints,
  currentPoints,
  onAdopt,
  onEarnPoints,
}) => {
  const isPointsEnough = currentPoints >= requiredPoints;

  return (
    <div className="cat-adopt-container">
      <div className="cat-adopt-image-container">
        <img src={image} alt={name} className="cat-adopt-image" />
      </div>
      <div className="cat-adopt-info">
        <div className="cat-adopt-name-section">
          <h3 className="cat-adopt-name">{name}</h3>
          <p className="cat-adopt-id">#{id}</p>
        </div>
        <div className="cat-adopt-tags">
          {tags.map((tag, index) => (
            <span key={index} className="cat-adopt-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="cat-adopt-points-section">
          <div className="cat-adopt-required-points">
            领养需信积分: {requiredPoints} 分
          </div>
          <div className="cat-adopt-current-points">
            您的当前积分: <span>{currentPoints} 分</span>
          </div>
        </div>
        <div className="cat-adopt-action-section">
          <button
            className="cat-adopt-button"
            onClick={onAdopt}
            disabled={!isPointsEnough}
          >
            申请领养
          </button>
          {!isPointsEnough && (
            <a href="#" className="cat-adopt-points-tip" onClick={onEarnPoints}>
              积分不足，去任务中心赚积分
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatAdopt;
