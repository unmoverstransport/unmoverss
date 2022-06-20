self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
aYc(){return new C.oy(null)},
oy:function oy(d){this.a=d},
W2:function W2(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
ato:function ato(d){this.a=d},
atn:function atn(d){this.a=d},
atm:function atm(){},
ME:function ME(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a3K:function a3K(d){this.a=d},
a3J:function a3J(d){this.a=d},
oq:function oq(d,e,f){this.c=d
this.d=e
this.a=f},
a3G:function a3G(d){this.a=d}},A,B,D,E,H,F,G,K,I
C=a.updateHolder(c[6],C)
A=c[0]
B=c[2]
D=c[19]
E=c[22]
H=c[23]
F=c[24]
G=c[17]
K=c[11]
I=c[25]
C.oy.prototype={
W(){return new C.W2(A.cT($.ax(),A.SB(),y.D),B.l)}}
C.W2.prototype={
ad(){A.lB(B.A,y.z).aU(0,new C.ato(this),y.P)
this.av()},
A(d,e){var x=null
return new D.jb(A.b([A.hH(new C.atn(e),x,x,x,y.D)],y.p),"/signed-in/bookings",x)}}
C.ME.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.cF(5),m=A.a_("Description")
m.Q=B.T
m.ch=E.ch
m=m.u()
x=A.a_("Total")
x.Q=B.T
x.ch=E.ch
w=y.p
x=A.b([new A.ah(E.b1,m,o),B.F,new A.ah(E.b1,x.u(),o)],w)
m=A.a_("Base Fee")
m.ch=E.D
m=m.u()
v=p.c
u="R "+A.d(v.z)
t=A.a_(u)
t.ch=E.D
t=A.b([new A.ah(E.b1,m,o),H.or,new A.ah(E.b1,t.u(),o)],w)
m=A.a_("Discounts")
m.ch=E.ch
m.Q=B.T
m=A.b([new A.ah(E.b1,m.u(),o),B.F,B.F],w)
s=A.a_("Mid Month")
s.ch=E.D
s=s.u()
r=A.a_("R "+A.d(v.Q))
r.ch=E.D
r=A.b([new A.ah(E.b1,s,o),F.AJ,new A.ah(E.b1,r.u(),o)],w)
s=A.a_("Loyal customer")
s.ch=E.D
s=s.u()
q=A.a_("R "+A.d(v.as))
q.ch=E.D
q=A.b([new A.ah(E.b1,s,o),H.os,new A.ah(E.b1,q.u(),o)],w)
s=A.a_("Total amount due:")
s.ch=E.ch
s.Q=B.dB
s=s.u()
u=A.a_(u)
u.Q=B.dB
u.ch=E.ch
w=G.ao9(A.b([new G.dB(new A.bJ(B.fz,o,o,n,o,o,B.K),x),new G.dB(o,t),new G.dB(H.ef,m),new G.dB(o,r),new G.dB(H.ef,q),new G.dB(H.ef,A.b([new A.ah(E.b1,s,o),B.F,new A.ah(E.b1,u.u(),o)],w))],y.s),o,H.hM)
n=!v.db
m=D.aok(o,o,!n||p.Ly()?B.bF:B.bb,o,o,o,o,o,o,o,o,o,o,B.f2,o,o,o,o)
n=!n||p.Ly()?o:new C.a3K(p)
x=A.a_("CANCEL BOOKING")
x.ch=E.dh
return new A.az(A.b([w,D.b8(D.yI(x.u(),n,m),0,0,0,20)],y.d),B.q,B.B,o,o)},
Ly(){var x=Date.now(),w=this.c
if(B.f.c8(A.bh(0,K.aFh(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.oq.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=D.cC("INVOICE BOOKING ID: "+n.a)
m.ce$=B.k
m.cx=E.df
x=y.n
w=A.b([],x)
v=n.db
if(v){u=D.c_("\nBooking Cancelled")
u.as=F.Xd
u.e=B.T
w.push(u.u())}m.c=w
m=m.u()
w=D.cC("Created: ")
w.cx=F.dg
t=K.aFh(n.dx)
u=D.c_(""+A.b4(t)+"-"+p.wK(A.bm(t))+"-"+p.wK(A.cG(t))+" | "+p.wK(A.xz(t))+":"+p.wK(A.xA(t)))
u.as=E.D
u.ce$=B.k
w.c=A.b([u.u()],x)
w=w.u()
u=D.cC("Pickup Date-Time: ")
u.cx=F.dg
s=D.c_(n.b+" | ")
s.as=E.D
s=s.u()
r=D.c_(n.c+" ")
r.as=E.D
u.c=A.b([s,r.u()],x)
u=u.u()
r=A.aA(B.e.al(127.5),151,38,120)
s=v?o:new C.a3G(p)
w=D.fb(!1,B.Z,o,o,!0,o,!1,o,0,o,!1,o,o,u,o,w,D.lD(o,A.Pt(F.Js,v?B.bF:B.X,o),o,s,r,15,o),o)
u=D.cC("Distance: ")
u.cx=F.dg
s=D.c_(A.d(G.aHX(n.at,1))+" kms")
s.as=I.e4
u.c=A.b([s.u()],x)
u=u.u()
s=D.cC("Driver Note:")
s.cx=F.dg
s.ce$=B.bF
v=n.ax
v=D.c_(v.length!==0?"\n"+v:"")
v.as=I.e4
s.c=A.b([v.u()],x)
v=y.p
s=D.b8(new A.az(A.b([u,s.u()],v),B.q,B.B,o,o),16,0,0,0)
u=D.cC("Additional Helpers: ")
u.cx=F.dg
r=D.c_(""+n.ay)
r.as=I.e4
u.c=A.b([r.u()],x)
u=u.u()
r=D.cC("Floors To Carry: ")
r.cx=F.dg
q=D.c_(""+n.ch)
q.as=I.e4
r.c=A.b([q.u()],x)
r=D.b8(new A.az(A.b([u,r.u()],v),B.q,B.B,o,o),16,0,0,0)
u=D.cC("Vehicle type: ")
u.cx=F.dg
q=D.c_(A.d(n.y)+" Ton")
q.as=I.e4
u.c=A.b([q.u()],x)
u=D.b8(u.u(),16,0,0,0)
x=$.ax()
v=D.qf(new A.ah(E.as,new A.az(A.b([m,w,s,r,u,D.b8(new C.ME(n,p.gWv(),p.d,A.cT(x,A.aKl(),y.r),A.cT(x,A.SB(),y.D),o),10,0,0,0)],v),B.q,B.B,o,o),o))
v.c=1
v.ce$=B.w
v.d=new A.cs(A.cF(5),new A.bI(B.bx,1,B.O))
return v.u()},
Ww(){var x=this.d,w=this.c
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
wK(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["oq(mE,m)","~()"])
C.ato.prototype={
$1(d){var x=0,w=A.J(y.P),v=this
var $async$$1=A.E(function(e,f){if(e===1)return A.G(f,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.d.uR(),$async$$1)
case 2:return A.H(null,w)}})
return A.I($async$$1,w)},
$S:36}
C.atn.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.F
case 1:return new A.aJ(u,this.a.E(y.w).f.a.b,new A.aJ(1/0,u,new A.ah(E.M,B.e_,u),u),u)
case 3:return A.a_(d.ch).u()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.b([F.a_r],y.A)
v=D.p3(d.ay.d,new C.atm(),y.V,y.l)
return D.b8(new A.aJ(1/0,u,new A.az(A.b([new A.aJ(500,u,new A.az(w,B.q,B.B,u,u),u),D.bw(new A.aJ(500,u,new A.az(A.Y(v,!0,v.$ti.i("r.E")),u,u,u,u),u),8,0)],x),B.C,B.u,u,u),u),16,0,0,0)}else{x=A.b([A.a_("Make your first booking!").u()],x)
return new A.aJ(u,this.a.E(y.w).f.a.b,new A.aJ(1/0,u,new A.ah(E.M,new A.az(x,u,u,u,u),u),u),u)}default:return A.a_("there might be an error in your code check your provider").u()}},
$S:513}
C.atm.prototype={
$2(d,e){return new C.oq(d,new G.BP("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a3K.prototype={
$0(){var x=0,w=A.J(y.H),v=this,u
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.L(u.f.xO(u.e,u.c,new C.a3J(u)),$async$$0)
case 2:return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2}
C.a3J.prototype={
$0(){var x=0,w=A.J(y.H),v=this
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.r.uR(),$async$$0)
case 2:return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2}
C.a3G.prototype={
$0(){var x=0,w=A.J(y.H),v=this,u,t,s
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.ak(["retrieve",u.f],t,t)
A.dJ($.ax(),"/signed-in/bookings/"+u.a,s,y.z)
return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(C.oq.prototype,"gWv","Ww",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oy,A.T)
x(C.W2,A.W)
w(A.cc,[C.ato,C.atn])
x(C.atm,A.h_)
w(A.a5,[C.ME,C.oq])
w(A.k7,[C.a3K,C.a3J,C.a3G])})()
A.fM(b.typeUniverse,JSON.parse('{"oy":{"T":[],"e":[]},"W2":{"W":["oy"]},"ME":{"a5":[],"e":[]},"oq":{"a5":[],"e":[]}}'))
var y=(function rtii(){var x=A.K
return{l:x("oq"),V:x("mE"),r:x("or"),O:x("k<dU>"),d:x("k<aC>"),s:x("k<dB>"),n:x("k<ev>"),A:x("k<io>"),p:x("k<e>"),w:x("d5"),P:x("aw"),D:x("kJ"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){F.We=new A.ev("Discount given at the middle of the month.",null,null,B.aW,E.dh)
F.a_H=new A.jK(null,F.We,null,!1,H.fU,H.fk,B.cF,null)
F.AJ=new A.d9(E.ee,null,null,F.a_H,null)
F.Js=new A.dn(983823,"MaterialIcons",null,!1)
F.Xd=new A.v(!0,B.bb,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.dg=new A.v(!0,B.bF,null,null,null,null,14,B.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.a_r=new D.io("Your Bookings",null,null)})()}
$__dart_deferred_initializers__["TxM0KlbJAUlfE+2GNKyXn18H2nY="] = $__dart_deferred_initializers__.current
