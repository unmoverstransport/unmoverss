self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
aZs(){return new C.oY(null)},
oY:function oY(d){this.a=d},
Wl:function Wl(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
auh:function auh(d){this.a=d},
aug:function aug(d){this.a=d},
auf:function auf(){},
MF:function MF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a48:function a48(d){this.a=d},
a47:function a47(d){this.a=d},
oP:function oP(d,e,f){this.c=d
this.d=e
this.a=f},
a44:function a44(d){this.a=d}},A,B,O,F,G,L,D,H,P,E,I,M,Q,K,R,N,S
C=a.updateHolder(c[6],C)
A=c[0]
B=c[2]
O=c[33]
F=c[48]
G=c[49]
L=c[50]
D=c[51]
H=c[30]
P=c[52]
E=c[37]
I=c[44]
M=c[19]
Q=c[53]
K=c[54]
R=c[40]
N=c[27]
S=c[42]
C.oY.prototype={
U(){return new C.Wl(A.cf($.aK(),A.SG(),y.D),B.l)}}
C.Wl.prototype={
ab(){A.jw(B.A,null,y.z).aS(0,new C.auh(this),y.P)
this.aq()},
v(d,e){var x=null
return new O.ir(A.b([A.fN(new C.aug(e),x,x,x,y.D)],y.p),"/signed-in/bookings",x)}}
C.MF.prototype={
v(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.c7(5),m=A.Z("Description")
m.Q=B.R
m.ch=F.hY
m=m.t()
x=A.Z("Total")
x.Q=B.R
x.ch=F.hY
w=y.p
x=A.b([new A.aa(G.b9,m,o),B.B,new A.aa(G.b9,x.t(),o)],w)
m=A.Z("Base Fee")
m.ch=F.an
m=m.t()
v=p.c
u=v.z
t=v.Q
s=A.Z("R "+A.d(u+t))
s.ch=F.an
s=A.b([new A.aa(G.b9,m,o),L.oI,new A.aa(G.b9,s.t(),o)],w)
m=A.Z("Discounts")
m.ch=F.hY
m.Q=B.R
m=A.b([new A.aa(G.b9,m.t(),o),B.B,B.B],w)
r=A.Z("Mid Month")
r.ch=F.an
r=r.t()
t=A.Z("R "+A.d(t))
t.ch=F.an
t=A.b([new A.aa(G.b9,r,o),D.Bx,new A.aa(G.b9,t.t(),o)],w)
r=A.Z("Loyal customer")
r.ch=F.an
r=r.t()
q=A.Z("R "+A.d(v.as))
q.ch=F.an
q=A.b([new A.aa(G.b9,r,o),L.oJ,new A.aa(G.b9,q.t(),o)],w)
r=A.Z("Total amount due:")
r.ch=D.AW
r=r.t()
u=A.Z("R "+A.d(u))
u.ch=D.AW
w=H.aHG(A.b([new H.dL(new A.bo(B.fD,o,o,n,o,o,B.H),x),new H.dL(o,s),new H.dL(L.dp,m),new H.dL(o,t),new H.dL(L.dp,q),new H.dL(L.dp,A.b([new A.aa(G.b9,r,o),B.B,new A.aa(G.b9,u.t(),o)],w))],y.s),P.o0)
n=!v.db
m=!n||p.LG()?B.b1:B.br
m=E.ap6(o,o,m,o,o,o,o,o,o,o,o,o,o,new A.c2(A.c7(5),B.r),o,o,o,o)
n=!n||p.LG()?o:new C.a48(p)
x=A.Z("CANCEL BOOKING")
x.ch=D.a2P
return new A.as(A.b([w,I.b_(E.yU(x.t(),n,m),0,0,0,20)],y.d),B.p,B.E,o,o)},
LG(){var x=Date.now(),w=this.c
if(B.f.bP(A.b4(0,M.aGn(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.oP.prototype={
v(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=E.cm("INVOICE BOOKING ID: "+n.a)
m.d9$=B.k
m.cx=Q.AN
x=y.n
w=A.b([],x)
v=n.db
if(v){u=E.bM("\nBooking Cancelled")
u.as=D.a09
u.e=B.R
w.push(u.t())}m.c=w
m=m.t()
w=E.cm("Created: ")
w.cx=D.dh
t=M.aGn(n.dx)
u=E.bM(""+A.b6(t)+"-"+p.x_(A.bm(t))+"-"+p.x_(A.cO(t))+" | "+p.x_(A.xP(t))+":"+p.x_(A.xQ(t)))
u.as=K.by
u.d9$=B.k
w.c=A.b([u.t()],x)
w=w.t()
u=E.cm("Pickup Date-Time: ")
u.cx=D.dh
s=E.bM(n.b+" | ")
s.as=K.by
s=s.t()
r=E.bM(n.c+" ")
r.as=K.by
u.c=A.b([s,r.t()],x)
u=u.t()
r=A.ak(B.e.ag(127.5),81,79,151)
s=v?o:new C.a44(p)
w=R.lV(!1,B.a_,o,o,!0,o,o,!1,o,o,0,o,!1,o,o,u,o,w,E.hk(o,A.Pt(D.Ka,v?B.b1:B.a7,o),s,r,15,o),o)
u=E.cm("Distance: ")
u.cx=D.dh
s=E.bM(A.d(N.aJ2(n.at,1))+" kms")
s.as=K.by
u.c=A.b([s.t()],x)
u=u.t()
s=E.cm("Driver Note:")
s.cx=D.dh
s.d9$=B.b1
v=n.ax
v=E.bM(v.length!==0?"\n"+v:"")
v.as=K.by
s.c=A.b([v.t()],x)
v=y.p
s=I.b_(new A.as(A.b([u,s.t()],v),B.p,B.E,o,o),16,0,0,0)
u=E.cm("Additional Helpers: ")
u.cx=D.dh
r=E.bM(""+n.ay)
r.as=K.by
u.c=A.b([r.t()],x)
u=u.t()
r=E.cm("Floors To Carry: ")
r.cx=D.dh
q=E.bM(""+n.ch)
q.as=K.by
r.c=A.b([q.t()],x)
r=I.b_(new A.as(A.b([u,r.t()],v),B.p,B.E,o,o),16,0,0,0)
u=E.cm("Vehicle type: ")
u.cx=D.dh
q=E.bM(A.d(n.y)+" Ton")
q.as=K.by
u.c=A.b([q.t()],x)
u=I.b_(u.t(),16,0,0,0)
x=$.aK()
v=H.UR(A.fJ(new A.aa(F.ak,new A.as(A.b([m,w,s,r,u,I.b_(new C.MF(n,p.gWC(),p.d,A.cf(x,A.aLv(),y.r),A.cf(x,A.SG(),y.D),o),10,0,0,0)],v),B.p,B.E,o,o),o),new A.bo(B.m,o,o,o,o,o,B.H),B.aC))
v.c=1
v.d=new A.c2(A.c7(5),new A.bG(B.bG,1,B.L))
return v.t()},
WD(){var x=this.d,w=this.c
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
var z=a.updateTypes(["oP(mU,m)","~()"])
C.auh.prototype={
$1(d){var x=0,w=A.E(y.P),v=this
var $async$$1=A.A(function(e,f){if(e===1)return A.B(f,w)
while(true)switch(x){case 0:x=2
return A.w(v.a.d.v7(),$async$$1)
case 2:return A.C(null,w)}})
return A.D($async$$1,w)},
$S:36}
C.aug.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.B
case 1:x=E.cH(new A.aa(F.ak,new A.as(A.b([A.o3(B.a8,A.b4(500,0,0),50)],y.x),B.G,B.t,u,u),u))
x.f=this.a.G(y.w).f.a.b
x.r=1/0
return x.t()
case 3:return A.Z(d.ch).t()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.b([D.a41],y.A)
v=S.pm(d.ay.d,new C.auf(),y.V,y.l)
return I.b_(new A.aq(1/0,u,new A.as(A.b([new A.aq(500,u,new A.as(w,B.p,B.E,u,u),u),I.bh(new A.aq(500,u,new A.as(A.Y(v,!0,v.$ti.i("u.E")),u,u,u,u),u),8,0)],x),B.G,B.t,u,u),u),16,0,0,0)}else{x=A.b([A.Z("Make your first booking!").t()],x)
return new A.aq(u,this.a.G(y.w).f.a.b,new A.aq(1/0,u,new A.aa(G.a0,new A.as(x,u,u,u,u),u),u),u)}default:return A.Z("there might be an error in your code check your provider").t()}},
$S:521}
C.auf.prototype={
$2(d,e){return new C.oP(d,new N.C0("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a48.prototype={
$0(){var x=0,w=A.E(y.H),v=this,u
var $async$$0=A.A(function(d,e){if(d===1)return A.B(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.w(u.f.y_(u.e,u.c,new C.a47(u)),$async$$0)
case 2:return A.C(null,w)}})
return A.D($async$$0,w)},
$S:1}
C.a47.prototype={
$0(){var x=0,w=A.E(y.H),v=this
var $async$$0=A.A(function(d,e){if(d===1)return A.B(e,w)
while(true)switch(x){case 0:x=2
return A.w(v.a.r.v7(),$async$$0)
case 2:return A.C(null,w)}})
return A.D($async$$0,w)},
$S:1}
C.a44.prototype={
$0(){var x=0,w=A.E(y.H),v=this,u,t,s
var $async$$0=A.A(function(d,e){if(d===1)return A.B(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.am(["retrieve",u.f],t,t)
A.nl($.aK(),"/signed-in/bookings/"+u.a,s,y.z)
return A.C(null,w)}})
return A.D($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(C.oP.prototype,"gWC","WD",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oY,A.P)
x(C.Wl,A.T)
w(A.bD,[C.auh,C.aug])
x(C.auf,A.dH)
w(A.a0,[C.MF,C.oP])
w(A.eK,[C.a48,C.a47,C.a44])})()
A.cz(b.typeUniverse,JSON.parse('{"oY":{"P":[],"f":[]},"Wl":{"T":["oY"]},"MF":{"a0":[],"f":[]},"oP":{"a0":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{l:x("oP"),V:x("mU"),r:x("oQ"),O:x("k<dV>"),d:x("k<aB>"),x:x("k<l9>"),s:x("k<dL>"),n:x("k<eb>"),A:x("k<fh>"),p:x("k<f>"),w:x("cG"),P:x("av"),D:x("kW"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){D.a_1=new A.eb("Discount given at the middle of the month.",null,null,B.bm,F.f8)
D.a4m=new A.mu(null,D.a_1,null,!1,L.fV,L.fp,B.e7,null)
D.Bx=new A.e1(F.ed,null,null,D.a4m,null)
D.Ka=new A.dJ(983823,"MaterialIcons",null,!1)
D.a09=new A.q(!0,B.br,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dh=new A.q(!0,B.b1,null,null,null,null,12,B.a1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a2P=new A.q(!0,B.m,null,null,null,null,12,B.M,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.AW=new A.q(!0,B.k,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a41=new I.fh("Your Bookings",null,null,null,null)})()}
$__dart_deferred_initializers__["YQuQFHFp+ydip7VVBc2U6xoqY7Y="] = $__dart_deferred_initializers__.current
