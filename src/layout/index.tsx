import React, { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const { Header, Content } = Layout;

const MyLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div>
            <Layout>
                <Navigation collapsed={collapsed} />
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                        <Button style={{ margin: 10, border: 0 }} icon={ collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={() => setCollapsed(!collapsed)} />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                        >
                            <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default MyLayout;