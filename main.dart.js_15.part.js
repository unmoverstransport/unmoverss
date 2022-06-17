self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var D={
aYN(){return new D.oA(null)},
oA:function oA(d){this.a=d},
Wa:function Wa(d,e,f){var _=this
_.d=d
_.e=e
_.a=null
_.b=f
_.c=null},
atv:function atv(d){this.a=d},
atu:function atu(d,e){this.a=d
this.b=e},
att:function att(d){this.a=d},
MH:function MH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a3X:function a3X(d){this.a=d},
a3W:function a3W(d){this.a=d},
or:function or(d,e,f){this.c=d
this.e=e
this.a=f},
a3T:function a3T(d){this.a=d}},B,A,C,E,G,F,H,I
D=a.updateHolder(c[6],D)
B=c[2]
A=c[0]
C=c[19]
E=c[22]
G=c[23]
F=c[17]
H=c[24]
I=c[11]
D.oA.prototype={
W(){$.aB()
var x=$.aT
if(x==null)x=$.aT=B.K
return new D.Wa(x.cC(0,null,y.D),new A.aK(null,y.A),B.l)}}
D.Wa.prototype={
ae(){A.n2(B.B,y.z).aY(0,new D.atv(this),y.P)
this.aw()},
A(d,e){var x=null
return new C.j9(A.b([A.hJ(new D.atu(this,e),x,x,x,y.D)],y.p),"/home/bookings",x)}}
D.MH.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.e0(5),m=C.a1("Description")
m.Q=B.t
m.ch=E.M
m=m.u()
x=C.a1("Total")
x.Q=B.t
x.ch=E.M
w=y.p
x=A.b([new A.ag(E.b_,m,o),B.D,new A.ag(E.b_,x.u(),o)],w)
m=C.a1("Base Fee")
m.Q=B.w
m.ch=E.M
m=m.u()
v=p.c
u="R "+A.d(v.z)
t=C.a1(u)
t.Q=B.w
t.ch=E.M
t=A.b([new A.ag(E.b_,m,o),G.oj,new A.ag(E.b_,t.u(),o)],w)
m=C.a1("Discounts")
m.ch=E.M
m.Q=B.t
m=A.b([new A.ag(E.b_,m.u(),o),B.D,B.D],w)
s=C.a1("Mid Month")
s.Q=B.w
s.ch=E.M
s=s.u()
r=C.a1("R "+A.d(v.Q))
r.Q=B.w
r.ch=E.M
r=A.b([new A.ag(E.b_,s,o),G.ok,new A.ag(E.b_,r.u(),o)],w)
s=C.a1("Loyal customer")
s.ch=E.M
s.Q=B.w
s=s.u()
q=C.a1("R "+A.d(v.as))
q.Q=B.w
q.ch=E.M
q=A.b([new A.ag(E.b_,s,o),G.ol,new A.ag(E.b_,q.u(),o)],w)
s=C.a1("Total amount due:")
s.ch=E.M
s.Q=B.a_
s=s.u()
u=C.a1(u)
u.Q=B.a_
u.ch=E.M
w=F.aoi(A.b([new F.dz(new A.bE(B.ft,o,o,n,o,o,B.J),x),new F.dz(o,t),new F.dz(G.e4,m),new F.dz(o,r),new F.dz(G.e4,q),new F.dz(G.e4,A.b([new A.ag(E.b_,s,o),B.D,new A.ag(E.b_,u.u(),o)],w))],y.s),o,G.hC)
n=!v.db
m=C.aot(o,o,!n||p.LX()?B.ba:B.b9,o,o,o,o,o,o,o,o,o,o,B.hA,o,o,o,o)
n=!n||p.LX()?o:new D.a3X(p)
x=C.a1("CANCEL BOOKING")
x.ch=H.YP
return new C.aF(A.b([w,C.be(C.yP(x.u(),n,m),0,0,0,20)],y.d),B.q,B.C,o,o)},
LX(){var x=Date.now(),w=this.c
if(B.f.cm(A.bv(0,I.aFS(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
D.or.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=C.cs("INVOICE BOOKING ID: "+n.a+" ")
m.b0$=B.j
m.cx=E.hG
m.d=B.a_
x=y.n
w=A.b([],x)
v=n.db
if(v){u=C.bZ("Booking Cancelled")
u.b0$=B.b9
u.as=B.af
u.e=B.t
w.push(u.u())}m.c=w
m=m.u()
w=C.cs("Created: ")
w.d=B.t
w.cx=E.cD
t=I.aFS(n.dx)
u=C.bZ(""+A.b5(t)+"-"+p.wZ(A.bl(t))+"-"+p.wZ(A.cI(t))+" | "+p.wZ(A.xH(t))+":"+p.wZ(A.xI(t)))
u.e=B.w
u.b0$=B.j
w.c=A.b([u.u()],x)
w=w.u()
u=C.cs("Pickup Date-Time: ")
u.d=B.t
u.cx=B.af
s=C.bZ(n.b+" | ")
s.e=B.w
s.b0$=B.j
s=s.u()
r=C.bZ(n.c+" ")
r.e=B.w
r.b0$=B.j
u.c=A.b([s,r.u()],x)
u.b0$=B.ba
u=u.u()
r=A.ax(B.e.ah(127.5),151,38,120)
s=v?o:new D.a3T(p)
w=C.kr(!1,B.Z,o,o,!0,o,o,!1,o,0,o,!1,o,o,u,o,w,C.lE(o,A.wN(H.J2,v?B.ba:B.Y,o),o,s,r,15,o),o)
u=C.cs("Distance: ")
u.d=B.t
u.cx=E.cD
s=C.bZ(A.d(F.aIt(n.at,1))+" kms")
s.b0$=B.j
s.e=B.w
u.c=A.b([s.u()],x)
u=u.u()
s=C.cs("Driver Note:")
s.d=B.t
s.cx=E.cD
s.b0$=B.ba
v=n.ax
v=C.bZ(v.length!==0?"\n"+v:"")
v.b0$=B.j
v.e=B.w
s.c=A.b([v.u()],x)
v=y.p
s=C.be(new C.aF(A.b([u,s.u()],v),B.q,B.C,o,o),16,0,0,0)
u=C.cs("Additional Helpers: ")
u.d=B.t
u.cx=E.cD
r=C.bZ(""+n.ay)
r.b0$=B.j
r.e=B.w
u.c=A.b([r.u()],x)
u=u.u()
r=C.cs("Floors To Carry: ")
r.d=B.t
r.cx=E.cD
r.b0$=B.ba
q=C.bZ(""+n.ch)
q.b0$=B.j
q.e=B.w
r.c=A.b([q.u()],x)
r=C.be(new C.aF(A.b([u,r.u()],v),B.q,B.C,o,o),16,0,0,0)
$.aB()
u=$.aT
x=u==null?$.aT=B.K:u
x=x.cC(0,o,y.r)
u=$.aT
if(u==null)u=$.aT=B.K
v=C.za(new A.ag(E.au,new C.aF(A.b([m,w,s,r,C.be(new D.MH(n,p.gWT(),p.e,x,u.cC(0,o,y.D),o),10,0,0,0)],v),B.q,B.C,o,o),o))
v.c=10
return v.u()},
WU(){var x=this.e,w=this.c
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
wZ(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["or(mI,m)","~()"])
D.atv.prototype={
$1(d){var x=0,w=A.H(y.P),v=this
var $async$$1=A.C(function(e,f){if(e===1)return A.E(f,w)
while(true)switch(x){case 0:x=2
return A.B(v.a.d.v2(),$async$$1)
case 2:return A.F(null,w)}})
return A.G($async$$1,w)},
$S:47}
D.atu.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.D
case 1:x=C.bQ(new A.ag(E.R,B.cz,u))
x.r=1/0
x.f=this.b.E(y.w).f.a.b
return x.u()
case 3:return C.a1(d.ch).u()
case 2:x=y.p
if(d.ay.d.length!==0){w=C.a1("Your Bookings".toUpperCase())
w.Q=B.a_
w.ch=H.VS
w=w.u()
v=C.p5(d.ay.d,new D.att(this.a),y.V,y.l)
v=C.bQ(new C.aF(A.Y(v,!0,v.$ti.i("r.E")),u,u,u,u))
v.r=500
v.y=B.c1
x=C.bQ(new C.aF(A.b([new A.ag(new A.aj(16,16,16,16),w,u),v.u()],x),B.q,B.C,u,u))
x.r=1/0
x.G6$=B.T
return A.a(x.G5$,"_child").u()}else{x=C.bQ(new A.ag(E.R,new C.aF(A.b([C.a1("Make your first booking!").u()],x),u,u,u,u),u))
x.r=1/0
x.f=this.b.E(y.w).f.a.b
return x.u()}default:return C.a1("there might be an error in your code check your provider").u()}},
$S:516}
D.att.prototype={
$2(d,e){return new D.or(d,new F.BY("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
D.a3X.prototype={
$0(){var x=0,w=A.H(y.H),v=this,u
var $async$$0=A.C(function(d,e){if(d===1)return A.E(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.B(u.f.y9(u.e,u.c,new D.a3W(u)),$async$$0)
case 2:return A.F(null,w)}})
return A.G($async$$0,w)},
$S:2}
D.a3W.prototype={
$0(){var x=0,w=A.H(y.H),v=this
var $async$$0=A.C(function(d,e){if(d===1)return A.E(e,w)
while(true)switch(x){case 0:x=2
return A.B(v.a.r.v2(),$async$$0)
case 2:return A.F(null,w)}})
return A.G($async$$0,w)},
$S:2}
D.a3T.prototype={
$0(){var x=0,w=A.H(y.H),v=this,u,t,s
var $async$$0=A.C(function(d,e){if(d===1)return A.E(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.ae(["retrieve",u.f],t,t)
A.e4($.aB(),"/home/bookings/"+u.a,s,y.z)
return A.F(null,w)}})
return A.G($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(D.or.prototype,"gWT","WU",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(D.oA,A.T)
x(D.Wa,A.X)
w(A.ci,[D.atv,D.atu])
x(D.att,A.ft)
w(A.a2,[D.MH,D.or])
w(A.k2,[D.a3X,D.a3W,D.a3T])})()
A.fQ(b.typeUniverse,JSON.parse('{"oA":{"T":[],"e":[]},"Wa":{"X":["oA"]},"MH":{"a2":[],"e":[]},"or":{"a2":[],"e":[]}}'))
var y=(function rtii(){var x=A.L
return{l:x("or"),V:x("mI"),r:x("os"),O:x("k<dP>"),d:x("k<ay>"),s:x("k<dz>"),n:x("k<eL>"),p:x("k<e>"),A:x("aK<kL>"),w:x("dd"),P:x("aw"),D:x("kJ"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){H.J2=new A.dw(983823,"MaterialIcons",null,!1)
H.VS=new A.x(!0,B.j,null,"Montserrat-SemiBold",null,null,18,B.t,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
H.YP=new A.x(!0,B.m,null,null,null,null,14,B.w,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()}
$__dart_deferred_initializers__["uR8pXL8cUMJcq9rGVK3gJj6xyAw="] = $__dart_deferred_initializers__.current
