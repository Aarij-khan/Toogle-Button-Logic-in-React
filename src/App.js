import { useState } from "react";
import "./three.css";

function App() {
  const [ison, setison] = useState(false);

  const oneclick = () => {
    setison(!ison);
  };
  const condition = ison ? "ON" : "OFF";
  return (
    <div>
      <div
        className="h-[100vh] w-[100vw] flex justify-center items-center"
        onClick={oneclick}
      >
        <div
          className={`h-[200px] w-[400px] bg-slate-500 rounded-full  flex justify-left items-center ${ison ? "one" : "three"}`}>
          <span className={`h-[150px] w-[150px] rounded-full ml-4  mt-3 flex justify-center items-center text-white text-2xl ${ison ? "set" : "set1"}`}>
            {condition}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
