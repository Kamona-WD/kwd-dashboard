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
                    title: '404',
                    url: '/pages/404.html',
                },
                {
                    title: '500',
                    url: '/pages/500.html',
                },
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
                {
                    title: 'Forgot password',
                    url: '/auth/forgot-password.html',
                },
                {
                    title: 'Reset password',
                    url: '/auth/reset-password.html',
                },
            ],
        },
    ],
}
