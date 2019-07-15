import React, { useState, Suspense, lazy, Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Icon, Spin, Menu } from 'antd';
import { SideMenu, AppHeader, NotificationIcon } from 'rk-admin-ui';
import MockUpMenu from './MockUpMenu';

// import logo from './logo.svg';

const Category = lazy(() => import('./pages/Category'));

//--- Set Default Spinning indicator
Spin.setDefaultIndicator(<Icon type='loading-3-quarters' style={{ fontSize: 24 }} spin />);

const App = (props) => {
    const user = { username: 'Ratana Keo' };
    const [ collapsed, setCollapsed ] = useState(false);
    const [ isMobile ] = useState(false);

    let winLocation = window.location.pathname.split('/');
    let openKeys = null;
    let selectedKeys = null;
    if (winLocation.length > 2) {
        if (winLocation[1] === 'invoice' && winLocation[2] === 'transaction') {
            selectedKeys = 'invoices';
        } else if (winLocation[1] === 'payment' && winLocation[2] === 'transaction') {
            selectedKeys = 'payment';
        } else if (winLocation[2] === 'role' && (winLocation[3] === 'new' || winLocation[3] === 'edit')) {
            openKeys = winLocation[1];
            selectedKeys = 'roles';
        } else {
            openKeys = winLocation[1];
            selectedKeys = winLocation[2];
        }
    } else {
        selectedKeys = winLocation.length > 1 ? winLocation[1] : 'dashboard';
    }
    const _handleMenuCollapse = () => setCollapsed(!collapsed);

    const _shortName = (username) => {
        let _split = username.split(' ');
        return `${_split[0].charAt(0).toUpperCase()}${_split[1] ? _split[1].charAt(0).toUpperCase() : ''}`;
    };

    return (
        <Layout>
            <SideMenu
                logoType='text'
                logo='SAAS CMS'
                collapsed={collapsed}
                isMobile={isMobile}
                onCollapse={_handleMenuCollapse}
                menus={MockUpMenu}
                openKeys={openKeys}
                selectedKeys={selectedKeys}
            />
            <Layout>
                <AppHeader
                    collapsed={collapsed}
                    isMobile={isMobile}
                    onCollapse={_handleMenuCollapse}
                    notificationIcons={
                        <Fragment>
                            <div className='top-notification'>
                                <NotificationIcon key='bell' icon='bell' count='0' />
                            </div>
                            <div className='top-notification'>
                                <NotificationIcon key='support' icon='question-circle' count='0' />
                            </div>
                        </Fragment>
                    }
                    popoverDropdownContent={
                        <Menu className='popover-dropdown-item'>
                            <Menu.Item key='new_article'>
                                <Link to='/invoice/transaction?type=new'>
                                    <Icon type='plus' /> New Invoice
                                </Link>
                            </Menu.Item>
                            <Menu.Item key='new_category'>
                                <Link to=''>
                                    <Icon type='plus' /> New Payment
                                </Link>
                            </Menu.Item>
                        </Menu>
                    }
                    user={{ username: user.username, shortName: _shortName(user.username), isShowUsername: false }}
                />
                <Suspense fallback={<div />}>
                    <Switch>
                        <Route exact path='/categories' render={(props) => <Category />} />
                    </Switch>
                </Suspense>
            </Layout>
        </Layout>
    );
};
export default React.memo(App);
