import Card from "./Card";

const data1 = {
  name: "santhi",
  qualification: "PG",
  organisation: "Masai",
  gender: "Female",
  imgURL: "https://ca.slack-edge.com/T02QFJUB5DF-U03ASSU3PUY-23a73d071243-512",
};

const data2 = {
  name: "Masai",
  qualification: "PG",
  organisation: "Masai",
  gender: "Female",
  imgURL: "https://learn.masaischool.com/img/logo_big.png",
};

function EmployeeDetails() {
  return (
    // display a card with the given details
    <>
      <Card {...data1} />
      <Card {...data2} />
    </>
  );
}
export default EmployeeDetails;

// <img src= "" alt = "" />
