const advanceFilterSchema = {
    name: { type: 'like' },
    name_2: { type: 'like' }
};

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
