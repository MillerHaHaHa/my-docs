import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/my-docs/',
  lang: 'zh-CN',

  title: 'Miller の 文档库',
  description: '记录各种折腾笔记',

  theme: defaultTheme({
    logo: 'https://images-1306478114.cos.ap-guangzhou.myqcloud.com/%E4%B9%A6%E6%9E%B6%E9%80%89%E4%B8%AD.svg',
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
              '/learn/linux/linux开发常用bashrc配置.md',
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
	      '/learn/nas/ssh多次登录失败加入黑名单.md',
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
	      '/work/goke/coredump调试.md',
              '/work/goke/UART1的使用.md',
	      '/work/goke/lvgl调试.md',
	      '/work/goke/快速修改内核配置.md',
              '/work/goke/sdio wifi驱动适配.md',
            ],
          },
        ],
      },
    ],
  }),

  bundler: viteBundler(),
})
