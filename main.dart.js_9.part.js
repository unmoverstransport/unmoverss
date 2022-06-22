self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={anS:function anS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},anT:function anT(){},GI:function GI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},U4:function U4(){},yL:function yL(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.q3$=d
_.bZ$=e
_.a8$=f
_.a=null},SW:function SW(d,e,f,g,h,i,j){var _=this
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
aHj(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.as
if(m==null){x=f==null&&n===C.as
x=x?E.oN:w}else x=m
return new A.Dl(h,new A.GH(i,j,d,!0,!0,w),l,n,!1,f,v,x,w,!1,w,0,w,j,g,E.f1,w,C.a2,k)},
Dl:function Dl(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
GH:function GH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.w=i},
U3:function U3(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,E
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
D=c[20]
E=c[23]
A.anS.prototype={
Wz(d){var x=this.c
return d.pq(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bE(B.b(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.anT.prototype={}
A.GI.prototype={
WN(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.dg(d/x)-1)
return 0},
a9d(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
AJ(d){var x=this,w=x.a,v=C.f.bg(d,w)
return new A.anS(C.f.fF(d,w)*x.b,x.a9d(v*x.c),x.d,x.e)},
RW(d){var x=this.b
return x*(C.f.fF(d-1,this.a)+1)-(x-this.d)}}
A.U4.prototype={}
A.yL.prototype={
j(d){return"crossAxisOffset="+B.d(this.w)+"; "+this.a_U(0)}}
A.SW.prototype={
e7(d){if(!(d.e instanceof A.yL))d.e=new A.yL(!1,null,null)},
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
A.Dl.prototype={
Rz(d){return new A.U3(this.p3,this.p4,null)}}
A.GH.prototype={
Tk(d){return null},
tw(d,e,f){var x,w,v,u,t,s,r,q,p=null
if(f>=0){u=this.b
u=u!=null&&f>=u}else u=!0
if(u)return p
x=null
try{x=this.a.$2(e,f)}catch(t){w=B.as(t)
v=B.aQ(t)
s=new B.bz(w,v,"widgets library",B.b3("building"),p,!1)
B.cP(s)
x=B.CV(s)}if(x==null)return p
if(x.a!=null){u=x.a
u.toString
r=new D.AF(u)}else r=p
u=x
x=new B.j3(u,p)
q=D.aJc(x,f)
if(q!=null)x=new D.DC(q,x,p)
if(this.c)x=new D.vL(x,p)
return new B.xm(x,r)},
gpZ(){return this.b},
JE(d){return!0}}
A.U3.prototype={
aJ(d){var x=new A.SW(this.f,y.v.a(d),B.K(y.e,y.g),0,null,null,B.ao())
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
x(B.I,[A.anS,A.anT,A.U4])
w(A.GI,A.anT)
w(A.yL,D.ev)
w(A.SW,D.kV)
w(A.Dl,D.BI)
w(A.GH,D.TZ)
w(A.U3,D.jS)})()
B.fv(b.typeUniverse,JSON.parse('{"yL":{"ev":[],"nV":[],"f3":["H"],"kF":[],"cZ":[]},"SW":{"kV":[],"c1":[],"al":["H","ev"],"w":[],"R":[],"aj":[],"al.1":"ev","al.0":"H"},"Dl":{"a4":[],"f":[]},"U3":{"jS":[],"av":[],"f":[]}}'))
var y={x:B.L("l<j>"),g:B.L("H"),z:B.L("mm"),t:B.L("yL"),v:B.L("qa"),c:B.L("ev"),e:B.L("n")}}
$__dart_deferred_initializers__["XIsJSsWnmzlscntSeF+/SKASjQw="] = $__dart_deferred_initializers__.current
