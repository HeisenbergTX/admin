import style from "./Cards.module.css";
import cn from "classnames";
import { Header } from "../../components/molecules/Header/Header";
import { CarCard } from "../../components/organisms/CarCard/CarCard";
import { Footer } from "../../components/molecules/Footer/Footer";
import { SideBar } from "../../components/atoms/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getValueSideBar } from "../../store/modalWindows/selectors";
import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { pullTokens } from "../../store/login/selectors";
import { useCookies } from "react-cookie";
import { ModelsCard } from "../../components/organisms/ModelsCard/ModelsCard";
import { Login } from "../Login/Login";
import { OrdersCard } from "../../components/organisms/OrdersCard/OrdersCard";
import { getCategories } from "../../store/categories/selectors";
import { FetchCategoryRequest } from "../../store/categories/actions";
import { getCities } from "../../store/cities/selectors";
import { FetchRequestCities } from "../../store/cities/actions";
import { getRates } from "../../store/rates/selectors";
import { FetchRateRequest } from "../../store/rates/actions";
import { RateCard } from "../../components/organisms/RateCard/RateCard";
import { CategoryCard } from "../../components/organisms/CategoryCard/CategoryCard";
import { RateTypeCard } from "../../components/organisms/RateTypeCard/RateTypeCard";
import { getRateTypes } from "../../store/rateTypes/selectors";
import { FetchRateTypeRequest } from "../../store/rateTypes/actions";

export const Cards = () => {
  const dispatch = useDispatch();
  const isOpenSideBar = useSelector(getValueSideBar);
  const categories = useSelector(getCategories);
  const cities = useSelector(getCities);
  const rates = useSelector(getRates);
  const rateTypes = useSelector(getRateTypes);
  const tokens = useSelector(pullTokens);
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);

  const arrTokens = [
    tokens?.access_token,
    tokens?.refresh_token,
    cookies.access_token,
    cookies.refresh_token,
  ];

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(FetchCategoryRequest());
    }
    if (cities.length === 0) {
      dispatch(FetchRequestCities());
    }
    if (rates.length === 0) {
      dispatch(FetchRateRequest());
    }
    if (rateTypes.length === 0) {
      dispatch(FetchRateTypeRequest());
    }
    if (location.pathname !== "admin/login" && tokenPresence === false) {
      navigate("admin/login");
    }
    if (isOpenSideBar) {
      document.body.style.overflowY = "hidden";
    }
  }, []);

  const tokenPresence = arrTokens.some((token) => token);

  useEffect(() => {
    if (tokens) {
      setCookie("access_token", tokens?.access_token, { path: "/admin/card/" });
      setCookie("refresh_token", tokens?.refresh_token, {
        path: "/admin/card/",
      });
      navigate("admin/card/models");
    }
  }, [tokens]);

  return (
    <>
      {tokenPresence ? (
        <section className={style.section}>
          <aside
            className={cn(style.sideBar, {
              [style.active]: isOpenSideBar,
            })}
          >
            <SideBar />
          </aside>

          <div className={style.blockContent}>
            <article className={style.header}>
              <Header />
            </article>
            <article className={style.content}>
              <Routes>
                <Route path="/admin/card/">
                  <Route path="models" element={<ModelsCard />} />
                  <Route path="car" element={<CarCard />} />
                  <Route path="orders" element={<OrdersCard />} />
                  <Route path="categories" element={<CategoryCard />} />
                  <Route path="rates" element={<RateCard />} />
                  <Route path="rateTypes" element={<RateTypeCard />} />
                </Route>
              </Routes>
            </article>
            <article className={style.footer}>
              <Footer />
            </article>
          </div>
        </section>
      ) : (
        <Routes>
          <Route path="admin/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
};
