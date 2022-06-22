self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={anU:function anU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},anV:function anV(){},GJ:function GJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},U5:function U5(){},yM:function yM(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.q3$=d
_.bZ$=e
_.a8$=f
_.a=null},SX:function SX(d,e,f,g,h,i,j){var _=this
_.cF=d
_.v=e
_.H=f
_.bb=$
_.be=!0
_.bI$=g
_.Z$=h
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
aHn(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.as
if(m==null){x=f==null&&n===C.as
x=x?E.oN:w}else x=m
return new A.Dm(h,new A.GI(i,j,d,!0,!0,w),l,n,!1,f,v,x,w,!1,w,0,w,j,g,E.f3,w,C.a2,k)},
Dm:function Dm(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
GI:function GI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.w=i},
U4:function U4(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,E
A=a.updateHolder(c[19],A)
C=c[2]
B=c[0]
D=c[21]
E=c[24]
A.anU.prototype={
Wz(d){var x=this.c
return d.pq(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bE(B.b(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.anV.prototype={}
A.GJ.prototype={
WN(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.dg(d/x)-1)
return 0},
a9d(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
AJ(d){var x=this,w=x.a,v=C.f.bg(d,w)
return new A.anU(C.f.fF(d,w)*x.b,x.a9d(v*x.c),x.d,x.e)},
RW(d){var x=this.b
return x*(C.f.fF(d-1,this.a)+1)-(x-this.d)}}
A.U5.prototype={}
A.yM.prototype={
j(d){return"crossAxisOffset="+B.d(this.w)+"; "+this.a_U(0)}}
A.SX.prototype={
e7(d){if(!(d.e instanceof A.yM))d.e=new A.yM(!1,null,null)},
sXe(d){var x=this
if(x.cF===d)return
if(B.G(d)!==B.G(x.cF)||d.jy(x.cF))x.U()
x.cF=d},
pA(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bx(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.w.prototype.gT.call(a3)),a6=a3.v
a6.rx=!1
x=a5.d
w=x+a5.z
v=w+a5.Q
u=a3.cF.vZ(a5)
t=u.b
s=t>1e-10?u.a*C.d.fF(w,t):0
r=isFinite(v)?u.WN(v):a4
t=a3.Z$
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
o=C.f.F(s-t,0,a3.bI$)
a3.nq(o,r==null?0:C.f.F(p-r,0,a3.bI$))}else a3.nq(0,0)
n=u.AJ(s)
m=n.a
l=m+n.c
if(a3.Z$==null)if(!a3.Fb(s,m)){k=u.RW(a6.gtE())
a3.fy=D.it(a4,!1,a4,a4,k,0,0,0,k,a4)
a6.nz()
return}t=a3.Z$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a4
for(;j>=s;--j){h=u.AJ(j)
p=h.c
g=a3.U_(a5.pq(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.Z$
p.toString
p.ei(0,n.Wz(a5))
i=a3.Z$
p=i.e
p.toString
t.a(p)
p.a=m
p.w=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.k(a3).i("al.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.AJ(j)
e=h.c
d=a5.pq(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).a8$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.TY(d,i)
if(g==null)break}else g.ei(0,d)
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
a1=a6.Gy(a5,s,t,m,l)
a2=a3.iu(a5,Math.min(x,m),l)
a3.fy=D.it(a3.px(a5,m,l),!0,a4,a4,a1,0,a2,0,a1,a4)
if(a1===l)a6.rx=!0
a6.nz()}}
A.Dm.prototype={
Rz(d){return new A.U4(this.p3,this.p4,null)}}
A.GI.prototype={
Tk(d){return null},
tw(d,e,f){var x,w,v,u,t,s,r,q,p=null
if(f>=0){u=this.b
u=u!=null&&f>=u}else u=!0
if(u)return p
x=null
try{x=this.a.$2(e,f)}catch(t){w=B.as(t)
v=B.aQ(t)
s=new B.bA(w,v,"widgets library",B.b3("building"),p,!1)
B.cQ(s)
x=B.CW(s)}if(x==null)return p
if(x.a!=null){u=x.a
u.toString
r=new D.AG(u)}else r=p
u=x
x=new B.j5(u,p)
q=D.aJg(x,f)
if(q!=null)x=new D.DD(q,x,p)
if(this.c)x=new D.vM(x,p)
return new B.xn(x,r)},
gpZ(){return this.b},
JE(d){return!0}}
A.U4.prototype={
aJ(d){var x=new A.SX(this.f,y.v.a(d),B.K(y.e,y.g),0,null,null,B.ao())
x.gam()
x.gaI()
x.CW=!1
return x},
aL(d,e){e.sXe(this.f)},
Gx(d,e,f,g,h){var x,w
this.a_V(d,e,f,g,h)
x=this.f.vZ(d)
w=this.d.gpZ()
w.toString
w=x.RW(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.I,[A.anU,A.anV,A.U5])
w(A.GJ,A.anV)
w(A.yM,D.ev)
w(A.SX,D.kV)
w(A.Dm,D.BJ)
w(A.GI,D.U_)
w(A.U4,D.jS)})()
B.fh(b.typeUniverse,JSON.parse('{"yM":{"ev":[],"nV":[],"f3":["H"],"kF":[],"cZ":[]},"SX":{"kV":[],"c1":[],"al":["H","ev"],"w":[],"R":[],"aj":[],"al.1":"ev","al.0":"H"},"Dm":{"a4":[],"f":[]},"U4":{"jS":[],"av":[],"f":[]}}'))
var y={x:B.L("l<j>"),g:B.L("H"),z:B.L("mm"),t:B.L("yM"),v:B.L("qb"),c:B.L("ev"),e:B.L("n")}}
$__dart_deferred_initializers__["bEAqUDtQNjsYHon9nazgS/ifUnU="] = $__dart_deferred_initializers__.current
