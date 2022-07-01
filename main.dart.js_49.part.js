self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={mp:function mp(d,e){this.a=d
this.b=e},k0:function k0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},V6:function V6(d){this.a=d},arW:function arW(){},
aIF(d,e,f,g){var x=new A.SN(e,f,d,g.i("SN<0>"))
x.a31(d,e,f,g)
return x},
SN:function SN(d,e,f,g){var _=this
_.a=null
_.b=d
_.c=e
_.d=f
_.$ti=g},
ak4:function ak4(d){this.a=d},
ak5:function ak5(d){this.a=d},
ak2:function ak2(d){this.a=d},
ak3:function ak3(d){this.a=d},
ak6:function ak6(){},
ak7:function ak7(d){this.a=d},
ak8:function ak8(d){this.a=d},
ak9:function ak9(d){this.a=d},
wj:function wj(d,e){this.a=d
this.b=e},
dw:function dw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.$ti=i},
FY(d){var x=d.F(y.e)
if(x!=null)return x.f
throw C.c(C.P9(C.b([C.rT("ResponsiveWrapper.of() called with a context that does not contain a ResponsiveWrapper."),C.ba("No Responsive ancestor could be found starting from the context that was passed to ResponsiveWrapper.of(). Place a ResponsiveWrapper at the root of the app or supply a ResponsiveWrapper.builder."),d.alD("The context used was")],y.p)))}},B,E,C,F,G,D
A=a.updateHolder(c[52],A)
B=c[99]
E=c[56]
C=c[0]
F=c[58]
G=c[61]
D=c[2]
A.mp.prototype={
j(d){return"ResponsiveEnum."+this.b}}
A.k0.prototype={
v(d,e){var x=y.k,w=A.aIF(e,B.hP,B.rj,x).a
w.toString
if(w===B.hP)return this.c
else{x=A.aIF(e,B.hP,B.rj,x).a
x.toString
if(x===B.zq)return this.d
else return this.e}}}
A.V6.prototype={
v(d,e){var x=E.ps(B.rx,new A.arW(),y.N,y.w)
return new C.aa(C.b([B.B8,F.b5(E.aPg(C.Z(x,!0,x.$ti.i("u.E"))),8,0),G.bf],y.D),D.y,D.o,null,null)}}
A.SN.prototype={
a31(d,e,f,g){var x,w,v,u=this,t=u.c
if(C.PS(t,new A.ak4(g))!=null)try{A.FY(u.d)}catch(x){t=C.P9(C.b([C.rT("A ResponsiveCondition was caught referencing a nonexistant breakpoint."),C.ba("A ResponsiveCondition requires a parent ResponsiveWrapper to reference breakpoints. Add a ResponsiveWrapper or remove breakpoint references.")],y.p))
throw C.c(t)}w=C.b([],y.Q)
D.c.O(w,t)
t=u.d
v=y.d
w=C.Z(new C.aj(w,new A.ak5(A.FY(t).f),v),!0,v.i("bb.E"))
D.c.cP(w,new A.ak6())
t=u.Wl(t,w)
u.a=t==null?u.b:t},
Wl(d,e){var x=this.VF(d,e)
if(x==null)return null
if(A.FY(d).Q===D.d7&&x.e!=null)return x.e
return x.d},
VF(d,e){var x,w,v=C.PS(e,new A.ak7(d))
if(v!=null)return v
x=C.PS(e,new A.ak8(d))
if(x!=null)return x
w=C.PS(new C.c5(e,C.am(e).i("c5<1>")),new A.ak9(d))
if(w!=null)return w
return null}}
A.wj.prototype={
j(d){return"Conditional."+this.b}}
A.dw.prototype={
j(d){var x=this
return"Condition(breakpoint: "+C.d(x.a)+", name: "+x.b+", condition: "+x.c.j(0)+", value: "+C.d(x.d)+", landscapeValue: "+C.d(x.e)+")"},
gan(d){return this.b}}
var z=a.updateTypes(["F(dw<@>)","mq(i,m)","dw<@>(dw<@>)","m(dw<@>,dw<@>)"])
A.arW.prototype={
$2(d,e){return E.aPf(E.aII(D.cx,0,d,B.rp,e,B.jP),3,6,12)},
$S:z+1}
A.ak4.prototype={
$1(d){return!0},
$S(){return this.a.i("F(dw<0>)")}}
A.ak5.prototype={
$1(d){var x,w,v,u
if(d.a==null){x=D.f.co(D.c.hg(this.a,new A.ak2(d),new A.ak3(d)).c.a)
w=d.b
v=d.c
u=d.d
return new A.dw(x,w,v,u,u,y.L)}return d},
$S:z+2}
A.ak2.prototype={
$1(d){return d.c.b===this.a.b},
$S:73}
A.ak3.prototype={
$0(){return C.a_("No breakpoint named `"+this.a.b+"` found.")},
$S:524}
A.ak6.prototype={
$2(d,e){var x,w=d.a
w.toString
x=e.a
x.toString
return D.f.aZ(w,x)},
$S:z+3}
A.ak7.prototype={
$1(d){if(d.c===B.fO)return A.FY(this.a).r.b===d.b
return!1},
$S:z+0}
A.ak8.prototype={
$1(d){var x
if(d.c===B.In){x=A.FY(this.a).aoK(d.b)
return x}return!1},
$S:z+0}
A.ak9.prototype={
$1(d){var x
if(d.c===B.iS){x=A.FY(this.a).aoD(d.b)
return x}return!1},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(C.jt,[A.mp,A.wj])
x(C.a0,[A.k0,A.V6])
x(C.d3,[A.arW,A.ak6])
x(C.H,[A.SN,A.dw])
x(C.bk,[A.ak4,A.ak5,A.ak2,A.ak7,A.ak8,A.ak9])
w(A.ak3,C.dc)})()
C.bG(b.typeUniverse,JSON.parse('{"mp":{"P":[]},"k0":{"a0":[],"e":[]},"V6":{"a0":[],"e":[]},"wj":{"P":[]}}'))
var y=(function rtii(){var x=C.v
return{h:x("dw<mp>"),L:x("dw<@>"),e:x("DC"),Q:x("k<dw<@>>"),p:x("k<eX>"),s:x("k<i>"),D:x("k<e>"),d:x("aj<dw<@>,dw<@>>"),k:x("mp"),w:x("mq"),N:x("i")}})();(function constants(){var x=a.makeConstList
B.iS=new A.wj(0,"LARGER_THAN")
B.fO=new A.wj(1,"EQUALS")
B.In=new A.wj(2,"SMALLER_THAN")
B.ow=new A.V6(null)
B.hP=new A.mp(0,"mobile")
B.Ij=new A.dw(null,"MOBILE",B.fO,B.hP,null,y.h)
B.zq=new A.mp(1,"tablet")
B.Im=new A.dw(null,"TABLET",B.fO,B.zq,null,y.h)
B.WS=new A.mp(2,"desktop")
B.Ik=new A.dw(null,"DESKTOP",B.fO,B.WS,null,y.h)
B.WT=new A.mp(3,"xlScreen")
B.Il=new A.dw(null,"DESKTOP",B.iS,B.WT,null,y.h)
B.rj=C.b(x([B.Ij,B.Im,B.Ik,B.Il]),C.v("k<dw<mp>>"))
B.rp=C.b(x(["Cost","Drivers","Helpers","EQUIPMENT","Handle With Care","Tolerance","Services","Vehicles"]),y.s)
B.rx=C.b(x(["We provide competitive and cost effective prices","Our drivers are experts in the industry","We bring extra trained helpers at your request","In case of rain, we protect your goods from any damages that may arise from the rain","We pride ourselves in simplifying your move and handling goods with care","Our motto is 0% damage tolerance\n","We provide exceptional and professional services","We have the most reliable and well maintained vehicles to ensure your goods are delivered on time without any delays due to breakdowns"]),y.s)
B.jP=C.b(x(["assets/svg/money.svg","assets/svg/driver.svg","assets/svg/helpers.svg","assets/svg/care.svg","assets/svg/care.svg","assets/svg/percentage.svg","assets/svg/services.svg","assets/svg/reliable_transport.svg"]),y.s)
B.B8=new F.e6("Why Choose Us","Here's why our services are valued by many of our customers",null,null,null)})()}
$__dart_deferred_initializers__["I1ztLfxQ2ESnXDzkKEnpCOzZU9Y="] = $__dart_deferred_initializers__.current
