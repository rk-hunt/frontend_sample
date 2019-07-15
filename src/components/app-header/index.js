import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, Button } from 'antd';
import { PopoverDropdown } from 'rk-admin-ui';
import UserAvatar from '../user-avatar';
import './index.less';

const { Header } = Layout;

const AppHeader = (props) => {
    const { collapsed } = props;

    const toggle = () => {
        const { collapsed, onCollapse } = props;
        onCollapse(!collapsed);
    };

    return (
        <Header className='app-header'>
            <div className='app-header-left'>
                <span className='app-header-trigger'>
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggle} />
                </span>
                {props.popoverDropdownContent && (
                    <PopoverDropdown content={props.popoverDropdownContent} trigger={props.popoverDropdownTrigger}>
                        <Button shape='circle' icon='plus' />
                    </PopoverDropdown>
                )}
            </div>
            <div className='app-header-right'>
                <div className='top-user-nav'>
                    {props.notificationIcons && props.notificationIcons}
                    <div className='top-user-avatar'>
                        <UserAvatar
                            photo={props.user.photo}
                            shortName={props.user.shortName}
                            username={props.user.username}
                            isShowUsername={props.user.isShowUsername}
                        />
                    </div>
                </div>
            </div>
        </Header>
    );
};

AppHeader.propTypes = {
    collapsed: PropTypes.bool,
    isMobile: PropTypes.bool,
    menuUnfoldIcon: PropTypes.string,
    menuFoldIcon: PropTypes.string,
    notificationIcons: PropTypes.any,
    popoverDropdownContent: PropTypes.any,
    popoverDropdownTrigger: PropTypes.string,
    user: PropTypes.object.isRequired
};
AppHeader.defaultProps = {
    collapsed: false,
    isMobile: false,
    menuUnfoldIcon: 'menu-unfold',
    menuFoldIcon: 'menu-fold',
    popoverDropdownTrigger: 'click'
};

export default React.memo(AppHeader);
