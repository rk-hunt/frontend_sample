import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const CustomMenu = (props) => {
    const { logoType, logo, collapsed, onCollapse, openKeys, selectedKeys, menus, iconTheme } = props;

    const renderSubMenu = (data) => {
        return data.map((value) => (
            <Menu.Item key={value.key}>
                <Link to={value.url}>{value.name}</Link>
            </Menu.Item>
        ));
    };
    const renderMenu = (menu) => {
        if (menu.categories.length <= 0)
            return (
                <Menu.Item key={menu.key}>
                    <Link to={menu.url}>
                        <Icon type={menu.icon} theme={iconTheme} /> <span>{menu.name}</span>
                    </Link>
                </Menu.Item>
            );
        return (
            <SubMenu
                key={menu.key}
                title={
                    <span>
                        <Icon type={menu.icon} theme={iconTheme} />
                        <span>{menu.name}</span>
                    </span>
                }
            >
                {renderSubMenu(menu.categories)}
            </SubMenu>
        );
    };
    const renderMenus = (menus) => {
        let obj_menus = '';
        if (menus.length > 0) {
            obj_menus = menus.map((menu) => renderMenu(menu));
        }
        return obj_menus;
    };

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            breakpoint='lg'
            onCollapse={onCollapse}
            width={256}
            className='sider'
            style={{
                background: '#ffffff'
            }}
        >
            <div className='logo' key='logo'>
                {logoType === 'text' && <span className={`logo-${logoType}`}>{logo}</span>}
                {logoType === 'image' && (
                    <div className={`logo-${logoType}`}>
                        <img src={logo} alt='logo' />
                    </div>
                )}
            </div>
            <Menu
                key='Menu'
                theme='light'
                mode='inline'
                defaultSelectedKeys={[ selectedKeys ]}
                defaultOpenKeys={[ openKeys ]}
                className='sider-menu'
            >
                {renderMenus(menus)}
            </Menu>
        </Sider>
    );
};

CustomMenu.propTypes = {
    iconTheme: PropTypes.string
};
CustomMenu.defaultProps = {
    iconTheme: 'outlined'
};

export default React.memo(CustomMenu);
