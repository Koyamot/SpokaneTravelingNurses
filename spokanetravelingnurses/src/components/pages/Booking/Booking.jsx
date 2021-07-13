import React, { useEffect, useState } from "react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";

const Booking = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  const onChange = (item) => {
    setState([item.selection]);
  }

  console.log(state)

  return (
    <div style={{ height: "45rem", background: "#FFF" }}>
      <h1>Booking</h1>
      <DateRangePicker
        onChange={onChange}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
      ;
    </div>
  );
};

export default Booking;
