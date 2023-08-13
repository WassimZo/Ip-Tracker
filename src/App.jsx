import SearchBar from "./components/SearchBar";
import Map from "./components/Map";
import FloatingInformations from "./components/FloatingInformations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIpInfo } from "./features/ipInfo";

function App() {
  const dispatch = useDispatch();
  const ipInfo = useSelector((state) => state.ipInfo);

  useEffect(() => {
    dispatch(getIpInfo());
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="w-full bg-[url('/images/pattern-bg-desktop.png')] h-[35vh] bg-no-repeat bg-cover flex flex-col items-center">
        <h1 className="font-bold text-lg sm:text-2xl mt-4 sm:mt-8  text-slate-100">
          IP Address Tracker
        </h1>
        <SearchBar />
        {ipInfo.error.state && (
          <span className="mt-1 text-slate-100">
            Please enter a valid ip address.
          </span>
        )}
      </div>
      <div className="w-full h-full">
        <Map />
      </div>
      <FloatingInformations />
    </div>
  );
}

export default App;
