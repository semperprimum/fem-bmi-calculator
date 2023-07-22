import { ReactComponent as IconEating } from "../assets/images/icon-eating.svg";
import { ReactComponent as IconExercise } from "../assets/images/icon-exercise.svg";
import { ReactComponent as IconSleep } from "../assets/images/icon-sleep.svg";
import { ReactComponent as IconGender } from "../assets/images/icon-gender.svg";
import { ReactComponent as IconAge } from "../assets/images/icon-age.svg";
import { ReactComponent as IconMuscle } from "../assets/images/icon-muscle.svg";
import { ReactComponent as IconPregnancy } from "../assets/images/icon-pregnancy.svg";
import { ReactComponent as IconRace } from "../assets/images/icon-race.svg";
import curveRight from "../assets/images/pattern-curved-line-right.svg";
import img from "../assets/images/image-man-eating.webp";

const css = `
@media only screen and (min-width: 60em) {
  .limitations {
    background-image: url("${curveRight}");
    background-repeat: no-repeat;
    background-position: top 16.2rem left 10.25rem;
  }
}
`;

export function Description() {
  return (
    <>
      <style scoped>{css}</style>
      <section className="meaning">
        <div className="meaning__img">
          <img src={img} alt="" />
        </div>
        <div className="meaning__content">
          <h3 className="meaning__heading | clr-neutral-900 fw-bold fs-700">
            What your BMI result means
          </h3>
          <p className="meaning__body | clr-neutral-500 fw-regular fs-400">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </section>

      <section className="advice">
        <ul className="advice__list" role="list">
          <li className="advice__listitem" role="listitem">
            <IconEating />
            <div className="advice__content">
              <strong className="advice__heading | fs-600 fw-bold clr-neutral-900">
                Healthy eating
              </strong>
              <p className="advice__body | fs-400 fw-regular clr-neutral-500">
                Healthy eating promotes weight control, disease prevention,
                better digestion, immunity, mental clarity, and mood.
              </p>
            </div>
          </li>
          <li className="advice__listitem" role="listitem">
            <IconExercise />
            <div className="advice__content">
              <strong className="advice__heading | fs-600 fw-bold clr-neutral-900">
                Regular exercise
              </strong>
              <p className="advice__body | fs-400 fw-light clr-neutral-500">
                Exercise improves fitness, aids weight control, elevates mood,
                and reduces disease risk, fostering wellness and longevity.
              </p>
            </div>
          </li>
          <li className="advice__listitem" role="listitem">
            <IconSleep />
            <div className="advice__content">
              <strong className="advice__heading | fs-600 fw-bold clr-neutral-900">
                Adequate sleep
              </strong>
              <p className="advice__body | fs-400 fw-light clr-neutral-500">
                Sleep enhances mental clarity, emotional stability, and physical
                wellness, promoting overall restoration and rejuvenation.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section
        className="limitations"
        // style={{ backgroundImage: `url(${curveRight})` }}
      >
        <div className="limitations__content">
          <h3 className="limitations__heading | fs-700 fw-bold">
            Limitations of BMI
          </h3>
          <p className="limitations__body | fs-400 fw-regular clr-neutral-500">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <ul className="limitations__list" role="list">
          <li role="listitem" className="limitations__item">
            <strong className="limitations__name | fw-bold clr-neutral-900 fs-500">
              <IconGender aria-hidden="true" /> Gender
            </strong>
            <p className="limitations__text | fw-refular clr-neutral-500 fs-400">
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI.
            </p>
          </li>
          <li role="listitem" className="limitations__item">
            <strong className="limitations__name | fw-bold clr-neutral-900 fs-500">
              <IconAge aria-hidden="true" /> Age
            </strong>
            <p className="limitations__text | fw-refular clr-neutral-500 fs-400">
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </li>
          <li role="listitem" className="limitations__item">
            <strong className="limitations__name | fw-bold clr-neutral-900 fs-500">
              <IconMuscle aria-hidden="true" /> Muscle
            </strong>
            <p className="limitations__text | fw-refular clr-neutral-500 fs-400">
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </p>
          </li>
          <li role="listitem" className="limitations__item">
            <strong className="limitations__name | fw-bold clr-neutral-900 fs-500">
              <IconPregnancy aria-hidden="true" /> Pregnancy
            </strong>
            <p className="limitations__text | fw-refular clr-neutral-500 fs-400">
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </li>
          <li role="listitem" className="limitations__item">
            <strong className="limitations__name | fw-bold clr-neutral-900 fs-500">
              <IconRace aria-hidden="true" /> Race
            </strong>
            <p className="limitations__text | fw-refular clr-neutral-500 fs-400">
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
