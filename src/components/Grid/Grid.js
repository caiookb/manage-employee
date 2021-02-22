import React from "react";
import { StyledGrid } from "./Styles";

const Grid = (props) => {
  const { columns, rows, customColumns, children } = props;

  const rowLength = rows % 2 == 0 ? rows : rows + 1;
  const items = React.Children.toArray(children);

  const gridRows = new Array(rowLength)
    .fill({ items: [], size: columns })
    .map((row) => {
      const splicing = items.splice(0, row.size);
      return { ...row, items: splicing };
    });

  const convertedFlotToFraction = customColumns?.map((e) => {
    e = `${e}fr`;
    return e;
  });

  return gridRows.map((row) => {
    return (
      <StyledGrid columns={customColumns ? convertedFlotToFraction : row.size}>
        {row.items}
      </StyledGrid>
    );
  });
};

export default Grid;

Grid.defaultProps = {
  rows: [],
};
