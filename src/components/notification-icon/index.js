import React from 'react';
import { Badge, Icon } from 'antd';
import PropTypes from 'prop-types';

const NotificationIcon = (props) => {
    const { icon, iconTheme, twoToneColor, ...badgeProps } = props;
    return (
        <Badge {...badgeProps}>
            <Icon
                type={icon}
                theme={iconTheme}
                twoToneColor={twoToneColor}
                style={{
                    fontSize: 16,
                    padding: 4
                }}
            />
        </Badge>
    );
};

NotificationIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    iconTheme: PropTypes.string,
    twoToneColor: PropTypes.string
};

NotificationIcon.defaultProps = {
    iconTheme: 'outlined',
    twoToneColor: ''
};

export default React.memo(NotificationIcon);
