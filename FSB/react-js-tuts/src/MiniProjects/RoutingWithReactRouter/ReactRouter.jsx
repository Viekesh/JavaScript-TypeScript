import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Col } from "antd";
import Home from "./components/Home";
import About from "./components/About";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import Login from "./components/Login";



// const { Text } = Typography;
const { Header } = Layout;

const ReactRouter = () => {
    return (
        <>
            <Layout>
                <Header className="header">
                    <Col span={3}>
                        <h1 className="app-title">iCanCook!</h1>
                    </Col>
                    <Col span={10}>
                        <Menu mode="horizontal" theme="dark" className="header-menu">
                            <Menu.Item key="1">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/about">About</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/recipes">Recipes</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/addrecipe">Add a Recipe</Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={8} align="end">
                        <Menu mode="horizontal" theme="dark" className="header-menu">
                            <Menu.Item key="1">
                                <Link to="/login">Login</Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Header>
            </Layout>
            <Layout>
                <Home />
                <About />
                <Recipes />
                <AddRecipe />
                <Login />
            </Layout>
        </>
    )
}

export default ReactRouter;