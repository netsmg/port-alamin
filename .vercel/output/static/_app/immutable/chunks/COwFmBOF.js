import{t as I,a as O}from"./DrjBu-Pq.js";import"./CeIxqNZp.js";import{f as R,s as a,a1 as s,a2 as n}from"./CnMiI8Eq.js";import{h as t}from"./fXp2Zi7U.js";const j={title:"New CSS interaction features",date:"2024-09-08T00:00:00.000Z",categories:["frontend"]},{title:V,date:X,categories:Z}=j;var q=I('<section><h2 id="scroll-snap"><a href="#scroll-snap">Scroll Snap</a></h2><pre class="language-css"><!></pre></section> <section><h2 id="overscroll-behavior"><a href="#overscroll-behavior">overscroll-behavior</a></h2><pre class="language-css"><!></pre></section> <section><h2 id="scroll-behavior"><a href="#scroll-behavior">scroll-behavior</a></h2><pre class="language-css"><!></pre></section> <section><h2 id="scrollbar-gutter"><a href="#scrollbar-gutter">scrollbar-gutter</a></h2><pre class="language-css"><!></pre></section> <section><h2 id="viewtransition-api"><a href="#viewtransition-api">ViewTransition API</a></h2><pre class="language-css"><!></pre></section> <section><h2 id="scroll-timeline"><a href="#scroll-timeline">scroll-timeline</a></h2><pre class="language-css"><!></pre></section> <section><h2 id="view-timeline"><a href="#view-timeline">view-timeline</a></h2><pre class="language-css"><!></pre></section> <section><h2 id="discrete-properties-animations"><a href="#discrete-properties-animations">Discrete Properties Animations</a></h2><p>Animate to and from properties such as display: none</p><pre class="language-css"><!></pre></section>',1);function z(w){var u=q(),p=R(u),k=a(s(p)),b=s(k);t(b,()=>`<code class="language-css"><span class="token selector">.scroller</span> <span class="token punctuation">&#123;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
  <span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> y mandatory<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.scroller section</span> <span class="token punctuation">&#123;</span>
  <span class="token property">scroll-snap-align</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),n(k),n(p);var o=a(p,2),v=a(s(o)),T=s(v);t(T,()=>`<code class="language-css"><span class="token selector">.foo</span> <span class="token punctuation">&#123;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">overscroll-behavior-y</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),n(v),n(o);var e=a(o,2),g=a(s(e)),E=s(g);t(E,()=>`<code class="language-css"><span class="token selector">.foo</span> <span class="token punctuation">&#123;</span>
  <span class="token property">scroll-behavior</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">scroll-behavior</span><span class="token punctuation">:</span> smooth<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),n(g),n(e);var c=a(e,2),d=a(s(c)),S=s(d);t(S,()=>`<code class="language-css"><span class="token selector">.container</span> <span class="token punctuation">&#123;</span>
  <span class="token property">scrollbar-gutter</span><span class="token punctuation">:</span> stable<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),n(d),n(c);var l=a(c,2),m=a(s(l)),A=s(m);t(A,()=>`<code class="language-css"><span class="token selector">::view-transition-old(main-image),
::view-transition-new(main-image)</span> <span class="token punctuation">&#123;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> right top<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">::view-transition-new(main-image)</span> <span class="token punctuation">&#123;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> 400ms ease-out both grow<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">figure</span> <span class="token punctuation">&#123;</span>
  <span class="token property">view-transition-name</span><span class="token punctuation">:</span> main-image<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),n(m),n(l);var i=a(l,2),h=a(s(i)),x=s(h);t(x,()=>`<code class="language-css"><span class="token selector">#container</span> <span class="token punctuation">&#123;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
  <span class="token property">scroll-timeline</span><span class="token punctuation">:</span> --squareTimeline y<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>    </code>`),n(h),n(i);var r=a(i,2),y=a(s(r)),N=s(y);t(N,()=>`<code class="language-css"><span class="token selector">.animation</span> <span class="token punctuation">&#123;</span>
  <span class="token property">view-timeline</span><span class="token punctuation">:</span> --subjectReveal block<span class="token punctuation">;</span>
  <span class="token property">animation-name</span><span class="token punctuation">:</span> appear<span class="token punctuation">;</span>
  <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1ms<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
</code>`),n(y),n(r);var f=a(r,2),_=a(s(f),2),P=s(_);t(P,()=>`<code class="language-css"><span class="token comment">/*   IS-OPEN STATE   */</span>
<span class="token selector">dialog[open]</span> <span class="token punctuation">&#123;</span>
  <span class="token property">translate</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/*   EXIT STATE   */</span>
<span class="token selector">dialog</span> <span class="token punctuation">&#123;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> translate 0.7s ease-out<span class="token punctuation">,</span> display 0.7s ease-out allow-discrete<span class="token punctuation">;</span>
  <span class="token property">translate</span><span class="token punctuation">:</span> 0 100vh<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/*   0. BEFORE-OPEN STATE   */</span>
<span class="token atrule"><span class="token rule">@starting-style</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">dialog[open]</span> <span class="token punctuation">&#123;</span>
    <span class="token property">translate</span><span class="token punctuation">:</span> 0 100vh<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
</code>`),n(_),n(f),O(w,u)}export{z as default,j as metadata};
