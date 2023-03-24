import { defaultTheme } from '@vuepress/theme-default'
export default {
    base:'mamba',
    head: [['link', { rel: 'icon', href: '../images/logo.png' }]],
    title:'Xiaojunjie\'s blog',
    description:'Xiaojunjie的个人博客',
    theme: defaultTheme({
        // 在这里进行配置
        home:'/',
        logo:'https://vuejs.org/images/logo.png',
        navbar: [
            // NavbarItem
            {
                text: 'Java',
                children: ['/SpringMVC.md','/Mybatis.md', '/MybatisPlus.md'],
            },
            {
                'text':'设计模式',
                children:['/代理模式.md']
            },
            {
                text: '关于我',
                link: '/AboutMe.md',
            }
        ]
    }),
}