import React from "react";

export default props => {
  function renderHead() {
    const itens = props.head || [];
    return (
      <tr>
        {itens.map(value => (
          <th key={value}>{value}</th>
        ))}
      </tr>
    );
  }

  return (
    <table id="example1" className="table table-bordered table-striped">
      <thead>{renderHead()}</thead>
      <tbody>{props.rows.length > 0 ? props.rows : null}</tbody>
      <tfoot>{renderHead()}</tfoot>
    </table>
  );
};
