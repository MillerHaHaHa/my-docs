import{_ as e,o as n,c as i,e as s}from"./app-CmOngkEL.js";const t={},l=s(`<h1 id="ssh-多次登录失败加入黑名单" tabindex="-1"><a class="header-anchor" href="#ssh-多次登录失败加入黑名单"><span>ssh 多次登录失败加入黑名单</span></a></h1><h3 id="_1-脚本" tabindex="-1"><a class="header-anchor" href="#_1-脚本"><span>1. 脚本</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#!/usr/bin/bash

# 通过lastb获取登录失败的IP及登录失败的次数
lastb | awk &#39;{print $3}&#39; | grep ^[0-9] | sort | uniq -c | awk &#39;{print $1&quot;\\t&quot;$2}&#39; &gt; /tmp/host_list
list=\`cat /tmp/host_list\`
line=\`wc -l /tmp/host_list | awk &#39;{print $1}&#39;\`
count=1

# 如果/tmp/host_list中有数据，循环至少需要执行一次
while [[ &quot;$line&quot; -ge &quot;$count&quot; ]]; do
        ip_add=\`echo $list | awk &#39;{FS=&quot;\\t&quot;} {print $2}&#39;\`
        num=\`echo $list | awk  &#39;{FS=&quot;\\t&quot;} {print $1}&#39;\`
        #   登录失败达到5次就将该IP写入文件
        if [[ &quot;$num&quot; -ge 5 ]]; then
                grep &quot;$ip_add&quot; /etc/hosts.deny &amp;&gt; /dev/null
                if [[ &quot;$?&quot; -gt 0 ]]; then
                        # --------&gt; 此处添加当前系统时间，请根据实际情况定义日期格式
                        echo &quot;# $(date +%F&#39; &#39;%H:%M:%S)&quot; &gt;&gt; /etc/hosts.deny
                        echo &quot;sshd:$ip_add&quot; &gt;&gt; /etc/hosts.deny
                fi
        fi
        let count+=1
        #   删除已经写入文件的IP
        sed -i &#39;1d&#39; /tmp/host_list
        #   修改$list变量
        list=\`cat /tmp/host_list\`
done

# 清空临时文件
echo &#39;&#39; &gt; /tmp/host_list
exit 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-加入-crontab-定时任务" tabindex="-1"><a class="header-anchor" href="#_2-加入-crontab-定时任务"><span>2. 加入 crontab 定时任务</span></a></h3><p>crontab -e</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>* */1 * * * sudo bash /usr/local/script/ssh_deny.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),a=[l];function d(r,c){return n(),i("div",null,a)}const u=e(t,[["render",d],["__file","ssh多次登录失败加入黑名单.html.vue"]]),v=JSON.parse('{"path":"/learn/nas/ssh%E5%A4%9A%E6%AC%A1%E7%99%BB%E5%BD%95%E5%A4%B1%E8%B4%A5%E5%8A%A0%E5%85%A5%E9%BB%91%E5%90%8D%E5%8D%95.html","title":"ssh 多次登录失败加入黑名单","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"1. 脚本","slug":"_1-脚本","link":"#_1-脚本","children":[]},{"level":3,"title":"2. 加入 crontab 定时任务","slug":"_2-加入-crontab-定时任务","link":"#_2-加入-crontab-定时任务","children":[]}],"git":{"updatedTime":1727234753000,"contributors":[{"name":"Miller Huang","email":"46022683+MillerHaHaHa@users.noreply.github.com","commits":1}]},"filePathRelative":"learn/nas/ssh多次登录失败加入黑名单.md"}');export{u as comp,v as data};
