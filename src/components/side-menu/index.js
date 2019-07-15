import 'rc-drawer/assets/index.css';
import React from 'react';
import DrawerMenu from 'rc-drawer';
import CustomMenu from './custom-menu';
import './index.less';

const SideMenu = (props) => {
    return props.isMobile ? (
        <DrawerMenu
            parent={null}
            level={null}
            iconChild={null}
            open={!props.collapsed}
            onMaskClick={() => {
                props.onCollapse(true);
            }}
            width='256px'
        >
            <CustomMenu {...props} collapsed={props.isMobile ? false : props.collapsed} />
        </DrawerMenu>
    ) : (
        <CustomMenu {...props} />
    );
};

export default React.memo(SideMenu);
