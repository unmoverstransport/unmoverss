self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={anR:function anR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},anS:function anS(){},GD:function GD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},TP:function TP(){},yQ:function yQ(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.pH$=d
_.bK$=e
_.af$=f
_.a=null},SG:function SG(d,e,f,g,h,i,j){var _=this
_.dd=d
_.A=e
_.I=f
_.be=$
_.bh=!0
_.bV$=g
_.U$=h
_.bO$=i
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
aI0(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.aB
if(m==null){x=f==null&&n===C.aB
x=x?E.p0:w}else x=m
return new A.Di(h,new G.GC(i,j,d,!0,!0,w),l,n,!1,f,v,x,!1,w,j,g,E.hT,w,C.I,k)},
Di:function Di(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
TO:function TO(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,F,E,G
A=a.updateHolder(c[44],A)
C=c[2]
B=c[0]
D=c[55]
F=c[51]
E=c[64]
G=c[46]
A.anR.prototype={
VI(d){var x=this.c
return d.t8(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bA(B.b(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.anS.prototype={}
A.GD.prototype={
VW(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.d8(d/x)-1)
return 0},
a8p(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Ac(d){var x=this,w=x.a,v=C.f.bb(d,w)
return new A.anR(C.f.ft(d,w)*x.b,x.a8p(v*x.c),x.d,x.e)},
R9(d){var x=this.b
return x*(C.f.ft(d-1,this.a)+1)-(x-this.d)}}
A.TP.prototype={}
A.yQ.prototype={
j(d){return"crossAxisOffset="+B.d(this.w)+"; "+this.a_4(0)}}
A.SG.prototype={
eg(d){if(!(d.e instanceof A.yQ))d.e=new A.yQ(!1,null,null)},
sWo(d){var x=this
if(x.dd===d)return
if(B.I(d)!==B.I(x.dd)||d.oj(x.dd))x.X()
x.dd=d},
pf(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bB(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.z.prototype.ga_.call(a3)),a6=a3.A
a6.rx=!1
x=a5.d
w=x+a5.z
v=w+a5.Q
u=a3.dd.vC(a5)
t=u.b
s=t>1e-10?u.a*C.e.ft(w,t):0
r=isFinite(v)?u.VW(v):a4
t=a3.U$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a3.bO$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.f.H(s-t,0,a3.bV$)
a3.nf(o,r==null?0:C.f.H(p-r,0,a3.bV$))}else a3.nf(0,0)
n=u.Ac(s)
m=n.a
l=m+n.c
if(a3.U$==null)if(!a3.EB(s,m)){k=u.R9(a6.gtj())
a3.fy=D.k3(a4,!1,a4,a4,k,0,0,k,a4)
a6.nm()
return}t=a3.U$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a4
for(;j>=s;--j){h=u.Ac(j)
p=h.c
g=a3.T7(a5.t8(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.U$
p.toString
p.ep(0,n.VI(a5))
i=a3.U$
p=i.e
p.toString
t.a(p)
p.a=m
p.w=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.l(a3).i("ap.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.Ac(j)
e=h.c
d=a5.t8(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).af$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.T5(d,i)
if(g==null)break}else g.ep(0,d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.w=h.b
l=Math.max(l,a0+e);++j
i=g}t=a3.bO$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a6.FU(a5,s,t,m,l)
a2=a3.j5(a5,Math.min(x,m),l)
a3.fy=D.k3(a3.pb(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.rx=!0
a6.nm()}}
A.Di.prototype={
QP(d){return new A.TO(this.p3,this.p4,null)}}
A.TO.prototype={
aM(d){var x=new A.SG(this.f,y.v.a(d),B.L(y.e,y.g),0,null,null,B.aw())
x.gaw()
x.gaH()
x.CW=!1
return x},
aO(d,e){e.sWo(this.f)},
FT(d,e,f,g,h){var x,w
this.a_5(d,e,f,g,h)
x=this.f.vC(d)
w=this.d.gpC()
w.toString
w=x.R9(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.H,[A.anR,A.anS,A.TP])
w(A.GD,A.anS)
w(A.yQ,D.ey)
w(A.SG,D.jZ)
w(A.Di,F.BF)
w(A.TO,D.k4)})()
B.bG(b.typeUniverse,JSON.parse('{"yQ":{"ey":[],"mA":[],"fi":["J"],"kN":[],"d6":[]},"SG":{"jZ":[],"cG":[],"ap":["J","ey"],"z":[],"V":[],"at":[],"ap.1":"ey","ap.0":"J"},"Di":{"a0":[],"e":[]},"TO":{"k4":[],"aB":[],"e":[]}}'))
var y={x:B.v("k<i>"),g:B.v("J"),z:B.v("ld"),t:B.v("yQ"),v:B.v("qo"),c:B.v("ey"),e:B.v("m")}}
$__dart_deferred_initializers__["BzXOhod9VG6PCtttaFr38THtxLs="] = $__dart_deferred_initializers__.current
