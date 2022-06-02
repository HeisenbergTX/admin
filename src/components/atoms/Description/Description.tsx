import { TextareaAutosize } from "@mui/material";
import style from "./Description.module.css";

interface IProps {
  description: string;
}

export const Description: React.FC<IProps> = ({ description }) => {
  return (
    <section className={style.section}>
      <p className={style.description}>Описание</p>
      <textarea
        placeholder="Введите описание"
        name="description"
        id="description"
      >
        {description}
      </textarea>
    </section>
  );
};
