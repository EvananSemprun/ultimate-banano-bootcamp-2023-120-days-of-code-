import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "./DateTimePicker.css";

const DateTimePicker = () => {
  const [date, setDate] = useState("");

  const handleChange = (value) => {
    setDate(value);
  };

  return (
    <div className="datetime-picker-container">
      <Datetime
        value={date}
        onChange={handleChange}
        inputProps={{
          className: "datetime-picker-input",
          placeholder: "Selecciona una fecha y hora",
        }}
        dateFormat="DD/MM/YYYY"
        timeFormat="hh:mm A"
      />
    </div>
  );
};

export default DateTimePicker;