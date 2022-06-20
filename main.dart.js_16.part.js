self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
aYf(){return new C.oz(null)},
oz:function oz(d){this.a=d},
W5:function W5(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
ato:function ato(d){this.a=d},
atn:function atn(d){this.a=d},
atm:function atm(){},
MF:function MF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a3M:function a3M(d){this.a=d},
a3L:function a3L(d){this.a=d},
or:function or(d,e,f){this.c=d
this.d=e
this.a=f},
a3I:function a3I(d){this.a=d}},A,B,D,E,H,F,G,K,I
C=a.updateHolder(c[6],C)
A=c[0]
B=c[2]
D=c[19]
E=c[22]
H=c[23]
F=c[24]
G=c[17]
K=c[11]
I=c[25]
C.oz.prototype={
W(){return new C.W5(A.cT($.ax(),A.SD(),y.D),B.l)}}
C.W5.prototype={
ad(){A.lB(B.A,y.z).aU(0,new C.ato(this),y.P)
this.av()},
A(d,e){var x=null
return new D.jc(A.b([A.hI(new C.atn(e),x,x,x,y.D)],y.p),"/signed-in/bookings",x)}}
C.MF.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.cy(5),m=A.a_("Description")
m.Q=B.J
m.ch=E.ch
m=m.t()
x=A.a_("Total")
x.Q=B.J
x.ch=E.ch
w=y.p
x=A.b([new A.ah(E.b1,m,o),B.E,new A.ah(E.b1,x.t(),o)],w)
m=A.a_("Base Fee")
m.ch=E.D
m=m.t()
v=p.c
u="R "+A.d(v.z)
t=A.a_(u)
t.ch=E.D
t=A.b([new A.ah(E.b1,m,o),H.ot,new A.ah(E.b1,t.t(),o)],w)
m=A.a_("Discounts")
m.ch=E.ch
m.Q=B.J
m=A.b([new A.ah(E.b1,m.t(),o),B.E,B.E],w)
s=A.a_("Mid Month")
s.ch=E.D
s=s.t()
r=A.a_("R "+A.d(v.Q))
r.ch=E.D
r=A.b([new A.ah(E.b1,s,o),F.AH,new A.ah(E.b1,r.t(),o)],w)
s=A.a_("Loyal customer")
s.ch=E.D
s=s.t()
q=A.a_("R "+A.d(v.as))
q.ch=E.D
q=A.b([new A.ah(E.b1,s,o),H.ou,new A.ah(E.b1,q.t(),o)],w)
s=A.a_("Total amount due:")
s.ch=E.ch
s.Q=B.cX
s=s.t()
u=A.a_(u)
u.Q=B.cX
u.ch=E.ch
w=G.ao9(A.b([new G.dB(new A.bG(B.fA,o,o,n,o,o,B.I),x),new G.dB(o,t),new G.dB(H.ef,m),new G.dB(o,r),new G.dB(H.ef,q),new G.dB(H.ef,A.b([new A.ah(E.b1,s,o),B.E,new A.ah(E.b1,u.t(),o)],w))],y.s),o,H.hM)
n=!v.db
m=D.aok(o,o,!n||p.Ly()?B.bF:B.bb,o,o,o,o,o,o,o,o,o,o,B.f3,o,o,o,o)
n=!n||p.Ly()?o:new C.a3M(p)
x=A.a_("CANCEL BOOKING")
x.ch=E.di
return new A.az(A.b([w,D.b8(D.yI(x.t(),n,m),0,0,0,20)],y.d),B.q,B.B,o,o)},
Ly(){var x=Date.now(),w=this.c
if(B.f.c9(A.bh(0,K.aFh(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.or.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=D.cu("INVOICE BOOKING ID: "+n.a)
m.c3$=B.k
m.cx=E.dg
x=y.n
w=A.b([],x)
v=n.db
if(v){u=D.bX("\nBooking Cancelled")
u.as=F.Xf
u.e=B.J
w.push(u.t())}m.c=w
m=m.t()
w=D.cu("Created: ")
w.cx=F.dh
t=K.aFh(n.dx)
u=D.bX(""+A.b4(t)+"-"+p.wK(A.bm(t))+"-"+p.wK(A.cG(t))+" | "+p.wK(A.xz(t))+":"+p.wK(A.xA(t)))
u.as=E.D
u.c3$=B.k
w.c=A.b([u.t()],x)
w=w.t()
u=D.cu("Pickup Date-Time: ")
u.cx=F.dh
s=D.bX(n.b+" | ")
s.as=E.D
s=s.t()
r=D.bX(n.c+" ")
r.as=E.D
u.c=A.b([s,r.t()],x)
u=u.t()
r=A.aA(B.e.al(127.5),151,38,120)
s=v?o:new C.a3I(p)
w=D.fb(!1,B.Z,o,o,!0,o,!1,o,0,o,!1,o,o,u,o,w,D.n1(o,A.Pw(F.Jq,v?B.bF:B.S,o),o,s,r,15,o),o)
u=D.cu("Distance: ")
u.cx=F.dh
s=D.bX(A.d(G.aHY(n.at,1))+" kms")
s.as=I.e4
u.c=A.b([s.t()],x)
u=u.t()
s=D.cu("Driver Note:")
s.cx=F.dh
s.c3$=B.bF
v=n.ax
v=D.bX(v.length!==0?"\n"+v:"")
v.as=I.e4
s.c=A.b([v.t()],x)
v=y.p
s=D.b8(new A.az(A.b([u,s.t()],v),B.q,B.B,o,o),16,0,0,0)
u=D.cu("Additional Helpers: ")
u.cx=F.dh
r=D.bX(""+n.ay)
r.as=I.e4
u.c=A.b([r.t()],x)
u=u.t()
r=D.cu("Floors To Carry: ")
r.cx=F.dh
q=D.bX(""+n.ch)
q.as=I.e4
r.c=A.b([q.t()],x)
r=D.b8(new A.az(A.b([u,r.t()],v),B.q,B.B,o,o),16,0,0,0)
u=D.cu("Vehicle type: ")
u.cx=F.dh
q=D.bX(A.d(n.y)+" Ton")
q.as=I.e4
u.c=A.b([q.t()],x)
u=D.b8(u.t(),16,0,0,0)
x=$.ax()
v=D.qf(new A.ah(E.as,new A.az(A.b([m,w,s,r,u,D.b8(new C.MF(n,p.gWv(),p.d,A.cT(x,A.aKm(),y.r),A.cT(x,A.SD(),y.D),o),10,0,0,0)],v),B.q,B.B,o,o),o))
v.c=1
v.c3$=B.w
v.d=new A.cs(A.cy(5),new A.bJ(B.bx,1,B.P))
return v.t()},
Ww(){var x=this.d,w=this.c
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
wK(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["or(mD,m)","~()"])
C.ato.prototype={
$1(d){var x=0,w=A.J(y.P),v=this
var $async$$1=A.E(function(e,f){if(e===1)return A.G(f,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.d.uR(),$async$$1)
case 2:return A.H(null,w)}})
return A.I($async$$1,w)},
$S:36}
C.atn.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.E
case 1:return new A.aK(u,this.a.E(y.w).f.a.b,new A.aK(1/0,u,new A.ah(E.N,B.e_,u),u),u)
case 3:return A.a_(d.ch).t()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.b([F.a_t],y.A)
v=D.p4(d.ay.d,new C.atm(),y.V,y.l)
return D.b8(new A.aK(1/0,u,new A.az(A.b([new A.aK(500,u,new A.az(w,B.q,B.B,u,u),u),D.bv(new A.aK(500,u,new A.az(A.Y(v,!0,v.$ti.i("r.E")),u,u,u,u),u),8,0)],x),B.C,B.u,u,u),u),16,0,0,0)}else{x=A.b([A.a_("Make your first booking!").t()],x)
return new A.aK(u,this.a.E(y.w).f.a.b,new A.aK(1/0,u,new A.ah(E.N,new A.az(x,u,u,u,u),u),u),u)}default:return A.a_("there might be an error in your code check your provider").t()}},
$S:514}
C.atm.prototype={
$2(d,e){return new C.or(d,new G.BQ("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a3M.prototype={
$0(){var x=0,w=A.J(y.H),v=this,u
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.L(u.f.xO(u.e,u.c,new C.a3L(u)),$async$$0)
case 2:return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2}
C.a3L.prototype={
$0(){var x=0,w=A.J(y.H),v=this
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.r.uR(),$async$$0)
case 2:return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2}
C.a3I.prototype={
$0(){var x=0,w=A.J(y.H),v=this,u,t,s
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.ak(["retrieve",u.f],t,t)
A.dJ($.ax(),"/signed-in/bookings/"+u.a,s,y.z)
return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(C.or.prototype,"gWv","Ww",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oz,A.T)
x(C.W5,A.W)
w(A.cc,[C.ato,C.atn])
x(C.atm,A.h_)
w(A.a5,[C.MF,C.or])
w(A.k7,[C.a3M,C.a3L,C.a3I])})()
A.fM(b.typeUniverse,JSON.parse('{"oz":{"T":[],"e":[]},"W5":{"W":["oz"]},"MF":{"a5":[],"e":[]},"or":{"a5":[],"e":[]}}'))
var y=(function rtii(){var x=A.K
return{l:x("or"),V:x("mD"),r:x("os"),O:x("k<dU>"),d:x("k<aC>"),s:x("k<dB>"),n:x("k<ev>"),A:x("k<io>"),p:x("k<e>"),w:x("d5"),P:x("aw"),D:x("kJ"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){F.Wf=new A.ev("Discount given at the middle of the month.",null,null,B.aX,E.di)
F.a_J=new A.jK(null,F.Wf,null,!1,H.fV,H.fl,B.cF,null)
F.AH=new A.d9(E.ee,null,null,F.a_J,null)
F.Jq=new A.dn(983823,"MaterialIcons",null,!1)
F.Xf=new A.v(!0,B.bb,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.dh=new A.v(!0,B.bF,null,null,null,null,14,B.a2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.a_t=new D.io("Your Bookings",null,null)})()}
$__dart_deferred_initializers__["Ah1ajIIB+ZhXe6ePlEVc6rVFQkg="] = $__dart_deferred_initializers__.current
