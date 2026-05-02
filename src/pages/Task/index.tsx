import React, { useState } from "react";
import CatCardNear from "../../components/cat_near";
import "./index.scss";
import left1 from "../../assets/icon/left1.svg";
import left2 from "../../assets/icon/left2.svg";
import right1 from "../../assets/icon/right1.svg";
import right2 from "../../assets/icon/right2.svg";
import cat1 from "../../assets/cats/16.png";
import cat2 from "../../assets/cats/17.png";
import cat3 from "../../assets/cats/1.png";
import cat4 from "../../assets/cats/19.png";
import cat5 from "../../assets/cats/20.png";
import cat6 from "../../assets/cats/21.png";

// 猫咪数据
const catsData = [
  {
    id: 1,
    colorid: 0,
    name: "小橘",
    distance: "距离您200m",
    image: cat3,
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
    image: cat1,
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
    image: cat2,
    isEmergency: true,
    difficulty: "lv4",
    points: 25,
    status: "待处理",
    need: "医疗救助",
    description: "严重脱水，需要紧急治疗",
    deadline: "2026-03-20",
  },
  {
    id: 1,
    colorid: 0,
    name: "布丁",
    distance: "距离您230m",
    image: cat4,
    isEmergency: true,
    difficulty: "lv3",
    points: 20,
    status: "待处理",
    need: "救助需求",
    description: "后腿受伤，需要紧急救助",
    deadline: "2026-03-22",
  },
  {
    id: 2,
    colorid: 1,
    name: "安安",
    distance: "距离您650m",
    image: cat5,
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
    name: "团子",
    distance: "距离您700m",
    image: cat6,
    isEmergency: true,
    difficulty: "lv4",
    points: 25,
    status: "待处理",
    need: "医疗救助",
    description: "需要治疗",
    deadline: "2026-03-20",
  },
];

const Task: React.FC = () => {
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
    <div className="task-container">
      {/* 筛选区域 */}
      <div className="task-filter-section">
        {/* 紧急状态筛选 */}
        <div className="task-filter-row">
          <div className="task-filter-label">紧急状态</div>
          <div className="task-filter-options">
            <div
              className={`task-filter-option ${filters.gender === "全部" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("gender", "全部")}
            >
              全部
            </div>
            <div
              className={`task-filter-option ${filters.gender === "紧急" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("gender", "紧急")}
            >
              紧急
            </div>
            <div
              className={`task-filter-option ${filters.gender === "普通" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("gender", "普通")}
            >
              普通
            </div>
          </div>
        </div>

        {/* 难度筛选 */}
        <div className="task-filter-row">
          <div className="task-filter-label" style={{ letterSpacing: "2em" }}>
            难 度
          </div>
          <div className="task-filter-options">
            <div
              className={`task-filter-option ${filters.size === "全部" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("size", "全部")}
            >
              全部
            </div>
            <div
              className={`task-filter-option ${filters.size === "LV 1" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("size", "LV 1")}
            >
              LV 1
            </div>
            <div
              className={`task-filter-option ${filters.size === "LV 2" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("size", "LV 2")}
            >
              LV 2
            </div>
            <div
              className={`task-filter-option ${filters.size === "LV 3" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("size", "LV 3")}
            >
              LV 3
            </div>
          </div>
        </div>

        {/* 任务类型筛选 */}
        <div className="task-filter-row">
          <div className="task-filter-label">任务类型</div>
          <div className="task-filter-options">
            <div
              className={`task-filter-option ${filters.age === "全部" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("age", "全部")}
            >
              全部
            </div>
            <div
              className={`task-filter-option ${filters.age === "头尾" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("age", "头尾")}
            >
              头尾
            </div>
            <div
              className={`task-filter-option ${filters.age === "救助" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("age", "救助")}
            >
              救助
            </div>
            <div
              className={`task-filter-option ${filters.age === "绝育" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("age", "绝育")}
            >
              绝育
            </div>
            <div
              className={`task-filter-option ${filters.age === "回访" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("age", "回访")}
            >
              回访
            </div>
          </div>
        </div>

        {/* 截止日期筛选 */}
        <div className="task-filter-row">
          <div className="task-filter-label">截止日期</div>
          <div className="task-filter-options">
            <div
              className={`task-filter-option ${filters.sterilization === "全部" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("sterilization", "全部")}
            >
              全部
            </div>
            <div
              className={`task-filter-option ${filters.sterilization === "一天以内" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("sterilization", "一天以内")}
            >
              一天以内
            </div>
            <div
              className={`task-filter-option ${filters.sterilization === "1-3天" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("sterilization", "1-3天")}
            >
              1-3天
            </div>
            <div
              className={`task-filter-option ${filters.sterilization === "3-5天" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("sterilization", "3-5天")}
            >
              3-5天
            </div>
            <div
              className={`task-filter-option ${filters.sterilization === "5天以上" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("sterilization", "5天以上")}
            >
              5天以上
            </div>
          </div>
        </div>

        {/* 距离信息筛选 */}
        <div className="task-filter-row">
          <div className="task-filter-label">距离信息</div>
          <div className="task-filter-options">
            <div
              className={`task-filter-option ${filters.adoption === "全部" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("adoption", "全部")}
            >
              全部
            </div>
            <div
              className={`task-filter-option ${filters.adoption === "1km以内" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("adoption", "1km以内")}
            >
              1km以内
            </div>
            <div
              className={`task-filter-option ${filters.adoption === "1-3km" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("adoption", "1-3km")}
            >
              1-3km
            </div>
            <div
              className={`task-filter-option ${filters.adoption === "3-5km" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("adoption", "3-5km")}
            >
              3-5km
            </div>
            <div
              className={`task-filter-option ${filters.adoption === "5km以上" ? "task-active" : ""}`}
              onClick={() => handleFilterChange("adoption", "5km以上")}
            >
              5km以上
            </div>
          </div>
        </div>

        {/* 筛选按钮 */}
        <div className="task-filter-actions">
          <button
            className="task-filter-button task-filter"
            onClick={handleFilter}
          >
            筛选
          </button>
          <button
            className="task-filter-button task-filter"
            onClick={handleReset}
          >
            重置
          </button>
        </div>
      </div>

      {/* 任务列表 */}
      <div className="task-grid">
        {currentCats.map((cat) => (
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

      {/* 分页 */}
      <div className="task-pagination">
        <button
          className={`task-pagination-button ${currentPage === 1 ? "task-disabled" : ""}`}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          <img src={left2} className="task-pagination-icon" />
        </button>
        <button
          className={`task-pagination-button ${currentPage === 1 ? "task-disabled" : ""}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={left1} className="task-pagination-icon" />
        </button>

        {currentPage > 3 && (
          <>
            <button
              className="task-pagination-button"
              onClick={() => handlePageChange(1)}
            >
              1
            </button>
            <div className="task-pagination-ellipsis">...</div>
          </>
        )}

        {[...Array(Math.min(5, totalPages))].map((_, index) => {
          const page = currentPage <= 3 ? index + 1 : currentPage - 3 + index;
          if (page > 0 && page <= totalPages) {
            return (
              <button
                key={page}
                className={`task-pagination-button ${currentPage === page ? "task-active" : ""}`}
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
            <div className="task-pagination-ellipsis">...</div>
            <button
              className="task-pagination-button"
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          className={`task-pagination-button ${currentPage === totalPages ? "task-disabled" : ""}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={right1} className="task-pagination-icon" />
        </button>
        <button
          className={`task-pagination-button ${currentPage === totalPages ? "task-disabled" : ""}`}
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <img src={right2} className="task-pagination-icon" />
        </button>
      </div>
    </div>
  );
};

export default Task;
