import React from "react";
import "./index.scss";
import Comment from "../../components/comment";
import cats1 from "../../assets/icon/cats1.svg";
import cats2 from "../../assets/icon/cats2.svg";
import cats3 from "../../assets/icon/cats3.svg";
import cats4 from "../../assets/icon/cats4.svg";

const commentData = [
  {
    id: "1",
    username: "张晓明",
    time: "刚刚",
    level: "救助达人 LV.5",
    content: "成功领养了小橙！它现在在家里非常开心，感谢救助团队的辛苦付出！",
    images: [
      "https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20orange%20kitten%20at%20home&size=800x600",
      "https://neeko-copilot.bytedance.net/api/text2image?prompt=kitten%20playing%20with%20toy&size=800x600",
      "https://neeko-copilot.bytedance.net/api/text2image?prompt=kitten%20sleeping%20on%20bed&size=800x600",
    ],
    likes: 50,
    comments: 50,
    shares: 50,
  },
];

const CatsDetail: React.FC = () => {
  return (
    <div className="catsdetail-container">
      {/* 猫咪基本信息 */}
      {/* 猫咪基本信息 */}
      <div className="catsdetail-basic-info">
        <div className="catsdetail-avatar">
          <img
            src="https://neeko-copilot.bytedance.net/api/text2image?prompt=orange%20kitten%20on%20bed&size=800x600"
            alt="小橙"
          />
        </div>
        <div className="catsdetail-info-content">
          <div className="catsdetail-info-grid">
            <div className="catsdetail-info-row">
              <div className="catsdetail-info-item">
                <span className="catsdetail-info-label">姓名：</span>
                <span className="catsdetail-info-value">小橙</span>
              </div>
              <div className="catsdetail-info-item">
                <span className="catsdetail-info-label">性别：</span>
                <span className="catsdetail-info-value">雄性</span>
              </div>
            </div>
            <div className="catsdetail-info-row">
              <div className="catsdetail-info-item">
                <span className="catsdetail-info-label">年龄阶段：</span>
                <span className="catsdetail-info-value">幼年猫</span>
              </div>
              <div className="catsdetail-info-item">
                <span className="catsdetail-info-label">体型：</span>
                <span className="catsdetail-info-value">小型</span>
              </div>
            </div>
            <div className="catsdetail-info-row">
              <div className="catsdetail-info-item">
                <span className="catsdetail-info-label">绝育状态：</span>
                <span className="catsdetail-info-value">未绝育</span>
              </div>
              <div className="catsdetail-info-item">
                <span className="catsdetail-info-label">领养状态：</span>
                <span className="catsdetail-info-value">可领养</span>
              </div>
            </div>
            <div className="catsdetail-info-row">
              <div className="catsdetail-info-item">
                <span className="catsdetail-info-label">发现时间：</span>
                <span className="catsdetail-info-value">2026-04-xx</span>
              </div>
              <div className="catsdetail-info-item">
                <span className="catsdetail-info-label">发现地点：</span>
                <span className="catsdetail-info-value">
                  华师南湖校区综合楼
                </span>
              </div>
            </div>
            <div className="catsdetail-info-row">
              <div className="catsdetail-info-item">
                <span className="catsdetail-info-label">性格特点：</span>
                <span className="catsdetail-info-value">活泼可爱</span>
              </div>
              <div className="catsdetail-info-item">
                <span className="catsdetail-info-label">活动范围：</span>
                <span className="catsdetail-info-value">综合楼东侧</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 救助历程 */}
      <div className="catsdetail-section">
        <div className="catsdetail-section-header">
          <h2 className="catsdetail-section-title">
            <img src={cats1} style={{ marginRight: "16px" }} />
            救助历程
          </h2>
          <button className="catsdetail-section-button catsdetail-status-button">
            变更状态
          </button>
        </div>
        <div className="catsdetail-rescue-history">
          <div className="catsdetail-rescue-item">
            <div className="catsdetail-rescue-date">2026-03-22 14:30</div>
            <div className="catsdetail-rescue-operator">志愿者小A</div>
            <div className="catsdetail-rescue-status">
              <span className="catsdetail-status-badge catsdetail-status-original">
                流浪
              </span>
              <span className="catsdetail-status-arrow">→</span>
              <span className="catsdetail-status-badge catsdetail-status-current">
                得救
              </span>
            </div>
            <div className="catsdetail-rescue-description">
              疑似前腿受伤，需要紧急救助
            </div>
          </div>
          <div className="catsdetail-rescue-item">
            <div className="catsdetail-rescue-date">2026-03-21 10:15</div>
            <div className="catsdetail-rescue-operator">志愿者小B</div>
            <div className="catsdetail-rescue-status">
              <span className="catsdetail-status-badge catsdetail-status-original">
                已投喂
              </span>
              <span className="catsdetail-status-arrow">→</span>
              <span className="catsdetail-status-badge catsdetail-status-current">
                流浪
              </span>
            </div>
            <div className="catsdetail-rescue-description">
              首次发现，开始定点投喂观察
            </div>
          </div>
          <div className="catsdetail-rescue-item">
            <div className="catsdetail-rescue-date">2026-03-20 16:45</div>
            <div className="catsdetail-rescue-operator">路人甲</div>
            <div className="catsdetail-rescue-status">
              <span className="catsdetail-status-badge catsdetail-status-original">
                流浪
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 健康档案 */}
      <div className="catsdetail-section">
        <div className="catsdetail-section-header">
          <h2 className="catsdetail-section-title">
            <img src={cats2} style={{ marginRight: "16px" }} />
            健康档案
          </h2>
          <button className="catsdetail-section-button catsdetail-status-button">
            新增医疗记录
          </button>
        </div>
        <div className="catsdetail-health-record">
          <div className="catsdetail-health-item">
            <h3 className="catsdetail-health-subtitle">疫苗档案</h3>
            <div className="catsdetail-vaccine-status">
              <span className="catsdetail-vaccine-tag catsdetail-vaccine-done">
                已接种
              </span>
              <span className="catsdetail-vaccine-tag catsdetail-vaccine-done">
                已接种
              </span>
              <span className="catsdetail-vaccine-tag catsdetail-vaccine-done">
                未接种
              </span>
            </div>
          </div>
          <div className="catsdetail-health-item">
            <h3 className="catsdetail-health-subtitle">营养计划</h3>
            <div className="catsdetail-nutrition-plan">
              <div className="catsdetail-nutrition-warning">
                <span className="catsdetail-warning-icon">⚠️</span>
                <span className="catsdetail-warning-text">需增加营养干预</span>
              </div>
            </div>
          </div>
          <div className="catsdetail-health-item">
            <h3 className="catsdetail-health-subtitle">医疗记录</h3>
            <div className="catsdetail-medical-records">
              <div className="catsdetail-medical-record">
                <div className="catsdetail-medical-date">2024-03-25</div>
                <div className="catsdetail-medical-treatment">血常规</div>
                <div className="catsdetail-medical-result">
                  各项指标正常，健康状况良好
                </div>
                <div className="catsdetail-medical-hospital">xx宠物医院</div>
              </div>
              <div className="catsdetail-medical-record">
                <div className="catsdetail-medical-date">2024-03-24</div>
                <div className="catsdetail-medical-treatment">急性感冒</div>
                <div className="catsdetail-medical-result">重复三次用药</div>
                <div className="catsdetail-medical-hospital">志愿者中心</div>
              </div>
              <div className="catsdetail-medical-record">
                <div className="catsdetail-medical-date">2024-03-22</div>
                <div className="catsdetail-medical-treatment">体检</div>
                <div className="catsdetail-medical-result">
                  体重3.2kg，在正常范围
                </div>
                <div className="catsdetail-medical-hospital">xx宠物医院</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 关联任务 */}
      <div className="catsdetail-section">
        <div className="catsdetail-section-header">
          <h2 className="catsdetail-section-title">
            <img src={cats3} style={{ marginRight: "16px" }} />
            关联任务
          </h2>
          <button className="catsdetail-section-button catsdetail-status-button">
            新增任务
          </button>
        </div>
        <div className="catsdetail-tasks">
          <div className="catsdetail-task-card catsdetail-task-urgent">
            <div className="catsdetail-task-header">
              <span className="catsdetail-task-icon">⚠️</span>
              <span className="catsdetail-task-title">猫咪求家</span>
              <span className="catsdetail-task-tag catsdetail-task-urgent-tag">
                紧急
              </span>
            </div>
            <div className="catsdetail-task-content">
              <div className="catsdetail-task-description">
                帮助小喵，需要紧急救助
              </div>
              <div className="catsdetail-task-time">截止时间：2024-04-12</div>
            </div>
          </div>
          <div className="catsdetail-task-card catsdetail-task-normal">
            <div className="catsdetail-task-header">
              <span className="catsdetail-task-icon">🐱</span>
              <span className="catsdetail-task-title">猫咪求家</span>
              <span className="catsdetail-task-tag catsdetail-task-normal-tag">
                普通
              </span>
            </div>
            <div className="catsdetail-task-content">
              <div className="catsdetail-task-description">
                帮助小喵，需要紧急救助
              </div>
              <div className="catsdetail-task-time">截止时间：2024-04-12</div>
            </div>
          </div>
          <div className="catsdetail-task-card catsdetail-task-normal">
            <div className="catsdetail-task-header">
              <span className="catsdetail-task-icon">🐱</span>
              <span className="catsdetail-task-title">猫咪求家</span>
              <span className="catsdetail-task-tag catsdetail-task-normal-tag">
                普通
              </span>
            </div>
            <div className="catsdetail-task-content">
              <div className="catsdetail-task-description">
                帮助小喵，需要紧急救助
              </div>
              <div className="catsdetail-task-time">截止时间：2024-04-12</div>
            </div>
          </div>
        </div>
      </div>

      {/* 领养信息 */}
      <div className="catsdetail-section">
        <div className="catsdetail-section-header">
          <h2 className="catsdetail-section-title">
            <img src={cats4} style={{ marginRight: "16px" }} />
            领养信息
          </h2>
          <button className="catsdetail-section-button catsdetail-status-button">
            申请领养
          </button>
        </div>
        <div className="catsdetail-adoption-info">
          <div className="catsdetail-adoption-status">
            <h3 className="catsdetail-adoption-status-label">领养状态</h3>
            <span className="catsdetail-adoption-status-badge catsdetail-adoption-status-pending">
              待领养
            </span>
          </div>
          <div className="catsdetail-adoption-requirements">
            <h3 className="catsdetail-adoption-requirements-label">领养要求</h3>
            <div className="catsdetail-adoption-requirement-item">
              <span className="catsdetail-adoption-requirement-label">
                领养积分：
              </span>
              <span className="catsdetail-adoption-requirement-value">
                50分
              </span>
            </div>
            <div className="catsdetail-adoption-requirement-item">
              <span className="catsdetail-adoption-requirement-description">
                适合有养猫经验家庭，无宠物优先，能提供稳定生活环境
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 小喵的故事 */}
      <div className="catsdetail-section-header">
        <h2 className="catsdetail-section-title">小橙的故事</h2>
        <button className="catsdetail-section-button catsdetail-status-button">
          发布动态
        </button>
      </div>
      <div className="comments-container">
        {commentData.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            username={comment.username}
            time={comment.time}
            level={comment.level}
            content={comment.content}
            images={comment.images}
            likes={comment.likes}
            comments={comment.comments}
            shares={comment.shares}
          />
        ))}
      </div>
    </div>
  );
};

export default CatsDetail;
