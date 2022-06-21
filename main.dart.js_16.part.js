self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
aZq(){return new C.oL(null)},
oL:function oL(d){this.a=d},
Wx:function Wx(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
aud:function aud(d){this.a=d},
auc:function auc(d){this.a=d},
aub:function aub(){},
MX:function MX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a4w:function a4w(d){this.a=d},
a4v:function a4v(d){this.a=d},
oD:function oD(d,e,f){this.c=d
this.d=e
this.a=f},
a4s:function a4s(d){this.a=d}},A,B,D,E,G,F,H,K,I,L
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
C.oL.prototype={
X(){return new C.Wx(A.cE($.au(),A.SY(),y.D),B.l)}}
C.Wx.prototype={
ae(){A.lI(B.z,y.z).aY(0,new C.aud(this),y.P)
this.aA()},
B(d,e){var x=null
return new D.jm(A.b([A.hd(new C.auc(e),x,x,x,y.D)],y.p),"/signed-in/bookings",x)}}
C.MX.prototype={
B(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.cJ(5),m=A.a1("Description")
m.Q=B.a2
m.ch=E.ci
m=m.u()
x=A.a1("Total")
x.Q=B.a2
x.ch=E.ci
w=y.p
x=A.b([new A.ab(E.b4,m,o),B.G,new A.ab(E.b4,x.u(),o)],w)
m=A.a1("Base Fee")
m.ch=E.H
m=m.u()
v=p.c
u="R "+A.d(v.z)
t=A.a1(u)
t.ch=E.H
t=A.b([new A.ab(E.b4,m,o),G.oL,new A.ab(E.b4,t.u(),o)],w)
m=A.a1("Discounts")
m.ch=E.ci
m.Q=B.a2
m=A.b([new A.ab(E.b4,m.u(),o),B.G,B.G],w)
s=A.a1("Mid Month")
s.ch=E.H
s=s.u()
r=A.a1("R "+A.d(v.Q))
r.ch=E.H
r=A.b([new A.ab(E.b4,s,o),F.Bz,new A.ab(E.b4,r.u(),o)],w)
s=A.a1("Loyal customer")
s.ch=E.H
s=s.u()
q=A.a1("R "+A.d(v.as))
q.ch=E.H
q=A.b([new A.ab(E.b4,s,o),G.oK,new A.ab(E.b4,q.u(),o)],w)
s=A.a1("Total amount due:")
s.ch=E.ci
s.Q=B.dA
s=s.u()
u=A.a1(u)
u.Q=B.dA
u.ch=E.ci
w=H.aHK(A.b([new H.dK(new A.bA(B.fF,o,o,n,o,o,B.I),x),new H.dK(o,t),new H.dK(G.ej,m),new H.dK(o,r),new H.dK(G.ej,q),new H.dK(G.ej,A.b([new A.ab(E.b4,s,o),B.G,new A.ab(E.b4,u.u(),o)],w))],y.s),G.o_)
n=!v.db
m=D.apa(o,o,!n||p.Mj()?B.bI:B.bc,o,o,o,o,o,o,o,o,o,o,B.e3,o,o,o,o)
n=!n||p.Mj()?o:new C.a4w(p)
x=A.a1("CANCEL BOOKING")
x.ch=G.eb
return new A.aC(A.b([w,D.be(D.yZ(x.u(),n,m),0,0,0,20)],y.d),B.r,B.E,o,o)},
Mj(){var x=Date.now(),w=this.c
if(B.f.cc(A.bi(0,K.aGp(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.oD.prototype={
B(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=D.cI("INVOICE BOOKING ID: "+n.a)
m.d_$=B.k
m.cx=E.bL
x=y.n
w=A.b([],x)
v=n.db
if(v){u=D.c5("\nBooking Cancelled")
u.as=F.a0_
u.e=B.a2
w.push(u.u())}m.c=w
m=m.u()
w=D.cI("Created: ")
w.cx=F.df
t=K.aGp(n.dx)
u=D.c5(""+A.b4(t)+"-"+p.xh(A.bp(t))+"-"+p.xh(A.cK(t))+" | "+p.xh(A.xQ(t))+":"+p.xh(A.xR(t)))
u.as=E.H
u.d_$=B.k
w.c=A.b([u.u()],x)
w=w.u()
u=D.cI("Pickup Date-Time: ")
u.cx=F.df
s=D.c5(n.b+" | ")
s.as=E.H
s=s.u()
r=D.c5(n.c+" ")
r.as=E.H
u.c=A.b([s,r.u()],x)
u=u.u()
r=A.an(B.d.aj(127.5),151,38,120)
s=v?o:new C.a4s(p)
w=D.lQ(!1,B.Y,o,o,!0,o,!1,o,0,o,!1,o,o,u,o,w,D.lK(o,A.PM(F.K9,v?B.bI:B.aj,o),o,s,r,15,o),o)
u=D.cI("Distance: ")
u.cx=F.df
s=D.c5(A.d(H.aJ8(n.at,1))+" kms")
s.as=I.e9
u.c=A.b([s.u()],x)
u=u.u()
s=D.cI("Driver Note:")
s.cx=F.df
s.d_$=B.bI
v=n.ax
v=D.c5(v.length!==0?"\n"+v:"")
v.as=I.e9
s.c=A.b([v.u()],x)
v=y.p
s=D.be(new A.aC(A.b([u,s.u()],v),B.r,B.E,o,o),16,0,0,0)
u=D.cI("Additional Helpers: ")
u.cx=F.df
r=D.c5(""+n.ay)
r.as=I.e9
u.c=A.b([r.u()],x)
u=u.u()
r=D.cI("Floors To Carry: ")
r.cx=F.df
q=D.c5(""+n.ch)
q.as=I.e9
r.c=A.b([q.u()],x)
r=D.be(new A.aC(A.b([u,r.u()],v),B.r,B.E,o,o),16,0,0,0)
u=D.cI("Vehicle type: ")
u.cx=F.df
q=D.c5(A.d(n.y)+" Ton")
q.as=I.e9
u.c=A.b([q.u()],x)
u=D.be(u.u(),16,0,0,0)
x=$.au()
v=L.Hy(new A.ab(E.aw,new A.aC(A.b([m,w,s,r,u,D.be(new C.MX(n,p.gXn(),p.d,A.cE(x,A.aLx(),y.r),A.cE(x,A.SY(),y.D),o),10,0,0,0)],v),B.r,B.E,o,o),o))
v.c=1
v.d_$=B.C
v.d=new A.cc(A.cJ(5),new A.bL(B.c5,1,B.O))
return v.u()},
Xo(){var x=this.d,w=this.c
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
xh(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["oD(mQ,n)","~()"])
C.aud.prototype={
$1(d){var x=0,w=A.I(y.P),v=this
var $async$$1=A.E(function(e,f){if(e===1)return A.F(f,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.d.vl(),$async$$1)
case 2:return A.G(null,w)}})
return A.H($async$$1,w)},
$S:38}
C.auc.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.G
case 1:return new A.aE(u,this.a.G(y.w).f.a.b,new A.aE(1/0,u,new A.ab(E.R,B.e2,u),u),u)
case 3:return A.a1(d.ch).u()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.b([F.a3X],y.A)
v=D.pe(d.ay.d,new C.aub(),y.V,y.l)
return D.be(new A.aE(1/0,u,new A.aC(A.b([new A.aE(500,u,new A.aC(w,B.r,B.E,u,u),u),D.bz(new A.aE(500,u,new A.aC(A.Z(v,!0,v.$ti.i("u.E")),u,u,u,u),u),8,0)],x),B.F,B.v,u,u),u),16,0,0,0)}else{x=A.b([A.a1("Make your first booking!").u()],x)
return new A.aE(u,this.a.G(y.w).f.a.b,new A.aE(1/0,u,new A.ab(E.R,new A.aC(x,u,u,u,u),u),u),u)}default:return A.a1("there might be an error in your code check your provider").u()}},
$S:518}
C.aub.prototype={
$2(d,e){return new C.oD(d,new H.C9("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a4w.prototype={
$0(){var x=0,w=A.I(y.H),v=this,u
var $async$$0=A.E(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.L(u.f.yn(u.e,u.c,new C.a4v(u)),$async$$0)
case 2:return A.G(null,w)}})
return A.H($async$$0,w)},
$S:2}
C.a4v.prototype={
$0(){var x=0,w=A.I(y.H),v=this
var $async$$0=A.E(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.r.vl(),$async$$0)
case 2:return A.G(null,w)}})
return A.H($async$$0,w)},
$S:2}
C.a4s.prototype={
$0(){var x=0,w=A.I(y.H),v=this,u,t,s
var $async$$0=A.E(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.ao(["retrieve",u.f],t,t)
A.dy($.au(),"/signed-in/bookings/"+u.a,s,y.z)
return A.G(null,w)}})
return A.H($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(C.oD.prototype,"gXn","Xo",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oL,A.U)
x(C.Wx,A.W)
w(A.cf,[C.aud,C.auc])
x(C.aub,A.h5)
w(A.a6,[C.MX,C.oD])
w(A.ke,[C.a4w,C.a4v,C.a4s])})()
A.fr(b.typeUniverse,JSON.parse('{"oL":{"U":[],"f":[]},"Wx":{"W":["oL"]},"MX":{"a6":[],"f":[]},"oD":{"a6":[],"f":[]}}'))
var y=(function rtii(){var x=A.K
return{l:x("oD"),V:x("mQ"),r:x("oE"),O:x("l<dB>"),d:x("l<aw>"),s:x("l<dK>"),n:x("l<ep>"),A:x("l<is>"),p:x("l<f>"),w:x("d7"),P:x("ay"),D:x("kS"),N:x("j"),z:x("@"),H:x("~")}})();(function constants(){F.ZT=new A.ep("Discount given at the middle of the month.",null,null,B.b2,G.eb)
F.a4d=new A.jS(null,F.ZT,null,!1,G.fY,G.fq,B.cE,null)
F.Bz=new A.dH(E.ei,null,null,F.a4d,null)
F.K9=new A.dq(983823,"MaterialIcons",null,!1)
F.a0_=new A.q(!0,B.bc,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.df=new A.q(!0,B.bI,null,null,null,null,14,B.ab,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.a3X=new D.is("Your Bookings",null,null)})()}
$__dart_deferred_initializers__["OVBtTPnmMty/r9uvfXsE7YKl/O0="] = $__dart_deferred_initializers__.current
