self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={mc:function mc(d,e){this.a=d
this.b=e},kT:function kT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},UW:function UW(d){this.a=d},arn:function arn(){},
aHp(d,e,f,g){var x=new A.SC(e,f,d,g.i("SC<0>"))
x.a2W(d,e,f,g)
return x},
SC:function SC(d,e,f,g){var _=this
_.a=null
_.b=d
_.c=e
_.d=f
_.$ti=g},
ajS:function ajS(d){this.a=d},
ajT:function ajT(d){this.a=d},
ajQ:function ajQ(d){this.a=d},
ajR:function ajR(d){this.a=d},
ajU:function ajU(){},
ajV:function ajV(d){this.a=d},
ajW:function ajW(d){this.a=d},
ajX:function ajX(d){this.a=d},
w8:function w8(d,e){this.a=d
this.b=e},
dr:function dr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.$ti=i},
FO(d){var x=d.G(y.e)
if(x!=null)return x.f
throw C.c(C.OX(C.b([C.rH("ResponsiveWrapper.of() called with a context that does not contain a ResponsiveWrapper."),C.b8("No Responsive ancestor could be found starting from the context that was passed to ResponsiveWrapper.of(). Place a ResponsiveWrapper at the root of the app or supply a ResponsiveWrapper.builder."),d.als("The context used was")],y.p)))}},B,E,C,F,G,D
A=a.updateHolder(c[38],A)
B=c[72]
E=c[42]
C=c[0]
F=c[44]
G=c[47]
D=c[2]
A.mc.prototype={
j(d){return"ResponsiveEnum."+this.b}}
A.kT.prototype={
v(d,e){var x=y.k,w=A.aHp(e,B.hG,B.r9,x).a
w.toString
if(w===B.hG)return this.c
else{x=A.aHp(e,B.hG,B.r9,x).a
x.toString
if(x===B.zi)return this.d
else return this.e}}}
A.UW.prototype={
v(d,e){var x=E.pm(B.ro,new A.arn(),y.N,y.w)
return new C.as(C.b([B.B5,F.bh(E.aO_(C.Y(x,!0,x.$ti.i("u.E"))),8,0),G.bc],y.D),D.G,D.t,null,null)}}
A.SC.prototype={
a2W(d,e,f,g){var x,w,v,u=this,t=u.c
if(C.PF(t,new A.ajS(g))!=null)try{A.FO(u.d)}catch(x){t=C.OX(C.b([C.rH("A ResponsiveCondition was caught referencing a nonexistant breakpoint."),C.b8("A ResponsiveCondition requires a parent ResponsiveWrapper to reference breakpoints. Add a ResponsiveWrapper or remove breakpoint references.")],y.p))
throw C.c(t)}w=C.b([],y.Q)
D.c.O(w,t)
t=u.d
v=y.d
w=C.Y(new C.af(w,new A.ajT(A.FO(t).f),v),!0,v.i("b9.E"))
D.c.cN(w,new A.ajU())
t=u.Wf(t,w)
u.a=t==null?u.b:t},
Wf(d,e){var x=this.Vz(d,e)
if(x==null)return null
if(A.FO(d).Q===D.d3&&x.e!=null)return x.e
return x.d},
Vz(d,e){var x,w,v=C.PF(e,new A.ajV(d))
if(v!=null)return v
x=C.PF(e,new A.ajW(d))
if(x!=null)return x
w=C.PF(new C.c1(e,C.ai(e).i("c1<1>")),new A.ajX(d))
if(w!=null)return w
return null}}
A.w8.prototype={
j(d){return"Conditional."+this.b}}
A.dr.prototype={
j(d){var x=this
return"Condition(breakpoint: "+C.d(x.a)+", name: "+x.b+", condition: "+x.c.j(0)+", value: "+C.d(x.d)+", landscapeValue: "+C.d(x.e)+")"},
gam(d){return this.b}}
var z=a.updateTypes(["G(dr<@>)","md(i,m)","dr<@>(dr<@>)","m(dr<@>,dr<@>)"])
A.arn.prototype={
$2(d,e){return E.aNZ(E.aHs(D.cq,0,d,B.rf,e,B.jD),3,6,12)},
$S:z+1}
A.ajS.prototype={
$1(d){return!0},
$S(){return this.a.i("G(dr<0>)")}}
A.ajT.prototype={
$1(d){var x,w,v,u
if(d.a==null){x=D.f.co(D.c.he(this.a,new A.ajQ(d),new A.ajR(d)).c.a)
w=d.b
v=d.c
u=d.d
return new A.dr(x,w,v,u,u,y.L)}return d},
$S:z+2}
A.ajQ.prototype={
$1(d){return d.c.b===this.a.b},
$S:72}
A.ajR.prototype={
$0(){return C.a_("No breakpoint named `"+this.a.b+"` found.")},
$S:520}
A.ajU.prototype={
$2(d,e){var x,w=d.a
w.toString
x=e.a
x.toString
return D.f.aZ(w,x)},
$S:z+3}
A.ajV.prototype={
$1(d){if(d.c===B.fF)return A.FO(this.a).r.b===d.b
return!1},
$S:z+0}
A.ajW.prototype={
$1(d){var x
if(d.c===B.Ik){x=A.FO(this.a).aoz(d.b)
return x}return!1},
$S:z+0}
A.ajX.prototype={
$1(d){var x
if(d.c===B.iI){x=A.FO(this.a).aos(d.b)
return x}return!1},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(C.k6,[A.mc,A.w8])
x(C.a0,[A.kT,A.UW])
x(C.dH,[A.arn,A.ajU])
x(C.H,[A.SC,A.dr])
x(C.bD,[A.ajS,A.ajT,A.ajQ,A.ajV,A.ajW,A.ajX])
w(A.ajR,C.eK)})()
C.cz(b.typeUniverse,JSON.parse('{"mc":{"O":[]},"kT":{"a0":[],"f":[]},"UW":{"a0":[],"f":[]},"w8":{"O":[]}}'))
var y=(function rtii(){var x=C.z
return{h:x("dr<mc>"),L:x("dr<@>"),e:x("Dt"),Q:x("k<dr<@>>"),p:x("k<eN>"),s:x("k<i>"),D:x("k<f>"),d:x("af<dr<@>,dr<@>>"),k:x("mc"),w:x("md"),N:x("i")}})();(function constants(){var x=a.makeConstList
B.iI=new A.w8(0,"LARGER_THAN")
B.fF=new A.w8(1,"EQUALS")
B.Ik=new A.w8(2,"SMALLER_THAN")
B.og=new A.UW(null)
B.hG=new A.mc(0,"mobile")
B.Ig=new A.dr(null,"MOBILE",B.fF,B.hG,null,y.h)
B.zi=new A.mc(1,"tablet")
B.Ij=new A.dr(null,"TABLET",B.fF,B.zi,null,y.h)
B.WP=new A.mc(2,"desktop")
B.Ih=new A.dr(null,"DESKTOP",B.fF,B.WP,null,y.h)
B.WQ=new A.mc(3,"xlScreen")
B.Ii=new A.dr(null,"DESKTOP",B.iI,B.WQ,null,y.h)
B.r9=C.b(x([B.Ig,B.Ij,B.Ih,B.Ii]),C.z("k<dr<mc>>"))
B.rf=C.b(x(["Cost","Drivers","Helpers","EQUIPMENT","Handle With Care","Tolerance","Services","Vehicles"]),y.s)
B.ro=C.b(x(["We provide competitive and cost effective prices","Our drivers are experts in the industry","We bring extra trained helpers at your request","In case of rain, we protect your goods from any damages that may arise from the rain","We pride ourselves in simplifying your move and handling goods with care","Our motto is 0% damage tolerance\n","We provide exceptional and professional services","We have the most reliable and well maintained vehicles to ensure your goods are delivered on time without any delays due to breakdowns"]),y.s)
B.jD=C.b(x(["assets/svg/money.svg","assets/svg/driver.svg","assets/svg/helpers.svg","assets/svg/care.svg","assets/svg/care.svg","assets/svg/percentage.svg","assets/svg/services.svg","assets/svg/reliable_transport.svg"]),y.s)
B.B5=new F.fh("Why Choose Us","Here's why our services are valued by many of our customers",null,null,null)})()}
$__dart_deferred_initializers__["f8j9q3/AQNRVjkr0ID4kSKwcdKM="] = $__dart_deferred_initializers__.current
