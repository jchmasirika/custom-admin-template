import React from 'react';
import { Layout } from 'antd';
// import logo from '../assets/images/logo.jpg';
import { Box } from '@mui/material';
import MyMenu from './Menu';

const MySider : React.FC<{collapsed: boolean }> = ({ collapsed }) => {

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
                {/*        <img src={logo} width={ collapsed ? 50 : 150} alt='test' style={{ borderRadius: 10 }} /> */}
            </Box>
            <MyMenu />
        </Layout.Sider>
    );
};

export default MySider;