const menus = [
    {
        _id: '5c5acfdaf6546302a639e245',
        name: 'Dashboard',
        key: 'dashboard',
        icon: 'pie-chart',
        url: '/dashboard',
        index: 1,
        categories: []
    },
    {
        _id: '5c5acfdaf6546302a639e246',
        name: 'Media',
        key: 'media',
        icon: 'camera',
        url: '/media',
        index: 2,
        categories: []
    },
    {
        _id: '5c5acfdaf6546302a639e247',
        name: 'Tags',
        key: 'tags',
        icon: 'tags',
        url: '/tags',
        index: '3',
        categories: []
    },
    {
        _id: '5c5acfdaf6546302a639e248',
        name: 'Categories',
        key: 'categories',
        icon: 'apartment',
        url: '/categories',
        index: '4',
        categories: []
    },
    {
        _id: '5c5acfdaf6546302a639e249',
        name: 'Articles',
        key: 'articles',
        icon: 'pushpin',
        url: 'articles',
        index: '5',
        categories: []
    },
    {
        _id: '5c5acfdaf6546302a639e24a',
        name: 'Setting',
        key: ' setting',
        icon: 'setting',
        url: null,
        index: '5',
        categories: [
            {
                name: 'Organization',
                icon: null,
                key: 'organization',
                url: '/setting/organization',
                index: 1,
                groups: []
            },
            {
                name: 'Users',
                icon: null,
                key: 'user',
                url: '/setting/users',
                index: 2,
                groups: []
            },
            {
                name: 'Roles',
                icon: null,
                key: 'roles',
                url: '/setting/roles',
                index: 3,
                groups: []
            },
            {
                name: 'Site Menus',
                icon: null,
                key: 'site-menus',
                url: '/setting/site-menus',
                index: 4,
                groups: []
            },
            {
                name: 'Approval Setup',
                icon: null,
                key: 'approval-setup',
                url: '/setting/approval-setup',
                index: 5,
                groups: []
            },
            {
                name: 'Preferences',
                icon: null,
                key: 'preferences',
                url: '/setting/preferences',
                index: 6,
                groups: []
            }
        ]
    }
];

export default menus;
