import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import Login from "./components/Login";
import { Layout, Typography, Menu, Col, Icon } from "antd";

const { Text } = Typography;
const { Header, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Header className="header">
        <Col span={6}>
          <h1 className="app-title">iCanCook!</h1>
        </Col>
        <Col span={10}>
          <Menu mode="horizontal" theme="dark" className="header-menu">
            <Menu.Item key="1">
              <Icon type="home" />
              Home
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="team" />
              About
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="fire" />
              Recipes
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="edit" />
              Add a Recipe
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={8} align="end">
          <Menu mode="horizontal" theme="dark" className="header-menu">
            <Menu.Item key="1">
              <Icon type="login" />
              Login
            </Menu.Item>
          </Menu>
        </Col>
      </Header>
      <Layout className="content-box">
        <Home />
      </Layout>
      <Footer>
        <Text type="secondary">
          © The Good Food Company. All Rights Reserved
        </Text>
      </Footer>
    </Layout>
  );
};

export default App;
