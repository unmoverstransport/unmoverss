self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
aYe(){return new C.oy(null)},
oy:function oy(d){this.a=d},
W4:function W4(d,e){var _=this
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
a3L:function a3L(d){this.a=d},
a3K:function a3K(d){this.a=d},
oq:function oq(d,e,f){this.c=d
this.d=e
this.a=f},
a3H:function a3H(d){this.a=d}},A,B,E,D,G,F,H,I
C=a.updateHolder(c[6],C)
A=c[0]
B=c[2]
E=c[19]
D=c[22]
G=c[23]
F=c[24]
H=c[17]
I=c[11]
C.oy.prototype={
W(){return new C.W4(A.cS($.ax(),A.SC(),y.D),B.l)}}
C.W4.prototype={
ad(){A.lA(B.A,y.z).aU(0,new C.ato(this),y.P)
this.av()},
A(d,e){var x=null
return new E.jb(A.b([A.hJ(new C.atn(e),x,x,x,y.D)],y.p),"/signed-in/bookings",x)}}
C.MF.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.dF(5),m=A.a_("Description")
m.Q=B.t
m.ch=D.b8
m=m.t()
x=A.a_("Total")
x.Q=B.t
x.ch=D.b8
w=y.p
x=A.b([new A.ae(D.b0,m,o),B.F,new A.ae(D.b0,x.t(),o)],w)
m=A.a_("Base Fee")
m.Q=B.C
m.ch=D.ae
m=m.t()
v=p.c
u="R "+A.d(v.z)
t=A.a_(u)
t.Q=B.C
t.ch=D.ae
t=A.b([new A.ae(D.b0,m,o),G.ot,new A.ae(D.b0,t.t(),o)],w)
m=A.a_("Discounts")
m.ch=D.b8
m.Q=B.t
m=A.b([new A.ae(D.b0,m.t(),o),B.F,B.F],w)
s=A.a_("Mid Month")
s.Q=B.C
s.ch=D.ae
s=s.t()
r=A.a_("R "+A.d(v.Q))
r.Q=B.C
r.ch=D.ae
r=A.b([new A.ae(D.b0,s,o),F.AE,new A.ae(D.b0,r.t(),o)],w)
s=A.a_("Loyal customer")
s.ch=D.ae
s.Q=B.C
s=s.t()
q=A.a_("R "+A.d(v.as))
q.Q=B.C
q.ch=D.ae
q=A.b([new A.ae(D.b0,s,o),G.ou,new A.ae(D.b0,q.t(),o)],w)
s=A.a_("Total amount due:")
s.ch=D.b8
s.Q=B.aa
s=s.t()
u=A.a_(u)
u.Q=B.aa
u.ch=D.b8
w=H.ao9(A.b([new H.dB(new A.bH(B.fD,o,o,n,o,o,B.M),x),new H.dB(o,t),new H.dB(G.ed,m),new H.dB(o,r),new H.dB(G.ed,q),new H.dB(G.ed,A.b([new A.ae(D.b0,s,o),B.F,new A.ae(D.b0,u.t(),o)],w))],y.s),o,G.hN)
n=!v.db
m=E.aok(o,o,!n||p.Ly()?B.b2:B.bc,o,o,o,o,o,o,o,o,o,o,B.f3,o,o,o,o)
n=!n||p.Ly()?o:new C.a3L(p)
x=A.a_("CANCEL BOOKING")
x.ch=D.dg
return new A.aC(A.b([w,E.b8(E.yI(x.t(),n,m),0,0,0,20)],y.d),B.q,B.D,o,o)},
Ly(){var x=Date.now(),w=this.c
if(B.f.c9(A.bh(0,I.aFh(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.oq.prototype={
A(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=E.ct("INVOICE BOOKING ID: "+n.a)
m.bM$=B.k
m.cx=D.nT
m.d=B.aa
x=y.n
w=A.b([],x)
v=n.db
if(v){u=E.bV("\nBooking Cancelled")
u.bM$=B.bc
u.as=G.bM
u.e=B.t
w.push(u.t())}m.c=w
m=m.t()
w=E.ct("Created: ")
w.cx=D.de
t=I.aFh(n.dx)
u=E.bV(""+A.b4(t)+"-"+p.wK(A.bm(t))+"-"+p.wK(A.cF(t))+" | "+p.wK(A.xz(t))+":"+p.wK(A.xA(t)))
u.e=B.C
u.as=D.ae
u.bM$=B.k
w.c=A.b([u.t()],x)
w=w.t()
u=E.ct("Pickup Date-Time: ")
u.d=B.t
u.cx=D.de
s=E.bV(n.b+" | ")
s.as=D.ae
s=s.t()
r=E.bV(n.c+" ")
r.as=D.ae
u.c=A.b([s,r.t()],x)
u=u.t()
r=A.az(B.e.al(127.5),151,38,120)
s=v?o:new C.a3H(p)
w=E.fa(!1,B.X,o,o,!0,o,!1,o,0,o,!1,o,o,u,o,w,E.lC(o,A.Pv(F.Jm,v?B.b2:B.S,o),o,s,r,15,o),o)
u=E.ct("Distance: ")
u.cx=D.de
s=E.bV(A.d(H.aHY(n.at,1))+" kms")
s.as=F.fa
u.c=A.b([s.t()],x)
u=u.t()
s=E.ct("Driver Note:")
s.d=B.t
s.cx=F.Y9
s.bM$=B.b2
v=n.ax
v=E.bV(v.length!==0?"\n"+v:"")
v.as=F.fa
s.c=A.b([v.t()],x)
v=y.p
s=E.b8(new A.aC(A.b([u,s.t()],v),B.q,B.D,o,o),16,0,0,0)
u=E.ct("Additional Helpers: ")
u.d=B.t
u.cx=D.de
r=E.bV(""+n.ay)
r.as=F.fa
u.c=A.b([r.t()],x)
u=u.t()
r=E.ct("Floors To Carry: ")
r.d=B.t
r.cx=D.de
q=E.bV(""+n.ch)
q.as=F.fa
r.c=A.b([q.t()],x)
r=E.b8(new A.aC(A.b([u,r.t()],v),B.q,B.D,o,o),16,0,0,0)
u=E.ct("Vehicle type: ")
u.d=B.t
u.cx=D.de
q=E.bV(A.d(n.y)+" Ton")
q.as=F.fa
u.c=A.b([q.t()],x)
u=E.b8(u.t(),16,0,0,0)
x=$.ax()
v=E.qf(new A.ae(D.ar,new A.aC(A.b([m,w,s,r,u,E.b8(new C.MF(n,p.gWv(),p.d,A.cS(x,A.aKm(),y.r),A.cS(x,A.SC(),y.D),o),10,0,0,0)],v),B.q,B.D,o,o),o))
v.c=10
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
var z=a.updateTypes(["oq(mE,m)","~()"])
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
switch(d.ax.a){case 0:return B.F
case 1:return new A.aR(u,this.a.E(y.w).f.a.b,new A.aR(1/0,u,new A.ae(D.O,B.dZ,u),u),u)
case 3:return A.a_(d.ch).t()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.a_("Your Bookings".toUpperCase())
w.as=B.a4
w.ch=D.f9
w=w.t()
v=E.p4(d.ay.d,new C.atm(),y.V,y.l)
return E.b8(new A.aR(1/0,u,new A.aC(A.b([new A.aR(500,u,new A.ae(new A.am(16,16,16,16),w,u),u),E.bZ(new A.aR(500,u,new A.aC(A.Y(v,!0,v.$ti.i("r.E")),u,u,u,u),u),8,0)],x),B.E,B.v,u,u),u),16,0,0,0)}else{x=A.b([A.a_("Make your first booking!").t()],x)
return new A.aR(u,this.a.E(y.w).f.a.b,new A.aR(1/0,u,new A.ae(D.O,new A.aC(x,u,u,u,u),u),u),u)}default:return A.a_("there might be an error in your code check your provider").t()}},
$S:514}
C.atm.prototype={
$2(d,e){return new C.oq(d,new H.BQ("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a3L.prototype={
$0(){var x=0,w=A.J(y.H),v=this,u
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.L(u.f.xO(u.e,u.c,new C.a3K(u)),$async$$0)
case 2:return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2}
C.a3K.prototype={
$0(){var x=0,w=A.J(y.H),v=this
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:x=2
return A.L(v.a.r.uR(),$async$$0)
case 2:return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2}
C.a3H.prototype={
$0(){var x=0,w=A.J(y.H),v=this,u,t,s
var $async$$0=A.E(function(d,e){if(d===1)return A.G(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.ak(["retrieve",u.f],t,t)
A.dK($.ax(),"/signed-in/bookings/"+u.a,s,y.z)
return A.H(null,w)}})
return A.I($async$$0,w)},
$S:2};(function installTearOffs(){var x=a._instance_0u
x(C.oq.prototype,"gWv","Ww",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oy,A.T)
x(C.W4,A.W)
w(A.cc,[C.ato,C.atn])
x(C.atm,A.h_)
w(A.a5,[C.MF,C.oq])
w(A.k7,[C.a3L,C.a3K,C.a3H])})()
A.fM(b.typeUniverse,JSON.parse('{"oy":{"T":[],"e":[]},"W4":{"W":["oy"]},"MF":{"a5":[],"e":[]},"oq":{"a5":[],"e":[]}}'))
var y=(function rtii(){var x=A.K
return{l:x("oq"),V:x("mE"),r:x("or"),O:x("k<dU>"),d:x("k<aB>"),s:x("k<dB>"),n:x("k<ev>"),p:x("k<e>"),w:x("d4"),P:x("aw"),D:x("kI"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){F.Wd=new A.ev("Discount given at the middle of the month.",null,null,B.aV,D.dg)
F.a_J=new A.jK(null,F.Wd,null,!1,G.fX,G.fo,B.cH,null)
F.AE=new A.d8(D.ec,null,null,F.a_J,null)
F.Jm=new A.dn(983823,"MaterialIcons",null,!1)
F.fa=new A.v(!0,B.k,null,null,null,null,null,B.aG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
F.Y9=new A.v(!0,B.b2,null,null,null,null,14,B.aG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()}
$__dart_deferred_initializers__["a5fMFocM+FN8UERxG230bC8wW3U="] = $__dart_deferred_initializers__.current
