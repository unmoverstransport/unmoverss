self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={jA:function jA(){},acT:function acT(d,e,f){this.a=d
this.b=e
this.c=f},acU:function acU(d,e,f){this.a=d
this.b=e
this.c=f},acQ:function acQ(d,e){this.a=d
this.b=e},acP:function acP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},acR:function acR(d){this.a=d},acS:function acS(d,e){this.a=d
this.b=e},lx:function lx(d,e,f){this.a=d
this.b=e
this.c=f},Mn:function Mn(){},aw6:function aw6(d,e){var _=this
_.a=d
_.d=_.c=_.b=null
_.f=_.e=!1
_.r=0
_.w=!1
_.x=e},
aYA(d){var w,v,u,t,s,r,q
if(d==null)return new A.dZ(null,x.b)
w=x.P.a(C.J.aR(0,d))
v=J.o(w)
u=x.N
t=A.L(u,x.a)
for(s=J.aO(v.gbv(w)),r=x.j;s.u();){q=s.gK(s)
t.n(0,q,A.dU(r.a(v.h(w,q)),!0,u))}return new A.dZ(t,x.b)},
oN:function oN(d){this.a=d},
a3G:function a3G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3H:function a3H(d){this.a=d},
b0p(d,e,f,g){var w=new B.Qr(g,f,A.b([],x.v),A.b([],x.u))
w.a2y(null,d,e,f,g)
return w},
iY:function iY(d,e,f){this.a=d
this.b=e
this.c=f},
acV:function acV(){this.b=this.a=null},
Px:function Px(d){this.a=d},
t9:function t9(){},
acW:function acW(){},
Qr:function Qr(d,e,f,g){var _=this
_.z=_.y=null
_.Q=d
_.as=e
_.at=null
_.ax=$
_.ay=null
_.ch=0
_.CW=null
_.cx=!1
_.a=f
_.d=_.c=_.b=null
_.f=_.e=!1
_.r=0
_.w=!1
_.x=g},
afZ:function afZ(d,e){this.a=d
this.b=e},
afY:function afY(d){this.a=d},
XD:function XD(){},
XC:function XC(){}},A,J,C,D,E
B=a.updateHolder(c[28],B)
A=c[0]
J=c[1]
C=c[2]
D=c[41]
E=c[56]
B.jA.prototype={
S(d){var w=new B.acV()
this.a5L(d,new B.acT(this,d,w),new B.acU(this,d,w))
return w},
a5L(d,e,f){var w,v,u,t,s,r={}
r.a=null
r.b=!1
w=new B.acQ(r,f)
v=null
try{v=this.H3(d)}catch(s){u=A.at(s)
t=A.aR(s)
w.$2(u,t)
return}J.a3c(v,new B.acP(r,this,e,w),x.H).ip(w)},
v5(d,e,f,g){var w,v="_imageCache"
if(e.a!=null){A.a($.kM.nr$,v).Ui(0,f,new B.acR(e),g)
return}w=A.a($.kM.nr$,v).Ui(0,f,new B.acS(this,f),g)
if(w!=null)e.vM(w)},
j(d){return"ImageConfiguration()"}}
B.lx.prototype={
k(d,e){var w=this
if(e==null)return!1
if(J.a4(e)!==A.I(w))return!1
return e instanceof B.lx&&e.a===w.a&&e.b===w.b&&e.c===w.c},
gq(d){return A.ae(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"AssetBundleImageKey(bundle: "+this.a.j(0)+', name: "'+this.b+'", scale: '+A.d(this.c)+")"},
gam(d){return this.b}}
B.Mn.prototype={
GO(d,e,f){return B.b0p(this.wK(e,f),e.b,null,e.c)},
wK(d,e){return this.acO(d,e)},
acO(d,e){var w=0,v=A.E(x.p),u,t=2,s,r=[],q,p,o
var $async$wK=A.A(function(f,g){if(f===1){s=g
w=t}while(true)switch(w){case 0:p=null
t=4
w=7
return A.w(d.a.en(0,d.b),$async$wK)
case 7:p=g
t=2
w=6
break
case 4:t=3
o=s
if(A.at(o) instanceof A.pa){A.a($.kM.nr$,"_imageCache").Sd(d)
throw o}else throw o
w=6
break
case 3:w=2
break
case 6:if(p==null){A.a($.kM.nr$,"_imageCache").Sd(d)
throw A.c(A.a7("Unable to read data"))}u=e.$1(A.e6(p.buffer,0,null))
w=1
break
case 1:return A.C(u,v)
case 2:return A.B(s,v)}})
return A.D($async$wK,v)}}
B.aw6.prototype={}
B.oN.prototype={
gkX(){return this.a},
H3(d){var w,v={},u=d.a
if(u==null)u=$.AW()
v.a=v.b=null
u.aoU("AssetManifest.json",B.b7h(),x.g).aS(0,new B.a3G(v,this,d,u),x.H).ip(new B.a3H(v))
w=v.a
if(w!=null)return w
w=new A.a6($.ac,x.E)
v.b=new A.aJ(w,x.z)
return w},
a5i(d,e,f){var w,v,u,t=e.b
if(t==null||f==null||J.fp(f))return d
w=D.aHA(x.i,x.N)
for(v=J.aO(f);v.u();){u=v.gK(v)
w.n(0,this.NL(u),u)}t.toString
return this.a7k(w,t)},
a7k(d,e){var w,v,u
if(d.rk(e)){w=d.h(0,e)
w.toString
return w}v=d.aoG(e)
u=d.an0(e)
if(v==null)return d.h(0,u)
if(u==null)return d.h(0,v)
if(e<2||e>(v+u)/2)return d.h(0,u)
else return d.h(0,v)},
NL(d){var w,v,u,t
if(d===this.a)return 1
w=A.aN(d,0,null)
v=w.gmj().length>1?w.gmj()[w.gmj().length-2]:""
u=$.aSh().pH(v)
if(u!=null&&u.b.length-1>0){t=u.b[1]
t.toString
return A.aIN(t)}return 1},
k(d,e){if(e==null)return!1
if(J.a4(e)!==A.I(this))return!1
return e instanceof B.oN&&e.gkX()===this.gkX()&&!0},
gq(d){return A.ae(this.gkX(),null,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'AssetImage(bundle: null, name: "'+this.gkX()+'")'}}
B.iY.prototype={
dS(d){return new B.iY(this.a.dS(0),this.b,this.c)},
um(d){var w
if(d.a.um(this.a)){w=this.b
w=w===w&&d.c==this.c}else w=!1
return w},
gX8(){var w=this.a
return w.gbq(w)*w.gaQ(w)*4},
l(d){this.a.l(0)},
j(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.j(0)+" @ "+A.lu(this.b)+"x"},
gq(d){return A.ae(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d,e){var w=this
if(e==null)return!1
if(J.a4(e)!==A.I(w))return!1
return e instanceof B.iY&&e.a===w.a&&e.b===w.b&&e.c==w.c}}
B.acV.prototype={
vM(d){var w,v=this
v.a=d
w=v.b
if(w!=null){v.b=null
d.f=!0
C.c.aa(w,d.gQj(d))
v.a.f=!1}},
a2(d,e){var w=this.a
if(w!=null)return w.a2(0,e)
w=this.b;(w==null?this.b=A.b([],x.v):w).push(e)},
L(d,e){var w,v=this.a
if(v!=null)return v.L(0,e)
for(w=0;v=this.b,w<v.length;++w)if(J.h(v[w],e)){v=this.b
v.toString
C.c.f7(v,w)
break}}}
B.Px.prototype={
a1Q(d){++this.a.r},
l(d){var w=this.a;--w.r
w.wW()
this.a=null}}
B.t9.prototype={
a2(d,e){var w,v,u,t,s,r,q,p=this
if(p.w)A.a_(A.a7(y.a))
p.e=!0
p.a.push(e)
s=p.b
if(s!=null)try{s=s.dS(0)
r=p.f
e.a.$2(s,!r)}catch(q){w=A.at(q)
v=A.aR(q)
p.UD(A.b8("by a synchronously-called image listener"),w,v)}s=p.c
if(s!=null&&e.c!=null)try{r=e.c
r.toString
r.$2(s.a,s.b)}catch(w){u=A.at(w)
t=A.aR(w)
if(!J.h(u,p.c.a))A.cS(new A.bw(u,t,"image resource service",A.b8("by a synchronously-called image error listener"),null,!1))}},
GJ(){if(this.w)A.a_(A.a7(y.a));++this.r
return new B.Px(this)},
L(d,e){var w,v,u,t,s,r=this
if(r.w)A.a_(A.a7(y.a))
for(w=r.a,v=0;v<w.length;++v)if(J.h(w[v],e)){C.c.f7(w,v)
break}if(w.length===0){w=r.x
u=A.b(w.slice(0),A.ai(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,A.R)(u),++s)u[s].$0()
C.c.sp(w,0)
r.wW()}},
wW(){var w,v=this
if(!v.e||v.w||v.a.length!==0||v.r!==0)return
w=v.b
if(w!=null)w.a.l(0)
v.b=null
v.w=!0},
aiv(d){if(this.w)A.a_(A.a7(y.a))
this.x.push(d)},
Ur(d){if(this.w)A.a_(A.a7(y.a))
C.c.C(this.x,d)},
WJ(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.w)A.a_(A.a7(y.a))
t=m.b
if(t!=null)t.a.l(0)
m.b=d
t=m.a
if(t.length===0)return
s=A.Y(t,!0,x.J)
for(t=s.length,r=d.a,q=d.b,p=d.c,o=0;o<t;++o){w=s[o]
try{w.apB(new B.iY(r.dS(0),q,p),!1)}catch(n){v=A.at(n)
u=A.aR(n)
m.UD(A.b8("by an image listener"),v,u)}}},
zK(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m="image resource service"
this.c=new A.bw(e,h,m,d,f,g)
s=this.a
r=x.I
q=A.Y(new A.jm(new A.af(s,new B.acW(),A.ai(s).i("af<1,~(H,cQ?)?>")),r),!0,r.i("u.E"))
w=!1
for(s=q.length,p=0;p<s;++p){v=q[p]
try{v.$2(e,h)
w=!0}catch(o){u=A.at(o)
t=A.aR(o)
if(!J.h(u,e)){r=A.b8("when reporting an error to an image listener")
n=$.ii()
if(n!=null)n.$1(new A.bw(u,t,m,r,null,!1))}}}if(!w){s=this.c
s.toString
A.cS(s)}},
UD(d,e,f){return this.zK(d,e,null,!1,f)}}
B.Qr.prototype={
a2y(d,e,f,g,h){this.d=f
e.hl(0,this.ga8V(),new B.afZ(this,g),x.H)},
a8W(d){this.z=d
if(this.a.length!==0)this.oA()},
a8G(d){var w,v,u,t=this,s="_shownTimestamp"
t.cx=!1
if(t.a.length===0)return
w=t.ay
if(w!=null){w=A.a(t.ax,s).a
v=t.ay
w=d.a-w>=v.a}else{v=w
w=!0}if(w){w=t.at
t.LF(new B.iY(w.gfo(w).dS(0),t.Q,t.d))
t.ax=d
w=t.at
t.ay=w.gyC(w)
w=t.at
w.gfo(w).l(0)
t.at=null
w=t.ch
v=t.z
u=C.f.ft(w,v.gnx(v))
w=t.z
if(w.gqo(w)!==-1){w=t.z
w=u<=w.gqo(w)}else w=!0
if(w)t.oA()
return}v.toString
t.CW=A.cl(new A.b3(C.e.ag((v.a-(d.a-A.a(t.ax,s).a))*$.aQI)),new B.afY(t))},
oA(){var w=0,v=A.E(x.H),u,t=2,s,r=[],q=this,p,o,n,m,l
var $async$oA=A.A(function(d,e){if(d===1){s=e
w=t}while(true)switch(w){case 0:m=q.at
if(m!=null)m.gfo(m).l(0)
q.at=null
t=4
w=7
return A.w(q.z.jt(),$async$oA)
case 7:q.at=e
t=2
w=6
break
case 4:t=3
l=s
p=A.at(l)
o=A.aR(l)
q.zK(A.b8("resolving an image frame"),p,q.as,!0,o)
w=1
break
w=6
break
case 3:w=2
break
case 6:m=q.z
if(m.gnx(m)===1){if(q.a.length===0){w=1
break}m=q.at
q.LF(new B.iY(m.gfo(m).dS(0),q.Q,q.d))
m=q.at
m.gfo(m).l(0)
q.at=null
w=1
break}q.Ok()
case 1:return A.C(u,v)
case 2:return A.B(s,v)}})
return A.D($async$oA,v)},
Ok(){if(this.cx)return
this.cx=!0
$.cd.Is(this.ga8F())},
LF(d){this.WJ(d);++this.ch},
a2(d,e){var w,v=this
if(v.a.length===0){w=v.z
if(w!=null)w=v.b==null||w.gnx(w)>1
else w=!1}else w=!1
if(w)v.oA()
v.Yy(0,e)},
L(d,e){var w,v=this
v.Yz(0,e)
if(v.a.length===0){w=v.CW
if(w!=null)w.az(0)
v.CW=null}},
wW(){this.Yx()
if(this.w)this.y=null}}
B.XD.prototype={}
B.XC.prototype={}
var z=a.updateTypes(["~(iZ)","~(kn)","~(b3)","a5<aF<i,t<i>>?>(i?)"])
B.acT.prototype={
$2(d,e){this.a.v5(this.b,this.c,d,e)},
$S(){return A.l(this.a).i("~(jA.T,~(H,cQ?))")}}
B.acU.prototype={
$3(d,e,f){return this.Vm(d,e,f)},
Vm(d,e,f){var w=0,v=A.E(x.H),u=this,t
var $async$$3=A.A(function(g,h){if(g===1)return A.B(h,v)
while(true)switch(w){case 0:w=2
return A.w(null,$async$$3)
case 2:t=u.c
if(t.a==null)t.vM(new B.aw6(A.b([],x.v),A.b([],x.u)))
t=t.a
t.toString
t.zK(A.b8("while resolving an image"),e,null,!0,f)
return A.C(null,v)}})
return A.D($async$$3,v)},
$S(){return A.l(this.a).i("a5<~>(jA.T?,H,cQ?)")}}
B.acQ.prototype={
Vl(d,e){var w=0,v=A.E(x.H),u,t=this,s
var $async$$2=A.A(function(f,g){if(f===1)return A.B(g,v)
while(true)switch(w){case 0:s=t.a
if(s.b){w=1
break}t.b.$3(s.a,d,e)
s.b=!0
case 1:return A.C(u,v)}})
return A.D($async$$2,v)},
$2(d,e){return this.Vl(d,e)},
$S:508}
B.acP.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=A.at(u)
v=A.aR(u)
t.d.$2(w,v)}},
$S(){return A.l(this.b).i("av(jA.T)")}}
B.acR.prototype={
$0(){var w=this.a.a
w.toString
return w},
$S:161}
B.acS.prototype={
$0(){return this.a.GO(0,this.b,$.kM.gaoc())},
$S:161}
B.a3G.prototype={
$1(d){var w,v=this,u=v.b,t=u.gkX(),s=d==null?null:J.ay(d,u.gkX())
s=u.a5i(t,v.c,s)
s.toString
w=new B.lx(v.d,s,u.NL(s))
u=v.a
t=u.b
if(t!=null)t.cQ(0,w)
else u.a=new A.dZ(w,x.f)},
$S:510}
B.a3H.prototype={
$2(d,e){this.a.b.nd(d,e)},
$S:78}
B.acW.prototype={
$1(d){return d.c},
$S:511}
B.afZ.prototype={
$2(d,e){this.a.zK(A.b8("resolving an image codec"),d,this.b,!0,e)},
$S:78}
B.afY.prototype={
$0(){this.a.Ok()},
$S:0};(function aliases(){var w=B.t9.prototype
w.Yy=w.a2
w.Yz=w.L
w.Yx=w.wW})();(function installTearOffs(){var w=a._static_1,v=a._instance_1i,u=a._instance_1u
w(B,"b7h","aYA",3)
v(B.t9.prototype,"gQj","a2",0)
var t
u(t=B.Qr.prototype,"ga8V","a8W",1)
u(t,"ga8F","a8G",2)
v(t,"gQj","a2",0)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.H,[B.jA,B.lx,B.XC,B.iY,B.XD,B.Px])
v(A.dH,[B.acT,B.acQ,B.a3H,B.afZ])
v(A.bD,[B.acU,B.acP,B.a3G,B.acW])
v(A.eK,[B.acR,B.acS,B.afY])
u(B.Mn,B.jA)
u(B.t9,B.XC)
v(B.t9,[B.aw6,B.Qr])
u(B.oN,B.Mn)
u(B.acV,B.XD)
w(B.XD,A.aH)
w(B.XC,A.aH)})()
A.cz(b.typeUniverse,JSON.parse('{"Mn":{"jA":["lx"]},"oN":{"jA":["lx"],"jA.T":"lx"}}'))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x=(function rtii(){var w=A.z
return{p:w("kn"),J:w("iZ"),v:w("k<iZ>"),u:w("k<~()>"),a:w("t<i>"),j:w("t<@>"),P:w("aF<i,@>"),N:w("i"),f:w("dZ<lx>"),b:w("dZ<aF<i,t<i>>?>"),I:w("jm<~(H,cQ?)>"),z:w("aJ<lx>"),E:w("a6<lx>"),i:w("N"),g:w("aF<i,t<i>>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
E.hc=A.b(w(["assets/imgs/oneton.jpg","assets/imgs/one_and_half_ton.jpg","assets/imgs/twoton.jpg"]),A.z("k<i>"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"b92","aSh",()=>A.c0("/?(\\d+(\\.\\d*)?)x$",!0))})()}
$__dart_deferred_initializers__["gKiwNJGGrnhs/XtTQzGKS8My8Dg="] = $__dart_deferred_initializers__.current
