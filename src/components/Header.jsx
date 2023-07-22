import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Calculator } from "../components";

export function Header() {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <div className="header__wrapper">
        <div className="header__content">
          <h1 className="header__heading | fw-bold fs-800 clr-neutral-800">
            Body Mass Index Calculator
          </h1>
          <p className="header__body | fw-regular fs-400 clr-neutral-500">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <Calculator />
      </div>
    </header>
  );
}
