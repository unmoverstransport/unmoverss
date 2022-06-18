self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
aYS(){return new C.oB(null)},
oB:function oB(d){this.a=d},
Wf:function Wf(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
atH:function atH(d){this.a=d},
atG:function atG(d){this.a=d},
atF:function atF(){},
ML:function ML(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a40:function a40(d){this.a=d},
a4_:function a4_(d){this.a=d},
os:function os(d,e,f){this.c=d
this.d=e
this.a=f},
a3X:function a3X(d){this.a=d}},B,A,D,E,H,G,F,I
C=a.updateHolder(c[6],C)
B=c[2]
A=c[0]
D=c[19]
E=c[22]
H=c[23]
G=c[17]
F=c[24]
I=c[11]
C.oB.prototype={
V(){$.ax()
var x=$.aR
if(x==null)x=$.aR=B.H
return new C.Wf(x.cn(0,null,y.D),B.l)}}
C.Wf.prototype={
ad(){A.lB(B.B,y.z).aX(0,new C.atH(this),y.P)
this.aw()},
A(d,e){var x=null
return new D.jb(A.b([A.hK(new C.atG(e),x,x,x,y.D)],y.p),"/home/bookings",x)}}
C.ML.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.ef(5),m=A.a_("Description")
m.Q=B.q
m.ch=E.L
m=m.u()
x=A.a_("Total")
x.Q=B.q
x.ch=E.L
w=y.p
x=A.b([new A.ag(E.b0,m,o),B.F,new A.ag(E.b0,x.u(),o)],w)
m=A.a_("Base Fee")
m.Q=B.x
m.ch=E.L
m=m.u()
v=p.c
u="R "+A.d(v.z)
t=A.a_(u)
t.Q=B.x
t.ch=E.L
t=A.b([new A.ag(E.b0,m,o),H.oo,new A.ag(E.b0,t.u(),o)],w)
m=A.a_("Discounts")
m.ch=E.L
m.Q=B.q
m=A.b([new A.ag(E.b0,m.u(),o),B.F,B.F],w)
s=A.a_("Mid Month")
s.Q=B.x
s.ch=E.L
s=s.u()
r=A.a_("R "+A.d(v.Q))
r.Q=B.x
r.ch=E.L
r=A.b([new A.ag(E.b0,s,o),H.op,new A.ag(E.b0,r.u(),o)],w)
s=A.a_("Loyal customer")
s.ch=E.L
s.Q=B.x
s=s.u()
q=A.a_("R "+A.d(v.as))
q.Q=B.x
q.ch=E.L
q=A.b([new A.ag(E.b0,s,o),H.oq,new A.ag(E.b0,q.u(),o)],w)
s=A.a_("Total amount due:")
s.ch=E.L
s.Q=B.a8
s=s.u()
u=A.a_(u)
u.Q=B.a8
u.ch=E.L
w=G.aou(A.b([new G.dB(new A.bP(B.fv,o,o,n,o,o,B.Q),x),new G.dB(o,t),new G.dB(H.e5,m),new G.dB(o,r),new G.dB(H.e5,q),new G.dB(H.e5,A.b([new A.ag(E.b0,s,o),B.F,new A.ag(E.b0,u.u(),o)],w))],y.s),o,H.hF)
n=!v.db
m=D.aoF(o,o,!n||p.LX()?B.b2:B.bb,o,o,o,o,o,o,o,o,o,o,B.hD,o,o,o,o)
n=!n||p.LX()?o:new C.a40(p)
x=A.a_("CANCEL BOOKING")
x.ch=F.Z0
return new A.aC(A.b([w,D.b9(D.yR(x.u(),n,m),0,0,0,20)],y.d),B.r,B.C,o,o)},
LX(){var x=Date.now(),w=this.c
if(B.f.ck(A.bv(0,I.aFU(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.os.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=D.cu("INVOICE BOOKING ID: "+n.a)
m.b8$=B.j
m.cx=E.nO
m.d=B.a8
x=y.n
w=A.b([],x)
v=n.db
if(v){u=D.bY("\nBooking Cancelled")
u.b8$=B.bb
u.as=B.af
u.e=B.q
w.push(u.u())}m.c=w
m=m.u()
w=D.cu("Created: ")
w.d=B.q
w.cx=F.dX
t=I.aFU(n.dx)
u=D.bY(""+A.b5(t)+"-"+p.wZ(A.bl(t))+"-"+p.wZ(A.cI(t))+" | "+p.wZ(A.xI(t))+":"+p.wZ(A.xJ(t)))
u.e=B.x
u.b8$=B.j
w.c=A.b([u.u()],x)
w=w.u()
u=D.cu("Pickup Date-Time: ")
u.d=B.q
u.cx=B.af
s=D.bY(n.b+" | ")
s.e=B.x
s.b8$=B.j
s=s.u()
r=D.bY(n.c+" ")
r.e=B.x
r.b8$=B.j
u.c=A.b([s,r.u()],x)
u.b8$=B.b2
u=u.u()
r=A.az(B.e.ah(127.5),151,38,120)
s=v?o:new C.a3X(p)
w=D.fb(!1,B.Z,o,o,!0,o,!1,o,0,o,!1,o,o,u,o,w,D.lD(o,A.PA(F.Jd,v?B.b2:B.Y,o),o,s,r,15,o),o)
u=D.cu("Distance: ")
u.d=B.q
u.cx=F.dX
s=D.bY(A.d(G.aIv(n.at,1))+" kms")
s.b8$=B.j
s.e=B.x
u.c=A.b([s.u()],x)
u=u.u()
s=D.cu("Driver Note:")
s.d=B.q
s.cx=F.dX
s.b8$=B.b2
v=n.ax
v=D.bY(v.length!==0?"\n"+v:"")
v.b8$=B.j
v.e=B.x
s.c=A.b([v.u()],x)
v=y.p
s=D.b9(new A.aC(A.b([u,s.u()],v),B.r,B.C,o,o),16,0,0,0)
u=D.cu("Additional Helpers: ")
u.d=B.q
u.cx=F.dX
r=D.bY(""+n.ay)
r.b8$=B.j
r.e=B.x
u.c=A.b([r.u()],x)
u=u.u()
r=D.cu("Floors To Carry: ")
r.d=B.q
r.cx=F.dX
q=D.bY(""+n.ch)
q.b8$=B.j
q.e=B.x
r.c=A.b([q.u()],x)
r=D.b9(new A.aC(A.b([u,r.u()],v),B.r,B.C,o,o),16,0,0,0)
u=D.cu("Vehicle type: ")
u.d=B.q
u.cx=F.dX
q=D.bY(A.d(n.y)+" Ton")
q.b8$=B.j
q.e=B.x
u.c=A.b([q.u()],x)
u=D.b9(u.u(),16,0,0,0)
$.ax()
x=$.aR
if(x==null)x=$.aR=B.H
x=x.cn(0,o,y.r)
q=$.aR
if(q==null)q=$.aR=B.H
v=D.qk(new A.ag(E.at,new A.aC(A.b([m,w,s,r,u,D.b9(new C.ML(n,p.gWT(),p.d,x,q.cn(0,o,y.D),o),10,0,0,0)],v),B.r,B.C,o,o),o))
v.c=10
return v.u()},
WU(){var x=this.d,w=this.c
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
var z=a.updateTypes(["os(mI,m)","~()"])
C.atH.prototype={
$1(d){var x=0,w=A.H(y.P),v=this
var $async$$1=A.C(function(e,f){if(e===1)return A.E(f,w)
while(true)switch(x){case 0:x=2
return A.B(v.a.d.v2(),$async$$1)
case 2:return A.F(null,w)}})
return A.G($async$$1,w)},
$S:38}
C.atG.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.F
case 1:return new A.aT(u,this.a.E(y.w).f.a.b,new A.aT(1/0,u,new A.ag(E.P,B.d9,u),u),u)
case 3:return A.a_(d.ch).u()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.a_("Your Bookings".toUpperCase())
w.as=B.a4
w.ch=E.f3
w=w.u()
v=D.p7(d.ay.d,new C.atF(),y.V,y.l)
return D.b9(new A.aT(1/0,u,new A.aC(A.b([new A.aT(500,u,new A.ag(new A.am(16,16,16,16),w,u),u),D.c0(new A.aT(500,u,new A.aC(A.Y(v,!0,v.$ti.i("r.E")),u,u,u,u),u),8,0)],x),B.D,B.v,u,u),u),16,0,0,0)}else{x=A.b([A.a_("Make your first booking!").u()],x)
return new A.aT(u,this.a.E(y.w).f.a.b,new A.aT(1/0,u,new A.ag(E.P,new A.aC(x,u,u,u,u),u),u),u)}default:return A.a_("there might be an error in your code check your provider").u()}},
$S:518}
C.atF.prototype={
$2(d,e){return new C.os(d,new G.BZ("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a40.prototype={
$0(){var x=0,w=A.H(y.H),v=this,u
var $async$$0=A.C(function(d,e){if(d===1)return A.E(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.B(u.f.y9(u.e,u.c,new C.a4_(u)),$async$$0)
case 2:return A.F(null,w)}})
return A.G($async$$0,w)},
$S:2}
C.a4_.prototype={
$0(){var x=0,w=A.H(y.H),v=this
var $async$$0=A.C(function(d,e){if(d===1)return A.E(e,w)
while(true)switch(x){case 0:x=2
return A.B(v.a.r.v2(),$async$$0)
case 2:return A.F(null,w)}})
return A.G($async$$0,w)},
$S:2}
C.a3X.prototype={
$0(){var x=0,w=A.H(y.H),v=this,u,t,s
var $async$$0=A.C(function(d,e){if(d===1)return A.E(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.ae(["retrieve",u.f],t,t)
A.dJ($.ax(),"/home/bookings/"+u.a,s,y.z)
return A.F(null,w)}})
return A.G($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(C.os.prototype,"gWT","WU",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oB,A.T)
x(C.Wf,A.W)
w(A.ce,[C.atH,C.atG])
x(C.atF,A.h1)
w(A.a4,[C.ML,C.os])
w(A.k5,[C.a40,C.a4_,C.a3X])})()
A.fP(b.typeUniverse,JSON.parse('{"oB":{"T":[],"e":[]},"Wf":{"W":["oB"]},"ML":{"a4":[],"e":[]},"os":{"a4":[],"e":[]}}'))
var y=(function rtii(){var x=A.L
return{l:x("os"),V:x("mI"),r:x("ot"),O:x("k<dS>"),d:x("k<aA>"),s:x("k<dB>"),n:x("k<eL>"),p:x("k<e>"),w:x("df"),P:x("aw"),D:x("kI"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){F.Jd=new A.de(983823,"MaterialIcons",null,!1)
F.dX=new A.x(!0,B.b2,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.Z0=new A.x(!0,B.m,null,null,null,null,14,B.x,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()}
$__dart_deferred_initializers__["MmWBoO069RmRRff54PdAm6pu1PQ="] = $__dart_deferred_initializers__.current
