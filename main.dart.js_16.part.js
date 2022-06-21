self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
aZx(){return new C.oO(null)},
oO:function oO(d){this.a=d},
WA:function WA(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
auk:function auk(d){this.a=d},
auj:function auj(d){this.a=d},
aui:function aui(){},
N_:function N_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a4x:function a4x(d){this.a=d},
a4w:function a4w(d){this.a=d},
oG:function oG(d,e,f){this.c=d
this.d=e
this.a=f},
a4t:function a4t(d){this.a=d}},A,B,D,E,G,F,H,K,I,L
C=a.updateHolder(c[6],C)
A=c[0]
B=c[2]
D=c[20]
E=c[23]
G=c[24]
F=c[25]
H=c[17]
K=c[11]
I=c[26]
L=c[19]
C.oO.prototype={
X(){return new C.WA(A.cG($.aN(),A.T0(),y.D),B.l)}}
C.WA.prototype={
ae(){A.lK(B.z,y.z).aY(0,new C.auk(this),y.P)
this.aA()},
B(d,e){var x=null
return new D.jo(A.b([A.hd(new C.auj(e),x,x,x,y.D)],y.p),"/signed-in/bookings",x)}}
C.N_.prototype={
B(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.cE(5),m=A.a2("Description")
m.Q=B.a2
m.ch=E.ch
m=m.v()
x=A.a2("Total")
x.Q=B.a2
x.ch=E.ch
w=y.p
x=A.b([new A.ah(E.b5,m,o),B.G,new A.ah(E.b5,x.v(),o)],w)
m=A.a2("Base Fee")
m.ch=E.I
m=m.v()
v=p.c
u="R "+A.d(v.z)
t=A.a2(u)
t.ch=E.I
t=A.b([new A.ah(E.b5,m,o),G.oL,new A.ah(E.b5,t.v(),o)],w)
m=A.a2("Discounts")
m.ch=E.ch
m.Q=B.a2
m=A.b([new A.ah(E.b5,m.v(),o),B.G,B.G],w)
s=A.a2("Mid Month")
s.ch=E.I
s=s.v()
r=A.a2("R "+A.d(v.Q))
r.ch=E.I
r=A.b([new A.ah(E.b5,s,o),F.Bz,new A.ah(E.b5,r.v(),o)],w)
s=A.a2("Loyal customer")
s.ch=E.I
s=s.v()
q=A.a2("R "+A.d(v.as))
q.ch=E.I
q=A.b([new A.ah(E.b5,s,o),G.oK,new A.ah(E.b5,q.v(),o)],w)
s=A.a2("Total amount due:")
s.ch=E.ch
s.Q=B.dB
s=s.v()
u=A.a2(u)
u.Q=B.dB
u.ch=E.ch
w=H.aHS(A.b([new H.dK(new A.bz(B.fF,o,o,n,o,o,B.H),x),new H.dK(o,t),new H.dK(G.ej,m),new H.dK(o,r),new H.dK(G.ej,q),new H.dK(G.ej,A.b([new A.ah(E.b5,s,o),B.G,new A.ah(E.b5,u.v(),o)],w))],y.s),G.nZ)
n=!v.db
m=D.ape(o,o,!n||p.Mn()?B.bI:B.be,o,o,o,o,o,o,o,o,o,o,B.e4,o,o,o,o)
n=!n||p.Mn()?o:new C.a4x(p)
x=A.a2("CANCEL BOOKING")
x.ch=E.df
return new A.aB(A.b([w,D.bd(D.z1(x.v(),n,m),0,0,0,20)],y.d),B.r,B.E,o,o)},
Mn(){var x=Date.now(),w=this.c
if(B.f.cc(A.bh(0,K.aGx(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.oG.prototype={
B(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=D.cK("INVOICE BOOKING ID: "+n.a)
m.d0$=B.k
m.cx=G.o4
x=y.n
w=A.b([],x)
v=n.db
if(v){u=D.c6("\nBooking Cancelled")
u.as=F.a00
u.e=B.a2
w.push(u.v())}m.c=w
m=m.v()
w=D.cK("Created: ")
w.cx=F.de
t=K.aGx(n.dx)
u=D.c6(""+A.b4(t)+"-"+p.xl(A.bo(t))+"-"+p.xl(A.cL(t))+" | "+p.xl(A.xT(t))+":"+p.xl(A.xU(t)))
u.as=E.I
u.d0$=B.k
w.c=A.b([u.v()],x)
w=w.v()
u=D.cK("Pickup Date-Time: ")
u.cx=F.de
s=D.c6(n.b+" | ")
s.as=E.I
s=s.v()
r=D.c6(n.c+" ")
r.as=E.I
u.c=A.b([s,r.v()],x)
u=u.v()
r=A.am(B.d.aj(127.5),151,38,120)
s=v?o:new C.a4t(p)
w=D.lS(!1,B.Y,o,o,!0,o,!1,o,0,o,!1,o,o,u,o,w,D.lM(o,A.PP(F.K9,v?B.bI:B.aj,o),o,s,r,15,o),o)
u=D.cK("Distance: ")
u.cx=F.de
s=D.c6(A.d(H.aJg(n.at,1))+" kms")
s.as=I.ea
u.c=A.b([s.v()],x)
u=u.v()
s=D.cK("Driver Note:")
s.cx=F.de
s.d0$=B.bI
v=n.ax
v=D.c6(v.length!==0?"\n"+v:"")
v.as=I.ea
s.c=A.b([v.v()],x)
v=y.p
s=D.bd(new A.aB(A.b([u,s.v()],v),B.r,B.E,o,o),16,0,0,0)
u=D.cK("Additional Helpers: ")
u.cx=F.de
r=D.c6(""+n.ay)
r.as=I.ea
u.c=A.b([r.v()],x)
u=u.v()
r=D.cK("Floors To Carry: ")
r.cx=F.de
q=D.c6(""+n.ch)
q.as=I.ea
r.c=A.b([q.v()],x)
r=D.bd(new A.aB(A.b([u,r.v()],v),B.r,B.E,o,o),16,0,0,0)
u=D.cK("Vehicle type: ")
u.cx=F.de
q=D.c6(A.d(n.y)+" Ton")
q.as=I.ea
u.c=A.b([q.v()],x)
u=D.bd(u.v(),16,0,0,0)
x=$.aN()
v=L.HB(new A.ah(E.ax,new A.aB(A.b([m,w,s,r,u,D.bd(new C.N_(n,p.gXq(),p.d,A.cG(x,A.aLF(),y.r),A.cG(x,A.T0(),y.D),o),10,0,0,0)],v),B.r,B.E,o,o),o))
v.c=1
v.d0$=B.C
v.d=new A.cb(A.cE(5),new A.bM(B.c4,1,B.O))
return v.v()},
Xr(){var x=this.d,w=this.c
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
xl(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["oG(mS,n)","~()"])
C.auk.prototype={
$1(d){var x=0,w=A.G(y.P),v=this
var $async$$1=A.C(function(e,f){if(e===1)return A.D(f,w)
while(true)switch(x){case 0:x=2
return A.A(v.a.d.vp(),$async$$1)
case 2:return A.E(null,w)}})
return A.F($async$$1,w)},
$S:38}
C.auj.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.G
case 1:return new A.aF(u,this.a.G(y.w).f.a.b,new A.aF(1/0,u,new A.ah(E.R,B.e3,u),u),u)
case 3:return A.a2(d.ch).v()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.b([F.a4_],y.A)
v=D.ph(d.ay.d,new C.aui(),y.V,y.l)
return D.bd(new A.aF(1/0,u,new A.aB(A.b([new A.aF(500,u,new A.aB(w,B.r,B.E,u,u),u),D.bB(new A.aF(500,u,new A.aB(A.Z(v,!0,v.$ti.i("u.E")),u,u,u,u),u),8,0)],x),B.F,B.v,u,u),u),16,0,0,0)}else{x=A.b([A.a2("Make your first booking!").v()],x)
return new A.aF(u,this.a.G(y.w).f.a.b,new A.aF(1/0,u,new A.ah(E.R,new A.aB(x,u,u,u,u),u),u),u)}default:return A.a2("there might be an error in your code check your provider").v()}},
$S:518}
C.aui.prototype={
$2(d,e){return new C.oG(d,new H.Cc("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a4x.prototype={
$0(){var x=0,w=A.G(y.H),v=this,u
var $async$$0=A.C(function(d,e){if(d===1)return A.D(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.A(u.f.yr(u.e,u.c,new C.a4w(u)),$async$$0)
case 2:return A.E(null,w)}})
return A.F($async$$0,w)},
$S:1}
C.a4w.prototype={
$0(){var x=0,w=A.G(y.H),v=this
var $async$$0=A.C(function(d,e){if(d===1)return A.D(e,w)
while(true)switch(x){case 0:x=2
return A.A(v.a.r.vp(),$async$$0)
case 2:return A.E(null,w)}})
return A.F($async$$0,w)},
$S:1}
C.a4t.prototype={
$0(){var x=0,w=A.G(y.H),v=this,u,t,s
var $async$$0=A.C(function(d,e){if(d===1)return A.D(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.an(["retrieve",u.f],t,t)
A.ne($.aN(),"/signed-in/bookings/"+u.a,s,y.z)
return A.E(null,w)}})
return A.F($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(C.oG.prototype,"gXq","Xr",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oO,A.U)
x(C.WA,A.W)
w(A.cg,[C.auk,C.auj])
x(C.aui,A.h5)
w(A.a5,[C.N_,C.oG])
w(A.kg,[C.a4x,C.a4w,C.a4t])})()
A.fp(b.typeUniverse,JSON.parse('{"oO":{"U":[],"f":[]},"WA":{"W":["oO"]},"N_":{"a5":[],"f":[]},"oG":{"a5":[],"f":[]}}'))
var y=(function rtii(){var x=A.L
return{l:x("oG"),V:x("mS"),r:x("oH"),O:x("l<dB>"),d:x("l<av>"),s:x("l<dK>"),n:x("l<eo>"),A:x("l<is>"),p:x("l<f>"),w:x("d8"),P:x("ax"),D:x("kU"),N:x("j"),z:x("@"),H:x("~")}})();(function constants(){F.ZT=new A.eo("Discount given at the middle of the month.",null,null,B.b3,E.df)
F.a4g=new A.jU(null,F.ZT,null,!1,G.fY,G.fq,B.cD,null)
F.Bz=new A.dH(E.ei,null,null,F.a4g,null)
F.K9=new A.dr(983823,"MaterialIcons",null,!1)
F.a00=new A.q(!0,B.be,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.de=new A.q(!0,B.bI,null,null,null,null,14,B.Z,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.a4_=new D.is("Your Bookings",null,null)})()}
$__dart_deferred_initializers__["hAANvLwyTfGzrHNeLYre0D9nwOk="] = $__dart_deferred_initializers__.current
