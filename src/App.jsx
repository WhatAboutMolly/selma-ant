import { useState } from "react";
import { Button, ConfigProvider, Input, Space, theme } from "antd";

import "./App.css";
import AppLayout from "../AppLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          /*colorPrimary: "#5273e0",
          fontFamily: "Poppins , sans-serif",
          //colorBgLayout: "rgb(2, 8, 23)",
          //borderRadius: 2,
          colorBgContainer: "rgb(2, 8, 23)",
          colorBgBase: "rgb(2, 8, 23)",
          colorInfoBgHover: "rgb(30, 41, 59)",
          colorPrimaryBg: "rgb(30, 41, 59)",
          colorPrimaryBgHover: "rgb(30, 41, 59)",
          colorPrimaryHover: "rgb(30, 41, 59)",
          colorFillQuaternary: "rgb(2, 8, 23)",
          colorBorderSecondary: "#fff",
          controlItemBgActive: "rgb(30, 41, 59)",
          colorBgTextHover: "rgb(30, 41, 59)",*/
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      <AppLayout />
    </ConfigProvider>
  );
}

export default App;
