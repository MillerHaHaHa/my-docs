import{_ as n,o as i,c as e,e as s}from"./app-CmOngkEL.js";const d={},l=s(`<br><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ifconfig eth0 hw ether 82:EF:8F:FF:87:CB
ifconfig eth0 192.168.8.38 netmask 255.255.255.0 up
route add default gw 192.168.8.1

# telnetd &amp;

# mount nfs
mkdir -p /mnt/nfs
mount -t nfs -o nolock 192.168.8.37:/C/Users/miller/tmp /mnt/nfs

# chip=xm72050510
chip=xm76050100

sensor=gc4023

mkdir -p /appfs
mkdir -p /data
mkdir -p /usr
mount -t jffs2 /dev/mtdblock4 /usr/
mount -t jffs2 /dev/mtdblock5 /data/
mount -t jffs2 /dev/mtdblock6 /appfs/

# load sensor ko
cd /appfs/ko
./load $chip -i -sensor $sensor
# ./load $chip -i -sensor $sensor -osmem 64

cd /appfs
insmod 8188fu.ko
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ifconfig eth0 hw ether 82:EF:8F:FF:87:CB
ifconfig eth0 169.254.114.1 netmask 255.255.0.0 up
route add default gw 169.254.114.0

telnetd &amp;

# mount nfs
mkdir -p /mnt/nfs
mount -t nfs -o nolock 169.254.114.0:/C/Users/miller/tmp /mnt/nfs

# chip=xm72050510
chip=xm76050100

sensor=gc4023

# load sensor ko
cd /root/ko
./load $chip -i -sensor $sensor
# ./load $chip -i -sensor $sensor -osmem 64

cd /root
insmod 8188fu.ko

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[l];function v(r,m){return i(),e("div",null,a)}const t=n(d,[["render",v],["__file","板子配置.html.vue"]]),o=JSON.parse('{"path":"/work/goke/%E6%9D%BF%E5%AD%90%E9%85%8D%E7%BD%AE.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1750054698000,"contributors":[{"name":"huangmingle","email":"huangmingle@goke.com","commits":1}]},"filePathRelative":"work/goke/板子配置.md"}');export{t as comp,o as data};
