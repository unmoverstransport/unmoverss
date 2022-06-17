self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var D={
aTP(){return new D.oa(null)},
oa:function oa(d){this.a=d},
U8:function U8(d,e,f){var _=this
_.d=d
_.e=e
_.a=null
_.b=f
_.c=null},
aq_:function aq_(d){this.a=d},
apZ:function apZ(d,e){this.a=d
this.b=e},
apY:function apY(d){this.a=d},
L8:function L8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a1y:function a1y(d){this.a=d},
a1x:function a1x(d){this.a=d},
o1:function o1(d,e,f){this.c=d
this.e=e
this.a=f},
a1u:function a1u(d){this.a=d}},B,A,C,E,H,G,F,I
D=a.updateHolder(c[6],D)
B=c[2]
A=c[0]
C=c[19]
E=c[21]
H=c[22]
G=c[17]
F=c[23]
I=c[11]
D.oa.prototype={
X(){$.ax()
var x=$.aS
if(x==null)x=$.aS=B.P
return new D.U8(x.cj(0,null,y.D),new A.aK(null,y.A),B.k)}}
D.U8.prototype={
ab(){A.mM(B.F,y.z).aV(0,new D.aq_(this),y.P)
this.ar()},
A(d,e){var x=null
return new C.iP(A.b([A.hu(new D.apZ(this,e),x,x,x,y.D)],y.p),"/home/bookings",x)}}
D.L8.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.dR(5),m=C.a7("Description")
m.Q=B.r
m.ch=E.T
m=m.t()
x=C.a7("Total")
x.Q=B.r
x.ch=E.T
w=y.p
x=A.b([new A.ad(E.bb,m,o),B.G,new A.ad(E.bb,x.t(),o)],w)
m=C.a7("Base Fee")
m.Q=B.v
m.ch=E.T
m=m.t()
v=p.c
u="R "+A.d(v.z)
t=C.a7(u)
t.Q=B.v
t.ch=E.T
t=A.b([new A.ad(E.bb,m,o),H.nh,new A.ad(E.bb,t.t(),o)],w)
m=C.a7("Discounts")
m.ch=E.T
m.Q=B.r
m=A.b([new A.ad(E.bb,m.t(),o),B.G,B.G],w)
s=C.a7("Mid Month")
s.Q=B.v
s.ch=E.T
s=s.t()
r=C.a7("R "+A.d(v.Q))
r.Q=B.v
r.ch=E.T
r=A.b([new A.ad(E.bb,s,o),H.ni,new A.ad(E.bb,r.t(),o)],w)
s=C.a7("Loyal customer")
s.ch=E.T
s.Q=B.v
s=s.t()
q=C.a7("R "+A.d(v.as))
q.Q=B.v
q.ch=E.T
q=A.b([new A.ad(E.bb,s,o),H.nj,new A.ad(E.bb,q.t(),o)],w)
s=C.a7("Total amount due:")
s.ch=E.T
s.Q=B.V
s=s.t()
u=C.a7(u)
u.Q=B.V
u.ch=E.T
w=G.S_(A.b([new G.de(new A.bC(B.e2,o,o,n,o,o,B.O),x),new G.de(o,t),new G.de(H.dP,m),new G.de(o,r),new G.de(H.dP,q),new G.de(H.dP,A.b([new A.ad(E.bb,s,o),B.G,new A.ad(E.bb,u.t(),o)],w))],y.s),o,H.es)
n=!v.db
m=C.al1(o,o,!n||p.Ja()?B.b1:B.bc,o,o,o,o,o,o,o,o,o,o,B.fT,o,o,o,o)
n=!n||p.Ja()?o:new D.a1y(p)
x=C.a7("CANCEL BOOKING")
x.ch=F.Xd
return new C.aG(A.b([w,C.bd(C.xX(x.t(),n,m),0,0,0,20)],y.d),B.p,B.B,o,o)},
Ja(){var x=Date.now(),w=this.c
if(B.f.ct(A.bx(0,I.aC6(A.d(w.b)+" "+A.d(w.c)).a-x,0).a,1e6)<=0)return!0
return!1}}
D.o1.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=C.cn("INVOICE BOOKING ID: "+A.d(n.a)+" ")
m.aT$=B.i
m.cx=E.fY
m.d=B.V
x=y.n
w=A.b([],x)
v=n.db
if(v){u=C.bR("Booking Cancelled")
u.aT$=B.bc
u.as=B.ah
u.e=B.r
w.push(u.t())}m.c=w
m=m.t()
w=C.cn("Created: ")
w.d=B.r
w.cx=F.ex
t=I.aC6(n.dx)
u=C.bR(""+A.b3(t)+"-"+p.vM(A.bj(t))+"-"+p.vM(A.cz(t))+" | "+p.vM(A.wV(t))+":"+p.vM(A.wW(t)))
u.e=B.v
u.aT$=B.i
w.c=A.b([u.t()],x)
w=w.t()
u=C.cn("Pickup Date-Time: ")
u.d=B.r
u.cx=B.ah
s=C.bR(A.d(n.b)+" | ")
s.e=B.v
s.aT$=B.i
s=s.t()
r=C.bR(A.d(n.c)+" ")
r.e=B.v
r.aT$=B.i
u.c=A.b([s,r.t()],x)
u.aT$=B.b1
u=u.t()
r=A.ay(B.e.am(127.5),151,38,120)
s=v?o:new D.a1u(p)
w=C.oI(!1,B.a4,o,o,!0,o,o,!1,o,0,o,!1,o,o,u,o,w,C.lj(o,A.ra(F.I6,v?B.b1:B.a3,o),o,s,r,15,o),o)
u=C.cn("Distance: ")
u.d=B.r
u.cx=F.ex
s=C.bR(A.d(G.aEt(n.at,1))+" kms")
s.aT$=B.i
s.e=B.v
u.c=A.b([s.t()],x)
u=u.t()
s=C.cn("Driver Note:")
s.d=B.r
s.cx=F.ex
s.aT$=B.b1
v=n.ax
v=C.bR(v.length!==0?"\n"+v:"")
v.aT$=B.i
v.e=B.v
s.c=A.b([v.t()],x)
v=y.p
s=C.bd(new C.aG(A.b([u,s.t()],v),B.p,B.B,o,o),16,0,0,0)
u=C.cn("Additional Helpers: ")
u.d=B.r
u.cx=F.ex
r=C.bR(A.d(n.ay))
r.aT$=B.i
r.e=B.v
u.c=A.b([r.t()],x)
u=u.t()
r=C.cn("Floors To Carry: ")
r.d=B.r
r.cx=F.ex
r.aT$=B.b1
q=C.bR(A.d(n.ch))
q.aT$=B.i
q.e=B.v
r.c=A.b([q.t()],x)
r=C.bd(new C.aG(A.b([u,r.t()],v),B.p,B.B,o,o),16,0,0,0)
$.ax()
u=$.aS
x=u==null?$.aS=B.P:u
x=x.cj(0,o,y.r)
u=$.aS
if(u==null)u=$.aS=B.P
v=C.G_(new A.ad(E.ap,new C.aG(A.b([m,w,s,r,C.bd(new D.L8(n,p.gTw(),p.e,x,u.cj(0,o,y.D),o),10,0,0,0)],v),B.p,B.B,o,o),o))
v.c=10
return v.t()},
Tx(){var x=this.e,w=this.c
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
vM(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["o1(mp,m)","~()"])
D.aq_.prototype={
$1(d){var x=0,w=A.J(y.P),v=this
var $async$$1=A.F(function(e,f){if(e===1)return A.G(f,w)
while(true)switch(x){case 0:x=2
return A.E(v.a.d.u_(),$async$$1)
case 2:return A.H(null,w)}})
return A.I($async$$1,w)},
$S:47}
D.apZ.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.G
case 1:x=C.bv(new A.ad(E.a0,B.bn,u))
x.r=1/0
x.f=this.b.D(y.w).f.a.b
return x.t()
case 3:return C.a7(d.ch).t()
case 2:x=y.p
if(d.ay.d.length!==0){w=C.a7("Your Bookings".toUpperCase())
w.Q=B.V
w.ch=F.Ue
w=w.t()
v=C.oC(d.ay.d,new D.apY(this.a),y.V,y.l)
v=C.bv(new C.aG(A.a0(v,!0,v.$ti.i("t.E")),u,u,u,u))
v.r=500
v.y=B.bU
x=C.bv(new C.aG(A.b([new A.ad(new A.af(16,16,16,16),w,u),v.t()],x),B.p,B.B,u,u))
x.r=1/0
x.DR$=B.Z
return A.a(x.DQ$,"_child").t()}else{x=C.bv(new A.ad(E.a0,new C.aG(A.b([C.a7("Make your first booking!").t()],x),u,u,u,u),u))
x.r=1/0
x.f=this.b.D(y.w).f.a.b
return x.t()}default:return C.a7("there might be an error in your code check your provider").t()}},
$S:507}
D.apY.prototype={
$2(d,e){return new D.o1(d,new G.AZ("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
D.a1y.prototype={
$0(){var x=0,w=A.J(y.H),v=this,u
var $async$$0=A.F(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.E(u.f.wQ(u.e,u.c,new D.a1x(u)),$async$$0)
case 2:return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2}
D.a1x.prototype={
$0(){var x=0,w=A.J(y.H),v=this
var $async$$0=A.F(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:x=2
return A.E(v.a.r.u_(),$async$$0)
case 2:return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2}
D.a1u.prototype={
$0(){var x=0,w=A.J(y.H),v=this,u,t,s
var $async$$0=A.F(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.aj(["retrieve",u.f],t,t)
A.dV($.ax(),"/home/bookings/"+A.d(u.a),s,y.z)
return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(D.o1.prototype,"gTw","Tx",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(D.oa,A.V)
x(D.U8,A.Z)
w(A.di,[D.aq_,D.apZ])
x(D.apY,A.fc)
w(A.a6,[D.L8,D.o1])
w(A.jF,[D.a1y,D.a1x,D.a1u])})()
A.fz(b.typeUniverse,JSON.parse('{"oa":{"V":[],"f":[]},"U8":{"Z":["oa"]},"L8":{"a6":[],"f":[]},"o1":{"a6":[],"f":[]}}'))
var y=(function rtii(){var x=A.A
return{l:x("o1"),V:x("mp"),r:x("o2"),O:x("k<dE>"),d:x("k<aw>"),s:x("k<de>"),n:x("k<ez>"),p:x("k<f>"),A:x("aK<kp>"),w:x("d4"),P:x("aA"),D:x("kn"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){F.I6=new A.cR(983823,"MaterialIcons",null,!1)
F.Ue=new A.x(!0,B.i,null,"Montserrat-SemiBold",null,null,18,B.r,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.ex=new A.x(!0,B.b1,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.Xd=new A.x(!0,B.l,null,null,null,null,14,B.v,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()}
$__dart_deferred_initializers__["In0YAVzRGc54mLnNQpY+rpZM0JY="] = $__dart_deferred_initializers__.current
