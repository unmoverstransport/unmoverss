self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={ajk:function ajk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},ajl:function ajl(){},EQ:function EQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},Rf:function Rf(){},xt:function xt(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.oP$=d
_.bL$=e
_.a9$=f
_.a=null},Qg:function Qg(d,e,f,g,h,i,j){var _=this
_.cV=d
_.v=e
_.J=f
_.bb=$
_.bj=!0
_.bD$=g
_.Y$=h
_.aZ$=i
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
aCc(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.ag
if(m==null){x=f==null&&n===C.ag
x=x?E.nc:w}else x=m
return new A.BO(h,new D.tg(i,j,d,!0,!0,w),l,n,!1,f,v,x,w,!1,w,0,w,j,g,E.fG,w,C.W,k)},
BO:function BO(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
Re:function Re(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,E
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
D=c[19]
E=c[21]
A.ajk.prototype={
Sr(d){var x=this.c
return d.r7(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bw(B.b(["scrollOffset: "+B.h(x.a),"crossAxisOffset: "+B.h(x.b),"mainAxisExtent: "+B.h(x.c),"crossAxisExtent: "+B.h(x.d)],y.x),", ")+")"}}
A.ajl.prototype={}
A.EQ.prototype={
SH(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.h9(d/x)-1)
return 0},
a4I(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
yQ(d){var x=this,w=x.a,v=C.f.bc(d,w)
return new A.ajk(C.f.hx(d,w)*x.b,x.a4I(v*x.c),x.d,x.e)},
Oh(d){var x=this.b
return x*(C.f.hx(d-1,this.a)+1)-(x-this.d)}}
A.Rf.prototype={}
A.xt.prototype={
j(d){return"crossAxisOffset="+B.h(this.w)+"; "+this.WO(0)}}
A.Qg.prototype={
dW(d){if(!(d.e instanceof A.xt))d.e=new A.xt(!1,null,null)},
sT9(d){var x=this
if(x.cV===d)return
if(B.z(d)!==B.z(x.cV)||d.iU(x.cV))x.X()
x.cV=d},
oj(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bo(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.w.prototype.ga_.call(a3)),a6=a3.v
a6.rx=!1
x=a5.d
w=x+a5.z
v=w+a5.Q
u=a3.cV.ut(a5)
t=u.b
s=t>1e-10?u.a*C.d.hx(w,t):0
r=isFinite(v)?u.SH(v):a4
t=a3.Y$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a3.aZ$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.f.H(s-t,0,a3.bD$)
a3.mn(o,r==null?0:C.f.H(p-r,0,a3.bD$))}else a3.mn(0,0)
n=u.yQ(s)
m=n.a
l=m+n.c
if(a3.Y$==null)if(!a3.Ct(s,m)){k=u.Oh(a6.gri())
a3.fy=D.j8(a4,!1,a4,a4,k,0,0,k,a4)
a6.mw()
return}t=a3.Y$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a4
for(;j>=s;--j){h=u.yQ(j)
p=h.c
g=a3.Q5(a5.r7(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.Y$
p.toString
p.ej(0,n.Sr(a5))
i=a3.Y$
p=i.e
p.toString
t.a(p)
p.a=m
p.w=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.j(a3).i("al.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.yQ(j)
e=h.c
d=a5.r7(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).a9$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.Q3(d,i)
if(g==null)break}else g.ej(0,d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.w=h.b
l=Math.max(l,a0+e);++j
i=g}t=a3.aZ$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a6.DJ(a5,s,t,m,l)
a2=a3.ip(a5,Math.min(x,m),l)
a3.fy=D.j8(a3.oh(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.rx=!0
a6.mw()}}
A.BO.prototype={
NW(d){return new A.Re(this.p3,this.p4,null)}}
A.Re.prototype={
aF(d){var x=new A.Qg(this.f,y.v.a(d),B.L(y.e,y.g),0,null,null,B.aq())
x.gap()
x.gaD()
x.CW=!1
return x},
aI(d,e){e.sT9(this.f)},
DI(d,e,f,g,h){var x,w
this.WP(d,e,f,g,h)
x=this.f.ut(d)
w=this.d.goK()
w.toString
w=x.Oh(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.B,[A.ajk,A.ajl,A.Rf])
w(A.EQ,A.ajl)
w(A.xt,D.eJ)
w(A.Qg,D.lC)
w(A.BO,D.Ag)
w(A.Re,D.kn)})()
B.fs(b.typeUniverse,JSON.parse('{"xt":{"eJ":[],"nf":[],"ej":["A"],"jU":[],"cQ":[]},"Qg":{"lC":[],"cj":[],"al":["A","eJ"],"w":[],"Q":[],"ap":[],"al.1":"eJ","al.0":"A"},"BO":{"a2":[],"d":[]},"Re":{"kn":[],"av":[],"d":[]}}'))
var y={x:B.K("m<i>"),g:B.K("A"),z:B.K("lL"),t:B.K("xt"),v:B.K("pf"),c:B.K("eJ"),e:B.K("l")}}
$__dart_deferred_initializers__["7fx7ChtawtUNjHClW5lPBriCMtQ="] = $__dart_deferred_initializers__.current
