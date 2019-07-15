import React from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from 'antd';

const Search = Input.Search;

const InputSearch = (props) => {
    const { onShowAdvanceSearch, ...inputProps } = props;
    return (
        <Search
            {...inputProps}
            className='input-search'
            prefix={<Icon type='caret-down' onClick={onShowAdvanceSearch} />}
        />
    );
};

InputSearch.propTypes = {
    onShowAdvanceSearch: PropTypes.func,
    onSearch: PropTypes.func
};

export default React.memo(InputSearch);
