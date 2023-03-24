<template><div><h2 id="静态代理" tabindex="-1"><a class="header-anchor" href="#静态代理" aria-hidden="true">#</a> 静态代理</h2>
<p>要求代理实现同一个接口</p>
<p>特点：</p>
<ol>
<li>目标对象和代理对象实现同一个接口</li>
<li>目标对象必须实现接口</li>
<li>代理对象需要在程序运行前存在</li>
<li>可以灵活对目标对象进行切换，但是无法在功能上灵活处理</li>
</ol>
<p>处理流程：</p>
<p>​	三个角色：客户端、代理对象、目标对象</p>
<ol>
<li>客户端访问代理端的业务</li>
<li>代理端负责对接目标对象的业务，实现相同的业务接口，在业务功能前后加入辅助业务功能</li>
<li>目标对象主要负责核心业务</li>
</ol>
<p>业务接口</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Sing</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目标对象</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">Sing</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuperStar</span> <span class="token keyword">implements</span> <span class="token class-name">Sing</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"唱歌"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代理对象类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>proxy</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span></span><span class="token class-name">SuperStar</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">Sing</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingerProxy</span> <span class="token keyword">implements</span> <span class="token class-name">Sing</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">SuperStar</span> superStar<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">SingerProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>superStar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuperStar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"售票"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"准备场地"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        superStar<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"结束"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span></span><span class="token class-name">SingerProxy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">Sing</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>testng<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyTest</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Sing</span> sing <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SingerProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//静态代理对象必须在程序运行之前创建</span>
        sing<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面向接口编程" tabindex="-1"><a class="header-anchor" href="#面向接口编程" aria-hidden="true">#</a> 面向接口编程</h3>
<p>类中的成员变量设计为接口，方法的形参设计为接口，方法返回值设计为接口，调用时接口指向实现类</p>
<p>调用的时候，接口指向具体实现类即可</p>
<p>实现对不同目标对象的灵活调用</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>proxy</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span></span><span class="token class-name">SuperStar</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">Sing</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingerProxy</span> <span class="token keyword">implements</span> <span class="token class-name">Sing</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Sing</span> superStar<span class="token punctuation">;</span> <span class="token comment">// 类成员变量设置为接口</span>

    <span class="token keyword">public</span> <span class="token class-name">SingerProxy</span><span class="token punctuation">(</span><span class="token class-name">Sing</span> superStar<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>superStar <span class="token operator">=</span> superStar<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//方法形参设计为接口</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"售票"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"准备场地"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        superStar<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"结束"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">//方法返回值设计为接口</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk静态代理" tabindex="-1"><a class="header-anchor" href="#jdk静态代理" aria-hidden="true">#</a> JDK静态代理</h3>
<h3 id="弊端" tabindex="-1"><a class="header-anchor" href="#弊端" aria-hidden="true">#</a> 弊端</h3>
<p>如果业务功能增减，对应的代理类也需要进行相应的增减，耦合性太高</p>
<p>需要动态代理</p>
<h2 id="动态代理" tabindex="-1"><a class="header-anchor" href="#动态代理" aria-hidden="true">#</a> 动态代理</h2>
<h3 id="jdk动态代理" tabindex="-1"><a class="header-anchor" href="#jdk动态代理" aria-hidden="true">#</a> JDK动态代理</h3>
<p>根据反射机制，动态生成代理</p>
<p>代理对象不需要实现业务接口</p>
<p>代理对象在程序运行的过程中动态创建</p>
<p>灵活业务切换功能</p>
<h4 id="java-lang-reflect-proxy类" tabindex="-1"><a class="header-anchor" href="#java-lang-reflect-proxy类" aria-hidden="true">#</a> java. lang. reflect. Proxy类</h4>
<p>用来生成动态代理对象</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">newProxyInstance</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> caller<span class="token punctuation">,</span> <span class="token comment">// null if no SecurityManager</span>
                                       <span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> cons<span class="token punctuation">,</span>
                                       <span class="token class-name">InvocationHandler</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
     * Invoke its constructor with the designated invocation handler.
     */</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>caller <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">checkNewProxyPermission</span><span class="token punctuation">(</span>caller<span class="token punctuation">,</span> cons<span class="token punctuation">.</span><span class="token function">getDeclaringClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> cons<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>h<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IllegalAccessException</span> <span class="token operator">|</span> <span class="token class-name">InstantiationException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">InternalError</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InvocationTargetException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Throwable</span> t <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">getCause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token keyword">instanceof</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span><span class="token punctuation">)</span> t<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">InternalError</span><span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>形参：</p>
<ol>
<li>类加载器</li>
<li>目标对象实现的所有接口</li>
<li>代理对象功能和目标对象业务功能的调用</li>
</ol>
<h4 id="method类" tabindex="-1"><a class="header-anchor" href="#method类" aria-hidden="true">#</a> Method类</h4>
<p>反射用的类，进行目标对象方法的反射调用</p>
<p>比如sing(), show()</p>
<h4 id="invocationhandler接口" tabindex="-1"><a class="header-anchor" href="#invocationhandler接口" aria-hidden="true">#</a> InvocationHandler接口</h4>
<p>实现代理和业务功能的，调用时使用匿名内部实现（接口虽然不能直接创建对象，但是可以匿名内部实现，返回一个对象）</p>
<p><strong>接口的匿名内部实现</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Sing</span> sing <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"sing接口的匿名内部实现"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    sing<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态代理实现</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>proxy</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">Sing</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Proxy</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxyFactory</span> <span class="token punctuation">{</span>

    <span class="token comment">//成员变量设计为接口</span>
    <span class="token class-name">Sing</span> sing<span class="token punctuation">;</span>

    <span class="token comment">//传入目标对象</span>
    <span class="token keyword">public</span> <span class="token class-name">ProxyFactory</span><span class="token punctuation">(</span><span class="token class-name">Sing</span> sing<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sing <span class="token operator">=</span> sing<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//返回动态代理对象</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//返回动态代理对象</span>
        <span class="token keyword">return</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>sing<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">//类加载器</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>sing<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//接口的所有方法</span>
                <span class="token comment">//代理功能实现的接口,通过内部匿名实现</span>
                <span class="token keyword">new</span> <span class="token class-name">InvocationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token annotation punctuation">@Override</span>
                    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span>
                            <span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token comment">//创建好的代理对象</span>
                            <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token comment">//目标方法</span>
                            <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args <span class="token comment">// 参数</span>
                    <span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
                        <span class="token comment">//代理功能</span>
                        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"售票"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token comment">//目标对象业务功能</span>
                        <span class="token class-name">Object</span> obj <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>sing<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可以灵活调用目标对象的方法</span>
                        <span class="token comment">//代理功能</span>
                        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"清场"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">return</span> obj<span class="token punctuation">;</span> <span class="token comment">// 目标对象的目标方法的返回值</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span></span><span class="token class-name">ProxyFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">Sing</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span><span class="token class-name">SuperStar</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span><span class="token class-name">SuperStar2</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyTest</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testJDKDynamicProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ProxyFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProxyFactory</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SuperStar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Sing</span> star1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Sing</span><span class="token punctuation">)</span>factory<span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取代理对象,使用接口接收</span>
        star1<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//调用方法</span>

        factory<span class="token punctuation">.</span><span class="token function">setSing</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SuperStar2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Sing</span> star2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Sing</span><span class="token punctuation">)</span>factory<span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        star2<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="C:\Users\mamba\AppData\Roaming\Typora\typora-user-images\image-20220813223243632.png" alt="image-20220813223243632"></p>
<p><strong>注意：虽然使用接口接收动态代理对象，但是类型是class com.sun.proxy.$Proxy7，而不是接口实现类，因为代理对象实际在接口类的目标对象上加上了代理的业务功能</strong></p>
<p><strong>其次，实际上代理对象是对接口的一种实现，可以根据目标对象对接口方法进行辅助业务补充，而目标对象类的独有的方法，无法通过代理继续访问</strong></p>
<p>代理类的对象与接口实现类是对接口的两种实现，没有关联</p>
<h3 id="cglib动态代理" tabindex="-1"><a class="header-anchor" href="#cglib动态代理" aria-hidden="true">#</a> CGLib动态代理</h3>
<p>思想：在内存中构建子类对象，重写父类的方法，进行代理功能的补充</p>
<p><strong>若目标对象没有实现接口，就无法使用JDK动态代理，必须使用CGlib动态代理实现</strong></p>
<p>子类代理通过<strong>字节码框架ASM</strong>实现</p>
<h4 id="简版cglib实现" tabindex="-1"><a class="header-anchor" href="#简版cglib实现" aria-hidden="true">#</a> 简版CGLib实现</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName SubSuperStar1
 * @Description TODO
 * @Author mamba
 * @Date 2022/8/21 15:20
 * @Version 1.0
 */</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SubSuperStar1</span> <span class="token keyword">extends</span> <span class="token class-name">SuperStar1</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
        *<span class="token keyword">@author</span> mamba
        *@Description
        *@Date 15:21 2022/8/21
        *@Param []
        *@Return void
        **/</span>
        <span class="token comment">//子类完成代理功能</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"cglib代理: 售票"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//父类实现业务功能</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">//子类实现代理功能</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"cglib代理: 清场"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这相当于通过CGLib的思想实现的一种静态代理</p>
<p>测试代码</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">SubSuperStar1</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">SuperStar1</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName MyTest
 * @Description TODO
 * @Author mamba
 * @Date 2022/8/21 15:22
 * @Version 1.0
 */</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyTest</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SuperStar1</span> star <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubSuperStar1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        star<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cglib动态代理-1" tabindex="-1"><a class="header-anchor" href="#cglib动态代理-1" aria-hidden="true">#</a> CGLib动态代理</h4>
<ol>
<li>引入cglib包（spring核心中已经包含）</li>
<li>导入后，可以在内存中动态构建子类</li>
</ol>
<p>注意：</p>
<p>被代理的类（父类）不能声明为final（final类是无法被继承的）</p>
<p>目标对象的方法若为final 、static，不会被拦截，即不会执行目标对象额外的业务方法（静态方法是没有多态的）</p>
</div></template>


