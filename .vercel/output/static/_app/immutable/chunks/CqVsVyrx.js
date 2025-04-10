import{t as y,a as _}from"./DrjBu-Pq.js";import"./CeIxqNZp.js";import{f as x,s,a1 as n,a2 as a,$ as F}from"./CnMiI8Eq.js";import{h as t}from"./fXp2Zi7U.js";const S={title:"Future CSS Features",date:"2023-06-26T00:00:00.000Z",categories:["frontend"]},{title:z,date:G,categories:I}=S;var C=y('<section><h2 id="anchor-positioning"><a href="#anchor-positioning">Anchor Positioning</a></h2><pre class="language-css"><!></pre></section> <section><h2 id="viewtransition-api"><a href="#viewtransition-api">ViewTransition API</a></h2><pre class="language-css"><!></pre></section> <section><h2 id="variable-fonts"><a href="#variable-fonts">Variable Fonts</a></h2><pre class="language-css"><!></pre></section> <section><h2 id="text-wrap-balance"><a href="#text-wrap-balance">text-wrap: balance</a></h2><pre class="language-css"><!></pre></section> <section><h2 id="line-clamp"><a href="#line-clamp">line-clamp</a></h2><pre class="language-css"><!></pre></section> <section><h2 id="css-warpped-2023"><a href="#css-warpped-2023">CSS Warpped 2023</a></h2><p><a href="https://developer.chrome.com/blog/css-wrapped-2023" rel="nofollow noopener noreferrer external" target="_blank">https://developer.chrome.com/blog/css-wrapped-2023</a></p></section> <section><h2 id="gradient"><a href="#gradient">Gradient</a></h2><p><a href="https://gradient.style" rel="nofollow noopener noreferrer external" target="_blank">https://gradient.style</a></p></section> <section><h2 id="learn-css"><a href="#learn-css">Learn CSS</a></h2><p><a href="https://web.dev/learn/css" rel="nofollow noopener noreferrer external" target="_blank">https://web.dev/learn/css</a></p></section>',1);function L(h){var r=C(),p=x(r),i=s(n(p)),f=n(i);t(f,()=>`<code class="language-css"><span class="token selector">.slider-link</span> <span class="token punctuation">&#123;</span>
  <span class="token property">anchor-name</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--is<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code>`),a(i),a(p);var e=s(p,2),l=s(n(e)),m=n(l);t(m,()=>`<code class="language-css"><span class="token selector">::view-transition-old(main-image),
::view-transition-new(main-image)</span> <span class="token punctuation">&#123;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> right top<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">::view-transition-new(main-image)</span> <span class="token punctuation">&#123;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> 400ms ease-out both grow<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">figure</span> <span class="token punctuation">&#123;</span>
  <span class="token property">view-transition-name</span><span class="token punctuation">:</span> main-image<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(l),a(e);var o=s(e,2),u=s(n(o)),v=n(u);t(v,()=>`<code class="language-css"><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Fraunces"</span><span class="token punctuation">;</span>
  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"fraunces.woff2"</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"woff2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 200 700<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">h2</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Fraunces"</span><span class="token punctuation">;</span>
  <span class="token property">font-variation-settings</span><span class="token punctuation">:</span> <span class="token string">"wght"</span> 375<span class="token punctuation">,</span> <span class="token string">"SOFT"</span> 100<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(u),a(o);var c=s(o,2),k=s(n(c)),w=n(k);t(w,()=>`<code class="language-css"><span class="token selector">.balanced</span> <span class="token punctuation">&#123;</span>
  <span class="token property">max-inline-size</span><span class="token punctuation">:</span> 50ch<span class="token punctuation">;</span>
  <span class="token property">text-wrap</span><span class="token punctuation">:</span> balance<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(k),a(c);var g=s(c,2),d=s(n(g)),b=n(d);t(b,()=>`<code class="language-css"><span class="token selector">p</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>  
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(d),a(g),F(6),_(h,r)}export{L as default,S as metadata};
