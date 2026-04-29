import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

interface CatCardProps {
  name: string;
  distance: string;
  image: string;
  isEmergency: boolean;
  difficulty: string;
  points: number;
  status: string;
  need: string;
  description: string;
  deadline: string;
  colorid: number;
  onHandle: () => void;
}

const CatCardNear: React.FC<CatCardProps> = ({
  name,
  distance,
  image,
  isEmergency,
  difficulty,
  points,
  status,
  need,
  description,
  deadline,
  colorid,
  onHandle,
}) => {
  const navigate = useNavigate();
  const colors = [
    { text: "#FF0000", border: "#FEE2E2", background: "#FEF2F2" },
    { text: "#FF9900", border: "#FED7AA", background: "#FFF7ED" },
    { text: "#2563EB", border: "#DBEAFE", background: "#EFF6FF" },
  ];
  return (
    <div className="cat-near-card" onClick={() => navigate("/taskdetail")}>
      {/* 猫咪图片 */}
      <div className="cat-near-image-container">
        <img src={image} alt={name} className="cat-near-image" />
      </div>

      {/* 猫咪信息 */}
      <div
        className="cat-near-info"
        style={{ backgroundColor: colors[colorid].background }}
      >
        <div className="cat-near-header">
          <h3 className="cat-near-name">{name}</h3>
          <span className="cat-near-distance">{distance}</span>
        </div>

        {/* 标签 */}
        <div className="cat-near-tags">
          {isEmergency && (
            <span
              className="cat-near-tag cat-near-emergency"
              style={{
                backgroundColor: colors[colorid].border,
                color: colors[colorid].text,
              }}
            >
              <span
                className="cat-near-emergency-dot"
                style={{ backgroundColor: colors[colorid].text }}
              ></span>
              紧急
            </span>
          )}
          <span
            className="cat-near-tag cat-near-difficulty"
            style={{
              backgroundColor: colors[colorid].border,
              color: colors[colorid].text,
            }}
          >
            难度：{difficulty}
          </span>
          <span
            className="cat-near-tag cat-near-points"
            style={{ color: colors[colorid].text }}
          >
            积分+{points}
          </span>
          <span
            className="cat-near-tag cat-near-status"
            style={{ color: colors[colorid].text }}
          >
            {status}
          </span>
        </div>

        {/* 救助需求 */}
        <div className="cat-near-need">
          <h4 className="cat-near-need-title">{need}</h4>
          <p className="cat-near-need-description">{description}</p>
          <p className="cat-near-deadline">截止时间：{deadline}</p>
        </div>

        {/* 处理按钮 */}
        <button className="cat-near-handle-button" onClick={onHandle}>
          去处理
        </button>
      </div>
    </div>
  );
};

export default CatCardNear;
