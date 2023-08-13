import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ip: undefined,
  location: {
    city: undefined,
    lat: undefined,
    lng: undefined,
    postalCode: undefined,
    region: undefined,
  },
  timeZone: undefined,
  isp: undefined,
  error: {
    msg: "",
    state: false,
  },
};

export const ipInfo = createSlice({
  name: "ipInfo",
  initialState,
  reducers: {
    updateIpInfo: (state, action) => {
      state.ip = action.payload.ip;
      state.location = action.payload.location;
      state.timeZone = action.payload.timeZone;
      state.isp = action.payload.isp;
      state.error = action.payload.error;
    },
  },
});

export function getIpInfo(action) {
  return function (dispatch, getState) {
    let url;
    if (action) {
      url = `https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_IPIFY_KEY
      }&ipAddress=${action}`;
    } else {
      url = `https://geo.ipify.org/api/v2/country,city?apiKey=${
        import.meta.env.VITE_IPIFY_KEY
      }`;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok)
          throw new Error(`${response.status}, something went wrong`);
        return response.json();
      })
      .then((data) =>
        dispatch(
          updateIpInfo({
            ip: data.ip,
            location: {
              city: data.location.city,
              lat: data.location.lat,
              lng: data.location.lng,
              postalCode: data.location.postalCode,
              region: data.location.region,
            },
            timeZone: data.location.timezone,
            isp: data.isp,
            error: {
              msg: "",
              state: false,
            },
          })
        )
      )
      .catch((err) => {
        const state = getState().ipInfo;
        dispatch(
          updateIpInfo({
            ...state,
            error: {
              msg: err.message,
              state: true,
            },
          })
        );
      });
    console.log(getState().ipInfo);
  };
}

export const { updateIpInfo } = ipInfo.actions;
export default ipInfo.reducer;
