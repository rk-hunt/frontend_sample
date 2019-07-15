import React, { Fragment, useState, memo } from 'react';
import { Layout, Row, Col, Menu, Button } from 'antd';
import {
    PageHeader,
    AdvanceSearch,
    PresetTag,
    BasicDetailsView,
    BasicTable,
    ButtonTooltip,
    SkeletonTable,
    ModalForm,
    InputSearch
} from 'rk-admin-ui';
import MockUpCategories from '../MockUpCategories';
const { Content } = Layout;
const documents = MockUpCategories;

const Category = (props) => {
    const advanceFilterFields = [
        {
            formItem: {
                label: 'Name',
                key: 'name',
                colon: false,
                className: 'mgb-0'
            },
            decorator: {},
            element: {
                placeholder: 'Name',
                allowClear: true
            },
            type: 'input',
            name: 'name'
        },
        {
            formItem: {
                label: 'Name 2',
                key: 'name_2',
                colon: false,
                className: 'mgb-0'
            },
            decorator: {},
            element: {
                placeholder: 'Name 2',
                allowClear: true
            },
            type: 'input',
            name: 'name_2'
        }
    ];

    const detailsViewFields = [
        {
            label: 'Name',
            name: 'name'
        },
        {
            label: 'Name 2',
            name: 'name_2'
        },
        {
            label: 'Status',
            name: 'is_active'
        }
    ];
    const cardFields = [
        {
            isMultiFields: true,
            fields: [
                {
                    formItem: {
                        label: 'Name',
                        key: 'name',
                        colon: false,
                        style: {
                            display: 'inline-block',
                            width: 'calc(50% - 12px)',
                            marginTop: 8
                        }
                    },
                    decorator: {},
                    element: {
                        placeholder: 'Name'
                    },
                    type: 'input',
                    name: 'name'
                },
                {
                    formItem: {
                        label: 'Name 1',
                        key: 'name_1',
                        colon: false,
                        style: {
                            display: 'inline-block',
                            width: 'calc(50% - 12px)',
                            marginTop: 8,
                            marginLeft: 24
                        }
                    },
                    decorator: {},
                    element: {
                        placeholder: 'Name 1'
                    },
                    type: 'input',
                    name: 'name_1'
                }
            ],
            formItem: {
                className: 'mb-0 p-0'
            }
        },
        {
            formItem: {
                label: 'Name 2',
                key: 'name_2',
                colon: false
            },
            decorator: {},
            element: {
                placeholder: 'Name 2'
            },
            type: 'input',
            name: 'name_2'
        },
        {
            formItem: {
                label: 'Status',
                key: 'is_active',
                colon: false
            },
            decorator: { rules: [ { required: false } ], valuePropName: 'checked', initialValue: true },
            element: {},
            type: 'switch',
            name: 'is_active'
        }
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Name 2',
            dataIndex: 'name_2',
            key: 'name_2'
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'is_active',
            render: (text, record) => (
                <PresetTag type={record.is_active === true ? 'success' : 'danger'}>
                    {record.is_active === true ? 'Active' : 'Inactive'}
                </PresetTag>
            )
        }
    ];
    //--- State
    const [ advanceSearchKey, setAdvanceSearchKey ] = useState('0');
    const [ contentView, setContentView ] = useState(false);
    const [ document, setDocument ] = useState({});
    const [ isLoading ] = useState(false);
    const [ popoverTitle, setPopoverTitle ] = useState('All Categories');
    const [ showAction, setShowAction ] = useState(false);
    const [ visible, setVisible ] = useState(false);

    //--- Grid
    const [ listGrid, setListGrid ] = useState({ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 });
    const [ contentViewGrid ] = useState({ xs: 24, sm: 24, md: 24, lg: 10, xl: 10 });

    //--- Functions
    const _closeContentView = () => {
        setContentView(false);
        setListGrid({ xs: 24, sm: 24, md: 24, lg: 24, xl: 24 });
    };

    const _openModal = () => setVisible(!visible);

    const _handlePopover = ({ key, item }) => {
        if (key === 'advanced_search') {
            _onCollapseAdvanceSearch();
            return;
        }
        setPopoverTitle(item.props.children);
    };

    const _onCollapseAdvanceSearch = () => {
        setAdvanceSearchKey(advanceSearchKey === '1' ? '0' : '1');
    };

    const _onAdvanceSearch = (e) => {};
    const _view = (record, index) => {
        return {
            onClick: (event) => {
                setDocument(record);
                setListGrid({ xs: 24, sm: 24, md: 24, lg: 14, xl: 14 });
                setContentView(true);
            }
        };
    };

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setShowAction(selectedRows.length > 0 ? true : false);
        }
    };
    //--- View
    return (
        <Content>
            <Row>
                <Col span={24}>
                    <PageHeader
                        title={popoverTitle}
                        showAction={showAction}
                        leftActionControls={
                            isLoading ? null : (
                                <div>
                                    <ButtonTooltip title='Edit' icon='edit' shape='circle' className='mr-8' />
                                    <ButtonTooltip title='Active' icon='check' shape='circle' className='mr-8' />
                                    <ButtonTooltip title='Inactive' icon='stop' shape='circle' />
                                </div>
                            )
                        }
                        rightActionControls={
                            isLoading ? null : (
                                <Fragment>
                                    <Button
                                        type='primary'
                                        icon='plus'
                                        className='mr-8'
                                        style={{ display: advanceSearchKey === '0' ? 'inline-block' : 'none' }}
                                        onClick={_openModal}
                                    >
                                        New
                                    </Button>
                                    <InputSearch
                                        onShowAdvanceSearch={_onCollapseAdvanceSearch}
                                        onSearch={(value, event) => console.log('OnSearch Called')}
                                        allowClear={true}
                                        placeholder='Search'
                                        style={{ display: advanceSearchKey === '0' ? 'inline-block' : 'none' }}
                                    />
                                    <Button
                                        icon='close'
                                        shape='circle'
                                        onClick={_onCollapseAdvanceSearch}
                                        style={{ display: advanceSearchKey === '1' ? 'inline-block' : 'none' }}
                                    />
                                </Fragment>
                            )
                        }
                        popoverDropdownItems={
                            <Menu
                                className='popover-dropdown-item'
                                defaultSelectedKeys={[ 'all' ]}
                                onClick={_handlePopover}
                                style={{ display: advanceSearchKey === '0' ? 'inline-block' : 'none' }}
                            >
                                <Menu.Item key='all'>All Categories</Menu.Item>
                                <Menu.Item key='active'>Active Categories</Menu.Item>
                                <Menu.Item key='inactive'>Inactive Categories</Menu.Item>
                            </Menu>
                        }
                        isLoading={isLoading}
                    />
                </Col>
                <Col span={24}>
                    <AdvanceSearch
                        activeKey={advanceSearchKey}
                        fields={advanceFilterFields}
                        onSearch={_onAdvanceSearch}
                        onCancel={_onCollapseAdvanceSearch}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={listGrid.xs} sm={listGrid.sm} md={listGrid.md} lg={listGrid.lg} xl={listGrid.xl}>
                    <div className='page-content'>
                        <Row className='h-100-per'>
                            <Col span={24} className='h-100-per'>
                                {isLoading && <SkeletonTable columns={4} />}
                                {!isLoading && (
                                    <BasicTable
                                        className='basic-table'
                                        columns={columns}
                                        dataSource={documents.payload}
                                        onRow={_view}
                                        showLessItems={true}
                                        pagination={{
                                            hideOnSinglePage: true,
                                            pageSize: 15,
                                            current: documents.currentPage,
                                            total: documents.total,
                                            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`
                                        }}
                                        rowKey='_id'
                                        rowSelection={rowSelection}
                                    />
                                    // <EmptyState
                                    //     title='Start managing your category'
                                    //     description='create customize category'
                                    //     onClick={() => console.log('Clicked New')}
                                    //     type='primary'
                                    //     text='Create New'
                                    //     showCreateNewButton={true}
                                    // />
                                )}
                            </Col>
                        </Row>
                    </div>
                </Col>
                {contentView && (
                    <BasicDetailsView
                        onClose={_closeContentView}
                        columns={contentViewGrid}
                        descriptionField='name_2'
                        document={document}
                        fields={detailsViewFields}
                        titleField='name'
                    />
                )}
            </Row>

            <ModalForm
                modalProps={{
                    cancelText: 'Cancel',
                    okText: 'Save',
                    title: 'New Category',
                    visible: visible,
                    onCancel: _openModal
                }}
                fields={cardFields}
            />
        </Content>
    );
};

export default memo(Category);
