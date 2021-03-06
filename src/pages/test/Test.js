import React from "react";

const Test = () => {
  // const jsxfirst = () => {
  //   // const a = "<h1> this is a </h1>";
  //   return (
  //     <div>
  //       <h1> This is sucess</h1>
  //     </div>
  //   );
  // };
  // const text = "this is text";
  // return (
  //   <div>
  //     Alpha Testing
  //     <h1> beta versions</h1>
  //     {jsxfirst()}
  //   </div>
  // );

  const operation = () => {
    let obj1 = {
      title: "check5",
      value: "value1",
    };
    let json1 = [
      {
        title: "check1",
        value: "value1",
      },
      {
        title: "check2",
        value: "value1",
      },
      {
        title: "check3",
        value: "value1",
      },
      {
        title: "check4",
        value: "value1",
      },
    ];
    let finalData = [...json1, obj1];
    console.log(`The joson data ${json1}`);
    console.log(finalData);
  };
  return <h1>Checking {operation()}</h1>;
};

export default Test;
