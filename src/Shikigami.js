import React from "react";
import Avatar from "antd/lib/avatar/avatar";
import { Progress } from "antd";
import QUALITY_COLORS from "./constants/quality-colors";

const Shikigami = ({ shikigami, onClick }) => {
  return (
    <Progress
      type="circle"
      percent={(shikigami.level ?? 0) * 33.33334}
      width={80}
      format={() => (
        <Avatar
          size={70}
          src={
            <img
              alt=""
              src={shikigami.avatar}
              style={{
                filter: shikigami.level ? "unset" : "grayscale(100%)",
              }}
            />
          }
          style={{
            border: `2px solid ${QUALITY_COLORS[shikigami.quality]}`,
          }}
        />
      )}
      onClick={onClick}
      status="active"
      trailColor="#0000"
      strokeColor="#f008"
      strokeWidth={10}
    />
  );
};

export default Shikigami;
