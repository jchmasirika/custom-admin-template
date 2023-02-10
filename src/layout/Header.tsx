import React from 'react';
import { Button, Layout, theme } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';

const MyHeader: React.FC<{ open: boolean, handleToggle: () => void }> = ({ open, handleToggle }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
            <Button style={{ margin: 10, border: 0 }} icon={ open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={handleToggle} />
        </Layout.Header>
    );
};

export default MyHeader;