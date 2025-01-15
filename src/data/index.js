export default {
    title: 'K-WD Dashboard',

    navigationLinks: [
        {
            title: 'Dashboard',
            url: '/',
            iconName: 'tabler--home',
        },
        {
            title: 'Pages',
            url: null,
            iconName: 'tabler--circle',
            links: [
                {
                    title: 'Blank',
                    url: '/pages/blank.html',
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
                    url: '/auth/login.html',
                },
                {
                    title: 'Register',
                    url: '/auth/register.html',
                },
            ],
        },
    ]
}
