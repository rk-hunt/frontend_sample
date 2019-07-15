import React, { memo } from 'react';
import { Table, Form } from 'antd';
import DynamicElement from '../dynamic-element';
import PropsType from 'prop-types';
import './index.less';

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

const EditableCell = (props) => {
    return (
        <EditableContext.Consumer>
            {(form) => {
                const { getFieldDecorator } = form;
                if (props.field !== undefined) {
                    if (props.field.bindEventOnFieldChanged === true) {
                        props.field.element.onBlur = props.onFieldChange.bind(
                            null,
                            form,
                            props.field.name,
                            props.record,
                            props.index
                        );
                    }
                    props.field.decorator.initialValue = props.record[props.field.name];
                }

                return (
                    <td>
                        {props.editable ? (
                            <DynamicElement fields={[ props.field ]} getFieldDecorator={getFieldDecorator} />
                        ) : (
                            props.children
                        )}
                    </td>
                );
            }}
        </EditableContext.Consumer>
    );
};

const EditableTable = (props) => {
    const { columns, editable, onFieldChange, ...tableProps } = props;

    const components = {
        body: {
            row: EditableFormRow,
            cell: EditableCell
        }
    };

    const renderColumns = columns.map((data) => {
        if (data.isAction === true) return data;
        return {
            ...data.column,
            onCell: (record, rowIndex) => ({
                record: record,
                editable: editable,
                field: data.field,
                rowKey: props.rowKey,
                onFieldChange: onFieldChange,
                index: rowIndex
            })
        };
    });

    return <Table components={components} columns={renderColumns} {...tableProps} />;
};

EditableTable.prototype = {
    columns: PropsType.array.isRequired,
    onFieldChange: PropsType.func.isRequired,
    editable: PropsType.bool
};

EditableTable.defaultProps = {
    editable: false
};
export default memo(EditableTable);
