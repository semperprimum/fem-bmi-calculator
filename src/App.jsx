import { Header, Calculator, Description, Attribution } from "./components";
import CurveLeft from "./assets/images/pattern-curved-line-left.svg";

const css = `
@media only screen and (min-width: 60em) {
  .wrapper {
    background-image: url("${CurveLeft}");
    background-repeat: no-repeat;
    background-position: top 46.8rem right 1.65rem;
  }
}
`;

export default function App() {
  return (
    <div className="wrapper">
      <style scoped>{css}</style>
      <Header />
      <main>
        <Description />
      </main>
      <Attribution />
    </div>
  );
}
