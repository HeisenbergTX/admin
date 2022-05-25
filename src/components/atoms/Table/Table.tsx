import style from "./Table.module.css";
import cn from "classnames";

export const Table = () => {
  return (
    <section className={style.section}>
      <p className={style.tableItem}>Модель</p>
      <p className={cn(style.tableItem, style.centerItem)}>Фото</p>
      <p className={cn(style.tableItem, style.centerItem)}>Номер</p>
      <p className={style.tableItem}>Категория</p>
      <p className={style.tableItem}>Цвета</p>
      <p className={style.tableItem}>Цена</p>
      <p className={cn(style.tableItem, style.description)}>Описание</p>
    </section>
  );
};
