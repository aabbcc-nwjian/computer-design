import React, { useEffect, useState } from "react";
import CatAdopt from "../../components/cat_adopt";
import "./index.scss";
import search1 from "../../assets/icon/search1.svg";
import search2 from "../../assets/icon/search2.svg";
import search3 from "../../assets/icon/search3.svg";
import icon1 from "../../assets/icon/icon1.svg";
import icon2 from "../../assets/icon/icon2.svg";
import icon3 from "../../assets/icon/icon3.svg";

interface CatData {
  id: string;
  name: string;
  image: string;
  tags: string[];
  requiredPoints: number;
}

const Adoption: React.FC = () => {
  // 猫咪数据
  const [cats, setCats] = useState<CatData[]>([]);
  useEffect(() => {
    setCats([
      {
        id: "MA20260324",
        name: "小鲁",
        image:
          "https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20orange%20cat%20sitting%20on%20sofa&size=800x600",
        tags: ["幼猫", "公", "已绝育", "亲人"],
        requiredPoints: 150,
      },
      {
        id: "MA20260325",
        name: "小咪",
        image:
          "https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20gray%20and%20white%20cat%20lying%20down&size=800x600",
        tags: ["成年", "母", "已绝育", "温顺"],
        requiredPoints: 80,
      },
      {
        id: "MA20260326",
        name: "小煤",
        image:
          "https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20black%20cat%20sitting%20on%20couch&size=800x600",
        tags: ["青年", "公", "未绝育", "活泼"],
        requiredPoints: 200,
      },
      {
        id: "MA20260327",
        name: "花花",
        image:
          "https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20calico%20cat%20lying%20on%20bed&size=800x600",
        tags: ["成年", "母", "已绝育", "亲人"],
        requiredPoints: 150,
      },
      {
        id: "MA20260328",
        name: "雪球",
        image:
          "https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20white%20cat%20with%20blue%20eyes&size=800x600",
        tags: ["幼猫", "母", "已绝育", "粘人"],
        requiredPoints: 150,
      },
      {
        id: "MA20260329",
        name: "小虎",
        image:
          "https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20tabby%20cat%20playing&size=800x600",
        tags: ["青年", "公", "未绝育", "活泼"],
        requiredPoints: 80,
      },
      {
        id: "MA20260330",
        name: "银儿",
        image:
          "https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20silver%20tabby%20cat%20sleeping&size=800x600",
        tags: ["成年", "母", "已绝育", "安静"],
        requiredPoints: 80,
      },
      {
        id: "MA20260331",
        name: "小橘",
        image:
          "https://neeko-copilot.bytedance.net/api/text2image?prompt=cute%20orange%20tabby%20cat%20looking%20out%20window&size=800x600",
        tags: ["幼猫", "公", "已绝育", "有活力"],
        requiredPoints: 200,
      },
    ]);
  }, []);

  // 筛选状态
  const [filters, setFilters] = useState({
    gender: "全部",
    points: "全部",
    age: "全部",
    sterilization: "全部",
    suitable: "全部",
  });

  // 分页状态
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const totalPages = Math.ceil(cats.length / pageSize);

  // 用户当前积分
  const [currentPoints] = useState(128);

  // 处理筛选选项变更
  const handleFilterChange = (category: string, value: string) => {
    setFilters((prev) => ({ ...prev, [category]: value }));
    setCurrentPage(1); // 重置到第一页
  };

  // 处理筛选按钮点击
  const handleFilter = () => {
    console.log("筛选", filters);
    // 这里可以添加筛选逻辑
  };

  // 处理重置按钮点击
  const handleReset = () => {
    setFilters({
      gender: "全部",
      points: "全部",
      age: "全部",
      sterilization: "全部",
      suitable: "全部",
    });
    setCurrentPage(1);
  };

  // 处理分页按钮点击
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // 处理申请领养
  const handleAdopt = (catId: string) => {
    console.log(`申请领养猫咪: ${catId}`);
    // 这里可以添加申请领养的逻辑
  };

  // 处理去任务中心赚积分
  const handleEarnPoints = () => {
    console.log("去任务中心赚积分");
    // 这里可以添加跳转到任务中心的逻辑
  };

  // 处理刷新按钮点击
  const handleRefresh = () => {
    console.log("刷新数据");
    // 这里可以添加刷新数据的逻辑
  };

  // 处理领养码按钮点击
  const handleAdoptionCode = () => {
    console.log("领养码");
    // 这里可以添加领养码相关的逻辑
  };

  // 计算当前页显示的猫咪
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCats = cats.slice(startIndex, endIndex);

  return (
    <div className="adoption-container">
      {/* 页面标题和搜索区域 */}
      <div className="adoption-header-section">
        {/* 页面标题 */}
        <div className="adoption-page-header">
          <h1 className="adoption-page-title">领养中心</h1>
          <p className="adoption-page-subtitle">
            用陪伴代替流浪，用责任守护生命
          </p>
        </div>

        {/* 搜索和排序 */}
        <div className="adoption-search-section">
          <div className="adoption-search-bar">
            <img
              src={search1}
              style={{ position: "absolute", left: "0.75rem" }}
            />
            <input
              type="text"
              className="adoption-search-input"
              placeholder="搜索猫咪名字或地点"
            />
            <button className="adoption-refresh-button" onClick={handleRefresh}>
              <img src={search2} />
              刷新
            </button>
          </div>
          <button className="adoption-code-button" onClick={handleAdoptionCode}>
            <img src={search3} />
            领养须知
          </button>
        </div>
      </div>

      {/* 筛选区域 */}
      <div className="adoption-filter-section">
        {/* 性别 */}
        <div className="adoption-filter-row">
          <label
            className="adoption-filter-label"
            style={{ letterSpacing: "2em" }}
          >
            性别
          </label>
          <div className="adoption-filter-options">
            <div
              className={`adoption-filter-option ${filters.gender === "全部" ? "active" : ""}`}
              onClick={() => handleFilterChange("gender", "全部")}
            >
              全部
            </div>
            <div
              className={`adoption-filter-option ${filters.gender === "雄性" ? "active" : ""}`}
              onClick={() => handleFilterChange("gender", "雄性")}
            >
              雄性
            </div>
            <div
              className={`adoption-filter-option ${filters.gender === "雌性" ? "active" : ""}`}
              onClick={() => handleFilterChange("gender", "雌性")}
            >
              雌性
            </div>
          </div>
        </div>

        {/* 积分要求 */}
        <div className="adoption-filter-row">
          <label className="adoption-filter-label">积分要求</label>
          <div className="adoption-filter-options">
            <div
              className={`adoption-filter-option ${filters.points === "全部" ? "active" : ""}`}
              onClick={() => handleFilterChange("points", "全部")}
            >
              全部
            </div>
            <div
              className={`adoption-filter-option ${filters.points === "80分" ? "active" : ""}`}
              onClick={() => handleFilterChange("points", "80分")}
            >
              80分
            </div>
            <div
              className={`adoption-filter-option ${filters.points === "100分" ? "active" : ""}`}
              onClick={() => handleFilterChange("points", "100分")}
            >
              100分
            </div>
            <div
              className={`adoption-filter-option ${filters.points === "200分" ? "active" : ""}`}
              onClick={() => handleFilterChange("points", "200分")}
            >
              200分
            </div>
          </div>
        </div>

        {/* 年龄阶段 */}
        <div className="adoption-filter-row">
          <label className="adoption-filter-label">年龄阶段</label>
          <div className="adoption-filter-options">
            <div
              className={`adoption-filter-option ${filters.age === "全部" ? "active" : ""}`}
              onClick={() => handleFilterChange("age", "全部")}
            >
              全部
            </div>
            <div
              className={`adoption-filter-option ${filters.age === "幼猫" ? "active" : ""}`}
              onClick={() => handleFilterChange("age", "幼猫")}
            >
              幼猫
            </div>
            <div
              className={`adoption-filter-option ${filters.age === "青年猫" ? "active" : ""}`}
              onClick={() => handleFilterChange("age", "青年猫")}
            >
              青年猫
            </div>
            <div
              className={`adoption-filter-option ${filters.age === "成年猫" ? "active" : ""}`}
              onClick={() => handleFilterChange("age", "成年猫")}
            >
              成年猫
            </div>
            <div
              className={`adoption-filter-option ${filters.age === "老年猫" ? "active" : ""}`}
              onClick={() => handleFilterChange("age", "老年猫")}
            >
              老年猫
            </div>
          </div>
        </div>

        {/* 绝育状态 */}
        <div className="adoption-filter-row">
          <label className="adoption-filter-label">绝育状态</label>
          <div className="adoption-filter-options">
            <div
              className={`adoption-filter-option ${filters.sterilization === "全部" ? "active" : ""}`}
              onClick={() => handleFilterChange("sterilization", "全部")}
            >
              全部
            </div>
            <div
              className={`adoption-filter-option ${filters.sterilization === "已绝育" ? "active" : ""}`}
              onClick={() => handleFilterChange("sterilization", "已绝育")}
            >
              已绝育
            </div>
            <div
              className={`adoption-filter-option ${filters.sterilization === "未绝育" ? "active" : ""}`}
              onClick={() => handleFilterChange("sterilization", "未绝育")}
            >
              未绝育
            </div>
          </div>
        </div>

        {/* 适合人群 */}
        <div className="adoption-filter-row">
          <label className="adoption-filter-label">适合人群</label>
          <div className="adoption-filter-options">
            <div
              className={`adoption-filter-option ${filters.suitable === "全部" ? "active" : ""}`}
              onClick={() => handleFilterChange("suitable", "全部")}
            >
              全部
            </div>
            <div
              className={`adoption-filter-option ${filters.suitable === "有宠家庭" ? "active" : ""}`}
              onClick={() => handleFilterChange("suitable", "有宠家庭")}
            >
              有宠家庭
            </div>
            <div
              className={`adoption-filter-option ${filters.suitable === "无宠家庭" ? "active" : ""}`}
              onClick={() => handleFilterChange("suitable", "无宠家庭")}
            >
              无宠家庭
            </div>
            <div
              className={`adoption-filter-option ${filters.suitable === "有小孩家庭" ? "active" : ""}`}
              onClick={() => handleFilterChange("suitable", "有小孩家庭")}
            >
              有小孩家庭
            </div>
          </div>
        </div>

        {/* 筛选按钮 */}
        <div className="adoption-filter-actions">
          <button
            className="adoption-filter-button filter"
            onClick={handleFilter}
          >
            筛选
          </button>
          <button
            className="adoption-filter-button filter"
            onClick={handleReset}
          >
            重置
          </button>
        </div>
      </div>

      {/* 猫咪卡片网格 */}
      <div className="adoption-cats-grid">
        {currentCats.map((cat) => (
          <CatAdopt
            key={cat.id}
            image={cat.image}
            name={cat.name}
            id={cat.id}
            tags={cat.tags}
            requiredPoints={cat.requiredPoints}
            currentPoints={currentPoints}
            onAdopt={() => handleAdopt(cat.id)}
            onEarnPoints={handleEarnPoints}
          />
        ))}
      </div>

      {/* 分页 */}
      <div className="adoption-pagination">
        <button
          className="adoption-pagination-button"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          «
        </button>
        <button
          className="adoption-pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          /
        </button>
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let pageNumber: number;
          if (totalPages <= 5) {
            pageNumber = i + 1;
          } else {
            if (currentPage <= 3) {
              pageNumber = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNumber = totalPages - 4 + i;
            } else {
              pageNumber = currentPage - 2 + i;
            }
          }
          return (
            <button
              key={pageNumber}
              className={`adoption-pagination-button ${currentPage === pageNumber ? "adoption-active" : ""}`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        {totalPages > 5 && (
          <button className="adoption-pagination-button">...</button>
        )}
        <button
          className="adoption-pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          /
        </button>
        <button
          className="adoption-pagination-button"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>

      {/* 领养规则 */}
      <div className="adoption-rules-section">
        <h2 className="adoption-section-title">领养规则 & 积分说明</h2>
        <div className="adoption-rules-content">
          <div className="adoption-rule-item">
            <img src={icon1} className="adoption-rule-icon" />
            <div className="adoption-rule-text">
              普通成年家猫领养需80倍信任积分
            </div>
          </div>
          <div className="adoption-rule-item">
            <img src={icon2} className="adoption-rule-icon" />
            <div className="adoption-rule-text">
              幼猫/温血猫领养需150倍信任积分
            </div>
          </div>
          <div className="adoption-rule-item">
            <img src={icon3} className="adoption-rule-icon" />
            <div className="adoption-rule-text">伤病猫需提高200倍信任积分</div>
          </div>
          <div className="adoption-rule-item">
            <div className="adoption-rule-text">
              积分通过完成救助、家访、回访任务获得
            </div>
          </div>
          <div className="adoption-rule-item">
            <div className="adoption-rule-text">
              申请后将进入人工审核，通过后线下对接。领养后配合定期家访，不得弃养
            </div>
          </div>
        </div>
      </div>

      {/* 温暖新家 */}
      <div className="adoption-success-stories-section">
        <h2 className="adoption-section-title">它们的温暖新家</h2>
        <div className="adoption-stories-grid">
          <div className="adoption-story-card">
            <div className="adoption-story-image-container">
              <img
                src="https://neeko-copilot.bytedance.net/api/text2image?prompt=happy%20family%20with%20cat&size=800x600"
                alt="橘子的幸福日常"
                className="story-image"
              />
            </div>
            <div className="adoption-story-content">
              <h3 className="adoption-story-title">橘子的幸福日常</h3>
              <p className="adoption-story-description">
                到家一周已经开始蹭腿啦，谢谢平台给我们家带来的欢乐～
              </p>
            </div>
          </div>
          <div className="adoption-story-card">
            <div className="adoption-story-image-container">
              <img
                src="https://neeko-copilot.bytedance.net/api/text2image?prompt=woman%20playing%20with%20cat&size=800x600"
                alt="奶茶的温柔时光"
                className="adoption-story-image"
              />
            </div>
            <div className="adoption-story-content">
              <h3 className="adoption-story-title">奶茶的温柔时光</h3>
              <p className="adoption-story-description">
                奶茶小朋友现在已经是我生活中不可或缺的一部分了，太治愈了！
              </p>
            </div>
          </div>
          <div className="adoption-story-card">
            <div className="adoption-story-image-container">
              <img
                src="https://neeko-copilot.bytedance.net/api/text2image?prompt=child%20playing%20with%20two%20cats&size=800x600"
                alt="双猫的欢乐世界"
                className="adoption-story-image"
              />
            </div>
            <div className="adoption-story-content">
              <h3 className="adoption-story-title">双猫的欢乐世界</h3>
              <p className="adoption-story-description">
                两只小宝贝特别好，每天看着它们打闹都很快乐！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adoption;
