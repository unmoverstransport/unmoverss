self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
aZq(){return new C.oL(null)},
oL:function oL(d){this.a=d},
Wx:function Wx(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
auc:function auc(d){this.a=d},
aub:function aub(d){this.a=d},
aua:function aua(){},
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
X(){return new C.Wx(A.cP($.av(),A.SY(),y.D),B.l)}}
C.Wx.prototype={
ae(){A.lI(B.z,y.z).aY(0,new C.auc(this),y.P)
this.aA()},
B(d,e){var x=null
return new D.jm(A.b([A.hd(new C.aub(e),x,x,x,y.D)],y.p),"/signed-in/bookings",x)}}
C.MX.prototype={
B(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.cI(5),m=A.a1("Description")
m.Q=B.a3
m.ch=E.ci
m=m.u()
x=A.a1("Total")
x.Q=B.a3
x.ch=E.ci
w=y.p
x=A.b([new A.ab(E.b5,m,o),B.G,new A.ab(E.b5,x.u(),o)],w)
m=A.a1("Base Fee")
m.ch=E.H
m=m.u()
v=p.c
u="R "+A.d(v.z)
t=A.a1(u)
t.ch=E.H
t=A.b([new A.ab(E.b5,m,o),G.oL,new A.ab(E.b5,t.u(),o)],w)
m=A.a1("Discounts")
m.ch=E.ci
m.Q=B.a3
m=A.b([new A.ab(E.b5,m.u(),o),B.G,B.G],w)
s=A.a1("Mid Month")
s.ch=E.H
s=s.u()
r=A.a1("R "+A.d(v.Q))
r.ch=E.H
r=A.b([new A.ab(E.b5,s,o),F.BA,new A.ab(E.b5,r.u(),o)],w)
s=A.a1("Loyal customer")
s.ch=E.H
s=s.u()
q=A.a1("R "+A.d(v.as))
q.ch=E.H
q=A.b([new A.ab(E.b5,s,o),G.oM,new A.ab(E.b5,q.u(),o)],w)
s=A.a1("Total amount due:")
s.ch=E.ci
s.Q=B.dA
s=s.u()
u=A.a1(u)
u.Q=B.dA
u.ch=E.ci
w=H.aHJ(A.b([new H.dK(new A.bA(B.fE,o,o,n,o,o,B.J),x),new H.dK(o,t),new H.dK(G.ej,m),new H.dK(o,r),new H.dK(G.ej,q),new H.dK(G.ej,A.b([new A.ab(E.b5,s,o),B.G,new A.ab(E.b5,u.u(),o)],w))],y.s),G.o0)
n=!v.db
m=D.ap9(o,o,!n||p.Mj()?B.bV:B.bd,o,o,o,o,o,o,o,o,o,o,B.e3,o,o,o,o)
n=!n||p.Mj()?o:new C.a4w(p)
x=A.a1("CANCEL BOOKING")
x.ch=G.eb
return new A.aC(A.b([w,D.be(D.yZ(x.u(),n,m),0,0,0,20)],y.d),B.r,B.E,o,o)},
Mj(){var x=Date.now(),w=this.c
if(B.f.cc(A.bi(0,K.aGo(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.oD.prototype={
B(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=D.cH("INVOICE BOOKING ID: "+n.a)
m.d_$=B.k
m.cx=E.bK
x=y.n
w=A.b([],x)
v=n.db
if(v){u=D.c5("\nBooking Cancelled")
u.as=F.a03
u.e=B.a3
w.push(u.u())}m.c=w
m=m.u()
w=D.cH("Created: ")
w.cx=F.df
t=K.aGo(n.dx)
u=D.c5(""+A.b4(t)+"-"+p.xg(A.bp(t))+"-"+p.xg(A.cJ(t))+" | "+p.xg(A.xQ(t))+":"+p.xg(A.xR(t)))
u.as=E.H
u.d_$=B.k
w.c=A.b([u.u()],x)
w=w.u()
u=D.cH("Pickup Date-Time: ")
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
w=D.lQ(!1,B.Z,o,o,!0,o,!1,o,0,o,!1,o,o,u,o,w,D.lK(o,A.PM(F.Kb,v?B.bV:B.ak,o),o,s,r,15,o),o)
u=D.cH("Distance: ")
u.cx=F.df
s=D.c5(A.d(H.aJ7(n.at,1))+" kms")
s.as=I.e9
u.c=A.b([s.u()],x)
u=u.u()
s=D.cH("Driver Note:")
s.cx=F.df
s.d_$=B.bV
v=n.ax
v=D.c5(v.length!==0?"\n"+v:"")
v.as=I.e9
s.c=A.b([v.u()],x)
v=y.p
s=D.be(new A.aC(A.b([u,s.u()],v),B.r,B.E,o,o),16,0,0,0)
u=D.cH("Additional Helpers: ")
u.cx=F.df
r=D.c5(""+n.ay)
r.as=I.e9
u.c=A.b([r.u()],x)
u=u.u()
r=D.cH("Floors To Carry: ")
r.cx=F.df
q=D.c5(""+n.ch)
q.as=I.e9
r.c=A.b([q.u()],x)
r=D.be(new A.aC(A.b([u,r.u()],v),B.r,B.E,o,o),16,0,0,0)
u=D.cH("Vehicle type: ")
u.cx=F.df
q=D.c5(A.d(n.y)+" Ton")
q.as=I.e9
u.c=A.b([q.u()],x)
u=D.be(u.u(),16,0,0,0)
x=$.av()
v=L.Hy(new A.ab(E.ax,new A.aC(A.b([m,w,s,r,u,D.be(new C.MX(n,p.gXn(),p.d,A.cP(x,A.aLw(),y.r),A.cP(x,A.SY(),y.D),o),10,0,0,0)],v),B.r,B.E,o,o),o))
v.c=1
v.d_$=B.C
v.d=new A.cc(A.cI(5),new A.bL(B.c5,1,B.P))
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
xg(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["oD(mQ,n)","~()"])
C.auc.prototype={
$1(d){var x=0,w=A.I(y.P),v=this
var $async$$1=A.E(function(e,f){if(e===1)return A.F(f,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.d.vk(),$async$$1)
case 2:return A.G(null,w)}})
return A.H($async$$1,w)},
$S:38}
C.aub.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.G
case 1:return new A.aE(u,this.a.G(y.w).f.a.b,new A.aE(1/0,u,new A.ab(E.S,B.e2,u),u),u)
case 3:return A.a1(d.ch).u()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.b([F.a3Y],y.A)
v=D.pe(d.ay.d,new C.aua(),y.V,y.l)
return D.be(new A.aE(1/0,u,new A.aC(A.b([new A.aE(500,u,new A.aC(w,B.r,B.E,u,u),u),D.bz(new A.aE(500,u,new A.aC(A.Z(v,!0,v.$ti.i("u.E")),u,u,u,u),u),8,0)],x),B.F,B.v,u,u),u),16,0,0,0)}else{x=A.b([A.a1("Make your first booking!").u()],x)
return new A.aE(u,this.a.G(y.w).f.a.b,new A.aE(1/0,u,new A.ab(E.S,new A.aC(x,u,u,u,u),u),u),u)}default:return A.a1("there might be an error in your code check your provider").u()}},
$S:518}
C.aua.prototype={
$2(d,e){return new C.oD(d,new H.C9("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a4w.prototype={
$0(){var x=0,w=A.I(y.H),v=this,u
var $async$$0=A.E(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.L(u.f.ym(u.e,u.c,new C.a4v(u)),$async$$0)
case 2:return A.G(null,w)}})
return A.H($async$$0,w)},
$S:2}
C.a4v.prototype={
$0(){var x=0,w=A.I(y.H),v=this
var $async$$0=A.E(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.r.vk(),$async$$0)
case 2:return A.G(null,w)}})
return A.H($async$$0,w)},
$S:2}
C.a4s.prototype={
$0(){var x=0,w=A.I(y.H),v=this,u,t,s
var $async$$0=A.E(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.ao(["retrieve",u.f],t,t)
A.dy($.av(),"/signed-in/bookings/"+u.a,s,y.z)
return A.G(null,w)}})
return A.H($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(C.oD.prototype,"gXn","Xo",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oL,A.U)
x(C.Wx,A.W)
w(A.cf,[C.auc,C.aub])
x(C.aua,A.h5)
w(A.a6,[C.MX,C.oD])
w(A.ke,[C.a4w,C.a4v,C.a4s])})()
A.fr(b.typeUniverse,JSON.parse('{"oL":{"U":[],"f":[]},"Wx":{"W":["oL"]},"MX":{"a6":[],"f":[]},"oD":{"a6":[],"f":[]}}'))
var y=(function rtii(){var x=A.K
return{l:x("oD"),V:x("mQ"),r:x("oE"),O:x("l<dB>"),d:x("l<aw>"),s:x("l<dK>"),n:x("l<ep>"),A:x("l<is>"),p:x("l<f>"),w:x("d7"),P:x("ay"),D:x("kS"),N:x("j"),z:x("@"),H:x("~")}})();(function constants(){F.ZY=new A.ep("Discount given at the middle of the month.",null,null,B.b3,G.eb)
F.a4c=new A.jS(null,F.ZY,null,!1,G.fY,G.fp,B.cE,null)
F.BA=new A.dH(E.ei,null,null,F.a4c,null)
F.Kb=new A.dq(983823,"MaterialIcons",null,!1)
F.a03=new A.q(!0,B.bd,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.df=new A.q(!0,B.bV,null,null,null,null,14,B.ah,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.a3Y=new D.is("Your Bookings",null,null)})()}
$__dart_deferred_initializers__["qIP0SaT/SzB8G92dc8vwyJ8bA8Q="] = $__dart_deferred_initializers__.current
