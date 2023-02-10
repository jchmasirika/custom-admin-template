import React from 'react';
import { Button, Layout, Popover, theme, Typography } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { Grid, IconButton } from '@mui/material';
import { Person2Outlined } from '@mui/icons-material';

const MyHeader: React.FC<{ open: boolean, handleToggle: () => void }> = ({ open, handleToggle }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
            <Grid container>
                <Grid item xs={4}>
                    <Button style={{ margin: 10, border: 0 }} icon={ open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={handleToggle} />
                </Grid>
                <Grid item xs={8} sx={{ textAlign: 'end' }}>
                    <Popover content={<Account />} trigger='click' placement='bottom'>
                        <IconButton sx={{ paddingRight: 2 }}>
                            <Person2Outlined />
                        </IconButton>
                    </Popover>
                </Grid>
            </Grid>
        </Layout.Header>
    );
};

const Account: React.FC = () => {
    return (
        <Typography>Content</Typography>
    );
};

export default MyHeader;