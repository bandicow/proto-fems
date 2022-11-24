import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();
const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
};
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState); // 초깃값 default
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);

    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);

    localStorage.setItem("colorMode", color);

    setThemeSettings(false);
  };
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true }); // 모두 기본 false , 클릭하면 true로 바꿔져
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setCurrentColor,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);

// // 메뉴창들이 꺼지고 켜지고 관리

// import React, { createContext, useContext, useState } from "react";

// const StateContext = createContext();

// // 채팅 창이나 카트가 열려있나 없나중 없나
// const initialState = {
//   chat: false,
//   userProfile: false,
//   notification: false,
// };

// export const ContextProvider = ({ children }) => {
//   const [activeMenu, setActiveMenu] = useState(true);

//   return (
//     <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// // 컨텍스트 원하는 컨텍스트 반환, 우리는 상태를 지정
// export const useStateContext = () => useContext(StateContext);
