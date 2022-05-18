import style from "./App.module.css";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <div className={style.app}>
      <Login />
    </div>
  );
}

export default App;
