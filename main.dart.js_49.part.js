self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={mw:function mw(d,e){this.a=d
this.b=e},k5:function k5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},W6:function W6(d){this.a=d},ata:function ata(){},
aKo(d,e,f,g){var x=new A.TM(e,f,d,g.i("TM<0>"))
x.a3U(d,e,f,g)
return x},
TM:function TM(d,e,f,g){var _=this
_.a=null
_.b=d
_.c=e
_.d=f
_.$ti=g},
alr:function alr(d){this.a=d},
als:function als(d){this.a=d},
alp:function alp(d){this.a=d},
alq:function alq(d){this.a=d},
alt:function alt(){},
alu:function alu(d){this.a=d},
alv:function alv(d){this.a=d},
alw:function alw(d){this.a=d},
wx:function wx(d,e){this.a=d
this.b=e},
dC:function dC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.$ti=i},
GI(d){var x=d.G(y.e)
if(x!=null)return x.f
throw C.c(C.Qj(C.b([C.t5("ResponsiveWrapper.of() called with a context that does not contain a ResponsiveWrapper."),C.bd("No Responsive ancestor could be found starting from the context that was passed to ResponsiveWrapper.of(). Place a ResponsiveWrapper at the root of the app or supply a ResponsiveWrapper.builder."),d.amT("The context used was")],y.p)))}},B,E,C,F,G,D
A=a.updateHolder(c[52],A)
B=c[97]
E=c[56]
C=c[0]
F=c[58]
G=c[90]
D=c[2]
A.mw.prototype={
j(d){return"ResponsiveEnum."+this.b}}
A.k5.prototype={
B(d,e){var x=y.k,w=A.aKo(e,B.i4,B.rI,x).a
w.toString
if(w===B.i4)return this.c
else{x=A.aKo(e,B.i4,B.rI,x).a
x.toString
if(x===B.zV)return this.d
else return this.e}}}
A.W6.prototype={
B(d,e){var x=E.pC(B.rW,new A.ata(),y.N,y.w)
return new C.ac(C.b([B.BE,F.b2(E.aR4(C.a0(x,!0,x.$ti.i("u.E"))),8,0),G.b4],y.D),D.y,D.o,null,null)}}
A.TM.prototype={
a3U(d,e,f,g){var x,w,v,u=this,t=u.c
if(C.R4(t,new A.alr(g))!=null)try{A.GI(u.d)}catch(x){t=C.Qj(C.b([C.t5("A ResponsiveCondition was caught referencing a nonexistant breakpoint."),C.bd("A ResponsiveCondition requires a parent ResponsiveWrapper to reference breakpoints. Add a ResponsiveWrapper or remove breakpoint references.")],y.p))
throw C.c(t)}w=C.b([],y.Q)
D.c.P(w,t)
t=u.d
v=y.d
w=C.a0(new C.aj(w,new A.als(A.GI(t).f),v),!0,v.i("bc.E"))
D.c.d1(w,new A.alt())
t=u.X4(t,w)
u.a=t==null?u.b:t},
X4(d,e){var x=this.Wn(d,e)
if(x==null)return null
if(A.GI(d).Q===D.dg&&x.e!=null)return x.e
return x.d},
Wn(d,e){var x,w,v=C.R4(e,new A.alu(d))
if(v!=null)return v
x=C.R4(e,new A.alv(d))
if(x!=null)return x
w=C.R4(new C.c_(e,C.an(e).i("c_<1>")),new A.alw(d))
if(w!=null)return w
return null}}
A.wx.prototype={
j(d){return"Conditional."+this.b}}
A.dC.prototype={
j(d){var x=this
return"Condition(breakpoint: "+C.e(x.a)+", name: "+x.b+", condition: "+x.c.j(0)+", value: "+C.e(x.d)+", landscapeValue: "+C.e(x.e)+")"},
gar(d){return this.b}}
var z=a.updateTypes(["H(dC<@>)","mx(i,m)","dC<@>(dC<@>)","m(dC<@>,dC<@>)"])
A.ata.prototype={
$2(d,e){return E.aR3(E.aKq(D.cI,0,d,B.rO,e,B.k7),3,6,12)},
$S:z+1}
A.alr.prototype={
$1(d){return!0},
$S(){return this.a.i("H(dC<0>)")}}
A.als.prototype={
$1(d){var x,w,v,u
if(d.a==null){x=D.f.cC(D.c.hq(this.a,new A.alp(d),new A.alq(d)).c.a)
w=d.b
v=d.c
u=d.d
return new A.dC(x,w,v,u,u,y.L)}return d},
$S:z+2}
A.alp.prototype={
$1(d){return d.c.b===this.a.b},
$S:77}
A.alq.prototype={
$0(){return C.Z("No breakpoint named `"+this.a.b+"` found.")},
$S:528}
A.alt.prototype={
$2(d,e){var x,w=d.a
w.toString
x=e.a
x.toString
return D.f.b9(w,x)},
$S:z+3}
A.alu.prototype={
$1(d){if(d.c===B.h0)return A.GI(this.a).r.b===d.b
return!1},
$S:z+0}
A.alv.prototype={
$1(d){var x
if(d.c===B.J7){x=A.GI(this.a).aq4(d.b)
return x}return!1},
$S:z+0}
A.alw.prototype={
$1(d){var x
if(d.c===B.j9){x=A.GI(this.a).apY(d.b)
return x}return!1},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(C.iR,[A.mw,A.wx])
x(C.a_,[A.k5,A.W6])
x(C.cZ,[A.ata,A.alt])
x(C.J,[A.TM,A.dC])
x(C.bj,[A.alr,A.als,A.alp,A.alu,A.alv,A.alw])
w(A.alq,C.dk)})()
C.bI(b.typeUniverse,JSON.parse('{"mw":{"O":[]},"k5":{"a_":[],"d":[]},"W6":{"a_":[],"d":[]},"wx":{"O":[]}}'))
var y=(function rtii(){var x=C.v
return{h:x("dC<mw>"),L:x("dC<@>"),e:x("E6"),Q:x("k<dC<@>>"),p:x("k<f7>"),s:x("k<i>"),D:x("k<d>"),d:x("aj<dC<@>,dC<@>>"),k:x("mw"),w:x("mx"),N:x("i")}})();(function constants(){var x=a.makeConstList
B.j9=new A.wx(0,"LARGER_THAN")
B.h0=new A.wx(1,"EQUALS")
B.J7=new A.wx(2,"SMALLER_THAN")
B.oQ=new A.W6(null)
B.i4=new A.mw(0,"mobile")
B.J3=new A.dC(null,"MOBILE",B.h0,B.i4,null,y.h)
B.zV=new A.mw(1,"tablet")
B.J6=new A.dC(null,"TABLET",B.h0,B.zV,null,y.h)
B.XL=new A.mw(2,"desktop")
B.J4=new A.dC(null,"DESKTOP",B.h0,B.XL,null,y.h)
B.XM=new A.mw(3,"xlScreen")
B.J5=new A.dC(null,"DESKTOP",B.j9,B.XM,null,y.h)
B.rI=C.b(x([B.J3,B.J6,B.J4,B.J5]),C.v("k<dC<mw>>"))
B.rO=C.b(x(["Cost","Drivers","Helpers","EQUIPMENT","Handle With Care","Tolerance","Services","Vehicles"]),y.s)
B.rW=C.b(x(["We provide competitive and cost effective prices","Our drivers are experts in the industry","We bring extra trained helpers at your request","In case of rain, we protect your goods from any damages that may arise from the rain","We pride ourselves in simplifying your move and handling goods with care","Our motto is 0% damage tolerance\n","We provide exceptional and professional services","We have the most reliable and well maintained vehicles to ensure your goods are delivered on time without any delays due to breakdowns"]),y.s)
B.k7=C.b(x(["assets/svg/money.svg","assets/svg/driver.svg","assets/svg/helpers.svg","assets/svg/care.svg","assets/svg/care.svg","assets/svg/percentage.svg","assets/svg/services.svg","assets/svg/reliable_transport.svg"]),y.s)
B.BE=new F.dW("Why Choose Us","Here's why our services are valued by many of our customers",null,null,null)})()}
$__dart_deferred_initializers__["RnnVacD45AQXFbZoF4jIi3TeLiY="] = $__dart_deferred_initializers__.current
