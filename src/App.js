import "./App.css";
import MenuContextProvider from "./contexts/MainContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <MenuContextProvider>
        <MainRoutes />
      </MenuContextProvider>
    </>
  );
}

export default App;
