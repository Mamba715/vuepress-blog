import{_ as e,p as r,q as a,a1 as i}from"./framework-5866ffd3.js";const l={},t=i(`<h1 id="悲观锁和乐观锁" tabindex="-1"><a class="header-anchor" href="#悲观锁和乐观锁" aria-hidden="true">#</a> 悲观锁和乐观锁</h1><h2 id="基本思想" tabindex="-1"><a class="header-anchor" href="#基本思想" aria-hidden="true">#</a> 基本思想</h2><ul><li><p>悲观锁<br> 悲观锁悲观的认为每一次修改共享变量都是可能存在冲突的，所以每次访问的共享变量时，都会采取上锁。 也就是每次修改共享变量，都会上锁，阻塞其他线程，等操作完之后再允许其他线程访问</p><ul><li>优点<br> 可以保证共享变量的线程安全</li><li>缺点<br> 高并发场景下，频繁的上锁会大大增加线程阻塞的情况，造成性能降低 存在死锁问题</li></ul></li><li><p>乐观锁<br> 乐观锁则是乐观地认为每次操作共享变量，都不会存在竞争问题 线程可以直接执行修改等操作，在 <strong>提交操作时</strong>验证共享资源是否被其他线程修改，使用的CAS算法</p><ul><li>优点<br> 不存在锁竞争问题 提高性能</li><li>缺点<br> 如果竞争问题频繁发生，导致CAS自旋次数过多，也会造成CPU的额外开销 CAS算法具有 <strong>ABA</strong>问题（<code>共享变量被其他线程多次修改后变成原值</code>）,CAS自旋还是判定共享变量不存在竞争问题</li><li>CAS改进思路<br> 添加版本号或时间戳</li></ul></li></ul><h2 id="cas" tabindex="-1"><a class="header-anchor" href="#cas" aria-hidden="true">#</a> CAS</h2><pre><code>CAS算法设计三个操作数
</code></pre>`,5),c=[t];function n(d,o){return r(),a("div",null,c)}const h=e(l,[["render",n],["__file","悲观锁和乐观锁.html.vue"]]);export{h as default};
