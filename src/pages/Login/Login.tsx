import { Routes, Route } from "react-router-dom";
import { LoginBlock } from "../../components/organisms/LoginBlock/LoginBlock";
import style from "./Login.module.css";

export const Login = () => {
  return (
    <Routes>
      <Route path="/carsharingAdmin" element={<LoginBlock />} />
    </Routes>
  );
};
