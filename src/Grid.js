import React from "react";
import { values, cloneDeep } from "lodash";
import Shikigami from "./Shikigami";
import CLASSES from "./constants/classes";
import ROLES from "./constants/roles";
import COLORS from "./constants/colors";
import DATA from "./constants/shikigami-data";
import CLASS_EFFECTS from "./constants/class-effects";
import ROLE_EFFECTS from "./constants/role-effects";
import { useCreation, useUpdate } from "ahooks";
import { Badge, Progress, Typography } from "antd";
import Matrix from "./matrix";

const Grid = () => {
  const state = useCreation(() => cloneDeep(DATA), []);
  const update = useUpdate();

  const columns = values(CLASSES).map((clazz) => ({
    count: state.filter((d) => d.class === clazz && d.level > 0).length,
    value: clazz,
    get stages() {
      return CLASS_EFFECTS[clazz];
    },
    get stage() {
      return this.stages.indexOf(
        Math.max(0, ...this.stages.filter((s) => s <= this.count))
      );
    },
    get title() {
      return (
        <Badge
          count={this.count}
          style={{ backgroundColor: COLORS[this.count] }}
        >
          <Typography.Paragraph style={{ marginBottom: 0 }}>
            {this.value.description}
          </Typography.Paragraph>
          <Typography.Paragraph style={{ marginBottom: 0 }} code>
            {this.count}/[{this.stages.toString()}]
          </Typography.Paragraph>
          <Progress
            percent={((this.stage + 1) / this.stages.length) * 100}
            steps={this.stages.length}
            showInfo={false}
          />
        </Badge>
      );
    },
  }));
  const rows = values(ROLES).map((role) => ({
    count: state.filter((d) => d.role === role && d.level > 0).length,
    value: role,
    get stages() {
      return ROLE_EFFECTS[role];
    },
    get stage() {
      return this.stages.indexOf(
        Math.max(0, ...this.stages.filter((s) => s <= this.count))
      );
    },
    get title() {
      return (
        <Badge
          count={this.count}
          style={{ backgroundColor: COLORS[this.count] }}
        >
          <Typography.Paragraph style={{ marginBottom: 0 }}>
            {this.value.description}
          </Typography.Paragraph>
          <Typography.Paragraph style={{ marginBottom: 0 }} code>
            {this.count}/[{this.stages.toString()}]
          </Typography.Paragraph>
          <Progress
            percent={((this.stage + 1) / this.stages.length) * 100}
            steps={this.stages.length}
            showInfo={false}
          />
        </Badge>
      );
    },
  }));

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url(bg2.jpg)",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Matrix
        rows={rows}
        columns={columns}
        dataSource={state}
        rowKey="role"
        columnKey="class"
        renderItem={(shikigami, row, column) => (
          <Shikigami
            shikigami={shikigami}
            onClick={() => {
              shikigami.level = ((shikigami.level ?? 0) + 1) % 4;
              update();
            }}
          />
        )}
        renderCell={(children, item, row, column) => {
          const hasShikigamiSelected = !!(row.count || column.count);
          const hasShikigami = !!item.find((i) => i.level);

          return (
            <td
              style={{
                display: "flex",
                justifyContent: "space-around",
                border: hasShikigamiSelected ? "1px solid #fff3" : undefined,
                backgroundColor: hasShikigamiSelected
                  ? hasShikigami
                    ? "#f888"
                    : "#fff4"
                  : undefined,
              }}
            >
              {children}
            </td>
          );
        }}
      />
    </div>
  );
};

export default Grid;
