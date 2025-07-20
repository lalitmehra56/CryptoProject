import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import Alert from "../Alert/Alert";
import { chartDays } from "../../../helper/constants";

const CoinInfo = ({
  historicData,
  setdays,
  setCoinInerval,
  days,
  currency,
}) => {
  function dayChange(e) {
    console.log(e.target.options[e.target.selectedIndex].value);
    const daysSelected = e.target.options[e.target.selectedIndex].value;
    if (daysSelected == 1) {
      setCoinInerval("");
    } else {
      setCoinInerval("daily");
    }
    setdays(e.target.options[e.target.selectedIndex].value);
  }
  Chart.register(CategoryScale);
  if (!historicData) {
    return <Alert message="No Data is available" type="info" />;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-6 p-6 w-full md:w-3/4">
      <div className="h-[500px] w-full">
        <Line
          data={{
            labels: historicData.prices.map((coinPrice) => {
              let date = new Date(coinPrice[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM `
                  : `${date.getHours()}:${date.getMinutes()}AM`;
              return days == 1 ? time : date.toDateString();
            }),
            datasets: [
              {
                label: `Price (Past ${days} days in ${currency.toUpperCase()})`,
                data: historicData.prices.map((coinPrice) => coinPrice[1]),
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            elements: { point: { radius: 0 } },
          }}
        />
      </div>

      <div className="flex justify-center mt-5 w-full">
        <select
          // defaultValue="Pick a text editor"
          className="select select-primary w-full max-w-xs"
          onChange={dayChange}
          // value={days}
        >
          {chartDays.map((day, index) => {
            return (
              <option
                selected={days == day.value}
                key={index}
                value={day.value}
              >
                {day.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default CoinInfo;
