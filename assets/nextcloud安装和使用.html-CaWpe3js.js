import{_ as t,o as e,c as o,e as n}from"./app-Ca-1_YUH.js";const c={},a=n('<h1 id="nextcloud-安装和使用" tabindex="-1"><a class="header-anchor" href="#nextcloud-安装和使用"><span>nextcloud 安装和使用</span></a></h1><p>配置文件：<code>nano /var/snap/nextcloud/current/nextcloud/config/config.php</code></p><p><code>trusted_domains</code> 添加 ip</p><hr><p>新建用户：<code>nextcloud.manual-install admin 111</code></p><p>sudo -u www-data php occ files:scan --all</p><p>snap set nextcloud ports.http=80</p><p>snap set nextcloud ports.https=8080</p><p>snap restart nextcloud</p><p>sudo nextcloud.occ user:resetpassword admin</p><p>sudo nextcloud.occ files:scan --all</p><p>nextcloud.occ user:list</p><br><p>https://blog.csdn.net/y17685207389/article/details/123411991</p><p>https://www.jianshu.com/p/5adb37efd478</p><br><p>nohup python3 -u Nextcloud_AutoScan.py &gt; Nextcloud_AutoScan.log 2&gt;&amp;1 &amp;</p><br><p>无法扫描外部存储</p><p>snap connect nextcloud:removable-media</p>',20),p=[a];function l(s,d){return e(),o("div",null,p)}const u=t(c,[["render",l],["__file","nextcloud安装和使用.html.vue"]]),i=JSON.parse('{"path":"/learn/nas/nextcloud%E5%AE%89%E8%A3%85%E5%92%8C%E4%BD%BF%E7%94%A8.html","title":"nextcloud 安装和使用","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1731252556000,"contributors":[{"name":"miller","email":"miller.huang@outlook.com","commits":1}]},"filePathRelative":"learn/nas/nextcloud安装和使用.md"}');export{u as comp,i as data};
