import React, { useState, useEffect } from "react";
import "./index.scss";
import mineicon1 from "../../assets/icon/mineicon1.svg";
import mineicon2 from "../../assets/icon/mineicon2.svg";
import mineicon3 from "../../assets/icon/mineicon3.svg";
import mineicon4 from "../../assets/icon/mineicon4.svg";

interface Task {
  id: number;
  title: string;
  description?: string;
  status: string;
  createdAt?: string;
  type?: string;
  deadline?: string;
}
interface Adoption {
  id: number;
  name: string;
  date?: string;
  status: "pending" | "approved" | "rejected";
}

const Mine: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [adoptions, setAdoptions] = useState<Adoption[]>([]);
  useEffect(() => {
    setTasks([
      {
        id: 1,
        title: "猫咪喂食",
        status: "进行中",
        type: "in-progress",
        description: "在小区花园为流浪猫放置食物和水",
        deadline: "2026-04-15",
      },
      {
        id: 2,
        title: "猫咪绝育",
        status: "待处理",
        type: "pending",
        description: "带小区里的流浪猫去宠物医院绝育",
        deadline: "2026-04-20",
      },
      {
        id: 3,
        title: "猫咪领养",
        status: "已完成",
        type: "completed",
        description: "为流浪猫找到合适的领养家庭",
        deadline: "2026-04-10",
      },
    ]);
    setAdoptions([
      {
        id: 1,
        name: "小橘",
        date: "2026-04-01",
        status: "pending",
      },
      {
        id: 2,
        name: "小黑",
        date: "2026-03-15",
        status: "approved",
      },
      {
        id: 3,
        name: "小黑",
        date: "2026-03-15",
        status: "rejected",
      },
    ]);
  }, []);

  // 处理任务按钮点击
  const handleTaskAction = (taskId: number) => {
    console.log(`处理任务: ${taskId}`);
    // 这里可以添加处理任务的逻辑
  };

  // 处理设置选项点击
  const handleSettingClick = (setting: string) => {
    console.log(`点击设置: ${setting}`);
    // 这里可以添加处理设置的逻辑
  };

  return (
    <div className="mine-container">
      {/* 顶部个人信息区域 */}
      <div className="profile-header">
        <div className="profile-info">
          <div className="avatar">U</div>
          <div className="user-details">
            <div className="username">用户名</div>
            <div className="volunteer-badge">自愿者</div>
          </div>
        </div>
        <div className="points-info">
          <div className="current-points">当前积分：120分</div>
          <div className="points-progress">距离下一等级还需 30 积分</div>
        </div>
        <div className="header-buttons">
          <button className="header-button">编辑资料</button>
          <button className="header-button">消息通知</button>
        </div>
      </div>

      {/* 基本资料区域 */}
      <div className="section">
        <h2 className="section-title">基本资料</h2>
        <div className="basic-info-grid">
          <div className="info-item">
            <div className="info-label">手机号:</div>
            <div className="info-value">138****1234</div>
          </div>
          <div className="info-item">
            <div className="info-label">地区:</div>
            <div className="info-value">湖北省 武汉市 洪山区</div>
          </div>
          <div className="info-item">
            <div className="info-label">注册时间:</div>
            <div className="info-value">2026-01-01</div>
          </div>
          <div className="info-item">
            <div className="info-label">可服务类型:</div>
            <div className="info-value">投喂、救助协助</div>
          </div>
        </div>
      </div>

      {/* 我的任务区域 */}
      <div className="section">
        <h2 className="section-title">我的任务</h2>
        <div className="tasks-container">
          {tasks.map((task) => (
            <div key={task.id} className={`task-card ${task.type}`}>
              <div className="task-status">{task.status}</div>
              <div className="task-details">
                <div>
                  <strong>{task.title}</strong>
                </div>
                <div>{task.description}</div>
                <div>截止时间: {task.deadline}</div>
              </div>
              <button
                className={`task-button ${task.type}`}
                onClick={() => handleTaskAction(task.id)}
              >
                {task.type === "completed"
                  ? "查看详情"
                  : task.type === "in-progress"
                    ? "继续任务"
                    : "去完成"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 我的领养申请区域 */}
      <div className="section">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 className="section-title">我的领养申请</h2>
          <div className="view-more-adoptions">
            <a href="#">查看更多领养</a>
          </div>
        </div>

        <div className="adoption-applications">
          {adoptions.map((adoption) => (
            <div key={adoption.id} className="adoption-item">
              <div className="adoption-info">
                <div className="adoption-avatar">{adoption.name.charAt(0)}</div>
                <div className="adoption-details">
                  <div className="adoption-name">{adoption.name}</div>
                  <div className="adoption-date">申请时间: {adoption.date}</div>
                </div>
              </div>
              <div className={`adoption-status ${adoption.status}`}>
                {adoption.status === "pending"
                  ? "待审核"
                  : adoption.status === "approved"
                    ? "审核通过"
                    : "审核未通过"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 积分明细区域 */}
      <div className="section">
        <h2 className="section-title">积分明细</h2>
        <div className="points-levels">
          Lv1 任务 +5~10 分 | Lv2 任务 +15~25 分 | Lv3 任务 +30~50 分 |
          领养门槛：80/150/200 分
        </div>
        <div className="points-history">
          <div className="point-item">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="point-date">2026-03-23</div>
              <div className="point-description">完成 L3 救助任务</div>
            </div>
            <div>
              <span className="point-change positive">+35</span>
              <span className="current-points-display">当前积分: 120</span>
            </div>
          </div>
          <div className="point-item">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="point-date">2026-03-22</div>
              <div className="point-description">完成 L2 绝育协助</div>
            </div>
            <div>
              <span className="point-change positive">+20</span>
              <span className="current-points-display">当前积分: 85</span>
            </div>
          </div>
          <div className="point-item">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="point-date">2026-03-20</div>
              <div className="point-description">任务逾期</div>
            </div>
            <div>
              <span className="point-change negative">-15</span>
              <span className="current-points-display">当前积分: 65</span>
            </div>
          </div>
          <div className="point-item">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="point-date">2026-03-18</div>
              <div className="point-description">完成 L2 投喂任务</div>
            </div>
            <div>
              <span className="point-change positive">+25</span>
              <span className="current-points-display">当前积分: 80</span>
            </div>
          </div>
        </div>
      </div>

      {/* 设置与帮助区域 */}
      <div className="settings-section">
        <h2 className="settings-section-title">设置帮助</h2>
        <div className="settings-options">
          <div
            className="settings-option"
            onClick={() => handleSettingClick("修改密码")}
          >
            <img src={mineicon1} className="settings-icon" />
            <div className="settings-label">修改密码</div>
          </div>
          <div
            className="settings-option"
            onClick={() => handleSettingClick("消息通知开关")}
          >
            <img src={mineicon2} className="settings-icon" />
            <div className="settings-label">消息通知开关</div>
          </div>
          <div
            className="settings-option"
            onClick={() => handleSettingClick("意见反馈")}
          >
            <img src={mineicon3} className="settings-icon" />
            <div className="settings-label">意见反馈</div>
          </div>
          <div
            className="settings-option"
            onClick={() => handleSettingClick("退出登录")}
          >
            <img src={mineicon4} className="settings-icon" />
            <div className="settings-label">退出登录</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mine;
