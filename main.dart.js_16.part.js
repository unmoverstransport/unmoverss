self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
b_4(){return new C.oS(null)},
oS:function oS(d){this.a=d},
WK:function WK(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
auK:function auK(d){this.a=d},
auJ:function auJ(d){this.a=d},
auI:function auI(){},
N5:function N5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a4L:function a4L(d){this.a=d},
a4K:function a4K(d){this.a=d},
oJ:function oJ(d,e,f){this.c=d
this.d=e
this.a=f},
a4H:function a4H(d){this.a=d}},A,B,D,E,H,F,G,K,I,L
C=a.updateHolder(c[6],C)
A=c[0]
B=c[2]
D=c[21]
E=c[24]
H=c[25]
F=c[26]
G=c[18]
K=c[12]
I=c[27]
L=c[20]
C.oS.prototype={
V(){return new C.WK(A.cI($.aN(),A.Ta(),y.D),B.l)}}
C.WK.prototype={
ae(){A.kv(B.z,null,y.z).aY(0,new C.auK(this),y.P)
this.aA()},
A(d,e){var x=null
return new D.iN(A.b([A.hj(new C.auJ(e),x,x,x,y.D)],y.p),"/signed-in/bookings",x)}}
C.N5.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.cg(5),m=A.a1("Description")
m.Q=B.S
m.ch=E.ck
m=m.u()
x=A.a1("Total")
x.Q=B.S
x.ch=E.ck
w=y.p
x=A.b([new A.ab(E.b4,m,o),B.H,new A.ab(E.b4,x.u(),o)],w)
m=A.a1("Base Fee")
m.ch=E.L
m=m.u()
v=p.c
u="R "+A.d(v.z)
t=A.a1(u)
t.ch=E.L
t=A.b([new A.ab(E.b4,m,o),H.oK,new A.ab(E.b4,t.u(),o)],w)
m=A.a1("Discounts")
m.ch=E.ck
m.Q=B.S
m=A.b([new A.ab(E.b4,m.u(),o),B.H,B.H],w)
s=A.a1("Mid Month")
s.ch=E.L
s=s.u()
r=A.a1("R "+A.d(v.Q))
r.ch=E.L
r=A.b([new A.ab(E.b4,s,o),F.Bx,new A.ab(E.b4,r.u(),o)],w)
s=A.a1("Loyal customer")
s.ch=E.L
s=s.u()
q=A.a1("R "+A.d(v.as))
q.ch=E.L
q=A.b([new A.ab(E.b4,s,o),H.oL,new A.ab(E.b4,q.u(),o)],w)
s=A.a1("Total amount due:")
s.ch=E.ck
s.Q=B.dA
s=s.u()
u=A.a1(u)
u.Q=B.dA
u.ch=E.ck
w=G.aIl(A.b([new G.dJ(new A.bj(B.fI,o,o,n,o,o,B.E),x),new G.dJ(o,t),new G.dJ(H.el,m),new G.dJ(o,r),new G.dJ(H.el,q),new G.dJ(H.el,A.b([new A.ab(E.b4,s,o),B.H,new A.ab(E.b4,u.u(),o)],w))],y.s),H.o1)
n=!v.db
m=D.apA(o,o,!n||p.Mp()?B.bf:B.be,o,o,o,o,o,o,o,o,o,o,B.e3,o,o,o,o)
n=!n||p.Mp()?o:new C.a4L(p)
x=A.a1("CANCEL BOOKING")
x.ch=E.ec
return new A.at(A.b([w,D.bh(D.z3(x.u(),n,m),0,0,0,20)],y.d),B.r,B.F,o,o)},
Mp(){var x=Date.now(),w=this.c
if(B.f.bR(A.bc(0,K.aH0(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.oJ.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=D.cL("INVOICE BOOKING ID: "+n.a)
m.dk$=B.k
m.cx=E.i_
x=y.n
w=A.b([],x)
v=n.db
if(v){u=D.c6("\nBooking Cancelled")
u.as=F.a06
u.e=B.S
w.push(u.u())}m.c=w
m=m.u()
w=D.cL("Created: ")
w.cx=F.dc
t=K.aH0(n.dx)
u=D.c6(""+A.b5(t)+"-"+p.xt(A.br(t))+"-"+p.xt(A.cM(t))+" | "+p.xt(A.xW(t))+":"+p.xt(A.xX(t)))
u.as=E.L
u.dk$=B.k
w.c=A.b([u.u()],x)
w=w.u()
u=D.cL("Pickup Date-Time: ")
u.cx=F.dc
s=D.c6(n.b+" | ")
s.as=E.L
s=s.u()
r=D.c6(n.c+" ")
r.as=E.L
u.c=A.b([s,r.u()],x)
u=u.u()
r=A.ai(B.d.aj(127.5),81,79,151)
s=v?o:new C.a4H(p)
w=D.lT(!1,B.a_,o,o,!0,o,!1,o,0,o,!1,o,o,u,o,w,D.fl(o,A.PX(F.Kb,v?B.bf:B.ah,o),o,s,r,15,o),o)
u=D.cL("Distance: ")
u.cx=F.dc
s=D.c6(A.d(G.aJK(n.at,1))+" kms")
s.as=I.ea
u.c=A.b([s.u()],x)
u=u.u()
s=D.cL("Driver Note:")
s.cx=F.dc
s.dk$=B.bf
v=n.ax
v=D.c6(v.length!==0?"\n"+v:"")
v.as=I.ea
s.c=A.b([v.u()],x)
v=y.p
s=D.bh(new A.at(A.b([u,s.u()],v),B.r,B.F,o,o),16,0,0,0)
u=D.cL("Additional Helpers: ")
u.cx=F.dc
r=D.c6(""+n.ay)
r.as=I.ea
u.c=A.b([r.u()],x)
u=u.u()
r=D.cL("Floors To Carry: ")
r.cx=F.dc
q=D.c6(""+n.ch)
q.as=I.ea
r.c=A.b([q.u()],x)
r=D.bh(new A.at(A.b([u,r.u()],v),B.r,B.F,o,o),16,0,0,0)
u=D.cL("Vehicle type: ")
u.cx=F.dc
q=D.c6(A.d(n.y)+" Ton")
q.as=I.ea
u.c=A.b([q.u()],x)
u=D.bh(u.u(),16,0,0,0)
x=$.aN()
v=L.HI(A.f4(new A.ab(E.aw,new A.at(A.b([m,w,s,r,u,D.bh(new C.N5(n,p.gXy(),p.d,A.cI(x,A.aMb(),y.r),A.cI(x,A.Ta(),y.D),o),10,0,0,0)],v),B.r,B.F,o,o),o),new A.bj(B.m,o,o,o,o,o,B.E),B.av))
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
xt(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["oJ(mS,n)","~()"])
C.auK.prototype={
$1(d){var x=0,w=A.F(y.P),v=this
var $async$$1=A.B(function(e,f){if(e===1)return A.C(f,w)
while(true)switch(x){case 0:x=2
return A.z(v.a.d.vx(),$async$$1)
case 2:return A.D(null,w)}})
return A.E($async$$1,w)},
$S:38}
C.auJ.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.H
case 1:x=D.cE(new A.ab(E.aw,new A.at(A.b([A.ul(B.ae,A.bc(500,0,0),50)],y.x),B.G,B.u,u,u),u))
x.f=this.a.G(y.w).f.a.b
x.r=1/0
return x.u()
case 3:return A.a1(d.ch).u()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.b([F.a42],y.A)
v=D.pl(d.ay.d,new C.auI(),y.V,y.l)
return D.bh(new A.aE(1/0,u,new A.at(A.b([new A.aE(500,u,new A.at(w,B.r,B.F,u,u),u),D.bw(new A.aE(500,u,new A.at(A.Z(v,!0,v.$ti.i("u.E")),u,u,u,u),u),8,0)],x),B.G,B.u,u,u),u),16,0,0,0)}else{x=A.b([A.a1("Make your first booking!").u()],x)
return new A.aE(u,this.a.G(y.w).f.a.b,new A.aE(1/0,u,new A.ab(E.a3,new A.at(x,u,u,u,u),u),u),u)}default:return A.a1("there might be an error in your code check your provider").u()}},
$S:520}
C.auI.prototype={
$2(d,e){return new C.oJ(d,new G.Cg("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a4L.prototype={
$0(){var x=0,w=A.F(y.H),v=this,u
var $async$$0=A.B(function(d,e){if(d===1)return A.C(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.z(u.f.yx(u.e,u.c,new C.a4K(u)),$async$$0)
case 2:return A.D(null,w)}})
return A.E($async$$0,w)},
$S:1}
C.a4K.prototype={
$0(){var x=0,w=A.F(y.H),v=this
var $async$$0=A.B(function(d,e){if(d===1)return A.C(e,w)
while(true)switch(x){case 0:x=2
return A.z(v.a.r.vx(),$async$$0)
case 2:return A.D(null,w)}})
return A.E($async$$0,w)},
$S:1}
C.a4H.prototype={
$0(){var x=0,w=A.F(y.H),v=this,u,t,s
var $async$$0=A.B(function(d,e){if(d===1)return A.C(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.ap(["retrieve",u.f],t,t)
A.nd($.aN(),"/signed-in/bookings/"+u.a,s,y.z)
return A.D(null,w)}})
return A.E($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(C.oJ.prototype,"gXy","Xz",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oS,A.U)
x(C.WK,A.W)
w(A.ch,[C.auK,C.auJ])
x(C.auI,A.ha)
w(A.a4,[C.N5,C.oJ])
w(A.ki,[C.a4L,C.a4K,C.a4H])})()
A.fh(b.typeUniverse,JSON.parse('{"oS":{"U":[],"f":[]},"WK":{"W":["oS"]},"N5":{"a4":[],"f":[]},"oJ":{"a4":[],"f":[]}}'))
var y=(function rtii(){var x=A.L
return{l:x("oJ"),V:x("mS"),r:x("oK"),O:x("l<dB>"),d:x("l<av>"),x:x("l<jc>"),s:x("l<dJ>"),n:x("l<eU>"),A:x("l<iv>"),p:x("l<f>"),w:x("d7"),P:x("ay"),D:x("kY"),N:x("j"),z:x("@"),H:x("~")}})();(function constants(){F.ZZ=new A.eU("Discount given at the middle of the month.",null,null,B.bm,E.ec)
F.a4g=new A.mt(null,F.ZZ,null,!1,H.h0,H.fv,B.ee,null)
F.Bx=new A.dG(E.ek,null,null,F.a4g,null)
F.Kb=new A.dr(983823,"MaterialIcons",null,!1)
F.a06=new A.q(!0,B.be,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.dc=new A.q(!0,B.bf,null,null,null,null,14,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.a42=new D.iv("Your Bookings",null,null)})()}
$__dart_deferred_initializers__["QnXu64mfGUv21xvVi2zZlPDtTv0="] = $__dart_deferred_initializers__.current
