import React from "react";
import { App, Carousel, Button } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import AppHeader from "../components/AppHeader";
import "./pages.css";
import Login from "./Login";

const { Header, Content, Footer, Sider } = Layout;

const contentStyle = {
  height: "100vh",
  color: "#fff",
  lineHeight: "100vh",
  textAlign: "center",
  background: "#364d79",
};
const Acceuil = () => (
  <div>
    <AppHeader />
    <div className="mainPage">
      <div className="carousel-wrapper">
        <Carousel autoplay infinite={true} dotPosition="left">
          <div>
            <div style={contentStyle}>
              <img
                src="src/assets/home/acceuil-1.jpg"
                alt="Slide 1"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <img
                src="src/assets/home/acceuil-2.jpg"
                alt="Slide 2"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <img
                src="src/assets/home/acceuil-3.jpg"
                alt="Slide 3"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </Carousel>

        <div className="carousel-content">
          <div className="blur-background">
            <h1>With Simplex, Complexity Becomes Simplicity.</h1>
          </div>
          <div className="blur-background">
            <div className="loginPart">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Acceuil;
