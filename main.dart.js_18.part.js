self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={ann:function ann(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},ano:function ano(){},Gr:function Gr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},TA:function TA(){},yB:function yB(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.pD$=d
_.bJ$=e
_.af$=f
_.a=null},Sq:function Sq(d,e,f,g,h,i,j){var _=this
_.dc=d
_.A=e
_.I=f
_.be=$
_.bh=!0
_.bV$=g
_.T$=h
_.bN$=i
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
aGH(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.az
if(m==null){x=f==null&&n===C.az
x=x?E.oM:w}else x=m
return new A.D7(h,new G.Gq(i,j,d,!0,!0,w),l,n,!1,f,v,x,!1,w,j,g,E.hN,w,C.I,k)},
D7:function D7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.p3=d
_.p4=e
_.cx=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.x=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.ay=q
_.ch=r
_.a=s},
Tz:function Tz(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,F,E,G
A=a.updateHolder(c[31],A)
C=c[2]
B=c[0]
D=c[41]
F=c[37]
E=c[48]
G=c[32]
A.ann.prototype={
VA(d){var x=this.c
return d.t4(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bA(B.b(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.ano.prototype={}
A.Gr.prototype={
VO(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.d7(d/x)-1)
return 0},
a8d(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
A7(d){var x=this,w=x.a,v=C.f.bb(d,w)
return new A.ann(C.f.fs(d,w)*x.b,x.a8d(v*x.c),x.d,x.e)},
R0(d){var x=this.b
return x*(C.f.fs(d-1,this.a)+1)-(x-this.d)}}
A.TA.prototype={}
A.yB.prototype={
j(d){return"crossAxisOffset="+B.d(this.w)+"; "+this.ZX(0)}}
A.Sq.prototype={
ed(d){if(!(d.e instanceof A.yB))d.e=new A.yB(!1,null,null)},
sWg(d){var x=this
if(x.dc===d)return
if(B.I(d)!==B.I(x.dc)||d.oh(x.dc))x.X()
x.dc=d},
pb(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bB(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.x.prototype.gZ.call(a3)),a6=a3.A
a6.rx=!1
x=a5.d
w=x+a5.z
v=w+a5.Q
u=a3.dc.vz(a5)
t=u.b
s=t>1e-10?u.a*C.e.fs(w,t):0
r=isFinite(v)?u.VO(v):a4
t=a3.T$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a3.bN$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.f.H(s-t,0,a3.bV$)
a3.na(o,r==null?0:C.f.H(p-r,0,a3.bV$))}else a3.na(0,0)
n=u.A7(s)
m=n.a
l=m+n.c
if(a3.T$==null)if(!a3.Et(s,m)){k=u.R0(a6.gtg())
a3.fy=D.jU(a4,!1,a4,a4,k,0,0,k,a4)
a6.ni()
return}t=a3.T$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a4
for(;j>=s;--j){h=u.A7(j)
p=h.c
g=a3.T1(a5.t4(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.T$
p.toString
p.el(0,n.VA(a5))
i=a3.T$
p=i.e
p.toString
t.a(p)
p.a=m
p.w=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.l(a3).i("al.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.A7(j)
e=h.c
d=a5.t4(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).af$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.T_(d,i)
if(g==null)break}else g.el(0,d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.w=h.b
l=Math.max(l,a0+e);++j
i=g}t=a3.bN$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a6.FL(a5,s,t,m,l)
a2=a3.j1(a5,Math.min(x,m),l)
a3.fy=D.jU(a3.p8(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.rx=!0
a6.ni()}}
A.D7.prototype={
QH(d){return new A.Tz(this.p3,this.p4,null)}}
A.Tz.prototype={
aL(d){var x=new A.Sq(this.f,y.v.a(d),B.L(y.e,y.g),0,null,null,B.au())
x.gaw()
x.gaH()
x.CW=!1
return x},
aN(d,e){e.sWg(this.f)},
FK(d,e,f,g,h){var x,w
this.ZY(d,e,f,g,h)
x=this.f.vz(d)
w=this.d.gpy()
w.toString
w=x.R0(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.H,[A.ann,A.ano,A.TA])
w(A.Gr,A.ano)
w(A.yB,D.ep)
w(A.Sq,D.jQ)
w(A.D7,F.Br)
w(A.Tz,D.jV)})()
B.cx(b.typeUniverse,JSON.parse('{"yB":{"ep":[],"mp":[],"f7":["J"],"kF":[],"d0":[]},"Sq":{"jQ":[],"cA":[],"al":["J","ep"],"x":[],"U":[],"aq":[],"al.1":"ep","al.0":"J"},"D7":{"a0":[],"f":[]},"Tz":{"jV":[],"aB":[],"f":[]}}'))
var y={x:B.z("k<i>"),g:B.z("J"),z:B.z("l4"),t:B.z("yB"),v:B.z("qe"),c:B.z("ep"),e:B.z("m")}}
$__dart_deferred_initializers__["Ep195MVahtN1hpNivX8yAZ6ZNbo="] = $__dart_deferred_initializers__.current
