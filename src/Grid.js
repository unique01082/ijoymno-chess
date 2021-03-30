import React from "react";
import { values } from "lodash";
import MatrixTable from "./MatrixTable";
import Shikigami from "./Shikigami";
import CLASSES from "./constants/classes";
import ROLES from "./constants/roles";
import DATA from "./constants/shikigami-data";

const columns = values(CLASSES).map((clazz) => ({
  title: clazz.description,
  value: clazz,
}));
const rows = values(ROLES).map((clazz) => ({
  title: clazz.description,
  value: clazz,
}));

const Grid = () => {
  return (
    <MatrixTable
      rows={rows}
      columns={columns}
      dataSource={DATA}
      rowKey="role"
      columnKey="class"
      renderItem={(shikigami) => <Shikigami shikigami={shikigami} />}
      pagination={false}
      size="small"
    />
  );
};

export default Grid;
