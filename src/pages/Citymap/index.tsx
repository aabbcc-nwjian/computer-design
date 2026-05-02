import React, { useState } from "react";
import "./index.scss";
import icon1 from "../../assets/citymap/icon1.svg";
import icon2 from "../../assets/citymap/icon2.svg";
import map from "../../assets/images/map.png";

const Citymap: React.FC = () => {
  // 筛选状态
  const [displayType, setDisplayType] = useState("流浪猫密度");
  const [catStatus, setCatStatus] = useState<string[]>(["全部"]);
  const [timeRange, setTimeRange] = useState("今日");
  const [areaRange, setAreaRange] = useState("全市");

  // 处理显示类型变化
  const handleDisplayTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplayType(e.target.value);
  };

  // 处理猫咪状态变化
  const handleCatStatusChange = (status: string) => {
    setCatStatus((prev) => {
      // 如果点击的是"全部"，则只保留"全部"
      if (status === "全部") {
        return ["全部"];
      }
      // 如果之前包含"全部"，则移除"全部"并添加新状态
      if (prev.includes("全部")) {
        return [status];
      }
      // 如果已经包含该状态，则移除
      if (prev.includes(status)) {
        return prev.filter((s) => s !== status);
      }
      // 否则添加该状态
      return [...prev, status];
    });
  };

  // 处理时间范围变化
  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
  };

  // 处理区域范围变化
  const handleAreaRangeChange = (range: string) => {
    setAreaRange(range);
  };

  // 刷新数据
  const handleRefreshData = () => {
    console.log("刷新数据");
    // 这里可以添加刷新数据的逻辑
  };

  // 导出数据
  const handleExportData = () => {
    console.log("导出数据");
    // 这里可以添加导出数据的逻辑
  };

  return (
    <div className="citymap-container">
      {/* 页面标题 */}
      <div className="citymap-page-header">
        <h1 className="citymap-page-title">城市流浪猫热力图</h1>
        <p className="citymap-page-description">
          可视化流浪猫分布，科学调配救助资源
        </p>
      </div>

      {/* 筛选区域 */}
      <div className="citymap-filter-section">
        {/* 显示类型 */}
        <div className="citymap-filter-group">
          <label className="citymap-filter-label">显示类型</label>
          <select
            className="citymap-filter-select"
            value={displayType}
            onChange={handleDisplayTypeChange}
          >
            <option value="流浪猫密度">流浪猫密度</option>
            <option value="救助需求">救助需求</option>
            <option value="领养情况">领养情况</option>
          </select>
        </div>

        {/* 猫咪状态 */}
        <div className="citymap-filter-group">
          <label className="citymap-filter-label">猫咪状态</label>
          <div className="citymap-filter-buttons">
            <button
              className={`citymap-filter-button ${catStatus.includes("待救助") ? "citymap-active" : ""}`}
              onClick={() => handleCatStatusChange("待救助")}
            >
              待救助
            </button>
            <button
              className={`citymap-filter-button ${catStatus.includes("待领养") ? "citymap-active" : ""}`}
              onClick={() => handleCatStatusChange("待领养")}
            >
              待领养
            </button>
            <button
              className={`citymap-filter-button ${catStatus.includes("已绝育") ? "citymap-active" : ""}`}
              onClick={() => handleCatStatusChange("已绝育")}
            >
              已绝育
            </button>
          </div>
        </div>

        {/* 时间范围 */}
        <div className="citymap-filter-group">
          <label className="citymap-filter-label">时间范围</label>
          <div className="citymap-filter-buttons">
            <button
              className={`citymap-filter-button ${timeRange === "今日" ? "citymap-active" : ""}`}
              onClick={() => handleTimeRangeChange("今日")}
            >
              今日
            </button>
            <button
              className={`citymap-filter-button ${timeRange === "本周" ? "citymap-active" : ""}`}
              onClick={() => handleTimeRangeChange("本周")}
            >
              本周
            </button>
            <button
              className={`citymap-filter-button ${timeRange === "本月" ? "citymap-active" : ""}`}
              onClick={() => handleTimeRangeChange("本月")}
            >
              本月
            </button>
          </div>
        </div>

        {/* 区域范围 */}
        <div className="citymap-filter-group">
          <label className="citymap-filter-label">区域范围</label>
          <div className="citymap-filter-buttons">
            <button
              className={`citymap-filter-button ${areaRange === "全市" ? "citymap-active" : ""}`}
              onClick={() => handleAreaRangeChange("全市")}
            >
              全市
            </button>
            <button
              className={`citymap-filter-button ${areaRange === "自定义" ? "citymap-active" : ""}`}
              onClick={() => handleAreaRangeChange("自定义")}
            >
              自定义选区
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          fontFamily: "Roboto",
          fontSize: 12,
          fontWeight: "normal",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        点击热点可查看区域猫咪详情，快速创建救助任务。
      </div>
      <div
        style={{ width: "100%", height: "1px", backgroundColor: "#E5E5E5" }}
      />

      <div
        style={{
          display: "flex",
          justifyItems: "flex-start",
          gap: "4rem",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {/* 数据统计 */}
        <div className="citymap-stats-section">
          <div className="citymap-stat-card">
            <div className="citymap-stat-label">全市流浪猫总数</div>
            <div className="citymap-stat-value citymap-total">1,247 只</div>
          </div>
          <div className="citymap-stat-card">
            <div className="citymap-stat-label">待救助</div>
            <div className="citymap-stat-value citymap-emergency">156 只</div>
          </div>
          <div className="citymap-stat-card">
            <div className="citymap-stat-label">待领养</div>
            <div className="citymap-stat-value citymap-adoption">892 只</div>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="citymap-action-buttons">
          <button
            className="citymap-action-button citymap-refresh"
            onClick={handleRefreshData}
          >
            <img src={icon1} alt="刷新" />
            刷新数据
          </button>
          <button
            className="citymap-action-button citymap-refresh"
            onClick={handleExportData}
          >
            <img src={icon2} alt="导出" />
            导出数据
          </button>
        </div>
      </div>

      {/* 地图区域 */}
      <div className="citymap-map-section">
        <div className="citymap-map-container">
          {/* 使用 img 组件代替地图 */}
          <img src={map} className="citymap-map-image" />
        </div>

        {/* 图例 */}
        <div className="citymap-legend">
          <div className="citymap-legend-title">图例</div>
          <div className="citymap-legend-item">
            <div className="citymap-legend-dot citymap-critical"></div>
            <span>危急(紧急救助)</span>
          </div>
          <div className="citymap-legend-item">
            <div className="citymap-legend-dot citymap-high"></div>
            <span>高(重点关注)</span>
          </div>
          <div className="citymap-legend-item">
            <div className="citymap-legend-dot citymap-medium"></div>
            <span>普通(常规关注)</span>
          </div>
          <div className="citymap-legend-item">
            <div className="citymap-legend-dot citymap-safe"></div>
            <span>安全(状况良好)</span>
          </div>
        </div>
      </div>

      {/* 风险警告 */}
      <div className="citymap-warning-section">
        <div className="citymap-warning-icon">⚠️</div>
        <div className="citymap-warning-content">
          <p className="citymap-warning-description">
            【高风险预警】大学南门区域流浪猫密度较高，其中 1
            只猫咪为紧急救助状态，建议优先开展救助行动。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Citymap;
