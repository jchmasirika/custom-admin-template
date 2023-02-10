import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Box, Typography } from '@mui/material';
import { Divider, Menu, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const MyMenu: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box style={{ width: '60vw'}}>
            <Typography variant='h4' style={{ margin: 5 }}>Navigation</Typography>
            <Divider />
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
                        onClick: () => message.warning('Warning')
                    },
                    {
                        key: '4',
                        icon: <VideoCameraOutlined />,
                        label: 'Factures',
                        onClick: () => message.info('Info')
                    },
                    {
                        key: '5',
                        icon: <UploadOutlined />,
                        label: 'Marchés',
                        onClick: () => message.error('Error')
                    }
                ]}
            />
        </Box>
    );
};

export default MyMenu;