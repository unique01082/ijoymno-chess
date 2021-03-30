import React from "react";
import Avatar from "antd/lib/avatar/avatar";
import { Rate } from "antd";

const Shikigami = ({ shikigami, onClick }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      onClick={onClick}
    >
      <Avatar size={40} src={shikigami.avatar} />
      <Rate
        disabled
        count={3}
        value={shikigami.level}
        style={{ fontSize: 10 }}
      />
    </div>
  );
};

export default Shikigami;
