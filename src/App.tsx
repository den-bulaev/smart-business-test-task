import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Users from "./features/crypto/Crypto";
import HeaderComponent from "./components/headerComponent/HeaderComponent";

const App = () => {
  return (
    <div className="flex justify-start min-h-screen flex-col bg-gray-50">
      <HeaderComponent />
      <main className="flex flex-1 flex-col">
        <Users />
        <ToastContainer position="top-center" />
      </main>
    </div>
  );
};

export default App;
