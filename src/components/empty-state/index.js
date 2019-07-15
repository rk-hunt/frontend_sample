import React, { Fragment, memo } from 'react';
import { Empty, Button } from 'antd';
import PropTypes from 'prop-types';
import './index.less';

const EmptyState = (props) => {
    const { description, image, extraStyle, showCreateNewButton, text, title, ...buttonProps } = props;
    return (
        <Empty
            image={image}
            description={
                <Fragment>
                    <span className='empty-state-title'>{title}</span>
                    <span>{description}</span>
                </Fragment>
            }
            className={`empty-state ${extraStyle}`}
        >
            {showCreateNewButton && <Button {...buttonProps}>{text}</Button>}
        </Empty>
    );
};

EmptyState.propTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.any,
    text: PropTypes.any,
    title: PropTypes.string.isRequired,
    showCreateNewButton: PropTypes.bool,
    extraStyle: PropTypes.string
};

EmptyState.defaultProps = {
    image: Empty.PRESENTED_IMAGE_DEFAULT,
    showCreateNewButton: true,
    text: 'Create New',
    extraStyle: 'h-100-per'
};

export default memo(EmptyState);
