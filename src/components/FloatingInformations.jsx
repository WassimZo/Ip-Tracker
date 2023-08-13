import { useSelector } from "react-redux";

export default function FloatingInformations() {
  const ipInfo = useSelector((state) => state.ipInfo);

  return (
    <div className="fixed p-2 sm:p-6 z-[500] top-[20vh] sm:top-[30vh] left-[10vw] bg-slate-200 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left sm:justify-between w-[80vw] rounded-xl">
      <div className="flex flex-col p-1 justify-start">
        <span className="text-sm text-gray-600 font-medium tracking-wider mb-1 ">
          IP ADDRESS
        </span>
        <p className="text-lg sm:text-xl sm:mt-1 font-bold">
          {ipInfo && ipInfo.ip}
        </p>
      </div>
      <div className="hidden sm:block w-[1px] h-[4rem] mt-4 border border-gray-700" />

      <div className="flex flex-col p-1 justify-start h-full w-[15rem] ml-2">
        <span className="text-sm text-gray-600 font-medium tracking-wider mb-1 ">
          LOCATION
        </span>
        <p className="text-lg sm:text-xl sm:mt-1  font-bold">
          {ipInfo &&
            `${ipInfo.location.city}, ${ipInfo.location.region}, ${ipInfo.location.postalCode}`}
        </p>
      </div>
      <div className="hidden sm:block w-[1px] h-[4rem] mt-4 border border-gray-700" />

      <div className="flex flex-col p-1 justify-start h-full w-[15rem] ml-2">
        <span className="text-sm text-gray-600 font-medium tracking-wider mb-1">
          TIMEZONE
        </span>
        <p className="text-lg sm:text-xl sm:mt-1 font-bold">
          UTC{ipInfo && ipInfo.timeZone}
        </p>
      </div>
      <div className="hidden sm:block w-[1px] h-[4rem] mt-4 border border-gray-700" />

      <div className="flex flex-col p-1 justify-start h-full w-[15rem] ml-2">
        <span className="text-sm text-gray-600 font-medium tracking-wider mb-1">
          ISP
        </span>
        <p className="text-lg sm:text-xl sm:mt-1 font-bold">
          {ipInfo && ipInfo.isp}
        </p>
      </div>
    </div>
  );
}
