import{_ as a,o as s,c as n,e}from"./app-Ca-1_YUH.js";const t={},p=e(`<h1 id="uart1-的使用" tabindex="-1"><a class="header-anchor" href="#uart1-的使用"><span>UART1 的使用</span></a></h1><p>以 GK7202V300 为例</p><h2 id="_1-设备树配置" tabindex="-1"><a class="header-anchor" href="#_1-设备树配置"><span>1. 设备树配置</span></a></h2><p>修改 <code>sdk/source/kernel/linux-4.9.y/arch/arm/boot/dts/xm72020300-demb.dts</code>，使能 uart1 节点</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&amp;uart1 {
	status = &quot;okay&quot;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后保存，重新编译并烧录内核</p><h2 id="_2-配置-pinmux" tabindex="-1"><a class="header-anchor" href="#_2-配置-pinmux"><span>2. 配置 pinmux</span></a></h2><p>根据实际硬件原理图，将管脚 pinmux 复用成 UART1 功能</p><h2 id="_3-验证" tabindex="-1"><a class="header-anchor" href="#_3-验证"><span>3. 验证</span></a></h2><p>cat uart1 节点： <code>cat /dev/ttyAMA1</code>，如果阻塞住，则配置成功。</p><p>如果出现以下打印，则不成功，请检查上面的步骤。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /dev/ttyAMA1
cat: can<span class="token string">&#39;t open &#39;</span>/dev/ttyAMA1&#39;: No such device or address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>确认节点正常后，使用 stty 工具查看 uart 信息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>stty <span class="token parameter variable">-F</span> /dev/ttyAMA1 <span class="token parameter variable">-a</span>
speed <span class="token number">9600</span> baud<span class="token punctuation">;</span>stty: /dev/ttyAMA1
 line <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
intr <span class="token operator">=</span> ^C<span class="token punctuation">;</span> quit <span class="token operator">=</span> ^<span class="token punctuation">\\</span><span class="token punctuation">;</span> erase <span class="token operator">=</span> ^?<span class="token punctuation">;</span> <span class="token function">kill</span> <span class="token operator">=</span> ^U<span class="token punctuation">;</span> eof <span class="token operator">=</span> ^D<span class="token punctuation">;</span> <span class="token assign-left variable">eol</span><span class="token operator">=</span> <span class="token operator">&lt;</span>undef<span class="token operator">&gt;</span><span class="token punctuation">;</span>
eol2 <span class="token operator">=</span> <span class="token operator">&lt;</span>undef<span class="token operator">&gt;</span><span class="token punctuation">;</span> swtch <span class="token operator">=</span> <span class="token operator">&lt;</span>undef<span class="token operator">&gt;</span><span class="token punctuation">;</span> start <span class="token operator">=</span> ^Q<span class="token punctuation">;</span> stop <span class="token operator">=</span> ^S<span class="token punctuation">;</span> susp <span class="token operator">=</span> ^Z<span class="token punctuation">;</span> rprnt <span class="token operator">=</span> ^R<span class="token punctuation">;</span>
werase <span class="token operator">=</span> ^W<span class="token punctuation">;</span> lnext <span class="token operator">=</span> ^V<span class="token punctuation">;</span> flush <span class="token operator">=</span> ^O<span class="token punctuation">;</span> min <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token function">time</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token parameter variable">-parenb</span> <span class="token parameter variable">-parodd</span> cs8 hupcl <span class="token parameter variable">-cstopb</span> cread clocal <span class="token parameter variable">-crtscts</span>
<span class="token parameter variable">-ignbrk</span> <span class="token parameter variable">-brkint</span> <span class="token parameter variable">-ignpar</span> <span class="token parameter variable">-parmrk</span> <span class="token parameter variable">-inpck</span> <span class="token parameter variable">-istrip</span> <span class="token parameter variable">-inlcr</span> <span class="token parameter variable">-igncr</span> icrnl ixon <span class="token parameter variable">-ixoff</span>
<span class="token parameter variable">-iuclc</span> <span class="token parameter variable">-ixany</span> <span class="token parameter variable">-imaxbel</span> <span class="token parameter variable">-iutf8</span>
opost <span class="token parameter variable">-olcuc</span> <span class="token parameter variable">-ocrnl</span> onlcr <span class="token parameter variable">-onocr</span> <span class="token parameter variable">-onlret</span> <span class="token parameter variable">-ofill</span> <span class="token parameter variable">-ofdel</span> nl0 cr0 tab0 bs0 vt0 ff0
isig icanon iexten <span class="token builtin class-name">echo</span> echoe echok <span class="token parameter variable">-echonl</span> <span class="token parameter variable">-noflsh</span> <span class="token parameter variable">-xcase</span> <span class="token parameter variable">-tostop</span> <span class="token parameter variable">-echoprt</span>
echoctl echoke
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-问题排查" tabindex="-1"><a class="header-anchor" href="#_4-问题排查"><span>4. 问题排查</span></a></h2><h3 id="_4-1-检查驱动是否成功配置" tabindex="-1"><a class="header-anchor" href="#_4-1-检查驱动是否成功配置"><span>4.1 检查驱动是否成功配置</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/tty/driver/ttyAMA
serinfo:1.0 driver revision:
<span class="token number">0</span>: uart:PL011 rev2 mmio:0x12040000 irq:20 tx:3080 rx:253
RTS<span class="token operator">|</span>CTS<span class="token operator">|</span>DTR<span class="token operator">|</span>DSR<span class="token operator">|</span>CD<span class="token operator">|</span>RI
<span class="token number">1</span>: uart:PL011 rev2 mmio:0x12041000 irq:21 tx:0 rx:0 DSR<span class="token operator">|</span>CD<span class="token operator">|</span>RI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-检查设备树是否配置成功" tabindex="-1"><a class="header-anchor" href="#_4-2-检查设备树是否配置成功"><span>4.2 检查设备树是否配置成功</span></a></h3><p>将板端的 <code>/sys/firmware/fdt</code> 拷贝到 PC</p><p>PC 使用 <code>dtc fdt</code> 命令查看设备树</p><p>查看 uart1 节点是否 okay</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>uart@1204000 {
	compatible = &quot;arm,pl011&quot;, &quot;arm,primecell&quot;;
	reg = &lt;0x12040000 0x1000&gt;;
	interrupts = &lt;0x0 0x7 0x4&gt;;
	clocks = &lt;0x4 0x28&gt;;
	clock-names = &quot;apb_pclk&quot;;
	status = &quot;okay&quot;;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),r=[p];function l(o,i){return s(),n("div",null,r)}const d=a(t,[["render",l],["__file","UART1的使用.html.vue"]]),u=JSON.parse('{"path":"/work/goke/UART1%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"UART1 的使用","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1. 设备树配置","slug":"_1-设备树配置","link":"#_1-设备树配置","children":[]},{"level":2,"title":"2. 配置 pinmux","slug":"_2-配置-pinmux","link":"#_2-配置-pinmux","children":[]},{"level":2,"title":"3. 验证","slug":"_3-验证","link":"#_3-验证","children":[]},{"level":2,"title":"4. 问题排查","slug":"_4-问题排查","link":"#_4-问题排查","children":[{"level":3,"title":"4.1 检查驱动是否成功配置","slug":"_4-1-检查驱动是否成功配置","link":"#_4-1-检查驱动是否成功配置","children":[]},{"level":3,"title":"4.2 检查设备树是否配置成功","slug":"_4-2-检查设备树是否配置成功","link":"#_4-2-检查设备树是否配置成功","children":[]}]}],"git":{"updatedTime":1715053175000,"contributors":[{"name":"huangmingle","email":"huangmingle@goke.com","commits":1}]},"filePathRelative":"work/goke/UART1的使用.md"}');export{d as comp,u as data};
