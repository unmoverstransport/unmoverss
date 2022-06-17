self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={amN:function amN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},amO:function amO(){},Gs:function Gs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},Tx:function Tx(){},yv:function yv(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.pM$=d
_.bT$=e
_.ac$=f
_.a=null},Su:function Su(d,e,f,g,h,i,j){var _=this
_.d7=d
_.v=e
_.J=f
_.bl=$
_.bu=!0
_.bM$=g
_.Y$=h
_.b6$=i
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
aGd(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.am
if(m==null){x=f==null&&n===C.am
x=x?E.oo:w}else x=m
return new A.D8(h,new D.u_(i,j,d,!0,!0,w),l,n,!1,f,v,x,w,!1,w,0,w,j,g,E.hq,w,C.W,k)},
D8:function D8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
Tw:function Tw(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,E
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
D=c[19]
E=c[22]
A.amN.prototype={
VS(d){var x=this.c
return d.t7(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bF(B.b(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.amO.prototype={}
A.Gs.prototype={
W5(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.dc(d/x)-1)
return 0},
a8F(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Ai(d){var x=this,w=x.a,v=C.f.bf(d,w)
return new A.amN(C.f.hX(d,w)*x.b,x.a8F(v*x.c),x.d,x.e)},
Rm(d){var x=this.b
return x*(C.f.hX(d-1,this.a)+1)-(x-this.d)}}
A.Tx.prototype={}
A.yv.prototype={
j(d){return"crossAxisOffset="+B.d(this.w)+"; "+this.a_e(0)}}
A.Su.prototype={
ee(d){if(!(d.e instanceof A.yv))d.e=new A.yv(!1,null,null)},
sWz(d){var x=this
if(x.d7===d)return
if(B.A(d)!==B.A(x.d7)||d.jp(x.d7))x.X()
x.d7=d},
ph(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
by(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.w.prototype.ga_.call(a3)),a6=a3.v
a6.rx=!1
x=a5.d
w=x+a5.z
v=w+a5.Q
u=a3.d7.vx(a5)
t=u.b
s=t>1e-10?u.a*C.e.hX(w,t):0
r=isFinite(v)?u.W5(v):a4
t=a3.Y$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a3.b6$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.f.H(s-t,0,a3.bM$)
a3.n9(o,r==null?0:C.f.H(p-r,0,a3.bM$))}else a3.n9(0,0)
n=u.Ai(s)
m=n.a
l=m+n.c
if(a3.Y$==null)if(!a3.EH(s,m)){k=u.Rm(a6.gth())
a3.fy=D.jC(a4,!1,a4,a4,k,0,0,k,a4)
a6.nh()
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
for(;j>=s;--j){h=u.Ai(j)
p=h.c
g=a3.Tm(a5.t7(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.Y$
p.toString
p.ej(0,n.VS(a5))
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
h=u.Ai(j)
e=h.c
d=a5.t7(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).ac$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.Tk(d,i)
if(g==null)break}else g.ej(0,d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.w=h.b
l=Math.max(l,a0+e);++j
i=g}t=a3.b6$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a6.G_(a5,s,t,m,l)
a2=a3.iV(a5,Math.min(x,m),l)
a3.fy=D.jC(a3.pe(a5,m,l),!0,a4,a4,a1,a2,0,a1,a4)
if(a1===l)a6.rx=!0
a6.nh()}}
A.D8.prototype={
QZ(d){return new A.Tw(this.p3,this.p4,null)}}
A.Tw.prototype={
aJ(d){var x=new A.Su(this.f,y.v.a(d),B.K(y.e,y.g),0,null,null,B.aq())
x.gaq()
x.gaH()
x.CW=!1
return x},
aM(d,e){e.sWz(this.f)},
FZ(d,e,f,g,h){var x,w
this.a_f(d,e,f,g,h)
x=this.f.vx(d)
w=this.d.gpG()
w.toString
w=x.Rm(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.I,[A.amN,A.amO,A.Tx])
w(A.Gs,A.amO)
w(A.yv,D.f2)
w(A.Su,D.m3)
w(A.D8,D.Bs)
w(A.Tw,D.kQ)})()
B.fP(b.typeUniverse,JSON.parse('{"yv":{"f2":[],"nK":[],"eC":["D"],"ko":[],"cY":[]},"Su":{"m3":[],"cq":[],"al":["D","f2"],"w":[],"R":[],"ao":[],"al.1":"f2","al.0":"D"},"D8":{"a2":[],"e":[]},"Tw":{"kQ":[],"ay":[],"e":[]}}'))
var y={x:B.L("k<i>"),g:B.L("D"),z:B.L("mc"),t:B.L("yv"),v:B.L("pY"),c:B.L("f2"),e:B.L("m")}}
$__dart_deferred_initializers__["OtT/OMAQ9VJOhSomodyfNUS9Vkw="] = $__dart_deferred_initializers__.current
