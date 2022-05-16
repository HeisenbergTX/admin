import style from "./GroupButton.module.css";
import cn from "classnames";

export const GroupButton = () => {
  return (
    <section className={style.section}>
      <div className={style.blockButton}>
        <button className={cn(style.save, style.button)}>Сохранить</button>
        <button className={cn(style.cancel, style.button)}>Отменить</button>
      </div>
      <button className={cn(style.delete, style.button)}>Удалить</button>
    </section>
  );
};
