import style from "./CheckboxItem.module.css";

interface IProps {
  name: string;
  check: boolean;
  disabled: boolean;
}

export const CheckboxItem: React.FC<IProps> = ({ name, check, disabled }) => {
  return (
    <label className={style.customCheckbox}>
      <input type="checkbox" defaultChecked={check} disabled={disabled} />
      <span>{name}</span>
    </label>
  );
};
