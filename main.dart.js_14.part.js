self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var D={
aTz(){return new D.o2(null)},
o2:function o2(d){this.a=d},
TR:function TR(d,e,f){var _=this
_.d=d
_.e=e
_.a=null
_.b=f
_.c=null},
apK:function apK(d){this.a=d},
apJ:function apJ(d,e){this.a=d
this.b=e},
apI:function apI(d){this.a=d},
KQ:function KQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a1e:function a1e(d){this.a=d},
a1d:function a1d(d){this.a=d},
nU:function nU(d,e,f){this.c=d
this.e=e
this.a=f},
a1a:function a1a(d){this.a=d}},B,A,C,E,H,G,F,I
D=a.updateHolder(c[6],D)
B=c[2]
A=c[0]
C=c[19]
E=c[21]
H=c[22]
G=c[17]
F=c[23]
I=c[11]
D.o2.prototype={
W(){$.aw()
var x=$.aS
if(x==null)x=$.aS=B.H
return new D.TR(x.cj(0,null,y.D),new A.aH(null,y.A),B.k)}}
D.TR.prototype={
ad(){A.mD(B.B,y.z).aU(0,new D.apK(this),y.P)
this.au()},
A(d,e){var x=null
return new C.iF(A.b([A.hi(new D.apJ(this,e),x,x,x,y.D)],y.p),"/home/bookings",x)}}
D.KQ.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.dJ(5),m=C.a3("Description")
m.Q=B.r
m.ch=E.K
m=m.u()
x=C.a3("Total")
x.Q=B.r
x.ch=E.K
w=y.p
x=A.b([new A.aa(E.b4,m,o),B.C,new A.aa(E.b4,x.u(),o)],w)
m=C.a3("Base Fee")
m.Q=B.x
m.ch=E.K
m=m.u()
v=p.c
u="R "+A.h(v.z)
t=C.a3(u)
t.Q=B.x
t.ch=E.K
t=A.b([new A.aa(E.b4,m,o),H.n6,new A.aa(E.b4,t.u(),o)],w)
m=C.a3("Discounts")
m.ch=E.K
m.Q=B.r
m=A.b([new A.aa(E.b4,m.u(),o),B.C,B.C],w)
s=C.a3("Mid Month")
s.Q=B.x
s.ch=E.K
s=s.u()
r=C.a3("R "+A.h(v.Q))
r.Q=B.x
r.ch=E.K
r=A.b([new A.aa(E.b4,s,o),H.n7,new A.aa(E.b4,r.u(),o)],w)
s=C.a3("Loyal customer")
s.ch=E.K
s.Q=B.x
s=s.u()
q=C.a3("R "+A.h(v.as))
q.Q=B.x
q.ch=E.K
q=A.b([new A.aa(E.b4,s,o),H.n8,new A.aa(E.b4,q.u(),o)],w)
s=C.a3("Total amount due:")
s.ch=E.K
s.Q=B.O
s=s.u()
u=C.a3(u)
u.Q=B.O
u.ch=E.K
w=G.RG(A.b([new G.da(new A.br(B.dU,o,o,n,o,o,B.F),x),new G.da(o,t),new G.da(H.dH,m),new G.da(o,r),new G.da(H.dH,q),new G.da(H.dH,A.b([new A.aa(E.b4,s,o),B.C,new A.aa(E.b4,u.u(),o)],w))],y.s),o,H.eq)
n=!v.db
m=C.akM(o,o,!n||p.J2()?B.aV:B.b5,o,o,o,o,o,o,o,o,o,o,B.fN,o,o,o,o)
n=!n||p.J2()?o:new D.a1e(p)
x=C.a3("CANCEL BOOKING")
x.ch=F.WS
return new C.aF(A.b([w,C.bb(C.xH(x.u(),n,m),0,0,0,20)],y.d),B.p,B.A,o,o)},
J2(){var x=Date.now(),w=this.c
if(B.f.cT(A.bv(0,I.aBP(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
D.nU.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=C.cl("INVOICE BOOKING ID: "+n.a+" ")
m.aV$=B.i
m.cx=E.fS
m.d=B.O
x=y.n
w=A.b([],x)
v=n.db
if(v){u=C.bQ("Booking Cancelled")
u.aV$=B.b5
u.as=B.aa
u.e=B.r
w.push(u.u())}m.c=w
m=m.u()
w=C.cl("Created: ")
w.d=B.r
w.cx=F.ev
t=I.aBP(n.dx)
u=C.bQ(""+A.b2(t)+"-"+p.vE(A.bh(t))+"-"+p.vE(A.cw(t))+" | "+p.vE(A.wE(t))+":"+p.vE(A.wF(t)))
u.e=B.x
u.aV$=B.i
w.c=A.b([u.u()],x)
w=w.u()
u=C.cl("Pickup Date-Time: ")
u.d=B.r
u.cx=B.aa
s=C.bQ(n.b+" | ")
s.e=B.x
s.aV$=B.i
s=s.u()
r=C.bQ(n.c+" ")
r.e=B.x
r.aV$=B.i
u.c=A.b([s,r.u()],x)
u.aV$=B.aV
u=u.u()
r=A.ax(B.d.an(127.5),151,38,120)
s=v?o:new D.a1a(p)
w=C.oD(!1,B.Z,o,o,!0,o,o,!1,o,0,o,!1,o,o,u,o,w,C.ld(o,A.op(F.HM,v?B.aV:B.Y,o),o,s,r,15,o),o)
u=C.cl("Distance: ")
u.d=B.r
u.cx=F.ev
s=C.bQ(A.h(G.aEc(n.at,1))+" kms")
s.aV$=B.i
s.e=B.x
u.c=A.b([s.u()],x)
u=u.u()
s=C.cl("Driver Note:")
s.d=B.r
s.cx=F.ev
s.aV$=B.aV
v=n.ax
v=C.bQ(v.length!==0?"\n"+v:"")
v.aV$=B.i
v.e=B.x
s.c=A.b([v.u()],x)
v=y.p
s=C.bb(new C.aF(A.b([u,s.u()],v),B.p,B.A,o,o),16,0,0,0)
u=C.cl("Additional Helpers: ")
u.d=B.r
u.cx=F.ev
r=C.bQ(""+n.ay)
r.aV$=B.i
r.e=B.x
u.c=A.b([r.u()],x)
u=u.u()
r=C.cl("Floors To Carry: ")
r.d=B.r
r.cx=F.ev
r.aV$=B.aV
q=C.bQ(""+n.ch)
q.aV$=B.i
q.e=B.x
r.c=A.b([q.u()],x)
r=C.bb(new C.aF(A.b([u,r.u()],v),B.p,B.A,o,o),16,0,0,0)
$.aw()
u=$.aS
x=u==null?$.aS=B.H:u
x=x.cj(0,o,y.r)
u=$.aS
if(u==null)u=$.aS=B.H
v=C.Sm(new A.aa(E.ai,new C.aF(A.b([m,w,s,r,C.bb(new D.KQ(n,p.gTo(),p.e,x,u.cj(0,o,y.D),o),10,0,0,0)],v),B.p,B.A,o,o),o))
v.c=10
return v.u()},
Tp(){var x=this.e,w=this.c
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
vE(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["nU(mh,l)","~()"])
D.apK.prototype={
$1(d){var x=0,w=A.H(y.P),v=this
var $async$$1=A.D(function(e,f){if(e===1)return A.E(f,w)
while(true)switch(x){case 0:x=2
return A.J(v.a.d.tT(),$async$$1)
case 2:return A.F(null,w)}})
return A.G($async$$1,w)},
$S:47}
D.apJ.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.C
case 1:x=C.bu(new A.aa(E.T,B.bg,u))
x.r=1/0
x.f=this.b.E(y.w).f.a.b
return x.u()
case 3:return C.a3(d.ch).u()
case 2:x=y.p
if(d.ay.d.length!==0){w=C.a3("Your Bookings".toUpperCase())
w.Q=B.O
w.ch=F.TU
w=w.u()
v=C.ox(d.ay.d,new D.apI(this.a),y.V,y.l)
v=C.bu(new C.aF(A.Y(v,!0,v.$ti.i("r.E")),u,u,u,u))
v.r=500
v.y=B.bU
x=C.bu(new C.aF(A.b([new A.aa(new A.ad(16,16,16,16),w,u),v.u()],x),B.p,B.A,u,u))
x.r=1/0
x.DK$=B.R
return A.a(x.DJ$,"_child").u()}else{x=C.bu(new A.aa(E.T,new C.aF(A.b([C.a3("Make your first booking!").u()],x),u,u,u,u),u))
x.r=1/0
x.f=this.b.E(y.w).f.a.b
return x.u()}default:return C.a3("there might be an error in your code check your provider").u()}},
$S:507}
D.apI.prototype={
$2(d,e){return new D.nU(d,new G.AI("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
D.a1e.prototype={
$0(){var x=0,w=A.H(y.H),v=this,u
var $async$$0=A.D(function(d,e){if(d===1)return A.E(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.J(u.f.wI(u.e,u.c,new D.a1d(u)),$async$$0)
case 2:return A.F(null,w)}})
return A.G($async$$0,w)},
$S:2}
D.a1d.prototype={
$0(){var x=0,w=A.H(y.H),v=this
var $async$$0=A.D(function(d,e){if(d===1)return A.E(e,w)
while(true)switch(x){case 0:x=2
return A.J(v.a.r.tT(),$async$$0)
case 2:return A.F(null,w)}})
return A.G($async$$0,w)},
$S:2}
D.a1a.prototype={
$0(){var x=0,w=A.H(y.H),v=this,u,t,s
var $async$$0=A.D(function(d,e){if(d===1)return A.E(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.ah(["retrieve",u.f],t,t)
A.dN($.aw(),"/home/bookings/"+u.a,s,y.z)
return A.F(null,w)}})
return A.G($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(D.nU.prototype,"gTo","Tp",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(D.o2,A.S)
x(D.TR,A.W)
w(A.ca,[D.apK,D.apJ])
x(D.apI,A.fC)
w(A.a1,[D.KQ,D.nU])
w(A.jy,[D.a1e,D.a1d,D.a1a])})()
A.fq(b.typeUniverse,JSON.parse('{"o2":{"S":[],"d":[]},"TR":{"W":["o2"]},"KQ":{"a1":[],"d":[]},"nU":{"a1":[],"d":[]}}'))
var y=(function rtii(){var x=A.K
return{l:x("nU"),V:x("mh"),r:x("nV"),O:x("n<dy>"),d:x("n<av>"),s:x("n<da>"),n:x("n<et>"),p:x("n<d>"),A:x("aH<ki>"),w:x("d1"),P:x("ay"),D:x("kg"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){F.HM=new A.cM(983823,"MaterialIcons",null,!1)
F.TU=new A.x(!0,B.i,null,"Montserrat-SemiBold",null,null,18,B.r,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.ev=new A.x(!0,B.aV,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.WS=new A.x(!0,B.l,null,null,null,null,14,B.x,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()}
$__dart_deferred_initializers__["7CqjR+YTWoS1Uf0zjLX1oJqVNsA="] = $__dart_deferred_initializers__.current
