import { useCreation } from "ahooks";
import React from "react";
import "./styles.css";

const ROWKEY = "_row";

const Matrix = ({
  rows,
  columns,
  dataSource,
  rowKey,
  columnKey,
  renderItem,
}) => {
  const mixedDataSource = useCreation(
    () =>
      rows.map((row) =>
        Object.assign(
          {
            [ROWKEY]: row,
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
          title: "abc",
          dataIndex: ROWKEY,
          key: ROWKEY,
          render: (cell) => cell.title,
        },
      ].concat(
        columns.map((column) => ({
          title: column.title,
          dataIndex: column.value,
          key: column.value.description,
          render: (arr) => (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {arr.map(renderItem)}
            </div>
          ),
        }))
      ),
    [columns]
  );

  return (
    <table
      style={{
        gridTemplateColumns: [...Array(localColumns.length).keys()]
          .map((i) => "auto")
          .join(" "),
      }}
    >
      <thead>
        <tr>
          {localColumns.map((column) => (
            <th>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {mixedDataSource.map((row) => (
          <tr>
            {localColumns.map((column) =>
              column.dataIndex === ROWKEY ? (
                <td>{row[column.dataIndex].title}</td>
              ) : (
                <td style={{ display: "flex", justifyContent: "space-around" }}>
                  {row[column.dataIndex]?.map(renderItem)}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Matrix;
