function Bt(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let o = 0; o < r.length; o++)
    n[r[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
function yt(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = ge(r) ? Mc(r) : yt(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else {
    if (ge(e))
      return e;
    if (ie(e))
      return e;
  }
}
const Lc = /;(?![^(]*\))/g, kc = /:([^]+)/, Fc = /\/\*.*?\*\//gs;
function Mc(e) {
  const t = {};
  return e.replace(Fc, "").split(Lc).forEach((n) => {
    if (n) {
      const r = n.split(kc);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function hs(e) {
  let t = "";
  if (ge(e))
    t = e;
  else if (U(e))
    for (let n = 0; n < e.length; n++) {
      const r = hs(e[n]);
      r && (t += r + " ");
    }
  else if (ie(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Uc = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", jc = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Bc = /* @__PURE__ */ Bt(Uc), Hc = /* @__PURE__ */ Bt(jc), Wc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zc = /* @__PURE__ */ Bt(Wc);
function yl(e) {
  return !!e || e === "";
}
const de = (e) => ge(e) ? e : e == null ? "" : U(e) || ie(e) && (e.toString === Dl || !B(e.toString)) ? JSON.stringify(e, vl, 2) : String(e), vl = (e, t) => t && t.__v_isRef ? vl(e, t.value) : en(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
} : wl(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : ie(t) && !U(t) && !Cl(t) ? String(t) : t, ce = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, Dn = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], we = () => {
}, Tl = () => !1, Kc = /^on[^a-z]/, ir = (e) => Kc.test(e), Lr = (e) => e.startsWith("onUpdate:"), be = Object.assign, _s = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, qc = Object.prototype.hasOwnProperty, Q = (e, t) => qc.call(e, t), U = Array.isArray, en = (e) => Kr(e) === "[object Map]", wl = (e) => Kr(e) === "[object Set]", B = (e) => typeof e == "function", ge = (e) => typeof e == "string", gs = (e) => typeof e == "symbol", ie = (e) => e !== null && typeof e == "object", Es = (e) => ie(e) && B(e.then) && B(e.catch), Dl = Object.prototype.toString, Kr = (e) => Dl.call(e), bs = (e) => Kr(e).slice(8, -1), Cl = (e) => Kr(e) === "[object Object]", Ns = (e) => ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vr = /* @__PURE__ */ Bt(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Gc = /* @__PURE__ */ Bt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), qr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Yc = /-(\w)/g, _t = qr((e) => e.replace(Yc, (t, n) => n ? n.toUpperCase() : "")), Jc = /\B([A-Z])/g, Ct = qr((e) => e.replace(Jc, "-$1").toLowerCase()), an = qr((e) => e.charAt(0).toUpperCase() + e.slice(1)), qt = qr((e) => e ? `on${an(e)}` : ""), Gn = (e, t) => !Object.is(e, t), Ln = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, kr = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Il = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ei;
const Rl = () => ei || (ei = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ro(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let at;
class Al {
  constructor(t = !1) {
    this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = at, !t && at && (this.index = (at.scopes || (at.scopes = [])).push(this) - 1);
  }
  run(t) {
    if (this.active) {
      const n = at;
      try {
        return at = this, t();
      } finally {
        at = n;
      }
    } else
      ({}).NODE_ENV !== "production" && Ro("cannot run an inactive effect scope.");
  }
  on() {
    at = this;
  }
  off() {
    at = this.parent;
  }
  stop(t) {
    if (this.active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this.active = !1;
    }
  }
}
function Xc(e) {
  return new Al(e);
}
function Qc(e, t = at) {
  t && t.active && t.effects.push(e);
}
const Yn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, $l = (e) => (e.w & jt) > 0, Sl = (e) => (e.n & jt) > 0, Zc = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= jt;
}, eu = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      $l(o) && !Sl(o) ? o.delete(e) : t[n++] = o, o.w &= ~jt, o.n &= ~jt;
    }
    t.length = n;
  }
}, Ao = /* @__PURE__ */ new WeakMap();
let jn = 0, jt = 1;
const $o = 30;
let Le;
const tn = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), So = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
class Os {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Qc(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = Le, n = Mt;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = Le, Le = this, Mt = !0, jt = 1 << ++jn, jn <= $o ? Zc(this) : ti(this), this.fn();
    } finally {
      jn <= $o && eu(this), jt = 1 << --jn, Le = this.parent, Mt = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Le === this ? this.deferStop = !0 : this.active && (ti(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ti(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Mt = !0;
const xl = [];
function pn() {
  xl.push(Mt), Mt = !1;
}
function mn() {
  const e = xl.pop();
  Mt = e === void 0 ? !0 : e;
}
function je(e, t, n) {
  if (Mt && Le) {
    let r = Ao.get(e);
    r || Ao.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = Yn());
    const s = {}.NODE_ENV !== "production" ? { effect: Le, target: e, type: t, key: n } : void 0;
    xo(o, s);
  }
}
function xo(e, t) {
  let n = !1;
  jn <= $o ? Sl(e) || (e.n |= jt, n = !$l(e)) : n = !e.has(Le), n && (e.add(Le), Le.deps.push(e), {}.NODE_ENV !== "production" && Le.onTrack && Le.onTrack(Object.assign({ effect: Le }, t)));
}
function It(e, t, n, r, o, s) {
  const i = Ao.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && U(e)) {
    const c = Il(r);
    i.forEach((f, u) => {
      (u === "length" || u >= c) && l.push(f);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        U(e) ? Ns(n) && l.push(i.get("length")) : (l.push(i.get(tn)), en(e) && l.push(i.get(So)));
        break;
      case "delete":
        U(e) || (l.push(i.get(tn)), en(e) && l.push(i.get(So)));
        break;
      case "set":
        en(e) && l.push(i.get(tn));
        break;
    }
  const a = {}.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: o, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && ({}.NODE_ENV !== "production" ? yn(l[0], a) : yn(l[0]));
  else {
    const c = [];
    for (const f of l)
      f && c.push(...f);
    ({}).NODE_ENV !== "production" ? yn(Yn(c), a) : yn(Yn(c));
  }
}
function yn(e, t) {
  const n = U(e) ? e : [...e];
  for (const r of n)
    r.computed && ni(r, t);
  for (const r of n)
    r.computed || ni(r, t);
}
function ni(e, t) {
  (e !== Le || e.allowRecurse) && ({}.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(be({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const tu = /* @__PURE__ */ Bt("__proto__,__v_isRef,__isVue"), Pl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(gs)
), nu = /* @__PURE__ */ Gr(), ru = /* @__PURE__ */ Gr(!1, !0), ou = /* @__PURE__ */ Gr(!0), su = /* @__PURE__ */ Gr(!0, !0), ri = /* @__PURE__ */ iu();
function iu() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = G(this);
      for (let s = 0, i = this.length; s < i; s++)
        je(r, "get", s + "");
      const o = r[t](...n);
      return o === -1 || o === !1 ? r[t](...n.map(G)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      pn();
      const r = G(this)[t].apply(this, n);
      return mn(), r;
    };
  }), e;
}
function Gr(e = !1, t = !1) {
  return function(r, o, s) {
    if (o === "__v_isReactive")
      return !e;
    if (o === "__v_isReadonly")
      return e;
    if (o === "__v_isShallow")
      return t;
    if (o === "__v_raw" && s === (e ? t ? Bl : jl : t ? Ul : Ml).get(r))
      return r;
    const i = U(r);
    if (!e && i && Q(ri, o))
      return Reflect.get(ri, o, s);
    const l = Reflect.get(r, o, s);
    return (gs(o) ? Pl.has(o) : tu(o)) || (e || je(r, "get", o), t) ? l : _e(l) ? i && Ns(o) ? l : l.value : ie(l) ? e ? Hl(l) : hn(l) : l;
  };
}
const lu = /* @__PURE__ */ Vl(), au = /* @__PURE__ */ Vl(!0);
function Vl(e = !1) {
  return function(n, r, o, s) {
    let i = n[r];
    if (Rt(i) && _e(i) && !_e(o))
      return !1;
    if (!e && (!Fr(o) && !Rt(o) && (i = G(i), o = G(o)), !U(n) && _e(i) && !_e(o)))
      return i.value = o, !0;
    const l = U(n) && Ns(r) ? Number(r) < n.length : Q(n, r), a = Reflect.set(n, r, o, s);
    return n === G(s) && (l ? Gn(o, i) && It(n, "set", r, o, i) : It(n, "add", r, o)), a;
  };
}
function cu(e, t) {
  const n = Q(e, t), r = e[t], o = Reflect.deleteProperty(e, t);
  return o && n && It(e, "delete", t, void 0, r), o;
}
function uu(e, t) {
  const n = Reflect.has(e, t);
  return (!gs(t) || !Pl.has(t)) && je(e, "has", t), n;
}
function fu(e) {
  return je(e, "iterate", U(e) ? "length" : tn), Reflect.ownKeys(e);
}
const Ll = {
  get: nu,
  set: lu,
  deleteProperty: cu,
  has: uu,
  ownKeys: fu
}, kl = {
  get: ou,
  set(e, t) {
    return {}.NODE_ENV !== "production" && Ro(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return {}.NODE_ENV !== "production" && Ro(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, du = /* @__PURE__ */ be({}, Ll, {
  get: ru,
  set: au
}), pu = /* @__PURE__ */ be({}, kl, {
  get: su
}), ys = (e) => e, Yr = (e) => Reflect.getPrototypeOf(e);
function _r(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = G(e), s = G(t);
  n || (t !== s && je(o, "get", t), je(o, "get", s));
  const { has: i } = Yr(o), l = r ? ys : n ? vs : Jn;
  if (i.call(o, t))
    return l(e.get(t));
  if (i.call(o, s))
    return l(e.get(s));
  e !== o && e.get(t);
}
function gr(e, t = !1) {
  const n = this.__v_raw, r = G(n), o = G(e);
  return t || (e !== o && je(r, "has", e), je(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function Er(e, t = !1) {
  return e = e.__v_raw, !t && je(G(e), "iterate", tn), Reflect.get(e, "size", e);
}
function oi(e) {
  e = G(e);
  const t = G(this);
  return Yr(t).has.call(t, e) || (t.add(e), It(t, "add", e, e)), this;
}
function si(e, t) {
  t = G(t);
  const n = G(this), { has: r, get: o } = Yr(n);
  let s = r.call(n, e);
  s ? {}.NODE_ENV !== "production" && Fl(n, r, e) : (e = G(e), s = r.call(n, e));
  const i = o.call(n, e);
  return n.set(e, t), s ? Gn(t, i) && It(n, "set", e, t, i) : It(n, "add", e, t), this;
}
function ii(e) {
  const t = G(this), { has: n, get: r } = Yr(t);
  let o = n.call(t, e);
  o ? {}.NODE_ENV !== "production" && Fl(t, n, e) : (e = G(e), o = n.call(t, e));
  const s = r ? r.call(t, e) : void 0, i = t.delete(e);
  return o && It(t, "delete", e, void 0, s), i;
}
function li() {
  const e = G(this), t = e.size !== 0, n = {}.NODE_ENV !== "production" ? en(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && It(e, "clear", void 0, void 0, n), r;
}
function br(e, t) {
  return function(r, o) {
    const s = this, i = s.__v_raw, l = G(i), a = t ? ys : e ? vs : Jn;
    return !e && je(l, "iterate", tn), i.forEach((c, f) => r.call(o, a(c), a(f), s));
  };
}
function Nr(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = G(o), i = en(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, c = o[e](...r), f = n ? ys : t ? vs : Jn;
    return !t && je(s, "iterate", a ? So : tn), {
      next() {
        const { value: u, done: p } = c.next();
        return p ? { value: u, done: p } : {
          value: l ? [f(u[0]), f(u[1])] : f(u),
          done: p
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Pt(e) {
  return function(...t) {
    if ({}.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${an(e)} operation ${n}failed: target is readonly.`, G(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function mu() {
  const e = {
    get(s) {
      return _r(this, s);
    },
    get size() {
      return Er(this);
    },
    has: gr,
    add: oi,
    set: si,
    delete: ii,
    clear: li,
    forEach: br(!1, !1)
  }, t = {
    get(s) {
      return _r(this, s, !1, !0);
    },
    get size() {
      return Er(this);
    },
    has: gr,
    add: oi,
    set: si,
    delete: ii,
    clear: li,
    forEach: br(!1, !0)
  }, n = {
    get(s) {
      return _r(this, s, !0);
    },
    get size() {
      return Er(this, !0);
    },
    has(s) {
      return gr.call(this, s, !0);
    },
    add: Pt("add"),
    set: Pt("set"),
    delete: Pt("delete"),
    clear: Pt("clear"),
    forEach: br(!0, !1)
  }, r = {
    get(s) {
      return _r(this, s, !0, !0);
    },
    get size() {
      return Er(this, !0);
    },
    has(s) {
      return gr.call(this, s, !0);
    },
    add: Pt("add"),
    set: Pt("set"),
    delete: Pt("delete"),
    clear: Pt("clear"),
    forEach: br(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = Nr(s, !1, !1), n[s] = Nr(s, !0, !1), t[s] = Nr(s, !1, !0), r[s] = Nr(s, !0, !0);
  }), [
    e,
    n,
    t,
    r
  ];
}
const [hu, _u, gu, Eu] = /* @__PURE__ */ mu();
function Jr(e, t) {
  const n = t ? e ? Eu : gu : e ? _u : hu;
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(Q(n, o) && o in r ? n : r, o, s);
}
const bu = {
  get: /* @__PURE__ */ Jr(!1, !1)
}, Nu = {
  get: /* @__PURE__ */ Jr(!1, !0)
}, Ou = {
  get: /* @__PURE__ */ Jr(!0, !1)
}, yu = {
  get: /* @__PURE__ */ Jr(!0, !0)
};
function Fl(e, t, n) {
  const r = G(n);
  if (r !== n && t.call(e, r)) {
    const o = bs(e);
    console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Ml = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ new WeakMap(), jl = /* @__PURE__ */ new WeakMap(), Bl = /* @__PURE__ */ new WeakMap();
function vu(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Tu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vu(bs(e));
}
function hn(e) {
  return Rt(e) ? e : Xr(e, !1, Ll, bu, Ml);
}
function wu(e) {
  return Xr(e, !1, du, Nu, Ul);
}
function Hl(e) {
  return Xr(e, !0, kl, Ou, jl);
}
function vn(e) {
  return Xr(e, !0, pu, yu, Bl);
}
function Xr(e, t, n, r, o) {
  if (!ie(e))
    return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const i = Tu(e);
  if (i === 0)
    return e;
  const l = new Proxy(e, i === 2 ? r : n);
  return o.set(e, l), l;
}
function Ut(e) {
  return Rt(e) ? Ut(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Rt(e) {
  return !!(e && e.__v_isReadonly);
}
function Fr(e) {
  return !!(e && e.__v_isShallow);
}
function Po(e) {
  return Ut(e) || Rt(e);
}
function G(e) {
  const t = e && e.__v_raw;
  return t ? G(t) : e;
}
function Wl(e) {
  return kr(e, "__v_skip", !0), e;
}
const Jn = (e) => ie(e) ? hn(e) : e, vs = (e) => ie(e) ? Hl(e) : e;
function zl(e) {
  Mt && Le && (e = G(e), {}.NODE_ENV !== "production" ? xo(e.dep || (e.dep = Yn()), {
    target: e,
    type: "get",
    key: "value"
  }) : xo(e.dep || (e.dep = Yn())));
}
function Kl(e, t) {
  e = G(e), e.dep && ({}.NODE_ENV !== "production" ? yn(e.dep, {
    target: e,
    type: "set",
    key: "value",
    newValue: t
  }) : yn(e.dep));
}
function _e(e) {
  return !!(e && e.__v_isRef === !0);
}
function Re(e) {
  return Du(e, !1);
}
function Du(e, t) {
  return _e(e) ? e : new Cu(e, t);
}
class Cu {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : G(t), this._value = n ? t : Jn(t);
  }
  get value() {
    return zl(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Fr(t) || Rt(t);
    t = n ? t : G(t), Gn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Jn(t), Kl(this, t));
  }
}
function oe(e) {
  return _e(e) ? e.value : e;
}
const Iu = {
  get: (e, t, n) => oe(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return _e(o) && !_e(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function ql(e) {
  return Ut(e) ? e : new Proxy(e, Iu);
}
var Gl;
class Ru {
  constructor(t, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Gl] = !1, this._dirty = !0, this.effect = new Os(t, () => {
      this._dirty || (this._dirty = !0, Kl(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = G(this);
    return zl(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Gl = "__v_isReadonly";
function Au(e, t, n = !1) {
  let r, o;
  const s = B(e);
  s ? (r = e, o = {}.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : we) : (r = e.get, o = e.set);
  const i = new Ru(r, o, s || !o, n);
  return {}.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
const nn = [];
function Tr(e) {
  nn.push(e);
}
function wr() {
  nn.pop();
}
function A(e, ...t) {
  if ({}.NODE_ENV === "production")
    return;
  pn();
  const n = nn.length ? nn[nn.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = $u();
  if (r)
    wt(r, n, 11, [
      e + t.join(""),
      n && n.proxy,
      o.map(({ vnode: s }) => `at <${oo(n, s.type)}>`).join(`
`),
      o
    ]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...Su(o)), console.warn(...s);
  }
  mn();
}
function $u() {
  let e = nn[nn.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Su(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...xu(n));
  }), t;
}
function xu({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${oo(e.component, e.type, r)}`, s = ">" + n;
  return e.props ? [o, ...Pu(e.props), s] : [o + s];
}
function Pu(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Yl(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Yl(e, t, n) {
  return ge(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : _e(t) ? (t = Yl(e, G(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : B(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = G(t), n ? t : [`${e}=`, t]);
}
const Ts = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function wt(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (s) {
    Qr(s, t, n);
  }
  return o;
}
function Xe(e, t, n, r) {
  if (B(e)) {
    const s = wt(e, t, n, r);
    return s && Es(s) && s.catch((i) => {
      Qr(i, t, n);
    }), s;
  }
  const o = [];
  for (let s = 0; s < e.length; s++)
    o.push(Xe(e[s], t, n, r));
  return o;
}
function Qr(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, l = {}.NODE_ENV !== "production" ? Ts[n] : n;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](e, i, l) === !1)
            return;
      }
      s = s.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      wt(a, null, 10, [e, i, l]);
      return;
    }
  }
  Vu(e, n, o, r);
}
function Vu(e, t, n, r = !0) {
  if ({}.NODE_ENV !== "production") {
    const o = Ts[t];
    if (n && Tr(n), A(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && wr(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Xn = !1, Vo = !1;
const Ae = [];
let ft = 0;
const Cn = [];
let ct = null, Lt = 0;
const Jl = /* @__PURE__ */ Promise.resolve();
let ws = null;
const Lu = 100;
function Lo(e) {
  const t = ws || Jl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ku(e) {
  let t = ft + 1, n = Ae.length;
  for (; t < n; ) {
    const r = t + n >>> 1;
    Qn(Ae[r]) < e ? t = r + 1 : n = r;
  }
  return t;
}
function Zr(e) {
  (!Ae.length || !Ae.includes(e, Xn && e.allowRecurse ? ft + 1 : ft)) && (e.id == null ? Ae.push(e) : Ae.splice(ku(e.id), 0, e), Xl());
}
function Xl() {
  !Xn && !Vo && (Vo = !0, ws = Jl.then(ea));
}
function Fu(e) {
  const t = Ae.indexOf(e);
  t > ft && Ae.splice(t, 1);
}
function Ql(e) {
  U(e) ? Cn.push(...e) : (!ct || !ct.includes(e, e.allowRecurse ? Lt + 1 : Lt)) && Cn.push(e), Xl();
}
function ai(e, t = Xn ? ft + 1 : 0) {
  for ({}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < Ae.length; t++) {
    const n = Ae[t];
    if (n && n.pre) {
      if ({}.NODE_ENV !== "production" && Ds(e, n))
        continue;
      Ae.splice(t, 1), t--, n();
    }
  }
}
function Zl(e) {
  if (Cn.length) {
    const t = [...new Set(Cn)];
    if (Cn.length = 0, ct) {
      ct.push(...t);
      return;
    }
    for (ct = t, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ct.sort((n, r) => Qn(n) - Qn(r)), Lt = 0; Lt < ct.length; Lt++)
      ({}).NODE_ENV !== "production" && Ds(e, ct[Lt]) || ct[Lt]();
    ct = null, Lt = 0;
  }
}
const Qn = (e) => e.id == null ? 1 / 0 : e.id, Mu = (e, t) => {
  const n = Qn(e) - Qn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ea(e) {
  Vo = !1, Xn = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ae.sort(Mu);
  const t = {}.NODE_ENV !== "production" ? (n) => Ds(e, n) : we;
  try {
    for (ft = 0; ft < Ae.length; ft++) {
      const n = Ae[ft];
      if (n && n.active !== !1) {
        if ({}.NODE_ENV !== "production" && t(n))
          continue;
        wt(n, null, 14);
      }
    }
  } finally {
    ft = 0, Ae.length = 0, Zl(e), Xn = !1, ws = null, (Ae.length || Cn.length) && ea(e);
  }
}
function Ds(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Lu) {
      const r = t.ownerInstance, o = r && Vs(r.type);
      return A(`Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      e.set(t, n + 1);
  }
}
let rn = !1;
const On = /* @__PURE__ */ new Set();
({}).NODE_ENV !== "production" && (Rl().__VUE_HMR_RUNTIME__ = {
  createRecord: _o(ta),
  rerender: _o(Bu),
  reload: _o(Hu)
});
const cn = /* @__PURE__ */ new Map();
function Uu(e) {
  const t = e.type.__hmrId;
  let n = cn.get(t);
  n || (ta(t, e.type), n = cn.get(t)), n.instances.add(e);
}
function ju(e) {
  cn.get(e.type.__hmrId).instances.delete(e);
}
function ta(e, t) {
  return cn.has(e) ? !1 : (cn.set(e, {
    initialDef: Wn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Wn(e) {
  return $a(e) ? e.__vccOpts : e;
}
function Bu(e, t) {
  const n = cn.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Wn(r.type).render = t), r.renderCache = [], rn = !0, r.update(), rn = !1;
  }));
}
function Hu(e, t) {
  const n = cn.get(e);
  if (!n)
    return;
  t = Wn(t), ci(n.initialDef, t);
  const r = [...n.instances];
  for (const o of r) {
    const s = Wn(o.type);
    On.has(s) || (s !== n.initialDef && ci(s, t), On.add(s)), o.appContext.optionsCache.delete(o.type), o.ceReload ? (On.add(s), o.ceReload(t.styles), On.delete(s)) : o.parent ? Zr(o.parent.update) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Ql(() => {
    for (const o of r)
      On.delete(Wn(o.type));
  });
}
function ci(e, t) {
  be(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function _o(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let dt, Bn = [], ko = !1;
function lr(e, ...t) {
  dt ? dt.emit(e, ...t) : ko || Bn.push({ event: e, args: t });
}
function na(e, t) {
  var n, r;
  dt = e, dt ? (dt.enabled = !0, Bn.forEach(({ event: o, args: s }) => dt.emit(o, ...s)), Bn = []) : typeof window < "u" && window.HTMLElement && !(!((r = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || r === void 0) && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    na(s, t);
  }), setTimeout(() => {
    dt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ko = !0, Bn = []);
  }, 3e3)) : (ko = !0, Bn = []);
}
function Wu(e, t) {
  lr("app:init", e, t, {
    Fragment: pe,
    Text: $n,
    Comment: Ce,
    Static: Ir
  });
}
function zu(e) {
  lr("app:unmount", e);
}
const Ku = /* @__PURE__ */ Cs("component:added"), ra = /* @__PURE__ */ Cs("component:updated"), qu = /* @__PURE__ */ Cs("component:removed"), Gu = (e) => {
  dt && typeof dt.cleanupBuffer == "function" && !dt.cleanupBuffer(e) && qu(e);
};
function Cs(e) {
  return (t) => {
    lr(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
  };
}
const Yu = /* @__PURE__ */ oa("perf:start"), Ju = /* @__PURE__ */ oa("perf:end");
function oa(e) {
  return (t, n, r) => {
    lr(e, t.appContext.app, t.uid, t, n, r);
  };
}
function Xu(e, t, n) {
  lr("component:emit", e.appContext.app, e, t, n);
}
function Qu(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || ce;
  if ({}.NODE_ENV !== "production") {
    const { emitsOptions: f, propsOptions: [u] } = e;
    if (f)
      if (!(t in f))
        (!u || !(qt(t) in u)) && A(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${qt(t)}" prop.`);
      else {
        const p = f[t];
        B(p) && (p(...n) || A(`Invalid event arguments: event validation failed for event "${t}".`));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in r) {
    const f = `${i === "modelValue" ? "model" : i}Modifiers`, { number: u, trim: p } = r[f] || ce;
    p && (o = n.map((g) => ge(g) ? g.trim() : g)), u && (o = n.map(Il));
  }
  if ({}.NODE_ENV !== "production" && Xu(e, t, o), {}.NODE_ENV !== "production") {
    const f = t.toLowerCase();
    f !== t && r[qt(f)] && A(`Event "${f}" is emitted in component ${oo(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ct(t)}" instead of "${t}".`);
  }
  let l, a = r[l = qt(t)] || r[l = qt(_t(t))];
  !a && s && (a = r[l = qt(Ct(t))]), a && Xe(a, e, 6, o);
  const c = r[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Xe(c, e, 6, o);
  }
}
function sa(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let i = {}, l = !1;
  if (!B(e)) {
    const a = (c) => {
      const f = sa(c, t, !0);
      f && (l = !0, be(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (ie(e) && r.set(e, null), null) : (U(s) ? s.forEach((a) => i[a] = null) : be(i, s), ie(e) && r.set(e, i), i);
}
function eo(e, t) {
  return !e || !ir(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Q(e, t[0].toLowerCase() + t.slice(1)) || Q(e, Ct(t)) || Q(e, t));
}
let ke = null, ia = null;
function Mr(e) {
  const t = ke;
  return ke = e, ia = e && e.type.__scopeId || null, t;
}
function Zu(e, t = ke, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Oi(-1);
    const s = Mr(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Mr(s), r._d && Oi(1);
    }
    return {}.NODE_ENV !== "production" && ra(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let Fo = !1;
function Ur() {
  Fo = !0;
}
function go(e) {
  const { type: t, vnode: n, proxy: r, withProxy: o, props: s, propsOptions: [i], slots: l, attrs: a, emit: c, render: f, renderCache: u, data: p, setupState: g, ctx: m, inheritAttrs: E } = e;
  let v, I;
  const P = Mr(e);
  ({}).NODE_ENV !== "production" && (Fo = !1);
  try {
    if (n.shapeFlag & 4) {
      const D = o || r;
      v = tt(f.call(D, D, u, s, g, p, m)), I = a;
    } else {
      const D = t;
      ({}).NODE_ENV !== "production" && a === s && Ur(), v = tt(D.length > 1 ? D(s, {}.NODE_ENV !== "production" ? {
        get attrs() {
          return Ur(), a;
        },
        slots: l,
        emit: c
      } : { attrs: a, slots: l, emit: c }) : D(s, null)), I = t.props ? a : tf(a);
    }
  } catch (D) {
    zn.length = 0, Qr(D, e, 1), v = De(Ce);
  }
  let k = v, S;
  if ({}.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && ([k, S] = ef(v)), I && E !== !1) {
    const D = Object.keys(I), { shapeFlag: K } = k;
    if (D.length) {
      if (K & 7)
        i && D.some(Lr) && (I = nf(I, i)), k = gt(k, I);
      else if ({}.NODE_ENV !== "production" && !Fo && k.type !== Ce) {
        const j = Object.keys(a), M = [], H = [];
        for (let J = 0, re = j.length; J < re; J++) {
          const fe = j[J];
          ir(fe) ? Lr(fe) || M.push(fe[2].toLowerCase() + fe.slice(3)) : H.push(fe);
        }
        H.length && A(`Extraneous non-props attributes (${H.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), M.length && A(`Extraneous non-emits event listeners (${M.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && ({}.NODE_ENV !== "production" && !ui(k) && A("Runtime directive used on component with non-element root node. The directives will not function as intended."), k = gt(k), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && ({}.NODE_ENV !== "production" && !ui(k) && A("Component inside <Transition> renders non-element root node that cannot be animated."), k.transition = n.transition), {}.NODE_ENV !== "production" && S ? S(k) : v = k, Mr(P), v;
}
const ef = (e) => {
  const t = e.children, n = e.dynamicChildren, r = la(t);
  if (!r)
    return [e, void 0];
  const o = t.indexOf(r), s = n ? n.indexOf(r) : -1, i = (l) => {
    t[o] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [tt(r), i];
};
function la(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (er(r)) {
      if (r.type !== Ce || r.children === "v-if") {
        if (t)
          return;
        t = r;
      }
    } else
      return;
  }
  return t;
}
const tf = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ir(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, nf = (e, t) => {
  const n = {};
  for (const r in e)
    (!Lr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, ui = (e) => e.shapeFlag & 7 || e.type === Ce;
function rf(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: i, children: l, patchFlag: a } = t, c = s.emitsOptions;
  if ({}.NODE_ENV !== "production" && (o || l) && rn || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return r ? fi(r, i, c) : !!i;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        const p = f[u];
        if (i[p] !== r[p] && !eo(c, p))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? fi(r, i, c) : !0 : !!i;
  return !1;
}
function fi(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !eo(n, s))
      return !0;
  }
  return !1;
}
function of({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const sf = (e) => e.__isSuspense;
function lf(e, t) {
  t && t.pendingBranch ? U(e) ? t.effects.push(...e) : t.effects.push(e) : Ql(e);
}
function Mo(e, t) {
  if (!Oe)
    ({}).NODE_ENV !== "production" && A("provide() can only be used inside setup().");
  else {
    let n = Oe.provides;
    const r = Oe.parent && Oe.parent.provides;
    r === n && (n = Oe.provides = Object.create(r)), n[e] = t;
  }
}
function on(e, t, n = !1) {
  const r = Oe || ke;
  if (r) {
    const o = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && B(t) ? t.call(r.proxy) : t;
    ({}).NODE_ENV !== "production" && A(`injection "${String(e)}" not found.`);
  } else
    ({}).NODE_ENV !== "production" && A("inject() can only be used inside setup() or functional components.");
}
const Or = {};
function ot(e, t, n) {
  return {}.NODE_ENV !== "production" && !B(t) && A("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), aa(e, t, n);
}
function aa(e, t, { immediate: n, deep: r, flush: o, onTrack: s, onTrigger: i } = ce) {
  ({}).NODE_ENV !== "production" && !t && (n !== void 0 && A('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && A('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (S) => {
    A("Invalid watch source: ", S, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, a = Oe;
  let c, f = !1, u = !1;
  if (_e(e) ? (c = () => e.value, f = Fr(e)) : Ut(e) ? (c = () => e, r = !0) : U(e) ? (u = !0, f = e.some((S) => Ut(S) || Fr(S)), c = () => e.map((S) => {
    if (_e(S))
      return S.value;
    if (Ut(S))
      return Zt(S);
    if (B(S))
      return wt(S, a, 2);
    ({}).NODE_ENV !== "production" && l(S);
  })) : B(e) ? t ? c = () => wt(e, a, 2) : c = () => {
    if (!(a && a.isUnmounted))
      return p && p(), Xe(e, a, 3, [g]);
  } : (c = we, {}.NODE_ENV !== "production" && l(e)), t && r) {
    const S = c;
    c = () => Zt(S());
  }
  let p, g = (S) => {
    p = P.onStop = () => {
      wt(S, a, 4);
    };
  }, m;
  if (tr)
    if (g = we, t ? n && Xe(t, a, 3, [
      c(),
      u ? [] : void 0,
      g
    ]) : c(), o === "sync") {
      const S = fd();
      m = S.__watcherHandles || (S.__watcherHandles = []);
    } else
      return we;
  let E = u ? new Array(e.length).fill(Or) : Or;
  const v = () => {
    if (!!P.active)
      if (t) {
        const S = P.run();
        (r || f || (u ? S.some((D, K) => Gn(D, E[K])) : Gn(S, E))) && (p && p(), Xe(t, a, 3, [
          S,
          E === Or ? void 0 : u && E[0] === Or ? [] : E,
          g
        ]), E = S);
      } else
        P.run();
  };
  v.allowRecurse = !!t;
  let I;
  o === "sync" ? I = v : o === "post" ? I = () => Me(v, a && a.suspense) : (v.pre = !0, a && (v.id = a.uid), I = () => Zr(v));
  const P = new Os(c, I);
  ({}).NODE_ENV !== "production" && (P.onTrack = s, P.onTrigger = i), t ? n ? v() : E = P.run() : o === "post" ? Me(P.run.bind(P), a && a.suspense) : P.run();
  const k = () => {
    P.stop(), a && a.scope && _s(a.scope.effects, P);
  };
  return m && m.push(k), k;
}
function af(e, t, n) {
  const r = this.proxy, o = ge(e) ? e.includes(".") ? ca(r, e) : () => r[e] : e.bind(r, r);
  let s;
  B(t) ? s = t : (s = t.handler, n = t);
  const i = Oe;
  In(this);
  const l = aa(o, s.bind(r), n);
  return i ? In(i) : ln(), l;
}
function ca(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function Zt(e, t) {
  if (!ie(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), _e(e))
    Zt(e.value, t);
  else if (U(e))
    for (let n = 0; n < e.length; n++)
      Zt(e[n], t);
  else if (wl(e) || en(e))
    e.forEach((n) => {
      Zt(n, t);
    });
  else if (Cl(e))
    for (const n in e)
      Zt(e[n], t);
  return e;
}
function cf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Is(() => {
    e.isMounted = !0;
  }), Rs(() => {
    e.isUnmounting = !0;
  }), e;
}
const Je = [Function, Array], uf = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Je,
    onEnter: Je,
    onAfterEnter: Je,
    onEnterCancelled: Je,
    onBeforeLeave: Je,
    onLeave: Je,
    onAfterLeave: Je,
    onLeaveCancelled: Je,
    onBeforeAppear: Je,
    onAppear: Je,
    onAfterAppear: Je,
    onAppearCancelled: Je
  },
  setup(e, { slots: t }) {
    const n = cr(), r = cf();
    let o;
    return () => {
      const s = t.default && fa(t.default(), !0);
      if (!s || !s.length)
        return;
      let i = s[0];
      if (s.length > 1) {
        let E = !1;
        for (const v of s)
          if (v.type !== Ce) {
            if ({}.NODE_ENV !== "production" && E) {
              A("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = v, E = !0, {}.NODE_ENV === "production")
              break;
          }
      }
      const l = G(e), { mode: a } = l;
      if ({}.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && A(`invalid <transition> mode: ${a}`), r.isLeaving)
        return Eo(i);
      const c = di(i);
      if (!c)
        return Eo(i);
      const f = Uo(c, l, r, n);
      jo(c, f);
      const u = n.subTree, p = u && di(u);
      let g = !1;
      const { getTransitionKey: m } = c.type;
      if (m) {
        const E = m();
        o === void 0 ? o = E : E !== o && (o = E, g = !0);
      }
      if (p && p.type !== Ce && (!Jt(c, p) || g)) {
        const E = Uo(p, l, r, n);
        if (jo(p, E), a === "out-in")
          return r.isLeaving = !0, E.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && n.update();
          }, Eo(i);
        a === "in-out" && c.type !== Ce && (E.delayLeave = (v, I, P) => {
          const k = ua(r, p);
          k[String(p.key)] = p, v._leaveCb = () => {
            I(), v._leaveCb = void 0, delete f.delayedLeave;
          }, f.delayedLeave = P;
        });
      }
      return i;
    };
  }
}, ff = uf;
function ua(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Uo(e, t, n, r) {
  const { appear: o, mode: s, persisted: i = !1, onBeforeEnter: l, onEnter: a, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: u, onLeave: p, onAfterLeave: g, onLeaveCancelled: m, onBeforeAppear: E, onAppear: v, onAfterAppear: I, onAppearCancelled: P } = t, k = String(e.key), S = ua(n, e), D = (M, H) => {
    M && Xe(M, r, 9, H);
  }, K = (M, H) => {
    const J = H[1];
    D(M, H), U(M) ? M.every((re) => re.length <= 1) && J() : M.length <= 1 && J();
  }, j = {
    mode: s,
    persisted: i,
    beforeEnter(M) {
      let H = l;
      if (!n.isMounted)
        if (o)
          H = E || l;
        else
          return;
      M._leaveCb && M._leaveCb(!0);
      const J = S[k];
      J && Jt(e, J) && J.el._leaveCb && J.el._leaveCb(), D(H, [M]);
    },
    enter(M) {
      let H = a, J = c, re = f;
      if (!n.isMounted)
        if (o)
          H = v || a, J = I || c, re = P || f;
        else
          return;
      let fe = !1;
      const ve = M._enterCb = (St) => {
        fe || (fe = !0, St ? D(re, [M]) : D(J, [M]), j.delayedLeave && j.delayedLeave(), M._enterCb = void 0);
      };
      H ? K(H, [M, ve]) : ve();
    },
    leave(M, H) {
      const J = String(e.key);
      if (M._enterCb && M._enterCb(!0), n.isUnmounting)
        return H();
      D(u, [M]);
      let re = !1;
      const fe = M._leaveCb = (ve) => {
        re || (re = !0, H(), ve ? D(m, [M]) : D(g, [M]), M._leaveCb = void 0, S[J] === e && delete S[J]);
      };
      S[J] = e, p ? K(p, [M, fe]) : fe();
    },
    clone(M) {
      return Uo(M, t, n, r);
    }
  };
  return j;
}
function Eo(e) {
  if (ar(e))
    return e = gt(e), e.children = null, e;
}
function di(e) {
  return ar(e) ? e.children ? e.children[0] : void 0 : e;
}
function jo(e, t) {
  e.shapeFlag & 6 && e.component ? jo(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function fa(e, t = !1, n) {
  let r = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === pe ? (i.patchFlag & 128 && o++, r = r.concat(fa(i.children, t, l))) : (t || i.type !== Ce) && r.push(l != null ? gt(i, { key: l }) : i);
  }
  if (o > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
const Dr = (e) => !!e.type.__asyncLoader, ar = (e) => e.type.__isKeepAlive;
function df(e, t) {
  da(e, "a", t);
}
function pf(e, t) {
  da(e, "da", t);
}
function da(e, t, n = Oe) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (to(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ar(o.parent.vnode) && mf(r, t, n, o), o = o.parent;
  }
}
function mf(e, t, n, r) {
  const o = to(t, e, r, !0);
  As(() => {
    _s(r[t], o);
  }, n);
}
function to(e, t, n = Oe, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      pn(), In(n);
      const l = Xe(t, n, e, i);
      return ln(), mn(), l;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if ({}.NODE_ENV !== "production") {
    const o = qt(Ts[e].replace(/ hook$/, ""));
    A(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const At = (e) => (t, n = Oe) => (!tr || e === "sp") && to(e, (...r) => t(...r), n), pa = At("bm"), Is = At("m"), hf = At("bu"), _f = At("u"), Rs = At("bum"), As = At("um"), gf = At("sp"), Ef = At("rtg"), bf = At("rtc");
function Nf(e, t = Oe) {
  to("ec", e, t);
}
function ma(e) {
  Gc(e) && A("Do not use built-in directive ids as custom directive id: " + e);
}
function Of(e, t) {
  const n = ke;
  if (n === null)
    return {}.NODE_ENV !== "production" && A("withDirectives can only be used inside render functions."), e;
  const r = ro(n) || n.proxy, o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, l, a, c = ce] = t[s];
    i && (B(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Zt(l), o.push({
      dir: i,
      instance: r,
      value: l,
      oldValue: void 0,
      arg: a,
      modifiers: c
    }));
  }
  return e;
}
function zt(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    s && (l.oldValue = s[i].value);
    let a = l.dir[r];
    a && (pn(), Xe(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), mn());
  }
}
const Bo = "components";
function Gt(e, t) {
  return vf(Bo, e, !0, t) || e;
}
const yf = Symbol();
function vf(e, t, n = !0, r = !1) {
  const o = ke || Oe;
  if (o) {
    const s = o.type;
    if (e === Bo) {
      const l = Vs(s, !1);
      if (l && (l === t || l === _t(t) || l === an(_t(t))))
        return s;
    }
    const i = pi(o[e] || s[e], t) || pi(o.appContext[e], t);
    if (!i && r)
      return s;
    if ({}.NODE_ENV !== "production" && n && !i) {
      const l = e === Bo ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      A(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else
    ({}).NODE_ENV !== "production" && A(`resolve${an(e.slice(0, -1))} can only be used in render() or setup().`);
}
function pi(e, t) {
  return e && (e[t] || e[_t(t)] || e[an(_t(t))]);
}
function Tn(e, t, n, r) {
  let o;
  const s = n && n[r];
  if (U(e) || ge(e)) {
    o = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      o[i] = t(e[i], i, void 0, s && s[i]);
  } else if (typeof e == "number") {
    ({}).NODE_ENV !== "production" && !Number.isInteger(e) && A(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let i = 0; i < e; i++)
      o[i] = t(i + 1, i, void 0, s && s[i]);
  } else if (ie(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (i, l) => t(i, l, void 0, s && s[l]));
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let l = 0, a = i.length; l < a; l++) {
        const c = i[l];
        o[l] = t(e[c], c, l, s && s[l]);
      }
    }
  else
    o = [];
  return n && (n[r] = o), o;
}
const Ho = (e) => e ? Ia(e) ? ro(e) || e.proxy : Ho(e.parent) : null, sn = /* @__PURE__ */ be(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => ({}).NODE_ENV !== "production" ? vn(e.props) : e.props,
  $attrs: (e) => ({}).NODE_ENV !== "production" ? vn(e.attrs) : e.attrs,
  $slots: (e) => ({}).NODE_ENV !== "production" ? vn(e.slots) : e.slots,
  $refs: (e) => ({}).NODE_ENV !== "production" ? vn(e.refs) : e.refs,
  $parent: (e) => Ho(e.parent),
  $root: (e) => Ho(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Ss(e),
  $forceUpdate: (e) => e.f || (e.f = () => Zr(e.update)),
  $nextTick: (e) => e.n || (e.n = Lo.bind(e.proxy)),
  $watch: (e) => af.bind(e)
}), $s = (e) => e === "_" || e === "$", bo = (e, t) => e !== ce && !e.__isScriptSetup && Q(e, t), ha = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: l, appContext: a } = e;
    if ({}.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const g = i[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (bo(r, t))
          return i[t] = 1, r[t];
        if (o !== ce && Q(o, t))
          return i[t] = 2, o[t];
        if ((c = e.propsOptions[0]) && Q(c, t))
          return i[t] = 3, s[t];
        if (n !== ce && Q(n, t))
          return i[t] = 4, n[t];
        Wo && (i[t] = 0);
      }
    }
    const f = sn[t];
    let u, p;
    if (f)
      return t === "$attrs" && (je(e, "get", t), {}.NODE_ENV !== "production" && Ur()), f(e);
    if ((u = l.__cssModules) && (u = u[t]))
      return u;
    if (n !== ce && Q(n, t))
      return i[t] = 4, n[t];
    if (p = a.config.globalProperties, Q(p, t))
      return p[t];
    ({}).NODE_ENV !== "production" && ke && (!ge(t) || t.indexOf("__v") !== 0) && (o !== ce && $s(t[0]) && Q(o, t) ? A(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === ke && A(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return bo(o, t) ? (o[t] = n, !0) : {}.NODE_ENV !== "production" && o.__isScriptSetup && Q(o, t) ? (A(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== ce && Q(r, t) ? (r[t] = n, !0) : Q(e.props, t) ? ({}.NODE_ENV !== "production" && A(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ({}.NODE_ENV !== "production" && A(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : ({}.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s } }, i) {
    let l;
    return !!n[i] || e !== ce && Q(e, i) || bo(t, i) || (l = s[0]) && Q(l, i) || Q(r, i) || Q(sn, i) || Q(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
({}).NODE_ENV !== "production" && (ha.ownKeys = (e) => (A("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Tf(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(sn).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => sn[n](e),
      set: we
    });
  }), t;
}
function wf(e) {
  const { ctx: t, propsOptions: [n] } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: we
    });
  });
}
function Df(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(G(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if ($s(r[0])) {
        A(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: we
      });
    }
  });
}
function Cf() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? A(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Wo = !0;
function If(e) {
  const t = Ss(e), n = e.proxy, r = e.ctx;
  Wo = !1, t.beforeCreate && mi(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: s,
    methods: i,
    watch: l,
    provide: a,
    inject: c,
    created: f,
    beforeMount: u,
    mounted: p,
    beforeUpdate: g,
    updated: m,
    activated: E,
    deactivated: v,
    beforeDestroy: I,
    beforeUnmount: P,
    destroyed: k,
    unmounted: S,
    render: D,
    renderTracked: K,
    renderTriggered: j,
    errorCaptured: M,
    serverPrefetch: H,
    expose: J,
    inheritAttrs: re,
    components: fe,
    directives: ve,
    filters: St
  } = t, Ye = {}.NODE_ENV !== "production" ? Cf() : null;
  if ({}.NODE_ENV !== "production") {
    const [X] = e.propsOptions;
    if (X)
      for (const W in X)
        Ye("Props", W);
  }
  if (c && Rf(c, r, Ye, e.appContext.config.unwrapInjectedRef), i)
    for (const X in i) {
      const W = i[X];
      B(W) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(r, X, {
        value: W.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[X] = W.bind(n), {}.NODE_ENV !== "production" && Ye("Methods", X)) : {}.NODE_ENV !== "production" && A(`Method "${X}" has type "${typeof W}" in the component definition. Did you reference the function correctly?`);
    }
  if (o) {
    ({}).NODE_ENV !== "production" && !B(o) && A("The data option must be a function. Plain object usage is no longer supported.");
    const X = o.call(n, n);
    if ({}.NODE_ENV !== "production" && Es(X) && A("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !ie(X))
      ({}).NODE_ENV !== "production" && A("data() should return an object.");
    else if (e.data = hn(X), {}.NODE_ENV !== "production")
      for (const W in X)
        Ye("Data", W), $s(W[0]) || Object.defineProperty(r, W, {
          configurable: !0,
          enumerable: !0,
          get: () => X[W],
          set: we
        });
  }
  if (Wo = !0, s)
    for (const X in s) {
      const W = s[X], Se = B(W) ? W.bind(n, n) : B(W.get) ? W.get.bind(n, n) : we;
      ({}).NODE_ENV !== "production" && Se === we && A(`Computed property "${X}" has no getter.`);
      const ue = !B(W) && B(W.set) ? W.set.bind(n) : {}.NODE_ENV !== "production" ? () => {
        A(`Write operation failed: computed property "${X}" is readonly.`);
      } : we, xe = se({
        get: Se,
        set: ue
      });
      Object.defineProperty(r, X, {
        enumerable: !0,
        configurable: !0,
        get: () => xe.value,
        set: (Te) => xe.value = Te
      }), {}.NODE_ENV !== "production" && Ye("Computed", X);
    }
  if (l)
    for (const X in l)
      _a(l[X], r, n, X);
  if (a) {
    const X = B(a) ? a.call(n) : a;
    Reflect.ownKeys(X).forEach((W) => {
      Mo(W, X[W]);
    });
  }
  f && mi(f, e, "c");
  function Ne(X, W) {
    U(W) ? W.forEach((Se) => X(Se.bind(n))) : W && X(W.bind(n));
  }
  if (Ne(pa, u), Ne(Is, p), Ne(hf, g), Ne(_f, m), Ne(df, E), Ne(pf, v), Ne(Nf, M), Ne(bf, K), Ne(Ef, j), Ne(Rs, P), Ne(As, S), Ne(gf, H), U(J))
    if (J.length) {
      const X = e.exposed || (e.exposed = {});
      J.forEach((W) => {
        Object.defineProperty(X, W, {
          get: () => n[W],
          set: (Se) => n[W] = Se
        });
      });
    } else
      e.exposed || (e.exposed = {});
  D && e.render === we && (e.render = D), re != null && (e.inheritAttrs = re), fe && (e.components = fe), ve && (e.directives = ve);
}
function Rf(e, t, n = we, r = !1) {
  U(e) && (e = zo(e));
  for (const o in e) {
    const s = e[o];
    let i;
    ie(s) ? "default" in s ? i = on(s.from || o, s.default, !0) : i = on(s.from || o) : i = on(s), _e(i) ? r ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : ({}.NODE_ENV !== "production" && A(`injected property "${o}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[o] = i) : t[o] = i, {}.NODE_ENV !== "production" && n("Inject", o);
  }
}
function mi(e, t, n) {
  Xe(U(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function _a(e, t, n, r) {
  const o = r.includes(".") ? ca(n, r) : () => n[r];
  if (ge(e)) {
    const s = t[e];
    B(s) ? ot(o, s) : {}.NODE_ENV !== "production" && A(`Invalid watch handler specified by key "${e}"`, s);
  } else if (B(e))
    ot(o, e.bind(n));
  else if (ie(e))
    if (U(e))
      e.forEach((s) => _a(s, t, n, r));
    else {
      const s = B(e.handler) ? e.handler.bind(n) : t[e.handler];
      B(s) ? ot(o, s, e) : {}.NODE_ENV !== "production" && A(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    ({}).NODE_ENV !== "production" && A(`Invalid watch option: "${r}"`, e);
}
function Ss(e) {
  const t = e.type, { mixins: n, extends: r } = t, { mixins: o, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !o.length && !n && !r ? a = t : (a = {}, o.length && o.forEach((c) => jr(a, c, i, !0)), jr(a, t, i)), ie(t) && s.set(t, a), a;
}
function jr(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && jr(e, s, n, !0), o && o.forEach((i) => jr(e, i, n, !0));
  for (const i in t)
    if (r && i === "expose")
      ({}).NODE_ENV !== "production" && A('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = Af[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Af = {
  data: hi,
  props: Yt,
  emits: Yt,
  methods: Yt,
  computed: Yt,
  beforeCreate: Ve,
  created: Ve,
  beforeMount: Ve,
  mounted: Ve,
  beforeUpdate: Ve,
  updated: Ve,
  beforeDestroy: Ve,
  beforeUnmount: Ve,
  destroyed: Ve,
  unmounted: Ve,
  activated: Ve,
  deactivated: Ve,
  errorCaptured: Ve,
  serverPrefetch: Ve,
  components: Yt,
  directives: Yt,
  watch: Sf,
  provide: hi,
  inject: $f
};
function hi(e, t) {
  return t ? e ? function() {
    return be(B(e) ? e.call(this, this) : e, B(t) ? t.call(this, this) : t);
  } : t : e;
}
function $f(e, t) {
  return Yt(zo(e), zo(t));
}
function zo(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Yt(e, t) {
  return e ? be(be(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Sf(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = be(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ve(e[r], t[r]);
  return n;
}
function xf(e, t, n, r = !1) {
  const o = {}, s = {};
  kr(s, no, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ga(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  ({}).NODE_ENV !== "production" && ba(t || {}, o, e), n ? e.props = r ? o : wu(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Pf(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Vf(e, t, n, r) {
  const { props: o, attrs: s, vnode: { patchFlag: i } } = e, l = G(o), [a] = e.propsOptions;
  let c = !1;
  if (!({}.NODE_ENV !== "production" && Pf(e)) && (r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        let p = f[u];
        if (eo(e.emitsOptions, p))
          continue;
        const g = t[p];
        if (a)
          if (Q(s, p))
            g !== s[p] && (s[p] = g, c = !0);
          else {
            const m = _t(p);
            o[m] = Ko(a, l, m, g, e, !1);
          }
        else
          g !== s[p] && (s[p] = g, c = !0);
      }
    }
  } else {
    ga(e, t, o, s) && (c = !0);
    let f;
    for (const u in l)
      (!t || !Q(t, u) && ((f = Ct(u)) === u || !Q(t, f))) && (a ? n && (n[u] !== void 0 || n[f] !== void 0) && (o[u] = Ko(a, l, u, void 0, e, !0)) : delete o[u]);
    if (s !== l)
      for (const u in s)
        (!t || !Q(t, u) && !0) && (delete s[u], c = !0);
  }
  c && It(e, "set", "$attrs"), {}.NODE_ENV !== "production" && ba(t || {}, o, e);
}
function ga(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (vr(a))
        continue;
      const c = t[a];
      let f;
      o && Q(o, f = _t(a)) ? !s || !s.includes(f) ? n[f] = c : (l || (l = {}))[f] = c : eo(e.emitsOptions, a) || (!(a in r) || c !== r[a]) && (r[a] = c, i = !0);
    }
  if (s) {
    const a = G(n), c = l || ce;
    for (let f = 0; f < s.length; f++) {
      const u = s[f];
      n[u] = Ko(o, a, u, c[u], e, !Q(c, u));
    }
  }
  return i;
}
function Ko(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const l = Q(i, "default");
    if (l && r === void 0) {
      const a = i.default;
      if (i.type !== Function && B(a)) {
        const { propsDefaults: c } = o;
        n in c ? r = c[n] : (In(o), r = c[n] = a.call(null, t), ln());
      } else
        r = a;
    }
    i[0] && (s && !l ? r = !1 : i[1] && (r === "" || r === Ct(n)) && (r = !0));
  }
  return r;
}
function Ea(e, t, n = !1) {
  const r = t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, l = [];
  let a = !1;
  if (!B(e)) {
    const f = (u) => {
      a = !0;
      const [p, g] = Ea(u, t, !0);
      be(i, p), g && l.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!s && !a)
    return ie(e) && r.set(e, Dn), Dn;
  if (U(s))
    for (let f = 0; f < s.length; f++) {
      ({}).NODE_ENV !== "production" && !ge(s[f]) && A("props must be strings when using array syntax.", s[f]);
      const u = _t(s[f]);
      _i(u) && (i[u] = ce);
    }
  else if (s) {
    ({}).NODE_ENV !== "production" && !ie(s) && A("invalid props options", s);
    for (const f in s) {
      const u = _t(f);
      if (_i(u)) {
        const p = s[f], g = i[u] = U(p) || B(p) ? { type: p } : Object.assign({}, p);
        if (g) {
          const m = Ei(Boolean, g.type), E = Ei(String, g.type);
          g[0] = m > -1, g[1] = E < 0 || m < E, (m > -1 || Q(g, "default")) && l.push(u);
        }
      }
    }
  }
  const c = [i, l];
  return ie(e) && r.set(e, c), c;
}
function _i(e) {
  return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && A(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function qo(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : e === null ? "null" : "";
}
function gi(e, t) {
  return qo(e) === qo(t);
}
function Ei(e, t) {
  return U(t) ? t.findIndex((n) => gi(n, e)) : B(t) && gi(t, e) ? 0 : -1;
}
function ba(e, t, n) {
  const r = G(t), o = n.propsOptions[0];
  for (const s in o) {
    let i = o[s];
    i != null && Lf(s, r[s], i, !Q(e, s) && !Q(e, Ct(s)));
  }
}
function Lf(e, t, n, r) {
  const { type: o, required: s, validator: i } = n;
  if (s && r) {
    A('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !n.required)) {
    if (o != null && o !== !0) {
      let l = !1;
      const a = U(o) ? o : [o], c = [];
      for (let f = 0; f < a.length && !l; f++) {
        const { valid: u, expectedType: p } = Ff(t, a[f]);
        c.push(p || ""), l = u;
      }
      if (!l) {
        A(Mf(e, t, c));
        return;
      }
    }
    i && !i(t) && A('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const kf = /* @__PURE__ */ Bt("String,Number,Boolean,Function,Symbol,BigInt");
function Ff(e, t) {
  let n;
  const r = qo(t);
  if (kf(r)) {
    const o = typeof e;
    n = o === r.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else
    r === "Object" ? n = ie(e) : r === "Array" ? n = U(e) : r === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function Mf(e, t, n) {
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(an).join(" | ")}`;
  const o = n[0], s = bs(t), i = bi(t, o), l = bi(t, s);
  return n.length === 1 && Ni(o) && !Uf(o, s) && (r += ` with value ${i}`), r += `, got ${s} `, Ni(s) && (r += `with value ${l}.`), r;
}
function bi(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ni(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Uf(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Na = (e) => e[0] === "_" || e === "$stable", xs = (e) => U(e) ? e.map(tt) : [tt(e)], jf = (e, t, n) => {
  if (t._n)
    return t;
  const r = Zu((...o) => ({}.NODE_ENV !== "production" && Oe && A(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), xs(t(...o))), n);
  return r._c = !1, r;
}, Oa = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Na(o))
      continue;
    const s = e[o];
    if (B(s))
      t[o] = jf(o, s, r);
    else if (s != null) {
      ({}).NODE_ENV !== "production" && A(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);
      const i = xs(s);
      t[o] = () => i;
    }
  }
}, ya = (e, t) => {
  ({}).NODE_ENV !== "production" && !ar(e.vnode) && A("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = xs(t);
  e.slots.default = () => n;
}, Bf = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = G(t), kr(t, "_", n)) : Oa(t, e.slots = {});
  } else
    e.slots = {}, t && ya(e, t);
  kr(e.slots, no, 1);
}, Hf = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = ce;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? {}.NODE_ENV !== "production" && rn ? be(o, t) : n && l === 1 ? s = !1 : (be(o, t), !n && l === 1 && delete o._) : (s = !t.$stable, Oa(t, o)), i = t;
  } else
    t && (ya(e, t), i = { default: 1 });
  if (s)
    for (const l in o)
      !Na(l) && !(l in i) && delete o[l];
};
function va() {
  return {
    app: null,
    config: {
      isNativeTag: Tl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Wf = 0;
function zf(e, t) {
  return function(r, o = null) {
    B(r) || (r = Object.assign({}, r)), o != null && !ie(o) && ({}.NODE_ENV !== "production" && A("root props passed to app.mount() must be an object."), o = null);
    const s = va(), i = /* @__PURE__ */ new Set();
    let l = !1;
    const a = s.app = {
      _uid: Wf++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Ti,
      get config() {
        return s.config;
      },
      set config(c) {
        ({}).NODE_ENV !== "production" && A("app.config cannot be replaced. Modify individual options instead.");
      },
      use(c, ...f) {
        return i.has(c) ? {}.NODE_ENV !== "production" && A("Plugin has already been applied to target app.") : c && B(c.install) ? (i.add(c), c.install(a, ...f)) : B(c) ? (i.add(c), c(a, ...f)) : {}.NODE_ENV !== "production" && A('A plugin must either be a function or an object with an "install" function.'), a;
      },
      mixin(c) {
        return s.mixins.includes(c) ? {}.NODE_ENV !== "production" && A("Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")) : s.mixins.push(c), a;
      },
      component(c, f) {
        return {}.NODE_ENV !== "production" && Yo(c, s.config), f ? ({}.NODE_ENV !== "production" && s.components[c] && A(`Component "${c}" has already been registered in target app.`), s.components[c] = f, a) : s.components[c];
      },
      directive(c, f) {
        return {}.NODE_ENV !== "production" && ma(c), f ? ({}.NODE_ENV !== "production" && s.directives[c] && A(`Directive "${c}" has already been registered in target app.`), s.directives[c] = f, a) : s.directives[c];
      },
      mount(c, f, u) {
        if (l)
          ({}).NODE_ENV !== "production" && A("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          ({}).NODE_ENV !== "production" && c.__vue_app__ && A("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const p = De(r, o);
          return p.appContext = s, {}.NODE_ENV !== "production" && (s.reload = () => {
            e(gt(p), c, u);
          }), f && t ? t(p, c) : e(p, c, u), l = !0, a._container = c, c.__vue_app__ = a, {}.NODE_ENV !== "production" && (a._instance = p.component, Wu(a, Ti)), ro(p.component) || p.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, a._container), {}.NODE_ENV !== "production" && (a._instance = null, zu(a)), delete a._container.__vue_app__) : {}.NODE_ENV !== "production" && A("Cannot unmount an app that is not mounted.");
      },
      provide(c, f) {
        return {}.NODE_ENV !== "production" && c in s.provides && A(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`), s.provides[c] = f, a;
      }
    };
    return a;
  };
}
function Go(e, t, n, r, o = !1) {
  if (U(e)) {
    e.forEach((p, g) => Go(p, t && (U(t) ? t[g] : t), n, r, o));
    return;
  }
  if (Dr(r) && !o)
    return;
  const s = r.shapeFlag & 4 ? ro(r.component) || r.component.proxy : r.el, i = o ? null : s, { i: l, r: a } = e;
  if ({}.NODE_ENV !== "production" && !l) {
    A("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const c = t && t.r, f = l.refs === ce ? l.refs = {} : l.refs, u = l.setupState;
  if (c != null && c !== a && (ge(c) ? (f[c] = null, Q(u, c) && (u[c] = null)) : _e(c) && (c.value = null)), B(a))
    wt(a, l, 12, [i, f]);
  else {
    const p = ge(a), g = _e(a);
    if (p || g) {
      const m = () => {
        if (e.f) {
          const E = p ? Q(u, a) ? u[a] : f[a] : a.value;
          o ? U(E) && _s(E, s) : U(E) ? E.includes(s) || E.push(s) : p ? (f[a] = [s], Q(u, a) && (u[a] = f[a])) : (a.value = [s], e.k && (f[e.k] = a.value));
        } else
          p ? (f[a] = i, Q(u, a) && (u[a] = i)) : g ? (a.value = i, e.k && (f[e.k] = i)) : {}.NODE_ENV !== "production" && A("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (m.id = -1, Me(m, n)) : m();
    } else
      ({}).NODE_ENV !== "production" && A("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let kn, Ft;
function Nt(e, t) {
  e.appContext.config.performance && Br() && Ft.mark(`vue-${t}-${e.uid}`), {}.NODE_ENV !== "production" && Yu(e, t, Br() ? Ft.now() : Date.now());
}
function Ot(e, t) {
  if (e.appContext.config.performance && Br()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    Ft.mark(r), Ft.measure(`<${oo(e, e.type)}> ${t}`, n, r), Ft.clearMarks(n), Ft.clearMarks(r);
  }
  ({}).NODE_ENV !== "production" && Ju(e, t, Br() ? Ft.now() : Date.now());
}
function Br() {
  return kn !== void 0 || (typeof window < "u" && window.performance ? (kn = !0, Ft = window.performance) : kn = !1), kn;
}
function Kf() {
  const e = [];
  if ({}.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const Me = lf;
function qf(e) {
  return Gf(e);
}
function Gf(e, t) {
  Kf();
  const n = Rl();
  n.__VUE__ = !0, {}.NODE_ENV !== "production" && na(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: r, remove: o, patchProp: s, createElement: i, createText: l, createComment: a, setText: c, setElementText: f, parentNode: u, nextSibling: p, setScopeId: g = we, insertStaticContent: m } = e, E = (d, h, N, w = null, T = null, R = null, x = !1, C = null, $ = {}.NODE_ENV !== "production" && rn ? !1 : !!h.dynamicChildren) => {
    if (d === h)
      return;
    d && !Jt(d, h) && (w = gn(d), st(d, T, R, !0), d = null), h.patchFlag === -2 && ($ = !1, h.dynamicChildren = null);
    const { type: O, ref: _, shapeFlag: b } = h;
    switch (O) {
      case $n:
        v(d, h, N, w);
        break;
      case Ce:
        I(d, h, N, w);
        break;
      case Ir:
        d == null ? P(h, N, w, x) : {}.NODE_ENV !== "production" && k(d, h, N, x);
        break;
      case pe:
        ve(d, h, N, w, T, R, x, C, $);
        break;
      default:
        b & 1 ? K(d, h, N, w, T, R, x, C, $) : b & 6 ? St(d, h, N, w, T, R, x, C, $) : b & 64 || b & 128 ? O.process(d, h, N, w, T, R, x, C, $, xt) : {}.NODE_ENV !== "production" && A("Invalid VNode type:", O, `(${typeof O})`);
    }
    _ != null && T && Go(_, d && d.ref, R, h || d, !h);
  }, v = (d, h, N, w) => {
    if (d == null)
      r(h.el = l(h.children), N, w);
    else {
      const T = h.el = d.el;
      h.children !== d.children && c(T, h.children);
    }
  }, I = (d, h, N, w) => {
    d == null ? r(h.el = a(h.children || ""), N, w) : h.el = d.el;
  }, P = (d, h, N, w) => {
    [d.el, d.anchor] = m(d.children, h, N, w, d.el, d.anchor);
  }, k = (d, h, N, w) => {
    if (h.children !== d.children) {
      const T = p(d.anchor);
      D(d), [h.el, h.anchor] = m(h.children, N, T, w);
    } else
      h.el = d.el, h.anchor = d.anchor;
  }, S = ({ el: d, anchor: h }, N, w) => {
    let T;
    for (; d && d !== h; )
      T = p(d), r(d, N, w), d = T;
    r(h, N, w);
  }, D = ({ el: d, anchor: h }) => {
    let N;
    for (; d && d !== h; )
      N = p(d), o(d), d = N;
    o(h);
  }, K = (d, h, N, w, T, R, x, C, $) => {
    x = x || h.type === "svg", d == null ? j(h, N, w, T, R, x, C, $) : J(d, h, T, R, x, C, $);
  }, j = (d, h, N, w, T, R, x, C) => {
    let $, O;
    const { type: _, props: b, shapeFlag: V, transition: F, dirs: Y } = d;
    if ($ = d.el = i(d.type, R, b && b.is, b), V & 8 ? f($, d.children) : V & 16 && H(d.children, $, null, w, T, R && _ !== "foreignObject", x, C), Y && zt(d, null, w, "created"), b) {
      for (const ee in b)
        ee !== "value" && !vr(ee) && s($, ee, null, b[ee], R, d.children, w, T, Qe);
      "value" in b && s($, "value", null, b.value), (O = b.onVnodeBeforeMount) && lt(O, w, d);
    }
    M($, d, d.scopeId, x, w), {}.NODE_ENV !== "production" && (Object.defineProperty($, "__vnode", {
      value: d,
      enumerable: !1
    }), Object.defineProperty($, "__vueParentComponent", {
      value: w,
      enumerable: !1
    })), Y && zt(d, null, w, "beforeMount");
    const ne = (!T || T && !T.pendingBranch) && F && !F.persisted;
    ne && F.beforeEnter($), r($, h, N), ((O = b && b.onVnodeMounted) || ne || Y) && Me(() => {
      O && lt(O, w, d), ne && F.enter($), Y && zt(d, null, w, "mounted");
    }, T);
  }, M = (d, h, N, w, T) => {
    if (N && g(d, N), w)
      for (let R = 0; R < w.length; R++)
        g(d, w[R]);
    if (T) {
      let R = T.subTree;
      if ({}.NODE_ENV !== "production" && R.patchFlag > 0 && R.patchFlag & 2048 && (R = la(R.children) || R), h === R) {
        const x = T.vnode;
        M(d, x, x.scopeId, x.slotScopeIds, T.parent);
      }
    }
  }, H = (d, h, N, w, T, R, x, C, $ = 0) => {
    for (let O = $; O < d.length; O++) {
      const _ = d[O] = C ? kt(d[O]) : tt(d[O]);
      E(null, _, h, N, w, T, R, x, C);
    }
  }, J = (d, h, N, w, T, R, x) => {
    const C = h.el = d.el;
    let { patchFlag: $, dynamicChildren: O, dirs: _ } = h;
    $ |= d.patchFlag & 16;
    const b = d.props || ce, V = h.props || ce;
    let F;
    N && Kt(N, !1), (F = V.onVnodeBeforeUpdate) && lt(F, N, h, d), _ && zt(h, d, N, "beforeUpdate"), N && Kt(N, !0), {}.NODE_ENV !== "production" && rn && ($ = 0, x = !1, O = null);
    const Y = T && h.type !== "foreignObject";
    if (O ? (re(d.dynamicChildren, O, C, N, w, Y, R), {}.NODE_ENV !== "production" && N && N.type.__hmrId && Cr(d, h)) : x || Se(d, h, C, null, N, w, Y, R, !1), $ > 0) {
      if ($ & 16)
        fe(C, h, b, V, N, w, T);
      else if ($ & 2 && b.class !== V.class && s(C, "class", null, V.class, T), $ & 4 && s(C, "style", b.style, V.style, T), $ & 8) {
        const ne = h.dynamicProps;
        for (let ee = 0; ee < ne.length; ee++) {
          const le = ne[ee], Be = b[le], bt = V[le];
          (bt !== Be || le === "value") && s(C, le, Be, bt, T, d.children, N, w, Qe);
        }
      }
      $ & 1 && d.children !== h.children && f(C, h.children);
    } else
      !x && O == null && fe(C, h, b, V, N, w, T);
    ((F = V.onVnodeUpdated) || _) && Me(() => {
      F && lt(F, N, h, d), _ && zt(h, d, N, "updated");
    }, w);
  }, re = (d, h, N, w, T, R, x) => {
    for (let C = 0; C < h.length; C++) {
      const $ = d[C], O = h[C], _ = $.el && ($.type === pe || !Jt($, O) || $.shapeFlag & 70) ? u($.el) : N;
      E($, O, _, null, w, T, R, x, !0);
    }
  }, fe = (d, h, N, w, T, R, x) => {
    if (N !== w) {
      if (N !== ce)
        for (const C in N)
          !vr(C) && !(C in w) && s(d, C, N[C], null, x, h.children, T, R, Qe);
      for (const C in w) {
        if (vr(C))
          continue;
        const $ = w[C], O = N[C];
        $ !== O && C !== "value" && s(d, C, O, $, x, h.children, T, R, Qe);
      }
      "value" in w && s(d, "value", N.value, w.value);
    }
  }, ve = (d, h, N, w, T, R, x, C, $) => {
    const O = h.el = d ? d.el : l(""), _ = h.anchor = d ? d.anchor : l("");
    let { patchFlag: b, dynamicChildren: V, slotScopeIds: F } = h;
    ({}).NODE_ENV !== "production" && (rn || b & 2048) && (b = 0, $ = !1, V = null), F && (C = C ? C.concat(F) : F), d == null ? (r(O, N, w), r(_, N, w), H(h.children, N, _, T, R, x, C, $)) : b > 0 && b & 64 && V && d.dynamicChildren ? (re(d.dynamicChildren, V, N, T, R, x, C), {}.NODE_ENV !== "production" && T && T.type.__hmrId ? Cr(d, h) : (h.key != null || T && h === T.subTree) && Cr(d, h, !0)) : Se(d, h, N, _, T, R, x, C, $);
  }, St = (d, h, N, w, T, R, x, C, $) => {
    h.slotScopeIds = C, d == null ? h.shapeFlag & 512 ? T.ctx.activate(h, N, w, x, $) : Ye(h, N, w, T, R, x, $) : Ne(d, h, $);
  }, Ye = (d, h, N, w, T, R, x) => {
    const C = d.component = rd(d, w, T);
    if ({}.NODE_ENV !== "production" && C.type.__hmrId && Uu(C), {}.NODE_ENV !== "production" && (Tr(d), Nt(C, "mount")), ar(d) && (C.ctx.renderer = xt), {}.NODE_ENV !== "production" && Nt(C, "init"), sd(C), {}.NODE_ENV !== "production" && Ot(C, "init"), C.asyncDep) {
      if (T && T.registerDep(C, X), !d.el) {
        const $ = C.subTree = De(Ce);
        I(null, $, h, N);
      }
      return;
    }
    X(C, d, h, N, T, R, x), {}.NODE_ENV !== "production" && (wr(), Ot(C, "mount"));
  }, Ne = (d, h, N) => {
    const w = h.component = d.component;
    if (rf(d, h, N))
      if (w.asyncDep && !w.asyncResolved) {
        ({}).NODE_ENV !== "production" && Tr(h), W(w, h, N), {}.NODE_ENV !== "production" && wr();
        return;
      } else
        w.next = h, Fu(w.update), w.update();
    else
      h.el = d.el, w.vnode = h;
  }, X = (d, h, N, w, T, R, x) => {
    const C = () => {
      if (d.isMounted) {
        let { next: _, bu: b, u: V, parent: F, vnode: Y } = d, ne = _, ee;
        ({}).NODE_ENV !== "production" && Tr(_ || d.vnode), Kt(d, !1), _ ? (_.el = Y.el, W(d, _, x)) : _ = Y, b && Ln(b), (ee = _.props && _.props.onVnodeBeforeUpdate) && lt(ee, F, _, Y), Kt(d, !0), {}.NODE_ENV !== "production" && Nt(d, "render");
        const le = go(d);
        ({}).NODE_ENV !== "production" && Ot(d, "render");
        const Be = d.subTree;
        d.subTree = le, {}.NODE_ENV !== "production" && Nt(d, "patch"), E(
          Be,
          le,
          u(Be.el),
          gn(Be),
          d,
          T,
          R
        ), {}.NODE_ENV !== "production" && Ot(d, "patch"), _.el = le.el, ne === null && of(d, le.el), V && Me(V, T), (ee = _.props && _.props.onVnodeUpdated) && Me(() => lt(ee, F, _, Y), T), {}.NODE_ENV !== "production" && ra(d), {}.NODE_ENV !== "production" && wr();
      } else {
        let _;
        const { el: b, props: V } = h, { bm: F, m: Y, parent: ne } = d, ee = Dr(h);
        if (Kt(d, !1), F && Ln(F), !ee && (_ = V && V.onVnodeBeforeMount) && lt(_, ne, h), Kt(d, !0), b && Pn) {
          const le = () => {
            ({}).NODE_ENV !== "production" && Nt(d, "render"), d.subTree = go(d), {}.NODE_ENV !== "production" && Ot(d, "render"), {}.NODE_ENV !== "production" && Nt(d, "hydrate"), Pn(b, d.subTree, d, T, null), {}.NODE_ENV !== "production" && Ot(d, "hydrate");
          };
          ee ? h.type.__asyncLoader().then(
            () => !d.isUnmounted && le()
          ) : le();
        } else {
          ({}).NODE_ENV !== "production" && Nt(d, "render");
          const le = d.subTree = go(d);
          ({}).NODE_ENV !== "production" && Ot(d, "render"), {}.NODE_ENV !== "production" && Nt(d, "patch"), E(null, le, N, w, d, T, R), {}.NODE_ENV !== "production" && Ot(d, "patch"), h.el = le.el;
        }
        if (Y && Me(Y, T), !ee && (_ = V && V.onVnodeMounted)) {
          const le = h;
          Me(() => lt(_, ne, le), T);
        }
        (h.shapeFlag & 256 || ne && Dr(ne.vnode) && ne.vnode.shapeFlag & 256) && d.a && Me(d.a, T), d.isMounted = !0, {}.NODE_ENV !== "production" && Ku(d), h = N = w = null;
      }
    }, $ = d.effect = new Os(
      C,
      () => Zr(O),
      d.scope
    ), O = d.update = () => $.run();
    O.id = d.uid, Kt(d, !0), {}.NODE_ENV !== "production" && ($.onTrack = d.rtc ? (_) => Ln(d.rtc, _) : void 0, $.onTrigger = d.rtg ? (_) => Ln(d.rtg, _) : void 0, O.ownerInstance = d), O();
  }, W = (d, h, N) => {
    h.component = d;
    const w = d.vnode.props;
    d.vnode = h, d.next = null, Vf(d, h.props, w, N), Hf(d, h.children, N), pn(), ai(), mn();
  }, Se = (d, h, N, w, T, R, x, C, $ = !1) => {
    const O = d && d.children, _ = d ? d.shapeFlag : 0, b = h.children, { patchFlag: V, shapeFlag: F } = h;
    if (V > 0) {
      if (V & 128) {
        xe(O, b, N, w, T, R, x, C, $);
        return;
      } else if (V & 256) {
        ue(O, b, N, w, T, R, x, C, $);
        return;
      }
    }
    F & 8 ? (_ & 16 && Qe(O, T, R), b !== O && f(N, b)) : _ & 16 ? F & 16 ? xe(O, b, N, w, T, R, x, C, $) : Qe(O, T, R, !0) : (_ & 8 && f(N, ""), F & 16 && H(b, N, w, T, R, x, C, $));
  }, ue = (d, h, N, w, T, R, x, C, $) => {
    d = d || Dn, h = h || Dn;
    const O = d.length, _ = h.length, b = Math.min(O, _);
    let V;
    for (V = 0; V < b; V++) {
      const F = h[V] = $ ? kt(h[V]) : tt(h[V]);
      E(d[V], F, N, null, T, R, x, C, $);
    }
    O > _ ? Qe(d, T, R, !0, !1, b) : H(h, N, w, T, R, x, C, $, b);
  }, xe = (d, h, N, w, T, R, x, C, $) => {
    let O = 0;
    const _ = h.length;
    let b = d.length - 1, V = _ - 1;
    for (; O <= b && O <= V; ) {
      const F = d[O], Y = h[O] = $ ? kt(h[O]) : tt(h[O]);
      if (Jt(F, Y))
        E(F, Y, N, null, T, R, x, C, $);
      else
        break;
      O++;
    }
    for (; O <= b && O <= V; ) {
      const F = d[b], Y = h[V] = $ ? kt(h[V]) : tt(h[V]);
      if (Jt(F, Y))
        E(F, Y, N, null, T, R, x, C, $);
      else
        break;
      b--, V--;
    }
    if (O > b) {
      if (O <= V) {
        const F = V + 1, Y = F < _ ? h[F].el : w;
        for (; O <= V; )
          E(null, h[O] = $ ? kt(h[O]) : tt(h[O]), N, Y, T, R, x, C, $), O++;
      }
    } else if (O > V)
      for (; O <= b; )
        st(d[O], T, R, !0), O++;
    else {
      const F = O, Y = O, ne = /* @__PURE__ */ new Map();
      for (O = Y; O <= V; O++) {
        const Pe = h[O] = $ ? kt(h[O]) : tt(h[O]);
        Pe.key != null && ({}.NODE_ENV !== "production" && ne.has(Pe.key) && A("Duplicate keys found during update:", JSON.stringify(Pe.key), "Make sure keys are unique."), ne.set(Pe.key, O));
      }
      let ee, le = 0;
      const Be = V - Y + 1;
      let bt = !1, Xs = 0;
      const Vn = new Array(Be);
      for (O = 0; O < Be; O++)
        Vn[O] = 0;
      for (O = F; O <= b; O++) {
        const Pe = d[O];
        if (le >= Be) {
          st(Pe, T, R, !0);
          continue;
        }
        let it;
        if (Pe.key != null)
          it = ne.get(Pe.key);
        else
          for (ee = Y; ee <= V; ee++)
            if (Vn[ee - Y] === 0 && Jt(Pe, h[ee])) {
              it = ee;
              break;
            }
        it === void 0 ? st(Pe, T, R, !0) : (Vn[it - Y] = O + 1, it >= Xs ? Xs = it : bt = !0, E(Pe, h[it], N, null, T, R, x, C, $), le++);
      }
      const Qs = bt ? Yf(Vn) : Dn;
      for (ee = Qs.length - 1, O = Be - 1; O >= 0; O--) {
        const Pe = Y + O, it = h[Pe], Zs = Pe + 1 < _ ? h[Pe + 1].el : w;
        Vn[O] === 0 ? E(null, it, N, Zs, T, R, x, C, $) : bt && (ee < 0 || O !== Qs[ee] ? Te(it, N, Zs, 2) : ee--);
      }
    }
  }, Te = (d, h, N, w, T = null) => {
    const { el: R, type: x, transition: C, children: $, shapeFlag: O } = d;
    if (O & 6) {
      Te(d.component.subTree, h, N, w);
      return;
    }
    if (O & 128) {
      d.suspense.move(h, N, w);
      return;
    }
    if (O & 64) {
      x.move(d, h, N, xt);
      return;
    }
    if (x === pe) {
      r(R, h, N);
      for (let b = 0; b < $.length; b++)
        Te($[b], h, N, w);
      r(d.anchor, h, N);
      return;
    }
    if (x === Ir) {
      S(d, h, N);
      return;
    }
    if (w !== 2 && O & 1 && C)
      if (w === 0)
        C.beforeEnter(R), r(R, h, N), Me(() => C.enter(R), T);
      else {
        const { leave: b, delayLeave: V, afterLeave: F } = C, Y = () => r(R, h, N), ne = () => {
          b(R, () => {
            Y(), F && F();
          });
        };
        V ? V(R, Y, ne) : ne();
      }
    else
      r(R, h, N);
  }, st = (d, h, N, w = !1, T = !1) => {
    const { type: R, props: x, ref: C, children: $, dynamicChildren: O, shapeFlag: _, patchFlag: b, dirs: V } = d;
    if (C != null && Go(C, null, N, d, !0), _ & 256) {
      h.ctx.deactivate(d);
      return;
    }
    const F = _ & 1 && V, Y = !Dr(d);
    let ne;
    if (Y && (ne = x && x.onVnodeBeforeUnmount) && lt(ne, h, d), _ & 6)
      ho(d.component, N, w);
    else {
      if (_ & 128) {
        d.suspense.unmount(N, w);
        return;
      }
      F && zt(d, null, h, "beforeUnmount"), _ & 64 ? d.type.remove(d, h, N, T, xt, w) : O && (R !== pe || b > 0 && b & 64) ? Qe(O, h, N, !1, !0) : (R === pe && b & 384 || !T && _ & 16) && Qe($, h, N), w && mr(d);
    }
    (Y && (ne = x && x.onVnodeUnmounted) || F) && Me(() => {
      ne && lt(ne, h, d), F && zt(d, null, h, "unmounted");
    }, N);
  }, mr = (d) => {
    const { type: h, el: N, anchor: w, transition: T } = d;
    if (h === pe) {
      ({}).NODE_ENV !== "production" && d.patchFlag > 0 && d.patchFlag & 2048 && T && !T.persisted ? d.children.forEach((x) => {
        x.type === Ce ? o(x.el) : mr(x);
      }) : mo(N, w);
      return;
    }
    if (h === Ir) {
      D(d);
      return;
    }
    const R = () => {
      o(N), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (d.shapeFlag & 1 && T && !T.persisted) {
      const { leave: x, delayLeave: C } = T, $ = () => x(N, R);
      C ? C(d.el, R, $) : $();
    } else
      R();
  }, mo = (d, h) => {
    let N;
    for (; d !== h; )
      N = p(d), o(d), d = N;
    o(h);
  }, ho = (d, h, N) => {
    ({}).NODE_ENV !== "production" && d.type.__hmrId && ju(d);
    const { bum: w, scope: T, update: R, subTree: x, um: C } = d;
    w && Ln(w), T.stop(), R && (R.active = !1, st(x, d, h, N)), C && Me(C, h), Me(() => {
      d.isUnmounted = !0;
    }, h), h && h.pendingBranch && !h.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve()), {}.NODE_ENV !== "production" && Gu(d);
  }, Qe = (d, h, N, w = !1, T = !1, R = 0) => {
    for (let x = R; x < d.length; x++)
      st(d[x], h, N, w, T);
  }, gn = (d) => d.shapeFlag & 6 ? gn(d.component.subTree) : d.shapeFlag & 128 ? d.suspense.next() : p(d.anchor || d.el), hr = (d, h, N) => {
    d == null ? h._vnode && st(h._vnode, null, null, !0) : E(h._vnode || null, d, h, null, null, null, N), ai(), Zl(), h._vnode = d;
  }, xt = {
    p: E,
    um: st,
    m: Te,
    r: mr,
    mt: Ye,
    mc: H,
    pc: Se,
    pbc: re,
    n: gn,
    o: e
  };
  let xn, Pn;
  return t && ([xn, Pn] = t(xt)), {
    render: hr,
    hydrate: xn,
    createApp: zf(hr, xn)
  };
}
function Kt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Cr(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (U(r) && U(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = kt(o[s]), l.el = i.el), n || Cr(i, l)), l.type === $n && (l.el = i.el), {}.NODE_ENV !== "production" && l.type === Ce && !l.el && (l.el = i.el);
    }
}
function Yf(e) {
  const t = e.slice(), n = [0];
  let r, o, s, i, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const c = e[r];
    if (c !== 0) {
      if (o = n[n.length - 1], e[o] < c) {
        t[r] = o, n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        l = s + i >> 1, e[n[l]] < c ? s = l + 1 : i = l;
      c < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
const Jf = (e) => e.__isTeleport, pe = Symbol({}.NODE_ENV !== "production" ? "Fragment" : void 0), $n = Symbol({}.NODE_ENV !== "production" ? "Text" : void 0), Ce = Symbol({}.NODE_ENV !== "production" ? "Comment" : void 0), Ir = Symbol({}.NODE_ENV !== "production" ? "Static" : void 0), zn = [];
let nt = null;
function q(e = !1) {
  zn.push(nt = e ? null : []);
}
function Xf() {
  zn.pop(), nt = zn[zn.length - 1] || null;
}
let Zn = 1;
function Oi(e) {
  Zn += e;
}
function Ta(e) {
  return e.dynamicChildren = Zn > 0 ? nt || Dn : null, Xf(), Zn > 0 && nt && nt.push(e), e;
}
function Z(e, t, n, r, o, s) {
  return Ta(L(e, t, n, r, o, s, !0));
}
function Kn(e, t, n, r, o) {
  return Ta(De(e, t, n, r, o, !0));
}
function er(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jt(e, t) {
  return {}.NODE_ENV !== "production" && t.shapeFlag & 6 && On.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Qf = (...e) => Da(...e), no = "__vInternal", wa = ({ key: e }) => e != null ? e : null, Rr = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? ge(e) || _e(e) || B(e) ? { i: ke, r: e, k: t, f: !!n } : e : null;
function L(e, t = null, n = null, r = 0, o = null, s = e === pe ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wa(t),
    ref: t && Rr(t),
    scopeId: ia,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ke
  };
  return l ? (Ps(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= ge(n) ? 8 : 16), {}.NODE_ENV !== "production" && a.key !== a.key && A("VNode created with invalid key (NaN). VNode type:", a.type), Zn > 0 && !i && nt && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && nt.push(a), a;
}
const De = {}.NODE_ENV !== "production" ? Qf : Da;
function Da(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === yf) && ({}.NODE_ENV !== "production" && !e && A(`Invalid vnode type when creating vnode: ${e}.`), e = Ce), er(e)) {
    const l = gt(e, t, !0);
    return n && Ps(l, n), Zn > 0 && !s && nt && (l.shapeFlag & 6 ? nt[nt.indexOf(e)] = l : nt.push(l)), l.patchFlag |= -2, l;
  }
  if ($a(e) && (e = e.__vccOpts), t) {
    t = Zf(t);
    let { class: l, style: a } = t;
    l && !ge(l) && (t.class = hs(l)), ie(a) && (Po(a) && !U(a) && (a = be({}, a)), t.style = yt(a));
  }
  const i = ge(e) ? 1 : sf(e) ? 128 : Jf(e) ? 64 : ie(e) ? 4 : B(e) ? 2 : 0;
  return {}.NODE_ENV !== "production" && i & 4 && Po(e) && (e = G(e), A("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), L(e, t, n, r, o, i, s, !0);
}
function Zf(e) {
  return e ? Po(e) || no in e ? be({}, e) : e : null;
}
function gt(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: i } = e, l = t ? ed(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && wa(l),
    ref: t && t.ref ? n && o ? U(o) ? o.concat(Rr(t)) : [o, Rr(t)] : Rr(t) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: {}.NODE_ENV !== "production" && s === -1 && U(i) ? i.map(Ca) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== pe ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && gt(e.ssContent),
    ssFallback: e.ssFallback && gt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx
  };
}
function Ca(e) {
  const t = gt(e);
  return U(e.children) && (t.children = e.children.map(Ca)), t;
}
function Xt(e = " ", t = 0) {
  return De($n, null, e, t);
}
function Ee(e = "", t = !1) {
  return t ? (q(), Kn(Ce, null, e)) : De(Ce, null, e);
}
function tt(e) {
  return e == null || typeof e == "boolean" ? De(Ce) : U(e) ? De(
    pe,
    null,
    e.slice()
  ) : typeof e == "object" ? kt(e) : De($n, null, String(e));
}
function kt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : gt(e);
}
function Ps(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (U(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ps(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(no in t) ? t._ctx = ke : o === 3 && ke && (ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    B(t) ? (t = { default: t, _ctx: ke }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Xt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ed(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = hs([t.class, r.class]));
      else if (o === "style")
        t.style = yt([t.style, r.style]);
      else if (ir(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(U(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else
        o !== "" && (t[o] = r[o]);
  }
  return t;
}
function lt(e, t, n, r = null) {
  Xe(e, t, 7, [
    n,
    r
  ]);
}
const td = va();
let nd = 0;
function rd(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || td, s = {
    uid: nd++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Al(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: Ea(r, o),
    emitsOptions: sa(r, o),
    emit: null,
    emitted: null,
    propsDefaults: ce,
    inheritAttrs: r.inheritAttrs,
    ctx: ce,
    data: ce,
    props: ce,
    attrs: ce,
    slots: ce,
    refs: ce,
    setupState: ce,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return {}.NODE_ENV !== "production" ? s.ctx = Tf(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Qu.bind(null, s), e.ce && e.ce(s), s;
}
let Oe = null;
const cr = () => Oe || ke, In = (e) => {
  Oe = e, e.scope.on();
}, ln = () => {
  Oe && Oe.scope.off(), Oe = null;
}, od = /* @__PURE__ */ Bt("slot,component");
function Yo(e, t) {
  const n = t.isNativeTag || Tl;
  (od(e) || n(e)) && A("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Ia(e) {
  return e.vnode.shapeFlag & 4;
}
let tr = !1;
function sd(e, t = !1) {
  tr = t;
  const { props: n, children: r } = e.vnode, o = Ia(e);
  xf(e, n, o, t), Bf(e, r);
  const s = o ? id(e, t) : void 0;
  return tr = !1, s;
}
function id(e, t) {
  var n;
  const r = e.type;
  if ({}.NODE_ENV !== "production") {
    if (r.name && Yo(r.name, e.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let i = 0; i < s.length; i++)
        Yo(s[i], e.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let i = 0; i < s.length; i++)
        ma(s[i]);
    }
    r.compilerOptions && Ra() && A('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Wl(new Proxy(e.ctx, ha)), {}.NODE_ENV !== "production" && wf(e);
  const { setup: o } = r;
  if (o) {
    const s = e.setupContext = o.length > 1 ? ld(e) : null;
    In(e), pn();
    const i = wt(o, e, 0, [{}.NODE_ENV !== "production" ? vn(e.props) : e.props, s]);
    if (mn(), ln(), Es(i)) {
      if (i.then(ln, ln), t)
        return i.then((l) => {
          yi(e, l, t);
        }).catch((l) => {
          Qr(l, e, 0);
        });
      if (e.asyncDep = i, {}.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = r.name) !== null && n !== void 0 ? n : "Anonymous";
        A(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      yi(e, i, t);
  } else
    Aa(e, t);
}
function yi(e, t, n) {
  B(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ie(t) ? ({}.NODE_ENV !== "production" && er(t) && A("setup() should not return VNodes directly - return a render function instead."), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ql(t), {}.NODE_ENV !== "production" && Df(e)) : {}.NODE_ENV !== "production" && t !== void 0 && A(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Aa(e, n);
}
let Jo;
const Ra = () => !Jo;
function Aa(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Jo && !r.render) {
      const o = r.template || Ss(e).template;
      if (o) {
        ({}).NODE_ENV !== "production" && Nt(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: a } = r, c = be(be({
          isCustomElement: s,
          delimiters: l
        }, i), a);
        r.render = Jo(o, c), {}.NODE_ENV !== "production" && Ot(e, "compile");
      }
    }
    e.render = r.render || we;
  }
  In(e), pn(), If(e), mn(), ln(), {}.NODE_ENV !== "production" && !r.render && e.render === we && !t && (r.template ? A('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : A("Component is missing template or render function."));
}
function vi(e) {
  return new Proxy(e.attrs, {}.NODE_ENV !== "production" ? {
    get(t, n) {
      return Ur(), je(e, "get", "$attrs"), t[n];
    },
    set() {
      return A("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return A("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(t, n) {
      return je(e, "get", "$attrs"), t[n];
    }
  });
}
function ld(e) {
  const t = (r) => {
    ({}).NODE_ENV !== "production" && e.exposed && A("expose() should be called only once per setup()."), e.exposed = r || {};
  };
  let n;
  return {}.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = vi(e));
    },
    get slots() {
      return vn(e.slots);
    },
    get emit() {
      return (r, ...o) => e.emit(r, ...o);
    },
    expose: t
  }) : {
    get attrs() {
      return n || (n = vi(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ro(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(ql(Wl(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in sn)
          return sn[n](e);
      },
      has(t, n) {
        return n in t || n in sn;
      }
    }));
}
const ad = /(?:^|[-_])(\w)/g, cd = (e) => e.replace(ad, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Vs(e, t = !0) {
  return B(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function oo(e, t, n = !1) {
  let r = Vs(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    r = o(e.components || e.parent.type.components) || o(e.appContext.components);
  }
  return r ? cd(r) : n ? "App" : "Anonymous";
}
function $a(e) {
  return B(e) && "__vccOpts" in e;
}
const se = (e, t) => Au(e, t, tr);
function Sa(e, t, n) {
  const r = arguments.length;
  return r === 2 ? ie(t) && !U(t) ? er(t) ? De(e, null, [t]) : De(e, t) : De(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && er(n) && (n = [n]), De(e, t, n));
}
const ud = Symbol({}.NODE_ENV !== "production" ? "ssrContext" : ""), fd = () => {
  {
    const e = on(ud);
    return e || {}.NODE_ENV !== "production" && A("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
  }
};
function No(e) {
  return !!(e && e.__v_isShallow);
}
function dd() {
  if ({}.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, o = {
    header(u) {
      return ie(u) ? u.__isVue ? ["div", e, "VueInstance"] : _e(u) ? [
        "div",
        {},
        ["span", e, f(u)],
        "<",
        l(u.value),
        ">"
      ] : Ut(u) ? [
        "div",
        {},
        ["span", e, No(u) ? "ShallowReactive" : "Reactive"],
        "<",
        l(u),
        `>${Rt(u) ? " (readonly)" : ""}`
      ] : Rt(u) ? [
        "div",
        {},
        ["span", e, No(u) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(u),
        ">"
      ] : null : null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...s(u.$)
        ];
    }
  };
  function s(u) {
    const p = [];
    u.type.props && u.props && p.push(i("props", G(u.props))), u.setupState !== ce && p.push(i("setup", u.setupState)), u.data !== ce && p.push(i("data", G(u.data)));
    const g = a(u, "computed");
    g && p.push(i("computed", g));
    const m = a(u, "inject");
    return m && p.push(i("injected", m)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), p;
  }
  function i(u, p) {
    return p = be({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(p).map((g) => [
          "div",
          {},
          ["span", r, g + ": "],
          l(p[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, p = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", r, u] : ie(u) ? ["object", { object: p ? G(u) : u }] : ["span", n, String(u)];
  }
  function a(u, p) {
    const g = u.type;
    if (B(g))
      return;
    const m = {};
    for (const E in u.ctx)
      c(g, E, p) && (m[E] = u.ctx[E]);
    return m;
  }
  function c(u, p, g) {
    const m = u[g];
    if (U(m) && m.includes(p) || ie(m) && p in m || u.extends && c(u.extends, p, g) || u.mixins && u.mixins.some((E) => c(E, p, g)))
      return !0;
  }
  function f(u) {
    return No(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Ti = "3.2.45", pd = "http://www.w3.org/2000/svg", Qt = typeof document < "u" ? document : null, wi = Qt && /* @__PURE__ */ Qt.createElement("template"), md = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t ? Qt.createElementNS(pd, e) : Qt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Qt.createTextNode(e),
  createComment: (e) => Qt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Qt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  insertStaticContent(e, t, n, r, o, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === s || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); )
        ;
    else {
      wi.innerHTML = r ? `<svg>${e}</svg>` : e;
      const l = wi.content;
      if (r) {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      i ? i.nextSibling : t.firstChild,
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function hd(e, t, n) {
  const r = e._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function _d(e, t, n) {
  const r = e.style, o = ge(n);
  if (n && !o) {
    for (const s in n)
      Xo(r, s, n[s]);
    if (t && !ge(t))
      for (const s in t)
        n[s] == null && Xo(r, s, "");
  } else {
    const s = r.display;
    o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = s);
  }
}
const gd = /[^\\];\s*$/, Di = /\s*!important$/;
function Xo(e, t, n) {
  if (U(n))
    n.forEach((r) => Xo(e, t, r));
  else if (n == null && (n = ""), {}.NODE_ENV !== "production" && gd.test(n) && A(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Ed(e, t);
    Di.test(n) ? e.setProperty(Ct(r), n.replace(Di, ""), "important") : e[r] = n;
  }
}
const Ci = ["Webkit", "Moz", "ms"], Oo = {};
function Ed(e, t) {
  const n = Oo[t];
  if (n)
    return n;
  let r = _t(t);
  if (r !== "filter" && r in e)
    return Oo[t] = r;
  r = an(r);
  for (let o = 0; o < Ci.length; o++) {
    const s = Ci[o] + r;
    if (s in e)
      return Oo[t] = s;
  }
  return t;
}
const Ii = "http://www.w3.org/1999/xlink";
function bd(e, t, n, r, o) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Ii, t.slice(6, t.length)) : e.setAttributeNS(Ii, t, n);
  else {
    const s = zc(t);
    n == null || s && !yl(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function Nd(e, t, n, r, o, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    r && i(r, o, s), e[t] = n == null ? "" : n;
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const a = n == null ? "" : n;
    (e.value !== a || e.tagName === "OPTION") && (e.value = a), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = yl(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    ({}).NODE_ENV !== "production" && !l && A(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, a);
  }
  l && e.removeAttribute(t);
}
function Od(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function yd(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
function vd(e, t, n, r, o = null) {
  const s = e._vei || (e._vei = {}), i = s[t];
  if (r && i)
    i.value = r;
  else {
    const [l, a] = Td(t);
    if (r) {
      const c = s[t] = Cd(r, o);
      Od(e, l, c, a);
    } else
      i && (yd(e, l, i, a), s[t] = void 0);
  }
}
const Ri = /(?:Once|Passive|Capture)$/;
function Td(e) {
  let t;
  if (Ri.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ri); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ct(e.slice(2)), t];
}
let yo = 0;
const wd = /* @__PURE__ */ Promise.resolve(), Dd = () => yo || (wd.then(() => yo = 0), yo = Date.now());
function Cd(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Xe(Id(r, n.value), t, 5, [r]);
  };
  return n.value = e, n.attached = Dd(), n;
}
function Id(e, t) {
  if (U(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((r) => (o) => !o._stopped && r && r(o));
  } else
    return t;
}
const Ai = /^on[a-z]/, Rd = (e, t, n, r, o = !1, s, i, l, a) => {
  t === "class" ? hd(e, r, o) : t === "style" ? _d(e, n, r) : ir(t) ? Lr(t) || vd(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ad(e, t, r, o)) ? Nd(e, t, r, s, i, l, a) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), bd(e, t, r, o));
};
function Ad(e, t, n, r) {
  return r ? !!(t === "innerHTML" || t === "textContent" || t in e && Ai.test(t) && B(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Ai.test(t) && ge(n) ? !1 : t in e;
}
const $d = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
ff.props;
const Sd = ["ctrl", "shift", "alt", "meta"], xd = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Sd.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ar = (e, t) => (n, ...r) => {
  for (let o = 0; o < t.length; o++) {
    const s = xd[t[o]];
    if (s && s(n, t))
      return;
  }
  return e(n, ...r);
}, Pd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, xa = (e, t) => (n) => {
  if (!("key" in n))
    return;
  const r = Ct(n.key);
  if (t.some((o) => o === r || Pd[o] === r))
    return e(n);
}, Vd = {
  beforeMount(e, { value: t }, { transition: n }) {
    e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Fn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Fn(e, !0), r.enter(e)) : r.leave(e, () => {
      Fn(e, !1);
    }) : Fn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Fn(e, t);
  }
};
function Fn(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Ld = /* @__PURE__ */ be({ patchProp: Rd }, md);
let $i;
function kd() {
  return $i || ($i = qf(Ld));
}
const Fd = (...e) => {
  const t = kd().createApp(...e);
  ({}).NODE_ENV !== "production" && (Md(t), Ud(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = jd(r);
    if (!o)
      return;
    const s = t._component;
    !B(s) && !s.render && !s.template && (s.template = o.innerHTML), o.innerHTML = "";
    const i = n(o, !1, o instanceof SVGElement);
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function Md(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Bc(t) || Hc(t),
    writable: !1
  });
}
function Ud(e) {
  if (Ra()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        A("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return A(r), n;
      },
      set() {
        A(r);
      }
    });
  }
}
function jd(e) {
  if (ge(e)) {
    const t = document.querySelector(e);
    return {}.NODE_ENV !== "production" && !t && A(`Failed to mount app: mount target selector "${e}" returned null.`), t;
  }
  return {}.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && A('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
}
function Bd() {
  dd();
}
({}).NODE_ENV !== "production" && Bd();
const Ht = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Hd = {
  methods: {
    canView() {
      return this.$right >= "E";
    },
    canEdit() {
      return this.$right >= "F";
    }
  }
};
function Wd(e, t, n, r, o, s) {
  const i = Gt("index");
  return q(), Kn(i);
}
const zd = /* @__PURE__ */ Ht(Hd, [["render", Wd]]);
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Qo = typeof window < "u", Kd = /\{([0-9a-zA-Z]+)\}/g;
function qd(e, ...t) {
  return t.length === 1 && Ue(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Kd, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Gd = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", Et = (e) => Gd ? Symbol(e) : e, nr = (e) => typeof e == "number" && isFinite(e), Si = (e) => Va(e) === "[object RegExp]", Yd = (e) => Ze(e) && Object.keys(e).length === 0;
function so(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const mt = Object.assign;
let xi;
const Pa = () => xi || (xi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), Jd = Object.prototype.hasOwnProperty;
function Ls(e, t) {
  return Jd.call(e, t);
}
const rt = Array.isArray, Hn = (e) => typeof e == "function", he = (e) => typeof e == "string", vt = (e) => typeof e == "boolean", Ue = (e) => e !== null && typeof e == "object", Xd = Object.prototype.toString, Va = (e) => Xd.call(e), Ze = (e) => Va(e) === "[object Object]";
function La() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, r) {
      const o = e.get(n);
      o && o.push(r) || e.set(n, [r]);
    },
    off(n, r) {
      const o = e.get(n);
      o && o.splice(o.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((o) => o(r)), (e.get("*") || []).slice().map((o) => o(n, r));
    }
  };
}
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const un = typeof window < "u";
let qe, fn;
if ({}.NODE_ENV !== "production") {
  const e = un && window.performance;
  e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (qe = (t) => e.mark(t), fn = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const Qd = /\{([0-9a-zA-Z]+)\}/g;
function ka(e, ...t) {
  return t.length === 1 && $e(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Qd, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Zd = (e, t, n) => ep({ l: e, k: t, s: n }), ep = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ze = (e) => typeof e == "number" && isFinite(e), tp = (e) => Fs(e) === "[object Date]", Pi = (e) => Fs(e) === "[object RegExp]", ks = (e) => me(e) && Object.keys(e).length === 0;
function Fa(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ur = Object.assign;
let Vi;
const np = () => Vi || (Vi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Li(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const ht = Array.isArray, He = (e) => typeof e == "function", z = (e) => typeof e == "string", Ke = (e) => typeof e == "boolean", $e = (e) => e !== null && typeof e == "object", Ma = Object.prototype.toString, Fs = (e) => Ma.call(e), me = (e) => Fs(e) === "[object Object]", rp = (e) => e == null ? "" : ht(e) || me(e) && e.toString === Ma ? JSON.stringify(e, null, 2) : String(e), ki = 2;
function op(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let o = 0;
  const s = [];
  for (let i = 0; i < r.length; i++)
    if (o += r[i].length + 1, o >= t) {
      for (let l = i - ki; l <= i + ki || n > o; l++) {
        if (l < 0 || l >= r.length)
          continue;
        const a = l + 1;
        s.push(`${a}${" ".repeat(3 - String(a).length)}|  ${r[l]}`);
        const c = r[l].length;
        if (l === i) {
          const f = t - (o - c) + 1, u = Math.max(1, n > o ? c - f : n - t);
          s.push("   |  " + " ".repeat(f) + "^".repeat(u));
        } else if (l > i) {
          if (n > o) {
            const f = Math.max(Math.min(n - o, c), 1);
            s.push("   |  " + "^".repeat(f));
          }
          o += c + 1;
        }
      }
      break;
    }
  return s.join(`
`);
}
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ie = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  __EXTEND_POINT__: 15
}, sp = {
  [Ie.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [Ie.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [Ie.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [Ie.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [Ie.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [Ie.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [Ie.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [Ie.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [Ie.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [Ie.INVALID_LINKED_FORMAT]: "Invalid linked format",
  [Ie.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [Ie.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [Ie.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [Ie.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'"
};
function Ua(e, t, n = {}) {
  const { domain: r, messages: o, args: s } = n, i = {}.NODE_ENV !== "production" ? ka((o || sp)[e] || "", ...s || []) : e, l = new SyntaxError(String(i));
  return l.code = e, t && (l.location = t), l.domain = r, l;
}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const ja = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Wt = [];
Wt[0] = {
  w: [0],
  i: [3, 0],
  ["["]: [4],
  o: [7]
};
Wt[1] = {
  w: [1],
  ["."]: [2],
  ["["]: [4],
  o: [7]
};
Wt[2] = {
  w: [2],
  i: [3, 0],
  [0]: [3, 0]
};
Wt[3] = {
  i: [3, 0],
  [0]: [3, 0],
  w: [1, 1],
  ["."]: [2, 1],
  ["["]: [4, 1],
  o: [7, 1]
};
Wt[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ["["]: [
    4,
    2
  ],
  ["]"]: [1, 3],
  o: 8,
  l: [4, 0]
};
Wt[5] = {
  ["'"]: [4, 0],
  o: 8,
  l: [5, 0]
};
Wt[6] = {
  ['"']: [4, 0],
  o: 8,
  l: [6, 0]
};
const ip = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function lp(e) {
  return ip.test(e);
}
function ap(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function cp(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function up(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : lp(t) ? ap(t) : "*" + t;
}
function fp(e) {
  const t = [];
  let n = -1, r = 0, o = 0, s, i, l, a, c, f, u;
  const p = [];
  p[0] = () => {
    i === void 0 ? i = l : i += l;
  }, p[1] = () => {
    i !== void 0 && (t.push(i), i = void 0);
  }, p[2] = () => {
    p[0](), o++;
  }, p[3] = () => {
    if (o > 0)
      o--, r = 4, p[0]();
    else {
      if (o = 0, i === void 0 || (i = up(i), i === !1))
        return !1;
      p[1]();
    }
  };
  function g() {
    const m = e[n + 1];
    if (r === 5 && m === "'" || r === 6 && m === '"')
      return n++, l = "\\" + m, p[0](), !0;
  }
  for (; r !== null; )
    if (n++, s = e[n], !(s === "\\" && g())) {
      if (a = cp(s), u = Wt[r], c = u[a] || u.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (f = p[c[1]], f && (l = s, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Fi = /* @__PURE__ */ new Map();
function dp(e, t) {
  return $e(e) ? e[t] : null;
}
function pp(e, t) {
  if (!$e(e))
    return null;
  let n = Fi.get(t);
  if (n || (n = fp(t), n && Fi.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, s = 0;
  for (; s < r; ) {
    const i = o[n[s]];
    if (i === void 0)
      return null;
    o = i, s++;
  }
  return o;
}
const mp = (e) => e, hp = (e) => "", _p = "text", gp = (e) => e.length === 0 ? "" : e.join(""), Ep = rp;
function Mi(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function bp(e) {
  const t = ze(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ze(e.named.count) || ze(e.named.n)) ? ze(e.named.count) ? e.named.count : ze(e.named.n) ? e.named.n : t : t;
}
function Np(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Op(e = {}) {
  const t = e.locale, n = bp(e), r = $e(e.pluralRules) && z(t) && He(e.pluralRules[t]) ? e.pluralRules[t] : Mi, o = $e(e.pluralRules) && z(t) && He(e.pluralRules[t]) ? Mi : void 0, s = (I) => I[r(n, I.length, o)], i = e.list || [], l = (I) => i[I], a = e.named || {};
  ze(e.pluralIndex) && Np(n, a);
  const c = (I) => a[I];
  function f(I) {
    const P = He(e.messages) ? e.messages(I) : $e(e.messages) ? e.messages[I] : !1;
    return P || (e.parent ? e.parent.message(I) : hp);
  }
  const u = (I) => e.modifiers ? e.modifiers[I] : mp, p = me(e.processor) && He(e.processor.normalize) ? e.processor.normalize : gp, g = me(e.processor) && He(e.processor.interpolate) ? e.processor.interpolate : Ep, m = me(e.processor) && z(e.processor.type) ? e.processor.type : _p, v = {
    list: l,
    named: c,
    plural: s,
    linked: (I, ...P) => {
      const [k, S] = P;
      let D = "text", K = "";
      P.length === 1 ? $e(k) ? (K = k.modifier || K, D = k.type || D) : z(k) && (K = k || K) : P.length === 2 && (z(k) && (K = k || K), z(S) && (D = S || D));
      let j = f(I)(v);
      return D === "vnode" && ht(j) && K && (j = j[0]), K ? u(K)(j, D) : j;
    },
    message: f,
    type: m,
    interpolate: g,
    normalize: p
  };
  return v;
}
let rr = null;
function yp(e) {
  rr = e;
}
function vp(e, t, n) {
  rr && rr.emit(ja.I18nInit, {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Tp = /* @__PURE__ */ wp(ja.FunctionTranslate);
function wp(e) {
  return (t) => rr && rr.emit(e, t);
}
const We = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7
}, Dp = {
  [We.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [We.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [We.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [We.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [We.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [We.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale."
};
function Rn(e, ...t) {
  return ka(Dp[e], ...t);
}
function Cp(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ht(t) ? t : $e(t) ? Object.keys(t) : z(t) ? [t] : [n]
  ])];
}
function Ba(e, t, n) {
  const r = z(n) ? n : Ms, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let s = o.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let i = [n];
    for (; ht(i); )
      i = Ui(s, i, t);
    const l = ht(t) || !me(t) ? t : t.default ? t.default : null;
    i = z(l) ? [l] : l, ht(i) && Ui(s, i, !1), o.__localeChainCache.set(r, s);
  }
  return s;
}
function Ui(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && Ke(r); o++) {
    const s = t[o];
    z(s) && (r = Ip(e, t[o], n));
  }
  return r;
}
function Ip(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const s = o.join("-");
    r = Rp(e, s, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Rp(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (ht(n) || me(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const Ap = "9.2.2", io = -1, Ms = "en-US", Hr = "", ji = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function $p() {
  return {
    upper: (e, t) => t === "text" && z(e) ? e.toUpperCase() : t === "vnode" && $e(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && z(e) ? e.toLowerCase() : t === "vnode" && $e(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && z(e) ? ji(e) : t === "vnode" && $e(e) && "__v_isVNode" in e ? ji(e.children) : e
  };
}
let Sp, Ha;
function xp(e) {
  Ha = e;
}
let Wa;
function Pp(e) {
  Wa = e;
}
let za = null;
const Bi = (e) => {
  za = e;
}, Vp = () => za;
let Ka = null;
const Hi = (e) => {
  Ka = e;
}, Lp = () => Ka;
let Wi = 0;
function kp(e = {}) {
  const t = z(e.version) ? e.version : Ap, n = z(e.locale) ? e.locale : Ms, r = ht(e.fallbackLocale) || me(e.fallbackLocale) || z(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n, o = me(e.messages) ? e.messages : { [n]: {} }, s = me(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} }, i = me(e.numberFormats) ? e.numberFormats : { [n]: {} }, l = ur({}, e.modifiers || {}, $p()), a = e.pluralRules || {}, c = He(e.missing) ? e.missing : null, f = Ke(e.missingWarn) || Pi(e.missingWarn) ? e.missingWarn : !0, u = Ke(e.fallbackWarn) || Pi(e.fallbackWarn) ? e.fallbackWarn : !0, p = !!e.fallbackFormat, g = !!e.unresolving, m = He(e.postTranslation) ? e.postTranslation : null, E = me(e.processor) ? e.processor : null, v = Ke(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter, P = He(e.messageCompiler) ? e.messageCompiler : Sp, k = He(e.messageResolver) ? e.messageResolver : Ha || dp, S = He(e.localeFallbacker) ? e.localeFallbacker : Wa || Cp, D = $e(e.fallbackContext) ? e.fallbackContext : void 0, K = He(e.onWarn) ? e.onWarn : Fa, j = e, M = $e(j.__datetimeFormatters) ? j.__datetimeFormatters : /* @__PURE__ */ new Map(), H = $e(j.__numberFormatters) ? j.__numberFormatters : /* @__PURE__ */ new Map(), J = $e(j.__meta) ? j.__meta : {};
  Wi++;
  const re = {
    version: t,
    cid: Wi,
    locale: n,
    fallbackLocale: r,
    messages: o,
    modifiers: l,
    pluralRules: a,
    missing: c,
    missingWarn: f,
    fallbackWarn: u,
    fallbackFormat: p,
    unresolving: g,
    postTranslation: m,
    processor: E,
    warnHtmlMessage: v,
    escapeParameter: I,
    messageCompiler: P,
    messageResolver: k,
    localeFallbacker: S,
    fallbackContext: D,
    onWarn: K,
    __meta: J
  };
  return re.datetimeFormats = s, re.numberFormats = i, re.__datetimeFormatters = M, re.__numberFormatters = H, {}.NODE_ENV !== "production" && (re.__v_emitter = j.__v_emitter != null ? j.__v_emitter : void 0), ({}.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && vp(re, t, J), re;
}
function lo(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function qa(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Us(e, t, n, r, o) {
  const { missing: s, onWarn: i } = e;
  if ({}.NODE_ENV !== "production") {
    const l = e.__v_emitter;
    l && l.emit("missing", {
      locale: n,
      key: t,
      type: o,
      groupId: `${o}:${t}`
    });
  }
  if (s !== null) {
    const l = s(e, n, t, o);
    return z(l) ? l : t;
  } else
    return {}.NODE_ENV !== "production" && qa(r, t) && i(Rn(We.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Mn(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
let Ga = Ie.__EXTEND_POINT__;
const vo = () => ++Ga, Tt = {
  INVALID_ARGUMENT: Ga,
  INVALID_DATE_ARGUMENT: vo(),
  INVALID_ISO_DATE_ARGUMENT: vo(),
  __EXTEND_POINT__: vo()
};
function wn(e) {
  return Ua(e, null, {}.NODE_ENV !== "production" ? { messages: Fp } : void 0);
}
const Fp = {
  [Tt.INVALID_ARGUMENT]: "Invalid arguments",
  [Tt.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Tt.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
}, zi = () => "", ut = (e) => He(e);
function Ki(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: s, fallbackLocale: i, messages: l } = e, [a, c] = Zo(...t), f = Ke(c.missingWarn) ? c.missingWarn : e.missingWarn, u = Ke(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, p = Ke(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, g = !!c.resolvedMessage, m = z(c.default) || Ke(c.default) ? Ke(c.default) ? s ? a : () => a : c.default : n ? s ? a : () => a : "", E = n || m !== "", v = z(c.locale) ? c.locale : e.locale;
  p && Mp(c);
  let [I, P, k] = g ? [
    a,
    v,
    l[v] || {}
  ] : Ya(e, a, v, i, u, f), S = I, D = a;
  if (!g && !(z(S) || ut(S)) && E && (S = m, D = S), !g && (!(z(S) || ut(S)) || !z(P)))
    return o ? io : a;
  if ({}.NODE_ENV !== "production" && z(S) && e.messageCompiler == null)
    return Fa(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${a}'.`), a;
  let K = !1;
  const j = () => {
    K = !0;
  }, M = ut(S) ? S : Ja(e, a, P, S, D, j);
  if (K)
    return S;
  const H = Bp(e, P, k, c), J = Op(H), re = Up(e, M, J), fe = r ? r(re, a) : re;
  if ({}.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const ve = {
      timestamp: Date.now(),
      key: z(a) ? a : ut(S) ? S.key : "",
      locale: P || (ut(S) ? S.locale : ""),
      format: z(S) ? S : ut(S) ? S.source : "",
      message: fe
    };
    ve.meta = ur({}, e.__meta, Vp() || {}), Tp(ve);
  }
  return fe;
}
function Mp(e) {
  ht(e.list) ? e.list = e.list.map((t) => z(t) ? Li(t) : t) : $e(e.named) && Object.keys(e.named).forEach((t) => {
    z(e.named[t]) && (e.named[t] = Li(e.named[t]));
  });
}
function Ya(e, t, n, r, o, s) {
  const { messages: i, onWarn: l, messageResolver: a, localeFallbacker: c } = e, f = c(e, r, n);
  let u = {}, p, g = null, m = n, E = null;
  const v = "translate";
  for (let I = 0; I < f.length; I++) {
    if (p = E = f[I], {}.NODE_ENV !== "production" && n !== p && lo(o, t) && l(Rn(We.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: p
    })), {}.NODE_ENV !== "production" && n !== p) {
      const K = e.__v_emitter;
      K && K.emit("fallback", {
        type: v,
        key: t,
        from: m,
        to: E,
        groupId: `${v}:${t}`
      });
    }
    u = i[p] || {};
    let P = null, k, S;
    if ({}.NODE_ENV !== "production" && un && (P = window.performance.now(), k = "intlify-message-resolve-start", S = "intlify-message-resolve-end", qe && qe(k)), (g = a(u, t)) === null && (g = u[t]), {}.NODE_ENV !== "production" && un) {
      const K = window.performance.now(), j = e.__v_emitter;
      j && P && g && j.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: g,
        time: K - P,
        groupId: `${v}:${t}`
      }), k && S && qe && fn && (qe(S), fn("intlify message resolve", k, S));
    }
    if (z(g) || He(g))
      break;
    const D = Us(
      e,
      t,
      p,
      s,
      v
    );
    D !== t && (g = D), m = E;
  }
  return [g, p, u];
}
function Ja(e, t, n, r, o, s) {
  const { messageCompiler: i, warnHtmlMessage: l } = e;
  if (ut(r)) {
    const p = r;
    return p.locale = p.locale || n, p.key = p.key || t, p;
  }
  if (i == null) {
    const p = () => r;
    return p.locale = n, p.key = t, p;
  }
  let a = null, c, f;
  ({}).NODE_ENV !== "production" && un && (a = window.performance.now(), c = "intlify-message-compilation-start", f = "intlify-message-compilation-end", qe && qe(c));
  const u = i(r, jp(e, n, o, r, l, s));
  if ({}.NODE_ENV !== "production" && un) {
    const p = window.performance.now(), g = e.__v_emitter;
    g && a && g.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: p - a,
      groupId: `translate:${t}`
    }), c && f && qe && fn && (qe(f), fn("intlify message compilation", c, f));
  }
  return u.locale = n, u.key = t, u.source = r, u;
}
function Up(e, t, n) {
  let r = null, o, s;
  ({}).NODE_ENV !== "production" && un && (r = window.performance.now(), o = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", qe && qe(o));
  const i = t(n);
  if ({}.NODE_ENV !== "production" && un) {
    const l = window.performance.now(), a = e.__v_emitter;
    a && r && a.emit("message-evaluation", {
      type: "message-evaluation",
      value: i,
      time: l - r,
      groupId: `translate:${t.key}`
    }), o && s && qe && fn && (qe(s), fn("intlify message evaluation", o, s));
  }
  return i;
}
function Zo(...e) {
  const [t, n, r] = e, o = {};
  if (!z(t) && !ze(t) && !ut(t))
    throw wn(Tt.INVALID_ARGUMENT);
  const s = ze(t) ? String(t) : (ut(t), t);
  return ze(n) ? o.plural = n : z(n) ? o.default = n : me(n) && !ks(n) ? o.named = n : ht(n) && (o.list = n), ze(r) ? o.plural = r : z(r) ? o.default = r : me(r) && ur(o, r), [s, o];
}
function jp(e, t, n, r, o, s) {
  return {
    warnHtmlMessage: o,
    onError: (i) => {
      if (s && s(i), {}.NODE_ENV !== "production") {
        const l = `Message compilation error: ${i.message}`, a = i.location && op(r, i.location.start.offset, i.location.end.offset), c = e.__v_emitter;
        c && c.emit("compile-error", {
          message: r,
          error: i.message,
          start: i.location && i.location.start.offset,
          end: i.location && i.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(a ? `${l}
${a}` : l);
      } else
        throw i;
    },
    onCacheKey: (i) => Zd(t, n, i)
  };
}
function Bp(e, t, n, r) {
  const { modifiers: o, pluralRules: s, messageResolver: i, fallbackLocale: l, fallbackWarn: a, missingWarn: c, fallbackContext: f } = e, p = {
    locale: t,
    modifiers: o,
    pluralRules: s,
    messages: (g) => {
      let m = i(n, g);
      if (m == null && f) {
        const [, , E] = Ya(f, g, t, l, a, c);
        m = i(E, g);
      }
      if (z(m)) {
        let E = !1;
        const I = Ja(e, g, t, m, g, () => {
          E = !0;
        });
        return E ? zi : I;
      } else
        return ut(m) ? m : zi;
    }
  };
  return e.processor && (p.processor = e.processor), r.list && (p.list = r.list), r.named && (p.named = r.named), ze(r.plural) && (p.pluralIndex = r.plural), p;
}
const qi = typeof Intl < "u", Xa = {
  dateTimeFormat: qi && typeof Intl.DateTimeFormat < "u",
  numberFormat: qi && typeof Intl.NumberFormat < "u"
};
function Gi(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: i } = e, { __datetimeFormatters: l } = e;
  if ({}.NODE_ENV !== "production" && !Xa.dateTimeFormat)
    return s(Rn(We.CANNOT_FORMAT_DATE)), Hr;
  const [a, c, f, u] = es(...t), p = Ke(f.missingWarn) ? f.missingWarn : e.missingWarn, g = Ke(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, m = !!f.part, E = z(f.locale) ? f.locale : e.locale, v = i(
    e,
    o,
    E
  );
  if (!z(a) || a === "")
    return new Intl.DateTimeFormat(E, u).format(c);
  let I = {}, P, k = null, S = E, D = null;
  const K = "datetime format";
  for (let H = 0; H < v.length; H++) {
    if (P = D = v[H], {}.NODE_ENV !== "production" && E !== P && lo(g, a) && s(Rn(We.FALLBACK_TO_DATE_FORMAT, {
      key: a,
      target: P
    })), {}.NODE_ENV !== "production" && E !== P) {
      const J = e.__v_emitter;
      J && J.emit("fallback", {
        type: K,
        key: a,
        from: S,
        to: D,
        groupId: `${K}:${a}`
      });
    }
    if (I = n[P] || {}, k = I[a], me(k))
      break;
    Us(e, a, P, p, K), S = D;
  }
  if (!me(k) || !z(P))
    return r ? io : a;
  let j = `${P}__${a}`;
  ks(u) || (j = `${j}__${JSON.stringify(u)}`);
  let M = l.get(j);
  return M || (M = new Intl.DateTimeFormat(P, ur({}, k, u)), l.set(j, M)), m ? M.formatToParts(c) : M.format(c);
}
const Qa = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function es(...e) {
  const [t, n, r, o] = e, s = {};
  let i = {}, l;
  if (z(t)) {
    const a = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!a)
      throw wn(Tt.INVALID_ISO_DATE_ARGUMENT);
    const c = a[3] ? a[3].trim().startsWith("T") ? `${a[1].trim()}${a[3].trim()}` : `${a[1].trim()}T${a[3].trim()}` : a[1].trim();
    l = new Date(c);
    try {
      l.toISOString();
    } catch {
      throw wn(Tt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (tp(t)) {
    if (isNaN(t.getTime()))
      throw wn(Tt.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (ze(t))
    l = t;
  else
    throw wn(Tt.INVALID_ARGUMENT);
  return z(n) ? s.key = n : me(n) && Object.keys(n).forEach((a) => {
    Qa.includes(a) ? i[a] = n[a] : s[a] = n[a];
  }), z(r) ? s.locale = r : me(r) && (i = r), me(o) && (i = o), [s.key || "", l, s, i];
}
function Yi(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    !r.__datetimeFormatters.has(s) || r.__datetimeFormatters.delete(s);
  }
}
function Ji(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: s, localeFallbacker: i } = e, { __numberFormatters: l } = e;
  if ({}.NODE_ENV !== "production" && !Xa.numberFormat)
    return s(Rn(We.CANNOT_FORMAT_NUMBER)), Hr;
  const [a, c, f, u] = ts(...t), p = Ke(f.missingWarn) ? f.missingWarn : e.missingWarn, g = Ke(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, m = !!f.part, E = z(f.locale) ? f.locale : e.locale, v = i(
    e,
    o,
    E
  );
  if (!z(a) || a === "")
    return new Intl.NumberFormat(E, u).format(c);
  let I = {}, P, k = null, S = E, D = null;
  const K = "number format";
  for (let H = 0; H < v.length; H++) {
    if (P = D = v[H], {}.NODE_ENV !== "production" && E !== P && lo(g, a) && s(Rn(We.FALLBACK_TO_NUMBER_FORMAT, {
      key: a,
      target: P
    })), {}.NODE_ENV !== "production" && E !== P) {
      const J = e.__v_emitter;
      J && J.emit("fallback", {
        type: K,
        key: a,
        from: S,
        to: D,
        groupId: `${K}:${a}`
      });
    }
    if (I = n[P] || {}, k = I[a], me(k))
      break;
    Us(e, a, P, p, K), S = D;
  }
  if (!me(k) || !z(P))
    return r ? io : a;
  let j = `${P}__${a}`;
  ks(u) || (j = `${j}__${JSON.stringify(u)}`);
  let M = l.get(j);
  return M || (M = new Intl.NumberFormat(P, ur({}, k, u)), l.set(j, M)), m ? M.formatToParts(c) : M.format(c);
}
const Za = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function ts(...e) {
  const [t, n, r, o] = e, s = {};
  let i = {};
  if (!ze(t))
    throw wn(Tt.INVALID_ARGUMENT);
  const l = t;
  return z(n) ? s.key = n : me(n) && Object.keys(n).forEach((a) => {
    Za.includes(a) ? i[a] = n[a] : s[a] = n[a];
  }), z(r) ? s.locale = r : me(r) && (i = r), me(o) && (i = o), [s.key || "", l, s, i];
}
function Xi(e, t, n) {
  const r = e;
  for (const o in n) {
    const s = `${t}__${o}`;
    !r.__numberFormatters.has(s) || r.__numberFormatters.delete(s);
  }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (np().__INTLIFY_PROD_DEVTOOLS__ = !1);
function Hp() {
  return ec().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ec() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Wp = typeof Proxy == "function", zp = "devtools-plugin:setup", Kp = "plugin:settings:set";
let En, ns;
function qp() {
  var e;
  return En !== void 0 || (typeof window < "u" && window.performance ? (En = !0, ns = window.performance) : typeof global < "u" && ((e = global.perf_hooks) === null || e === void 0 ? void 0 : e.performance) ? (En = !0, ns = global.perf_hooks.performance) : En = !1), En;
}
function Gp() {
  return qp() ? ns.now() : Date.now();
}
class Yp {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const i in t.settings) {
        const l = t.settings[i];
        r[i] = l.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, r);
    try {
      const i = localStorage.getItem(o), l = JSON.parse(i);
      Object.assign(s, l);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(i) {
        try {
          localStorage.setItem(o, JSON.stringify(i));
        } catch {
        }
        s = i;
      },
      now() {
        return Gp();
      }
    }, n && n.on(Kp, (i, l) => {
      i === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, l) => this.target ? this.target.on[l] : (...a) => {
        this.onQueue.push({
          method: l,
          args: a
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...a) => (this.targetQueue.push({
        method: l,
        args: a,
        resolve: () => {
        }
      }), this.fallbacks[l](...a)) : (...a) => new Promise((c) => {
        this.targetQueue.push({
          method: l,
          args: a,
          resolve: c
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Jp(e, t) {
  const n = e, r = ec(), o = Hp(), s = Wp && n.enableEarlyProxy;
  if (o && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    o.emit(zp, e, t);
  else {
    const i = s ? new Yp(n, o) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
  * vue-devtools v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const To = {
  ["vue-devtools-plugin-vue-i18n"]: "Vue I18n devtools",
  ["vue-i18n-resource-inspector"]: "I18n Resources",
  ["vue-i18n-timeline"]: "Vue I18n"
}, Xp = {
  ["vue-i18n-resource-inspector"]: "Search for scopes ..."
}, Qp = {
  ["vue-i18n-timeline"]: 16764185
};
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Zp = "9.2.2";
function em() {
  let e = !1;
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Pa().__INTLIFY_PROD_DEVTOOLS__ = !1), {}.NODE_ENV !== "production" && e && console.warn("You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.");
}
let tc = We.__EXTEND_POINT__;
const bn = () => ++tc, et = {
  FALLBACK_TO_ROOT: tc,
  NOT_SUPPORTED_PRESERVE: bn(),
  NOT_SUPPORTED_FORMATTER: bn(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: bn(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: bn(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: bn(),
  NOT_FOUND_PARENT_SCOPE: bn()
}, tm = {
  [et.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [et.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [et.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [et.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [et.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [et.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [et.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope."
};
function ao(e, ...t) {
  return qd(tm[e], ...t);
}
let nc = Ie.__EXTEND_POINT__;
const Fe = () => ++nc, ae = {
  UNEXPECTED_RETURN_TYPE: nc,
  INVALID_ARGUMENT: Fe(),
  MUST_BE_CALL_SETUP_TOP: Fe(),
  NOT_INSLALLED: Fe(),
  NOT_AVAILABLE_IN_LEGACY_MODE: Fe(),
  REQUIRED_VALUE: Fe(),
  INVALID_VALUE: Fe(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Fe(),
  NOT_INSLALLED_WITH_PROVIDE: Fe(),
  UNEXPECTED_ERROR: Fe(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: Fe(),
  BRIDGE_SUPPORT_VUE_2_ONLY: Fe(),
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Fe(),
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Fe(),
  __EXTEND_POINT__: Fe()
};
function Ge(e, ...t) {
  return Ua(e, null, {}.NODE_ENV !== "production" ? { messages: nm, args: t } : void 0);
}
const nm = {
  [ae.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [ae.INVALID_ARGUMENT]: "Invalid argument",
  [ae.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [ae.NOT_INSLALLED]: "Need to install with `app.use` function",
  [ae.UNEXPECTED_ERROR]: "Unexpected error",
  [ae.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [ae.REQUIRED_VALUE]: "Required in value: {0}",
  [ae.INVALID_VALUE]: "Invalid value",
  [ae.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [ae.NOT_INSLALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [ae.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [ae.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [ae.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define \u2018i18n\u2019 option or custom block in Composition API with using local scope in Legacy API mode",
  [ae.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, rs = /* @__PURE__ */ Et("__transrateVNode"), os = /* @__PURE__ */ Et("__datetimeParts"), ss = /* @__PURE__ */ Et("__numberParts"), or = /* @__PURE__ */ Et("__enableEmitter"), is = /* @__PURE__ */ Et("__disableEmitter"), rm = Et("__setPluralRules");
Et("__intlifyMeta");
const om = /* @__PURE__ */ Et("__injectWithOption");
function ls(e) {
  if (!Ue(e))
    return e;
  for (const t in e)
    if (!!Ls(e, t))
      if (!t.includes("."))
        Ue(e[t]) && ls(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e;
        for (let s = 0; s < r; s++)
          n[s] in o || (o[n[s]] = {}), o = o[n[s]];
        o[n[r]] = e[t], delete e[t], Ue(o[n[r]]) && ls(o[n[r]]);
      }
  return e;
}
function rc(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: s } = t, i = Ze(n) ? n : rt(r) ? {} : { [e]: {} };
  if (rt(r) && r.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: a, resource: c } = l;
      a ? (i[a] = i[a] || {}, qn(c, i[a])) : qn(c, i);
    } else
      he(l) && qn(JSON.parse(l), i);
  }), o == null && s)
    for (const l in i)
      Ls(i, l) && ls(i[l]);
  return i;
}
const yr = (e) => !Ue(e) || rt(e);
function qn(e, t) {
  if (yr(e) || yr(t))
    throw Ge(ae.INVALID_VALUE);
  for (const n in e)
    Ls(e, n) && (yr(e[n]) || yr(t[n]) ? t[n] = e[n] : qn(e[n], t[n]));
}
function oc(e) {
  return e.type;
}
function sm(e, t, n) {
  let r = Ue(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (r = rc(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((s) => {
    e.mergeLocaleMessage(s, r[s]);
  });
  {
    if (Ue(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (Ue(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function Qi(e) {
  return De($n, null, e, 0);
}
const Zi = "__INTLIFY_META__";
let el = 0;
function tl(e) {
  return (t, n, r, o) => e(n, r, cr() || void 0, o);
}
const im = () => {
  const e = cr();
  let t = null;
  return e && (t = oc(e)[Zi]) ? { [Zi]: t } : null;
};
function sc(e = {}, t) {
  const { __root: n } = e, r = n === void 0;
  let o = vt(e.inheritLocale) ? e.inheritLocale : !0;
  const s = Re(
    n && o ? n.locale.value : he(e.locale) ? e.locale : Ms
  ), i = Re(
    n && o ? n.fallbackLocale.value : he(e.fallbackLocale) || rt(e.fallbackLocale) || Ze(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s.value
  ), l = Re(rc(s.value, e)), a = Re(Ze(e.datetimeFormats) ? e.datetimeFormats : { [s.value]: {} }), c = Re(Ze(e.numberFormats) ? e.numberFormats : { [s.value]: {} });
  let f = n ? n.missingWarn : vt(e.missingWarn) || Si(e.missingWarn) ? e.missingWarn : !0, u = n ? n.fallbackWarn : vt(e.fallbackWarn) || Si(e.fallbackWarn) ? e.fallbackWarn : !0, p = n ? n.fallbackRoot : vt(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, m = Hn(e.missing) ? e.missing : null, E = Hn(e.missing) ? tl(e.missing) : null, v = Hn(e.postTranslation) ? e.postTranslation : null, I = n ? n.warnHtmlMessage : vt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, P = !!e.escapeParameter;
  const k = n ? n.modifiers : Ze(e.modifiers) ? e.modifiers : {};
  let S = e.pluralRules || n && n.pluralRules, D;
  D = (() => {
    r && Hi(null);
    const _ = {
      version: Zp,
      locale: s.value,
      fallbackLocale: i.value,
      messages: l.value,
      modifiers: k,
      pluralRules: S,
      missing: E === null ? void 0 : E,
      missingWarn: f,
      fallbackWarn: u,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: v === null ? void 0 : v,
      warnHtmlMessage: I,
      escapeParameter: P,
      messageResolver: e.messageResolver,
      __meta: { framework: "vue" }
    };
    _.datetimeFormats = a.value, _.numberFormats = c.value, _.__datetimeFormatters = Ze(D) ? D.__datetimeFormatters : void 0, _.__numberFormatters = Ze(D) ? D.__numberFormatters : void 0, {}.NODE_ENV !== "production" && (_.__v_emitter = Ze(D) ? D.__v_emitter : void 0);
    const b = kp(_);
    return r && Hi(b), b;
  })(), Mn(D, s.value, i.value);
  function j() {
    return [
      s.value,
      i.value,
      l.value,
      a.value,
      c.value
    ];
  }
  const M = se({
    get: () => s.value,
    set: (_) => {
      s.value = _, D.locale = s.value;
    }
  }), H = se({
    get: () => i.value,
    set: (_) => {
      i.value = _, D.fallbackLocale = i.value, Mn(D, s.value, _);
    }
  }), J = se(() => l.value), re = /* @__PURE__ */ se(() => a.value), fe = /* @__PURE__ */ se(() => c.value);
  function ve() {
    return Hn(v) ? v : null;
  }
  function St(_) {
    v = _, D.postTranslation = _;
  }
  function Ye() {
    return m;
  }
  function Ne(_) {
    _ !== null && (E = tl(_)), m = _, D.missing = E;
  }
  function X(_, b) {
    return _ !== "translate" || !b.resolvedMessage;
  }
  const W = (_, b, V, F, Y, ne) => {
    j();
    let ee;
    if ({}.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__)
      try {
        Bi(im()), r || (D.fallbackContext = n ? Lp() : void 0), ee = _(D);
      } finally {
        Bi(null), r || (D.fallbackContext = void 0);
      }
    else
      ee = _(D);
    if (nr(ee) && ee === io) {
      const [le, Be] = b();
      if ({}.NODE_ENV !== "production" && n && he(le) && X(V, Be) && (p && (lo(u, le) || qa(f, le)) && so(ao(et.FALLBACK_TO_ROOT, {
        key: le,
        type: V
      })), {}.NODE_ENV !== "production")) {
        const { __v_emitter: bt } = D;
        bt && p && bt.emit("fallback", {
          type: V,
          key: le,
          to: "global",
          groupId: `${V}:${le}`
        });
      }
      return n && p ? F(n) : Y(le);
    } else {
      if (ne(ee))
        return ee;
      throw Ge(ae.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Se(..._) {
    return W((b) => Reflect.apply(Ki, null, [b, ..._]), () => Zo(..._), "translate", (b) => Reflect.apply(b.t, b, [..._]), (b) => b, (b) => he(b));
  }
  function ue(..._) {
    const [b, V, F] = _;
    if (F && !Ue(F))
      throw Ge(ae.INVALID_ARGUMENT);
    return Se(b, V, mt({ resolvedMessage: !0 }, F || {}));
  }
  function xe(..._) {
    return W((b) => Reflect.apply(Gi, null, [b, ..._]), () => es(..._), "datetime format", (b) => Reflect.apply(b.d, b, [..._]), () => Hr, (b) => he(b));
  }
  function Te(..._) {
    return W((b) => Reflect.apply(Ji, null, [b, ..._]), () => ts(..._), "number format", (b) => Reflect.apply(b.n, b, [..._]), () => Hr, (b) => he(b));
  }
  function st(_) {
    return _.map((b) => he(b) || nr(b) || vt(b) ? Qi(String(b)) : b);
  }
  const mo = {
    normalize: st,
    interpolate: (_) => _,
    type: "vnode"
  };
  function ho(..._) {
    return W(
      (b) => {
        let V;
        const F = b;
        try {
          F.processor = mo, V = Reflect.apply(Ki, null, [F, ..._]);
        } finally {
          F.processor = null;
        }
        return V;
      },
      () => Zo(..._),
      "translate",
      (b) => b[rs](..._),
      (b) => [Qi(b)],
      (b) => rt(b)
    );
  }
  function Qe(..._) {
    return W(
      (b) => Reflect.apply(Ji, null, [b, ..._]),
      () => ts(..._),
      "number format",
      (b) => b[ss](..._),
      () => [],
      (b) => he(b) || rt(b)
    );
  }
  function gn(..._) {
    return W(
      (b) => Reflect.apply(Gi, null, [b, ..._]),
      () => es(..._),
      "datetime format",
      (b) => b[os](..._),
      () => [],
      (b) => he(b) || rt(b)
    );
  }
  function hr(_) {
    S = _, D.pluralRules = S;
  }
  function xt(_, b) {
    const V = he(b) ? b : s.value, F = d(V);
    return D.messageResolver(F, _) !== null;
  }
  function xn(_) {
    let b = null;
    const V = Ba(D, i.value, s.value);
    for (let F = 0; F < V.length; F++) {
      const Y = l.value[V[F]] || {}, ne = D.messageResolver(Y, _);
      if (ne != null) {
        b = ne;
        break;
      }
    }
    return b;
  }
  function Pn(_) {
    const b = xn(_);
    return b != null ? b : n ? n.tm(_) || {} : {};
  }
  function d(_) {
    return l.value[_] || {};
  }
  function h(_, b) {
    l.value[_] = b, D.messages = l.value;
  }
  function N(_, b) {
    l.value[_] = l.value[_] || {}, qn(b, l.value[_]), D.messages = l.value;
  }
  function w(_) {
    return a.value[_] || {};
  }
  function T(_, b) {
    a.value[_] = b, D.datetimeFormats = a.value, Yi(D, _, b);
  }
  function R(_, b) {
    a.value[_] = mt(a.value[_] || {}, b), D.datetimeFormats = a.value, Yi(D, _, b);
  }
  function x(_) {
    return c.value[_] || {};
  }
  function C(_, b) {
    c.value[_] = b, D.numberFormats = c.value, Xi(D, _, b);
  }
  function $(_, b) {
    c.value[_] = mt(c.value[_] || {}, b), D.numberFormats = c.value, Xi(D, _, b);
  }
  el++, n && Qo && (ot(n.locale, (_) => {
    o && (s.value = _, D.locale = _, Mn(D, s.value, i.value));
  }), ot(n.fallbackLocale, (_) => {
    o && (i.value = _, D.fallbackLocale = _, Mn(D, s.value, i.value));
  }));
  const O = {
    id: el,
    locale: M,
    fallbackLocale: H,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(_) {
      o = _, _ && n && (s.value = n.locale.value, i.value = n.fallbackLocale.value, Mn(D, s.value, i.value));
    },
    get availableLocales() {
      return Object.keys(l.value).sort();
    },
    messages: J,
    get modifiers() {
      return k;
    },
    get pluralRules() {
      return S || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return f;
    },
    set missingWarn(_) {
      f = _, D.missingWarn = f;
    },
    get fallbackWarn() {
      return u;
    },
    set fallbackWarn(_) {
      u = _, D.fallbackWarn = u;
    },
    get fallbackRoot() {
      return p;
    },
    set fallbackRoot(_) {
      p = _;
    },
    get fallbackFormat() {
      return g;
    },
    set fallbackFormat(_) {
      g = _, D.fallbackFormat = g;
    },
    get warnHtmlMessage() {
      return I;
    },
    set warnHtmlMessage(_) {
      I = _, D.warnHtmlMessage = _;
    },
    get escapeParameter() {
      return P;
    },
    set escapeParameter(_) {
      P = _, D.escapeParameter = _;
    },
    t: Se,
    getLocaleMessage: d,
    setLocaleMessage: h,
    mergeLocaleMessage: N,
    getPostTranslationHandler: ve,
    setPostTranslationHandler: St,
    getMissingHandler: Ye,
    setMissingHandler: Ne,
    [rm]: hr
  };
  return O.datetimeFormats = re, O.numberFormats = fe, O.rt = ue, O.te = xt, O.tm = Pn, O.d = xe, O.n = Te, O.getDateTimeFormat = w, O.setDateTimeFormat = T, O.mergeDateTimeFormat = R, O.getNumberFormat = x, O.setNumberFormat = C, O.mergeNumberFormat = $, O[om] = e.__injectWithOption, O[rs] = ho, O[os] = gn, O[ss] = Qe, {}.NODE_ENV !== "production" && (O[or] = (_) => {
    D.__v_emitter = _;
  }, O[is] = () => {
    D.__v_emitter = void 0;
  }), O;
}
const js = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
function lm({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => r = [
    ...r,
    ...rt(o.children) ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, {});
}
function ic(e) {
  return pe;
}
const wo = {
  name: "i18n-t",
  props: mt({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: (e) => nr(e) || !isNaN(e)
    }
  }, js),
  setup(e, t) {
    const { slots: n, attrs: r } = t, o = e.i18n || Hs({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(n).filter((u) => u !== "_"), i = {};
      e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = he(e.plural) ? +e.plural : e.plural);
      const l = lm(t, s), a = o[rs](e.keypath, l, i), c = mt({}, r), f = he(e.tag) || Ue(e.tag) ? e.tag : ic();
      return Sa(f, c, a);
    };
  }
};
function am(e) {
  return rt(e) && !he(e[0]);
}
function lc(e, t, n, r) {
  const { slots: o, attrs: s } = t;
  return () => {
    const i = { part: !0 };
    let l = {};
    e.locale && (i.locale = e.locale), he(e.format) ? i.key = e.format : Ue(e.format) && (he(e.format.key) && (i.key = e.format.key), l = Object.keys(e.format).reduce((p, g) => n.includes(g) ? mt({}, p, { [g]: e.format[g] }) : p, {}));
    const a = r(e.value, i, l);
    let c = [i.key];
    rt(a) ? c = a.map((p, g) => {
      const m = o[p.type], E = m ? m({ [p.type]: p.value, index: g, parts: a }) : [p.value];
      return am(E) && (E[0].key = `${p.type}-${g}`), E;
    }) : he(a) && (c = [a]);
    const f = mt({}, s), u = he(e.tag) || Ue(e.tag) ? e.tag : ic();
    return Sa(u, f, c);
  };
}
const nl = {
  name: "i18n-n",
  props: mt({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, js),
  setup(e, t) {
    const n = e.i18n || Hs({ useScope: "parent", __useComponent: !0 });
    return lc(e, t, Za, (...r) => n[ss](...r));
  }
}, rl = {
  name: "i18n-d",
  props: mt({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, js),
  setup(e, t) {
    const n = e.i18n || Hs({ useScope: "parent", __useComponent: !0 });
    return lc(e, t, Qa, (...r) => n[os](...r));
  }
};
function cm(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function um(e) {
  const t = (i) => {
    const { instance: l, modifiers: a, value: c } = i;
    if (!l || !l.$)
      throw Ge(ae.UNEXPECTED_ERROR);
    const f = cm(e, l.$);
    ({}).NODE_ENV !== "production" && a.preserve && so(ao(et.NOT_SUPPORTED_PRESERVE));
    const u = ol(c);
    return [
      Reflect.apply(f.t, f, [...sl(u)]),
      f
    ];
  };
  return {
    created: (i, l) => {
      const [a, c] = t(l);
      Qo && e.global === c && (i.__i18nWatcher = ot(c.locale, () => {
        l.instance && l.instance.$forceUpdate();
      })), i.__composer = c, i.textContent = a;
    },
    unmounted: (i) => {
      Qo && i.__i18nWatcher && (i.__i18nWatcher(), i.__i18nWatcher = void 0, delete i.__i18nWatcher), i.__composer && (i.__composer = void 0, delete i.__composer);
    },
    beforeUpdate: (i, { value: l }) => {
      if (i.__composer) {
        const a = i.__composer, c = ol(l);
        i.textContent = Reflect.apply(a.t, a, [
          ...sl(c)
        ]);
      }
    },
    getSSRProps: (i) => {
      const [l] = t(i);
      return { textContent: l };
    }
  };
}
function ol(e) {
  if (he(e))
    return { path: e };
  if (Ze(e)) {
    if (!("path" in e))
      throw Ge(ae.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Ge(ae.INVALID_VALUE);
}
function sl(e) {
  const { path: t, locale: n, args: r, choice: o, plural: s } = e, i = {}, l = r || {};
  return he(n) && (i.locale = n), nr(o) && (i.plural = o), nr(s) && (i.plural = s), [t, l, i];
}
function fm(e, t, ...n) {
  const r = Ze(n[0]) ? n[0] : {}, o = !!r.useI18nComponentName, s = vt(r.globalInstall) ? r.globalInstall : !0;
  ({}).NODE_ENV !== "production" && s && o && so(ao(et.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: wo.name
  })), s && (e.component(o ? "i18n" : wo.name, wo), e.component(nl.name, nl), e.component(rl.name, rl)), e.directive("t", um(t));
}
const ac = "vue-i18n: composer properties";
let as;
async function dm(e, t) {
  return new Promise((n, r) => {
    try {
      Jp({
        id: "vue-devtools-plugin-vue-i18n",
        label: To["vue-devtools-plugin-vue-i18n"],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [ac],
        app: e
      }, (o) => {
        as = o, o.on.visitComponentTree(({ componentInstance: i, treeNode: l }) => {
          pm(i, l, t);
        }), o.on.inspectComponent(({ componentInstance: i, instanceData: l }) => {
          i.vnode.el && i.vnode.el.__VUE_I18N__ && l && (t.mode === "legacy" ? i.vnode.el.__VUE_I18N__ !== t.global.__composer && il(l, i.vnode.el.__VUE_I18N__) : il(l, i.vnode.el.__VUE_I18N__));
        }), o.addInspector({
          id: "vue-i18n-resource-inspector",
          label: To["vue-i18n-resource-inspector"],
          icon: "language",
          treeFilterPlaceholder: Xp["vue-i18n-resource-inspector"]
        }), o.on.getInspectorTree((i) => {
          i.app === e && i.inspectorId === "vue-i18n-resource-inspector" && Em(i, t);
        });
        const s = /* @__PURE__ */ new Map();
        o.on.getInspectorState(async (i) => {
          if (i.app === e && i.inspectorId === "vue-i18n-resource-inspector")
            if (o.unhighlightElement(), Nm(i, t), i.nodeId === "global") {
              if (!s.has(i.app)) {
                const [l] = await o.getComponentInstances(i.app);
                s.set(i.app, l);
              }
              o.highlightElement(s.get(i.app));
            } else {
              const l = bm(i.nodeId, t);
              l && o.highlightElement(l);
            }
        }), o.on.editInspectorState((i) => {
          i.app === e && i.inspectorId === "vue-i18n-resource-inspector" && ym(i, t);
        }), o.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: To["vue-i18n-timeline"],
          color: Qp["vue-i18n-timeline"]
        }), n(!0);
      });
    } catch (o) {
      console.error(o), r(!1);
    }
  });
}
function cc(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function pm(e, t, n) {
  const r = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== r) {
    const o = {
      label: `i18n (${cc(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(o);
  }
}
function il(e, t) {
  const n = ac;
  e.state.push({
    type: n,
    key: "locale",
    editable: !0,
    value: t.locale.value
  }), e.state.push({
    type: n,
    key: "availableLocales",
    editable: !1,
    value: t.availableLocales
  }), e.state.push({
    type: n,
    key: "fallbackLocale",
    editable: !0,
    value: t.fallbackLocale.value
  }), e.state.push({
    type: n,
    key: "inheritLocale",
    editable: !0,
    value: t.inheritLocale
  }), e.state.push({
    type: n,
    key: "messages",
    editable: !1,
    value: Bs(t.messages.value)
  }), e.state.push({
    type: n,
    key: "datetimeFormats",
    editable: !1,
    value: t.datetimeFormats.value
  }), e.state.push({
    type: n,
    key: "numberFormats",
    editable: !1,
    value: t.numberFormats.value
  });
}
function Bs(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = e[n];
    Hn(r) && "source" in r ? t[n] = gm(r) : Ue(r) ? t[n] = Bs(r) : t[n] = r;
  }), t;
}
const mm = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function hm(e) {
  return e.replace(/[<>"&]/g, _m);
}
function _m(e) {
  return mm[e] || e;
}
function gm(e) {
  return {
    _custom: {
      type: "function",
      display: `<span>\u0192</span> ${e.source ? `("${hm(e.source)}")` : "(?)"}`
    }
  };
}
function Em(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [r, o] of t.__instances) {
    const s = t.mode === "composition" ? o : o.__composer;
    n !== s && e.rootNodes.push({
      id: s.id.toString(),
      label: `${cc(r)} Scope`
    });
  }
}
function bm(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [r, o] of t.__instances.entries())
      if (o.id.toString() === e) {
        n = r;
        break;
      }
  }
  return n;
}
function uc(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((r) => r.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function Nm(e, t) {
  const n = uc(e.nodeId, t);
  return n && (e.state = Om(n)), null;
}
function Om(e) {
  const t = {}, n = "Locale related info", r = [
    {
      type: n,
      key: "locale",
      editable: !0,
      value: e.locale.value
    },
    {
      type: n,
      key: "fallbackLocale",
      editable: !0,
      value: e.fallbackLocale.value
    },
    {
      type: n,
      key: "availableLocales",
      editable: !1,
      value: e.availableLocales
    },
    {
      type: n,
      key: "inheritLocale",
      editable: !0,
      value: e.inheritLocale
    }
  ];
  t[n] = r;
  const o = "Locale messages info", s = [
    {
      type: o,
      key: "messages",
      editable: !1,
      value: Bs(e.messages.value)
    }
  ];
  t[o] = s;
  {
    const i = "Datetime formats info", l = [
      {
        type: i,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    t[i] = l;
    const a = "Datetime formats info", c = [
      {
        type: a,
        key: "numberFormats",
        editable: !1,
        value: e.numberFormats.value
      }
    ];
    t[a] = c;
  }
  return t;
}
function cs(e, t) {
  if (as) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), as.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: e,
        groupId: n,
        time: Date.now(),
        meta: {},
        data: t || {},
        logType: e === "compile-error" ? "error" : e === "fallback" || e === "missing" ? "warning" : "default"
      }
    });
  }
}
function ym(e, t) {
  const n = uc(e.nodeId, t);
  if (n) {
    const [r] = e.path;
    r === "locale" && he(e.state.value) ? n.locale.value = e.state.value : r === "fallbackLocale" && (he(e.state.value) || rt(e.state.value) || Ue(e.state.value)) ? n.fallbackLocale.value = e.state.value : r === "inheritLocale" && vt(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
const vm = /* @__PURE__ */ Et("global-vue-i18n");
function Tm(e = {}, t) {
  const n = vt(e.globalInjection) ? e.globalInjection : !0, r = !0, o = /* @__PURE__ */ new Map(), [s, i] = wm(e), l = Et({}.NODE_ENV !== "production" ? "vue-i18n" : "");
  function a(u) {
    return o.get(u) || null;
  }
  function c(u, p) {
    o.set(u, p);
  }
  function f(u) {
    o.delete(u);
  }
  {
    const u = {
      get mode() {
        return "composition";
      },
      get allowComposition() {
        return r;
      },
      async install(p, ...g) {
        ({}).NODE_ENV !== "production" && (p.__VUE_I18N__ = u), p.__VUE_I18N_SYMBOL__ = l, p.provide(p.__VUE_I18N_SYMBOL__, u), n && xm(p, u.global), fm(p, u, ...g);
        const m = p.unmount;
        if (p.unmount = () => {
          u.dispose(), m();
        }, {}.NODE_ENV !== "production" || !1) {
          if (!await dm(p, u))
            throw Ge(ae.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const v = La();
          {
            const I = i;
            I[or] && I[or](v);
          }
          v.on("*", cs);
        }
      },
      get global() {
        return i;
      },
      dispose() {
        s.stop();
      },
      __instances: o,
      __getInstance: a,
      __setInstance: c,
      __deleteInstance: f
    };
    return u;
  }
}
function Hs(e = {}) {
  const t = cr();
  if (t == null)
    throw Ge(ae.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Ge(ae.NOT_INSLALLED);
  const n = Dm(t), r = Im(n), o = oc(t), s = Cm(e, o);
  if (s === "global")
    return sm(r, e, o), r;
  if (s === "parent") {
    let a = Rm(n, t, e.__useComponent);
    return a == null && ({}.NODE_ENV !== "production" && so(ao(et.NOT_FOUND_PARENT_SCOPE)), a = r), a;
  }
  const i = n;
  let l = i.__getInstance(t);
  if (l == null) {
    const a = mt({}, e);
    "__i18n" in o && (a.__i18n = o.__i18n), r && (a.__root = r), l = sc(a), Am(i, t, l), i.__setInstance(t, l);
  }
  return l;
}
function wm(e, t, n) {
  const r = Xc();
  {
    const o = r.run(() => sc(e));
    if (o == null)
      throw Ge(ae.UNEXPECTED_ERROR);
    return [r, o];
  }
}
function Dm(e) {
  {
    const t = on(e.isCE ? vm : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Ge(e.isCE ? ae.NOT_INSLALLED_WITH_PROVIDE : ae.UNEXPECTED_ERROR);
    return t;
  }
}
function Cm(e, t) {
  return Yd(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Im(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Rm(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let s = t.parent;
  for (; s != null; ) {
    const i = e;
    if (e.mode === "composition" && (r = i.__getInstance(s)), r != null || o === s)
      break;
    s = s.parent;
  }
  return r;
}
function Am(e, t, n) {
  let r = null;
  Is(() => {
    if (({}.NODE_ENV !== "production" || !1) && !0 && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = La();
      const o = n;
      o[or] && o[or](r), r.on("*", cs);
    }
  }, t), As(() => {
    if (({}.NODE_ENV !== "production" || !1) && !0 && t.vnode.el && t.vnode.el.__VUE_I18N__) {
      r && r.off("*", cs);
      const o = n;
      o[is] && o[is](), delete t.vnode.el.__VUE_I18N__;
    }
    e.__deleteInstance(t);
  }, t);
}
const $m = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], Sm = ["t", "rt", "d", "n", "tm"];
function xm(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  $m.forEach((r) => {
    const o = Object.getOwnPropertyDescriptor(t, r);
    if (!o)
      throw Ge(ae.UNEXPECTED_ERROR);
    const s = _e(o.value) ? {
      get() {
        return o.value.value;
      },
      set(i) {
        o.value.value = i;
      }
    } : {
      get() {
        return o.get && o.get();
      }
    };
    Object.defineProperty(n, r, s);
  }), e.config.globalProperties.$i18n = n, Sm.forEach((r) => {
    const o = Object.getOwnPropertyDescriptor(t, r);
    if (!o || !o.value)
      throw Ge(ae.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${r}`, o);
  });
}
xp(pp);
Pp(Ba);
em();
if ({}.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Pa();
  e.__INTLIFY__ = !0, yp(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const Pm = {
  en: {
    errors: (e) => {
      const { normalize: t } = e;
      return t(["\u041E\u0448\u0438\u0431\u043A\u0430"]);
    },
    success: (e) => {
      const { normalize: t } = e;
      return t(["\u0423\u0441\u043F\u0435\u0448\u043D\u043E"]);
    },
    useModule: (e) => {
      const { normalize: t } = e;
      return t(["\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043C\u043E\u0434\u0443\u043B\u0438:"]);
    },
    needPackerVersion: (e) => {
      const { normalize: t } = e;
      return t(["\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u043F\u0430\u043A\u0435\u0442\u0430:"]);
    },
    remove: (e) => {
      const { normalize: t } = e;
      return t(["\u0423\u0434\u0430\u043B\u0438\u0442\u044C"]);
    },
    packageName: (e) => {
      const { normalize: t } = e;
      return t(["\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0430\u043A\u0435\u0442\u0430"]);
    },
    packageVersion: (e) => {
      const { normalize: t } = e;
      return t(["\u0412\u0435\u0440\u0441\u0438\u044F \u043F\u0430\u043A\u0435\u0442\u0430"]);
    },
    add: (e) => {
      const { normalize: t } = e;
      return t(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"]);
    },
    addedTitle: (e) => {
      const { normalize: t } = e;
      return t(["\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435"]);
    },
    empty: (e) => {
      const { normalize: t } = e;
      return t(["\u043D\u0435\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0430\u043A\u0435\u0442\u043E\u0432"]);
    },
    all: (e) => {
      const { normalize: t } = e;
      return t(["\u0412\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438"]);
    },
    hide: (e) => {
      const { normalize: t } = e;
      return t(["\u0421\u043A\u0440\u044B\u0442\u044C"]);
    },
    suggestsTitle: (e) => {
      const { normalize: t } = e;
      return t(["\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435"]);
    },
    update: (e) => {
      const { normalize: t } = e;
      return t(["\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"]);
    },
    install: (e) => {
      const { normalize: t } = e;
      return t(["\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C"]);
    },
    noRights: (e) => {
      const { normalize: t } = e;
      return t(["\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043F\u0440\u0430\u0432 \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430"]);
    }
  },
  ru: {
    errors: (e) => {
      const { normalize: t } = e;
      return t(["\u041E\u0448\u0438\u0431\u043A\u0430"]);
    },
    success: (e) => {
      const { normalize: t } = e;
      return t(["\u0423\u0441\u043F\u0435\u0448\u043D\u043E"]);
    },
    useModule: (e) => {
      const { normalize: t } = e;
      return t(["\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043C\u043E\u0434\u0443\u043B\u0438:"]);
    },
    needPackerVersion: (e) => {
      const { normalize: t } = e;
      return t(["\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u043F\u0430\u043A\u0435\u0442\u0430:"]);
    },
    remove: (e) => {
      const { normalize: t } = e;
      return t(["\u0423\u0434\u0430\u043B\u0438\u0442\u044C"]);
    },
    packageName: (e) => {
      const { normalize: t } = e;
      return t(["\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0430\u043A\u0435\u0442\u0430"]);
    },
    packageVersion: (e) => {
      const { normalize: t } = e;
      return t(["\u0412\u0435\u0440\u0441\u0438\u044F \u043F\u0430\u043A\u0435\u0442\u0430"]);
    },
    add: (e) => {
      const { normalize: t } = e;
      return t(["\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"]);
    },
    addedTitle: (e) => {
      const { normalize: t } = e;
      return t(["\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435"]);
    },
    empty: (e) => {
      const { normalize: t } = e;
      return t(["\u043D\u0435\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0430\u043A\u0435\u0442\u043E\u0432"]);
    },
    all: (e) => {
      const { normalize: t } = e;
      return t(["\u0412\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438"]);
    },
    hide: (e) => {
      const { normalize: t } = e;
      return t(["\u0421\u043A\u0440\u044B\u0442\u044C"]);
    },
    suggestsTitle: (e) => {
      const { normalize: t } = e;
      return t(["\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435"]);
    },
    update: (e) => {
      const { normalize: t } = e;
      return t(["\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C"]);
    },
    install: (e) => {
      const { normalize: t } = e;
      return t(["\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C"]);
    },
    noRights: (e) => {
      const { normalize: t } = e;
      return t(["\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043F\u0440\u0430\u0432 \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430"]);
    }
  }
}, Vm = Tm({
  locale: window.I18N_LOCALE,
  fallbackLocale: "ru",
  globalInjection: !0,
  messages: Pm
});
const fc = (e) => {
  if (e = oe(e), Array.isArray(e))
    return !!e.length;
  if (e == null)
    return !1;
  if (e === !1)
    return !0;
  if (e instanceof Date)
    return !isNaN(e.getTime());
  if (typeof e == "object") {
    for (let t in e)
      return !0;
    return !1;
  }
  return !!String(e).length;
};
function _n() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return (r) => (r = oe(r), !fc(r) || t.every((o) => o.test(r)));
}
_n(/^[a-zA-Z]*$/);
_n(/^[a-zA-Z0-9]*$/);
_n(/^\d*(\.\d+)?$/);
const Lm = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
_n(Lm);
function km(e) {
  return typeof e == "string" && (e = e.trim()), fc(e);
}
var Fm = {
  $validator: km,
  $message: "Value is required",
  $params: {
    type: "required"
  }
};
const Mm = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
_n(Mm);
_n(/(^[0-9]*$)|(^-[0-9]+$)/);
_n(/^[-]?\d*(\.\d+)?$/);
function ll(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return Object.keys(e).reduce((n, r) => (t.includes(r) || (n[r] = oe(e[r])), n), {});
}
function Wr(e) {
  return typeof e == "function";
}
function Um(e) {
  return Ut(e) || Rt(e);
}
function dc(e, t, n) {
  let r = e;
  const o = t.split(".");
  for (let s = 0; s < o.length; s++) {
    if (!r[o[s]])
      return n;
    r = r[o[s]];
  }
  return r;
}
function Do(e, t, n) {
  return se(() => e.some((r) => dc(t, r, {
    [n]: !1
  })[n]));
}
function al(e, t, n) {
  return se(() => e.reduce((r, o) => {
    const s = dc(t, o, {
      [n]: !1
    })[n] || [];
    return r.concat(s);
  }, []));
}
function pc(e, t, n, r) {
  return e.call(r, oe(t), oe(n), r);
}
function mc(e) {
  return e.$valid !== void 0 ? !e.$valid : !e;
}
function jm(e, t, n, r, o, s, i) {
  let {
    $lazy: l,
    $rewardEarly: a
  } = o, c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : [], f = arguments.length > 8 ? arguments[8] : void 0, u = arguments.length > 9 ? arguments[9] : void 0, p = arguments.length > 10 ? arguments[10] : void 0;
  const g = Re(!!r.value), m = Re(0);
  n.value = !1;
  const E = ot([t, r].concat(c, p), () => {
    if (l && !r.value || a && !u.value && !n.value)
      return;
    let v;
    try {
      v = pc(e, t, f, i);
    } catch (I) {
      v = Promise.reject(I);
    }
    m.value++, n.value = !!m.value, g.value = !1, Promise.resolve(v).then((I) => {
      m.value--, n.value = !!m.value, s.value = I, g.value = mc(I);
    }).catch((I) => {
      m.value--, n.value = !!m.value, s.value = I, g.value = !0;
    });
  }, {
    immediate: !0,
    deep: typeof t == "object"
  });
  return {
    $invalid: g,
    $unwatch: E
  };
}
function Bm(e, t, n, r, o, s, i, l) {
  let {
    $lazy: a,
    $rewardEarly: c
  } = r;
  const f = () => ({}), u = se(() => {
    if (a && !n.value || c && !l.value)
      return !1;
    let p = !0;
    try {
      const g = pc(e, t, i, s);
      o.value = g, p = mc(g);
    } catch (g) {
      o.value = g;
    }
    return p;
  });
  return {
    $unwatch: f,
    $invalid: u
  };
}
function Hm(e, t, n, r, o, s, i, l, a, c, f) {
  const u = Re(!1), p = e.$params || {}, g = Re(null);
  let m, E;
  e.$async ? {
    $invalid: m,
    $unwatch: E
  } = jm(e.$validator, t, u, n, r, g, o, e.$watchTargets, a, c, f) : {
    $invalid: m,
    $unwatch: E
  } = Bm(e.$validator, t, n, r, g, o, a, c);
  const v = e.$message;
  return {
    $message: Wr(v) ? se(() => v(ll({
      $pending: u,
      $invalid: m,
      $params: ll(p),
      $model: t,
      $response: g,
      $validator: s,
      $propertyPath: l,
      $property: i
    }))) : v || "",
    $params: p,
    $pending: u,
    $invalid: m,
    $response: g,
    $unwatch: E
  };
}
function Wm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t = oe(e), n = Object.keys(t), r = {}, o = {}, s = {};
  let i = null;
  return n.forEach((l) => {
    const a = t[l];
    switch (!0) {
      case Wr(a.$validator):
        r[l] = a;
        break;
      case Wr(a):
        r[l] = {
          $validator: a
        };
        break;
      case l === "$validationGroups":
        i = a;
        break;
      case l.startsWith("$"):
        s[l] = a;
        break;
      default:
        o[l] = a;
    }
  }), {
    rules: r,
    nestedValidators: o,
    config: s,
    validationGroups: i
  };
}
function zm() {
}
const Km = "__root";
function hc(e, t, n) {
  if (n)
    return t ? t(e()) : e();
  try {
    var r = Promise.resolve(e());
    return t ? r.then(t) : r;
  } catch (o) {
    return Promise.reject(o);
  }
}
function qm(e, t) {
  return hc(e, zm, t);
}
function Gm(e, t) {
  var n = e();
  return n && n.then ? n.then(t) : t(n);
}
function Ym(e) {
  return function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    try {
      return Promise.resolve(e.apply(this, t));
    } catch (r) {
      return Promise.reject(r);
    }
  };
}
function Jm(e, t, n, r, o, s, i, l, a) {
  const c = Object.keys(e), f = r.get(o, e), u = Re(!1), p = Re(!1), g = Re(0);
  if (f) {
    if (!f.$partial)
      return f;
    f.$unwatch(), u.value = f.$dirty.value;
  }
  const m = {
    $dirty: u,
    $path: o,
    $touch: () => {
      u.value || (u.value = !0);
    },
    $reset: () => {
      u.value && (u.value = !1);
    },
    $commit: () => {
    }
  };
  return c.length ? (c.forEach((E) => {
    m[E] = Hm(e[E], t, m.$dirty, s, i, E, n, o, a, p, g);
  }), m.$externalResults = se(() => l.value ? [].concat(l.value).map((E, v) => ({
    $propertyPath: o,
    $property: n,
    $validator: "$externalResults",
    $uid: `${o}-externalResult-${v}`,
    $message: E,
    $params: {},
    $response: null,
    $pending: !1
  })) : []), m.$invalid = se(() => {
    const E = c.some((v) => oe(m[v].$invalid));
    return p.value = E, !!m.$externalResults.value.length || E;
  }), m.$pending = se(() => c.some((E) => oe(m[E].$pending))), m.$error = se(() => m.$dirty.value ? m.$pending.value || m.$invalid.value : !1), m.$silentErrors = se(() => c.filter((E) => oe(m[E].$invalid)).map((E) => {
    const v = m[E];
    return hn({
      $propertyPath: o,
      $property: n,
      $validator: E,
      $uid: `${o}-${E}`,
      $message: v.$message,
      $params: v.$params,
      $response: v.$response,
      $pending: v.$pending
    });
  }).concat(m.$externalResults.value)), m.$errors = se(() => m.$dirty.value ? m.$silentErrors.value : []), m.$unwatch = () => c.forEach((E) => {
    m[E].$unwatch();
  }), m.$commit = () => {
    p.value = !0, g.value = Date.now();
  }, r.set(o, e, m), m) : (f && r.set(o, e, m), m);
}
function Xm(e, t, n, r, o, s, i) {
  const l = Object.keys(e);
  return l.length ? l.reduce((a, c) => (a[c] = us({
    validations: e[c],
    state: t,
    key: c,
    parentKey: n,
    resultsCache: r,
    globalConfig: o,
    instance: s,
    externalResults: i
  }), a), {}) : {};
}
function Qm(e, t, n) {
  const r = se(() => [t, n].filter((m) => m).reduce((m, E) => m.concat(Object.values(oe(E))), [])), o = se({
    get() {
      return e.$dirty.value || (r.value.length ? r.value.every((m) => m.$dirty) : !1);
    },
    set(m) {
      e.$dirty.value = m;
    }
  }), s = se(() => {
    const m = oe(e.$silentErrors) || [], E = r.value.filter((v) => (oe(v).$silentErrors || []).length).reduce((v, I) => v.concat(...I.$silentErrors), []);
    return m.concat(E);
  }), i = se(() => {
    const m = oe(e.$errors) || [], E = r.value.filter((v) => (oe(v).$errors || []).length).reduce((v, I) => v.concat(...I.$errors), []);
    return m.concat(E);
  }), l = se(() => r.value.some((m) => m.$invalid) || oe(e.$invalid) || !1), a = se(() => r.value.some((m) => oe(m.$pending)) || oe(e.$pending) || !1), c = se(() => r.value.some((m) => m.$dirty) || r.value.some((m) => m.$anyDirty) || o.value), f = se(() => o.value ? a.value || l.value : !1), u = () => {
    e.$touch(), r.value.forEach((m) => {
      m.$touch();
    });
  }, p = () => {
    e.$commit(), r.value.forEach((m) => {
      m.$commit();
    });
  }, g = () => {
    e.$reset(), r.value.forEach((m) => {
      m.$reset();
    });
  };
  return r.value.length && r.value.every((m) => m.$dirty) && u(), {
    $dirty: o,
    $errors: i,
    $invalid: l,
    $anyDirty: c,
    $error: f,
    $pending: a,
    $touch: u,
    $reset: g,
    $silentErrors: s,
    $commit: p
  };
}
function us(e) {
  const t = Ym(function() {
    return ve(), Gm(function() {
      if (v.$rewardEarly)
        return Ne(), qm(Lo);
    }, function() {
      return hc(Lo, function() {
        return new Promise((ue) => {
          if (!fe.value)
            return ue(!H.value);
          const xe = ot(fe, () => {
            ue(!H.value), xe();
          });
        });
      });
    });
  });
  let {
    validations: n,
    state: r,
    key: o,
    parentKey: s,
    childResults: i,
    resultsCache: l,
    globalConfig: a = {},
    instance: c,
    externalResults: f
  } = e;
  const u = s ? `${s}.${o}` : o, {
    rules: p,
    nestedValidators: g,
    config: m,
    validationGroups: E
  } = Wm(n), v = Object.assign({}, a, m), I = o ? se(() => {
    const ue = oe(r);
    return ue ? oe(ue[o]) : void 0;
  }) : r, P = Object.assign({}, oe(f) || {}), k = se(() => {
    const ue = oe(f);
    return o ? ue ? oe(ue[o]) : void 0 : ue;
  }), S = Jm(p, I, o, l, u, v, c, k, r), D = Xm(g, I, u, l, v, c, k), K = {};
  E && Object.entries(E).forEach((ue) => {
    let [xe, Te] = ue;
    K[xe] = {
      $invalid: Do(Te, D, "$invalid"),
      $error: Do(Te, D, "$error"),
      $pending: Do(Te, D, "$pending"),
      $errors: al(Te, D, "$errors"),
      $silentErrors: al(Te, D, "$silentErrors")
    };
  });
  const {
    $dirty: j,
    $errors: M,
    $invalid: H,
    $anyDirty: J,
    $error: re,
    $pending: fe,
    $touch: ve,
    $reset: St,
    $silentErrors: Ye,
    $commit: Ne
  } = Qm(S, D, i), X = o ? se({
    get: () => oe(I),
    set: (ue) => {
      j.value = !0;
      const xe = oe(r), Te = oe(f);
      Te && (Te[o] = P[o]), _e(xe[o]) ? xe[o].value = ue : xe[o] = ue;
    }
  }) : null;
  o && v.$autoDirty && ot(I, () => {
    j.value || ve();
    const ue = oe(f);
    ue && (ue[o] = P[o]);
  }, {
    flush: "sync"
  });
  function W(ue) {
    return (i.value || {})[ue];
  }
  function Se() {
    _e(f) ? f.value = P : Object.keys(P).length === 0 ? Object.keys(f).forEach((ue) => {
      delete f[ue];
    }) : Object.assign(f, P);
  }
  return hn(Object.assign({}, S, {
    $model: X,
    $dirty: j,
    $error: re,
    $errors: M,
    $invalid: H,
    $anyDirty: J,
    $pending: fe,
    $touch: ve,
    $reset: St,
    $path: u || Km,
    $silentErrors: Ye,
    $validate: t,
    $commit: Ne
  }, i && {
    $getResultsForChild: W,
    $clearExternalResults: Se,
    $validationGroups: K
  }, D));
}
class Zm {
  constructor() {
    this.storage = /* @__PURE__ */ new Map();
  }
  set(t, n, r) {
    this.storage.set(t, {
      rules: n,
      result: r
    });
  }
  checkRulesValidity(t, n, r) {
    const o = Object.keys(r), s = Object.keys(n);
    return s.length !== o.length || !s.every((l) => o.includes(l)) ? !1 : s.every((l) => n[l].$params ? Object.keys(n[l].$params).every((a) => oe(r[l].$params[a]) === oe(n[l].$params[a])) : !0);
  }
  get(t, n) {
    const r = this.storage.get(t);
    if (!r)
      return;
    const {
      rules: o,
      result: s
    } = r, i = this.checkRulesValidity(t, n, o), l = s.$unwatch ? s.$unwatch : () => ({});
    return i ? s : {
      $dirty: s.$dirty,
      $partial: !0,
      $unwatch: l
    };
  }
}
const $r = {
  COLLECT_ALL: !0,
  COLLECT_NONE: !1
}, cl = Symbol("vuelidate#injectChildResults"), ul = Symbol("vuelidate#removeChildResults");
function eh(e) {
  let {
    $scope: t,
    instance: n
  } = e;
  const r = {}, o = Re([]), s = se(() => o.value.reduce((f, u) => (f[u] = oe(r[u]), f), {}));
  function i(f, u) {
    let {
      $registerAs: p,
      $scope: g,
      $stopPropagation: m
    } = u;
    m || t === $r.COLLECT_NONE || g === $r.COLLECT_NONE || t !== $r.COLLECT_ALL && t !== g || (r[p] = f, o.value.push(p));
  }
  n.__vuelidateInjectInstances = [].concat(n.__vuelidateInjectInstances || [], i);
  function l(f) {
    o.value = o.value.filter((u) => u !== f), delete r[f];
  }
  n.__vuelidateRemoveInstances = [].concat(n.__vuelidateRemoveInstances || [], l);
  const a = on(cl, []);
  Mo(cl, n.__vuelidateInjectInstances);
  const c = on(ul, []);
  return Mo(ul, n.__vuelidateRemoveInstances), {
    childResults: s,
    sendValidationResultsToParent: a,
    removeValidationResultsFromParent: c
  };
}
function _c(e) {
  return new Proxy(e, {
    get(t, n) {
      return typeof t[n] == "object" ? _c(t[n]) : se(() => t[n]);
    }
  });
}
let fl = 0;
function th(e, t) {
  var n;
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  arguments.length === 1 && (r = e, e = void 0, t = void 0);
  let {
    $registerAs: o,
    $scope: s = $r.COLLECT_ALL,
    $stopPropagation: i,
    $externalResults: l,
    currentVueInstance: a
  } = r;
  const c = a || ((n = cr()) === null || n === void 0 ? void 0 : n.proxy), f = c ? c.$options : {};
  o || (fl += 1, o = `_vuelidate_${fl}`);
  const u = Re({}), p = new Zm(), {
    childResults: g,
    sendValidationResultsToParent: m,
    removeValidationResultsFromParent: E
  } = c ? eh({
    $scope: s,
    instance: c
  }) : {
    childResults: Re({})
  };
  if (!e && f.validations) {
    const v = f.validations;
    t = Re({}), pa(() => {
      t.value = c, ot(() => Wr(v) ? v.call(t.value, new _c(t.value)) : v, (I) => {
        u.value = us({
          validations: I,
          state: t,
          childResults: g,
          resultsCache: p,
          globalConfig: r,
          instance: c,
          externalResults: l || c.vuelidateExternalResults
        });
      }, {
        immediate: !0
      });
    }), r = f.validationsConfig || r;
  } else {
    const v = _e(e) || Um(e) ? e : hn(e || {});
    ot(v, (I) => {
      u.value = us({
        validations: I,
        state: t,
        childResults: g,
        resultsCache: p,
        globalConfig: r,
        instance: c != null ? c : {},
        externalResults: l
      });
    }, {
      immediate: !0
    });
  }
  return c && (m.forEach((v) => v(u, {
    $registerAs: o,
    $scope: s,
    $stopPropagation: i
  })), Rs(() => E.forEach((v) => v(o)))), se(() => Object.assign({}, oe(u.value), g.value));
}
function gc(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ec } = Object.prototype, { getPrototypeOf: Ws } = Object, zs = ((e) => (t) => {
  const n = Ec.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), $t = (e) => (e = e.toLowerCase(), (t) => zs(t) === e), co = (e) => (t) => typeof t === e, { isArray: Sn } = Array, sr = co("undefined");
function nh(e) {
  return e !== null && !sr(e) && e.constructor !== null && !sr(e.constructor) && dn(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const bc = $t("ArrayBuffer");
function rh(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && bc(e.buffer), t;
}
const oh = co("string"), dn = co("function"), Nc = co("number"), Ks = (e) => e !== null && typeof e == "object", sh = (e) => e === !0 || e === !1, Sr = (e) => {
  if (zs(e) !== "object")
    return !1;
  const t = Ws(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ih = $t("Date"), lh = $t("File"), ah = $t("Blob"), ch = $t("FileList"), uh = (e) => Ks(e) && dn(e.pipe), fh = (e) => {
  const t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Ec.call(e) === t || dn(e.toString) && e.toString() === t);
}, dh = $t("URLSearchParams"), ph = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function fr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Sn(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let l;
    for (r = 0; r < i; r++)
      l = s[r], t.call(null, e[l], l, e);
  }
}
function Oc(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const yc = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), vc = (e) => !sr(e) && e !== yc;
function fs() {
  const { caseless: e } = vc(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && Oc(t, o) || o;
    Sr(t[s]) && Sr(r) ? t[s] = fs(t[s], r) : Sr(r) ? t[s] = fs({}, r) : Sn(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && fr(arguments[r], n);
  return t;
}
const mh = (e, t, n, { allOwnKeys: r } = {}) => (fr(t, (o, s) => {
  n && dn(o) ? e[s] = gc(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), hh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), _h = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, gh = (e, t, n, r) => {
  let o, s, i;
  const l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && Ws(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Eh = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, bh = (e) => {
  if (!e)
    return null;
  if (Sn(e))
    return e;
  let t = e.length;
  if (!Nc(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Nh = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ws(Uint8Array)), Oh = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, yh = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, vh = $t("HTMLFormElement"), Th = (e) => e.toLowerCase().replace(
  /[_-\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), dl = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), wh = $t("RegExp"), Tc = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  fr(n, (o, s) => {
    t(o, s, e) !== !1 && (r[s] = o);
  }), Object.defineProperties(e, r);
}, Dh = (e) => {
  Tc(e, (t, n) => {
    if (dn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (!!dn(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Ch = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Sn(e) ? r(e) : r(String(e).split(t)), n;
}, Ih = () => {
}, Rh = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ah = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Ks(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = Sn(r) ? [] : {};
        return fr(r, (i, l) => {
          const a = n(i, o + 1);
          !sr(a) && (s[l] = a);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, y = {
  isArray: Sn,
  isArrayBuffer: bc,
  isBuffer: nh,
  isFormData: fh,
  isArrayBufferView: rh,
  isString: oh,
  isNumber: Nc,
  isBoolean: sh,
  isObject: Ks,
  isPlainObject: Sr,
  isUndefined: sr,
  isDate: ih,
  isFile: lh,
  isBlob: ah,
  isRegExp: wh,
  isFunction: dn,
  isStream: uh,
  isURLSearchParams: dh,
  isTypedArray: Nh,
  isFileList: ch,
  forEach: fr,
  merge: fs,
  extend: mh,
  trim: ph,
  stripBOM: hh,
  inherits: _h,
  toFlatObject: gh,
  kindOf: zs,
  kindOfTest: $t,
  endsWith: Eh,
  toArray: bh,
  forEachEntry: Oh,
  matchAll: yh,
  isHTMLForm: vh,
  hasOwnProperty: dl,
  hasOwnProp: dl,
  reduceDescriptors: Tc,
  freezeMethods: Dh,
  toObjectSet: Ch,
  toCamelCase: Th,
  noop: Ih,
  toFiniteNumber: Rh,
  findKey: Oc,
  global: yc,
  isContextDefined: vc,
  toJSONObject: Ah
};
function te(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
y.inherits(te, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const wc = te.prototype, Dc = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
].forEach((e) => {
  Dc[e] = { value: e };
});
Object.defineProperties(te, Dc);
Object.defineProperty(wc, "isAxiosError", { value: !0 });
te.from = (e, t, n, r, o, s) => {
  const i = Object.create(wc);
  return y.toFlatObject(e, i, function(a) {
    return a !== Error.prototype;
  }, (l) => l !== "isAxiosError"), te.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
var $h = typeof self == "object" ? self.FormData : window.FormData;
const Sh = $h;
function ds(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function Cc(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function pl(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Cc(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function xh(e) {
  return y.isArray(e) && !e.some(ds);
}
const Ph = y.toFlatObject(y, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Vh(e) {
  return e && y.isFunction(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator];
}
function uo(e, t, n) {
  if (!y.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new (Sh || FormData)(), n = y.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, v) {
    return !y.isUndefined(v[E]);
  });
  const r = n.metaTokens, o = n.visitor || f, s = n.dots, i = n.indexes, a = (n.Blob || typeof Blob < "u" && Blob) && Vh(t);
  if (!y.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null)
      return "";
    if (y.isDate(m))
      return m.toISOString();
    if (!a && y.isBlob(m))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(m) || y.isTypedArray(m) ? a && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function f(m, E, v) {
    let I = m;
    if (m && !v && typeof m == "object") {
      if (y.endsWith(E, "{}"))
        E = r ? E : E.slice(0, -2), m = JSON.stringify(m);
      else if (y.isArray(m) && xh(m) || y.isFileList(m) || y.endsWith(E, "[]") && (I = y.toArray(m)))
        return E = Cc(E), I.forEach(function(k, S) {
          !(y.isUndefined(k) || k === null) && t.append(
            i === !0 ? pl([E], S, s) : i === null ? E : E + "[]",
            c(k)
          );
        }), !1;
    }
    return ds(m) ? !0 : (t.append(pl(v, E, s), c(m)), !1);
  }
  const u = [], p = Object.assign(Ph, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: ds
  });
  function g(m, E) {
    if (!y.isUndefined(m)) {
      if (u.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      u.push(m), y.forEach(m, function(I, P) {
        (!(y.isUndefined(I) || I === null) && o.call(
          t,
          I,
          y.isString(P) ? P.trim() : P,
          E,
          p
        )) === !0 && g(I, E ? E.concat(P) : [P]);
      }), u.pop();
    }
  }
  if (!y.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function ml(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function qs(e, t) {
  this._pairs = [], e && uo(e, this, t);
}
const Ic = qs.prototype;
Ic.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ic.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ml);
  } : ml;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Lh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Rc(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Lh, o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = y.isURLSearchParams(t) ? t.toString() : new qs(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class kh {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    y.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const hl = kh, Ac = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Fh = typeof URLSearchParams < "u" ? URLSearchParams : qs, Mh = FormData, Uh = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), jh = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), pt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Fh,
    FormData: Mh,
    Blob
  },
  isStandardBrowserEnv: Uh,
  isStandardBrowserWebWorkerEnv: jh,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Bh(e, t) {
  return uo(e, new pt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return pt.isNode && y.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Hh(e) {
  return y.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Wh(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function $c(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    const l = Number.isFinite(+i), a = s >= n.length;
    return i = !i && y.isArray(o) ? o.length : i, a ? (y.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !l) : ((!o[i] || !y.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && y.isArray(o[i]) && (o[i] = Wh(o[i])), !l);
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {};
    return y.forEachEntry(e, (r, o) => {
      t(Hh(r), o, n, 0);
    }), n;
  }
  return null;
}
const zh = {
  "Content-Type": void 0
};
function Kh(e, t, n) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const fo = {
  transitional: Ac,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = y.isObject(t);
    if (s && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t))
      return o && o ? JSON.stringify($c(t)) : t;
    if (y.isArrayBuffer(t) || y.isBuffer(t) || y.isStream(t) || y.isFile(t) || y.isBlob(t))
      return t;
    if (y.isArrayBufferView(t))
      return t.buffer;
    if (y.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Bh(t, this.formSerializer).toString();
      if ((l = y.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return uo(
          l ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), Kh(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || fo.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && y.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? te.from(l, te.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: pt.classes.FormData,
    Blob: pt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
y.forEach(["delete", "get", "head"], function(t) {
  fo.headers[t] = {};
});
y.forEach(["post", "put", "patch"], function(t) {
  fo.headers[t] = y.merge(zh);
});
const Gs = fo, qh = y.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Gh = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && qh[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, _l = Symbol("internals");
function Un(e) {
  return e && String(e).trim().toLowerCase();
}
function xr(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(xr) : String(e);
}
function Yh(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
function Jh(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function gl(e, t, n, r) {
  if (y.isFunction(r))
    return r.call(this, t, n);
  if (!!y.isString(t)) {
    if (y.isString(r))
      return t.indexOf(r) !== -1;
    if (y.isRegExp(r))
      return r.test(t);
  }
}
function Xh(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Qh(e, t) {
  const n = y.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
class po {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(l, a, c) {
      const f = Un(a);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const u = y.findKey(o, f);
      (!u || o[u] === void 0 || c === !0 || c === void 0 && o[u] !== !1) && (o[u || a] = xr(l));
    }
    const i = (l, a) => y.forEach(l, (c, f) => s(c, f, a));
    return y.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : y.isString(t) && (t = t.trim()) && !Jh(t) ? i(Gh(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = Un(t), t) {
      const r = y.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Yh(o);
        if (y.isFunction(n))
          return n.call(this, o, r);
        if (y.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Un(t), t) {
      const r = y.findKey(this, t);
      return !!(r && (!n || gl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = Un(i), i) {
        const l = y.findKey(r, i);
        l && (!n || gl(r, r[l], l, n)) && (delete r[l], o = !0);
      }
    }
    return y.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear() {
    return Object.keys(this).forEach(this.delete.bind(this));
  }
  normalize(t) {
    const n = this, r = {};
    return y.forEach(this, (o, s) => {
      const i = y.findKey(r, s);
      if (i) {
        n[i] = xr(o), delete n[s];
        return;
      }
      const l = t ? Xh(s) : String(s).trim();
      l !== s && delete n[s], n[l] = xr(o), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return y.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && y.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[_l] = this[_l] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const l = Un(i);
      r[l] || (Qh(o, i), r[l] = !0);
    }
    return y.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
po.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]);
y.freezeMethods(po.prototype);
y.freezeMethods(po);
const Dt = po;
function Co(e, t) {
  const n = this || Gs, r = t || n, o = Dt.from(r.headers);
  let s = r.data;
  return y.forEach(e, function(l) {
    s = l.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function Sc(e) {
  return !!(e && e.__CANCEL__);
}
function dr(e, t, n) {
  te.call(this, e == null ? "canceled" : e, te.ERR_CANCELED, t, n), this.name = "CanceledError";
}
y.inherits(dr, te, {
  __CANCEL__: !0
});
const Zh = null;
function e_(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new te(
    "Request failed with status code " + n.status,
    [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const t_ = pt.isStandardBrowserEnv ? function() {
  return {
    write: function(n, r, o, s, i, l) {
      const a = [];
      a.push(n + "=" + encodeURIComponent(r)), y.isNumber(o) && a.push("expires=" + new Date(o).toGMTString()), y.isString(s) && a.push("path=" + s), y.isString(i) && a.push("domain=" + i), l === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read: function(n) {
      const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
      return r ? decodeURIComponent(r[3]) : null;
    },
    remove: function(n) {
      this.write(n, "", Date.now() - 864e5);
    }
  };
}() : function() {
  return {
    write: function() {
    },
    read: function() {
      return null;
    },
    remove: function() {
    }
  };
}();
function n_(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function r_(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function xc(e, t) {
  return e && !n_(t) ? r_(e, t) : t;
}
const o_ = pt.isStandardBrowserEnv ? function() {
  const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
  let r;
  function o(s) {
    let i = s;
    return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
      href: n.href,
      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
      host: n.host,
      search: n.search ? n.search.replace(/^\?/, "") : "",
      hash: n.hash ? n.hash.replace(/^#/, "") : "",
      hostname: n.hostname,
      port: n.port,
      pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
    };
  }
  return r = o(window.location.href), function(i) {
    const l = y.isString(i) ? o(i) : i;
    return l.protocol === r.protocol && l.host === r.host;
  };
}() : function() {
  return function() {
    return !0;
  };
}();
function s_(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function i_(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(a) {
    const c = Date.now(), f = r[s];
    i || (i = c), n[o] = a, r[o] = c;
    let u = s, p = 0;
    for (; u !== o; )
      p += n[u++], u = u % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), c - i < t)
      return;
    const g = f && c - f;
    return g ? Math.round(p * 1e3 / g) : void 0;
  };
}
function El(e, t) {
  let n = 0;
  const r = i_(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, l = s - n, a = r(l), c = s <= i;
    n = s;
    const f = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: l,
      rate: a || void 0,
      estimated: a && i && c ? (i - s) / a : void 0,
      event: o
    };
    f[t ? "download" : "upload"] = !0, e(f);
  };
}
const l_ = typeof XMLHttpRequest < "u", a_ = l_ && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const s = Dt.from(e.headers).normalize(), i = e.responseType;
    let l;
    function a() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    y.isFormData(o) && (pt.isStandardBrowserEnv || pt.isStandardBrowserWebWorkerEnv) && s.setContentType(!1);
    let c = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(g + ":" + m));
    }
    const f = xc(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Rc(f, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function u() {
      if (!c)
        return;
      const g = Dt.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), E = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: g,
        config: e,
        request: c
      };
      e_(function(I) {
        n(I), a();
      }, function(I) {
        r(I), a();
      }, E), c = null;
    }
    if ("onloadend" in c ? c.onloadend = u : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(u);
    }, c.onabort = function() {
      !c || (r(new te("Request aborted", te.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new te("Network Error", te.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const E = e.transitional || Ac;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new te(
        m,
        E.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
        e,
        c
      )), c = null;
    }, pt.isStandardBrowserEnv) {
      const g = (e.withCredentials || o_(f)) && e.xsrfCookieName && t_.read(e.xsrfCookieName);
      g && s.set(e.xsrfHeaderName, g);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in c && y.forEach(s.toJSON(), function(m, E) {
      c.setRequestHeader(E, m);
    }), y.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", El(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", El(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (g) => {
      !c || (r(!g || g.type ? new dr(null, e, c) : g), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const p = s_(f);
    if (p && pt.protocols.indexOf(p) === -1) {
      r(new te("Unsupported protocol " + p + ":", te.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(o || null);
  });
}, Pr = {
  http: Zh,
  xhr: a_
};
y.forEach(Pr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const c_ = {
  getAdapter: (e) => {
    e = y.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (let o = 0; o < t && (n = e[o], !(r = y.isString(n) ? Pr[n.toLowerCase()] : n)); o++)
      ;
    if (!r)
      throw r === !1 ? new te(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        y.hasOwnProp(Pr, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!y.isFunction(r))
      throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: Pr
};
function Io(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new dr(null, e);
}
function bl(e) {
  return Io(e), e.headers = Dt.from(e.headers), e.data = Co.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), c_.getAdapter(e.adapter || Gs.adapter)(e).then(function(r) {
    return Io(e), r.data = Co.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Dt.from(r.headers), r;
  }, function(r) {
    return Sc(r) || (Io(e), r && r.response && (r.response.data = Co.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Dt.from(r.response.headers))), Promise.reject(r);
  });
}
const Nl = (e) => e instanceof Dt ? e.toJSON() : e;
function An(e, t) {
  t = t || {};
  const n = {};
  function r(c, f, u) {
    return y.isPlainObject(c) && y.isPlainObject(f) ? y.merge.call({ caseless: u }, c, f) : y.isPlainObject(f) ? y.merge({}, f) : y.isArray(f) ? f.slice() : f;
  }
  function o(c, f, u) {
    if (y.isUndefined(f)) {
      if (!y.isUndefined(c))
        return r(void 0, c, u);
    } else
      return r(c, f, u);
  }
  function s(c, f) {
    if (!y.isUndefined(f))
      return r(void 0, f);
  }
  function i(c, f) {
    if (y.isUndefined(f)) {
      if (!y.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, f);
  }
  function l(c, f, u) {
    if (u in t)
      return r(c, f);
    if (u in e)
      return r(void 0, c);
  }
  const a = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (c, f) => o(Nl(c), Nl(f), !0)
  };
  return y.forEach(Object.keys(e).concat(Object.keys(t)), function(f) {
    const u = a[f] || o, p = u(e[f], t[f], f);
    y.isUndefined(p) && u !== l || (n[f] = p);
  }), n;
}
const Pc = "1.2.2", Ys = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ys[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ol = {};
Ys.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + Pc + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, l) => {
    if (t === !1)
      throw new te(
        o(i, " has been removed" + (n ? " in " + n : "")),
        te.ERR_DEPRECATED
      );
    return n && !Ol[i] && (Ol[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, l) : !0;
  };
};
function u_(e, t, n) {
  if (typeof e != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = t[s];
    if (i) {
      const l = e[s], a = l === void 0 || i(l, s, e);
      if (a !== !0)
        throw new te("option " + s + " must be " + a, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new te("Unknown option " + s, te.ERR_BAD_OPTION);
  }
}
const ps = {
  assertOptions: u_,
  validators: Ys
}, Vt = ps.validators;
class zr {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new hl(),
      response: new hl()
    };
  }
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = An(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && ps.assertOptions(r, {
      silentJSONParsing: Vt.transitional(Vt.boolean),
      forcedJSONParsing: Vt.transitional(Vt.boolean),
      clarifyTimeoutError: Vt.transitional(Vt.boolean)
    }, !1), o !== void 0 && ps.assertOptions(o, {
      encode: Vt.function,
      serialize: Vt.function
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = s && y.merge(
      s.common,
      s[n.method]
    ), i && y.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete s[m];
      }
    ), n.headers = Dt.concat(i, s);
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(n) === !1 || (a = a && E.synchronous, l.unshift(E.fulfilled, E.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(E) {
      c.push(E.fulfilled, E.rejected);
    });
    let f, u = 0, p;
    if (!a) {
      const m = [bl.bind(this), void 0];
      for (m.unshift.apply(m, l), m.push.apply(m, c), p = m.length, f = Promise.resolve(n); u < p; )
        f = f.then(m[u++], m[u++]);
      return f;
    }
    p = l.length;
    let g = n;
    for (u = 0; u < p; ) {
      const m = l[u++], E = l[u++];
      try {
        g = m(g);
      } catch (v) {
        E.call(this, v);
        break;
      }
    }
    try {
      f = bl.call(this, g);
    } catch (m) {
      return Promise.reject(m);
    }
    for (u = 0, p = c.length; u < p; )
      f = f.then(c[u++], c[u++]);
    return f;
  }
  getUri(t) {
    t = An(this.defaults, t);
    const n = xc(t.baseURL, t.url);
    return Rc(n, t.params, t.paramsSerializer);
  }
}
y.forEach(["delete", "get", "head", "options"], function(t) {
  zr.prototype[t] = function(n, r) {
    return this.request(An(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
y.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, l) {
      return this.request(An(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  zr.prototype[t] = n(), zr.prototype[t + "Form"] = n(!0);
});
const Vr = zr;
class Js {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((l) => {
        r.subscribe(l), s = l;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, l) {
      r.reason || (r.reason = new dr(s, i, l), n(r.reason));
    });
  }
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Js(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const f_ = Js;
function d_(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function p_(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const ms = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ms).forEach(([e, t]) => {
  ms[t] = e;
});
const m_ = ms;
function Vc(e) {
  const t = new Vr(e), n = gc(Vr.prototype.request, t);
  return y.extend(n, Vr.prototype, t, { allOwnKeys: !0 }), y.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Vc(An(e, o));
  }, n;
}
const ye = Vc(Gs);
ye.Axios = Vr;
ye.CanceledError = dr;
ye.CancelToken = f_;
ye.isCancel = Sc;
ye.VERSION = Pc;
ye.toFormData = uo;
ye.AxiosError = te;
ye.Cancel = ye.CanceledError;
ye.all = function(t) {
  return Promise.all(t);
};
ye.spread = d_;
ye.isAxiosError = p_;
ye.mergeConfig = An;
ye.AxiosHeaders = Dt;
ye.formToJSON = (e) => $c(y.isHTMLForm(e) ? new FormData(e) : e);
ye.HttpStatusCode = m_;
ye.default = ye;
const h_ = ye, __ = {
  name: "PackageName",
  props: {
    value: String
  },
  data() {
    return {
      suggests: []
    };
  },
  timeout: null,
  mounted() {
    document.documentElement.addEventListener("click", () => {
      this.suggests = [];
    }, !1);
  },
  methods: {
    searchSuggest() {
      this.value.length <= 3 || (this.timeout && window.clearTimeout(this.timeout), this.timeout = window.setTimeout(() => {
        this.timeout = null, h_.get("https://packagist.org/search.json?q=" + this.value).then((e) => {
          this.suggests = e.data.results;
        });
      }, 600));
    },
    selectSuggest(e) {
      this.suggests = [], this.$emit("update", e);
    }
  }
}, g_ = { class: "fbr-package-name" }, E_ = ["value", "placeholder"], b_ = {
  key: 0,
  class: "suggest"
}, N_ = ["onClick"];
function O_(e, t, n, r, o, s) {
  return q(), Z("div", g_, [
    L("input", {
      value: n.value,
      onInput: t[0] || (t[0] = (i) => e.$emit("update", i.target.value)),
      onKeyup: [
        t[1] || (t[1] = xa((i) => e.$emit("enter"), ["enter"])),
        t[2] || (t[2] = (...i) => s.searchSuggest && s.searchSuggest(...i))
      ],
      type: "text",
      tabindex: "1",
      placeholder: e.$t("packageName"),
      autocomplete: "off"
    }, null, 40, E_),
    o.suggests.length ? (q(), Z("div", b_, [
      L("ul", null, [
        (q(!0), Z(pe, null, Tn(o.suggests, (i) => (q(), Z("li", {
          onClick: (l) => s.selectSuggest(i.name)
        }, de(i.name), 9, N_))), 256))
      ])
    ])) : Ee("", !0)
  ]);
}
const y_ = /* @__PURE__ */ Ht(__, [["render", O_]]), v_ = {
  name: "PackageVersion",
  props: {
    value: String
  },
  data() {
    return {};
  }
}, T_ = { class: "fbr-package-version" }, w_ = ["value", "placeholder"];
function D_(e, t, n, r, o, s) {
  return q(), Z("div", T_, [
    L("input", {
      value: n.value,
      onInput: t[0] || (t[0] = (i) => e.$emit("update", i.target.value)),
      onKeyup: t[1] || (t[1] = xa((i) => e.$emit("enter"), ["enter"])),
      type: "text",
      tabindex: "2",
      placeholder: e.$t("packageVersion"),
      autocomplete: "off"
    }, null, 40, w_)
  ]);
}
const C_ = /* @__PURE__ */ Ht(v_, [["render", D_]]), I_ = {
  name: "InstalledPackageItem",
  props: {
    package: Object
  },
  data() {
    return {};
  }
}, R_ = { class: "fbr-package-item-name" }, A_ = {
  key: 0,
  class: "fbr-package-item-description"
}, $_ = {
  key: 1,
  class: "fbr-package-item-homepage"
}, S_ = ["href"], x_ = { key: 2 }, P_ = /* @__PURE__ */ L("br", null, null, -1), V_ = /* @__PURE__ */ L("br", null, null, -1), L_ = { class: "fbr-package-remove-container" }, k_ = ["disabled", "value"];
function F_(e, t, n, r, o, s) {
  return q(), Z("tr", null, [
    L("td", null, [
      L("div", R_, de(n.package.package) + ":" + de(n.package.version) + " (" + de(n.package.installedVersion) + ")", 1),
      n.package.description ? (q(), Z("div", A_, de(n.package.description), 1)) : Ee("", !0),
      n.package.homepage ? (q(), Z("div", $_, [
        L("a", {
          target: "_blank",
          href: n.package.homepage
        }, de(n.package.homepage), 9, S_)
      ])) : Ee("", !0),
      n.package.modules.length ? (q(), Z("div", x_, [
        Xt(de(e.$t("useModule")) + " ", 1),
        L("ul", null, [
          (q(!0), Z(pe, null, Tn(n.package.modules, (i) => (q(), Z("li", null, [
            i.name ? (q(), Z(pe, { key: 0 }, [
              L("b", null, "\xAB" + de(i.name) + "\xBB", 1),
              Xt("\xA0")
            ], 64)) : Ee("", !0),
            Xt("(" + de(i.moduleId) + ") ", 1),
            i.description ? (q(), Z(pe, { key: 1 }, [
              P_,
              Xt(de(i.description), 1)
            ], 64)) : Ee("", !0),
            i.version ? (q(), Z(pe, { key: 2 }, [
              V_,
              Xt(de(e.$t("needPackerVersion")) + " " + de(i.version), 1)
            ], 64)) : Ee("", !0)
          ]))), 256))
        ])
      ])) : Ee("", !0)
    ]),
    L("td", L_, [
      !n.package.modules.length && e.$root.canEdit() ? (q(), Z("input", {
        key: 0,
        disabled: e.$parent.loading,
        type: "button",
        onClick: t[0] || (t[0] = (i) => e.$emit("remove", n.package.package)),
        value: e.$t("remove")
      }, null, 8, k_)) : Ee("", !0)
    ])
  ]);
}
const M_ = /* @__PURE__ */ Ht(I_, [["render", F_]]), U_ = {
  name: "AllPackageItem",
  props: {
    package: Object
  },
  data() {
    return {};
  }
}, j_ = { class: "fbr-package-item-name" }, B_ = {
  key: 0,
  class: "fbr-package-item-description"
}, H_ = { key: 1 }, W_ = ["href"];
function z_(e, t, n, r, o, s) {
  return q(), Z("tr", null, [
    L("td", null, [
      L("div", j_, de(n.package.package) + " (" + de(n.package.installedVersion) + ")", 1),
      n.package.description ? (q(), Z("div", B_, de(n.package.description), 1)) : Ee("", !0),
      n.package.homepage ? (q(), Z("div", H_, [
        L("a", {
          target: "_blank",
          href: n.package.homepage
        }, de(n.package.homepage), 9, W_)
      ])) : Ee("", !0)
    ])
  ]);
}
const K_ = /* @__PURE__ */ Ht(U_, [["render", z_]]), q_ = {
  name: "SuggestPackageItem",
  props: {
    package: Object
  },
  data() {
    return {};
  }
}, G_ = { class: "fbr-package-item-name" }, Y_ = {
  key: 0,
  class: "fbr-package-item-description"
}, J_ = { key: 1 }, X_ = ["href"], Q_ = { class: "fbr-package-remove-container" }, Z_ = ["disabled", "value"];
function eg(e, t, n, r, o, s) {
  return q(), Z("tr", null, [
    L("td", null, [
      L("div", G_, de(n.package.package), 1),
      n.package.description ? (q(), Z("div", Y_, de(n.package.description), 1)) : Ee("", !0),
      n.package.homepage ? (q(), Z("div", J_, [
        L("a", {
          target: "_blank",
          href: n.package.homepage
        }, de(n.package.homepage), 9, X_)
      ])) : Ee("", !0)
    ]),
    L("td", Q_, [
      e.$root.canEdit() ? (q(), Z("input", {
        key: 0,
        disabled: e.$parent.loading,
        type: "button",
        onClick: t[0] || (t[0] = Ar((i) => e.$emit("require", n.package.package), ["prevent"])),
        value: e.$t("add"),
        class: "adm-btn-green"
      }, null, 8, Z_)) : Ee("", !0)
    ])
  ]);
}
const tg = /* @__PURE__ */ Ht(q_, [["render", eg]]);
const ng = {
  name: "Spinner",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#408ec0"
    }
  },
  data() {
    return {
      css: {
        background: this.color
      }
    };
  }
}, rg = { class: "vue-css-spinner" }, og = { class: "circleOneContainer" }, sg = { class: "circleTwoContainer" }, ig = { class: "circleThreeContainer" }, lg = { class: "circleFourContainer" }, ag = { class: "circleFiveContainer" }, cg = { class: "circleSixContainer" };
function ug(e, t, n, r, o, s) {
  return Of((q(), Z("div", rg, [
    L("div", og, [
      L("div", {
        class: "circle",
        style: yt(o.css)
      }, null, 4)
    ]),
    L("div", sg, [
      L("div", {
        class: "circle",
        style: yt(o.css)
      }, null, 4)
    ]),
    L("div", ig, [
      L("div", {
        class: "circle",
        style: yt(o.css)
      }, null, 4)
    ]),
    L("div", lg, [
      L("div", {
        class: "circle",
        style: yt(o.css)
      }, null, 4)
    ]),
    L("div", ag, [
      L("div", {
        class: "circle",
        style: yt(o.css)
      }, null, 4)
    ]),
    L("div", cg, [
      L("div", {
        class: "circle",
        style: yt(o.css)
      }, null, 4)
    ])
  ], 512)), [
    [Vd, n.loading]
  ]);
}
const fg = /* @__PURE__ */ Ht(ng, [["render", ug], ["__scopeId", "data-v-12543b8e"]]), Nn = {
  require(e) {
    return BX.ajax.runComponentAction(
      "fi1a:bitrixrequire.admin",
      "require",
      {
        mode: "class",
        data: e
      }
    );
  },
  remove(e) {
    return BX.ajax.runComponentAction(
      "fi1a:bitrixrequire.admin",
      "remove",
      {
        mode: "class",
        data: {
          package: e
        }
      }
    );
  },
  show() {
    return BX.ajax.runComponentAction(
      "fi1a:bitrixrequire.admin",
      "show",
      {
        mode: "class"
      }
    );
  },
  suggest() {
    return BX.ajax.runComponentAction(
      "fi1a:bitrixrequire.admin",
      "suggest",
      {
        mode: "class"
      }
    );
  },
  update() {
    return BX.ajax.runComponentAction(
      "fi1a:bitrixrequire.admin",
      "update",
      {
        mode: "class"
      }
    );
  },
  install() {
    return BX.ajax.runComponentAction(
      "fi1a:bitrixrequire.admin",
      "install",
      {
        mode: "class"
      }
    );
  }
}, dg = {
  name: "Index",
  components: { PackageName: y_, PackageVersion: C_, Spinner: fg, InstalledPackageItem: M_, AllPackageItem: K_, SuggestPackageItem: tg },
  setup() {
    const e = hn({
      require: {
        package: "",
        version: ""
      }
    }), n = th({
      require: {
        package: {
          required: Fm
        },
        version: {}
      }
    }, e);
    return { state: e, v$: n };
  },
  data() {
    return {
      loading: !0,
      errors: [],
      console: !1,
      output: "",
      installed: [],
      all: [],
      suggest: []
    };
  },
  mounted() {
    if (!this.$root.canView()) {
      this.loading = !1, this.errors = [{ message: this.$t("noRights") }];
      return;
    }
    this.show();
  },
  computed: {
    suggestWithoutInstalled() {
      let e = [];
      return this.suggest.forEach((t) => {
        let n = !1;
        this.all.forEach((r) => {
          t.package === r.package && (n = !0);
        }), n || e.push(t);
      }), e;
    }
  },
  methods: {
    showSuggest() {
      Nn.suggest().then((e) => {
        this.suggest = e.data.suggest;
      }).catch((e) => {
        this.errors = e.errors;
      });
    },
    show() {
      this.loading = !0, Nn.show().then((e) => {
        this.loading = !1, this.installed = e.data.installed, this.all = e.data.all, this.showSuggest();
      }).catch((e) => {
        this.errors = e.errors, this.loading = !1;
      });
    },
    require() {
      this.v$.require.$touch(), !this.v$.require.$error && this.doRequire(this.state.require.package, this.state.require.version);
    },
    doRequire(e, t = null) {
      this.reset(), Nn.require({
        package: e,
        version: t
      }).then((n) => {
        this.loading = !1, this.showConsole(n.data.output), n.data.success && (this.state.require.package = "", this.state.require.version = ""), this.installed = n.data.installed, this.all = n.data.all;
      }).catch((n) => {
        this.errors = n.errors, this.loading = !1, this.$scrollTop(document.getElementById("app").offsetTop);
      });
    },
    remove(e) {
      this.loading = !0, Nn.remove(e).then((t) => {
        this.loading = !1, this.showConsole(t.data.output), this.installed = t.data.installed, this.all = t.data.all;
      }).catch((t) => {
        this.errors = t.errors, this.loading = !1, this.$scrollTop(document.getElementById("app").offsetTop);
      });
    },
    update() {
      this.loading = !0, Nn.update().then((e) => {
        this.loading = !1, this.showConsole(e.data.output), this.installed = e.data.installed, this.all = e.data.all;
      }).catch((e) => {
        this.errors = e.errors, this.loading = !1, this.$scrollTop(document.getElementById("app").offsetTop);
      });
    },
    install() {
      this.loading = !0, Nn.install().then((e) => {
        this.loading = !1, this.showConsole(e.data.output), this.installed = e.data.installed, this.all = e.data.all;
      }).catch((e) => {
        this.errors = e.errors, this.loading = !1, this.$scrollTop(document.getElementById("app").offsetTop);
      });
    },
    reset() {
      this.console = !1, this.loading = !0, this.errors = [];
    },
    showConsole(e) {
      this.console = !0, this.output = e;
    }
  }
}, pg = { class: "spinner-container" }, mg = {
  key: 0,
  class: "adm-info-message-wrap adm-info-message-red"
}, hg = { class: "adm-info-message" }, _g = { class: "adm-info-message-title" }, gg = /* @__PURE__ */ L("br", null, null, -1), Eg = /* @__PURE__ */ L("br", null, null, -1), bg = /* @__PURE__ */ L("div", { class: "adm-info-message-icon" }, null, -1), Ng = { key: 1 }, Og = { class: "fbr-group" }, yg = { class: "fbr-row2" }, vg = { class: "fbr-col" }, Tg = ["disabled", "value"], wg = /* @__PURE__ */ L("div", { class: "fbr-col" }, null, -1), Dg = { class: "fbr-group" }, Cg = { class: "fbr-row2" }, Ig = { class: "fbr-col white" }, Rg = { class: "fbr-suggest-packages" }, Ag = { class: "fbr-package-list" }, $g = { key: 0 }, Sg = {
  class: "fbr-empty-list",
  colspan: "2"
}, xg = { class: "fbr-package-list" }, Pg = { class: "fbr-col white" }, Vg = { key: 0 }, Lg = { class: "fbr-console" }, kg = /* @__PURE__ */ L("span", null, ">>>", -1), Fg = /* @__PURE__ */ L("br", null, null, -1), Mg = /* @__PURE__ */ L("br", null, null, -1), Ug = ["innerHTML"], jg = /* @__PURE__ */ L("span", null, "<<<", -1), Bg = /* @__PURE__ */ L("br", null, null, -1), Hg = ["value"], Wg = {
  key: 1,
  class: "fbr-suggest-packages"
}, zg = { class: "fbr-package-list" }, Kg = { class: "fbr-group" }, qg = { class: "fbr-row2" }, Gg = /* @__PURE__ */ L("div", { class: "fbr-col" }, null, -1), Yg = { class: "fbr-col fbr-text-align-right" }, Jg = ["value"], Xg = ["value"];
function Qg(e, t, n, r, o, s) {
  const i = Gt("PackageName"), l = Gt("PackageVersion"), a = Gt("InstalledPackageItem"), c = Gt("AllPackageItem"), f = Gt("SuggestPackageItem"), u = Gt("Spinner");
  return q(), Z("div", pg, [
    o.errors.length ? (q(), Z("div", mg, [
      L("div", hg, [
        L("div", _g, de(e.$t("errors")), 1),
        (q(!0), Z(pe, null, Tn(o.errors, (p) => (q(), Z(pe, null, [
          Xt(de(p.message), 1),
          gg
        ], 64))), 256)),
        Eg,
        bg
      ])
    ])) : Ee("", !0),
    e.$root.canView() ? (q(), Z("div", Ng, [
      L("div", Og, [
        L("div", yg, [
          L("div", vg, [
            e.$root.canEdit() ? (q(), Z(pe, { key: 0 }, [
              De(i, {
                value: this.state.require.package,
                onUpdate: t[0] || (t[0] = (p) => r.v$.require.package.$model = p),
                onEnter: s.require
              }, null, 8, ["value", "onEnter"]),
              De(l, {
                value: this.state.require.version,
                onUpdate: t[1] || (t[1] = (p) => r.v$.require.version.$model = p),
                onEnter: s.require
              }, null, 8, ["value", "onEnter"]),
              L("input", {
                onClick: t[2] || (t[2] = Ar((...p) => s.require && s.require(...p), ["prevent"])),
                disabled: r.v$.require.$invalid || o.loading,
                type: "button",
                value: e.$t("add"),
                class: "adm-btn-green fbr-package-require"
              }, null, 8, Tg)
            ], 64)) : Ee("", !0)
          ]),
          wg
        ])
      ]),
      L("div", Dg, [
        L("div", Cg, [
          L("div", Ig, [
            L("div", Rg, [
              L("h2", null, de(e.$t("addedTitle")), 1),
              L("table", Ag, [
                o.installed.length ? Ee("", !0) : (q(), Z("tr", $g, [
                  L("td", Sg, de(e.$t("empty")), 1)
                ])),
                (q(!0), Z(pe, null, Tn(o.installed, (p) => (q(), Kn(a, {
                  package: p,
                  onRemove: t[3] || (t[3] = (g) => s.remove(g))
                }, null, 8, ["package"]))), 256))
              ]),
              o.all.length ? (q(), Z(pe, { key: 0 }, [
                L("h2", null, de(e.$t("all")), 1),
                L("table", xg, [
                  (q(!0), Z(pe, null, Tn(o.all, (p) => (q(), Kn(c, {
                    package: p,
                    onRemove: t[4] || (t[4] = (g) => s.remove(g))
                  }, null, 8, ["package"]))), 256))
                ])
              ], 64)) : Ee("", !0)
            ])
          ]),
          L("div", Pg, [
            o.console === !0 ? (q(), Z("div", Vg, [
              L("div", Lg, [
                kg,
                Fg,
                Mg,
                L("div", { innerHTML: o.output }, null, 8, Ug),
                jg,
                Bg
              ]),
              L("input", {
                class: "fbr-clear-console",
                type: "button",
                onClick: t[5] || (t[5] = (p) => o.console = !1),
                value: e.$t("hide")
              }, null, 8, Hg)
            ])) : Ee("", !0),
            o.console === !1 && s.suggestWithoutInstalled.length ? (q(), Z("div", Wg, [
              L("h2", null, de(e.$t("suggestsTitle")), 1),
              L("table", zg, [
                (q(!0), Z(pe, null, Tn(s.suggestWithoutInstalled, (p) => (q(), Kn(f, {
                  package: p,
                  onRequire: t[6] || (t[6] = (g) => s.doRequire(g))
                }, null, 8, ["package"]))), 256))
              ])
            ])) : Ee("", !0)
          ])
        ])
      ]),
      L("div", Kg, [
        L("div", qg, [
          Gg,
          L("div", Yg, [
            e.$root.canEdit() ? (q(), Z(pe, { key: 0 }, [
              L("input", {
                onClick: t[7] || (t[7] = Ar((...p) => s.update && s.update(...p), ["prevent"])),
                type: "button",
                value: e.$t("update"),
                class: "fbr-btn-update"
              }, null, 8, Jg),
              L("input", {
                onClick: t[8] || (t[8] = Ar((...p) => s.install && s.install(...p), ["prevent"])),
                type: "button",
                value: e.$t("install"),
                class: "fbr-btn-install"
              }, null, 8, Xg)
            ], 64)) : Ee("", !0)
          ])
        ])
      ])
    ])) : Ee("", !0),
    De(u, { loading: o.loading }, null, 8, ["loading"])
  ]);
}
const Zg = /* @__PURE__ */ Ht(dg, [["render", Qg]]);
typeof window.FBR_RIGHT > "u" && window.location.reload();
const pr = Fd(zd);
pr.config.globalProperties.$scrollTop = (e) => {
  globalThis.intervalId = setInterval(() => {
    if (window.scrollY <= e) {
      clearInterval(globalThis.intervalId);
      return;
    }
    window.scroll(0, window.scrollY - 25);
  }, 20);
};
pr.config.globalProperties.$right = window.FBR_RIGHT;
pr.use(Vm);
pr.component("Index", Zg);
pr.mount("#app");
