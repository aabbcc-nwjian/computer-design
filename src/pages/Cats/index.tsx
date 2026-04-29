import React, { useState } from "react";
import CatCard from "../../components/cat_wait";
import "./index.scss";
import left1 from "../../assets/icon/left1.svg";
import left2 from "../../assets/icon/left2.svg";
import right1 from "../../assets/icon/right1.svg";
import right2 from "../../assets/icon/right2.svg";

// 猫咪数据
const catsData = [
  {
    id: 1,
    name: "夜鹰",
    gender: "雄性",
    age: "1.5年",
    breed: "黑猫",
    image:
      "https://neeko-copilot.bytedance.net/api/text2image?prompt=black%20cat%20with%20yellow%20eyes&size=800x600",
    status: "绝育后放归",
    statusType: "sterilized" as const,
    personalityTags: ["野性", "已绝育", "独立"],
    description: "性格独立，适应户外生活，适合有固定区域照顾的环境哈哈哈哈",
  },
  {
    id: 2,
    name: "夜鹰",
    gender: "雄性",
    age: "1.5年",
    breed: "黑猫",
    image:
      "https://neeko-copilot.bytedance.net/api/text2image?prompt=black%20cat%20with%20yellow%20eyes&size=800x600",
    status: "治疗中",
    statusType: "treatment" as const,
    personalityTags: ["野性", "已绝育", "独立"],
    description: "性格独立，适应户外生活，适合有固定区域照顾的环境哈哈哈哈",
  },
  {
    id: 3,
    name: "夜鹰",
    gender: "雄性",
    age: "1.5年",
    breed: "黑猫",
    image:
      "https://neeko-copilot.bytedance.net/api/text2image?prompt=black%20cat%20with%20yellow%20eyes&size=800x600",
    status: "等待领养人",
    statusType: "waiting" as const,
    personalityTags: ["野性", "已绝育", "独立"],
    description: "性格独立，适应户外生活，适合有固定区域照顾的环境哈哈哈哈",
  },
  {
    id: 4,
    name: "夜鹰",
    gender: "雄性",
    age: "1.5年",
    breed: "黑猫",
    image:
      "https://neeko-copilot.bytedance.net/api/text2image?prompt=black%20cat%20with%20yellow%20eyes&size=800x600",
    status: "绝育后放归",
    statusType: "sterilized" as const,
    personalityTags: ["野性", "已绝育", "独立"],
    description: "性格独立，适应户外生活，适合有固定区域照顾的环境哈哈哈哈",
  },
  {
    id: 5,
    name: "夜鹰",
    gender: "雄性",
    age: "1.5年",
    breed: "黑猫",
    image:
      "https://neeko-copilot.bytedance.net/api/text2image?prompt=black%20cat%20with%20yellow%20eyes&size=800x600",
    status: "治疗中",
    statusType: "treatment" as const,
    personalityTags: ["野性", "已绝育", "独立"],
    description: "性格独立，适应户外生活，适合有固定区域照顾的环境哈哈哈哈",
  },
  {
    id: 6,
    name: "夜鹰",
    gender: "雄性",
    age: "1.5年",
    breed: "黑猫",
    image:
      "https://neeko-copilot.bytedance.net/api/text2image?prompt=black%20cat%20with%20yellow%20eyes&size=800x600",
    status: "等待领养人",
    statusType: "waiting" as const,
    personalityTags: ["野性", "已绝育", "独立"],
    description: "性格独立，适应户外生活，适合有固定区域照顾的环境哈哈哈哈",
  },
];

const Cats: React.FC = () => {
  // 筛选状态
  const [filters, setFilters] = useState({
    gender: "全部",
    size: "全部",
    age: "全部",
    sterilization: "全部",
    adoption: "全部",
  });

  // 分页状态
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const totalPages = Math.ceil(catsData.length / pageSize);

  // 处理筛选选项点击
  const handleFilterChange = (category: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  // 处理筛选按钮点击
  const handleFilter = () => {
    console.log("筛选条件:", filters);
    // 这里可以添加筛选逻辑
  };

  // 处理重置按钮点击
  const handleReset = () => {
    setFilters({
      gender: "全部",
      size: "全部",
      age: "全部",
      sterilization: "全部",
      adoption: "全部",
    });
  };

  // 处理分页按钮点击
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 处理查看详情按钮点击
  const handleViewDetails = (id: number) => {
    console.log("查看猫咪详情:", id);
    // 这里可以添加跳转到详情页的逻辑
  };

  // 计算当前页的猫咪数据
  const startIndex = (currentPage - 1) * pageSize;
  const currentCats = catsData.slice(startIndex, startIndex + pageSize);

  return (
    <div className="cats-container">
      {/* 筛选区域 */}
      <div className="cats-filter-section">
        {/* 性别筛选 */}
        <div className="cats-filter-row">
          <div className="cats-filter-label" style={{ letterSpacing: "2em" }}>
            性别
          </div>
          <div className="cats-filter-options">
            <div
              className={`cats-filter-option ${filters.gender === "全部" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("gender", "全部")}
            >
              全部
            </div>
            <div
              className={`cats-filter-option ${filters.gender === "雄性" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("gender", "雄性")}
            >
              雄性
            </div>
            <div
              className={`cats-filter-option ${filters.gender === "雌性" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("gender", "雌性")}
            >
              雌性
            </div>
          </div>
        </div>

        {/* 体型筛选 */}
        <div className="cats-filter-row">
          <div className="cats-filter-label" style={{ letterSpacing: "2em" }}>
            体型
          </div>
          <div className="cats-filter-options">
            <div
              className={`cats-filter-option ${filters.size === "全部" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("size", "全部")}
            >
              全部
            </div>
            <div
              className={`cats-filter-option ${filters.size === "大型" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("size", "大型")}
            >
              大型
            </div>
            <div
              className={`cats-filter-option ${filters.size === "中型" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("size", "中型")}
            >
              中型
            </div>
            <div
              className={`cats-filter-option ${filters.size === "小型" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("size", "小型")}
            >
              小型
            </div>
          </div>
        </div>

        {/* 年龄阶段筛选 */}
        <div className="cats-filter-row">
          <div className="cats-filter-label">年龄阶段</div>
          <div className="cats-filter-options">
            <div
              className={`cats-filter-option ${filters.age === "全部" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("age", "全部")}
            >
              全部
            </div>
            <div
              className={`cats-filter-option ${filters.age === "幼猫" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("age", "幼猫")}
            >
              幼猫
            </div>
            <div
              className={`cats-filter-option ${filters.age === "青年猫" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("age", "青年猫")}
            >
              青年猫
            </div>
            <div
              className={`cats-filter-option ${filters.age === "成年猫" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("age", "成年猫")}
            >
              成年猫
            </div>
            <div
              className={`cats-filter-option ${filters.age === "老年猫" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("age", "老年猫")}
            >
              老年猫
            </div>
          </div>
        </div>

        {/* 绝育状态筛选 */}
        <div className="cats-filter-row">
          <div className="cats-filter-label">绝育状态</div>
          <div className="cats-filter-options">
            <div
              className={`cats-filter-option ${filters.sterilization === "全部" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("sterilization", "全部")}
            >
              全部
            </div>
            <div
              className={`cats-filter-option ${filters.sterilization === "已绝育" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("sterilization", "已绝育")}
            >
              已绝育
            </div>
            <div
              className={`cats-filter-option ${filters.sterilization === "未绝育" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("sterilization", "未绝育")}
            >
              未绝育
            </div>
          </div>
        </div>

        {/* 领养状态筛选 */}
        <div className="cats-filter-row">
          <div className="cats-filter-label">领养状态</div>
          <div className="cats-filter-options">
            <div
              className={`cats-filter-option ${filters.adoption === "全部" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("adoption", "全部")}
            >
              全部
            </div>
            <div
              className={`cats-filter-option ${filters.adoption === "待领养" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("adoption", "待领养")}
            >
              待领养
            </div>
            <div
              className={`cats-filter-option ${filters.adoption === "已领养" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("adoption", "已领养")}
            >
              已领养
            </div>
            <div
              className={`cats-filter-option ${filters.adoption === "暂不可领养" ? "cats-active" : ""}`}
              onClick={() => handleFilterChange("adoption", "暂不可领养")}
            >
              暂不可领养
            </div>
          </div>
        </div>

        {/* 筛选按钮 */}
        <div className="cats-filter-actions">
          <button
            className="cats-filter-button cats-filter"
            onClick={handleFilter}
          >
            筛选
          </button>
          <button
            className="cats-filter-button cats-filter"
            onClick={handleReset}
          >
            重置
          </button>
        </div>
      </div>

      {/* 猫咪列表 */}
      <div className="cats-grid">
        {currentCats.map((cat) => (
          <CatCard
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

      {/* 分页 */}
      <div className="cats-pagination">
        <button
          className={`cats-pagination-button ${currentPage === 1 ? "cats-disabled" : ""}`}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          <img src={left2} className="cats-pagination-icon" />
        </button>
        <button
          className={`cats-pagination-button ${currentPage === 1 ? "cats-disabled" : ""}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={left1} className="cats-pagination-icon" />
        </button>

        {currentPage > 3 && (
          <>
            <button
              className="cats-pagination-button"
              onClick={() => handlePageChange(1)}
            >
              1
            </button>
            <div className="cats-pagination-ellipsis">...</div>
          </>
        )}

        {[...Array(Math.min(5, totalPages))].map((_, index) => {
          const page = currentPage <= 3 ? index + 1 : currentPage - 3 + index;
          if (page > 0 && page <= totalPages) {
            return (
              <button
                key={page}
                className={`cats-pagination-button ${currentPage === page ? "cats-active" : ""}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            );
          }
          return null;
        })}

        {currentPage < totalPages - 2 && (
          <>
            <div className="cats-pagination-ellipsis">...</div>
            <button
              className="cats-pagination-button"
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          className={`cats-pagination-button ${currentPage === totalPages ? "cats-disabled" : ""}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={right1} className="cats-pagination-icon" />
        </button>
        <button
          className={`cats-pagination-button ${currentPage === totalPages ? "cats-disabled" : ""}`}
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <img src={right2} className="cats-pagination-icon" />
        </button>
      </div>
    </div>
  );
};

export default Cats;
