import{_ as e,o as t,c as s,e as i}from"./app-CmOngkEL.js";const n={},a=i(`<h1 id="如何使用-usb-网卡" tabindex="-1"><a class="header-anchor" href="#如何使用-usb-网卡"><span>如何使用 USB 网卡</span></a></h1><p>1、GK7202V330RB_VA demo板使用网卡型号ASIX AX88772B，内核配置如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Device Drivers --&gt;
     Network device support --&gt;
          &lt;*&gt;USB Network Adapters ---&gt;
                      &lt;*&gt;Muti-purpose USB Networking Framework
                      &lt;*&gt;    ASIX AX88xxx Baseed USB 2.0 Ethernet Adapters
                      &lt;*&gt;    ASIX AX88179/1787A USB 3.0/2/0 to Gigabit Ehternet
                      -*-     CDC Ethernet support (Smart devices such as cable modems)
                      &lt;*&gt;    CDC NCM support
                      &lt;*&gt;    NetChip 1080 based cables (Laplink...)
                      &lt;*&gt; Simple USB Network Links (CDC Ethernet subset)
                      [*]         eTEK base host-to-host cables (Advance, Belkin...)
                      [*]          Embedder ARM Linux links (iPaq. ...)
                      &lt;*&gt;       Sharp Zaurus (stock R0Ms) and compatible
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、GK7202V300RB_VA demo板使用网卡型号ASIX AX88772B，内核配置配置同1 kernel/arch/arm/boot/dts/xm72020300.dtsi 修改usbdrd3_0 --&gt; dwc3 ---&gt; dr_mode = &quot;host&quot;</p>`,4),d=[a];function r(l,o){return t(),s("div",null,d)}const m=e(n,[["render",r],["__file","配置USB网卡.html.vue"]]),u=JSON.parse('{"path":"/work/goke/%E9%85%8D%E7%BD%AEUSB%E7%BD%91%E5%8D%A1.html","title":"如何使用 USB 网卡","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1713183499000,"contributors":[{"name":"huangmingle","email":"huangmingle@goke.com","commits":1}]},"filePathRelative":"work/goke/配置USB网卡.md"}');export{m as comp,u as data};
