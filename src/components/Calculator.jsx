import { useEffect, useState } from "react";
import { Radio, Input } from "../components";
import {
  calculateHealthyWeight,
  convertToCm,
  convertToKg,
  convertWeightToImperial,
} from "../utils/weight";

export function Calculator() {
  const [selected, setSelected] = useState("metric");
  const [bmi, setBmi] = useState(0);
  const [healthyWeightRange, setHealthyWeightRange] = useState("");
  const [dataMetric, setDataMetric] = useState({ height: "", weight: "" });
  const [dataImperial, setDataImperial] = useState({
    feet: "",
    inches: "",
    stones: "",
    pounds: "",
  });

  useEffect(() => {
    calculateBmi();
  }, [dataMetric, dataImperial]);

  useEffect(() => {
    if (selected === "metric") {
      const healthyWeight = calculateHealthyWeight(
        dataMetric.height,
        dataMetric.weight
      );
      setHealthyWeightRange(
        `${healthyWeight.lowerBoundWeight}kgs - ${healthyWeight.higherBoundWeight}kgs`
      );
    } else {
      const height = convertToCm(dataImperial.feet, dataImperial.inches);
      const healthyWeight = calculateHealthyWeight(height);
      const lowerBoundWeight = convertWeightToImperial(
        healthyWeight.lowerBoundWeight
      );
      const higherBoundWeight = convertWeightToImperial(
        healthyWeight.higherBoundWeight
      );
      setHealthyWeightRange(
        `${lowerBoundWeight.stones}st ${lowerBoundWeight.pounds}lbs - ${higherBoundWeight.stones}st ${higherBoundWeight.pounds}lbs`
      );
    }
  }, [bmi]);

  const handleRadioChange = (e) => {
    setSelected(e.target.value);
    setBmi(0);
  };

  const calculateBmi = () => {
    if (
      selected === "metric" &&
      dataMetric.height !== "" &&
      dataMetric.weight !== ""
    ) {
      const height = dataMetric.height / 100;
      setBmi((dataMetric.weight / (height * height)).toFixed(1));
    } else if (
      selected === "imperial" &&
      dataImperial.feet !== "" &&
      dataImperial.inches !== "" &&
      dataImperial.stones !== "" &&
      dataImperial.pounds !== ""
    ) {
      const height = convertToCm(dataImperial.feet, dataImperial.inches) / 100;
      const weight = convertToKg(dataImperial.stones, dataImperial.pounds);
      console.log(height, weight);
      setBmi((weight / (height * height)).toFixed(1));
    }
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    if (selected === "metric") {
      setDataMetric({ ...dataMetric, [name]: value });
    } else {
      setDataImperial({ ...dataImperial, [name]: value });
    }
  };

  return (
    <section className="calculator">
      <h2 className="calculator__heading | clr-neutral-900 fs-600 fw-bold">
        Enter your details below
      </h2>
      <form>
        <div className="radio-wrapper">
          <Radio
            label="metric"
            onChange={(e) => handleRadioChange(e)}
            selected={selected}
          />
          <Radio
            label="imperial"
            onChange={(e) => handleRadioChange(e)}
            selected={selected}
          />
        </div>
        <div className="calculator__inputs-wrapper" data-units={selected}>
          {selected === "metric" ? (
            <Input
              unit="cm"
              ariaLabel="height"
              label="Height"
              value={dataMetric.height}
              onChange={(e) => handleInputChange(e)}
            />
          ) : (
            <div className="calculator__input-group">
              <Input
                unit="ft"
                label="Height"
                ariaLabel="feet"
                onChange={(e) => handleInputChange(e)}
                value={dataImperial.feet}
              />
              <Input
                unit="in"
                ariaLabel="inches"
                onChange={(e) => handleInputChange(e)}
                value={dataImperial.inches}
              />
            </div>
          )}
          {selected === "metric" ? (
            <Input
              unit="kg"
              ariaLabel="weight"
              label="Weight"
              value={dataMetric.weight}
              onChange={(e) => handleInputChange(e)}
            />
          ) : (
            <div className="calculator__input-group">
              <Input
                label="Weight"
                unit="st"
                ariaLabel="stones"
                onChange={(e) => handleInputChange(e)}
                value={dataImperial.stones}
              />
              <Input
                unit="lbs"
                ariaLabel="pounds"
                value={dataImperial.pounds}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          )}
        </div>
        <div className="calculator__result">
          {bmi ? (
            <>
              <div className="calculator__content">
                <p className="calculator__result__heading | fs-400 clr-neutral-100 ">
                  Your BMI is... <span className="fw-bold fs-800">{bmi}</span>
                </p>
                <p className="calculator__body | fw-regular fs-300 clr-neutral-100">
                  Your BMI suggests{" "}
                  {bmi < 18.5
                    ? "you are underweight"
                    : bmi >= 18.5 && bmi < 25
                    ? "you're a healthy weight"
                    : bmi >= 25 && bmi < 30
                    ? "you are overweight"
                    : "you have obesity"}
                  . Your ideal weight is between{" "}
                  <span className="fw-bold">{healthyWeightRange}</span>.
                </p>
              </div>
            </>
          ) : (
            <>
              <p className="calculator__result__welcome | clr-neutral-100 fw-bold fs-600">
                Welcome!
              </p>
              <p className="calculator__result__description | clr-neutral-100 fw-regular fs-300">
                Enter your height and weight and you’ll see your BMI result here
              </p>
            </>
          )}
        </div>
      </form>
    </section>
  );
}
