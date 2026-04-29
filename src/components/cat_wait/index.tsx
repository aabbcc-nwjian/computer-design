import React from "react";
import status1 from "../../assets/icon/status1.svg";
import status2 from "../../assets/icon/status2.svg";
import status3 from "../../assets/icon/status3.svg";
import "./index.scss";
import { useNavigate } from "react-router-dom";

interface CatCardProps {
  id: number;
  name: string;
  gender: string;
  age: string;
  breed: string;
  image: string;
  status?: string;
  statusType: "sterilized" | "treatment" | "waiting";
  personalityTags: string[];
  description: string;
  onViewDetails: () => void;
}

const CatCardWait: React.FC<CatCardProps> = ({
  name,
  gender,
  age,
  breed,
  image,
  status,
  statusType,
  personalityTags,
  description,
  onViewDetails,
}) => {
  const getStatusInfo = () => {
    switch (statusType) {
      case "sterilized":
        return { style: "cat-wait-status-sterilized", icon: status1 };
      case "treatment":
        return { style: "cat-wait-status-treatment", icon: status2 };
      case "waiting":
        return { style: "cat-wait-status-waiting", icon: status3 };
      default:
        return { style: "", icon: status1 };
    }
  };

  const statusInfo = getStatusInfo();
  const navigate = useNavigate();

  return (
    <div className="cat-wait-card" onClick={() => navigate("/catsdetail")}>
      {/* 状态标签 */}
      {status && (
        <div className={`cat-wait-status-badge ${statusInfo.style}`}>
          <img
            src={statusInfo.icon}
            alt={status}
            style={{ width: "12px", height: "12px" }}
          />
          <span style={{ marginLeft: "4px" }}>{status}</span>
        </div>
      )}

      {/* 猫咪图片 */}
      <div className="cat-wait-image-container">
        <img src={image} alt={name} className="cat-wait-image" />
      </div>

      <div className="cat-wait-info">
        {/* 猫咪基本信息 */}
        <h3 className="cat-wait-name">{name}</h3>
        <p className="cat-wait-basic-info">
          {gender} | {age} | {breed}
        </p>

        {/* 性格标签 */}
        <div className="cat-wait-personality-tags">
          {personalityTags.map((tag, index) => (
            <span key={index} className="cat-wait-personality-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* 猫咪描述 */}
        <p className="cat-wait-description">{description}</p>
      </div>
    </div>
  );
};

export default CatCardWait;
