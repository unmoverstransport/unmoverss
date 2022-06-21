self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={an1:function an1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},an2:function an2(){},Gq:function Gq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},TC:function TC(){},yt:function yt(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.pO$=d
_.bV$=e
_.ab$=f
_.a=null},Sx:function Sx(d,e,f,g,h,i,j){var _=this
_.cA=d
_.v=e
_.H=f
_.bc=$
_.bf=!0
_.bM$=g
_.a_$=h
_.b8$=i
_.fy=null
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=j
_.ch=!1
_.CW=$
_.cx=!0
_.cy=null
_.db=!0
_.dx=null
_.a=0
_.c=_.b=null},
aGf(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.aH
if(m==null){x=f==null&&n===C.aH
x=x?E.oy:w}else x=m
return new A.D4(h,new D.Gp(i,j,d,!0,!0,w),l,n,!1,f,v,x,w,!1,w,0,w,j,g,E.hF,w,C.a5,k)},
D4:function D4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
_.p3=d
_.p4=e
_.cx=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.w=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.as=q
_.at=r
_.ax=s
_.ay=t
_.ch=u
_.a=v},
TB:function TB(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,E
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
D=c[19]
E=c[22]
A.an1.prototype={
VO(d){var x=this.c
return d.pd(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bC(B.b(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.an2.prototype={}
A.Gq.prototype={
W1(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.dh(d/x)-1)
return 0},
a8B(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Ab(d){var x=this,w=x.a,v=C.f.bg(d,w)
return new A.an1(C.f.hY(d,w)*x.b,x.a8B(v*x.c),x.d,x.e)},
R7(d){var x=this.b
return x*(C.f.hY(d-1,this.a)+1)-(x-this.d)}}
A.TC.prototype={}
A.yt.prototype={
j(d){return"crossAxisOffset="+B.d(this.w)+"; "+this.a_9(0)}}
A.Sx.prototype={
eh(d){if(!(d.e instanceof A.yt))d.e=new A.yt(!1,null,null)},
sWt(d){var x=this
if(x.cA===d)return
if(B.A(d)!==B.A(x.cA)||d.js(x.cA))x.X()
x.cA=d},
pm(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bx(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.w.prototype.gT.call(a3)),a6=a3.v
a6.rx=!1
x=a5.d
w=x+a5.z
v=w+a5.Q
u=a3.cA.vy(a5)
t=u.b
s=t>1e-10?u.a*C.e.hY(w,t):0
r=isFinite(v)?u.W1(v):a4
t=a3.a_$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a3.b8$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.f.J(s-t,0,a3.bM$)
a3.nh(o,r==null?0:C.f.J(p-r,0,a3.bM$))}else a3.nh(0,0)
n=u.Ab(s)
m=n.a
l=m+n.c
if(a3.a_$==null)if(!a3.Ey(s,m)){k=u.R7(a6.gti())
a3.fy=D.iY(a4,!1,a4,a4,k,0,0,0,k,a4)
a6.nq()
return}t=a3.a_$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a4
for(;j>=s;--j){h=u.Ab(j)
p=h.c
g=a3.Te(a5.pd(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.a_$
p.toString
p.ep(0,n.VO(a5))
i=a3.a_$
p=i.e
p.toString
t.a(p)
p.a=m
p.w=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.j(a3).i("am.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.Ab(j)
e=h.c
d=a5.pd(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).ab$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.Tc(d,i)
if(g==null)break}else g.ep(0,d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.w=h.b
l=Math.max(l,a0+e);++j
i=g}t=a3.b8$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a6.FS(a5,s,t,m,l)
a2=a3.j_(a5,Math.min(x,m),l)
a3.fy=D.iY(a3.pj(a5,m,l),!0,a4,a4,a1,0,a2,0,a1,a4)
if(a1===l)a6.rx=!0
a6.nq()}}
A.D4.prototype={
QM(d){return new A.TB(this.p3,this.p4,null)}}
A.TB.prototype={
aK(d){var x=new A.Sx(this.f,y.v.a(d),B.F(y.e,y.g),0,null,null,B.ar())
x.gaq()
x.gaH()
x.CW=!1
return x},
aL(d,e){e.sWt(this.f)},
FR(d,e,f,g,h){var x,w
this.a_a(d,e,f,g,h)
x=this.f.vy(d)
w=this.d.gpJ()
w.toString
w=x.R7(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.C,[A.an1,A.an2,A.TC])
w(A.Gq,A.an2)
w(A.yt,D.f6)
w(A.Sx,D.m1)
w(A.D4,D.Bn)
w(A.TB,D.kR)})()
B.fO(b.typeUniverse,JSON.parse('{"yt":{"f6":[],"nK":[],"eY":["B"],"kt":[],"cZ":[]},"Sx":{"m1":[],"cs":[],"am":["B","f6"],"w":[],"S":[],"ak":[],"am.1":"f6","am.0":"B"},"D4":{"a5":[],"e":[]},"TB":{"kR":[],"aB":[],"e":[]}}'))
var y={x:B.K("k<i>"),g:B.K("B"),z:B.K("mc"),t:B.K("yt"),v:B.K("q_"),c:B.K("f6"),e:B.K("m")}}
$__dart_deferred_initializers__["Y6bpJHnwbyy2p1YfCTsL4/ZdBaA="] = $__dart_deferred_initializers__.current
