import React, { Fragment } from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';
import './index.less';

const UserAvatar = (props) => {
    const { isShowUsername, username, shortName, type, ...avatarProps } = props;
    return (
        <Fragment>
            <Avatar {...avatarProps} className={`user-avatar user-avatar-${type}`}>
                {props.src === null ? shortName : null}
            </Avatar>
            {isShowUsername && username}
        </Fragment>
    );
};

UserAvatar.propTypes = {
    shortName: PropTypes.string,
    isShowUsername: PropTypes.bool,
    username: PropTypes.string
};

UserAvatar.defaultProps = {
    isShowUsername: false,
    src: null,
    shape: 'circle',
    type: 'primary'
};

export default React.memo(UserAvatar);
