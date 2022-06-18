self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={amL:function amL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},amM:function amM(){},Gp:function Gp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},Tv:function Tv(){},yq:function yq(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.pF$=d
_.bW$=e
_.ab$=f
_.a=null},Sq:function Sq(d,e,f,g,h,i,j){var _=this
_.d5=d
_.v=e
_.H=f
_.bk=$
_.bu=!0
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
aFQ(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.aD
if(m==null){x=f==null&&n===C.aD
x=x?E.oq:w}else x=m
return new A.D4(h,new D.Go(i,j,d,!0,!0,w),l,n,!1,f,v,x,!1,w,j,g,E.hv,w,C.a1,k)},
D4:function D4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
Tu:function Tu(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,E
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
D=c[19]
E=c[22]
A.amL.prototype={
VA(d){var x=this.c
return d.rY(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bD(B.b(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.amM.prototype={}
A.Gp.prototype={
VO(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.d9(d/x)-1)
return 0},
a8p(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
A5(d){var x=this,w=x.a,v=C.f.be(d,w)
return new A.amL(C.f.hT(d,w)*x.b,x.a8p(v*x.c),x.d,x.e)},
R0(d){var x=this.b
return x*(C.f.hT(d-1,this.a)+1)-(x-this.d)}}
A.Tv.prototype={}
A.yq.prototype={
j(d){return"crossAxisOffset="+B.d(this.w)+"; "+this.ZY(0)}}
A.Sq.prototype={
ea(d){if(!(d.e instanceof A.yq))d.e=new A.yq(!1,null,null)},
sWg(d){var x=this
if(x.d5===d)return
if(B.A(d)!==B.A(x.d5)||d.jm(x.d5))x.X()
x.d5=d},
pd(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bA(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.w.prototype.ga_.call(a3)),a6=a3.v
a6.rx=!1
x=a5.d
w=x+a5.z
v=w+a5.Q
u=a3.d5.vl(a5)
t=u.b
s=t>1e-10?u.a*C.e.hT(w,t):0
r=isFinite(v)?u.VO(v):a4
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
o=C.f.J(s-t,0,a3.bM$)
a3.n4(o,r==null?0:C.f.J(p-r,0,a3.bM$))}else a3.n4(0,0)
n=u.A5(s)
m=n.a
l=m+n.c
if(a3.Z$==null)if(!a3.Eu(s,m)){k=u.R0(a6.gt7())
a3.fy=D.jB(a4,!1,a4,a4,k,0,0,k,a4)
a6.nc()
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
for(;j>=s;--j){h=u.A5(j)
p=h.c
g=a3.T3(a5.rY(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.Z$
p.toString
p.eh(0,n.VA(a5))
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
p=B.j(a3).i("am.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.A5(j)
e=h.c
d=a5.rY(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).ab$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.T1(d,i)
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
a1=a6.FM(a5,s,t,m,l)
a2=a3.iS(a5,Math.min(x,m),l)
a3.fy=D.jB(a3.pa(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.rx=!0
a6.nc()}}
A.D4.prototype={
QH(d){return new A.Tu(this.p3,this.p4,null)}}
A.Tu.prototype={
aJ(d){var x=new A.Sq(this.f,y.v.a(d),B.K(y.e,y.g),0,null,null,B.aq())
x.gav()
x.gaH()
x.CW=!1
return x},
aM(d,e){e.sWg(this.f)},
FL(d,e,f,g,h){var x,w
this.ZZ(d,e,f,g,h)
x=this.f.vl(d)
w=this.d.gpC()
w.toString
w=x.R0(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.C,[A.amL,A.amM,A.Tv])
w(A.Gp,A.amM)
w(A.yq,D.f2)
w(A.Sq,D.m0)
w(A.D4,D.Bm)
w(A.Tu,D.kN)})()
B.fP(b.typeUniverse,JSON.parse('{"yq":{"f2":[],"nE":[],"eV":["D"],"ko":[],"cX":[]},"Sq":{"m0":[],"cH":[],"am":["D","f2"],"w":[],"S":[],"ao":[],"am.1":"f2","am.0":"D"},"D4":{"a4":[],"e":[]},"Tu":{"kN":[],"aB":[],"e":[]}}'))
var y={x:B.L("k<i>"),g:B.L("D"),z:B.L("ma"),t:B.L("yq"),v:B.L("pV"),c:B.L("f2"),e:B.L("m")}}
$__dart_deferred_initializers__["mGxVGlVabPNzrsxLN9ajTCP1lnc="] = $__dart_deferred_initializers__.current
