import { useDispatch } from "react-redux";
import { getIpInfo } from "../features/ipInfo";
import { useRef } from "react";
import arrowIcon from "../assets/icon-arrow.svg";

export default function SearchBar() {
  const dispatch = useDispatch();
  const ipRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getIpInfo(ipRef.current.value));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row items-center max-h-[4.5rem] mt-2 sm:w-[33vw] sm:mt-4">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="bg-slate-200 p-2 sm:p-4 block w-full text-sm sm:text-lg rounded-l-lg outline-none"
          ref={ipRef}
        />
        <button
          className="bg-black text-slate-100 py-3 sm:py-6 px-3 sm:px-6 rounded-r-lg h-full hover:bg-gray-700"
          type="submit"
        >
          <img src={arrowIcon} alt="" />
        </button>
      </div>
    </form>
  );
}
