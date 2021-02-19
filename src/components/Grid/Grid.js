import React from "react";
import { StyledGrid } from "./Styles";

const Grid = (props) => {
  const { columns, display, children } = props;

  const items = React.Children.toArray(children);

  const convertedFlotToFraction = display.map((e) => {
    e = `${e}fr`;
    return e;
  });

  const rows = new Array(columns.length)
    .fill({ items: [], size: 0, display: 0 })
    .map((row, index) => {
      row.size = columns[index];
      return { ...row };
    })
    .map((row) => {
      const splicing = items.splice(0, row.size);
      return { ...row, items: splicing };
    });

  const hasCustomDisplay = display.length > 0;

  return rows.map((row) => (
    <StyledGrid columns={hasCustomDisplay ? convertedFlotToFraction : row.size}>
      {row.items}
    </StyledGrid>
  ));
};

export default Grid;

Grid.defaultProps = {
  display: [],
};
