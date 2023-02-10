import React from 'react';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, message } from 'antd';
import logo from '../assets/images/logo.jpg';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navigation : React.FC<{collapsed: boolean }> = ({ collapsed }) => {
    const navigate = useNavigate();

    return (
        <Layout.Sider
            breakpoint='sm'
            collapsedWidth={0}
            trigger={null} 
            collapsible 
            theme='light'
            style={{ height: '100vh', overflow: 'auto' }}
            collapsed={collapsed}>
            <Box sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', magin: 5 }}>
                <img src={logo} width={ collapsed ? 50 : 150} alt='test' style={{ borderRadius: 10 }} />
            </Box>
            <Menu
                theme='light'
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'Agent',
                        onClick: () => message.success('Success')
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'Accueil',
                        onClick: () => navigate('home')
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'Sites',
                        onClick: () => navigate('sites')
                    },
                    {
                        key: '4',
                        icon: <VideoCameraOutlined />,
                        label: 'Factures',
                        onClick: () => navigate('invoices')
                    },
                    {
                        key: '5',
                        icon: <UploadOutlined />,
                        label: 'Marchés',
                        onClick: () => navigate('markets')
                    }
                ]}
            />
        </Layout.Sider>
    );
};

export default Navigation;