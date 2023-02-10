// import { Drawer } from "antd"
import { SwipeableDrawer } from "@mui/material";
import MyMenu from "./Menu";



const MyDrawer: React.FC<{ open: boolean, handleToggle: () => void }> = ({ open, handleToggle }) => {

    return (
        // <Drawer
        //     title='Menu'
        //     placement="left"
        //     closable={true}
        //     onClose={handleToggle}
        //     open={open}
        //     key={'app-drawer'}
        // >
        //     <MyMenu />
        // </Drawer>
        <SwipeableDrawer open={open} onClose={handleToggle} onOpen={() => {}}>
            <MyMenu />
        </SwipeableDrawer>
    )
};

export default MyDrawer;