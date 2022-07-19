export const MenuItems =[
    {
        title:'Home',
        url:'home',
        cName: 'nav_links'
    },
    {
        title:'Services',
        url:'services',
        cName: 'nav_links'
    },{
        title:'Products',
        url:'products',
        cName: 'nav_links'
    },{
        title:'Sign Up',
        url:'signup',
        cName: 'nav_links'
    },{
        title:'Sign In',
        url:'signin',
        cName: 'nav_links',
        subNav: [
            {
                title: 'Login',
                path: '/login',
                cName: 'dropdown-link',
                menuName: 'account-menu',
            },
            {
                title: 'Profile',
                path: '/profile',
                cName: 'dropdown-link',
                menuName: 'account-menu',
            },
        ],
    }
    
]