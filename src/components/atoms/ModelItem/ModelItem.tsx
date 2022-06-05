import style from "./ModelItem.module.css";
import cn from "classnames";

interface IProps {
  id: string;
  name: string;
  img: any;
  number: string;
  category: string;
  colors: string[];
  priceMin: number;
  priceMax: number;
  description: string;
}

export const ModelItem: React.FC<IProps> = ({
  id,
  name,
  img,
  number,
  category,
  colors,
  priceMin,
  priceMax,
  description,
}) => {
  const reg = /\d{1,}/g;

  return (
    <section key={id} className={style.section}>
      <p className={style.item}>{name}</p>
      <img className={cn(style.item, style.img)} src={img} alt="photo" />
      <p className={cn(style.item, style.number)}>
        {number ? number.replace(reg, ` $& `).toUpperCase() : "Нет номера"}
      </p>
      <p className={style.item}>{category ? category : "Нет категории"}</p>
      <p className={cn(style.item, style.colors)}>
        {colors.length
          ? colors.map((color: string) => {
              return <span key={color}>{color.toLowerCase()}</span>;
            })
          : "-"}
      </p>
      <p className={style.item}>{`${priceMin}₽ - ${priceMax}₽`}</p>
      <p className={cn(style.item, style.description)}>{description}</p>
    </section>
  );
};
