import React from 'react';
import { Form, Modal } from 'antd';
import DynamicElement from '../dynamic-element';
import PropTypes from 'prop-types';

const ModalForm = (props) => {
    const { getFieldDecorator } = props.form;
    return (
        <Modal {...props.modalProps}>
            <Form onSubmit={props.onSubmit}>
                <DynamicElement columns={props.columns} fields={props.fields} getFieldDecorator={getFieldDecorator} />
            </Form>
        </Modal>
    );
};

ModalForm.propTypes = {
    columns: PropTypes.number,
    fields: PropTypes.array.isRequired
};

ModalForm.defaultProps = {
    columns: 1
};

const InstModalForm = Form.create()(ModalForm);

export default React.memo(InstModalForm);
