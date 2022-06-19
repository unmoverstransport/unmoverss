self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={amE:function amE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},amF:function amF(){},Go:function Go(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},Tu:function Tu(){},yo:function yo(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.pA$=d
_.bV$=e
_.ab$=f
_.a=null},Sq:function Sq(d,e,f,g,h,i,j){var _=this
_.d5=d
_.v=e
_.H=f
_.bj=$
_.bl=!0
_.bL$=g
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
aFG(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.aF
if(m==null){x=f==null&&n===C.aF
x=x?E.ow:w}else x=m
return new A.D2(h,new D.Gn(i,j,d,!0,!0,w),l,n,!1,f,v,x,!1,w,j,g,E.hB,w,C.a4,k)},
D2:function D2(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
Tt:function Tt(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,E
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
D=c[19]
E=c[22]
A.amE.prototype={
Vw(d){var x=this.c
return d.rU(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bC(B.b(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.amF.prototype={}
A.Go.prototype={
VK(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.d9(d/x)-1)
return 0},
a8k(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
zY(d){var x=this,w=x.a,v=C.f.bd(d,w)
return new A.amE(C.f.hX(d,w)*x.b,x.a8k(v*x.c),x.d,x.e)},
QT(d){var x=this.b
return x*(C.f.hX(d-1,this.a)+1)-(x-this.d)}}
A.Tu.prototype={}
A.yo.prototype={
j(d){return"crossAxisOffset="+B.d(this.w)+"; "+this.ZT(0)}}
A.Sq.prototype={
ea(d){if(!(d.e instanceof A.yo))d.e=new A.yo(!1,null,null)},
sWb(d){var x=this
if(x.d5===d)return
if(B.A(d)!==B.A(x.d5)||d.jm(x.d5))x.X()
x.d5=d},
pa(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bz(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.x.prototype.ga_.call(a3)),a6=a3.v
a6.rx=!1
x=a5.d
w=x+a5.z
v=w+a5.Q
u=a3.d5.vi(a5)
t=u.b
s=t>1e-10?u.a*C.e.hX(w,t):0
r=isFinite(v)?u.VK(v):a4
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
o=C.f.J(s-t,0,a3.bL$)
a3.n6(o,r==null?0:C.f.J(p-r,0,a3.bL$))}else a3.n6(0,0)
n=u.zY(s)
m=n.a
l=m+n.c
if(a3.Z$==null)if(!a3.El(s,m)){k=u.QT(a6.gt3())
a3.fy=D.jE(a4,!1,a4,a4,k,0,0,k,a4)
a6.ne()
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
for(;j>=s;--j){h=u.zY(j)
p=h.c
g=a3.SY(a5.rU(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.Z$
p.toString
p.eh(0,n.Vw(a5))
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
p=B.j(a3).i("al.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.zY(j)
e=h.c
d=a5.rU(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).ab$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.SW(d,i)
if(g==null)break}else g.eh(0,d)
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
a1=a6.FF(a5,s,t,m,l)
a2=a3.iU(a5,Math.min(x,m),l)
a3.fy=D.jE(a3.p7(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.rx=!0
a6.ne()}}
A.D2.prototype={
Qz(d){return new A.Tt(this.p3,this.p4,null)}}
A.Tt.prototype={
aJ(d){var x=new A.Sq(this.f,y.v.a(d),B.F(y.e,y.g),0,null,null,B.aq())
x.gau()
x.gaH()
x.CW=!1
return x},
aM(d,e){e.sWb(this.f)},
FE(d,e,f,g,h){var x,w
this.ZU(d,e,f,g,h)
x=this.f.vi(d)
w=this.d.gpx()
w.toString
w=x.QT(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.B,[A.amE,A.amF,A.Tu])
w(A.Go,A.amF)
w(A.yo,D.f2)
w(A.Sq,D.m0)
w(A.D2,D.Bk)
w(A.Tt,D.kP)})()
B.fM(b.typeUniverse,JSON.parse('{"yo":{"f2":[],"nF":[],"eU":["C"],"kr":[],"cW":[]},"Sq":{"m0":[],"cG":[],"al":["C","f2"],"x":[],"S":[],"an":[],"al.1":"f2","al.0":"C"},"D2":{"a5":[],"e":[]},"Tt":{"kP":[],"aB":[],"e":[]}}'))
var y={x:B.K("k<i>"),g:B.K("C"),z:B.K("ma"),t:B.K("yo"),v:B.K("pX"),c:B.K("f2"),e:B.K("m")}}
$__dart_deferred_initializers__["ZZcQJ2ZdaYm0Hac5qGU4AQGa89A="] = $__dart_deferred_initializers__.current
