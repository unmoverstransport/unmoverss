self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={an5:function an5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},an6:function an6(){},Gu:function Gu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},TK:function TK(){},yD:function yD(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.pW$=d
_.bV$=e
_.ac$=f
_.a=null},SE:function SE(d,e,f,g,h,i,j){var _=this
_.cB=d
_.u=e
_.H=f
_.bd=$
_.bh=!0
_.bM$=g
_.a_$=h
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
aGm(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.aH
if(m==null){x=f==null&&n===C.aH
x=x?E.oz:w}else x=m
return new A.Da(h,new A.TE(i,j,d,!0,!0,w),l,n,!1,f,v,x,w,!1,w,0,w,j,g,E.hF,w,C.a2,k)},
Da:function Da(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
TE:function TE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.w=i},
TJ:function TJ(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,E
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
D=c[20]
E=c[23]
A.an5.prototype={
Wn(d){var x=this.c
return d.pl(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bE(B.b(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.an6.prototype={}
A.Gu.prototype={
WB(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.dm(d/x)-1)
return 0},
a90(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Aw(d){var x=this,w=x.a,v=C.f.bi(d,w)
return new A.an5(C.f.i6(d,w)*x.b,x.a90(v*x.c),x.d,x.e)},
RJ(d){var x=this.b
return x*(C.f.i6(d-1,this.a)+1)-(x-this.d)}}
A.TK.prototype={}
A.yD.prototype={
j(d){return"crossAxisOffset="+B.d(this.w)+"; "+this.a_I(0)}}
A.SE.prototype={
e6(d){if(!(d.e instanceof A.yD))d.e=new A.yD(!1,null,null)},
sX2(d){var x=this
if(x.cB===d)return
if(B.A(d)!==B.A(x.cB)||d.ju(x.cB))x.U()
x.cB=d},
pv(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bw(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.w.prototype.gT.call(a3)),a6=a3.u
a6.rx=!1
x=a5.d
w=x+a5.z
v=w+a5.Q
u=a3.cB.vK(a5)
t=u.b
s=t>1e-10?u.a*C.e.i6(w,t):0
r=isFinite(v)?u.WB(v):a4
t=a3.a_$
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
o=C.f.G(s-t,0,a3.bM$)
a3.nj(o,r==null?0:C.f.G(p-r,0,a3.bM$))}else a3.nj(0,0)
n=u.Aw(s)
m=n.a
l=m+n.c
if(a3.a_$==null)if(!a3.EZ(s,m)){k=u.RJ(a6.gtr())
a3.fy=D.io(a4,!1,a4,a4,k,0,0,0,k,a4)
a6.ns()
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
for(;j>=s;--j){h=u.Aw(j)
p=h.c
g=a3.TN(a5.pl(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.a_$
p.toString
p.eh(0,n.Wn(a5))
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
h=u.Aw(j)
e=h.c
d=a5.pl(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).ac$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.TL(d,i)
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
a1=a6.Gl(a5,s,t,m,l)
a2=a3.ip(a5,Math.min(x,m),l)
a3.fy=D.io(a3.ps(a5,m,l),!0,a4,a4,a1,0,a2,0,a1,a4)
if(a1===l)a6.rx=!0
a6.ns()}}
A.Da.prototype={
Rm(d){return new A.TJ(this.p3,this.p4,null)}}
A.TE.prototype={
T7(d){return null},
tj(d,e,f){var x,w,v,u,t,s,r,q,p=null
if(f>=0){u=this.b
u=u!=null&&f>=u}else u=!0
if(u)return p
x=null
try{x=this.a.$2(e,f)}catch(t){w=B.as(t)
v=B.aU(t)
s=new B.bx(w,v,"widgets library",B.b2("building"),p,!1)
B.cN(s)
x=B.CK(s)}if(x==null)return p
if(x.a!=null){u=x.a
u.toString
r=new D.Aw(u)}else r=p
u=x
x=new B.iY(u,p)
q=D.aIc(x,f)
if(q!=null)x=new D.Dr(q,x,p)
if(this.c)x=new D.vD(x,p)
return new B.xf(x,r)},
gpR(){return this.b},
Js(d){return!0}}
A.TJ.prototype={
aJ(d){var x=new A.SE(this.f,y.v.a(d),B.J(y.e,y.g),0,null,null,B.ao())
x.gaq()
x.gaI()
x.CW=!1
return x},
aM(d,e){e.sX2(this.f)},
Gk(d,e,f,g,h){var x,w
this.a_J(d,e,f,g,h)
x=this.f.vK(d)
w=this.d.gpR()
w.toString
w=x.RJ(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.C,[A.an5,A.an6,A.TK])
w(A.Gu,A.an6)
w(A.yD,D.f9)
w(A.SE,D.m4)
w(A.Da,D.By)
w(A.TE,D.TF)
w(A.TJ,D.kU)})()
B.fq(b.typeUniverse,JSON.parse('{"yD":{"f9":[],"nP":[],"eZ":["B"],"ky":[],"cY":[]},"SE":{"m4":[],"c2":[],"al":["B","f9"],"w":[],"R":[],"aj":[],"al.1":"f9","al.0":"B"},"Da":{"a6":[],"e":[]},"TJ":{"kU":[],"av":[],"e":[]}}'))
var y={x:B.K("k<i>"),g:B.K("B"),z:B.K("mf"),t:B.K("yD"),v:B.K("q4"),c:B.K("f9"),e:B.K("m")}}
$__dart_deferred_initializers__["a9xkb1eFWSTi93FZbBiQ4OylHcg="] = $__dart_deferred_initializers__.current
