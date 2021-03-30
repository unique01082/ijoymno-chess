import React from "react";
import { values, cloneDeep } from "lodash";
import MatrixTable from "./MatrixTable";
import Shikigami from "./Shikigami";
import CLASSES from "./constants/classes";
import ROLES from "./constants/roles";
import COLORS from "./constants/colors";
import DATA from "./constants/shikigami-data";
import { useCreation, useUpdate } from "ahooks";
import { Badge, Card } from "antd";

const Grid = () => {
  const state = useCreation(() => cloneDeep(DATA), []);
  const update = useUpdate();

  const columns = values(CLASSES).map((clazz) => ({
    count: state.filter((d) => d.class === clazz && d.level > 0).length,
    value: clazz,
    get title() {
      return (
        <Badge.Ribbon text={this.count} color={COLORS[this.count]}>
          <Card>{this.value.description}</Card>
        </Badge.Ribbon>
      );
    },
  }));
  const rows = values(ROLES).map((role) => ({
    count: state.filter((d) => d.role === role && d.level > 0).length,
    value: role,
    get title() {
      return (
        <Badge.Ribbon text={this.count} color={COLORS[this.count]}>
          <Card>{this.value.description}</Card>
        </Badge.Ribbon>
      );
    },
  }));

  return (
    <MatrixTable
      rows={rows}
      columns={columns}
      dataSource={state}
      rowKey="role"
      columnKey="class"
      renderItem={(shikigami) => (
        <Shikigami
          shikigami={shikigami}
          onClick={() => {
            shikigami.level = ((shikigami.level ?? 0) + 1) % 4;
            update();
          }}
        />
      )}
      pagination={false}
      size="small"
      bordered
      align="center"
    />
  );
};

export default Grid;
