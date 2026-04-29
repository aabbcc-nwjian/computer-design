import React from "react";
import CatCardWait from "../../components/cat_wait";
import CatCardNear from "../../components/cat_near";
import Comment from "../../components/comment";
import "./index.scss";

const catData = [
  {
    id: 1,
    name: "小橘",
    gender: "雄性",
    age: "6个月",
    breed: "橘猫",
    image:
      "https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20orange%20kitten%20with%20blue%20eyes&size=800x600",
    status: "绝育后放归",
    statusType: "sterilized" as const,
    personalityTags: ["野性", "已绝育", "独立"],
    description: "性格独立，适应户外生活，适合有固定区域照顾的环境哈哈哈哈",
  },
  {
    id: 2,
    name: "小黑",
    gender: "雌性",
    age: "1岁",
    breed: "黑猫",
    image:
      "https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20black%20kitten%20with%20green%20eyes&size=800x600",
    status: "等待领养人",
    statusType: "waiting" as const,
    personalityTags: ["野性", "已绝育", "独立"],
    description: "性格独立，适应户外生活，适合有固定区域照顾的环境哈哈哈哈",
  },
  {
    id: 3,
    name: "小白",
    gender: "雄性",
    age: "8个月",
    breed: "白猫",
    image:
      "https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20white%20kitten%20with%20yellow%20eyes&size=800x600",
    status: "治疗中",
    statusType: "treatment" as const,
    personalityTags: ["野性", "已绝育", "独立"],
    description: "性格独立，适应户外生活，适合有固定区域照顾的环境哈哈哈哈",
  },
];
const datData1 = [
  {
    id: 1,
    colorid: 0,
    name: "小橘",
    distance: "距离您200m",
    image:
      "https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20orange%20kitten%20with%20blue%20eyes&size=800x600",
    isEmergency: true,
    difficulty: "lv3",
    points: 20,
    status: "待处理",
    need: "救助需求",
    description: "前腿受伤，需要紧急救助",
    deadline: "2026-03-22",
  },
  {
    id: 2,
    colorid: 1,
    name: "小黑",
    distance: "距离您500m",
    image:
      "https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20black%20kitten%20with%20green%20eyes&size=800x600",
    isEmergency: true,
    difficulty: "lv2",
    points: 15,
    status: "待处理",
    need: "寻找领养",
    description: "性格温顺，寻找爱心人士领养",
    deadline: "2026-03-30",
  },
  {
    id: 3,
    colorid: 2,
    name: "小白",
    distance: "距离您800m",
    image:
      "https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20white%20kitten%20with%20yellow%20eyes&size=800x600",
    isEmergency: true,
    difficulty: "lv4",
    points: 25,
    status: "待处理",
    need: "医疗救助",
    description: "严重脱水，需要紧急治疗",
    deadline: "2026-03-20",
  },
];
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
  {
    id: "2",
    username: "李小花",
    time: "两小时前",
    level: "爱心志愿者 LV.3",
    content:
      "噗噗的腿部手术顺利完成，目前恢复良好，预计一周后可以出院。感谢大家的爱心捐助！",
    expense: {
      total: 450,
      raised: 338,
      label: "医疗费用",
    },
    likes: 42,
    comments: 28,
    shares: 15,
  },
];

// 数据统计模块数据
const statsData = [
  {
    id: 1,
    value: "1,247",
    label: "已建档猫咪",
    color: "#FF6B35",
  },
  {
    id: 2,
    value: "892",
    label: "已绝育数量",
    color: "#16A34A",
  },
  {
    id: 3,
    value: "356",
    label: "已领养数量",
    color: "#2563EB",
  },
  {
    id: 4,
    value: "156",
    label: "活跃志愿者",
    color: "#9333EA",
  },
];

const Home: React.FC = () => {
  const handleViewDetails = (id: number) => {
    console.log(`查看猫咪详情: ${id}`);
  };

  const handleLike = (id: string) => {
    console.log(`点赞评论: ${id}`);
  };

  const handleComment = (id: string) => {
    console.log(`评论评论: ${id}`);
  };

  const handleShare = (id: string) => {
    console.log(`分享评论: ${id}`);
  };

  return (
    <div className="home-container">
      <div className="section-header">
        <h2 className="section-title">附近急需帮助</h2>
        <a href="#" className="view-more">
          查看更多救助任务
        </a>
      </div>
      <div className="cat-cards-container">
        {datData1.map((cat) => (
          <CatCardNear
            key={cat.id}
            name={cat.name}
            distance={cat.distance}
            image={cat.image}
            isEmergency={cat.isEmergency}
            difficulty={cat.difficulty}
            points={cat.points}
            status={cat.status}
            colorid={cat.colorid}
            need={cat.need}
            description={cat.description}
            deadline={cat.deadline}
            onHandle={() => handleViewDetails(cat.id)}
          />
        ))}
      </div>
      <div className="section-header">
        <h2 className="section-title">等待回家的毛孩子</h2>
        <a href="#" className="view-more">
          查看更多领养
        </a>
      </div>
      <div className="cat-cards-container">
        {catData.map((cat) => (
          <CatCardWait
            key={cat.id}
            id={cat.id}
            name={cat.name}
            gender={cat.gender}
            age={cat.age}
            breed={cat.breed}
            image={cat.image}
            status={cat.status}
            statusType={cat.statusType}
            personalityTags={cat.personalityTags}
            description={cat.description}
            onViewDetails={() => handleViewDetails(cat.id)}
          />
        ))}
      </div>
      <div className="section-header">
        <h2 className="section-title">爱心接力站</h2>
        <a href="#" className="view-more">
          查看更多动态
        </a>
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
            expense={comment.expense}
            likes={comment.likes}
            comments={comment.comments}
            shares={comment.shares}
            onLike={() => handleLike(comment.id)}
            onComment={() => handleComment(comment.id)}
            onShare={() => handleShare(comment.id)}
          />
        ))}
      </div>

      {/* 数据统计模块 */}
      <div className="stats-container">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-item">
            <div className="stat-value" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
