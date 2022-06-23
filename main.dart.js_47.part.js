self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
aZh(){return new C.oV(null)},
oV:function oV(d){this.a=d},
Wb:function Wb(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
au6:function au6(d){this.a=d},
au5:function au5(d){this.a=d},
au4:function au4(){},
MD:function MD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a4_:function a4_(d){this.a=d},
a3Z:function a3Z(d){this.a=d},
oK:function oK(d,e,f){this.c=d
this.d=e
this.a=f},
a3W:function a3W(d){this.a=d}},A,B,P,G,F,H,K,E,L,Q,D,I,N,R,O,M,S,T
C=a.updateHolder(c[6],C)
A=c[0]
B=c[2]
P=c[34]
G=c[49]
F=c[50]
H=c[51]
K=c[52]
E=c[53]
L=c[30]
Q=c[54]
D=c[38]
I=c[45]
N=c[19]
R=c[41]
O=c[27]
M=c[55]
S=c[32]
T=c[43]
C.oV.prototype={
U(){return new C.Wb(A.cy($.aK(),A.SA(),y.D),B.l)}}
C.Wb.prototype={
ab(){A.jv(B.A,null,y.z).aS(0,new C.au6(this),y.P)
this.ar()},
A(d,e){var x=null
return new P.iq(A.b([A.fK(new C.au5(e),x,x,x,y.D)],y.p),"/signed-in/bookings",x)}}
C.MD.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.cf(5),m=A.a_("Description")
m.Q=B.S
m.ch=G.ck
m=m.t()
x=A.a_("Total")
x.Q=B.S
x.ch=G.ck
w=y.p
x=A.b([new A.a9(F.b6,m,o),B.B,new A.a9(F.b6,x.t(),o)],w)
m=A.a_("Base Fee")
m.ch=H.J
m=m.t()
v=p.c
u=v.z
t=v.Q
s=A.a_("R "+A.d(u+t))
s.ch=H.J
s=A.b([new A.a9(F.b6,m,o),K.oI,new A.a9(F.b6,s.t(),o)],w)
m=A.a_("Discounts")
m.ch=G.ck
m.Q=B.S
m=A.b([new A.a9(F.b6,m.t(),o),B.B,B.B],w)
r=A.a_("Mid Month")
r.ch=H.J
r=r.t()
t=A.a_("R "+A.d(t))
t.ch=H.J
t=A.b([new A.a9(F.b6,r,o),E.Bu,new A.a9(F.b6,t.t(),o)],w)
r=A.a_("Loyal customer")
r.ch=H.J
r=r.t()
q=A.a_("R "+A.d(v.as))
q.ch=H.J
q=A.b([new A.a9(F.b6,r,o),K.oJ,new A.a9(F.b6,q.t(),o)],w)
r=A.a_("Total amount due:")
r.ch=G.ck
r.Q=B.dy
r=r.t()
u=A.a_("R "+A.d(u))
u.Q=B.dy
u.ch=G.ck
w=L.aHw(A.b([new L.dI(new A.bj(B.fG,o,o,n,o,o,B.H),x),new L.dI(o,s),new L.dI(K.ef,m),new L.dI(o,t),new L.dI(K.ef,q),new L.dI(K.ef,A.b([new A.a9(F.b6,r,o),B.B,new A.a9(F.b6,u.t(),o)],w))],y.s),Q.o_)
n=!v.db
m=D.aoV(o,o,!n||p.LB()?B.bq:B.b7,o,o,o,o,o,o,o,o,o,o,B.dZ,o,o,o,o)
n=!n||p.LB()?o:new C.a4_(p)
x=A.a_("CANCEL BOOKING")
x.ch=G.e6
return new A.aq(A.b([w,I.aZ(D.yT(x.t(),n,m),0,0,0,20)],y.d),B.q,B.D,o,o)},
LB(){var x=Date.now(),w=this.c
if(B.f.bP(A.bd(0,N.aGc(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.oK.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=D.ce("INVOICE BOOKING ID: "+n.a)
m.d9$=B.k
m.cx=G.hY
x=y.n
w=A.b([],x)
v=n.db
if(v){u=D.bM("\nBooking Cancelled")
u.as=E.a05
u.e=B.S
w.push(u.t())}m.c=w
m=m.t()
w=D.ce("Created: ")
w.cx=E.de
t=N.aGc(n.dx)
u=D.bM(""+A.b5(t)+"-"+p.wZ(A.bm(t))+"-"+p.wZ(A.cO(t))+" | "+p.wZ(A.xO(t))+":"+p.wZ(A.xP(t)))
u.as=H.J
u.d9$=B.k
w.c=A.b([u.t()],x)
w=w.t()
u=D.ce("Pickup Date-Time: ")
u.cx=E.de
s=D.bM(n.b+" | ")
s.as=H.J
s=s.t()
r=D.bM(n.c+" ")
r.as=H.J
u.c=A.b([s,r.t()],x)
u=u.t()
r=A.ak(B.e.ag(127.5),81,79,151)
s=v?o:new C.a3W(p)
w=R.lV(!1,B.a1,o,o,!0,o,!1,o,0,o,!1,o,o,u,o,w,D.fr(o,A.Pq(E.K5,v?B.bq:B.a8,o),s,r,15,o),o)
u=D.ce("Distance: ")
u.cx=E.de
s=D.bM(A.d(O.aIU(n.at,1))+" kms")
s.as=M.e4
u.c=A.b([s.t()],x)
u=u.t()
s=D.ce("Driver Note:")
s.cx=E.de
s.d9$=B.bq
v=n.ax
v=D.bM(v.length!==0?"\n"+v:"")
v.as=M.e4
s.c=A.b([v.t()],x)
v=y.p
s=I.aZ(new A.aq(A.b([u,s.t()],v),B.q,B.D,o,o),16,0,0,0)
u=D.ce("Additional Helpers: ")
u.cx=E.de
r=D.bM(""+n.ay)
r.as=M.e4
u.c=A.b([r.t()],x)
u=u.t()
r=D.ce("Floors To Carry: ")
r.cx=E.de
q=D.bM(""+n.ch)
q.as=M.e4
r.c=A.b([q.t()],x)
r=I.aZ(new A.aq(A.b([u,r.t()],v),B.q,B.D,o,o),16,0,0,0)
u=D.ce("Vehicle type: ")
u.cx=E.de
q=D.bM(A.d(n.y)+" Ton")
q.as=M.e4
u.c=A.b([q.t()],x)
u=I.aZ(u.t(),16,0,0,0)
x=$.aK()
v=S.Hk(A.fG(new A.a9(G.aj,new A.aq(A.b([m,w,s,r,u,I.aZ(new C.MD(n,p.gWx(),p.d,A.cy(x,A.aLm(),y.r),A.cy(x,A.SA(),y.D),o),10,0,0,0)],v),B.q,B.D,o,o),o),new A.bj(B.m,o,o,o,o,o,B.H),B.aC))
v.c=1
v.d=new A.c8(A.cf(5),new A.bJ(B.bE,1,B.N))
return v.t()},
Wy(){var x=this.d,w=this.c
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
var z=a.updateTypes(["oK(mW,m)","~()"])
C.au6.prototype={
$1(d){var x=0,w=A.G(y.P),v=this
var $async$$1=A.C(function(e,f){if(e===1)return A.D(f,w)
while(true)switch(x){case 0:x=2
return A.y(v.a.d.v6(),$async$$1)
case 2:return A.E(null,w)}})
return A.F($async$$1,w)},
$S:35}
C.au5.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.B
case 1:x=D.cI(new A.a9(G.aj,new A.aq(A.b([A.ui(B.af,A.bd(500,0,0),50)],y.x),B.G,B.t,u,u),u))
x.f=this.a.F(y.w).f.a.b
x.r=1/0
return x.t()
case 3:return A.a_(d.ch).t()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.b([E.a41],y.A)
v=T.pl(d.ay.d,new C.au4(),y.V,y.l)
return I.aZ(new A.as(1/0,u,new A.aq(A.b([new A.as(500,u,new A.aq(w,B.q,B.D,u,u),u),I.bv(new A.as(500,u,new A.aq(A.Y(v,!0,v.$ti.i("u.E")),u,u,u,u),u),8,0)],x),B.G,B.t,u,u),u),16,0,0,0)}else{x=A.b([A.a_("Make your first booking!").t()],x)
return new A.as(u,this.a.F(y.w).f.a.b,new A.as(1/0,u,new A.a9(F.a4,new A.aq(x,u,u,u,u),u),u),u)}default:return A.a_("there might be an error in your code check your provider").t()}},
$S:521}
C.au4.prototype={
$2(d,e){return new C.oK(d,new O.BZ("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a4_.prototype={
$0(){var x=0,w=A.G(y.H),v=this,u
var $async$$0=A.C(function(d,e){if(d===1)return A.D(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.y(u.f.xZ(u.e,u.c,new C.a3Z(u)),$async$$0)
case 2:return A.E(null,w)}})
return A.F($async$$0,w)},
$S:1}
C.a3Z.prototype={
$0(){var x=0,w=A.G(y.H),v=this
var $async$$0=A.C(function(d,e){if(d===1)return A.D(e,w)
while(true)switch(x){case 0:x=2
return A.y(v.a.r.v6(),$async$$0)
case 2:return A.E(null,w)}})
return A.F($async$$0,w)},
$S:1}
C.a3W.prototype={
$0(){var x=0,w=A.G(y.H),v=this,u,t,s
var $async$$0=A.C(function(d,e){if(d===1)return A.D(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.an(["retrieve",u.f],t,t)
A.lN($.aK(),"/signed-in/bookings/"+u.a,s,y.z)
return A.E(null,w)}})
return A.F($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(C.oK.prototype,"gWx","Wy",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oV,A.Q)
x(C.Wb,A.U)
w(A.bD,[C.au6,C.au5])
x(C.au4,A.dF)
w(A.a0,[C.MD,C.oK])
w(A.eK,[C.a4_,C.a3Z,C.a3W])})()
A.cl(b.typeUniverse,JSON.parse('{"oV":{"Q":[],"f":[]},"Wb":{"U":["oV"]},"MD":{"a0":[],"f":[]},"oK":{"a0":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{l:x("oK"),V:x("mW"),r:x("oM"),O:x("k<dT>"),d:x("k<aB>"),x:x("k<je>"),s:x("k<dI>"),n:x("k<e9>"),A:x("k<hy>"),p:x("k<f>"),w:x("cH"),P:x("ax"),D:x("kW"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){E.ZY=new A.e9("Discount given at the middle of the month.",null,null,B.bl,G.e6)
E.a4g=new A.mv(null,E.ZY,null,!1,K.fZ,K.fs,B.e8,null)
E.Bu=new A.dO(G.ee,null,null,E.a4g,null)
E.K5=new A.dA(983823,"MaterialIcons",null,!1)
E.a05=new A.q(!0,B.b7,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
E.de=new A.q(!0,B.bq,null,null,null,null,14,B.Z,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
E.a41=new I.hy("Your Bookings",null,null,null)})()}
$__dart_deferred_initializers__["up0hsHhQS28/vsTVwW24U2h9JmM="] = $__dart_deferred_initializers__.current
