import { Toaster } from "react-hot-toast";
import GamingUI from "./components/GamingUI";
// import WalletCard from "./components/WalletCard";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <GamingUI />
      </div>
      <Toaster />
    </>
  );
}

export default App;
