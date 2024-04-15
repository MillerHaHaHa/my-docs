import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/my-docs/',
  lang: 'zh-CN',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      {
        text: '学习',
        children: [
          {
            text: 'Common',
            children: [
              '/learn/common/windows激活.md',
            ],
          },
          {
            text: 'Linux',
            children: [
              '/learn/linux/gperf使用.md',
              '/learn/linux/nfs安装和使用.md',
              '/learn/linux/nginx安装和使用.md',
              '/learn/linux/tc流控.md',
              '/learn/linux/ufw使用.md',
            ],
          },
          {
            text: 'Nas',
            children: [
              '/learn/nas/docker搭建nextcloud.md',
              '/learn/nas/qbittorrent使用.md',
            ],
          },
        ],
      },
      {
        text: '工作',
        children: [
          {
            text: 'Goke',
            children: [
              '/work/goke/配置USB网卡.md',
              '/work/goke/配置USB虚拟U盘.md',
              '/work/goke/设置登录密码.md',
              '/work/goke/fw_printfenv使用.md',
              '/work/goke/IPC名词.md',
            ],
          },
        ],
      },
    ],
  }),

  bundler: viteBundler(),
})
