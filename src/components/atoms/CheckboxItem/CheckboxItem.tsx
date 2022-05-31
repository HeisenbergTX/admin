import style from "./CheckboxItem.module.css";

interface IProps {
  name: string;
  check: boolean;
}

export const CheckboxItem: React.FC<IProps> = ({ name, check }) => {
  return (
    <label className={style.customCheckbox}>
      <input type="checkbox" defaultChecked={check} disabled={true} />
      <span>{name}</span>
    </label>
  );
};
