import React from "react";
import logo from "../assets/logo/logo.svg";
import searchIcon from "../assets/icon/search.svg";

const Tobline: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "1rem 2rem",
        boxShadow: "0 2px 0px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          marginLeft: "5%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <img
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
            }}
            src={logo}
            alt="Logo"
          />
          <h1
            style={{
              fontFamily: "Source Han Sans",
              fontSize: 18,
              fontWeight: "normal",
              color: "#FF6B35",
            }}
          >
            项目名称
          </h1>
        </div>

        {/* 中间：城市选择和搜索框 */}
        <div
          style={{
            flex: 1,
            maxWidth: "450px",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <div
            style={{
              fontFamily: "Source Han Sans",
              fontSize: 14,
              fontWeight: "normal",
            }}
          >
            武汉市
          </div>

          {/* 搜索框 */}
          <div
            style={{
              flex: 1,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#999",
                fontSize: "1rem",
                pointerEvents: "none",
              }}
            >
              <img
                style={{
                  width: "20px",
                  height: "20px",
                }}
                src={searchIcon}
              />
            </div>
            <input
              type="text"
              placeholder="搜索猫咪名字或地点"
              style={{
                width: "100%",
                padding: "0.7rem 1rem 0.7rem 3rem",
                borderRadius: "20px",
                border: "1px solid transparent",
                backgroundColor: "#F5F5F5",
                fontSize: "0.875rem",
                outline: "none",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) => {
                (e.target as HTMLInputElement).style.borderColor = "#FF6B35";
              }}
              onBlur={(e) => {
                (e.target as HTMLInputElement).style.borderColor =
                  "transparent";
              }}
            />
          </div>
        </div>

        {/* 右侧：用户头像、名称、标签 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#f0f0f0",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
                fontWeight: "bold",
              }}
            >
              U
            </div>
            <div>
              <div
                style={{
                  fontFamily: "Source Han Sans",
                  fontSize: 16,
                  fontWeight: "normal",
                }}
              >
                用户名
              </div>
              {/* <div
                style={{
                  fontSize: "0.75rem",
                  color: "#666",
                }}
              >
                普通用户
              </div> */}
            </div>
          </div>
          <div
            style={{
              fontFamily: "Source Han Sans",
              fontSize: 12,
              fontWeight: "normal",
              color: "#F97316",
            }}
          >
            救助达人 LV.5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tobline;
