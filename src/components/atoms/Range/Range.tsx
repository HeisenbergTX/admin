import style from "./Range.module.css";

export const Range = () => {
  return (
    <section className={style.section}>
      <div className={style.infoBlock}>
        <p className={style.text}>Заполнено</p>
        <p className={style.text}>74%</p>
      </div>
      <div className={style.wrapLine}>
        <div className={style.fillLine} style={{ width: `${74}%` }} />
      </div>
    </section>
  );
};
