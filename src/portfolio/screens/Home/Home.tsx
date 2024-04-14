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
          <Image className="avatar" src={AVATAR_IMAGE} />
        </div>
        <div className="header-content">
          <Title style={{ color: "#FFF" }} className="name-sub-title">
            {"HI THERE!"}
          </Title>
          <Title
            style={{
              color: colors.button,
              flexDirection: "row",
              width: "100%",
              display: "flex",
              alignItems: "center",
              marginTop: -50,
            }}
            className="name"
          >
            <Title style={{ color: "#FFF", marginRight: 20 }} className="name">
              {"I'M"}
            </Title>
            {NAME}
          </Title>

          <Box className="job-title">
            <Title className="job-title-text">
              {"SENIOR SOFTWARE ENGINEER"}
            </Title>
          </Box>

          <div style={{ marginTop: 20, width: "70%" }}>
            <Title className="header-description">
              {i18n.t("DATA.INTRODUCTION")}
            </Title>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: colors.primary, height: 500 }}></div>
    </div>
  );
}

export default Home;
