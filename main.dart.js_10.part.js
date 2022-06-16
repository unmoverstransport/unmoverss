self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={aji:function aji(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},ajj:function ajj(){},EN:function EN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},Re:function Re(){},xr:function xr(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.oM$=d
_.aY$=e
_.a1$=f
_.a=null},Qf:function Qf(d,e,f,g,h,i,j){var _=this
_.ci=d
_.v=e
_.J=f
_.bc=$
_.bk=!0
_.by$=g
_.a_$=h
_.cb$=i
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
aC9(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.ag
if(m==null){x=f==null&&n===C.ag
x=x?E.na:w}else x=m
return new A.BM(h,new D.ti(i,j,d,!0,!0,w),l,n,!1,f,v,x,w,!1,w,0,w,j,g,E.fF,w,C.W,k)},
BM:function BM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
Rd:function Rd(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,E
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
D=c[19]
E=c[21]
A.aji.prototype={
Sk(d){var x=this.c
return d.r3(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bB(B.b(["scrollOffset: "+B.h(x.a),"crossAxisOffset: "+B.h(x.b),"mainAxisExtent: "+B.h(x.c),"crossAxisExtent: "+B.h(x.d)],y.x),", ")+")"}}
A.ajj.prototype={}
A.EN.prototype={
SA(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.h1(d/x)-1)
return 0},
a4B(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
yL(d){var x=this,w=x.a,v=C.f.bd(d,w)
return new A.aji(C.f.hp(d,w)*x.b,x.a4B(v*x.c),x.d,x.e)},
Oc(d){var x=this.b
return x*(C.f.hp(d-1,this.a)+1)-(x-this.d)}}
A.Re.prototype={}
A.xr.prototype={
j(d){return"crossAxisOffset="+B.h(this.w)+"; "+this.WH(0)}}
A.Qf.prototype={
dR(d){if(!(d.e instanceof A.xr))d.e=new A.xr(!1,null,null)},
sT2(d){var x=this
if(x.ci===d)return
if(B.z(d)!==B.z(x.ci)||d.iM(x.ci))x.X()
x.ci=d},
of(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
br(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.w.prototype.gZ.call(a3)),a6=a3.v
a6.rx=!1
x=a5.d
w=x+a5.z
v=w+a5.Q
u=a3.ci.um(a5)
t=u.b
s=t>1e-10?u.a*C.d.hp(w,t):0
r=isFinite(v)?u.SA(v):a4
t=a3.a_$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a3.cb$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.f.H(s-t,0,a3.by$)
a3.mk(o,r==null?0:C.f.H(p-r,0,a3.by$))}else a3.mk(0,0)
n=u.yL(s)
m=n.a
l=m+n.c
if(a3.a_$==null)if(!a3.Co(s,m)){k=u.Oc(a6.gre())
a3.fy=D.j8(a4,!1,a4,a4,k,0,0,k,a4)
a6.mt()
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
for(;j>=s;--j){h=u.yL(j)
p=h.c
g=a3.Q0(a5.r3(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.a_$
p.toString
p.ee(0,n.Sk(a5))
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
p=B.j(a3).i("al.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.yL(j)
e=h.c
d=a5.r3(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).a1$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.PZ(d,i)
if(g==null)break}else g.ee(0,d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.w=h.b
l=Math.max(l,a0+e);++j
i=g}t=a3.cb$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a6.DE(a5,s,t,m,l)
a2=a3.ih(a5,Math.min(x,m),l)
a3.fy=D.j8(a3.od(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.rx=!0
a6.mt()}}
A.BM.prototype={
NR(d){return new A.Rd(this.p3,this.p4,null)}}
A.Rd.prototype={
aH(d){var x=new A.Qf(this.f,y.v.a(d),B.L(y.e,y.g),0,null,null,B.aq())
x.gap()
x.gaE()
x.CW=!1
return x},
aK(d,e){e.sT2(this.f)},
DD(d,e,f,g,h){var x,w
this.WI(d,e,f,g,h)
x=this.f.um(d)
w=this.d.goG()
w.toString
w=x.Oc(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.C,[A.aji,A.ajj,A.Re])
w(A.EN,A.ajj)
w(A.xr,D.eJ)
w(A.Qf,D.lC)
w(A.BM,D.Ae)
w(A.Rd,D.kn)})()
B.fq(b.typeUniverse,JSON.parse('{"xr":{"eJ":[],"nh":[],"ej":["A"],"jU":[],"cP":[]},"Qf":{"lC":[],"ci":[],"al":["A","eJ"],"w":[],"Q":[],"ap":[],"al.1":"eJ","al.0":"A"},"BM":{"a1":[],"d":[]},"Rd":{"kn":[],"av":[],"d":[]}}'))
var y={x:B.K("n<i>"),g:B.K("A"),z:B.K("lM"),t:B.K("xr"),v:B.K("pj"),c:B.K("eJ"),e:B.K("l")}}
$__dart_deferred_initializers__["nG4vzNRxKUz2ZN+roosvulbb30k="] = $__dart_deferred_initializers__.current
