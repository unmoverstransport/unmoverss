self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={any:function any(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},anz:function anz(){},GC:function GC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},TW:function TW(){},yJ:function yJ(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.pZ$=d
_.bX$=e
_.ac$=f
_.a=null},SN:function SN(d,e,f,g,h,i,j){var _=this
_.cC=d
_.u=e
_.H=f
_.bd=$
_.bh=!0
_.bM$=g
_.Z$=h
_.b7$=i
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
aGU(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.aG
if(m==null){x=f==null&&n===C.aG
x=x?E.oN:w}else x=m
return new A.Di(h,new A.TQ(i,j,d,!0,!0,w),l,n,!1,f,v,x,w,!1,w,0,w,j,g,E.hJ,w,C.a3,k)},
Di:function Di(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
TQ:function TQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.w=i},
TV:function TV(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,E
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
D=c[20]
E=c[23]
A.any.prototype={
Wr(d){var x=this.c
return d.pn(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bE(B.b(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.anz.prototype={}
A.GC.prototype={
WF(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.dd(d/x)-1)
return 0},
a95(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
AD(d){var x=this,w=x.a,v=C.f.bi(d,w)
return new A.any(C.f.i9(d,w)*x.b,x.a95(v*x.c),x.d,x.e)},
RQ(d){var x=this.b
return x*(C.f.i9(d-1,this.a)+1)-(x-this.d)}}
A.TW.prototype={}
A.yJ.prototype={
j(d){return"crossAxisOffset="+B.d(this.w)+"; "+this.a_M(0)}}
A.SN.prototype={
e6(d){if(!(d.e instanceof A.yJ))d.e=new A.yJ(!1,null,null)},
sX6(d){var x=this
if(x.cC===d)return
if(B.B(d)!==B.B(x.cC)||d.jw(x.cC))x.U()
x.cC=d},
px(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bx(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.w.prototype.gT.call(a3)),a6=a3.u
a6.rx=!1
x=a5.d
w=x+a5.z
v=w+a5.Q
u=a3.cC.vR(a5)
t=u.b
s=t>1e-10?u.a*C.d.i9(w,t):0
r=isFinite(v)?u.WF(v):a4
t=a3.Z$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a3.b7$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.f.F(s-t,0,a3.bM$)
a3.nl(o,r==null?0:C.f.F(p-r,0,a3.bM$))}else a3.nl(0,0)
n=u.AD(s)
m=n.a
l=m+n.c
if(a3.Z$==null)if(!a3.F4(s,m)){k=u.RQ(a6.gtx())
a3.fy=D.iq(a4,!1,a4,a4,k,0,0,0,k,a4)
a6.nu()
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
for(;j>=s;--j){h=u.AD(j)
p=h.c
g=a3.TU(a5.pn(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.Z$
p.toString
p.eh(0,n.Wr(a5))
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
h=u.AD(j)
e=h.c
d=a5.pn(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).ac$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.TS(d,i)
if(g==null)break}else g.eh(0,d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.w=h.b
l=Math.max(l,a0+e);++j
i=g}t=a3.b7$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a6.Gs(a5,s,t,m,l)
a2=a3.is(a5,Math.min(x,m),l)
a3.fy=D.iq(a3.pu(a5,m,l),!0,a4,a4,a1,0,a2,0,a1,a4)
if(a1===l)a6.rx=!0
a6.nu()}}
A.Di.prototype={
Rt(d){return new A.TV(this.p3,this.p4,null)}}
A.TQ.prototype={
Te(d){return null},
tp(d,e,f){var x,w,v,u,t,s,r,q,p=null
if(f>=0){u=this.b
u=u!=null&&f>=u}else u=!0
if(u)return p
x=null
try{x=this.a.$2(e,f)}catch(t){w=B.as(t)
v=B.aU(t)
s=new B.by(w,v,"widgets library",B.b2("building"),p,!1)
B.cP(s)
x=B.CS(s)}if(x==null)return p
if(x.a!=null){u=x.a
u.toString
r=new D.AE(u)}else r=p
u=x
x=new B.j_(u,p)
q=D.aIN(x,f)
if(q!=null)x=new D.Dz(q,x,p)
if(this.c)x=new D.vI(x,p)
return new B.xk(x,r)},
gpU(){return this.b},
Jz(d){return!0}}
A.TV.prototype={
aJ(d){var x=new A.SN(this.f,y.v.a(d),B.K(y.e,y.g),0,null,null,B.ap())
x.gaq()
x.gaI()
x.CW=!1
return x},
aM(d,e){e.sX6(this.f)},
Gr(d,e,f,g,h){var x,w
this.a_N(d,e,f,g,h)
x=this.f.vR(d)
w=this.d.gpU()
w.toString
w=x.RQ(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.I,[A.any,A.anz,A.TW])
w(A.GC,A.anz)
w(A.yJ,D.f7)
w(A.SN,D.mb)
w(A.Di,D.BG)
w(A.TQ,D.TR)
w(A.TV,D.kY)})()
B.fp(b.typeUniverse,JSON.parse('{"yJ":{"f7":[],"nU":[],"eY":["H"],"kC":[],"cZ":[]},"SN":{"mb":[],"c3":[],"al":["H","f7"],"w":[],"R":[],"ak":[],"al.1":"f7","al.0":"H"},"Di":{"a5":[],"f":[]},"TV":{"kY":[],"av":[],"f":[]}}'))
var y={x:B.L("l<j>"),g:B.L("H"),z:B.L("mn"),t:B.L("yJ"),v:B.L("q9"),c:B.L("f7"),e:B.L("n")}}
$__dart_deferred_initializers__["2F8BodIA0JgMgVSe8xyD0pl6p0c="] = $__dart_deferred_initializers__.current
