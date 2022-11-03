import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UerServices from "./services/UserServices";

import jwt_decode from "jwt-decode";

export const User = React.createContext("");

export const Reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "Login":
      return { ...state, user: action.user, auth: action.auth };
    case "userupdate":
      return {
        ...state,
        user: {
          ...action.user,
          name: action.info.name,
          phoneNo: action.info.phone,
        },
      };
    case "Booking":
      return { ...state, bookingInfo: action.bookingInfo };
    case "Personal":
      return { ...state, personalInfo: action.personalInfo };
  }
};
const MainProvide = ({ children }) => {
  const [refresh, setrefresh] = React.useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [buss, setbuss] = React.useState();
  const refetch = () => {
    setrefresh(!refresh);
  };
  const login = (token, role = "user", data = "") => {
    var decoded;
    if (token) {
      decoded = jwt_decode(token);
    }
    if (decoded.phoneActive) {
      dispatch({ type: "Login", auth: true, user: decoded });
    }
    if (role == "bussness") {
      if (decoded.phoneActive) {
        localStorage.setItem("user", JSON.stringify(data));
      }
      if (decoded.phoneActive) {
        navigate("/Seller/Dashborad");
      } else {
        handleLogout();
        navigate("/verifyOTP", {
          state: { phone: decoded.phoneNo, email: decoded.email },
        });
      }
    } else {
      if (decoded.phoneActive) {
        navigate(location.state?.from?.pathname || "/", {
          state: {
            info: location.state?.info,
          },
        });
      } else {
        handleLogout();
        navigate("/verifyOTP", {
          state: { phone: decoded.phoneNo, email: decoded.email },
        });
      }
    }
  };
  const updateUser = (data) => {
    console.log({ info: data });
    dispatch({ type: "userupdate", info: data });
  };

  const saveBooking = (data = "") => {
    console.log(data);
    dispatch({ type: "Booking", bookingInfo: data });
  };
  const personalBooking = (data = "") => {
    dispatch({ type: "Personal", personalInfo: data });
  };
  const getUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user !== "null") return user;
    return null;
  };
  const handleLogout = () => {
    localStorage.setItem("Token", "");
    localStorage.setItem("user", "");
    dispatch({ type: "Login", auth: false, user: null });
    navigate("/");
  };
  const init = {
    auth: UerServices.isloggedIn(),
    user: UerServices.getloggedInUser(),
    bookingInfo: {},
  };
  const [state, dispatch] = React.useReducer(Reducer, init);

  return (
    <User.Provider
      value={{
        state,
        login,
        getUser,
        handleLogout,
        saveBooking,
        personalBooking,
        refresh,
        updateUser,
        refetch,
      }}
    >
      {children}
    </User.Provider>
  );
};
const useAuth = () => {
  return useContext(User);
};

export { MainProvide, useAuth };
