self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
aYO(){return new C.oE(null)},
oE:function oE(d){this.a=d},
Wc:function Wc(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
atM:function atM(d){this.a=d},
atL:function atL(d){this.a=d},
atK:function atK(){},
MK:function MK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a43:function a43(d){this.a=d},
a42:function a42(d){this.a=d},
ow:function ow(d,e,f){this.c=d
this.d=e
this.a=f},
a4_:function a4_(d){this.a=d}},A,B,D,E,G,F,H,K,I
C=a.updateHolder(c[6],C)
A=c[0]
B=c[2]
D=c[19]
E=c[22]
G=c[23]
F=c[24]
H=c[17]
K=c[11]
I=c[25]
C.oE.prototype={
W(){return new C.Wc(A.cW($.ax(),A.SL(),y.D),B.l)}}
C.Wc.prototype={
ad(){A.lC(B.A,y.z).aU(0,new C.atM(this),y.P)
this.az()},
B(d,e){var x=null
return new D.jc(A.b([A.hJ(new C.atL(e),x,x,x,y.D)],y.p),"/signed-in/bookings",x)}}
C.MK.prototype={
B(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.cH(5),m=A.a0("Description")
m.Q=B.W
m.ch=E.ci
m=m.u()
x=A.a0("Total")
x.Q=B.W
x.ch=E.ci
w=y.p
x=A.b([new A.ai(E.b4,m,o),B.H,new A.ai(E.b4,x.u(),o)],w)
m=A.a0("Base Fee")
m.ch=E.I
m=m.u()
v=p.c
u="R "+A.d(v.z)
t=A.a0(u)
t.ch=E.I
t=A.b([new A.ai(E.b4,m,o),G.ov,new A.ai(E.b4,t.u(),o)],w)
m=A.a0("Discounts")
m.ch=E.ci
m.Q=B.W
m=A.b([new A.ai(E.b4,m.u(),o),B.H,B.H],w)
s=A.a0("Mid Month")
s.ch=E.I
s=s.u()
r=A.a0("R "+A.d(v.Q))
r.ch=E.I
r=A.b([new A.ai(E.b4,s,o),F.AT,new A.ai(E.b4,r.u(),o)],w)
s=A.a0("Loyal customer")
s.ch=E.I
s=s.u()
q=A.a0("R "+A.d(v.as))
q.ch=E.I
q=A.b([new A.ai(E.b4,s,o),G.ow,new A.ai(E.b4,q.u(),o)],w)
s=A.a0("Total amount due:")
s.ch=E.ci
s.Q=B.dB
s=s.u()
u=A.a0(u)
u.Q=B.dB
u.ch=E.ci
w=H.aHa(A.b([new H.dM(new A.bE(B.fB,o,o,n,o,o,B.L),x),new H.dM(o,t),new H.dM(G.ek,m),new H.dM(o,r),new H.dM(G.ek,q),new H.dM(G.ek,A.b([new A.ai(E.b4,s,o),B.H,new A.ai(E.b4,u.u(),o)],w))],y.s),G.nM)
n=!v.db
m=D.aoJ(o,o,!n||p.LJ()?B.bU:B.bd,o,o,o,o,o,o,o,o,o,o,B.e3,o,o,o,o)
n=!n||p.LJ()?o:new C.a43(p)
x=A.a0("CANCEL BOOKING")
x.ch=G.eb
return new A.az(A.b([w,D.bb(D.yM(x.u(),n,m),0,0,0,20)],y.d),B.r,B.E,o,o)},
LJ(){var x=Date.now(),w=this.c
if(B.f.c9(A.bq(0,K.aFS(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.ow.prototype={
B(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=D.cF("INVOICE BOOKING ID: "+n.a)
m.cS$=B.k
m.cx=E.hS
x=y.n
w=A.b([],x)
v=n.db
if(v){u=D.c3("\nBooking Cancelled")
u.as=F.Xu
u.e=B.W
w.push(u.u())}m.c=w
m=m.u()
w=D.cF("Created: ")
w.cx=F.df
t=K.aFS(n.dx)
u=D.c3(""+A.b4(t)+"-"+p.wY(A.bn(t))+"-"+p.wY(A.cI(t))+" | "+p.wY(A.xE(t))+":"+p.wY(A.xF(t)))
u.as=E.I
u.cS$=B.k
w.c=A.b([u.u()],x)
w=w.u()
u=D.cF("Pickup Date-Time: ")
u.cx=F.df
s=D.c3(n.b+" | ")
s.as=E.I
s=s.u()
r=D.c3(n.c+" ")
r.as=E.I
u.c=A.b([s,r.u()],x)
u=u.u()
r=A.ao(B.e.aj(127.5),151,38,120)
s=v?o:new C.a4_(p)
w=D.ff(!1,B.a0,o,o,!0,o,!1,o,0,o,!1,o,o,u,o,w,D.lE(o,A.PB(F.JC,v?B.bU:B.Y,o),o,s,r,15,o),o)
u=D.cF("Distance: ")
u.cx=F.df
s=D.c3(A.d(H.aIy(n.at,1))+" kms")
s.as=I.e9
u.c=A.b([s.u()],x)
u=u.u()
s=D.cF("Driver Note:")
s.cx=F.df
s.cS$=B.bU
v=n.ax
v=D.c3(v.length!==0?"\n"+v:"")
v.as=I.e9
s.c=A.b([v.u()],x)
v=y.p
s=D.bb(new A.az(A.b([u,s.u()],v),B.r,B.E,o,o),16,0,0,0)
u=D.cF("Additional Helpers: ")
u.cx=F.df
r=D.c3(""+n.ay)
r.as=I.e9
u.c=A.b([r.u()],x)
u=u.u()
r=D.cF("Floors To Carry: ")
r.cx=F.df
q=D.c3(""+n.ch)
q.as=I.e9
r.c=A.b([q.u()],x)
r=D.bb(new A.az(A.b([u,r.u()],v),B.r,B.E,o,o),16,0,0,0)
u=D.cF("Vehicle type: ")
u.cx=F.df
q=D.c3(A.d(n.y)+" Ton")
q.as=I.e9
u.c=A.b([q.u()],x)
u=D.bb(u.u(),16,0,0,0)
x=$.ax()
v=D.z7(new A.ai(E.ax,new A.az(A.b([m,w,s,r,u,D.bb(new C.MK(n,p.gWN(),p.d,A.cW(x,A.aKW(),y.r),A.cW(x,A.SL(),y.D),o),10,0,0,0)],v),B.r,B.E,o,o),o))
v.c=1
v.cS$=B.B
v.d=new A.cc(A.cH(5),new A.bL(B.bA,1,B.S))
return v.u()},
WO(){var x=this.d,w=this.c
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
wY(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["ow(mG,m)","~()"])
C.atM.prototype={
$1(d){var x=0,w=A.J(y.P),v=this
var $async$$1=A.E(function(e,f){if(e===1)return A.G(f,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.d.v5(),$async$$1)
case 2:return A.H(null,w)}})
return A.I($async$$1,w)},
$S:42}
C.atL.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.H
case 1:return new A.aK(u,this.a.E(y.w).f.a.b,new A.aK(1/0,u,new A.ai(E.O,B.e2,u),u),u)
case 3:return A.a0(d.ch).u()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.b([F.a0o],y.A)
v=D.p8(d.ay.d,new C.atK(),y.V,y.l)
return D.bb(new A.aK(1/0,u,new A.az(A.b([new A.aK(500,u,new A.az(w,B.r,B.E,u,u),u),D.bu(new A.aK(500,u,new A.az(A.Y(v,!0,v.$ti.i("u.E")),u,u,u,u),u),8,0)],x),B.G,B.w,u,u),u),16,0,0,0)}else{x=A.b([A.a0("Make your first booking!").u()],x)
return new A.aK(u,this.a.E(y.w).f.a.b,new A.aK(1/0,u,new A.ai(E.O,new A.az(x,u,u,u,u),u),u),u)}default:return A.a0("there might be an error in your code check your provider").u()}},
$S:517}
C.atK.prototype={
$2(d,e){return new C.ow(d,new H.BV("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a43.prototype={
$0(){var x=0,w=A.J(y.H),v=this,u
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.L(u.f.y3(u.e,u.c,new C.a42(u)),$async$$0)
case 2:return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2}
C.a42.prototype={
$0(){var x=0,w=A.J(y.H),v=this
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.r.v5(),$async$$0)
case 2:return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2}
C.a4_.prototype={
$0(){var x=0,w=A.J(y.H),v=this,u,t,s
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.al(["retrieve",u.f],t,t)
A.dL($.ax(),"/signed-in/bookings/"+u.a,s,y.z)
return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(C.ow.prototype,"gWN","WO",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oE,A.T)
x(C.Wc,A.W)
w(A.cf,[C.atM,C.atL])
x(C.atK,A.h1)
w(A.a5,[C.MK,C.ow])
w(A.k8,[C.a43,C.a42,C.a4_])})()
A.fO(b.typeUniverse,JSON.parse('{"oE":{"T":[],"e":[]},"Wc":{"W":["oE"]},"MK":{"a5":[],"e":[]},"ow":{"a5":[],"e":[]}}'))
var y=(function rtii(){var x=A.K
return{l:x("ow"),V:x("mG"),r:x("ox"),O:x("k<dB>"),d:x("k<aB>"),s:x("k<dM>"),n:x("k<eo>"),A:x("k<iq>"),p:x("k<e>"),w:x("d7"),P:x("ay"),D:x("kL"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){F.Wo=new A.eo("Discount given at the middle of the month.",null,null,B.aX,G.eb)
F.a0E=new A.jK(null,F.Wo,null,!1,G.fV,G.fm,B.cE,null)
F.AT=new A.db(E.ej,null,null,F.a0E,null)
F.JC=new A.dp(983823,"MaterialIcons",null,!1)
F.Xu=new A.q(!0,B.bd,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.df=new A.q(!0,B.bU,null,null,null,null,14,B.ak,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.a0o=new D.iq("Your Bookings",null,null)})()}
$__dart_deferred_initializers__["3tDc3wFNie01zf9ac05ZjNDDyi0="] = $__dart_deferred_initializers__.current
