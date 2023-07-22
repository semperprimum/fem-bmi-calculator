export function Radio({ label, selected, onChange }) {
  return (
    <label className="radio-control | fs-400">
      <input
        className="radio"
        type="radio"
        name="radio"
        value={label}
        checked={selected === label}
        onChange={onChange}
      />
      {label}
    </label>
  );
}
