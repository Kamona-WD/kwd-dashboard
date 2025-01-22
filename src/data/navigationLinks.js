export default [
    {
        title: 'Dashboard',
        url: '/',
        iconName: 'tabler--home',
    },
    {
        title: 'Components',
        url: null,
        iconName: 'tabler--grid',
        links: [
            {
                title: 'Form elements',
                url: 'components/form-elements.html',
            },
            {
                title: 'Tables',
                url: 'components/tables.html',
            },
        ],
    },
    {
        title: 'Pages',
        url: null,
        iconName: 'tabler--file',
        links: [
            {
                title: '404',
                url: 'pages/404.html',
            },
            {
                title: '500',
                url: 'pages/500.html',
            },
            {
                title: 'Blank',
                url: 'pages/blank.html',
            },
        ],
    },
    {
        title: 'Layouts',
        url: null,
        iconName: 'tabler--grid-pattern',
        links: [
            {
                title: 'Two columns sidebar',
                url: 'layouts/two-columns-sidebar.html',
            },
            {
                title: 'Mini & Column sidebar',
                url: 'layouts/mini-plus-one-column-sidebar.html',
            },
            {
                title: 'Mini sidebar',
                url: 'layouts/mini-sidebar.html',
            },
        ],
    },
    {
        title: 'Authentication',
        url: null,
        iconName: 'tabler--shield',
        links: [
            {
                title: 'Login',
                url: 'auth/login.html',
            },
            {
                title: 'Register',
                url: 'auth/register.html',
            },
            {
                title: 'Forgot password',
                url: 'auth/forgot-password.html',
            },
            {
                title: 'Reset password',
                url: 'auth/reset-password.html',
            },
        ],
    },
]
