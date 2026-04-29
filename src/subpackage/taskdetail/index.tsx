import React from "react";
import "./index.scss";
import img1 from "../../assets/images/taskdetail.png";
import icon1 from "../../assets/taskdetail/icon1.svg";
import icon2 from "../../assets/taskdetail/icon2.svg";
import icon3 from "../../assets/taskdetail/icon3.svg";
import icon4 from "../../assets/taskdetail/icon4.svg";
import icon5 from "../../assets/taskdetail/icon5.svg";
import icon6 from "../../assets/taskdetail/icon6.svg";
import icon7 from "../../assets/taskdetail/icon7.svg";
import icon8 from "../../assets/taskdetail/icon8.svg";
import icon9 from "../../assets/taskdetail/icon9.svg";

const TaskDetail: React.FC = () => {
  return (
    <div className="taskdetail-container">
      {/* <div className="taskdetail-header">
        <div>
          <div className="taskdetail-title">紧急任务</div>
          <div className="taskdetail-priority">高优先级</div>
        </div>
        <div className="taskdetail-tip">
          <h3 className="taskdetail-tip-title">小提示</h3>
          <p className="taskdetail-tip-content">
            该猫咪性格警惕，请携带长距离诱捕笼，避免惊吓到它。
            <br />
            附近有居民反映猫咪疑似受伤，需小心处理。
          </p>
        </div>
      </div>
      <div className="taskdetail-process">
        <h2 className="taskdetail-section-title">任务流转状态</h2>
        <div className="taskdetail-process-steps">
          <div className="taskdetail-process-step taskdetail-process-step-active">
            <span className="taskdetail-process-dot"></span>
            <span className="taskdetail-process-line"></span>
            <span className="taskdetail-process-text">流浪</span>
          </div>
          <div className="taskdetail-process-step taskdetail-process-step-active">
            <span className="taskdetail-process-dot"></span>
            <span className="taskdetail-process-line"></span>
            <span className="taskdetail-process-text">已投喂</span>
          </div>
          <div className="taskdetail-process-step taskdetail-process-step-active">
            <span className="taskdetail-process-dot"></span>
            <span className="taskdetail-process-line"></span>
            <span className="taskdetail-process-text">待救助</span>
          </div>
          <div className="taskdetail-process-step taskdetail-process-step-active">
            <span className="taskdetail-process-dot"></span>
            <span className="taskdetail-process-line"></span>
            <span className="taskdetail-process-text">已绝育</span>
          </div>
          <div className="taskdetail-process-step">
            <span className="taskdetail-process-dot"></span>
            <span className="taskdetail-process-text">待领养</span>
          </div>
        </div>
      </div> */}
      <img src={img1} style={{ width: "100%" }} />

      {/* 猫咪信息 */}
      <div className="taskdetail-cat-info">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img
            src="https://neeko-copilot.bytedance.net/api/text2image?prompt=cat%20avatar&size=200x200"
            alt="猫咪头像"
            style={{
              width: "75px",
              height: "75px",
              borderRadius: "50%",
              backgroundColor: "#d8d8d8",
            }}
          />
          <div style={{ marginLeft: "1rem" }}>
            <div style={{ fontSize: "20px", marginBottom: "0.5rem" }}>小橘</div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div
                style={{
                  fontSize: "12px",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "20px",
                  backgroundColor: "#FEF9C3",
                  color: "#854D0Ef",
                }}
              >
                待救助
              </div>
              <div
                style={{
                  fontSize: "12px",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "20px",
                  backgroundColor: "#FEE2E2",
                  color: "#991B1B",
                }}
              >
                紧急
              </div>
              <div
                style={{
                  fontSize: "12px",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "20px",
                  backgroundColor: "#DBEAFE",
                  color: "#1E40AF",
                }}
              >
                已定位
              </div>
            </div>
          </div>
        </div>
        {/* 地图 */}
        <div className="taskdetail-map">
          <img
            src="https://neeko-copilot.bytedance.net/api/text2image?prompt=map%20view%20street%20neighborhood%20area%20overview&size=1200x300"
            alt="猫咪位置"
            className="taskdetail-map-image"
          />
          <div className="taskdetail-map-marker">
            <span className="taskdetail-map-marker-dot"></span>
            <span className="taskdetail-map-marker-text">猫咪位置</span>
          </div>
        </div>

        {/* 任务信息 */}
        <div className="taskdetail-info-grid">
          <div className="taskdetail-info-item">
            <span className="taskdetail-info-icon">
              <img src={icon1} />
            </span>
            <div className="taskdetail-info-content">
              <div className="taskdetail-info-label">紧急情况</div>
              <div className="taskdetail-info-value">后腿受伤，行动不便</div>
            </div>
          </div>
          <div className="taskdetail-info-item">
            <span className="taskdetail-info-icon">
              <img src={icon2} />
            </span>
            <div className="taskdetail-info-content">
              <div className="taskdetail-info-label">任务类型</div>
              <div className="taskdetail-info-value">紧急救助</div>
            </div>
          </div>
          <div className="taskdetail-info-item">
            <span className="taskdetail-info-icon">
              <img src={icon3} />
            </span>
            <div className="taskdetail-info-content">
              <div className="taskdetail-info-label">任务难度</div>
              <div className="taskdetail-info-value">困难 ★★★★♡</div>
            </div>
          </div>
          <div className="taskdetail-info-item">
            <span className="taskdetail-info-icon">
              <img src={icon4} />
            </span>
            <div className="taskdetail-info-content">
              <div className="taskdetail-info-label">详细地址</div>
              <div className="taskdetail-info-value">
                北京市朝阳区望京街道南湖西园小区东门旁绿化带
              </div>
            </div>
          </div>
          <div className="taskdetail-info-item">
            <span className="taskdetail-info-icon">
              <img src={icon5} />
            </span>
            <div className="taskdetail-info-content">
              <div className="taskdetail-info-label">积分奖励</div>
              <div className="taskdetail-info-value">+150 积分</div>
            </div>
          </div>
          <div className="taskdetail-info-item">
            <span className="taskdetail-info-icon">
              <img src={icon6} />
            </span>
            <div className="taskdetail-info-content">
              <div className="taskdetail-info-label">截止时间</div>
              <div className="taskdetail-info-value">2024年01月15日 18:00</div>
            </div>
          </div>
        </div>

        {/* 任务详细描述 */}
        <div className="taskdetail-description">
          <h2 className="taskdetail-section-title">任务详细描述</h2>
          <p className="taskdetail-description-text">
            该猫咪已被观察一周，目前后腿明显受伤，行动缓慢。需要专业救助人员使用诱捕笼进行安全捕捉，送往就近宠物医院进行治疗。猫咪性格较为警惕，操作时需格外小心。救助完成后需要进行基础体检、疫苗接种和绝育手术。预计整个救助周期为2-3周。
          </p>
        </div>

        {/* 操作按钮 */}
        <div className="taskdetail-actions">
          <button className="taskdetail-action-button">
            <span className="taskdetail-action-icon">
              <img src={icon7} />
            </span>
            立即认领任务
          </button>
          <button className="taskdetail-action-button">
            <span className="taskdetail-action-icon">
              <img src={icon8} />
            </span>
            分享任务
          </button>
          <button className="taskdetail-action-button">
            <span className="taskdetail-action-icon">
              <img src={icon9} />
            </span>
            查看历史记录
          </button>
        </div>
      </div>

      {/* 相关任务推荐 */}
      <h2 className="taskdetail-section-title">相关任务推荐</h2>
      <div className="taskdetail-recommendations">
        <div className="taskdetail-recommendation-cards">
          <div className="taskdetail-recommendation-card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "flex-start",
              }}
            >
              <img
                src=""
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  overflow: "hidden",
                  flexShrink: 0,
                  backgroundColor: "#d8d8d8",
                }}
              />
              <div>
                <div style={{ marginBottom: "0.5rem" }}>小黑</div>
                <div className="taskdetail-recommendation-tag taskdetail-recommendation-tag-pending">
                  待投喂
                </div>
              </div>
            </div>
            <div className="taskdetail-recommendation-description">
              每日定点投喂，改善营养状况
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div className="taskdetail-recommendation-reward">+50 积分</div>
              <div className="taskdetail-recommendation-button">接单</div>
            </div>
          </div>
          <div className="taskdetail-recommendation-card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "flex-start",
              }}
            >
              <img
                src=""
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  overflow: "hidden",
                  flexShrink: 0,
                  backgroundColor: "#d8d8d8",
                }}
              />
              <div>
                <div style={{ marginBottom: "0.5rem" }}>小花</div>
                <div className="taskdetail-recommendation-tag taskdetail-recommendation-tag-pending">
                  待绝育
                </div>
              </div>
            </div>
            <div className="taskdetail-recommendation-description">
              健康成年母猫，需要尽快安排绝育手术
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div className="taskdetail-recommendation-reward">+100 积分</div>
              <div className="taskdetail-recommendation-button">接单</div>
            </div>
          </div>
          <div className="taskdetail-recommendation-card">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "flex-start",
              }}
            >
              <img
                src=""
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  overflow: "hidden",
                  flexShrink: 0,
                  backgroundColor: "#d8d8d8",
                }}
              />
              <div>
                <div style={{ marginBottom: "0.5rem" }}>小咪</div>
                <div className="taskdetail-recommendation-tag taskdetail-recommendation-tag-pending">
                  待领养
                </div>
              </div>
            </div>
            <div className="taskdetail-recommendation-description">
              已完成绝育和疫苗接种，寻找爱心家庭
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div className="taskdetail-recommendation-reward">+200 积分</div>
              <div className="taskdetail-recommendation-button">接单</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
