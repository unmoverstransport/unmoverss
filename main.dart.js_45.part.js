self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
aZm(){return new C.oX(null)},
oX:function oX(d){this.a=d},
Wf:function Wf(d,e){var _=this
_.d=d
_.a=null
_.b=e
_.c=null},
aud:function aud(d){this.a=d},
auc:function auc(d){this.a=d},
aub:function aub(){},
MD:function MD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a43:function a43(d){this.a=d},
a42:function a42(d){this.a=d},
oM:function oM(d,e,f){this.c=d
this.d=e
this.a=f},
a4_:function a4_(d){this.a=d}},A,B,N,F,G,K,D,H,O,E,I,L,P,M,Q
C=a.updateHolder(c[6],C)
A=c[0]
B=c[2]
N=c[33]
F=c[48]
G=c[49]
K=c[50]
D=c[51]
H=c[30]
O=c[52]
E=c[37]
I=c[44]
L=c[19]
P=c[40]
M=c[27]
Q=c[42]
C.oX.prototype={
U(){return new C.Wf(A.cy($.aK(),A.SB(),y.D),B.l)}}
C.Wf.prototype={
aa(){A.jx(B.A,null,y.z).aS(0,new C.aud(this),y.P)
this.aq()},
v(d,e){var x=null
return new N.iq(A.b([A.fJ(new C.auc(e),x,x,x,y.D)],y.p),"/signed-in/bookings",x)}}
C.MD.prototype={
v(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.c7(5),m=A.Y("Description")
m.Q=B.R
m.ch=F.i1
m=m.t()
x=A.Y("Total")
x.Q=B.R
x.ch=F.i1
w=y.p
x=A.b([new A.a9(G.b7,m,o),B.B,new A.a9(G.b7,x.t(),o)],w)
m=A.Y("Base Fee")
m.ch=F.aM
m=m.t()
v=p.c
u=v.z
t=v.Q
s=A.Y("R "+A.d(u+t))
s.ch=F.aM
s=A.b([new A.a9(G.b7,m,o),K.oJ,new A.a9(G.b7,s.t(),o)],w)
m=A.Y("Discounts")
m.ch=F.i1
m.Q=B.R
m=A.b([new A.a9(G.b7,m.t(),o),B.B,B.B],w)
r=A.Y("Mid Month")
r.ch=F.aM
r=r.t()
t=A.Y("R "+A.d(t))
t.ch=F.aM
t=A.b([new A.a9(G.b7,r,o),D.BA,new A.a9(G.b7,t.t(),o)],w)
r=A.Y("Loyal customer")
r.ch=F.aM
r=r.t()
q=A.Y("R "+A.d(v.as))
q.ch=F.aM
q=A.b([new A.a9(G.b7,r,o),K.oK,new A.a9(G.b7,q.t(),o)],w)
r=A.Y("Total amount due:")
r.ch=D.AZ
r=r.t()
u=A.Y("R "+A.d(u))
u.ch=D.AZ
w=H.aHC(A.b([new H.dK(new A.bj(B.fG,o,o,n,o,o,B.H),x),new H.dK(o,s),new H.dK(K.ed,m),new H.dK(o,t),new H.dK(K.ed,q),new H.dK(K.ed,A.b([new A.a9(G.b7,r,o),B.B,new A.a9(G.b7,u.t(),o)],w))],y.s),O.o2)
n=!v.db
m=!n||p.LF()?B.b8:B.br
m=E.ap1(o,o,m,o,o,o,o,o,o,o,o,o,o,new A.c2(A.c7(5),B.p),o,o,o,o)
n=!n||p.LF()?o:new C.a43(p)
x=A.Y("CANCEL BOOKING")
x.ch=D.a2P
return new A.ao(A.b([w,I.aZ(E.yT(x.t(),n,m),0,0,0,20)],y.d),B.r,B.D,o,o)},
LF(){var x=Date.now(),w=this.c
if(B.f.bP(A.bd(0,L.aGj(w.b+" "+w.c).a-x,0).a,1e6)<=0)return!0
return!1}}
C.oM.prototype={
v(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=E.cj("INVOICE BOOKING ID: "+n.a)
m.d9$=B.k
m.cx=F.i_
x=y.n
w=A.b([],x)
v=n.db
if(v){u=E.bM("\nBooking Cancelled")
u.as=D.a0a
u.e=B.R
w.push(u.t())}m.c=w
m=m.t()
w=E.cj("Created: ")
w.cx=D.dg
t=L.aGj(n.dx)
u=E.bM(""+A.b5(t)+"-"+p.wZ(A.bm(t))+"-"+p.wZ(A.cO(t))+" | "+p.wZ(A.xO(t))+":"+p.wZ(A.xP(t)))
u.as=D.cE
u.d9$=B.k
w.c=A.b([u.t()],x)
w=w.t()
u=E.cj("Pickup Date-Time: ")
u.cx=D.dg
s=E.bM(n.b+" | ")
s.as=D.cE
s=s.t()
r=E.bM(n.c+" ")
r.as=D.cE
u.c=A.b([s,r.t()],x)
u=u.t()
r=A.ak(B.e.ag(127.5),81,79,151)
s=v?o:new C.a4_(p)
w=P.lW(!1,B.a_,o,o,!0,o,o,!1,o,o,0,o,!1,o,o,u,o,w,E.hk(o,A.Pr(D.Kc,v?B.b8:B.a7,o),s,r,15,o),o)
u=E.cj("Distance: ")
u.cx=D.dg
s=E.bM(A.d(M.aIZ(n.at,1))+" kms")
s.as=D.cE
u.c=A.b([s.t()],x)
u=u.t()
s=E.cj("Driver Note:")
s.cx=D.dg
s.d9$=B.b8
v=n.ax
v=E.bM(v.length!==0?"\n"+v:"")
v.as=D.cE
s.c=A.b([v.t()],x)
v=y.p
s=I.aZ(new A.ao(A.b([u,s.t()],v),B.r,B.D,o,o),16,0,0,0)
u=E.cj("Additional Helpers: ")
u.cx=D.dg
r=E.bM(""+n.ay)
r.as=D.cE
u.c=A.b([r.t()],x)
u=u.t()
r=E.cj("Floors To Carry: ")
r.cx=D.dg
q=E.bM(""+n.ch)
q.as=D.cE
r.c=A.b([q.t()],x)
r=I.aZ(new A.ao(A.b([u,r.t()],v),B.r,B.D,o,o),16,0,0,0)
u=E.cj("Vehicle type: ")
u.cx=D.dg
q=E.bM(A.d(n.y)+" Ton")
q.as=D.cE
u.c=A.b([q.t()],x)
u=I.aZ(u.t(),16,0,0,0)
x=$.aK()
v=H.UL(A.fF(new A.a9(F.aj,new A.ao(A.b([m,w,s,r,u,I.aZ(new C.MD(n,p.gWA(),p.d,A.cy(x,A.aLr(),y.r),A.cy(x,A.SB(),y.D),o),10,0,0,0)],v),B.r,B.D,o,o),o),new A.bj(B.m,o,o,o,o,o,B.H),B.aC))
v.c=1
v.d=new A.c2(A.c7(5),new A.bG(B.bF,1,B.L))
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
wZ(d){if(d>=10)return""+d
return"0"+d}}
var z=a.updateTypes(["oM(mV,m)","~()"])
C.aud.prototype={
$1(d){var x=0,w=A.G(y.P),v=this
var $async$$1=A.C(function(e,f){if(e===1)return A.D(f,w)
while(true)switch(x){case 0:x=2
return A.y(v.a.d.v6(),$async$$1)
case 2:return A.E(null,w)}})
return A.F($async$$1,w)},
$S:35}
C.auc.prototype={
$1(d){var x,w,v,u=null
switch(d.ax.a){case 0:return B.B
case 1:x=E.cH(new A.a9(F.aj,new A.ao(A.b([A.uj(B.ae,A.bd(500,0,0),50)],y.x),B.G,B.t,u,u),u))
x.f=this.a.F(y.w).f.a.b
x.r=1/0
return x.t()
case 3:return A.Y(d.ch).t()
case 2:x=y.p
if(d.ay.d.length!==0){w=A.b([D.a44],y.A)
v=Q.pl(d.ay.d,new C.aub(),y.V,y.l)
return I.aZ(new A.as(1/0,u,new A.ao(A.b([new A.as(500,u,new A.ao(w,B.r,B.D,u,u),u),I.bv(new A.as(500,u,new A.ao(A.Z(v,!0,v.$ti.i("u.E")),u,u,u,u),u),8,0)],x),B.G,B.t,u,u),u),16,0,0,0)}else{x=A.b([A.Y("Make your first booking!").t()],x)
return new A.as(u,this.a.F(y.w).f.a.b,new A.as(1/0,u,new A.a9(G.a2,new A.ao(x,u,u,u,u),u),u),u)}default:return A.Y("there might be an error in your code check your provider").t()}},
$S:521}
C.aub.prototype={
$2(d,e){return new C.oM(d,new M.BZ("","",A.b([],y.O),"","",0,1,0,0,0,0,0,!1,!0),null)},
$S:z+0}
C.a43.prototype={
$0(){var x=0,w=A.G(y.H),v=this,u
var $async$$0=A.C(function(d,e){if(d===1)return A.D(e,w)
while(true)switch(x){case 0:u=v.a
u.d.$0()
x=2
return A.y(u.f.xZ(u.e,u.c,new C.a42(u)),$async$$0)
case 2:return A.E(null,w)}})
return A.F($async$$0,w)},
$S:1}
C.a42.prototype={
$0(){var x=0,w=A.G(y.H),v=this
var $async$$0=A.C(function(d,e){if(d===1)return A.D(e,w)
while(true)switch(x){case 0:x=2
return A.y(v.a.r.v6(),$async$$0)
case 2:return A.E(null,w)}})
return A.F($async$$0,w)},
$S:1}
C.a4_.prototype={
$0(){var x=0,w=A.G(y.H),v=this,u,t,s
var $async$$0=A.C(function(d,e){if(d===1)return A.D(e,w)
while(true)switch(x){case 0:u=v.a.c
t=y.N
s=A.an(["retrieve",u.f],t,t)
A.lO($.aK(),"/signed-in/bookings/"+u.a,s,y.z)
return A.E(null,w)}})
return A.F($async$$0,w)},
$S:1};(function installTearOffs(){var x=a._instance_0u
x(C.oM.prototype,"gWA","WB",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.oX,A.P)
x(C.Wf,A.T)
w(A.bD,[C.aud,C.auc])
x(C.aub,A.dF)
w(A.a0,[C.MD,C.oM])
w(A.eK,[C.a43,C.a42,C.a4_])})()
A.cx(b.typeUniverse,JSON.parse('{"oX":{"P":[],"f":[]},"Wf":{"T":["oX"]},"MD":{"a0":[],"f":[]},"oM":{"a0":[],"f":[]}}'))
var y=(function rtii(){var x=A.z
return{l:x("oM"),V:x("mV"),r:x("oO"),O:x("k<dJ>"),d:x("k<aB>"),x:x("k<jg>"),s:x("k<dK>"),n:x("k<e9>"),A:x("k<fY>"),p:x("k<f>"),w:x("cG"),P:x("ax"),D:x("kX"),N:x("i"),z:x("@"),H:x("~")}})();(function constants(){D.a_2=new A.e9("Discount given at the middle of the month.",null,null,B.bm,F.fb)
D.a4k=new A.mv(null,D.a_2,null,!1,K.fZ,K.fs,B.e6,null)
D.BA=new A.e_(F.ec,null,null,D.a4k,null)
D.Kc=new A.dH(983823,"MaterialIcons",null,!1)
D.a0a=new A.q(!0,B.br,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cE=new A.q(!0,B.k,null,null,null,null,null,B.M,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dg=new A.q(!0,B.b8,null,null,null,null,12,B.a3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a2P=new A.q(!0,B.m,null,null,null,null,12,B.M,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.AZ=new A.q(!0,B.k,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a44=new I.fY("Your Bookings",null,null,null)})()}
$__dart_deferred_initializers__["W2lV8gMXesW2eOYaDHnRlHIyIBk="] = $__dart_deferred_initializers__.current
