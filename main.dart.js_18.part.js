self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={ans:function ans(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},ant:function ant(){},Gt:function Gt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},TF:function TF(){},yC:function yC(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.pD$=d
_.bJ$=e
_.af$=f
_.a=null},Sv:function Sv(d,e,f,g,h,i,j){var _=this
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
aGL(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.az
if(m==null){x=f==null&&n===C.az
x=x?E.oL:w}else x=m
return new A.D9(h,new G.Gs(i,j,d,!0,!0,w),l,n,!1,f,v,x,!1,w,j,g,E.hJ,w,C.I,k)},
D9:function D9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
TE:function TE(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,F,E,G
A=a.updateHolder(c[31],A)
C=c[2]
B=c[0]
D=c[41]
F=c[37]
E=c[48]
G=c[32]
A.ans.prototype={
VC(d){var x=this.c
return d.t5(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bA(B.b(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.ant.prototype={}
A.Gt.prototype={
VQ(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.d7(d/x)-1)
return 0},
a8f(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
A9(d){var x=this,w=x.a,v=C.f.bb(d,w)
return new A.ans(C.f.ft(d,w)*x.b,x.a8f(v*x.c),x.d,x.e)},
R1(d){var x=this.b
return x*(C.f.ft(d-1,this.a)+1)-(x-this.d)}}
A.TF.prototype={}
A.yC.prototype={
j(d){return"crossAxisOffset="+B.d(this.w)+"; "+this.ZZ(0)}}
A.Sv.prototype={
ed(d){if(!(d.e instanceof A.yC))d.e=new A.yC(!1,null,null)},
sWi(d){var x=this
if(x.dc===d)return
if(B.I(d)!==B.I(x.dc)||d.oh(x.dc))x.X()
x.dc=d},
pb(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bB(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.y.prototype.gZ.call(a3)),a6=a3.A
a6.rx=!1
x=a5.d
w=x+a5.z
v=w+a5.Q
u=a3.dc.vA(a5)
t=u.b
s=t>1e-10?u.a*C.e.ft(w,t):0
r=isFinite(v)?u.VQ(v):a4
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
a3.nc(o,r==null?0:C.f.H(p-r,0,a3.bV$))}else a3.nc(0,0)
n=u.A9(s)
m=n.a
l=m+n.c
if(a3.T$==null)if(!a3.Ev(s,m)){k=u.R1(a6.gth())
a3.fy=D.jT(a4,!1,a4,a4,k,0,0,k,a4)
a6.nk()
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
for(;j>=s;--j){h=u.A9(j)
p=h.c
g=a3.T2(a5.t5(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.T$
p.toString
p.em(0,n.VC(a5))
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
h=u.A9(j)
e=h.c
d=a5.t5(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).af$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.T0(d,i)
if(g==null)break}else g.em(0,d)
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
a1=a6.FN(a5,s,t,m,l)
a2=a3.j3(a5,Math.min(x,m),l)
a3.fy=D.jT(a3.p8(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.rx=!0
a6.nk()}}
A.D9.prototype={
QI(d){return new A.TE(this.p3,this.p4,null)}}
A.TE.prototype={
aL(d){var x=new A.Sv(this.f,y.v.a(d),B.L(y.e,y.g),0,null,null,B.au())
x.gaw()
x.gaH()
x.CW=!1
return x},
aN(d,e){e.sWi(this.f)},
FM(d,e,f,g,h){var x,w
this.a__(d,e,f,g,h)
x=this.f.vA(d)
w=this.d.gpy()
w.toString
w=x.R1(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.H,[A.ans,A.ant,A.TF])
w(A.Gt,A.ant)
w(A.yC,D.ep)
w(A.Sv,D.jP)
w(A.D9,F.Bt)
w(A.TE,D.jU)})()
B.cz(b.typeUniverse,JSON.parse('{"yC":{"ep":[],"mo":[],"f7":["J"],"kE":[],"d0":[]},"Sv":{"jP":[],"cA":[],"al":["J","ep"],"y":[],"U":[],"ap":[],"al.1":"ep","al.0":"J"},"D9":{"a0":[],"f":[]},"TE":{"jU":[],"aB":[],"f":[]}}'))
var y={x:B.z("k<i>"),g:B.z("J"),z:B.z("l3"),t:B.z("yC"),v:B.z("qf"),c:B.z("ep"),e:B.z("m")}}
$__dart_deferred_initializers__["Tl6CojlLrQ+HoLgSOzfycEiNcko="] = $__dart_deferred_initializers__.current
