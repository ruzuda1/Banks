import { Chip, Divider, Slider, TextField } from "@mui/material";
import { useState } from "react";
import { DateTime } from "luxon";

const Form = ({
  interestRatePercentage,
  minimumCreditAmount,
  maximumCreditAmount,
  minimumTerm,
  maximumTerm,
}) => {
  const [sliderCreditValue, setSliderCreditValue] = useState(0);
  const [sliderTermValue, setSliderTermValue] = useState(0);

  const onSliderCreditChange = (event) => {
    setSliderCreditValue(event.target.value);
  };

  const onSliderTermChange = (event) => {
    setSliderTermValue(event.target.value);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        padding: "30px",
      }}
    >
      <div>
        <TextField
          id="standard-basic"
          label="Cума"
          variant="standard"
          disabled
          value={sliderCreditValue}
        />
        <Slider
          onChange={onSliderCreditChange}
          step={1000}
          min={minimumCreditAmount}
          max={maximumCreditAmount}
          marks
        />
        <TextField
          id="standard-basic"
          label="Срок"
          variant="standard"
          disabled
          value={`${sliderTermValue} м.`}
        />
        <Slider
          onChange={onSliderTermChange}
          step={1}
          min={minimumTerm}
          max={maximumTerm}
          marks
        />
        <Chip label={`Процентная ставка: ${interestRatePercentage}%`} />
      </div>
      <div
        style={{
          marginTop: "50px",
        }}
      >
        <p>{`Вернуть до: ${DateTime.local()
          .plus({ month: sliderTermValue })
          .toLocaleString()}`}</p>
        <p>{`Сума возврата: ${
          sliderCreditValue + (sliderCreditValue * interestRatePercentage) / 100
        }`}</p>
        <p>{`Месячный расчёт: ${Math.round(
          (sliderCreditValue +
            (sliderCreditValue * interestRatePercentage) / 100) /
            sliderTermValue
        )}`}</p>
      </div>
    </div>
  );
};

export default Form;
