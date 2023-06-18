import{_ as t,M as c,p as i,q as o,R as n,t as s,N as e,a1 as p}from"./framework-5866ffd3.js";const l={},u=n("p",null,"笔记结构",-1),r={href:"https://baomidou.com/",target:"_blank",rel:"noopener noreferrer"},d=p(`<p>Mybatis-Plus结构</p><h2 id="hellomybatisplus" tabindex="-1"><a class="header-anchor" href="#hellomybatisplus" aria-hidden="true">#</a> HelloMybatisPlus</h2><p>构建一个SpringBoot项目</p><p>引入依赖</p><p>配置</p><p>创建实体类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName User
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/14 10:40
 * @Version 1.0
 */</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> utype<span class="token punctuation">;</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建Mapper接口（plus提供了BaseMapper，提供了一些基础的方法接口，支持泛型）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>core<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">BaseMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName UserMapper
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/14 10:55
 * @Version 1.0
 */</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在启动类上添加@MapperScan</p><p>将指定包下的所有接口利用动态代理机制，生成对象在Spring容器中</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">MapperScan</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.mamba.mapper&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloMyBatisPlusApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">HelloMyBatisPlusApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span> <span class="token comment">// 这里虽然会警告无法自动注入，但是是可以运行的</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>application.properties添加日志输出</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">mybatis-plus.configuration.log-impl</span><span class="token punctuation">=</span><span class="token value attr-value">org.apache.ibatis.logging.stdout.StdOutImpl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="basemapper" tabindex="-1"><a class="header-anchor" href="#basemapper" aria-hidden="true">#</a> BaseMapper</h2><p>提供了一系列对单表操作的基本操作</p><h4 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> insert</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testInsert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;user2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将自增的注解自动注入到实体类</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> delete</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**\\
 * 根据Map中的条件删除
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDeleteByMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;user2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteByMap</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">//==&gt;  Preparing: DELETE FROM user WHERE name = ?</span>
<span class="token comment">//==&gt; Parameters: user2(String)</span>
<span class="token comment">//&lt;==    Updates: 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**\\
 * 根据id批量删除
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDeleteByIds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> ids <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ids<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ids<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ids<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> res <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteBatchIds</span><span class="token punctuation">(</span>ids<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
* 
* ==&gt;  Preparing: DELETE FROM user WHERE id IN ( ? , ? , ? )
    ==&gt; Parameters: 1(Integer), 2(Integer), 3(Integer)
    &lt;==    Updates: 1
* 
* 
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 根据id修改
 * 传入实体类对象
 * 为空的属性，不做修改
 * 
 * */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;第8号user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
    * ==&gt;  Preparing: UPDATE user SET name=? WHERE id=?
    ==&gt; Parameters: 第8号user(String), 8(Integer)
    &lt;==    Updates: 1
* 
* 
* */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 根据id查询数据
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectById</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
    * ==&gt;  Preparing: SELECT id,name,password,utype FROM user WHERE id=?
==&gt; Parameters: 8(Integer)
&lt;==    Columns: id, name, password, utype
&lt;==        Row: 8, 第8号user, 123456, 3
&lt;==      Total: 1
    * 
    * 
    * */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 根据ids批量查询
     *
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectByIds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> ids <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectBatchIds</span><span class="token punctuation">(</span>ids<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        
        <span class="token comment">/*
        * 
        * JDBC Connection [HikariProxyConnection@1081635795 wrapping com.mysql.cj.jdbc.ConnectionImpl@608bc8f8] will not be managed by Spring
==&gt;  Preparing: SELECT id,name,password,utype FROM user WHERE id IN ( ? , ? , ? )
==&gt; Parameters: 8(Integer), 9(Integer), 10(Integer)
&lt;==    Columns: id, name, password, utype
&lt;==        Row: 8, 第8号user, 123456, 3
&lt;==        Row: 9, XJJ, 456, 2
&lt;==        Row: 10, mamba1, 123132, 3
&lt;==      Total: 3
Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@1d96d872]
User(id=8, name=第8号user, password=123456, utype=3)
User(id=9, name=XJJ, password=456, utype=2)
User(id=10, name=mamba1, password=123132, utype=3)

*/</span>

        
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 根据map中的条件，进行查询
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectByMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;utype&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectByMap</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        
        
        <span class="token comment">/*
        * JDBC Connection [HikariProxyConnection@1579139754 wrapping com.mysql.cj.jdbc.ConnectionImpl@688d411b] will not be managed by Spring
==&gt;  Preparing: SELECT id,name,password,utype FROM user WHERE utype = ?
==&gt; Parameters: 2(Integer)
&lt;==    Columns: id, name, password, utype
&lt;==        Row: 9, XJJ, 456, 2
&lt;==        Row: 14, mamba5, 123132, 2
&lt;==      Total: 2
Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@834831b]
User(id=9, name=XJJ, password=456, utype=2)
User(id=14, name=mamba5, password=123132, utype=2)
        * 
        * */</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 
     * 根据条件构造器查询，返回List
     * 条件构造器为null ,即无条件，查询所有的数据
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testselectList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list<span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 没有条件构造器，默认查询所有数据</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        
        
        <span class="token comment">/*
        * JDBC Connection [HikariProxyConnection@1289454852 wrapping com.mysql.cj.jdbc.ConnectionImpl@76db540e] will not be managed by Spring
==&gt;  Preparing: SELECT id,name,password,utype FROM user
==&gt; Parameters: 
&lt;==    Columns: id, name, password, utype
&lt;==        Row: 8, 第8号user, 123456, 3
&lt;==        Row: 9, XJJ, 456, 2
&lt;==        Row: 10, mamba1, 123132, 3
&lt;==        Row: 11, mamba2, 123132, 3
&lt;==        Row: 12, mamba3, 123132, 3
&lt;==        Row: 13, mamba4, 123132, 3
&lt;==        Row: 14, mamba5, 123132, 2
&lt;==      Total: 7
Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@234a8f27]
User(id=8, name=第8号user, password=123456, utype=3)
User(id=9, name=XJJ, password=456, utype=2)
User(id=10, name=mamba1, password=123132, utype=3)
User(id=11, name=mamba2, password=123132, utype=3)
User(id=12, name=mamba3, password=123132, utype=3)
User(id=13, name=mamba4, password=123132, utype=3)
User(id=14, name=mamba5, password=123132, utype=2)
        * 
        * 
        * */</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义方法" tabindex="-1"><a class="header-anchor" href="#自定义方法" aria-hidden="true">#</a> 自定义方法</h4><p>在mybatis默认的mapper文件目录下创建mapper.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span> <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.mamba.mapper.UserMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectMapById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select id,name,password, utype from user where id=##{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在userMapper接口中添加对应的方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>core<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">BaseMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">MapKey</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Mapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Repository</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName UserMapper
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/14 10:55
 * @Version 1.0
 */</span>


<span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 根据用户id查询为map集合
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@MapKey</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectMapById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">UserMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName CustomFeaturesTest
 * @Description TODO 在baseMapper的基础上，自定义一系列方法,测试
 * @Author mamba
 * @Date 2022/9/15 15:16
 * @Version 1.0
 */</span>


<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomFeaturesTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectMapById</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectMapById</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="baseservice" tabindex="-1"><a class="header-anchor" href="#baseservice" aria-hidden="true">#</a> BaseService</h2><p>mybatis除了提供基础的Mapper，也提供了基础的Service接口<strong>IService</strong></p><p>和基础的Service实现类<strong>ServiceImpl</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">IService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName UserService
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/15 15:35
 * @Version 1.0
 */</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token keyword">extends</span> <span class="token class-name">IService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明:</p>`,42),k={href:"https://gitee.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-extension/src/main/java/com/baomidou/mybatisplus/extension/service/IService.java",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"get 查询单行",-1),v=n("code",null,"remove 删除",-1),b=n("code",null,"list 查询集合",-1),g=n("code",null,"page 分页",-1),y=n("code",null,"Mapper",-1),w=n("li",null,[s("泛型 "),n("code",null,"T"),s(" 为任意实体对象")],-1),h=n("li",null,[s("建议如果存在自定义通用 Service 方法的可能，请创建自己的 "),n("code",null,"IBaseService"),s(" 继承 "),n("code",null,"Mybatis-Plus"),s(" 提供的基类")],-1),f=n("code",null,"Wrapper",-1),S={href:"https://baomidou.com/01.%E6%8C%87%E5%8D%97/02.%E6%A0%B8%E5%BF%83%E5%8A%9F%E8%83%BD/wrapper.html",target:"_blank",rel:"noopener noreferrer"},q=p(`<p><strong>对于ServiceImpl，仅仅提供了一些很简单的单表操作，肯定无法满足业务需求，因此UserServiceImpl既要继承<code>ServiceImpl&lt;T&gt;</code>的一些基础方法，也要实现自定义的UserService，实现自定义的方法</strong></p><p>UserService</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">IService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName UserService
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/15 15:35
 * @Version 1.0
 */</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token keyword">extends</span> <span class="token class-name">IService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectMapById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserServiceImpl</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">UserService</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName UserServiceImpl
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/15 15:39
 * @Version 1.0
 */</span>


<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserMapper</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ServiceImpl&lt;UserMapper, User&gt;中已经实现了一些基础的Service方法</p><h4 id="测试——count" tabindex="-1"><a class="header-anchor" href="#测试——count" aria-hidden="true">#</a> 测试——count()</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>

<span class="token doc-comment comment">/**
     * 测试userServiceImpl通过继承ServiceImpl类，调用ServiceImpl类中的count方法 查询所有记录数
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testServiceCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">/*
    * 
    * ==&gt;  Preparing: SELECT COUNT( * ) FROM user
==&gt; Parameters: 
&lt;==    Columns: COUNT( * )
&lt;==        Row: 7
&lt;==      Total: 1
Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@bc0f53b]
7
    * 
    * */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试—批量增加" tabindex="-1"><a class="header-anchor" href="#测试—批量增加" aria-hidden="true">#</a> 测试—批量增加</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token doc-comment comment">/**
     *
     * 批量增加
      测试userServiceImpl通过继承ServiceImpl类，调用ServiceImpl类中的saveBatch方法
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testBatchInsert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;xjj2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123123&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;xjwj&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1231fsd23&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;xwjj&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123123f&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;jj&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1sdf23123&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">boolean</span> res <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">saveBatch</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

        
        
        <span class="token comment">/*
        * 
        * ==&gt;  Preparing: INSERT INTO user ( name, password, utype ) VALUES ( ?, ?, ? )
        ==&gt; Parameters: xjj2(String), 123123(String), 3(Integer)
        ==&gt; Parameters: xjwj(String), 1231fsd23(String), 2(Integer)
        ==&gt; Parameters: xwjj(String), 123123f(String), 2(Integer)
        ==&gt; Parameters: jj(String), 1sdf23123(String), 3(Integer)
        * 
        * */</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试——自定义方法selectmapbyid" tabindex="-1"><a class="header-anchor" href="#测试——自定义方法selectmapbyid" aria-hidden="true">#</a> 测试——自定义方法selectMapById</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 测试userServiceImpl通过实现UserService接口，调用的自定义方法selectMapById
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectMapById</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span> <span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">selectMapById</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        
    <span class="token comment">/*
    * ==&gt;  Preparing: select id,name,password, utype from user where id=?
==&gt; Parameters: 8(Integer)
&lt;==    Columns: id, name, password, utype
&lt;==        Row: 8, 第8号user, 123456, 3
&lt;==      Total: 1
Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@33f98231]
{8={password=123456, name=第8号user, utype=3, id=8}}
    *
    *
    * */</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用注解" tabindex="-1"><a class="header-anchor" href="#常用注解" aria-hidden="true">#</a> 常用注解</h2><p>mybatisplus默认将实体类名称（小写）与表名称进行映射</p><p>将属性名与字段名进行映射</p><p>当两者不同时，需要用到一些注解进行映射</p><h4 id="tablename" tabindex="-1"><a class="header-anchor" href="#tablename" aria-hidden="true">#</a> @TableName</h4><p>当实体类名与表明不一致时，在实体类上添加@TableName注解，指定表名，实现实体类与表的映射</p><p>如果所有的表名有一个通用前缀，比如t_user,t_student。。。。mybatis也支持通过全局配置，实现映射</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">mybatis-plus.global-config.db-config.table-prefix</span><span class="token punctuation">=</span><span class="token value attr-value">t_</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就不用一 一配置了</p><h4 id="tableid" tabindex="-1"><a class="header-anchor" href="#tableid" aria-hidden="true">#</a> @TableId</h4><p>mybatisplus默认将实体类中的<strong>id</strong>成员遍量作为主键在实体类的映射，如果字段和成员变量不叫id，而是user_id, stu_id，就无法与主键映射，这是需要在实体类中与主键字段对应的属性上添加@TableId属性，显式指定该字段为主键的映射成员变量</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">IdType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">TableId</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName User
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/14 10:40
 * @Version 1.0
 */</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>type<span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span> <span class="token comment">//将属性对应的字段指定为主键</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> utype<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">,</span> <span class="token class-name">Integer</span> utype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>utype <span class="token operator">=</span> utype<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="value属性" tabindex="-1"><a class="header-anchor" href="#value属性" aria-hidden="true">#</a> value属性</h6><p>当表中列名与实体类中的属性名不一致时，需要通过value属性值，进行对应</p><p>当两者一致，则不用写，mybatisplus自动进行映射</p><h6 id="type属性" tabindex="-1"><a class="header-anchor" href="#type属性" aria-hidden="true">#</a> type属性</h6><p>设置主键id的填入方式类型</p><p>IdType是一个枚举类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//</span>
<span class="token comment">// Source code recreated from a .class file by IntelliJ IDEA</span>
<span class="token comment">// (powered by FernFlower decompiler)</span>
<span class="token comment">//</span>

<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">IdType</span> <span class="token punctuation">{</span>
    <span class="token function">AUTO</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">NONE</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">INPUT</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">ASSIGN_ID</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">ASSIGN_UUID</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** <span class="token keyword">@deprecated</span> */</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token function">ID_WORKER</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** <span class="token keyword">@deprecated</span> */</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token function">ID_WORKER_STR</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** <span class="token keyword">@deprecated</span> */</span>
    <span class="token annotation punctuation">@Deprecated</span>
    <span class="token function">UUID</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> key<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">IdType</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TableId中，IdType默认为None，雪花算法一个uuid</p><p>如果所有的实体类的主键策略一致，也可以通过全局配置实现</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">mybatis-plus.global-config.db-config.id-type</span><span class="token punctuation">=</span><span class="token value attr-value">uuid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果在实体类对象中设置了id，则会优先使用手动设置的id值，而不会使用自增、雪花算法等其他主键策略</p><h4 id="雪花算法" tabindex="-1"><a class="header-anchor" href="#雪花算法" aria-hidden="true">#</a> 雪花算法</h4><p>常见的数据库扩展方式：业务分库、主从复制、数据库分表</p><p>雪花id并不是uuid，而是结合了自增id和uuid的优势，既不会重复，也有自增特性</p><h6 id="数据库分表" tabindex="-1"><a class="header-anchor" href="#数据库分表" aria-hidden="true">#</a> 数据库分表</h6><p>单表数据量爆炸，需要对表进行拆分，一般水平拆分、垂直拆分</p><p>######## 垂直拆分</p><p>适合将不常用但占用空间的字段列拆分出去</p><p>######## 水平拆分</p><p>适合拆分数据量大的表，关键在于如何根据主键id对数据进行拆分</p><ol><li><p>主键自增</p><p>比如以1000w为上限，达到1000w就分出一张表</p><p>分表范围的选取很重要，太小导致分表过多，太大导致单表依然数据量很大</p><p>优点：非常简单，数据多了只需要增加表即可，不会影响之前的数据</p><p>问题：分布不均匀。比如1000w数据分一张表，那么有10000010条数据时，一张表是满的，而另一张表只有10条数据</p></li><li><p>取模</p></li><li><p>雪花算法</p><p>该算法是由推特公布的分布式主键生成算法，能够保证不同表的不同主键的不重复性，以及相同表的主键有序性</p><p>长度64位 Long型</p></li></ol><h4 id="tablefield" tabindex="-1"><a class="header-anchor" href="#tablefield" aria-hidden="true">#</a> @TableField</h4><h4 id="tablelogic" tabindex="-1"><a class="header-anchor" href="#tablelogic" aria-hidden="true">#</a> @TableLogic</h4><p>物理删除：真是删除，将对应数据从数据库删除</p><p>逻辑删除，假删除，记录为删除状态，数据库不会真的删除</p><p>逻辑删除可以进行数据恢复</p><p>@TableLogic 标识的属性，可以作为逻辑删除的标识属性</p><h2 id="条件构造器" tabindex="-1"><a class="header-anchor" href="#条件构造器" aria-hidden="true">#</a> 条件构造器</h2><p>Wrapper</p><p>用于封装条件</p><h4 id="querywrapper" tabindex="-1"><a class="header-anchor" href="#querywrapper" aria-hidden="true">#</a> QueryWrapper</h4><p>QueryWrapper主要是可以决定where语句的内容，提供了一系列动态生成where语句的方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mam&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;utype&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">/*
        * ==&gt;  Preparing: SELECT id,name,password,utype FROM user WHERE (name LIKE ? AND utype = ?)
==&gt; Parameters: %mam%(String), 3(Integer)
&lt;==    Columns: id, name, password, utype
&lt;==        Row: 10, mamba1, 123132, 3
&lt;==        Row: 11, mamba2, 123132, 3
&lt;==        Row: 12, mamba3, 123132, 3
&lt;==        Row: 13, mamba4, 123132, 3
&lt;==      Total: 4

        * 
        * 
        * */</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testOrderBy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queryWrapper<span class="token punctuation">.</span><span class="token function">orderByAsc</span><span class="token punctuation">(</span><span class="token string">&quot;utype&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">orderByAsc</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//先根据utype排序，然后根据id排序</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token comment">/*
* ==&gt;  Preparing: SELECT id,name,password,utype FROM user ORDER BY utype ASC,id ASC
==&gt; Parameters: 
&lt;==    Columns: id, name, password, utype
&lt;==        Row: 9, XJJ, 456, 2
&lt;==        Row: 14, mamba5, 123132, 2
&lt;==        Row: 22, xjwj, 1231fsd23, 2
&lt;==        Row: 23, xwjj, 123123f, 2
&lt;==        Row: 8, 第8号user, 123456, 3
&lt;==        Row: 10, mamba1, 123132, 3
&lt;==        Row: 11, mamba2, 123132, 3
&lt;==        Row: 12, mamba3, 123132, 3
&lt;==        Row: 13, mamba4, 123132, 3
&lt;==        Row: 21, xjj2, 123123, 3
&lt;==        Row: 24, jj, 1sdf23123, 3
&lt;==      Total: 11

* */</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queryWrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;utype&quot;</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">/*
        * ==&gt;  Preparing: DELETE FROM user WHERE (utype = ?)
==&gt; Parameters: 4(Integer)
&lt;==    Updates: 1
        * */</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// update 的条件</span>
        queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mam&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;utype&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 上下两个条件之间or</span>
                <span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//update的内容</span>
        user<span class="token punctuation">.</span><span class="token function">setUtype</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userMapper<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">/*
        *
        *==&gt;  Preparing: UPDATE user SET utype=? WHERE (name LIKE ? AND utype = ? OR password LIKE ?)
==&gt; Parameters: 4(Integer), %mam%(String), 3(Integer), %123%(String)
&lt;==    Updates: 9
        *
        *
        * */</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Wrapper默认在每一个条件之间加上and</p><p>如果需要加括号修改顺序，需要根据需求显式加上and()</p><p>并且在and()中使用lambda表达式继续添加括号内的条件</p><p>lambda表达式中的条件将会优先执行</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testWrapperAnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mam&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>i <span class="token operator">-&gt;</span> i<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;utype&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;utype&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
                <span class="token punctuation">)</span>
        <span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">/*
        *==&gt;  Preparing: SELECT id,name,password,utype FROM user WHERE (name LIKE ? AND (utype = ? OR utype = ?))
==&gt; Parameters: %mam%(String), 3(Integer), 4(Integer)
&lt;==    Columns: id, name, password, utype
&lt;==        Row: 10, mamba1, 123132, 4
&lt;==        Row: 11, mamba2, 123132, 4
&lt;==        Row: 12, mamba3, 123132, 4
&lt;==        Row: 13, mamba4, 123132, 4
&lt;==        Row: 14, mamba5, 123132, 4
&lt;==      Total: 5

        *
        *
        *
        * */</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="组装查询" tabindex="-1"><a class="header-anchor" href="#组装查询" aria-hidden="true">#</a> 组装查询</h6><p>查询一部分字段，用map接收</p><p>selectMaps</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        queryWrapper<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//只需要查询两个字段</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectMaps</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/*
        *==&gt;  Preparing: SELECT name,password FROM user
==&gt; Parameters: 
&lt;==    Columns: name, password
&lt;==        Row: 第8号user, 123456
&lt;==        Row: XJJ, 456
&lt;==        Row: mamba1, 123132
&lt;==        Row: mamba2, 123132
&lt;==        Row: mamba3, 123132
&lt;==        Row: mamba4, 123132
&lt;==        Row: mamba5, 123132
&lt;==        Row: xjj2, 123123
&lt;==        Row: xjwj, 1231fsd23
&lt;==        Row: xwjj, 123123f
&lt;==      Total: 10
Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@34e20e6b]
{password=123456, name=第8号user}
{password=456, name=XJJ}
{password=123132, name=mamba1}
{password=123132, name=mamba2}
{password=123132, name=mamba3}
{password=123132, name=mamba4}
{password=123132, name=mamba5}
{password=123123, name=xjj2}
{password=1231fsd23, name=xjwj}
{password=123123f, name=xwjj}
        *
        * */</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="组装子查询" tabindex="-1"><a class="header-anchor" href="#组装子查询" aria-hidden="true">#</a> 组装子查询</h4><p>使用wrapper.inSql()</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSubSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/*查询id小于10的用户信息
        使用子查询实现
        select id, name, password, utype from user
        where id in
        (select id from user where id &lt;= 10)
        */</span>
        queryWrapper<span class="token punctuation">.</span><span class="token function">inSql</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;select id from user where id &lt;= 10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//写子查询的sql语句</span>
        <span class="token comment">//外部select语句条件为：in （子查询的结果）</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        
        <span class="token comment">/*
        * 
        * ==&gt;  Preparing: SELECT id,name,password,utype FROM user WHERE (id IN (select id from user where id &lt;= 10))
==&gt; Parameters: 
&lt;==    Columns: id, name, password, utype
&lt;==        Row: 8, 第8号user, 123456, 4
&lt;==        Row: 9, XJJ, 456, 2
&lt;==        Row: 10, mamba1, 123132, 4
&lt;==      Total: 3
Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@56d93692]
User(id=8, name=第8号user, password=123456, utype=4)
User(id=9, name=XJJ, password=456, utype=2)
User(id=10, name=mamba1, password=123132, utype=4)


        * 
        * */</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="updatewrapper" tabindex="-1"><a class="header-anchor" href="#updatewrapper" aria-hidden="true">#</a> UpdateWrapper</h4><p>虽然之前配合QueryWrapper，使用mapper.update(User, queryMapper)可以实现update操作</p><p>但是UpdateWrapper是专门用来update操作的</p><p>UpdateWrapper不仅可以设置修改的条件，还可以直接设置修改的字段</p><p>UpdateWrappper提供了set方法，设置修改的字段</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testUpdateWrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">UpdateWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> updateWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UpdateWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    updateWrapper<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mamba666&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 设置修改的字段，字段值</span>
     <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 条件是id=8</span>

    <span class="token keyword">int</span> res <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> updateWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这里不用传入实体类对象，直接传入updateWrapper即可</span>


    <span class="token comment">/*
    * ==&gt;  Preparing: UPDATE user SET name=? WHERE (id = ?)
    ==&gt; Parameters: mamba666(String), 8(Integer)
    &lt;==    Updates: 1
    *
    *
    * */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="条件组装" tabindex="-1"><a class="header-anchor" href="#条件组装" aria-hidden="true">#</a> 条件组装</h4><p>很多场景中，用户选择了某一个条件，后台才会将该条件加入到sql语句的where语句中，这里模拟实现一下这种业务</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testConditionMerge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;mam&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 如果name为null或者&quot;&quot;， 则不加入where语句</span>
    <span class="token class-name">Integer</span> utype <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//如果utype为null或者0，则不加入where语句</span>

    <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//isBlank判断字符串是否为null， “”， 空白符</span>
        queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>utype <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> utype <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        queryWrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;utype&quot;</span><span class="token punctuation">,</span> utype<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    
    <span class="token comment">/*
    * 
    * 
    * ==&gt;  Preparing: SELECT id,name,password,utype FROM user WHERE (name LIKE ?)
        ==&gt; Parameters: %mam%(String)
        &lt;==    Columns: id, name, password, utype
        &lt;==        Row: 8, mamba666, 123456, 4
        &lt;==        Row: 10, mamba1, 123132, 4
        &lt;==        Row: 11, mamba2, 123132, 4
        &lt;==        Row: 12, mamba3, 123132, 4
        &lt;==        Row: 13, mamba4, 123132, 4
        &lt;==        Row: 14, mamba5, 123132, 4
        &lt;==      Total: 6
    * */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="condition" tabindex="-1"><a class="header-anchor" href="#condition" aria-hidden="true">#</a> condition</h6><p>上面的例子是需要我们自己代码去判断的，QueryWrapper对于每一种条件方法，也重载了另一种实现方式，添加了一个形参condition,是Boolean类型，可以填入一系列条件判断语句，当满足条件是，该条件方法才会添加到sql语句中</p><p>我们用这种方法，再实现一下与上面相同的操作</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testConditionArgument</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;mam&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">Integer</span> utype <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span>utype <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> utype <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;utype&quot;</span><span class="token punctuation">,</span> utype<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



    <span class="token comment">/*
    *
    *==&gt;  Preparing: SELECT id,name,password,utype FROM user WHERE (name LIKE ?)
        ==&gt; Parameters: %mam%(String)
        &lt;==    Columns: id, name, password, utype
        &lt;==        Row: 8, mamba666, 123456, 4
        &lt;==        Row: 10, mamba1, 123132, 4
        &lt;==        Row: 11, mamba2, 123132, 4
        &lt;==        Row: 12, mamba3, 123132, 4
        &lt;==        Row: 13, mamba4, 123132, 4
        &lt;==        Row: 14, mamba5, 123132, 4
        &lt;==      Total: 6

    *
    * */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL、查询结果和上面一致</p><p>这种带有condition的方法实际就是把if语句内嵌实现的</p><h4 id="lambdaquerywrapper" tabindex="-1"><a class="header-anchor" href="#lambdaquerywrapper" aria-hidden="true">#</a> LambdaQueryWrapper</h4><p>使用QueryWrapper和UpdateWrapper的时候，容易出现列名写错的情况</p><p><strong>LambdaQueryWrapper和LambdaUpdateWrapper支持使用Lambda表达式获取字段名,代替了之前QueryWrapper和UpdateWrapper中使用字符串传入字段名的方式。</strong></p><p>比如User::getId</p><p>可以根据这个lambda表达式去获取该属性对应的表中的字段名</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testLambdaQueryWrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;mam&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">Integer</span> utype <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    queryWrapper<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span>utype <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> utype <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getUtype</span><span class="token punctuation">,</span> utype<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//第二个参数直接使用lambda表达式获取，避免输入错误</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    
    <span class="token comment">/*
    * ==&gt;  Preparing: SELECT id,name,password,utype FROM user WHERE (name LIKE ?)
    ==&gt; Parameters: %mam%(String)
    &lt;==    Columns: id, name, password, utype
    &lt;==        Row: 8, mamba666, 123456, 4
    &lt;==        Row: 10, mamba1, 123132, 4
    &lt;==        Row: 11, mamba2, 123132, 4
    &lt;==        Row: 12, mamba3, 123132, 4
    &lt;==        Row: 13, mamba4, 123132, 4
    &lt;==        Row: 14, mamba5, 123132, 4
    &lt;==      Total: 6

    * 
    * 
    * */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="lambdaupdatewrapper" tabindex="-1"><a class="header-anchor" href="#lambdaupdatewrapper" aria-hidden="true">#</a> LambdaUpdateWrapper</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testLambdaUpdateWrapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">LambdaUpdateWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> lm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaUpdateWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">Integer</span> utype <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token class-name">Integer</span> id <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
    lm<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>utype <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> utype<span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getUtype</span><span class="token punctuation">,</span> utype<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span>id <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> id <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getId</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">int</span> res <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> lm<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>



    <span class="token comment">/*
    *
    * ==&gt;  Preparing: UPDATE user SET name=?,utype=? WHERE (id = ?)
    ==&gt; Parameters: abc(String), 5(Integer), 8(Integer)
    &lt;==    Updates: 1
    *
    *
    * */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现，使用LambdaQueryWrapper、LambdaUpdateWrapper生成的sql语句和QueryWrapper、UpdateWrapper生成的sql语句是一样的</p><h2 id="mybatisplus插件" tabindex="-1"><a class="header-anchor" href="#mybatisplus插件" aria-hidden="true">#</a> MybatisPlus插件</h2><h4 id="分页插件" tabindex="-1"><a class="header-anchor" href="#分页插件" aria-hidden="true">#</a> 分页插件</h4><ol><li><p>配置</p><p>新建一个MybatisPlus配置类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">DbType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span></span><span class="token class-name">MybatisPlusInterceptor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>inner<span class="token punctuation">.</span></span><span class="token class-name">PaginationInnerInterceptor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">MapperScan</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName MybatisPlusConfig
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/17 20:13
 * @Version 1.0
 */</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.mamba.mapper&quot;</span><span class="token punctuation">)</span>  <span class="token comment">// 将扫描包的注解移动至此</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>


    <span class="token doc-comment comment">/**
     * 配置mybatisplus插件
     *
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>  <span class="token comment">// 将该方法的返回值对象放入ioc容器</span>
    <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 添加内部插件， 这里参数就填入你需要的插件类型</span>
        interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaginationInnerInterceptor</span><span class="token punctuation">(</span><span class="token class-name">DbType</span><span class="token punctuation">.</span><span class="token constant">MYSQL</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 由于不同的数据库类型，对分页的实现是不同的，这里要传入数据库类型</span>
        <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>  <span class="token comment">// 将该interceptor返回，放入spring容器，就实现了插件的配置</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Integer</span> id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// id 为0 ，默认不会通过条件构造器的条件，默认查询所有数据</span>
    <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> lambdaQueryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    lambdaQueryWrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span>id <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> id <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getId</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> page <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 默认从1开始</span>
    userMapper<span class="token punctuation">.</span><span class="token function">selectPage</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> lambdaQueryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 这里数据会直接保存在page对象中</span>


    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">;</span>



    <span class="token comment">/*
    *
    * ==&gt;  Preparing: SELECT id,name,password,utype FROM user LIMIT ?,?
    ==&gt; Parameters: 5(Long), 5(Long)
    &lt;==    Columns: id, name, password, utype
    &lt;==        Row: 13, mamba4, 123132, 4
    &lt;==        Row: 14, mamba5, 123132, 4
    &lt;==        Row: 21, xjj2, 123123, 4
    &lt;==        Row: 22, xjwj, 1231fsd23, 4
    &lt;==        Row: 23, xwjj, 123123f, 4
    &lt;==      Total: 5
        * */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="自定义分页功能" tabindex="-1"><a class="header-anchor" href="#自定义分页功能" aria-hidden="true">#</a> 自定义分页功能</h6><p>在实际业务中，对于分页的需求更加灵活，比如根据某一字段排序之后进行分页，这个时候需要自定义分页方法，实现相关业务</p><p>可以参照BaseMapper中的selectPage接口自定义一个返回Page的方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span> <span class="token keyword">extends</span> <span class="token class-name">IPage</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">E</span> <span class="token function">selectPage</span><span class="token punctuation">(</span><span class="token class-name">E</span> page<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//BaseMapper中的selectPage</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectPageByUtype</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;page&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> page<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;utype&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> utype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// page插件会自动帮我们加上limit 语句到sql语句，实现分页</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里方法定义时，第一个参数和返回参数必须时Page类型，这样才能保证Page插件可以实现分页</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span>select id<span class="token operator">=</span><span class="token string">&quot;selectPageByUtype&quot;</span> resultType<span class="token operator">=</span><span class="token string">&quot;user&quot;</span><span class="token operator">&gt;</span>
    select id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> password<span class="token punctuation">,</span> utype from user where utype<span class="token operator">=</span>##<span class="token punctuation">{</span>utype<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 测试自定义分页方法
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Integer</span> uptype <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>  <span class="token comment">// id 为0 ，默认不会通过条件构造器的条件，默认查询所有数据</span>
    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> page <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userMapper<span class="token punctuation">.</span><span class="token function">selectPageByUtype</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> uptype<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 这里数据会直接保存在page对象中</span>




    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">/*
    * ==&gt; Parameters: 4(Integer), 3(Long)
        &lt;==    Columns: id, name, password, utype
        &lt;==        Row: 10, mamba1, 123132, 4
        &lt;==        Row: 11, mamba2, 123132, 4
        &lt;==        Row: 12, mamba3, 123132, 4
        &lt;==      Total: 3
    *
    *
    * */</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="乐观锁插件" tabindex="-1"><a class="header-anchor" href="#乐观锁插件" aria-hidden="true">#</a> 乐观锁插件</h4><p><strong>思想：默认在你修改数据之前，没有人修改过数据或者想要修改数据</strong></p><p>一般通过版本号versionId实现</p><p>比如，每有一次数据更新的操作，versionId加1</p><p><strong>最新一次更新的时候，必须满足versionId匹配（也就是在你修改之前，没有人修改过数据），才能更新，否则就无法更新</strong></p><p>实现流程</p><ol><li>在表中添加versionId字段</li><li>查询的时候，需要将versionId和信息一起取出</li><li>在update的时候，在Where语句中加入<strong>versionId=##{取出的versionId}</strong>，如果满足条件，就可以实现更新操作，并且要在update 的<strong>set中将versionId加1</strong></li></ol><h6 id="模拟并发修改数据" tabindex="-1"><a class="header-anchor" href="#模拟并发修改数据" aria-hidden="true">#</a> 模拟并发修改数据</h6><p>MybatisPlus提供的乐观锁插件帮助我们去维护versionId，不用我们自己在Sql中加入关于versionId的操作与条件</p><p>我们用商品表来模拟多个用户操作同一条数据的场景</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testUpdateWithoutOptimisticLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">//业务需求是想先将商品加个加50，再减30，最终也就是加20</span>
    <span class="token comment">//分两个用户来操作</span>

    <span class="token comment">//模拟用户1查询</span>
    <span class="token class-name">Product</span> product_selected_by_user1 <span class="token operator">=</span> productMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//模拟用户2查询</span>
    <span class="token class-name">Product</span> product_selected_by_user2 <span class="token operator">=</span> productMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//用户1将商品价格提高50</span>
    product_selected_by_user1<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span>product_selected_by_user1<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    productMapper<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>product_selected_by_user1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 用户2将商品加个降低30</span>
    product_selected_by_user2<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span>product_selected_by_user2<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    productMapper<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>product_selected_by_user2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//模拟用户1查询</span>
    <span class="token class-name">Product</span> product <span class="token operator">=</span> productMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>product_selected_by_user1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>product_selected_by_user2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后并不是在先加50的基础上减30，而是直接在原价减30，覆盖了添加的操作</p><h6 id="使用乐观锁插件" tabindex="-1"><a class="header-anchor" href="#使用乐观锁插件" aria-hidden="true">#</a> 使用乐观锁插件</h6><ol><li><p>修改实体类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Version</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName Product
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/17 21:20
 * @Version 1.0
 */</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> price<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Version</span> <span class="token comment">// 标识乐观锁版本号字段</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> versionId<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加乐观锁插件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">DbType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span></span><span class="token class-name">MybatisPlusInterceptor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>inner<span class="token punctuation">.</span></span><span class="token class-name">OptimisticLockerInnerInterceptor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>inner<span class="token punctuation">.</span></span><span class="token class-name">PaginationInnerInterceptor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">MapperScan</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName MybatisPlusConfig
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/17 20:13
 * @Version 1.0
 */</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.mamba.mapper&quot;</span><span class="token punctuation">)</span>  <span class="token comment">// 将扫描包的注解移动至此</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>


    <span class="token doc-comment comment">/**
     * 配置mybatisplus插件
     *
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>  <span class="token comment">// 将该方法的返回值对象放入ioc容器</span>
    <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MybatisPlusInterceptor</span> interceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 添加内部插件， 这里参数就填入你需要的插件类型</span>
        interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaginationInnerInterceptor</span><span class="token punctuation">(</span><span class="token class-name">DbType</span><span class="token punctuation">.</span><span class="token constant">MYSQL</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 由于不同的数据库类型，对分页的实现是不同的，这里要传入数据库类型</span>
        interceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OptimisticLockerInnerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加乐观锁插件</span>
        <span class="token keyword">return</span> interceptor<span class="token punctuation">;</span>  <span class="token comment">// 将该interceptor返回，放入spring容器，就实现了插件的配置</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试</p><p>同样对商品价格进行操作</p><p>业务代码不需要改变，插件会自动完成对versionId的更新</p><p>乐观锁会在第一次修改价格之后，增加versionId，这样第二次修改就不成功了，除非重新查询到最新的记录信息，在此基础上进行修改</p></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testUpdateWithOptimisticLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">//业务需求是想先将商品加个加50，再减30，最终也就是加20</span>
    <span class="token comment">//分两个用户来操作</span>

    <span class="token comment">//模拟用户1查询</span>
    <span class="token class-name">Product</span> product_selected_by_user1 <span class="token operator">=</span> productMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//模拟用户2查询</span>
    <span class="token class-name">Product</span> product_selected_by_user2 <span class="token operator">=</span> productMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//用户1将商品价格提高50</span>
    product_selected_by_user1<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span>product_selected_by_user1<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    productMapper<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>product_selected_by_user1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 用户2将商品加个降低30</span>
    product_selected_by_user2<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span>product_selected_by_user2<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    productMapper<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>product_selected_by_user2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//模拟用户1查询</span>
    <span class="token class-name">Product</span> product <span class="token operator">=</span> productMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>product_selected_by_user1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>product_selected_by_user2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">/*
    *
    * ==&gt;  Preparing: SELECT id,name,price,version_id FROM product WHERE id=?
    ==&gt; Parameters: 1(Integer)
    &lt;==    Columns: id, name, price, version_id
    &lt;==        Row: 1, 书, 150.0, 1
    &lt;==      Total: 1
    *
    *
    * Product(id=1, name=书, price=150.0, versionId=1)
        Product(id=1, name=书, price=70.0, versionId=1)  // 第二次操作
        Product(id=1, name=书, price=150.0, versionId=1) // 最后只有第一次操作成功

    *
    * */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关于悲观锁" tabindex="-1"><a class="header-anchor" href="#关于悲观锁" aria-hidden="true">#</a> 关于悲观锁</h4><p><strong>思想：利用锁机制，默认我在操作数据的时候，其他人也可能操作数据，所以直接加锁</strong></p><p>MybatisPlus不提供悲观锁插件</p><h2 id="通用枚举" tabindex="-1"><a class="header-anchor" href="#通用枚举" aria-hidden="true">#</a> 通用枚举</h2><p>数据库中对于性别之类的字段，使用int存储，而java对象中可以使用枚举类型</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>enums</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Getter</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Getter</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">SexEnum</span> <span class="token punctuation">{</span>
    <span class="token function">MALE</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">FEMALE</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;女&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> sex<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> sexName<span class="token punctuation">;</span>

    <span class="token class-name">SexEnum</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> sex<span class="token punctuation">,</span> <span class="token class-name">String</span> sexName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sexName <span class="token operator">=</span> sexName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>enums<span class="token punctuation">.</span></span><span class="token class-name">SexEnum</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName Student
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/18 11:30
 * @Version 1.0
 */</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> studentId<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">SexEnum</span> sex<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> birthday<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    student<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;12&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    student<span class="token punctuation">.</span><span class="token function">setStudentId</span><span class="token punctuation">(</span><span class="token string">&quot;123465&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    student<span class="token punctuation">.</span><span class="token function">setSex</span><span class="token punctuation">(</span><span class="token class-name">SexEnum</span><span class="token punctuation">.</span><span class="token constant">MALE</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>
    student<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;df&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    student<span class="token punctuation">.</span><span class="token function">setBirthday</span><span class="token punctuation">(</span><span class="token string">&quot;1999-05-15&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> res <span class="token operator">=</span> studentMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这里会失败，因为会直接把MALE当成字符串存储到sex字段中</span>
    <span class="token comment">//所以要使用通用枚举</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用通用枚举" tabindex="-1"><a class="header-anchor" href="#使用通用枚举" aria-hidden="true">#</a> 使用通用枚举</h4><ol><li><p>添加enum包的扫描配置</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">mybatis-plus.type-enums-package</span><span class="token punctuation">=</span><span class="token value attr-value">com.mamba.enums</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>使用@EnumValue标识属性值存储进入数据库</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>enums</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">EnumValue</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">IEnum</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Getter</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Getter</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">SexEnum</span> <span class="token punctuation">{</span>
    <span class="token function">MALE</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">FEMALE</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;女&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@EnumValue</span>  <span class="token comment">// 将注解标识的属性值存储进入数据库</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> sex<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> sexName<span class="token punctuation">;</span>

    <span class="token class-name">SexEnum</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> sex<span class="token punctuation">,</span> <span class="token class-name">String</span> sexName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sexName <span class="token operator">=</span> sexName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    student<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;13&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    student<span class="token punctuation">.</span><span class="token function">setStudentId</span><span class="token punctuation">(</span><span class="token string">&quot;123465&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    student<span class="token punctuation">.</span><span class="token function">setSex</span><span class="token punctuation">(</span><span class="token class-name">SexEnum</span><span class="token punctuation">.</span><span class="token constant">MALE</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这里如果Student类中不指定EnumValue，会默认将MALE当作字符串添加到sex字段中，报错</span>
    student<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;df&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    student<span class="token punctuation">.</span><span class="token function">setBirthday</span><span class="token punctuation">(</span><span class="token string">&quot;1999-05-15&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> res <span class="token operator">=</span> studentMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果不使用通用枚举，这里会失败，因为会直接把MALE当成字符串存储到sex字段中</span>
    <span class="token comment">//所以要使用通用枚举</span>
    
    
    <span class="token comment">/*
    * 
    * 
    * ==&gt;  Preparing: INSERT INTO student ( id, studentid, name, sex, birthday ) VALUES ( ?, ?, ?, ?, ? )
    ==&gt; Parameters: 13(String), 123465(String), df(String), 1(Integer), 1999-05-15(String)
    &lt;==    Updates: 1
    * 
    * */</span>
    
    
    
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>对于数据库中固定值的字段，java中可以使用枚举，然后用mybatisplus的通用枚举，即可实现枚举value与字段的映射</p><h2 id="代码生成器" tabindex="-1"><a class="header-anchor" href="#代码生成器" aria-hidden="true">#</a> 代码生成器</h2><ol><li><p>引入依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-plus-generator&lt;/artifactId&gt;
    &lt;version&gt;3.5.1&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.freemarker&lt;/groupId&gt;
    &lt;artifactId&gt;freemarker&lt;/artifactId&gt;
    &lt;version&gt;2.3.31&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>添加生成器代码，运行，则可以按照要求生成一个mybatisplus的模块demo</p></li></ol><h2 id="多数据源" tabindex="-1"><a class="header-anchor" href="#多数据源" aria-hidden="true">#</a> 多数据源</h2><p>场景：多库、读写分离、一主多从、混合模式....</p><h4 id="多库" tabindex="-1"><a class="header-anchor" href="#多库" aria-hidden="true">#</a> 多库</h4><ol><li><p>添加依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dynamic-datasource-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改springboot配置文件， yml or properties(同时存在优先读properties文件)</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> MultiDataSource_MybatisPlus
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
      <span class="token key atrule">primary</span><span class="token punctuation">:</span> master <span class="token comment">##设置默认的数据源或者数据源组,默认值即为master</span>
      <span class="token key atrule">strict</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">##设置严格模式,默认false不启动. 启动后在未匹配到指定数据源时候会抛出异常,不启动则使用默认数据源.</span>
      <span class="token key atrule">datasource</span><span class="token punctuation">:</span> <span class="token comment">## 配置一系列数据源</span>
        <span class="token key atrule">master</span><span class="token punctuation">:</span>
          <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/dynamic
          <span class="token key atrule">username</span><span class="token punctuation">:</span> root
          <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
          <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver <span class="token comment">## 3.2.0开始支持SPI可省略此配置</span>
        <span class="token key atrule">slave_1</span><span class="token punctuation">:</span>
          <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/ssm01<span class="token punctuation">?</span>serverTimezone=Asia/Shanghai<span class="token important">&amp;characterEncoding=utf-</span><span class="token number">8</span>
          <span class="token key atrule">username</span><span class="token punctuation">:</span> root
          <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
          <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
<span class="token comment">##        slave_2:</span>
<span class="token comment">##          url: ENC(xxxxx) ## 内置加密,使用请查看详细文档</span>
<span class="token comment">##          username: ENC(xxxxx)</span>
<span class="token comment">##          password: ENC(xxxxx)</span>
<span class="token comment">##          driver-class-name: com.mysql.jdbc.Driver</span>
<span class="token comment">##          schema: db/schema.sql ## 配置则生效,自动初始化表结构</span>
<span class="token comment">##          data: db/data.sql ## 配置则生效,自动初始化数据</span>
<span class="token comment">##          continue-on-error: true ## 默认true,初始化失败是否继续</span>
<span class="token comment">##          separator: &quot;;&quot; ## sql默认分号分隔符</span>

<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl
  <span class="token key atrule">global-config</span><span class="token punctuation">:</span>
    <span class="token key atrule">db-config</span><span class="token punctuation">:</span>
      <span class="token key atrule">id-type</span><span class="token punctuation">:</span> uuid
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> com.mamba.pojo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义pojo， mapper，service</p><p>在serviceImpl类上，使用注解@DS标识操作的数据源</p></li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>dynamic<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">DS</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span><span class="token class-name">ServiceImpl</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">UserMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">UserService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName UserServiceImpl
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/15 15:39
 * @Version 1.0
 */</span>
<span class="token annotation punctuation">@DS</span><span class="token punctuation">(</span><span class="token string">&quot;master&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserMapper</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectMapById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userMapper<span class="token punctuation">.</span><span class="token function">selectMapById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>dynamic<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">DS</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span><span class="token class-name">ServiceImpl</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">BookMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">Book</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>mamba<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">BookService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @ClassName BookServiceImpl
 * @Description TODO
 * @Author mamba
 * @Date 2022/9/19 11:03
 * @Version 1.0
 */</span>

<span class="token annotation punctuation">@DS</span><span class="token punctuation">(</span><span class="token string">&quot;slave_1&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BookMapper</span><span class="token punctuation">,</span> <span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">BookService</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Book</span> book <span class="token operator">=</span> bookService<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">/*
    * 
    * JDBC Connection [HikariProxyConnection@1334391583 wrapping com.mysql.cj.jdbc.ConnectionImpl@618ff5c2] will not be managed by Spring
    ==&gt;  Preparing: SELECT id,name,password,utype FROM user WHERE id=?
    ==&gt; Parameters: 8(Integer)
    &lt;==    Columns: id, name, password, utype
    &lt;==        Row: 8, abc, 123456, 5
    &lt;==      Total: 1
    Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@411c6d44]
    Creating a new SqlSession
    SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@8bd86c8] was not registered for synchronization because synchronization is not active
    JDBC Connection [HikariProxyConnection@83532470 wrapping com.mysql.cj.jdbc.ConnectionImpl@2d3ef181] will not be managed by Spring
    ==&gt;  Preparing: SELECT id,name,count,detail FROM book WHERE id=?
    ==&gt; Parameters: 1(Integer)
    &lt;==    Columns: id, name, count, detail
    &lt;==        Row: 1, JAVA, 50, 入门级别
    &lt;==      Total: 1
    Closing non transactional SqlSession [org.apache.ibatis.session.defaults.DefaultSqlSession@8bd86c8]
    User(id=8, name=abc, password=123456, utype=5)
    Book(id=1, name=JAVA, count=50, detail=入门级别)
    
    * 
    * 
    * */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过日志可以发现，JDBC创建了两个SqlSession访问两个数据源</p><p>@DS可以作用域类，也可以作用于方法</p><h2 id="mybatisx插件" tabindex="-1"><a class="header-anchor" href="#mybatisx插件" aria-hidden="true">#</a> MybatisX插件</h2><p>虽然MybatisPlus提供了BaseMapper和ServiceImpl模板，提供了一系列基础的sql操作，提高了开发效率，但也远不能满足开发需求</p><p>MybatisX是IDEA的快速开发插件</p><h4 id="对应mapper-xml-和-mapper" tabindex="-1"><a class="header-anchor" href="#对应mapper-xml-和-mapper" aria-hidden="true">#</a> 对应mapper.xml 和 Mapper</h4><h4 id="代码快速生成" tabindex="-1"><a class="header-anchor" href="#代码快速生成" aria-hidden="true">#</a> 代码快速生成</h4><p>打开DataBase，右键表，选择MybatisX-Generator</p><h4 id="快速生成crud" tabindex="-1"><a class="header-anchor" href="#快速生成crud" aria-hidden="true">#</a> 快速生成CRUD</h4>`,152);function j(I,x){const a=c("ExternalLinkIcon");return i(),o("div",null,[u,n("p",null,[s("官网："),n("a",r,[s("MyBatis-Plus (baomidou.com)"),e(a)])]),d,n("ul",null,[n("li",null,[s("通用 Service CRUD 封装"),n("a",k,[s("IService (opens new window)"),e(a)]),s("接口，进一步封装 CRUD 采用 "),m,s(),v,s(),b,s(),g,s(" 前缀命名方式区分 "),y,s(" 层避免混淆，")]),w,h,n("li",null,[s("对象 "),f,s(" 为 "),n("a",S,[s("条件构造器"),e(a)])])]),q])}const M=t(l,[["render",j],["__file","MybatisPlus.html.vue"]]);export{M as default};
