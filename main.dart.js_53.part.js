self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={mw:function mw(d,e){this.a=d
this.b=e},jq:function jq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKo(d,e,f,g){var x=new A.TP(e,f,d,g.i("TP<0>"))
x.a3U(d,e,f,g)
return x},
TP:function TP(d,e,f,g){var _=this
_.a=null
_.b=d
_.c=e
_.d=f
_.$ti=g},
als:function als(d){this.a=d},
alt:function alt(d){this.a=d},
alq:function alq(d){this.a=d},
alr:function alr(d){this.a=d},
alu:function alu(){},
alv:function alv(d){this.a=d},
alw:function alw(d){this.a=d},
alx:function alx(d){this.a=d},
wy:function wy(d,e){this.a=d
this.b=e},
dC:function dC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.$ti=i},
GK(d){var x=d.G(y.j)
if(x!=null)return x.f
throw B.c(B.Qm(B.b([B.t6("ResponsiveWrapper.of() called with a context that does not contain a ResponsiveWrapper."),B.bd("No Responsive ancestor could be found starting from the context that was passed to ResponsiveWrapper.of(). Place a ResponsiveWrapper at the root of the app or supply a ResponsiveWrapper.builder."),d.amT("The context used was")],y.t)))}},C,B,D
A=a.updateHolder(c[56],A)
C=c[112]
B=c[0]
D=c[2]
A.mw.prototype={
j(d){return"ResponsiveEnum."+this.b}}
A.jq.prototype={
B(d,e){var x=y.f,w=A.aKo(e,C.i5,C.rI,x).a
w.toString
if(w===C.i5)return this.c
else{x=A.aKo(e,C.i5,C.rI,x).a
x.toString
if(x===C.zV)return this.d
else return this.e}}}
A.TP.prototype={
a3U(d,e,f,g){var x,w,v,u=this,t=u.c
if(B.R7(t,new A.als(g))!=null)try{A.GK(u.d)}catch(x){t=B.Qm(B.b([B.t6("A ResponsiveCondition was caught referencing a nonexistant breakpoint."),B.bd("A ResponsiveCondition requires a parent ResponsiveWrapper to reference breakpoints. Add a ResponsiveWrapper or remove breakpoint references.")],y.t))
throw B.c(t)}w=B.b([],y.v)
D.c.P(w,t)
t=u.d
v=y.D
w=B.a0(new B.ak(w,new A.alt(A.GK(t).f),v),!0,v.i("bc.E"))
D.c.d1(w,new A.alu())
t=u.X4(t,w)
u.a=t==null?u.b:t},
X4(d,e){var x=this.Wn(d,e)
if(x==null)return null
if(A.GK(d).Q===D.de&&x.e!=null)return x.e
return x.d},
Wn(d,e){var x,w,v=B.R7(e,new A.alv(d))
if(v!=null)return v
x=B.R7(e,new A.alw(d))
if(x!=null)return x
w=B.R7(new B.c_(e,B.ao(e).i("c_<1>")),new A.alx(d))
if(w!=null)return w
return null}}
A.wy.prototype={
j(d){return"Conditional."+this.b}}
A.dC.prototype={
j(d){var x=this
return"Condition(breakpoint: "+B.e(x.a)+", name: "+x.b+", condition: "+x.c.j(0)+", value: "+B.e(x.d)+", landscapeValue: "+B.e(x.e)+")"},
gar(d){return this.b}}
var z=a.updateTypes(["H(dC<@>)","dC<@>(dC<@>)","m(dC<@>,dC<@>)"])
A.als.prototype={
$1(d){return!0},
$S(){return this.a.i("H(dC<0>)")}}
A.alt.prototype={
$1(d){var x,w,v,u
if(d.a==null){x=D.f.cC(D.c.hq(this.a,new A.alq(d),new A.alr(d)).c.a)
w=d.b
v=d.c
u=d.d
return new A.dC(x,w,v,u,u,y.u)}return d},
$S:z+1}
A.alq.prototype={
$1(d){return d.c.b===this.a.b},
$S:77}
A.alr.prototype={
$0(){return B.Z("No breakpoint named `"+this.a.b+"` found.")},
$S:528}
A.alu.prototype={
$2(d,e){var x,w=d.a
w.toString
x=e.a
x.toString
return D.f.b9(w,x)},
$S:z+2}
A.alv.prototype={
$1(d){if(d.c===C.h1)return A.GK(this.a).r.b===d.b
return!1},
$S:z+0}
A.alw.prototype={
$1(d){var x
if(d.c===C.J7){x=A.GK(this.a).aq4(d.b)
return x}return!1},
$S:z+0}
A.alx.prototype={
$1(d){var x
if(d.c===C.j9){x=A.GK(this.a).apY(d.b)
return x}return!1},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.is,[A.mw,A.wy])
w(A.jq,B.a_)
x(B.J,[A.TP,A.dC])
x(B.bj,[A.als,A.alt,A.alq,A.alv,A.alw,A.alx])
w(A.alr,B.dl)
w(A.alu,B.cS)})()
B.bz(b.typeUniverse,JSON.parse('{"mw":{"O":[]},"jq":{"a_":[],"d":[]},"wy":{"O":[]}}'))
var y={n:B.t("dC<mw>"),u:B.t("dC<@>"),j:B.t("E8"),v:B.t("k<dC<@>>"),t:B.t("k<f7>"),D:B.t("ak<dC<@>,dC<@>>"),f:B.t("mw")};(function constants(){var x=a.makeConstList
C.j9=new A.wy(0,"LARGER_THAN")
C.h1=new A.wy(1,"EQUALS")
C.J7=new A.wy(2,"SMALLER_THAN")
C.i5=new A.mw(0,"mobile")
C.J3=new A.dC(null,"MOBILE",C.h1,C.i5,null,y.n)
C.zV=new A.mw(1,"tablet")
C.J6=new A.dC(null,"TABLET",C.h1,C.zV,null,y.n)
C.XL=new A.mw(2,"desktop")
C.J4=new A.dC(null,"DESKTOP",C.h1,C.XL,null,y.n)
C.XM=new A.mw(3,"xlScreen")
C.J5=new A.dC(null,"DESKTOP",C.j9,C.XM,null,y.n)
C.rI=B.b(x([C.J3,C.J6,C.J4,C.J5]),B.t("k<dC<mw>>"))})()}
$__dart_deferred_initializers__["foEXq/iUAco4tqfjqcnjmYIaCBQ="] = $__dart_deferred_initializers__.current
