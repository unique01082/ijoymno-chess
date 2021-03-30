import React from "react";
import { Table } from "antd";
import { useCreation } from "ahooks";

const MatrixTable = ({
  rows,
  columns,
  dataSource,
  rowKey,
  columnKey,
  renderItem,
  align,
  ...restProps
}) => {
  console.log("dataSource :>> ", dataSource);
  const mixedDataSource = useCreation(
    () =>
      rows.map((row) =>
        Object.assign(
          {
            _row: row,
          },
          ...columns.map((column) => ({
            [column.value]: dataSource.filter(
              (data) =>
                data[rowKey] === row.value && data[columnKey] === column.value
            ),
          }))
        )
      ),
    [rows, columns, dataSource]
  );

  const localColumns = useCreation(
    () =>
      [
        {
          title: "",
          dataIndex: "_row",
          key: "_row",
          render: (_row) => _row.title,
          align,
        },
      ].concat(
        columns.map((column) => ({
          title: column.title,
          dataIndex: column.value,
          key: column.value.description,
          render: (arr) => arr.map(renderItem),
        }))
      ),
    [columns]
  );

  return (
    <Table dataSource={mixedDataSource} columns={localColumns} {...restProps} />
  );
};

export default MatrixTable;
