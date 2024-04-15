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
            text: 'Nas',
            children: [
              '/learn/nas/HowToInstallNextcloudWithDocker.md',
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
              '/work/goke/HowToUseUSBNetwork.md',
            ],
          },
        ],
      },
    ],
  }),

  bundler: viteBundler(),
})
