import { Button, Col, Menu, Row, Layout, MenuTheme, Switch } from "antd";
import {GithubOutlined, AppstoreOutlined, SettingOutlined, PoweroffOutlined} from "@ant-design/icons/lib/icons";
import {NavLink, Link} from 'react-router-dom';
import { ContactModal } from "./Modals/Contact";
import { useState } from "react";
export const Navbar = () => {
    const { Header } = Layout;
    const [theme, setTheme] = useState('dark');

    const handleThemeChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <Header style={{ backgroundColor: "white", height: '150px' }}>
            <Row align="end" justify="space-between">
                <Col>
                    <Button type="ghost" icon={<GithubOutlined />} size="large">
                        Checkout my Github
                    </Button>
                </Col>
                <Col>
                    <ContactModal />
                </Col>
            </Row>
      </Header>    
    );
}