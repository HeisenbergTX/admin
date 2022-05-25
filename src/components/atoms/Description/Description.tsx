import style from "./Description.module.css";

interface IProps {
  description: string;
}

export const Description: React.FC<IProps> = ({ description }) => {
  return (
    <section className={style.section}>
      <p className={style.description}>Описание</p>
      <p className={style.text}>{description}</p>
    </section>
  );
};
