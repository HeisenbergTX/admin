import style from "./Range.module.css";

interface IProps {
  tank: number;
}

export const Range: React.FC<IProps> = ({ tank }) => {
  return (
    <section className={style.section}>
      <div className={style.infoBlock}>
        <p className={style.title}>Заполнено</p>
        <p className={style.text}>{tank ? `${tank}%` : "Пустой бак"}</p>
      </div>
      <div className={style.wrapLine}>
        <div className={style.fillLine} style={{ width: `${tank}%` }} />
      </div>
    </section>
  );
};
