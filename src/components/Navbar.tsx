import React from "react";
import { Link, useLocation } from "react-router-dom";
import bgImage from "../assets/images/mapbackground.svg";

const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", en: "HOME", zh: "首页" },
    { path: "/cats", en: "CATS", zh: "喵星人" },
    { path: "/task-center", en: "TASK CENTER", zh: "任务中心" },
    { path: "/citymap", en: "URBAN HEAT MAP", zh: "城市热力图" },
    { path: "/adoption", en: "ADOPTION CENTER", zh: "领养中心" },
    { path: "/mine", en: "PERSONAL CENTER", zh: "个人中心" },
  ];
  const isShow =
    location.pathname === "/citymap" ||
    location.pathname === "/adoption" ||
    location.pathname === "/mine" ||
    location.pathname === "/taskdetail" ||
    location.pathname === "/catsdetail";

  return (
    <div
      style={{
        width: "100%",
        height: !isShow ? "384px" : "auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={bgImage}
        alt="Background"
        style={{
          display: isShow ? "none" : "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "1rem",
          zIndex: 2,
        }}
      >
        {/* 导航栏 */}
        <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                textDecoration: "none",
                color: location.pathname === item.path ? "#FF6B35" : "#18181A",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                padding: "0.5rem 1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "Source Han Sans",
                  fontSize: "16px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                }}
              >
                {item.en}
              </span>
              <span
                style={{
                  fontFamily: "Source Han Sans",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {item.zh}
              </span>
            </Link>
          ))}
        </div>
        {!isShow && (
          <>
            <div
              style={{
                textAlign: "center",
                marginBottom: "2rem",
                maxWidth: "800px",
              }}
            >
              <h1
                style={{
                  fontFamily: "Source Han Sans",
                  fontSize: "36px",
                  fontWeight: 500,
                  margin: "0 0 1rem 0",
                }}
              >
                城市动物实时热力图
              </h1>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontWeight: "normal",
                  margin: "0",
                }}
              >
                发现身边的流浪毛孩子，用AI科技助力科学救助
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "2rem",
                marginBottom: "2.5rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#3498db",
                  }}
                ></div>
                <span
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  已投喂
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#f39c12",
                  }}
                ></div>
                <span
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  待救助
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#27ae60",
                  }}
                ></div>
                <span
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  已绝育/待领养
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#e74c3c",
                  }}
                ></div>
                <span
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  紧急求救
                </span>
              </div>
            </div>

            <button
              style={{
                padding: "12px 38px",
                backgroundColor: "#ff6b35",
                color: "white",
                border: "none",
                borderRadius: "16px",
                fontFamily: "Source Han Sans",
                fontSize: "16px",
                fontWeight: "normal",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 8px rgba(255, 107, 53, 0.3)",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.transform =
                  "translateY(-2px)";
                (e.target as HTMLButtonElement).style.boxShadow =
                  "0 4px 12px rgba(255, 107, 53, 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.transform =
                  "translateY(0)";
                (e.target as HTMLButtonElement).style.boxShadow =
                  "0 2px 8px rgba(255, 107, 53, 0.3)";
              }}
            >
              点击查看全屏地图
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
