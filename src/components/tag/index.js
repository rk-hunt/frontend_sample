import React from 'react';
import PropTypes from 'prop-types';
import { Tag as AntTag } from 'antd';
import './index.less';

const Tag = (props) => {
    const { type, ...tagProps } = props;
    return <AntTag {...tagProps} className={`tag tag-${props.type}`} />;
};

Tag.propTypes = {
    type: PropTypes.string
};

Tag.defaultProps = {
    type: 'default'
};

export default React.memo(Tag);
