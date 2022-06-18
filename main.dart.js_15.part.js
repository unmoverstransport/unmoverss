self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
aYv(){return new C.ox(null)},
ox:function ox(d){this.a=d},
W6:function W6(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
atu:function atu(d){this.a=d},
att:function att(d){this.a=d},
ats:function ats(){},
ME:function ME(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a3O:function a3O(d){this.a=d},
a3N:function a3N(d){this.a=d},
oo:function oo(d,e,f){this.c=d
this.d=e
this.a=f},
a3K:function a3K(d){this.a=d}},A,B,D,E,H,G,F,I
C=a.updateHolder(c[6],C)
A=c[0]
B=c[2]
D=c[19]
E=c[22]
H=c[23]
G=c[17]
F=c[24]
I=c[11]
C.ox.prototype={
W(){return new C.W6(A.cT($.ax(),A.SC(),y.D),B.l)}}
C.W6.prototype={
ae(){A.lz(B.B,y.z).aU(0,new C.atu(this),y.P)
this.az()},
A(d,e){var x=null
return new D.j9(A.b([A.hL(new C.att(e),x,x,x,y.D)],y.p),"/home/bookings",x)}}
C.ME.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.ee(5),m=A.a_("Description")
m.Q=B.q
m.ch=E.K
m=m.t()
x=A.a_("Total")
x.Q=B.q
x.ch=E.K
w=y.p
x=A.b([new A.ag(E.b0,m,o),B.G,new A.ag(E.b0,x.t(),o)],w)
m=A.a_("Base Fee")
m.Q=B.x
m.ch=E.K
m=m.t()
v=p.c
u="R "+A.d(v.z)
t=A.a_(u)
t.Q=B.x
t.ch=E.K
t=A.b([new A.ag(E.b0,m,o),H.om,new A.ag(E.b0,t.t(),o)],w)
m=A.a_("Discounts")
m.ch=E.K
m.Q=B.q
m=A.b([new A.ag(E.b0,m.t(),o),B.G,B.G],w)
s=A.a_("Mid Month")
s.Q=B.x
s.ch=E.K
s=s.t()
r=A.a_("R "+A.d(v.Q))
r.Q=B.x
r.ch=E.K
r=A.b([new A.ag(E.b0,s,o),H.on,new A.ag(E.b0,r.t(),o)],w)
s=A.a_("Loyal customer")
s.ch=E.K
s.Q=B.x
s=s.t()
q=A.a_("R "+A.d(v.as))
q.Q=B.x
q.ch=E.K
q=A.b([new A.ag(E.b0,s,o),H.oo,new A.ag(E.b0,q.t(),o)],w)
s=A.a_("Total amount due:")
s.ch=E.K
s.Q=B.a9
s=s.t()
u=A.a_(u)
u.Q=B.a9
u.ch=E.K
w=G.aof(A.b([new G.dB(new A.bI(B.fv,o,o,n,o,o,B.N),x),new G.dB(o,t),new G.dB(H.e6,m),new G.dB(o,r),new G.dB(H.e6,q),new G.dB(H.e6,A.b([new A.ag(E.b0,s,o),B.G,new A.ag(E.b0,u.t(),o)],w))],y.s),o,H.hF)
n=!v.db
m=D.aoq(o,o,!n||p.LF()?B.b2:B.bb,o,o,o,o,o,o,o,o,o,o,B.eX,o,o,o,o)
n=!n||p.LF()?o:new C.a3O(p)
x=A.a_("CANCEL BOOKING")
x.ch=F.Z3
return new A.aC(A.b([w,D.b8(D.yK(x.t(),n,m),0,0,0,20)],y.d),B.r,B.C,o,o)},
LF(){var x=Date.now(),w=this.c
if(B.f.cb(A.bj(0,I.aFr(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.oo.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=D.cu("INVOICE BOOKING ID: "+n.a)
m.b8$=B.k
m.cx=E.nM
m.d=B.a9
x=y.n
w=A.b([],x)
v=n.db
if(v){u=D.bW("\nBooking Cancelled")
u.b8$=B.bb
u.as=B.af
u.e=B.q
w.push(u.t())}m.c=w
m=m.t()
w=D.cu("Created: ")
w.d=B.q
w.cx=F.dY
t=I.aFr(n.dx)
u=D.bW(""+A.b3(t)+"-"+p.wN(A.bm(t))+"-"+p.wN(A.cG(t))+" | "+p.wN(A.xB(t))+":"+p.wN(A.xC(t)))
u.e=B.x
u.b8$=B.k
w.c=A.b([u.t()],x)
w=w.t()
u=D.cu("Pickup Date-Time: ")
u.d=B.q
u.cx=B.af
s=D.bW(n.b+" | ")
s.e=B.x
s.b8$=B.k
s=s.t()
r=D.bW(n.c+" ")
r.e=B.x
r.b8$=B.k
u.c=A.b([s,r.t()],x)
u.b8$=B.b2
u=u.t()
r=A.az(B.e.al(127.5),151,38,120)
s=v?o:new C.a3K(p)
w=D.fa(!1,B.Y,o,o,!0,o,!1,o,0,o,!1,o,o,u,o,w,D.lB(o,A.Pt(F.Je,v?B.b2:B.a2,o),o,s,r,15,o),o)
u=D.cu("Distance: ")
u.d=B.q
u.cx=F.dY
s=D.bW(A.d(G.aI7(n.at,1))+" kms")
s.b8$=B.k
s.e=B.x
u.c=A.b([s.t()],x)
u=u.t()
s=D.cu("Driver Note:")
s.d=B.q
s.cx=F.dY
s.b8$=B.b2
v=n.ax
v=D.bW(v.length!==0?"\n"+v:"")
v.b8$=B.k
v.e=B.x
s.c=A.b([v.t()],x)
v=y.p
s=D.b8(new A.aC(A.b([u,s.t()],v),B.r,B.C,o,o),16,0,0,0)
u=D.cu("Additional Helpers: ")
u.d=B.q
u.cx=F.dY
r=D.bW(""+n.ay)
r.b8$=B.k
r.e=B.x
u.c=A.b([r.t()],x)
u=u.t()
r=D.cu("Floors To Carry: ")
r.d=B.q
r.cx=F.dY
q=D.bW(""+n.ch)
q.b8$=B.k
q.e=B.x
r.c=A.b([q.t()],x)
r=D.b8(new A.aC(A.b([u,r.t()],v),B.r,B.C,o,o),16,0,0,0)
u=D.cu("Vehicle type: ")
u.d=B.q
u.cx=F.dY
q=D.bW(A.d(n.y)+" Ton")
q.b8$=B.k
q.e=B.x
u.c=A.b([q.t()],x)
u=D.b8(u.t(),16,0,0,0)
x=$.ax()
v=D.qe(new A.ag(E.ar,new A.aC(A.b([m,w,s,r,u,D.b8(new C.ME(n,p.gWA(),p.d,A.cT(x,A.aKA(),y.r),A.cT(x,A.SC(),y.D),o),10,0,0,0)],v),B.r,B.C,o,o),o))
v.c=10
return v.t()},
WB(){var x=this.d,w=this.c
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
wN(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["oo(mE,m)","~()"])
C.atu.prototype={
$1(d){var x=0,w=A.J(y.P),v=this
var $async$$1=A.E(function(e,f){if(e===1)return A.G(f,w)
while(true)switch(x){case 0:x=2
return A.B(v.a.d.uU(),$async$$1)
case 2:return A.H(null,w)}})
return A.I($async$$1,w)},
$S:39}
C.att.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.G
case 1:return new A.aR(u,this.a.E(y.w).f.a.b,new A.aR(1/0,u,new A.ag(E.P,B.dT,u),u),u)
case 3:return A.a_(d.ch).t()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.a_("Your Bookings".toUpperCase())
w.as=B.a4
w.ch=E.f2
w=w.t()
v=D.p2(d.ay.d,new C.ats(),y.V,y.l)
return D.b8(new A.aR(1/0,u,new A.aC(A.b([new A.aR(500,u,new A.ag(new A.ap(16,16,16,16),w,u),u),D.c_(new A.aR(500,u,new A.aC(A.Y(v,!0,v.$ti.i("r.E")),u,u,u,u),u),8,0)],x),B.D,B.v,u,u),u),16,0,0,0)}else{x=A.b([A.a_("Make your first booking!").t()],x)
return new A.aR(u,this.a.E(y.w).f.a.b,new A.aR(1/0,u,new A.ag(E.P,new A.aC(x,u,u,u,u),u),u),u)}default:return A.a_("there might be an error in your code check your provider").t()}},
$S:516}
C.ats.prototype={
$2(d,e){return new C.oo(d,new G.BS("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a3O.prototype={
$0(){var x=0,w=A.J(y.H),v=this,u
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.B(u.f.xV(u.e,u.c,new C.a3N(u)),$async$$0)
case 2:return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2}
C.a3N.prototype={
$0(){var x=0,w=A.J(y.H),v=this
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:x=2
return A.B(v.a.r.uU(),$async$$0)
case 2:return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2}
C.a3K.prototype={
$0(){var x=0,w=A.J(y.H),v=this,u,t,s
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.ae(["retrieve",u.f],t,t)
A.dJ($.ax(),"/home/bookings/"+u.a,s,y.z)
return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(C.oo.prototype,"gWA","WB",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.ox,A.T)
x(C.W6,A.W)
w(A.cc,[C.atu,C.att])
x(C.ats,A.h1)
w(A.a4,[C.ME,C.oo])
w(A.k4,[C.a3O,C.a3N,C.a3K])})()
A.fP(b.typeUniverse,JSON.parse('{"ox":{"T":[],"e":[]},"W6":{"W":["ox"]},"ME":{"a4":[],"e":[]},"oo":{"a4":[],"e":[]}}'))
var y=(function rtii(){var x=A.L
return{l:x("oo"),V:x("mE"),r:x("op"),O:x("k<dS>"),d:x("k<aB>"),s:x("k<dB>"),n:x("k<eL>"),p:x("k<e>"),w:x("de"),P:x("aw"),D:x("kG"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){F.Je=new A.dd(983823,"MaterialIcons",null,!1)
F.dY=new A.x(!0,B.b2,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.Z3=new A.x(!0,B.m,null,null,null,null,14,B.x,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()}
$__dart_deferred_initializers__["E2Zbqt2LWpaKC0BN7/i8nW8Tzuo="] = $__dart_deferred_initializers__.current
