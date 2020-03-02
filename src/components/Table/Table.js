import React from "react";

export default props => {
  function renderHead() {
    const itens = props.head || [];
    return (
      <tr>
        {itens.map(value => (
          <th key={value} scope="col" className="text-white">
            {value}
          </th>
        ))}
      </tr>
    );
  }

  return (
    <table className="table table-bordered table-striped">
      <thead className="bg-marsala">{renderHead()}</thead>
      <tbody>{props.rows.length > 0 ? props.rows : null}</tbody>
    </table>
  );
};
