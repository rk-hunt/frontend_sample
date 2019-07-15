import React from 'react';
import { Icon, Skeleton } from 'antd';
import PropTypes from 'prop-types';
import { PopoverDropdown } from 'rk-admin-ui';
import './index.less';

const PageHeader = (props) => {
    return (
        <div className='page-header'>
            <div className='page-header-left'>
                <Skeleton
                    paragraph={false}
                    active
                    loading={props.isLoading}
                    title={{ width: 120 }}
                    className='page-header-skeleton'
                >
                    <span className='page-header-title'>
                        {props.popoverDropdownItems ? (
                            <PopoverDropdown
                                content={props.popoverDropdownItems}
                                trigger={props.popoverDropdownTrigger}
                            >
                                {`${props.title} `}
                                <Icon type='caret-down' theme='filled' className='page-header-icon-dropdown' />
                            </PopoverDropdown>
                        ) : (
                            props.title
                        )}
                    </span>
                    {props.leftActionControls && (
                        <div
                            className='page-header-action'
                            style={{ display: props.showAction ? 'inline-block' : 'none' }}
                        >
                            {props.leftActionControls}
                        </div>
                    )}
                </Skeleton>
            </div>
            <div className='page-header-right'>
                <Skeleton
                    paragraph={false}
                    active
                    loading={props.isLoading}
                    title={{ width: 120 }}
                    className='page-header-skeleton'
                >
                    {props.rightActionControls && props.rightActionControls}
                </Skeleton>
            </div>
        </div>
    );
};

PageHeader.propTypes = {
    isLoading: PropTypes.bool,
    leftActionControls: PropTypes.object,
    popoverDropdownItems: PropTypes.any,
    popoverDropdownTrigger: PropTypes.string,
    rightActionControls: PropTypes.object,
    title: PropTypes.string.isRequired
};

PageHeader.defaultProps = {
    popoverDropdownTrigger: 'click'
};

export default React.memo(PageHeader);
