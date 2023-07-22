export function Input({ unit, ariaLabel, value, onChange, label }) {
  return (
    <div className="input">
      {label ? (
        <p className="calculator__label | fs-300 clr-neutral-500 fw-regular">
          {label}
        </p>
      ) : (
        ""
      )}
      <div className="input-control">
        <input
          type="text"
          name={ariaLabel}
          aria-label={ariaLabel}
          placeholder="0"
          value={value}
          onChange={onChange}
        />
        <span className="input-control__unit | clr-primary fw-bold fs-600">
          {unit}
        </span>
      </div>
    </div>
  );
}
