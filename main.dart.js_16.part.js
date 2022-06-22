self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
b_0(){return new C.oS(null)},
oS:function oS(d){this.a=d},
WJ:function WJ(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
auG:function auG(d){this.a=d},
auF:function auF(d){this.a=d},
auE:function auE(){},
N4:function N4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a4J:function a4J(d){this.a=d},
a4I:function a4I(d){this.a=d},
oJ:function oJ(d,e,f){this.c=d
this.d=e
this.a=f},
a4F:function a4F(d){this.a=d}},A,B,D,E,H,F,G,K,I,L
C=a.updateHolder(c[6],C)
A=c[0]
B=c[2]
D=c[20]
E=c[23]
H=c[24]
F=c[25]
G=c[17]
K=c[11]
I=c[26]
L=c[19]
C.oS.prototype={
V(){return new C.WJ(A.cH($.aN(),A.T9(),y.D),B.l)}}
C.WJ.prototype={
ae(){A.kv(B.z,null,y.z).aY(0,new C.auG(this),y.P)
this.aA()},
B(d,e){var x=null
return new D.jr(A.b([A.hj(new C.auF(e),x,x,x,y.D)],y.p),"/signed-in/bookings",x)}}
C.N4.prototype={
B(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.cg(5),m=A.a1("Description")
m.Q=B.T
m.ch=E.ci
m=m.u()
x=A.a1("Total")
x.Q=B.T
x.ch=E.ci
w=y.p
x=A.b([new A.ab(E.b5,m,o),B.H,new A.ab(E.b5,x.u(),o)],w)
m=A.a1("Base Fee")
m.ch=E.K
m=m.u()
v=p.c
u="R "+A.d(v.z)
t=A.a1(u)
t.ch=E.K
t=A.b([new A.ab(E.b5,m,o),H.oK,new A.ab(E.b5,t.u(),o)],w)
m=A.a1("Discounts")
m.ch=E.ci
m.Q=B.T
m=A.b([new A.ab(E.b5,m.u(),o),B.H,B.H],w)
s=A.a1("Mid Month")
s.ch=E.K
s=s.u()
r=A.a1("R "+A.d(v.Q))
r.ch=E.K
r=A.b([new A.ab(E.b5,s,o),F.BD,new A.ab(E.b5,r.u(),o)],w)
s=A.a1("Loyal customer")
s.ch=E.K
s=s.u()
q=A.a1("R "+A.d(v.as))
q.ch=E.K
q=A.b([new A.ab(E.b5,s,o),H.oJ,new A.ab(E.b5,q.u(),o)],w)
s=A.a1("Total amount due:")
s.ch=E.ci
s.Q=B.dA
s=s.u()
u=A.a1(u)
u.Q=B.dA
u.ch=E.ci
w=G.aIh(A.b([new G.dJ(new A.bj(B.fG,o,o,n,o,o,B.E),x),new G.dJ(o,t),new G.dJ(H.ek,m),new G.dJ(o,r),new G.dJ(H.ek,q),new G.dJ(H.ek,A.b([new A.ab(E.b5,s,o),B.H,new A.ab(E.b5,u.u(),o)],w))],y.s),H.o0)
n=!v.db
m=D.apy(o,o,!n||p.Mq()?B.bI:B.bd,o,o,o,o,o,o,o,o,o,o,B.e2,o,o,o,o)
n=!n||p.Mq()?o:new C.a4J(p)
x=A.a1("CANCEL BOOKING")
x.ch=E.eb
return new A.at(A.b([w,D.bf(D.z2(x.u(),n,m),0,0,0,20)],y.d),B.r,B.F,o,o)},
Mq(){var x=Date.now(),w=this.c
if(B.f.bR(A.bc(0,K.aGX(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.oJ.prototype={
B(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=D.cK("INVOICE BOOKING ID: "+n.a)
m.dk$=B.k
m.cx=E.hY
x=y.n
w=A.b([],x)
v=n.db
if(v){u=D.c6("\nBooking Cancelled")
u.as=F.a01
u.e=B.T
w.push(u.u())}m.c=w
m=m.u()
w=D.cK("Created: ")
w.cx=F.dc
t=K.aGX(n.dx)
u=D.c6(""+A.b5(t)+"-"+p.xs(A.br(t))+"-"+p.xs(A.cL(t))+" | "+p.xs(A.xV(t))+":"+p.xs(A.xW(t)))
u.as=E.K
u.dk$=B.k
w.c=A.b([u.u()],x)
w=w.u()
u=D.cK("Pickup Date-Time: ")
u.cx=F.dc
s=D.c6(n.b+" | ")
s.as=E.K
s=s.u()
r=D.c6(n.c+" ")
r.as=E.K
u.c=A.b([s,r.u()],x)
u=u.u()
r=A.ai(B.d.aj(127.5),151,38,120)
s=v?o:new C.a4F(p)
w=D.lT(!1,B.Y,o,o,!0,o,!1,o,0,o,!1,o,o,u,o,w,D.fk(o,A.PW(F.Kf,v?B.bI:B.al,o),o,s,r,15,o),o)
u=D.cK("Distance: ")
u.cx=F.dc
s=D.c6(A.d(G.aJG(n.at,1))+" kms")
s.as=I.e9
u.c=A.b([s.u()],x)
u=u.u()
s=D.cK("Driver Note:")
s.cx=F.dc
s.dk$=B.bI
v=n.ax
v=D.c6(v.length!==0?"\n"+v:"")
v.as=I.e9
s.c=A.b([v.u()],x)
v=y.p
s=D.bf(new A.at(A.b([u,s.u()],v),B.r,B.F,o,o),16,0,0,0)
u=D.cK("Additional Helpers: ")
u.cx=F.dc
r=D.c6(""+n.ay)
r.as=I.e9
u.c=A.b([r.u()],x)
u=u.u()
r=D.cK("Floors To Carry: ")
r.cx=F.dc
q=D.c6(""+n.ch)
q.as=I.e9
r.c=A.b([q.u()],x)
r=D.bf(new A.at(A.b([u,r.u()],v),B.r,B.F,o,o),16,0,0,0)
u=D.cK("Vehicle type: ")
u.cx=F.dc
q=D.c6(A.d(n.y)+" Ton")
q.as=I.e9
u.c=A.b([q.u()],x)
u=D.bf(u.u(),16,0,0,0)
x=$.aN()
v=L.HH(A.f4(new A.ab(E.aw,new A.at(A.b([m,w,s,r,u,D.bf(new C.N4(n,p.gXy(),p.d,A.cH(x,A.aM7(),y.r),A.cH(x,A.T9(),y.D),o),10,0,0,0)],v),B.r,B.F,o,o),o),new A.bj(B.m,o,o,o,o,o,B.E),B.av))
v.c=1
v.d=new A.cb(A.cg(5),new A.bK(B.bQ,1,B.N))
return v.u()},
Xz(){var x=this.d,w=this.c
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
xs(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["oJ(mS,n)","~()"])
C.auG.prototype={
$1(d){var x=0,w=A.F(y.P),v=this
var $async$$1=A.B(function(e,f){if(e===1)return A.C(f,w)
while(true)switch(x){case 0:x=2
return A.z(v.a.d.vx(),$async$$1)
case 2:return A.D(null,w)}})
return A.E($async$$1,w)},
$S:43}
C.auF.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.H
case 1:x=D.cD(new A.ab(E.aw,new A.at(A.b([A.ui(B.ae,A.bc(500,0,0),50)],y.x),B.G,B.u,u,u),u))
x.f=this.a.G(y.w).f.a.b
x.r=1/0
return x.u()
case 3:return A.a1(d.ch).u()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.b([F.a3X],y.A)
v=D.pk(d.ay.d,new C.auE(),y.V,y.l)
return D.bf(new A.aE(1/0,u,new A.at(A.b([new A.aE(500,u,new A.at(w,B.r,B.F,u,u),u),D.bA(new A.aE(500,u,new A.at(A.Z(v,!0,v.$ti.i("u.E")),u,u,u,u),u),8,0)],x),B.G,B.u,u,u),u),16,0,0,0)}else{x=A.b([A.a1("Make your first booking!").u()],x)
return new A.aE(u,this.a.G(y.w).f.a.b,new A.aE(1/0,u,new A.ab(E.a3,new A.at(x,u,u,u,u),u),u),u)}default:return A.a1("there might be an error in your code check your provider").u()}},
$S:519}
C.auE.prototype={
$2(d,e){return new C.oJ(d,new G.Cf("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a4J.prototype={
$0(){var x=0,w=A.F(y.H),v=this,u
var $async$$0=A.B(function(d,e){if(d===1)return A.C(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.z(u.f.yx(u.e,u.c,new C.a4I(u)),$async$$0)
case 2:return A.D(null,w)}})
return A.E($async$$0,w)},
$S:1}
C.a4I.prototype={
$0(){var x=0,w=A.F(y.H),v=this
var $async$$0=A.B(function(d,e){if(d===1)return A.C(e,w)
while(true)switch(x){case 0:x=2
return A.z(v.a.r.vx(),$async$$0)
case 2:return A.D(null,w)}})
return A.E($async$$0,w)},
$S:1}
C.a4F.prototype={
$0(){var x=0,w=A.F(y.H),v=this,u,t,s
var $async$$0=A.B(function(d,e){if(d===1)return A.C(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.ap(["retrieve",u.f],t,t)
A.ne($.aN(),"/signed-in/bookings/"+u.a,s,y.z)
return A.D(null,w)}})
return A.E($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(C.oJ.prototype,"gXy","Xz",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oS,A.U)
x(C.WJ,A.W)
w(A.ch,[C.auG,C.auF])
x(C.auE,A.ha)
w(A.a4,[C.N4,C.oJ])
w(A.ki,[C.a4J,C.a4I,C.a4F])})()
A.fv(b.typeUniverse,JSON.parse('{"oS":{"U":[],"f":[]},"WJ":{"W":["oS"]},"N4":{"a4":[],"f":[]},"oJ":{"a4":[],"f":[]}}'))
var y=(function rtii(){var x=A.L
return{l:x("oJ"),V:x("mS"),r:x("oK"),O:x("l<dB>"),d:x("l<av>"),x:x("l<ja>"),s:x("l<dJ>"),n:x("l<eU>"),A:x("l<iw>"),p:x("l<f>"),w:x("d7"),P:x("ay"),D:x("kY"),N:x("j"),z:x("@"),H:x("~")}})();(function constants(){F.ZV=new A.eU("Discount given at the middle of the month.",null,null,B.bl,E.eb)
F.a4b=new A.mt(null,F.ZV,null,!1,H.h_,H.ft,B.ed,null)
F.BD=new A.dG(E.ej,null,null,F.a4b,null)
F.Kf=new A.dr(983823,"MaterialIcons",null,!1)
F.a01=new A.q(!0,B.bd,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.dc=new A.q(!0,B.bI,null,null,null,null,14,B.Z,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.a3X=new D.iw("Your Bookings",null,null)})()}
$__dart_deferred_initializers__["WfXdx74dFILaF+/IyIpewm4rRVo="] = $__dart_deferred_initializers__.current
