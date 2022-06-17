self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var D={
aTA(){return new D.o0(null)},
o0:function o0(d){this.a=d},
TR:function TR(d,e,f){var _=this
_.d=d
_.e=e
_.a=null
_.b=f
_.c=null},
apL:function apL(d){this.a=d},
apK:function apK(d,e){this.a=d
this.b=e},
apJ:function apJ(d){this.a=d},
KU:function KU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a1g:function a1g(d){this.a=d},
a1f:function a1f(d){this.a=d},
nS:function nS(d,e,f){this.c=d
this.e=e
this.a=f},
a1c:function a1c(d){this.a=d}},B,A,C,E,H,G,F,I
D=a.updateHolder(c[6],D)
B=c[2]
A=c[0]
C=c[19]
E=c[21]
H=c[22]
G=c[17]
F=c[23]
I=c[11]
D.o0.prototype={
W(){$.aw()
var x=$.aS
if(x==null)x=$.aS=B.H
return new D.TR(x.cj(0,null,y.D),new A.aI(null,y.A),B.k)}}
D.TR.prototype={
ad(){A.mB(B.A,y.z).aT(0,new D.apL(this),y.P)
this.au()},
A(d,e){var x=null
return new C.iG(A.b([A.hj(new D.apK(this,e),x,x,x,y.D)],y.p),"/home/bookings",x)}}
D.KU.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.dJ(5),m=C.a3("Description")
m.Q=B.r
m.ch=E.K
m=m.t()
x=C.a3("Total")
x.Q=B.r
x.ch=E.K
w=y.p
x=A.b([new A.aa(E.b4,m,o),B.C,new A.aa(E.b4,x.t(),o)],w)
m=C.a3("Base Fee")
m.Q=B.v
m.ch=E.K
m=m.t()
v=p.c
u="R "+A.h(v.z)
t=C.a3(u)
t.Q=B.v
t.ch=E.K
t=A.b([new A.aa(E.b4,m,o),H.n8,new A.aa(E.b4,t.t(),o)],w)
m=C.a3("Discounts")
m.ch=E.K
m.Q=B.r
m=A.b([new A.aa(E.b4,m.t(),o),B.C,B.C],w)
s=C.a3("Mid Month")
s.Q=B.v
s.ch=E.K
s=s.t()
r=C.a3("R "+A.h(v.Q))
r.Q=B.v
r.ch=E.K
r=A.b([new A.aa(E.b4,s,o),H.n9,new A.aa(E.b4,r.t(),o)],w)
s=C.a3("Loyal customer")
s.ch=E.K
s.Q=B.v
s=s.t()
q=C.a3("R "+A.h(v.as))
q.Q=B.v
q.ch=E.K
q=A.b([new A.aa(E.b4,s,o),H.na,new A.aa(E.b4,q.t(),o)],w)
s=C.a3("Total amount due:")
s.ch=E.K
s.Q=B.O
s=s.t()
u=C.a3(u)
u.Q=B.O
u.ch=E.K
w=G.RH(A.b([new G.da(new A.by(B.dU,o,o,n,o,o,B.G),x),new G.da(o,t),new G.da(H.dH,m),new G.da(o,r),new G.da(H.dH,q),new G.da(H.dH,A.b([new A.aa(E.b4,s,o),B.C,new A.aa(E.b4,u.t(),o)],w))],y.s),o,H.er)
n=!v.db
m=C.akO(o,o,!n||p.J8()?B.aV:B.b5,o,o,o,o,o,o,o,o,o,o,B.fP,o,o,o,o)
n=!n||p.J8()?o:new D.a1g(p)
x=C.a3("CANCEL BOOKING")
x.ch=F.WT
return new C.aF(A.b([w,C.bb(C.xJ(x.t(),n,m),0,0,0,20)],y.d),B.p,B.B,o,o)},
J8(){var x=Date.now(),w=this.c
if(B.f.cS(A.bu(0,I.aBS(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
D.nS.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=C.cl("INVOICE BOOKING ID: "+n.a+" ")
m.aU$=B.i
m.cx=E.fU
m.d=B.O
x=y.n
w=A.b([],x)
v=n.db
if(v){u=C.bQ("Booking Cancelled")
u.aU$=B.b5
u.as=B.ab
u.e=B.r
w.push(u.t())}m.c=w
m=m.t()
w=C.cl("Created: ")
w.d=B.r
w.cx=F.ew
t=I.aBS(n.dx)
u=C.bQ(""+A.b2(t)+"-"+p.vK(A.bh(t))+"-"+p.vK(A.cx(t))+" | "+p.vK(A.wG(t))+":"+p.vK(A.wH(t)))
u.e=B.v
u.aU$=B.i
w.c=A.b([u.t()],x)
w=w.t()
u=C.cl("Pickup Date-Time: ")
u.d=B.r
u.cx=B.ab
s=C.bQ(n.b+" | ")
s.e=B.v
s.aU$=B.i
s=s.t()
r=C.bQ(n.c+" ")
r.e=B.v
r.aU$=B.i
u.c=A.b([s,r.t()],x)
u.aU$=B.aV
u=u.t()
r=A.ax(B.d.am(127.5),151,38,120)
s=v?o:new D.a1c(p)
w=C.oz(!1,B.Z,o,o,!0,o,o,!1,o,0,o,!1,o,o,u,o,w,C.ld(o,A.r2(F.HN,v?B.aV:B.Y,o),o,s,r,15,o),o)
u=C.cl("Distance: ")
u.d=B.r
u.cx=F.ew
s=C.bQ(A.h(G.aEd(n.at,1))+" kms")
s.aU$=B.i
s.e=B.v
u.c=A.b([s.t()],x)
u=u.t()
s=C.cl("Driver Note:")
s.d=B.r
s.cx=F.ew
s.aU$=B.aV
v=n.ax
v=C.bQ(v.length!==0?"\n"+v:"")
v.aU$=B.i
v.e=B.v
s.c=A.b([v.t()],x)
v=y.p
s=C.bb(new C.aF(A.b([u,s.t()],v),B.p,B.B,o,o),16,0,0,0)
u=C.cl("Additional Helpers: ")
u.d=B.r
u.cx=F.ew
r=C.bQ(""+n.ay)
r.aU$=B.i
r.e=B.v
u.c=A.b([r.t()],x)
u=u.t()
r=C.cl("Floors To Carry: ")
r.d=B.r
r.cx=F.ew
r.aU$=B.aV
q=C.bQ(""+n.ch)
q.aU$=B.i
q.e=B.v
r.c=A.b([q.t()],x)
r=C.bb(new C.aF(A.b([u,r.t()],v),B.p,B.B,o,o),16,0,0,0)
$.aw()
u=$.aS
x=u==null?$.aS=B.H:u
x=x.cj(0,o,y.r)
u=$.aS
if(u==null)u=$.aS=B.H
v=C.FM(new A.aa(E.ai,new C.aF(A.b([m,w,s,r,C.bb(new D.KU(n,p.gTv(),p.e,x,u.cj(0,o,y.D),o),10,0,0,0)],v),B.p,B.B,o,o),o))
v.c=10
return v.t()},
Tw(){var x=this.e,w=this.c
x.z=w.at
x.a=w.b
x.b=w.c
x.w=w.z
x.y=w.as
x.x=w.Q
x.c=w.x
x.Q=w.ay
x.r=w.y
x.e=w.CW
x.d=w.ax
x.f=w.ch
x.as=!1
x.at=!0},
vK(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["nS(mg,l)","~()"])
D.apL.prototype={
$1(d){var x=0,w=A.I(y.P),v=this
var $async$$1=A.E(function(e,f){if(e===1)return A.F(f,w)
while(true)switch(x){case 0:x=2
return A.D(v.a.d.tZ(),$async$$1)
case 2:return A.G(null,w)}})
return A.H($async$$1,w)},
$S:46}
D.apK.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.C
case 1:x=C.bt(new A.aa(E.T,B.bg,u))
x.r=1/0
x.f=this.b.E(y.w).f.a.b
return x.t()
case 3:return C.a3(d.ch).t()
case 2:x=y.p
if(d.ay.d.length!==0){w=C.a3("Your Bookings".toUpperCase())
w.Q=B.O
w.ch=F.TU
w=w.t()
v=C.ot(d.ay.d,new D.apJ(this.a),y.V,y.l)
v=C.bt(new C.aF(A.Y(v,!0,v.$ti.i("t.E")),u,u,u,u))
v.r=500
v.y=B.bT
x=C.bt(new C.aF(A.b([new A.aa(new A.ad(16,16,16,16),w,u),v.t()],x),B.p,B.B,u,u))
x.r=1/0
x.DQ$=B.R
return A.a(x.DP$,"_child").t()}else{x=C.bt(new A.aa(E.T,new C.aF(A.b([C.a3("Make your first booking!").t()],x),u,u,u,u),u))
x.r=1/0
x.f=this.b.E(y.w).f.a.b
return x.t()}default:return C.a3("there might be an error in your code check your provider").t()}},
$S:508}
D.apJ.prototype={
$2(d,e){return new D.nS(d,new G.AK("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
D.a1g.prototype={
$0(){var x=0,w=A.I(y.H),v=this,u
var $async$$0=A.E(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.D(u.f.wO(u.e,u.c,new D.a1f(u)),$async$$0)
case 2:return A.G(null,w)}})
return A.H($async$$0,w)},
$S:2}
D.a1f.prototype={
$0(){var x=0,w=A.I(y.H),v=this
var $async$$0=A.E(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:x=2
return A.D(v.a.r.tZ(),$async$$0)
case 2:return A.G(null,w)}})
return A.H($async$$0,w)},
$S:2}
D.a1c.prototype={
$0(){var x=0,w=A.I(y.H),v=this,u,t,s
var $async$$0=A.E(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.ag(["retrieve",u.f],t,t)
A.dN($.aw(),"/home/bookings/"+u.a,s,y.z)
return A.G(null,w)}})
return A.H($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(D.nS.prototype,"gTv","Tw",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(D.o0,A.S)
x(D.TR,A.W)
w(A.cb,[D.apL,D.apK])
x(D.apJ,A.f5)
w(A.a2,[D.KU,D.nS])
w(A.jy,[D.a1g,D.a1f,D.a1c])})()
A.fs(b.typeUniverse,JSON.parse('{"o0":{"S":[],"d":[]},"TR":{"W":["o0"]},"KU":{"a2":[],"d":[]},"nS":{"a2":[],"d":[]}}'))
var y=(function rtii(){var x=A.K
return{l:x("nS"),V:x("mg"),r:x("nT"),O:x("m<dy>"),d:x("m<av>"),s:x("m<da>"),n:x("m<et>"),p:x("m<d>"),A:x("aI<ki>"),w:x("d1"),P:x("ay"),D:x("kg"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){F.HN=new A.cN(983823,"MaterialIcons",null,!1)
F.TU=new A.x(!0,B.i,null,"Montserrat-SemiBold",null,null,18,B.r,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.ew=new A.x(!0,B.aV,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.WT=new A.x(!0,B.l,null,null,null,null,14,B.v,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()}
$__dart_deferred_initializers__["JLxRSK9J5CXZ4XuvHQqLS867EPc="] = $__dart_deferred_initializers__.current
