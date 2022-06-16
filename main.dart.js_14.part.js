self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var D={
aTZ(){return new D.od(null)},
od:function od(d){this.a=d},
Ue:function Ue(d,e,f){var _=this
_.d=d
_.e=e
_.a=null
_.b=f
_.c=null},
aq8:function aq8(d){this.a=d},
aq7:function aq7(d,e){this.a=d
this.b=e},
aq6:function aq6(d){this.a=d},
L9:function L9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a1D:function a1D(d){this.a=d},
a1C:function a1C(d){this.a=d},
o4:function o4(d,e,f){this.c=d
this.e=e
this.a=f},
a1z:function a1z(d){this.a=d}},B,A,C,E,H,G,F,I,K
D=a.updateHolder(c[6],D)
B=c[2]
A=c[0]
C=c[19]
E=c[21]
H=c[22]
G=c[17]
F=c[23]
I=c[11]
K=c[24]
D.od.prototype={
X(){$.ax()
var x=$.aS
if(x==null)x=$.aS=B.P
return new D.Ue(x.ck(0,null,y.D),new A.aJ(null,y.A),B.k)}}
D.Ue.prototype={
aa(){A.mQ(B.F,y.z).aW(0,new D.aq8(this),y.P)
this.ar()},
A(d,e){var x=null
return new C.iP(A.b([A.hv(new D.aq7(this,e),x,x,x,y.D)],y.p),"/home/bookings",x)}}
D.L9.prototype={
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
m.Q=B.x
m.ch=E.T
m=m.t()
v=p.c
u="R "+A.e(v.z)
t=C.a7(u)
t.Q=B.x
t.ch=E.T
t=A.b([new A.ad(E.bb,m,o),H.ng,new A.ad(E.bb,t.t(),o)],w)
m=C.a7("Discounts")
m.ch=E.T
m.Q=B.r
m=A.b([new A.ad(E.bb,m.t(),o),B.G,B.G],w)
s=C.a7("Mid Month")
s.Q=B.x
s.ch=E.T
s=s.t()
r=C.a7("R "+A.e(v.Q))
r.Q=B.x
r.ch=E.T
r=A.b([new A.ad(E.bb,s,o),H.nh,new A.ad(E.bb,r.t(),o)],w)
s=C.a7("Loyal customer")
s.ch=E.T
s.Q=B.x
s=s.t()
q=C.a7("R "+A.e(v.as))
q.Q=B.x
q.ch=E.T
q=A.b([new A.ad(E.bb,s,o),H.ni,new A.ad(E.bb,q.t(),o)],w)
s=C.a7("Total amount due:")
s.ch=E.T
s.Q=B.U
s=s.t()
u=C.a7(u)
u.Q=B.U
u.ch=E.T
w=G.S7(A.b([new G.df(new A.bu(B.e2,o,o,n,o,o,B.M),x),new G.df(o,t),new G.df(H.dP,m),new G.df(o,r),new G.df(H.dP,q),new G.df(H.dP,A.b([new A.ad(E.bb,s,o),B.G,new A.ad(E.bb,u.t(),o)],w))],y.s),o,H.er)
n=!v.db
m=C.al9(o,o,!n||p.J9()?B.b1:B.bc,o,o,o,o,o,o,o,o,o,o,B.fR,o,o,o,o)
n=!n||p.J9()?o:new D.a1D(p)
x=C.a7("CANCEL BOOKING")
x.ch=F.Xc
return new C.aG(A.b([w,C.be(C.y0(x.t(),n,m),0,0,0,20)],y.d),B.p,B.B,o,o)},
J9(){var x=Date.now(),w=this.c
if(B.f.cv(A.bC(0,I.aCf(A.e(w.b)+" "+A.e(w.c)).a-x,0).a,1e6)<=0)return!0
return!1}}
D.o4.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=C.cn("INVOICE BOOKING ID: "+A.e(n.a)+" ")
m.aU$=B.i
m.cx=E.fV
m.d=B.U
x=y.n
w=A.b([],x)
v=n.db
if(v){u=C.bR("Booking Cancelled")
u.aU$=B.bc
u.as=B.ag
u.e=B.r
w.push(u.t())}m.c=w
m=m.t()
w=C.cn("Created: ")
w.d=B.r
w.cx=F.ew
t=I.aCf(n.dx)
u=C.bR(""+A.b3(t)+"-"+p.vG(A.bk(t))+"-"+p.vG(A.cy(t))+" | "+p.vG(A.wZ(t))+":"+p.vG(A.x_(t)))
u.e=B.x
u.aU$=B.i
w.c=A.b([u.t()],x)
w=w.t()
u=C.cn("Pickup Date-Time: ")
u.d=B.r
u.cx=B.ag
s=C.bR(A.e(n.b)+" | ")
s.e=B.x
s.aU$=B.i
s=s.t()
r=C.bR(A.e(n.c)+" ")
r.e=B.x
r.aU$=B.i
u.c=A.b([s,r.t()],x)
u.aU$=B.b1
u=u.t()
r=A.ay(B.e.an(127.5),151,38,120)
s=v?o:new D.a1z(p)
w=C.oN(!1,B.a4,o,o,!0,o,o,!1,o,0,o,!1,o,o,u,o,w,C.ll(o,A.oz(F.I6,v?B.b1:B.a3,o),o,s,r,15,o),o)
u=C.cn("Distance: ")
u.d=B.r
u.cx=F.ew
s=C.bR(A.e(G.aED(n.at,1))+" kms")
s.aU$=B.i
s.e=B.x
u.c=A.b([s.t()],x)
u=u.t()
s=C.cn("Driver Note:")
s.d=B.r
s.cx=F.ew
s.aU$=B.b1
v=n.ax
v=C.bR(v.length!==0?"\n"+v:"")
v.aU$=B.i
v.e=B.x
s.c=A.b([v.t()],x)
v=y.p
s=C.be(new C.aG(A.b([u,s.t()],v),B.p,B.B,o,o),16,0,0,0)
u=C.cn("Additional Helpers: ")
u.d=B.r
u.cx=F.ew
r=C.bR(A.e(n.ay))
r.aU$=B.i
r.e=B.x
u.c=A.b([r.t()],x)
u=u.t()
r=C.cn("Floors To Carry: ")
r.d=B.r
r.cx=F.ew
r.aU$=B.b1
q=C.bR(A.e(n.ch))
q.aU$=B.i
q.e=B.x
r.c=A.b([q.t()],x)
r=C.be(new C.aG(A.b([u,r.t()],v),B.p,B.B,o,o),16,0,0,0)
$.ax()
u=$.aS
x=u==null?$.aS=B.P:u
x=x.ck(0,o,y.r)
u=$.aS
if(u==null)u=$.aS=B.P
v=C.SL(new A.ad(E.ap,new C.aG(A.b([m,w,s,r,C.be(new D.L9(n,p.gTs(),p.e,x,u.ck(0,o,y.D),o),10,0,0,0)],v),B.p,B.B,o,o),o))
v.c=10
return v.t()},
Tt(){var x=this.e,w=this.c
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
vG(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["o4(ms,m)","~()"])
D.aq8.prototype={
$1(d){var x=0,w=A.I(y.P),v=this
var $async$$1=A.E(function(e,f){if(e===1)return A.F(f,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.d.tU(),$async$$1)
case 2:return A.G(null,w)}})
return A.H($async$$1,w)},
$S:47}
D.aq7.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.G
case 1:x=C.bw(new A.ad(E.Z,B.bf,u))
x.r=1/0
x.f=this.b.D(y.w).f.a.b
return x.t()
case 3:return C.a7(d.ch).t()
case 2:x=y.p
if(d.ay.d.length!==0){w=C.a7("Your Bookings".toUpperCase())
w.Q=B.U
w.ch=K.mL
w=w.t()
v=C.oH(d.ay.d,new D.aq6(this.a),y.V,y.l)
v=C.bw(new C.aG(A.a0(v,!0,v.$ti.i("t.E")),u,u,u,u))
v.r=500
v.y=B.bV
x=C.bw(new C.aG(A.b([new A.ad(new A.ag(16,16,16,16),w,u),v.t()],x),B.p,B.B,u,u))
x.r=1/0
x.DS$=B.a_
return A.a(x.DR$,"_child").t()}else{x=C.bw(new A.ad(E.Z,new C.aG(A.b([C.a7("Make your first booking!").t()],x),u,u,u,u),u))
x.r=1/0
x.f=this.b.D(y.w).f.a.b
return x.t()}default:return C.a7("there might be an error in your code check your provider").t()}},
$S:506}
D.aq6.prototype={
$2(d,e){return new D.o4(d,new G.B_("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
D.a1D.prototype={
$0(){var x=0,w=A.I(y.H),v=this,u
var $async$$0=A.E(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.L(u.f.wK(u.e,u.c,new D.a1C(u)),$async$$0)
case 2:return A.G(null,w)}})
return A.H($async$$0,w)},
$S:2}
D.a1C.prototype={
$0(){var x=0,w=A.I(y.H),v=this
var $async$$0=A.E(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.r.tU(),$async$$0)
case 2:return A.G(null,w)}})
return A.H($async$$0,w)},
$S:2}
D.a1z.prototype={
$0(){var x=0,w=A.I(y.H),v=this,u,t,s
var $async$$0=A.E(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.al(["retrieve",u.f],t,t)
A.dV($.ax(),"/home/bookings/"+A.e(u.a),s,y.z)
return A.G(null,w)}})
return A.H($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(D.o4.prototype,"gTs","Tt",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(D.od,A.V)
x(D.Ue,A.Z)
w(A.dj,[D.aq8,D.aq7])
x(D.aq6,A.fK)
w(A.a5,[D.L9,D.o4])
w(A.jH,[D.a1D,D.a1C,D.a1z])})()
A.fy(b.typeUniverse,JSON.parse('{"od":{"V":[],"f":[]},"Ue":{"Z":["od"]},"L9":{"a5":[],"f":[]},"o4":{"a5":[],"f":[]}}'))
var y=(function rtii(){var x=A.B
return{l:x("o4"),V:x("ms"),r:x("o5"),O:x("k<dF>"),d:x("k<av>"),s:x("k<df>"),n:x("k<eA>"),p:x("k<f>"),A:x("aJ<kq>"),w:x("d4"),P:x("aA"),D:x("ko"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){F.I6=new A.cR(983823,"MaterialIcons",null,!1)
F.ew=new A.x(!0,B.b1,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.Xc=new A.x(!0,B.l,null,null,null,null,14,B.x,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()}
$__dart_deferred_initializers__["lOQNJW9h7qCwEAjEFJAyTSPrVfg="] = $__dart_deferred_initializers__.current
