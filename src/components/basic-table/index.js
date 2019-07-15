import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import './index.less';

const BasicTable = (props) => {
    const { extraClassName, ...tableProps } = props;
    return <Table {...tableProps} className={`basic-table ${extraClassName}`} />;
};

BasicTable.propTypes = {
    extraStyle: PropTypes.any,
    extraClassName: PropTypes.any
};
BasicTable.defaultProps = {
    extraStyle: null,
    extraClassName: null
};

export default React.memo(BasicTable);
