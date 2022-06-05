import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryName } from "../../../store/categories/selectors";
import {
  ChoosePageActive,
  FetchModelsRequest,
} from "../../../store/models/actions";
import {
  getCountModels,
  getModels,
  getPageActive,
} from "../../../store/models/selectors";
import { Models } from "../../molecules/Models/Models";
import style from "./ModelsCard.module.css";

export const ModelsCard = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const models = useSelector(getModels);
  const pageActive = useSelector(getPageActive);
  const count = useSelector(getCountModels);
  const categoryId = useSelector(getCategoryName);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(ChoosePageActive(value));
    setPage(value);
  };

  const countPage = Math.floor(count / 10);

  useEffect(() => {
    if (models.length === 0) {
      dispatch(FetchModelsRequest(page, undefined));
    }
  }, [models]);

  useEffect(() => {
    if ((models.length > 0 && page == pageActive) || categoryId.id) {
      dispatch(FetchModelsRequest(page, categoryId.id));
    }
  }, [page, categoryId.id]);

  return (
    <section className={style.section}>
      <h3 className={style.nameCard}>Список автомобилей</h3>
      <div className={style.content}>
        <Models />
        <article className={style.pagination}>
          <Pagination
            count={countPage}
            color="primary"
            size="small"
            page={pageActive}
            onChange={handleChange}
            showFirstButton
            showLastButton
          />
        </article>
      </div>
    </section>
  );
};
