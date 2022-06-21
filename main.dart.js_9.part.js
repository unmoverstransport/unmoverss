self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={anu:function anu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},anv:function anv(){},Gz:function Gz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},TT:function TT(){},yG:function yG(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.pX$=d
_.bX$=e
_.ac$=f
_.a=null},SK:function SK(d,e,f,g,h,i,j){var _=this
_.cB=d
_.v=e
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
aGM(d,e,f,g,h,i,j,k,l,m,n){var x,w=null,v=f==null&&n===C.aH
if(m==null){x=f==null&&n===C.aH
x=x?E.oO:w}else x=m
return new A.Df(h,new A.TN(i,j,d,!0,!0,w),l,n,!1,f,v,x,w,!1,w,0,w,j,g,E.hK,w,C.a2,k)},
Df:function Df(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
TN:function TN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.w=i},
TS:function TS(d,e,f){this.f=d
this.d=e
this.a=f}},C,B,D,E
A=a.updateHolder(c[18],A)
C=c[2]
B=c[0]
D=c[20]
E=c[23]
A.anu.prototype={
Wo(d){var x=this.c
return d.pm(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.c.bE(B.b(["scrollOffset: "+B.d(x.a),"crossAxisOffset: "+B.d(x.b),"mainAxisExtent: "+B.d(x.c),"crossAxisExtent: "+B.d(x.d)],y.x),", ")+")"}}
A.anv.prototype={}
A.Gz.prototype={
WC(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.dc(d/x)-1)
return 0},
a92(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Az(d){var x=this,w=x.a,v=C.f.bi(d,w)
return new A.anu(C.f.i7(d,w)*x.b,x.a92(v*x.c),x.d,x.e)},
RM(d){var x=this.b
return x*(C.f.i7(d-1,this.a)+1)-(x-this.d)}}
A.TT.prototype={}
A.yG.prototype={
j(d){return"crossAxisOffset="+B.d(this.w)+"; "+this.a_J(0)}}
A.SK.prototype={
e6(d){if(!(d.e instanceof A.yG))d.e=new A.yG(!1,null,null)},
sX3(d){var x=this
if(x.cB===d)return
if(B.A(d)!==B.A(x.cB)||d.jv(x.cB))x.U()
x.cB=d},
pw(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
bx(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=y.z.a(B.w.prototype.gT.call(a3)),a6=a3.v
a6.rx=!1
x=a5.d
w=x+a5.z
v=w+a5.Q
u=a3.cB.vN(a5)
t=u.b
s=t>1e-10?u.a*C.d.i7(w,t):0
r=isFinite(v)?u.WC(v):a4
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
a3.nk(o,r==null?0:C.f.F(p-r,0,a3.bM$))}else a3.nk(0,0)
n=u.Az(s)
m=n.a
l=m+n.c
if(a3.Z$==null)if(!a3.F0(s,m)){k=u.RM(a6.gtu())
a3.fy=D.iq(a4,!1,a4,a4,k,0,0,0,k,a4)
a6.nt()
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
for(;j>=s;--j){h=u.Az(j)
p=h.c
g=a3.TQ(a5.pm(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
l=Math.max(l,e+p)}if(i==null){p=a3.Z$
p.toString
p.eh(0,n.Wo(a5))
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
p=B.k(a3).i("am.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.Az(j)
e=h.c
d=a5.pm(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).ac$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a3.TO(d,i)
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
a1=a6.Go(a5,s,t,m,l)
a2=a3.iq(a5,Math.min(x,m),l)
a3.fy=D.iq(a3.pt(a5,m,l),!0,a4,a4,a1,0,a2,0,a1,a4)
if(a1===l)a6.rx=!0
a6.nt()}}
A.Df.prototype={
Rp(d){return new A.TS(this.p3,this.p4,null)}}
A.TN.prototype={
Ta(d){return null},
tm(d,e,f){var x,w,v,u,t,s,r,q,p=null
if(f>=0){u=this.b
u=u!=null&&f>=u}else u=!0
if(u)return p
x=null
try{x=this.a.$2(e,f)}catch(t){w=B.as(t)
v=B.aU(t)
s=new B.bx(w,v,"widgets library",B.b2("building"),p,!1)
B.cO(s)
x=B.CP(s)}if(x==null)return p
if(x.a!=null){u=x.a
u.toString
r=new D.AB(u)}else r=p
u=x
x=new B.iZ(u,p)
q=D.aIF(x,f)
if(q!=null)x=new D.Dw(q,x,p)
if(this.c)x=new D.vE(x,p)
return new B.xh(x,r)},
gpS(){return this.b},
Jv(d){return!0}}
A.TS.prototype={
aJ(d){var x=new A.SK(this.f,y.v.a(d),B.J(y.e,y.g),0,null,null,B.aq())
x.gaq()
x.gaI()
x.CW=!1
return x},
aM(d,e){e.sX3(this.f)},
Gn(d,e,f,g,h){var x,w
this.a_K(d,e,f,g,h)
x=this.f.vN(d)
w=this.d.gpS()
w.toString
w=x.RM(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.C,[A.anu,A.anv,A.TT])
w(A.Gz,A.anv)
w(A.yG,D.f9)
w(A.SK,D.m9)
w(A.Df,D.BD)
w(A.TN,D.TO)
w(A.TS,D.kW)})()
B.fr(b.typeUniverse,JSON.parse('{"yG":{"f9":[],"nR":[],"eZ":["B"],"kA":[],"cY":[]},"SK":{"m9":[],"c2":[],"am":["B","f9"],"w":[],"R":[],"ak":[],"am.1":"f9","am.0":"B"},"Df":{"a6":[],"f":[]},"TS":{"kW":[],"aw":[],"f":[]}}'))
var y={x:B.K("l<j>"),g:B.K("B"),z:B.K("ml"),t:B.K("yG"),v:B.K("q6"),c:B.K("f9"),e:B.K("n")}}
$__dart_deferred_initializers__["khegWk6w5u1kXonX6Yn6oqLHZXE="] = $__dart_deferred_initializers__.current
