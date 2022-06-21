self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
aYY(){return new C.oJ(null)},
oJ:function oJ(d){this.a=d},
Wn:function Wn(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
atO:function atO(d){this.a=d},
atN:function atN(d){this.a=d},
atM:function atM(){},
MQ:function MQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a4j:function a4j(d){this.a=d},
a4i:function a4i(d){this.a=d},
oB:function oB(d,e,f){this.c=d
this.d=e
this.a=f},
a4f:function a4f(d){this.a=d}},A,B,D,E,G,F,H,K,I,L
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
C.oJ.prototype={
X(){return new C.Wn(A.dg($.aD(),A.akh(),y.D),B.l)}}
C.Wn.prototype={
ae(){A.lE(B.z,y.z).aX(0,new C.atO(this),y.P)
this.aA()},
B(d,e){var x=null
return new D.jl(A.b([A.hJ(new C.atN(e),x,x,x,y.D)],y.p),"/signed-in/bookings",x)}}
C.MQ.prototype={
B(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.cI(5),m=A.a3("Description")
m.Q=B.a3
m.ch=E.ch
m=m.v()
x=A.a3("Total")
x.Q=B.a3
x.ch=E.ch
w=y.p
x=A.b([new A.ak(E.b4,m,o),B.I,new A.ak(E.b4,x.v(),o)],w)
m=A.a3("Base Fee")
m.ch=E.G
m=m.v()
v=p.c
u="R "+A.d(v.z)
t=A.a3(u)
t.ch=E.G
t=A.b([new A.ak(E.b4,m,o),G.ow,new A.ak(E.b4,t.v(),o)],w)
m=A.a3("Discounts")
m.ch=E.ch
m.Q=B.a3
m=A.b([new A.ak(E.b4,m.v(),o),B.I,B.I],w)
s=A.a3("Mid Month")
s.ch=E.G
s=s.v()
r=A.a3("R "+A.d(v.Q))
r.ch=E.G
r=A.b([new A.ak(E.b4,s,o),F.AT,new A.ak(E.b4,r.v(),o)],w)
s=A.a3("Loyal customer")
s.ch=E.G
s=s.v()
q=A.a3("R "+A.d(v.as))
q.ch=E.G
q=A.b([new A.ak(E.b4,s,o),G.ox,new A.ak(E.b4,q.v(),o)],w)
s=A.a3("Total amount due:")
s.ch=E.ch
s.Q=B.dz
s=s.v()
u=A.a3(u)
u.Q=B.dz
u.ch=E.ch
w=H.aHh(A.b([new H.dJ(new A.bD(B.fD,o,o,n,o,o,B.L),x),new H.dJ(o,t),new H.dJ(G.ei,m),new H.dJ(o,r),new H.dJ(G.ei,q),new H.dJ(G.ei,A.b([new A.ak(E.b4,s,o),B.I,new A.ak(E.b4,u.v(),o)],w))],y.s),G.nL)
n=!v.db
m=D.aoN(o,o,!n||p.Mg()?B.bU:B.bd,o,o,o,o,o,o,o,o,o,o,B.e2,o,o,o,o)
n=!n||p.Mg()?o:new C.a4j(p)
x=A.a3("CANCEL BOOKING")
x.ch=G.ea
return new A.aC(A.b([w,D.bd(D.yW(x.v(),n,m),0,0,0,20)],y.d),B.r,B.E,o,o)},
Mg(){var x=Date.now(),w=this.c
if(B.f.ca(A.bi(0,K.aG_(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.oB.prototype={
B(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=D.cH("INVOICE BOOKING ID: "+n.a)
m.d0$=B.k
m.cx=G.nR
x=y.n
w=A.b([],x)
v=n.db
if(v){u=D.c5("\nBooking Cancelled")
u.as=F.Xm
u.e=B.a3
w.push(u.v())}m.c=w
m=m.v()
w=D.cH("Created: ")
w.cx=F.de
t=K.aG_(n.dx)
u=D.c5(""+A.b4(t)+"-"+p.xf(A.bo(t))+"-"+p.xf(A.cJ(t))+" | "+p.xf(A.xN(t))+":"+p.xf(A.xO(t)))
u.as=E.G
u.d0$=B.k
w.c=A.b([u.v()],x)
w=w.v()
u=D.cH("Pickup Date-Time: ")
u.cx=F.de
s=D.c5(n.b+" | ")
s.as=E.G
s=s.v()
r=D.c5(n.c+" ")
r.as=E.G
u.c=A.b([s,r.v()],x)
u=u.v()
r=A.ap(B.e.ak(127.5),151,38,120)
s=v?o:new C.a4f(p)
w=D.lM(!1,B.Z,o,o,!0,o,!1,o,0,o,!1,o,o,u,o,w,D.lG(o,A.PF(F.JE,v?B.bU:B.ak,o),o,s,r,15,o),o)
u=D.cH("Distance: ")
u.cx=F.de
s=D.c5(A.d(H.aIF(n.at,1))+" kms")
s.as=I.e8
u.c=A.b([s.v()],x)
u=u.v()
s=D.cH("Driver Note:")
s.cx=F.de
s.d0$=B.bU
v=n.ax
v=D.c5(v.length!==0?"\n"+v:"")
v.as=I.e8
s.c=A.b([v.v()],x)
v=y.p
s=D.bd(new A.aC(A.b([u,s.v()],v),B.r,B.E,o,o),16,0,0,0)
u=D.cH("Additional Helpers: ")
u.cx=F.de
r=D.c5(""+n.ay)
r.as=I.e8
u.c=A.b([r.v()],x)
u=u.v()
r=D.cH("Floors To Carry: ")
r.cx=F.de
q=D.c5(""+n.ch)
q.as=I.e8
r.c=A.b([q.v()],x)
r=D.bd(new A.aC(A.b([u,r.v()],v),B.r,B.E,o,o),16,0,0,0)
u=D.cH("Vehicle type: ")
u.cx=F.de
q=D.c5(A.d(n.y)+" Ton")
q.as=I.e8
u.c=A.b([q.v()],x)
u=D.bd(u.v(),16,0,0,0)
x=$.aD()
v=L.Ht(new A.ak(E.ax,new A.aC(A.b([m,w,s,r,u,D.bd(new C.MQ(n,p.gXm(),p.d,A.dg(x,A.aL2(),y.r),A.dg(x,A.akh(),y.D),o),10,0,0,0)],v),B.r,B.E,o,o),o))
v.c=1
v.d0$=B.C
v.d=new A.cc(A.cI(5),new A.bL(B.c4,1,B.P))
return v.v()},
Xn(){var x=this.d,w=this.c
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
xf(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["oB(mK,m)","~()"])
C.atO.prototype={
$1(d){var x=0,w=A.I(y.P),v=this
var $async$$1=A.E(function(e,f){if(e===1)return A.F(f,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.d.vi(),$async$$1)
case 2:return A.G(null,w)}})
return A.H($async$$1,w)},
$S:42}
C.atN.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.I
case 1:return new A.aL(u,this.a.F(y.w).f.a.b,new A.aL(1/0,u,new A.ak(E.S,B.e1,u),u),u)
case 3:return A.a3(d.ch).v()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.b([F.a0g],y.A)
v=D.pc(d.ay.d,new C.atM(),y.V,y.l)
return D.bd(new A.aL(1/0,u,new A.aC(A.b([new A.aL(500,u,new A.aC(w,B.r,B.E,u,u),u),D.bz(new A.aL(500,u,new A.aC(A.Z(v,!0,v.$ti.i("u.E")),u,u,u,u),u),8,0)],x),B.F,B.v,u,u),u),16,0,0,0)}else{x=A.b([A.a3("Make your first booking!").v()],x)
return new A.aL(u,this.a.F(y.w).f.a.b,new A.aL(1/0,u,new A.ak(E.S,new A.aC(x,u,u,u,u),u),u),u)}default:return A.a3("there might be an error in your code check your provider").v()}},
$S:518}
C.atM.prototype={
$2(d,e){return new C.oB(d,new H.C4("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a4j.prototype={
$0(){var x=0,w=A.I(y.H),v=this,u
var $async$$0=A.E(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.L(u.f.yl(u.e,u.c,new C.a4i(u)),$async$$0)
case 2:return A.G(null,w)}})
return A.H($async$$0,w)},
$S:2}
C.a4i.prototype={
$0(){var x=0,w=A.I(y.H),v=this
var $async$$0=A.E(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.r.vi(),$async$$0)
case 2:return A.G(null,w)}})
return A.H($async$$0,w)},
$S:2}
C.a4f.prototype={
$0(){var x=0,w=A.I(y.H),v=this,u,t,s
var $async$$0=A.E(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.am(["retrieve",u.f],t,t)
A.ev($.aD(),"/signed-in/bookings/"+u.a,s,y.z)
return A.G(null,w)}})
return A.H($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(C.oB.prototype,"gXm","Xn",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oJ,A.U)
x(C.Wn,A.W)
w(A.cf,[C.atO,C.atN])
x(C.atM,A.h2)
w(A.a6,[C.MQ,C.oB])
w(A.kc,[C.a4j,C.a4i,C.a4f])})()
A.fq(b.typeUniverse,JSON.parse('{"oJ":{"U":[],"e":[]},"Wn":{"W":["oJ"]},"MQ":{"a6":[],"e":[]},"oB":{"a6":[],"e":[]}}'))
var y=(function rtii(){var x=A.K
return{l:x("oB"),V:x("mK"),r:x("oC"),O:x("k<dA>"),d:x("k<av>"),s:x("k<dJ>"),n:x("k<eo>"),A:x("k<iq>"),p:x("k<e>"),w:x("d6"),P:x("ay"),D:x("kQ"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){F.Wg=new A.eo("Discount given at the middle of the month.",null,null,B.b2,G.ea)
F.a0v=new A.jR(null,F.Wg,null,!1,G.fX,G.fo,B.cD,null)
F.AT=new A.dG(E.eh,null,null,F.a0v,null)
F.JE=new A.dy(983823,"MaterialIcons",null,!1)
F.Xm=new A.q(!0,B.bd,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.de=new A.q(!0,B.bU,null,null,null,null,14,B.ah,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.a0g=new D.iq("Your Bookings",null,null)})()}
$__dart_deferred_initializers__["cLvcnXXoLBYdOcoSFMBcanWywpQ="] = $__dart_deferred_initializers__.current
