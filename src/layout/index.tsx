import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import MySider from './Sider';
import { Outlet } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import MyDrawer from './Drawer';
import MyHeader from './Header';

const { Content } = Layout;

const MyLayout: React.FC = () => {
    const themeMUI = useTheme();
    const matches = useMediaQuery(themeMUI.breakpoints.down('md'));
    const [collapsed, setCollapsed] = useState(matches);
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <div>
            <Layout>
                {!matches && <MySider collapsed={collapsed} />}
                {matches && <MyDrawer open={!collapsed} handleToggle={() => setCollapsed(!collapsed)} />}
                <Layout>
                    <MyHeader open={collapsed} handleToggle={() => setCollapsed(!collapsed)} />
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