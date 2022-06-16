self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={ajG:function ajG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},ajH:function ajH(){},F4:function F4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},RG:function RG(){},xL:function xL(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.oL$=d
_.aN$=e
_.a0$=f
_.a=null},QF:function QF(d,e,f,g,h,i,j){var _=this
_.cj=d
_.v=e
_.I=f
_.bb=$
_.bl=!0
_.bw$=g
_.a_$=h
_.c7$=i
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
aCA(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.am
if(m==null){x=f==null&&n===C.am
x=x?E.nk:w}else x=m
return new A.C3(h,new D.tC(i,j,d,e,!0,w),l,n,!1,f,v,x,w,!1,w,0,w,j,g,E.fJ,w,C.X,k)},
C3:function C3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
RF:function RF(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,E
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
D=c[19]
E=c[21]
A.ajG.prototype={
So(d){var x=this.c
return d.r2(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bz(B.b(["scrollOffset: "+B.e(x.a),"crossAxisOffset: "+B.e(x.b),"mainAxisExtent: "+B.e(x.c),"crossAxisExtent: "+B.e(x.d)],y.x),", ")+")"}}
A.ajH.prototype={}
A.F4.prototype={
SE(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.jO(d/x)-1)
return 0},
a4J(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
yQ(d){var x=this,w=x.a,v=C.f.bc(d,w)
return new A.ajG(C.f.hq(d,w)*x.b,x.a4J(v*x.c),x.d,x.e)},
Ol(d){var x=this.b
return x*(C.f.hq(d-1,this.a)+1)-(x-this.d)}}
A.RG.prototype={}
A.xL.prototype={
j(d){return"crossAxisOffset="+B.e(this.w)+"; "+this.WN(0)}}
A.QF.prototype={
dJ(d){if(!(d.e instanceof A.xL))d.e=new A.xL(!1,null,null)},
sT6(d){var x=this
if(x.cj===d)return
if(B.J(d)!==B.J(x.cj)||d.iM(x.cj))x.Z()
x.cj=d},
of(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bq(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=y.z.a(B.w.prototype.gW.call(a4)),a7=a4.v
a7.rx=!1
x=a6.d
w=x+a6.z
v=w+a6.Q
u=a4.cj.un(a6)
t=u.b
s=t>1e-10?u.a*C.e.hq(w,t):0
r=isFinite(v)?u.SE(v):a5
t=a4.a_$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a4.c7$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.f.M(s-t,0,a4.bw$)
a4.mi(o,r==null?0:C.f.M(p-r,0,a4.bw$))}else a4.mi(0,0)
n=u.yQ(s)
m=n.a
l=m+n.c
if(a4.a_$==null)if(!a4.Cs(s,m)){k=u.Ol(a7.grd())
a4.fy=D.ji(a5,!1,a5,a5,k,0,0,k,a5)
a7.mq()
return}t=a4.a_$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a5
for(;j>=s;--j){h=u.yQ(j)
p=h.c
g=a4.Q6(a6.r2(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a4.a_$
p.toString
p.ei(0,n.So(a6))
i=a4.a_$
p=i.e
p.toString
t.a(p)
p.a=m
p.w=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.y(a4).i("ae.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.yQ(j)
e=h.c
d=a6.r2(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).a0$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a4.Q4(d,i)
if(g==null)break}else g.ei(0,d)
a0=g.e
a0.toString
t.a(a0)
a1=h.a
a0.a=a1
a0.w=h.b
l=Math.max(l,a1+e);++j
i=g}t=a4.c7$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a2=a7.DM(a6,s,t,m,l)
a3=a4.ii(a6,Math.min(x,m),l)
a4.fy=D.ji(a4.od(a6,m,l),!0,a5,a5,a2,a3,0,a2,a5)
if(a2===l)a7.rx=!0
a7.mq()}}
A.C3.prototype={
O0(d){return new A.RF(this.p3,this.p4,null)}}
A.RF.prototype={
aG(d){var x=new A.QF(this.f,y.v.a(d),B.M(y.e,y.g),0,null,null,B.as())
x.gao()
x.gaD()
x.CW=!1
return x},
aI(d,e){e.sT6(this.f)},
DL(d,e,f,g,h){var x,w
this.WO(d,e,f,g,h)
x=this.f.un(d)
w=this.d.goG()
w.toString
w=x.Ol(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.D,[A.ajG,A.ajH,A.RG])
w(A.F4,A.ajH)
w(A.xL,D.eS)
w(A.QF,D.lN)
w(A.C3,D.Ax)
w(A.RF,D.kv)})()
B.fy(b.typeUniverse,JSON.parse('{"xL":{"eS":[],"nr":[],"ee":["A"],"k2":[],"cJ":[]},"QF":{"lN":[],"cb":[],"ae":["A","eS"],"w":[],"T":[],"ar":[],"ae.1":"eS","ae.0":"A"},"C3":{"a5":[],"f":[]},"RF":{"kv":[],"av":[],"f":[]}}'))
var y={x:B.B("k<i>"),g:B.B("A"),z:B.B("lX"),t:B.B("xL"),v:B.B("pl"),c:B.B("eS"),e:B.B("m")}}
$__dart_deferred_initializers__["6XgyfSLM+9Wi9/DnZb5ODA4zfFc="] = $__dart_deferred_initializers__.current
