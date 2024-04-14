import React from "react";
import { Title, Image, Box } from "../../components/index";
import { AVATAR_IMAGE } from "../../constant/image";
import "./home.css";
import { NAME } from "../../constant/data";
import colors from "../../config/colors";
import i18n from "../../i18n/i18n";

function Home() {
  return (
    <div style={{ backgroundColor: colors.primary, height: "100%" }}>
      <div
        className="header"
        style={{
          backgroundColor: colors.primary,
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
        }}
      >
        <div className="avatar-view">
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            src={AVATAR_IMAGE}
          />
        </div>
        <div className="header-content">
          <Title
            style={{
              color: "#FFF",
              fontWeight: 800,
              fontSize: 40,
              textAlign: "left",
            }}
            className="name-sub-title"
          >
            {"HI THERE!"}
          </Title>
          <Title
            style={{
              color: colors.button,
              flexDirection: "row",
              width: "100%",
              display: "flex",
              alignItems: "center",
              marginTop: -60,
              fontWeight: 800,
              fontSize: 50,
              textAlign: "left",
            }}
            className="name"
          >
            <Title
              style={{ color: "#FFF", marginRight: 20, fontSize: 50 }}
              className="name"
            >
              {"I'M"}
            </Title>
            {NAME}
          </Title>

          <div className="job-title">
            <Title style={{ color: "#fff" }}>
              {"SENIOR SOFTWARE ENGINEER"}
            </Title>
          </div>

          <div style={{ marginTop: 20, width: "70%" }}>
            <p className="header-description">{i18n.t("DATA.INTRODUCTION")}</p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: colors.primary, height: 500 }}></div>
    </div>
  );
}

export default Home;
