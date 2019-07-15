import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Switch, Input, Select, Radio, Checkbox, DatePicker, InputNumber } from 'antd';

const FormItem = Form.Item;

const DynamicElement = (props) => {
    const renderInput = (field) => {
        switch (field.type) {
            case 'password':
                return (
                    <FormItem {...field.formItem}>
                        {props.getFieldDecorator(field.name, field.decorator)(<Input.Password {...field.element} />)}
                    </FormItem>
                );
            case 'number':
                return (
                    <FormItem {...field.formItem}>
                        {props.getFieldDecorator(field.name, field.decorator)(<InputNumber {...field.element} />)}
                    </FormItem>
                );
            case 'search':
                return (
                    <FormItem {...field.formItem}>
                        {props.getFieldDecorator(field.name, field.decorator)(<Input.Search {...field.element} />)}
                    </FormItem>
                );
            default:
                return (
                    <FormItem {...field.formItem}>
                        {props.getFieldDecorator(field.name, field.decorator)(<Input {...field.element} />)}
                    </FormItem>
                );
        }
    };

    const renderTextArea = (field) => {
        return (
            <FormItem {...field.formItem}>
                {props.getFieldDecorator(field.name, field.decorator)(<Input.TextArea {...field.element} />)}
            </FormItem>
        );
    };

    const renderSwitch = (field) => {
        return (
            <FormItem {...field.formItem}>
                {props.getFieldDecorator(field.name, field.decorator)(<Switch {...field.element} />)}
            </FormItem>
        );
    };

    const renderSelect = (field) => {
        const { data, display_value, display_name } = field;

        return (
            <FormItem {...field.formItem}>
                {props.getFieldDecorator(field.name, field.decorator)(
                    <Select {...field.element}>
                        {data.map((item) => (
                            <Select.Option key={item[display_value]}>{item[display_name]}</Select.Option>
                        ))}
                    </Select>
                )}
            </FormItem>
        );
    };

    const renderRadio = (field) => {
        if (field.type === 'radioGroup') {
            return (
                <FormItem {...field.formItem}>
                    {props.getFieldDecorator(field.name, field.decorator)(<Radio.Group {...field.element} />)}
                </FormItem>
            );
        }
    };

    const renderCheckbox = (field) => {
        if (field.type === 'checkboxGroup') {
            return (
                <FormItem {...field.formItem}>
                    {props.getFieldDecorator(field.name, field.decorator)(<Checkbox.Group {...field.element} />)}
                </FormItem>
            );
        }
        return (
            <FormItem {...field.formItem}>
                {props.getFieldDecorator(field.name, field.decorator)(
                    <Checkbox {...field.element}>{field.text}</Checkbox>
                )}
            </FormItem>
        );
    };

    const renderDatePicker = (field) => {
        if (field.type === 'datePicker') {
            return (
                <FormItem {...field.formItem}>
                    {props.getFieldDecorator(field.name, field.decorator)(<DatePicker {...field.element} />)}
                </FormItem>
            );
        } else if (field.type === 'rangePicker') {
            return (
                <FormItem {...field.formItem}>
                    {props.getFieldDecorator(field.name, field.decorator)(
                        <DatePicker.RangePicker {...field.element} />
                    )}
                </FormItem>
            );
        } else if (field.type === 'monthPicker') {
            return (
                <FormItem {...field.formItem}>
                    {props.getFieldDecorator(field.name, field.decorator)(
                        <DatePicker.MonthPicker {...field.element} />
                    )}
                </FormItem>
            );
        } else if (field.type === 'weekPicker') {
            return (
                <FormItem {...field.formItem}>
                    {props.getFieldDecorator(field.name, field.decorator)(<DatePicker.WeekPicker {...field.element} />)}
                </FormItem>
            );
        }
    };

    const renderField = (field) => {
        switch (field.type) {
            case 'input':
                return renderInput(field);
            case 'password':
                return renderInput(field);
            case 'number':
                return renderInput(field);
            case 'search':
                return renderInput(field);
            case 'switch':
                return renderSwitch(field);
            case 'select':
                return renderSelect(field);
            case 'radioGroup':
                return renderRadio(field);
            case 'checkbox':
                return renderCheckbox(field);
            case 'checkboxGroup':
                return renderCheckbox(field);
            case 'datePicker':
                return renderDatePicker(field);
            case 'rangePicker':
                return renderDatePicker(field);
            case 'monthPicker':
                return renderDatePicker(field);
            case 'weekPicker':
                return renderDatePicker(field);
            case 'textarea':
                return renderTextArea(field);
            default:
                return null;
        }
    };

    const renderFields = (field) => {
        let formItems = null;
        if (field.isMultiFields) {
            formItems = field.fields.map((item) => renderField(item));
            return <FormItem {...field.formItem}>{formItems}</FormItem>;
        }
        return renderField(field);
    };

    const renderFormItems = (fields, columns) => {
        let formItems = fields.map((field, index) => (
            <Col xs={24} sm={columns} md={columns} lg={columns} key={index}>
                {renderFields(field)}
            </Col>
        ));
        return formItems;
    };

    return <Row gutter={24}>{renderFormItems(props.fields, 24 / props.columns)}</Row>;
};

DynamicElement.propTypes = {
    columns: PropTypes.number,
    fields: PropTypes.array.isRequired,
    getFieldDecorator: PropTypes.any.isRequired
};

DynamicElement.defaultProps = {
    columns: 1
};

export default DynamicElement;
