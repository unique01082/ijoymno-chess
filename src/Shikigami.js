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
      format={() => <Avatar size={64} src={shikigami.avatar} />}
      onClick={onClick}
      status="active"
      trailColor={QUALITY_COLORS[shikigami.quality]}
      strokeColor={{
        "0%": "#f00a",
        "50%": "#0f0c",
        "100%": "#00ff",
      }}
      style={{ margin: 4 }}
      strokeWidth={8}
    />
  );
};

export default Shikigami;
