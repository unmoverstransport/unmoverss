self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={ajy:function ajy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},ajz:function ajz(){},F3:function F3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},Ry:function Ry(){},xH:function xH(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.oO$=d
_.bL$=e
_.a8$=f
_.a=null},Qy:function Qy(d,e,f,g,h,i,j){var _=this
_.cW=d
_.v=e
_.I=f
_.b9=$
_.bj=!0
_.bD$=g
_.Z$=h
_.aX$=i
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
aCr(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.am
if(m==null){x=f==null&&n===C.am
x=x?E.nl:w}else x=m
return new A.C2(h,new D.tw(i,j,d,!0,!0,w),l,n,!1,f,v,x,w,!1,w,0,w,j,g,E.fK,w,C.X,k)},
C2:function C2(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
Rx:function Rx(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,E
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
D=c[19]
E=c[21]
A.ajy.prototype={
Ss(d){var x=this.c
return d.r7(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bt(B.b(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.ajz.prototype={}
A.F3.prototype={
SI(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.jT(d/x)-1)
return 0},
a4K(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
yS(d){var x=this,w=x.a,v=C.f.ba(d,w)
return new A.ajy(C.f.hx(d,w)*x.b,x.a4K(v*x.c),x.d,x.e)},
Ol(d){var x=this.b
return x*(C.f.hx(d-1,this.a)+1)-(x-this.d)}}
A.Ry.prototype={}
A.xH.prototype={
j(d){return"crossAxisOffset="+B.d(this.w)+"; "+this.WQ(0)}}
A.Qy.prototype={
dW(d){if(!(d.e instanceof A.xH))d.e=new A.xH(!1,null,null)},
sTa(d){var x=this
if(x.cW===d)return
if(B.L(d)!==B.L(x.cW)||d.iS(x.cW))x.Y()
x.cW=d},
oj(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bn(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=y.z.a(B.w.prototype.ga_.call(a4)),a7=a4.v
a7.rx=!1
x=a6.d
w=x+a6.z
v=w+a6.Q
u=a4.cW.uu(a6)
t=u.b
s=t>1e-10?u.a*C.e.hx(w,t):0
r=isFinite(v)?u.SI(v):a5
t=a4.Z$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a4.aX$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.f.N(s-t,0,a4.bD$)
a4.mm(o,r==null?0:C.f.N(p-r,0,a4.bD$))}else a4.mm(0,0)
n=u.yS(s)
m=n.a
l=m+n.c
if(a4.Z$==null)if(!a4.Ct(s,m)){k=u.Ol(a7.gri())
a4.fy=D.jh(a5,!1,a5,a5,k,0,0,k,a5)
a7.mu()
return}t=a4.Z$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a5
for(;j>=s;--j){h=u.yS(j)
p=h.c
g=a4.Q7(a6.r7(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a4.Z$
p.toString
p.ej(0,n.Ss(a6))
i=a4.Z$
p=i.e
p.toString
t.a(p)
p.a=m
p.w=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.z(a4).i("ao.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.yS(j)
e=h.c
d=a6.r7(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).a8$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a4.Q5(d,i)
if(g==null)break}else g.ej(0,d)
a0=g.e
a0.toString
t.a(a0)
a1=h.a
a0.a=a1
a0.w=h.b
l=Math.max(l,a1+e);++j
i=g}t=a4.aX$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a2=a7.DK(a6,s,t,m,l)
a3=a4.io(a6,Math.min(x,m),l)
a4.fy=D.jh(a4.oh(a6,m,l),!0,a5,a5,a2,a3,0,a2,a5)
if(a2===l)a7.rx=!0
a7.mu()}}
A.C2.prototype={
O_(d){return new A.Rx(this.p3,this.p4,null)}}
A.Rx.prototype={
aE(d){var x=new A.Qy(this.f,y.v.a(d),B.M(y.e,y.g),0,null,null,B.as())
x.gao()
x.gaC()
x.CW=!1
return x},
aH(d,e){e.sTa(this.f)},
DJ(d,e,f,g,h){var x,w
this.WR(d,e,f,g,h)
x=this.f.uu(d)
w=this.d.goK()
w.toString
w=x.Ol(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.C,[A.ajy,A.ajz,A.Ry])
w(A.F3,A.ajz)
w(A.xH,D.eR)
w(A.Qy,D.lL)
w(A.C2,D.Aw)
w(A.Rx,D.ku)})()
B.fz(b.typeUniverse,JSON.parse('{"xH":{"eR":[],"no":[],"ep":["B"],"k0":[],"cU":[]},"Qy":{"lL":[],"cl":[],"ao":["B","eR"],"w":[],"T":[],"ar":[],"ao.1":"eR","ao.0":"B"},"C2":{"a6":[],"f":[]},"Rx":{"ku":[],"aw":[],"f":[]}}'))
var y={x:B.A("k<i>"),g:B.A("B"),z:B.A("lT"),t:B.A("xH"),v:B.A("ph"),c:B.A("eR"),e:B.A("m")}}
$__dart_deferred_initializers__["T8DZCDKid0yqMrpBP1A4OmsVqt8="] = $__dart_deferred_initializers__.current
