self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
aYY(){return new C.oD(null)},
oD:function oD(d){this.a=d},
Wd:function Wd(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
atV:function atV(d){this.a=d},
atU:function atU(d){this.a=d},
atT:function atT(){},
MK:function MK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a43:function a43(d){this.a=d},
a42:function a42(d){this.a=d},
ov:function ov(d,e,f){this.c=d
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
C.oD.prototype={
W(){return new C.Wd(A.cW($.az(),A.SM(),y.D),B.l)}}
C.Wd.prototype={
ad(){A.lC(B.B,y.z).aU(0,new C.atV(this),y.P)
this.az()},
B(d,e){var x=null
return new D.jc(A.b([A.hL(new C.atU(e),x,x,x,y.D)],y.p),"/signed-in/bookings",x)}}
C.MK.prototype={
B(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.cH(5),m=A.a0("Description")
m.Q=B.X
m.ch=E.ci
m=m.u()
x=A.a0("Total")
x.Q=B.X
x.ch=E.ci
w=y.p
x=A.b([new A.ah(E.b5,m,o),B.H,new A.ah(E.b5,x.u(),o)],w)
m=A.a0("Base Fee")
m.ch=E.F
m=m.u()
v=p.c
u="R "+A.d(v.z)
t=A.a0(u)
t.ch=E.F
t=A.b([new A.ah(E.b5,m,o),G.oy,new A.ah(E.b5,t.u(),o)],w)
m=A.a0("Discounts")
m.ch=E.ci
m.Q=B.X
m=A.b([new A.ah(E.b5,m.u(),o),B.H,B.H],w)
s=A.a0("Mid Month")
s.ch=E.F
s=s.u()
r=A.a0("R "+A.d(v.Q))
r.ch=E.F
r=A.b([new A.ah(E.b5,s,o),F.AV,new A.ah(E.b5,r.u(),o)],w)
s=A.a0("Loyal customer")
s.ch=E.F
s=s.u()
q=A.a0("R "+A.d(v.as))
q.ch=E.F
q=A.b([new A.ah(E.b5,s,o),G.oz,new A.ah(E.b5,q.u(),o)],w)
s=A.a0("Total amount due:")
s.ch=E.ci
s.Q=B.dD
s=s.u()
u=A.a0(u)
u.Q=B.dD
u.ch=E.ci
w=H.aHi(A.b([new H.dM(new A.bL(B.fC,o,o,n,o,o,B.L),x),new H.dM(o,t),new H.dM(G.em,m),new H.dM(o,r),new H.dM(G.em,q),new H.dM(G.em,A.b([new A.ah(E.b5,s,o),B.H,new A.ah(E.b5,u.u(),o)],w))],y.s),G.nO)
n=!v.db
m=D.aoI(o,o,!n||p.LJ()?B.bK:B.bg,o,o,o,o,o,o,o,o,o,o,B.e5,o,o,o,o)
n=!n||p.LJ()?o:new C.a43(p)
x=A.a0("CANCEL BOOKING")
x.ch=G.ed
return new A.aw(A.b([w,D.b0(D.yL(x.u(),n,m),0,0,0,20)],y.d),B.r,B.E,o,o)},
LJ(){var x=Date.now(),w=this.c
if(B.f.ca(A.br(0,K.aG_(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.ov.prototype={
B(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=D.cD("INVOICE BOOKING ID: "+n.a)
m.cf$=B.k
m.cx=E.hU
x=y.n
w=A.b([],x)
v=n.db
if(v){u=D.c0("\nBooking Cancelled")
u.as=F.XB
u.e=B.X
w.push(u.u())}m.c=w
m=m.u()
w=D.cD("Created: ")
w.cx=F.dh
t=K.aG_(n.dx)
u=D.c0(""+A.b5(t)+"-"+p.x_(A.bo(t))+"-"+p.x_(A.cI(t))+" | "+p.x_(A.xD(t))+":"+p.x_(A.xE(t)))
u.as=E.F
u.cf$=B.k
w.c=A.b([u.u()],x)
w=w.u()
u=D.cD("Pickup Date-Time: ")
u.cx=F.dh
s=D.c0(n.b+" | ")
s.as=E.F
s=s.u()
r=D.c0(n.c+" ")
r.as=E.F
u.c=A.b([s,r.u()],x)
u=u.u()
r=A.ap(B.e.aj(127.5),151,38,120)
s=v?o:new C.a4_(p)
w=D.fh(!1,B.a1,o,o,!0,o,!1,o,0,o,!1,o,o,u,o,w,D.lE(o,A.PA(F.JG,v?B.bK:B.W,o),o,s,r,15,o),o)
u=D.cD("Distance: ")
u.cx=F.dh
s=D.c0(A.d(H.aIG(n.at,1))+" kms")
s.as=I.ea
u.c=A.b([s.u()],x)
u=u.u()
s=D.cD("Driver Note:")
s.cx=F.dh
s.cf$=B.bK
v=n.ax
v=D.c0(v.length!==0?"\n"+v:"")
v.as=I.ea
s.c=A.b([v.u()],x)
v=y.p
s=D.b0(new A.aw(A.b([u,s.u()],v),B.r,B.E,o,o),16,0,0,0)
u=D.cD("Additional Helpers: ")
u.cx=F.dh
r=D.c0(""+n.ay)
r.as=I.ea
u.c=A.b([r.u()],x)
u=u.u()
r=D.cD("Floors To Carry: ")
r.cx=F.dh
q=D.c0(""+n.ch)
q.as=I.ea
r.c=A.b([q.u()],x)
r=D.b0(new A.aw(A.b([u,r.u()],v),B.r,B.E,o,o),16,0,0,0)
u=D.cD("Vehicle type: ")
u.cx=F.dh
q=D.c0(A.d(n.y)+" Ton")
q.as=I.ea
u.c=A.b([q.u()],x)
u=D.b0(u.u(),16,0,0,0)
x=$.az()
v=D.qh(new A.ah(E.ax,new A.aw(A.b([m,w,s,r,u,D.b0(new C.MK(n,p.gWO(),p.d,A.cW(x,A.aL3(),y.r),A.cW(x,A.SM(),y.D),o),10,0,0,0)],v),B.r,B.E,o,o),o))
v.c=1
v.cf$=B.y
v.d=new A.cc(A.cH(5),new A.bK(B.bD,1,B.S))
return v.u()},
WP(){var x=this.d,w=this.c
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
x_(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["ov(mG,m)","~()"])
C.atV.prototype={
$1(d){var x=0,w=A.J(y.P),v=this
var $async$$1=A.E(function(e,f){if(e===1)return A.G(f,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.d.v7(),$async$$1)
case 2:return A.H(null,w)}})
return A.I($async$$1,w)},
$S:37}
C.atU.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.H
case 1:return new A.aH(u,this.a.E(y.w).f.a.b,new A.aH(1/0,u,new A.ah(E.O,B.e4,u),u),u)
case 3:return A.a0(d.ch).u()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.b([F.a0u],y.A)
v=D.p7(d.ay.d,new C.atT(),y.V,y.l)
return D.b0(new A.aH(1/0,u,new A.aw(A.b([new A.aH(500,u,new A.aw(w,B.r,B.E,u,u),u),D.by(new A.aH(500,u,new A.aw(A.Y(v,!0,v.$ti.i("u.E")),u,u,u,u),u),8,0)],x),B.G,B.w,u,u),u),16,0,0,0)}else{x=A.b([A.a0("Make your first booking!").u()],x)
return new A.aH(u,this.a.E(y.w).f.a.b,new A.aH(1/0,u,new A.ah(E.O,new A.aw(x,u,u,u,u),u),u),u)}default:return A.a0("there might be an error in your code check your provider").u()}},
$S:515}
C.atT.prototype={
$2(d,e){return new C.ov(d,new H.BW("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a43.prototype={
$0(){var x=0,w=A.J(y.H),v=this,u
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.L(u.f.y5(u.e,u.c,new C.a42(u)),$async$$0)
case 2:return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2}
C.a42.prototype={
$0(){var x=0,w=A.J(y.H),v=this
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.r.v7(),$async$$0)
case 2:return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2}
C.a4_.prototype={
$0(){var x=0,w=A.J(y.H),v=this,u,t,s
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.al(["retrieve",u.f],t,t)
A.dL($.az(),"/signed-in/bookings/"+u.a,s,y.z)
return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(C.ov.prototype,"gWO","WP",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oD,A.T)
x(C.Wd,A.W)
w(A.cf,[C.atV,C.atU])
x(C.atT,A.h3)
w(A.a5,[C.MK,C.ov])
w(A.k8,[C.a43,C.a42,C.a4_])})()
A.fQ(b.typeUniverse,JSON.parse('{"oD":{"T":[],"e":[]},"Wd":{"W":["oD"]},"MK":{"a5":[],"e":[]},"ov":{"a5":[],"e":[]}}'))
var y=(function rtii(){var x=A.K
return{l:x("ov"),V:x("mG"),r:x("ow"),O:x("k<dB>"),d:x("k<aB>"),s:x("k<dM>"),n:x("k<ex>"),A:x("k<ir>"),p:x("k<e>"),w:x("d7"),P:x("ay"),D:x("kL"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){F.Wv=new A.ex("Discount given at the middle of the month.",null,null,B.aY,G.ed)
F.a0K=new A.jK(null,F.Wv,null,!1,G.fW,G.fn,B.cF,null)
F.AV=new A.db(E.el,null,null,F.a0K,null)
F.JG=new A.dp(983823,"MaterialIcons",null,!1)
F.XB=new A.q(!0,B.bg,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.dh=new A.q(!0,B.bK,null,null,null,null,14,B.al,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.a0u=new D.ir("Your Bookings",null,null)})()}
$__dart_deferred_initializers__["U0Zaodo0dWovWt5aIxy2VACntF4="] = $__dart_deferred_initializers__.current
