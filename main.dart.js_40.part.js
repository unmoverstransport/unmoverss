self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={apa:function apa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},apb:function apb(){},Hp:function Hp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},UR:function UR(){},z9:function z9(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.q3$=d
_.bU$=e
_.a_$=f
_.a=null},TI:function TI(d,e,f,g,h,i,j){var _=this
_.dq=d
_.u=e
_.J=f
_.bp=$
_.bB=!0
_.bg$=g
_.N$=h
_.bE$=i
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
aJI(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.aH
if(m==null){x=f==null&&n===C.aH
x=x?E.pi:w}else x=m
return new A.DP(h,new G.Ho(i,j,d,!0,!0,w),l,n,!1,f,v,x,!1,w,j,g,E.i9,w,C.I,k)},
DP:function DP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
UQ:function UQ(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,F,E,G
A=a.updateHolder(c[44],A)
C=c[2]
B=c[0]
D=c[55]
F=c[51]
E=c[65]
G=c[46]
A.apa.prototype={
Wr(d){var x=this.c
return d.ty(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bO(B.b(["scrollOffset: "+B.e(x.a),"crossAxisOffset: "+B.e(x.b),"mainAxisExtent: "+B.e(x.c),"crossAxisExtent: "+B.e(x.d)],y.x),", ")+")"}}
A.apb.prototype={}
A.Hp.prototype={
WF(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.dm(d/x)-1)
return 0},
a9r(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
AG(d){var x=this,w=x.a,v=C.f.bm(d,w)
return new A.apa(C.f.fN(d,w)*x.b,x.a9r(v*x.c),x.d,x.e)},
RQ(d){var x=this.b
return x*(C.f.fN(d-1,this.a)+1)-(x-this.d)}}
A.UR.prototype={}
A.z9.prototype={
j(d){return"crossAxisOffset="+B.e(this.w)+"; "+this.a_T(0)}}
A.TI.prototype={
e5(d){if(!(d.e instanceof A.z9))d.e=new A.z9(!1,null,null)},
sX7(d){var x=this
if(x.dq===d)return
if(B.K(d)!==B.K(x.dq)||d.oD(x.dq))x.X()
x.dq=d},
pA(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bC(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.y.prototype.ga1.call(a3)),a6=a3.u
a6.rx=!1
x=a5.d
w=x+a5.z
v=w+a5.Q
u=a3.dq.w2(a5)
t=u.b
s=t>1e-10?u.a*C.e.fN(w,t):0
r=isFinite(v)?u.WF(v):a4
t=a3.N$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a3.bE$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.f.F(s-t,0,a3.bg$)
a3.nw(o,r==null?0:C.f.F(p-r,0,a3.bg$))}else a3.nw(0,0)
n=u.AG(s)
m=n.a
l=m+n.c
if(a3.N$==null)if(!a3.F8(s,m)){k=u.RQ(a6.gtI())
a3.fy=D.k8(a4,!1,a4,a4,k,0,0,k,a4)
a6.nE()
return}t=a3.N$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a4
for(;j>=s;--j){h=u.AG(j)
p=h.c
g=a3.TP(a5.ty(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.N$
p.toString
p.eF(0,n.Wr(a5))
i=a3.N$
p=i.e
p.toString
t.a(p)
p.a=m
p.w=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.l(a3).i("a8.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.AG(j)
e=h.c
d=a5.ty(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).a_$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.TN(d,i)
if(g==null)break}else g.eF(0,d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.w=h.b
l=Math.max(l,a0+e);++j
i=g}t=a3.bE$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a6.Gs(a5,s,t,m,l)
a2=a3.jj(a5,Math.min(x,m),l)
a3.fy=D.k8(a3.pw(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.rx=!0
a6.nE()}}
A.DP.prototype={
Rw(d){return new A.UQ(this.p3,this.p4,null)}}
A.UQ.prototype={
aJ(d){var x=new A.TI(this.f,y.v.a(d),B.M(y.e,y.g),0,null,null,B.au())
x.gap()
x.gaG()
x.CW=!1
return x},
aN(d,e){e.sX7(this.f)},
Gr(d,e,f,g,h){var x,w
this.a_U(d,e,f,g,h)
x=this.f.w2(d)
w=this.d.gpZ()
w.toString
w=x.RQ(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.J,[A.apa,A.apb,A.UR])
w(A.Hp,A.apb)
w(A.z9,D.eG)
w(A.TI,D.k4)
w(A.DP,F.C5)
w(A.UQ,D.k9)})()
B.bz(b.typeUniverse,JSON.parse('{"z9":{"eG":[],"mJ":[],"f1":["G"],"kP":[],"d2":[]},"TI":{"k4":[],"cF":[],"a8":["G","eG"],"y":[],"V":[],"ar":[],"a8.1":"eG","a8.0":"G"},"DP":{"a_":[],"d":[]},"UQ":{"k9":[],"ax":[],"d":[]}}'))
var y={x:B.t("k<i>"),g:B.t("G"),z:B.t("lf"),t:B.t("z9"),v:B.t("qB"),c:B.t("eG"),e:B.t("m")}}
$__dart_deferred_initializers__["S/0zzOipnQypgWbr+cJ3ssGIa+U="] = $__dart_deferred_initializers__.current
