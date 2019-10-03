import React from "react";
import Row from "./Row";

const Table = () => {
  class Student {
    constructor(name, mathsMark, englishMark, chemistryMark, type) {
      this.name = name;
      this.mathsMark = mathsMark;
      this.englishMark = englishMark;
      this.chemistryMark = chemistryMark;
      this.type = type
    }
  }
  const heading = new Student("Name", "Maths", "English", "Chemistry",'heading');
  const hari = new Student("hari", 10, 8, 7, 'data');
  const sri = new Student("sri", 10, 9, 8, 'data');

  // const heading =["Name","Maths", "English", "Chemistry"]
  return (
    <table>
      <tbody>
        <Row data={heading} />
        <Row data={hari} />
        <Row data={sri} />
      </tbody>
    </table>
  );
};

export default Table;
