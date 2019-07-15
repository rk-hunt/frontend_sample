import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Form, Row, Col, Button, Tabs } from 'antd';
import DynamicElement from '../dynamic-element';
import './index.less';

const { TabPane } = Tabs;
const Panel = Collapse.Panel;

const AdvanceSearch = (props) => {
    const { getFieldDecorator } = props.form;

    const onSearch = () => {};

    return (
        <div className='advance-search-wrapper'>
            <Collapse bordered={false} activeKey={props.activeKey} className='advance-search'>
                <Panel key='1'>
                    <Row>
                        <Col span={24} className='pl-16 pr-16'>
                            <Tabs tabPosition='top' animated={false} className='custom-tabs'>
                                <TabPane tab={props.firstTabName} key='1'>
                                    <Form onSubmit={props.onSearch}>
                                        <DynamicElement
                                            columns={props.columns}
                                            fields={props.fields}
                                            getFieldDecorator={getFieldDecorator}
                                        />
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Col>
                        <Col span={24}>
                            <div className='advance-search-footer p-16'>
                                <Button className='mr-8' type='link' onClick={props.onCancel}>
                                    {props.cancelButtonText}
                                </Button>
                                <Button type='primary' onClick={onSearch}>
                                    {props.searchButtonText}
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Panel>
            </Collapse>
        </div>
    );
};

AdvanceSearch.propTypes = {
    columns: PropTypes.number,
    fields: PropTypes.array.isRequired,
    firstTabName: PropTypes.string,
    activeKey: PropTypes.string.isRequired,
    cancelButtonText: PropTypes.string,
    searchButtonText: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

AdvanceSearch.defaultProps = {
    columns: 4,
    cancelButtonText: 'Cancel',
    searchButtonText: 'Search',
    firstTabName: 'General'
};

const InstAdvanceSearchForm = Form.create()(AdvanceSearch);
export default React.memo(InstAdvanceSearchForm);
