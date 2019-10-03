import React from "react";

const Columns = ({ data }) => {
  if (data.type === "heading") {
    return (
      <React.Fragment>
        <th>{data.name}</th>
        <th>{data.mathsMark}</th>
        <th>{data.englishMark}</th>
        <th>{data.chemistryMark}</th>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <td>{data.name}</td>
        <td>{data.mathsMark}</td>
        <td>{data.englishMark}</td>
        <td>{data.chemistryMark}</td>
      </React.Fragment>
    );
  }
};

export default Columns;
