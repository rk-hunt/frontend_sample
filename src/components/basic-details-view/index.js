import React from 'react';
import { Tabs, Icon, Row, Col, Button, Descriptions } from 'antd';
import { Item } from 'rk-admin-ui';
import './index.less';

const BasicDetailsView = (props) => {
    const { onClose, columns, document, fields, titleField, descriptionField } = props;

    const renderData = (filedName) => {
        if (filedName === 'is_active') return document[filedName] === true ? 'Active' : 'Inactive';
        return document[filedName] ? document[filedName] : ' ';
    };

    const renderViewTabContent = () => {
        let view = fields.map((field) => (
            <Descriptions.Item label={field.label}>{renderData(field.name)}</Descriptions.Item>
        ));
        return view;
    };

    return (
        <Col xs={columns.xs} sm={columns.sm} md={columns.md} lg={columns.lg} xl={columns.xl}>
            <div className='basic-details-view m-16'>
                <Row className='p-16'>
                    <Col span={24} className='pb-0'>
                        <Item extraClassName='item-between pt-0'>
                            <div>
                                <span style={{ display: 'block' }} className='title title-medium'>
                                    {document[titleField]}
                                </span>
                                <span>{document[descriptionField]}</span>
                            </div>
                            <div>
                                <Button icon='close' shape='circle' onClick={onClose} />
                            </div>
                        </Item>
                    </Col>
                    <Col span={24}>
                        <Tabs defaultActiveKey='1' animated={false} className='custom-tabs'>
                            <Tabs.TabPane
                                tab={
                                    <span>
                                        <Icon type='profile' /> View
                                    </span>
                                }
                                key='1'
                            >
                                <Row>
                                    {document && (
                                        <Descriptions bordered border size='middle' column={1}>
                                            {renderViewTabContent()}
                                        </Descriptions>
                                    )}
                                </Row>
                            </Tabs.TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};
export default React.memo(BasicDetailsView);
