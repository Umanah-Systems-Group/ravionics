var e = {
	LEFT: 0,
	MIDDLE: 1,
	RIGHT: 2,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2
}, t = {
	ROTATE: 0,
	PAN: 1,
	DOLLY_PAN: 2,
	DOLLY_ROTATE: 3
}, n = 1e3, r = 1001, i = 1002, a = 1003, o = 1004, s = 1005, c = 1006, l = 1007, u = 1008, d = 1009, f = 1010, p = 1011, m = 1012, h = 1013, g = 1014, _ = 1015, v = 1016, y = 1017, b = 1018, x = 1020, S = 35902, C = 35899, w = 1021, T = 1022, E = 1023, D = 1026, O = 1027, k = 1028, A = 1029, j = 1030, ee = 1031, te = 1033, M = 33776, N = 33777, P = 33778, ne = 33779, F = 35840, re = 35841, ie = 35842, ae = 35843, oe = 36196, se = 37492, I = 37496, ce = 37488, le = 37489, ue = 37490, de = 37491, fe = 37808, pe = 37809, me = 37810, he = 37811, ge = 37812, _e = 37813, ve = 37814, ye = 37815, be = 37816, xe = 37817, Se = 37818, Ce = 37819, we = 37820, Te = 37821, Ee = 36492, De = 36494, Oe = 36495, ke = 36283, Ae = 36284, je = 36285, Me = 36286, L = 2300, Ne = 2301, Pe = 2302, Fe = 2303, R = 2400, Ie = 2401, z = 2402, B = 3200, Le = "srgb", Re = "srgb-linear", ze = "linear", Be = "srgb", Ve = 7680, He = 35044, Ue = 2e3;
function We(e) {
	for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
	return !1;
}
function Ge(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ke(e) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function qe() {
	let e = Ke("canvas");
	return e.style.display = "block", e;
}
var Je = {};
function Ye(...e) {
	let t = "THREE." + e.shift();
	console.log(t, ...e);
}
function Xe(e) {
	let t = e[0];
	if (typeof t == "string" && t.startsWith("TSL:")) {
		let t = e[1];
		t && t.isStackTrace ? e[0] += " " + t.getLocation() : e[1] = "Stack trace not available. Enable \"THREE.Node.captureStackTrace\" to capture stack traces.";
	}
	return e;
}
function V(...e) {
	e = Xe(e);
	let t = "THREE." + e.shift();
	{
		let n = e[0];
		n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
	}
}
function H(...e) {
	e = Xe(e);
	let t = "THREE." + e.shift();
	{
		let n = e[0];
		n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
	}
}
function Ze(...e) {
	let t = e.join(" ");
	t in Je || (Je[t] = !0, V(...e));
}
function Qe(e, t, n) {
	return new Promise(function(r, i) {
		function a() {
			switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
				case e.WAIT_FAILED:
					i();
					break;
				case e.TIMEOUT_EXPIRED:
					setTimeout(a, n);
					break;
				default: r();
			}
		}
		setTimeout(a, n);
	});
}
var $e = {
	0: 0,
	2: 6,
	4: 4,
	3: 5,
	1: 1,
	6: 2,
	7: 7,
	5: 3
}, et = class {
	addEventListener(e, t) {
		this._listeners === void 0 && (this._listeners = {});
		let n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	}
	hasEventListener(e, t) {
		let n = this._listeners;
		return n !== void 0 && n[e] !== void 0 && n[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		let n = this._listeners;
		if (n === void 0) return;
		let r = n[e];
		if (r !== void 0) {
			let e = r.indexOf(t);
			e !== -1 && r.splice(e, 1);
		}
	}
	dispatchEvent(e) {
		let t = this._listeners;
		if (t === void 0) return;
		let n = t[e.type];
		if (n !== void 0) {
			e.target = this;
			let t = n.slice(0);
			for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
			e.target = null;
		}
	}
}, tt = /* @__PURE__ */ "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."), nt = 1234567, rt = Math.PI / 180, it = 180 / Math.PI;
function at() {
	let e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
	return (tt[e & 255] + tt[e >> 8 & 255] + tt[e >> 16 & 255] + tt[e >> 24 & 255] + "-" + tt[t & 255] + tt[t >> 8 & 255] + "-" + tt[t >> 16 & 15 | 64] + tt[t >> 24 & 255] + "-" + tt[n & 63 | 128] + tt[n >> 8 & 255] + "-" + tt[n >> 16 & 255] + tt[n >> 24 & 255] + tt[r & 255] + tt[r >> 8 & 255] + tt[r >> 16 & 255] + tt[r >> 24 & 255]).toLowerCase();
}
function U(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function ot(e, t) {
	return (e % t + t) % t;
}
function st(e, t, n, r, i) {
	return r + (e - t) * (i - r) / (n - t);
}
function ct(e, t, n) {
	return e === t ? 0 : (n - e) / (t - e);
}
function lt(e, t, n) {
	return (1 - n) * e + n * t;
}
function ut(e, t, n, r) {
	return lt(e, t, 1 - Math.exp(-n * r));
}
function dt(e, t = 1) {
	return t - Math.abs(ot(e, t * 2) - t);
}
function ft(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
}
function pt(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function mt(e, t) {
	return e + Math.floor(Math.random() * (t - e + 1));
}
function ht(e, t) {
	return e + Math.random() * (t - e);
}
function gt(e) {
	return e * (.5 - Math.random());
}
function _t(e) {
	e !== void 0 && (nt = e);
	let t = nt += 1831565813;
	return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function vt(e) {
	return e * rt;
}
function yt(e) {
	return e * it;
}
function bt(e) {
	return e > 0 && Number.isInteger(e) && 2 ** Math.round(Math.log2(e)) === e;
}
function xt(e) {
	return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function St(e) {
	return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function Ct(e, t, n, r, i) {
	let a = Math.cos, o = Math.sin, s = a(n / 2), c = o(n / 2), l = a((t + r) / 2), u = o((t + r) / 2), d = a((t - r) / 2), f = o((t - r) / 2), p = a((r - t) / 2), m = o((r - t) / 2);
	switch (i) {
		case "XYX":
			e.set(s * u, c * d, c * f, s * l);
			break;
		case "YZY":
			e.set(c * f, s * u, c * d, s * l);
			break;
		case "ZXZ":
			e.set(c * d, c * f, s * u, s * l);
			break;
		case "XZX":
			e.set(s * u, c * m, c * p, s * l);
			break;
		case "YXY":
			e.set(c * p, s * u, c * m, s * l);
			break;
		case "ZYZ":
			e.set(c * m, c * p, s * u, s * l);
			break;
		default: V("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
	}
}
function wt(e) {
	switch (e.constructor) {
		case Uint32Array: return 4294967295;
		case Uint16Array: return 65535;
		case Uint8Array:
		case Uint8ClampedArray: return 255;
		case Int32Array: return 2147483647;
		case Int16Array: return 32767;
		case Int8Array: return 127;
		default: return;
	}
}
function Tt(e, t) {
	if (t.constructor === Float32Array) return e;
	let n = wt(t);
	if (n === void 0) throw Error("THREE.MathUtils: Invalid component type.");
	return Math.max(e / n, -1);
}
function Et(e, t) {
	if (t.constructor === Float32Array) return e;
	let n = wt(t);
	if (n === void 0) throw Error("THREE.MathUtils: Invalid component type.");
	return Math.round(e * n);
}
var Dt = {
	DEG2RAD: rt,
	RAD2DEG: it,
	generateUUID: at,
	clamp: U,
	euclideanModulo: ot,
	mapLinear: st,
	inverseLerp: ct,
	lerp: lt,
	damp: ut,
	pingpong: dt,
	smoothstep: ft,
	smootherstep: pt,
	randInt: mt,
	randFloat: ht,
	randFloatSpread: gt,
	seededRandom: _t,
	degToRad: vt,
	radToDeg: yt,
	isPowerOfTwo: bt,
	ceilPowerOfTwo: xt,
	floorPowerOfTwo: St,
	setQuaternionFromProperEuler: Ct,
	normalize: Et,
	denormalize: Tt
}, W = class {
	static {
		this.prototype.isVector2 = !0;
	}
	constructor(e = 0, t = 0) {
		this.x = e, this.y = t;
	}
	get width() {
		return this.x;
	}
	set width(e) {
		this.x = e;
	}
	get height() {
		return this.y;
	}
	set height(e) {
		this.y = e;
	}
	set(e, t) {
		return this.x = e, this.y = t, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			default: throw Error("THREE.Vector2: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			default: throw Error("THREE.Vector2: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = e.elements;
		return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
	}
	clamp(e, t) {
		return this.x = U(this.x, e.x, t.x), this.y = U(this.y, e.y, t.y), this;
	}
	clampScalar(e, t) {
		return this.x = U(this.x, e, t), this.y = U(this.y, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(U(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y;
	}
	cross(e) {
		return this.x * e.y - this.y * e.x;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	angle() {
		return Math.atan2(-this.y, -this.x) + Math.PI;
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(U(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y;
		return t * t + n * n;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this;
	}
	rotateAround(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
		return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y;
	}
}, Ot = class {
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
	}
	static slerpFlat(e, t, n, r, i, a, o) {
		let s = n[r + 0], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = i[a + 0], f = i[a + 1], p = i[a + 2], m = i[a + 3];
		if (u !== m || s !== d || c !== f || l !== p) {
			let e = s * d + c * f + l * p + u * m;
			e < 0 && (d = -d, f = -f, p = -p, m = -m, e = -e);
			let t = 1 - o;
			if (e < .9995) {
				let n = Math.acos(e), r = Math.sin(n);
				t = Math.sin(t * n) / r, o = Math.sin(o * n) / r, s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
			} else {
				s = s * t + d * o, c = c * t + f * o, l = l * t + p * o, u = u * t + m * o;
				let e = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
				s *= e, c *= e, l *= e, u *= e;
			}
		}
		e[t] = s, e[t + 1] = c, e[t + 2] = l, e[t + 3] = u;
	}
	static multiplyQuaternionsFlat(e, t, n, r, i, a) {
		let o = n[r], s = n[r + 1], c = n[r + 2], l = n[r + 3], u = i[a], d = i[a + 1], f = i[a + 2], p = i[a + 3];
		return e[t] = o * p + l * u + s * f - c * d, e[t + 1] = s * p + l * d + c * u - o * f, e[t + 2] = c * p + l * f + o * d - s * u, e[t + 3] = l * p - o * u - s * d - c * f, e;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get w() {
		return this._w;
	}
	set w(e) {
		this._w = e, this._onChangeCallback();
	}
	set(e, t, n, r) {
		return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}
	copy(e) {
		return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
	}
	setFromEuler(e, t = !0) {
		let n = e._x, r = e._y, i = e._z, a = e._order, o = Math.cos, s = Math.sin, c = o(n / 2), l = o(r / 2), u = o(i / 2), d = s(n / 2), f = s(r / 2), p = s(i / 2);
		switch (a) {
			case "XYZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "YXZ":
				this._x = d * l * u + c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "ZXY":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "ZYX":
				this._x = d * l * u - c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u + d * f * p;
				break;
			case "YZX":
				this._x = d * l * u + c * f * p, this._y = c * f * u + d * l * p, this._z = c * l * p - d * f * u, this._w = c * l * u - d * f * p;
				break;
			case "XZY":
				this._x = d * l * u - c * f * p, this._y = c * f * u - d * l * p, this._z = c * l * p + d * f * u, this._w = c * l * u + d * f * p;
				break;
			default: V("Quaternion: .setFromEuler() encountered an unknown order: " + a);
		}
		return t === !0 && this._onChangeCallback(), this;
	}
	setFromAxisAngle(e, t) {
		let n = t / 2, r = Math.sin(n);
		return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e) {
		let t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], o = t[5], s = t[9], c = t[2], l = t[6], u = t[10], d = n + o + u;
		if (d > 0) {
			let e = .5 / Math.sqrt(d + 1);
			this._w = .25 / e, this._x = (l - s) * e, this._y = (i - c) * e, this._z = (a - r) * e;
		} else if (n > o && n > u) {
			let e = 2 * Math.sqrt(1 + n - o - u);
			this._w = (l - s) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + c) / e;
		} else if (o > u) {
			let e = 2 * Math.sqrt(1 + o - n - u);
			this._w = (i - c) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (s + l) / e;
		} else {
			let e = 2 * Math.sqrt(1 + u - n - o);
			this._w = (a - r) / e, this._x = (i + c) / e, this._y = (s + l) / e, this._z = .25 * e;
		}
		return this._onChangeCallback(), this;
	}
	setFromUnitVectors(e, t) {
		let n = e.dot(t) + 1;
		return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
	}
	angleTo(e) {
		return 2 * Math.acos(Math.abs(U(this.dot(e), -1, 1)));
	}
	rotateTowards(e, t) {
		let n = this.angleTo(e);
		if (n === 0) return this;
		let r = Math.min(1, t / n);
		return this.slerp(e, r), this;
	}
	identity() {
		return this.set(0, 0, 0, 1);
	}
	invert() {
		return this.conjugate();
	}
	conjugate() {
		return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
	}
	dot(e) {
		return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
	}
	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
	}
	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
	}
	normalize() {
		let e = this.length();
		return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this._onChangeCallback(), this;
	}
	multiply(e) {
		return this.multiplyQuaternions(this, e);
	}
	premultiply(e) {
		return this.multiplyQuaternions(e, this);
	}
	multiplyQuaternions(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = t._x, s = t._y, c = t._z, l = t._w;
		return this._x = n * l + a * o + r * c - i * s, this._y = r * l + a * s + i * o - n * c, this._z = i * l + a * c + n * s - r * o, this._w = a * l - n * o - r * s - i * c, this._onChangeCallback(), this;
	}
	slerp(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, o = this.dot(e);
		o < 0 && (n = -n, r = -r, i = -i, a = -a, o = -o);
		let s = 1 - t;
		if (o < .9995) {
			let e = Math.acos(o), c = Math.sin(e);
			s = Math.sin(s * e) / c, t = Math.sin(t * e) / c, this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this._onChangeCallback();
		} else this._x = this._x * s + n * t, this._y = this._y * s + r * t, this._z = this._z * s + i * t, this._w = this._w * s + a * t, this.normalize();
		return this;
	}
	slerpQuaternions(e, t, n) {
		return this.copy(e).slerp(t, n);
	}
	random() {
		let e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), i = Math.sqrt(n);
		return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
	}
	fromArray(e, t = 0) {
		return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
	}
	fromBufferAttribute(e, t) {
		return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
	}
	toJSON() {
		return this.toArray();
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._w;
	}
}, G = class {
	static {
		this.prototype.isVector3 = !0;
	}
	constructor(e = 0, t = 0, n = 0) {
		this.x = e, this.y = t, this.z = n;
	}
	set(e, t, n) {
		return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			default: throw Error("THREE.Vector3: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw Error("THREE.Vector3: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this;
	}
	multiplyVectors(e, t) {
		return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
	}
	applyEuler(e) {
		return this.applyQuaternion(At.setFromEuler(e));
	}
	applyAxisAngle(e, t) {
		return this.applyQuaternion(At.setFromAxisAngle(e, t));
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
	}
	applyNormalMatrix(e) {
		return this.applyMatrix3(e).normalize();
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
		return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
	}
	applyQuaternion(e) {
		let t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, o = e.z, s = e.w, c = 2 * (a * r - o * n), l = 2 * (o * t - i * r), u = 2 * (i * n - a * t);
		return this.x = t + s * c + a * u - o * l, this.y = n + s * l + o * c - i * u, this.z = r + s * u + i * l - a * c, this;
	}
	project(e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
	}
	unproject(e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
	}
	transformDirection(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
	}
	clamp(e, t) {
		return this.x = U(this.x, e.x, t.x), this.y = U(this.y, e.y, t.y), this.z = U(this.z, e.z, t.z), this;
	}
	clampScalar(e, t) {
		return this.x = U(this.x, e, t), this.y = U(this.y, e, t), this.z = U(this.z, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(U(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
	}
	cross(e) {
		return this.crossVectors(this, e);
	}
	crossVectors(e, t) {
		let n = e.x, r = e.y, i = e.z, a = t.x, o = t.y, s = t.z;
		return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this;
	}
	projectOnVector(e) {
		let t = e.lengthSq();
		if (t === 0) return this.set(0, 0, 0);
		let n = e.dot(this) / t;
		return this.copy(e).multiplyScalar(n);
	}
	projectOnPlane(e) {
		return kt.copy(this).projectOnVector(e), this.sub(kt);
	}
	reflect(e) {
		return this.sub(kt.copy(e).multiplyScalar(2 * this.dot(e)));
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(U(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
		return t * t + n * n + r * r;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
	}
	setFromSpherical(e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
	}
	setFromSphericalCoords(e, t, n) {
		let r = Math.sin(t) * e;
		return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
	}
	setFromCylindrical(e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
	}
	setFromCylindricalCoords(e, t, n) {
		return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this;
	}
	setFromMatrixScale(e) {
		let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
		return this.x = t, this.y = n, this.z = r, this;
	}
	setFromMatrixColumn(e, t) {
		return this.fromArray(e.elements, t * 4);
	}
	setFromMatrix3Column(e, t) {
		return this.fromArray(e.elements, t * 3);
	}
	setFromEuler(e) {
		return this.x = e._x, this.y = e._y, this.z = e._z, this;
	}
	setFromColor(e) {
		return this.x = e.r, this.y = e.g, this.z = e.b, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
	}
	randomDirection() {
		let e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
		return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z;
	}
}, kt = /*@__PURE__*/ new G(), At = /*@__PURE__*/ new Ot(), K = class {
	static {
		this.prototype.isMatrix3 = !0;
	}
	constructor(e, t, n, r, i, a, o, s, c) {
		this.elements = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c);
	}
	set(e, t, n, r, i, a, o, s, c) {
		let l = this.elements;
		return l[0] = e, l[1] = r, l[2] = o, l[3] = t, l[4] = i, l[5] = s, l[6] = n, l[7] = a, l[8] = c, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
	}
	extractBasis(e, t, n) {
		return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
	}
	setFromMatrix4(e) {
		let t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[3], s = n[6], c = n[1], l = n[4], u = n[7], d = n[2], f = n[5], p = n[8], m = r[0], h = r[3], g = r[6], _ = r[1], v = r[4], y = r[7], b = r[2], x = r[5], S = r[8];
		return i[0] = a * m + o * _ + s * b, i[3] = a * h + o * v + s * x, i[6] = a * g + o * y + s * S, i[1] = c * m + l * _ + u * b, i[4] = c * h + l * v + u * x, i[7] = c * g + l * y + u * S, i[2] = d * m + f * _ + p * b, i[5] = d * h + f * v + p * x, i[8] = d * g + f * y + p * S, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8];
		return t * a * l - t * o * c - n * i * l + n * o * s + r * i * c - r * a * s;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = l * a - o * c, d = o * s - l * i, f = c * i - a * s, p = t * u + n * d + r * f;
		if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		let m = 1 / p;
		return e[0] = u * m, e[1] = (r * c - l * n) * m, e[2] = (o * n - r * a) * m, e[3] = d * m, e[4] = (l * t - r * s) * m, e[5] = (r * i - o * t) * m, e[6] = f * m, e[7] = (n * s - c * t) * m, e[8] = (a * t - n * i) * m, this;
	}
	transpose() {
		let e, t = this.elements;
		return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e).invert().transpose();
	}
	transposeIntoArray(e) {
		let t = this.elements;
		return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
	}
	setUvTransform(e, t, n, r, i, a, o) {
		let s = Math.cos(i), c = Math.sin(i);
		return this.set(n * s, n * c, -n * (s * a + c * o) + a + e, -r * c, r * s, -r * (-c * a + s * o) + o + t, 0, 0, 1), this;
	}
	scale(e, t) {
		return Ze("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(jt.makeScale(e, t)), this;
	}
	rotate(e) {
		return Ze("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(jt.makeRotation(-e)), this;
	}
	translate(e, t) {
		return Ze("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(jt.makeTranslation(e, t)), this;
	}
	makeTranslation(e, t) {
		return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
	}
	makeRotation(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
	}
	makeScale(e, t) {
		return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
	}
	clone() {
		return new this.constructor().fromArray(this.elements);
	}
}, jt = /*@__PURE__*/ new K(), Mt = /*@__PURE__*/ new K().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), Nt = /*@__PURE__*/ new K().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function Pt() {
	let e = {
		enabled: !0,
		workingColorSpace: Re,
		spaces: {},
		convert: function(e, t, n) {
			return this.enabled === !1 || t === n || !t || !n || (this.spaces[t].transfer === "srgb" && (e.r = Ft(e.r), e.g = Ft(e.g), e.b = Ft(e.b)), this.spaces[t].primaries !== this.spaces[n].primaries && (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)), this.spaces[n].transfer === "srgb" && (e.r = It(e.r), e.g = It(e.g), e.b = It(e.b))), e;
		},
		workingToColorSpace: function(e, t) {
			return this.convert(e, this.workingColorSpace, t);
		},
		colorSpaceToWorking: function(e, t) {
			return this.convert(e, t, this.workingColorSpace);
		},
		getPrimaries: function(e) {
			return this.spaces[e].primaries;
		},
		getTransfer: function(e) {
			return e === "" ? ze : this.spaces[e].transfer;
		},
		getToneMappingMode: function(e) {
			return this.spaces[e].outputColorSpaceConfig.toneMappingMode || "standard";
		},
		getLuminanceCoefficients: function(e, t = this.workingColorSpace) {
			return e.fromArray(this.spaces[t].luminanceCoefficients);
		},
		define: function(e) {
			Object.assign(this.spaces, e);
		},
		_getMatrix: function(e, t, n) {
			return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ);
		},
		_getDrawingBufferColorSpace: function(e) {
			return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
		},
		_getUnpackColorSpace: function(e = this.workingColorSpace) {
			return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
		}
	}, t = [
		.64,
		.33,
		.3,
		.6,
		.15,
		.06
	], n = [
		.2126,
		.7152,
		.0722
	], r = [.3127, .329];
	return e.define({
		[Re]: {
			primaries: t,
			whitePoint: r,
			transfer: ze,
			toXYZ: Mt,
			fromXYZ: Nt,
			luminanceCoefficients: n,
			workingColorSpaceConfig: { unpackColorSpace: Le },
			outputColorSpaceConfig: { drawingBufferColorSpace: Le }
		},
		[Le]: {
			primaries: t,
			whitePoint: r,
			transfer: Be,
			toXYZ: Mt,
			fromXYZ: Nt,
			luminanceCoefficients: n,
			outputColorSpaceConfig: { drawingBufferColorSpace: Le }
		}
	}), e;
}
var q = /*@__PURE__*/ Pt();
function Ft(e) {
	return e < .04045 ? e * .0773993808 : (e * .9478672986 + .0521327014) ** 2.4;
}
function It(e) {
	return e < .0031308 ? e * 12.92 : 1.055 * e ** .41666 - .055;
}
var Lt, Rt = class {
	static getDataURL(e, t = "image/png") {
		if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
		let n;
		if (e instanceof HTMLCanvasElement) n = e;
		else {
			Lt === void 0 && (Lt = Ke("canvas")), Lt.width = e.width, Lt.height = e.height;
			let t = Lt.getContext("2d");
			e instanceof ImageData ? t.putImageData(e, 0, 0) : t.drawImage(e, 0, 0, e.width, e.height), n = Lt;
		}
		return n.toDataURL(t);
	}
	static sRGBToLinear(e) {
		if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
			let t = Ke("canvas");
			t.width = e.width, t.height = e.height;
			let n = t.getContext("2d");
			n.drawImage(e, 0, 0, e.width, e.height);
			let r = n.getImageData(0, 0, e.width, e.height), i = r.data;
			for (let e = 0; e < i.length; e++) i[e] = Ft(i[e] / 255) * 255;
			return n.putImageData(r, 0, 0), t;
		}
		if (e.data) {
			let t = e.data.slice(0);
			for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(Ft(t[e] / 255) * 255) : t[e] = Ft(t[e]);
			return {
				data: t,
				width: e.width,
				height: e.height
			};
		}
		return V("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
	}
}, zt = 0, Bt = class {
	constructor(e = null) {
		this.isTextureSource = !0, Object.defineProperty(this, "id", { value: zt++ }), this.uuid = at(), this.data = e, this.dataReady = !0, this.version = 0;
	}
	getSize(e) {
		let t = this.data;
		return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t === null ? e.set(0, 0, 0) : e.set(t.width || 0, t.height || 0, t.depth || 0), e;
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
		let n = {
			uuid: this.uuid,
			url: ""
		}, r = this.data;
		if (r !== null) {
			let e;
			if (Array.isArray(r)) {
				e = [];
				for (let t = 0, n = r.length; t < n; t++) r[t].isDataTexture ? e.push(Vt(r[t].image)) : e.push(Vt(r[t]));
			} else e = Vt(r);
			n.url = e;
		}
		return t || (e.images[this.uuid] = n), n;
	}
};
function Vt(e) {
	return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? Rt.getDataURL(e) : e.data ? {
		data: Array.from(e.data),
		width: e.width,
		height: e.height,
		type: e.data.constructor.name
	} : (V("Texture: Unable to serialize Texture."), {});
}
var Ht = 0, Ut = /*@__PURE__*/ new G(), Wt = class e extends et {
	constructor(t = e.DEFAULT_IMAGE, n = e.DEFAULT_MAPPING, i = r, a = r, o = c, s = u, l = E, f = d, p = e.DEFAULT_ANISOTROPY, m = "") {
		super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Ht++ }), this.uuid = at(), this.name = "", this.source = new Bt(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = i, this.wrapT = a, this.magFilter = o, this.minFilter = s, this.anisotropy = p, this.format = l, this.internalFormat = null, this.type = f, this.offset = new W(0, 0), this.repeat = new W(1, 1), this.center = new W(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new K(), this.generateMipmaps = !0, this.mipmapsAutoUpdate = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = m, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.isPMREMTexture = !1, this.normalized = !1;
	}
	get width() {
		return this.source.getSize(Ut).x;
	}
	get height() {
		return this.source.getSize(Ut).y;
	}
	get depth() {
		return this.source.getSize(Ut).z;
	}
	get image() {
		return this.source.data;
	}
	set image(e) {
		this.source.data = e;
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.mipmapsAutoUpdate = e.mipmapsAutoUpdate, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isPMREMTexture = e.isPMREMTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
	}
	setValues(e) {
		for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				V(`Texture.setValues(): parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			r === void 0 ? V(`Texture.setValues(): property '${t}' does not exist.`) : r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
		let n = {
			metadata: {
				version: 4.7,
				type: "Texture",
				generator: "Texture.toJSON"
			},
			uuid: this.uuid,
			name: this.name,
			image: this.source.toJSON(e).uuid,
			mapping: this.mapping,
			channel: this.channel,
			repeat: [this.repeat.x, this.repeat.y],
			offset: [this.offset.x, this.offset.y],
			center: [this.center.x, this.center.y],
			rotation: this.rotation,
			wrap: [this.wrapS, this.wrapT],
			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			normalized: this.normalized,
			colorSpace: this.colorSpace,
			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,
			flipY: this.flipY,
			generateMipmaps: this.generateMipmaps,
			mipmapsAutoUpdate: this.mipmapsAutoUpdate,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment
		};
		return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	transformUv(e) {
		if (this.mapping !== 300) return e;
		if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
			case n:
				e.x -= Math.floor(e.x);
				break;
			case r:
				e.x = e.x < 0 ? 0 : 1;
				break;
			case i: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x);
		}
		if (e.y < 0 || e.y > 1) switch (this.wrapT) {
			case n:
				e.y -= Math.floor(e.y);
				break;
			case r:
				e.y = e.y < 0 ? 0 : 1;
				break;
			case i: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y);
		}
		return this.flipY && (e.y = 1 - e.y), e;
	}
	set needsUpdate(e) {
		e === !0 && (this.version++, this.source.needsUpdate = !0);
	}
	set needsPMREMUpdate(e) {
		e === !0 && this.pmremVersion++;
	}
};
Wt.DEFAULT_IMAGE = null, Wt.DEFAULT_MAPPING = 300, Wt.DEFAULT_ANISOTROPY = 1;
var Gt = class {
	static {
		this.prototype.isVector4 = !0;
	}
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.x = e, this.y = t, this.z = n, this.w = r;
	}
	get width() {
		return this.z;
	}
	set width(e) {
		this.z = e;
	}
	get height() {
		return this.w;
	}
	set height(e) {
		this.w = e;
	}
	set(e, t, n, r) {
		return this.x = e, this.y = t, this.z = n, this.w = r, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this.w = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setW(e) {
		return this.w = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			case 3:
				this.w = t;
				break;
			default: throw Error("THREE.Vector4: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw Error("THREE.Vector4: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w === void 0 ? 1 : e.w, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this.w += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
		return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	setAxisAngleFromQuaternion(e) {
		this.w = 2 * Math.acos(e.w);
		let t = Math.sqrt(1 - e.w * e.w);
		return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
	}
	setAxisAngleFromRotationMatrix(e) {
		let t, n, r, i, a = .01, o = .1, s = e.elements, c = s[0], l = s[4], u = s[8], d = s[1], f = s[5], p = s[9], m = s[2], h = s[6], g = s[10];
		if (Math.abs(l - d) < a && Math.abs(u - m) < a && Math.abs(p - h) < a) {
			if (Math.abs(l + d) < o && Math.abs(u + m) < o && Math.abs(p + h) < o && Math.abs(c + f + g - 3) < o) return this.set(1, 0, 0, 0), this;
			t = Math.PI;
			let e = (c + 1) / 2, s = (f + 1) / 2, _ = (g + 1) / 2, v = (l + d) / 4, y = (u + m) / 4, b = (p + h) / 4;
			return e > s && e > _ ? e < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(e), r = v / n, i = y / n) : s > _ ? s < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(s), n = v / r, i = b / r) : _ < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(_), n = y / i, r = b / i), this.set(n, r, i, t), this;
		}
		let _ = Math.sqrt((h - p) * (h - p) + (u - m) * (u - m) + (d - l) * (d - l));
		return Math.abs(_) < .001 && (_ = 1), this.x = (h - p) / _, this.y = (u - m) / _, this.z = (d - l) / _, this.w = Math.acos((c + f + g - 1) / 2), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
	}
	clamp(e, t) {
		return this.x = U(this.x, e.x, t.x), this.y = U(this.y, e.y, t.y), this.z = U(this.z, e.z, t.z), this.w = U(this.w, e.w, t.w), this;
	}
	clampScalar(e, t) {
		return this.x = U(this.x, e, t), this.y = U(this.y, e, t), this.z = U(this.z, e, t), this.w = U(this.w, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(U(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z, yield this.w;
	}
}, Kt = class extends et {
	constructor(e = 1, t = 1, n = {}) {
		super(), n = Object.assign({
			generateMipmaps: !1,
			internalFormat: null,
			minFilter: c,
			depthBuffer: !0,
			stencilBuffer: !1,
			resolveColorBuffer: !0,
			resolveDepthBuffer: !0,
			resolveStencilBuffer: !0,
			storeMultisampledColorBuffer: !0,
			storeMultisampledDepthBuffer: !0,
			storeMultisampledStencilBuffer: !0,
			depthTexture: null,
			samples: 0,
			count: 1,
			depth: 1,
			multiview: !1,
			useArrayDepthTexture: !1
		}, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new Gt(0, 0, e, t), this.scissorTest = !1, this.viewport = new Gt(0, 0, e, t), this.textures = [];
		let r = n.count;
		for (let i = 0; i < r; i++) this.textures[i] = new Wt({
			width: e,
			height: t,
			depth: n.depth
		}), this.textures[i].isRenderTargetTexture = !0, this.textures[i].renderTarget = this;
		this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveColorBuffer = n.resolveColorBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.storeMultisampledColorBuffer = n.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = n.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = n.storeMultisampledStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview, this.useArrayDepthTexture = n.useArrayDepthTexture;
	}
	_setTextureOptions(e = {}) {
		let t = {
			minFilter: c,
			generateMipmaps: !1,
			flipY: !1,
			internalFormat: null
		};
		e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.mipmapsAutoUpdate !== void 0 && (t.mipmapsAutoUpdate = e.mipmapsAutoUpdate), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
		for (let e = 0; e < this.textures.length; e++) this.textures[e].setValues(t);
	}
	get texture() {
		return this.textures[0];
	}
	set texture(e) {
		this.textures[0] = e;
	}
	set depthTexture(e) {
		this._depthTexture !== null && this._depthTexture.renderTarget === this && (this._depthTexture.renderTarget = null), e !== null && e.renderTarget === null && (e.renderTarget = this), this._depthTexture = e;
	}
	get depthTexture() {
		return this._depthTexture;
	}
	setSize(e, t, n = 1) {
		if (this.width !== e || this.height !== t || this.depth !== n) {
			this.width = e, this.height = t, this.depth = n;
			for (let r = 0, i = this.textures.length; r < i; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
			this.dispose();
		}
		this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
		for (let t = 0, n = e.textures.length; t < n; t++) {
			this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
			let n = Object.assign({}, e.textures[t].image);
			this.textures[t].source = new Bt(n);
		}
		if (this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveColorBuffer = e.resolveColorBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, this.storeMultisampledColorBuffer = e.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = e.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = e.storeMultisampledStencilBuffer, e.depthTexture !== null) {
			if (e.depthTexture.renderTarget === e) {
				let t = e.depthTexture.clone();
				t.renderTarget = null, this.depthTexture = t;
			} else this.depthTexture = e.depthTexture;
		} else this.depthTexture = null;
		return this.samples = e.samples, this.multiview = e.multiview, this.useArrayDepthTexture = e.useArrayDepthTexture, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, qt = class extends Kt {
	constructor(e = 1, t = 1, n = {}) {
		super(e, t, n), this.isWebGLRenderTarget = !0;
	}
}, Jt = class extends Wt {
	constructor(e = null, t = 1, n = 1, i = 1) {
		super(null), this.isDataArrayTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: i
		}, this.magFilter = a, this.minFilter = a, this.wrapR = r, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
	}
	copy(e) {
		return super.copy(e), this.wrapR = e.wrapR, this;
	}
	addLayerUpdate(e) {
		this.layerUpdates.add(e);
	}
	clearLayerUpdates() {
		this.layerUpdates.clear();
	}
}, Yt = class extends Wt {
	constructor(e = null, t = 1, n = 1, i = 1) {
		super(null), this.isData3DTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: i
		}, this.magFilter = a, this.minFilter = a, this.wrapR = r, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
	copy(e) {
		return super.copy(e), this.wrapR = e.wrapR, this;
	}
}, Xt = class e {
	static {
		this.prototype.isMatrix4 = !0;
	}
	constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		this.elements = [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h);
	}
	set(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		let g = this.elements;
		return g[0] = e, g[4] = t, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = l, g[10] = u, g[14] = d, g[3] = f, g[7] = p, g[11] = m, g[15] = h, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	clone() {
		return new e().fromArray(this.elements);
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
	}
	copyPosition(e) {
		let t = this.elements, n = e.elements;
		return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
	}
	setFromMatrix3(e) {
		let t = e.elements;
		return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
	}
	extractBasis(e, t, n) {
		return this.determinantAffine() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
	}
	makeBasis(e, t, n) {
		return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
	}
	extractRotation(e) {
		if (e.determinantAffine() === 0) return this.identity();
		let t = this.elements, n = e.elements, r = 1 / Zt.setFromMatrixColumn(e, 0).length(), i = 1 / Zt.setFromMatrixColumn(e, 1).length(), a = 1 / Zt.setFromMatrixColumn(e, 2).length();
		return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromEuler(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), o = Math.sin(n), s = Math.cos(r), c = Math.sin(r), l = Math.cos(i), u = Math.sin(i);
		if (e.order === "XYZ") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = -s * u, t[8] = c, t[1] = n + r * c, t[5] = e - i * c, t[9] = -o * s, t[2] = i - e * c, t[6] = r + n * c, t[10] = a * s;
		} else if (e.order === "YXZ") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e + i * o, t[4] = r * o - n, t[8] = a * c, t[1] = a * u, t[5] = a * l, t[9] = -o, t[2] = n * o - r, t[6] = i + e * o, t[10] = a * s;
		} else if (e.order === "ZXY") {
			let e = s * l, n = s * u, r = c * l, i = c * u;
			t[0] = e - i * o, t[4] = -a * u, t[8] = r + n * o, t[1] = n + r * o, t[5] = a * l, t[9] = i - e * o, t[2] = -a * c, t[6] = o, t[10] = a * s;
		} else if (e.order === "ZYX") {
			let e = a * l, n = a * u, r = o * l, i = o * u;
			t[0] = s * l, t[4] = r * c - n, t[8] = e * c + i, t[1] = s * u, t[5] = i * c + e, t[9] = n * c - r, t[2] = -c, t[6] = o * s, t[10] = a * s;
		} else if (e.order === "YZX") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = i - e * u, t[8] = r * u + n, t[1] = u, t[5] = a * l, t[9] = -o * l, t[2] = -c * l, t[6] = n * u + r, t[10] = e - i * u;
		} else if (e.order === "XZY") {
			let e = a * s, n = a * c, r = o * s, i = o * c;
			t[0] = s * l, t[4] = -u, t[8] = c * l, t[1] = e * u + i, t[5] = a * l, t[9] = n * u - r, t[2] = r * u - n, t[6] = o * l, t[10] = i * u + e;
		}
		return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromQuaternion(e) {
		return this.compose($t, e, en);
	}
	lookAt(e, t, n) {
		let r = this.elements;
		return rn.subVectors(e, t), rn.lengthSq() === 0 && (rn.z = 1), rn.normalize(), tn.crossVectors(n, rn), tn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? rn.x += 1e-4 : rn.z += 1e-4, rn.normalize(), tn.crossVectors(n, rn)), tn.normalize(), nn.crossVectors(rn, tn), r[0] = tn.x, r[4] = nn.x, r[8] = rn.x, r[1] = tn.y, r[5] = nn.y, r[9] = rn.y, r[2] = tn.z, r[6] = nn.z, r[10] = rn.z, this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], o = n[4], s = n[8], c = n[12], l = n[1], u = n[5], d = n[9], f = n[13], p = n[2], m = n[6], h = n[10], g = n[14], _ = n[3], v = n[7], y = n[11], b = n[15], x = r[0], S = r[4], C = r[8], w = r[12], T = r[1], E = r[5], D = r[9], O = r[13], k = r[2], A = r[6], j = r[10], ee = r[14], te = r[3], M = r[7], N = r[11], P = r[15];
		return i[0] = a * x + o * T + s * k + c * te, i[4] = a * S + o * E + s * A + c * M, i[8] = a * C + o * D + s * j + c * N, i[12] = a * w + o * O + s * ee + c * P, i[1] = l * x + u * T + d * k + f * te, i[5] = l * S + u * E + d * A + f * M, i[9] = l * C + u * D + d * j + f * N, i[13] = l * w + u * O + d * ee + f * P, i[2] = p * x + m * T + h * k + g * te, i[6] = p * S + m * E + h * A + g * M, i[10] = p * C + m * D + h * j + g * N, i[14] = p * w + m * O + h * ee + g * P, i[3] = _ * x + v * T + y * k + b * te, i[7] = _ * S + v * E + y * A + b * M, i[11] = _ * C + v * D + y * j + b * N, i[15] = _ * w + v * O + y * ee + b * P, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], o = e[5], s = e[9], c = e[13], l = e[2], u = e[6], d = e[10], f = e[14], p = e[3], m = e[7], h = e[11], g = e[15], _ = s * f - c * d, v = o * f - c * u, y = o * d - s * u, b = a * f - c * l, x = a * d - s * l, S = a * u - o * l;
		return t * (m * _ - h * v + g * y) - n * (p * _ - h * b + g * x) + r * (p * v - m * b + g * S) - i * (p * y - m * x + h * S);
	}
	determinantAffine() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[1], a = e[5], o = e[9], s = e[2], c = e[6], l = e[10];
		return t * (a * l - o * c) - n * (i * l - o * s) + r * (i * c - a * s);
	}
	transpose() {
		let e = this.elements, t;
		return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
	}
	setPosition(e, t, n) {
		let r = this.elements;
		return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = e[9], d = e[10], f = e[11], p = e[12], m = e[13], h = e[14], g = e[15], _ = t * o - n * a, v = t * s - r * a, y = t * c - i * a, b = n * s - r * o, x = n * c - i * o, S = r * c - i * s, C = l * m - u * p, w = l * h - d * p, T = l * g - f * p, E = u * h - d * m, D = u * g - f * m, O = d * g - f * h, k = _ * O - v * D + y * E + b * T - x * w + S * C;
		if (k === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		let A = 1 / k;
		return e[0] = (o * O - s * D + c * E) * A, e[1] = (r * D - n * O - i * E) * A, e[2] = (m * S - h * x + g * b) * A, e[3] = (d * x - u * S - f * b) * A, e[4] = (s * T - a * O - c * w) * A, e[5] = (t * O - r * T + i * w) * A, e[6] = (h * y - p * S - g * v) * A, e[7] = (l * S - d * y + f * v) * A, e[8] = (a * D - o * T + c * C) * A, e[9] = (n * T - t * D - i * C) * A, e[10] = (p * x - m * y + g * _) * A, e[11] = (u * y - l * x - f * _) * A, e[12] = (o * w - a * E - s * C) * A, e[13] = (t * E - n * w + r * C) * A, e[14] = (m * v - p * b - h * _) * A, e[15] = (l * b - u * v + d * _) * A, this;
	}
	scale(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z;
		return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
	}
	getMaxScaleOnAxis() {
		let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, n, r));
	}
	makeTranslation(e, t, n) {
		return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
	}
	makeRotationX(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationY(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationZ(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	makeRotationAxis(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, o = e.y, s = e.z, c = i * a, l = i * o;
		return this.set(c * a + n, c * o - r * s, c * s + r * o, 0, c * o + r * s, l * o + n, l * s - r * a, 0, c * s - r * o, l * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this;
	}
	makeScale(e, t, n) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
	}
	makeShear(e, t, n, r, i, a) {
		return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
	}
	compose(e, t, n) {
		let r = this.elements, i = t._x, a = t._y, o = t._z, s = t._w, c = i + i, l = a + a, u = o + o, d = i * c, f = i * l, p = i * u, m = a * l, h = a * u, g = o * u, _ = s * c, v = s * l, y = s * u, b = n.x, x = n.y, S = n.z;
		return r[0] = (1 - (m + g)) * b, r[1] = (f + y) * b, r[2] = (p - v) * b, r[3] = 0, r[4] = (f - y) * x, r[5] = (1 - (d + g)) * x, r[6] = (h + _) * x, r[7] = 0, r[8] = (p + v) * S, r[9] = (h - _) * S, r[10] = (1 - (d + m)) * S, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
	}
	decompose(e, t, n) {
		let r = this.elements;
		e.x = r[12], e.y = r[13], e.z = r[14];
		let i = this.determinantAffine();
		if (i === 0) return n.set(1, 1, 1), t.identity(), this;
		let a = Zt.set(r[0], r[1], r[2]).length(), o = Zt.set(r[4], r[5], r[6]).length(), s = Zt.set(r[8], r[9], r[10]).length();
		i < 0 && (a = -a), Qt.copy(this);
		let c = 1 / a, l = 1 / o, u = 1 / s;
		return Qt.elements[0] *= c, Qt.elements[1] *= c, Qt.elements[2] *= c, Qt.elements[4] *= l, Qt.elements[5] *= l, Qt.elements[6] *= l, Qt.elements[8] *= u, Qt.elements[9] *= u, Qt.elements[10] *= u, t.setFromRotationMatrix(Qt), n.x = a, n.y = o, n.z = s, this;
	}
	makePerspective(e, t, n, r, i, a, o = Ue, s = !1) {
		let c = this.elements, l = 2 * i / (t - e), u = 2 * i / (n - r), d = (t + e) / (t - e), f = (n + r) / (n - r), p, m;
		if (s) p = i / (a - i), m = a * i / (a - i);
		else if (o === 2e3) p = -(a + i) / (a - i), m = -2 * a * i / (a - i);
		else if (o === 2001) p = -a / (a - i), m = -a * i / (a - i);
		else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = u, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
	}
	makeOrthographic(e, t, n, r, i, a, o = Ue, s = !1) {
		let c = this.elements, l = 2 / (t - e), u = 2 / (n - r), d = -(t + e) / (t - e), f = -(n + r) / (n - r), p, m;
		if (s) p = 1 / (a - i), m = a / (a - i);
		else if (o === 2e3) p = -2 / (a - i), m = -(a + i) / (a - i);
		else if (o === 2001) p = -1 / (a - i), m = -i / (a - i);
		else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
		return c[0] = l, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = u, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = p, c[14] = m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
	}
}, Zt = /*@__PURE__*/ new G(), Qt = /*@__PURE__*/ new Xt(), $t = /*@__PURE__*/ new G(0, 0, 0), en = /*@__PURE__*/ new G(1, 1, 1), tn = /*@__PURE__*/ new G(), nn = /*@__PURE__*/ new G(), rn = /*@__PURE__*/ new G(), an = /*@__PURE__*/ new Xt(), on = /*@__PURE__*/ new Ot(), sn = class e {
	constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
		this.isEuler = !0, this._x = t, this._y = n, this._z = r, this._order = i;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get order() {
		return this._order;
	}
	set order(e) {
		this._order = e, this._onChangeCallback();
	}
	set(e, t, n, r = this._order) {
		return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}
	copy(e) {
		return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e, t = this._order, n = !0) {
		let r = e.elements, i = r[0], a = r[4], o = r[8], s = r[1], c = r[5], l = r[9], u = r[2], d = r[6], f = r[10];
		switch (t) {
			case "XYZ":
				this._y = Math.asin(U(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-l, f), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(d, c), this._z = 0);
				break;
			case "YXZ":
				this._x = Math.asin(-U(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(s, c)) : (this._y = Math.atan2(-u, i), this._z = 0);
				break;
			case "ZXY":
				this._x = Math.asin(U(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(s, i));
				break;
			case "ZYX":
				this._y = Math.asin(-U(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(s, i)) : (this._x = 0, this._z = Math.atan2(-a, c));
				break;
			case "YZX":
				this._z = Math.asin(U(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-u, i)) : (this._x = 0, this._y = Math.atan2(o, f));
				break;
			case "XZY":
				this._z = Math.asin(-U(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-l, f), this._y = 0);
				break;
			default: V("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
		}
		return this._order = t, n === !0 && this._onChangeCallback(), this;
	}
	setFromQuaternion(e, t, n) {
		return an.makeRotationFromQuaternion(e), this.setFromRotationMatrix(an, t, n);
	}
	setFromVector3(e, t = this._order) {
		return this.set(e.x, e.y, e.z, t);
	}
	reorder(e) {
		return on.setFromEuler(this), this.setFromQuaternion(on, e);
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
	}
	fromArray(e) {
		return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._order;
	}
};
sn.DEFAULT_ORDER = "XYZ";
var cn = class {
	constructor() {
		this.mask = 1;
	}
	set(e) {
		this.mask = 1 << e >>> 0;
	}
	enable(e) {
		this.mask |= 1 << e;
	}
	enableAll() {
		this.mask = -1;
	}
	toggle(e) {
		this.mask ^= 1 << e;
	}
	disable(e) {
		this.mask &= ~(1 << e);
	}
	disableAll() {
		this.mask = 0;
	}
	test(e) {
		return (this.mask & e.mask) !== 0;
	}
	isEnabled(e) {
		return !!(this.mask & 1 << e);
	}
}, ln = 0, un = /*@__PURE__*/ new G(), dn = /*@__PURE__*/ new Ot(), fn = /*@__PURE__*/ new Xt(), pn = /*@__PURE__*/ new G(), mn = /*@__PURE__*/ new G(), hn = /*@__PURE__*/ new G(), gn = /*@__PURE__*/ new Ot(), _n = /*@__PURE__*/ new G(1, 0, 0), vn = /*@__PURE__*/ new G(0, 1, 0), yn = /*@__PURE__*/ new G(0, 0, 1), bn = { type: "added" }, xn = { type: "removed" }, Sn = {
	type: "childadded",
	child: null
}, Cn = {
	type: "childremoved",
	child: null
}, wn = class e extends et {
	constructor() {
		super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: ln++ }), this.uuid = at(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e.DEFAULT_UP.clone();
		let t = new G(), n = new sn(), r = new Ot(), i = new G(1, 1, 1);
		function a() {
			r.setFromEuler(n, !1);
		}
		function o() {
			n.setFromQuaternion(r, void 0, !1);
		}
		n._onChange(a), r._onChange(o), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: r
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			modelViewMatrix: { value: new Xt() },
			normalMatrix: { value: new K() }
		}), this.matrix = new Xt(), this.matrixWorld = new Xt(), this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new cn(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
	}
	onBeforeShadow() {}
	onAfterShadow() {}
	onBeforeRender() {}
	onAfterRender() {}
	applyMatrix4(e) {
		this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale), this.pivot !== null && this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot);
	}
	applyQuaternion(e) {
		return this.quaternion.premultiply(e), this;
	}
	setRotationFromAxisAngle(e, t) {
		this.quaternion.setFromAxisAngle(e, t);
	}
	setRotationFromEuler(e) {
		this.quaternion.setFromEuler(e, !0);
	}
	setRotationFromMatrix(e) {
		this.quaternion.setFromRotationMatrix(e);
	}
	setRotationFromQuaternion(e) {
		this.quaternion.copy(e);
	}
	rotateOnAxis(e, t) {
		return dn.setFromAxisAngle(e, t), this.quaternion.multiply(dn), this;
	}
	rotateOnWorldAxis(e, t) {
		return dn.setFromAxisAngle(e, t), this.quaternion.premultiply(dn), this;
	}
	rotateX(e) {
		return this.rotateOnAxis(_n, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(vn, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(yn, e);
	}
	translateOnAxis(e, t) {
		return un.copy(e).applyQuaternion(this.quaternion), this.position.add(un.multiplyScalar(t)), this;
	}
	translateX(e) {
		return this.translateOnAxis(_n, e);
	}
	translateY(e) {
		return this.translateOnAxis(vn, e);
	}
	translateZ(e) {
		return this.translateOnAxis(yn, e);
	}
	localToWorld(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
	}
	worldToLocal(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(fn.copy(this.matrixWorld).invert());
	}
	lookAt(e, t, n) {
		e.isVector3 ? pn.copy(e) : pn.set(e, t, n);
		let r = this.parent;
		this.updateWorldMatrix(!0, !1), mn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? fn.lookAt(mn, pn, this.up) : fn.lookAt(pn, mn, this.up), this.quaternion.setFromRotationMatrix(fn), r && (fn.extractRotation(r.matrixWorld), dn.setFromRotationMatrix(fn), this.quaternion.premultiply(dn.invert()));
	}
	add(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
			return this;
		}
		return e === this ? (H("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(bn), Sn.child = e, this.dispatchEvent(Sn), Sn.child = null) : H("Object3D.add: object not an instance of THREE.Object3D.", e), this);
	}
	remove(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
			return this;
		}
		let t = this.children.indexOf(e);
		return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(xn), Cn.child = e, this.dispatchEvent(Cn), Cn.child = null), this;
	}
	removeFromParent() {
		let e = this.parent;
		return e !== null && e.remove(this), this;
	}
	clear() {
		return this.remove(...this.children);
	}
	attach(e) {
		return this.updateWorldMatrix(!0, !1), fn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), fn.multiply(e.parent.matrixWorld)), e.applyMatrix4(fn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(bn), Sn.child = e, this.dispatchEvent(Sn), Sn.child = null, this;
	}
	getObjectById(e) {
		return this.getObjectByProperty("id", e);
	}
	getObjectByName(e) {
		return this.getObjectByProperty("name", e);
	}
	getObjectByProperty(e, t) {
		if (this[e] === t) return this;
		for (let n = 0, r = this.children.length; n < r; n++) {
			let r = this.children[n].getObjectByProperty(e, t);
			if (r !== void 0) return r;
		}
	}
	getObjectsByProperty(e, t, n = []) {
		this[e] === t && n.push(this);
		let r = this.children;
		for (let i = 0, a = r.length; i < a; i++) r[i].getObjectsByProperty(e, t, n);
		return n;
	}
	getWorldPosition(e) {
		return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
	}
	getWorldQuaternion(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(mn, e, hn), e;
	}
	getWorldScale(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(mn, gn, e), e;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		let t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize();
	}
	raycast() {}
	intersectsFrustum() {
		return !0;
	}
	traverse(e) {
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
	}
	traverseVisible(e) {
		if (this.visible === !1) return;
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
	}
	traverseAncestors(e) {
		let t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e));
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale);
		let e = this.pivot;
		if (e !== null) {
			let t = e.x, n = e.y, r = e.z, i = this.matrix.elements;
			i[12] += t - i[0] * t - i[4] * n - i[8] * r, i[13] += n - i[1] * t - i[5] * n - i[9] * r, i[14] += r - i[2] * t - i[6] * n - i[10] * r;
		}
		this.matrixWorldNeedsUpdate = !0;
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
	}
	updateWorldMatrix(e, t, n = !1) {
		let r = this.parent;
		if (e === !0 && r !== null && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, n = !0), t === !0) {
			let e = this.children;
			for (let t = 0, r = e.length; t < r; t++) e[t].updateWorldMatrix(!1, !0, n);
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string", n = {};
		t && (e = {
			geometries: {},
			materials: {},
			textures: {},
			images: {},
			shapes: {},
			skeletons: {},
			animations: {},
			nodes: {}
		}, n.metadata = {
			version: 4.7,
			type: "Object",
			generator: "Object3D.toJSON"
		});
		let r = {};
		r.uuid = this.uuid, r.type = this.type, r.name = this.name, r.castShadow = this.castShadow, r.receiveShadow = this.receiveShadow, r.visible = this.visible, r.frustumCulled = this.frustumCulled, r.renderOrder = this.renderOrder, r.static = this.static, r.matrixAutoUpdate = this.matrixAutoUpdate, Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((e) => ({
			...e,
			boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
			boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : void 0
		})), r.instanceInfo = this._instanceInfo.map((e) => ({ ...e })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
		function i(t, n) {
			return t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid;
		}
		if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
		else if (this.isMesh || this.isLine || this.isPoints) {
			r.geometry = i(e.geometries, this.geometry);
			let t = this.geometry.parameters;
			if (t !== void 0 && t.shapes !== void 0) {
				let n = t.shapes;
				if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					i(e.shapes, r);
				}
				else i(e.shapes, n);
			}
		}
		if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) {
			if (Array.isArray(this.material)) {
				let t = [];
				for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
				r.material = t;
			} else r.material = i(e.materials, this.material);
		}
		if (this.children.length > 0) {
			r.children = [];
			for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object);
		}
		if (this.animations.length > 0) {
			r.animations = [];
			for (let t = 0; t < this.animations.length; t++) {
				let n = this.animations[t];
				r.animations.push(i(e.animations, n));
			}
		}
		if (t) {
			let t = a(e.geometries), r = a(e.materials), i = a(e.textures), o = a(e.images), s = a(e.shapes), c = a(e.skeletons), l = a(e.animations), u = a(e.nodes);
			t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), o.length > 0 && (n.images = o), s.length > 0 && (n.shapes = s), c.length > 0 && (n.skeletons = c), l.length > 0 && (n.animations = l), u.length > 0 && (n.nodes = u);
		}
		return n.object = r, n;
		function a(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
	}
	clone(e) {
		return new this.constructor().copy(this, e);
	}
	copy(e, t = !0) {
		if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot === null ? null : e.pivot.clone(), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let t = 0; t < e.children.length; t++) {
			let n = e.children[t];
			this.add(n.clone());
		}
		return this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
};
wn.DEFAULT_UP = /*@__PURE__*/ new G(0, 1, 0), wn.DEFAULT_MATRIX_AUTO_UPDATE = !0, wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var Tn = class extends wn {
	constructor() {
		super(), this.isGroup = !0, this.type = "Group";
	}
}, En = { type: "move" }, Dn = class {
	constructor() {
		this._targetRay = null, this._grip = null, this._hand = null;
	}
	getHandSpace() {
		return this._hand === null && (this._hand = new Tn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
	}
	getTargetRaySpace() {
		return this._targetRay === null && (this._targetRay = new Tn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new G(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new G()), this._targetRay;
	}
	getGripSpace() {
		return this._grip === null && (this._grip = new Tn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new G(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new G(), this._grip.eventsEnabled = !1), this._grip;
	}
	dispatchEvent(e) {
		return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
	}
	connect(e) {
		if (e && e.hand) {
			let t = this._hand;
			if (t) for (let n of e.hand.values()) this._getHandJoint(t, n);
		}
		return this.dispatchEvent({
			type: "connected",
			data: e
		}), this;
	}
	disconnect(e) {
		return this.dispatchEvent({
			type: "disconnected",
			data: e
		}), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
	}
	update(e, t, n) {
		let r = null, i = null, a = null, o = this._targetRay, s = this._grip, c = this._hand;
		if (e && t.session.visibilityState !== "visible-blurred") {
			if (c && e.hand) {
				a = !0;
				for (let r of e.hand.values()) {
					let e = t.getJointPose(r, n), i = this._getHandJoint(c, r);
					e !== null && (i.matrix.fromArray(e.transform.matrix), i.matrix.decompose(i.position, i.quaternion, i.scale), i.matrixWorldNeedsUpdate = !0, i.jointRadius = e.radius), i.visible = e !== null;
				}
				let r = c.joints["index-finger-tip"], i = c.joints["thumb-tip"], o = r.position.distanceTo(i.position);
				c.inputState.pinching && o > .025 ? (c.inputState.pinching = !1, this.dispatchEvent({
					type: "pinchend",
					handedness: e.handedness,
					target: this
				})) : !c.inputState.pinching && o <= .015 && (c.inputState.pinching = !0, this.dispatchEvent({
					type: "pinchstart",
					handedness: e.handedness,
					target: this
				}));
			} else s !== null && e.gripSpace && (i = t.getPose(e.gripSpace, n), i !== null && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.quaternion, s.scale), s.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1, s.eventsEnabled && s.dispatchEvent({
				type: "gripUpdated",
				data: e,
				target: this
			})));
			o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && i !== null && (r = i), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(En)));
		}
		return o !== null && (o.visible = r !== null), s !== null && (s.visible = i !== null), c !== null && (c.visible = a !== null), this;
	}
	_getHandJoint(e, t) {
		if (e.joints[t.jointName] === void 0) {
			let n = new Tn();
			n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
		}
		return e.joints[t.jointName];
	}
}, On = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
}, kn = {
	h: 0,
	s: 0,
	l: 0
}, An = {
	h: 0,
	s: 0,
	l: 0
};
function jn(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
var J = class {
	constructor(e, t, n) {
		return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
	}
	set(e, t, n) {
		if (t === void 0 && n === void 0) {
			let t = e;
			t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t);
		} else this.setRGB(e, t, n);
		return this;
	}
	setScalar(e) {
		return this.r = e, this.g = e, this.b = e, this;
	}
	setHex(e, t = Le) {
		return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, q.colorSpaceToWorking(this, t), this;
	}
	setRGB(e, t, n, r = q.workingColorSpace) {
		return this.r = e, this.g = t, this.b = n, q.colorSpaceToWorking(this, r), this;
	}
	setHSL(e, t, n, r = q.workingColorSpace) {
		if (e = ot(e, 1), t = U(t, 0, 1), n = U(n, 0, 1), t === 0) this.r = this.g = this.b = n;
		else {
			let r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
			this.r = jn(i, r, e + 1 / 3), this.g = jn(i, r, e), this.b = jn(i, r, e - 1 / 3);
		}
		return q.colorSpaceToWorking(this, r), this;
	}
	setStyle(e, t = Le) {
		function n(t) {
			t !== void 0 && parseFloat(t) < 1 && V("Color: Alpha component of " + e + " will be ignored.");
		}
		let r;
		if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
			let i, a = r[1], o = r[2];
			switch (a) {
				case "rgb":
				case "rgba":
					if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
					if (i = /^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o)) return n(i[4]), this.setRGB(Math.min(100, parseFloat(i[1])) / 100, Math.min(100, parseFloat(i[2])) / 100, Math.min(100, parseFloat(i[3])) / 100, t);
					break;
				case "hsl":
				case "hsla":
					if (i = /^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o)) return n(i[4]), this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
					break;
				default: V("Color: Unknown color model " + e);
			}
		} else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
			let n = r[1], i = n.length;
			if (i === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
			if (i === 6) return this.setHex(parseInt(n, 16), t);
			V("Color: Invalid hex color " + e);
		} else if (e && e.length > 0) return this.setColorName(e, t);
		return this;
	}
	setColorName(e, t = Le) {
		let n = On[e.toLowerCase()];
		return n === void 0 ? V("Color: Unknown color " + e) : this.setHex(n, t), this;
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}
	copy(e) {
		return this.r = e.r, this.g = e.g, this.b = e.b, this;
	}
	copySRGBToLinear(e) {
		return this.r = Ft(e.r), this.g = Ft(e.g), this.b = Ft(e.b), this;
	}
	copyLinearToSRGB(e) {
		return this.r = It(e.r), this.g = It(e.g), this.b = It(e.b), this;
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this;
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this;
	}
	getHex(e = Le) {
		return q.workingToColorSpace(Mn.copy(this), e), Math.round(U(Mn.r * 255, 0, 255)) * 65536 + Math.round(U(Mn.g * 255, 0, 255)) * 256 + Math.round(U(Mn.b * 255, 0, 255));
	}
	getHexString(e = Le) {
		return ("000000" + this.getHex(e).toString(16)).slice(-6);
	}
	getHSL(e, t = q.workingColorSpace) {
		q.workingToColorSpace(Mn.copy(this), t);
		let n = Mn.r, r = Mn.g, i = Mn.b, a = Math.max(n, r, i), o = Math.min(n, r, i), s, c, l = (o + a) / 2;
		if (o === a) s = 0, c = 0;
		else {
			let e = a - o;
			switch (c = l <= .5 ? e / (a + o) : e / (2 - a - o), a) {
				case n:
					s = (r - i) / e + (r < i ? 6 : 0);
					break;
				case r:
					s = (i - n) / e + 2;
					break;
				case i: s = (n - r) / e + 4;
			}
			s /= 6;
		}
		return e.h = s, e.s = c, e.l = l, e;
	}
	getRGB(e, t = q.workingColorSpace) {
		return q.workingToColorSpace(Mn.copy(this), t), e.r = Mn.r, e.g = Mn.g, e.b = Mn.b, e;
	}
	getStyle(e = Le) {
		q.workingToColorSpace(Mn.copy(this), e);
		let t = Mn.r, n = Mn.g, r = Mn.b;
		return e === "srgb" ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
	}
	offsetHSL(e, t, n) {
		return this.getHSL(kn), this.setHSL(kn.h + e, kn.s + t, kn.l + n);
	}
	add(e) {
		return this.r += e.r, this.g += e.g, this.b += e.b, this;
	}
	addColors(e, t) {
		return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
	}
	addScalar(e) {
		return this.r += e, this.g += e, this.b += e, this;
	}
	sub(e) {
		return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
	}
	multiply(e) {
		return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
	}
	multiplyScalar(e) {
		return this.r *= e, this.g *= e, this.b *= e, this;
	}
	lerp(e, t) {
		return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
	}
	lerpColors(e, t, n) {
		return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
	}
	lerpHSL(e, t) {
		this.getHSL(kn), e.getHSL(An);
		let n = lt(kn.h, An.h, t), r = lt(kn.s, An.s, t), i = lt(kn.l, An.l, t);
		return this.setHSL(n, r, i), this;
	}
	setFromVector3(e) {
		return this.r = e.x, this.g = e.y, this.b = e.z, this;
	}
	applyMatrix3(e) {
		let t = this.r, n = this.g, r = this.b, i = e.elements;
		return this.r = i[0] * t + i[3] * n + i[6] * r, this.g = i[1] * t + i[4] * n + i[7] * r, this.b = i[2] * t + i[5] * n + i[8] * r, this;
	}
	equals(e) {
		return e.r === this.r && e.g === this.g && e.b === this.b;
	}
	fromArray(e, t = 0) {
		return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
	}
	fromBufferAttribute(e, t) {
		return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
	}
	toJSON() {
		return this.getHex();
	}
	*[Symbol.iterator]() {
		yield this.r, yield this.g, yield this.b;
	}
}, Mn = /*@__PURE__*/ new J();
J.NAMES = On;
var Nn = class e {
	constructor(e, t = 1, n = 1e3) {
		this.isFog = !0, this.name = "", this.color = new J(e), this.near = t, this.far = n;
	}
	clone() {
		return new e(this.color, this.near, this.far);
	}
	toJSON() {
		return {
			type: "Fog",
			name: this.name,
			color: this.color.getHex(),
			near: this.near,
			far: this.far
		};
	}
}, Pn = class extends wn {
	constructor() {
		super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new sn(), this.environmentIntensity = 1, this.environmentRotation = new sn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	copy(e, t) {
		return super.copy(e, t), this.background = e.background === null ? null : e.background.clone(), this.environment = e.environment === null ? null : e.environment.clone(), this.fog = e.fog === null ? null : e.fog.clone(), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), this.overrideMaterial = e.overrideMaterial === null ? null : e.overrideMaterial.clone(), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.fog !== null && (t.object.fog = this.fog.toJSON()), t.object.backgroundBlurriness = this.backgroundBlurriness, t.object.backgroundIntensity = this.backgroundIntensity, t.object.backgroundRotation = this.backgroundRotation.toArray(), t.object.environmentIntensity = this.environmentIntensity, t.object.environmentRotation = this.environmentRotation.toArray(), t;
	}
}, Fn = /*@__PURE__*/ new G(), In = /*@__PURE__*/ new G(), Ln = /*@__PURE__*/ new G(), Rn = /*@__PURE__*/ new G(), zn = /*@__PURE__*/ new G(), Bn = /*@__PURE__*/ new G(), Vn = /*@__PURE__*/ new G(), Hn = /*@__PURE__*/ new G(), Un = /*@__PURE__*/ new G(), Wn = /*@__PURE__*/ new G(), Gn = /*@__PURE__*/ new Gt(), Kn = /*@__PURE__*/ new Gt(), qn = /*@__PURE__*/ new Gt(), Jn = class e {
	constructor(e = new G(), t = new G(), n = new G()) {
		this.a = e, this.b = t, this.c = n;
	}
	static getNormal(e, t, n, r) {
		r.subVectors(n, t), Fn.subVectors(e, t), r.cross(Fn);
		let i = r.lengthSq();
		return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
	}
	static getBarycoord(e, t, n, r, i) {
		Fn.subVectors(r, t), In.subVectors(n, t), Ln.subVectors(e, t);
		let a = Fn.dot(Fn), o = Fn.dot(In), s = Fn.dot(Ln), c = In.dot(In), l = In.dot(Ln), u = a * c - o * o;
		if (u === 0) return i.set(0, 0, 0), null;
		let d = 1 / u, f = (c * s - o * l) * d, p = (a * l - o * s) * d;
		return i.set(1 - f - p, p, f);
	}
	static containsPoint(e, t, n, r) {
		return this.getBarycoord(e, t, n, r, Rn) !== null && Rn.x >= 0 && Rn.y >= 0 && Rn.x + Rn.y <= 1;
	}
	static getInterpolation(e, t, n, r, i, a, o, s) {
		return this.getBarycoord(e, t, n, r, Rn) === null ? (s.x = 0, s.y = 0, "z" in s && (s.z = 0), "w" in s && (s.w = 0), null) : (s.setScalar(0), s.addScaledVector(i, Rn.x), s.addScaledVector(a, Rn.y), s.addScaledVector(o, Rn.z), s);
	}
	static getInterpolatedAttribute(e, t, n, r, i, a) {
		return Gn.setScalar(0), Kn.setScalar(0), qn.setScalar(0), Gn.fromBufferAttribute(e, t), Kn.fromBufferAttribute(e, n), qn.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(Gn, i.x), a.addScaledVector(Kn, i.y), a.addScaledVector(qn, i.z), a;
	}
	static isFrontFacing(e, t, n, r) {
		return Fn.subVectors(n, t), In.subVectors(e, t), Fn.cross(In).dot(r) < 0;
	}
	set(e, t, n) {
		return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
	}
	setFromPointsAndIndices(e, t, n, r) {
		return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
	}
	setFromAttributeAndIndices(e, t, n, r) {
		return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
	}
	getArea() {
		return Fn.subVectors(this.c, this.b), In.subVectors(this.a, this.b), Fn.cross(In).length() * .5;
	}
	getMidpoint(e) {
		return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
	}
	getNormal(t) {
		return e.getNormal(this.a, this.b, this.c, t);
	}
	getPlane(e) {
		return e.setFromCoplanarPoints(this.a, this.b, this.c);
	}
	getBarycoord(t, n) {
		return e.getBarycoord(t, this.a, this.b, this.c, n);
	}
	getInterpolation(t, n, r, i, a) {
		return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
	}
	containsPoint(t) {
		return e.containsPoint(t, this.a, this.b, this.c);
	}
	isFrontFacing(t) {
		return e.isFrontFacing(this.a, this.b, this.c, t);
	}
	intersectsBox(e) {
		return e.intersectsTriangle(this);
	}
	closestPointToPoint(e, t) {
		let n = this.a, r = this.b, i = this.c, a, o;
		zn.subVectors(r, n), Bn.subVectors(i, n), Hn.subVectors(e, n);
		let s = zn.dot(Hn), c = Bn.dot(Hn);
		if (s <= 0 && c <= 0) return t.copy(n);
		Un.subVectors(e, r);
		let l = zn.dot(Un), u = Bn.dot(Un);
		if (l >= 0 && u <= l) return t.copy(r);
		let d = s * u - l * c;
		if (d <= 0 && s >= 0 && l <= 0 && s - l > 0) return a = s / (s - l), t.copy(n).addScaledVector(zn, a);
		Wn.subVectors(e, i);
		let f = zn.dot(Wn), p = Bn.dot(Wn);
		if (p >= 0 && f <= p) return t.copy(i);
		let m = f * c - s * p;
		if (m <= 0 && c >= 0 && p <= 0) return o = c / (c - p), t.copy(n).addScaledVector(Bn, o);
		let h = l * p - f * u;
		if (h <= 0 && u - l >= 0 && f - p >= 0) return Vn.subVectors(i, r), o = (u - l) / (u - l + (f - p)), t.copy(r).addScaledVector(Vn, o);
		let g = 1 / (h + m + d);
		return a = m * g, o = d * g, t.copy(n).addScaledVector(zn, a).addScaledVector(Bn, o);
	}
	equals(e) {
		return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
	}
}, Yn = class {
	constructor(e = new G(Infinity, Infinity, Infinity), t = new G(-Infinity, -Infinity, -Infinity)) {
		this.isBox3 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromArray(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Zn.fromArray(e, t));
		return this;
	}
	setFromBufferAttribute(e) {
		this.makeEmpty();
		for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Zn.fromBufferAttribute(e, t));
		return this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = Zn.copy(t).multiplyScalar(.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	}
	setFromObject(e, t = !1) {
		return this.makeEmpty(), this.expandByObject(e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	}
	makeEmpty() {
		return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -Infinity, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this;
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this;
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	}
	expandByObject(e, t = !1) {
		e.updateWorldMatrix(!1, !1);
		let n = e.geometry;
		if (n !== void 0) {
			let r = n.getAttribute("position");
			if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0 && e.isBatchedMesh !== !0) for (let t = 0, n = r.count; t < n; t++) e.isMesh === !0 ? e.getVertexPosition(t, Zn) : Zn.fromBufferAttribute(r, t), Zn.applyMatrix4(e.matrixWorld), this.expandByPoint(Zn);
			else e.boundingBox === void 0 ? (n.boundingBox === null && n.computeBoundingBox(), Qn.copy(n.boundingBox)) : (e.boundingBox === null && e.computeBoundingBox(), Qn.copy(e.boundingBox)), Qn.applyMatrix4(e.matrixWorld), this.union(Qn);
		}
		let r = e.children;
		for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
		return this;
	}
	containsPoint(e) {
		return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
	}
	intersectsBox(e) {
		return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
	}
	intersectsSphere(e) {
		return this.clampPoint(e.center, Zn), Zn.distanceToSquared(e.center) <= e.radius * e.radius;
	}
	intersectsPlane(e) {
		let t, n;
		return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
	}
	intersectsTriangle(e) {
		if (this.isEmpty()) return !1;
		this.getCenter(ar), or.subVectors(this.max, ar), $n.subVectors(e.a, ar), er.subVectors(e.b, ar), tr.subVectors(e.c, ar), nr.subVectors(er, $n), rr.subVectors(tr, er), ir.subVectors($n, tr);
		let t = [
			0,
			-nr.z,
			nr.y,
			0,
			-rr.z,
			rr.y,
			0,
			-ir.z,
			ir.y,
			nr.z,
			0,
			-nr.x,
			rr.z,
			0,
			-rr.x,
			ir.z,
			0,
			-ir.x,
			-nr.y,
			nr.x,
			0,
			-rr.y,
			rr.x,
			0,
			-ir.y,
			ir.x,
			0
		];
		return !lr(t, $n, er, tr, or) || (t = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], !lr(t, $n, er, tr, or)) ? !1 : (sr.crossVectors(nr, rr), t = [
			sr.x,
			sr.y,
			sr.z
		], lr(t, $n, er, tr, or));
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, Zn).distanceTo(e);
	}
	getBoundingSphere(e) {
		return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Zn).length() * .5), e;
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	applyMatrix4(e) {
		return this.isEmpty() || (Xn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Xn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Xn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Xn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Xn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Xn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Xn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Xn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Xn)), this;
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
	toJSON() {
		return {
			min: this.min.toArray(),
			max: this.max.toArray()
		};
	}
	fromJSON(e) {
		return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
	}
}, Xn = [
	/*@__PURE__*/ new G(),
	/*@__PURE__*/ new G(),
	/*@__PURE__*/ new G(),
	/*@__PURE__*/ new G(),
	/*@__PURE__*/ new G(),
	/*@__PURE__*/ new G(),
	/*@__PURE__*/ new G(),
	/*@__PURE__*/ new G()
], Zn = /*@__PURE__*/ new G(), Qn = /*@__PURE__*/ new Yn(), $n = /*@__PURE__*/ new G(), er = /*@__PURE__*/ new G(), tr = /*@__PURE__*/ new G(), nr = /*@__PURE__*/ new G(), rr = /*@__PURE__*/ new G(), ir = /*@__PURE__*/ new G(), ar = /*@__PURE__*/ new G(), or = /*@__PURE__*/ new G(), sr = /*@__PURE__*/ new G(), cr = /*@__PURE__*/ new G();
function lr(e, t, n, r, i) {
	for (let a = 0, o = e.length - 3; a <= o; a += 3) {
		cr.fromArray(e, a);
		let o = i.x * Math.abs(cr.x) + i.y * Math.abs(cr.y) + i.z * Math.abs(cr.z), s = t.dot(cr), c = n.dot(cr), l = r.dot(cr);
		if (Math.max(-Math.max(s, c, l), Math.min(s, c, l)) > o) return !1;
	}
	return !0;
}
var ur = /*@__PURE__*/ new G(), dr = /*@__PURE__*/ new W(), fr = 0, pr = class extends et {
	constructor(e, t, n = !1) {
		if (super(), Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: fr++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e === void 0 ? 0 : e.length / t, this.normalized = n, this.usage = He, this.updateRanges = [], this.gpuType = _, this.version = 0, this._normalizationScale = e === void 0 ? void 0 : wt(e);
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this._normalizationScale = e._normalizationScale, this;
	}
	copyAt(e, t, n) {
		e *= this.itemSize, n *= t.itemSize;
		for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	copyArray(e) {
		return this.array.set(e), this;
	}
	applyMatrix3(e) {
		if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) dr.fromBufferAttribute(this, t), dr.applyMatrix3(e), this.setXY(t, dr.x, dr.y);
		else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) ur.fromBufferAttribute(this, t), ur.applyMatrix3(e), this.setXYZ(t, ur.x, ur.y, ur.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.count; t < n; t++) ur.fromBufferAttribute(this, t), ur.applyMatrix4(e), this.setXYZ(t, ur.x, ur.y, ur.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) ur.fromBufferAttribute(this, t), ur.applyNormalMatrix(e), this.setXYZ(t, ur.x, ur.y, ur.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) ur.fromBufferAttribute(this, t), ur.transformDirection(e), this.setXYZ(t, ur.x, ur.y, ur.z);
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.itemSize + t];
		return this.normalized && (n = this._denormalize(n)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = this._normalize(n)), this.array[e * this.itemSize + t] = n, this;
	}
	getX(e) {
		let t = this.array[e * this.itemSize];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	setX(e, t) {
		return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize] = t, this;
	}
	getY(e) {
		let t = this.array[e * this.itemSize + 1];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	setY(e, t) {
		return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize + 1] = t, this;
	}
	getZ(e) {
		let t = this.array[e * this.itemSize + 2];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	setZ(e, t) {
		return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize + 2] = t, this;
	}
	getW(e) {
		let t = this.array[e * this.itemSize + 3];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	setW(e, t) {
		return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize + 3] = t, this;
	}
	setXY(e, t, n) {
		return e *= this.itemSize, this.normalized && (t = this._normalize(t), n = this._normalize(n)), this.array[e + 0] = t, this.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e *= this.itemSize, this.normalized && (t = this._normalize(t), n = this._normalize(n), r = this._normalize(r)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e *= this.itemSize, this.normalized && (t = this._normalize(t), n = this._normalize(n), r = this._normalize(r), i = this._normalize(i)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	clone() {
		return new this.constructor(this.array, this.itemSize).copy(this);
	}
	toJSON() {
		let e = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from(this.array),
			normalized: this.normalized
		};
		return e.name = this.name, e.usage = this.usage, e.gpuType = this.gpuType, e;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	_denormalize(e) {
		let t = this._normalizationScale;
		return t === void 0 ? Tt(e, this.array) : Math.max(e / t, -1);
	}
	_normalize(e) {
		let t = this._normalizationScale;
		return t === void 0 ? Et(e, this.array) : Math.round(e * t);
	}
}, mr = class extends pr {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n);
	}
}, hr = class extends pr {
	constructor(e, t, n) {
		super(new Uint32Array(e), t, n);
	}
}, Y = class extends pr {
	constructor(e, t, n) {
		super(new Float32Array(e), t, n);
	}
}, gr = /*@__PURE__*/ new Yn(), _r = /*@__PURE__*/ new G(), vr = /*@__PURE__*/ new G(), yr = class {
	constructor(e = new G(), t = -1) {
		this.isSphere = !0, this.center = e, this.radius = t;
	}
	set(e, t) {
		return this.center.copy(e), this.radius = t, this;
	}
	setFromPoints(e, t) {
		let n = this.center;
		t === void 0 ? gr.setFromPoints(e).getCenter(n) : n.copy(t);
		let r = 0;
		for (let t = 0, i = e.length; t < i; t++) r = Math.max(r, n.distanceToSquared(e[t]));
		return this.radius = Math.sqrt(r), this;
	}
	copy(e) {
		return this.center.copy(e.center), this.radius = e.radius, this;
	}
	isEmpty() {
		return this.radius < 0;
	}
	makeEmpty() {
		return this.center.set(0, 0, 0), this.radius = -1, this;
	}
	containsPoint(e) {
		return e.distanceToSquared(this.center) <= this.radius * this.radius;
	}
	distanceToPoint(e) {
		return e.distanceTo(this.center) - this.radius;
	}
	intersectsSphere(e) {
		let t = this.radius + e.radius;
		return e.center.distanceToSquared(this.center) <= t * t;
	}
	intersectsBox(e) {
		return e.intersectsSphere(this);
	}
	intersectsPlane(e) {
		return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
	}
	clampPoint(e, t) {
		let n = this.center.distanceToSquared(e);
		return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
	}
	getBoundingBox(e) {
		return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
	}
	applyMatrix4(e) {
		return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this;
	}
	translate(e) {
		return this.center.add(e), this;
	}
	expandByPoint(e) {
		if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
		_r.subVectors(e, this.center);
		let t = _r.lengthSq();
		if (t > this.radius * this.radius) {
			let e = Math.sqrt(t), n = (e - this.radius) * .5;
			this.center.addScaledVector(_r, n / e), this.radius += n;
		}
		return this;
	}
	union(e) {
		return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (vr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(_r.copy(e.center).add(vr)), this.expandByPoint(_r.copy(e.center).sub(vr))), this);
	}
	equals(e) {
		return e.center.equals(this.center) && e.radius === this.radius;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		return {
			radius: this.radius,
			center: this.center.toArray()
		};
	}
	fromJSON(e) {
		return this.radius = e.radius, this.center.fromArray(e.center), this;
	}
}, br = 0, xr = /*@__PURE__*/ new Xt(), Sr = /*@__PURE__*/ new wn(), Cr = /*@__PURE__*/ new G(), wr = /*@__PURE__*/ new Yn(), Tr = /*@__PURE__*/ new Yn(), Er = /*@__PURE__*/ new G(), Dr = class e extends et {
	constructor() {
		super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: br++ }), this.uuid = at(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: Infinity
		}, this.userData = {}, this._transformed = !1;
	}
	getIndex() {
		return this.index;
	}
	setIndex(e) {
		return this.index = Array.isArray(e) ? new (We(e) ? hr : mr)(e, 1) : e, this;
	}
	setIndirect(e, t = 0) {
		return this.indirect = e, this.indirectOffset = t, this;
	}
	getIndirect() {
		return this.indirect;
	}
	getAttribute(e) {
		return this.attributes[e];
	}
	setAttribute(e, t) {
		return this.attributes[e] = t, this;
	}
	deleteAttribute(e) {
		return delete this.attributes[e], this;
	}
	hasAttribute(e) {
		return this.attributes[e] !== void 0;
	}
	addGroup(e, t, n = 0) {
		this.groups.push({
			start: e,
			count: t,
			materialIndex: n
		});
	}
	clearGroups() {
		this.groups = [];
	}
	setDrawRange(e, t) {
		this.drawRange.start = e, this.drawRange.count = t;
	}
	applyMatrix4(e) {
		let t = this.attributes.position;
		t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
		let n = this.attributes.normal;
		if (n !== void 0) {
			let t = new K().getNormalMatrix(e);
			n.applyNormalMatrix(t), n.needsUpdate = !0;
		}
		let r = this.attributes.tangent;
		return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = !0, this;
	}
	applyQuaternion(e) {
		return xr.makeRotationFromQuaternion(e), this.applyMatrix4(xr), this;
	}
	rotateX(e) {
		return xr.makeRotationX(e), this.applyMatrix4(xr), this;
	}
	rotateY(e) {
		return xr.makeRotationY(e), this.applyMatrix4(xr), this;
	}
	rotateZ(e) {
		return xr.makeRotationZ(e), this.applyMatrix4(xr), this;
	}
	translate(e, t, n) {
		return xr.makeTranslation(e, t, n), this.applyMatrix4(xr), this;
	}
	scale(e, t, n) {
		return xr.makeScale(e, t, n), this.applyMatrix4(xr), this;
	}
	lookAt(e) {
		return Sr.lookAt(e), Sr.updateMatrix(), this.applyMatrix4(Sr.matrix), this;
	}
	center() {
		return this.computeBoundingBox(), this.boundingBox.getCenter(Cr).negate(), this.translate(Cr.x, Cr.y, Cr.z), this;
	}
	setFromPoints(e) {
		let t = this.getAttribute("position");
		if (t === void 0) {
			let t = [];
			for (let n = 0, r = e.length; n < r; n++) {
				let r = e[n];
				t.push(r.x, r.y, r.z || 0);
			}
			this.setAttribute("position", new Y(t, 3));
		} else {
			let n = Math.min(e.length, t.count);
			for (let r = 0; r < n; r++) {
				let n = e[r];
				t.setXYZ(r, n.x, n.y, n.z || 0);
			}
			e.length > t.count && V("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
		}
		return this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new Yn());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) H("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new G(-Infinity, -Infinity, -Infinity), new G(Infinity, Infinity, Infinity));
		else {
			if (e !== void 0) {
				if (this.boundingBox.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
					let n = t[e];
					wr.setFromBufferAttribute(n), this.morphTargetsRelative ? (Er.addVectors(this.boundingBox.min, wr.min), this.boundingBox.expandByPoint(Er), Er.addVectors(this.boundingBox.max, wr.max), this.boundingBox.expandByPoint(Er)) : (this.boundingBox.expandByPoint(wr.min), this.boundingBox.expandByPoint(wr.max));
				}
			} else this.boundingBox.makeEmpty();
			(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && H("BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new yr());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) H("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new G(), Infinity);
		else if (e) {
			let n = this.boundingSphere.center;
			if (wr.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				Tr.setFromBufferAttribute(n), this.morphTargetsRelative ? (Er.addVectors(wr.min, Tr.min), wr.expandByPoint(Er), Er.addVectors(wr.max, Tr.max), wr.expandByPoint(Er)) : (wr.expandByPoint(Tr.min), wr.expandByPoint(Tr.max));
			}
			wr.getCenter(n);
			let r = 0;
			for (let t = 0, i = e.count; t < i; t++) Er.fromBufferAttribute(e, t), r = Math.max(r, n.distanceToSquared(Er));
			if (t) for (let i = 0, a = t.length; i < a; i++) {
				let a = t[i], o = this.morphTargetsRelative;
				for (let t = 0, i = a.count; t < i; t++) Er.fromBufferAttribute(a, t), o && (Cr.fromBufferAttribute(e, t), Er.add(Cr)), r = Math.max(r, n.distanceToSquared(Er));
			}
			this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && H("BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeTangents() {
		let e = this.index, t = this.attributes;
		if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
			H("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
			return;
		}
		let n = t.position, r = t.normal, i = t.uv, a = this.getAttribute("tangent");
		(a === void 0 || a.count !== n.count) && (a = new pr(new Float32Array(4 * n.count), 4), this.setAttribute("tangent", a));
		let o = [], s = [], c = new Uint8Array(n.count);
		for (let e = 0; e < n.count; e++) o[e] = new G(), s[e] = new G();
		let l = new G(), u = new G(), d = new G(), f = new W(), p = new W(), m = new W(), h = new G(), g = new G();
		function _(e, t, r) {
			c[e] = c[t] = c[r] = 1, l.fromBufferAttribute(n, e), u.fromBufferAttribute(n, t), d.fromBufferAttribute(n, r), f.fromBufferAttribute(i, e), p.fromBufferAttribute(i, t), m.fromBufferAttribute(i, r), u.sub(l), d.sub(l), p.sub(f), m.sub(f);
			let a = 1 / (p.x * m.y - m.x * p.y);
			isFinite(a) && (h.copy(u).multiplyScalar(m.y).addScaledVector(d, -p.y).multiplyScalar(a), g.copy(d).multiplyScalar(p.x).addScaledVector(u, -m.x).multiplyScalar(a), o[e].add(h), o[t].add(h), o[r].add(h), s[e].add(g), s[t].add(g), s[r].add(g));
		}
		let v = this.groups;
		v.length === 0 && (v = [{
			start: 0,
			count: e.count
		}]);
		for (let t = 0, n = v.length; t < n; ++t) {
			let n = v[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) _(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
		}
		let y = new G(), b = new G(), x = new G(), S = new G();
		function C(e) {
			x.fromBufferAttribute(r, e), S.copy(x);
			let t = o[e];
			y.copy(t), y.sub(x.multiplyScalar(x.dot(t))).normalize(), b.crossVectors(S, t);
			let n = b.dot(s[e]) < 0 ? -1 : 1;
			a.setXYZW(e, y.x, y.y, y.z, n);
		}
		for (let e = 0, t = n.count; e < t; ++e) c[e] && C(e);
		this._transformed = !0;
	}
	computeVertexNormals() {
		let e = this.index, t = this.getAttribute("position");
		if (t !== void 0) {
			let n = this.getAttribute("normal");
			if (n === void 0 || n.count !== t.count) n = new pr(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
			else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
			let r = new G(), i = new G(), a = new G(), o = new G(), s = new G(), c = new G(), l = new G(), u = new G();
			if (e) for (let d = 0, f = e.count; d < f; d += 3) {
				let f = e.getX(d + 0), p = e.getX(d + 1), m = e.getX(d + 2);
				r.fromBufferAttribute(t, f), i.fromBufferAttribute(t, p), a.fromBufferAttribute(t, m), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), o.fromBufferAttribute(n, f), s.fromBufferAttribute(n, p), c.fromBufferAttribute(n, m), o.add(l), s.add(l), c.add(l), n.setXYZ(f, o.x, o.y, o.z), n.setXYZ(p, s.x, s.y, s.z), n.setXYZ(m, c.x, c.y, c.z);
			}
			else for (let e = 0, o = t.count; e < o; e += 3) r.fromBufferAttribute(t, e + 0), i.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), l.subVectors(a, i), u.subVectors(r, i), l.cross(u), n.setXYZ(e + 0, l.x, l.y, l.z), n.setXYZ(e + 1, l.x, l.y, l.z), n.setXYZ(e + 2, l.x, l.y, l.z);
			this.normalizeNormals(), n.needsUpdate = !0;
		}
	}
	normalizeNormals() {
		let e = this.attributes.normal;
		for (let t = 0, n = e.count; t < n; t++) Er.fromBufferAttribute(e, t), Er.normalize(), e.setXYZ(t, Er.x, Er.y, Er.z);
	}
	toNonIndexed() {
		function t(e, t) {
			let n = e.array, r = e.itemSize, i = e.normalized, a = new n.constructor(t.length * r), o = 0, s = 0;
			for (let i = 0, c = t.length; i < c; i++) {
				o = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
				for (let e = 0; e < r; e++) a[s++] = n[o++];
			}
			return new pr(a, r, i);
		}
		if (this.index === null) return V("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
		let n = new e(), r = this.index.array, i = this.attributes;
		for (let e in i) {
			let a = i[e], o = t(a, r);
			n.setAttribute(e, o);
		}
		let a = this.morphAttributes;
		for (let e in a) {
			let i = [], o = a[e];
			for (let e = 0, n = o.length; e < n; e++) {
				let n = o[e], a = t(n, r);
				i.push(a);
			}
			n.morphAttributes[e] = i;
		}
		n.morphTargetsRelative = this.morphTargetsRelative;
		let o = this.groups;
		for (let e = 0, t = o.length; e < t; e++) {
			let t = o[e];
			n.addGroup(t.start, t.count, t.materialIndex);
		}
		return n;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.7,
			type: "BufferGeometry",
			generator: "BufferGeometry.toJSON"
		} };
		if (e.uuid = this.uuid, e.type = this.parameters !== void 0 && this._transformed === !0 ? "BufferGeometry" : this.type, e.name = this.name, Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0 && this._transformed !== !0) {
			let t = this.parameters;
			for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
			return e;
		}
		e.data = { attributes: {} };
		let t = this.index;
		t !== null && (e.data.index = {
			type: t.array.constructor.name,
			array: Array.prototype.slice.call(t.array)
		});
		let n = this.attributes;
		for (let t in n) {
			let r = n[t];
			e.data.attributes[t] = r.toJSON(e.data);
		}
		let r = {}, i = !1;
		for (let t in this.morphAttributes) {
			let n = this.morphAttributes[t], a = [];
			for (let t = 0, r = n.length; t < r; t++) {
				let r = n[t];
				a.push(r.toJSON(e.data));
			}
			a.length > 0 && (r[t] = a, i = !0);
		}
		i && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
		let a = this.groups;
		a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
		let o = this.boundingSphere;
		return o !== null && (e.data.boundingSphere = o.toJSON()), e;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
		let t = {};
		this.name = e.name;
		let n = e.index;
		n !== null && this.setIndex(n.clone());
		let r = e.attributes;
		for (let e in r) {
			let n = r[e];
			this.setAttribute(e, n.clone(t));
		}
		let i = e.morphAttributes;
		for (let e in i) {
			let n = [], r = i[e];
			for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
			this.morphAttributes[e] = n;
		}
		this.morphTargetsRelative = e.morphTargetsRelative;
		let a = e.groups;
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e];
			this.addGroup(t.start, t.count, t.materialIndex);
		}
		let o = e.boundingBox;
		o !== null && (this.boundingBox = o.clone());
		let s = e.boundingSphere;
		return s !== null && (this.boundingSphere = s.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this._transformed = e._transformed, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, Or = class {
	constructor(e, t) {
		this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e === void 0 ? 0 : e.length / t, this.usage = He, this.updateRanges = [], this.version = 0, this.uuid = at();
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
	}
	copyAt(e, t, n) {
		e *= this.stride, n *= t.stride;
		for (let r = 0, i = this.stride; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	clone(e) {
		e.arrayBuffers === void 0 && (e.arrayBuffers = {});
		let t = kr(this.array);
		e.arrayBuffers[t] === void 0 && (e.arrayBuffers[t] = this.array.slice(0).buffer);
		let n = new this.array.constructor(e.arrayBuffers[t]), r = new this.constructor(n, this.stride);
		return r.setUsage(this.usage), r;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	toJSON(e) {
		e.arrayBuffers === void 0 && (e.arrayBuffers = {});
		let t = kr(this.array);
		e.arrayBuffers[t] === void 0 && (e.arrayBuffers[t] = Array.from(new Uint32Array(this.array.slice(0).buffer)));
		let n = {
			uuid: this.uuid,
			buffer: t,
			type: this.array.constructor.name,
			stride: this.stride
		};
		return n.usage = this.usage, n;
	}
};
function kr(e) {
	return e.buffer._uuid === void 0 && (e.buffer._uuid = at()), e.byteOffset === 0 && e.byteLength === e.buffer.byteLength ? e.buffer._uuid : e.buffer._uuid + ":" + e.byteOffset + ":" + e.byteLength;
}
var Ar = /*@__PURE__*/ new G(), jr = class e {
	constructor(e, t, n, r = !1) {
		this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = r, this._normalizationScale = e === void 0 ? void 0 : wt(e.array);
	}
	get count() {
		return this.data.count;
	}
	get array() {
		return this.data.array;
	}
	set needsUpdate(e) {
		this.data.needsUpdate = e;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.data.count; t < n; t++) Ar.fromBufferAttribute(this, t), Ar.applyMatrix4(e), this.setXYZ(t, Ar.x, Ar.y, Ar.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) Ar.fromBufferAttribute(this, t), Ar.applyNormalMatrix(e), this.setXYZ(t, Ar.x, Ar.y, Ar.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) Ar.fromBufferAttribute(this, t), Ar.transformDirection(e), this.setXYZ(t, Ar.x, Ar.y, Ar.z);
		return this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.data.stride + this.offset + t];
		return this.normalized && (n = this._denormalize(n)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = this._normalize(n)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
	}
	setX(e, t) {
		return this.normalized && (t = this._normalize(t)), this.data.array[e * this.data.stride + this.offset] = t, this;
	}
	setY(e, t) {
		return this.normalized && (t = this._normalize(t)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
	}
	setZ(e, t) {
		return this.normalized && (t = this._normalize(t)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
	}
	setW(e, t) {
		return this.normalized && (t = this._normalize(t)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
	}
	getX(e) {
		let t = this.data.array[e * this.data.stride + this.offset];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	getY(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 1];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	getZ(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 2];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	getW(e) {
		let t = this.data.array[e * this.data.stride + this.offset + 3];
		return this.normalized && (t = this._denormalize(t)), t;
	}
	setXY(e, t, n) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = this._normalize(t), n = this._normalize(n)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = this._normalize(t), n = this._normalize(n), r = this._normalize(r)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e = e * this.data.stride + this.offset, this.normalized && (t = this._normalize(t), n = this._normalize(n), r = this._normalize(r), i = this._normalize(i)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = i, this;
	}
	clone(t) {
		if (t === void 0) {
			Ye("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
			let e = [];
			for (let t = 0; t < this.count; t++) {
				let n = t * this.data.stride + this.offset;
				for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]);
			}
			return new pr(new this.array.constructor(e), this.itemSize, this.normalized);
		}
		return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new e(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
	}
	toJSON(e) {
		if (e === void 0) {
			Ye("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
			let e = [];
			for (let t = 0; t < this.count; t++) {
				let n = t * this.data.stride + this.offset;
				for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t]);
			}
			return {
				itemSize: this.itemSize,
				type: this.array.constructor.name,
				array: e,
				normalized: this.normalized
			};
		}
		return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
			isInterleavedBufferAttribute: !0,
			itemSize: this.itemSize,
			data: this.data.uuid,
			offset: this.offset,
			normalized: this.normalized
		};
	}
	_denormalize(e) {
		let t = this._normalizationScale;
		return t === void 0 ? Tt(e, this.data.array) : Math.max(e / t, -1);
	}
	_normalize(e) {
		let t = this._normalizationScale;
		return t === void 0 ? Et(e, this.data.array) : Math.round(e * t);
	}
}, Mr = /*@__PURE__*/ new G(), Nr = /*@__PURE__*/ new G(), Pr = /*@__PURE__*/ new K(), Fr = class {
	constructor(e = new G(1, 0, 0), t = 0) {
		this.isPlane = !0, this.normal = e, this.constant = t;
	}
	set(e, t) {
		return this.normal.copy(e), this.constant = t, this;
	}
	setComponents(e, t, n, r) {
		return this.normal.set(e, t, n), this.constant = r, this;
	}
	setFromNormalAndCoplanarPoint(e, t) {
		return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
	}
	setFromCoplanarPoints(e, t, n) {
		let r = Mr.subVectors(n, t).cross(Nr.subVectors(e, t)).normalize();
		return this.setFromNormalAndCoplanarPoint(r, e), this;
	}
	copy(e) {
		return this.normal.copy(e.normal), this.constant = e.constant, this;
	}
	normalize() {
		let e = 1 / this.normal.length();
		return this.normal.multiplyScalar(e), this.constant *= e, this;
	}
	negate() {
		return this.constant *= -1, this.normal.negate(), this;
	}
	distanceToPoint(e) {
		return this.normal.dot(e) + this.constant;
	}
	distanceToSphere(e) {
		return this.distanceToPoint(e.center) - e.radius;
	}
	projectPoint(e, t) {
		return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
	}
	intersectLine(e, t, n = !0) {
		let r = e.delta(Mr), i = this.normal.dot(r);
		if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
		let a = -(e.start.dot(this.normal) + this.constant) / i;
		return n === !0 && (a < 0 || a > 1) ? null : t.copy(e.start).addScaledVector(r, a);
	}
	intersectsLine(e) {
		let t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
		return t < 0 && n > 0 || n < 0 && t > 0;
	}
	intersectsBox(e) {
		return e.intersectsPlane(this);
	}
	intersectsSphere(e) {
		return e.intersectsPlane(this);
	}
	coplanarPoint(e) {
		return e.copy(this.normal).multiplyScalar(-this.constant);
	}
	applyMatrix4(e, t) {
		let n = t || Pr.getNormalMatrix(e), r = this.coplanarPoint(Mr).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize();
		return this.constant = -r.dot(i), this;
	}
	translate(e) {
		return this.constant -= e.dot(this.normal), this;
	}
	equals(e) {
		return e.normal.equals(this.normal) && e.constant === this.constant;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		return {
			normal: this.normal.toArray(),
			constant: this.constant
		};
	}
	fromJSON(e) {
		return this.normal.fromArray(e.normal), this.constant = e.constant, this;
	}
}, Ir = 0, Lr = class extends et {
	constructor() {
		super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Ir++ }), this.uuid = at(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new J(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Ve, this.stencilZFail = Ve, this.stencilZPass = Ve, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
	}
	get alphaTest() {
		return this._alphaTest;
	}
	set alphaTest(e) {
		this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
	}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString();
	}
	setValues(e) {
		if (e !== void 0) for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				V(`Material: parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			r === void 0 ? V(`Material: '${t}' is not a property of THREE.${this.type}.`) : r && r.isColor ? r.set(n) : r && r.isVector2 && n && n.isVector2 || r && r.isEuler && n && n.isEuler || r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		t && (e = {
			textures: {},
			images: {}
		});
		let n = { metadata: {
			version: 4.7,
			type: "Material",
			generator: "Material.toJSON"
		} };
		n.uuid = this.uuid, n.type = this.type, n.blending = this.blending, n.side = this.side, n.shadowSide = this.shadowSide, n.vertexColors = this.vertexColors, n.opacity = this.opacity, n.transparent = this.transparent, n.blendSrc = this.blendSrc, n.blendDst = this.blendDst, n.blendEquation = this.blendEquation, n.blendSrcAlpha = this.blendSrcAlpha, n.blendDstAlpha = this.blendDstAlpha, n.blendEquationAlpha = this.blendEquationAlpha, n.blendColor = this.blendColor.getHex(), n.blendAlpha = this.blendAlpha, n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.clipIntersection = this.clipIntersection, n.clipShadows = this.clipShadows, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, n.stencilWrite = this.stencilWrite, n.polygonOffset = this.polygonOffset, n.polygonOffsetFactor = this.polygonOffsetFactor, n.polygonOffsetUnits = this.polygonOffsetUnits, n.dithering = this.dithering, n.alphaTest = this.alphaTest, n.alphaHash = this.alphaHash, n.alphaToCoverage = this.alphaToCoverage, n.premultipliedAlpha = this.premultipliedAlpha, n.forceSinglePass = this.forceSinglePass, n.allowOverride = this.allowOverride, n.visible = this.visible, n.toneMapped = this.toneMapped, n.name = this.name, this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.diffuseRoughness !== void 0 && (n.diffuseRoughness = this.diffuseRoughness), this.diffuseRoughnessMap && this.diffuseRoughnessMap.isTexture && (n.diffuseRoughnessMap = this.diffuseRoughnessMap.toJSON(e).uuid), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.retroreflectivity !== void 0 && (n.retroreflectivity = this.retroreflectivity), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessMinimum !== void 0 && (n.iridescenceThicknessMinimum = this.iridescenceThicknessMinimum), this.iridescenceThicknessMaximum !== void 0 && (n.iridescenceThicknessMaximum = this.iridescenceThicknessMaximum), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), Array.isArray(this.clippingPlanes) && this.clippingPlanes.length > 0 && (n.clippingPlanes = this.clippingPlanes.map((e) => e.toJSON())), this.rotation !== void 0 && (n.rotation = this.rotation), this.depthPacking !== void 0 && (n.depthPacking = this.depthPacking), this.linewidth !== void 0 && (n.linewidth = this.linewidth), this.linecap !== void 0 && (n.linecap = this.linecap), this.linejoin !== void 0 && (n.linejoin = this.linejoin), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.wireframe !== void 0 && (n.wireframe = this.wireframe), this.wireframeLinewidth !== void 0 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== void 0 && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== void 0 && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading !== void 0 && (n.flatShading = this.flatShading), this.fog !== void 0 && (n.fog = this.fog), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
		function r(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
		if (t) {
			let t = r(e.textures), i = r(e.images);
			t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i);
		}
		return n;
	}
	fromJSON(e, t) {
		if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new J().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.diffuseRoughness !== void 0 && (this.diffuseRoughness = e.diffuseRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.retroreflectivity !== void 0 && (this.retroreflectivity = e.retroreflectivity), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessMinimum !== void 0 && (this.iridescenceThicknessMinimum = e.iridescenceThicknessMinimum), e.iridescenceThicknessMaximum !== void 0 && (this.iridescenceThicknessMaximum = e.iridescenceThicknessMaximum), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0], this.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1]), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.clippingPlanes !== void 0 && (this.clippingPlanes = e.clippingPlanes.map((e) => new Fr().fromJSON(e))), e.clipIntersection !== void 0 && (this.clipIntersection = e.clipIntersection), e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows), e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.linecap !== void 0 && (this.linecap = e.linecap), e.linejoin !== void 0 && (this.linejoin = e.linejoin), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (this.vertexColors = typeof e.vertexColors == "number" ? e.vertexColors > 0 : e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
			let t = e.normalScale;
			Array.isArray(t) === !1 && (t = [t, t]), this.normalScale = new W().fromArray(t);
		}
		return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new W().fromArray(e.clearcoatNormalScale)), e.diffuseRoughnessMap !== void 0 && (this.diffuseRoughnessMap = t[e.diffuseRoughnessMap] || null), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
		let t = e.clippingPlanes, n = null;
		if (t !== null) {
			let e = t.length;
			n = Array(e);
			for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
		}
		return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
}, Rr = class extends Lr {
	constructor(e) {
		super(), this.isSpriteMaterial = !0, this.type = "SpriteMaterial", this.color = new J(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
	}
}, zr, Br = /*@__PURE__*/ new G(), Vr = /*@__PURE__*/ new G(), Hr = /*@__PURE__*/ new G(), Ur = /*@__PURE__*/ new W(), Wr = /*@__PURE__*/ new W(), Gr = /*@__PURE__*/ new Xt(), Kr = /*@__PURE__*/ new G(), qr = /*@__PURE__*/ new G(), Jr = /*@__PURE__*/ new G(), Yr = /*@__PURE__*/ new W(), Xr = /*@__PURE__*/ new W(), Zr = /*@__PURE__*/ new W(), Qr = class extends wn {
	constructor(e = new Rr()) {
		if (super(), this.isSprite = !0, this.type = "Sprite", zr === void 0) {
			zr = new Dr();
			let e = new Or(new Float32Array([
				-.5,
				-.5,
				0,
				0,
				0,
				.5,
				-.5,
				0,
				1,
				0,
				.5,
				.5,
				0,
				1,
				1,
				-.5,
				.5,
				0,
				0,
				1
			]), 5);
			zr.setIndex([
				0,
				1,
				2,
				0,
				2,
				3
			]), zr.setAttribute("position", new jr(e, 3, 0, !1)), zr.setAttribute("uv", new jr(e, 2, 3, !1));
		}
		this.geometry = zr, this.material = e, this.center = new W(.5, .5), this.count = 1;
	}
	intersectsFrustum(e) {
		return e.intersectsSprite(this);
	}
	raycast(e, t) {
		e.camera === null && H("Sprite: \"Raycaster.camera\" needs to be set in order to raycast against sprites."), Vr.setFromMatrixScale(this.matrixWorld), Gr.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Hr.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Vr.multiplyScalar(-Hr.z);
		let n = this.material.rotation, r, i;
		n !== 0 && (i = Math.cos(n), r = Math.sin(n));
		let a = this.center;
		$r(Kr.set(-.5, -.5, 0), Hr, a, Vr, r, i), $r(qr.set(.5, -.5, 0), Hr, a, Vr, r, i), $r(Jr.set(.5, .5, 0), Hr, a, Vr, r, i), Yr.set(0, 0), Xr.set(1, 0), Zr.set(1, 1);
		let o = e.ray.intersectTriangle(Kr, qr, Jr, !1, Br);
		if (o === null && ($r(qr.set(-.5, .5, 0), Hr, a, Vr, r, i), Xr.set(0, 1), o = e.ray.intersectTriangle(Kr, Jr, qr, !1, Br), o === null)) return;
		let s = e.ray.origin.distanceTo(Br);
		s < e.near || s > e.far || t.push({
			distance: s,
			point: Br.clone(),
			uv: Jn.getInterpolation(Br, Kr, qr, Jr, Yr, Xr, Zr, new W()),
			face: null,
			object: this
		});
	}
	copy(e, t) {
		return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.center = this.center.toArray(), t;
	}
};
function $r(e, t, n, r, i, a) {
	Ur.subVectors(e, n).addScalar(.5).multiply(r), i === void 0 ? Wr.copy(Ur) : (Wr.x = a * Ur.x - i * Ur.y, Wr.y = i * Ur.x + a * Ur.y), e.copy(t), e.x += Wr.x, e.y += Wr.y, e.applyMatrix4(Gr);
}
var ei = /*@__PURE__*/ new G(), ti = /*@__PURE__*/ new G(), ni = /*@__PURE__*/ new G(), ri = /*@__PURE__*/ new G(), ii = class {
	constructor(e = new G(), t = new G(0, 0, -1)) {
		this.origin = e, this.direction = t;
	}
	set(e, t) {
		return this.origin.copy(e), this.direction.copy(t), this;
	}
	copy(e) {
		return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
	}
	at(e, t) {
		return t.copy(this.origin).addScaledVector(this.direction, e);
	}
	lookAt(e) {
		return this.direction.copy(e).sub(this.origin).normalize(), this;
	}
	recast(e) {
		return this.origin.copy(this.at(e, ei)), this;
	}
	closestPointToPoint(e, t) {
		t.subVectors(e, this.origin);
		let n = t.dot(this.direction);
		return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
	}
	distanceToPoint(e) {
		return Math.sqrt(this.distanceSqToPoint(e));
	}
	distanceSqToPoint(e) {
		let t = ei.subVectors(e, this.origin).dot(this.direction);
		return t < 0 ? this.origin.distanceToSquared(e) : (ei.copy(this.origin).addScaledVector(this.direction, t), ei.distanceToSquared(e));
	}
	distanceSqToSegment(e, t, n, r) {
		ti.copy(e).add(t).multiplyScalar(.5), ni.copy(t).sub(e).normalize(), ri.copy(this.origin).sub(ti);
		let i = e.distanceTo(t) * .5, a = -this.direction.dot(ni), o = ri.dot(this.direction), s = -ri.dot(ni), c = ri.lengthSq(), l = Math.abs(1 - a * a), u, d, f, p;
		if (l > 0) {
			if (u = a * s - o, d = a * o - s, p = i * l, u >= 0) {
				if (d >= -p) {
					if (d <= p) {
						let e = 1 / l;
						u *= e, d *= e, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * s) + c;
					} else d = i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
				} else d = -i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
			} else d <= -p ? (u = Math.max(0, -(-a * i + o)), d = u > 0 ? -i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c) : d <= p ? (u = 0, d = Math.min(Math.max(-i, -s), i), f = d * (d + 2 * s) + c) : (u = Math.max(0, -(a * i + o)), d = u > 0 ? i : Math.min(Math.max(-i, -s), i), f = -u * u + d * (d + 2 * s) + c);
		} else d = a > 0 ? -i : i, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * s) + c;
		return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(ti).addScaledVector(ni, d), f;
	}
	intersectSphere(e, t) {
		if (e.radius < 0) return null;
		ei.subVectors(e.center, this.origin);
		let n = ei.dot(this.direction), r = ei.dot(ei) - n * n, i = e.radius * e.radius;
		if (r > i) return null;
		let a = Math.sqrt(i - r), o = n - a, s = n + a;
		return s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
	}
	intersectsSphere(e) {
		return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
	}
	distanceToPlane(e) {
		let t = e.normal.dot(this.direction);
		if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
		let n = -(this.origin.dot(e.normal) + e.constant) / t;
		return n >= 0 ? n : null;
	}
	intersectPlane(e, t) {
		let n = this.distanceToPlane(e);
		return n === null ? null : this.at(n, t);
	}
	intersectsPlane(e) {
		let t = e.distanceToPoint(this.origin);
		return t === 0 || e.normal.dot(this.direction) * t < 0;
	}
	intersectBox(e, t) {
		let n, r, i, a, o, s, c = 1 / this.direction.x, l = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
		return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), l >= 0 ? (i = (e.min.y - d.y) * l, a = (e.max.y - d.y) * l) : (i = (e.max.y - d.y) * l, a = (e.min.y - d.y) * l), n > a || i > r || ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), u >= 0 ? (o = (e.min.z - d.z) * u, s = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, s = (e.min.z - d.z) * u), n > s || o > r) || ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0) ? null : this.at(n >= 0 ? n : r, t);
	}
	intersectsBox(e) {
		return this.intersectBox(e, ei) !== null;
	}
	intersectTriangle(e, t, n, r, i) {
		let a = this.origin, o = this.direction, s = o.x, c = o.y, l = o.z, u = e.x - a.x, d = e.y - a.y, f = e.z - a.z, p = t.x - a.x, m = t.y - a.y, h = t.z - a.z, g = n.x - a.x, _ = n.y - a.y, v = n.z - a.z, y = Math.abs(s), b = Math.abs(c), x = Math.abs(l), S, C, w, T, E, D, O, k, A, j, ee, te;
		if (y >= b && y >= x ? (w = s, D = u, A = p, te = g, s >= 0 ? (S = c, C = l, T = d, E = f, O = m, k = h, j = _, ee = v) : (S = l, C = c, T = f, E = d, O = h, k = m, j = v, ee = _)) : b >= x ? (w = c, D = d, A = m, te = _, c >= 0 ? (S = l, C = s, T = f, E = u, O = h, k = p, j = v, ee = g) : (S = s, C = l, T = u, E = f, O = p, k = h, j = g, ee = v)) : (w = l, D = f, A = h, te = v, l >= 0 ? (S = s, C = c, T = u, E = d, O = p, k = m, j = g, ee = _) : (S = c, C = s, T = d, E = u, O = m, k = p, j = _, ee = g)), w === 0) return null;
		let M = S / w, N = C / w, P = 1 / w, ne = T - M * D, F = E - N * D, re = O - M * A, ie = k - N * A, ae = j - M * te, oe = ee - N * te, se = ae * ie - oe * re, I = ne * oe - F * ae, ce = re * F - ie * ne;
		if (r) {
			if (se < 0 || I < 0 || ce < 0) return null;
		} else if ((se < 0 || I < 0 || ce < 0) && (se > 0 || I > 0 || ce > 0)) return null;
		let le = se + I + ce;
		if (le === 0) return null;
		let ue = P * (se * D + I * A + ce * te);
		return (le > 0 ? ue < 0 : ue > 0) ? null : this.at(ue / le, i);
	}
	applyMatrix4(e) {
		return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
	}
	equals(e) {
		return e.origin.equals(this.origin) && e.direction.equals(this.direction);
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, ai = class extends Lr {
	constructor(e) {
		super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new J(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new sn(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
	}
}, oi = /*@__PURE__*/ new Xt(), si = /*@__PURE__*/ new ii(), ci = /*@__PURE__*/ new yr(), li = /*@__PURE__*/ new G(), ui = /*@__PURE__*/ new G(), di = /*@__PURE__*/ new G(), fi = /*@__PURE__*/ new G(), pi = /*@__PURE__*/ new G(), mi = /*@__PURE__*/ new G(), hi = /*@__PURE__*/ new G(), gi = /*@__PURE__*/ new G(), _i = class extends wn {
	constructor(e = new Dr(), t = new ai()) {
		super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), this.morphTargetInfluences = e.morphTargetInfluences === void 0 ? void 0 : e.morphTargetInfluences.slice(), this.morphTargetDictionary = e.morphTargetDictionary === void 0 ? void 0 : Object.assign({}, e.morphTargetDictionary), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
	getVertexPosition(e, t) {
		let n = this.geometry, r = n.attributes.position, i = n.morphAttributes.position, a = n.morphTargetsRelative;
		t.fromBufferAttribute(r, e);
		let o = this.morphTargetInfluences;
		if (i && o) {
			mi.set(0, 0, 0);
			for (let n = 0, r = i.length; n < r; n++) {
				let r = o[n], s = i[n];
				r !== 0 && (pi.fromBufferAttribute(s, e), a ? mi.addScaledVector(pi, r) : mi.addScaledVector(pi.sub(t), r));
			}
			t.add(mi);
		}
		return t;
	}
	intersectsFrustum(e) {
		return e.intersectsObject(this);
	}
	raycast(e, t) {
		let n = this.geometry, r = this.material, i = this.matrixWorld;
		r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), ci.copy(n.boundingSphere), ci.applyMatrix4(i), si.copy(e.ray).recast(e.near), ci.containsPoint(si.origin) === !1 && (si.intersectSphere(ci, li) === null || si.origin.distanceToSquared(li) > (e.far - e.near) ** 2) || (oi.copy(i).invert(), si.copy(e.ray).applyMatrix4(oi), (n.boundingBox === null || si.intersectsBox(n.boundingBox) !== !1) && this._computeIntersections(e, t, si)));
	}
	_computeIntersections(e, t, n) {
		let r, i = this.geometry, a = this.material, o = i.index, s = i.attributes.position, c = i.attributes.uv, l = i.attributes.uv1, u = i.attributes.normal, d = i.groups, f = i.drawRange;
		if (o !== null) {
			if (Array.isArray(a)) for (let i = 0, s = d.length; i < s; i++) {
				let s = d[i], p = a[s.materialIndex], m = Math.max(s.start, f.start), h = Math.min(o.count, Math.min(s.start + s.count, f.start + f.count));
				for (let i = m, a = h; i < a; i += 3) {
					let a = o.getX(i), d = o.getX(i + 1), f = o.getX(i + 2);
					r = yi(this, p, e, n, c, l, u, a, d, f), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = s.materialIndex, t.push(r));
				}
			}
			else {
				let i = Math.max(0, f.start), s = Math.min(o.count, f.start + f.count);
				for (let d = i, f = s; d < f; d += 3) {
					let i = o.getX(d), s = o.getX(d + 1), f = o.getX(d + 2);
					r = yi(this, a, e, n, c, l, u, i, s, f), r && (r.faceIndex = Math.floor(d / 3), t.push(r));
				}
			}
		} else if (s !== void 0) {
			if (Array.isArray(a)) for (let i = 0, o = d.length; i < o; i++) {
				let o = d[i], p = a[o.materialIndex], m = Math.max(o.start, f.start), h = Math.min(s.count, Math.min(o.start + o.count, f.start + f.count));
				for (let i = m, a = h; i < a; i += 3) {
					let a = i, s = i + 1, d = i + 2;
					r = yi(this, p, e, n, c, l, u, a, s, d), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = o.materialIndex, t.push(r));
				}
			}
			else {
				let i = Math.max(0, f.start), o = Math.min(s.count, f.start + f.count);
				for (let s = i, d = o; s < d; s += 3) {
					let i = s, o = s + 1, d = s + 2;
					r = yi(this, a, e, n, c, l, u, i, o, d), r && (r.faceIndex = Math.floor(s / 3), t.push(r));
				}
			}
		}
	}
};
function vi(e, t, n, r, i, a, o, s) {
	let c;
	if (c = t.side === 1 ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, t.side === 0, s), c === null) return null;
	gi.copy(s), gi.applyMatrix4(e.matrixWorld);
	let l = n.ray.origin.distanceTo(gi);
	return l < n.near || l > n.far ? null : {
		distance: l,
		point: gi.clone(),
		object: e
	};
}
function yi(e, t, n, r, i, a, o, s, c, l) {
	e.getVertexPosition(s, ui), e.getVertexPosition(c, di), e.getVertexPosition(l, fi);
	let u = vi(e, t, n, r, ui, di, fi, hi);
	if (u) {
		let e = new G();
		Jn.getBarycoord(hi, ui, di, fi, e), i && (u.uv = Jn.getInterpolatedAttribute(i, s, c, l, e, new W())), a && (u.uv1 = Jn.getInterpolatedAttribute(a, s, c, l, e, new W())), o && (u.normal = Jn.getInterpolatedAttribute(o, s, c, l, e, new G()), u.normal.dot(r.direction) > 0 && u.normal.multiplyScalar(-1));
		let t = {
			a: s,
			b: c,
			c: l,
			normal: new G(),
			materialIndex: 0
		};
		Jn.getNormal(ui, di, fi, t.normal), u.face = t, u.barycoord = e;
	}
	return u;
}
var bi = class extends Wt {
	constructor(e = null, t = 1, n = 1, r, i, o, s, c, l = a, u = a, d, f) {
		super(null, o, s, c, l, u, r, i, d, f), this.isDataTexture = !0, this.image = {
			data: e,
			width: t,
			height: n
		}, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, xi = /*@__PURE__*/ new yr(), Si = /*@__PURE__*/ new W(.5, .5), Ci = /*@__PURE__*/ new G(), wi = class {
	constructor(e = new Fr(), t = new Fr(), n = new Fr(), r = new Fr(), i = new Fr(), a = new Fr()) {
		this.planes = [
			e,
			t,
			n,
			r,
			i,
			a
		];
	}
	set(e, t, n, r, i, a) {
		let o = this.planes;
		return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this;
	}
	copy(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
		return this;
	}
	setFromProjectionMatrix(e, t = Ue, n = !1) {
		let r = this.planes, i = e.elements, a = i[0], o = i[1], s = i[2], c = i[3], l = i[4], u = i[5], d = i[6], f = i[7], p = i[8], m = i[9], h = i[10], g = i[11], _ = i[12], v = i[13], y = i[14], b = i[15];
		if (r[0].setComponents(c - a, f - l, g - p, b - _).normalize(), r[1].setComponents(c + a, f + l, g + p, b + _).normalize(), r[2].setComponents(c + o, f + u, g + m, b + v).normalize(), r[3].setComponents(c - o, f - u, g - m, b - v).normalize(), n) r[4].setComponents(s, d, h, y).normalize(), r[5].setComponents(c - s, f - d, g - h, b - y).normalize();
		else if (r[4].setComponents(c - s, f - d, g - h, b - y).normalize(), t === 2e3) r[5].setComponents(c + s, f + d, g + h, b + y).normalize();
		else if (t === 2001) r[5].setComponents(s, d, h, y).normalize();
		else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
		return this;
	}
	intersectsObject(e) {
		if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
		else {
			let t = e.geometry;
			t.boundingSphere === null && t.computeBoundingSphere(), xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
		}
		return this.intersectsSphere(xi);
	}
	intersectsSprite(e) {
		return xi.center.set(0, 0, 0), xi.radius = .7071067811865476 + Si.distanceTo(e.center), xi.applyMatrix4(e.matrixWorld), this.intersectsSphere(xi);
	}
	intersectsSphere(e) {
		let t = this.planes, n = e.center, r = -e.radius;
		for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
		return !0;
	}
	intersectsBox(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) {
			let r = t[n];
			if (Ci.x = r.normal.x > 0 ? e.max.x : e.min.x, Ci.y = r.normal.y > 0 ? e.max.y : e.min.y, Ci.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Ci) < 0) return !1;
		}
		return !0;
	}
	containsPoint(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
		return !0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Ti = /*@__PURE__*/ new Xt(), Ei = class e {
	constructor() {
		this.coordinateSystem = Ue, this._frustums = [], this._count = 0;
	}
	setFromArrayCamera(e) {
		let t = e.cameras, n = this._frustums;
		for (let e = 0; e < t.length; e++) {
			let r = t[e];
			Ti.multiplyMatrices(r.projectionMatrix, r.matrixWorldInverse), n[e] === void 0 && (n[e] = new wi()), n[e].setFromProjectionMatrix(Ti, r.coordinateSystem, r.reversedDepth);
		}
		return this._count = t.length, this;
	}
	getFrustum(e) {
		return this._frustums[e];
	}
	intersectsObject(e) {
		let t = this._frustums;
		for (let n = 0; n < this._count; n++) if (t[n].intersectsObject(e)) return !0;
		return !1;
	}
	intersectsSprite(e) {
		let t = this._frustums;
		for (let n = 0; n < this._count; n++) if (t[n].intersectsSprite(e)) return !0;
		return !1;
	}
	intersectsSphere(e) {
		let t = this._frustums;
		for (let n = 0; n < this._count; n++) if (t[n].intersectsSphere(e)) return !0;
		return !1;
	}
	intersectsBox(e) {
		let t = this._frustums;
		for (let n = 0; n < this._count; n++) if (t[n].intersectsBox(e)) return !0;
		return !1;
	}
	containsPoint(e) {
		let t = this._frustums;
		for (let n = 0; n < this._count; n++) if (t[n].containsPoint(e)) return !0;
		return !1;
	}
	copy(e) {
		this.coordinateSystem = e.coordinateSystem;
		let t = this._frustums, n = e._frustums;
		for (let r = 0; r < e._count; r++) t[r] === void 0 && (t[r] = new wi()), t[r].copy(n[r]);
		return this._count = e._count, this;
	}
	clone() {
		return new e().copy(this);
	}
}, Di = class extends Lr {
	constructor(e) {
		super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new J(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
	}
}, Oi = /*@__PURE__*/ new G(), ki = /*@__PURE__*/ new G(), Ai = /*@__PURE__*/ new Xt(), ji = /*@__PURE__*/ new ii(), Mi = /*@__PURE__*/ new yr(), Ni = /*@__PURE__*/ new G(), Pi = /*@__PURE__*/ new G(), Fi = class extends wn {
	constructor(e = new Dr(), t = new Di()) {
		super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), this.morphTargetInfluences = e.morphTargetInfluences === void 0 ? void 0 : e.morphTargetInfluences.slice(), this.morphTargetDictionary = e.morphTargetDictionary === void 0 ? void 0 : Object.assign({}, e.morphTargetDictionary), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	computeLineDistances() {
		let e = this.geometry;
		if (e.index === null) {
			let t = e.attributes.position, n = [0];
			for (let e = 1, r = t.count; e < r; e++) Oi.fromBufferAttribute(t, e - 1), ki.fromBufferAttribute(t, e), n[e] = n[e - 1], n[e] += Oi.distanceTo(ki);
			e.setAttribute("lineDistance", new Y(n, 1));
		} else V("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		return this;
	}
	intersectsFrustum(e) {
		return e.intersectsObject(this);
	}
	raycast(e, t) {
		let n = this.geometry, r = this.matrixWorld, i = e.params.Line.threshold, a = n.drawRange;
		if (n.boundingSphere === null && n.computeBoundingSphere(), Mi.copy(n.boundingSphere), Mi.applyMatrix4(r), Mi.radius += i, e.ray.intersectsSphere(Mi) === !1) return;
		Ai.copy(r).invert(), ji.copy(e.ray).applyMatrix4(Ai);
		let o = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), s = o * o, c = this.isLineSegments ? 2 : 1, l = n.index, u = n.attributes.position;
		if (l !== null) {
			let n = Math.max(0, a.start), r = Math.min(l.count, a.start + a.count);
			for (let i = n, a = r - 1; i < a; i += c) {
				let n = l.getX(i), r = l.getX(i + 1), a = Ii(this, e, ji, s, n, r, i);
				a && t.push(a);
			}
			if (this.isLineLoop) {
				let i = l.getX(r - 1), a = l.getX(n), o = Ii(this, e, ji, s, i, a, r - 1);
				o && t.push(o);
			}
		} else {
			let n = Math.max(0, a.start), r = Math.min(u.count, a.start + a.count);
			for (let i = n, a = r - 1; i < a; i += c) {
				let n = Ii(this, e, ji, s, i, i + 1, i);
				n && t.push(n);
			}
			if (this.isLineLoop) {
				let i = Ii(this, e, ji, s, r - 1, n, r - 1);
				i && t.push(i);
			}
		}
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
};
function Ii(e, t, n, r, i, a, o) {
	let s = e.geometry.attributes.position;
	if (Oi.fromBufferAttribute(s, i), ki.fromBufferAttribute(s, a), n.distanceSqToSegment(Oi, ki, Ni, Pi) > r) return;
	Ni.applyMatrix4(e.matrixWorld);
	let c = t.ray.origin.distanceTo(Ni);
	if (!(c < t.near || c > t.far)) return {
		distance: c,
		point: Pi.clone().applyMatrix4(e.matrixWorld),
		index: o,
		face: null,
		faceIndex: null,
		barycoord: null,
		object: e
	};
}
var Li = /*@__PURE__*/ new G(), Ri = /*@__PURE__*/ new G(), zi = class extends Fi {
	constructor(e, t) {
		super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
	}
	computeLineDistances() {
		let e = this.geometry;
		if (e.index === null) {
			let t = e.attributes.position, n = [];
			for (let e = 0, r = t.count; e < r; e += 2) Li.fromBufferAttribute(t, e), Ri.fromBufferAttribute(t, e + 1), n[e] = e === 0 ? 0 : n[e - 1], n[e + 1] = n[e] + Li.distanceTo(Ri);
			e.setAttribute("lineDistance", new Y(n, 1));
		} else V("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		return this;
	}
}, Bi = class extends Wt {
	constructor(e = [], t = 301, n, r, i, a, o, s, c, l) {
		super(e, t, n, r, i, a, o, s, c, l), this.isCubeTexture = !0, this.flipY = !1;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, Vi = class extends Wt {
	constructor(e, t, n, r, i, a, o, s, c) {
		super(e, t, n, r, i, a, o, s, c), this.isCanvasTexture = !0, this.needsUpdate = !0;
	}
}, Hi = class extends Wt {
	constructor(e, t, n = g, r, i, o, s = a, c = a, l, u = D, d = 1) {
		if (u !== 1026 && u !== 1027) throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		super({
			width: e,
			height: t,
			depth: d
		}, r, i, o, s, c, u, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
	}
	copy(e) {
		return super.copy(e), this.source = new Bt(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.compareFunction = this.compareFunction, t;
	}
}, Ui = class extends Hi {
	constructor(e, t = g, n = 301, r, i, o = a, s = a, c, l = D) {
		let u = {
			width: e,
			height: e,
			depth: 1
		}, d = [
			u,
			u,
			u,
			u,
			u,
			u
		];
		super(e, e, t, n, r, i, o, s, c, l), this.image = d, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, Wi = class extends Wt {
	constructor(e = null) {
		super(), this.sourceTexture = e, this.isExternalTexture = !0;
	}
	copy(e) {
		return super.copy(e), this.sourceTexture = e.sourceTexture, this;
	}
}, Gi = class e extends Dr {
	constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
		super(), this.type = "BoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			widthSegments: r,
			heightSegments: i,
			depthSegments: a
		};
		let o = this;
		r = Math.floor(r), i = Math.floor(i), a = Math.floor(a);
		let s = [], c = [], l = [], u = [], d = 0, f = 0;
		p("z", "y", "x", -1, -1, n, t, e, a, i, 0), p("z", "y", "x", 1, -1, n, t, -e, a, i, 1), p("x", "z", "y", 1, 1, e, n, t, r, a, 2), p("x", "z", "y", 1, -1, e, n, -t, r, a, 3), p("x", "y", "z", 1, -1, e, t, n, r, i, 4), p("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(s), this.setAttribute("position", new Y(c, 3)), this.setAttribute("normal", new Y(l, 3)), this.setAttribute("uv", new Y(u, 2));
		function p(e, t, n, r, i, a, p, m, h, g, _) {
			let v = a / h, y = p / g, b = a / 2, x = p / 2, S = m / 2, C = h + 1, w = g + 1, T = 0, E = 0, D = new G();
			for (let a = 0; a < w; a++) {
				let o = a * y - x;
				for (let s = 0; s < C; s++) D[e] = (s * v - b) * r, D[t] = o * i, D[n] = S, c.push(D.x, D.y, D.z), D[e] = 0, D[t] = 0, D[n] = m > 0 ? 1 : -1, l.push(D.x, D.y, D.z), u.push(s / h), u.push(1 - a / g), T += 1;
			}
			for (let e = 0; e < g; e++) for (let t = 0; t < h; t++) {
				let n = d + t + C * e, r = d + t + C * (e + 1), i = d + (t + 1) + C * (e + 1), a = d + (t + 1) + C * e;
				s.push(n, r, a), s.push(r, i, a), E += 6;
			}
			o.addGroup(f, E, _), f += E, d += T;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
	}
}, Ki = class e extends Dr {
	constructor(e = 1, t = 1, n = 4, r = 8, i = 1) {
		super(), this.type = "CapsuleGeometry", this.parameters = {
			radius: e,
			height: t,
			capSegments: n,
			radialSegments: r,
			heightSegments: i
		}, t = Math.max(0, t), n = Math.max(1, Math.floor(n)), r = Math.max(3, Math.floor(r)), i = Math.max(1, Math.floor(i));
		let a = [], o = [], s = [], c = [], l = t / 2, u = Math.PI / 2 * e, d = t, f = 2 * u + d, p = n * 2 + i, m = r + 1, h = new G(), g = new G();
		for (let _ = 0; _ <= p; _++) {
			let v = 0, y = 0, b = 0, x = 0;
			if (_ <= n) {
				let t = _ / n, r = t * Math.PI / 2;
				y = -l - e * Math.cos(r), b = e * Math.sin(r), x = -e * Math.cos(r), v = t * u;
			} else if (_ <= n + i) {
				let r = (_ - n) / i;
				y = -l + r * t, b = e, x = 0, v = u + r * d;
			} else {
				let t = (_ - n - i) / n, r = t * Math.PI / 2;
				y = l + e * Math.sin(r), b = e * Math.cos(r), x = e * Math.sin(r), v = u + d + t * u;
			}
			let S = Math.max(0, Math.min(1, v / f)), C = 0;
			_ === 0 ? C = .5 / r : _ === p && (C = -.5 / r);
			for (let e = 0; e <= r; e++) {
				let t = e / r, n = t * Math.PI * 2, i = Math.sin(n), a = Math.cos(n);
				g.x = -b * a, g.y = y, g.z = b * i, o.push(g.x, g.y, g.z), h.set(-b * a, x, b * i), h.normalize(), s.push(h.x, h.y, h.z), c.push(t + C, S);
			}
			if (_ > 0) {
				let e = (_ - 1) * m;
				for (let t = 0; t < r; t++) {
					let n = e + t, r = e + t + 1, i = _ * m + t, o = _ * m + t + 1;
					a.push(n, r, i), a.push(r, o, i);
				}
			}
		}
		this.setIndex(a), this.setAttribute("position", new Y(o, 3)), this.setAttribute("normal", new Y(s, 3)), this.setAttribute("uv", new Y(c, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.height, t.capSegments, t.radialSegments, t.heightSegments);
	}
}, qi = class e extends Dr {
	constructor(e = 1, t = 1, n = 1, r = 32, i = 1, a = !1, o = 0, s = Math.PI * 2) {
		super(), this.type = "CylinderGeometry", this.parameters = {
			radiusTop: e,
			radiusBottom: t,
			height: n,
			radialSegments: r,
			heightSegments: i,
			openEnded: a,
			thetaStart: o,
			thetaLength: s
		};
		let c = this;
		r = Math.floor(r), i = Math.floor(i);
		let l = [], u = [], d = [], f = [], p = 0, m = [], h = n / 2, g = 0;
		_(), a === !1 && (e > 0 && v(!0), t > 0 && v(!1)), this.setIndex(l), this.setAttribute("position", new Y(u, 3)), this.setAttribute("normal", new Y(d, 3)), this.setAttribute("uv", new Y(f, 2));
		function _() {
			let a = new G(), _ = new G(), v = 0, y = (t - e) / n;
			for (let c = 0; c <= i; c++) {
				let l = [], g = c / i, v = g * (t - e) + e;
				for (let e = 0; e <= r; e++) {
					let t = e / r, i = t * s + o, c = Math.sin(i), m = Math.cos(i);
					_.x = v * c, _.y = -g * n + h, _.z = v * m, u.push(_.x, _.y, _.z), a.set(c, y, m).normalize(), d.push(a.x, a.y, a.z), f.push(t, 1 - g), l.push(p++);
				}
				m.push(l);
			}
			for (let n = 0; n < r; n++) for (let r = 0; r < i; r++) {
				let a = m[r][n], o = m[r + 1][n], s = m[r + 1][n + 1], c = m[r][n + 1];
				(e > 0 || r !== 0) && (l.push(a, o, c), v += 3), (t > 0 || r !== i - 1) && (l.push(o, s, c), v += 3);
			}
			c.addGroup(g, v, 0), g += v;
		}
		function v(n) {
			let i = p, a = new W(), m = new G(), _ = 0, v = n === !0 ? e : t, y = n === !0 ? 1 : -1;
			for (let e = 1; e <= r; e++) u.push(0, h * y, 0), d.push(0, y, 0), f.push(.5, .5), p++;
			let b = p;
			for (let e = 0; e <= r; e++) {
				let t = e / r * s + o, n = Math.cos(t), i = Math.sin(t);
				m.x = v * i, m.y = h * y, m.z = v * n, u.push(m.x, m.y, m.z), d.push(0, y, 0), a.x = n * .5 + .5, a.y = i * .5 * y + .5, f.push(a.x, a.y), p++;
			}
			for (let e = 0; e < r; e++) {
				let t = i + e, r = b + e;
				n === !0 ? l.push(r, r + 1, t) : l.push(r + 1, r, t), _ += 3;
			}
			c.addGroup(g, _, n === !0 ? 1 : 2), g += _;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
	}
}, Ji = class e extends qi {
	constructor(e = 1, t = 1, n = 32, r = 1, i = !1, a = 0, o = Math.PI * 2) {
		super(0, e, t, n, r, i, a, o), this.type = "ConeGeometry", this.parameters = {
			radius: e,
			height: t,
			radialSegments: n,
			heightSegments: r,
			openEnded: i,
			thetaStart: a,
			thetaLength: o
		};
	}
	static fromJSON(t) {
		return new e(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
	}
}, Yi = /*@__PURE__*/ new G(), Xi = /*@__PURE__*/ new G(), Zi = /*@__PURE__*/ new G(), Qi = /*@__PURE__*/ new Jn(), $i = class extends Dr {
	constructor(e = null, t = 1) {
		if (super(), this.type = "EdgesGeometry", this.parameters = {
			geometry: e,
			thresholdAngle: t
		}, e !== null) {
			let n = 1e4, r = Math.cos(rt * t), i = e.getIndex(), a = e.getAttribute("position"), o = i ? i.count : a.count, s = [
				0,
				0,
				0
			], c = [
				"a",
				"b",
				"c"
			], l = [
				,
				,
				,
			], u = /* @__PURE__ */ new Map(), d = [];
			for (let e = 0; e < o; e += 3) {
				i ? (s[0] = i.getX(e), s[1] = i.getX(e + 1), s[2] = i.getX(e + 2)) : (s[0] = e, s[1] = e + 1, s[2] = e + 2);
				let { a: t, b: o, c: f } = Qi;
				if (t.fromBufferAttribute(a, s[0]), o.fromBufferAttribute(a, s[1]), f.fromBufferAttribute(a, s[2]), Qi.getNormal(Zi), l[0] = `${Math.round(t.x * n)},${Math.round(t.y * n)},${Math.round(t.z * n)}`, l[1] = `${Math.round(o.x * n)},${Math.round(o.y * n)},${Math.round(o.z * n)}`, l[2] = `${Math.round(f.x * n)},${Math.round(f.y * n)},${Math.round(f.z * n)}`, l[0] !== l[1] && l[1] !== l[2] && l[2] !== l[0]) for (let e = 0; e < 3; e++) {
					let t = (e + 1) % 3, n = l[e], i = l[t], a = Qi[c[e]], o = Qi[c[t]], f = `${n}_${i}`, p = `${i}_${n}`, m = u.get(p);
					m ? (Zi.dot(m.normal) <= r && (d.push(a.x, a.y, a.z), d.push(o.x, o.y, o.z)), u.set(p, null)) : u.has(f) || u.set(f, {
						index0: s[e],
						index1: s[t],
						normal: Zi.clone()
					});
				}
			}
			for (let e of u.values()) if (e) {
				let { index0: t, index1: n } = e;
				Yi.fromBufferAttribute(a, t), Xi.fromBufferAttribute(a, n), d.push(Yi.x, Yi.y, Yi.z), d.push(Xi.x, Xi.y, Xi.z);
			}
			this.setAttribute("position", new Y(d, 3));
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
}, ea = class {
	constructor() {
		this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = !1, this.cacheArcLengths = null;
	}
	getPoint() {
		V("Curve: .getPoint() not implemented.");
	}
	getPointAt(e, t) {
		let n = this.getUtoTmapping(e);
		return this.getPoint(n, t);
	}
	getPoints(e = 5) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return t;
	}
	getSpacedPoints(e = 5) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
		return t;
	}
	getLength() {
		let e = this.getLengths();
		return e[e.length - 1];
	}
	getLengths(e = this.arcLengthDivisions) {
		if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
		this.needsUpdate = !1;
		let t = [], n, r = this.getPoint(0), i = 0;
		t.push(0);
		for (let a = 1; a <= e; a++) n = this.getPoint(a / e), i += n.distanceTo(r), t.push(i), r = n;
		return this.cacheArcLengths = t, t;
	}
	updateArcLengths() {
		this.needsUpdate = !0, this.getLengths();
	}
	getUtoTmapping(e, t = null) {
		let n = this.getLengths(), r = 0, i = n.length, a;
		a = t || e * n[i - 1];
		let o = 0, s = i - 1, c;
		for (; o <= s;) if (r = Math.floor(o + (s - o) / 2), c = n[r] - a, c < 0) o = r + 1;
		else if (c > 0) s = r - 1;
		else {
			s = r;
			break;
		}
		if (r = s, n[r] === a) return r / (i - 1);
		let l = n[r], u = n[r + 1] - l, d = (a - l) / u;
		return (r + d) / (i - 1);
	}
	getTangent(e, t) {
		let n = 1e-4, r = e - n, i = e + n;
		r < 0 && (r = 0), i > 1 && (i = 1);
		let a = this.getPoint(r), o = this.getPoint(i), s = t || (a.isVector2 ? new W() : new G());
		return s.copy(o).sub(a).normalize(), s;
	}
	getTangentAt(e, t) {
		let n = this.getUtoTmapping(e);
		return this.getTangent(n, t);
	}
	computeFrenetFrames(e, t = !1) {
		let n = new G(), r = [], i = [], a = [], o = new G(), s = new Xt();
		for (let t = 0; t <= e; t++) {
			let n = t / e;
			r[t] = this.getTangentAt(n, new G());
		}
		i[0] = new G(), a[0] = new G();
		let c = Number.MAX_VALUE, l = Math.abs(r[0].x), u = Math.abs(r[0].y), d = Math.abs(r[0].z);
		l <= c && (c = l, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), d <= c && n.set(0, 0, 1), o.crossVectors(r[0], n).normalize(), i[0].crossVectors(r[0], o), a[0].crossVectors(r[0], i[0]);
		for (let t = 1; t <= e; t++) {
			if (i[t] = i[t - 1].clone(), a[t] = a[t - 1].clone(), o.crossVectors(r[t - 1], r[t]), o.length() > 2 ** -52) {
				o.normalize();
				let e = Math.acos(U(r[t - 1].dot(r[t]), -1, 1));
				i[t].applyMatrix4(s.makeRotationAxis(o, e));
			}
			a[t].crossVectors(r[t], i[t]);
		}
		if (t === !0) {
			let t = Math.acos(U(i[0].dot(i[e]), -1, 1));
			t /= e, r[0].dot(o.crossVectors(i[0], i[e])) > 0 && (t = -t);
			for (let n = 1; n <= e; n++) i[n].applyMatrix4(s.makeRotationAxis(r[n], t * n)), a[n].crossVectors(r[n], i[n]);
		}
		return {
			tangents: r,
			normals: i,
			binormals: a
		};
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.arcLengthDivisions = e.arcLengthDivisions, this.cacheArcLengths = null, this;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.7,
			type: "Curve",
			generator: "Curve.toJSON"
		} };
		return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
	}
	fromJSON(e) {
		return this.arcLengthDivisions = e.arcLengthDivisions, this.cacheArcLengths = null, this;
	}
}, ta = class extends ea {
	constructor(e = 0, t = 0, n = 1, r = 1, i = 0, a = Math.PI * 2, o = !1, s = 0) {
		super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = r, this.aStartAngle = i, this.aEndAngle = a, this.aClockwise = o, this.aRotation = s;
	}
	getPoint(e, t = new W()) {
		let n = t, r = Math.PI * 2, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < 2 ** -52;
		for (; i < 0;) i += r;
		for (; i > r;) i -= r;
		i < 2 ** -52 && (i = a ? 0 : r), this.aClockwise === !0 && !a && (i === r ? i = -r : i -= r);
		let o = this.aStartAngle + e * i, s = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
		if (this.aRotation !== 0) {
			let e = Math.cos(this.aRotation), t = Math.sin(this.aRotation), n = s - this.aX, r = c - this.aY;
			s = n * e - r * t + this.aX, c = n * t + r * e + this.aY;
		}
		return n.set(s, c);
	}
	copy(e) {
		return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
	}
}, na = class extends ta {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, n, r, i, a), this.isArcCurve = !0, this.type = "ArcCurve";
	}
};
function ra() {
	let e = 0, t = 0, n = 0, r = 0;
	function i(i, a, o, s) {
		e = i, t = o, n = -3 * i + 3 * a - 2 * o - s, r = 2 * i - 2 * a + o + s;
	}
	return {
		initCatmullRom: function(e, t, n, r, a) {
			i(t, n, a * (n - e), a * (r - t));
		},
		initNonuniformCatmullRom: function(e, t, n, r, a, o, s) {
			let c = (t - e) / a - (n - e) / (a + o) + (n - t) / o, l = (n - t) / o - (r - t) / (o + s) + (r - n) / s;
			c *= o, l *= o, i(t, n, c, l);
		},
		calc: function(i) {
			let a = i * i, o = a * i;
			return e + t * i + n * a + r * o;
		}
	};
}
var ia = /*@__PURE__*/ new G(), aa = /*@__PURE__*/ new G(), oa = /*@__PURE__*/ new ra(), sa = /*@__PURE__*/ new ra(), ca = /*@__PURE__*/ new ra(), la = class extends ea {
	constructor(e = [], t = !1, n = "centripetal", r = .5) {
		super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = r;
	}
	getPoint(e, t = new G()) {
		let n = t, r = this.points, i = r.length, a = (i - +!this.closed) * e, o = Math.floor(a), s = a - o;
		this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / i) + 1) * i : s === 0 && o === i - 1 && (o = i - 2, s = 1);
		let c, l;
		this.closed || o > 0 ? c = r[(o - 1) % i] : (aa.subVectors(r[0], r[1]).add(r[0]), c = aa);
		let u = r[o % i], d = r[(o + 1) % i];
		if (this.closed || o + 2 < i ? l = r[(o + 2) % i] : (ia.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), l = ia), this.curveType === "centripetal" || this.curveType === "chordal") {
			let e = this.curveType === "chordal" ? .5 : .25, t = c.distanceToSquared(u) ** +e, n = u.distanceToSquared(d) ** +e, r = d.distanceToSquared(l) ** +e;
			n < 1e-4 && (n = 1), t < 1e-4 && (t = n), r < 1e-4 && (r = n), oa.initNonuniformCatmullRom(c.x, u.x, d.x, l.x, t, n, r), sa.initNonuniformCatmullRom(c.y, u.y, d.y, l.y, t, n, r), ca.initNonuniformCatmullRom(c.z, u.z, d.z, l.z, t, n, r);
		} else this.curveType === "catmullrom" && (oa.initCatmullRom(c.x, u.x, d.x, l.x, this.tension), sa.initCatmullRom(c.y, u.y, d.y, l.y, this.tension), ca.initCatmullRom(c.z, u.z, d.z, l.z, this.tension));
		return n.set(oa.calc(s), sa.calc(s), ca.calc(s)), n;
	}
	copy(e) {
		super.copy(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(n.clone());
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
	}
	toJSON() {
		let e = super.toJSON();
		e.points = [];
		for (let t = 0, n = this.points.length; t < n; t++) {
			let n = this.points[t];
			e.points.push(n.toArray());
		}
		return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(new G().fromArray(n));
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
	}
};
function ua(e, t, n, r, i) {
	let a = (r - t) * .5, o = (i - n) * .5, s = e * e, c = e * s;
	return (2 * n - 2 * r + a + o) * c + (-3 * n + 3 * r - 2 * a - o) * s + a * e + n;
}
function da(e, t) {
	let n = 1 - e;
	return n * n * t;
}
function fa(e, t) {
	return 2 * (1 - e) * e * t;
}
function pa(e, t) {
	return e * e * t;
}
function ma(e, t, n, r) {
	return da(e, t) + fa(e, n) + pa(e, r);
}
function ha(e, t) {
	let n = 1 - e;
	return n * n * n * t;
}
function ga(e, t) {
	let n = 1 - e;
	return 3 * n * n * e * t;
}
function _a(e, t) {
	return 3 * (1 - e) * e * e * t;
}
function va(e, t) {
	return e * e * e * t;
}
function ya(e, t, n, r, i) {
	return ha(e, t) + ga(e, n) + _a(e, r) + va(e, i);
}
var ba = class extends ea {
	constructor(e = new W(), t = new W(), n = new W(), r = new W()) {
		super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
	}
	getPoint(e, t = new W()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2, o = this.v3;
		return n.set(ya(e, r.x, i.x, a.x, o.x), ya(e, r.y, i.y, a.y, o.y)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
	}
}, xa = class extends ea {
	constructor(e = new G(), t = new G(), n = new G(), r = new G()) {
		super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
	}
	getPoint(e, t = new G()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2, o = this.v3;
		return n.set(ya(e, r.x, i.x, a.x, o.x), ya(e, r.y, i.y, a.y, o.y), ya(e, r.z, i.z, a.z, o.z)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
	}
}, Sa = class extends ea {
	constructor(e = new W(), t = new W()) {
		super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
	}
	getPoint(e, t = new W()) {
		let n = t;
		return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
	}
	getPointAt(e, t) {
		return this.getPoint(e, t);
	}
	getTangent(e, t = new W()) {
		return t.subVectors(this.v2, this.v1).normalize();
	}
	getTangentAt(e, t) {
		return this.getTangent(e, t);
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, Ca = class extends ea {
	constructor(e = new G(), t = new G()) {
		super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
	}
	getPoint(e, t = new G()) {
		let n = t;
		return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
	}
	getPointAt(e, t) {
		return this.getPoint(e, t);
	}
	getTangent(e, t = new G()) {
		return t.subVectors(this.v2, this.v1).normalize();
	}
	getTangentAt(e, t) {
		return this.getTangent(e, t);
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, wa = class extends ea {
	constructor(e = new W(), t = new W(), n = new W()) {
		super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
	}
	getPoint(e, t = new W()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2;
		return n.set(ma(e, r.x, i.x, a.x), ma(e, r.y, i.y, a.y)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, Ta = class extends ea {
	constructor(e = new G(), t = new G(), n = new G()) {
		super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
	}
	getPoint(e, t = new G()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2;
		return n.set(ma(e, r.x, i.x, a.x), ma(e, r.y, i.y, a.y), ma(e, r.z, i.z, a.z)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, Ea = class extends ea {
	constructor(e = []) {
		super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
	}
	getPoint(e, t = new W()) {
		let n = t, r = this.points, i = (r.length - 1) * e, a = Math.floor(i), o = i - a, s = r[a === 0 ? a : a - 1], c = r[a], l = r[a > r.length - 2 ? r.length - 1 : a + 1], u = r[a > r.length - 3 ? r.length - 1 : a + 2];
		return n.set(ua(o, s.x, c.x, l.x, u.x), ua(o, s.y, c.y, l.y, u.y)), n;
	}
	copy(e) {
		super.copy(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(n.clone());
		}
		return this;
	}
	toJSON() {
		let e = super.toJSON();
		e.points = [];
		for (let t = 0, n = this.points.length; t < n; t++) {
			let n = this.points[t];
			e.points.push(n.toArray());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(new W().fromArray(n));
		}
		return this;
	}
}, Da = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	ArcCurve: na,
	CatmullRomCurve3: la,
	CubicBezierCurve: ba,
	CubicBezierCurve3: xa,
	EllipseCurve: ta,
	LineCurve: Sa,
	LineCurve3: Ca,
	QuadraticBezierCurve: wa,
	QuadraticBezierCurve3: Ta,
	SplineCurve: Ea
}), Oa = class extends ea {
	constructor() {
		super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1, this.cacheLengths = null;
	}
	add(e) {
		this.curves.push(e);
	}
	closePath() {
		let e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
		if (!e.equals(t)) {
			let n = e.isVector2 === !0 ? "LineCurve" : "LineCurve3";
			this.curves.push(new Da[n](t, e));
		}
		return this;
	}
	getPoint(e, t) {
		let n = e * this.getLength(), r = this.getCurveLengths(), i = 0;
		for (; i < r.length;) {
			if (r[i] >= n) {
				let e = r[i] - n, a = this.curves[i], o = a.getLength(), s = o === 0 ? 0 : 1 - e / o;
				return a.getPointAt(s, t);
			}
			i++;
		}
		return null;
	}
	getLength() {
		let e = this.getCurveLengths();
		return e[e.length - 1];
	}
	updateArcLengths() {
		this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
	}
	getCurveLengths() {
		if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
		let e = [], t = 0;
		for (let n = 0, r = this.curves.length; n < r; n++) t += this.curves[n].getLength(), e.push(t);
		return this.cacheLengths = e, e;
	}
	getSpacedPoints(e = 40) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return this.autoClose && t.push(t[0]), t;
	}
	getPoints(e = 12) {
		let t = [], n;
		for (let r = 0, i = this.curves; r < i.length; r++) {
			let a = i[r], o = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e, s = a.getPoints(o);
			for (let e = 0; e < s.length; e++) {
				let r = s[e];
				n && n.equals(r) || (t.push(r), n = r);
			}
		}
		return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
	}
	copy(e) {
		super.copy(e), this.curves = [];
		for (let t = 0, n = e.curves.length; t < n; t++) {
			let n = e.curves[t];
			this.curves.push(n.clone());
		}
		return this.autoClose = e.autoClose, this.cacheLengths = null, this;
	}
	toJSON() {
		let e = super.toJSON();
		e.autoClose = this.autoClose, e.curves = [];
		for (let t = 0, n = this.curves.length; t < n; t++) {
			let n = this.curves[t];
			e.curves.push(n.toJSON());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
		for (let t = 0, n = e.curves.length; t < n; t++) {
			let n = e.curves[t];
			this.curves.push(new Da[n.type]().fromJSON(n));
		}
		return this.cacheLengths = null, this;
	}
}, ka = class extends Oa {
	constructor(e) {
		super(), this.type = "Path", this.currentPoint = new W(), e && this.setFromPoints(e);
	}
	setFromPoints(e) {
		this.moveTo(e[0].x, e[0].y);
		for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
		return this;
	}
	moveTo(e, t) {
		return this.currentPoint.set(e, t), this;
	}
	lineTo(e, t) {
		let n = new Sa(this.currentPoint.clone(), new W(e, t));
		return this.curves.push(n), this.currentPoint.set(e, t), this;
	}
	quadraticCurveTo(e, t, n, r) {
		let i = new wa(this.currentPoint.clone(), new W(e, t), new W(n, r));
		return this.curves.push(i), this.currentPoint.set(n, r), this;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		let o = new ba(this.currentPoint.clone(), new W(e, t), new W(n, r), new W(i, a));
		return this.curves.push(o), this.currentPoint.set(i, a), this;
	}
	splineThru(e) {
		let t = new Ea([this.currentPoint.clone()].concat(e));
		return this.curves.push(t), this.currentPoint.copy(e[e.length - 1]), this;
	}
	arc(e, t, n, r, i, a) {
		let o = this.currentPoint.x, s = this.currentPoint.y;
		return this.absarc(e + o, t + s, n, r, i, a), this;
	}
	absarc(e, t, n, r, i, a) {
		return this.absellipse(e, t, n, n, r, i, a), this;
	}
	ellipse(e, t, n, r, i, a, o, s) {
		let c = this.currentPoint.x, l = this.currentPoint.y;
		return this.absellipse(e + c, t + l, n, r, i, a, o, s), this;
	}
	absellipse(e, t, n, r, i, a, o, s) {
		let c = new ta(e, t, n, r, i, a, o, s);
		if (this.curves.length > 0) {
			let e = c.getPoint(0);
			e.equals(this.currentPoint) || this.lineTo(e.x, e.y);
		}
		this.curves.push(c);
		let l = c.getPoint(1);
		return this.currentPoint.copy(l), this;
	}
	copy(e) {
		return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.currentPoint = this.currentPoint.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
	}
}, Aa = class extends ka {
	constructor(e) {
		super(e), this.uuid = at(), this.type = "Shape", this.holes = [];
	}
	getPointsHoles(e) {
		let t = [];
		for (let n = 0, r = this.holes.length; n < r; n++) t[n] = this.holes[n].getPoints(e);
		return t;
	}
	extractPoints(e) {
		return {
			shape: this.getPoints(e),
			holes: this.getPointsHoles(e)
		};
	}
	copy(e) {
		super.copy(e), this.holes = [];
		for (let t = 0, n = e.holes.length; t < n; t++) {
			let n = e.holes[t];
			this.holes.push(n.clone());
		}
		return this;
	}
	toJSON() {
		let e = super.toJSON();
		e.uuid = this.uuid, e.holes = [];
		for (let t = 0, n = this.holes.length; t < n; t++) {
			let n = this.holes[t];
			e.holes.push(n.toJSON());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
		for (let t = 0, n = e.holes.length; t < n; t++) {
			let n = e.holes[t];
			this.holes.push(new ka().fromJSON(n));
		}
		return this;
	}
};
function ja(e, t, n = 2) {
	let r = t && t.length, i = r ? t[0] * n : e.length, a = Ma(e, 0, i, n, !0), o = [];
	if (!a || a.next === a.prev) return o;
	let s, c, l;
	if (r && (a = za(e, t, a, n)), e.length > 80 * n) {
		s = e[0], c = e[1];
		let t = s, r = c;
		for (let a = n; a < i; a += n) {
			let n = e[a], i = e[a + 1];
			n < s && (s = n), i < c && (c = i), n > t && (t = n), i > r && (r = i);
		}
		l = Math.max(t - s, r - c), l = l === 0 ? 0 : 32767 / l;
	}
	return Pa(a, o, n, s, c, l, 0), o;
}
function Ma(e, t, n, r, i) {
	let a;
	if (i === lo(e, t, n, r) > 0) for (let i = t; i < n; i += r) a = oo(i / r | 0, e[i], e[i + 1], a);
	else for (let i = n - r; i >= t; i -= r) a = oo(i / r | 0, e[i], e[i + 1], a);
	return a && Qa(a, a.next) && (so(a), a = a.next), a;
}
function Na(e, t) {
	if (!e) return e;
	t ||= e;
	let n = e, r;
	do
		if (r = !1, !n.steiner && (Qa(n, n.next) || Za(n.prev, n, n.next) === 0)) {
			if (so(n), n = t = n.prev, n === n.next) break;
			r = !0;
		} else n = n.next;
	while (r || n !== t);
	return t;
}
function Pa(e, t, n, r, i, a, o) {
	if (!e) return;
	!o && a && Wa(e, r, i, a);
	let s = e;
	for (; e.prev !== e.next;) {
		let c = e.prev, l = e.next;
		if (a ? Ia(e, r, i, a) : Fa(e)) t.push(c.i, e.i, l.i), so(e), e = l.next, s = l.next;
		else if (e = l, e === s) {
			o ? o === 1 ? (e = La(Na(e), t), Pa(e, t, n, r, i, a, 2)) : o === 2 && Ra(e, t, n, r, i, a) : Pa(Na(e), t, n, r, i, a, 1);
			break;
		}
	}
}
function Fa(e) {
	let t = e.prev, n = e, r = e.next;
	if (Za(t, n, r) >= 0) return !1;
	let i = t.x, a = n.x, o = r.x, s = t.y, c = n.y, l = r.y, u = Math.min(i, a, o), d = Math.min(s, c, l), f = Math.max(i, a, o), p = Math.max(s, c, l), m = r.next;
	for (; m !== t;) {
		if (m.x >= u && m.x <= f && m.y >= d && m.y <= p && Ya(i, s, a, c, o, l, m.x, m.y) && Za(m.prev, m, m.next) >= 0) return !1;
		m = m.next;
	}
	return !0;
}
function Ia(e, t, n, r) {
	let i = e.prev, a = e, o = e.next;
	if (Za(i, a, o) >= 0) return !1;
	let s = i.x, c = a.x, l = o.x, u = i.y, d = a.y, f = o.y, p = Math.min(s, c, l), m = Math.min(u, d, f), h = Math.max(s, c, l), g = Math.max(u, d, f), _ = Ka(p, m, t, n, r), v = Ka(h, g, t, n, r), y = e.prevZ, b = e.nextZ;
	for (; y && y.z >= _ && b && b.z <= v;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && Ya(s, u, c, d, l, f, y.x, y.y) && Za(y.prev, y, y.next) >= 0 || (y = y.prevZ, b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && Ya(s, u, c, d, l, f, b.x, b.y) && Za(b.prev, b, b.next) >= 0)) return !1;
		b = b.nextZ;
	}
	for (; y && y.z >= _;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && Ya(s, u, c, d, l, f, y.x, y.y) && Za(y.prev, y, y.next) >= 0) return !1;
		y = y.prevZ;
	}
	for (; b && b.z <= v;) {
		if (b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && Ya(s, u, c, d, l, f, b.x, b.y) && Za(b.prev, b, b.next) >= 0) return !1;
		b = b.nextZ;
	}
	return !0;
}
function La(e, t) {
	let n = e;
	do {
		let r = n.prev, i = n.next.next;
		!Qa(r, i) && $a(r, n, n.next, i) && ro(r, i) && ro(i, r) && (t.push(r.i, n.i, i.i), so(n), so(n.next), n = e = i), n = n.next;
	} while (n !== e);
	return Na(n);
}
function Ra(e, t, n, r, i, a) {
	let o = e;
	do {
		let e = o.next.next;
		for (; e !== o.prev;) {
			if (o.i !== e.i && Xa(o, e)) {
				let s = ao(o, e);
				o = Na(o, o.next), s = Na(s, s.next), Pa(o, t, n, r, i, a, 0), Pa(s, t, n, r, i, a, 0);
				return;
			}
			e = e.next;
		}
		o = o.next;
	} while (o !== e);
}
function za(e, t, n, r) {
	let i = [];
	for (let n = 0, a = t.length; n < a; n++) {
		let o = Ma(e, t[n] * r, n < a - 1 ? t[n + 1] * r : e.length, r, !1);
		o === o.next && (o.steiner = !0), i.push(qa(o));
	}
	i.sort(Ba);
	for (let e = 0; e < i.length; e++) n = Va(i[e], n);
	return n;
}
function Ba(e, t) {
	let n = e.x - t.x;
	return n === 0 && (n = e.y - t.y, n === 0 && (n = (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x))), n;
}
function Va(e, t) {
	let n = Ha(e, t);
	if (!n) return t;
	let r = ao(n, e);
	return Na(r, r.next), Na(n, n.next);
}
function Ha(e, t) {
	let n = t, r = e.x, i = e.y, a = -Infinity, o;
	if (Qa(e, n)) return n;
	do {
		if (Qa(e, n.next)) return n.next;
		if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
			let e = n.x + (i - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
			if (e <= r && e > a && (a = e, o = n.x < n.next.x ? n : n.next, e === r)) return o;
		}
		n = n.next;
	} while (n !== t);
	if (!o) return null;
	let s = o, c = o.x, l = o.y, u = Infinity;
	n = o;
	do {
		if (r >= n.x && n.x >= c && r !== n.x && Ja(i < l ? r : a, i, c, l, i < l ? a : r, i, n.x, n.y)) {
			let t = Math.abs(i - n.y) / (r - n.x);
			ro(n, e) && (t < u || t === u && (n.x > o.x || n.x === o.x && Ua(o, n))) && (o = n, u = t);
		}
		n = n.next;
	} while (n !== s);
	return o;
}
function Ua(e, t) {
	return Za(e.prev, e, t.prev) < 0 && Za(t.next, e, e.next) < 0;
}
function Wa(e, t, n, r) {
	let i = e;
	do
		i.z === 0 && (i.z = Ka(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
	while (i !== e);
	i.prevZ.nextZ = null, i.prevZ = null, Ga(i);
}
function Ga(e) {
	let t, n = 1;
	do {
		let r = e, i;
		e = null;
		let a = null;
		for (t = 0; r;) {
			t++;
			let o = r, s = 0;
			for (let e = 0; e < n && (s++, o = o.nextZ, o); e++);
			let c = n;
			for (; s > 0 || c > 0 && o;) s !== 0 && (c === 0 || !o || r.z <= o.z) ? (i = r, r = r.nextZ, s--) : (i = o, o = o.nextZ, c--), a ? a.nextZ = i : e = i, i.prevZ = a, a = i;
			r = o;
		}
		a.nextZ = null, n *= 2;
	} while (t > 1);
	return e;
}
function Ka(e, t, n, r, i) {
	return e = (e - n) * i | 0, t = (t - r) * i | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function qa(e) {
	let t = e, n = e;
	do
		(t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
	while (t !== e);
	return n;
}
function Ja(e, t, n, r, i, a, o, s) {
	return (i - o) * (t - s) >= (e - o) * (a - s) && (e - o) * (r - s) >= (n - o) * (t - s) && (n - o) * (a - s) >= (i - o) * (r - s);
}
function Ya(e, t, n, r, i, a, o, s) {
	return (e !== o || t !== s) && Ja(e, t, n, r, i, a, o, s);
}
function Xa(e, t) {
	return e.next.i !== t.i && e.prev.i !== t.i && !no(e, t) && (ro(e, t) && ro(t, e) && io(e, t) && (Za(e.prev, e, t.prev) || Za(e, t.prev, t)) || Qa(e, t) && Za(e.prev, e, e.next) > 0 && Za(t.prev, t, t.next) > 0);
}
function Za(e, t, n) {
	return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function Qa(e, t) {
	return e.x === t.x && e.y === t.y;
}
function $a(e, t, n, r) {
	let i = to(Za(e, t, n)), a = to(Za(e, t, r)), o = to(Za(n, r, e)), s = to(Za(n, r, t));
	return !!(i !== a && o !== s || i === 0 && eo(e, n, t) || a === 0 && eo(e, r, t) || o === 0 && eo(n, e, r) || s === 0 && eo(n, t, r));
}
function eo(e, t, n) {
	return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function to(e) {
	return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function no(e, t) {
	let n = e;
	do {
		if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && $a(n, n.next, e, t)) return !0;
		n = n.next;
	} while (n !== e);
	return !1;
}
function ro(e, t) {
	return Za(e.prev, e, e.next) < 0 ? Za(e, t, e.next) >= 0 && Za(e, e.prev, t) >= 0 : Za(e, t, e.prev) < 0 || Za(e, e.next, t) < 0;
}
function io(e, t) {
	let n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
	do
		n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next;
	while (n !== e);
	return r;
}
function ao(e, t) {
	let n = co(e.i, e.x, e.y), r = co(t.i, t.x, t.y), i = e.next, a = t.prev;
	return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
}
function oo(e, t, n, r) {
	let i = co(e, t, n);
	return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
}
function so(e) {
	e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function co(e, t, n) {
	return {
		i: e,
		x: t,
		y: n,
		prev: null,
		next: null,
		z: 0,
		prevZ: null,
		nextZ: null,
		steiner: !1
	};
}
function lo(e, t, n, r) {
	let i = 0;
	for (let a = t, o = n - r; a < n; a += r) i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
	return i;
}
var uo = class {
	static triangulate(e, t, n = 2) {
		return ja(e, t, n);
	}
}, fo = class e {
	static area(e) {
		let t = e.length, n = 0;
		for (let r = t - 1, i = 0; i < t; r = i++) n += e[r].x * e[i].y - e[i].x * e[r].y;
		return n * .5;
	}
	static isClockWise(t) {
		return e.area(t) < 0;
	}
	static triangulateShape(e, t) {
		let n = [], r = [], i = [];
		po(e), mo(n, e);
		let a = e.length;
		t.forEach(po);
		for (let e = 0; e < t.length; e++) r.push(a), a += t[e].length, mo(n, t[e]);
		let o = uo.triangulate(n, r);
		for (let e = 0; e < o.length; e += 3) i.push(o.slice(e, e + 3));
		return i;
	}
};
function po(e) {
	let t = e.length;
	t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function mo(e, t) {
	for (let n = 0; n < t.length; n++) e.push(t[n].x), e.push(t[n].y);
}
var ho = class e extends Dr {
	constructor(e = 1, t = 1, n = 1, r = 1) {
		super(), this.type = "PlaneGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: n,
			heightSegments: r
		};
		let i = e / 2, a = t / 2, o = Math.floor(n), s = Math.floor(r), c = o + 1, l = s + 1, u = e / o, d = t / s, f = [], p = [], m = [], h = [];
		for (let e = 0; e < l; e++) {
			let t = e * d - a;
			for (let n = 0; n < c; n++) {
				let r = n * u - i;
				p.push(r, -t, 0), m.push(0, 0, 1), h.push(n / o), h.push(1 - e / s);
			}
		}
		for (let e = 0; e < s; e++) for (let t = 0; t < o; t++) {
			let n = t + c * e, r = t + c * (e + 1), i = t + 1 + c * (e + 1), a = t + 1 + c * e;
			f.push(n, r, a), f.push(r, i, a);
		}
		this.setIndex(f), this.setAttribute("position", new Y(p, 3)), this.setAttribute("normal", new Y(m, 3)), this.setAttribute("uv", new Y(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.widthSegments, t.heightSegments);
	}
}, go = class e extends Dr {
	constructor(e = .5, t = 1, n = 32, r = 1, i = 0, a = Math.PI * 2) {
		super(), this.type = "RingGeometry", this.parameters = {
			innerRadius: e,
			outerRadius: t,
			thetaSegments: n,
			phiSegments: r,
			thetaStart: i,
			thetaLength: a
		}, n = Math.max(3, n), r = Math.max(1, r);
		let o = [], s = [], c = [], l = [], u = e, d = (t - e) / r, f = new G(), p = new W();
		for (let e = 0; e <= r; e++) {
			for (let e = 0; e <= n; e++) {
				let r = i + e / n * a;
				f.x = u * Math.cos(r), f.y = u * Math.sin(r), s.push(f.x, f.y, f.z), c.push(0, 0, 1), p.x = (f.x / t + 1) / 2, p.y = (f.y / t + 1) / 2, l.push(p.x, p.y);
			}
			u += d;
		}
		for (let e = 0; e < r; e++) {
			let t = e * (n + 1);
			for (let e = 0; e < n; e++) {
				let r = e + t, i = r, a = r + n + 1, s = r + n + 2, c = r + 1;
				o.push(i, a, c), o.push(a, s, c);
			}
		}
		this.setIndex(o), this.setAttribute("position", new Y(s, 3)), this.setAttribute("normal", new Y(c, 3)), this.setAttribute("uv", new Y(l, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
	}
}, _o = class e extends Dr {
	constructor(e = new Aa([
		new W(0, .5),
		new W(-.5, -.5),
		new W(.5, -.5)
	]), t = 12) {
		super(), this.type = "ShapeGeometry", this.parameters = {
			shapes: e,
			curveSegments: t
		};
		let n = [], r = [], i = [], a = [], o = 0, s = 0;
		if (Array.isArray(e) === !1) c(e);
		else for (let t = 0; t < e.length; t++) c(e[t]), this.addGroup(o, s, t), o += s, s = 0;
		this.setIndex(n), this.setAttribute("position", new Y(r, 3)), this.setAttribute("normal", new Y(i, 3)), this.setAttribute("uv", new Y(a, 2));
		function c(e) {
			let o = r.length / 3, c = e.extractPoints(t), l = c.shape, u = c.holes;
			fo.isClockWise(l) === !1 && (l = l.reverse());
			for (let e = 0, t = u.length; e < t; e++) {
				let t = u[e];
				fo.isClockWise(t) === !0 && (u[e] = t.reverse());
			}
			let d = fo.triangulateShape(l, u);
			for (let e = 0, t = u.length; e < t; e++) {
				let t = u[e];
				l = l.concat(t);
			}
			for (let e = 0, t = l.length; e < t; e++) {
				let t = l[e];
				r.push(t.x, t.y, 0), i.push(0, 0, 1), a.push(t.x, t.y);
			}
			for (let e = 0, t = d.length; e < t; e++) {
				let t = d[e], r = t[0] + o, i = t[1] + o, a = t[2] + o;
				n.push(r, i, a), s += 3;
			}
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	toJSON() {
		let e = super.toJSON(), t = this.parameters.shapes;
		return vo(t, e);
	}
	static fromJSON(t, n) {
		let r = [];
		for (let e = 0, i = t.shapes.length; e < i; e++) {
			let i = n[t.shapes[e]];
			r.push(i);
		}
		return new e(r, t.curveSegments);
	}
};
function vo(e, t) {
	if (t.shapes = [], Array.isArray(e)) for (let n = 0, r = e.length; n < r; n++) {
		let r = e[n];
		t.shapes.push(r.uuid);
	}
	else t.shapes.push(e.uuid);
	return t;
}
var yo = class e extends Dr {
	constructor(e = 1, t = 32, n = 16, r = 0, i = Math.PI * 2, a = 0, o = Math.PI) {
		super(), this.type = "SphereGeometry", this.parameters = {
			radius: e,
			widthSegments: t,
			heightSegments: n,
			phiStart: r,
			phiLength: i,
			thetaStart: a,
			thetaLength: o
		}, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
		let s = Math.min(a + o, Math.PI), c = 0, l = [], u = new G(), d = new G(), f = [], p = [], m = [], h = [];
		for (let f = 0; f <= n; f++) {
			let g = [], _ = f / n, v = a + _ * o, y = e * Math.cos(v), b = Math.sqrt(e * e - y * y), x = 0;
			f === 0 && a === 0 ? x = .5 / t : f === n && s === Math.PI && (x = -.5 / t);
			for (let e = 0; e <= t; e++) {
				let n = e / t, a = r + n * i;
				u.x = -b * Math.cos(a), u.y = y, u.z = b * Math.sin(a), p.push(u.x, u.y, u.z), d.copy(u).normalize(), m.push(d.x, d.y, d.z), h.push(n + x, 1 - _), g.push(c++);
			}
			l.push(g);
		}
		for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
			let t = l[e][r + 1], i = l[e][r], o = l[e + 1][r], c = l[e + 1][r + 1];
			(e !== 0 || a > 0) && f.push(t, i, c), (e !== n - 1 || s < Math.PI) && f.push(i, o, c);
		}
		this.setIndex(f), this.setAttribute("position", new Y(p, 3)), this.setAttribute("normal", new Y(m, 3)), this.setAttribute("uv", new Y(h, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
	}
}, bo = class e extends Dr {
	constructor(e = 1, t = .4, n = 12, r = 48, i = Math.PI * 2, a = 0, o = Math.PI * 2) {
		super(), this.type = "TorusGeometry", this.parameters = {
			radius: e,
			tube: t,
			radialSegments: n,
			tubularSegments: r,
			arc: i,
			thetaStart: a,
			thetaLength: o
		}, n = Math.floor(n), r = Math.floor(r);
		let s = [], c = [], l = [], u = [], d = new G(), f = new G(), p = new G();
		for (let s = 0; s <= n; s++) {
			let m = a + s / n * o;
			for (let a = 0; a <= r; a++) {
				let o = a / r * i;
				f.x = (e + t * Math.cos(m)) * Math.cos(o), f.y = (e + t * Math.cos(m)) * Math.sin(o), f.z = t * Math.sin(m), c.push(f.x, f.y, f.z), d.x = e * Math.cos(o), d.y = e * Math.sin(o), p.subVectors(f, d).normalize(), l.push(p.x, p.y, p.z), u.push(a / r), u.push(s / n);
			}
		}
		for (let e = 1; e <= n; e++) for (let t = 1; t <= r; t++) {
			let n = (r + 1) * e + t - 1, i = (r + 1) * (e - 1) + t - 1, a = (r + 1) * (e - 1) + t, o = (r + 1) * e + t;
			s.push(n, i, o), s.push(i, a, o);
		}
		this.setIndex(s), this.setAttribute("position", new Y(c, 3)), this.setAttribute("normal", new Y(l, 3)), this.setAttribute("uv", new Y(u, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc, t.thetaStart, t.thetaLength);
	}
}, xo = class e extends Dr {
	constructor(e = new Ta(new G(-1, -1, 0), new G(-1, 1, 0), new G(1, 1, 0)), t = 64, n = 1, r = 8, i = !1) {
		super(), this.type = "TubeGeometry", this.parameters = {
			path: e,
			tubularSegments: t,
			radius: n,
			radialSegments: r,
			closed: i
		};
		let a = e.computeFrenetFrames(t, i);
		this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
		let o = new G(), s = new G(), c = new W(), l = new G(), u = [], d = [], f = [], p = [];
		m(), this.setIndex(p), this.setAttribute("position", new Y(u, 3)), this.setAttribute("normal", new Y(d, 3)), this.setAttribute("uv", new Y(f, 2));
		function m() {
			for (let e = 0; e < t; e++) h(e);
			h(i === !1 ? t : 0), _(), g();
		}
		function h(i) {
			l = e.getPointAt(i / t, l);
			let c = a.normals[i], f = a.binormals[i];
			for (let e = 0; e <= r; e++) {
				let t = e / r * Math.PI * 2, i = Math.sin(t), a = -Math.cos(t);
				s.x = a * c.x + i * f.x, s.y = a * c.y + i * f.y, s.z = a * c.z + i * f.z, s.normalize(), d.push(s.x, s.y, s.z), o.x = l.x + n * s.x, o.y = l.y + n * s.y, o.z = l.z + n * s.z, u.push(o.x, o.y, o.z);
			}
		}
		function g() {
			for (let e = 1; e <= t; e++) for (let t = 1; t <= r; t++) {
				let n = (r + 1) * (e - 1) + (t - 1), i = (r + 1) * e + (t - 1), a = (r + 1) * e + t, o = (r + 1) * (e - 1) + t;
				p.push(n, i, o), p.push(i, a, o);
			}
		}
		function _() {
			for (let e = 0; e <= t; e++) for (let n = 0; n <= r; n++) c.x = e / t, c.y = n / r, f.push(c.x, c.y);
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.path = this.parameters.path.toJSON(), e;
	}
	static fromJSON(t) {
		return new e(new Da[t.path.type]().fromJSON(t.path), t.tubularSegments, t.radius, t.radialSegments, t.closed);
	}
}, So = class extends Dr {
	constructor(e = null) {
		if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: e }, e !== null) {
			let t = [], n = /* @__PURE__ */ new Set(), r = new G(), i = new G();
			if (e.index !== null) {
				let a = e.attributes.position, o = e.index, s = e.groups;
				s.length === 0 && (s = [{
					start: 0,
					count: o.count,
					materialIndex: 0
				}]);
				for (let e = 0, c = s.length; e < c; ++e) {
					let c = s[e], l = c.start, u = c.count;
					for (let e = l, s = l + u; e < s; e += 3) for (let s = 0; s < 3; s++) {
						let c = o.getX(e + s), l = o.getX(e + (s + 1) % 3);
						r.fromBufferAttribute(a, c), i.fromBufferAttribute(a, l), Co(r, i, n) === !0 && (t.push(r.x, r.y, r.z), t.push(i.x, i.y, i.z));
					}
				}
			} else {
				let a = e.attributes.position;
				for (let e = 0, o = a.count / 3; e < o; e++) for (let o = 0; o < 3; o++) {
					let s = 3 * e + o, c = 3 * e + (o + 1) % 3;
					r.fromBufferAttribute(a, s), i.fromBufferAttribute(a, c), Co(r, i, n) === !0 && (t.push(r.x, r.y, r.z), t.push(i.x, i.y, i.z));
				}
			}
			this.setAttribute("position", new Y(t, 3));
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
};
function Co(e, t, n) {
	let r = `${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`, i = `${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;
	return n.has(r) === !0 || n.has(i) === !0 ? !1 : (n.add(r), n.add(i), !0);
}
function wo(e) {
	let t = {};
	for (let n in e) {
		t[n] = {};
		for (let r in e[n]) {
			let i = e[n][r];
			if (Eo(i)) i.isRenderTargetTexture ? (V("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][r] = null) : t[n][r] = i.clone();
			else if (Array.isArray(i)) {
				if (Eo(i[0])) {
					let e = [];
					for (let t = 0, n = i.length; t < n; t++) e[t] = i[t].clone();
					t[n][r] = e;
				} else t[n][r] = i.slice();
			} else t[n][r] = i;
		}
	}
	return t;
}
function To(e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = wo(e[n]);
		for (let e in r) t[e] = r[e];
	}
	return t;
}
function Eo(e) {
	return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function Do(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) t.push(e[n].clone());
	return t;
}
function Oo(e) {
	let t = e.getRenderTarget();
	return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : q.workingColorSpace;
}
var ko = {
	clone: wo,
	merge: To
}, Ao = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", jo = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", Mo = class extends Lr {
	constructor(e) {
		super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ao, this.fragmentShader = jo, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
			clipCullDistance: !1,
			multiDraw: !1
		}, this.defaultAttributeValues = {
			color: [
				1,
				1,
				1
			],
			uv: [0, 0],
			uv1: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = wo(e.uniforms), this.uniformsGroups = Do(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		t.glslVersion = this.glslVersion, t.uniforms = {};
		for (let n in this.uniforms) {
			let r = this.uniforms[n].value;
			r && r.isTexture ? t.uniforms[n] = {
				type: "t",
				value: r.toJSON(e).uuid
			} : r && r.isColor ? t.uniforms[n] = {
				type: "c",
				value: r.getHex()
			} : r && r.isVector2 ? t.uniforms[n] = {
				type: "v2",
				value: r.toArray()
			} : r && r.isVector3 ? t.uniforms[n] = {
				type: "v3",
				value: r.toArray()
			} : r && r.isVector4 ? t.uniforms[n] = {
				type: "v4",
				value: r.toArray()
			} : r && r.isMatrix3 ? t.uniforms[n] = {
				type: "m3",
				value: r.toArray()
			} : r && r.isMatrix4 ? t.uniforms[n] = {
				type: "m4",
				value: r.toArray()
			} : t.uniforms[n] = { value: r };
		}
		Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
		let n = {};
		for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0);
		return Object.keys(n).length > 0 && (t.extensions = n), t;
	}
	fromJSON(e, t) {
		if (super.fromJSON(e, t), e.uniforms !== void 0) for (let n in e.uniforms) {
			let r = e.uniforms[n];
			switch (this.uniforms[n] = {}, r.type) {
				case "t":
					this.uniforms[n].value = t[r.value] || null;
					break;
				case "c":
					this.uniforms[n].value = new J().setHex(r.value);
					break;
				case "v2":
					this.uniforms[n].value = new W().fromArray(r.value);
					break;
				case "v3":
					this.uniforms[n].value = new G().fromArray(r.value);
					break;
				case "v4":
					this.uniforms[n].value = new Gt().fromArray(r.value);
					break;
				case "m3":
					this.uniforms[n].value = new K().fromArray(r.value);
					break;
				case "m4":
					this.uniforms[n].value = new Xt().fromArray(r.value);
					break;
				default: this.uniforms[n].value = r.value;
			}
		}
		if (e.defines !== void 0 && (this.defines = e.defines), e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion), e.extensions !== void 0) for (let t in e.extensions) this.extensions[t] = e.extensions[t];
		return e.lights !== void 0 && (this.lights = e.lights), e.clipping !== void 0 && (this.clipping = e.clipping), this;
	}
}, No = class extends Mo {
	constructor(e) {
		super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
	}
}, Po = class extends Lr {
	constructor(e) {
		super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new J(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new J(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new W(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new sn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
	}
}, Fo = class extends Lr {
	constructor(e) {
		super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = B, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
	}
}, Io = class extends Lr {
	constructor(e) {
		super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
	}
};
function Lo(e, t) {
	return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
function Ro(e) {
	return e !== void 0 && e.inTangents !== void 0 && e.outTangents !== void 0;
}
var zo = class {
	constructor(e, t, n, r) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r === void 0 ? new t.constructor(n) : r, this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
	}
	evaluate(e) {
		let t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
		validate_interval: {
			seek: {
				let a;
				linear_scan: {
					forward_scan: if (!(e < r)) {
						for (let a = n + 2;;) {
							if (r === void 0) {
								if (e < i) break forward_scan;
								return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
							}
							if (n === a) break;
							if (i = r, r = t[++n], e < r) break seek;
						}
						a = t.length;
						break linear_scan;
					}
					if (!(e >= i)) {
						let o = t[1];
						e < o && (n = 2, i = o);
						for (let a = n - 2;;) {
							if (i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
							if (n === a) break;
							if (r = i, i = t[--n - 1], e >= i) break seek;
						}
						a = n, n = 0;
						break linear_scan;
					}
					break validate_interval;
				}
				for (; n < a;) {
					let r = n + a >>> 1;
					e < t[r] ? a = r : n = r + 1;
				}
				if (r = t[n], i = t[n - 1], i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
				if (r === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
			}
			this._cachedIndex = n, this.intervalChanged_(n, i, r);
		}
		return this.interpolate_(n, i, e, r);
	}
	getSettings_() {
		return this.settings || this.DefaultSettings_;
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r;
		for (let e = 0; e !== r; ++e) t[e] = n[i + e];
		return t;
	}
	interpolate_() {
		throw Error("THREE.Interpolant: Call to abstract method.");
	}
	intervalChanged_() {}
}, Bo = class extends zo {
	constructor(e, t, n, r) {
		super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
			endingStart: R,
			endingEnd: R
		};
	}
	intervalChanged_(e, t, n) {
		let r = this.parameterPositions, i = e - 2, a = e + 1, o = r[i], s = r[a];
		if (o === void 0) switch (this.getSettings_().endingStart) {
			case Ie:
				i = e, o = 2 * t - n;
				break;
			case z:
				i = r.length - 2, o = t + r[i] - r[i + 1];
				break;
			default: i = e, o = n;
		}
		if (s === void 0) switch (this.getSettings_().endingEnd) {
			case Ie:
				a = e, s = 2 * n - t;
				break;
			case z:
				a = 1, s = n + r[1] - r[0];
				break;
			default: a = e - 1, s = t;
		}
		let c = (n - t) * .5, l = this.valueSize;
		this._weightPrev = c / (t - o), this._weightNext = c / (s - n), this._offsetPrev = i * l, this._offsetNext = a * l;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, p = (n - t) / (r - t), m = p * p, h = m * p, g = -d * h + 2 * d * m - d * p, _ = (1 + d) * h + (-1.5 - 2 * d) * m + (-.5 + d) * p + 1, v = (-1 - f) * h + (1.5 + f) * m + .5 * p, y = f * h - f * m;
		for (let e = 0; e !== o; ++e) i[e] = g * a[l + e] + _ * a[c + e] + v * a[s + e] + y * a[u + e];
		return i;
	}
}, Vo = class extends zo {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = (n - t) / (r - t), u = 1 - l;
		for (let e = 0; e !== o; ++e) i[e] = a[c + e] * u + a[s + e] * l;
		return i;
	}
}, Ho = class extends zo {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e) {
		return this.copySampleValue_(e - 1);
	}
}, Uo = class extends zo {
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, l = this.inTangents, u = this.outTangents;
		if (!l || !u) {
			let e = (n - t) / (r - t), l = 1 - e;
			for (let t = 0; t !== o; ++t) i[t] = a[c + t] * l + a[s + t] * e;
			return i;
		}
		let d = o * 2, f = e - 1;
		for (let p = 0; p !== o; ++p) {
			let o = a[c + p], m = a[s + p], h = f * d + p * 2, g = u[h], _ = u[h + 1], v = e * d + p * 2, y = l[v], b = l[v + 1], x = Ko(n, t, g, y, r);
			i[p] = Wo(x, o, _, b, m);
		}
		return i;
	}
};
function Wo(e, t, n, r, i) {
	let a = 1 - e;
	return a * a * a * t + 3 * a * a * e * n + 3 * a * e * e * r + e * e * e * i;
}
function Go(e, t, n, r, i) {
	let a = 1 - e;
	return 3 * a * a * (n - t) + 6 * a * e * (r - n) + 3 * e * e * (i - r);
}
function Ko(e, t, n, r, i) {
	let a = (e - t) / (i - t);
	for (let o = 0; o < 8; o++) {
		let o = Wo(a, t, n, r, i) - e;
		if (Math.abs(o) < 1e-10) break;
		let s = Go(a, t, n, r, i);
		if (Math.abs(s) < 1e-10) break;
		a = Math.max(0, Math.min(1, a - o / s));
	}
	return a;
}
var qo = class {
	constructor(e, t, n, r) {
		if (e === void 0) throw Error("THREE.KeyframeTrack: track name is undefined");
		if (t === void 0 || t.length === 0) throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
		this.name = e, this.times = Lo(t, this.TimeBufferType), this.values = Lo(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
	}
	static toJSON(e) {
		let t = e.constructor, n;
		if (t.toJSON !== this.toJSON) n = t.toJSON(e);
		else {
			n = {
				name: e.name,
				times: Lo(e.times, Array),
				values: Lo(e.values, Array)
			};
			let t = e.getInterpolation();
			t !== e.DefaultInterpolation && (n.interpolation = t), Ro(e.settings) && (n.settings = {
				inTangents: Lo(e.settings.inTangents, Array),
				outTangents: Lo(e.settings.outTangents, Array)
			});
		}
		return n.type = e.ValueTypeName, n;
	}
	InterpolantFactoryMethodDiscrete(e) {
		return new Ho(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodLinear(e) {
		return new Vo(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodSmooth(e) {
		return new Bo(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodBezier(e) {
		let t = new Uo(this.times, this.values, this.getValueSize(), e);
		return this.settings && (t.inTangents = this.settings.inTangents, t.outTangents = this.settings.outTangents), t;
	}
	setInterpolation(e) {
		let t;
		switch (e) {
			case L:
				t = this.InterpolantFactoryMethodDiscrete;
				break;
			case Ne:
				t = this.InterpolantFactoryMethodLinear;
				break;
			case Pe:
				t = this.InterpolantFactoryMethodSmooth;
				break;
			case Fe: t = this.InterpolantFactoryMethodBezier;
		}
		if (t === void 0) {
			let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
			if (this.createInterpolant === void 0) {
				if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
				else throw Error(t);
			}
			return V("KeyframeTrack:", t), this;
		}
		return this.createInterpolant = t, this;
	}
	getInterpolation() {
		switch (this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete: return L;
			case this.InterpolantFactoryMethodLinear: return Ne;
			case this.InterpolantFactoryMethodSmooth: return Pe;
			case this.InterpolantFactoryMethodBezier: return Fe;
		}
	}
	getValueSize() {
		return this.values.length / this.times.length;
	}
	shift(e) {
		if (e !== 0) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
			Ro(this.settings) && (Jo(this.settings.inTangents, e), Jo(this.settings.outTangents, e));
		}
		return this;
	}
	scale(e) {
		if (e !== 1) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
			Ro(this.settings) && (Yo(this.settings.inTangents, e), Yo(this.settings.outTangents, e));
		}
		return this;
	}
	trim(e, t) {
		let n = this.times, r = n.length, i = 0, a = r - 1;
		for (; i !== r && n[i] < e;) ++i;
		for (; a !== -1 && n[a] > t;) --a;
		if (++a, i !== 0 || a !== r) {
			i >= a && (a = Math.max(a, 1), i = a - 1);
			let e = this.getValueSize();
			this.times = n.slice(i, a), this.values = this.values.slice(i * e, a * e);
		}
		return this;
	}
	validate() {
		let e = !0, t = this.getValueSize();
		t - Math.floor(t) !== 0 && (H("KeyframeTrack: Invalid value size in track.", this), e = !1);
		let n = this.times, r = this.values, i = n.length;
		i === 0 && (H("KeyframeTrack: Track is empty.", this), e = !1);
		let a = null;
		for (let t = 0; t !== i; t++) {
			let r = n[t];
			if (typeof r == "number" && isNaN(r)) {
				H("KeyframeTrack: Time is not a valid number.", this, t, r), e = !1;
				break;
			}
			if (a !== null && a > r) {
				H("KeyframeTrack: Out of order keys.", this, t, r, a), e = !1;
				break;
			}
			a = r;
		}
		if (r !== void 0 && Ge(r)) for (let t = 0, n = r.length; t !== n; ++t) {
			let n = r[t];
			if (isNaN(n)) {
				H("KeyframeTrack: Value is not a valid number.", this, t, n), e = !1;
				break;
			}
		}
		return e;
	}
	optimize() {
		let e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === Pe, i = e.length - 1, a = 1;
		for (let o = 1; o < i; ++o) {
			let i = !1, s = e[o];
			if (s !== e[o + 1] && (o !== 1 || s !== e[0])) {
				if (r) i = !0;
				else {
					let e = o * n, r = e - n, a = e + n;
					for (let o = 0; o !== n; ++o) {
						let n = t[e + o];
						if (n !== t[r + o] || n !== t[a + o]) {
							i = !0;
							break;
						}
					}
				}
			}
			if (i) {
				if (o !== a) {
					e[a] = e[o];
					let r = o * n, i = a * n;
					for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
				}
				++a;
			}
		}
		if (i > 0) {
			e[a] = e[i];
			for (let e = i * n, r = a * n, o = 0; o !== n; ++o) t[r + o] = t[e + o];
			++a;
		}
		return a === e.length ? (this.times = e, this.values = t) : (this.times = e.slice(0, a), this.values = t.slice(0, a * n)), this;
	}
	clone() {
		let e = this.times.slice(), t = this.values.slice(), n = this.constructor, r = new n(this.name, e, t);
		return r.createInterpolant = this.createInterpolant, Ro(this.settings) && (r.settings = {
			inTangents: this.settings.inTangents.slice(),
			outTangents: this.settings.outTangents.slice()
		}), r;
	}
};
function Jo(e, t) {
	for (let n = 0, r = e.length; n !== r; n += 2) e[n] += t;
}
function Yo(e, t) {
	for (let n = 0, r = e.length; n !== r; n += 2) e[n] *= t;
}
qo.prototype.ValueTypeName = "", qo.prototype.TimeBufferType = Float32Array, qo.prototype.ValueBufferType = Float32Array, qo.prototype.DefaultInterpolation = Ne;
var Xo = class extends qo {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
Xo.prototype.ValueTypeName = "bool", Xo.prototype.ValueBufferType = Array, Xo.prototype.DefaultInterpolation = L, Xo.prototype.InterpolantFactoryMethodLinear = void 0, Xo.prototype.InterpolantFactoryMethodSmooth = void 0;
var Zo = class extends qo {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Zo.prototype.ValueTypeName = "color";
var Qo = class extends qo {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
Qo.prototype.ValueTypeName = "number";
var $o = class extends zo {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - t) / (r - t), c = e * o;
		for (let e = c + o; c !== e; c += 4) Ot.slerpFlat(i, 0, a, c - o, a, c, s);
		return i;
	}
}, es = class extends qo {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	InterpolantFactoryMethodLinear(e) {
		return new $o(this.times, this.values, this.getValueSize(), e);
	}
};
es.prototype.ValueTypeName = "quaternion", es.prototype.InterpolantFactoryMethodSmooth = void 0;
var ts = class extends qo {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
ts.prototype.ValueTypeName = "string", ts.prototype.ValueBufferType = Array, ts.prototype.DefaultInterpolation = L, ts.prototype.InterpolantFactoryMethodLinear = void 0, ts.prototype.InterpolantFactoryMethodSmooth = void 0;
var ns = class extends qo {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
ns.prototype.ValueTypeName = "vector";
var rs = class extends wn {
	static registerNode(e) {
		this.prototype._lightNode = e;
	}
	constructor(e, t = 1) {
		super(), this.isLight = !0, this.type = "Light", this.color = new J(e), this.intensity = t;
	}
	copy(e, t) {
		return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
	}
}, is = class extends rs {
	constructor(e, t, n) {
		super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(wn.DEFAULT_UP), this.updateMatrix(), this.groundColor = new J(t);
	}
	copy(e, t) {
		return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.groundColor = this.groundColor.getHex(), t;
	}
}, as = /*@__PURE__*/ new Xt(), os = /*@__PURE__*/ new G(), ss = /*@__PURE__*/ new G(), cs = class {
	constructor(e) {
		this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new W(512, 512), this.mapType = d, this.map = null, this.mapPass = null, this.matrix = new Xt(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new wi(), this._frameExtents = new W(1, 1), this._viewportCount = 1, this._viewports = [new Gt(0, 0, 1, 1)];
	}
	getViewportCount() {
		return this._viewportCount;
	}
	getCamera() {
		return this.camera;
	}
	getFrustum() {
		return this._frustum;
	}
	updateMatrices(e) {
		let t = this.camera;
		os.setFromMatrixPosition(e.matrixWorld), t.position.copy(os), ss.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ss), t.updateMatrixWorld(), this._updateMatrix(t, this.matrix, this._frustum);
	}
	_updateMatrix(e, t, n, r) {
		as.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), n.setFromProjectionMatrix(as, e.coordinateSystem, e.reversedDepth);
		let i = this._frameExtents, a = r ? r.z / i.x : 1, o = r ? r.w / i.y : 1, s = r ? r.x / i.x : 0, c = r ? r.y / i.y : 0;
		e.coordinateSystem === 2001 || e.reversedDepth ? t.set(.5 * a, 0, 0, .5 * a + s, 0, .5 * o, 0, .5 * o + c, 0, 0, 1, 0, 0, 0, 0, 1) : t.set(.5 * a, 0, 0, .5 * a + s, 0, .5 * o, 0, .5 * o + c, 0, 0, .5, .5, 0, 0, 0, 1), t.multiply(as);
	}
	getViewport(e) {
		return this._viewports[e];
	}
	getFrameExtents() {
		return this._frameExtents;
	}
	dispose() {
		this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
	}
	copy(e) {
		return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.mapType = e.mapType, this.biasNode = e.biasNode, this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		let e = {};
		return e.intensity = this.intensity, e.bias = this.bias, e.normalBias = this.normalBias, e.radius = this.radius, e.blurSamples = this.blurSamples, e.mapSize = this.mapSize.toArray(), e.mapType = this.mapType, e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
	}
}, ls = /*@__PURE__*/ new G(), us = /*@__PURE__*/ new Ot(), ds = /*@__PURE__*/ new G(), fs = class extends wn {
	constructor() {
		super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Xt(), this.projectionMatrix = new Xt(), this.projectionMatrixInverse = new Xt(), this.coordinateSystem = Ue, this._reversedDepth = !1;
	}
	get reversedDepth() {
		return this._reversedDepth;
	}
	copy(e, t) {
		return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
	}
	getWorldDirection(e) {
		return super.getWorldDirection(e).negate();
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.matrixWorld.decompose(ls, us, ds), ds.x === 1 && ds.y === 1 && ds.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(ls, us, ds.set(1, 1, 1)).invert();
	}
	updateWorldMatrix(e, t, n = !1) {
		super.updateWorldMatrix(e, t, n), this.matrixWorld.decompose(ls, us, ds), ds.x === 1 && ds.y === 1 && ds.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(ls, us, ds.set(1, 1, 1)).invert();
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, ps = /*@__PURE__*/ new G(), ms = /*@__PURE__*/ new W(), hs = /*@__PURE__*/ new W(), gs = class extends fs {
	constructor(e = 50, t = 1, n = .1, r = 2e3) {
		super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
	}
	setFocalLength(e) {
		let t = .5 * this.getFilmHeight() / e;
		this.fov = it * 2 * Math.atan(t), this.updateProjectionMatrix();
	}
	getFocalLength() {
		let e = Math.tan(rt * .5 * this.fov);
		return .5 * this.getFilmHeight() / e;
	}
	getEffectiveFOV() {
		return it * 2 * Math.atan(Math.tan(rt * .5 * this.fov) / this.zoom);
	}
	getFilmWidth() {
		return this.filmGauge * Math.min(this.aspect, 1);
	}
	getFilmHeight() {
		return this.filmGauge / Math.max(this.aspect, 1);
	}
	getViewBounds(e, t, n) {
		ps.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(ps.x, ps.y).multiplyScalar(-e / ps.z), ps.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(ps.x, ps.y).multiplyScalar(-e / ps.z);
	}
	getViewSize(e, t) {
		return this.getViewBounds(e, ms, hs), t.subVectors(hs, ms);
	}
	setViewOffset(e, t, n, r, i, a) {
		this.aspect = e / t, this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = this.near, t = e * Math.tan(rt * .5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -.5 * r, a = this.view;
		if (this.view !== null && this.view.enabled) {
			let e = a.fullWidth, o = a.fullHeight;
			i += a.offsetX * r / e, t -= a.offsetY * n / o, r *= a.width / e, n *= a.height / o;
		}
		let o = this.filmOffset;
		o !== 0 && (i += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
	}
}, _s = class extends fs {
	constructor(e = -1, t = 1, n = 1, r = -1, i = .1, a = 2e3) {
		super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = i, this.far = a, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
	}
	setViewOffset(e, t, n, r, i, a) {
		this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, a = n + e, o = r + t, s = r - t;
		if (this.view !== null && this.view.enabled) {
			let e = (this.right - this.left) / this.view.fullWidth / this.zoom, t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
			i += e * this.view.offsetX, a = i + e * this.view.width, o -= t * this.view.offsetY, s = o - t * this.view.height;
		}
		this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
	}
}, vs = class extends cs {
	constructor() {
		super(new _s(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0;
	}
}, ys = class extends rs {
	constructor(e, t) {
		super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(wn.DEFAULT_UP), this.updateMatrix(), this.target = new wn(), this.shadow = new vs();
	}
	dispose() {
		super.dispose(), this.shadow.dispose();
	}
	copy(e) {
		return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
	}
}, bs = class extends Dr {
	constructor() {
		super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = Infinity;
	}
	copy(e) {
		return super.copy(e), this.instanceCount = e.instanceCount, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e;
	}
}, xs = -90, Ss = 1, Cs = class extends wn {
	constructor(e, t, n) {
		super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
		let r = new gs(xs, Ss, e, t);
		r.layers = this.layers, this.add(r);
		let i = new gs(xs, Ss, e, t);
		i.layers = this.layers, this.add(i);
		let a = new gs(xs, Ss, e, t);
		a.layers = this.layers, this.add(a);
		let o = new gs(xs, Ss, e, t);
		o.layers = this.layers, this.add(o);
		let s = new gs(xs, Ss, e, t);
		s.layers = this.layers, this.add(s);
		let c = new gs(xs, Ss, e, t);
		c.layers = this.layers, this.add(c);
	}
	updateCoordinateSystem() {
		let e = this.coordinateSystem, t = this.children.concat(), [n, r, i, a, o, s] = t;
		for (let e of t) this.remove(e);
		if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), i.up.set(0, 0, -1), i.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), s.up.set(0, 1, 0), s.lookAt(0, 0, -1);
		else if (e === 2001) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), i.up.set(0, 0, 1), i.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), s.up.set(0, -1, 0), s.lookAt(0, 0, -1);
		else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
		for (let e of t) this.add(e), e.updateMatrixWorld();
	}
	update(e, t) {
		this.parent === null && this.updateMatrixWorld();
		let { renderTarget: n, activeMipmapLevel: r } = this;
		this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
		let [i, a, o, s, c, l] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), p = e.xr.enabled;
		e.xr.enabled = !1;
		let m = n.texture.mipmapsAutoUpdate;
		n.texture.mipmapsAutoUpdate = !1;
		let h = !1;
		h = e.isWebGLRenderer === !0 ? e.state.buffers.depth.getReversed() : e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, i), e.setRenderTarget(n, 1, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 3, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 4, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, c), n.texture.mipmapsAutoUpdate = m, e.setRenderTarget(n, 5, r), h && e.autoClear === !1 && e.clearDepth(), e.render(t, l), e.setRenderTarget(u, d, f), e.xr.enabled = p, n.texture.needsPMREMUpdate = !0;
	}
}, ws = class extends gs {
	constructor(e = []) {
		super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e, this.perCameraFrustumCulled = !1;
	}
}, Ts = class {
	constructor() {
		this._previousTime = 0, this._currentTime = 0, this._startTime = performance.now(), this._delta = 0, this._elapsed = 0, this._timescale = 1, this._document = null, this._pageVisibilityHandler = null;
	}
	connect(e) {
		this._document = e, e.hidden !== void 0 && (this._pageVisibilityHandler = Es.bind(this), e.addEventListener("visibilitychange", this._pageVisibilityHandler, !1));
	}
	disconnect() {
		this._pageVisibilityHandler !== null && (this._document.removeEventListener("visibilitychange", this._pageVisibilityHandler), this._pageVisibilityHandler = null), this._document = null;
	}
	getDelta() {
		return this._delta / 1e3;
	}
	getElapsed() {
		return this._elapsed / 1e3;
	}
	getTimescale() {
		return this._timescale;
	}
	setTimescale(e) {
		return this._timescale = e, this;
	}
	reset() {
		return this._currentTime = performance.now() - this._startTime, this;
	}
	dispose() {
		this.disconnect();
	}
	update(e) {
		return this._pageVisibilityHandler !== null && this._document.hidden === !0 ? this._delta = 0 : (this._previousTime = this._currentTime, this._currentTime = (e === void 0 ? performance.now() : e) - this._startTime, this._delta = (this._currentTime - this._previousTime) * this._timescale, this._elapsed += this._delta), this;
	}
};
function Es() {
	this._document.hidden === !1 && this.reset();
}
var Ds = "\\[\\]\\.:\\/", Os = /* @__PURE__ */ RegExp("[\\[\\]\\.:\\/]", "g"), ks = "[^\\[\\]\\.:\\/]", As = "[^" + Ds.replace("\\.", "") + "]", js = /*@__PURE__*/ "((?:WC+[\\/:])*)".replace("WC", ks), Ms = /*@__PURE__*/ "(WCOD+)?".replace("WCOD", As), Ns = /*@__PURE__*/ "(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC", ks), Ps = /*@__PURE__*/ "\\.(WC+)(?:\\[(.+)\\])?".replace("WC", ks), Fs = RegExp("^" + js + Ms + Ns + Ps + "$"), Is = [
	"material",
	"materials",
	"bones",
	"map"
], Ls = class {
	constructor(e, t, n) {
		let r = n || Rs.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, r);
	}
	getValue(e, t) {
		this.bind();
		let n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
		r !== void 0 && r.getValue(e, t);
	}
	setValue(e, t) {
		let n = this._bindings;
		for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t);
	}
	bind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
	}
	unbind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
	}
}, Rs = class e {
	constructor(t, n, r) {
		this.path = n, this.parsedPath = r || e.parseTrackName(n), this.node = e.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
	static create(t, n, r) {
		return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r);
	}
	static sanitizeNodeName(e) {
		return e.replace(/\s/g, "_").replace(Os, "");
	}
	static parseTrackName(e) {
		let t = Fs.exec(e);
		if (t === null) throw Error("THREE.PropertyBinding: Cannot parse trackName: " + e);
		let n = {
			nodeName: t[2],
			objectName: t[3],
			objectIndex: t[4],
			propertyName: t[5],
			propertyIndex: t[6]
		}, r = n.nodeName && n.nodeName.lastIndexOf(".");
		if (r !== void 0 && r !== -1) {
			let e = n.nodeName.substring(r + 1);
			Is.indexOf(e) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = e);
		}
		if (n.propertyName === null || n.propertyName.length === 0) throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + e);
		return n;
	}
	static findNode(e, t) {
		if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
		if (e.skeleton) {
			let n = e.skeleton.getBoneByName(t);
			if (n !== void 0) return n;
		}
		if (e.children) {
			let n = function(e) {
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.name === t || i.uuid === t) return i;
					let a = n(i.children);
					if (a) return a;
				}
				return null;
			}, r = n(e.children);
			if (r) return r;
		}
		return null;
	}
	_getValue_unavailable() {}
	_setValue_unavailable() {}
	_getValue_direct(e, t) {
		e[t] = this.targetObject[this.propertyName];
	}
	_getValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
	}
	_getValue_arrayElement(e, t) {
		e[t] = this.resolvedProperty[this.propertyIndex];
	}
	_getValue_toArray(e, t) {
		this.resolvedProperty.toArray(e, t);
	}
	_setValue_direct(e, t) {
		this.targetObject[this.propertyName] = e[t];
	}
	_setValue_direct_setNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
	}
	_setValue_array_setNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.needsUpdate = !0;
	}
	_setValue_array_setMatrixWorldNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_arrayElement(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t];
	}
	_setValue_arrayElement_setNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_fromArray(e, t) {
		this.resolvedProperty.fromArray(e, t);
	}
	_setValue_fromArray_setNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
	}
	_setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_getValue_unbound(e, t) {
		this.bind(), this.getValue(e, t);
	}
	_setValue_unbound(e, t) {
		this.bind(), this.setValue(e, t);
	}
	bind() {
		let t = this.node, n = this.parsedPath, r = n.objectName, i = n.propertyName, a = n.propertyIndex;
		if (t || (t = e.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
			V("PropertyBinding: No target node found for track: " + this.path + ".");
			return;
		}
		if (r) {
			let e = n.objectIndex;
			switch (r) {
				case "materials":
					if (!t.material) {
						H("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.materials) {
						H("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						return;
					}
					t = t.material.materials;
					break;
				case "bones":
					if (!t.skeleton) {
						H("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						return;
					}
					t = t.skeleton.bones;
					for (let n = 0; n < t.length; n++) if (t[n].name === e) {
						e = n;
						break;
					}
					break;
				case "map":
					if ("map" in t) {
						t = t.map;
						break;
					}
					if (!t.material) {
						H("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.map) {
						H("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
						return;
					}
					t = t.material.map;
					break;
				default:
					if (t[r] === void 0) {
						H("PropertyBinding: Can not bind to objectName of node undefined.", this);
						return;
					}
					t = t[r];
			}
			if (e !== void 0) {
				if (t[e] === void 0) {
					H("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
					return;
				}
				t = t[e];
			}
		}
		let o = t[i];
		if (o === void 0) {
			let e = n.nodeName;
			H("PropertyBinding: Trying to update property for track: " + e + "." + i + " but it wasn't found.", t);
			return;
		}
		let s = this.Versioning.None;
		this.targetObject = t, t.isMaterial === !0 ? s = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (s = this.Versioning.MatrixWorldNeedsUpdate);
		let c = this.BindingType.Direct;
		if (a !== void 0) {
			if (i === "morphTargetInfluences") {
				if (!t.geometry) {
					H("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					return;
				}
				if (!t.geometry.morphAttributes) {
					H("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
					return;
				}
				t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a]);
			}
			c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = a;
		} else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
		this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][s];
	}
	unbind() {
		this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
};
Rs.Composite = Ls, Rs.prototype.BindingType = {
	Direct: 0,
	EntireArray: 1,
	ArrayElement: 2,
	HasFromToArray: 3
}, Rs.prototype.Versioning = {
	None: 0,
	NeedsUpdate: 1,
	MatrixWorldNeedsUpdate: 2
}, Rs.prototype.GetterByBindingType = [
	Rs.prototype._getValue_direct,
	Rs.prototype._getValue_array,
	Rs.prototype._getValue_arrayElement,
	Rs.prototype._getValue_toArray
], Rs.prototype.SetterByBindingTypeAndVersioning = [
	[
		Rs.prototype._setValue_direct,
		Rs.prototype._setValue_direct_setNeedsUpdate,
		Rs.prototype._setValue_direct_setMatrixWorldNeedsUpdate
	],
	[
		Rs.prototype._setValue_array,
		Rs.prototype._setValue_array_setNeedsUpdate,
		Rs.prototype._setValue_array_setMatrixWorldNeedsUpdate
	],
	[
		Rs.prototype._setValue_arrayElement,
		Rs.prototype._setValue_arrayElement_setNeedsUpdate,
		Rs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
	],
	[
		Rs.prototype._setValue_fromArray,
		Rs.prototype._setValue_fromArray_setNeedsUpdate,
		Rs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
	]
];
var zs = class extends Or {
	constructor(e, t, n = 1) {
		super(e, t), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n;
	}
	copy(e) {
		return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
	}
	clone(e) {
		let t = super.clone(e);
		return t.meshPerAttribute = this.meshPerAttribute, t;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t;
	}
}, Bs = class {
	constructor(e = 1, t = 0, n = 0) {
		this.radius = e, this.phi = t, this.theta = n;
	}
	set(e, t, n) {
		return this.radius = e, this.phi = t, this.theta = n, this;
	}
	copy(e) {
		return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
	}
	makeSafe() {
		let e = 1e-6;
		return this.phi = U(this.phi, e, Math.PI - e), this;
	}
	setFromVector3(e) {
		return this.setFromCartesianCoords(e.x, e.y, e.z);
	}
	setFromCartesianCoords(e, t, n) {
		return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(U(t / this.radius, -1, 1))), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
};
(class {
	static {
		this.prototype.isMatrix2 = !0;
	}
	constructor(e, t, n, r) {
		this.elements = [
			1,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r);
	}
	identity() {
		return this.set(1, 0, 0, 1), this;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
		return this;
	}
	set(e, t, n, r) {
		let i = this.elements;
		return i[0] = e, i[2] = t, i[1] = n, i[3] = r, this;
	}
});
var Vs = /*@__PURE__*/ new G(), Hs = /*@__PURE__*/ new G(), Us = /*@__PURE__*/ new G(), Ws = /*@__PURE__*/ new G(), Gs = /*@__PURE__*/ new G(), Ks = /*@__PURE__*/ new G(), qs = /*@__PURE__*/ new G(), Js = class {
	constructor(e = new G(), t = new G()) {
		this.start = e, this.end = t;
	}
	set(e, t) {
		return this.start.copy(e), this.end.copy(t), this;
	}
	copy(e) {
		return this.start.copy(e.start), this.end.copy(e.end), this;
	}
	getCenter(e) {
		return e.addVectors(this.start, this.end).multiplyScalar(.5);
	}
	delta(e) {
		return e.subVectors(this.end, this.start);
	}
	distanceSq() {
		return this.start.distanceToSquared(this.end);
	}
	distance() {
		return this.start.distanceTo(this.end);
	}
	at(e, t) {
		return this.delta(t).multiplyScalar(e).add(this.start);
	}
	closestPointToPointParameter(e, t) {
		Vs.subVectors(e, this.start), Hs.subVectors(this.end, this.start);
		let n = Hs.dot(Hs);
		if (n === 0) return 0;
		let r = Hs.dot(Vs) / n;
		return t && (r = U(r, 0, 1)), r;
	}
	closestPointToPoint(e, t, n) {
		let r = this.closestPointToPointParameter(e, t);
		return this.delta(n).multiplyScalar(r).add(this.start);
	}
	distanceSqToLine3(e, t = Ks, n = qs) {
		let r = 1e-8 * 1e-8, i, a, o = this.start, s = e.start, c = this.end, l = e.end;
		Us.subVectors(c, o), Ws.subVectors(l, s), Gs.subVectors(o, s);
		let u = Us.dot(Us), d = Ws.dot(Ws), f = Ws.dot(Gs);
		if (u <= r && d <= r) return t.copy(o), n.copy(s), t.distanceToSquared(n);
		if (u <= r) i = 0, a = f / d, a = U(a, 0, 1);
		else {
			let e = Us.dot(Gs);
			if (d <= r) a = 0, i = U(-e / u, 0, 1);
			else {
				let t = Us.dot(Ws), n = u * d - t * t;
				i = n === 0 ? 0 : U((t * f - e * d) / n, 0, 1), a = (t * i + f) / d, a < 0 ? (a = 0, i = U(-e / u, 0, 1)) : a > 1 && (a = 1, i = U((t - e) / u, 0, 1));
			}
		}
		return t.copy(o).addScaledVector(Us, i), n.copy(s).addScaledVector(Ws, a), t.distanceToSquared(n);
	}
	applyMatrix4(e) {
		return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
	}
	equals(e) {
		return e.start.equals(this.start) && e.end.equals(this.end);
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Ys = class extends zi {
	constructor(e = 10, t = 10, n = 4473924, r = 8947848) {
		n = new J(n), r = new J(r);
		let i = t / 2, a = e / t, o = e / 2, s = [], c = [];
		for (let e = 0, l = 0, u = -o; e <= t; e++, u += a) {
			s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
			let t = e === i ? n : r;
			t.toArray(c, l), l += 3, t.toArray(c, l), l += 3, t.toArray(c, l), l += 3, t.toArray(c, l), l += 3;
		}
		let l = new Dr();
		l.setAttribute("position", new Y(s, 3)), l.setAttribute("color", new Y(c, 3));
		let u = new Di({
			vertexColors: !0,
			toneMapped: !1
		});
		super(l, u), this.type = "GridHelper";
	}
	dispose() {
		super.dispose(), this.geometry.dispose(), this.material.dispose();
	}
}, Xs = class extends et {
	constructor(e, t = null) {
		super(), this.object = e, this.domElement = t, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = {
			LEFT: null,
			MIDDLE: null,
			RIGHT: null
		}, this.touches = {
			ONE: null,
			TWO: null
		};
	}
	connect(e) {
		this.domElement !== null && this.disconnect(), this.domElement = e;
	}
	disconnect() {}
	dispose() {}
	update() {}
};
function Zs(e, t, n, r) {
	let i = Qs(r);
	switch (n) {
		case w: return e * t;
		case k: return e * t / i.components * i.byteLength;
		case A: return e * t / i.components * i.byteLength;
		case j: return e * t * 2 / i.components * i.byteLength;
		case ee: return e * t * 2 / i.components * i.byteLength;
		case T: return e * t * 3 / i.components * i.byteLength;
		case E: return e * t * 4 / i.components * i.byteLength;
		case te: return e * t * 4 / i.components * i.byteLength;
		case M:
		case N: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case P:
		case ne: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case re:
		case ae: return Math.max(e, 16) * Math.max(t, 8) / 4;
		case F:
		case ie: return Math.max(e, 8) * Math.max(t, 8) / 2;
		case oe:
		case se:
		case ce:
		case le: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case I:
		case ue:
		case de: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case fe: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case pe: return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
		case me: return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
		case he: return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
		case ge: return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
		case _e: return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
		case ve: return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
		case ye: return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
		case be: return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
		case xe: return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
		case Se: return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
		case Ce: return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
		case we: return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
		case Te: return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
		case Ee:
		case De:
		case Oe: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
		case ke:
		case Ae: return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
		case je:
		case Me: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
	}
	throw Error(`Unable to determine texture byte length for ${n} format.`);
}
function Qs(e) {
	switch (e) {
		case d:
		case f: return {
			byteLength: 1,
			components: 1
		};
		case m:
		case p:
		case v: return {
			byteLength: 2,
			components: 1
		};
		case y:
		case b: return {
			byteLength: 2,
			components: 4
		};
		case g:
		case h:
		case _: return {
			byteLength: 4,
			components: 1
		};
		case S:
		case C: return {
			byteLength: 4,
			components: 3
		};
	}
	throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "187" } })), typeof window < "u" && (window.__THREE__ ? V("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "187");
// node_modules/three/build/three.module.js
function $s() {
	let e = null, t = !1, n = null, r = null;
	function i(t, a) {
		r = e.requestAnimationFrame(i), n(t, a);
	}
	return {
		start: function() {
			t !== !0 && n !== null && e !== null && (r = e.requestAnimationFrame(i), t = !0);
		},
		stop: function() {
			e !== null && e.cancelAnimationFrame(r), t = !1;
		},
		setAnimationLoop: function(e) {
			n = e;
		},
		setContext: function(t) {
			e = t;
		}
	};
}
function ec(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(t, n) {
		let r = t.array, i = t.usage, a = r.byteLength, o = e.createBuffer();
		e.bindBuffer(n, o), e.bufferData(n, r, i), t.onUploadCallback();
		let s;
		if (r instanceof Float32Array) s = e.FLOAT;
		else if (typeof Float16Array < "u" && r instanceof Float16Array) s = e.HALF_FLOAT;
		else if (r instanceof Uint16Array) s = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
		else if (r instanceof Int16Array) s = e.SHORT;
		else if (r instanceof Uint32Array) s = e.UNSIGNED_INT;
		else if (r instanceof Int32Array) s = e.INT;
		else if (r instanceof Int8Array) s = e.BYTE;
		else if (r instanceof Uint8Array) s = e.UNSIGNED_BYTE;
		else if (r instanceof Uint8ClampedArray) s = e.UNSIGNED_BYTE;
		else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
		return {
			buffer: o,
			type: s,
			bytesPerElement: r.BYTES_PER_ELEMENT,
			version: t.version,
			size: a
		};
	}
	function r(t, n, r) {
		let i = n.array, a = n.updateRanges;
		if (e.bindBuffer(r, t), a.length === 0) e.bufferSubData(r, 0, i);
		else {
			a.sort((e, t) => e.start - t.start);
			let t = 0;
			for (let e = 1; e < a.length; e++) {
				let n = a[t], r = a[e];
				r.start <= n.start + n.count + 1 ? n.count = Math.max(n.count, r.start + r.count - n.start) : (++t, a[t] = r);
			}
			a.length = t + 1;
			for (let t = 0, n = a.length; t < n; t++) {
				let n = a[t];
				e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count);
			}
			n.clearUpdateRanges();
		}
		n.onUploadCallback();
	}
	function i(e) {
		return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
	}
	function a(n) {
		n.isInterleavedBufferAttribute && (n = n.data);
		let r = t.get(n);
		r && (e.deleteBuffer(r.buffer), t.delete(n));
	}
	function o(e, i) {
		if (e.isInterleavedBufferAttribute && (e = e.data), e.isGLBufferAttribute) {
			let n = t.get(e);
			(!n || n.version < e.version) && t.set(e, {
				buffer: e.buffer,
				type: e.type,
				bytesPerElement: e.elementSize,
				version: e.version
			});
			return;
		}
		let a = t.get(e);
		if (a === void 0) t.set(e, n(e, i));
		else if (a.version < e.version) {
			if (a.size !== e.array.byteLength) throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
			r(a.buffer, e, i), a.version = e.version;
		}
	}
	return {
		get: i,
		remove: a,
		update: o
	};
}
var X = {
	alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
	alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
	alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
	alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
	alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
	aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
	aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
	batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec4 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );\n	}\n#endif",
	batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
	begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
	beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
	bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
	iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
	bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
	clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
	clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
	clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
	clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
	color_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#endif",
	color_pars_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#endif",
	color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec4 vColor;\n#endif",
	color_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec4( 1.0 );\n#endif\n#ifdef USE_COLOR_ALPHA\n	vColor *= color;\n#elif defined( USE_COLOR )\n	vColor.rgb *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.rgb *= instanceColor.rgb;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );\n#endif",
	common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\n#define inverseTransformDirection transformDirectionByInverseViewMatrix\nvec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {\n	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );\n}\nvec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
	defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n#endif",
	displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
	displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
	emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
	emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
	colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
	colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
	envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );\n		#ifdef ENVMAP_BLENDING_MULTIPLY\n			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_MIX )\n			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_ADD )\n			outgoingLight += envColor.xyz * specularStrength * reflectivity;\n		#endif\n	#endif\n#endif",
	envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform mat3 envMapRotation;\n	uniform samplerCube envMap;\n	#ifdef ENVMAP_TYPE_PMREM\n		float roughnessToMip( const in float roughness ) {\n			float r = clamp( roughness, 0.0, 1.0 );\n			return ENVMAP_MAX_LOD * r * ( 2.0 - r );\n		}\n	#endif\n#endif",
	envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
	envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
	envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_PMREM\n			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_PMREM\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );\n			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_RETROREFLECTION\n		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n			#ifdef ENVMAP_TYPE_PMREM\n				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );\n				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );\n				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );\n				return envMapColor.rgb * envMapIntensity;\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_PMREM\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n		#ifdef USE_RETROREFLECTION\n			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n				#ifdef ENVMAP_TYPE_PMREM\n					vec3 bentNormal = cross( bitangent, viewDir );\n					bentNormal = normalize( cross( bentNormal, bitangent ) );\n					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n					return getIBLRetroRadiance( viewDir, bentNormal, roughness );\n				#else\n					return vec3( 0.0 );\n				#endif\n			}\n		#endif\n	#endif\n#endif",
	envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
	fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
	fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
	fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
	fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
	gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
	lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
	lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
	lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
	lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_SUN_LIGHTS > 0\n	struct SunLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];\n	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {\n		light.color = sunLight.color;\n		light.direction = sunLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif\n#include <lightprobes_pars_fragment>",
	lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
	lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
	lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
	lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
	lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.metalness = metalnessFactor;\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.045 );\nmaterial.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef USE_DIFFUSE_ROUGHNESS\n	float diffuseRoughnessFactor = diffuseRoughness;\n	#ifdef USE_DIFFUSE_ROUGHNESSMAP\n		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;\n	#endif\n	material.diffuseRoughness = saturate( diffuseRoughnessFactor );\n#endif\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = vec3( 0.04 );\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_RETROREFLECTION\n	material.retroreflectivity = retroreflectivity;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
	lights_physical_pars_fragment: "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	vec3 diffuseContribution;\n	vec3 specularColor;\n	vec3 specularColorBlended;\n	float roughness;\n	float metalness;\n	float specularF90;\n	float dispersion;\n	vec2 dfg;\n	vec3 multiScatteringCompensation;\n	#ifdef USE_DIFFUSE_ROUGHNESS\n		float diffuseRoughness;\n	#endif\n	#ifdef USE_RETROREFLECTION\n		float retroreflectivity;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0Dielectric;\n		vec3 iridescenceF0Metallic;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\n#ifdef USE_DIFFUSE_ROUGHNESS\n	const float EON_EPSILON = 1e-7;\n	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {\n		float muComp = 1.0 - mu;\n		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );\n		return A * ( 1.0 + roughness * gOverPi );\n	}\n	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {\n		vec3 rho = saturate( diffuseColor );\n		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float s = dot( lightDir, viewDir ) - dotNL * dotNV;\n		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;\n		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );\n		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );\n		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );\n		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );\n		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );\n		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );\n		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI\n			* max( EON_EPSILON, 1.0 - albedoV )\n			* max( EON_EPSILON, 1.0 - albedoL )\n			/ max( EON_EPSILON, 1.0 - averageAlbedo );\n		return singleScatter + multiScatter;\n	}\n	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {\n		vec3 rho = saturate( diffuseColor );\n		if ( roughness <= EON_EPSILON ) return rho;\n		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );\n		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );\n		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );\n		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );\n		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );\n	}\n#endif\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		return 0.5 / max( gv + gl, EPSILON );\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = max( material.clearcoatRoughness, 0.045 );\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColorBlended;\n	float f90 = material.specularF90;\n	float roughness = max( material.roughness, 0.045 );\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float alphaT = max( material.alphaT, alpha );\n		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float rInv = 1.0 / ( roughness + 0.1 );\n	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;\n	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;\n	float DG = exp( a * dotNV + b );\n	return saturate( DG );\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n		#ifdef USE_CLEARCOAT\n			vec3 Ncc = geometryClearcoatNormal;\n			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );\n			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );\n			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );\n			mat3 mInvClearcoat = mat3(\n				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),\n				vec3(             0, 1,             0 ),\n				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )\n			);\n			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;\n			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );\n		#endif\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n \n 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n \n 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );\n \n 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );\n \n 		irradiance *= sheenEnergyComp;\n \n 	#endif\n	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	#ifdef USE_RETROREFLECTION\n		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );\n		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );\n		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );\n	#endif\n	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;\n	vec3 halfDir = normalize( directLight.direction + geometryViewDir );\n	float dotVH = saturate( dot( geometryViewDir, halfDir ) );\n	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );\n	#ifdef USE_RETROREFLECTION\n		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );\n		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );\n		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );\n		F = mix( F, retroF, saturate( material.retroreflectivity ) );\n	#endif\n	#ifdef USE_DIFFUSE_ROUGHNESS\n		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );\n	#else\n		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );\n	#endif\n	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );\n	#endif\n	#ifdef USE_DIFFUSE_ROUGHNESS\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );\n		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );\n	#else\n		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );\n	#endif\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		diffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectDiffuse += diffuse;\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;\n 	#endif\n	vec3 singleScatteringDielectric = vec3( 0.0 );\n	vec3 multiScatteringDielectric = vec3( 0.0 );\n	vec3 singleScatteringMetallic = vec3( 0.0 );\n	vec3 multiScatteringMetallic = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );\n	#else\n		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );\n	#endif\n	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );\n	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );\n	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;\n	#ifdef USE_DIFFUSE_ROUGHNESS\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );\n	#else\n		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );\n	#endif\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	vec3 indirectSpecular = radiance * singleScattering;\n	indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		indirectSpecular *= sheenEnergyComp;\n		indirectDiffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectSpecular += indirectSpecular;\n	reflectedLight.indirectDiffuse += indirectDiffuse;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
	lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );\n		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );\n		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );\n		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );\n	}\n#endif\n#ifdef STANDARD\n	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );\n	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;\n	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )\n		float EssMs = material.dfg.x + material.dfg.y;\n		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );\n	#endif\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )\n	SunLight sunLight;\n	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0\n	SunLightShadow sunLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {\n		sunLight = sunLights[ i ];\n		getSunLightInfo( sunLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )\n		sunLightShadow = sunLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_LIGHT_PROBE_GRIDS > 0\n		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;\n		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );\n		int probeGrid = - 1;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {\n			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;\n		}\n		#pragma unroll_loop_end\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {\n			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
	lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )\n		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )\n			iblIrradiance += getIBLIrradiance( geometryNormal );\n		#endif\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_RETROREFLECTION\n		#ifdef USE_ANISOTROPY\n			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n		#else\n			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );\n		#endif\n		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );\n	#endif\n	radiance += iblRadiance;\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
	lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	#if defined( LAMBERT ) || defined( PHONG )\n		irradiance += iblIrradiance;\n	#endif\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
	lightprobes_pars_fragment: "#if NUM_LIGHT_PROBE_GRIDS > 0\nuniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];\nuniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];\nuniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];\nuniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];\nbool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {\n	vec3 spacing = ( probesMax - probesMin ) / probesResolution;\n	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;\n	vec3 margin = spacing * 0.01;\n	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );\n}\nvec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {\n	vec3 res = probesResolution;\n	vec3 gridRange = probesMax - probesMin;\n	vec3 probeSpacing = gridRange / res;\n	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;\n	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );\n	float nz          = res.z;\n	float paddedSlices = nz + 2.0;\n	float atlasDepth  = 7.0 * paddedSlices;\n	float uvZBase     = uvw.z * nz + 1.0;\n	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );\n	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );\n	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );\n	vec3 c0 = s0.xyz;\n	vec3 c1 = vec3( s0.w, s1.xy );\n	vec3 c2 = vec3( s1.zw, s2.x );\n	vec3 c3 = s2.yzw;\n	vec3 c4 = s3.xyz;\n	vec3 c5 = vec3( s3.w, s4.xy );\n	vec3 c6 = vec3( s4.zw, s5.x );\n	vec3 c7 = s5.yzw;\n	vec3 c8 = s6.xyz;\n	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;\n	vec3 result = c0 * 0.886227;\n	result += c1 * 2.0 * 0.511664 * y;\n	result += c2 * 2.0 * 0.511664 * z;\n	result += c3 * 2.0 * 0.511664 * x;\n	result += c4 * 2.0 * 0.429043 * x * y;\n	result += c5 * 2.0 * 0.429043 * y * z;\n	result += c6 * ( 0.743125 * z * z - 0.247708 );\n	result += c7 * 2.0 * 0.429043 * x * z;\n	result += c8 * 0.429043 * ( x * x - y * y );\n	return max( result, vec3( 0.0 ) );\n}\n#endif",
	logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
	logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
	map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
	map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
	map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
	map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
	metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
	morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
	morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	#if defined( USE_COLOR_ALPHA )\n		vColor *= morphTargetBaseInfluence;\n	#elif defined( USE_COLOR )\n		vColor.rgb *= morphTargetBaseInfluence;\n	#endif\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
	morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
	morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
	normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#if defined( USE_PACKED_NORMALMAP )\n		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );\n	#endif\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
	normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n		#ifdef FLIP_SIDED\n			vBitangent = - vBitangent;\n		#endif\n	#endif\n#endif",
	normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
	clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
	clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
	clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
	iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
	opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
	packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n	\n		return depth * ( far - near ) - far;\n	#else\n		return depth * ( near - far ) - near;\n	#endif\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		return ( near * far ) / ( ( near - far ) * depth - near );\n	#else\n		return ( near * far ) / ( ( far - near ) * depth - far );\n	#endif\n}",
	premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
	project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
	dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
	dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
	roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
	roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
	shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		#define SUN_LIGHT_CASCADES 2\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];\n		#endif\n		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];\n		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];\n		varying vec4 vSunShadowWorldPosition;\n		varying vec3 vSunShadowWorldNormal;\n		struct SunLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#endif\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#elif defined( SHADOWMAP_TYPE_BASIC )\n			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float interleavedGradientNoise( vec2 position ) {\n			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );\n		}\n		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {\n			const float goldenAngle = 2.399963229728653;\n			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );\n			float theta = float( sampleIndex ) * goldenAngle + phi;\n			return vec2( cos( theta ), sin( theta ) ) * r;\n		}\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n				vec2 radius = shadowRadius * texelSize;\n				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n				shadow = (\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )\n				) * 0.2;\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#elif defined( SHADOWMAP_TYPE_VSM )\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;\n				float mean = distribution.x;\n				float variance = distribution.y * distribution.y;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					float hard_shadow = step( mean, shadowCoord.z );\n				#else\n					float hard_shadow = step( shadowCoord.z, mean );\n				#endif\n				\n				if ( hard_shadow == 1.0 ) {\n					shadow = 1.0;\n				} else {\n					variance = max( variance, 0.0000001 );\n					float d = shadowCoord.z - mean;\n					float p_max = variance / ( variance + d * d );\n					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );\n					shadow = max( hard_shadow, p_max );\n				}\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#else\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				float depth = texture2D( shadowMap, shadowCoord.xy ).r;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					shadow = step( depth, shadowCoord.z );\n				#else\n					shadow = step( shadowCoord.z, depth );\n				#endif\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#endif\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		float getSunShadow(\n			#if defined( SHADOWMAP_TYPE_PCF )\n				sampler2DShadow shadowMap,\n			#else\n				sampler2D shadowMap,\n			#endif\n			SunLightShadow sunLightShadow,\n			int shadowIndex\n		) {\n			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );\n			float viewDepth = vSunShadowWorldPosition.w;\n			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;\n			float shadow = 1.0;\n			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {\n				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];\n				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {\n					float cascadeShadow = getShadow(\n						shadowMap,\n						sunLightShadow.shadowMapSize,\n						sunLightShadow.shadowIntensity,\n						sunLightShadow.shadowBias,\n						sunLightShadow.shadowRadius,\n						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition\n					);\n					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );\n				}\n			}\n			return shadow;\n		}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#if defined( SHADOWMAP_TYPE_PCF )\n	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float lightDistance = length( lightToPosition );\n			float depthRange = shadowCameraFar - shadowCameraNear;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				float depthA = - shadowCameraNear / depthRange - shadowBias;\n				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );\n			#else\n				float depthA = shadowCameraFar / depthRange + shadowBias;\n				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );\n			#endif\n			float texelSize = shadowRadius / shadowMapSize.x;\n			vec3 absDir = abs( bd3D );\n			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );\n			tangent = normalize( cross( bd3D, tangent ) );\n			vec3 bitangent = cross( bd3D, tangent );\n			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n			shadow = 0.0;\n			for ( int i = 0; i < 5; i ++ ) {\n				vec2 offset = vogelDiskSample( i, 5, phi );\n				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;\n				vec3 absDirection = abs( direction );\n				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );\n				shadow += texture( shadowMap, vec4( direction, dp ) );\n			}\n			shadow *= 0.2;\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#elif defined( SHADOWMAP_TYPE_BASIC )\n	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			float depth = textureCube( shadowMap, bd3D ).r;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				depth = 1.0 - depth;\n			#endif\n			shadow = step( dp, depth );\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#endif\n	#endif\n#endif",
	shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		varying vec4 vSunShadowWorldPosition;\n		varying vec3 vSunShadowWorldNormal;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
	shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	#ifdef HAS_NORMAL\n		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n	#else\n		vec3 shadowWorldNormal = vec3( 0.0 );\n	#endif\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );\n		vSunShadowWorldNormal = shadowWorldNormal;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
	shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_SUN_LIGHT_SHADOWS > 0\n	SunLightShadow sunLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {\n		sunLight = sunLightShadows[ i ];\n		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
	skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
	skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
	skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
	skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
	specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
	specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
	tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
	tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
	transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
	transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
	uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_DIFFUSE_ROUGHNESSMAP\n	varying vec2 vDiffuseRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_DIFFUSE_ROUGHNESSMAP\n	uniform mat3 diffuseRoughnessMapTransform;\n	varying vec2 vDiffuseRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DIFFUSE_ROUGHNESSMAP\n	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
	worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
	background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
	background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	backgroundCube_frag: "uniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <envmap_common_pars_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_PMREM\n		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );\n	#else\n		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
	depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
	distance_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
	distance_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );\n}",
	equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
	equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
	meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
	meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
	meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
	meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
	meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DIFFUSE_ROUGHNESS\n	uniform float diffuseRoughness;\n	#ifdef USE_DIFFUSE_ROUGHNESSMAP\n		uniform sampler2D diffuseRoughnessMap;\n	#endif\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_RETROREFLECTION\n	uniform float retroreflectivity;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n \n		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;\n \n 	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
	points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}"
}, Z = {
	common: {
		diffuse: { value: /*@__PURE__*/ new J(16777215) },
		opacity: { value: 1 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new K() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new K() },
		alphaTest: { value: 0 }
	},
	specularmap: {
		specularMap: { value: null },
		specularMapTransform: { value: /*@__PURE__*/ new K() }
	},
	envmap: {
		envMap: { value: null },
		envMapRotation: { value: /*@__PURE__*/ new K() },
		reflectivity: { value: 1 },
		ior: { value: 1.5 },
		refractionRatio: { value: .98 },
		dfgLUT: { value: null }
	},
	aomap: {
		aoMap: { value: null },
		aoMapIntensity: { value: 1 },
		aoMapTransform: { value: /*@__PURE__*/ new K() }
	},
	lightmap: {
		lightMap: { value: null },
		lightMapIntensity: { value: 1 },
		lightMapTransform: { value: /*@__PURE__*/ new K() }
	},
	bumpmap: {
		bumpMap: { value: null },
		bumpMapTransform: { value: /*@__PURE__*/ new K() },
		bumpScale: { value: 1 }
	},
	normalmap: {
		normalMap: { value: null },
		normalMapTransform: { value: /*@__PURE__*/ new K() },
		normalScale: { value: /*@__PURE__*/ new W(1, 1) }
	},
	displacementmap: {
		displacementMap: { value: null },
		displacementMapTransform: { value: /*@__PURE__*/ new K() },
		displacementScale: { value: 1 },
		displacementBias: { value: 0 }
	},
	emissivemap: {
		emissiveMap: { value: null },
		emissiveMapTransform: { value: /*@__PURE__*/ new K() }
	},
	metalnessmap: {
		metalnessMap: { value: null },
		metalnessMapTransform: { value: /*@__PURE__*/ new K() }
	},
	roughnessmap: {
		roughnessMap: { value: null },
		roughnessMapTransform: { value: /*@__PURE__*/ new K() }
	},
	gradientmap: { gradientMap: { value: null } },
	fog: {
		fogDensity: { value: 25e-5 },
		fogNear: { value: 1 },
		fogFar: { value: 2e3 },
		fogColor: { value: /*@__PURE__*/ new J(16777215) }
	},
	lights: {
		ambientLightColor: { value: [] },
		lightProbe: { value: [] },
		sunLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		sunLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		sunShadowMatrix: { value: [] },
		sunShadowCascade: { value: [] },
		directionalLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		directionalLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		directionalShadowMatrix: { value: [] },
		spotLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				direction: {},
				distance: {},
				coneCos: {},
				penumbraCos: {},
				decay: {}
			}
		},
		spotLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		spotLightMap: { value: [] },
		spotLightMatrix: { value: [] },
		pointLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				decay: {},
				distance: {}
			}
		},
		pointLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {},
				shadowCameraNear: {},
				shadowCameraFar: {}
			}
		},
		pointShadowMatrix: { value: [] },
		hemisphereLights: {
			value: [],
			properties: {
				direction: {},
				skyColor: {},
				groundColor: {}
			}
		},
		rectAreaLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				width: {},
				height: {}
			}
		},
		ltc_1: { value: null },
		ltc_2: { value: null },
		probesSH: { value: [] },
		probesMin: { value: [] },
		probesMax: { value: [] },
		probesResolution: { value: [] }
	},
	points: {
		diffuse: { value: /*@__PURE__*/ new J(16777215) },
		opacity: { value: 1 },
		size: { value: 1 },
		scale: { value: 1 },
		map: { value: null },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new K() },
		alphaTest: { value: 0 },
		uvTransform: { value: /*@__PURE__*/ new K() }
	},
	sprite: {
		diffuse: { value: /*@__PURE__*/ new J(16777215) },
		opacity: { value: 1 },
		center: { value: /*@__PURE__*/ new W(.5, .5) },
		rotation: { value: 0 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new K() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new K() },
		alphaTest: { value: 0 }
	}
}, tc = {
	basic: {
		uniforms: /*@__PURE__*/ To([
			Z.common,
			Z.specularmap,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.fog
		]),
		vertexShader: X.meshbasic_vert,
		fragmentShader: X.meshbasic_frag
	},
	lambert: {
		uniforms: /*@__PURE__*/ To([
			Z.common,
			Z.specularmap,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.fog,
			Z.lights,
			{
				emissive: { value: /*@__PURE__*/ new J(0) },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: X.meshlambert_vert,
		fragmentShader: X.meshlambert_frag
	},
	phong: {
		uniforms: /*@__PURE__*/ To([
			Z.common,
			Z.specularmap,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.fog,
			Z.lights,
			{
				emissive: { value: /*@__PURE__*/ new J(0) },
				specular: { value: /*@__PURE__*/ new J(1118481) },
				shininess: { value: 30 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: X.meshphong_vert,
		fragmentShader: X.meshphong_frag
	},
	standard: {
		uniforms: /*@__PURE__*/ To([
			Z.common,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.roughnessmap,
			Z.metalnessmap,
			Z.fog,
			Z.lights,
			{
				emissive: { value: /*@__PURE__*/ new J(0) },
				roughness: { value: 1 },
				metalness: { value: 0 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: X.meshphysical_vert,
		fragmentShader: X.meshphysical_frag
	},
	toon: {
		uniforms: /*@__PURE__*/ To([
			Z.common,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.gradientmap,
			Z.fog,
			Z.lights,
			{ emissive: { value: /*@__PURE__*/ new J(0) } }
		]),
		vertexShader: X.meshtoon_vert,
		fragmentShader: X.meshtoon_frag
	},
	matcap: {
		uniforms: /*@__PURE__*/ To([
			Z.common,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.fog,
			{ matcap: { value: null } }
		]),
		vertexShader: X.meshmatcap_vert,
		fragmentShader: X.meshmatcap_frag
	},
	points: {
		uniforms: /*@__PURE__*/ To([Z.points, Z.fog]),
		vertexShader: X.points_vert,
		fragmentShader: X.points_frag
	},
	dashed: {
		uniforms: /*@__PURE__*/ To([
			Z.common,
			Z.fog,
			{
				scale: { value: 1 },
				dashSize: { value: 1 },
				totalSize: { value: 2 }
			}
		]),
		vertexShader: X.linedashed_vert,
		fragmentShader: X.linedashed_frag
	},
	depth: {
		uniforms: /*@__PURE__*/ To([Z.common, Z.displacementmap]),
		vertexShader: X.depth_vert,
		fragmentShader: X.depth_frag
	},
	normal: {
		uniforms: /*@__PURE__*/ To([
			Z.common,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			{ opacity: { value: 1 } }
		]),
		vertexShader: X.meshnormal_vert,
		fragmentShader: X.meshnormal_frag
	},
	sprite: {
		uniforms: /*@__PURE__*/ To([Z.sprite, Z.fog]),
		vertexShader: X.sprite_vert,
		fragmentShader: X.sprite_frag
	},
	background: {
		uniforms: {
			uvTransform: { value: /*@__PURE__*/ new K() },
			t2D: { value: null },
			backgroundIntensity: { value: 1 }
		},
		vertexShader: X.background_vert,
		fragmentShader: X.background_frag
	},
	backgroundCube: {
		uniforms: {
			envMap: { value: null },
			backgroundBlurriness: { value: 0 },
			backgroundIntensity: { value: 1 },
			backgroundRotation: { value: /*@__PURE__*/ new K() }
		},
		vertexShader: X.backgroundCube_vert,
		fragmentShader: X.backgroundCube_frag
	},
	cube: {
		uniforms: {
			tCube: { value: null },
			tFlip: { value: -1 },
			opacity: { value: 1 }
		},
		vertexShader: X.cube_vert,
		fragmentShader: X.cube_frag
	},
	equirect: {
		uniforms: { tEquirect: { value: null } },
		vertexShader: X.equirect_vert,
		fragmentShader: X.equirect_frag
	},
	distance: {
		uniforms: /*@__PURE__*/ To([
			Z.common,
			Z.displacementmap,
			{
				referencePosition: { value: /*@__PURE__*/ new G() },
				nearDistance: { value: 1 },
				farDistance: { value: 1e3 }
			}
		]),
		vertexShader: X.distance_vert,
		fragmentShader: X.distance_frag
	},
	shadow: {
		uniforms: /*@__PURE__*/ To([
			Z.lights,
			Z.fog,
			{
				color: { value: /*@__PURE__*/ new J(0) },
				opacity: { value: 1 }
			}
		]),
		vertexShader: X.shadow_vert,
		fragmentShader: X.shadow_frag
	}
};
tc.physical = {
	uniforms: /*@__PURE__*/ To([tc.standard.uniforms, {
		clearcoat: { value: 0 },
		clearcoatMap: { value: null },
		clearcoatMapTransform: { value: /*@__PURE__*/ new K() },
		clearcoatNormalMap: { value: null },
		clearcoatNormalMapTransform: { value: /*@__PURE__*/ new K() },
		clearcoatNormalScale: { value: /*@__PURE__*/ new W(1, 1) },
		clearcoatRoughness: { value: 0 },
		clearcoatRoughnessMap: { value: null },
		clearcoatRoughnessMapTransform: { value: /*@__PURE__*/ new K() },
		diffuseRoughness: { value: 0 },
		diffuseRoughnessMap: { value: null },
		diffuseRoughnessMapTransform: { value: /*@__PURE__*/ new K() },
		dispersion: { value: 0 },
		retroreflectivity: { value: 0 },
		iridescence: { value: 0 },
		iridescenceMap: { value: null },
		iridescenceMapTransform: { value: /*@__PURE__*/ new K() },
		iridescenceIOR: { value: 1.3 },
		iridescenceThicknessMinimum: { value: 100 },
		iridescenceThicknessMaximum: { value: 400 },
		iridescenceThicknessMap: { value: null },
		iridescenceThicknessMapTransform: { value: /*@__PURE__*/ new K() },
		sheen: { value: 0 },
		sheenColor: { value: /*@__PURE__*/ new J(0) },
		sheenColorMap: { value: null },
		sheenColorMapTransform: { value: /*@__PURE__*/ new K() },
		sheenRoughness: { value: 1 },
		sheenRoughnessMap: { value: null },
		sheenRoughnessMapTransform: { value: /*@__PURE__*/ new K() },
		transmission: { value: 0 },
		transmissionMap: { value: null },
		transmissionMapTransform: { value: /*@__PURE__*/ new K() },
		transmissionSamplerSize: { value: /*@__PURE__*/ new W() },
		transmissionSamplerMap: { value: null },
		thickness: { value: 0 },
		thicknessMap: { value: null },
		thicknessMapTransform: { value: /*@__PURE__*/ new K() },
		attenuationDistance: { value: 0 },
		attenuationColor: { value: /*@__PURE__*/ new J(0) },
		specularColor: { value: /*@__PURE__*/ new J(1, 1, 1) },
		specularColorMap: { value: null },
		specularColorMapTransform: { value: /*@__PURE__*/ new K() },
		specularIntensity: { value: 1 },
		specularIntensityMap: { value: null },
		specularIntensityMapTransform: { value: /*@__PURE__*/ new K() },
		anisotropyVector: { value: /*@__PURE__*/ new W() },
		anisotropyMap: { value: null },
		anisotropyMapTransform: { value: /*@__PURE__*/ new K() }
	}]),
	vertexShader: X.meshphysical_vert,
	fragmentShader: X.meshphysical_frag
};
var nc = {
	r: 0,
	b: 0,
	g: 0
}, rc = /*@__PURE__*/ new Xt(), ic = /*@__PURE__*/ new K();
ic.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function ac(e, t, n, r, i, a) {
	let o = new J(0), s = i === !0 ? 0 : 1, c, l, u = null, d = 0, f = null;
	function p(e) {
		let n = e.isScene === !0 ? e.background : null;
		if (n && n.isTexture) {
			let r = e.backgroundBlurriness > 0;
			n = t.get(n, r);
		}
		return n;
	}
	function m(t) {
		let r = !1, i = p(t);
		i === null ? g(o, s) : i && i.isColor && (g(i, 1), r = !0);
		let c = e.xr.getEnvironmentBlendMode();
		c === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : c === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (e.autoClear || r) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
	}
	function h(t, n) {
		let i = p(n);
		i && i.isCubeTexture ? (l === void 0 && (l = new _i(new Gi(1, 1, 1), new Mo({
			name: "BackgroundCubeMaterial",
			uniforms: wo(tc.backgroundCube.uniforms),
			vertexShader: tc.backgroundCube.vertexShader,
			fragmentShader: tc.backgroundCube.fragmentShader,
			side: 1,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(e, t, n) {
			this.matrixWorld.copyPosition(n.matrixWorld);
		}, Object.defineProperty(l.material, "envMap", { get: function() {
			return this.uniforms.envMap.value;
		} }), r.update(l)), l.material.uniforms.envMap.value = i, l.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(rc.makeRotationFromEuler(n.backgroundRotation)).transpose(), i.isRenderTargetTexture === !1 && l.material.uniforms.backgroundRotation.value.premultiply(ic), l.material.toneMapped = q.getTransfer(i.colorSpace) !== Be, (u !== i || d !== i.version || f !== e.toneMapping) && (l.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), l.layers.enableAll(), t.unshift(l, l.geometry, l.material, 0, 0, null)) : i && i.isTexture && (c === void 0 && (c = new _i(new ho(2, 2), new Mo({
			name: "BackgroundMaterial",
			uniforms: wo(tc.background.uniforms),
			vertexShader: tc.background.vertexShader,
			fragmentShader: tc.background.fragmentShader,
			side: 0,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
			return this.uniforms.t2D.value;
		} }), r.update(c)), c.material.uniforms.t2D.value = i, c.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, c.material.toneMapped = q.getTransfer(i.colorSpace) !== Be, i.matrixAutoUpdate === !0 && i.updateMatrix(), c.material.uniforms.uvTransform.value.copy(i.matrix), (u !== i || d !== i.version || f !== e.toneMapping) && (c.material.needsUpdate = !0, u = i, d = i.version, f = e.toneMapping), c.layers.enableAll(), t.unshift(c, c.geometry, c.material, 0, 0, null));
	}
	function g(t, r) {
		t.getRGB(nc, Oo(e)), n.buffers.color.setClear(nc.r, nc.g, nc.b, r, a);
	}
	function _() {
		l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
	}
	return {
		getClearColor: function() {
			return o;
		},
		setClearColor: function(e, t = 1) {
			o.set(e), s = t, g(o, s);
		},
		getClearAlpha: function() {
			return s;
		},
		setClearAlpha: function(e) {
			s = e, g(o, s);
		},
		render: m,
		addToRenderList: h,
		dispose: _
	};
}
function oc(e, t) {
	let n = e.getParameter(e.MAX_VERTEX_ATTRIBS), r = {}, i = f(null), a = i, o = !1;
	function s(n, r, i, s, c) {
		let u = !1, f = d(n, s, i, r);
		a !== f && (a = f, l(a.object)), u = p(n, s, i, c), u && m(n, s, i, c), c !== null && t.update(c, e.ELEMENT_ARRAY_BUFFER), (u || o) && (o = !1, b(n, r, i, s), c !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(c).buffer));
	}
	function c() {
		return e.createVertexArray();
	}
	function l(t) {
		return e.bindVertexArray(t);
	}
	function u(t) {
		return e.deleteVertexArray(t);
	}
	function d(e, t, n, i) {
		let a = i.wireframe === !0, o = r[t.id];
		o === void 0 && (o = {}, r[t.id] = o);
		let s = e.isInstancedMesh === !0 ? e.id : 0, l = o[s];
		l === void 0 && (l = {}, o[s] = l);
		let u = l[n.id];
		u === void 0 && (u = {}, l[n.id] = u);
		let d = u[a];
		return d === void 0 && (d = f(c()), u[a] = d), d;
	}
	function f(e) {
		let t = [], r = [], i = [];
		for (let e = 0; e < n; e++) t[e] = 0, r[e] = 0, i[e] = 0;
		return {
			geometry: null,
			program: null,
			wireframe: !1,
			newAttributes: t,
			enabledAttributes: r,
			attributeDivisors: i,
			object: e,
			attributes: {},
			index: null
		};
	}
	function p(e, t, n, r) {
		let i = a.attributes, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = i[t], r = o[t];
			if (r === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (r = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (r = e.instanceColor)), n === void 0 || n.attribute !== r || r && n.data !== r.data) return !0;
			s++;
		}
		return a.attributesNum !== s || a.index !== r;
	}
	function m(e, t, n, r) {
		let i = {}, o = t.attributes, s = 0, c = n.getAttributes();
		for (let t in c) if (c[t].location >= 0) {
			let n = o[t];
			n === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (n = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (n = e.instanceColor));
			let r = {};
			r.attribute = n, n && n.data && (r.data = n.data), i[t] = r, s++;
		}
		a.attributes = i, a.attributesNum = s, a.index = r;
	}
	function h() {
		let e = a.newAttributes;
		for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
	}
	function g(e) {
		_(e, 0);
	}
	function _(t, n) {
		let r = a.newAttributes, i = a.enabledAttributes, o = a.attributeDivisors;
		r[t] = 1, i[t] === 0 && (e.enableVertexAttribArray(t), i[t] = 1), o[t] !== n && (e.vertexAttribDivisor(t, n), o[t] = n);
	}
	function v() {
		let t = a.newAttributes, n = a.enabledAttributes;
		for (let r = 0, i = n.length; r < i; r++) n[r] !== t[r] && (e.disableVertexAttribArray(r), n[r] = 0);
	}
	function y(t, n, r, i, a, o, s) {
		s === !0 ? e.vertexAttribIPointer(t, n, r, a, o) : e.vertexAttribPointer(t, n, r, i, a, o);
	}
	function b(n, r, i, a) {
		h();
		let o = a.attributes, s = i.getAttributes(), c = r.defaultAttributeValues;
		for (let r in s) {
			let i = s[r];
			if (i.location >= 0) {
				let s = o[r];
				if (s === void 0 && (r === "instanceMatrix" && n.instanceMatrix && (s = n.instanceMatrix), r === "instanceColor" && n.instanceColor && (s = n.instanceColor)), s !== void 0) {
					let r = s.normalized, o = s.itemSize, c = t.get(s);
					if (c === void 0) continue;
					let l = c.buffer, u = c.type, d = c.bytesPerElement, f = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013;
					if (s.isInterleavedBufferAttribute) {
						let t = s.data, c = t.isInterleavedBuffer === !0 ? t.stride : t.itemSize, p = s.offset;
						if (t.isInstancedInterleavedBuffer || t.isInstancedBufferAttribute) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, t.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = t.meshPerAttribute * t.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, c * d, (p + o / i.locationSize * e) * d, f);
					} else {
						if (s.isInstancedBufferAttribute) {
							for (let e = 0; e < i.locationSize; e++) _(i.location + e, s.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = s.meshPerAttribute * s.count);
						} else for (let e = 0; e < i.locationSize; e++) g(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, l);
						for (let e = 0; e < i.locationSize; e++) y(i.location + e, o / i.locationSize, u, r, o * d, o / i.locationSize * e * d, f);
					}
				} else if (c !== void 0) {
					let t = c[r];
					if (t !== void 0) switch (t.length) {
						case 2:
							e.vertexAttrib2fv(i.location, t);
							break;
						case 3:
							e.vertexAttrib3fv(i.location, t);
							break;
						case 4:
							e.vertexAttrib4fv(i.location, t);
							break;
						default: e.vertexAttrib1fv(i.location, t);
					}
				}
			}
		}
		v();
	}
	function x() {
		T();
		for (let e in r) {
			let t = r[e];
			for (let e in t) {
				let n = t[e];
				for (let e in n) {
					let t = n[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete n[e];
				}
			}
			delete r[e];
		}
	}
	function S(e) {
		if (r[e.id] === void 0) return;
		let t = r[e.id];
		for (let e in t) {
			let n = t[e];
			for (let e in n) {
				let t = n[e];
				for (let e in t) u(t[e].object), delete t[e];
				delete n[e];
			}
		}
		delete r[e.id];
	}
	function C(e) {
		for (let t in r) {
			let n = r[t];
			for (let t in n) {
				let r = n[t];
				if (r[e.id] === void 0) continue;
				let i = r[e.id];
				for (let e in i) u(i[e].object), delete i[e];
				delete r[e.id];
			}
		}
	}
	function w(e) {
		for (let t in r) {
			let n = r[t], i = e.isInstancedMesh === !0 ? e.id : 0, a = n[i];
			if (a !== void 0) {
				for (let e in a) {
					let t = a[e];
					for (let e in t) u(t[e].object), delete t[e];
					delete a[e];
				}
				delete n[i], Object.keys(n).length === 0 && delete r[t];
			}
		}
	}
	function T() {
		E(), o = !0, a !== i && (a = i, l(a.object));
	}
	function E() {
		i.geometry = null, i.program = null, i.wireframe = !1;
	}
	return {
		setup: s,
		reset: T,
		resetDefaultState: E,
		dispose: x,
		releaseStatesOfGeometry: S,
		releaseStatesOfObject: w,
		releaseStatesOfProgram: C,
		initAttributes: h,
		enableAttribute: g,
		disableUnusedAttributes: v
	};
}
function sc(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	function a(t, i) {
		e.drawArrays(r, t, i), n.update(i, r, 1);
	}
	function o(t, i, a) {
		a !== 0 && (e.drawArraysInstanced(r, t, i, a), n.update(i, r, a));
	}
	function s(e, i, a) {
		if (a === 0) return;
		t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r, e, 0, i, 0, a);
		let o = 0;
		for (let e = 0; e < a; e++) o += i[e];
		n.update(o, r, 1);
	}
	this.setMode = i, this.render = a, this.renderInstances = o, this.renderMultiDraw = s;
}
function cc(e, t, n, r) {
	let i;
	function a() {
		if (i !== void 0) return i;
		if (t.has("EXT_texture_filter_anisotropic") === !0) {
			let n = t.get("EXT_texture_filter_anisotropic");
			i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
		} else i = 0;
		return i;
	}
	function o(t) {
		return t === 1023 || r.convert(t) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT);
	}
	function s(n) {
		let i = n === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
		return !(n !== 1009 && n !== 1015 && !i && r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE));
	}
	function c(t) {
		if (t === "highp") {
			if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
			t = "mediump";
		}
		return t === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
	}
	let l = n.precision === void 0 ? "highp" : n.precision, u = c(l);
	u !== l && (V("WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
	let d = n.reversedDepthBuffer === !0 && t.has("EXT_clip_control"), f = n.logarithmicDepthBuffer === !0 && d === !1;
	n.reversedDepthBuffer === !0 && d === !1 && V("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."), n.logarithmicDepthBuffer === !0 && d === !0 && V("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");
	let p = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), m = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), h = e.getParameter(e.MAX_TEXTURE_SIZE), g = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), _ = e.getParameter(e.MAX_VERTEX_ATTRIBS), v = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), y = e.getParameter(e.MAX_VARYING_VECTORS), b = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), x = e.getParameter(e.MAX_SAMPLES), S = e.getParameter(e.SAMPLES);
	return {
		isWebGL2: !0,
		getMaxAnisotropy: a,
		getMaxPrecision: c,
		textureFormatReadable: o,
		textureTypeReadable: s,
		precision: l,
		logarithmicDepthBuffer: f,
		reversedDepthBuffer: d,
		maxTextures: p,
		maxVertexTextures: m,
		maxTextureSize: h,
		maxCubemapSize: g,
		maxAttributes: _,
		maxVertexUniforms: v,
		maxVaryings: y,
		maxFragmentUniforms: b,
		maxSamples: x,
		samples: S
	};
}
function lc(e) {
	let t = this, n = null, r = 0, i = !1, a = !1, o = new Fr(), s = new K(), c = {
		value: null,
		needsUpdate: !1
	};
	this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t) {
		let n = e.length !== 0 || t || r !== 0 || i;
		return i = t, r = e.length, n;
	}, this.beginShadows = function() {
		a = !0, u(null);
	}, this.endShadows = function() {
		a = !1;
	}, this.setGlobalState = function(e, t) {
		n = u(e, t, 0);
	}, this.setState = function(t, o, s) {
		let d = t.clippingPlanes, f = t.clipIntersection, p = t.clipShadows, m = e.get(t);
		if (!i || d === null || d.length === 0 || a && !p) a ? u(null) : l();
		else {
			let e = a ? 0 : r, t = e * 4, i = m.clippingState || null;
			c.value = i, i = u(d, o, t, s);
			for (let e = 0; e !== t; ++e) i[e] = n[e];
			m.clippingState = i, this.numIntersection = f ? this.numPlanes : 0, this.numPlanes += e;
		}
	};
	function l() {
		c.value !== n && (c.value = n, c.needsUpdate = r > 0), t.numPlanes = r, t.numIntersection = 0;
	}
	function u(e, n, r, i) {
		let a = e === null ? 0 : e.length, l = null;
		if (a !== 0) {
			if (l = c.value, i !== !0 || l === null) {
				let t = r + a * 4, i = n.matrixWorldInverse;
				s.getNormalMatrix(i), (l === null || l.length < t) && (l = new Float32Array(t));
				for (let t = 0, n = r; t !== a; ++t, n += 4) o.copy(e[t]).applyMatrix4(i, s), o.normal.toArray(l, n), l[n + 3] = o.constant;
			}
			c.value = l, c.needsUpdate = !0;
		}
		return t.numPlanes = a, t.numIntersection = 0, l;
	}
}
var uc = class extends qt {
	constructor(e = 1, t = {}) {
		super(e, e, t), this.isWebGLCubeRenderTarget = !0;
		let n = {
			width: e,
			height: e,
			depth: 1
		}, r = [
			n,
			n,
			n,
			n,
			n,
			n
		];
		this.texture = new Bi(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
	}
	fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
		let n = {
			uniforms: { tEquirect: { value: null } },
			vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
			fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
		}, r = new Gi(5, 5, 5), i = new Mo({
			name: "CubemapFromEquirect",
			uniforms: wo(n.uniforms),
			vertexShader: n.vertexShader,
			fragmentShader: n.fragmentShader,
			side: 1,
			blending: 0
		});
		i.uniforms.tEquirect.value = t;
		let a = new _i(r, i), o = t.minFilter;
		return t.minFilter === 1008 && (t.minFilter = c), new Cs(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
	}
	clear(e, t = !0, n = !0, r = !0) {
		let i = e.getRenderTarget();
		for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, n, r);
		e.setRenderTarget(i);
	}
}, dc = 256, fc = 3, pc = 20, mc = 256, hc = 16, gc = 3, _c = /*@__PURE__*/ new G(), vc = /*@__PURE__*/ new J(), yc = class e {
	constructor(e) {
		this._renderer = e, this._cubeSize = 0, this._sourceTarget = null, this._cubeCamera = new Cs(1, 10, null), this._boxMesh = new _i(new Gi(5, 5, 5), null), this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null, this._integrationMaterial = null;
	}
	fromScene(e, t = 0, n = .1, r = 100, i = {}) {
		let { size: a = 256, position: o = _c } = i, s = this._renderer;
		this._setSize(a);
		let c = this._allocateTarget(), l = this._getSourceTarget(!0);
		t > 0 && (l.texture.mipmapsAutoUpdate = !1);
		let u = s.autoClear, d = s.autoClearColor, f = s.autoClearDepth, p = s.autoClearStencil, m = e.background;
		s.autoClear = !0, s.autoClearColor = !0, s.autoClearDepth = !0, s.autoClearStencil = !0, m === null && (e.background = s.getClearColor(vc));
		let h = new Cs(n, r, l);
		return h.position.copy(o), h.update(s, e), s.autoClear = u, s.autoClearColor = d, s.autoClearDepth = f, s.autoClearStencil = p, e.background = m, t > 0 && (l.texture.mipmapsAutoUpdate = !0, this._blur(c, t)), this._applyPMREM(c), c;
	}
	fromEquirectangular(e, t = null) {
		return this._fromTexture(e, t);
	}
	fromCubemap(e, t = null) {
		return this._fromTexture(e, t);
	}
	compileCubemapShader() {
		this._cubemapMaterial === null && (this._cubemapMaterial = Ec(), this._compileMaterial(this._cubemapMaterial));
	}
	compileEquirectangularShader() {
		this._equirectMaterial === null && (this._equirectMaterial = Tc(), this._compileMaterial(this._equirectMaterial));
	}
	dispose() {
		this._sourceTarget !== null && this._sourceTarget.dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._integrationMaterial !== null && this._integrationMaterial.dispose(), this._boxMesh.geometry.dispose();
	}
	static lodToRoughness(e, t) {
		return t > 0 ? 1 - Math.sqrt(1 - e / t) : 0;
	}
	_setSize(e) {
		this._cubeSize = Math.max(dc, St(e));
	}
	_fromTexture(e, t) {
		e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? dc : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4);
		let n = t || this._allocateTarget();
		return this._textureToCubemap(e), this._applyPMREM(n), n;
	}
	_allocateTarget() {
		let e = this._cubeSize, t = bc(e, !1, !1), n = Math.log2(e) - fc;
		for (let r = 0; r <= n; r++) t.texture.mipmaps.push({
			width: e >> r,
			height: e >> r
		});
		return t.texture.name = "PMREM", t.texture.isPMREMTexture = !0, t;
	}
	_getSourceTarget(e = !1) {
		let t = this._cubeSize, n = this._sourceTarget;
		return (n === null || n.width !== t || e && n.depthBuffer === !1) && (n !== null && n.dispose(), this._sourceTarget = bc(t, !0, e)), this._sourceTarget;
	}
	_compileMaterial(e) {
		this._boxMesh.material = e, this._renderer.compile(this._boxMesh, this._cubeCamera.children[0]);
	}
	_renderCube(e, t, n) {
		let r = this._boxMesh, i = this._cubeCamera;
		r.material = n, i.renderTarget = e, i.activeMipmapLevel = t;
		let a = e.width >> t;
		e.viewport.set(0, 0, a, a), i.update(this._renderer, r), e.viewport.set(0, 0, e.width, e.height);
	}
	_textureToCubemap(e) {
		let t;
		e.mapping === 301 || e.mapping === 302 ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ec()), t = this._cubemapMaterial, t.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : (this._equirectMaterial === null && (this._equirectMaterial = Tc()), t = this._equirectMaterial), t.uniforms.envMap.value = e, this._renderCube(this._getSourceTarget(), 0, t);
	}
	_applyPMREM(t) {
		this._ggxMaterial === null && (this._ggxMaterial = Sc(), this._integrationMaterial = Cc());
		let n = this._cubeSize, r = t.texture.mipmaps.length - 1, i = this._ggxMaterial.uniforms;
		i.envMap.value = this._sourceTarget.texture;
		let a = this._integrationMaterial.uniforms;
		a.envMap.value = this._sourceTarget.texture, a.sourceLod.value = Math.log2(n / hc);
		for (let o = 0; o <= r; o++) {
			let s = e.lodToRoughness(o, r);
			if (o > r - gc) a.roughness.value = s, this._renderCube(t, o, this._integrationMaterial);
			else {
				let e = s > 0 ? Math.log2(n) + .5 * Math.log2(6 / (mc * s ** 4)) + .5 : 0;
				i.roughness.value = s, i.lodBias.value = e, this._renderCube(t, o, this._ggxMaterial);
			}
		}
	}
	_blur(e, t) {
		this._blurMaterial === null && (this._blurMaterial = wc());
		let n = this._blurMaterial, r = n.uniforms, i = this._sourceTarget;
		r.sigma.value = Math.min(t, Math.PI) / Math.SQRT2, r.envMap.value = i.texture, this._renderCube(e, 0, n), r.envMap.value = e.texture, this._renderCube(i, 0, n);
	}
};
function bc(e, t, n) {
	return new uc(e, {
		minFilter: u,
		generateMipmaps: t,
		type: v,
		colorSpace: Re,
		depthBuffer: n
	});
}
function xc(e, t, n) {
	return new Mo({
		name: e,
		uniforms: t,
		vertexShader: X.cube_vert,
		fragmentShader: n,
		side: 1,
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function Sc() {
	return xc("PMREMGGXConvolution", {
		envMap: { value: null },
		roughness: { value: 0 },
		lodBias: { value: 0 }
	}, `

		#define GGX_SAMPLES ${mc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`);
}
function Cc() {
	return xc("PMREMGGXIntegration", {
		envMap: { value: null },
		roughness: { value: 0 },
		sourceLod: { value: 0 },
		sourceSize: { value: hc }
	}, "\n\n		varying vec3 vWorldDirection;\n\n		uniform samplerCube envMap;\n		uniform float roughness;\n		uniform float sourceLod;\n		uniform int sourceSize;\n\n		void main() {\n\n			vec3 N = normalize( vWorldDirection );\n\n			float alpha = roughness * roughness;\n			float alpha2 = alpha * alpha;\n\n			float texelSize = 2.0 / float( sourceSize );\n\n			vec3 prefilteredColor = vec3( 0.0 );\n			float totalWeight = 0.0;\n\n			// Pair opposite texels: only the one in N's hemisphere contributes.\n			for ( int face = 0; face < 3; face ++ ) {\n\n				for ( int y = 0; y < sourceSize; y ++ ) {\n\n					for ( int x = 0; x < sourceSize; x ++ ) {\n\n						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;\n						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );\n\n						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );\n						float NdotL = dot( N, texelDirection );\n						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;\n						NdotL = abs( NdotL ) * invDistance;\n\n						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors\n						// in the GGX distribution and texel solid angle cancel when normalized.\n						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;\n						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );\n\n						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;\n						totalWeight += weight;\n\n					}\n\n				}\n\n			}\n\n			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );\n\n		}\n	");
}
function wc() {
	return xc("PMREMSphericalGaussianBlur", {
		envMap: { value: null },
		sigma: { value: 0 }
	}, `

		#define SAMPLES ${pc}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`);
}
function Tc() {
	return xc("PMREMEquirectangularToCubemap", { envMap: { value: null } }, "\n\n		varying vec3 vWorldDirection;\n\n		uniform sampler2D envMap;\n\n		#include <common>\n\n		void main() {\n\n			// Average four subpixel samples to preserve small, bright features.\n			vec3 direction = normalize( vWorldDirection );\n			vec3 dx = dFdx( direction ) * 0.25;\n			vec3 dy = dFdy( direction ) * 0.25;\n\n			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;\n			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;\n			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;\n			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;\n			gl_FragColor = vec4( color * 0.25, 1.0 );\n\n		}\n	");
}
function Ec() {
	return xc("PMREMCubemapToCubemap", {
		envMap: { value: null },
		flipEnvMap: { value: -1 }
	}, "\n\n		varying vec3 vWorldDirection;\n\n		uniform samplerCube envMap;\n		uniform float flipEnvMap;\n\n		void main() {\n\n			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );\n\n		}\n	");
}
function Dc(e) {
	let t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r = null;
	function i(e, t = !1) {
		return e == null ? null : t ? o(e) : a(e);
	}
	function a(n) {
		if (n && n.isTexture) {
			let r = n.mapping;
			if (r === 303 || r === 304) {
				if (t.has(n)) {
					let e = t.get(n).texture;
					return s(e, n.mapping);
				}
				{
					let r = n.image;
					if (r && r.height > 0) {
						let i = new uc(r.height);
						return i.fromEquirectangularTexture(e, n), t.set(n, i), n.addEventListener("dispose", l), s(i.texture, n.mapping);
					}
					return null;
				}
			}
		}
		return n;
	}
	function o(t) {
		if (t && t.isTexture && t.isPMREMTexture !== !0) {
			let i = t.mapping, a = i === 303 || i === 304, o = i === 301 || i === 302;
			if (a || o) {
				let i = n.get(t), s = i === void 0 ? 0 : i.texture.pmremVersion;
				if (t.isRenderTargetTexture && t.pmremVersion !== s) return r === null && (r = new yc(e)), i = a ? r.fromEquirectangular(t, i) : r.fromCubemap(t, i), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), i.texture;
				if (i !== void 0) return i.texture;
				{
					let s = t.image;
					return a && s && s.height > 0 || o && s && c(s) ? (r === null && (r = new yc(e)), i = a ? r.fromEquirectangular(t) : r.fromCubemap(t), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), t.addEventListener("dispose", u), i.texture) : null;
				}
			}
		}
		return t;
	}
	function s(e, t) {
		return t === 303 ? e.mapping = 301 : t === 304 && (e.mapping = 302), e;
	}
	function c(e) {
		let t = 0;
		for (let n = 0; n < 6; n++) e[n] !== void 0 && t++;
		return t === 6;
	}
	function l(e) {
		let n = e.target;
		n.removeEventListener("dispose", l);
		let r = t.get(n);
		r !== void 0 && (t.delete(n), r.dispose());
	}
	function u(e) {
		let t = e.target;
		t.removeEventListener("dispose", u);
		let r = n.get(t);
		r !== void 0 && (n.delete(t), r.dispose());
	}
	function d() {
		t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r !== null && (r.dispose(), r = null);
	}
	return {
		get: i,
		dispose: d
	};
}
function Oc(e) {
	let t = {};
	function n(n) {
		if (t[n] !== void 0) return t[n];
		let r = e.getExtension(n);
		return t[n] = r, r;
	}
	return {
		has: function(e) {
			return n(e) !== null;
		},
		init: function() {
			n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
		},
		get: function(e) {
			let t = n(e);
			return t === null && Ze("WebGLRenderer: " + e + " extension not supported."), t;
		}
	};
}
function kc(e, t, n, r) {
	let i = {}, a = /* @__PURE__ */ new WeakMap(), o = new FinalizationRegistry((e) => delete i[e]);
	function s(e) {
		c(e.target);
	}
	function c(e) {
		e.index !== null && t.remove(e.index);
		for (let n in e.attributes) t.remove(e.attributes[n]);
		e.removeEventListener("dispose", s), delete i[e.id], o.unregister(e);
		let c = a.get(e);
		c && (t.remove(c), a.delete(e)), r.releaseStatesOfGeometry(e), e.isInstancedBufferGeometry === !0 && delete e._maxInstanceCount, n.memory.geometries--;
	}
	function l(e, t) {
		return i[t.id] === void 0 && (t.addEventListener("dispose", s), i[t.id] = new WeakRef(t), o.register(t, t.id, t), n.memory.geometries++), t;
	}
	function u(n) {
		let r = n.attributes;
		for (let n in r) t.update(r[n], e.ARRAY_BUFFER);
	}
	function d(e) {
		let n = e.index, r = e.attributes.position, i = 0;
		if (r === void 0) return;
		let o = n === null ? r.array.length / 3 - 1 : n.array.length, s = new (r.count >= 65535 ? hr : mr)(Math.ceil(o / 3) * 6, 1), c = s.array;
		if (n !== null) {
			let e = n.array;
			i = n.version;
			for (let t = 0, n = 0; t < o; t += 3) {
				let r = e[t + 0], i = e[t + 1], a = e[t + 2];
				c[n++] = r, c[n++] = i, c[n++] = i, c[n++] = a, c[n++] = a, c[n++] = r;
			}
		} else {
			i = r.version;
			for (let e = 0, t = 0; e < o; e += 3) {
				let n = e + 0, r = e + 1, i = e + 2;
				c[t++] = n, c[t++] = r, c[t++] = r, c[t++] = i, c[t++] = i, c[t++] = n;
			}
		}
		s.version = i;
		let l = a.get(e);
		l && t.remove(l), a.set(e, s);
	}
	function f(e) {
		let t = a.get(e);
		if (t) {
			let n = e.index;
			n !== null && t.version < n.version && d(e);
		} else d(e);
		return a.get(e);
	}
	function p() {
		for (let e in i) {
			let t = i[e].deref();
			t !== void 0 && c(t);
		}
	}
	return {
		get: l,
		update: u,
		getWireframeAttribute: f,
		dispose: p
	};
}
function Ac(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	let a, o;
	function s(e) {
		a = e.type, o = e.bytesPerElement;
	}
	function c(t, i) {
		e.drawElements(r, i, a, t * o), n.update(i, r, 1);
	}
	function l(t, i, s) {
		s !== 0 && (e.drawElementsInstanced(r, i, a, t * o, s), n.update(i, r, s));
	}
	function u(e, i, o) {
		if (o === 0) return;
		t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r, i, 0, a, e, 0, o);
		let s = 0;
		for (let e = 0; e < o; e++) s += i[e];
		n.update(s, r, 1);
	}
	this.setMode = i, this.setIndex = s, this.render = c, this.renderInstances = l, this.renderMultiDraw = u;
}
function jc(e) {
	let t = {
		geometries: 0,
		textures: 0
	}, n = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};
	function r(t, r, i) {
		switch (n.calls++, r) {
			case e.TRIANGLES:
				n.triangles += t / 3 * i;
				break;
			case e.LINES:
				n.lines += t / 2 * i;
				break;
			case e.LINE_STRIP:
				n.lines += i * (t - 1);
				break;
			case e.LINE_LOOP:
				n.lines += i * t;
				break;
			case e.POINTS:
				n.points += i * t;
				break;
			default: H("WebGLInfo: Unknown draw mode:", r);
		}
	}
	function i() {
		n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
	}
	return {
		memory: t,
		render: n,
		programs: null,
		autoReset: !0,
		reset: i,
		update: r
	};
}
function Mc(e, t, n) {
	let r = /* @__PURE__ */ new WeakMap(), i = new Gt();
	function a(a, o, s) {
		let c = a.morphTargetInfluences, l = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = l === void 0 ? 0 : l.length, d = r.get(o);
		if (d === void 0 || d.count !== u) {
			d !== void 0 && d.texture.dispose();
			let e = o.morphAttributes.position !== void 0, n = o.morphAttributes.normal !== void 0, a = o.morphAttributes.color !== void 0, s = o.morphAttributes.position || [], c = o.morphAttributes.normal || [], l = o.morphAttributes.color || [], f = 0;
			e === !0 && (f = 1), n === !0 && (f = 2), a === !0 && (f = 3);
			let p = o.attributes.position.count * f, m = 1;
			p > t.maxTextureSize && (m = Math.ceil(p / t.maxTextureSize), p = t.maxTextureSize);
			let h = new Float32Array(p * m * 4 * u), g = new Jt(h, p, m, u);
			g.type = _, g.needsUpdate = !0;
			let v = f * 4;
			for (let t = 0; t < u; t++) {
				let r = s[t], o = c[t], u = l[t], d = p * m * 4 * t;
				for (let t = 0; t < r.count; t++) {
					let s = t * v;
					e === !0 && (i.fromBufferAttribute(r, t), h[d + s + 0] = i.x, h[d + s + 1] = i.y, h[d + s + 2] = i.z, h[d + s + 3] = 0), n === !0 && (i.fromBufferAttribute(o, t), h[d + s + 4] = i.x, h[d + s + 5] = i.y, h[d + s + 6] = i.z, h[d + s + 7] = 0), a === !0 && (i.fromBufferAttribute(u, t), h[d + s + 8] = i.x, h[d + s + 9] = i.y, h[d + s + 10] = i.z, h[d + s + 11] = u.itemSize === 4 ? i.w : 1);
				}
			}
			d = {
				count: u,
				texture: g,
				size: new W(p, m)
			}, r.set(o, d);
			function y() {
				g.dispose(), r.delete(o), o.removeEventListener("dispose", y);
			}
			o.addEventListener("dispose", y);
		}
		if (a.isInstancedMesh === !0 && a.morphTexture !== null) s.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
		else {
			let t = 0;
			for (let e = 0; e < c.length; e++) t += c[e];
			let n = o.morphTargetsRelative ? 1 : 1 - t;
			s.getUniforms().setValue(e, "morphTargetBaseInfluence", n), s.getUniforms().setValue(e, "morphTargetInfluences", c);
		}
		s.getUniforms().setValue(e, "morphTargetsTexture", d.texture, n), s.getUniforms().setValue(e, "morphTargetsTextureSize", d.size);
	}
	return { update: a };
}
function Nc(e, t, n, r, i) {
	let a = /* @__PURE__ */ new WeakMap();
	function o(r) {
		let o = i.render.frame, s = r.geometry, l = t.get(r, s);
		if (a.get(l) !== o && (t.update(l), a.set(l, o)), r.isInstancedMesh && (r.hasEventListener("dispose", c) === !1 && r.addEventListener("dispose", c), a.get(r) !== o && (n.update(r.instanceMatrix, e.ARRAY_BUFFER), r.instanceColor !== null && n.update(r.instanceColor, e.ARRAY_BUFFER), a.set(r, o))), r.isSkinnedMesh) {
			let e = r.skeleton;
			a.get(e) !== o && (e.update(), a.set(e, o));
		}
		return l;
	}
	function s() {
		a = /* @__PURE__ */ new WeakMap();
	}
	function c(e) {
		let t = e.target;
		t.removeEventListener("dispose", c), r.releaseStatesOfObject(t), n.remove(t.instanceMatrix), t.instanceColor !== null && n.remove(t.instanceColor);
	}
	return {
		update: o,
		dispose: s
	};
}
var Pc = {
	1: "LINEAR_TONE_MAPPING",
	2: "REINHARD_TONE_MAPPING",
	3: "CINEON_TONE_MAPPING",
	4: "ACES_FILMIC_TONE_MAPPING",
	6: "AGX_TONE_MAPPING",
	7: "NEUTRAL_TONE_MAPPING",
	5: "CUSTOM_TONE_MAPPING"
};
function Fc(e, t, n, r, i, a) {
	let o = new qt(t, n, {
		type: e,
		depthBuffer: i,
		stencilBuffer: a,
		samples: r ? 4 : 0,
		storeMultisampledDepthBuffer: !1,
		storeMultisampledStencilBuffer: !1,
		resolveDepthBuffer: !1,
		resolveStencilBuffer: !1
	}), s = null, c = null, l = null, u = new Dr();
	u.setAttribute("position", new Y([
		-1,
		3,
		0,
		-1,
		-1,
		0,
		3,
		-1,
		0
	], 3)), u.setAttribute("uv", new Y([
		0,
		2,
		0,
		0,
		2,
		0
	], 2));
	let d = new No({
		uniforms: { tDiffuse: { value: null } },
		vertexShader: "\n			precision highp float;\n\n			uniform mat4 modelViewMatrix;\n			uniform mat4 projectionMatrix;\n\n			attribute vec3 position;\n			attribute vec2 uv;\n\n			varying vec2 vUv;\n\n			void main() {\n				vUv = uv;\n				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n			}",
		fragmentShader: "\n			precision highp float;\n\n			uniform sampler2D tDiffuse;\n\n			varying vec2 vUv;\n\n			#include <tonemapping_pars_fragment>\n			#include <colorspace_pars_fragment>\n\n			void main() {\n				gl_FragColor = texture2D( tDiffuse, vUv );\n\n				#ifdef LINEAR_TONE_MAPPING\n					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n				#elif defined( REINHARD_TONE_MAPPING )\n					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n				#elif defined( CINEON_TONE_MAPPING )\n					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n				#elif defined( ACES_FILMIC_TONE_MAPPING )\n					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n				#elif defined( AGX_TONE_MAPPING )\n					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n				#elif defined( NEUTRAL_TONE_MAPPING )\n					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n				#elif defined( CUSTOM_TONE_MAPPING )\n					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n				#endif\n\n				#ifdef SRGB_TRANSFER\n					gl_FragColor = sRGBTransferOETF( gl_FragColor );\n				#endif\n			}",
		depthTest: !1,
		depthWrite: !1
	}), f = new _i(u, d), p = new _s(-1, 1, 1, -1, 0, 1), m = null, h = null, g = !1, _, y = null, b = [], S = !1;
	this.setSize = function(e, t) {
		o.setSize(e, t), s !== null && s.setSize(e, t), c !== null && c.setSize(e, t);
		for (let n = 0; n < b.length; n++) {
			let r = b[n];
			r.setSize && r.setSize(e, t);
		}
	}, this.setEffects = function(e) {
		b = e, S = b.length > 0 && b[0].isRenderPass === !0;
		let t = o.width, n = o.height;
		b.length > 0 && s === null && (s = new qt(t, n, {
			type: v,
			depthBuffer: !1,
			stencilBuffer: !1
		}), c = new qt(t, n, {
			type: v,
			depthBuffer: !1,
			stencilBuffer: !1
		}));
		let r = i === !0 && b.some((e) => e.needsDepthTexture === !0);
		r !== (o.depthTexture !== null) && (r === !0 && l === null && (l = new Hi(t, n), a === !0 && (l.format = O, l.type = x)), o.dispose(), o.depthTexture = r ? l : null, o.resolveDepthBuffer = r, o.storeMultisampledDepthBuffer = r);
		for (let e = 0; e < b.length; e++) {
			let i = b[e];
			i.setSize && i.setSize(t, n), r && i.needsDepthTexture === !0 && i.setDepthTexture && i.setDepthTexture(l);
		}
	}, this.begin = function(e, t) {
		if (g || e.toneMapping === 0 && b.length === 0) return !1;
		if (y = t, t !== null) {
			let e = t.width, n = t.height;
			(o.width !== e || o.height !== n) && this.setSize(e, n);
		}
		return S === !1 && e.setRenderTarget(o), _ = e.toneMapping, e.toneMapping = 0, !0;
	}, this.hasRenderPass = function() {
		return S;
	}, this.end = function(e, t) {
		e.toneMapping = _, g = !0;
		let n = o, r = s;
		for (let i = 0; i < b.length; i++) {
			let a = b[i];
			a.enabled !== !1 && (a.render(e, r, n, t), a.needsSwap !== !1 && (n = r, r = r === s ? c : s));
		}
		if (m !== e.outputColorSpace || h !== e.toneMapping) {
			m = e.outputColorSpace, h = e.toneMapping, d.defines = {}, q.getTransfer(m) === "srgb" && (d.defines.SRGB_TRANSFER = "");
			let t = Pc[h];
			t && (d.defines[t] = ""), d.needsUpdate = !0;
		}
		d.uniforms.tDiffuse.value = n.texture, e.setRenderTarget(y), e.render(f, p), y = null, g = !1;
	}, this.isCompositing = function() {
		return g;
	}, this.dispose = function() {
		o.dispose(), s !== null && s.dispose(), c !== null && c.dispose(), u.dispose(), d.dispose();
	};
}
var Ic = /*@__PURE__*/ new Wt(), Lc = /*@__PURE__*/ new Hi(1, 1), Rc = /*@__PURE__*/ new Ui(1), zc = /*@__PURE__*/ new Jt(), Bc = /*@__PURE__*/ new Yt(), Vc = /*@__PURE__*/ new Bi(), Hc = [], Uc = [], Wc = /* @__PURE__ */ new Float32Array(16), Gc = /* @__PURE__ */ new Float32Array(9), Kc = /* @__PURE__ */ new Float32Array(4);
function qc(e, t, n) {
	let r = e[0];
	if (r <= 0 || r > 0) return e;
	let i = t * n, a = Hc[i];
	if (a === void 0 && (a = new Float32Array(i), Hc[i] = a), t !== 0) {
		r.toArray(a, 0);
		for (let r = 1, i = 0; r !== t; ++r) i += n, e[r].toArray(a, i);
	}
	return a;
}
function Jc(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Yc(e, t) {
	for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function Xc(e, t) {
	let n = Uc[t];
	n === void 0 && (n = new Int32Array(t), Uc[t] = n);
	for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
	return n;
}
function Zc(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function Qc(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Jc(n, t)) return;
		e.uniform2fv(this.addr, t), Yc(n, t);
	}
}
function $c(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else if (t.r !== void 0) (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
	else {
		if (Jc(n, t)) return;
		e.uniform3fv(this.addr, t), Yc(n, t);
	}
}
function el(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Jc(n, t)) return;
		e.uniform4fv(this.addr, t), Yc(n, t);
	}
}
function tl(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Jc(n, t)) return;
		e.uniformMatrix2fv(this.addr, !1, t), Yc(n, t);
	} else {
		if (Jc(n, r)) return;
		Kc.set(r), e.uniformMatrix2fv(this.addr, !1, Kc), Yc(n, r);
	}
}
function nl(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Jc(n, t)) return;
		e.uniformMatrix3fv(this.addr, !1, t), Yc(n, t);
	} else {
		if (Jc(n, r)) return;
		Gc.set(r), e.uniformMatrix3fv(this.addr, !1, Gc), Yc(n, r);
	}
}
function rl(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Jc(n, t)) return;
		e.uniformMatrix4fv(this.addr, !1, t), Yc(n, t);
	} else {
		if (Jc(n, r)) return;
		Wc.set(r), e.uniformMatrix4fv(this.addr, !1, Wc), Yc(n, r);
	}
}
function il(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function al(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Jc(n, t)) return;
		e.uniform2iv(this.addr, t), Yc(n, t);
	}
}
function ol(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (Jc(n, t)) return;
		e.uniform3iv(this.addr, t), Yc(n, t);
	}
}
function sl(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Jc(n, t)) return;
		e.uniform4iv(this.addr, t), Yc(n, t);
	}
}
function cl(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function ll(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Jc(n, t)) return;
		e.uniform2uiv(this.addr, t), Yc(n, t);
	}
}
function ul(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (Jc(n, t)) return;
		e.uniform3uiv(this.addr, t), Yc(n, t);
	}
}
function dl(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Jc(n, t)) return;
		e.uniform4uiv(this.addr, t), Yc(n, t);
	}
}
function fl(e) {
	return e.version === 0 && (e.compareFunction = 519, e.needsUpdate = !0), e;
}
function pl(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i);
	let a;
	a = this.type === e.SAMPLER_2D_SHADOW ? fl(Lc) : Ic, n.setTexture2D(t || a, i);
}
function ml(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || Bc, i);
}
function hl(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i);
	let a;
	a = this.type === e.SAMPLER_CUBE_SHADOW ? fl(Rc) : Vc, n.setTextureCube(t || a, i);
}
function gl(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || zc, i);
}
function _l(e) {
	switch (e) {
		case 5126: return Zc;
		case 35664: return Qc;
		case 35665: return $c;
		case 35666: return el;
		case 35674: return tl;
		case 35675: return nl;
		case 35676: return rl;
		case 5124:
		case 35670: return il;
		case 35667:
		case 35671: return al;
		case 35668:
		case 35672: return ol;
		case 35669:
		case 35673: return sl;
		case 5125: return cl;
		case 36294: return ll;
		case 36295: return ul;
		case 36296: return dl;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return pl;
		case 35679:
		case 36299:
		case 36307: return ml;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return hl;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return gl;
	}
}
function vl(e, t) {
	e.uniform1fv(this.addr, t);
}
function yl(e, t) {
	let n = qc(t, this.size, 2);
	e.uniform2fv(this.addr, n);
}
function bl(e, t) {
	let n = qc(t, this.size, 3);
	e.uniform3fv(this.addr, n);
}
function xl(e, t) {
	let n = qc(t, this.size, 4);
	e.uniform4fv(this.addr, n);
}
function Sl(e, t) {
	let n = qc(t, this.size, 4);
	e.uniformMatrix2fv(this.addr, !1, n);
}
function Cl(e, t) {
	let n = qc(t, this.size, 9);
	e.uniformMatrix3fv(this.addr, !1, n);
}
function wl(e, t) {
	let n = qc(t, this.size, 16);
	e.uniformMatrix4fv(this.addr, !1, n);
}
function Tl(e, t) {
	e.uniform1iv(this.addr, t);
}
function El(e, t) {
	e.uniform2iv(this.addr, t);
}
function Dl(e, t) {
	e.uniform3iv(this.addr, t);
}
function Ol(e, t) {
	e.uniform4iv(this.addr, t);
}
function kl(e, t) {
	e.uniform1uiv(this.addr, t);
}
function Al(e, t) {
	e.uniform2uiv(this.addr, t);
}
function jl(e, t) {
	e.uniform3uiv(this.addr, t);
}
function Ml(e, t) {
	e.uniform4uiv(this.addr, t);
}
function Nl(e, t, n) {
	let r = this.cache, i = t.length, a = Xc(n, i);
	Jc(r, a) || (e.uniform1iv(this.addr, a), Yc(r, a));
	let o;
	o = this.type === e.SAMPLER_2D_SHADOW ? fl(Lc) : Ic;
	for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || o, a[e]);
}
function Pl(e, t, n) {
	let r = this.cache, i = t.length, a = Xc(n, i);
	Jc(r, a) || (e.uniform1iv(this.addr, a), Yc(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || Bc, a[e]);
}
function Fl(e, t, n) {
	let r = this.cache, i = t.length, a = Xc(n, i);
	Jc(r, a) || (e.uniform1iv(this.addr, a), Yc(r, a));
	let o;
	o = this.type === e.SAMPLER_CUBE_SHADOW ? fl(Rc) : Vc;
	for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || o, a[e]);
}
function Il(e, t, n) {
	let r = this.cache, i = t.length, a = Xc(n, i);
	Jc(r, a) || (e.uniform1iv(this.addr, a), Yc(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || zc, a[e]);
}
function Ll(e) {
	switch (e) {
		case 5126: return vl;
		case 35664: return yl;
		case 35665: return bl;
		case 35666: return xl;
		case 35674: return Sl;
		case 35675: return Cl;
		case 35676: return wl;
		case 5124:
		case 35670: return Tl;
		case 35667:
		case 35671: return El;
		case 35668:
		case 35672: return Dl;
		case 35669:
		case 35673: return Ol;
		case 5125: return kl;
		case 36294: return Al;
		case 36295: return jl;
		case 36296: return Ml;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return Nl;
		case 35679:
		case 36299:
		case 36307: return Pl;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return Fl;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return Il;
	}
}
var Rl = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = _l(t.type);
	}
}, zl = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Ll(t.type);
	}
}, Bl = class {
	constructor(e) {
		this.id = e, this.seq = [], this.map = {};
	}
	setValue(e, t, n) {
		let r = this.seq;
		for (let i = 0, a = r.length; i !== a; ++i) {
			let a = r[i];
			a.setValue(e, t[a.id], n);
		}
	}
}, Vl = /(\w+)(\])?(\[|\.)?/g;
function Hl(e, t) {
	e.seq.push(t), e.map[t.id] = t;
}
function Ul(e, t, n) {
	let r = e.name, i = r.length;
	for (Vl.lastIndex = 0;;) {
		let a = Vl.exec(r), o = Vl.lastIndex, s = a[1], c = a[2] === "]", l = a[3];
		if (c && (s |= 0), l === void 0 || l === "[" && o + 2 === i) {
			Hl(n, l === void 0 ? new Rl(s, e, t) : new zl(s, e, t));
			break;
		}
		{
			let e = n.map[s];
			e === void 0 && (e = new Bl(s), Hl(n, e)), n = e;
		}
	}
}
var Wl = class {
	constructor(e, t) {
		this.seq = [], this.map = {};
		let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
		for (let r = 0; r < n; ++r) {
			let n = e.getActiveUniform(t, r);
			Ul(n, e.getUniformLocation(t, n.name), this);
		}
		let r = [], i = [];
		for (let t of this.seq) t.type === e.SAMPLER_2D_SHADOW || t.type === e.SAMPLER_CUBE_SHADOW || t.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(t) : i.push(t);
		r.length > 0 && (this.seq = r.concat(i));
	}
	setValue(e, t, n, r) {
		let i = this.map[t];
		i !== void 0 && i.setValue(e, n, r);
	}
	setOptional(e, t, n) {
		let r = t[n];
		r !== void 0 && this.setValue(e, n, r);
	}
	static upload(e, t, n, r) {
		for (let i = 0, a = t.length; i !== a; ++i) {
			let a = t[i], o = n[a.id];
			o.needsUpdate !== !1 && a.setValue(e, o.value, r);
		}
	}
	static seqWithValue(e, t) {
		let n = [];
		for (let r = 0, i = e.length; r !== i; ++r) {
			let i = e[r];
			i.id in t && n.push(i);
		}
		return n;
	}
};
function Gl(e, t, n) {
	let r = e.createShader(t);
	return e.shaderSource(r, n), e.compileShader(r), r;
}
var Kl = 37297, ql = 0;
function Jl(e, t) {
	let n = e.split("\n"), r = [], i = Math.max(t - 6, 0), a = Math.min(t + 6, n.length);
	for (let e = i; e < a; e++) {
		let i = e + 1;
		r.push(`${i === t ? ">" : " "} ${i}: ${n[e]}`);
	}
	return r.join("\n");
}
var Yl = /*@__PURE__*/ new K();
function Xl(e) {
	q._getMatrix(Yl, q.workingColorSpace, e);
	let t = `mat3( ${Yl.elements.map((e) => e.toFixed(4))} )`;
	switch (q.getTransfer(e)) {
		case ze: return [t, "LinearTransferOETF"];
		case Be: return [t, "sRGBTransferOETF"];
		default: return V("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
	}
}
function Zl(e, t, n) {
	let r = e.getShaderParameter(t, e.COMPILE_STATUS), i = (e.getShaderInfoLog(t) || "").trim();
	if (r && i === "") return "";
	let a = /ERROR: 0:(\d+)/.exec(i);
	if (a) {
		let r = parseInt(a[1]);
		return n.toUpperCase() + "\n\n" + i + "\n\n" + Jl(e.getShaderSource(t), r);
	}
	return i;
}
function Ql(e, t) {
	let n = Xl(t);
	return [
		`vec4 ${e}( vec4 value ) {`,
		`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,
		"}"
	].join("\n");
}
var $l = {
	1: "Linear",
	2: "Reinhard",
	3: "Cineon",
	4: "ACESFilmic",
	6: "AgX",
	7: "Neutral",
	5: "Custom"
};
function eu(e, t) {
	let n = $l[t];
	return n === void 0 ? (V("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
var tu = /*@__PURE__*/ new G();
function nu() {
	return q.getLuminanceCoefficients(tu), [
		"float luminance( const in vec3 rgb ) {",
		`	const vec3 weights = vec3( ${tu.x.toFixed(4)}, ${tu.y.toFixed(4)}, ${tu.z.toFixed(4)} );`,
		"	return dot( weights, rgb );",
		"}"
	].join("\n");
}
function ru(e) {
	return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(ou).join("\n");
}
function iu(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r !== !1 && t.push("#define " + n + " " + r);
	}
	return t.join("\n");
}
function au(e, t) {
	let n = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
	for (let i = 0; i < r; i++) {
		let r = e.getActiveAttrib(t, i), a = r.name, o = 1;
		r.type === e.FLOAT_MAT2 && (o = 2), r.type === e.FLOAT_MAT3 && (o = 3), r.type === e.FLOAT_MAT4 && (o = 4), n[a] = {
			type: r.type,
			location: e.getAttribLocation(t, a),
			locationSize: o
		};
	}
	return n;
}
function ou(e) {
	return e !== "";
}
function su(e, t) {
	let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
	return e.replace(/NUM_SUN_LIGHTS/g, t.numSunLights).replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g, t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g, t.numLightProbeGrids);
}
function cu(e, t) {
	return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var lu = /^[ \t]*#include +<([\w\d./]+)>/gm;
function uu(e) {
	return e.replace(lu, du);
}
function du(e, t) {
	let n = X[t];
	if (n === void 0) throw Error("THREE.WebGLProgram: Can not resolve #include <" + t + ">");
	return uu(n);
}
var fu = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function pu(e) {
	return e.replace(fu, mu);
}
function mu(e, t, n, r) {
	let i = "";
	for (let e = parseInt(t); e < parseInt(n); e++) i += r.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
	return i;
}
function hu(e) {
	let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
	return e.precision === "highp" ? t += "\n#define HIGH_PRECISION" : e.precision === "mediump" ? t += "\n#define MEDIUM_PRECISION" : e.precision === "lowp" && (t += "\n#define LOW_PRECISION"), t;
}
var gu = {
	1: "SHADOWMAP_TYPE_PCF",
	3: "SHADOWMAP_TYPE_VSM"
};
function _u(e) {
	return gu[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
var vu = { 302: "ENVMAP_MODE_REFRACTION" };
function yu(e) {
	return e.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : vu[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
var bu = {
	0: "ENVMAP_BLENDING_MULTIPLY",
	1: "ENVMAP_BLENDING_MIX",
	2: "ENVMAP_BLENDING_ADD"
};
function xu(e) {
	return e.envMap === !1 ? "ENVMAP_BLENDING_NONE" : bu[e.combine] || "ENVMAP_BLENDING_NONE";
}
function Su(e, t, n, r) {
	let i = e.getContext(), a = n.defines, o = n.vertexShader, s = n.fragmentShader, c = _u(n), l = n.envMapPMREM === !0 ? "ENVMAP_TYPE_PMREM" : "ENVMAP_TYPE_CUBE", u = yu(n), d = xu(n), f = ru(n), p = iu(a), m = i.createProgram(), h, g, _ = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
	n.isRawShaderMaterial ? (h = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		p
	].filter(ou).join("\n"), h.length > 0 && (h += "\n"), g = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		p
	].filter(ou).join("\n"), g.length > 0 && (g += "\n")) : (h = [
		hu(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		p,
		n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
		n.batching ? "#define USE_BATCHING" : "",
		n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
		n.instancing ? "#define USE_INSTANCING" : "",
		n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
		n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.map ? "#define USE_MAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + u : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.diffuseRoughnessMap ? "#define USE_DIFFUSE_ROUGHNESSMAP" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.mapUv ? "#define MAP_UV " + n.mapUv : "",
		n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
		n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
		n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
		n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
		n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
		n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
		n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "",
		n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
		n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
		n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "",
		n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
		n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "",
		n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "",
		n.diffuseRoughnessMapUv ? "#define DIFFUSE_ROUGHNESSMAP_UV " + n.diffuseRoughnessMapUv : "",
		n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "",
		n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "",
		n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "",
		n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "",
		n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
		n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "",
		n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "",
		n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "",
		n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexNormals ? "#define HAS_NORMAL" : "",
		n.vertexColors ? "#define USE_COLOR" : "",
		n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.skinning ? "#define USE_SKINNING" : "",
		n.morphTargets ? "#define USE_MORPHTARGETS" : "",
		n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
		n.morphColors ? "#define USE_MORPHCOLORS" : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 modelMatrix;",
		"uniform mat4 modelViewMatrix;",
		"uniform mat4 projectionMatrix;",
		"uniform mat4 viewMatrix;",
		"uniform mat3 normalMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		"#ifdef USE_INSTANCING",
		"	attribute mat4 instanceMatrix;",
		"#endif",
		"#ifdef USE_INSTANCING_COLOR",
		"	attribute vec3 instanceColor;",
		"#endif",
		"#ifdef USE_INSTANCING_MORPH",
		"	uniform sampler2D morphTexture;",
		"#endif",
		"attribute vec3 position;",
		"attribute vec3 normal;",
		"attribute vec2 uv;",
		"#ifdef USE_UV1",
		"	attribute vec2 uv1;",
		"#endif",
		"#ifdef USE_UV2",
		"	attribute vec2 uv2;",
		"#endif",
		"#ifdef USE_UV3",
		"	attribute vec2 uv3;",
		"#endif",
		"#ifdef USE_TANGENT",
		"	attribute vec4 tangent;",
		"#endif",
		"#if defined( USE_COLOR_ALPHA )",
		"	attribute vec4 color;",
		"#elif defined( USE_COLOR )",
		"	attribute vec3 color;",
		"#endif",
		"#ifdef USE_SKINNING",
		"	attribute vec4 skinIndex;",
		"	attribute vec4 skinWeight;",
		"#endif",
		"\n"
	].filter(ou).join("\n"), g = [
		hu(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		p,
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
		n.map ? "#define USE_MAP" : "",
		n.matcap ? "#define USE_MATCAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + l : "",
		n.envMap ? "#define " + u : "",
		n.envMap ? "#define " + d : "",
		n.envMapPMREM ? "#define ENVMAP_MAX_LOD " + n.envMapMaxLod + ".0" : "",
		n.envMapPMREM ? "#define ENVMAP_SIZE " + n.envMapSize + ".0" : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoat ? "#define USE_CLEARCOAT" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.diffuseRoughness ? "#define USE_DIFFUSE_ROUGHNESS" : "",
		n.diffuseRoughnessMap ? "#define USE_DIFFUSE_ROUGHNESSMAP" : "",
		n.dispersion ? "#define USE_DISPERSION" : "",
		n.retroreflection ? "#define USE_RETROREFLECTION" : "",
		n.iridescence ? "#define USE_IRIDESCENCE" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaTest ? "#define USE_ALPHATEST" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.sheen ? "#define USE_SHEEN" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
		n.vertexAlphas || n.batchingColor ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.gradientMap ? "#define USE_GRADIENTMAP" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + c : "",
		n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
		n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 viewMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		n.toneMapping === 0 ? "" : "#define TONE_MAPPING",
		n.toneMapping === 0 ? "" : X.tonemapping_pars_fragment,
		n.toneMapping === 0 ? "" : eu("toneMapping", n.toneMapping),
		n.dithering ? "#define DITHERING" : "",
		n.opaque ? "#define OPAQUE" : "",
		X.colorspace_pars_fragment,
		Ql("linearToOutputTexel", n.outputColorSpace),
		nu(),
		n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
		"\n"
	].filter(ou).join("\n")), o = uu(o), o = su(o, n), o = cu(o, n), s = uu(s), s = su(s, n), s = cu(s, n), o = pu(o), s = pu(s), n.isRawShaderMaterial !== !0 && (_ = "#version 300 es\n", h = [
		f,
		"#define attribute in",
		"#define varying out",
		"#define texture2D texture"
	].join("\n") + "\n" + h, g = [
		"#define varying in",
		n.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
		n.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
		"#define gl_FragDepthEXT gl_FragDepth",
		"#define texture2D texture",
		"#define textureCube texture",
		"#define texture2DProj textureProj",
		"#define texture2DLodEXT textureLod",
		"#define texture2DProjLodEXT textureProjLod",
		"#define textureCubeLodEXT textureLod",
		"#define texture2DGradEXT textureGrad",
		"#define texture2DProjGradEXT textureProjGrad",
		"#define textureCubeGradEXT textureGrad"
	].join("\n") + "\n" + g);
	let v = _ + h + o, y = _ + g + s, b = Gl(i, i.VERTEX_SHADER, v), x = Gl(i, i.FRAGMENT_SHADER, y);
	i.attachShader(m, b), i.attachShader(m, x), n.index0AttributeName === void 0 ? n.hasPositionAttribute === !0 && i.bindAttribLocation(m, 0, "position") : i.bindAttribLocation(m, 0, n.index0AttributeName), i.linkProgram(m);
	function S(t) {
		if (e.debug.checkShaderErrors) {
			let n = i.getProgramInfoLog(m) || "", r = i.getShaderInfoLog(b) || "", a = i.getShaderInfoLog(x) || "", o = n.trim(), s = r.trim(), c = a.trim(), l = !0, u = !0;
			if (i.getProgramParameter(m, i.LINK_STATUS) === !1) {
				if (l = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(i, m, b, x);
				else {
					let e = Zl(i, b, "vertex"), n = Zl(i, x, "fragment");
					H("WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(m, i.VALIDATE_STATUS) + "\n\nMaterial Name: " + t.name + "\nMaterial Type: " + t.type + "\n\nProgram Info Log: " + o + "\n" + e + "\n" + n);
				}
			} else o === "" ? (s === "" || c === "") && (u = !1) : V("WebGLProgram: Program Info Log:", o);
			u && (t.diagnostics = {
				runnable: l,
				programLog: o,
				vertexShader: {
					log: s,
					prefix: h
				},
				fragmentShader: {
					log: c,
					prefix: g
				}
			});
		}
		i.deleteShader(b), i.deleteShader(x), C = new Wl(i, m), w = au(i, m);
	}
	let C;
	this.getUniforms = function() {
		return C === void 0 && S(this), C;
	};
	let w;
	this.getAttributes = function() {
		return w === void 0 && S(this), w;
	};
	let T = n.rendererExtensionParallelShaderCompile === !1;
	return this.isReady = function() {
		return T === !1 && (T = i.getProgramParameter(m, Kl)), T;
	}, this.destroy = function() {
		r.releaseStatesOfProgram(this), i.deleteProgram(m), this.program = void 0;
	}, this.type = n.shaderType, this.name = n.shaderName, this.id = ql++, this.cacheKey = t, this.usedTimes = 1, this.program = m, this.vertexShader = b, this.fragmentShader = x, this;
}
var Cu = 0, wu = class {
	constructor() {
		this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
	}
	update(e, t, n) {
		let r = this._getShaderCacheForMaterial(e);
		return r.has(t) === !1 && (r.add(t), t.usedTimes++), r.has(n) === !1 && (r.add(n), n.usedTimes++), this;
	}
	remove(e) {
		let t = this.materialCache.get(e);
		for (let e of t) e.usedTimes--, e.usedTimes === 0 && this.shaderCache.delete(e.code);
		return this.materialCache.delete(e), this;
	}
	getVertexShaderStage(e) {
		return this._getShaderStage(e.vertexShader);
	}
	getFragmentShaderStage(e) {
		return this._getShaderStage(e.fragmentShader);
	}
	dispose() {
		this.shaderCache.clear(), this.materialCache.clear();
	}
	_getShaderCacheForMaterial(e) {
		let t = this.materialCache, n = t.get(e);
		return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
	}
	_getShaderStage(e) {
		let t = this.shaderCache, n = t.get(e);
		return n === void 0 && (n = new Tu(e), t.set(e, n)), n;
	}
}, Tu = class {
	constructor(e) {
		this.id = Cu++, this.code = e, this.usedTimes = 0;
	}
};
function Eu(e) {
	return e === 1030 || e === 37490 || e === 36285;
}
function Du(e, t, n, r, i, a) {
	let o = new cn(), s = new wu(), c = /* @__PURE__ */ new Set(), l = [], u = /* @__PURE__ */ new Map(), d = r.logarithmicDepthBuffer, f = {
		MeshDepthMaterial: "depth",
		MeshDistanceMaterial: "distance",
		MeshNormalMaterial: "normal",
		MeshBasicMaterial: "basic",
		MeshLambertMaterial: "lambert",
		MeshPhongMaterial: "phong",
		MeshToonMaterial: "toon",
		MeshStandardMaterial: "physical",
		MeshPhysicalMaterial: "physical",
		MeshMatcapMaterial: "matcap",
		LineBasicMaterial: "basic",
		LineDashedMaterial: "dashed",
		PointsMaterial: "points",
		ShadowMaterial: "shadow",
		SpriteMaterial: "sprite"
	};
	function p(e) {
		return c.add(e), e === 0 ? "uv" : `uv${e}`;
	}
	function m(i, o, l, u, m, h) {
		let g = u.fog, _ = m.geometry, v = i.isMeshStandardMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial ? u.environment : null, y = i.isMeshStandardMaterial || i.isMeshLambertMaterial && !i.envMap || i.isMeshPhongMaterial && !i.envMap, b = t.get(i.envMap || v, y), x = f[i.type], S = r.precision;
		i.precision !== null && (S = r.getMaxPrecision(i.precision), S !== i.precision && V("WebGLProgram.getParameters:", i.precision, "not supported, using", S, "instead."));
		let C = _.morphAttributes.position || _.morphAttributes.normal || _.morphAttributes.color, w = C === void 0 ? 0 : C.length, T = 0;
		_.morphAttributes.position !== void 0 && (T = 1), _.morphAttributes.normal !== void 0 && (T = 2), _.morphAttributes.color !== void 0 && (T = 3);
		let E, D, O, k;
		if (x) {
			let e = tc[x];
			E = e.vertexShader, D = e.fragmentShader;
		} else {
			E = i.vertexShader, D = i.fragmentShader;
			let e = s.getVertexShaderStage(i), t = s.getFragmentShaderStage(i);
			s.update(i, e, t), O = e.id, k = t.id;
		}
		let A = e.getRenderTarget(), j = e.state.buffers.depth.getReversed(), ee = m.isInstancedMesh === !0, te = m.isBatchedMesh === !0, M = !!i.map, N = !!i.matcap, P = !!b, ne = P && b.isPMREMTexture === !0, F = !!i.aoMap, re = !!i.lightMap, ie = !!i.bumpMap && i.wireframe === !1, ae = !!i.normalMap, oe = !!i.displacementMap, se = !!i.emissiveMap, I = !!i.metalnessMap, ce = !!i.roughnessMap, le = i.anisotropy > 0, ue = i.clearcoat > 0, de = i.diffuseRoughness > 0, fe = i.dispersion > 0, pe = i.retroreflectivity > 0, me = i.iridescence > 0, he = i.sheen > 0, ge = i.transmission > 0, _e = le && !!i.anisotropyMap, ve = ue && !!i.clearcoatMap, ye = ue && !!i.clearcoatNormalMap, be = ue && !!i.clearcoatRoughnessMap, xe = de && !!i.diffuseRoughnessMap, Se = me && !!i.iridescenceMap, Ce = me && !!i.iridescenceThicknessMap, we = he && !!i.sheenColorMap, Te = he && !!i.sheenRoughnessMap, Ee = !!i.specularMap, De = !!i.specularColorMap, Oe = !!i.specularIntensityMap, ke = ge && !!i.transmissionMap, Ae = ge && !!i.thicknessMap, je = !!i.gradientMap, Me = !!i.alphaMap, L = i.alphaTest > 0, Ne = !!i.alphaHash, Pe = !!i.extensions, Fe = 0;
		i.toneMapped && (A === null || A.isXRRenderTarget === !0) && (Fe = e.toneMapping);
		let R = ne ? b.isCompressedCubeTexture ? b.image[0].mipmaps : b.mipmaps : null, Ie = {
			shaderID: x,
			shaderType: i.type,
			shaderName: i.name,
			vertexShader: E,
			fragmentShader: D,
			defines: i.defines,
			customVertexShaderID: O,
			customFragmentShaderID: k,
			isRawShaderMaterial: i.isRawShaderMaterial === !0,
			glslVersion: i.glslVersion,
			precision: S,
			batching: te,
			batchingColor: te && m._colorsTexture !== null,
			instancing: ee,
			instancingColor: ee && m.instanceColor !== null,
			instancingMorph: ee && m.morphTexture !== null,
			outputColorSpace: A === null ? e.outputColorSpace : A.isXRRenderTarget === !0 ? A.texture.colorSpace : q.workingColorSpace,
			alphaToCoverage: !!i.alphaToCoverage,
			map: M,
			matcap: N,
			envMap: P,
			envMapMode: P && b.mapping,
			envMapPMREM: ne,
			envMapMaxLod: ne ? R.length - 1 : null,
			envMapSize: ne ? R[0].width : null,
			aoMap: F,
			lightMap: re,
			bumpMap: ie,
			normalMap: ae,
			displacementMap: oe,
			emissiveMap: se,
			normalMapObjectSpace: ae && i.normalMapType === 1,
			normalMapTangentSpace: ae && i.normalMapType === 0,
			packedNormalMap: ae && i.normalMapType === 0 && Eu(i.normalMap.format),
			metalnessMap: I,
			roughnessMap: ce,
			anisotropy: le,
			anisotropyMap: _e,
			clearcoat: ue,
			clearcoatMap: ve,
			clearcoatNormalMap: ye,
			clearcoatRoughnessMap: be,
			diffuseRoughness: de,
			diffuseRoughnessMap: xe,
			dispersion: fe,
			retroreflection: pe,
			iridescence: me,
			iridescenceMap: Se,
			iridescenceThicknessMap: Ce,
			sheen: he,
			sheenColorMap: we,
			sheenRoughnessMap: Te,
			specularMap: Ee,
			specularColorMap: De,
			specularIntensityMap: Oe,
			transmission: ge,
			transmissionMap: ke,
			thicknessMap: Ae,
			gradientMap: je,
			opaque: i.transparent === !1 && i.blending === 1 && i.alphaToCoverage === !1,
			alphaMap: Me,
			alphaTest: L,
			alphaHash: Ne,
			combine: i.combine,
			mapUv: M && p(i.map.channel),
			aoMapUv: F && p(i.aoMap.channel),
			lightMapUv: re && p(i.lightMap.channel),
			bumpMapUv: ie && p(i.bumpMap.channel),
			normalMapUv: ae && p(i.normalMap.channel),
			displacementMapUv: oe && p(i.displacementMap.channel),
			emissiveMapUv: se && p(i.emissiveMap.channel),
			metalnessMapUv: I && p(i.metalnessMap.channel),
			roughnessMapUv: ce && p(i.roughnessMap.channel),
			anisotropyMapUv: _e && p(i.anisotropyMap.channel),
			clearcoatMapUv: ve && p(i.clearcoatMap.channel),
			clearcoatNormalMapUv: ye && p(i.clearcoatNormalMap.channel),
			clearcoatRoughnessMapUv: be && p(i.clearcoatRoughnessMap.channel),
			diffuseRoughnessMapUv: xe && p(i.diffuseRoughnessMap.channel),
			iridescenceMapUv: Se && p(i.iridescenceMap.channel),
			iridescenceThicknessMapUv: Ce && p(i.iridescenceThicknessMap.channel),
			sheenColorMapUv: we && p(i.sheenColorMap.channel),
			sheenRoughnessMapUv: Te && p(i.sheenRoughnessMap.channel),
			specularMapUv: Ee && p(i.specularMap.channel),
			specularColorMapUv: De && p(i.specularColorMap.channel),
			specularIntensityMapUv: Oe && p(i.specularIntensityMap.channel),
			transmissionMapUv: ke && p(i.transmissionMap.channel),
			thicknessMapUv: Ae && p(i.thicknessMap.channel),
			alphaMapUv: Me && p(i.alphaMap.channel),
			vertexTangents: !!_.attributes.tangent && (ae || le),
			vertexNormals: !!_.attributes.normal,
			vertexColors: i.vertexColors,
			vertexAlphas: i.vertexColors === !0 && !!_.attributes.color && _.attributes.color.itemSize === 4,
			pointsUvs: m.isPoints === !0 && !!_.attributes.uv && (M || Me),
			fog: !!g,
			useFog: i.fog === !0,
			fogExp2: !!g && g.isFogExp2,
			flatShading: i.wireframe === !1 && (i.flatShading === !0 || _.attributes.normal === void 0 && ae === !1 && (i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshPhysicalMaterial)),
			sizeAttenuation: i.sizeAttenuation === !0,
			logarithmicDepthBuffer: d,
			reversedDepthBuffer: j,
			skinning: m.isSkinnedMesh === !0,
			hasPositionAttribute: _.attributes.position !== void 0,
			morphTargets: _.morphAttributes.position !== void 0,
			morphNormals: _.morphAttributes.normal !== void 0,
			morphColors: _.morphAttributes.color !== void 0,
			morphTargetsCount: w,
			morphTextureStride: T,
			numSunLights: o.sun.length,
			numDirLights: o.directional.length,
			numPointLights: o.point.length,
			numSpotLights: o.spot.length,
			numSpotLightMaps: o.spotLightMap.length,
			numRectAreaLights: o.rectArea.length,
			numHemiLights: o.hemi.length,
			numSunLightShadows: o.sunShadowMap.length,
			numDirLightShadows: o.directionalShadowMap.length,
			numPointLightShadows: o.pointShadowMap.length,
			numSpotLightShadows: o.spotShadowMap.length,
			numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
			numLightProbes: o.numLightProbes,
			numLightProbeGrids: h.filter((e) => e.texture !== null).length,
			numClippingPlanes: a.numPlanes,
			numClipIntersection: a.numIntersection,
			dithering: i.dithering,
			shadowMapEnabled: e.shadowMap.enabled && l.length > 0,
			shadowMapType: e.shadowMap.type,
			toneMapping: Fe,
			decodeVideoTexture: M && i.map.isVideoTexture === !0 && q.getTransfer(i.map.colorSpace) === "srgb",
			decodeVideoTextureEmissive: se && i.emissiveMap.isVideoTexture === !0 && q.getTransfer(i.emissiveMap.colorSpace) === "srgb",
			premultipliedAlpha: i.premultipliedAlpha,
			doubleSided: i.side === 2,
			flipSided: i.side === 1,
			useDepthPacking: i.depthPacking >= 0,
			depthPacking: i.depthPacking || 0,
			index0AttributeName: i.index0AttributeName,
			extensionClipCullDistance: Pe && i.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
			extensionMultiDraw: (Pe && i.extensions.multiDraw === !0 || te) && n.has("WEBGL_multi_draw"),
			rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
			customProgramCacheKey: i.customProgramCacheKey()
		};
		return Ie.vertexUv1s = c.has(1), Ie.vertexUv2s = c.has(2), Ie.vertexUv3s = c.has(3), c.clear(), Ie;
	}
	function h(t) {
		let n = [];
		if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), t.defines !== void 0) for (let e in t.defines) n.push(e), n.push(t.defines[e]);
		return t.isRawShaderMaterial === !1 && (g(n, t), _(n, t), n.push(e.outputColorSpace)), n.push(t.customProgramCacheKey), n.join();
	}
	function g(e, t) {
		e.push(t.precision), e.push(t.outputColorSpace), e.push(t.envMapMode), e.push(t.envMapPMREM), e.push(t.envMapMaxLod), e.push(t.envMapSize), e.push(t.mapUv), e.push(t.alphaMapUv), e.push(t.lightMapUv), e.push(t.aoMapUv), e.push(t.bumpMapUv), e.push(t.normalMapUv), e.push(t.displacementMapUv), e.push(t.emissiveMapUv), e.push(t.metalnessMapUv), e.push(t.roughnessMapUv), e.push(t.anisotropyMapUv), e.push(t.clearcoatMapUv), e.push(t.clearcoatNormalMapUv), e.push(t.clearcoatRoughnessMapUv), e.push(t.diffuseRoughnessMapUv), e.push(t.iridescenceMapUv), e.push(t.iridescenceThicknessMapUv), e.push(t.sheenColorMapUv), e.push(t.sheenRoughnessMapUv), e.push(t.specularMapUv), e.push(t.specularColorMapUv), e.push(t.specularIntensityMapUv), e.push(t.transmissionMapUv), e.push(t.thicknessMapUv), e.push(t.combine), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.numSunLights), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numSunLightShadows), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.numLightProbes), e.push(t.numLightProbeGrids), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking);
	}
	function _(e, t) {
		o.disableAll(), t.instancing && o.enable(0), t.instancingColor && o.enable(1), t.instancingMorph && o.enable(2), t.matcap && o.enable(3), t.envMap && o.enable(4), t.normalMapObjectSpace && o.enable(5), t.normalMapTangentSpace && o.enable(6), t.clearcoat && o.enable(7), t.iridescence && o.enable(8), t.alphaTest && o.enable(9), t.vertexColors && o.enable(10), t.vertexAlphas && o.enable(11), t.vertexUv1s && o.enable(12), t.vertexUv2s && o.enable(13), t.vertexUv3s && o.enable(14), t.vertexTangents && o.enable(15), t.anisotropy && o.enable(16), t.alphaHash && o.enable(17), t.batching && o.enable(18), t.dispersion && o.enable(19), t.retroreflection && o.enable(24), t.diffuseRoughness && o.enable(25), t.batchingColor && o.enable(20), t.gradientMap && o.enable(21), t.packedNormalMap && o.enable(22), t.vertexNormals && o.enable(23), e.push(o.mask), o.disableAll(), t.fog && o.enable(0), t.useFog && o.enable(1), t.flatShading && o.enable(2), t.logarithmicDepthBuffer && o.enable(3), t.reversedDepthBuffer && o.enable(4), t.skinning && o.enable(5), t.morphTargets && o.enable(6), t.morphNormals && o.enable(7), t.morphColors && o.enable(8), t.premultipliedAlpha && o.enable(9), t.shadowMapEnabled && o.enable(10), t.doubleSided && o.enable(11), t.flipSided && o.enable(12), t.useDepthPacking && o.enable(13), t.dithering && o.enable(14), t.transmission && o.enable(15), t.sheen && o.enable(16), t.opaque && o.enable(17), t.pointsUvs && o.enable(18), t.decodeVideoTexture && o.enable(19), t.decodeVideoTextureEmissive && o.enable(20), t.alphaToCoverage && o.enable(21), t.numLightProbeGrids > 0 && o.enable(22), t.hasPositionAttribute && o.enable(23), e.push(o.mask);
	}
	function v(e) {
		let t = f[e.type], n;
		if (t) {
			let e = tc[t];
			n = ko.clone(e.uniforms);
		} else n = e.uniforms;
		return n;
	}
	function y(t, n) {
		let r = u.get(n);
		return r === void 0 ? (r = new Su(e, n, t, i), l.push(r), u.set(n, r)) : ++r.usedTimes, r;
	}
	function b(e) {
		if (--e.usedTimes === 0) {
			let t = l.indexOf(e);
			l[t] = l[l.length - 1], l.pop(), u.delete(e.cacheKey), e.destroy();
		}
	}
	function x(e) {
		s.remove(e);
	}
	function S() {
		s.dispose();
	}
	return {
		getParameters: m,
		getProgramCacheKey: h,
		getUniforms: v,
		acquireProgram: y,
		releaseProgram: b,
		releaseShaderCache: x,
		programs: l,
		dispose: S
	};
}
function Ou() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t) {
		return e.has(t);
	}
	function n(t) {
		let n = e.get(t);
		return n === void 0 && (n = {}, e.set(t, n)), n;
	}
	function r(t) {
		e.delete(t);
	}
	function i(t, n, r) {
		e.get(t)[n] = r;
	}
	function a() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		has: t,
		get: n,
		remove: r,
		update: i,
		dispose: a
	};
}
function ku(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.material.id === t.material.id ? e.materialVariant === t.materialVariant ? e.z === t.z ? e.id - t.id : e.z - t.z : e.materialVariant - t.materialVariant : e.material.id - t.material.id : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function Au(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.z === t.z ? e.id - t.id : t.z - e.z : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function ju() {
	let e = [], t = 0, n = [], r = [], i = [];
	function a() {
		t = 0, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		let t = 0;
		return e.isInstancedMesh && (t += 2), e.isSkinnedMesh && (t += 1), t;
	}
	function s(n, r, i, a, s, c) {
		let l = e[t];
		return l === void 0 ? (l = {
			id: n.id,
			object: n,
			geometry: r,
			material: i,
			materialVariant: o(n),
			groupOrder: a,
			renderOrder: n.renderOrder,
			z: s,
			group: c
		}, e[t] = l) : (l.id = n.id, l.object = n, l.geometry = r, l.material = i, l.materialVariant = o(n), l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = s, l.group = c), t++, l;
	}
	function c(e, t, a, o, c, l, u) {
		u.reversedDepth === !0 && (c = -c);
		let d = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.push(d) : a.transparent === !0 ? i.push(d) : n.push(d);
	}
	function l(e, t, a, o, c, l) {
		let u = s(e, t, a, o, c, l);
		a.transmission > 0 ? r.unshift(u) : a.transparent === !0 ? i.unshift(u) : n.unshift(u);
	}
	function u(e, t) {
		n.length > 1 && n.sort(e || ku), r.length > 1 && r.sort(t || Au), i.length > 1 && i.sort(t || Au);
	}
	function d() {
		for (let n = t, r = e.length; n < r; n++) {
			let t = e[n];
			if (t.id === null) break;
			t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null;
		}
	}
	return {
		opaque: n,
		transmissive: r,
		transparent: i,
		init: a,
		push: c,
		unshift: l,
		finish: d,
		sort: u
	};
}
function Mu() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t, n) {
		let r = e.get(t), i;
		return r === void 0 ? (i = new ju(), e.set(t, [i])) : n >= r.length ? (i = new ju(), r.push(i)) : i = r[n], i;
	}
	function n() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: t,
		dispose: n
	};
}
function Nu() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "SunLight":
			case "DirectionalLight":
				n = {
					direction: new G(),
					color: new J()
				};
				break;
			case "SpotLight":
				n = {
					position: new G(),
					direction: new G(),
					color: new J(),
					distance: 0,
					coneCos: 0,
					penumbraCos: 0,
					decay: 0
				};
				break;
			case "PointLight":
				n = {
					position: new G(),
					color: new J(),
					distance: 0,
					decay: 0
				};
				break;
			case "HemisphereLight":
				n = {
					direction: new G(),
					skyColor: new J(),
					groundColor: new J()
				};
				break;
			case "RectAreaLight": n = {
				color: new J(),
				position: new G(),
				halfWidth: new G(),
				halfHeight: new G()
			};
		}
		return e[t.id] = n, n;
	} };
}
function Pu() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "SunLight":
			case "DirectionalLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new W()
				};
				break;
			case "SpotLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new W()
				};
				break;
			case "PointLight": n = {
				shadowIntensity: 1,
				shadowBias: 0,
				shadowNormalBias: 0,
				shadowRadius: 1,
				shadowMapSize: new W(),
				shadowCameraNear: 1,
				shadowCameraFar: 1e3
			};
		}
		return e[t.id] = n, n;
	} };
}
var Fu = 0;
function Iu(e, t) {
	return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function Lu(e) {
	let t = new Nu(), n = Pu(), r = {
		version: 0,
		hash: {
			sunLength: -1,
			directionalLength: -1,
			pointLength: -1,
			spotLength: -1,
			rectAreaLength: -1,
			hemiLength: -1,
			numSunShadows: -1,
			numDirectionalShadows: -1,
			numPointShadows: -1,
			numSpotShadows: -1,
			numSpotMaps: -1,
			numLightProbes: -1
		},
		ambient: [
			0,
			0,
			0
		],
		probe: [],
		sun: [],
		sunShadow: [],
		sunShadowMap: [],
		sunShadowMatrix: [],
		sunShadowCascade: [],
		directional: [],
		directionalShadow: [],
		directionalShadowMap: [],
		directionalShadowMatrix: [],
		spot: [],
		spotLightMap: [],
		spotShadow: [],
		spotShadowMap: [],
		spotLightMatrix: [],
		rectArea: [],
		rectAreaLTC1: null,
		rectAreaLTC2: null,
		point: [],
		pointShadow: [],
		pointShadowMap: [],
		pointShadowMatrix: [],
		hemi: [],
		numSpotLightShadowsWithMaps: 0,
		numLightProbes: 0
	};
	for (let e = 0; e < 9; e++) r.probe.push(new G());
	let i = new G(), a = new Xt(), o = new Xt();
	function s(i) {
		let a = 0, o = 0, s = 0;
		for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
		let c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b = 0, x = 0;
		i.sort(Iu);
		for (let e = 0, S = i.length; e < S; e++) {
			let S = i[e], C = S.color, w = S.intensity, T = S.distance, E = null;
			if (S.shadow && S.shadow.map && (E = S.shadow.map.texture.format === 1030 ? S.shadow.map.texture : S.shadow.map.depthTexture || S.shadow.map.texture), S.isAmbientLight) a += C.r * w, o += C.g * w, s += C.b * w;
			else if (S.isLightProbe) {
				for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(S.sh.coefficients[e], w);
				x++;
			} else if (S.isSunLight) {
				let e = t.get(S);
				if (e.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow) {
					let e = S.shadow, t = n.get(S);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()), r.sunShadow[l] = t, r.sunShadowMap[l] = E;
					let i = e.getViewportCount();
					for (let t = 0; t < i; t++) r.sunShadowMatrix[u + t] = e.getMatrix(t), r.sunShadowCascade[u + t] = e._cascadeData[t];
					u += i, l++;
				}
				r.sun[c] = e, c++;
			} else if (S.isDirectionalLight) {
				let e = t.get(S);
				if (e.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow) {
					let e = S.shadow, t = n.get(S);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, r.directionalShadow[d] = t, r.directionalShadowMap[d] = E, r.directionalShadowMatrix[d] = S.shadow.matrix, g++;
				}
				r.directional[d] = e, d++;
			} else if (S.isSpotLight) {
				let e = t.get(S);
				e.position.setFromMatrixPosition(S.matrixWorld), e.color.copy(C).multiplyScalar(w), e.distance = T, e.coneCos = Math.cos(S.angle), e.penumbraCos = Math.cos(S.angle * (1 - S.penumbra)), e.decay = S.decay, r.spot[p] = e;
				let i = S.shadow;
				if (S.map && (r.spotLightMap[y] = S.map, y++, i.updateMatrices(S), S.castShadow && b++), r.spotLightMatrix[p] = i.matrix, S.castShadow) {
					let e = n.get(S);
					e.shadowIntensity = i.intensity, e.shadowBias = i.bias, e.shadowNormalBias = i.normalBias, e.shadowRadius = i.radius, e.shadowMapSize = i.mapSize, r.spotShadow[p] = e, r.spotShadowMap[p] = E, v++;
				}
				p++;
			} else if (S.isRectAreaLight) {
				let e = t.get(S);
				e.color.copy(C).multiplyScalar(w), e.halfWidth.set(S.width * .5, 0, 0), e.halfHeight.set(0, S.height * .5, 0), r.rectArea[m] = e, m++;
			} else if (S.isPointLight) {
				let e = t.get(S);
				if (e.color.copy(S.color).multiplyScalar(S.intensity), e.distance = S.distance, e.decay = S.decay, S.castShadow) {
					let e = S.shadow, t = n.get(S);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, t.shadowCameraNear = e.camera.near, t.shadowCameraFar = e.camera.far, r.pointShadow[f] = t, r.pointShadowMap[f] = E, r.pointShadowMatrix[f] = S.shadow.matrix, _++;
				}
				r.point[f] = e, f++;
			} else if (S.isHemisphereLight) {
				let e = t.get(S);
				e.skyColor.copy(S.color).multiplyScalar(w), e.groundColor.copy(S.groundColor).multiplyScalar(w), r.hemi[h] = e, h++;
			}
		}
		m > 0 && (e.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = Z.LTC_FLOAT_1, r.rectAreaLTC2 = Z.LTC_FLOAT_2) : (r.rectAreaLTC1 = Z.LTC_HALF_1, r.rectAreaLTC2 = Z.LTC_HALF_2)), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = s;
		let S = r.hash;
		(S.sunLength !== c || S.directionalLength !== d || S.pointLength !== f || S.spotLength !== p || S.rectAreaLength !== m || S.hemiLength !== h || S.numSunShadows !== l || S.numDirectionalShadows !== g || S.numPointShadows !== _ || S.numSpotShadows !== v || S.numSpotMaps !== y || S.numLightProbes !== x) && (r.sun.length = c, r.directional.length = d, r.spot.length = p, r.rectArea.length = m, r.point.length = f, r.hemi.length = h, r.sunShadow.length = l, r.sunShadowMap.length = l, r.sunShadowMatrix.length = u, r.sunShadowCascade.length = u, r.directionalShadow.length = g, r.directionalShadowMap.length = g, r.directionalShadowMatrix.length = g, r.pointShadow.length = _, r.pointShadowMap.length = _, r.pointShadowMatrix.length = _, r.spotShadow.length = v, r.spotShadowMap.length = v, r.spotLightMatrix.length = v + y - b, r.spotLightMap.length = y, r.numSpotLightShadowsWithMaps = b, r.numLightProbes = x, S.sunLength = c, S.directionalLength = d, S.pointLength = f, S.spotLength = p, S.rectAreaLength = m, S.hemiLength = h, S.numSunShadows = l, S.numDirectionalShadows = g, S.numPointShadows = _, S.numSpotShadows = v, S.numSpotMaps = y, S.numLightProbes = x, r.version = Fu++);
	}
	function c(e, t) {
		let n = 0, s = 0, c = 0, l = 0, u = 0, d = 0, f = t.matrixWorldInverse;
		for (let t = 0, p = e.length; t < p; t++) {
			let p = e[t];
			if (p.isSunLight) {
				let e = r.sun[n];
				e.direction.setFromMatrixPosition(p.matrixWorld), e.direction.transformDirection(f), n++;
			} else if (p.isDirectionalLight) {
				let e = r.directional[s];
				e.direction.setFromMatrixPosition(p.matrixWorld), i.setFromMatrixPosition(p.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(f), s++;
			} else if (p.isSpotLight) {
				let e = r.spot[l];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), e.direction.setFromMatrixPosition(p.matrixWorld), i.setFromMatrixPosition(p.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(f), l++;
			} else if (p.isRectAreaLight) {
				let e = r.rectArea[u];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), o.identity(), a.copy(p.matrixWorld), a.premultiply(f), o.extractRotation(a), e.halfWidth.set(p.width * .5, 0, 0), e.halfHeight.set(0, p.height * .5, 0), e.halfWidth.applyMatrix4(o), e.halfHeight.applyMatrix4(o), u++;
			} else if (p.isPointLight) {
				let e = r.point[c];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), c++;
			} else if (p.isHemisphereLight) {
				let e = r.hemi[d];
				e.direction.setFromMatrixPosition(p.matrixWorld), e.direction.transformDirection(f), d++;
			}
		}
	}
	return {
		setup: s,
		setupView: c,
		state: r
	};
}
function Ru(e) {
	let t = new Lu(e), n = [], r = [], i = [];
	function a(e) {
		u.camera = e, n.length = 0, r.length = 0, i.length = 0;
	}
	function o(e) {
		e.isLightProbeGrid ? i.push(e) : n.push(e);
	}
	function s(e) {
		r.push(e);
	}
	function c() {
		t.setup(n), i.sort((e, t) => e.priority - t.priority || e.id - t.id);
	}
	function l(e) {
		t.setupView(n, e);
	}
	let u = {
		lightsArray: n,
		shadowsArray: r,
		lightProbeGridArray: i,
		camera: null,
		lights: t,
		transmissionRenderTarget: {},
		textureUnits: 0
	};
	return {
		init: a,
		state: u,
		setupLights: c,
		setupLightsView: l,
		pushLight: o,
		pushShadow: s
	};
}
function zu(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(n, r = 0) {
		let i = t.get(n), a;
		return i === void 0 ? (a = new Ru(e), t.set(n, [a])) : r >= i.length ? (a = new Ru(e), i.push(a)) : a = i[r], a;
	}
	function r() {
		t = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: n,
		dispose: r
	};
}
var Bu = "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", Vu = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );\n	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );\n}", Hu = [
	/*@__PURE__*/ new G(1, 0, 0),
	/*@__PURE__*/ new G(-1, 0, 0),
	/*@__PURE__*/ new G(0, 1, 0),
	/*@__PURE__*/ new G(0, -1, 0),
	/*@__PURE__*/ new G(0, 0, 1),
	/*@__PURE__*/ new G(0, 0, -1)
], Uu = [
	/*@__PURE__*/ new G(0, -1, 0),
	/*@__PURE__*/ new G(0, -1, 0),
	/*@__PURE__*/ new G(0, 0, 1),
	/*@__PURE__*/ new G(0, 0, -1),
	/*@__PURE__*/ new G(0, -1, 0),
	/*@__PURE__*/ new G(0, -1, 0)
], Wu = /*@__PURE__*/ new Xt(), Gu = /*@__PURE__*/ new G(), Ku = /*@__PURE__*/ new G();
function qu(e, t, n) {
	let r = new wi(), i = new W(), o = new W(), s = new Gt(), l = new Fo(), u = new Io(), d = {}, f = n.maxTextureSize, p = {
		0: 1,
		1: 0,
		2: 2
	}, m = new Mo({
		defines: { VSM_SAMPLES: 8 },
		uniforms: {
			shadow_pass: { value: null },
			resolution: { value: new W() },
			radius: { value: 4 }
		},
		vertexShader: Bu,
		fragmentShader: Vu
	}), h = m.clone();
	h.defines.HORIZONTAL_PASS = 1;
	let y = new Dr();
	y.setAttribute("position", new pr(new Float32Array([
		-1,
		-1,
		.5,
		3,
		-1,
		.5,
		-1,
		3,
		.5
	]), 3));
	let b = new _i(y, m), x = this;
	this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
	let S = this.type;
	this.render = function(t, n, l) {
		if (x.enabled === !1 || x.autoUpdate === !1 && x.needsUpdate === !1 || t.length === 0) return;
		this.type === 2 && (V("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."), this.type = 1);
		let u = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), m = e.state;
		m.setBlending(0), m.buffers.depth.getReversed() === !0 ? m.buffers.color.setClear(0, 0, 0, 0) : m.buffers.color.setClear(1, 1, 1, 1), m.buffers.depth.setTest(!0), m.setScissorTest(!1);
		let h = S !== this.type;
		h && n.traverse(function(e) {
			e.material && (Array.isArray(e.material) ? e.material.forEach((e) => e.needsUpdate = !0) : e.material.needsUpdate = !0);
		});
		for (let u = 0, d = t.length; u < d; u++) {
			let d = t[u], p = d.shadow;
			if (p === void 0) {
				V("WebGLShadowMap:", d, "has no shadow.");
				continue;
			}
			if (p.autoUpdate === !1 && p.needsUpdate === !1) continue;
			i.copy(p.mapSize);
			let y = p.getFrameExtents();
			i.multiply(y), o.copy(p.mapSize), (i.x > f || i.y > f) && (i.x > f && (o.x = Math.floor(f / y.x), i.x = o.x * y.x, p.mapSize.x = o.x), i.y > f && (o.y = Math.floor(f / y.y), i.y = o.y * y.y, p.mapSize.y = o.y));
			let b = e.state.buffers.depth.getReversed();
			if (p.camera._reversedDepth = b, p.map === null || h === !0) {
				if (p.map !== null && (p.map.depthTexture !== null && (p.map.depthTexture.dispose(), p.map.depthTexture = null), p.map.dispose()), this.type === 3) {
					if (d.isPointLight) {
						V("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
						continue;
					}
					p.map = new qt(i.x, i.y, {
						format: j,
						type: v,
						minFilter: c,
						magFilter: c,
						generateMipmaps: !1
					}), p.map.texture.name = d.name + ".shadowMap", p.map.depthTexture = new Hi(i.x, i.y, _), p.map.depthTexture.name = d.name + ".shadowMapDepth", p.map.depthTexture.format = D, p.map.depthTexture.compareFunction = null, p.map.depthTexture.minFilter = a, p.map.depthTexture.magFilter = a;
				} else d.isPointLight ? (p.map = new uc(i.x), p.map.depthTexture = new Ui(i.x, g)) : (p.map = new qt(i.x, i.y), p.map.depthTexture = new Hi(i.x, i.y, g)), p.map.depthTexture.name = d.name + ".shadowMap", p.map.depthTexture.format = D, this.type === 1 ? (p.map.depthTexture.compareFunction = b ? 518 : 515, p.map.depthTexture.minFilter = c, p.map.depthTexture.magFilter = c) : (p.map.depthTexture.compareFunction = null, p.map.depthTexture.minFilter = a, p.map.depthTexture.magFilter = a);
				p.camera.updateProjectionMatrix();
			}
			p.map.isWebGLCubeRenderTarget !== !0 && (p.map.width !== i.x || p.map.height !== i.y) && p.map.setSize(i.x, i.y);
			let x = p.map.isWebGLCubeRenderTarget ? 6 : p.getViewportCount();
			d.isPointLight !== !0 && p.updateMatrices(d, l);
			let S = p.camera.layers.mask & 4294967294 ? p.camera.layers : l.layers;
			for (let t = 0; t < x; t++) {
				let i = p.getCamera(t);
				if (d.isPointLight) {
					let e = p.camera, n = p.matrix, r = d.distance || e.far;
					r !== e.far && (e.far = r, e.updateProjectionMatrix()), Gu.setFromMatrixPosition(d.matrixWorld), e.position.copy(Gu), Ku.copy(e.position), Ku.add(Hu[t]), e.up.copy(Uu[t]), e.lookAt(Ku), e.updateMatrixWorld(), n.makeTranslation(-Gu.x, -Gu.y, -Gu.z), Wu.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), p._frustum.setFromProjectionMatrix(Wu, e.coordinateSystem, e.reversedDepth);
				}
				if (p.map.isWebGLCubeRenderTarget) e.setRenderTarget(p.map, t), e.clear();
				else {
					t === 0 && (e.setRenderTarget(p.map), e.clear());
					let n = p.getViewport(t);
					s.set(o.x * n.x, o.y * n.y, o.x * n.z, o.y * n.w), m.viewport(s);
				}
				r = p.getFrustum(t), T(n, l, i, d, S, this.type);
			}
			p.isPointLightShadow !== !0 && this.type === 3 && C(p, l), p.needsUpdate = !1;
		}
		S = this.type, x.needsUpdate = !1, e.setRenderTarget(u, d, p);
	};
	function C(n, r) {
		let a = t.update(b);
		m.defines.VSM_SAMPLES !== n.blurSamples && (m.defines.VSM_SAMPLES = n.blurSamples, h.defines.VSM_SAMPLES = n.blurSamples, m.needsUpdate = !0, h.needsUpdate = !0), n.mapPass === null ? n.mapPass = new qt(i.x, i.y, {
			format: j,
			type: v
		}) : (n.mapPass.width !== n.map.width || n.mapPass.height !== n.map.height) && n.mapPass.setSize(n.map.width, n.map.height), m.uniforms.shadow_pass.value = n.map.depthTexture, m.uniforms.resolution.value.set(n.map.width, n.map.height), m.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(r, null, a, m, b, null), h.uniforms.shadow_pass.value = n.mapPass.texture, h.uniforms.resolution.value.set(n.map.width, n.map.height), h.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(r, null, a, h, b, null);
	}
	function w(t, n, r, i) {
		let a = null, o = r.isPointLight === !0 ? t.customDistanceMaterial : t.customDepthMaterial;
		if (o !== void 0) a = o;
		else if (a = r.isPointLight === !0 ? u : l, e.localClippingEnabled && n.clipShadows === !0 && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0 || n.alphaToCoverage === !0) {
			let e = a.uuid, t = n.uuid, r = d[e];
			r === void 0 && (r = {}, d[e] = r);
			let i = r[t];
			i === void 0 && (i = a.clone(), r[t] = i, n.addEventListener("dispose", E)), a = i;
		}
		if (a.visible = n.visible, a.wireframe = n.wireframe, i === 3 ? a.side = n.shadowSide === null ? n.side : n.shadowSide : a.side = n.shadowSide === null ? p[n.side] : n.shadowSide, a.alphaMap = n.alphaMap, a.alphaTest = n.alphaToCoverage === !0 ? .5 : n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, r.isPointLight === !0 && a.isMeshDistanceMaterial === !0) {
			let t = e.properties.get(a);
			t.light = r;
		}
		return a;
	}
	function T(n, i, a, o, s, c) {
		if (n.visible === !1) return;
		if (n.layers.test(s) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && c === 3) && (!n.frustumCulled || n.intersectsFrustum(r))) {
			n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
			let r = t.update(n), s = n.material;
			if (Array.isArray(s)) {
				let t = r.groups;
				for (let l = 0, u = t.length; l < u; l++) {
					let u = t[l], d = s[u.materialIndex];
					if (d && d.visible) {
						let t = w(n, d, o, c);
						n.onBeforeShadow(e, n, i, a, r, t, u), e.renderBufferDirect(a, null, r, t, n, u), n.onAfterShadow(e, n, i, a, r, t, u);
					}
				}
			} else if (s.visible) {
				let t = w(n, s, o, c);
				n.onBeforeShadow(e, n, i, a, r, t, null), e.renderBufferDirect(a, null, r, t, n, null), n.onAfterShadow(e, n, i, a, r, t, null);
			}
		}
		let l = n.children;
		for (let e = 0, t = l.length; e < t; e++) T(l[e], i, a, o, s, c);
	}
	function E(e) {
		e.target.removeEventListener("dispose", E);
		for (let t in d) {
			let n = d[t], r = e.target.uuid;
			r in n && (n[r].dispose(), delete n[r]);
		}
	}
}
function Ju(e, t) {
	function n() {
		let t = !1, n = new Gt(), r = null, i = new Gt(0, 0, 0, 0);
		return {
			setMask: function(n) {
				r !== n && !t && (e.colorMask(n, n, n, n), r = n);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t, r, a, o, s) {
				s === !0 && (t *= o, r *= o, a *= o), n.set(t, r, a, o), i.equals(n) === !1 && (e.clearColor(t, r, a, o), i.copy(n));
			},
			reset: function() {
				t = !1, r = null, i.set(-1, 0, 0, 0);
			}
		};
	}
	function r() {
		let n = !1, r = !1, i = null, a = null, o = null;
		return {
			setReversed: function(e) {
				if (r !== e) {
					let n = t.get("EXT_clip_control");
					e ? n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT) : n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT), r = e;
					let i = o;
					o = null, this.setClear(i);
				}
			},
			getReversed: function() {
				return r;
			},
			setTest: function(t) {
				t ? I(e.DEPTH_TEST) : ce(e.DEPTH_TEST);
			},
			setMask: function(t) {
				i !== t && !n && (e.depthMask(t), i = t);
			},
			setFunc: function(t) {
				if (r && (t = $e[t]), a !== t) {
					switch (t) {
						case 0:
							e.depthFunc(e.NEVER);
							break;
						case 1:
							e.depthFunc(e.ALWAYS);
							break;
						case 2:
							e.depthFunc(e.LESS);
							break;
						case 3:
							e.depthFunc(e.LEQUAL);
							break;
						case 4:
							e.depthFunc(e.EQUAL);
							break;
						case 5:
							e.depthFunc(e.GEQUAL);
							break;
						case 6:
							e.depthFunc(e.GREATER);
							break;
						case 7:
							e.depthFunc(e.NOTEQUAL);
							break;
						default: e.depthFunc(e.LEQUAL);
					}
					a = t;
				}
			},
			setLocked: function(e) {
				n = e;
			},
			setClear: function(t) {
				o !== t && (o = t, r && (t = 1 - t), e.clearDepth(t));
			},
			reset: function() {
				n = !1, i = null, a = null, o = null, r = !1;
			}
		};
	}
	function i() {
		let t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
		return {
			setTest: function(n) {
				t || (n ? I(e.STENCIL_TEST) : ce(e.STENCIL_TEST));
			},
			setMask: function(r) {
				n !== r && !t && (e.stencilMask(r), n = r);
			},
			setFunc: function(t, n, o) {
				(r !== t || i !== n || a !== o) && (e.stencilFunc(t, n, o), r = t, i = n, a = o);
			},
			setOp: function(t, n, r) {
				(o !== t || s !== n || c !== r) && (e.stencilOp(t, n, r), o = t, s = n, c = r);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t) {
				l !== t && (e.clearStencil(t), l = t);
			},
			reset: function() {
				t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
			}
		};
	}
	let a = new n(), o = new r(), s = new i(), c = {}, l = /* @__PURE__ */ new WeakMap(), u = {}, d = {}, f = {}, p = /* @__PURE__ */ new WeakMap(), m = [], h = null, g = !1, _ = null, v = null, y = null, b = null, x = null, S = null, C = null, w = new J(0, 0, 0), T = 0, E = !1, D = null, O = null, k = null, A = null, j = null, ee = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), te = !1, M = 0, N = e.getParameter(e.VERSION);
	N.indexOf("WebGL") === -1 ? N.indexOf("OpenGL ES") !== -1 && (M = parseFloat(/^OpenGL ES (\d)/.exec(N)[1]), te = M >= 2) : (M = parseFloat(/^WebGL (\d)/.exec(N)[1]), te = M >= 1);
	let P = null, ne = {}, F = e.getParameter(e.SCISSOR_BOX), re = e.getParameter(e.VIEWPORT), ie = new Gt().fromArray(F), ae = new Gt().fromArray(re);
	function oe(t, n, r, i) {
		let a = /* @__PURE__ */ new Uint8Array(4), o = e.createTexture();
		e.bindTexture(t, o), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
		for (let o = 0; o < r; o++) t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a) : e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
		return o;
	}
	let se = {};
	se[e.TEXTURE_2D] = oe(e.TEXTURE_2D, e.TEXTURE_2D, 1), se[e.TEXTURE_CUBE_MAP] = oe(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), se[e.TEXTURE_2D_ARRAY] = oe(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), se[e.TEXTURE_3D] = oe(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), a.setClear(0, 0, 0, 1), o.setClear(1), s.setClear(0), I(e.DEPTH_TEST), o.setFunc(3), ge(!1), _e(1), I(e.CULL_FACE), me(0);
	function I(t) {
		u[t] !== !0 && (e.enable(t), u[t] = !0);
	}
	function ce(t) {
		u[t] !== !1 && (e.disable(t), u[t] = !1);
	}
	function le(t, n) {
		return f[t] !== n && (e.bindFramebuffer(t, n), f[t] = n, t === e.DRAW_FRAMEBUFFER && (f[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (f[e.DRAW_FRAMEBUFFER] = n), !0);
	}
	function ue(t, n) {
		let r = m, i = !1;
		if (t) {
			r = p.get(n), r === void 0 && (r = [], p.set(n, r));
			let a = t.textures;
			if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
				for (let t = 0, n = a.length; t < n; t++) r[t] = e.COLOR_ATTACHMENT0 + t;
				r.length = a.length, i = !0;
			}
		} else r[0] !== e.BACK && (r[0] = e.BACK, i = !0);
		i && e.drawBuffers(r);
	}
	function de(t) {
		return h !== t && (e.useProgram(t), h = t, !0);
	}
	let fe = {
		100: e.FUNC_ADD,
		101: e.FUNC_SUBTRACT,
		102: e.FUNC_REVERSE_SUBTRACT
	};
	fe[103] = e.MIN, fe[104] = e.MAX;
	let pe = {
		200: e.ZERO,
		201: e.ONE,
		202: e.SRC_COLOR,
		204: e.SRC_ALPHA,
		210: e.SRC_ALPHA_SATURATE,
		208: e.DST_COLOR,
		206: e.DST_ALPHA,
		203: e.ONE_MINUS_SRC_COLOR,
		205: e.ONE_MINUS_SRC_ALPHA,
		209: e.ONE_MINUS_DST_COLOR,
		207: e.ONE_MINUS_DST_ALPHA,
		211: e.CONSTANT_COLOR,
		212: e.ONE_MINUS_CONSTANT_COLOR,
		213: e.CONSTANT_ALPHA,
		214: e.ONE_MINUS_CONSTANT_ALPHA
	};
	function me(t, n, r, i, a, o, s, c, l, u) {
		if (t === 0) g === !0 && (ce(e.BLEND), g = !1);
		else if (g === !1 && (I(e.BLEND), g = !0), t !== 5) {
			if (t !== _ || u !== E) {
				if ((v !== 100 || x !== 100) && (e.blendEquation(e.FUNC_ADD), v = 100, x = 100), u) switch (t) {
					case 1:
						e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFunc(e.ONE, e.ONE);
						break;
					case 3:
						e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
						break;
					case 4:
						e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
						break;
					default: H("WebGLState: Invalid blending: ", t);
				}
				else switch (t) {
					case 1:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
						break;
					case 3:
						H("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
						break;
					case 4:
						H("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
						break;
					default: H("WebGLState: Invalid blending: ", t);
				}
				y = null, b = null, S = null, C = null, w.set(0, 0, 0), T = 0, _ = t, E = u;
			}
		} else a ||= n, o ||= r, s ||= i, (n !== v || a !== x) && (e.blendEquationSeparate(fe[n], fe[a]), v = n, x = a), (r !== y || i !== b || o !== S || s !== C) && (e.blendFuncSeparate(pe[r], pe[i], pe[o], pe[s]), y = r, b = i, S = o, C = s), (c.equals(w) === !1 || l !== T) && (e.blendColor(c.r, c.g, c.b, l), w.copy(c), T = l), _ = t, E = !1;
	}
	function he(t, n) {
		t.side === 2 ? ce(e.CULL_FACE) : I(e.CULL_FACE);
		let r = t.side === 1;
		n && (r = !r), ge(r), t.blending === 1 && t.transparent === !1 ? me(0) : me(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha), o.setFunc(t.depthFunc), o.setTest(t.depthTest), o.setMask(t.depthWrite), a.setMask(t.colorWrite);
		let i = t.stencilWrite;
		s.setTest(i), i && (s.setMask(t.stencilWriteMask), s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), ye(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), t.alphaToCoverage === !0 ? I(e.SAMPLE_ALPHA_TO_COVERAGE) : ce(e.SAMPLE_ALPHA_TO_COVERAGE);
	}
	function ge(t) {
		D !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), D = t);
	}
	function _e(t) {
		t === 0 ? ce(e.CULL_FACE) : (I(e.CULL_FACE), t !== O && (t === 1 ? e.cullFace(e.BACK) : t === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))), O = t;
	}
	function ve(t) {
		t !== k && (te && e.lineWidth(t), k = t);
	}
	function ye(t, n, r) {
		t ? (I(e.POLYGON_OFFSET_FILL), (A !== n || j !== r) && (A = n, j = r, o.getReversed() && (n = -n, r = -r), e.polygonOffset(n, r))) : ce(e.POLYGON_OFFSET_FILL);
	}
	function be(t) {
		t ? I(e.SCISSOR_TEST) : ce(e.SCISSOR_TEST);
	}
	function xe(t) {
		t === void 0 && (t = e.TEXTURE0 + ee - 1), P !== t && (e.activeTexture(t), P = t);
	}
	function Se(t, n, r) {
		r === void 0 && (r = P === null ? e.TEXTURE0 + ee - 1 : P);
		let i = ne[r];
		i === void 0 && (i = {
			type: void 0,
			texture: void 0
		}, ne[r] = i), (i.type !== t || i.texture !== n) && (P !== r && (e.activeTexture(r), P = r), e.bindTexture(t, n || se[t]), i.type = t, i.texture = n);
	}
	function Ce() {
		let t = ne[P];
		t !== void 0 && t.type !== void 0 && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0);
	}
	function we() {
		try {
			e.compressedTexImage2D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function Te() {
		try {
			e.compressedTexImage3D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function Ee() {
		try {
			e.texSubImage2D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function De() {
		try {
			e.texSubImage3D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function Oe() {
		try {
			e.compressedTexSubImage2D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function ke() {
		try {
			e.compressedTexSubImage3D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function Ae() {
		try {
			e.texStorage2D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function je() {
		try {
			e.texStorage3D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function Me() {
		try {
			e.texImage2D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function L() {
		try {
			e.texImage3D(...arguments);
		} catch (e) {
			H("WebGLState:", e);
		}
	}
	function Ne(t) {
		return d[t] === void 0 ? e.getParameter(t) : d[t];
	}
	function Pe(t, n) {
		d[t] !== n && (e.pixelStorei(t, n), d[t] = n);
	}
	function Fe(t) {
		ie.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), ie.copy(t));
	}
	function R(t) {
		ae.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), ae.copy(t));
	}
	function Ie(t, n) {
		let r = l.get(n);
		r === void 0 && (r = /* @__PURE__ */ new WeakMap(), l.set(n, r));
		let i = r.get(t);
		i === void 0 && (i = e.getUniformBlockIndex(n, t.name), e.uniformBlockBinding(n, i, i), r.set(t, i));
	}
	function z(t, n, r) {
		let i = l.get(n).get(t);
		c[i] !== r && (e.bindBufferBase(e.UNIFORM_BUFFER, i, r), c[i] = r);
	}
	function B() {
		e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), o.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.pixelStorei(e.PACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL), e.pixelStorei(e.PACK_ROW_LENGTH, 0), e.pixelStorei(e.PACK_SKIP_PIXELS, 0), e.pixelStorei(e.PACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_ROW_LENGTH, 0), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0), e.pixelStorei(e.UNPACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), u = {}, d = {}, P = null, ne = {}, f = {}, c = {}, p = /* @__PURE__ */ new WeakMap(), m = [], h = null, g = !1, _ = null, v = null, y = null, b = null, x = null, S = null, C = null, w = new J(0, 0, 0), T = 0, E = !1, D = null, O = null, k = null, A = null, j = null, ie.set(0, 0, e.canvas.width, e.canvas.height), ae.set(0, 0, e.canvas.width, e.canvas.height), a.reset(), o.reset(), s.reset();
	}
	return {
		buffers: {
			color: a,
			depth: o,
			stencil: s
		},
		enable: I,
		disable: ce,
		bindFramebuffer: le,
		drawBuffers: ue,
		useProgram: de,
		setBlending: me,
		setMaterial: he,
		setFlipSided: ge,
		setCullFace: _e,
		setLineWidth: ve,
		setPolygonOffset: ye,
		setScissorTest: be,
		activeTexture: xe,
		bindTexture: Se,
		unbindTexture: Ce,
		compressedTexImage2D: we,
		compressedTexImage3D: Te,
		texImage2D: Me,
		texImage3D: L,
		pixelStorei: Pe,
		getParameter: Ne,
		updateUBOMapping: Ie,
		uniformBlockBinding: z,
		texStorage2D: Ae,
		texStorage3D: je,
		texSubImage2D: Ee,
		texSubImage3D: De,
		compressedTexSubImage2D: Oe,
		compressedTexSubImage3D: ke,
		scissor: Fe,
		viewport: R,
		reset: B
	};
}
function Yu(e, t, d, f, p, m, h) {
	let g = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, _ = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), v = new W(), y = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new Set(), x, S = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new Set(), w = new FinalizationRegistry((e) => C.delete(e)), T = !1;
	try {
		T = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
	} catch {}
	function E(e, t) {
		return T ? new OffscreenCanvas(e, t) : Ke("canvas");
	}
	function D(e, t, n) {
		let r = 1, i = B(e);
		if ((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)), r < 1) {
			if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof VideoFrame < "u" && e instanceof VideoFrame) {
				let n = Math.floor(r * i.width), a = Math.floor(r * i.height);
				x === void 0 && (x = E(n, a));
				let o = t ? E(n, a) : x;
				return o.width = n, o.height = a, o.getContext("2d").drawImage(e, 0, 0, n, a), V("WebGLRenderer: Texture has been resized from (" + i.width + "x" + i.height + ") to (" + n + "x" + a + ")."), o;
			}
			return "data" in e && V("WebGLRenderer: Image in DataTexture is too big (" + i.width + "x" + i.height + ")."), e;
		}
		return e;
	}
	function k(e) {
		return e.generateMipmaps;
	}
	function A(t) {
		e.generateMipmap(t);
	}
	function j(t) {
		return t.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : t.isWebGL3DRenderTarget ? e.TEXTURE_3D : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
	}
	function ee(n, r, i, a, o, s = !1) {
		if (n !== null) {
			if (e[n] !== void 0) return e[n];
			V("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
		}
		let c;
		a && (c = t.get("EXT_texture_norm16"), c || V("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
		let l = r;
		if (r === e.RED && (i === e.FLOAT && (l = e.R32F), i === e.HALF_FLOAT && (l = e.R16F), i === e.UNSIGNED_BYTE && (l = e.R8), i === e.UNSIGNED_SHORT && c && (l = c.R16_EXT), i === e.SHORT && c && (l = c.R16_SNORM_EXT)), r === e.RED_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.R8UI), i === e.UNSIGNED_SHORT && (l = e.R16UI), i === e.UNSIGNED_INT && (l = e.R32UI), i === e.BYTE && (l = e.R8I), i === e.SHORT && (l = e.R16I), i === e.INT && (l = e.R32I)), r === e.RG && (i === e.FLOAT && (l = e.RG32F), i === e.HALF_FLOAT && (l = e.RG16F), i === e.UNSIGNED_BYTE && (l = e.RG8), i === e.UNSIGNED_SHORT && c && (l = c.RG16_EXT), i === e.SHORT && c && (l = c.RG16_SNORM_EXT)), r === e.RG_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RG8UI), i === e.UNSIGNED_SHORT && (l = e.RG16UI), i === e.UNSIGNED_INT && (l = e.RG32UI), i === e.BYTE && (l = e.RG8I), i === e.SHORT && (l = e.RG16I), i === e.INT && (l = e.RG32I)), r === e.RGB_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RGB8UI), i === e.UNSIGNED_SHORT && (l = e.RGB16UI), i === e.UNSIGNED_INT && (l = e.RGB32UI), i === e.BYTE && (l = e.RGB8I), i === e.SHORT && (l = e.RGB16I), i === e.INT && (l = e.RGB32I)), r === e.RGBA_INTEGER && (i === e.UNSIGNED_BYTE && (l = e.RGBA8UI), i === e.UNSIGNED_SHORT && (l = e.RGBA16UI), i === e.UNSIGNED_INT && (l = e.RGBA32UI), i === e.BYTE && (l = e.RGBA8I), i === e.SHORT && (l = e.RGBA16I), i === e.INT && (l = e.RGBA32I)), r === e.RGB && (i === e.UNSIGNED_SHORT && c && (l = c.RGB16_EXT), i === e.SHORT && c && (l = c.RGB16_SNORM_EXT), i === e.UNSIGNED_INT_5_9_9_9_REV && (l = e.RGB9_E5), i === e.UNSIGNED_INT_10F_11F_11F_REV && (l = e.R11F_G11F_B10F)), r === e.RGBA) {
			let t = s ? ze : q.getTransfer(o);
			i === e.FLOAT && (l = e.RGBA32F), i === e.HALF_FLOAT && (l = e.RGBA16F), i === e.UNSIGNED_BYTE && (l = t === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), i === e.UNSIGNED_SHORT && c && (l = c.RGBA16_EXT), i === e.SHORT && c && (l = c.RGBA16_SNORM_EXT), i === e.UNSIGNED_SHORT_4_4_4_4 && (l = e.RGBA4), i === e.UNSIGNED_SHORT_5_5_5_1 && (l = e.RGB5_A1);
		}
		return (l === e.R16F || l === e.R32F || l === e.RG16F || l === e.RG32F || l === e.RGBA16F || l === e.RGBA32F) && t.get("EXT_color_buffer_float"), l;
	}
	function te(t, n) {
		let r;
		return t ? n === null || n === 1014 || n === 1020 ? r = e.DEPTH24_STENCIL8 : n === 1015 ? r = e.DEPTH32F_STENCIL8 : n === 1012 && (r = e.DEPTH24_STENCIL8, V("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : n === null || n === 1014 || n === 1020 ? r = e.DEPTH_COMPONENT24 : n === 1015 ? r = e.DEPTH_COMPONENT32F : n === 1012 && (r = e.DEPTH_COMPONENT16), r;
	}
	function M(e, t) {
		return k(e) === !0 || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006 ? Math.log2(Math.max(t.width, t.height)) + 1 : e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1;
	}
	function N(e) {
		let t = new WeakRef(e);
		f.get(e).__ref = t, C.add(t), w.register(e, t, t);
	}
	function P(e) {
		let t = f.get(e).__ref;
		t !== void 0 && (C.delete(t), w.unregister(t));
	}
	function ne(e) {
		re(e.target);
	}
	function F(e) {
		ie(e.target);
	}
	function re(e) {
		e.removeEventListener("dispose", ne), P(e), oe(e), e.isVideoTexture && y.delete(e), e.isHTMLTexture && b.delete(e);
	}
	function ie(e) {
		e.removeEventListener("dispose", F), P(e), I(e);
	}
	function ae() {
		for (let e of C) {
			let t = e.deref();
			t !== void 0 && (t.isRenderTarget === !0 ? ie(t) : re(t));
		}
		C.clear(), b.clear();
	}
	function oe(e) {
		let t = f.get(e);
		if (t.__webglInit === void 0) return;
		let n = e.source, r = S.get(n);
		if (r) {
			let i = r[t.__cacheKey];
			i.usedTimes--, i.usedTimes === 0 && se(e), Object.keys(r).length === 0 && S.delete(n);
		}
		f.remove(e);
	}
	function se(t) {
		let n = f.get(t);
		e.deleteTexture(n.__webglTexture);
		let r = t.source, i = S.get(r);
		delete i[n.__cacheKey], h.memory.textures--;
	}
	function I(t) {
		let n = f.get(t);
		n.__depthDisposeCallback && n.__depthDisposeCallback();
		let r = t.depthTexture;
		if (r && r.renderTarget === t && re(r), t.isWebGLCubeRenderTarget) for (let t = 0; t < 6; t++) {
			if (Array.isArray(n.__webglFramebuffer[t])) for (let r = 0; r < n.__webglFramebuffer[t].length; r++) e.deleteFramebuffer(n.__webglFramebuffer[t][r]);
			else e.deleteFramebuffer(n.__webglFramebuffer[t]);
			n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
		}
		else {
			if (Array.isArray(n.__webglFramebuffer)) for (let t = 0; t < n.__webglFramebuffer.length; t++) e.deleteFramebuffer(n.__webglFramebuffer[t]);
			else e.deleteFramebuffer(n.__webglFramebuffer);
			if (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && e.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer) for (let t = 0; t < n.__webglColorRenderbuffer.length; t++) n.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
			n.__webglDepthRenderbuffer && e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
		}
		let i = t.textures;
		for (let t = 0, n = i.length; t < n; t++) {
			let n = f.get(i[t]);
			n.__webglTexture && (e.deleteTexture(n.__webglTexture), h.memory.textures--), f.remove(i[t]);
		}
		f.remove(t);
	}
	let ce = 0;
	function le() {
		ce = 0;
	}
	function ue() {
		return ce;
	}
	function de(e) {
		ce = e;
	}
	function fe() {
		let e = ce;
		return e >= p.maxTextures && V("WebGLTextures: Trying to use " + (e + 1) + " texture units while this GPU supports only " + p.maxTextures), ce += 1, e;
	}
	function pe(e) {
		let t = [];
		return t.push(e.wrapS), t.push(e.wrapT), t.push(e.wrapR || 0), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.mipmapsAutoUpdate), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.colorSpace), t.join();
	}
	function me(t, n) {
		let r = f.get(t);
		if (t.isVideoTexture && Ie(t), t.isRenderTargetTexture === !1 && t.isExternalTexture !== !0 && t.version > 0 && r.__version !== t.version) {
			let e = t.image;
			if (e === null) V("WebGLRenderer: Texture marked for update but no image data found.");
			else if (e.complete === !1) V("WebGLRenderer: Texture marked for update but image is incomplete");
			else {
				Te(r, t, n);
				return;
			}
		} else t.isExternalTexture && (r.__webglTexture = t.sourceTexture ? t.sourceTexture : null);
		d.bindTexture(e.TEXTURE_2D, r.__webglTexture, e.TEXTURE0 + n);
	}
	function he(t, n) {
		let r = f.get(t);
		t.isRenderTargetTexture === !1 && t.version > 0 && r.__version !== t.version ? Te(r, t, n) : (t.isExternalTexture && (r.__webglTexture = t.sourceTexture ? t.sourceTexture : null), d.bindTexture(e.TEXTURE_2D_ARRAY, r.__webglTexture, e.TEXTURE0 + n));
	}
	function ge(t, n) {
		let r = f.get(t);
		t.isRenderTargetTexture === !1 && t.version > 0 && r.__version !== t.version ? Te(r, t, n) : d.bindTexture(e.TEXTURE_3D, r.__webglTexture, e.TEXTURE0 + n);
	}
	function _e(t, n) {
		let r = f.get(t);
		t.version > 0 && r.__version !== t.version ? Ee(r, t, n) : d.bindTexture(e.TEXTURE_CUBE_MAP, r.__webglTexture, e.TEXTURE0 + n);
	}
	let ve = {
		[n]: e.REPEAT,
		[r]: e.CLAMP_TO_EDGE,
		[i]: e.MIRRORED_REPEAT
	}, ye = {
		[a]: e.NEAREST,
		[o]: e.NEAREST_MIPMAP_NEAREST,
		[s]: e.NEAREST_MIPMAP_LINEAR,
		[c]: e.LINEAR,
		[l]: e.LINEAR_MIPMAP_NEAREST,
		[u]: e.LINEAR_MIPMAP_LINEAR
	}, be = {
		512: e.NEVER,
		519: e.ALWAYS,
		513: e.LESS,
		515: e.LEQUAL,
		514: e.EQUAL,
		518: e.GEQUAL,
		516: e.GREATER,
		517: e.NOTEQUAL
	};
	function xe(n, r) {
		if (r.type === 1015 && t.has("OES_texture_float_linear") === !1 && (r.magFilter === 1006 || r.magFilter === 1007 || r.magFilter === 1005 || r.magFilter === 1008 || r.minFilter === 1006 || r.minFilter === 1007 || r.minFilter === 1005 || r.minFilter === 1008) && V("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(n, e.TEXTURE_WRAP_S, ve[r.wrapS]), e.texParameteri(n, e.TEXTURE_WRAP_T, ve[r.wrapT]), (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) && e.texParameteri(n, e.TEXTURE_WRAP_R, ve[r.wrapR]), e.texParameteri(n, e.TEXTURE_MAG_FILTER, ye[r.magFilter]), e.texParameteri(n, e.TEXTURE_MIN_FILTER, ye[r.minFilter]), r.compareFunction && (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, be[r.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
			if (r.magFilter === 1003 || r.minFilter !== 1005 && r.minFilter !== 1008 || r.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
			if (r.anisotropy > 1 || f.get(r).__currentAnisotropy) {
				let i = t.get("EXT_texture_filter_anisotropic");
				e.texParameterf(n, i.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(r.anisotropy, p.getMaxAnisotropy())), f.get(r).__currentAnisotropy = r.anisotropy;
			}
		}
	}
	function Se(t, n) {
		let r = !1;
		t.__webglInit === void 0 && (t.__webglInit = !0, n.addEventListener("dispose", ne), N(n));
		let i = n.source, a = S.get(i);
		a === void 0 && (a = {}, S.set(i, a));
		let o = pe(n);
		if (o !== t.__cacheKey) {
			a[o] === void 0 && (a[o] = {
				texture: e.createTexture(),
				usedTimes: 0
			}, h.memory.textures++, r = !0), a[o].usedTimes++;
			let i = a[t.__cacheKey];
			i !== void 0 && (a[t.__cacheKey].usedTimes--, i.usedTimes === 0 && se(n)), t.__cacheKey = o, t.__webglTexture = a[o].texture;
		}
		return r;
	}
	function Ce(e, t, n) {
		return Math.floor(Math.floor(e / n) / t);
	}
	function we(t, n, r, i) {
		let a = t.updateRanges;
		if (a.length === 0) d.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, n.width, n.height, r, i, n.data);
		else {
			a.sort((e, t) => e.start - t.start);
			let o = 0;
			for (let e = 1; e < a.length; e++) {
				let t = a[o], r = a[e], i = t.start + t.count, s = Ce(r.start, n.width, 4), c = Ce(t.start, n.width, 4);
				r.start <= i + 1 && s === c && Ce(r.start + r.count - 1, n.width, 4) === s ? t.count = Math.max(t.count, r.start + r.count - t.start) : (++o, a[o] = r);
			}
			a.length = o + 1;
			let s = d.getParameter(e.UNPACK_ROW_LENGTH), c = d.getParameter(e.UNPACK_SKIP_PIXELS), l = d.getParameter(e.UNPACK_SKIP_ROWS);
			d.pixelStorei(e.UNPACK_ROW_LENGTH, n.width);
			for (let t = 0, o = a.length; t < o; t++) {
				let o = a[t], s = Math.floor(o.start / 4), c = Math.ceil(o.count / 4), l = s % n.width, u = Math.floor(s / n.width), f = c;
				d.pixelStorei(e.UNPACK_SKIP_PIXELS, l), d.pixelStorei(e.UNPACK_SKIP_ROWS, u), d.texSubImage2D(e.TEXTURE_2D, 0, l, u, f, 1, r, i, n.data);
			}
			t.clearUpdateRanges(), d.pixelStorei(e.UNPACK_ROW_LENGTH, s), d.pixelStorei(e.UNPACK_SKIP_PIXELS, c), d.pixelStorei(e.UNPACK_SKIP_ROWS, l);
		}
	}
	function Te(t, n, r) {
		let i = e.TEXTURE_2D;
		(n.isDataArrayTexture || n.isCompressedArrayTexture) && (i = e.TEXTURE_2D_ARRAY), n.isData3DTexture && (i = e.TEXTURE_3D);
		let a = Se(t, n), o = n.source;
		d.bindTexture(i, t.__webglTexture, e.TEXTURE0 + r);
		let s = f.get(o);
		if (o.version !== s.__version || a === !0) {
			if (d.activeTexture(e.TEXTURE0 + r), !(typeof ImageBitmap < "u" && n.image instanceof ImageBitmap)) {
				let t = q.getPrimaries(q.workingColorSpace), r = n.colorSpace === "" ? null : q.getPrimaries(n.colorSpace), i = n.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
				d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, n.flipY), d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, i);
			}
			d.pixelStorei(e.UNPACK_ALIGNMENT, n.unpackAlignment);
			let t = D(n.image, !1, p.maxTextureSize);
			t = z(n, t);
			let c = m.convert(n.format, n.colorSpace), l = m.convert(n.type), u = ee(n.internalFormat, c, l, n.normalized, n.colorSpace, n.isVideoTexture);
			xe(i, n);
			let f, h = n.mipmaps, g = n.isVideoTexture !== !0, _ = s.__version === void 0 || a === !0, v = o.dataReady, y = M(n, t);
			if (n.isDepthTexture) u = te(n.format === O, n.type), _ && (g ? d.texStorage2D(e.TEXTURE_2D, 1, u, t.width, t.height) : d.texImage2D(e.TEXTURE_2D, 0, u, t.width, t.height, 0, c, l, null));
			else if (n.isDataTexture) {
				if (h.length > 0) {
					g && _ && d.texStorage2D(e.TEXTURE_2D, y, u, h[0].width, h[0].height);
					for (let t = 0, n = h.length; t < n; t++) f = h[t], g ? v && d.texSubImage2D(e.TEXTURE_2D, t, 0, 0, f.width, f.height, c, l, f.data) : d.texImage2D(e.TEXTURE_2D, t, u, f.width, f.height, 0, c, l, f.data);
					n.generateMipmaps = !1;
				} else g ? (_ && d.texStorage2D(e.TEXTURE_2D, y, u, t.width, t.height), v && we(n, t, c, l)) : d.texImage2D(e.TEXTURE_2D, 0, u, t.width, t.height, 0, c, l, t.data);
			} else if (n.isCompressedTexture) {
				if (n.isCompressedArrayTexture) {
					g && _ && d.texStorage3D(e.TEXTURE_2D_ARRAY, y, u, h[0].width, h[0].height, t.depth);
					for (let r = 0, i = h.length; r < i; r++) if (f = h[r], n.format !== 1023) {
						if (c !== null) {
							if (g) {
								if (v) {
									if (n.layerUpdates.size > 0) {
										let t = Zs(f.width, f.height, n.format, n.type);
										for (let i of n.layerUpdates) {
											let n = f.data.subarray(i * t / f.data.BYTES_PER_ELEMENT, (i + 1) * t / f.data.BYTES_PER_ELEMENT);
											d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, r, 0, 0, i, f.width, f.height, 1, c, n);
										}
									} else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, r, 0, 0, 0, f.width, f.height, t.depth, c, f.data);
								}
							} else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY, r, u, f.width, f.height, t.depth, 0, f.data, 0, 0);
						} else V("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
					} else g ? v && d.texSubImage3D(e.TEXTURE_2D_ARRAY, r, 0, 0, 0, f.width, f.height, t.depth, c, l, f.data) : d.texImage3D(e.TEXTURE_2D_ARRAY, r, u, f.width, f.height, t.depth, 0, c, l, f.data);
					n.layerUpdates.size > 0 && n.clearLayerUpdates();
				} else {
					g && _ && d.texStorage2D(e.TEXTURE_2D, y, u, h[0].width, h[0].height);
					for (let t = 0, r = h.length; t < r; t++) f = h[t], n.format === 1023 ? g ? v && d.texSubImage2D(e.TEXTURE_2D, t, 0, 0, f.width, f.height, c, l, f.data) : d.texImage2D(e.TEXTURE_2D, t, u, f.width, f.height, 0, c, l, f.data) : c === null ? V("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : g ? v && d.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, f.width, f.height, c, f.data) : d.compressedTexImage2D(e.TEXTURE_2D, t, u, f.width, f.height, 0, f.data);
				}
			} else if (n.isDataArrayTexture) {
				if (g) {
					if (_ && d.texStorage3D(e.TEXTURE_2D_ARRAY, y, u, t.width, t.height, t.depth), v) {
						if (n.layerUpdates.size > 0) {
							let r = Zs(t.width, t.height, n.format, n.type);
							for (let i of n.layerUpdates) {
								let n = t.data.subarray(i * r / t.data.BYTES_PER_ELEMENT, (i + 1) * r / t.data.BYTES_PER_ELEMENT);
								d.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, i, t.width, t.height, 1, c, l, n);
							}
							n.clearLayerUpdates();
						} else d.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, t.width, t.height, t.depth, c, l, t.data);
					}
				} else d.texImage3D(e.TEXTURE_2D_ARRAY, 0, u, t.width, t.height, t.depth, 0, c, l, t.data);
			} else if (n.isData3DTexture) g ? (_ && d.texStorage3D(e.TEXTURE_3D, y, u, t.width, t.height, t.depth), v && d.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, t.width, t.height, t.depth, c, l, t.data)) : d.texImage3D(e.TEXTURE_3D, 0, u, t.width, t.height, t.depth, 0, c, l, t.data);
			else if (n.isFramebufferTexture) {
				if (_) {
					if (g) d.texStorage2D(e.TEXTURE_2D, y, u, t.width, t.height);
					else {
						let n = t.width, r = t.height;
						for (let t = 0; t < y; t++) d.texImage2D(e.TEXTURE_2D, t, u, n, r, 0, c, l, null), n >>= 1, r >>= 1;
					}
				}
			} else if (n.isHTMLTexture) {
				if ("texElementImage2D" in e) {
					let r = e.canvas;
					if (r.hasAttribute("layoutsubtree") || r.setAttribute("layoutsubtree", "true"), t.parentNode !== r) {
						r.appendChild(t), b.add(n), r.onpaint = (e) => {
							let t = e.changedElements;
							for (let e of b) t.includes(e.image) && (e.needsUpdate = !0);
						}, r.requestPaint();
						return;
					}
					if (e.texElementImage2D.length === 3) e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, t);
					else {
						let n = e.RGBA, r = e.RGBA, i = e.UNSIGNED_BYTE;
						e.texElementImage2D(e.TEXTURE_2D, 0, n, r, i, t);
					}
					e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
				}
			} else if (h.length > 0) {
				if (g && _) {
					let t = B(h[0]);
					d.texStorage2D(e.TEXTURE_2D, y, u, t.width, t.height);
				}
				for (let t = 0, n = h.length; t < n; t++) f = h[t], g ? v && d.texSubImage2D(e.TEXTURE_2D, t, 0, 0, c, l, f) : d.texImage2D(e.TEXTURE_2D, t, u, c, l, f);
				n.generateMipmaps = !1;
			} else if (g) {
				if (_) {
					let n = B(t);
					d.texStorage2D(e.TEXTURE_2D, y, u, n.width, n.height);
				}
				v && d.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, c, l, t);
			} else d.texImage2D(e.TEXTURE_2D, 0, u, c, l, t);
			k(n) && n.mipmapsAutoUpdate === !0 && A(i), s.__version = o.version, n.onUpdate && n.onUpdate(n);
		}
		t.__version = n.version;
	}
	function Ee(t, n, r) {
		if (n.image.length !== 6) return;
		let i = Se(t, n), a = n.source;
		d.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + r);
		let o = f.get(a);
		if (a.version !== o.__version || i === !0) {
			d.activeTexture(e.TEXTURE0 + r);
			let t = q.getPrimaries(q.workingColorSpace), s = n.colorSpace === "" ? null : q.getPrimaries(n.colorSpace), c = n.colorSpace === "" || t === s ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
			d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, n.flipY), d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), d.pixelStorei(e.UNPACK_ALIGNMENT, n.unpackAlignment), d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, c);
			let l = n.isCompressedTexture || n.image[0].isCompressedTexture, u = n.image[0] && n.image[0].isDataTexture, f = [];
			for (let e = 0; e < 6; e++) !l && !u ? f[e] = D(n.image[e], !0, p.maxCubemapSize) : f[e] = u ? n.image[e].image : n.image[e], f[e] = z(n, f[e]);
			let h = f[0], g = m.convert(n.format, n.colorSpace), _ = m.convert(n.type), v = ee(n.internalFormat, g, _, n.normalized, n.colorSpace), y = n.isVideoTexture !== !0, b = o.__version === void 0 || i === !0, x = a.dataReady, S = M(n, h);
			xe(e.TEXTURE_CUBE_MAP, n);
			let C;
			if (n.isDepthTexture) {
				if (v = te(n.format === O, n.type), b) {
					if (y) d.texStorage2D(e.TEXTURE_CUBE_MAP, 1, v, h.width, h.height);
					else for (let t = 0; t < 6; t++) d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, v, h.width, h.height, 0, g, _, null);
				}
			} else if (l) {
				y && b && d.texStorage2D(e.TEXTURE_CUBE_MAP, S, v, h.width, h.height);
				for (let t = 0; t < 6; t++) {
					C = f[t].mipmaps;
					for (let r = 0; r < C.length; r++) {
						let i = C[r];
						n.format === 1023 ? y ? x && d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, g, _, i.data) : d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, v, i.width, i.height, 0, g, _, i.data) : g === null ? V("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : y ? x && d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, g, i.data) : d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, v, i.width, i.height, 0, i.data);
					}
				}
			} else {
				if (C = n.mipmaps, y && b) {
					C.length > 0 && S++;
					let t = B(f[0]);
					d.texStorage2D(e.TEXTURE_CUBE_MAP, S, v, t.width, t.height);
				}
				for (let t = 0; t < 6; t++) if (u) {
					y ? x && d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, f[t].width, f[t].height, g, _, f[t].data) : d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, v, f[t].width, f[t].height, 0, g, _, f[t].data);
					for (let n = 0; n < C.length; n++) {
						let r = C[n].image[t].image;
						y ? x && d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, n + 1, 0, 0, r.width, r.height, g, _, r.data) : d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, n + 1, v, r.width, r.height, 0, g, _, r.data);
					}
				} else {
					y ? x && d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, g, _, f[t]) : d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, v, g, _, f[t]);
					for (let n = 0; n < C.length; n++) {
						let r = C[n];
						y ? x && d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, n + 1, 0, 0, g, _, r.image[t]) : d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, n + 1, v, g, _, r.image[t]);
					}
				}
			}
			k(n) && n.mipmapsAutoUpdate === !0 && A(e.TEXTURE_CUBE_MAP), o.__version = a.version, n.onUpdate && n.onUpdate(n);
		}
		t.__version = n.version;
	}
	function De(t, n, r, i, a, o) {
		let s = m.convert(r.format, r.colorSpace), c = m.convert(r.type), l = ee(r.internalFormat, s, c, r.normalized, r.colorSpace), u = f.get(n), p = f.get(r);
		if (p.__renderTarget = n, !u.__hasExternalTextures) {
			let t = Math.max(1, n.width >> o), r = Math.max(1, n.height >> o);
			a === e.TEXTURE_3D || a === e.TEXTURE_2D_ARRAY ? d.texImage3D(a, o, l, t, r, n.depth, 0, s, c, null) : d.texImage2D(a, o, l, t, r, 0, s, c, null);
		}
		d.bindFramebuffer(e.FRAMEBUFFER, t), R(n) ? g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, i, a, p.__webglTexture, 0, Fe(n)) : (a === e.TEXTURE_2D || a >= e.TEXTURE_CUBE_MAP_POSITIVE_X && a <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, i, a, p.__webglTexture, o), d.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function Oe(t, n, r) {
		if (e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer) {
			let i = n.depthTexture, a = i && i.isDepthTexture ? i.type : null, o = te(n.stencilBuffer, a), s = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
			R(n) ? g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, Fe(n), o, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, Fe(n), o, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, o, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, s, e.RENDERBUFFER, t);
		} else {
			let t = n.textures;
			for (let i = 0; i < t.length; i++) {
				let a = t[i], o = m.convert(a.format, a.colorSpace), s = m.convert(a.type), c = ee(a.internalFormat, o, s, a.normalized, a.colorSpace);
				R(n) ? g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, Fe(n), c, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, Fe(n), c, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, c, n.width, n.height);
			}
		}
		e.bindRenderbuffer(e.RENDERBUFFER, null);
	}
	function ke(t, n, r) {
		let i = n.isWebGLCubeRenderTarget === !0;
		if (d.bindFramebuffer(e.FRAMEBUFFER, t), !(n.depthTexture && n.depthTexture.isDepthTexture)) throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
		let a = f.get(n.depthTexture);
		a.__renderTarget = n;
		let o = i ? n.depthTexture.image[0] : n.depthTexture.image;
		a.__webglTexture && o.width === n.width && o.height === n.height || (o.width = n.width, o.height = n.height, n.depthTexture.needsUpdate = !0), i ? _e(n.depthTexture, 0) : me(n.depthTexture, 0);
		let s = a.__webglTexture, c = Fe(n), l = i ? e.TEXTURE_CUBE_MAP_POSITIVE_X + r : e.TEXTURE_2D, u = n.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
		if (n.depthTexture.format === 1026) R(n) ? g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, u, l, s, 0, c) : e.framebufferTexture2D(e.FRAMEBUFFER, u, l, s, 0);
		else if (n.depthTexture.format === 1027) R(n) ? g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, u, l, s, 0, c) : e.framebufferTexture2D(e.FRAMEBUFFER, u, l, s, 0);
		else throw Error("THREE.WebGLTextures: Unknown depthTexture format.");
	}
	function Ae(t) {
		let n = f.get(t), r = t.isWebGLCubeRenderTarget === !0;
		if (n.__boundDepthTexture !== t.depthTexture) {
			let e = t.depthTexture;
			if (n.__depthDisposeCallback && n.__depthDisposeCallback(), e) {
				let t = () => {
					delete n.__boundDepthTexture, delete n.__depthDisposeCallback, e.removeEventListener("dispose", t);
				};
				e.addEventListener("dispose", t), n.__depthDisposeCallback = t;
			}
			n.__boundDepthTexture = e;
		}
		if (t.depthTexture && !n.__autoAllocateDepthBuffer) {
			if (r) for (let e = 0; e < 6; e++) ke(n.__webglFramebuffer[e], t, e);
			else t.texture.mipmaps.length > 0 ? ke(n.__webglFramebuffer[0], t, 0) : ke(n.__webglFramebuffer, t, 0);
		} else if (r) {
			n.__webglDepthbuffer = [];
			for (let r = 0; r < 6; r++) if (d.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer[r]), n.__webglDepthbuffer[r] === void 0) n.__webglDepthbuffer[r] = e.createRenderbuffer(), Oe(n.__webglDepthbuffer[r], t, !1);
			else {
				let i = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, a = n.__webglDepthbuffer[r];
				e.bindRenderbuffer(e.RENDERBUFFER, a), e.framebufferRenderbuffer(e.FRAMEBUFFER, i, e.RENDERBUFFER, a);
			}
		} else if (t.texture.mipmaps.length > 0 ? d.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer[0]) : d.bindFramebuffer(e.FRAMEBUFFER, n.__webglFramebuffer), n.__webglDepthbuffer === void 0) n.__webglDepthbuffer = e.createRenderbuffer(), Oe(n.__webglDepthbuffer, t, !1);
		else {
			let r = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, i = n.__webglDepthbuffer;
			e.bindRenderbuffer(e.RENDERBUFFER, i), e.framebufferRenderbuffer(e.FRAMEBUFFER, r, e.RENDERBUFFER, i);
		}
		d.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function je(t, n, r) {
		let i = f.get(t);
		n !== void 0 && De(i.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), r !== void 0 && Ae(t);
	}
	function Me(t) {
		let n = t.texture, r = f.get(t), i = f.get(n);
		t.addEventListener("dispose", F), N(t);
		let a = t.textures, o = t.isWebGLCubeRenderTarget === !0, s = a.length > 1;
		if (s || (i.__webglTexture === void 0 && (i.__webglTexture = e.createTexture()), i.__version = n.version, h.memory.textures++), o) {
			r.__webglFramebuffer = [];
			for (let t = 0; t < 6; t++) if (n.mipmaps.length > 0) {
				r.__webglFramebuffer[t] = [];
				for (let i = 0; i < n.mipmaps.length; i++) r.__webglFramebuffer[t][i] = e.createFramebuffer();
			} else r.__webglFramebuffer[t] = e.createFramebuffer();
		} else {
			if (n.mipmaps.length > 0) {
				r.__webglFramebuffer = [];
				for (let t = 0; t < n.mipmaps.length; t++) r.__webglFramebuffer[t] = e.createFramebuffer();
			} else r.__webglFramebuffer = e.createFramebuffer();
			if (s) for (let t = 0, n = a.length; t < n; t++) {
				let n = f.get(a[t]);
				n.__webglTexture === void 0 && (n.__webglTexture = e.createTexture(), h.memory.textures++);
			}
			if (t.samples > 0 && R(t) === !1) {
				r.__webglMultisampledFramebuffer = e.createFramebuffer(), r.__webglColorRenderbuffer = [], d.bindFramebuffer(e.FRAMEBUFFER, r.__webglMultisampledFramebuffer);
				for (let n = 0; n < a.length; n++) {
					let i = a[n];
					r.__webglColorRenderbuffer[n] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, r.__webglColorRenderbuffer[n]);
					let o = m.convert(i.format, i.colorSpace), s = m.convert(i.type), c = ee(i.internalFormat, o, s, i.normalized, i.colorSpace, t.isXRRenderTarget === !0), l = Fe(t);
					e.renderbufferStorageMultisample(e.RENDERBUFFER, l, c, t.width, t.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, r.__webglColorRenderbuffer[n]);
				}
				e.bindRenderbuffer(e.RENDERBUFFER, null), t.depthBuffer && (r.__webglDepthRenderbuffer = e.createRenderbuffer(), Oe(r.__webglDepthRenderbuffer, t, !0)), d.bindFramebuffer(e.FRAMEBUFFER, null);
			}
		}
		if (o) {
			d.bindTexture(e.TEXTURE_CUBE_MAP, i.__webglTexture), xe(e.TEXTURE_CUBE_MAP, n);
			for (let i = 0; i < 6; i++) if (n.mipmaps.length > 0) for (let a = 0; a < n.mipmaps.length; a++) De(r.__webglFramebuffer[i][a], t, n, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + i, a);
			else De(r.__webglFramebuffer[i], t, n, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0);
			k(n) ? A(e.TEXTURE_CUBE_MAP) : n.mipmaps.length > 0 && e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAX_LEVEL, n.mipmaps.length - 1), d.unbindTexture();
		} else if (s) {
			for (let n = 0, i = a.length; n < i; n++) {
				let i = a[n], o = f.get(i), s = e.TEXTURE_2D;
				(t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (s = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), d.bindTexture(s, o.__webglTexture), xe(s, i), De(r.__webglFramebuffer, t, i, e.COLOR_ATTACHMENT0 + n, s, 0), k(i) && A(s);
			}
			d.unbindTexture();
		} else {
			let a = e.TEXTURE_2D;
			if ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (a = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), d.bindTexture(a, i.__webglTexture), xe(a, n), n.mipmaps.length > 0) for (let i = 0; i < n.mipmaps.length; i++) De(r.__webglFramebuffer[i], t, n, e.COLOR_ATTACHMENT0, a, i);
			else De(r.__webglFramebuffer, t, n, e.COLOR_ATTACHMENT0, a, 0);
			k(n) ? A(a) : n.mipmaps.length > 0 && e.texParameteri(a, e.TEXTURE_MAX_LEVEL, n.mipmaps.length - 1), d.unbindTexture();
		}
		t.depthBuffer && Ae(t);
	}
	function L(e) {
		let t = e.textures;
		for (let n = 0, r = t.length; n < r; n++) {
			let r = t[n];
			if (k(r) && r.mipmapsAutoUpdate === !0) {
				let t = j(e), n = f.get(r).__webglTexture;
				d.bindTexture(t, n), A(t), d.unbindTexture();
			}
		}
	}
	let Ne = [];
	function Pe(t) {
		if (t.samples > 0) {
			if (R(t) === !1) {
				let n = t.textures, r = t.width, i = t.height, a = e.COLOR_BUFFER_BIT, o = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, s = f.get(t), c = n.length > 1;
				if (c) for (let t = 0; t < n.length; t++) d.bindFramebuffer(e.FRAMEBUFFER, s.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null), d.bindFramebuffer(e.FRAMEBUFFER, s.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
				d.bindFramebuffer(e.READ_FRAMEBUFFER, s.__webglMultisampledFramebuffer), t.texture.mipmaps.length > 0 ? d.bindFramebuffer(e.DRAW_FRAMEBUFFER, s.__webglFramebuffer[0]) : d.bindFramebuffer(e.DRAW_FRAMEBUFFER, s.__webglFramebuffer);
				for (let l = 0; l < n.length; l++) {
					if (t.resolveDepthBuffer && (t.depthBuffer && (a |= e.DEPTH_BUFFER_BIT), t.stencilBuffer && t.resolveStencilBuffer && (a |= e.STENCIL_BUFFER_BIT)), c) {
						e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, s.__webglColorRenderbuffer[l]);
						let t = f.get(n[l]).__webglTexture;
						e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
					}
					e.blitFramebuffer(0, 0, r, i, 0, 0, r, i, a, e.NEAREST), _ === !0 && (Ne.length = 0, Ne.push(e.COLOR_ATTACHMENT0 + l), t.depthBuffer && t.storeMultisampledDepthBuffer === !1 && Ne.push(o), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, Ne));
				}
				if (d.bindFramebuffer(e.READ_FRAMEBUFFER, null), d.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), c) for (let t = 0; t < n.length; t++) {
					d.bindFramebuffer(e.FRAMEBUFFER, s.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, s.__webglColorRenderbuffer[t]);
					let r = f.get(n[t]).__webglTexture;
					d.bindFramebuffer(e.FRAMEBUFFER, s.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, r, 0);
				}
				d.bindFramebuffer(e.DRAW_FRAMEBUFFER, s.__webglMultisampledFramebuffer);
			} else if (t.depthBuffer && t.storeMultisampledDepthBuffer === !1 && _) {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
				e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n]);
			}
		}
	}
	function Fe(e) {
		return Math.min(p.maxSamples, e.samples);
	}
	function R(e) {
		let n = f.get(e);
		return e.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && n.__useRenderToTexture !== !1;
	}
	function Ie(e) {
		let t = h.render.frame;
		y.get(e) !== t && (y.set(e, t), e.update());
	}
	function z(e, t) {
		let n = e.colorSpace, r = e.format, i = e.type;
		return e.isCompressedTexture === !0 || e.isVideoTexture === !0 || n !== "srgb-linear" && n !== "" && (q.getTransfer(n) === "srgb" ? (r !== 1023 || i !== 1009) && V("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : H("WebGLTextures: Unsupported texture color space:", n)), t;
	}
	function B(e) {
		return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement ? (v.width = e.naturalWidth || e.width, v.height = e.naturalHeight || e.height) : typeof VideoFrame < "u" && e instanceof VideoFrame ? (v.width = e.displayWidth, v.height = e.displayHeight) : (v.width = e.width, v.height = e.height), v;
	}
	this.allocateTextureUnit = fe, this.resetTextureUnits = le, this.getTextureUnits = ue, this.setTextureUnits = de, this.setTexture2D = me, this.setTexture2DArray = he, this.setTexture3D = ge, this.setTextureCube = _e, this.rebindTextures = je, this.setupRenderTarget = Me, this.updateRenderTargetMipmap = L, this.updateMultisampleRenderTarget = Pe, this.setupDepthRenderbuffer = Ae, this.setupFrameBufferTexture = De, this.useMultisampledRTT = R, this.dispose = ae;
}
function Xu(e, t) {
	function n(n, r = "") {
		let i, a = q.getTransfer(r);
		if (n === 1009) return e.UNSIGNED_BYTE;
		if (n === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
		if (n === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
		if (n === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
		if (n === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
		if (n === 1010) return e.BYTE;
		if (n === 1011) return e.SHORT;
		if (n === 1012) return e.UNSIGNED_SHORT;
		if (n === 1013) return e.INT;
		if (n === 1014) return e.UNSIGNED_INT;
		if (n === 1015) return e.FLOAT;
		if (n === 1016) return e.HALF_FLOAT;
		if (n === 1021) return e.ALPHA;
		if (n === 1022) return e.RGB;
		if (n === 1023) return e.RGBA;
		if (n === 1026) return e.DEPTH_COMPONENT;
		if (n === 1027) return e.DEPTH_STENCIL;
		if (n === 1028) return e.RED;
		if (n === 1029) return e.RED_INTEGER;
		if (n === 1030) return e.RG;
		if (n === 1031) return e.RG_INTEGER;
		if (n === 1033) return e.RGBA_INTEGER;
		if (n === 33776 || n === 33777 || n === 33778 || n === 33779) {
			if (a === "srgb") {
				if (i = t.get("WEBGL_compressed_texture_s3tc_srgb"), i !== null) {
					if (n === 33776) return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
					if (n === 33777) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
					if (n === 33778) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
					if (n === 33779) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
				} else return null;
			} else if (i = t.get("WEBGL_compressed_texture_s3tc"), i !== null) {
				if (n === 33776) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if (n === 33777) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if (n === 33778) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if (n === 33779) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
			} else return null;
		}
		if (n === 35840 || n === 35841 || n === 35842 || n === 35843) {
			if (i = t.get("WEBGL_compressed_texture_pvrtc"), i !== null) {
				if (n === 35840) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if (n === 35841) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if (n === 35842) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if (n === 35843) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
			} else return null;
		}
		if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491) {
			if (i = t.get("WEBGL_compressed_texture_etc"), i !== null) {
				if (n === 36196 || n === 37492) return a === "srgb" ? i.COMPRESSED_SRGB8_ETC2 : i.COMPRESSED_RGB8_ETC2;
				if (n === 37496) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i.COMPRESSED_RGBA8_ETC2_EAC;
				if (n === 37488) return i.COMPRESSED_R11_EAC;
				if (n === 37489) return i.COMPRESSED_SIGNED_R11_EAC;
				if (n === 37490) return i.COMPRESSED_RG11_EAC;
				if (n === 37491) return i.COMPRESSED_SIGNED_RG11_EAC;
			} else return null;
		}
		if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) {
			if (i = t.get("WEBGL_compressed_texture_astc"), i !== null) {
				if (n === 37808) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
				if (n === 37809) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
				if (n === 37810) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
				if (n === 37811) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
				if (n === 37812) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
				if (n === 37813) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
				if (n === 37814) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
				if (n === 37815) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
				if (n === 37816) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
				if (n === 37817) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
				if (n === 37818) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
				if (n === 37819) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
				if (n === 37820) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
				if (n === 37821) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i.COMPRESSED_RGBA_ASTC_12x12_KHR;
			} else return null;
		}
		if (n === 36492 || n === 36494 || n === 36495) {
			if (i = t.get("EXT_texture_compression_bptc"), i !== null) {
				if (n === 36492) return a === "srgb" ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
				if (n === 36494) return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
				if (n === 36495) return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
			} else return null;
		}
		if (n === 36283 || n === 36284 || n === 36285 || n === 36286) {
			if (i = t.get("EXT_texture_compression_rgtc"), i !== null) {
				if (n === 36283) return i.COMPRESSED_RED_RGTC1_EXT;
				if (n === 36284) return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
				if (n === 36285) return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
				if (n === 36286) return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
			} else return null;
		}
		return n === 1020 ? e.UNSIGNED_INT_24_8 : e[n] === void 0 ? null : e[n];
	}
	return { convert: n };
}
var Zu = "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", Qu = "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", $u = class {
	constructor() {
		this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
	}
	init(e, t) {
		if (this.texture === null) {
			let n = new Wi(e.texture);
			(e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
		}
	}
	getMesh(e) {
		if (this.texture !== null && this.mesh === null) {
			let t = e.cameras[0].viewport, n = new Mo({
				vertexShader: Zu,
				fragmentShader: Qu,
				uniforms: {
					depthColor: { value: this.texture },
					depthWidth: { value: t.z },
					depthHeight: { value: t.w }
				}
			});
			this.mesh = new _i(new ho(20, 20), n);
		}
		return this.mesh;
	}
	reset() {
		this.texture = null, this.mesh = null;
	}
	getDepthTexture() {
		return this.texture;
	}
}, ed = class extends et {
	constructor(e, t) {
		super();
		let n = this, r = null, i = 1, a = null, o = "local-floor", s = 1, c = null, l = null, u = null, f = null, p = null, m = null, h = typeof XRWebGLBinding < "u", _ = new $u(), v = {}, y = t.getContextAttributes(), b = null, S = null, C = [], w = [], T = new W(), k = null, A = null, j = new gs();
		j.viewport = new Gt();
		let ee = new gs();
		ee.viewport = new Gt();
		let te = [j, ee], M = new ws(), N = null, P = null;
		this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e) {
			let t = C[e];
			return t === void 0 && (t = new Dn(), C[e] = t), t.getTargetRaySpace();
		}, this.getControllerGrip = function(e) {
			let t = C[e];
			return t === void 0 && (t = new Dn(), C[e] = t), t.getGripSpace();
		}, this.getHand = function(e) {
			let t = C[e];
			return t === void 0 && (t = new Dn(), C[e] = t), t.getHandSpace();
		};
		function ne(e) {
			let t = w.indexOf(e.inputSource);
			if (t === -1) return;
			let n = C[t];
			n !== void 0 && (n.update(e.inputSource, e.frame, c || a), n.dispatchEvent({
				type: e.type,
				data: e.inputSource
			}));
		}
		function F() {
			r.removeEventListener("select", ne), r.removeEventListener("selectstart", ne), r.removeEventListener("selectend", ne), r.removeEventListener("squeeze", ne), r.removeEventListener("squeezestart", ne), r.removeEventListener("squeezeend", ne), r.removeEventListener("end", F), r.removeEventListener("inputsourceschange", re);
			for (let e = 0; e < C.length; e++) {
				let t = w[e];
				t !== null && (w[e] = null, C[e].disconnect(t));
			}
			N = null, P = null, _.reset();
			for (let e in v) delete v[e];
			if (e.setRenderTarget(b), p = null, f = null, u = null, r = null, S = null, I.stop(), n.isPresenting = !1, e.setPixelRatio(k), e.setSize(T.width, T.height, !1), A !== null) {
				let e = A.camera;
				e.fov = A.fov, e.zoom = A.zoom, e.updateProjectionMatrix(), A = null;
			}
			n.dispatchEvent({ type: "sessionend" });
		}
		this.setFramebufferScaleFactor = function(e) {
			i = e, n.isPresenting === !0 && V("WebXRManager: Cannot change framebuffer scale while presenting.");
		}, this.setReferenceSpaceType = function(e) {
			o = e, n.isPresenting === !0 && V("WebXRManager: Cannot change reference space type while presenting.");
		}, this.getReferenceSpace = function() {
			return c || a;
		}, this.setReferenceSpace = function(e) {
			c = e;
		}, this.getBaseLayer = function() {
			return f === null ? p : f;
		}, this.getBinding = function() {
			return u === null && h && (u = new XRWebGLBinding(r, t)), u;
		}, this.getFrame = function() {
			return m;
		}, this.getSession = function() {
			return r;
		}, this.setSession = async function(l) {
			if (r = l, r !== null) {
				if (b = e.getRenderTarget(), r.addEventListener("select", ne), r.addEventListener("selectstart", ne), r.addEventListener("selectend", ne), r.addEventListener("squeeze", ne), r.addEventListener("squeezestart", ne), r.addEventListener("squeezeend", ne), r.addEventListener("end", F), r.addEventListener("inputsourceschange", re), y.xrCompatible !== !0 && await t.makeXRCompatible(), k = e.getPixelRatio(), e.getSize(T), h && "createProjectionLayer" in XRWebGLBinding.prototype) {
					let n = null, a = null, o = null;
					y.depth && (o = y.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, n = y.stencil ? O : D, a = y.stencil ? x : g);
					let s = {
						colorFormat: t.RGBA8,
						depthFormat: o,
						scaleFactor: i
					};
					u = this.getBinding(), f = u.createProjectionLayer(s), r.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), S = new qt(f.textureWidth, f.textureHeight, {
						format: E,
						type: d,
						depthTexture: new Hi(f.textureWidth, f.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
						stencilBuffer: y.stencil,
						colorSpace: e.outputColorSpace,
						samples: y.antialias ? 4 : 0,
						resolveDepthBuffer: f.ignoreDepthValues === !1,
						resolveStencilBuffer: f.ignoreDepthValues === !1,
						storeMultisampledDepthBuffer: f.ignoreDepthValues === !1,
						storeMultisampledStencilBuffer: f.ignoreDepthValues === !1
					});
				} else {
					let n = {
						antialias: y.antialias,
						alpha: !0,
						depth: y.depth,
						stencil: y.stencil,
						framebufferScaleFactor: i
					};
					p = new XRWebGLLayer(r, t, n), r.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), S = new qt(p.framebufferWidth, p.framebufferHeight, {
						format: E,
						type: d,
						colorSpace: e.outputColorSpace,
						stencilBuffer: y.stencil,
						resolveDepthBuffer: p.ignoreDepthValues === !1,
						resolveStencilBuffer: p.ignoreDepthValues === !1,
						storeMultisampledDepthBuffer: p.ignoreDepthValues === !1,
						storeMultisampledStencilBuffer: p.ignoreDepthValues === !1
					});
				}
				S.isXRRenderTarget = !0, this.setFoveation(s), c = null, a = await r.requestReferenceSpace(o), I.setContext(r), I.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
			}
		}, this.getEnvironmentBlendMode = function() {
			if (r !== null) return r.environmentBlendMode;
		}, this.getDepthTexture = function() {
			return _.getDepthTexture();
		};
		function re(e) {
			for (let t = 0; t < e.removed.length; t++) {
				let n = e.removed[t], r = w.indexOf(n);
				r >= 0 && (w[r] = null, C[r].disconnect(n));
			}
			for (let t = 0; t < e.added.length; t++) {
				let n = e.added[t], r = w.indexOf(n);
				if (r === -1) {
					for (let e = 0; e < C.length; e++) if (e >= w.length) {
						w.push(n), r = e;
						break;
					} else if (w[e] === null) {
						w[e] = n, r = e;
						break;
					}
					if (r === -1) break;
				}
				let i = C[r];
				i && i.connect(n);
			}
		}
		function ie(e, t) {
			t === null ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert();
		}
		this.updateCamera = function(e) {
			if (r === null) return;
			let t = e.near, n = e.far;
			_.texture !== null && (_.depthNear > 0 && (t = _.depthNear), _.depthFar > 0 && (n = _.depthFar)), M.near = ee.near = j.near = t, M.far = ee.far = j.far = n, (N !== M.near || P !== M.far) && (r.updateRenderState({
				depthNear: M.near,
				depthFar: M.far
			}), N = M.near, P = M.far), M.layers.mask = e.layers.mask | 6, j.layers.mask = M.layers.mask & -5, ee.layers.mask = M.layers.mask & -3;
			let i = e.parent, a = M.cameras;
			ie(M, i);
			for (let e = 0; e < a.length; e++) ie(a[e], i);
			M.projectionMatrix.copy(j.projectionMatrix), M.projectionMatrixInverse.copy(j.projectionMatrixInverse), A === null && e.isPerspectiveCamera && (A = {
				camera: e,
				fov: e.fov,
				zoom: e.zoom
			}), ae(e, M, i);
		};
		function ae(e, t, n) {
			n === null ? e.matrix.copy(t.matrixWorld) : (e.matrix.copy(n.matrixWorld), e.matrix.invert(), e.matrix.multiply(t.matrixWorld)), e.matrix.decompose(e.position, e.quaternion, e.scale), e.updateMatrixWorld(!0), e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse), e.isPerspectiveCamera && (e.fov = it * 2 * Math.atan(1 / e.projectionMatrix.elements[5]), e.zoom = 1);
		}
		this.getCamera = function() {
			return M;
		}, this.getFoveation = function() {
			if (f !== null || p !== null) return s;
		}, this.setFoveation = function(e) {
			s = e, f !== null && (f.fixedFoveation = e), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = e);
		}, this.hasDepthSensing = function() {
			return _.texture !== null;
		}, this.getDepthSensingMesh = function() {
			return _.getMesh(M);
		}, this.getCameraTexture = function(e) {
			return v[e];
		};
		let oe = null;
		function se(t, i) {
			if (l = i.getViewerPose(c || a), m = i, l !== null) {
				let t = l.views;
				p !== null && (e.setRenderTargetFramebuffer(S, p.framebuffer), e.setRenderTarget(S));
				let i = !1;
				t.length !== M.cameras.length && (M.cameras.length = 0, i = !0);
				for (let n = 0; n < t.length; n++) {
					let r = t[n], a = null;
					if (p !== null) a = p.getViewport(r);
					else {
						let t = u.getViewSubImage(f, r);
						a = t.viewport, n === 0 && (e.setRenderTargetTextures(S, t.colorTexture, t.depthStencilTexture), e.setRenderTarget(S));
					}
					let o = te[n];
					o === void 0 && (o = new gs(), o.layers.enable(n), o.viewport = new Gt(), te[n] = o), o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.projectionMatrix.fromArray(r.projectionMatrix), o.projectionMatrixInverse.copy(o.projectionMatrix).invert(), o.viewport.set(a.x, a.y, a.width, a.height), n === 0 && (M.matrix.copy(o.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), i === !0 && M.cameras.push(o);
				}
				let a = r.enabledFeatures;
				if (a && a.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && h) {
					u = n.getBinding();
					let e = u.getDepthInformation(t[0]);
					e && e.isValid && e.texture && _.init(e, r.renderState);
				}
				if (a && a.includes("camera-access") && h) {
					e.state.unbindTexture(), u = n.getBinding();
					for (let e = 0; e < t.length; e++) {
						let n = t[e].camera;
						if (n) {
							let e = v[n];
							e || (e = new Wi(), v[n] = e);
							let t = u.getCameraImage(n);
							e.sourceTexture = t;
						}
					}
				}
			}
			for (let e = 0; e < C.length; e++) {
				let t = w[e], n = C[e];
				t !== null && n !== void 0 && n.update(t, i, c || a);
			}
			oe && oe(t, i), i.detectedPlanes && n.dispatchEvent({
				type: "planesdetected",
				data: i
			}), m = null;
		}
		let I = new $s();
		I.setAnimationLoop(se), this.setAnimationLoop = function(e) {
			oe = e;
		}, this.dispose = function() {};
	}
}, td = /*@__PURE__*/ new Xt(), nd = /*@__PURE__*/ new K();
nd.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function rd(e, t) {
	function n(e, t) {
		e.matrixAutoUpdate === !0 && e.updateMatrix(), t.value.copy(e.matrix);
	}
	function r(t, n) {
		n.color.getRGB(t.fogColor.value, Oo(e)), n.isFog ? (t.fogNear.value = n.near, t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density);
	}
	function i(e, t, n, r, i) {
		t.isNodeMaterial ? t.uniformsNeedUpdate = !1 : t.isMeshBasicMaterial ? a(e, t) : t.isMeshLambertMaterial ? (a(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshToonMaterial ? (a(e, t), d(e, t)) : t.isMeshPhongMaterial ? (a(e, t), u(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshStandardMaterial ? (a(e, t), f(e, t), t.isMeshPhysicalMaterial && p(e, t, i)) : t.isMeshMatcapMaterial ? (a(e, t), m(e, t)) : t.isMeshDepthMaterial ? a(e, t) : t.isMeshDistanceMaterial ? (a(e, t), h(e, t)) : t.isMeshNormalMaterial ? a(e, t) : t.isLineBasicMaterial ? (o(e, t), t.isLineDashedMaterial && s(e, t)) : t.isPointsMaterial ? c(e, t, n, r) : t.isSpriteMaterial ? l(e, t) : t.isShadowMaterial ? (e.color.value.copy(t.color), e.opacity.value = t.opacity) : t.isShaderMaterial && (t.uniformsNeedUpdate = !1);
	}
	function a(e, r) {
		e.opacity.value = r.opacity, r.color && e.diffuse.value.copy(r.color), r.emissive && e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (e.map.value = r.map, n(r.map, e.mapTransform)), r.alphaMap && (e.alphaMap.value = r.alphaMap, n(r.alphaMap, e.alphaMapTransform)), r.bumpMap && (e.bumpMap.value = r.bumpMap, n(r.bumpMap, e.bumpMapTransform), e.bumpScale.value = r.bumpScale, r.side === 1 && (e.bumpScale.value *= -1)), r.normalMap && (e.normalMap.value = r.normalMap, n(r.normalMap, e.normalMapTransform), e.normalScale.value.copy(r.normalScale), r.side === 1 && e.normalScale.value.negate()), r.displacementMap && (e.displacementMap.value = r.displacementMap, n(r.displacementMap, e.displacementMapTransform), e.displacementScale.value = r.displacementScale, e.displacementBias.value = r.displacementBias), r.emissiveMap && (e.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, e.emissiveMapTransform)), r.specularMap && (e.specularMap.value = r.specularMap, n(r.specularMap, e.specularMapTransform)), r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest);
		let i = t.get(r), a = i.envMap, o = i.envMapRotation;
		a && (e.envMap.value = a, e.envMapRotation.value.setFromMatrix4(td.makeRotationFromEuler(o)).transpose(), a.isCubeTexture && a.isRenderTargetTexture === !1 && e.envMapRotation.value.premultiply(nd), e.reflectivity.value = r.reflectivity, e.ior.value = r.ior, e.refractionRatio.value = r.refractionRatio), r.lightMap && (e.lightMap.value = r.lightMap, e.lightMapIntensity.value = r.lightMapIntensity, n(r.lightMap, e.lightMapTransform)), r.aoMap && (e.aoMap.value = r.aoMap, e.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, e.aoMapTransform));
	}
	function o(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, t.map && (e.map.value = t.map, n(t.map, e.mapTransform));
	}
	function s(e, t) {
		e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale;
	}
	function c(e, t, r, i) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * r, e.scale.value = i * .5, t.map && (e.map.value = t.map, n(t.map, e.uvTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function l(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map, n(t.map, e.mapTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function u(e, t) {
		e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4);
	}
	function d(e, t) {
		t.gradientMap && (e.gradientMap.value = t.gradientMap);
	}
	function f(e, t) {
		e.metalness.value = t.metalness, t.metalnessMap && (e.metalnessMap.value = t.metalnessMap, n(t.metalnessMap, e.metalnessMapTransform)), e.roughness.value = t.roughness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap, n(t.roughnessMap, e.roughnessMapTransform)), t.envMap && (e.envMapIntensity.value = t.envMapIntensity);
	}
	function p(e, t, r) {
		e.ior.value = t.ior, t.diffuseRoughness > 0 && (e.diffuseRoughness.value = t.diffuseRoughness, t.diffuseRoughnessMap && (e.diffuseRoughnessMap.value = t.diffuseRoughnessMap, n(t.diffuseRoughnessMap, e.diffuseRoughnessMapTransform))), t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap, n(t.sheenColorMap, e.sheenColorMapTransform)), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap, n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))), t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap, n(t.clearcoatMap, e.clearcoatMapTransform)), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap, n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)), t.clearcoatNormalMap && (e.clearcoatNormalMap.value = t.clearcoatNormalMap, n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform), e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), t.side === 1 && e.clearcoatNormalScale.value.negate())), t.dispersion > 0 && (e.dispersion.value = t.dispersion), t.retroreflectivity > 0 && (e.retroreflectivity.value = t.retroreflectivity), t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessMinimum, e.iridescenceThicknessMaximum.value = t.iridescenceThicknessMaximum, t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap, n(t.iridescenceMap, e.iridescenceMapTransform)), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap, n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))), t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = r.texture, e.transmissionSamplerSize.value.set(r.width, r.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap, n(t.transmissionMap, e.transmissionMapTransform)), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap, n(t.thicknessMap, e.thicknessMapTransform)), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor)), t.anisotropy > 0 && (e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation)), t.anisotropyMap && (e.anisotropyMap.value = t.anisotropyMap, n(t.anisotropyMap, e.anisotropyMapTransform))), e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularColorMap && (e.specularColorMap.value = t.specularColorMap, n(t.specularColorMap, e.specularColorMapTransform)), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap, n(t.specularIntensityMap, e.specularIntensityMapTransform));
	}
	function m(e, t) {
		t.matcap && (e.matcap.value = t.matcap);
	}
	function h(e, n) {
		let r = t.get(n).light;
		e.referencePosition.value.setFromMatrixPosition(r.matrixWorld), e.nearDistance.value = r.shadow.camera.near, e.farDistance.value = r.shadow.camera.far;
	}
	return {
		refreshFogUniforms: r,
		refreshMaterialUniforms: i
	};
}
function id(e, t, n, r) {
	let i = {}, a = {};
	function o(e, t) {
		let n = t.program;
		r.uniformBlockBinding(e, n, i[e.id]);
	}
	function s(e, n) {
		let o = i[e.id];
		o === void 0 && (m(e), o = c(e), i[e.id] = o, e.addEventListener("dispose", g));
		let s = n.program;
		r.updateUBOMapping(e, s);
		let u = t.render.frame;
		a[e.id] !== u && (l(e), a[e.id] = u);
	}
	function c(t) {
		let n = e.createBuffer(), r = t.__size, i = t.usage;
		return e.bindBuffer(e.UNIFORM_BUFFER, n), e.bufferData(e.UNIFORM_BUFFER, r, i), e.bindBuffer(e.UNIFORM_BUFFER, null), n;
	}
	function l(t) {
		let n = i[t.id], r = t.uniforms, a = t.__cache;
		e.bindBuffer(e.UNIFORM_BUFFER, n);
		for (let e = 0, t = r.length; e < t; e++) {
			let t = r[e];
			if (Array.isArray(t)) for (let n = 0, r = t.length; n < r; n++) u(t[n], e, n, a);
			else u(t, e, 0, a);
		}
		e.bindBuffer(e.UNIFORM_BUFFER, null);
	}
	function u(t, n, r, i) {
		if (f(t, n, r, i) === !0) {
			let n = t.__offset, r = t.value;
			if (Array.isArray(r)) {
				let e = 0;
				for (let n = 0; n < r.length; n++) {
					let i = r[n], a = h(i, !0);
					d(i, t.__data, e), e += a.storage / Float32Array.BYTES_PER_ELEMENT;
				}
			} else d(r, t.__data, 0);
			e.bufferSubData(e.UNIFORM_BUFFER, n, t.__data);
		}
	}
	function d(e, t, n) {
		typeof e == "number" || typeof e == "boolean" ? t[n] = e : e.isMatrix3 ? (t[n] = e.elements[0], t[n + 1] = e.elements[1], t[n + 2] = e.elements[2], t[n + 3] = 0, t[n + 4] = e.elements[3], t[n + 5] = e.elements[4], t[n + 6] = e.elements[5], t[n + 7] = 0, t[n + 8] = e.elements[6], t[n + 9] = e.elements[7], t[n + 10] = e.elements[8], t[n + 11] = 0) : ArrayBuffer.isView(e) ? t.set(e.subarray(0, t.length - n), n) : e.toArray(t, n);
	}
	function f(e, t, n, r) {
		let i = e.value, a = t + "_" + n;
		if (Array.isArray(i)) {
			r[a] === void 0 && (r[a] = []);
			let e = r[a], t = !1;
			for (let n = 0; n < i.length; n++) p(i[n], e, n) === !0 && (t = !0);
			return t;
		}
		return p(i, r, a);
	}
	function p(e, t, n) {
		if (t[n] === void 0) return t[n] = typeof e == "number" || typeof e == "boolean" ? e : ArrayBuffer.isView(e) ? e.slice() : e.clone(), !0;
		{
			let r = t[n];
			if (typeof e == "number" || typeof e == "boolean") {
				if (r !== e) return t[n] = e, !0;
			} else if (ArrayBuffer.isView(e)) return !0;
			else if (r.equals(e) === !1) return r.copy(e), !0;
		}
		return !1;
	}
	function m(e) {
		let t = e.uniforms, n = 0;
		for (let e = 0, r = t.length; e < r; e++) {
			let r = Array.isArray(t[e]) ? t[e] : [t[e]];
			for (let i = 0, a = r.length; i < a; i++) {
				let a = r[i], o = Array.isArray(a.value) ? a.value : [a.value], s = Array.isArray(t[e]) || Array.isArray(a.value), c = n;
				for (let e = 0, t = o.length; e < t; e++) {
					let t = o[e], r = h(t, s), i = n % 16, a = i % r.boundary, l = i + a;
					n += a, l !== 0 && 16 - l < r.storage && (n += 16 - l), e === 0 && (c = n), n += r.storage;
				}
				a.__data = new (a.type === "int" ? Int32Array : a.type === "uint" ? Uint32Array : Float32Array)((n - c) / Float32Array.BYTES_PER_ELEMENT), a.__offset = c;
			}
		}
		let r = n % 16;
		return r > 0 && (n += 16 - r), e.__size = n, e.__cache = {}, this;
	}
	function h(e, t) {
		let n = {
			boundary: 0,
			storage: 0
		};
		return typeof e == "number" || typeof e == "boolean" ? (n.boundary = 4, n.storage = 4) : e.isVector2 ? (n.boundary = 8, n.storage = 8) : e.isVector3 || e.isColor ? (n.boundary = 16, n.storage = 12) : e.isVector4 ? (n.boundary = 16, n.storage = 16) : e.isMatrix3 ? (n.boundary = 16, n.storage = 48) : e.isMatrix4 ? (n.boundary = 16, n.storage = 64) : e.isTexture ? V("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(e) ? (n.boundary = 16, n.storage = e.byteLength) : V("WebGLRenderer: Unsupported uniform value type.", e), t === !0 && (n.boundary = 16, n.storage = Math.ceil(n.storage / 16) * 16), n;
	}
	function g(t) {
		let n = t.target;
		n.removeEventListener("dispose", g), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id];
	}
	function _() {
		for (let t in i) e.deleteBuffer(i[t]);
		i = {}, a = {};
	}
	return {
		bind: o,
		update: s,
		dispose: _
	};
}
var ad = new Uint16Array([
	12469,
	15057,
	12620,
	14925,
	13266,
	14620,
	13807,
	14376,
	14323,
	13990,
	14545,
	13625,
	14713,
	13328,
	14840,
	12882,
	14931,
	12528,
	14996,
	12233,
	15039,
	11829,
	15066,
	11525,
	15080,
	11295,
	15085,
	10976,
	15082,
	10705,
	15073,
	10495,
	13880,
	14564,
	13898,
	14542,
	13977,
	14430,
	14158,
	14124,
	14393,
	13732,
	14556,
	13410,
	14702,
	12996,
	14814,
	12596,
	14891,
	12291,
	14937,
	11834,
	14957,
	11489,
	14958,
	11194,
	14943,
	10803,
	14921,
	10506,
	14893,
	10278,
	14858,
	9960,
	14484,
	14039,
	14487,
	14025,
	14499,
	13941,
	14524,
	13740,
	14574,
	13468,
	14654,
	13106,
	14743,
	12678,
	14818,
	12344,
	14867,
	11893,
	14889,
	11509,
	14893,
	11180,
	14881,
	10751,
	14852,
	10428,
	14812,
	10128,
	14765,
	9754,
	14712,
	9466,
	14764,
	13480,
	14764,
	13475,
	14766,
	13440,
	14766,
	13347,
	14769,
	13070,
	14786,
	12713,
	14816,
	12387,
	14844,
	11957,
	14860,
	11549,
	14868,
	11215,
	14855,
	10751,
	14825,
	10403,
	14782,
	10044,
	14729,
	9651,
	14666,
	9352,
	14599,
	9029,
	14967,
	12835,
	14966,
	12831,
	14963,
	12804,
	14954,
	12723,
	14936,
	12564,
	14917,
	12347,
	14900,
	11958,
	14886,
	11569,
	14878,
	11247,
	14859,
	10765,
	14828,
	10401,
	14784,
	10011,
	14727,
	9600,
	14660,
	9289,
	14586,
	8893,
	14508,
	8533,
	15111,
	12234,
	15110,
	12234,
	15104,
	12216,
	15092,
	12156,
	15067,
	12010,
	15028,
	11776,
	14981,
	11500,
	14942,
	11205,
	14902,
	10752,
	14861,
	10393,
	14812,
	9991,
	14752,
	9570,
	14682,
	9252,
	14603,
	8808,
	14519,
	8445,
	14431,
	8145,
	15209,
	11449,
	15208,
	11451,
	15202,
	11451,
	15190,
	11438,
	15163,
	11384,
	15117,
	11274,
	15055,
	10979,
	14994,
	10648,
	14932,
	10343,
	14871,
	9936,
	14803,
	9532,
	14729,
	9218,
	14645,
	8742,
	14556,
	8381,
	14461,
	8020,
	14365,
	7603,
	15273,
	10603,
	15272,
	10607,
	15267,
	10619,
	15256,
	10631,
	15231,
	10614,
	15182,
	10535,
	15118,
	10389,
	15042,
	10167,
	14963,
	9787,
	14883,
	9447,
	14800,
	9115,
	14710,
	8665,
	14615,
	8318,
	14514,
	7911,
	14411,
	7507,
	14279,
	7198,
	15314,
	9675,
	15313,
	9683,
	15309,
	9712,
	15298,
	9759,
	15277,
	9797,
	15229,
	9773,
	15166,
	9668,
	15084,
	9487,
	14995,
	9274,
	14898,
	8910,
	14800,
	8539,
	14697,
	8234,
	14590,
	7790,
	14479,
	7409,
	14367,
	7067,
	14178,
	6621,
	15337,
	8619,
	15337,
	8631,
	15333,
	8677,
	15325,
	8769,
	15305,
	8871,
	15264,
	8940,
	15202,
	8909,
	15119,
	8775,
	15022,
	8565,
	14916,
	8328,
	14804,
	8009,
	14688,
	7614,
	14569,
	7287,
	14448,
	6888,
	14321,
	6483,
	14088,
	6171,
	15350,
	7402,
	15350,
	7419,
	15347,
	7480,
	15340,
	7613,
	15322,
	7804,
	15287,
	7973,
	15229,
	8057,
	15148,
	8012,
	15046,
	7846,
	14933,
	7611,
	14810,
	7357,
	14682,
	7069,
	14552,
	6656,
	14421,
	6316,
	14251,
	5948,
	14007,
	5528,
	15356,
	5942,
	15356,
	5977,
	15353,
	6119,
	15348,
	6294,
	15332,
	6551,
	15302,
	6824,
	15249,
	7044,
	15171,
	7122,
	15070,
	7050,
	14949,
	6861,
	14818,
	6611,
	14679,
	6349,
	14538,
	6067,
	14398,
	5651,
	14189,
	5311,
	13935,
	4958,
	15359,
	4123,
	15359,
	4153,
	15356,
	4296,
	15353,
	4646,
	15338,
	5160,
	15311,
	5508,
	15263,
	5829,
	15188,
	6042,
	15088,
	6094,
	14966,
	6001,
	14826,
	5796,
	14678,
	5543,
	14527,
	5287,
	14377,
	4985,
	14133,
	4586,
	13869,
	4257,
	15360,
	1563,
	15360,
	1642,
	15358,
	2076,
	15354,
	2636,
	15341,
	3350,
	15317,
	4019,
	15273,
	4429,
	15203,
	4732,
	15105,
	4911,
	14981,
	4932,
	14836,
	4818,
	14679,
	4621,
	14517,
	4386,
	14359,
	4156,
	14083,
	3795,
	13808,
	3437,
	15360,
	122,
	15360,
	137,
	15358,
	285,
	15355,
	636,
	15344,
	1274,
	15322,
	2177,
	15281,
	2765,
	15215,
	3223,
	15120,
	3451,
	14995,
	3569,
	14846,
	3567,
	14681,
	3466,
	14511,
	3305,
	14344,
	3121,
	14037,
	2800,
	13753,
	2467,
	15360,
	0,
	15360,
	1,
	15359,
	21,
	15355,
	89,
	15346,
	253,
	15325,
	479,
	15287,
	796,
	15225,
	1148,
	15133,
	1492,
	15008,
	1749,
	14856,
	1882,
	14685,
	1886,
	14506,
	1783,
	14324,
	1608,
	13996,
	1398,
	13702,
	1183
]), od = null;
function sd() {
	return od === null && (od = new bi(ad, 16, 16, j, v), od.name = "DFG_LUT", od.minFilter = c, od.magFilter = c, od.wrapS = r, od.wrapT = r, od.generateMipmaps = !1, od.needsUpdate = !0), od;
}
var cd = class {
	constructor(e = {}) {
		let { canvas: t = qe(), context: n = null, depth: r = !0, stencil: i = !1, alpha: a = !1, antialias: o = !1, premultipliedAlpha: s = !0, preserveDrawingBuffer: c = !1, powerPreference: l = "default", failIfMajorPerformanceCaveat: f = !1, reversedDepthBuffer: p = !1, outputBufferType: h = d } = e;
		this.isWebGLRenderer = !0;
		let _;
		if (n !== null) {
			if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
			_ = n.getContextAttributes().alpha;
		} else _ = a;
		let S = h, C = /* @__PURE__ */ new Set([
			te,
			ee,
			A
		]), w = /* @__PURE__ */ new Set([
			d,
			g,
			m,
			x,
			y,
			b
		]), T = /* @__PURE__ */ new Uint32Array(4), E = /* @__PURE__ */ new Int32Array(4), D = {
			textures: [],
			min: [],
			max: [],
			resolution: []
		}, O = null, k = null, j = [], M = [], N = null;
		this.domElement = t, this.debug = {
			checkShaderErrors: !0,
			diagnostics: { keywords: !1 },
			onShaderError: null
		}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
		let P = this, ne = !1, F = null, re = null, ie = null, ae = null;
		this._outputColorSpace = Le;
		let oe = 0, se = 0, I = null, ce = -1, le = null, ue = new Gt(), de = new Gt(), fe = null, pe = new J(0), me = 0, he = t.width, ge = t.height, _e = 1, ve = null, ye = null, be = new Gt(0, 0, he, ge), xe = new Gt(0, 0, he, ge), Se = !1, Ce = new wi(), we = new Ei(), Te = !1, Ee = !1, De = new Xt(), Oe = new G(), ke = new Gt(), Ae = {
			background: null,
			fog: null,
			environment: null,
			overrideMaterial: null,
			isScene: !0
		}, je = !1;
		function Me() {
			return I === null ? _e : 1;
		}
		let L = n;
		function Ne(e, n) {
			return t.getContext(e, n);
		}
		let Pe, Fe, R, Ie, z, B, Re, ze, Be, Ve, He, We, Ge, Ke, Je, Xe, Ze, $e, et, tt, nt, rt, it;
		try {
			let e = {
				alpha: !0,
				depth: r,
				stencil: i,
				antialias: o,
				premultipliedAlpha: s,
				preserveDrawingBuffer: c,
				powerPreference: l,
				failIfMajorPerformanceCaveat: f
			};
			if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r187"), t.addEventListener("webglcontextlost", ot, !1), t.addEventListener("webglcontextrestored", st, !1), t.addEventListener("webglcontextcreationerror", ct, !1), L === null) {
				let t = "webgl2";
				if (L = Ne(t, e), L === null) throw Ne(t) ? Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : Error("THREE.WebGLRenderer: Error creating WebGL context.");
			}
			at();
		} catch (e) {
			throw t.removeEventListener("webglcontextlost", ot, !1), t.removeEventListener("webglcontextrestored", st, !1), t.removeEventListener("webglcontextcreationerror", ct, !1), H("WebGLRenderer: " + e.message), e;
		}
		function at() {
			Pe = new Oc(L), Pe.init(), nt = new Xu(L, Pe), Fe = new cc(L, Pe, e, nt), R = new Ju(L, Pe), Fe.reversedDepthBuffer && p && R.buffers.depth.setReversed(!0), re = L.createFramebuffer(), ie = L.createFramebuffer(), ae = L.createFramebuffer(), Ie = new jc(L), z = new Ou(), B = new Yu(L, Pe, R, z, Fe, nt, Ie), Re = new Dc(P), ze = new ec(L), rt = new oc(L, ze), Be = new kc(L, ze, Ie, rt), Ve = new Nc(L, Be, ze, rt, Ie), $e = new Mc(L, Fe, B), Je = new lc(z), He = new Du(P, Re, Pe, Fe, rt, Je), We = new rd(P, z), Ge = new Mu(), Ke = new zu(Pe), Ze = new ac(P, Re, R, Ve, _, s), Xe = new qu(P, Ve, Fe), it = new id(L, Ie, Fe, R), et = new sc(L, Pe, Ie), tt = new Ac(L, Pe, Ie), Ie.programs = He.programs, P.capabilities = Fe, P.extensions = Pe, P.properties = z, P.renderLists = Ge, P.shadowMap = Xe, P.state = R, P.info = Ie;
		}
		S !== 1009 && (N = new Fc(S, t.width, t.height, o, r, i));
		let U = new ed(P, L);
		this.xr = U, this.getContext = function() {
			return L;
		}, this.getContextAttributes = function() {
			return L.getContextAttributes();
		}, this.forceContextLoss = function() {
			let e = Pe.get("WEBGL_lose_context");
			e && e.loseContext();
		}, this.forceContextRestore = function() {
			let e = Pe.get("WEBGL_lose_context");
			e && e.restoreContext();
		}, this.getPixelRatio = function() {
			return _e;
		}, this.setPixelRatio = function(e) {
			e !== void 0 && (_e = e, this.setSize(he, ge, !1));
		}, this.getSize = function(e) {
			return e.set(he, ge);
		}, this.setSize = function(e, n, r = !0) {
			U.isPresenting ? V("WebGLRenderer: Can't change size while VR device is presenting.") : (he = e, ge = n, t.width = Math.floor(e * _e), t.height = Math.floor(n * _e), r === !0 && (t.style.width = e + "px", t.style.height = n + "px"), N !== null && N.setSize(t.width, t.height), this.setViewport(0, 0, e, n));
		}, this.getDrawingBufferSize = function(e) {
			return e.set(he * _e, ge * _e).floor();
		}, this.setDrawingBufferSize = function(e, n, r) {
			he = e, ge = n, _e = r, t.width = Math.floor(e * r), t.height = Math.floor(n * r), this.setViewport(0, 0, e, n);
		}, this.setEffects = function(e) {
			if (S === 1009) H("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
			else {
				if (e) {
					for (let t = 0; t < e.length; t++) if (e[t].isOutputPass === !0) {
						V("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
						break;
					}
				}
				N.setEffects(e || []);
			}
		}, this.getCurrentViewport = function(e) {
			return e.copy(ue);
		}, this.getViewport = function(e) {
			return e.copy(be);
		}, this.setViewport = function(e, t, n, r) {
			e.isVector4 ? be.set(e.x, e.y, e.z, e.w) : be.set(e, t, n, r), R.viewport(ue.copy(be).multiplyScalar(Me()).round());
		}, this.getScissor = function(e) {
			return e.copy(xe);
		}, this.setScissor = function(e, t, n, r) {
			e.isVector4 ? xe.set(e.x, e.y, e.z, e.w) : xe.set(e, t, n, r), R.scissor(de.copy(xe).multiplyScalar(Me()).round());
		}, this.getScissorTest = function() {
			return Se;
		}, this.setScissorTest = function(e) {
			R.setScissorTest(Se = e);
		}, this.setOpaqueSort = function(e) {
			ve = e;
		}, this.setTransparentSort = function(e) {
			ye = e;
		}, this.getClearColor = function(e) {
			return e.copy(Ze.getClearColor());
		}, this.setClearColor = function() {
			Ze.setClearColor(...arguments);
		}, this.getClearAlpha = function() {
			return Ze.getClearAlpha();
		}, this.setClearAlpha = function() {
			Ze.setClearAlpha(...arguments);
		}, this.clear = function(e = !0, t = !0, n = !0) {
			let r = 0;
			if (e) {
				let e = !1;
				if (I !== null) {
					let t = I.texture.format;
					e = C.has(t);
				}
				if (e) {
					let e = I.texture.type, t = w.has(e), n = Ze.getClearColor(), r = Ze.getClearAlpha(), i = n.r, a = n.g, o = n.b;
					t ? (T[0] = i, T[1] = a, T[2] = o, T[3] = r, L.clearBufferuiv(L.COLOR, 0, T)) : (E[0] = i, E[1] = a, E[2] = o, E[3] = r, L.clearBufferiv(L.COLOR, 0, E));
				} else r |= L.COLOR_BUFFER_BIT;
			}
			t && (r |= L.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), n && (r |= L.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), r !== 0 && L.clear(r);
		}, this.clearColor = function() {
			this.clear(!0, !1, !1);
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1);
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0);
		}, this.setNodesHandler = function(e) {
			e.setRenderer(this), F = e;
		}, this.dispose = function() {
			t.removeEventListener("webglcontextlost", ot, !1), t.removeEventListener("webglcontextrestored", st, !1), t.removeEventListener("webglcontextcreationerror", ct, !1), Ze.dispose(), Ge.dispose(), Ke.dispose(), B.dispose(), z.dispose(), Re.dispose(), Ve.dispose(), Be.dispose(), rt.dispose(), it.dispose(), He.dispose(), U.dispose(), U.removeEventListener("sessionstart", ht), U.removeEventListener("sessionend", gt), _t.stop();
		};
		function ot(e) {
			e.preventDefault(), Ye("WebGLRenderer: Context Lost."), ne = !0;
		}
		function st() {
			Ye("WebGLRenderer: Context Restored."), ne = !1;
			let e = Ie.autoReset, t = Xe.enabled, n = Xe.autoUpdate, r = Xe.needsUpdate, i = Xe.type;
			at(), Ie.autoReset = e, Xe.enabled = t, Xe.autoUpdate = n, Xe.needsUpdate = r, Xe.type = i;
		}
		function ct(e) {
			H("WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage);
		}
		function lt(e) {
			let t = e.target;
			t.removeEventListener("dispose", lt), ut(t);
		}
		function ut(e) {
			dt(e), z.remove(e);
		}
		function dt(e) {
			let t = z.get(e).programs;
			t !== void 0 && (t.forEach(function(e) {
				He.releaseProgram(e);
			}), e.isShaderMaterial && He.releaseShaderCache(e));
		}
		this.renderBufferDirect = function(e, t, n, r, i, a) {
			t === null && (t = Ae);
			let o = i.isMesh && i.matrixWorld.determinantAffine() < 0, s = W(e, t, n, r, i);
			R.setMaterial(r, o);
			let c = n.index, l = 1;
			if (r.wireframe === !0) {
				if (c = Be.getWireframeAttribute(n), c === void 0) return;
				l = 2;
			}
			let u = n.drawRange, d = n.attributes.position, f = u.start * l, p = (u.start + u.count) * l;
			a !== null && (f = Math.max(f, a.start * l), p = Math.min(p, (a.start + a.count) * l)), c === null ? d != null && (f = Math.max(f, 0), p = Math.min(p, d.count)) : (f = Math.max(f, 0), p = Math.min(p, c.count));
			let m = p - f;
			if (m < 0 || m === Infinity) return;
			rt.setup(i, r, s, n, c);
			let h, g = et;
			if (c !== null && (h = ze.get(c), g = tt, g.setIndex(h)), i.isMesh) r.wireframe === !0 ? (R.setLineWidth(r.wireframeLinewidth * Me()), g.setMode(L.LINES)) : g.setMode(L.TRIANGLES);
			else if (i.isLine) {
				let e = r.linewidth;
				e === void 0 && (e = 1), R.setLineWidth(e * Me()), i.isLineSegments ? g.setMode(L.LINES) : i.isLineLoop ? g.setMode(L.LINE_LOOP) : g.setMode(L.LINE_STRIP);
			} else i.isPoints ? g.setMode(L.POINTS) : i.isSprite && g.setMode(L.TRIANGLES);
			if (i.isBatchedMesh) {
				if (Pe.get("WEBGL_multi_draw")) g.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount);
				else {
					let e = i._multiDrawStarts, t = i._multiDrawCounts, n = i._multiDrawCount, a = c ? ze.get(c).bytesPerElement : 1, o = z.get(r).currentProgram.getUniforms();
					for (let r = 0; r < n; r++) o.setValue(L, "_gl_DrawID", r), g.render(e[r] / a, t[r]);
				}
			} else if (i.isInstancedMesh) g.renderInstances(f, m, i.count);
			else if (n.isInstancedBufferGeometry) {
				let e = n._maxInstanceCount === void 0 ? Infinity : n._maxInstanceCount, t = Math.min(n.instanceCount, e);
				g.renderInstances(f, m, t);
			} else g.render(f, m);
		};
		function ft(e, t, n, r) {
			F !== null && e.isNodeMaterial && F.setObject(r, e), Te === !0 && Je.setState(e, n, !1), e.transparent === !0 && e.side === 2 && e.forceSinglePass === !1 ? (e.side = 1, e.needsUpdate = !0, wt(e, t, r), e.side = 0, e.needsUpdate = !0, wt(e, t, r), e.side = 2) : wt(e, t, r);
		}
		this.compile = function(e, t, n = null) {
			n === null && (n = e), F !== null && F.renderStart(e, t, n), k = Ke.get(n), k.init(t), M.push(k), n.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (k.pushLight(e), e.castShadow && k.pushShadow(e));
			}), e !== n && e.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (k.pushLight(e), e.castShadow && k.pushShadow(e));
			}), k.setupLights(), F !== null && F.updateLights(k.state.lightsArray), Ee = this.localClippingEnabled, Te = Je.init(this.clippingPlanes, Ee), Te === !0 && Je.setGlobalState(this.clippingPlanes, t), F !== null && Xe.render(k.state.shadowsArray, n, t);
			let r = /* @__PURE__ */ new Set();
			return e.traverse(function(e) {
				if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
				let i = e.material;
				if (i) {
					if (Array.isArray(i)) for (let a = 0; a < i.length; a++) {
						let o = i[a];
						ft(o, n, t, e), r.add(o);
					}
					else ft(i, n, t, e), r.add(i);
				}
			}), k = M.pop(), F !== null && F.renderEnd(), r;
		}, this.compileAsync = function(e, t, n = null) {
			let r = this.compile(e, t, n);
			return new Promise((t) => {
				function n() {
					r.forEach(function(e) {
						let t = z.get(e).currentProgram;
						(t === void 0 || t.isReady()) && r.delete(e);
					}), r.size === 0 ? t(e) : setTimeout(n, 10);
				}
				Pe.get("KHR_parallel_shader_compile") === null ? setTimeout(n, 10) : n();
			});
		};
		let pt = null;
		function mt(e) {
			pt && pt(e);
		}
		function ht() {
			_t.stop();
		}
		function gt() {
			_t.start();
		}
		let _t = new $s();
		_t.setAnimationLoop(mt), typeof self < "u" && _t.setContext(self), this.setAnimationLoop = function(e) {
			pt = e, U.setAnimationLoop(e), e === null ? _t.stop() : _t.start();
		}, U.addEventListener("sessionstart", ht), U.addEventListener("sessionend", gt), this.render = function(e, t) {
			if (t !== void 0 && t.isCamera !== !0) {
				H("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
				return;
			}
			if (ne === !0) return;
			F !== null && F.renderStart(e, t);
			let n = U.enabled === !0 && U.isPresenting === !0, r = N !== null && (I === null || n) && N.begin(P, I);
			if (e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(), t.parent === null && t.matrixWorldAutoUpdate === !0 && t.updateMatrixWorld(), U.enabled === !0 && U.isPresenting === !0 && (N === null || N.isCompositing() === !1) && (U.cameraAutoUpdate === !0 && U.updateCamera(t), t = U.getCamera()), e.isScene === !0 && e.onBeforeRender(P, e, t, I), k = Ke.get(e, M.length), k.init(t), k.state.textureUnits = B.getTextureUnits(), M.push(k), De.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), t.isArrayCamera ? we.setFromArrayCamera(t) : Ce.setFromProjectionMatrix(De, Ue, t.reversedDepth), Ee = this.localClippingEnabled, Te = Je.init(this.clippingPlanes, Ee), O = Ge.get(e, j.length), O.init(), j.push(O), this.info.render.frame++, U.enabled === !0 && U.isPresenting === !0) {
				let e = P.xr.getDepthSensingMesh();
				e !== null && vt(e, t, -Infinity, P.sortObjects);
			}
			vt(e, t, 0, P.sortObjects), O.finish(), F !== null && F.updateLights(k.state.lightsArray), P.sortObjects === !0 && O.sort(ve, ye), je = U.enabled === !1 || U.isPresenting === !1 || U.hasDepthSensing() === !1, je && Ze.addToRenderList(O, e), this.info.autoReset === !0 && this.info.reset(), Te === !0 && Je.beginShadows();
			let i = k.state.shadowsArray;
			if (Xe.render(i, e, t), Te === !0 && Je.endShadows(), (r && N.hasRenderPass()) === !1) {
				let n = O.opaque, r = O.transmissive;
				if (k.setupLights(), t.isArrayCamera) {
					let i = t.cameras;
					if (r.length > 0) for (let t = 0, a = i.length; t < a; t++) {
						let a = i[t];
						bt(n, r, e, a);
					}
					je && Ze.render(e);
					for (let t = 0, n = i.length; t < n; t++) {
						let n = i[t];
						yt(O, e, n, n.viewport);
					}
				} else r.length > 0 && bt(n, r, e, t), je && Ze.render(e), yt(O, e, t);
			}
			I !== null && se === 0 && (B.updateMultisampleRenderTarget(I), B.updateRenderTargetMipmap(I)), r && N.end(P), e.isScene === !0 && e.onAfterRender(P, e, t), rt.resetDefaultState(), ce = -1, le = null, M.pop(), M.length > 0 ? (k = M[M.length - 1], B.setTextureUnits(k.state.textureUnits), Te === !0 && Je.setGlobalState(P.clippingPlanes, k.state.camera)) : k = null, j.pop(), O = j.length > 0 ? j[j.length - 1] : null, F !== null && F.renderEnd();
		};
		function vt(e, t, n, r) {
			if (e.visible === !1) return;
			if (e.layers.test(t.layers)) {
				if (e.isGroup) n = e.renderOrder;
				else if (e.isLOD) e.autoUpdate === !0 && e.update(t);
				else if (e.isLight) k.pushLight(e), e.castShadow && k.pushShadow(e);
				else if (e.isSprite) {
					let i = t.isArrayCamera ? we : Ce;
					if (!e.frustumCulled || e.intersectsFrustum(i)) {
						r && ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);
						let i = Ve.update(e), a = e.material;
						a.visible && O.push(e, i, a, n, ke.z, null, t);
					}
				} else if (e.isMesh || e.isLine || e.isPoints) {
					let i = t.isArrayCamera ? we : Ce;
					if (!e.frustumCulled || e.intersectsFrustum(i)) {
						let i = Ve.update(e), a = e.material;
						if (r && (e.boundingSphere === void 0 ? (i.boundingSphere === null && i.computeBoundingSphere(), ke.copy(i.boundingSphere.center)) : (e.boundingSphere === null && e.computeBoundingSphere(), ke.copy(e.boundingSphere.center)), ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)), Array.isArray(a)) {
							let r = i.groups;
							for (let o = 0, s = r.length; o < s; o++) {
								let s = r[o], c = a[s.materialIndex];
								c && c.visible && O.push(e, i, c, n, ke.z, s, t);
							}
						} else a.visible && O.push(e, i, a, n, ke.z, null, t);
					}
				}
			}
			let i = e.children;
			for (let e = 0, a = i.length; e < a; e++) vt(i[e], t, n, r);
		}
		function yt(e, t, n, r) {
			let { opaque: i, transmissive: a, transparent: o } = e;
			k.setupLightsView(n), Te === !0 && Je.setGlobalState(P.clippingPlanes, n), r && R.viewport(ue.copy(r)), i.length > 0 && xt(i, t, n), a.length > 0 && xt(a, t, n), o.length > 0 && xt(o, t, n), R.buffers.depth.setTest(!0), R.buffers.depth.setMask(!0), R.buffers.color.setMask(!0), R.setPolygonOffset(!1);
		}
		function bt(e, t, n, r) {
			if ((n.isScene === !0 ? n.overrideMaterial : null) !== null) return;
			if (k.state.transmissionRenderTarget[r.id] === void 0) {
				let e = Pe.has("EXT_color_buffer_half_float") || Pe.has("EXT_color_buffer_float");
				k.state.transmissionRenderTarget[r.id] = new qt(1, 1, {
					generateMipmaps: !0,
					type: e ? v : d,
					minFilter: u,
					samples: Math.max(4, Fe.samples),
					stencilBuffer: i,
					resolveDepthBuffer: !1,
					resolveStencilBuffer: !1,
					storeMultisampledDepthBuffer: !1,
					storeMultisampledStencilBuffer: !1,
					colorSpace: q.workingColorSpace
				});
			}
			let a = k.state.transmissionRenderTarget[r.id], o = r.viewport || ue;
			a.setSize(o.z * P.transmissionResolutionScale, o.w * P.transmissionResolutionScale);
			let s = P.getRenderTarget(), c = P.getActiveCubeFace(), l = P.getActiveMipmapLevel();
			P.setRenderTarget(a), P.getClearColor(pe), me = P.getClearAlpha(), me < 1 && P.setClearColor(16777215, .5), P.clear(), je && Ze.render(n);
			let f = P.toneMapping;
			P.toneMapping = 0;
			let p = r.viewport;
			if (r.viewport !== void 0 && (r.viewport = void 0), k.setupLightsView(r), Te === !0 && Je.setGlobalState(P.clippingPlanes, r), xt(e, n, r), B.updateMultisampleRenderTarget(a), B.updateRenderTargetMipmap(a), Pe.has("WEBGL_multisampled_render_to_texture") === !1) {
				let e = !1;
				for (let i = 0, a = t.length; i < a; i++) {
					let { object: a, geometry: o, material: s, group: c } = t[i];
					if (s.side === 2 && a.layers.test(r.layers)) {
						let t = s.side;
						s.side = 1, s.needsUpdate = !0, St(a, n, r, o, s, c), s.side = t, s.needsUpdate = !0, e = !0;
					}
				}
				e === !0 && (B.updateMultisampleRenderTarget(a), B.updateRenderTargetMipmap(a));
			}
			P.setRenderTarget(s, c, l), P.setClearColor(pe, me), p !== void 0 && (r.viewport = p), P.toneMapping = f;
		}
		function xt(e, t, n) {
			let r = t.isScene === !0 ? t.overrideMaterial : null;
			for (let i = 0, a = e.length; i < a; i++) {
				let a = e[i], { object: o, geometry: s, group: c } = a, l = a.material;
				l.allowOverride === !0 && r !== null && (l = r), o.layers.test(n.layers) && St(o, t, n, s, l, c);
			}
		}
		function St(e, t, n, r, i, a) {
			F !== null && i.isNodeMaterial && F.setObject(e, i), e.onBeforeRender(P, t, n, r, i, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), i.onBeforeRender(P, t, n, r, e, a), i.transparent === !0 && i.side === 2 && i.forceSinglePass === !1 ? (i.side = 1, i.needsUpdate = !0, P.renderBufferDirect(n, t, r, i, e, a), i.side = 0, i.needsUpdate = !0, P.renderBufferDirect(n, t, r, i, e, a), i.side = 2) : P.renderBufferDirect(n, t, r, i, e, a), e.onAfterRender(P, t, n, r, i, a);
		}
		function Ct(e) {
			let t = 0;
			for (let n of e) n.texture !== null && t++;
			return t;
		}
		function wt(e, t, n) {
			t.isScene !== !0 && (t = Ae);
			let r = z.get(e), i = k.state.lights, a = k.state.shadowsArray, o = i.state.version, s = He.getParameters(e, i.state, a, t, n, k.state.lightProbeGridArray), c = He.getProgramCacheKey(s), l = r.programs;
			r.environment = e.isMeshStandardMaterial || e.isMeshLambertMaterial || e.isMeshPhongMaterial ? t.environment : null, r.fog = t.fog;
			let u = e.isMeshStandardMaterial || e.isMeshLambertMaterial && !e.envMap || e.isMeshPhongMaterial && !e.envMap;
			r.envMap = Re.get(e.envMap || r.environment, u), r.envMapRotation = r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation, l === void 0 && (e.addEventListener("dispose", lt), l = /* @__PURE__ */ new Map(), r.programs = l, r.programVariants = /* @__PURE__ */ new Map());
			let d = l.get(c);
			if (d !== void 0) {
				if (r.currentProgram === d && r.lightsStateVersion === o) return Dt(e, s), d;
			} else s.uniforms = He.getUniforms(e), F !== null && e.isNodeMaterial && F.build(e, n, s), e.onBeforeCompile(s, P), d = He.acquireProgram(s, c), l.set(c, d), r.uniforms = s.uniforms;
			let f = r.uniforms;
			return (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === !0) && (f.clippingPlanes = Je.uniform), Dt(e, s), r.needsLights = kt(e), r.lightsStateVersion = o, r.needsLights && (f.ambientLightColor.value = i.state.ambient, f.lightProbe.value = i.state.probe, f.sunLights.value = i.state.sun, f.sunLightShadows.value = i.state.sunShadow, f.directionalLights.value = i.state.directional, f.directionalLightShadows.value = i.state.directionalShadow, f.spotLights.value = i.state.spot, f.spotLightShadows.value = i.state.spotShadow, f.rectAreaLights.value = i.state.rectArea, f.ltc_1.value = i.state.rectAreaLTC1, f.ltc_2.value = i.state.rectAreaLTC2, f.pointLights.value = i.state.point, f.pointLightShadows.value = i.state.pointShadow, f.hemisphereLights.value = i.state.hemi, f.sunShadowMatrix.value = i.state.sunShadowMatrix, f.sunShadowCascade.value = i.state.sunShadowCascade, f.directionalShadowMatrix.value = i.state.directionalShadowMatrix, f.spotLightMatrix.value = i.state.spotLightMatrix, f.spotLightMap.value = i.state.spotLightMap, f.pointShadowMatrix.value = i.state.pointShadowMatrix), r.numLightProbeGrids = Ct(k.state.lightProbeGridArray), r.currentProgram = d, r.uniformsList = null, d;
		}
		function Tt(e, t, n, r, i) {
			let a = z.get(e), o = a.currentProgram.id + "," + r + "," + i, s = a.programVariants.get(o);
			return s === void 0 ? (s = wt(e, t, n), a.programVariants.set(o, s)) : (a.currentProgram = s, a.uniformsList = null, a.outputColorSpace = r, a.toneMapping = i), s;
		}
		function Et(e) {
			if (e.uniformsList === null) {
				let t = e.currentProgram.getUniforms();
				e.uniformsList = Wl.seqWithValue(t.seq, e.uniforms);
			}
			return e.uniformsList;
		}
		function Dt(e, t) {
			let n = z.get(e);
			n.outputColorSpace = t.outputColorSpace, n.batching = t.batching, n.batchingColor = t.batchingColor, n.instancing = t.instancing, n.instancingColor = t.instancingColor, n.instancingMorph = t.instancingMorph, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping;
		}
		function W(e, t, n, r, i) {
			t.isScene !== !0 && (t = Ae), B.resetTextureUnits();
			let a = t.fog, o = r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial ? t.environment : null, s = I === null ? P.outputColorSpace : I.isXRRenderTarget === !0 ? I.texture.colorSpace : q.workingColorSpace, c = r.isMeshStandardMaterial || r.isMeshLambertMaterial && !r.envMap || r.isMeshPhongMaterial && !r.envMap, l = Re.get(r.envMap || o, c), u = r.vertexColors === !0 && !!n.attributes.color && n.attributes.color.itemSize === 4, d = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0), f = !!n.morphAttributes.position, p = !!n.morphAttributes.normal, m = !!n.morphAttributes.color, h = 0;
			r.toneMapped && (I === null || I.isXRRenderTarget === !0) && (h = P.toneMapping);
			let g = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, _ = g === void 0 ? 0 : g.length, v = z.get(r), y = k.state.lights;
			if (Te === !0 && (Ee === !0 || e !== le)) {
				let t = e === le && r.id === ce;
				Je.setState(r, e, t);
			}
			let b = !1, x = !1;
			r.version === v.__version ? v.needsLights && v.lightsStateVersion !== y.state.version || i.isBatchedMesh && v.batching === !1 || !i.isBatchedMesh && v.batching === !0 || i.isBatchedMesh && v.batchingColor === !0 && i._colorsTexture === null || i.isBatchedMesh && v.batchingColor === !1 && i._colorsTexture !== null || i.isInstancedMesh && v.instancing === !1 || !i.isInstancedMesh && v.instancing === !0 || i.isSkinnedMesh && v.skinning === !1 || !i.isSkinnedMesh && v.skinning === !0 || i.isInstancedMesh && v.instancingColor === !0 && i.instanceColor === null || i.isInstancedMesh && v.instancingColor === !1 && i.instanceColor !== null || i.isInstancedMesh && v.instancingMorph === !0 && i.morphTexture === null || i.isInstancedMesh && v.instancingMorph === !1 && i.morphTexture !== null ? b = !0 : v.envMap === l ? r.fog === !0 && v.fog !== a || v.numClippingPlanes !== void 0 && (v.numClippingPlanes !== Je.numPlanes || v.numIntersection !== Je.numIntersection) ? b = !0 : v.vertexAlphas === u && v.vertexTangents === d && v.morphTargets === f && v.morphNormals === p && v.morphColors === m && v.morphTargetsCount === _ && v.numLightProbeGrids === Ct(k.state.lightProbeGridArray) ? (v.outputColorSpace !== s || v.toneMapping !== h) && (x = !0) : b = !0 : b = !0 : (b = !0, v.__version = r.version);
			let S = v.currentProgram;
			(b === !0 || x === !0) && (S = x === !0 ? Tt(r, t, i, s, h) : wt(r, t, i), F && r.isNodeMaterial && F.onUpdateProgram(r, S, v));
			let C = !1, w = !1, T = !1, E = S.getUniforms(), O = v.uniforms;
			if (R.useProgram(S.program) && (C = !0, w = !0, T = !0), r.id !== ce && (ce = r.id, w = !0), C || le !== e) {
				R.buffers.depth.getReversed() && e.reversedDepth !== !0 && (e._reversedDepth = !0, e.updateProjectionMatrix()), E.setValue(L, "projectionMatrix", e.projectionMatrix), E.setValue(L, "viewMatrix", e.matrixWorldInverse);
				let t = E.map.cameraPosition;
				t !== void 0 && t.setValue(L, Oe.setFromMatrixPosition(e.matrixWorld)), Fe.logarithmicDepthBuffer && E.setValue(L, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && E.setValue(L, "isOrthographic", e.isOrthographicCamera === !0), le !== e && (le = e, w = !0, T = !0);
			}
			if (v.needsLights && (y.state.sunShadowMap.length > 0 && E.setValue(L, "sunShadowMap", y.state.sunShadowMap, B), y.state.directionalShadowMap.length > 0 && E.setValue(L, "directionalShadowMap", y.state.directionalShadowMap, B), y.state.spotShadowMap.length > 0 && E.setValue(L, "spotShadowMap", y.state.spotShadowMap, B), y.state.pointShadowMap.length > 0 && E.setValue(L, "pointShadowMap", y.state.pointShadowMap, B)), i.isSkinnedMesh) {
				E.setOptional(L, i, "bindMatrix"), E.setOptional(L, i, "bindMatrixInverse");
				let e = i.skeleton;
				e && (e.boneTexture === null && e.computeBoneTexture(), E.setValue(L, "boneTexture", e.boneTexture, B));
			}
			i.isBatchedMesh && (E.setOptional(L, i, "batchingTexture"), E.setValue(L, "batchingTexture", i._matricesTexture, B), E.setOptional(L, i, "batchingIdTexture"), E.setValue(L, "batchingIdTexture", i._indirectTexture, B), E.setOptional(L, i, "batchingColorTexture"), i._colorsTexture !== null && E.setValue(L, "batchingColorTexture", i._colorsTexture, B));
			let A = n.morphAttributes;
			if ((A.position !== void 0 || A.normal !== void 0 || A.color !== void 0) && $e.update(i, n, S), (w || v.receiveShadow !== i.receiveShadow) && (v.receiveShadow = i.receiveShadow, E.setValue(L, "receiveShadow", i.receiveShadow)), (r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial) && r.envMap === null && t.environment !== null && (O.envMapIntensity.value = t.environmentIntensity), O.dfgLUT !== void 0 && (O.dfgLUT.value = sd()), w) {
				if (E.setValue(L, "toneMappingExposure", P.toneMappingExposure), v.needsLights && Ot(O, T), a && r.fog === !0 && We.refreshFogUniforms(O, a), We.refreshMaterialUniforms(O, r, _e, ge, k.state.transmissionRenderTarget[e.id]), v.needsLights && v.numLightProbeGrids > 0) {
					let e = D, t = 0;
					for (let n of k.state.lightProbeGridArray) n.texture !== null && (e.textures[t] = n.texture, e.min[t] = n.boundingBox.min, e.max[t] = n.boundingBox.max, e.resolution[t] = n.resolution, t++);
					for (let n in e) e[n].length = t;
					O.probesSH.value = e.textures, O.probesMin.value = e.min, O.probesMax.value = e.max, O.probesResolution.value = e.resolution;
				}
				Wl.upload(L, Et(v), O, B);
			}
			if (r.isShaderMaterial && r.uniformsNeedUpdate === !0 && (Wl.upload(L, Et(v), O, B), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && E.setValue(L, "center", i.center), E.setValue(L, "modelViewMatrix", i.modelViewMatrix), E.setValue(L, "normalMatrix", i.normalMatrix), E.setValue(L, "modelMatrix", i.matrixWorld), r.uniformsGroups !== void 0) {
				let e = r.uniformsGroups;
				for (let t = 0, n = e.length; t < n; t++) {
					let n = e[t];
					it.update(n, S), it.bind(n, S);
				}
			}
			return S;
		}
		function Ot(e, t) {
			e.ambientLightColor.needsUpdate = t, e.lightProbe.needsUpdate = t, e.sunLights.needsUpdate = t, e.sunLightShadows.needsUpdate = t, e.directionalLights.needsUpdate = t, e.directionalLightShadows.needsUpdate = t, e.pointLights.needsUpdate = t, e.pointLightShadows.needsUpdate = t, e.spotLights.needsUpdate = t, e.spotLightShadows.needsUpdate = t, e.rectAreaLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t;
		}
		function kt(e) {
			return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && e.lights === !0;
		}
		this.getActiveCubeFace = function() {
			return oe;
		}, this.getActiveMipmapLevel = function() {
			return se;
		}, this.getRenderTarget = function() {
			return I;
		}, this.setRenderTargetTextures = function(e, t, n) {
			let r = z.get(e);
			r.__autoAllocateDepthBuffer = e.resolveDepthBuffer === !1, r.__autoAllocateDepthBuffer === !1 && (r.__useRenderToTexture = !1), z.get(e.texture).__webglTexture = t, z.get(e.depthTexture).__webglTexture = r.__autoAllocateDepthBuffer ? void 0 : n, r.__hasExternalTextures = !0;
		}, this.setRenderTargetFramebuffer = function(e, t) {
			let n = z.get(e);
			n.__webglFramebuffer = t, n.__useDefaultFramebuffer = t === void 0;
		}, this.setRenderTarget = function(e, t = 0, n = 0) {
			I = e, oe = t, se = n;
			let r = null, i = !1, a = !1;
			if (e) {
				let o = z.get(e);
				if (o.__useDefaultFramebuffer !== void 0) {
					R.bindFramebuffer(L.FRAMEBUFFER, o.__webglFramebuffer), ue.copy(e.viewport), de.copy(e.scissor), fe = e.scissorTest, R.viewport(ue), R.scissor(de), R.setScissorTest(fe), ce = -1;
					return;
				}
				if (o.__webglFramebuffer === void 0) B.setupRenderTarget(e);
				else if (o.__hasExternalTextures) B.rebindTextures(e, z.get(e.texture).__webglTexture, z.get(e.depthTexture).__webglTexture);
				else if (e.depthBuffer) {
					let t = e.depthTexture;
					if (o.__boundDepthTexture !== t) {
						if (t !== null && z.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
						B.setupDepthRenderbuffer(e);
					}
				}
				let s = e.texture;
				(s.isData3DTexture || s.isDataArrayTexture || s.isCompressedArrayTexture) && (a = !0);
				let c = z.get(e).__webglFramebuffer;
				e.isWebGLCubeRenderTarget ? (r = Array.isArray(c[t]) ? c[t][n] : c[t], i = !0) : r = e.samples > 0 && B.useMultisampledRTT(e) === !1 ? z.get(e).__webglMultisampledFramebuffer : Array.isArray(c) ? c[n] : c, ue.copy(e.viewport), de.copy(e.scissor), fe = e.scissorTest;
			} else ue.copy(be).multiplyScalar(_e).floor(), de.copy(xe).multiplyScalar(_e).floor(), fe = Se;
			if (n !== 0 && (r = re), R.bindFramebuffer(L.FRAMEBUFFER, r) && R.drawBuffers(e, r), R.viewport(ue), R.scissor(de), R.setScissorTest(fe), i) {
				let r = z.get(e.texture);
				L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n);
			} else if (a) {
				let r = t;
				for (let t = 0; t < e.textures.length; t++) {
					let i = z.get(e.textures[t]);
					L.framebufferTextureLayer(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0 + t, i.__webglTexture, n, r);
				}
			} else if (e !== null && n !== 0) {
				let t = z.get(e.texture);
				L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, t.__webglTexture, n);
			}
			ce = -1;
		};
		function At(e) {
			let t = z.get(e);
			return (t.__readFormat !== e.format || t.__readType !== e.type) && (t.__readFormat = e.format, t.__readType = e.type, t.__formatReadable = Fe.textureFormatReadable(e.format), t.__typeReadable = Fe.textureTypeReadable(e.type)), t;
		}
		this.readRenderTargetPixels = function(e, t, n, r, i, a, o, s = 0) {
			if (!(e && e.isWebGLRenderTarget)) {
				H("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
				return;
			}
			let c = z.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o], Array.isArray(c) && (c = c[0])), c) {
				R.bindFramebuffer(L.FRAMEBUFFER, c);
				try {
					let o = e.textures[s], c = o.format, l = o.type;
					e.textures.length > 1 && L.readBuffer(L.COLOR_ATTACHMENT0 + s);
					let u = At(o);
					if (u.__formatReadable === !1) {
						H("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
						return;
					}
					if (u.__typeReadable === !1) {
						H("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
						return;
					}
					t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && L.readPixels(t, n, r, i, nt.convert(c), nt.convert(l), a);
				} finally {
					let e = I === null ? null : z.get(I).__webglFramebuffer;
					R.bindFramebuffer(L.FRAMEBUFFER, e);
				}
			}
		}, this.readRenderTargetPixelsAsync = async function(e, t, n, r, i, a, o, s = 0) {
			if (!(e && e.isWebGLRenderTarget)) throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			let c = z.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o], Array.isArray(c) && (c = c[0])), c) {
				if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
					R.bindFramebuffer(L.FRAMEBUFFER, c);
					let o = e.textures[s], l = o.format, u = o.type;
					e.textures.length > 1 && L.readBuffer(L.COLOR_ATTACHMENT0 + s);
					let d = At(o);
					if (d.__formatReadable === !1) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
					if (d.__typeReadable === !1) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
					let f = L.createBuffer();
					L.bindBuffer(L.PIXEL_PACK_BUFFER, f), L.bufferData(L.PIXEL_PACK_BUFFER, a.byteLength, L.STREAM_READ), L.readPixels(t, n, r, i, nt.convert(l), nt.convert(u), 0), L.bindBuffer(L.PIXEL_PACK_BUFFER, null);
					let p = I === null ? null : z.get(I).__webglFramebuffer;
					R.bindFramebuffer(L.FRAMEBUFFER, p);
					let m = L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE, 0);
					return L.flush(), await Qe(L, m, 4), L.bindBuffer(L.PIXEL_PACK_BUFFER, f), L.getBufferSubData(L.PIXEL_PACK_BUFFER, 0, a), L.bindBuffer(L.PIXEL_PACK_BUFFER, null), L.deleteBuffer(f), L.deleteSync(m), a;
				}
				throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
			}
		}, this.copyFramebufferToTexture = function(e, t = null, n = 0) {
			let r = 2 ** -n, i = Math.floor(e.image.width * r), a = Math.floor(e.image.height * r), o = t === null ? 0 : t.x, s = t === null ? 0 : t.y;
			B.setTexture2D(e, 0), L.copyTexSubImage2D(L.TEXTURE_2D, n, 0, 0, o, s, i, a), R.unbindTexture();
		}, this.copyTextureToTexture = function(e, t, n = null, r = null, i = 0, a = 0) {
			let o, s, c, l, u, d, f, p, m, h = e.isCompressedTexture ? e.mipmaps[a] : e.image;
			if (n !== null) o = n.max.x - n.min.x, s = n.max.y - n.min.y, c = n.isBox3 ? n.max.z - n.min.z : 1, l = n.min.x, u = n.min.y, d = n.isBox3 ? n.min.z : 0;
			else {
				let t = 2 ** -i;
				o = Math.floor(h.width * t), s = Math.floor(h.height * t), c = e.isDataArrayTexture ? h.depth : e.isData3DTexture ? Math.floor(h.depth * t) : 1, l = 0, u = 0, d = 0;
			}
			r === null ? (f = 0, p = 0, m = 0) : (f = r.x, p = r.y, m = r.z);
			let g = nt.convert(t.format), _ = nt.convert(t.type), v;
			t.isData3DTexture ? (B.setTexture3D(t, 0), v = L.TEXTURE_3D) : t.isDataArrayTexture || t.isCompressedArrayTexture ? (B.setTexture2DArray(t, 0), v = L.TEXTURE_2D_ARRAY) : (B.setTexture2D(t, 0), v = L.TEXTURE_2D), R.activeTexture(L.TEXTURE0), R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, t.flipY), R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), R.pixelStorei(L.UNPACK_ALIGNMENT, t.unpackAlignment);
			let y = R.getParameter(L.UNPACK_ROW_LENGTH), b = R.getParameter(L.UNPACK_IMAGE_HEIGHT), x = R.getParameter(L.UNPACK_SKIP_PIXELS), S = R.getParameter(L.UNPACK_SKIP_ROWS), C = R.getParameter(L.UNPACK_SKIP_IMAGES);
			R.pixelStorei(L.UNPACK_ROW_LENGTH, h.width), R.pixelStorei(L.UNPACK_IMAGE_HEIGHT, h.height), R.pixelStorei(L.UNPACK_SKIP_PIXELS, l), R.pixelStorei(L.UNPACK_SKIP_ROWS, u), R.pixelStorei(L.UNPACK_SKIP_IMAGES, d);
			let w = e.isDataArrayTexture || e.isData3DTexture, T = t.isDataArrayTexture || t.isData3DTexture;
			if (e.isDepthTexture) {
				let n = z.get(e), r = z.get(t), h = z.get(n.__renderTarget), g = z.get(r.__renderTarget);
				R.bindFramebuffer(L.READ_FRAMEBUFFER, h.__webglFramebuffer), R.bindFramebuffer(L.DRAW_FRAMEBUFFER, g.__webglFramebuffer);
				for (let n = 0; n < c; n++) w && (L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, z.get(e).__webglTexture, i, d + n), L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, z.get(t).__webglTexture, a, m + n)), L.blitFramebuffer(l, u, l + o, u + s, f, p, f + o, p + s, L.DEPTH_BUFFER_BIT, L.NEAREST);
				R.bindFramebuffer(L.READ_FRAMEBUFFER, null), R.bindFramebuffer(L.DRAW_FRAMEBUFFER, null);
			} else if (i !== 0 || e.isRenderTargetTexture || z.has(e)) {
				let n = z.get(e), r = z.get(t);
				R.bindFramebuffer(L.READ_FRAMEBUFFER, ie), R.bindFramebuffer(L.DRAW_FRAMEBUFFER, ae);
				for (let e = 0; e < c; e++) w ? L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, n.__webglTexture, i, d + e) : L.framebufferTexture2D(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, n.__webglTexture, i), T ? L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, r.__webglTexture, a, m + e) : L.framebufferTexture2D(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_2D, r.__webglTexture, a), i === 0 ? T ? L.copyTexSubImage3D(v, a, f, p, m + e, l, u, o, s) : L.copyTexSubImage2D(v, a, f, p, l, u, o, s) : L.blitFramebuffer(l, u, l + o, u + s, f, p, f + o, p + s, L.COLOR_BUFFER_BIT, L.NEAREST);
				R.bindFramebuffer(L.READ_FRAMEBUFFER, null), R.bindFramebuffer(L.DRAW_FRAMEBUFFER, null);
			} else T ? e.isDataTexture || e.isData3DTexture ? L.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h.data) : t.isCompressedArrayTexture ? L.compressedTexSubImage3D(v, a, f, p, m, o, s, c, g, h.data) : L.texSubImage3D(v, a, f, p, m, o, s, c, g, _, h) : e.isDataTexture ? L.texSubImage2D(L.TEXTURE_2D, a, f, p, o, s, g, _, h.data) : e.isCompressedTexture ? L.compressedTexSubImage2D(L.TEXTURE_2D, a, f, p, h.width, h.height, g, h.data) : L.texSubImage2D(L.TEXTURE_2D, a, f, p, o, s, g, _, h);
			R.pixelStorei(L.UNPACK_ROW_LENGTH, y), R.pixelStorei(L.UNPACK_IMAGE_HEIGHT, b), R.pixelStorei(L.UNPACK_SKIP_PIXELS, x), R.pixelStorei(L.UNPACK_SKIP_ROWS, S), R.pixelStorei(L.UNPACK_SKIP_IMAGES, C), a === 0 && t.generateMipmaps === !0 && t.mipmapsAutoUpdate === !0 && L.generateMipmap(v), R.unbindTexture();
		}, this.initRenderTarget = function(e) {
			z.get(e).__webglFramebuffer === void 0 && B.setupRenderTarget(e);
		}, this.initTexture = function(e) {
			e.isCubeTexture ? B.setTextureCube(e, 0) : e.isData3DTexture ? B.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? B.setTexture2DArray(e, 0) : B.setTexture2D(e, 0), R.unbindTexture();
		}, this.resetState = function() {
			oe = 0, se = 0, I = null, R.reset(), rt.reset();
		}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	get coordinateSystem() {
		return Ue;
	}
	get outputColorSpace() {
		return this._outputColorSpace;
	}
	set outputColorSpace(e) {
		this._outputColorSpace = e;
		let t = this.getContext();
		t.drawingBufferColorSpace = q._getDrawingBufferColorSpace(e), t.unpackColorSpace = q._getUnpackColorSpace();
	}
}, ld = {
	name: "CopyShader",
	uniforms: {
		tDiffuse: { value: null },
		opacity: { value: 1 }
	},
	vertexShader: "\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",
	fragmentShader: "\n\n		uniform float opacity;\n\n		uniform sampler2D tDiffuse;\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vec4 texel = texture2D( tDiffuse, vUv );\n			gl_FragColor = opacity * texel;\n\n\n		}"
}, ud = class {
	constructor() {
		this.isPass = !0, this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
	}
	setSize() {}
	render() {
		console.error("THREE.Pass: .render() must be implemented in derived pass.");
	}
	dispose() {}
}, dd = new _s(-1, 1, 1, -1, 0, 1), fd = new class extends Dr {
	constructor() {
		super(), this.setAttribute("position", new Y([
			-1,
			3,
			0,
			-1,
			-1,
			0,
			3,
			-1,
			0
		], 3)), this.setAttribute("uv", new Y([
			0,
			2,
			0,
			0,
			2,
			0
		], 2));
	}
}(), pd = class {
	constructor(e) {
		this._mesh = new _i(fd, e);
	}
	dispose() {
		this._mesh.geometry.dispose();
	}
	render(e) {
		e.render(this._mesh, dd);
	}
	get material() {
		return this._mesh.material;
	}
	set material(e) {
		this._mesh.material = e;
	}
}, md = class extends ud {
	constructor(e, t = "tDiffuse") {
		super(), this.textureID = t, this.uniforms = null, this.material = null, e instanceof Mo ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = ko.clone(e.uniforms), this.material = new Mo({
			name: e.name === void 0 ? "unspecified" : e.name,
			defines: Object.assign({}, e.defines),
			uniforms: this.uniforms,
			vertexShader: e.vertexShader,
			fragmentShader: e.fragmentShader
		})), this._fsQuad = new pd(this.material);
	}
	render(e, t, n) {
		this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this._fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this._fsQuad.render(e));
	}
	dispose() {
		this.material.dispose(), this._fsQuad.dispose();
	}
}, hd = class extends ud {
	constructor(e, t) {
		super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
	}
	render(e, t, n) {
		let r = e.getContext(), i = e.state;
		i.buffers.color.setMask(!1), i.buffers.depth.setMask(!1), i.buffers.color.setLocked(!0), i.buffers.depth.setLocked(!0);
		let a, o;
		this.inverse ? (a = 0, o = 1) : (a = 1, o = 0), i.buffers.stencil.setTest(!0), i.buffers.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE), i.buffers.stencil.setFunc(r.ALWAYS, a, 4294967295), i.buffers.stencil.setClear(o), i.buffers.stencil.setLocked(!0), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), i.buffers.color.setLocked(!1), i.buffers.depth.setLocked(!1), i.buffers.color.setMask(!0), i.buffers.depth.setMask(!0), i.buffers.stencil.setLocked(!1), i.buffers.stencil.setFunc(r.EQUAL, 1, 4294967295), i.buffers.stencil.setOp(r.KEEP, r.KEEP, r.KEEP), i.buffers.stencil.setLocked(!0);
	}
}, gd = class extends ud {
	constructor() {
		super(), this.needsSwap = !1;
	}
	render(e) {
		e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
	}
}, _d = class {
	constructor(e, t) {
		if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
			let n = e.getSize(new W());
			this._width = n.width, this._height = n.height, t = new qt(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: v }), t.texture.name = "EffectComposer.rt1";
		} else this._width = t.width, this._height = t.height;
		this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new md(ld), this.copyPass.material.blending = 0, this.timer = new Ts();
	}
	swapBuffers() {
		let e = this.readBuffer;
		this.readBuffer = this.writeBuffer, this.writeBuffer = e;
	}
	addPass(e) {
		this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
	}
	insertPass(e, t) {
		this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
	}
	removePass(e) {
		let t = this.passes.indexOf(e);
		t !== -1 && this.passes.splice(t, 1);
	}
	isLastEnabledPass(e) {
		for (let t = e + 1; t < this.passes.length; t++) if (this.passes[t].enabled) return !1;
		return !0;
	}
	render(e) {
		this.timer.update(), e === void 0 && (e = this.timer.getDelta());
		let t = this.renderer.getRenderTarget(), n = !1;
		for (let t = 0, r = this.passes.length; t < r; t++) {
			let r = this.passes[t];
			if (r.enabled !== !1) {
				if (r.renderToScreen = this.renderToScreen && this.isLastEnabledPass(t), r.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), r.needsSwap) {
					if (n) {
						let t = this.renderer.getContext(), n = this.renderer.state.buffers.stencil;
						n.setFunc(t.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), n.setFunc(t.EQUAL, 1, 4294967295);
					}
					this.swapBuffers();
				}
				hd !== void 0 && (r instanceof hd ? n = !0 : r instanceof gd && (n = !1));
			}
		}
		this.renderer.setRenderTarget(t);
	}
	reset(e) {
		if (e === void 0) {
			let t = this.renderer.getSize(new W());
			this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
		}
		this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
	}
	setSize(e, t) {
		this._width = e, this._height = t;
		let n = this._width * this._pixelRatio, r = this._height * this._pixelRatio;
		this.renderTarget1.setSize(n, r), this.renderTarget2.setSize(n, r);
		for (let e = 0; e < this.passes.length; e++) this.passes[e].setSize(n, r);
	}
	setPixelRatio(e) {
		this._pixelRatio = e, this.setSize(this._width, this._height);
	}
	dispose() {
		this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
	}
}, vd = class extends ud {
	constructor(e, t, n = null, r = null, i = null) {
		super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = r, this.clearAlpha = i, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this.isRenderPass = !0, this._oldClearColor = new J();
	}
	render(e, t, n) {
		let r = e.autoClear;
		e.autoClear = !1;
		let i, a;
		this.overrideMaterial !== null && (a = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (i = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == 1 && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear === !0 && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(i), this.overrideMaterial !== null && (this.scene.overrideMaterial = a), e.autoClear = r;
	}
}, yd = {
	name: "LuminosityHighPassShader",
	uniforms: {
		tDiffuse: { value: null },
		luminosityThreshold: { value: 1 },
		smoothWidth: { value: 1 },
		defaultColor: { value: new J(0) },
		defaultOpacity: { value: 0 }
	},
	vertexShader: "\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",
	fragmentShader: "\n\n		uniform sampler2D tDiffuse;\n		uniform vec3 defaultColor;\n		uniform float defaultOpacity;\n		uniform float luminosityThreshold;\n		uniform float smoothWidth;\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vec4 texel = texture2D( tDiffuse, vUv );\n\n			float v = luminance( texel.xyz );\n\n			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );\n\n			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );\n\n			gl_FragColor = mix( outputColor, texel, alpha );\n\n		}"
}, bd = class e extends ud {
	constructor(e, t = 1, n, r) {
		super(), this.strength = t, this.radius = n, this.threshold = r, this.resolution = e === void 0 ? new W(256, 256) : new W(e.x, e.y), this.clearColor = new J(0, 0, 0), this.needsSwap = !1, this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
		let i = Math.round(this.resolution.x / 2), a = Math.round(this.resolution.y / 2);
		this.renderTargetBright = new qt(i, a, {
			type: v,
			depthBuffer: !1
		}), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
		for (let e = 0; e < this.nMips; e++) {
			let t = new qt(i, a, {
				type: v,
				depthBuffer: !1
			});
			t.texture.name = "UnrealBloomPass.h" + e, t.texture.generateMipmaps = !1, this.renderTargetsHorizontal.push(t);
			let n = new qt(i, a, {
				type: v,
				depthBuffer: !1
			});
			n.texture.name = "UnrealBloomPass.v" + e, n.texture.generateMipmaps = !1, this.renderTargetsVertical.push(n), i = Math.round(i / 2), a = Math.round(a / 2);
		}
		let o = yd;
		this.highPassUniforms = ko.clone(o.uniforms), this.highPassUniforms.luminosityThreshold.value = r, this.highPassUniforms.smoothWidth.value = .01, this.materialHighPassFilter = new Mo({
			uniforms: this.highPassUniforms,
			vertexShader: o.vertexShader,
			fragmentShader: o.fragmentShader
		}), this.separableBlurMaterials = [];
		let s = [
			6,
			10,
			14,
			18,
			22
		];
		i = Math.round(this.resolution.x / 2), a = Math.round(this.resolution.y / 2);
		for (let e = 0; e < this.nMips; e++) this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])), this.separableBlurMaterials[e].uniforms.invSize.value = new W(1 / i, 1 / a), i = Math.round(i / 2), a = Math.round(a / 2);
		this.compositeMaterial = this._getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = .1;
		let c = [
			1,
			.8,
			.6,
			.4,
			.2
		];
		this.compositeMaterial.uniforms.bloomFactors.value = c, this.bloomTintColors = [
			new G(1, 1, 1),
			new G(1, 1, 1),
			new G(1, 1, 1),
			new G(1, 1, 1),
			new G(1, 1, 1)
		], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, this.copyUniforms = ko.clone(ld.uniforms), this.blendMaterial = new Mo({
			uniforms: this.copyUniforms,
			vertexShader: ld.vertexShader,
			fragmentShader: ld.fragmentShader,
			premultipliedAlpha: !0,
			blending: 2,
			depthTest: !1,
			depthWrite: !1,
			transparent: !0
		}), this._oldClearColor = new J(), this._oldClearAlpha = 1, this._basic = new ai(), this._fsQuad = new pd(null);
	}
	dispose() {
		for (let e = 0; e < this.renderTargetsHorizontal.length; e++) this.renderTargetsHorizontal[e].dispose();
		for (let e = 0; e < this.renderTargetsVertical.length; e++) this.renderTargetsVertical[e].dispose();
		this.renderTargetBright.dispose();
		for (let e = 0; e < this.separableBlurMaterials.length; e++) this.separableBlurMaterials[e].dispose();
		this.compositeMaterial.dispose(), this.blendMaterial.dispose(), this._basic.dispose(), this._fsQuad.dispose();
	}
	setSize(e, t) {
		let n = Math.round(e / 2), r = Math.round(t / 2);
		this.renderTargetBright.setSize(n, r);
		for (let e = 0; e < this.nMips; e++) this.renderTargetsHorizontal[e].setSize(n, r), this.renderTargetsVertical[e].setSize(n, r), this.separableBlurMaterials[e].uniforms.invSize.value = new W(1 / n, 1 / r), n = Math.round(n / 2), r = Math.round(r / 2);
	}
	render(t, n, r, i, a) {
		t.getClearColor(this._oldClearColor), this._oldClearAlpha = t.getClearAlpha();
		let o = t.autoClear;
		t.autoClear = !1, t.setClearColor(this.clearColor, 0), a && t.state.buffers.stencil.setTest(!1), this.renderToScreen && (this._fsQuad.material = this._basic, this._basic.map = r.texture, t.setRenderTarget(null), t.clear(), this._fsQuad.render(t)), this.highPassUniforms.tDiffuse.value = r.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this._fsQuad.material = this.materialHighPassFilter, t.setRenderTarget(this.renderTargetBright), t.clear(), this._fsQuad.render(t);
		let s = this.renderTargetBright;
		for (let n = 0; n < this.nMips; n++) this._fsQuad.material = this.separableBlurMaterials[n], this.separableBlurMaterials[n].uniforms.colorTexture.value = s.texture, this.separableBlurMaterials[n].uniforms.direction.value = e.BlurDirectionX, t.setRenderTarget(this.renderTargetsHorizontal[n]), t.clear(), this._fsQuad.render(t), this.separableBlurMaterials[n].uniforms.colorTexture.value = this.renderTargetsHorizontal[n].texture, this.separableBlurMaterials[n].uniforms.direction.value = e.BlurDirectionY, t.setRenderTarget(this.renderTargetsVertical[n]), t.clear(), this._fsQuad.render(t), s = this.renderTargetsVertical[n];
		this._fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, t.setRenderTarget(this.renderTargetsHorizontal[0]), t.clear(), this._fsQuad.render(t), this._fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, a && t.state.buffers.stencil.setTest(!0), this.renderToScreen ? (t.setRenderTarget(null), this._fsQuad.render(t)) : (t.setRenderTarget(r), this._fsQuad.render(t)), t.setClearColor(this._oldClearColor, this._oldClearAlpha), t.autoClear = o;
	}
	_getSeparableBlurMaterial(e) {
		let t = [], n = e / 3;
		for (let r = 0; r < e; r++) t.push(.39894 * Math.exp(-.5 * r * r / (n * n)) / n);
		let r = [], i = [];
		for (let n = 1; n < e; n += 2) {
			let a = t[n], o = n + 1 < e ? t[n + 1] : 0, s = a + o;
			r.push((n * a + (n + 1) * o) / s), i.push(s);
		}
		return new Mo({
			defines: { KERNEL_PAIRS: r.length },
			uniforms: {
				colorTexture: { value: null },
				invSize: { value: new W(.5, .5) },
				direction: { value: new W(.5, .5) },
				centerWeight: { value: t[0] },
				gaussianOffsets: { value: r },
				gaussianWeights: { value: i }
			},
			vertexShader: "\n\n				varying vec2 vUv;\n\n				void main() {\n\n					vUv = uv;\n					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n				}",
			fragmentShader: "\n\n				#include <common>\n\n				varying vec2 vUv;\n\n				uniform sampler2D colorTexture;\n				uniform vec2 invSize;\n				uniform vec2 direction;\n				uniform float centerWeight;\n				uniform float gaussianOffsets[KERNEL_PAIRS];\n				uniform float gaussianWeights[KERNEL_PAIRS];\n\n				void main() {\n\n					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;\n\n					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {\n\n						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];\n						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;\n						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;\n						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];\n\n					}\n\n					gl_FragColor = vec4( diffuseSum, 1.0 );\n\n				}"
		});
	}
	_getCompositeMaterial(e) {
		return new Mo({
			defines: { NUM_MIPS: e },
			uniforms: {
				blurTexture1: { value: null },
				blurTexture2: { value: null },
				blurTexture3: { value: null },
				blurTexture4: { value: null },
				blurTexture5: { value: null },
				bloomStrength: { value: 1 },
				bloomFactors: { value: null },
				bloomTintColors: { value: null },
				bloomRadius: { value: 0 }
			},
			vertexShader: "\n\n				varying vec2 vUv;\n\n				void main() {\n\n					vUv = uv;\n					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n				}",
			fragmentShader: "\n\n				varying vec2 vUv;\n\n				uniform sampler2D blurTexture1;\n				uniform sampler2D blurTexture2;\n				uniform sampler2D blurTexture3;\n				uniform sampler2D blurTexture4;\n				uniform sampler2D blurTexture5;\n				uniform float bloomStrength;\n				uniform float bloomRadius;\n				uniform float bloomFactors[NUM_MIPS];\n				uniform vec3 bloomTintColors[NUM_MIPS];\n\n				float lerpBloomFactor( const in float factor ) {\n\n					float mirrorFactor = 1.2 - factor;\n					return mix( factor, mirrorFactor, bloomRadius );\n\n				}\n\n				void main() {\n\n					// 3.0 for backwards compatibility with previous alpha-based intensity\n					vec3 bloom = 3.0 * bloomStrength * (\n						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +\n						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +\n						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +\n						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +\n						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb\n					);\n\n					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );\n					gl_FragColor = vec4( bloom, bloomAlpha );\n\n				}"
		});
	}
};
bd.BlurDirectionX = new W(1, 0), bd.BlurDirectionY = new W(0, 1);
// node_modules/three/examples/jsm/shaders/OutputShader.js
var xd = {
	name: "OutputShader",
	uniforms: {
		tDiffuse: { value: null },
		toneMappingExposure: { value: 1 }
	},
	vertexShader: "\n		precision highp float;\n\n		uniform mat4 modelViewMatrix;\n		uniform mat4 projectionMatrix;\n\n		attribute vec3 position;\n		attribute vec2 uv;\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",
	fragmentShader: "\n\n		precision highp float;\n\n		uniform sampler2D tDiffuse;\n\n		#include <tonemapping_pars_fragment>\n		#include <colorspace_pars_fragment>\n\n		varying vec2 vUv;\n\n		void main() {\n\n			gl_FragColor = texture2D( tDiffuse, vUv );\n\n			// tone mapping\n\n			#ifdef LINEAR_TONE_MAPPING\n\n				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n\n			#elif defined( REINHARD_TONE_MAPPING )\n\n				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n\n			#elif defined( CINEON_TONE_MAPPING )\n\n				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n\n			#elif defined( ACES_FILMIC_TONE_MAPPING )\n\n				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n\n			#elif defined( AGX_TONE_MAPPING )\n\n				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n\n			#elif defined( NEUTRAL_TONE_MAPPING )\n\n				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n\n			#elif defined( CUSTOM_TONE_MAPPING )\n\n				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n\n			#endif\n\n			// color space\n\n			#ifdef SRGB_TRANSFER\n\n				gl_FragColor = sRGBTransferOETF( gl_FragColor );\n\n			#endif\n\n		}"
}, Sd = class extends ud {
	constructor() {
		super(), this.isOutputPass = !0, this.uniforms = ko.clone(xd.uniforms), this.material = new No({
			name: xd.name,
			uniforms: this.uniforms,
			vertexShader: xd.vertexShader,
			fragmentShader: xd.fragmentShader
		}), this._fsQuad = new pd(this.material), this._outputColorSpace = null, this._toneMapping = null;
	}
	render(e, t, n) {
		this.uniforms.tDiffuse.value = n.texture, this.uniforms.toneMappingExposure.value = e.toneMappingExposure, (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e.outputColorSpace, this._toneMapping = e.toneMapping, this.material.defines = {}, q.getTransfer(this._outputColorSpace) === "srgb" && (this.material.defines.SRGB_TRANSFER = ""), this._toneMapping === 1 ? this.material.defines.LINEAR_TONE_MAPPING = "" : this._toneMapping === 2 ? this.material.defines.REINHARD_TONE_MAPPING = "" : this._toneMapping === 3 ? this.material.defines.CINEON_TONE_MAPPING = "" : this._toneMapping === 4 ? this.material.defines.ACES_FILMIC_TONE_MAPPING = "" : this._toneMapping === 6 ? this.material.defines.AGX_TONE_MAPPING = "" : this._toneMapping === 7 ? this.material.defines.NEUTRAL_TONE_MAPPING = "" : this._toneMapping === 5 && (this.material.defines.CUSTOM_TONE_MAPPING = ""), this.material.needsUpdate = !0), this.renderToScreen === !0 ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this._fsQuad.render(e));
	}
	dispose() {
		this.material.dispose(), this._fsQuad.dispose();
	}
}, Cd = new Yn(), wd = new G(), Td = class extends bs {
	constructor() {
		super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry", this.setIndex([
			0,
			2,
			1,
			2,
			3,
			1,
			2,
			4,
			3,
			4,
			5,
			3,
			4,
			6,
			5,
			6,
			7,
			5
		]), this.setAttribute("position", new Y([
			-1,
			2,
			0,
			1,
			2,
			0,
			-1,
			1,
			0,
			1,
			1,
			0,
			-1,
			0,
			0,
			1,
			0,
			0,
			-1,
			-1,
			0,
			1,
			-1,
			0
		], 3)), this.setAttribute("uv", new Y([
			-1,
			2,
			1,
			2,
			-1,
			1,
			1,
			1,
			-1,
			-1,
			1,
			-1,
			-1,
			-2,
			1,
			-2
		], 2));
	}
	applyMatrix4(e) {
		let t = this.attributes.instanceStart, n = this.attributes.instanceEnd;
		return t !== void 0 && (t.applyMatrix4(e), n.applyMatrix4(e), t.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
	}
	setPositions(e) {
		let t;
		e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
		let n = new zs(t, 6, 1);
		return this.setAttribute("instanceStart", new jr(n, 3, 0)), this.setAttribute("instanceEnd", new jr(n, 3, 3)), this.instanceCount = this.attributes.instanceStart.count, this.computeBoundingBox(), this.computeBoundingSphere(), this;
	}
	setColors(e) {
		let t;
		e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
		let n = new zs(t, 6, 1);
		return this.setAttribute("instanceColorStart", new jr(n, 3, 0)), this.setAttribute("instanceColorEnd", new jr(n, 3, 3)), this;
	}
	fromWireframeGeometry(e) {
		return this.setPositions(e.attributes.position.array), this;
	}
	fromEdgesGeometry(e) {
		return this.setPositions(e.attributes.position.array), this;
	}
	fromMesh(e) {
		return this.fromWireframeGeometry(new So(e.geometry)), this;
	}
	fromLineSegments(e) {
		let t = e.geometry;
		return this.setPositions(t.attributes.position.array), this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new Yn());
		let e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
		e !== void 0 && t !== void 0 && (this.boundingBox.setFromBufferAttribute(e), Cd.setFromBufferAttribute(t), this.boundingBox.union(Cd));
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new yr()), this.boundingBox === null && this.computeBoundingBox();
		let e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
		if (e !== void 0 && t !== void 0) {
			let n = this.boundingSphere.center;
			this.boundingBox.getCenter(n);
			let r = 0;
			for (let i = 0, a = e.count; i < a; i++) wd.fromBufferAttribute(e, i), r = Math.max(r, n.distanceToSquared(wd)), wd.fromBufferAttribute(t, i), r = Math.max(r, n.distanceToSquared(wd));
			this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
		}
	}
	toJSON() {}
};
Z.line = {
	worldUnits: { value: 1 },
	linewidth: { value: 1 },
	resolution: { value: new W() },
	dashOffset: { value: 0 },
	dashScale: { value: 1 },
	dashSize: { value: 1 },
	gapSize: { value: 1 }
}, tc.line = {
	uniforms: ko.merge([
		Z.common,
		Z.fog,
		Z.line
	]),
	vertexShader: "\n		#include <common>\n		#include <color_pars_vertex>\n		#include <fog_pars_vertex>\n		#include <logdepthbuf_pars_vertex>\n		#include <clipping_planes_pars_vertex>\n\n		uniform float linewidth;\n		uniform vec2 resolution;\n\n		attribute vec3 instanceStart;\n		attribute vec3 instanceEnd;\n\n		attribute vec3 instanceColorStart;\n		attribute vec3 instanceColorEnd;\n\n		#ifdef WORLD_UNITS\n\n			varying vec4 worldPos;\n			varying vec3 worldStart;\n			varying vec3 worldEnd;\n\n			#ifdef USE_DASH\n\n				varying vec2 vUv;\n\n			#endif\n\n		#else\n\n			varying vec2 vUv;\n\n		#endif\n\n		#ifdef USE_DASH\n\n			uniform float dashScale;\n			attribute float instanceDistanceStart;\n			attribute float instanceDistanceEnd;\n			varying float vLineDistance;\n\n		#endif\n\n		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {\n\n			// compute the interpolation factor needed to trim the segment so it terminates\n			// between the camera plane and the near plane\n\n			// conservative estimate of the near plane\n			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column\n			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column\n\n			// we need different nearEstimate formula for reversed and default depth buffer\n			// a is positive with a reversed depth buffer so it can be used for controlling the code flow\n			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );\n\n			return ( nearEstimate - start.z ) / ( end.z - start.z );\n\n		}\n\n		void main() {\n\n			#ifdef USE_COLOR\n\n				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;\n\n			#endif\n\n			float aspect = resolution.x / resolution.y;\n\n			// camera space\n			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );\n			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );\n\n			#ifdef USE_DASH\n\n				float lineDistanceStart = dashScale * instanceDistanceStart;\n				float lineDistanceEnd = dashScale * instanceDistanceEnd;\n\n			#endif\n\n			#ifdef WORLD_UNITS\n\n				worldStart = start.xyz;\n				worldEnd = end.xyz;\n\n			#else\n\n				vUv = uv;\n\n			#endif\n\n			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane\n			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space\n			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly\n			// perhaps there is a more elegant solution -- WestLangley\n\n			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column\n\n			if ( perspective ) {\n\n				if ( start.z < 0.0 && end.z >= 0.0 ) {\n\n					float alpha = trimSegmentAlpha( start, end );\n					end.xyz = mix( start.xyz, end.xyz, alpha );\n\n					#ifdef USE_DASH\n\n						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );\n\n					#endif\n\n				} else if ( end.z < 0.0 && start.z >= 0.0 ) {\n\n					float alpha = trimSegmentAlpha( end, start );\n					start.xyz = mix( end.xyz, start.xyz, alpha );\n\n					#ifdef USE_DASH\n\n						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );\n\n					#endif\n\n				}\n\n			}\n\n			#ifdef USE_DASH\n\n				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;\n				vUv = uv;\n\n			#endif\n\n			// clip space\n			vec4 clipStart = projectionMatrix * start;\n			vec4 clipEnd = projectionMatrix * end;\n\n			// ndc space\n			vec3 ndcStart = clipStart.xyz / clipStart.w;\n			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;\n\n			// direction\n			vec2 dir = ndcEnd.xy - ndcStart.xy;\n\n			// account for clip-space aspect ratio\n			dir.x *= aspect;\n			dir = normalize( dir );\n\n			#ifdef WORLD_UNITS\n\n				vec3 worldDir = normalize( end.xyz - start.xyz );\n				vec3 tmpFwd = perspective ? normalize( mix( start.xyz, end.xyz, 0.5 ) ) : vec3( 0.0, 0.0, - 1.0 );\n				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );\n				vec3 worldFwd = cross( worldDir, worldUp );\n				worldPos = position.y < 0.5 ? start: end;\n\n				// height offset\n				float hw = linewidth * 0.5;\n				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;\n\n				// don't extend the line if we're rendering dashes because we\n				// won't be rendering the endcaps\n				#ifndef USE_DASH\n\n					// cap extension\n					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;\n\n					// add width to the box\n					worldPos.xyz += worldFwd * hw;\n\n					// endcaps\n					if ( position.y > 1.0 || position.y < 0.0 ) {\n\n						worldPos.xyz -= worldFwd * 2.0 * hw;\n\n					}\n\n				#endif\n\n				// project the worldpos\n				vec4 clip = projectionMatrix * worldPos;\n\n				// shift the depth of the projected points so the line\n				// segments overlap neatly\n				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;\n\n				// only shift the depth of vertices in front of the camera (#35137)\n				if ( clip.w > 0.0 ) clip.z = clipPose.z * clip.w;\n\n			#else\n\n				vec2 offset = vec2( dir.y, - dir.x );\n				// undo aspect ratio adjustment\n				dir.x /= aspect;\n				offset.x /= aspect;\n\n				// sign flip\n				if ( position.x < 0.0 ) offset *= - 1.0;\n\n				// endcaps\n				if ( position.y < 0.0 ) {\n\n					offset += - dir;\n\n				} else if ( position.y > 1.0 ) {\n\n					offset += dir;\n\n				}\n\n				// adjust for linewidth\n				offset *= linewidth;\n\n				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...\n				offset /= resolution.y;\n\n				// select end\n				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;\n\n				// back to clip space\n				offset *= clip.w;\n\n				clip.xy += offset;\n\n			#endif\n\n			gl_Position = clip;\n\n			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation\n\n			#include <logdepthbuf_vertex>\n			#include <clipping_planes_vertex>\n			#include <fog_vertex>\n\n		}\n		",
	fragmentShader: "\n		uniform vec3 diffuse;\n		uniform float opacity;\n		uniform float linewidth;\n\n		#ifdef USE_DASH\n\n			uniform float dashOffset;\n			uniform float dashSize;\n			uniform float gapSize;\n\n		#endif\n\n		varying float vLineDistance;\n\n		#ifdef WORLD_UNITS\n\n			varying vec4 worldPos;\n			varying vec3 worldStart;\n			varying vec3 worldEnd;\n\n			#ifdef USE_DASH\n\n				varying vec2 vUv;\n\n			#endif\n\n		#else\n\n			varying vec2 vUv;\n\n		#endif\n\n		#include <common>\n		#include <color_pars_fragment>\n		#include <fog_pars_fragment>\n		#include <logdepthbuf_pars_fragment>\n		#include <clipping_planes_pars_fragment>\n\n		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {\n\n			float mua;\n			float mub;\n\n			vec3 p13 = p1 - p3;\n			vec3 p43 = p4 - p3;\n\n			vec3 p21 = p2 - p1;\n\n			float d1343 = dot( p13, p43 );\n			float d4321 = dot( p43, p21 );\n			float d1321 = dot( p13, p21 );\n			float d4343 = dot( p43, p43 );\n			float d2121 = dot( p21, p21 );\n\n			float denom = d2121 * d4343 - d4321 * d4321;\n\n			float numer = d1343 * d4321 - d1321 * d4343;\n\n			mua = numer / denom;\n			mua = clamp( mua, 0.0, 1.0 );\n			mub = ( d1343 + d4321 * ( mua ) ) / d4343;\n			mub = clamp( mub, 0.0, 1.0 );\n\n			return vec2( mua, mub );\n\n		}\n\n		void main() {\n\n			float alpha = opacity;\n			vec4 diffuseColor = vec4( diffuse, alpha );\n\n			#include <clipping_planes_fragment>\n\n			#ifdef USE_DASH\n\n				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps\n\n				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX\n\n			#endif\n\n			#ifdef WORLD_UNITS\n\n				float len;\n\n				if ( isOrthographic ) {\n\n					// View rays are parallel to the z axis so the distance reduces to camera-space XY\n					vec2 lineDir = worldEnd.xy - worldStart.xy;\n					float t = clamp( dot( worldPos.xy - worldStart.xy, lineDir ) / dot( lineDir, lineDir ), 0.0, 1.0 );\n					len = length( worldStart.xy + lineDir * t - worldPos.xy );\n\n				} else {\n\n					// Find the closest points on the view ray and the line segment\n					vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;\n					vec3 lineDir = worldEnd - worldStart;\n					vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );\n\n					vec3 p1 = worldStart + lineDir * params.x;\n					vec3 p2 = rayEnd * params.y;\n					vec3 delta = p1 - p2;\n					len = length( delta );\n\n				}\n\n				float norm = len / linewidth;\n\n				#ifndef USE_DASH\n\n					#ifdef USE_ALPHA_TO_COVERAGE\n\n						float dnorm = fwidth( norm );\n						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );\n\n					#else\n\n						if ( norm > 0.5 ) {\n\n							discard;\n\n						}\n\n					#endif\n\n				#endif\n\n			#else\n\n				#ifdef USE_ALPHA_TO_COVERAGE\n\n					// artifacts appear on some hardware if a derivative is taken within a conditional\n					float a = vUv.x;\n					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;\n					float len2 = a * a + b * b;\n					float dlen = fwidth( len2 );\n\n					if ( abs( vUv.y ) > 1.0 ) {\n\n						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );\n\n					}\n\n				#else\n\n					if ( abs( vUv.y ) > 1.0 ) {\n\n						float a = vUv.x;\n						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;\n						float len2 = a * a + b * b;\n\n						if ( len2 > 1.0 ) discard;\n\n					}\n\n				#endif\n\n			#endif\n\n			#include <logdepthbuf_fragment>\n			#include <color_fragment>\n\n			gl_FragColor = vec4( diffuseColor.rgb, alpha );\n\n			#include <tonemapping_fragment>\n			#include <colorspace_fragment>\n			#include <fog_fragment>\n			#include <premultiplied_alpha_fragment>\n\n		}\n		"
};
var Ed = class extends Mo {
	constructor(e) {
		super({
			type: "LineMaterial",
			uniforms: ko.clone(tc.line.uniforms),
			vertexShader: tc.line.vertexShader,
			fragmentShader: tc.line.fragmentShader,
			clipping: !0
		}), this.isLineMaterial = !0, this.setValues(e);
	}
	get color() {
		return this.uniforms.diffuse.value;
	}
	set color(e) {
		this.uniforms.diffuse.value = e;
	}
	get worldUnits() {
		return "WORLD_UNITS" in this.defines;
	}
	set worldUnits(e) {
		e === !0 !== this.worldUnits && (this.needsUpdate = !0), e === !0 ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
	}
	get linewidth() {
		return this.uniforms.linewidth.value;
	}
	set linewidth(e) {
		this.uniforms.linewidth && (this.uniforms.linewidth.value = e);
	}
	get dashed() {
		return "USE_DASH" in this.defines;
	}
	set dashed(e) {
		e === !0 !== this.dashed && (this.needsUpdate = !0), e === !0 ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
	}
	get dashScale() {
		return this.uniforms.dashScale.value;
	}
	set dashScale(e) {
		this.uniforms.dashScale.value = e;
	}
	get dashSize() {
		return this.uniforms.dashSize.value;
	}
	set dashSize(e) {
		this.uniforms.dashSize.value = e;
	}
	get dashOffset() {
		return this.uniforms.dashOffset.value;
	}
	set dashOffset(e) {
		this.uniforms.dashOffset.value = e;
	}
	get gapSize() {
		return this.uniforms.gapSize.value;
	}
	set gapSize(e) {
		this.uniforms.gapSize.value = e;
	}
	get opacity() {
		return this.uniforms.opacity.value;
	}
	set opacity(e) {
		this.uniforms && (this.uniforms.opacity.value = e);
	}
	get resolution() {
		return this.uniforms.resolution.value;
	}
	set resolution(e) {
		this.uniforms.resolution.value.copy(e);
	}
	get alphaToCoverage() {
		return "USE_ALPHA_TO_COVERAGE" in this.defines;
	}
	set alphaToCoverage(e) {
		this.defines && (e === !0 !== this.alphaToCoverage && (this.needsUpdate = !0), e === !0 ? this.defines.USE_ALPHA_TO_COVERAGE = "" : delete this.defines.USE_ALPHA_TO_COVERAGE);
	}
}, Dd = new Gt(), Od = new G(), kd = new G(), Ad = new Gt(), jd = new Gt(), Md = new Gt(), Nd = new G(), Pd = new Xt(), Fd = new Js(), Id = new G(), Ld = new Yn(), Rd = new yr(), zd = new Gt(), Bd, Vd;
function Hd(e, t, n) {
	return zd.set(0, 0, -t, 1).applyMatrix4(e.projectionMatrix), zd.multiplyScalar(1 / zd.w), zd.x = Vd / n.width, zd.y = Vd / n.height, zd.applyMatrix4(e.projectionMatrixInverse), zd.multiplyScalar(1 / zd.w), Math.abs(Math.max(zd.x, zd.y));
}
function Ud(e, t) {
	let n = e.matrixWorld, r = e.geometry, i = r.attributes.instanceStart, a = r.attributes.instanceEnd, o = Math.min(r.instanceCount, i.count);
	for (let r = 0, s = o; r < s; r++) {
		Fd.start.fromBufferAttribute(i, r), Fd.end.fromBufferAttribute(a, r), Fd.applyMatrix4(n);
		let o = new G(), s = new G();
		Bd.distanceSqToSegment(Fd.start, Fd.end, s, o), s.distanceTo(o) < Vd * .5 && t.push({
			point: s,
			pointOnLine: o,
			distance: Bd.origin.distanceTo(s),
			object: e,
			face: null,
			faceIndex: r,
			uv: null,
			uv1: null
		});
	}
}
function Wd(e, t, n) {
	let r = t.projectionMatrix, i = e.material.resolution, a = e.matrixWorld, o = e.geometry, s = o.attributes.instanceStart, c = o.attributes.instanceEnd, l = Math.min(o.instanceCount, s.count), u = -t.near;
	Bd.at(1, Md), Md.w = 1, Md.applyMatrix4(t.matrixWorldInverse), Md.applyMatrix4(r), Md.multiplyScalar(1 / Md.w), Md.x *= i.x / 2, Md.y *= i.y / 2, Md.z = 0, Nd.copy(Md), Pd.multiplyMatrices(t.matrixWorldInverse, a);
	for (let t = 0, o = l; t < o; t++) {
		if (Ad.fromBufferAttribute(s, t), jd.fromBufferAttribute(c, t), Ad.w = 1, jd.w = 1, Ad.applyMatrix4(Pd), jd.applyMatrix4(Pd), Ad.z > u && jd.z > u) continue;
		if (Ad.z > u) {
			let e = Ad.z - jd.z, t = (Ad.z - u) / e;
			Ad.lerp(jd, t);
		} else if (jd.z > u) {
			let e = jd.z - Ad.z, t = (jd.z - u) / e;
			jd.lerp(Ad, t);
		}
		Ad.applyMatrix4(r), jd.applyMatrix4(r), Ad.multiplyScalar(1 / Ad.w), jd.multiplyScalar(1 / jd.w), Ad.x *= i.x / 2, Ad.y *= i.y / 2, jd.x *= i.x / 2, jd.y *= i.y / 2, Fd.start.copy(Ad), Fd.start.z = 0, Fd.end.copy(jd), Fd.end.z = 0;
		let o = Fd.closestPointToPointParameter(Nd, !0);
		Fd.at(o, Id);
		let l = Dt.lerp(Ad.z, jd.z, o), d = l >= -1 && l <= 1, f = Nd.distanceTo(Id) < Vd * .5;
		if (d && f) {
			Fd.start.fromBufferAttribute(s, t), Fd.end.fromBufferAttribute(c, t), Fd.start.applyMatrix4(a), Fd.end.applyMatrix4(a);
			let r = new G(), i = new G();
			Bd.distanceSqToSegment(Fd.start, Fd.end, i, r), n.push({
				point: i,
				pointOnLine: r,
				distance: Bd.origin.distanceTo(i),
				object: e,
				face: null,
				faceIndex: t,
				uv: null,
				uv1: null
			});
		}
	}
}
var Gd = class extends _i {
	constructor(e = new Td(), t = new Ed({ color: Math.random() * 16777215 })) {
		super(e, t), this.isLineSegments2 = !0, this.type = "LineSegments2";
	}
	computeLineDistances() {
		let e = this.geometry, t = e.attributes.instanceStart, n = e.attributes.instanceEnd, r = new Float32Array(2 * t.count);
		for (let e = 0, i = 0, a = t.count; e < a; e++, i += 2) Od.fromBufferAttribute(t, e), kd.fromBufferAttribute(n, e), r[i] = i === 0 ? 0 : r[i - 1], r[i + 1] = r[i] + Od.distanceTo(kd);
		let i = new zs(r, 2, 1);
		return e.setAttribute("instanceDistanceStart", new jr(i, 1, 0)), e.setAttribute("instanceDistanceEnd", new jr(i, 1, 1)), this;
	}
	raycast(e, t) {
		let n = this.material.worldUnits, r = e.camera;
		if (r === null && !n && console.error("LineSegments2: \"Raycaster.camera\" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false."), n === !1 && (this.material.resolution.x === 0 || this.material.resolution.y === 0)) return;
		let i = e.params.Line2 === void 0 ? 0 : e.params.Line2.threshold || 0;
		Bd = e.ray;
		let a = this.matrixWorld, o = this.geometry, s = this.material;
		Vd = s.linewidth + i, o.boundingSphere === null && o.computeBoundingSphere(), Rd.copy(o.boundingSphere).applyMatrix4(a);
		let c;
		if (c = n ? Vd * .5 : Hd(r, Math.max(r.near, Rd.distanceToPoint(Bd.origin)), s.resolution), Rd.radius += c, Bd.intersectsSphere(Rd) === !1) return;
		o.boundingBox === null && o.computeBoundingBox(), Ld.copy(o.boundingBox).applyMatrix4(a);
		let l;
		l = n ? Vd * .5 : Hd(r, Math.max(r.near, Ld.distanceToPoint(Bd.origin)), s.resolution), Ld.expandByScalar(l), Bd.intersectsBox(Ld) !== !1 && (n ? Ud(this, t) : Wd(this, r, t));
	}
	onBeforeRender(e) {
		let t = this.material.uniforms;
		t && t.resolution && (e.getViewport(Dd), this.material.uniforms.resolution.value.set(Dd.z, Dd.w));
	}
}, Kd = { type: "change" }, qd = { type: "start" }, Jd = { type: "end" }, Yd = new ii(), Xd = new Fr(), Zd = Math.cos(70 * Dt.DEG2RAD), Qd = new G(), $d = 2 * Math.PI, ef = {
	NONE: -1,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2,
	TOUCH_ROTATE: 3,
	TOUCH_PAN: 4,
	TOUCH_DOLLY_PAN: 5,
	TOUCH_DOLLY_ROTATE: 6
}, tf = 1e-6, nf = class extends Xs {
	constructor(n, r = null) {
		super(n, r), this.state = ef.NONE, this.target = new G(), this.cursor = new G(), this.minDistance = 0, this.maxDistance = Infinity, this.minZoom = 0, this.maxZoom = Infinity, this.minTargetRadius = 0, this.maxTargetRadius = Infinity, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -Infinity, this.maxAzimuthAngle = Infinity, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
			LEFT: "ArrowLeft",
			UP: "ArrowUp",
			RIGHT: "ArrowRight",
			BOTTOM: "ArrowDown"
		}, this.mouseButtons = {
			LEFT: e.ROTATE,
			MIDDLE: e.DOLLY,
			RIGHT: e.PAN
		}, this.touches = {
			ONE: t.ROTATE,
			TWO: t.DOLLY_PAN
		}, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new G(), this._lastQuaternion = new Ot(), this._lastTargetPosition = new G(), this._quat = new Ot().setFromUnitVectors(n.up, new G(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Bs(), this._sphericalDelta = new Bs(), this._scale = 1, this._panOffset = new G(), this._rotateStart = new W(), this._rotateEnd = new W(), this._rotateDelta = new W(), this._panStart = new W(), this._panEnd = new W(), this._panDelta = new W(), this._dollyStart = new W(), this._dollyEnd = new W(), this._dollyDelta = new W(), this._dollyDirection = new G(), this._mouse = new W(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = af.bind(this), this._onPointerDown = rf.bind(this), this._onPointerUp = of.bind(this), this._onContextMenu = pf.bind(this), this._onMouseWheel = lf.bind(this), this._onKeyDown = uf.bind(this), this._onTouchStart = df.bind(this), this._onTouchMove = ff.bind(this), this._onMouseDown = sf.bind(this), this._onMouseMove = cf.bind(this), this._interceptControlDown = mf.bind(this), this._interceptControlUp = hf.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
	}
	set cursorStyle(e) {
		this._cursorStyle = e, e === "grab" ? this.domElement.style.cursor = "grab" : this.domElement.style.cursor = "auto";
	}
	get cursorStyle() {
		return this._cursorStyle;
	}
	connect(e) {
		super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.ownerDocument.addEventListener("keydown", this._interceptControlDown, {
			passive: !0,
			capture: !0
		}), this.domElement.style.touchAction = "none";
	}
	disconnect() {
		this.state = ef.NONE, this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.ownerDocument.removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.ownerDocument.removeEventListener("keyup", this._interceptControlUp, { capture: !0 }), this._controlActive = !1, this._pointers.length = 0, this._pointerPositions = {}, this.domElement.style.touchAction = "", this.domElement.style.cursor = "auto";
	}
	dispose() {
		this.disconnect();
	}
	getPolarAngle() {
		return this._spherical.phi;
	}
	getAzimuthalAngle() {
		return this._spherical.theta;
	}
	getDistance() {
		return this.object.position.distanceTo(this.target);
	}
	listenToKeyEvents(e) {
		e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
	}
	stopListenToKeyEvents() {
		this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
	}
	saveState() {
		this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
	}
	reset() {
		this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Kd), this.update(), this.state = ef.NONE;
	}
	pan(e, t) {
		this._pan(e, t), this.update();
	}
	dollyIn(e) {
		this._dollyIn(e), this.update();
	}
	dollyOut(e) {
		this._dollyOut(e), this.update();
	}
	rotateLeft(e) {
		this._rotateLeft(e), this.update();
	}
	rotateUp(e) {
		this._rotateUp(e), this.update();
	}
	update(e = null) {
		let t = this.object.position;
		Qd.copy(t).sub(this.target), Qd.applyQuaternion(this._quat), this._spherical.setFromVector3(Qd), this.autoRotate && this.state === ef.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
		let n = this.minAzimuthAngle, r = this.maxAzimuthAngle;
		isFinite(n) && isFinite(r) && (n < -Math.PI ? n += $d : n > Math.PI && (n -= $d), r < -Math.PI ? r += $d : r > Math.PI && (r -= $d), n <= r ? this._spherical.theta = Math.max(n, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + r) / 2 ? Math.max(n, this._spherical.theta) : Math.min(r, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
		let i = !1;
		if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
		else {
			let e = this._spherical.radius;
			this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), i = e != this._spherical.radius;
		}
		if (Qd.setFromSpherical(this._spherical), Qd.applyQuaternion(this._quatInverse), t.copy(this.target).add(Qd), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
			let e = null;
			if (this.object.isPerspectiveCamera) {
				let t = Qd.length();
				e = this._clampDistance(t * this._scale);
				let n = t - e;
				this.object.position.addScaledVector(this._dollyDirection, n), this.object.updateMatrixWorld(), i = !!n;
			} else if (this.object.isOrthographicCamera) {
				let t = new G(this._mouse.x, this._mouse.y, 0);
				t.unproject(this.object);
				let n = this.object.zoom;
				this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), i = n !== this.object.zoom;
				let r = new G(this._mouse.x, this._mouse.y, 0);
				r.unproject(this.object), this.object.position.sub(r).add(t), this.object.updateMatrixWorld(), e = Qd.length();
			} else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
			e !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position) : (Yd.origin.copy(this.object.position), Yd.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Yd.direction)) < Zd ? this.object.lookAt(this.target) : (Xd.setFromNormalAndCoplanarPoint(this.object.up, this.target), Yd.intersectPlane(Xd, this.target))));
		} else if (this.object.isOrthographicCamera) {
			let e = this.object.zoom;
			this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), e !== this.object.zoom && (this.object.updateProjectionMatrix(), i = !0);
		}
		return this._scale = 1, this._performCursorZoom = !1, i || this._lastPosition.distanceToSquared(this.object.position) > tf || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > tf || this._lastTargetPosition.distanceToSquared(this.target) > tf ? (this.dispatchEvent(Kd), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
	}
	_getAutoRotationAngle(e) {
		return e === null ? $d / 60 / 60 * this.autoRotateSpeed : $d / 60 * this.autoRotateSpeed * e;
	}
	_getZoomScale(e) {
		let t = Math.abs(e * .01);
		return .95 ** (this.zoomSpeed * t);
	}
	_rotateLeft(e) {
		this._sphericalDelta.theta -= e;
	}
	_rotateUp(e) {
		this._sphericalDelta.phi -= e;
	}
	_panLeft(e, t) {
		Qd.setFromMatrixColumn(t, 0), Qd.multiplyScalar(-e), this._panOffset.add(Qd);
	}
	_panUp(e, t) {
		this.screenSpacePanning === !0 ? Qd.setFromMatrixColumn(t, 1) : (Qd.setFromMatrixColumn(t, 0), Qd.crossVectors(this.object.up, Qd)), Qd.multiplyScalar(e), this._panOffset.add(Qd);
	}
	_pan(e, t) {
		let n = this.domElement;
		if (this.object.isPerspectiveCamera) {
			let r = this.object.position;
			Qd.copy(r).sub(this.target);
			let i = Qd.length();
			i *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * i / n.clientHeight, this.object.matrix), this._panUp(2 * t * i / n.clientHeight, this.object.matrix);
		} else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
	}
	_dollyOut(e) {
		this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
	}
	_dollyIn(e) {
		this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
	}
	_updateZoomParameters(e, t) {
		if (!this.zoomToCursor) return;
		this._performCursorZoom = !0;
		let n = this.domElement.getBoundingClientRect(), r = e - n.left, i = t - n.top, a = n.width, o = n.height;
		this._mouse.x = r / a * 2 - 1, this._mouse.y = -(i / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
	}
	_clampDistance(e) {
		return Math.max(this.minDistance, Math.min(this.maxDistance, e));
	}
	_handleMouseDownRotate(e) {
		this._rotateStart.set(e.clientX, e.clientY);
	}
	_handleMouseDownDolly(e) {
		this._updateZoomParameters(e.clientX, e.clientY), this._dollyStart.set(e.clientX, e.clientY);
	}
	_handleMouseDownPan(e) {
		this._panStart.set(e.clientX, e.clientY);
	}
	_handleMouseMoveRotate(e) {
		this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
		let t = this.domElement;
		this._rotateLeft($d * this._rotateDelta.x / t.clientHeight), this._rotateUp($d * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
	}
	_handleMouseMoveDolly(e) {
		this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.zoomToCursor && (this._performCursorZoom = !0, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize()), this.update();
	}
	_handleMouseMovePan(e) {
		this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
	}
	_handleMouseWheel(e) {
		this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
	}
	_handleKeyDown(e) {
		let t = !1;
		switch (e.code) {
			case this.keys.UP:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp($d * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = !0;
				break;
			case this.keys.BOTTOM:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-$d * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = !0;
				break;
			case this.keys.LEFT:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft($d * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = !0;
				break;
			case this.keys.RIGHT: e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-$d * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = !0;
		}
		t && (e.preventDefault(), this.update());
	}
	_handleTouchStartRotate(e) {
		if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._rotateStart.set(n, r);
		}
	}
	_handleTouchStartPan(e) {
		if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._panStart.set(n, r);
		}
	}
	_handleTouchStartDolly(e) {
		let t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, i = Math.sqrt(n * n + r * r);
		this._dollyStart.set(0, i);
	}
	_handleTouchStartDollyPan(e) {
		this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
	}
	_handleTouchStartDollyRotate(e) {
		this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
	}
	_handleTouchMoveRotate(e) {
		if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._rotateEnd.set(n, r);
		}
		this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
		let t = this.domElement;
		this._rotateLeft($d * this._rotateDelta.x / t.clientHeight), this._rotateUp($d * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
	}
	_handleTouchMovePan(e) {
		if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._panEnd.set(n, r);
		}
		this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
	}
	_handleTouchMoveDolly(e) {
		let t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, i = Math.sqrt(n * n + r * r);
		this._dollyEnd.set(0, i), this._dollyDelta.set(0, (this._dollyEnd.y / this._dollyStart.y) ** +this.zoomSpeed), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
		let a = (e.pageX + t.x) * .5, o = (e.pageY + t.y) * .5;
		this._updateZoomParameters(a, o);
	}
	_handleTouchMoveDollyPan(e) {
		this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
	}
	_handleTouchMoveDollyRotate(e) {
		this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
	}
	_addPointer(e) {
		this._pointers.push(e.pointerId);
	}
	_removePointer(e) {
		delete this._pointerPositions[e.pointerId];
		for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
			this._pointers.splice(t, 1);
			return;
		}
	}
	_isTrackingPointer(e) {
		for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return !0;
		return !1;
	}
	_trackPointer(e) {
		let t = this._pointerPositions[e.pointerId];
		t === void 0 && (t = new W(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
	}
	_getSecondPointerPosition(e) {
		let t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
		return this._pointerPositions[t];
	}
	_customWheelEvent(e) {
		let t = e.deltaMode, n = {
			clientX: e.clientX,
			clientY: e.clientY,
			deltaY: e.deltaY
		};
		switch (t) {
			case 1:
				n.deltaY *= 16;
				break;
			case 2: n.deltaY *= 100;
		}
		return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
	}
};
function rf(e) {
	this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(e.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), this._isTrackingPointer(e) || (this._addPointer(e), e.pointerType === "touch" ? this._onTouchStart(e) : this._onMouseDown(e), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
}
function af(e) {
	this.enabled !== !1 && (e.pointerType === "touch" ? this._onTouchMove(e) : this._onMouseMove(e));
}
function of(e) {
	switch (this._removePointer(e), this._pointers.length) {
		case 0:
			this.domElement.releasePointerCapture(e.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Jd), this.state = ef.NONE, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
			break;
		case 1:
			let t = this._pointers[0], n = this._pointerPositions[t];
			this._onTouchStart({
				pointerId: t,
				pageX: n.x,
				pageY: n.y
			});
	}
}
function sf(t) {
	let n;
	switch (t.button) {
		case 0:
			n = this.mouseButtons.LEFT;
			break;
		case 1:
			n = this.mouseButtons.MIDDLE;
			break;
		case 2:
			n = this.mouseButtons.RIGHT;
			break;
		default: n = -1;
	}
	switch (n) {
		case e.DOLLY:
			if (this.enableZoom === !1) return;
			this._handleMouseDownDolly(t), this.state = ef.DOLLY;
			break;
		case e.ROTATE:
			if (t.ctrlKey || t.metaKey || t.shiftKey) {
				if (this.enablePan === !1) return;
				this._handleMouseDownPan(t), this.state = ef.PAN;
			} else {
				if (this.enableRotate === !1) return;
				this._handleMouseDownRotate(t), this.state = ef.ROTATE;
			}
			break;
		case e.PAN:
			if (t.ctrlKey || t.metaKey || t.shiftKey) {
				if (this.enableRotate === !1) return;
				this._handleMouseDownRotate(t), this.state = ef.ROTATE;
			} else {
				if (this.enablePan === !1) return;
				this._handleMouseDownPan(t), this.state = ef.PAN;
			}
			break;
		default: this.state = ef.NONE;
	}
	this.state !== ef.NONE && this.dispatchEvent(qd);
}
function cf(e) {
	switch (this.state) {
		case ef.ROTATE:
			if (this.enableRotate === !1) return;
			this._handleMouseMoveRotate(e);
			break;
		case ef.DOLLY:
			if (this.enableZoom === !1) return;
			this._handleMouseMoveDolly(e);
			break;
		case ef.PAN:
			if (this.enablePan === !1) return;
			this._handleMouseMovePan(e);
	}
}
function lf(e) {
	this.enabled !== !1 && this.enableZoom !== !1 && this.state === ef.NONE && (e.preventDefault(), this.dispatchEvent(qd), this._handleMouseWheel(this._customWheelEvent(e)), this.dispatchEvent(Jd));
}
function uf(e) {
	this.enabled !== !1 && this._handleKeyDown(e);
}
function df(e) {
	switch (this._trackPointer(e), this._pointers.length) {
		case 1:
			switch (this.touches.ONE) {
				case t.ROTATE:
					if (this.enableRotate === !1) {
						this.state = ef.NONE;
						break;
					}
					this._handleTouchStartRotate(e), this.state = ef.TOUCH_ROTATE;
					break;
				case t.PAN:
					if (this.enablePan === !1) {
						this.state = ef.NONE;
						break;
					}
					this._handleTouchStartPan(e), this.state = ef.TOUCH_PAN;
					break;
				default: this.state = ef.NONE;
			}
			break;
		case 2:
			switch (this.touches.TWO) {
				case t.DOLLY_PAN:
					if (this.enableZoom === !1 && this.enablePan === !1) return;
					this._handleTouchStartDollyPan(e), this.state = ef.TOUCH_DOLLY_PAN;
					break;
				case t.DOLLY_ROTATE:
					if (this.enableZoom === !1 && this.enableRotate === !1) return;
					this._handleTouchStartDollyRotate(e), this.state = ef.TOUCH_DOLLY_ROTATE;
					break;
				default: this.state = ef.NONE;
			}
			break;
		default: this.state = ef.NONE;
	}
	this.state !== ef.NONE && this.dispatchEvent(qd);
}
function ff(e) {
	switch (this._trackPointer(e), this.state) {
		case ef.TOUCH_ROTATE:
			if (this.enableRotate === !1) return;
			this._handleTouchMoveRotate(e), this.update();
			break;
		case ef.TOUCH_PAN:
			if (this.enablePan === !1) return;
			this._handleTouchMovePan(e), this.update();
			break;
		case ef.TOUCH_DOLLY_PAN:
			if (this.enableZoom === !1 && this.enablePan === !1) return;
			this._handleTouchMoveDollyPan(e), this.update();
			break;
		case ef.TOUCH_DOLLY_ROTATE:
			if (this.enableZoom === !1 && this.enableRotate === !1) return;
			this._handleTouchMoveDollyRotate(e), this.update();
			break;
		default: this.state = ef.NONE;
	}
}
function pf(e) {
	this.enabled !== !1 && e.preventDefault();
}
function mf(e) {
	e.key === "Control" && (this._controlActive = !0, this.domElement.ownerDocument.addEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
function hf(e) {
	e.key === "Control" && (this._controlActive = !1, this.domElement.ownerDocument.removeEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
// tools/site/v3d/ravionics-geo.js
var gf = "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UPicv65H4T/LNy29y96lv65H4T/lA0O9hv6wv65H4T/doUy97/+9v65H4T9S2Ee9mBfMv65H4T+saDW9Syvav65H4T9CSxm9ASPnv65H4T/H9fG8uDjyv65H4T9Bt7K8Uxv7v65H4T8gXna8Lu8AwK5H4T9oLxy8MWgDwK5H4T+BE6671SkFwK5H4T8g3RC7z1cNwM3MDEC3RPY6sWEOwM3MDEAAAAAAntkLwM3MDED79pM7jr8JwM3MDEDlwQQ83t8GwM3MDECbaVE8KBkDwM3MDECR6Jc8Qsb8v83MDECDqs08gcDxv83MDEDFTAI9XMnlv83MDECSMho92s7Zv83MDEBG3ik92sDOv83MDED87y09SEzFv83MDEBPwyU9kru9v83MDEA5PBM9QwO4v83MDEAoevI8Guezv83MDECbfbM87Caxv83MDEAAzU48lfavv83MDEAAAAAA7Caxv83MDEAAzU68Guezv83MDECbfbO8QwO4v83MDEAoevK8kru9v83MDEA5PBO9SEzFv83MDEBPwyW92sDOv83MDED87y292s7Zv83MDEBG3im9XMnlv83MDECSMhq9gcDxv83MDEDFTAK9Qsb8v83MDECDqs28KBkDwM3MDECR6Je83t8GwM3MDECbaVG8jr8JwM3MDEDlwQS8ntkLwM3MDED79pO7z1cNwM3MDEC3RPa6z1cNwM3MDEC3RHY6ntkLwM3MDED79hM7jr8JwM3MDEDlwYQ73t8GwM3MDECbadE7KBkDwM3MDECR6Bc8Qsb8v83MDECDqk08gcDxv83MDEDFTII8XMnlv83MDECSMpo82s7Zv83MDEBG3qk82sDOv83MDED87608SEzFv83MDEBPw6U8kru9v83MDEA5PJM8QwO4v83MDEAoenI8Guezv83MDECbfTM87Caxv83MDEAAzc477Caxv83MDEAAzc67Guezv83MDECbfTO8QwO4v83MDEAoenK8kru9v83MDEA5PJO8SEzFv83MDEBPw6W82sDOv83MDED876282s7Zv83MDEBG3qm8XMnlv83MDECSMpq8gcDxv83MDEDFTIK8Qsb8v83MDECDqk28KBkDwM3MDECR6Be83t8GwM3MDECbadG7jr8JwM3MDEDlwYS7ntkLwM3MDED79hO7z1cNwM3MDEC3RHa6z1cNwM3MDEBXqpkkntkLwM3MDECVy8skjr8JwM3MDEBQCj4k3t8GwM3MDECbGB4jKBkDwM3MDEDV6JYjQsb8v83MDEB2SJUigcDxv83MDEBKgEAjXMnlv83MDEAAAICi2s7Zv83MDEBhP+ki2sDOv83MDEBaLkKiSEzFv83MDEDxzjKikru9v83MDEAdiTqiQwO4v83MDEBtjLYjGuezv83MDEDqFFGk7Caxv83MDECoJ8okAAABAAIAAQADAAIAAgADAAQAAwAFAAQABAAFAAYABQAHAAYABgAHAAgABwAJAAgACAAJAAoACQALAAoACgALAAwACwANAAwADAANAA4ADQAPAA4ADgAPABAADwARABAADwASABEAEgATABEAEgAUABMAFAAVABMAFAAWABUAFgAXABUAFgAYABcAGAAZABcAGAAaABkAGgAbABkAGgAcABsAHAAdABsAHAAeAB0AHgAfAB0AHwAeACAAHgAcACAAIAAcACEAHAAaACEAIQAaACIAGgAYACIAIgAYACMAGAAWACMAIwAWACQAFgAUACQAJAAUACUAFAASACUAJQASACYAEgAPACYAJgAPACcADwAoACcADwANACgADQApACgADQALACkACwAqACkACwAJACoACQArACoACQAHACsABwAsACsABwAFACwABQAtACwABQADAC0AAwAuAC0AAwABAC4AAQAAAC4AAAACAC8AAgAEAC8ALwAEADAABAAGADAAMAAGADEABgAIADEAMQAIADIACAAKADIAMgAKADMACgAMADMAMwAMADQADAAOADQANAAOADUADgAQADUANQAQADYAEAA3ADYAEAARADcAEQA4ADcAEQATADgAEwA5ADgAEwAVADkAFQA6ADkAFQAXADoAFwA7ADoAFwAZADsAGQA8ADsAGQAbADwAGwA9ADwAGwAdAD0AHQAfAD0AHwAgAD4AIAAhAD4APgAhAD8AIQAiAD8APwAiAEAAIgAjAEAAQAAjAEEAIwAkAEEAQQAkAEIAJAAlAEIAQgAlAEMAJQAmAEMAQwAmAEQAJgAnAEQARAAnAEUAJwBGAEUAJwAoAEYAKABHAEYAKAApAEcAKQBIAEcAKQAqAEgAKgBJAEgAKgArAEkAKwBKAEkAKwAsAEoALABLAEoALAAtAEsALQBMAEsALQAuAEwALgAAAEwAAAAvAE0ATQAvAE4ALwAwAE4ATgAwAE8AMAAxAE8ATwAxAFAAMQAyAFAAUAAyAFEAMgAzAFEAUQAzAFIAMwA0AFIAUgA0AFMANAA1AFMAUwA1AFQANQA2AFQAVAA2AFUANgBWAFUANgA3AFYANwBXAFYANwA4AFcAOABYAFcAOAA5AFgAOQBZAFgAOQA6AFkAOgBaAFkAOgA7AFoAOwBbAFoAOwA8AFsAPABcAFsAPAA9AFwAPQBdAFwAPQAfAF0AHwA+AF0AXQA+AF4APgA/AF4AXgA/AF8APwBAAF8AXwBAAGAAQABBAGAAYABBAGEAQQBCAGEAYQBCAGIAQgBDAGIAYgBDAGMAQwBEAGMAYwBEAGQARABFAGQAZABFAGUARQBmAGUARQBGAGYARgBnAGYARgBHAGcARwBoAGcARwBIAGgASABpAGgASABJAGkASQBqAGkASQBKAGoASgBrAGoASgBLAGsASwBsAGsASwBMAGwATABNAGwATAAAAE0ATQBOAG0AbQBOAG4ATgBPAG4AbgBPAG8ATwBQAG8AbwBQAHAAUABRAHAAcABRAHEAUQBSAHEAcQBSAHIAUgBTAHIAcgBTAHMAUwBUAHMAcwBUAHQAVABVAHQAdABVAHUAVQB2AHUAVQBWAHYAVgB3AHYAVgBXAHcAVwB4AHcAVwBYAHgAWAB5AHgAWABZAHkAWQB6AHkAWQBaAHoAWgB7AHoAWgBbAHsAWwB8AHsAWwBcAHwAXAB9AHwAXABdAH0AXQBeAH0AfQBeAH4AXgBfAH4AfgBfAH8AXwBgAH8AfwBgAIAAYABhAIAAgABhAIEAYQBiAIEAgQBiAIIAYgBjAIIAggBjAIMAYwBkAIMAgwBkAIQAZABlAIQAhABlAIUAZQCGAIUAZQBmAIYAZgCHAIYAZgBnAIcAZwCIAIcAZwBoAIgAaACJAIgAaABpAIkAaQCKAIkAaQBqAIoAagCLAIoAagBrAIsAawCMAIsAawBsAIwAbABtAIwAbABNAG0AbQBuAI0AjQBuAI4AbgBvAI4AjgBvAI8AbwBwAI8AjwBwAJAAcABxAJAAkABxAJEAcQByAJEAkQByAJIAcgBzAJIAkgBzAJMAcwB0AJMAkwB0AJQAdAB1AJQAlAB1AJUAdQCWAJUAdQB2AJYAdgCXAJYAdgB3AJcAdwCYAJcAdwB4AJgAeACZAJgAeAB5AJkAeQCaAJkAeQB6AJoAegCbAJoAegB7AJsAewCcAJsAewB8AJwAfACdAJwAfAB9AJ0AfQB+AJ0AnQB+AJ4AfgB/AJ4AngB/AJ8AfwCAAJ8AnwCAAKAAgACBAKAAoACBAKEAgQCCAKEAoQCCAKIAggCDAKIAogCDAKMAgwCEAKMAowCEAKQAhACFAKQApACFAKUAhQCmAKUAhQCGAKYAhgCnAKYAhgCHAKcAhwCoAKcAhwCIAKgAiACpAKgAiACJAKkAiQCqAKkAiQCKAKoAigCrAKoAigCLAKsAiwCsAKsAiwCMAKwAjACNAKwAjABtAI0AjQCtAK4AjQCOAK0AjgCvAK0AjgCPAK8AjwCwAK8AjwCQALAAkACxALAAkACRALEAkQCyALEAkQCSALIAkgCzALIAkgCTALMAkwC0ALMAkwCUALQAlAC1ALQAlACVALUAlQCWALUAtQCWALYAlgCXALYAtgCXALcAlwCYALcAtwCYALgAmACZALgAuACZALkAmQCaALkAuQCaALoAmgCbALoAugCbALsAmwCcALsAuwCcALwAnACdALwAvACdAL0AnQC+AL0AnQCeAL4AngC/AL4AngCfAL8AnwDAAL8AnwCgAMAAoADBAMAAoAChAMEAoQDCAMEAoQCiAMIAogDDAMIAogCjAMMAowDEAMMAowCkAMQApADFAMQApAClAMUApQCmAMUAxQCmAMYApgCnAMYAxgCnAMcApwCoAMcAxwCoAMgAqACpAMgAyACpAMkAqQCqAMkAyQCqAMoAqgCrAMoAygCrAMsAqwCsAMsAywCsAMwArACNAMwAzACNAK4ArgDNAM4ArgCtAM0ArQDPAM0ArQCvAM8ArwDQAM8ArwCwANAAsADRANAAsACxANEAsQDSANEAsQCyANIAsgDTANIAsgCzANMAswDUANMAswC0ANQAtADVANQAtAC1ANUAtQC2ANUA1QC2ANYAtgC3ANYA1gC3ANcAtwC4ANcA1wC4ANgAuAC5ANgA2AC5ANkAuQC6ANkA2QC6ANoAugC7ANoA2gC7ANsAuwC8ANsA2wC8ANwAvAC9ANwA3AC9AN0AvQDeAN0AvQC+AN4AvgDfAN4AvgC/AN8AvwDgAN8AvwDAAOAAwADhAOAAwADBAOEAwQDiAOEAwQDCAOIAwgDjAOIAwgDDAOMAwwDkAOMAwwDEAOQAxADlAOQAxADFAOUAxQDGAOUA5QDGAOYAxgDHAOYA5gDHAOcAxwDIAOcA5wDIAOgAyADJAOgA6ADJAOkAyQDKAOkA6QDKAOoAygDLAOoA6gDLAOsAywDMAOsA6wDMAOwAzACuAOwA7ACuAM4AzgDNAO0AzQDuAO0AzQDPAO4AzwDvAO4AzwDQAO8A0ADwAO8A0ADRAPAA0QDxAPAA0QDSAPEA0gDyAPEA0gDTAPIA0wDzAPIA0wDUAPMA1AD0APMA1ADVAPQA1QDWAPQA9ADWAPUA1gDXAPUA9QDXAPYA1wDYAPYA9gDYAPcA2ADZAPcA9wDZAPgA2QDaAPgA+ADaAPkA2gDbAPkA+QDbAPoA2wDcAPoA+gDcAPsA3ADdAPsA3QDeAPwA3gD9APwA3gDfAP0A3wD+AP0A3wDgAP4A4AD/AP4A4ADhAP8A4QAAAf8A4QDiAAAB4gABAQAB4gDjAAEB4wACAQEB4wDkAAIB5AADAQIB5ADlAAMB5QDmAAMBAwHmAAQB5gDnAAQBBAHnAAUB5wDoAAUBBQHoAAYB6ADpAAYBBgHpAAcB6QDqAAcBBwHqAAgB6gDrAAgBCAHrAAkB6wDsAAkBCQHsAAoB7ADOAAoBzgDtAAsB7QAMAQsB7QDuAAwB7gANAQwB7gDvAA0B7wAOAQ0B7wDwAA4B8AAPAQ4B8ADxAA8B8QAQAQ8B8QDyABAB8gARARAB8gDzABEB8wASAREB8wD0ABIB9AD1ABIBEgH1ABMB9QD2ABMBEwH2ABQB9gD3ABQBFAH3ABUB9wD4ABUBFQH4ABYB+AD5ABYBFgH5ABcB+QD6ABcBFwH6ABgB+gD7ABgBGAH7ABkB+wDdABkB3QD8ABkB/AAYARkB/AD9ABgB/QAXARgB/QD+ABcB/gAWARcB/gD/ABYB/wAVARYB/wAAARUBAAEUARUBAAEBARQBAQETARQBAQECARMBAgESARMBAgEDARIBAwEEARIBEgEEAREBBAEFAREBEQEFARABBQEGARABEAEGAQ8BBgEHAQ8BDwEHAQ4BBwEIAQ4BDgEIAQ0BCAEJAQ0BDQEJAQwBCQEKAQwBDAEKAQsBCgHOAAsBq6qqIwAAAACrqiqjWdbxvXWpNrvdXfU9WdbxvdjzRb3JceQ9WdbxveL1sL0t5q49q6qqI6uqKiMAAAAAWdbxvZ5X4b1LSDs9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NQBFADYARQBGADYANgBGADcARgBHADcANwBHADgARwBIADgAOABIAEkAOABJADkAOQBJAEoAOQBKADoAOgBKAEsAOgBLADsAOwBLAEwAOwBMADwAPABMAD0ATABNAD0APQBNAD4ATQBOAD4APgBOAD8ATgBPAD8APwBPAEAATwBQAEAAQABQAFEAQABRAEEAQQBRAFIAQQBSAEIAQgBSAFMAQgBTAEMAQwBTAEQAQwBEADQARABUAEUAVABVAEUARQBVAEYAVQBWAEYARgBWAEcAVgBXAEcARwBXAEgAVwBYAEgASABYAFkASABZAEkASQBZAFoASQBaAEoASgBaAFsASgBbAEsASwBbAFwASwBcAEwATABcAE0AXABdAE0ATQBdAE4AXQBeAE4ATgBeAE8AXgBfAE8ATwBfAFAAXwBgAFAAUABgAGEAUABhAFEAUQBhAGIAUQBiAFIAUgBiAGMAUgBjAFMAUwBjAFQAUwBUAEQAVABkAFUAZABlAFUAVQBlAFYAZQBmAFYAVgBmAFcAZgBnAFcAVwBnAFgAZwBoAFgAWABoAGkAWABpAFkAWQBpAGoAWQBqAFoAWgBqAGsAWgBrAFsAWwBrAGwAWwBsAFwAXABsAF0AbABtAF0AXQBtAF4AbQBuAF4AXgBuAF8AbgBvAF8AXwBvAGAAbwBwAGAAYABwAHEAYABxAGEAYQBxAHIAYQByAGIAYgByAHMAYgBzAGMAYwBzAGQAYwBkAFQAZAB0AGUAdAB1AGUAZQB1AGYAdQB2AGYAZgB2AGcAdgB3AGcAZwB3AGgAdwB4AGgAaAB4AHkAaAB5AGkAaQB5AHoAaQB6AGoAagB6AHsAagB7AGsAawB7AHwAawB8AGwAbAB8AG0AfAB9AG0AbQB9AG4AfQB+AG4AbgB+AG8AfgB/AG8AbwB/AHAAfwCAAHAAcACAAIEAcACBAHEAcQCBAIIAcQCCAHIAcgCCAIMAcgCDAHMAcwCDAHQAcwB0AGQAdACEAHUAhACFAHUAdQCFAHYAhQCGAHYAdgCGAHcAhgCHAHcAdwCHAHgAhwCIAHgAeACIAIkAeACJAHkAeQCJAIoAeQCKAHoAegCKAIsAegCLAHsAewCLAIwAewCMAHwAfACMAH0AjACNAH0AfQCNAH4AjQCOAH4AfgCOAH8AjgCPAH8AfwCPAIAAjwCQAIAAgACQAJEAgACRAIEAgQCRAJIAgQCSAIIAggCSAJMAggCTAIMAgwCTAIQAgwCEAHQAhACUAIUAlACVAIUAhQCVAIYAlQCWAIYAhgCWAIcAlgCXAIcAhwCXAIgAlwCYAIgAiACYAJkAiACZAIkAiQCZAJoAiQCaAIoAigCaAJsAigCbAIsAiwCbAJwAiwCcAIwAjACcAI0AnACdAI0AjQCdAI4AnQCeAI4AjgCeAI8AngCfAI8AjwCfAJAAnwCgAJAAkACgAKEAkAChAJEAkQChAKIAkQCiAJIAkgCiAKMAkgCjAJMAkwCjAJQAkwCUAIQAlACkAJUApAClAJUAlQClAJYApQCmAJYAlgCmAJcApgCnAJcAlwCnAJgApwCoAJgAmACoAKkAmACpAJkAmQCpAKoAmQCqAJoAmgCqAKsAmgCrAJsAmwCrAKwAmwCsAJwAnACsAJ0ArACtAJ0AnQCtAJ4ArQCuAJ4AngCuAJ8ArgCvAJ8AnwCvAKAArwCwAKAAoACwALEAoACxAKEAoQCxALIAoQCyAKIAogCyALMAogCzAKMAowCzAKQAowCkAJQApAC0AKUAtAC1AKUApQC1AKYAtQC2AKYApgC2AKcAtgC3AKcApwC3AKgAtwC4AKgAqAC4ALkAqAC5AKkAqQC5ALoAqQC6AKoAqgC6ALsAqgC7AKsAqwC7ALwAqwC8AKwArAC8AK0AvAC9AK0ArQC9AK4AvQC+AK4ArgC+AK8AvgC/AK8ArwC/ALAAvwDAALAAsADAAMEAsADBALEAsQDBAMIAsQDCALIAsgDCAMMAsgDDALMAswDDALQAswC0AKQAtADEALUAxADFALUAtQDFALYAxQDGALYAtgDGALcAxgDHALcAtwDHALgAxwDIALgAuADIAMkAuADJALkAuQDJAMoAuQDKALoAugDKAMsAugDLALsAuwDLAMwAuwDMALwAvADMAL0AzADNAL0AvQDNAL4AzQDOAL4AvgDOAL8AzgDPAL8AvwDPAMAAzwDQAMAAwADQANEAwADRAMEAwQDRANIAwQDSAMIAwgDSANMAwgDTAMMAwwDTAMQAwwDEALQAxADUAMUA1ADVAMUAxQDVAMYA1QDWAMYAxgDWAMcA1gDXAMcAxwDXAMgA1wDYAMgAyADYANkAyADZAMkAyQDZANoAyQDaAMoAygDaANsAygDbAMsAywDbANwAywDcAMwAzADcAM0A3ADdAM0AzQDdAM4A3QDeAM4AzgDeAM8A3gDfAM8AzwDfANAA3wDgANAA0ADgAOEA0ADhANEA0QDhAOIA0QDiANIA0gDiAOMA0gDjANMA0wDjANQA0wDUAMQA1ADkANUA5ADlANUA1QDlANYA5QDmANYA1gDmANcA5gDnANcA1wDnANgA5wDoANgA2ADoAOkA2ADpANkA2QDpAOoA2QDqANoA2gDqAOsA2gDrANsA2wDrAOwA2wDsANwA3ADsAN0A7ADtAN0A3QDtAN4A7QDuAN4A3gDuAN8A7gDvAN8A3wDvAOAA7wDwAOAA4ADwAPEA4ADxAOEA4QDxAPIA4QDyAOIA4gDyAPMA4gDzAOMA4wDzAOQA4wDkANQA5AD0AOUA9AD1AOUA5QD1AOYA9QD2AOYA5gD2AOcA9gD3AOcA5wD3AOgA9wD4AOgA6AD4APkA6AD5AOkA6QD5APoA6QD6AOoA6gD6APsA6gD7AOsA6wD7APwA6wD8AOwA7AD8AO0A/AD9AO0A7QD9AO4A/QD+AO4A7gD+AO8A/gD/AO8A7wD/APAA/wAAAfAA8AAAAQEB8AABAfEA8QABAQIB8QACAfIA8gACAQMB8gADAfMA8wADAfQA8wD0AOQA9AAEAfUABAEFAfUA9QAFAfYABQEGAfYA9gAGAfcABgEHAfcA9wAHAfgABwEIAfgA+AAIAQkB+AAJAfkA+QAJAQoB+QAKAfoA+gAKAQsB+gALAfsA+wALAQwB+wAMAfwA/AAMAf0ADAENAf0A/QANAf4ADQEOAf4A/gAOAf8ADgEPAf8A/wAPAQABDwEQAQABAAEQAREBAAERAQEBAQERARIBAQESAQIBAgESARMBAgETAQMBAwETAQQBAwEEAfQABAEUAQUBFAEVAQUBBQEVAQYBFQEWAQYBBgEWAQcBFgEXAQcBBwEXAQgBFwEYAQgBCAEYARkBCAEZAQkBCQEZARoBCQEaAQoBCgEaARsBCgEbAQsBCwEbARwBCwEcAQwBDAEcAQ0BHAEdAQ0BDQEdAQ4BHQEeAQ4BDgEeAQ8BHgEfAQ8BDwEfARABHwEgARABEAEgASEBEAEhAREBEQEhASIBEQEiARIBEgEiASMBEgEjARMBEwEjARQBEwEUAQQBFAEkASUBFAElARUBFQElASYBFQEmARYBFgEmAScBFgEnARcBFwEnASgBFwEoARgBGAEoARkBKAEpARkBGQEpARoBKQEqARoBGgEqARsBKgErARsBGwErARwBKwEsARwBHAEsAS0BHAEtAR0BHQEtAS4BHQEuAR4BHgEuAS8BHgEvAR8BHwEvATABHwEwASABIAEwASEBMAExASEBIQExASIBMQEyASIBIgEyASMBMgEzASMBIwEzARQBMwEkARQBJAE0ATUBJAE1ASUBJQE1ATYBJQE2ASYBJgE2ATcBJgE3AScBJwE3ATgBJwE4ASgBKAE4ASkBOAE5ASkBKQE5ASoBOQE6ASoBKgE6ASsBOgE7ASsBKwE7ASwBOwE8ASwBLAE8AT0BLAE9AS0BLQE9AT4BLQE+AS4BLgE+AT8BLgE/AS8BLwE/AUABLwFAATABMAFAATEBQAFBATEBMQFBATIBQQFCATIBMgFCATMBQgFDATMBMwFDASQBQwE0ASQBNAFEAUUBNAFFATUBNQFFAUYBNQFGATYBNgFGAUcBNgFHATcBNwFHAUgBNwFIATgBOAFIATkBSAFJATkBOQFJAToBSQFKAToBOgFKATsBSgFLATsBOwFLATwBSwFMATwBPAFMAU0BPAFNAT0BPQFNAU4BPQFOAT4BPgFOAU8BPgFPAT8BPwFPAVABPwFQAUABQAFQAUEBUAFRAUEBQQFRAUIBUQFSAUIBQgFSAUMBUgFTAUMBQwFTATQBUwFEATQBRAFUAVUBRAFVAUUBRQFVAVYBRQFWAUYBRgFWAVcBRgFXAUcBRwFXAVgBRwFYAUgBSAFYAUkBWAFZAUkBSQFZAUoBWQFaAUoBSgFaAUsBWgFbAUsBSwFbAUwBWwFcAUwBTAFcAV0BTAFdAU0BTQFdAV4BTQFeAU4BTgFeAV8BTgFfAU8BTwFfAWABTwFgAVABUAFgAVEBYAFhAVEBUQFhAVIBYQFiAVIBUgFiAVMBYgFjAVMBUwFjAUQBYwFUAUQBVAFkAWUBVAFlAVUBVQFlAWYBVQFmAVYBVgFmAWcBVgFnAVcBVwFnAWgBVwFoAVgBWAFoAVkBaAFpAVkBWQFpAVoBaQFqAVoBWgFqAVsBagFrAVsBWwFrAVwBawFsAVwBXAFsAW0BXAFtAV0BXQFtAW4BXQFuAV4BXgFuAW8BXgFvAV8BXwFvAXABXwFwAWABYAFwAWEBcAFxAWEBYQFxAWIBcQFyAWIBYgFyAWMBcgFzAWMBYwFzAVQBcwFkAVQBZAF0AXUBZAF1AWUBZQF1AXYBZQF2AWYBZgF2AXcBZgF3AWcBZwF3AXgBZwF4AWgBaAF4AWkBeAF5AWkBaQF5AWoBeQF6AWoBagF6AWsBegF7AWsBawF7AWwBewF8AWwBbAF8AX0BbAF9AW0BbQF9AX4BbQF+AW4BbgF+AX8BbgF/AW8BbwF/AYABbwGAAXABcAGAAXEBgAGBAXEBcQGBAXIBgQGCAXIBcgGCAXMBggGDAXMBcwGDAWQBgwF0AWQBdAGEAYUBdAGFAXUBdQGFAYYBdQGGAXYBdgGGAYcBdgGHAXcBdwGHAYgBdwGIAXgBeAGIAXkBiAGJAXkBeQGJAXoBiQGKAXoBegGKAXsBigGLAXsBewGLAXwBiwGMAXwBfAGMAY0BfAGNAX0BfQGNAY4BfQGOAX4BfgGOAY8BfgGPAX8BfwGPAZABfwGQAYABgAGQAYEBkAGRAYEBgQGRAYIBkQGSAYIBggGSAYMBkgGTAYMBgwGTAXQBkwGEAXQBhAGUAZUBhAGVAYUBhQGVAZYBhQGWAYYBhgGWAZcBhgGXAYcBhwGXAZgBhwGYAYgBiAGYAYkBmAGZAYkBiQGZAYoBmQGaAYoBigGaAYsBmgGbAYsBiwGbAYwBmwGcAYwBjAGcAZ0BjAGdAY0BjQGdAZ4BjQGeAY4BjgGeAZ8BjgGfAY8BjwGfAaABjwGgAZABkAGgAZEBoAGhAZEBkQGhAZIBoQGiAZIBkgGiAZMBogGjAZMBkwGjAYQBowGUAYQBlAGkAaUBlAGlAZUBlQGlAaYBlQGmAZYBlgGmAacBlgGnAZcBlwGnAagBlwGoAZgBmAGoAZkBqAGpAZkBmQGpAZoBqQGqAZoBmgGqAZsBqgGrAZsBmwGrAZwBqwGsAZwBnAGsAa0BnAGtAZ0BnQGtAa4BnQGuAZ4BngGuAa8BngGvAZ8BnwGvAbABnwGwAaABoAGwAaEBsAGxAaEBoQGxAaIBsQGyAaIBogGyAaMBsgGzAaMBowGzAZQBswGkAZQBpAG0AbUBpAG1AaUBpQG1AbYBpQG2AaYBpgG2AbcBpgG3AacBpwG3AbgBpwG4AagBqAG4AakBuAG5AakBqQG5AaoBuQG6AaoBqgG6AasBugG7AasBqwG7AawBuwG8AawBrAG8Ab0BrAG9Aa0BrQG9Ab4BrQG+Aa4BrgG+Ab8BrgG/Aa8BrwG/AcABrwHAAbABsAHAAbEBwAHBAbEBsQHBAbIBwQHCAbIBsgHCAbMBwgHDAbMBswHDAaQBwwG0AaQBtAHEAcUBtAHFAbUBtQHFAcYBtQHGAbYBtgHGAccBtgHHAbcBtwHHAcgBtwHIAbgBuAHIAbkByAHJAbkBuQHJAboByQHKAboBugHKAbsBygHLAbsBuwHLAbwBywHMAbwBvAHMAc0BvAHNAb0BvQHNAc4BvQHOAb4BvgHOAc8BvgHPAb8BvwHPAdABvwHQAcABwAHQAcEB0AHRAcEBwQHRAcIB0QHSAcIBwgHSAcMB0gHTAcMBwwHTAbQB0wHEAbQBxAHUAdUBxAHVAcUBxQHVAdYBxQHWAcYBxgHWAdcBxgHXAccBxwHXAdgBxwHYAcgByAHYAckB2AHZAckByQHZAcoB2QHaAcoBygHaAcsB2gHbAcsBywHbAcwB2wHcAcwBzAHcAd0BzAHdAc0BzQHdAd4BzQHeAc4BzgHeAd8BzgHfAc8BzwHfAeABzwHgAdAB0AHgAdEB4AHhAdEB0QHhAdIB4QHiAdIB0gHiAdMB4gHjAdMB0wHjAcQB4wHUAcQB1AHkAeUB1AHlAdUB1QHlAeYB1QHmAdYB1gHmAecB1gHnAdcB1wHnAegB1wHoAdgB2AHoAdkB6AHpAdkB2QHpAdoB6QHqAdoB2gHqAdsB6gHrAdsB2wHrAdwB6wHsAdwB3AHsAe0B3AHtAd0B3QHtAe4B3QHuAd4B3gHuAe8B3gHvAd8B3wHvAfAB3wHwAeAB4AHwAeEB8AHxAeEB4QHxAeIB8QHyAeIB4gHyAeMB8gHzAeMB4wHzAdQB8wHkAdQB5AH0AfUB5AH1AeUB5QH1AfYB5QH2AeYB5gH2AfcB5gH3AecB5wH3AfgB5wH4AegB6AH4AekB+AH5AekB6QH5AeoB+QH6AeoB6gH6AesB+gH7AesB6wH7AewB+wH8AewB7AH8Af0B7AH9Ae0B7QH9Af4B7QH+Ae4B7gH+Af8B7gH/Ae8B7wH/AQAC7wEAAvAB8AEAAvEBAAIBAvEB8QEBAvIBAQICAvIB8gECAvMBAgIDAvMB8wEDAuQBAwL0AeQB9AEEAgUC9AEFAvUB9QEFAgYC9QEGAvYB9gEGAgcC9gEHAvcB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LwA3ADgALwA4ADAAMAA4ADEAMAAxACkAMQA5ADIAOQA6ADIAMgA6ADMAOgA7ADMAMwA7ADwAMwA8ADQANAA8AD0ANAA9ADUANQA9ADYAPQA+ADYANgA+ADcAPgA/ADcANwA/AEAANwBAADgAOABAADkAOAA5ADEAOQBBADoAQQBCADoAOgBCADsAQgBDADsAOwBDAEQAOwBEADwAPABEAEUAPABFAD0APQBFAD4ARQBGAD4APgBGAD8ARgBHAD8APwBHAEgAPwBIAEAAQABIAEEAQABBADkAQQBJAEoAQQBKAEIAQgBKAEsAQgBLAEMAQwBLAEQASwBMAEQARABMAEUATABNAEUARQBNAE4ARQBOAEYARgBOAE8ARgBPAEcARwBPAEgATwBQAEgASABQAEEAUABJAEEASQBRAFIASQBSAEoASgBSAFMASgBTAEsASwBTAEwAUwBUAEwATABUAE0AVABVAE0ATQBVAFYATQBWAE4ATgBWAFcATgBXAE8ATwBXAFAAVwBYAFAAUABYAEkAWABRAEkAUQBZAFoAUQBaAFIAUgBaAFsAUgBbAFMAUwBbAFQAWwBcAFQAVABcAFUAXABdAFUAVQBdAF4AVQBeAFYAVgBeAF8AVgBfAFcAVwBfAFgAXwBgAFgAWABgAFEAYABZAFEAWQBhAGIAWQBiAFoAWgBiAGMAWgBjAFsAWwBjAFwAYwBkAFwAXABkAF0AZABlAF0AXQBlAGYAXQBmAF4AXgBmAGcAXgBnAF8AXwBnAGAAZwBoAGAAYABoAFkAaABhAFkAYQBpAGoAYQBqAGIAYgBqAGsAYgBrAGMAYwBrAGQAawBsAGQAZABsAGUAbABtAGUAZQBtAG4AZQBuAGYAZgBuAG8AZgBvAGcAZwBvAGgAbwBwAGgAaABwAGEAcABpAGEAaQBxAHIAaQByAGoAagByAHMAagBzAGsAawBzAGwAcwB0AGwAbAB0AG0AdAB1AG0AbQB1AHYAbQB2AG4AbgB2AHcAbgB3AG8AbwB3AHAAdwB4AHAAcAB4AGkAeABxAGkAcQB5AHoAcQB6AHIAcgB6AHsAcgB7AHMAcwB7AHQAewB8AHQAdAB8AHUAfAB9AHUAdQB9AH4AdQB+AHYAdgB+AH8AdgB/AHcAdwB/AHgAfwCAAHgAeACAAHEAgAB5AHEAeQCBAIIAeQCCAHoA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GaFLPPyAXD2amVm/1+tIPFjJRz2amVm/J80wPAIWHz2amVm/o5j7O/RRtDyamVm/hFY4O2VNHrqamVm/V7o1u5vXvLyamVm/m0z2u7HEIb2amVm//2YuvHHeSL2amVm/+I02vMhrR72xoFm/lZkQvM5FHr0Cr1m/VhOku2MZs7wCyVm/stw8N2XluDch4Vm/WiSlO41Fszxnylm/A4sQPP/4HT1OtFm/oT81POHkRj18p1m/Wx9EPDxORj15p1m/B9QoPJPdHD1FtFm/qEfmO7X1rzxKylm/dkARO+zt9rni4Fm/GxJLu0nitrztyFm/SRT7u0qCH73+rlm/eS4vvAPwR72xoFm/94wyvL5WR72go1m/5F0GvMcRHr3Qt1m/X22Du/3msrxT3Fm/W6mNOsPuY7n4/Vm/Y/zCO92GrzxC3lm/NpIbPAxoHD1Dv1m/xQE8PMnvRT02rVm/AAABAAIAAQADAAIAAgADAAQAAwAFAAQABAAFAAYABQAHAAYABgAHAAgABwAJAAgABwAKAAkACgALAAkACgAMAAsADAANAAsADAAOAA0ADgAPAA0ADwAOABAADgAMABAAEAAMABEADAAKABEAEQAKABIACgAHABIAEgAHABMABwAUABMABwAFABQABQAVABQABQADABUAAwAWABUAAwABABYAAQAAABYAAAACABcAAgAEABcAFwAEABgABAAGABgAGAAGABkABgAIABkAGQAIABoACAAbABoACAAJABsACQAcABsACQALABwACwAdABwACwANAB0ADQAPAB0ADwAQAB4AEAARAB4AHgARAB8AEQASAB8AHwASACAAEgATACAAIAATACEAEwAiACEAEwAUACIAFAAjACIAFAAVACMAFQAkACMAFQAWACQAFgAAACQAAAAXACUAJQAXACYAFwAYACYAJgAYACcAGAAZACcAJwAZACgAGQAaACgAKAAaACkAGgAqACkAGgAbACoAGwArACoAGwAcACsAHAAsACsAHAAdACwAHQAtACwAHQAPAC0ADwAeAC0ALQAeAC4AHgAfAC4ALgAfAC8AHwAgAC8ALwAgADAAIAAhADAAMAAhADEAIQAyADEAIQAiADIAIgAzADIAIgAjADMAIwA0ADMAIwAkADQAJAAlADQAJAAAACUAJQAmADUANQAmADYAJgAnADYANgAnADcAJwAoADcANwAoADgAKAApADgAOAApADkAKQA6ADkAKQAqADoAKgA7ADoAKgArADsAKwA8ADsAKwAsADwALAA9ADwALAAtAD0ALQAuAD0APQAuAD4ALgAvAD4APgAvAD8ALwAwAD8APwAwAEAAMAAxAEAAQAAxAEEAMQBCAEEAMQAyAEIAMgBDAEIAMgAzAEMAMwBEAEMAMwA0AEQANAA1AEQANAAlADUANQA2AEUARQA2AEYANgA3AEYARgA3AEcANwA4AEcARwA4AEgAOAA5AEgASAA5AEkAOQBKAEkAOQA6AEoAOgBLAEoAOgA7AEsAOwBMAEsAOwA8AEwAPABNAEwAPAA9AE0APQA+AE0ATQA+AE4APgA/AE4ATgA/AE8APwBAAE8ATwBAAFAAQABBAFAAUABBAFEAQQBSAFEAQQBCAFIAQgBTAFIAQgBDAFMAQwBUAFMAQwBEAFQARABFAFQARAA1AEUARQBGAFUAVQBGAFYARgBHAFYAVgBHAFcARwBIAFcAVwBIAFgASABJAFgAWABJAFkASQBaAFkASQBKAFoASgBbAFoASgBLAFsASwBcAFsASwBMAFwATABdAFwATABNAF0ATQBOAF0AXQBOAF4ATgBPAF4AXgBPAF8ATwBQAF8AXwBQAGAAUABRAGAAYABRAGEAUQBiAGEAUQBSAGIAUgBjAGIAUgBTAGMAUwBkAGMAUwBUAGQAVABVAGQAVABFAFUAVQBWAGUAZQBWAGYAVgBXAGYAZgBXAGcAVwBYAGcAZwBYAGgAWABZAGgAaABZAGkAWQBqAGkAWQBaAGoAWgBrAGoAWgBbAGsAWwBsAGsAWwBcAGwAXABtAGwAXABdAG0AXQBeAG0AbQBeAG4AXgBfAG4AbgBfAG8AXwBgAG8AbwBgAHAAYABhAHAAcABhAHEAYQByAHEAYQBiAHIAYgBzAHIAYgBjAHMAYwB0AHMAYwBkAHQAZABlAHQAZABVAGUAZQBmAHUAdQBmAHYAZgBnAHYAdgBnAHcAZwBoAHcAdwBoAHgAaABpAHgAeABpAHkAaQB6AHkAaQBqAHoAagB7AHoAagBrAHsAawB8AHsAawBsAHwAbAB9AHwAbABtAH0AbQBuAH0AfQBuAH4AbgBvAH4AfgBvAH8AbwBwAH8AfwBwAIAAcABxAIAAgABxAIEAcQCCAIEAcQByAIIAcgCDAIIAcgBzAIMAcwCEAIMAcwB0AIQAdAB1AIQAdABlAHUAdQCFAIYAdQB2AIUAdgCHAIUAdgB3AIcAdwCIAIcAdwB4AIgAeACJAIgAeAB5AIkAeQB6AIkAiQB6AIoAegB7AIoAigB7AIsAewB8AIsAiwB8AIwAfAB9AIwAjAB9AI0AfQCOAI0AfQB+AI4AfgCPAI4AfgB/AI8AfwCQAI8AfwCAAJAAgACRAJAAgACBAJEAgQCCAJEAkQCCAJIAggCDAJIAkgCDAJMAgwCEAJMAkwCEAJQAhAB1AJQAlAB1AIYAhgCVAJYAhgCFAJUAhQCXAJUAhQCHAJcAhwCYAJcAhwCIAJgAiACZAJgAiACJAJkAiQCKAJkAmQCKAJoAigCLAJoAmgCLAJsAiwCMAJsAmwCMAJwAjACNAJwAnACNAJ0AjQCeAJ0AjQCOAJ4AjgCfAJ4AjgCPAJ8AjwCgAJ8AjwCQAKAAkAChAKAAkACRAKEAkQCSAKEAoQCSAKIAkgCTAKIAogCTAKMAkwCUAKMAowCUAKQAlACGAKQApACGAJYAlgClAKYAlgCVAKUAlQCnAKUAlQCXAKcAlwCoAKcAlwCYAKgAmACpAKgAmACZAKkAmQCaAKkAqQCaAKoAmgCbAKoAqgCbAKsAmwCcAKsAqwCcAKwAnACdAKwArACdAK0AnQCuAK0AnQCeAK4AngCvAK4AngCfAK8AnwCwAK8AnwCgALAAoACxALAAoAChALEAoQCiALEAsQCiALIAogCjALIAsgCjALMAowCkALMAswCkALQApACWALQAtACWAKYApgC1ALYApgClALUApQC3ALUApQCnALcApwC4ALcApwCoALgAqAC5ALgAqACpALkAqQCqALkAuQCqALoAqgCrALoAugCrALsAqwCsALsAuwCsALwArACtALwAvACtAL0ArQC+AL0ArQCuAL4ArgC/AL4ArgCvAL8ArwDAAL8ArwCwAMAAsADBAMAAsACxAMEAsQCyAMEAwQCyAMIAsgCzAMIAwgCzAMMAswC0AMMAwwC0AMQAtACmAMQAxACmALYAtgDFAMYAtgC1AMUAtQDHAMUAtQC3AMcAtwDIAMcAtwC4AMgAuADJAMgAuAC5AMkAuQC6AMkAyQC6AMoAugC7AMoAygC7AMsAuwC8AMsAywC8AMwAvAC9AMwAzAC9AM0AvQDOAM0AvQC+AM4AvgDPAM4AvgC/AM8AvwDQAM8AvwDAANAAwADRANAAwADBANEAwQDCANEA0QDCANIAwgDDANIA0gDDANMAwwDEANMA0wDEANQAxAC2ANQA1AC2AMYAxgDFANUAxQDWANUAxQDHANYAxwDXANYAxwDIANcAyADYANcAyADJANgAyQDKANgA2ADKANkAygDLANkA2QDLANoAywDMANoA2gDMANsAzADNANsAzQDOANwAzgDdANwAzgDPAN0AzwDeAN0AzwDQAN4A0ADfAN4A0ADRAN8A0QDSAN8A3wDSAOAA0gDTAOAA4ADTAOEA0wDUAOEA4QDUAOIA1ADGAOIAxgDVAOMA1QDkAOMA1QDWAOQA1gDlAOQA1gDXAOUA1wDmAOUA1wDYAOYA2ADZAOYA5gDZAOcA2QDaAOcA5wDaAOgA2gDbAOgA6ADbAOkA2wDNAOkAzQDcAOkA3ADoAOkA3ADdAOgA3QDnAOgA3QDeAOcA3gDmAOcA3gDfAOYA3wDgAOYA5gDgAOUA4ADhAOUA5QDhAOQA4QDiAOQA5ADiAOMA4gDGAOMA6gDrAOwA6wDtAOwA7ADtAO4A7QDvAO4A7gDvAPAA7wDxAPAA8ADxAPIA8QDzAPIA8QD0APMA9AD1APMA9AD2APUA9gD3APUA9gD4APcA+AD5APcA+QD4APoA+AD2APoA+gD2APsA9gD0APsA+wD0APwA9ADxAPwA/ADxAP0A8QD+AP0A8QDvAP4A7wD/AP4A7wDtAP8A7QAAAf8A7QDrAAAB6wDqAAAB6gDsAAEB7ADuAAEBAQHuAAIB7gDwAAIBAgHwAAMB8ADyAAMBAwHyAAQB8gAFAQQB8gDzAAUB8wAGAQUB8wD1AAYB9QAHAQYB9QD3AAcB9wD5AAcB+QD6AAgB+gD7AAgBCAH7AAkB+wD8AAkBCQH8AAoB/AD9AAoBCgH9AAsB/QAMAQsB/QD+AAwB/gANAQwB/gD/AA0B/wAOAQ0B/wAAAQ4BAAHqAA4B6gABAQ8BDwEBARABAQECARABEAECAREBAgEDAREBEQEDARIBAwEEARIBEgEEARMBBAEUARMBBAEFARQBBQEVARQBBQEGARUBBgEWARUBBgEHARYBBwEXARYBBwH5ABcB+QAIARcBFwEIARgBCAEJARgBGAEJARkBCQEKARkBGQEKARoBCgELARoBGgELARsBCwEcARsBCwEMARwBDAEdARwBDAENAR0BDQEeAR0BDQEOAR4BDgEPAR4BDgHqAA8BDwEQAR8BHwEQASABEAERASABIAERASEBEQESASEBIQESASIBEgETASIBIgETASMBEwEkASMBEwEUASQBFAElASQBFAEVASUBFQEmASUBFQEWASYBFgEnASYBFgEXAScBFwEYAScBJwEYASgBGAEZASgBKAEZASkBGQEaASkBKQEaASoBGgEbASoBKgEbASsBGwEsASsBGwEcASwBHAEtASwBHAEdAS0BHQEuAS0BHQEeAS4BHgEfAS4BHgEPAR8BHwEgAS8BLwEgATABIAEhATABMAEhATEBIQEiATEBMQEiATIBIgEjATIBMgEjATMBIwE0ATMBIwEkATQBJAE1ATQBJAElATUBJQE2ATUBJQEmATYBJgE3ATYBJgEnATcBJwEoATcBNwEoATgBKAEpATgBOAEpATkBKQEqATkBOQEqAToBKgErAToBOgErATsBKwE8ATsBKwEsATwBLAE9ATwBLAEtAT0BLQE+AT0BLQEuAT4BLgEvAT4BLgEfAS8BLwEwAT8BPwEwAUABMAExAUABQAExAUEBMQEyAUEBQQEyAUIBMgEzAUIBQgEzAUMBMwFEAUMBMwE0AUQBNAFFAUQBNAE1AUUBNQFGAUUBNQE2AUYBNgFHAUYBNgE3AUcBNwE4AUcBRwE4AUgBOAE5AUgBSAE5AUkBOQE6AUkBSQE6AUoBOgE7AUoBSgE7AUsBOwFMAUsBOwE8AUwBPAFNAUwBPAE9AU0BPQFOAU0BPQE+AU4BPgE/AU4BPgEvAT8BPwFAAU8BTwFAAVABQAFBAVABUAFBAVEBQQFCAVEBUQFCAVIBQgFDAVIBUgFDAVMBQwFUAVMBQwFEAVQBRAFVAVQBRAFFAVUBRQFWAVUBRQFGAVYBRgFXAVYBRgFHAVcBRwFIAVcBVwFIAVgBSAFJAVgBWAFJAVkBSQFKAVkBWQFKAVoBSgFLAVoBWgFLAVsBSwFcAVsBSwFMAVwBTAFdAVwBTAFNAV0BTQFeAV0BTQFOAV4BTgFPAV4BTgE/AU8BTwFQAV8BXwFQAWABUAFRAWABYAFRAWEBUQFSAWEBYQFSAWIBUgFTAWIBYgFTAWMBUwFkAWMBUwFUAWQBVAFlAWQBVAFVAWUBVQFmAWUBVQFWAWYBVgFnAWYBVgFXAWcBVwFYAWcBZwFYAWgBWAFZAWgBaAFZAWkBWQFaAWkBaQFaAWoBWgFbAWoBagFbAWsBWwFsAWsBWwFcAWwBXAFtAWwBXAFdAW0BXQFuAW0BXQFeAW4BXgFfAW4BXgFPAV8BXwFvAXABXwFgAW8BYAFxAW8BYAFhAXEBYQFyAXEBYQFiAXIBYgFzAXIBYgFjAXMBYwFkAXMBcwFkAXQBZAFlAXQBdAFlAXUBZQFmAXUBdQFmAXYBZgFnAXYBdgFnAXcBZwF4AXcBZwFoAXgBaAF5AXgBaAFpAXkBaQF6AXkBaQFqAXoBagF7AXoBagFrAXsBawFsAXsBewFsAXwBbAFtAXwBfAFtAX0BbQFuAX0BfQFuAX4BbgFfAX4BfgFfAXABcAF/AYABcAFvAX8BbwGBAX8BbwFxAYEBcQGCAYEBcQFyAYIBcgGDAYIBcgFzAYMBcwF0AYMBgwF0AYQBdAF1AYQBhAF1AYUBdQF2AYUBhQF2AYYBdgF3AYYBhgF3AYcBdwGIAYcBdwF4AYgBeAGJAYgBeAF5AYkBeQGKAYkBeQF6AYoBegGLAYoBegF7AYsBewF8AYsBiwF8AYwBfAF9AYwBjAF9AY0BfQF+AY0BjQF+AY4BfgFwAY4BjgFwAYABgAGPAZABgAF/AY8BfwGRAY8BfwGBAZEBgQGSAZEBgQGCAZIBggGTAZIBggGDAZMBgwGEAZMBkwGEAZQBhAGFAZQBlAGFAZUBhQGGAZUBlQGGAZYBhgGHAZYBlgGHAZcBhwGYAZcBhwGIAZgBiAGZAZgBiAGJAZkBiQGaAZkBiQGKAZoBigGbAZoBigGLAZsBiwGMAZsBmwGMAZwBjAGNAZwBnAGNAZ0BjQGOAZ0BnQGOAZ4BjgGAAZ4BngGAAZABkAGfAaABkAGPAZ8BjwGhAZ8BjwGRAaEBkQGiAaEBkQGSAaIBkgGjAaIBkgGTAaMBkwGUAaMBowGUAaQBlAGVAaQBpAGVAaUBlQGWAaUBpQGWAaYBlgGXAaYBpgGXAacBlwGoAacBlwGYAagBmAGpAagBmAGZAakBmQGqAakBmQGaAaoBmgGrAaoBmgGbAasBmwGcAasBqwGcAawBnAGdAawBrAGdAa0BnQGeAa0BrQGeAa4BngGQAa4BrgGQAaABoAGvAbABoAGfAa8B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Uq/euwDILr1wWPu+V0/evDtRhb1wWPu+u6cmvSTinL1wWPu+X9M6vTLctL15ShC/p34pvaMmpL15ShC/vhoLvYBogr15ShC/VEWsvPdmEr15ShC/u3scuzPwvjp5ShC/7EiKPLUGHT15ShC/EKL/PKFPhj15ShC/cC4jPYHQpj15ShC/X9M6PTLctD15ShC/9/pBPSjeoj15ShC/7rAzPW8Nez15ShC//P8KPYTz/zx5ShC/e1mGPC7f/rt5ShC/9p6xu8uJNr15ShC/1FfMvEZCjr15ShC/bBccvTkZqb15ShC/LzcovW67ur266CK/gcUXvYmwqb266CK/tuv2vBBJh7266CK/rbyVvLiAGb266CK/vGS4uj4KUjq66CK/1qCBPONpHz266CK/5j/pPDCMiT266CK/7WoTPQhqqz266CK/LzcoPW67uj266CK/iIwvPU2gqD266CK/0dMjPef3gj266CK/sXgAPcXpCD266CK/hCGBPK501bu66CK/DKmBuz6bNr266CK/1MqyvLn2kL266CK/31QLvbjIrb266CK/LjsGvVRgrb37hjW/as0VvZqcvr37hjW/68bXvOmair37hjW/5/99vGCOHr37hjW/1la/uaNmiTn7hjW/MFdzPMiTID37hjW/Q7XTPDJ/iz37hjW/qBkEPXFJrj37hjW/as0VPZqcvj37hjW/bdgcPddwrD37hjW/cDQTPaLJhj37hjW//FLpPK7VDz37hjW/emJxPFAnrrv7hjW/zoc7u+kfNb37hjW/KVWbvGA3kr37hjW/dj/2vKujsL37hjW/JrLsvFREsL09JUi//uAEvSS5wb09JUi/ah68vN8ijb09JUi/gABXvAo2Ir09JUi/3IXSOcHiY7g9JUi/3R9iPFLwIT09JUi/mzC/PIE0jT09JUi/oOfrPO+nsD09JUi//uAEPSS5wT09JUi/szQLPRFxrz09JUi/B/gCPTveiT09JUi/q63QPKyvFT09JUi/ZgFbPGATirs9JUi/N5IRu4lEM709JUi/2rCHvCP0kr09JUi/4UbZvB7Ksr09JUi/UdzQvG9zsr1+w1q/kyPrvKkuxL1+w1q/tfakvBDyjr1+w1q//z05vI6MJL1+w1q/3SU6OomkHrl+w1q/hSdNPPCOIz1+w1q/7viqPCy8jj1+w1q/WrnRPBGdsj1+w1q/kyPrPKkuxD1+w1q/9ff0PFW8sT1+w1q/fV3lPG1SjD1+w1q/SY+1PLWyGj1+w1q/JaM7PCElT7t+w1q/3yISuzvpML1+w1q/ZgByvB0tk71+w1q/TGjAvLRLtL1+w1q/FIq5vLUHtL2/YW2//+3PvLoXxr2/YW2/N02TvLkgkL2/YW2/Lm4nvAy6Jb2/YW2/05XHOWj1Vri/YW2/AP4xPGxuJT2/YW2/qFGWPLsfkD2/YW2/+mW5PEw6tD2/YW2//+3PPLoXxj2/YW2/Ke/UPHh2sz2/YW2/ULjDPABLjj2/YW2/93SWPFQaHz2/YW2/eagPPHh3C7u/YW2//q1Ku1sVLr2/YW2/kv1gvMDzkr2/YW2/EVmsvItAtb2/YW2/D35ZvDV0a70AAIC/WpBvvEm1gb0AAIC/BvIwvLw8PL0AAIC//4TVu2a517wAAIC/rkACuqz4EzkAAIC/Jue4O2fP2TwAAIC/DgwnPCQIPT0AAIC/tHRTPNsHbD0AAIC/WpBvPEm1gT0AAIC/wWBsPP4Kaz0AAIC/agBQPPQoOz0AAIC/b/8TPC4k1DwAAIC/Qd5YO+88OroAAIC/KsxVu9Uq3rwAAIC/xeEQvNFQPr0AAIC/4S1NvP1QbL0AAIC/JMVWvOycar0sBIC/GB4qvAE0Or2YDIC/sAfBu3S00rzjG4C/0TBeN1mG2TcTKoC/4kjCO2ro0jy1HIC/9QwqPKTZOT22D4C/zDtVPDb+aT0rCIC/e7tmPPtMaT0pCIC/GJ9GPDSMOD2wD4C/cnUHPPMCzzykHIC/bOIqO6lAEbruKYC/H+huu1Yo17zXG4C/lLETvFeoO72VDIC/jxhOvHw4a70sBIC/QA9SvCuEar3lBYC/HBQevM32Ob3GEYC/yp6auyp50rxAJ4C/IKmmOvoThrkLO4C/KmXlO4yAzjxjKIC/XgY3PPABOD0nFoC/Qi9dPN7daD2JC4C/AAABAAIAAQADAAIAAgADAAQAAwAFAAQABAAFAAYABQAHAAYABgAHAAgABwAJAAgABwAKAAkACgALAAkACgAMAAsADAANAAsADAAOAA0ADgAPAA0ADwAOABAADgAMABAAEAAMABEADAAKABEAEQAKABIACgAHABIAEgAHABMABwAUABMABwAFABQABQAVABQABQADABUAAwAWABUAAwABABYAAQAAABYAAAACABcAAgAEABcAFwAEABgABAAGABgAGAAGABkABgAIABkAGQAIABoACAAbABoACAAJABsACQAcABsACQALABwACwAdABwACwANAB0ADQAPAB0ADwAQAB4AEAARAB4AHgARAB8AEQASAB8AHwASACAAEgATACAAIAATACEAEwAiACEAEwAUACIAFAAjACIAFAAVACMAFQAkACMAFQAWACQAFgAAACQAAAAXACUAJQAXACYAFwAYACYAJgAYACcAGAAZACcAJwAZACgAGQAaACgAKAAaACkAGgAqACkAGgAbACoAGwArACoAGwAcACsAHAAsACsAHAAdACwAHQAtACwAHQAPAC0ADwAeAC0ALQAeAC4AHgAfAC4ALgAfAC8AHwAgAC8ALwAgADAAIAAhADAAMAAhADEAIQAyADEAIQAiADIAIgAzADIAIgAjADMAIwA0ADMAIwAkADQAJAAlADQAJAAAACUAJQAmADUANQAmADYAJgAnADYANgAnADcAJwAoADcANwAoADgAKAApADgAOAApADkAKQA6ADkAKQAqADoAKgA7ADoAKgArADsAKwA8ADsAKwAsADwALAA9ADwALAAtAD0ALQAuAD0APQAuAD4ALgAvAD4APgAvAD8ALwAwAD8APwAwAEAAMAAxAEAAQAAxAEEAMQBCAEEAMQAyAEIAMgBDAEIAMgAzAEMAMwBEAEMAMwA0AEQANAA1AEQANAAlADUANQA2AEUARQA2AEYANgA3AEYARgA3AEcANwA4AEcARwA4AEgAOAA5AEgASAA5AEkAOQBKAEkAOQA6AEoAOgBLAEoAOgA7AEsAOwBMAEsAOwA8AEwAPABNAEwAPAA9AE0APQA+AE0ATQA+AE4APgA/AE4ATgA/AE8APwBAAE8ATwBAAFAAQABBAFAAUABBAFEAQQBSAFEAQQBCAFIAQgBTAFIAQgBDAFMAQwBUAFMAQwBEAFQARABFAFQARAA1AEUARQBGAFUAVQBGAFYARgBHAFYAVgBHAFcARwBIAFcAVwBIAFgASABJAFgAWABJAFkASQBaAFkASQBKAFoASgBbAFoASgBLAFsASwBcAFsASwBMAFwATABdAFwATABNAF0ATQBOAF0AXQBOAF4ATgBPAF4AXgBPAF8ATwBQAF8AXwBQAGAAUABRAGAAYABRAGEAUQBiAGEAUQBSAGIAUgBjAGIAUgBTAGMAUwBkAGMAUwBUAGQAVABVAGQAVABFAFUAVQBWAGUAZQBWAGYAVgBXAGYAZgBXAGcAVwBYAGcAZwBYAGgAWABZAGgAaABZAGkAWQBqAGkAWQBaAGoAWgBrAGoAWgBbAGsAWwBsAGsAWwBcAGwAXABtAGwAXABdAG0AXQBeAG0AbQBeAG4AXgBfAG4AbgBfAG8AXwBgAG8AbwBgAHAAYABhAHAAcABhAHEAYQByAHEAYQBiAHIAYgBzAHIAYgBjAHMAYwB0AHMAYwBkAHQAZABlAHQAZABVAGUAZQBmAHUAdQBmAHYAZgBnAHYAdgBnAHcAZwBoAHcAdwBoAHgAaABpAHgAeABpAHkAaQB6AHkAaQBqAHoAagB7AHoAagBrAHsAawB8AHsAawBsAHwAbAB9AHwAbABtAH0AbQBuAH0AfQBuAH4AbgBvAH4AfgBvAH8AbwBwAH8AfwBwAIAAcABxAIAAgABxAIEAcQCCAIEAcQByAIIAcgCDAIIAcgBzAIMAcwCEAIMAcwB0AIQAdAB1AIQAdABlAHUAdQCFAIYAdQB2AIUAdgCHAIUAdgB3AIcAdwCIAIcAdwB4AIgAeACJAIgAeAB5AIkAeQB6AIkAiQB6AIoAegB7AIoAigB7AIsAewB8AIsAiwB8AIwAfAB9AIwAjAB9AI0AfQCOAI0AfQB+AI4AfgCPAI4AfgB/AI8AfwCQAI8AfwCAAJAAgACRAJAAgACBAJEAgQCCAJEAkQCCAJIAggCDAJIAkgCDAJMAgwCEAJMAkwCEAJQAhAB1AJQAlAB1AIYAhgCVAJYAhgCFAJUAhQCXAJUAhQCHAJcAhwCYAJcAhwCIAJgAiACZAJgAiACJAJkAiQCKAJkAmQCKAJoAigCLAJoAmgCLAJsAiwCMAJsAmwCMAJwAjACNAJwAnACNAJ0AjQCeAJ0AjQCOAJ4AjgCfAJ4AjgCPAJ8AjwCgAJ8AjwCQAKAAkAChAKAAkACRAKEAkQCSAKEAoQCSAKIAkgCTAKIAogCTAKMAkwCUAKMAowCUAKQAlACGAKQApACGAJYAlgClAKYAlgCVAKUAlQCnAKUAlQCXAKcAlwCoAKcAlwCYAKgAmACpAKgAmACZAKkAmQCaAKkAqQCaAKoAmgCbAKoAqgCbAKsAmwCcAKsAqwCcAKwAnACdAKwArACdAK0AnQCuAK0AnQCeAK4AngCvAK4AngCfAK8AnwCwAK8AnwCgALAAoACxALAAoAChALEAoQCiALEAsQCiALIAogCjALIAsgCjALMAowCkALMAswCkALQApACWALQAtACWAKYApgC1ALYApgClALUApQC3ALUApQCnALcApwC4ALcApwCoALgAqAC5ALgAqACpALkAqQCqALkAuQCqALoAqgCrALoAugCrALsAqwCsALsAuwCsALwArACtALwAvACtAL0ArQC+AL0ArQCuAL4ArgC/AL4ArgCvAL8ArwDAAL8ArwCwAMAAsADBAMAAsACxAMEAsQCyAMEAwQCyAMIAsgCzAMIAwgCzAMMAswC0AMMAwwC0AMQAtACmAMQAxACmALYAtgDFAMYAtgC1AMUAtQDHAMUAtQC3AMcAtwDIAMcAtwC4AMgAuADJAMgAuAC5AMkAuQC6AMkAyQC6AMoAugC7AMoAygC7AMsAuwC8AMsAywC8AMwAvAC9AMwAzAC9AM0AvQDOAM0AvQC+AM4AvgDPAM4AvgC/AM8AvwDQAM8AvwDAANAAwADRANAAwADBANEAwQDCANEA0QDCANIAwgDDANIA0gDDANMAwwDEANMA0wDEANQAxAC2ANQA1AC2AMYAxgDFANUAxQDWANUAxQDHANYAxwDXANYAxwDIANcAyADYANcAyADJANgAyQDKANgA2ADKANkAygDLANkA2QDLANoAywDMANoA2gDMANsAzADNANsAzQDOANwAzgDdANwAzgDPAN0AzwDeAN0AzwDQAN4A0ADfAN4A0ADRAN8A0QDSAN8A3wDSAOAA0gDTAOAA4ADTAOEA0wDUAOEA4QDUAOIA1ADGAOIAxgDVAOMA1QDkAOMA1QDWAOQA1gDlAOQA1gDXAOUA1wDmAOUA1wDYAOYA2ADZAOYA5gDZAOcA2QDaAOcA5wDaAOgA2gDbAOgA6ADbAOkA2wDNAOkAzQDcAOkA3ADoAOkA3ADdAOgA3QDnAOgA3QDeAOcA3gDmAOcA3gDfAOYA3wDgAOYA5gDgAOUA4ADhAOUA5QDhAOQA4QDiAOQA5ADiAOMA4gDGAOMA6gDrAOwA6wDtAOwA7ADtAO4A7QDvAO4A7gDvAPAA7wDxAPAA8ADxAPIA8QDzAPIA8QD0APMA9AD1APMA9AD2APUA9gD3APUA9gD4APcA+AD5APcA+QD4APoA+AD2APoA+gD2APsA9gD0APsA+wD0APwA9ADxAPwA/ADxAP0A8QD+AP0A8QDvAP4A7wD/AP4A7wDtAP8A7QAAAf8A7QDrAAAB6wDqAAAB6gDsAAEB7ADuAAEBAQHuAAIB7gDwAAIBAgHwAAMB8ADyAAMBAwHyAAQB8gAFAQQB8gDzAAUB8wAGAQUB8wD1AAYB9QAHAQYB9QD3AAcB9wD5AAcB+QD6AAgB+gD7AAgBCAH7AAkB+wD8AAkBCQH8AAoB/AD9AAoBCgH9AAsB/QAMAQsB/QD+AAwB/gANAQwB/gD/AA0B/wAOAQ0B/wAAAQ4BAAHqAA4B6gABAQ8BDwEBARABAQECARABEAECAREBAgEDAREBEQEDARIBAwEEARIBEgEEARMBBAEUARMBBAEFARQBBQEVARQBBQEGARUBBgEWARUBBgEHARYBBwEXARYBBwH5ABcB+QAIARcBFwEIARgBCAEJARgBGAEJARkBCQEKARkBGQEKARoBCgELARoBGgELARsBCwEcARsBCwEMARwBDAEdARwBDAENAR0BDQEeAR0BDQEOAR4BDgEPAR4BDgHqAA8BDwEQAR8BHwEQASABEAERASABIAERASEBEQESASEBIQESASIBEgETASIBIgETASMBEwEkASMBEwEUASQBFAElASQBFAEVASUBFQEmASUBFQEWASYBFgEnASYBFgEXAScBFwEYAScBJwEYASgBGAEZASgBKAEZASkBGQEaASkBKQEaASoBGgEbASoBKgEbASsBGwEsASsBGwEcASwBHAEtASwBHAEdAS0BHQEuAS0BHQEeAS4BHgEfAS4BHgEPAR8BHwEgAS8BLwEgATABIAEhATABMAEhATEBIQEiATEBMQEiATIBIgEjATIBMgEjATMBIwE0ATMBIwEkATQBJAE1ATQBJAElATUBJQE2ATUBJQEmATYBJgE3ATYBJgEnATcBJwEoATcBNwEoATgBKAEpATgBOAEpATkBKQEqATkBOQEqAToBKgErAToBOgErATsBKwE8ATsBKwEsATwBLAE9ATwBLAEtAT0BLQE+AT0BLQEuAT4BLgEvAT4BLgEfAS8BLwEwAT8BPwEwAUABMAExAUABQAExAUEBMQEyAUEBQQEyAUIBMgEzAUIBQgEzAUMBMwFEAUMBMwE0AUQBNAFFAUQBNAE1AUUBNQFGAUUBNQE2AUYBNgFHAUYBNgE3AUcBNwE4AUcBRwE4AUgBOAE5AUgBSAE5AUkBOQE6AUkBSQE6AUoBOgE7AUoBSgE7AUsBOwFMAUsBOwE8AUwBPAFNAUwBPAE9AU0BPQFOAU0BPQE+AU4BPgE/AU4BPgEvAT8BPwFAAU8BTwFAAVABQAFBAVABUAFBAVEBQQFCAVEBUQFCAVIBQgFDAVIBUgFDAVMBQwFUAVMBQwFEAVQBRAFVAVQBRAFFAVUBRQFWAVUBRQFGAVYBRgFXAVYBRgFHAVcBRwFIAVcBVwFIAVgBSAFJAVgBWAFJAVkBSQFKAVkBWQFKAVoBSgFLAVoBWgFLAVsBSwFcAVsBSwFMAVwBTAFdAVwBTAFNAV0BTQFeAV0BTQFOAV4BTgFPAV4BTgE/AU8BTwFQAV8BXwFQAWABUAFRAWABYAFRAWEBUQFSAWEBYQFSAWIBUgFTAWIBYgFTAWMBUwFkAWMBUwFUAWQBVAFlAWQBVAFVAWUBVQFmAWUBVQFWAWYBVgFnAWYBVgFXAWcBVwFYAWcBZwFYAWgBWAFZAWgBaAFZAWkBWQFaAWkBaQFaAWoBWgFbAWoBagFbAWsBWwFsAWsBWwFcAWwBXAFtAWwBXAFdAW0BXQFuAW0BXQFeAW4BXgFfAW4BXgFPAV8BXwFvAXABXwFgAW8BYAFxAW8BYAFhAXEBYQFyAXEBYQFiAXIBYgFzAXIBYgFjAXMBYwFkAXMBcwFkAXQBZAFlAXQBdAFlAXUBZQFmAXUBdQFmAXYBZgFnAXYBdgFnAXcBZwF4AXcBZwFoAXgBaAF5AXgBaAFpAXkBaQF6AXkBaQFqAXoBagF7AXoBagFrAXsBawFsAXsBewFsAXwBbAFtAXwBfAFtAX0BbQFuAX0BfQFuAX4BbgFfAX4BfgFfAXABcAF/AYABcAFvAX8BbwGBAX8BbwFxAYEBcQGCAYEBcQFyAYIBcgGDAYIBcgFzAYMBcwF0AYMBgwF0AYQBdAF1AYQBhAF1AYUBdQF2AYUBhQF2AYYBdgF3AYYBhgF3AYcBdwGIAYcBdwF4AYgBeAGJAYgBeAF5AYkBeQGKAYkBeQF6AYoBegGLAYoBegF7AYsBewF8AYsBiwF8AYwBfAF9AYwBjAF9AY0BfQF+AY0BjQF+AY4BfgFwAY4BjgFwAYABgAGPAZABgAF/AY8BfwGRAY8BfwGBAZEBgQGSAZEBgQGCAZIBggGTAZIBggGDAZMBgwGEAZMBkwGEAZQBhAGFAZQBlAGFAZUBhQGGAZUBlQGGAZYBhgGHAZYBlgGHAZcBhwGYAZcBhwGIAZgBiAGZAZgBiAGJAZkBiQGaAZkBiQGKAZoBigGbAZoBigGLAZsBiwGMAZsBmwGMAZwBjAGNAZwBnAGNAZ0BjQGOAZ0BnQGOAZ4BjgGAAZ4BngGAAZABkAGfAaABkAGPAZ8BjwGhAZ8BjwGRAaEBkQGiAaEBkQGSAaIBkgGjAaIBkgGTAaMBkwGUAaMBowGUAaQBlAGVAaQBpAGVAaUBlQGWAaUBpQGWAaYBlgGXAaYBpgGXAacBlwGoAacBlwGYAagBmAGpAagBmAGZAakBmQGqAakBmQGaAaoBmgGrAaoBmgGbAasBmwGcAasBqwGcAawBnAGdAawBrAGdAa0BnQGeAa0BrQGeAa4BngGQAa4BrgGQAaABoAGvAbABoAGfAa8BnwGxAa8BnwGhAbEBoQGyAbEBoQGiAbIBogGzAbIBogGjAbMBowGkAbMBswGkAbQBpAGlAbQBtAGlAbUBpQGmAbUBtQGmAbYBpgGnAbYBtgGnAbcBpwG4AbcBpwGoAbgBqAG5AbgBqAGpAbkBqQG6AbkBqQGqAboBqgG7AboBqgGrAbsBqwGsAbsBuwGsAbwBrAGtAbwBvAGtAb0BrQGuAb0BvQGuAb4BrgGgAb4BvgGgAbABsAGvAb8BrwHAAb8BrwGxAcABsQHBAcABsQGyAcEBsgHCAcEBsgGzAcIBswG0AcIBwgG0AcMBtAG1AcMBwwG1AcQBtQG2AcQBxAG2AcUBtgG3AcUBtwG4AcYBuAHHAcYBuAG5AccBuQHIAccBuQG6AcgBugHJAcgBugG7AckBuwG8AckByQG8AcoBvAG9AcoBygG9AcsBvQG+AcsBywG+AcwBvgGwAcwBsAG/Ac0BvwHOAc0BvwHAAc4BwAHPAc4BwAHBAc8BwQHQAc8BwQHCAdABwgHDAdAB0AHDAdEBwwHEAdEB0QHEAdIBxAHFAdIB0gHFAdMBxQG3AdMBtwHGAdMBxgHSAdMBxgHHAdIBxwHRAdIBxwHIAdEByAHQAdEByAHJAdAByQHKAdAB0AHKAc8BygHLAc8BzwHLAc4BywHMAc4BzgHMAc0BzAGwAc0B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EAASABEAEAATABIAEwAUABIAEwAVABQAFQAWABQAFQAXABYAFwAYABYAFwAZABgAGQAaABgAGQAbABoAGwAcABoAGwAdABwAHQAeABwAHQAfAB4AHwAgAB4AHwAhACAAIQAiACAAIAAiACMAIgAkACMAIwAkACUAJAAmACUAJQAmACcAJgAoACcAJwAoACkAKAAqACkAKQAqACsAKgAsACsAKwAsAC0ALAAuAC0ALQAuAC8ALgAwAC8ALwAwADEAMAAyADEAMAAzADIAMwA0ADIAMwA1ADQANQA2ADQANQA3ADYANwA4ADYANwA5ADgAOQA6ADgAOQA7ADoAOwA8ADoAOwA9ADwAPQA+ADwAPQA/AD4APwACAD4APwAAAAIAAgADAEAAQAADAEEAAwAFAEEAQQAFAEIABQAHAEIAQgAHAEMABwAJAEMAQwAJAEQACQALAEQARAALAEUACwANAEUARQANAEYADQAPAEYARgAPAEcADwARAEcARwARAEgAEQBJAEgAEQASAEkAEgBKAEkAEgAUAEoAFABLAEoAFAAWAEsAFgBMAEsAFgAYAEwAGABNAEwAGAAaAE0AGgBOAE0AGgAcAE4AHABPAE4AHAAeAE8AHgBQAE8AHgAgAFAAIAAjAFAAUAAjAFEAIwAlAFEAUQAlAFIAJQAnAFIAUgAnAFMAJwApAFMAUwApAFQAKQArAFQAVAArAFUAKwAtAFUAVQAtAFYALQAvAFYAVgAvAFcALwAxAFcAVwAxAFgAMQBZAFgAMQAyAFkAMgBaAFkAMgA0AFoANABbAFoANAA2AFsANgBcAFsANgA4AFwAOABdAFwAOAA6AF0AOgBeAF0AOgA8AF4APABfAF4APAA+AF8APgBAAF8APgACAEAAQABBAGAAYABBAGEAQQBCAGEAYQBCAGIAQgBDAGIAYgBDAGMAQwBEAGMAYwBEAGQARABFAGQAZABFAGUARQBGAGUAZQBGAGYARgBHAGYAZgBHAGcARwBIAGcAZwBIAGgASABpAGgASABJAGkASQBqAGkASQBKAGoASgBrAGoASgBLAGsASwBsAGsASwBMAGwATABtAGwATABNAG0ATQBuAG0ATQBOAG4ATgBvAG4ATgBPAG8ATwBwAG8ATwBQAHAAUABRAHAAcABRAHEAUQBSAHEAcQBSAHIAUgBTAHIAcgBTAHMAUwBUAHMAcwBUAHQAVABVAHQAdABVAHUAVQBWAHUAdQBWAHYAVgBXAHYAdgBXAHcAVwBYAHcAdwBYAHgAWAB5AHgAWABZAHkAWQB6AHkAWQBaAHoAWgB7AHoAWgBbAHsAWwB8AHsAWwBcAHwAXAB9AHwAXABdAH0AXQB+AH0AXQBeAH4AXgB/AH4AXgBfAH8AXwBgAH8AXwBAAGAAYABhAIAAgABhAIEAYQBiAIEAgQBiAIIAYgBjAIIAggBjAIMAYwBkAIMAgwBkAIQAZABlAIQAhABlAIUAZQBmAIUAhQBmAIYAZgBnAIYAhgBnAIcAZwBoAIcAhwBoAIgAaACJAIgAaABpAIkAaQCKAIkAaQBqAIoAagCLAIoAagBrAIsAawCMAIsAawBsAIwAbACNAIwAbABtAI0AbQCOAI0AbQBuAI4AbgCPAI4AbgBvAI8AbwCQAI8AbwBwAJAAcABxAJAAkABxAJEAcQByAJEAkQByAJIAcgBzAJIAkgBzAJMAcwB0AJMAkwB0AJQAdAB1AJQAlAB1AJUAdQB2AJUAlQB2AJYAdgB3AJYAlgB3AJcAdwB4AJcAlwB4AJgAeACZAJgAeAB5AJkAeQCaAJkAeQB6AJoAegCbAJoAegB7AJsAewCcAJsAewB8AJwAfACdAJwAfAB9AJ0AfQCeAJ0AfQB+AJ4AfgCfAJ4AfgB/AJ8AfwCAAJ8AfwBgAIAAgACBAKAAoACBAKEAgQCCAKEAoQCCAKIAggCDAKIAogCDAKMAgwCEAKMAowCEAKQAhACFAKQApACFAKUAhQCGAKUApQCGAKYAhgCHAKYApgCHAKcAhwCIAKcApwCIAKgAiACpAKgAiACJAKkAiQCqAKkAiQCKAKoAigCrAKoAigCLAKsAiwCsAKsAiwCMAKwAjACtAKwAjACNAK0AjQCuAK0AjQCOAK4AjgCvAK4AjgCPAK8AjwCwAK8AjwCQALAAkACRALAAsACRALEAkQCSALEAsQCSALIAkgCTALIAsgCTALMAkwCUALMAswCUALQAlACVALQAtACVALUAlQCWALUAtQCWALYAlgCXALYAtgCXALcAlwCYALcAtwCYALgAmAC5ALgAmACZALkAmQC6ALkAmQCaALoAmgC7ALoAmgCbALsAmwC8ALsAmwCcALwAnAC9ALwAnACdAL0AnQC+AL0AnQCeAL4AngC/AL4AngCfAL8AnwCgAL8AnwCAAKAAoAChAMAAoQDBAMAAoQCiAMEAogDCAMEAogCjAMIAowDDAMIAowCkAMMApADEAMMApAClAMQApQDFAMQApQCmAMUApgDGAMUApgCnAMYApwDHAMYApwCoAMcAqACpAMcAxwCpAMgAqQCqAMgAyACqAMkAqgCrAMkAyQCrAMoAqwCsAMoAygCsAMsArACtAMsAywCtAMwArQCuAMwAzACuAM0ArgCvAM0AzQCvAM4ArwCwAM4AsACxAM8AsQDQAM8AsQCyANAAsgDRANAAsgCzANEAswDSANEAswC0ANIAtADTANIAtAC1ANMAtQDUANMAtQC2ANQAtgDVANQAtgC3ANUAtwDWANUAtwC4ANYAuAC5ANYA1gC5ANcAuQC6ANcA1wC6ANgAugC7ANgA2AC7ANkAuwC8ANkA2QC8ANoAvAC9ANoA2gC9ANsAvQC+ANsA2wC+ANwAvgC/ANwA3AC/AN0AvwCgAN0AoADAAN4AwADfAN4AwADBAN8AwQDgAN8AwQDCAOAAwgDhAOAAwgDDAOEAwwDiAOEAwwDEAOIAxADjAOIAxADFAOMAxQDkAOMAxQDGAOQAxgDlAOQAxgDHAOUAxwDIAOUA5QDIAOYAyADJAOYA5gDJAOcAyQDKAOcA5wDKAOgAygDLAOgA6ADLAOkAywDMAOkA6QDMAOoAzADNAOoA6gDNAOsAzQDOAOsA6wDOAOwAzgCwAOwAsADPAOwAzwDrAOwAzwDQAOsA0ADqAOsA0ADRAOoA0QDpAOoA0QDSAOkA0gDoAOkA0gDTAOgA0wDnAOgA0wDUAOcA1ADmAOcA1ADVAOYA1QDlAOYA1QDWAOUA1gDXAOUA5QDXAOQA1wDYAOQA5ADYAOMA2ADZAOMA4wDZAOIA2QDaAOIA4gDaAOEA2gDbAOEA4QDbAOAA2wDcAOAA4ADcAN8A3ADdAN8A3wDdAN4A3QCgAN4AAADtAAEA7QDuAAEAAQDuAAQA7gDvAAQABADvAAYA7wDwAAYABgDwAAgA8ADxAAgACADxAAoA8QDyAAoACgDyAAwA8gDzAAwADADzAA4A8wD0AA4ADgD0ABAA9AD1ABAAEAD1APYAEAD2ABMAEwD2APcAEwD3ABUAFQD3APgAFQD4ABcAFwD4APkAFwD5ABkAGQD5APoAGQD6ABsAGwD6APsAGwD7AB0AHQD7APwAHQD8AB8AHwD8AP0AHwD9ACEAIQD9ACIA/QD+ACIAIgD+ACQA/gD/ACQAJAD/ACYA/wAAASYAJgAAASgAAAEBASgAKAABASoAAQECASoAKgACASwAAgEDASwALAADAS4AAwEEAS4ALgAEATAABAEFATAAMAAFAQYBMAAGATMAMwAGAQcBMwAHATUANQAHAQgBNQAIATcANwAIAQkBNwAJATkAOQAJAQoBOQAKATsAOwAKAQsBOwALAT0APQALAQwBPQAMAT8APwAMAe0APwDtAAAA7QANAe4ADQEOAe4A7gAOAe8ADgEPAe8A7wAPAfAADwEQAfAA8AAQAfEAEAERAfEA8QARAfIAEQESAfIA8gASAfMAEgETAfMA8wATAfQAEwEUAfQA9AAUAfUAFAEVAfUA9QAVARYB9QAWAfYA9gAWARcB9gAXAfcA9wAXARgB9wAYAfgA+AAYARkB+AAZAfkA+QAZARoB+QAaAfoA+gAaARsB+gAbAfsA+wAbARwB+wAcAfwA/AAcAR0B/AAdAf0A/QAdAf4AHQEeAf4A/gAeAf8AHgEfAf8A/wAfAQABHwEgAQABAAEgAQEBIAEhAQEBAQEhAQIBIQEiAQIBAgEiAQMBIgEjAQMBAwEjAQQBIwEkAQQBBAEkAQUBJAElAQUBBQElASYBBQEmAQYBBgEmAScBBgEnAQcBBwEnASgBBwEoAQgBCAEoASkBCAEpAQkBCQEpASoBCQEqAQoBCgEqASsBCgErAQsBCwErASwBCwEsAQwBDAEsAQ0BDAENAe0ADQEtAQ4BLQEuAQ4BDgEuAQ8BLgEvAQ8BDwEvARABLwEwARABEAEwAREBMAExAREBEQExARIBMQEyARIBEgEyARMBMgEzARMBEwEzARQBMwE0ARQBFAE0ARUBNAE1ARUBFQE1ATYBFQE2ARYBFgE2ATcBFgE3ARcBFwE3ATgBFwE4ARgBGAE4ATkBGAE5ARkBGQE5AToBGQE6ARoBGgE6ATsBGgE7ARsBGwE7ATwBGwE8ARwBHAE8AT0BHAE9AR0BHQE9AR4BPQE+AR4BHgE+AR8BPgE/AR8BHwE/ASABPwFAASABIAFAASEBQAFBASEBIQFBASIBQQFCASIBIgFCASMBQgFDASMBIwFDASQBQwFEASQBJAFEASUBRAFFASUBJQFFAUYBJQFGASYBJgFGAUcBJgFHAScBJwFHAUgBJwFIASgBKAFIAUkBKAFJASkBKQFJAUoBKQFKASoBKgFKAUsBKgFLASsBKwFLAUwBKwFMASwBLAFMAS0BLAEtAQ0BLQFNAS4BTQFOAS4BLgFOAS8BTgFPAS8BLwFPATABTwFQATABMAFQATEBUAFRATEBMQFRATIBUQFSATIBMgFSATMBUgFTATMBMwFTATQBUwFUATQBNAFUATUBVAFVATUBNQFVAVYBNQFWATYBNgFWAVcBNgFXATcBNwFXAVgBNwFYATgBOAFYAVkBOAFZATkBOQFZAVoBOQFaAToBOgFaAVsBOgFbATsBOwFbAVwBOwFcATwBPAFcAV0BPAFdAT0BPQFdAT4BXQFeAT4BPgFeAT8BXgFfAT8BPwFfAUABXwFgAUABQAFgAUEBYAFhAUEBQQFhAUIBYQFiAUIBQgFiAUMBYgFjAUMBQwFjAUQBYwFkAUQBRAFkAUUBZAFlAUUBRQFlAWYBRQFmAUYBRgFmAWcBRgFnAUcBRwFnAWgBRwFoAUgBSAFoAWkBSAFpAUkBSQFpAWoBSQFqAUoBSgFqAWsBSgFrAUsBSwFrAWwBSwFsAUwBTAFsAU0BTAFNAS0BTQFtAU4BbQFuAU4BTgFuAU8BbgFvAU8BTwFvAVABbwFwAVABUAFwAVEBcAFxAVEBUQFxAVIBcQFyAVIBUgFyAVMBcgFzAVMBUwFzAVQBcwF0AVQBVAF0AVUBdAF1AVUBVQF1AXYBVQF2AVYBVgF2AXcBVgF3AVcBVwF3AXgBVwF4AVgBWAF4AXkBWAF5AVkBWQF5AXoBWQF6AVoBWgF6AXsBWgF7AVsBWwF7AXwBWwF8AVwBXAF8AX0BXAF9AV0BXQF9AV4BfQF+AV4BXgF+AV8BfgF/AV8BXwF/AWABfwGAAWABYAGAAWEBgAGBAWEBYQGBAWIBgQGCAWIBYgGCAWMBggGDAWMBYwGDAWQBgwGEAWQBZAGEAWUBhAGFAWUBZQGFAYYBZQGGAWYBZgGGAYcBZgGHAWcBZwGHAYgBZwGIAWgBaAGIAYkBaAGJAWkBaQGJAYoBaQGKAWoBagGKAYsBagGLAWsBawGLAYwBawGMAWwBbAGMAW0BbAFtAU0BbQGNAW4BbgGNAY4BbgGOAW8BbwGOAY8BbwGPAXABcAGPAZAB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NQA2ADQANQA3ADYANwA4ADYANwA5ADgAOQA6ADgAOQA7ADoAOwA8ADoAOwA9ADwAPQA+ADwAPQA/AD4APwACAD4APwAAAAIAAgADAEAAQAADAEEAAwAFAEEAQQAFAEIABQAHAEIAQgAHAEMABwAJAEMAQwAJAEQACQALAEQARAALAEUACwANAEUARQANAEYADQAPAEYARgAPAEcADwARAEcARwARAEgAEQBJAEgAEQASAEkAEgBKAEkAEgAUAEoAFABLAEoAFAAWAEsAFgBMAEsAFgAYAEwAGABNAEwAGAAaAE0AGgBOAE0AGgAcAE4AHABPAE4AHAAeAE8AHgBQAE8AHgAgAFAAIAAjAFAAUAAjAFEAIwAlAFEAUQAlAFIAJQAnAFIAUgAnAFMAJwApAFMAUwApAFQAKQArAFQAVAArAFUAKwAtAFUAVQAtAFYALQAvAFYAVgAvAFcALwAxAFcAVwAxAFgAMQBZAFgAMQAyAFkAMgBaAFkAMgA0AFoANABbAFoANAA2AFsANgBcAFsANgA4AFwAOABdAFwAOAA6AF0AOgBeAF0AOgA8AF4APABfAF4APAA+AF8APgBAAF8APgACAEAAQABBAGAAYABBAGEAQQBCAGEAYQBCAGIAQgBDAGIAYgBDAGMAQwBEAGMAYwBEAGQARABFAGQAZABFAGUARQBGAGUAZQBGAGYARgBHAGYAZgBHAGcARwBIAGcAZwBIAGgASABpAGgASABJAGkASQBqAGkASQBKAGoASgBrAGoASgBLAGsASwBsAGsASwBMAGwATABtAGwATABNAG0ATQBuAG0ATQBOAG4ATgBvAG4ATgBPAG8ATwBwAG8ATwBQAHAAUABRAHAAcABRAHEAUQBSAHEAcQBSAHIAUgBTAHIAcgBTAHMAUwBUAHMAcwBUAHQAVABVAHQAdABVAHUAVQBWAHUAdQBWAHYAVgBXAHYAdgBXAHcAVwBYAHcAdwBYAHgAWAB5AHgAWABZAHkAWQB6AHkAWQBaAHoAWgB7AHoAWgBbAHsAWwB8AHsAWwBcAHwAXAB9AHwAXABdAH0AXQB+AH0AXQBeAH4AXgB/AH4AXgBfAH8AXwBgAH8AXwBAAGAAYABhAIAAgABhAIEAYQBiAIEAgQBiAIIAYgBjAIIAggBjAIMAYwBkAIMAgwBkAIQAZABlAIQAhABlAIUAZQBmAIUAhQBmAIYAZgBnAIYAhgBnAIcAZwBoAIcAhwBoAIgAaACJAIgAaABpAIkAaQCKAIkAaQBqAIoAagCLAIoAagBrAIsAawCMAIsAawBsAIwAbACNAIwAbABtAI0AbQCOAI0AbQBuAI4AbgCPAI4AbgBvAI8AbwCQAI8AbwBwAJAAcABxAJAAkABxAJEAcQByAJEAkQByAJIAcgBzAJIAkgBzAJMAcwB0AJMAkwB0AJQAdAB1AJQAlAB1AJUAdQB2AJUAlQB2AJYAdgB3AJYAlgB3AJcAdwB4AJcAlwB4AJgAeACZAJgAeAB5AJkAeQCaAJkAeQB6AJoAegCbAJoAegB7AJsAewCcAJsAewB8AJwAfACdAJwAfAB9AJ0AfQCeAJ0AfQB+AJ4AfgCfAJ4AfgB/AJ8AfwCAAJ8AfwBgAIAAgACBAKAAoACBAKEAgQCCAKEAoQCCAKIAggCDAKIAogCDAKMAgwCEAKMAowCEAKQAhACFAKQApACFAKUAhQCGAKUApQCGAKYAhgCHAKYApgCHAKcAhwCIAKcApwCIAKgAiACpAKgAiACJAKkAiQCqAKkAiQCKAKoAigCrAKoAigCLAKsAiwCsAKsAiwCMAKwAjACtAKwAjACNAK0AjQCuAK0AjQCOAK4AjgCvAK4AjgCPAK8AjwCwAK8AjwCQALAAkACRALAAsACRALEAkQCSALEAsQCSALIAkgCTALIAsgCTALMAkwCUALMAswCUALQAlACVALQAtACVALUAlQCWALUAtQCWALYAlgCXALYAtgCXALcAlwCYALcAtwCYALgAmAC5ALgAmACZALkAmQC6ALkAmQCaALoAmgC7ALoAmgCbALsAmwC8ALsAmwCcALwAnAC9ALwAnACdAL0AnQC+AL0AnQCeAL4AngC/AL4AngCfAL8AnwCgAL8AnwCAAKAAoAChAMAAoQDBAMAAoQCiAMEAogDCAMEAogCjAMIAowDDAMIAowCkAMMApADEAMMApAClAMQApQDFAMQApQCmAMUApgDGAMUApgCnAMYApwDHAMYApwCoAMcAqACpAMcAxwCpAMgAqQCqAMgAyACqAMkAqgCrAMkAyQCrAMoAqwCsAMoAygCsAMsArACtAMsAywCtAMwArQCuAMwAzACuAM0ArgCvAM0AzQCvAM4ArwCwAM4AsACxAM8AsQDQAM8AsQCyANAAsgDRANAAsgCzANEAswDSANEAswC0ANIAtADTANIAtAC1ANMAtQDUANMAtQC2ANQAtgDVANQAtgC3ANUAtwDWANUAtwC4ANYAuAC5ANYA1gC5ANcAuQC6ANcA1wC6ANgAugC7ANgA2AC7ANkAuwC8ANkA2QC8ANoAvAC9ANoA2gC9ANsAvQC+ANsA2wC+ANwAvgC/ANwA3AC/AN0AvwCgAN0AoADAAN4AwADfAN4AwADBAN8AwQDgAN8AwQDCAOAAwgDhAOAAwgDDAOEAwwDiAOEAwwDEAOIAxADjAOIAxADFAOMAxQDkAOMAxQDGAOQAxgDlAOQAxgDHAOUAxwDIAOUA5QDIAOYAyADJAOYA5gDJAOcAyQDKAOcA5wDKAOgAygDLAOgA6ADLAOkAywDMAOkA6QDMAOoAzADNAOoA6gDNAOsAzQDOAOsA6wDOAOwAzgCwAOwAsADPAOwAzwDrAOwAzwDQAOsA0ADqAOsA0ADRAOoA0QDpAOoA0QDSAOkA0gDoAOkA0gDTAOgA0wDnAOgA0wDUAOcA1ADmAOcA1ADVAOYA1QDlAOYA1QDWAOUA1gDXAOUA5QDXAOQA1wDYAOQA5ADYAOMA2ADZAOMA4wDZAOIA2QDaAOIA4gDaAOEA2gDbAOEA4QDbAOAA2wDcAOAA4ADcAN8A3ADdAN8A3wDdAN4A3QCgAN4AAADtAAEA7QDuAAEAAQDuAAQA7gDvAAQABADvAAYA7wDwAAYABgDwAAgA8ADxAAgACADxAAoA8QDyAAoACgDyAAwA8gDzAAwADADzAA4A8wD0AA4ADgD0ABAA9AD1ABAAEAD1APYAEAD2ABMAEwD2APcAEwD3ABUAFQD3APgAFQD4ABcAFwD4APkAFwD5ABkAGQD5APoAGQD6ABsAGwD6APsAGwD7AB0AHQD7APwAHQD8AB8AHwD8AP0AHwD9ACEAIQD9ACIA/QD+ACIAIgD+ACQA/gD/ACQAJAD/ACYA/wAAASYAJgAAASgAAAEBASgAKAABASoAAQECASoAKgACASwAAgEDASwALAADAS4AAwEEAS4ALgAEATAABAEFATAAMAAFAQYBMAAGATMAMwAGAQcBMwAHATUANQAHAQgBNQAIATcANwAIAQkBNwAJATkAOQAJAQoBOQAKATsAOwAKAQsBOwALAT0APQALAQwBPQAMAT8APwAMAe0APwDtAAAA7QANAe4ADQEOAe4A7gAOAe8ADgEPAe8A7wAPAfAADwEQAfAA8AAQAfEAEAERAfEA8QARAfIAEQESAfIA8gASAfMAEgETAfMA8wATAfQAEwEUAfQA9AAUAfUAFAEVAfUA9QAVARYB9QAWAfYA9gAWARcB9gAXAfcA9wAXARgB9wAYAfgA+AAYARkB+AAZAfkA+QAZARoB+QAaAfoA+gAaARsB+gAbAfsA+wAbARwB+wAcAfwA/AAcAR0B/AAdAf0A/QAdAf4AHQEeAf4A/gAeAf8AHgEfAf8A/wAfAQABHwEgAQABAAEgAQEBIAEhAQEBAQEhAQIBIQEiAQIBAgEiAQMBIgEjAQMBAwEjAQQBIwEkAQQBBAEkAQUBJAElAQUBBQElASYBBQEmAQYBBgEmAScBBgEnAQcBBwEnASgBBwEoAQgBCAEoASkBCAEpAQkBCQEpASoBCQEqAQoBCgEqASsBCgErAQsBCwErASwBCwEsAQwBDAEsAQ0BDAENAe0ADQEtAQ4BLQEuAQ4BDgEuAQ8BLgEvAQ8BDwEvARABLwEwARABEAEwAREBMAExAREBEQExARIBMQEyARIBEgEyARMBMgEzARMBEwEzARQBMwE0ARQBFAE0ARUBNAE1ARUBFQE1ATYBFQE2ARYBFgE2ATcBFgE3ARcBFwE3ATgBFwE4ARgBGAE4ATkBGAE5ARkBGQE5AToBGQE6ARoBGgE6ATsBGgE7ARsBGwE7ATwBGwE8ARwBHAE8AT0BHAE9AR0BHQE9AR4BPQE+AR4BHgE+AR8BPgE/AR8BHwE/ASABPwFAASABIAFAASEBQAFBASEBIQFBASIBQQFCASIBIgFCASMBQgFDASMBIwFDASQBQwFEASQBJAFEASUBRAFFASUBJQFFAUYBJQFGASYBJgFGAUcBJgFHAScBJwFHAUgBJwFIASgBKAFIAUkBKAFJASkBKQFJAUoBKQFKASoBKgFKAUsBKgFLASsBKwFLAUwBKwFMASwBLAFMAS0BLAEtAQ0BLQFNAS4BTQFOAS4BLgFOAS8BTgFPAS8BLwFPATABTwFQATABMAFQATEBUAFRATEBMQFRATIBUQFSATIBMgFSATMBUgFTATMBMwFTATQBUwFUATQBNAFUATUBVAFVATUBNQFVAVYBNQFWATYBNgFWAVcBNgFXATcBNwFXAVgBNwFYATgBOAFYAVkBOAFZATkBOQFZAVoBOQFaAToBOgFaAVsBOgFbATsBOwFbAVwBOwFcATwBPAFcAV0BPAFdAT0BPQFdAT4BXQFeAT4BPgFeAT8BXgFfAT8BPwFfAUABXwFgAUABQAFgAUEBYAFhAUEBQQFhAUIBYQFiAUIBQgFiAUMBYgFjAUMBQwFjAUQBYwFkAUQBRAFkAUUBZAFlAUUBRQFlAWYBRQFmAUYBRgFmAWcBRgFnAUcBRwFnAWgBRwFoAUgBSAFoAWkBSAFpAUkBSQFpAWoBSQFqAUoBSgFqAWsBSgFrAUsBSwFrAWwBSwFsAUwBTAFsAU0BTAFNAS0BTQFtAU4BbQFuAU4BTgFuAU8BbgFvAU8BTwFvAVABbwFwAVABUAFwAVEBcAFxAVEBUQFxAVIBcQFyAVIBUgFyAVMBcgFzAVMBUwFzAVQBcwF0AVQBVAF0AVUBdAF1AVUBVQF1AXYBVQF2AVYBVgF2AXcBVgF3AVcBVwF3AXgBVwF4AVgBWAF4AXkBWAF5AVkBWQF5AXoBWQF6AVoBWgF6AXsBWgF7AVsBWwF7AXwBWwF8AVwBXAF8AX0BXAF9AV0BXQF9AV4BfQF+AV4BXgF+AV8BfgF/AV8BXwF/AWABfwGAAWABYAGAAWEBgAGBAWEBYQGBAWIBgQGCAWIBYgGCAWMBggGDAWMBYwGDAWQBgwGEAWQBZAGEAWUBhAGFAWUBZQGFAYYBZQGGAWYBZgGGAYcBZgGHAWcBZwGHAYgBZwGIAWgBaAGIAYkBaAGJAWkBaQGJAYoBaQGKAWoBagGKAYsBagGLAWsBawGLAYwBawGMAWwBbAGMAW0BbAFtAU0BbQGNAW4BbgGNAY4BbgGOAW8BbwGOAY8BbwGPAXABcAGPAZABcAGQAXEBcQGQAZEBcQGRAXIBcgGRAZIBcgGSAXMBcwGSAZMBcwGTAXQBdAGTAZQBdAGUAXUBdQGUAXYBlAGVAXYBdgGVAXcBlQGWAXcBdwGWAXgBlgGXAXgBeAGXAXkBlwGYAXkBeQGYAXoBmAGZAXoBegGZAXsBmQGaAXsBewGaAXwBmgGbAXwBfAGbAX0BfQGcAX4BfgGcAZ0BfgGdAX8BfwGdAZ4BfwGeAYABgAGeAZ8BgAGfAYEBgQGfAaABgQGgAYIBggGgAaEBggGhAYMBgwGhAaIBgwGiAYQBhAGiAaMBhAGjAYUBhQGjAYYBowGkAYYBhgGkAYcBpAGlAYcBhwGlAYgBpQGmAYgBiAGmAYkBpgGnAYkBiQGnAYoBpwGoAYoBigGoAYsBqAGpAYsBiwGpAYwBqQGqAYwBjAGqAW0BbQGrAY0BjQGrAawBjQGsAY4BjgGsAa0BjgGtAY8BjwGtAa4BjwGuAZABkAGuAa8BkAGvAZEBkQGvAbABkQGwAZIBkgGwAbEBkgGxAZMBkwGxAbIBkwGyAZQBlAGyAZUBsgGzAZUBlQGzAZYBswG0AZYBlgG0AZcBtAG1AZcBlwG1AZgBtQG2AZgBmAG2AZkBtgG3AZkBmQG3AZoBtwG4AZoBmgG4AZsBuAG5AZsBmwG5AX0BfQG5AZwBnAG5AbgBnAG4AZ0BnQG4AbcBnQG3AZ4BngG3AbYBngG2AZ8BnwG2AbUBnwG1AaABoAG1AbQBoAG0AaEBoQG0AbMBoQGzAaIBogGzAbIBogGyAaMBowGyAaQBsgGxAaQBpAGxAaUBsQGwAaUBpQGwAaYBsAGvAaYBpgGvAacBrwGuAacBpwGuAagBrgGtAagBqAGtAakBrQGsAakBqQGsAaoBrAGrAaoBqgGrAW0B", Q = (e, t, n) => new G(e, t, n), _f = Math.PI * 2, vf = new J("#ffb347"), yf = new J("#ffd58a"), bf = new J("#2ee6a6"), xf = new J("#bfd8f0"), Sf = new J("#a9dcff"), Cf = new J("#05070a"), wf = "varying vec3 vN; varying vec3 vV;\nvoid main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }";
function Tf(e = .05, t = .32, n = vf) {
	return e *= .45, t *= .55, Ef(e, t, n);
}
function Ef(e, t, n) {
	return new Mo({
		uniforms: {
			uC: { value: n.clone() },
			uA: { value: e },
			uR: { value: t },
			uFade: { value: 1 }
		},
		vertexShader: wf,
		fragmentShader: "uniform vec3 uC; uniform float uA; uniform float uR; uniform float uFade; varying vec3 vN; varying vec3 vV;\n      void main(){ float f = 1.0 - abs(dot(normalize(vN), normalize(vV))); float a = (uA + uR * pow(f, 3.0)) * uFade; gl_FragColor = vec4(uC * a, 1.0); }",
		transparent: !0,
		depthWrite: !1,
		side: 2,
		blending: 2
	});
}
function Df(e = yf) {
	return new Mo({
		uniforms: {
			uC: { value: e.clone() },
			uLit: { value: 1 },
			uPulse: { value: 0 },
			uGain: { value: 1 }
		},
		vertexShader: wf,
		fragmentShader: "uniform vec3 uC; uniform float uLit; uniform float uPulse; uniform float uGain; varying vec3 vN; varying vec3 vV;\n      void main(){ vec3 n = normalize(vN); float l = 0.45 + 0.55 * max(dot(n, normalize(vec3(0.3,0.9,0.4))), 0.0);\n        float f = 1.0 - abs(dot(n, normalize(vV)));\n        float k = uGain * mix(0.07, 0.48, uLit) * (l + 0.45 * pow(f, 2.0)) * (1.0 + 0.25 * uPulse);\n        gl_FragColor = vec4(uC * k, 1.0); }",
		transparent: !0,
		depthWrite: !1,
		blending: 2
	});
}
function Of(e = .6) {
	return new Mo({
		uniforms: {
			uT: { value: 0 },
			uC: { value: Sf.clone() },
			uS: { value: e },
			uOn: { value: 1 }
		},
		vertexShader: "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",
		fragmentShader: "uniform float uT; uniform vec3 uC; uniform float uS; uniform float uOn; varying vec2 vUv;\n      void main(){ float p = fract(vUv.x * 3.0 - uT * uS); float pulse = smoothstep(0.0, 0.08, p) * (1.0 - smoothstep(0.08, 0.3, p));\n        float k = (0.22 + 1.3 * pulse * uOn) * mix(0.35, 1.0, uOn); gl_FragColor = vec4(uC * k, 1.0); }",
		transparent: !0,
		depthWrite: !1,
		blending: 2
	});
}
var kf = /* @__PURE__ */ new Set();
function Af(e = vf, t = 1.15, n = .9) {
	n *= .62;
	let r = new Ed({
		color: e.getHex(),
		linewidth: t,
		transparent: !0,
		opacity: n,
		depthWrite: !1,
		blending: 2
	});
	return r.userData.w = t, r.userData.o = n, kf.add(r), r;
}
function jf(e, t, n = 2.4, r = 0, i = 40) {
	let a = [];
	for (let o = 0; o < i; o++) {
		let s = o / i * _f, c = Math.cos(s), l = Math.sin(s);
		a.push([e * Math.sign(c) * Math.abs(c) ** (2 / n), r + t * Math.sign(l) * Math.abs(l) ** (2 / n)]);
	}
	return a;
}
function Mf(e, t) {
	let n = [], r = e.length;
	for (let i = 0; i < r - 1; i++) {
		let a = e[Math.max(0, i - 1)], o = e[i], s = e[i + 1], c = e[Math.min(r - 1, i + 2)];
		for (let e = 0; e < t; e++) {
			let r = e / t, i = r * r, l = i * r;
			n.push(o.map((e, t) => .5 * (2 * o[t] + (-a[t] + s[t]) * r + (2 * a[t] - 5 * o[t] + 4 * s[t] - c[t]) * i + (-a[t] + 3 * o[t] - 3 * s[t] + c[t]) * l)));
		}
	}
	return n.push(e[r - 1].slice()), n;
}
function Nf(e, t = !0) {
	let n = e[0].length, r = [], i = [];
	for (let t of e) for (let e of t) r.push(e.x, e.y, e.z);
	let a = t ? n : n - 1;
	for (let t = 0; t < e.length - 1; t++) for (let e = 0; e < a; e++) {
		let r = t * n + e, a = t * n + (e + 1) % n, o = (t + 1) * n + e, s = (t + 1) * n + (e + 1) % n;
		i.push(r, o, a, a, o, s);
	}
	let o = new Dr();
	return o.setAttribute("position", new Y(r, 3)), o.setIndex(i), o.computeVertexNormals(), o;
}
function Pf(e, { ringEvery: t = 1, longs: n = 8, closed: r = !0 } = {}) {
	let i = [], a = e[0].length;
	e.forEach((n, o) => {
		if (!(o % t && o !== e.length - 1)) for (let e = 0; e < (r ? a : a - 1); e++) {
			let t = n[e], r = n[(e + 1) % a];
			i.push(t.x, t.y, t.z, r.x, r.y, r.z);
		}
	});
	let o = n ? a / n : 0;
	if (n) for (let t = 0; t < n; t++) {
		let n = Math.round(t * o) % a;
		for (let t = 0; t < e.length - 1; t++) {
			let r = e[t][n], a = e[t + 1][n];
			i.push(r.x, r.y, r.z, a.x, a.y, a.z);
		}
	}
	return i;
}
function Ff(e) {
	let t = [];
	for (let n of e) for (let e = 0; e < n.length - 1; e++) t.push(n[e].x, n[e].y, n[e].z, n[e + 1].x, n[e + 1].y, n[e + 1].z);
	return t;
}
function If(e, t) {
	let n = new Td();
	n.setPositions(e);
	let r = new Gd(n, t);
	return r.renderOrder = 2, r;
}
function Lf(e, { ringEvery: t = 3, longs: n = 8, alpha: r = .05, rim: i = .3, lineW: a = 1.1, lineO: o = .75, closed: s = !0 } = {}) {
	let c = new Tn(), l = new _i(Nf(e, s), Tf(r, i));
	return l.renderOrder = 1, c.add(l), c.add(If(Pf(e, {
		ringEvery: t,
		longs: n,
		closed: s
	}), Af(vf, a, o))), c;
}
function Rf(e, { steps: t = 4, N: n = 40, ...r } = {}) {
	return Lf(Mf(e, t).map(([e, t, r, i, a]) => jf(Math.max(t, .001), Math.max(r, .001), a, i, n).map(([t, n]) => Q(e, n, t))), {
		ringEvery: t,
		...r
	});
}
function zf({ le: e, chord: t, y: n, z0: r, z1: i, t: a = .12, stations: o = 9, sweep: s = 0, taper: c = 1, dihedral: l = 0, ribs: u = !0 }) {
	let d = [], f = [];
	for (let e = 0; e < 24; e++) {
		let t = e / 24 * _f, n = .5 + .5 * Math.cos(t), r = 5 * a * (.2969 * Math.sqrt(n) - .126 * n - .3516 * n * n + .2843 * n ** 3 - .1015 * n ** 4);
		f.push([1 - n, Math.sin(t) >= 0 ? r : -r]);
	}
	for (let a = 0; a <= o; a++) {
		let u = r + (i - r) * a / o, p = Math.abs(u) / Math.max(Math.abs(r), Math.abs(i)), m = t * (1 - (1 - c) * p), h = e - s * p;
		d.push(f.map(([e, t]) => Q(h - e * m, n + t * m + l * Math.abs(u), u)));
	}
	return Lf(d, {
		ringEvery: u ? 1 : o,
		longs: 4,
		alpha: .045,
		rim: .28,
		lineO: .7
	});
}
function Bf(e, t, n, r) {
	let i = new _i(e, t);
	return i.position.copy(n), r && i.rotation.set(...r), i.renderOrder = 3, i;
}
function Vf(e, t, n, r) {
	let i = new $i(e, 25).attributes.position.array, a = If(Array.from(i), r);
	return a.position.copy(t), n && a.rotation.set(...n), a;
}
function Hf(e, t, n = .035) {
	let r = new _i(new xo(new la(e, !1, "centripetal"), Math.max(16, e.length * 10), n, 5, !1), t);
	return r.renderOrder = 4, r;
}
function Uf({ r: e = 1, blades: t = 2, chord: n = .13, cruise: r = !1 }) {
	let i = new Tn(), a = new Tn();
	i.add(a);
	let o = Df(yf), s = new Aa();
	s.moveTo(0, -n * .4), s.quadraticCurveTo(e * .35, -n * .9, e * .95, -n * .3), s.quadraticCurveTo(e * 1, 0, e * .95, n * .25), s.quadraticCurveTo(e * .4, n * .7, 0, n * .4);
	let c = new _o(s, 8), l = [];
	for (let e = 0; e < t; e++) {
		let n = new Tn();
		n.rotation.x = e / t * _f;
		let r = new Tn(), i = new _i(c, o);
		i.rotation.set(0, Math.PI / 2, Math.PI / 2), i.rotation.order = "YZX", i.renderOrder = 3, r.add(i), n.add(r), a.add(n), l.push(r);
	}
	let u = new _i(new yo(e * .09, 12, 8), o);
	u.scale.set(1.6, 1, 1), i.add(u);
	let d = new _i(new go(e * .12, e, 48, 1), Tf(.02, 0, vf));
	d.rotation.y = Math.PI / 2, i.add(d);
	let f = [];
	for (let t = 0; t <= 64; t++) {
		let n = t / 64 * _f;
		f.push(Q(0, Math.cos(n) * e, Math.sin(n) * e));
	}
	let p = If(Ff([f]), Af(vf, .9, .35));
	return i.add(p), i.userData = {
		spin: a,
		blades: l,
		disc: d,
		ring: p,
		cruise: r,
		r: e,
		mat: o
	}, i;
}
function Wf(e) {
	let t = {};
	for (let n of e) t[n] = {
		mat: Df(n === "harness" ? Sf : bf),
		edge: Af(bf, 1.2, .95),
		meshes: [],
		wire: Of(.55)
	};
	return t;
}
function $(e, t, n, r, i) {
	e.add(Bf(n, t.mat, r, i)), e.add(Vf(n, r, i, t.edge)), t.meshes.push(r.clone());
}
var Gf = (e, t, n = 20) => new qi(e, e, t, n, 1), Kf = [
	0,
	0,
	Math.PI / 2
];
function qf(e) {
	let t = Uint8Array.from(atob(e), (e) => e.charCodeAt(0)), n = new DataView(t.buffer).getUint32(0, !0), r = JSON.parse(new TextDecoder().decode(t.subarray(4, 4 + n))), i = 4 + n, a = {};
	for (let e of r.parts) {
		let n = new Float32Array(t.buffer.slice(i, i + e.verts * 12));
		i += e.verts * 12;
		let r = e.tris * 3, o = r * (e.wide ? 4 : 2), s = e.wide ? new Uint32Array(t.buffer.slice(i, i + o)) : new Uint16Array(t.buffer.slice(i, i + o));
		i += o, !e.wide && r % 2 && (i += 2);
		let c = new Dr();
		c.setAttribute("position", new pr(n, 3)), c.setIndex(new pr(s, 1)), c.computeVertexNormals(), a[e.name] = c;
	}
	return a;
}
var Jf = null, Yf = () => Jf ??= qf(gf);
function Xf(e) {
	let t = e.attributes.position, n = e.index.array, r = [[], []];
	for (let e = 0; e < n.length; e += 3) r[(t.getZ(n[e]) + t.getZ(n[e + 1]) + t.getZ(n[e + 2])) / 3 >= 0 ? 0 : 1].push(n[e], n[e + 1], n[e + 2]);
	return r.map((n) => {
		let r = new Dr();
		return r.setAttribute("position", t), r.setAttribute("normal", e.attributes.normal), r.setIndex(n), r;
	});
}
var Zf = () => new Po({
	color: 857376,
	metalness: .55,
	roughness: .38,
	transparent: !0,
	opacity: .5,
	depthWrite: !1,
	emissive: 1182724
}), Qf = () => new Po({
	color: 12572912,
	metalness: .5,
	roughness: .45,
	emissive: 1845816
});
function $f(e, { at: t = Q(0, 0, 0), scale: n = null, edgeDeg: r = 14, lineO: i = .85, lineW: a = 1.05 } = {}) {
	let o = new Tn(), s = new _i(e, Zf());
	s.renderOrder = 1;
	let c = new _i(e, Tf(0, .3));
	c.renderOrder = 2;
	let l = new $i(e, r), u = If(Array.from(l.attributes.position.array), Af(vf, a, i));
	return o.add(s, c, u), o.position.copy(t), n && o.scale.copy(n), o;
}
function ep(e, t, n) {
	let r = new Tn(), i = new Tn();
	r.add(i);
	let a = Qf(), o = Xf(e).map((e) => {
		let t = new Tn(), n = new _i(e, a);
		return n.renderOrder = 3, t.add(n), i.add(t), t;
	}), s = new _i(new go(t * .1, t, 64, 1), Tf(.016, 0, xf));
	s.rotation.y = Math.PI / 2, r.add(s);
	let c = [];
	for (let e = 0; e <= 72; e++) {
		let n = e / 72 * _f;
		c.push(Q(0, Math.cos(n) * t, Math.sin(n) * t));
	}
	let l = If(Ff([c]), Af(xf, .8, .3));
	return r.add(l), r.userData = {
		spin: i,
		blades: o,
		disc: s,
		ring: l,
		cruise: n,
		r: t,
		mat: a,
		vsp: !0,
		ringO: .22
	}, r;
}
function tp() {
	let e = Yf(), t = new Tn(), n = Wf([
		"power",
		"batt",
		"fuel",
		"fc",
		"payload",
		"motor",
		"sensors",
		"harness"
	]);
	t.add($f(e.fuselage, {
		at: Q(6.6, 0, 0),
		edgeDeg: 16
	})), t.add($f(e.fin, {
		at: Q(-4.6, .5, 0),
		edgeDeg: 20
	}));
	for (let e of [-.45, .45]) {
		$(t, n.power, new Gi(1.5, .55, .5), Q(-.5, -.12, e)), $(t, n.power, Gf(.24, .5), Q(.55, -.12, e), Kf);
		for (let r = 0; r < 3; r++) $(t, n.power, new Gi(.28, .16, .36), Q(-.95 + r * .45, .24, e));
	}
	$(t, n.batt, new Gi(1.3, .38, 1), Q(2.35, -.38, 0)), $(t, n.fuel, new Ki(.42, 1.6, 6, 16), Q(-2.55, .2, 0), [
		0,
		0,
		Math.PI / 2
	]), $(t, n.fc, new Gi(.7, .18, .5), Q(3.85, .25, 0)), $(t, n.sensors, Gf(.16, .06), Q(1.8, .95, 0));
	let r = Q(5.25, -1, 0);
	t.add(Bf(e.ball, n.payload.mat, r)), t.add(Vf(e.ball, r, null, n.payload.edge)), n.payload.meshes.push(Q(4.83, -1, 0)), $(t, n.payload, Gf(.11, .3), Q(4.83, -.6, 0));
	let i = new Tn();
	i.position.set(.3, 1.05, 0), t.add(i), i.add($f(e.wing, {
		at: Q(.5, 0, 0),
		edgeDeg: 12
	}));
	let a = [], o = [
		2.6,
		4.9,
		7.2,
		9.5
	], s = [], c = Q(1, .55, .55);
	for (let t of [-1, 1]) for (let [r, l] of o.entries()) {
		let o = t * l;
		i.add($f(e.pod, {
			at: Q(1.9, .02, o),
			scale: c,
			edgeDeg: 22,
			lineO: .7,
			lineW: .9
		})), $(i, n.motor, Gf(.1, .36, 16), Q(1.45, .02, o), Kf);
		let u = ep(e.prop_wing, 1, r === 3);
		u.position.set(1.97, .02, o), i.add(u), a.push(u), s.push([
			Q(0, -.1, t * .3),
			Q(-.1, -.06, o * .5),
			Q(-.1, -.04, o - t * .3),
			Q(1.25, .02, o)
		]);
	}
	for (let e of s) i.add(Hf(e, n.harness.wire, .028));
	let l = new Tn();
	l.position.set(-5.9, .68, 0), t.add(l), l.add($f(e.tail, {
		at: Q(.45, 0, 0),
		edgeDeg: 14
	}));
	for (let t of [-1, 1]) {
		let r = t * 3.1;
		l.add($f(e.pod, {
			at: Q(1.6, 0, r),
			scale: Q(.82, .5, .5),
			edgeDeg: 22,
			lineO: .7,
			lineW: .9
		})), $(l, n.motor, Gf(.09, .3, 16), Q(1.2, 0, r), Kf);
		let i = ep(e.prop_tail, .85, !1);
		i.position.set(1.66, 0, r), l.add(i), a.push(i), l.add(Hf([
			Q(-.2, 0, t * .2),
			Q(.1, 0, r * .6),
			Q(1.05, 0, r)
		], n.harness.wire, .026));
	}
	let u = [
		[
			Q(.8, -.12, -.45),
			Q(1.4, -.3, -.3),
			Q(1.75, -.38, 0)
		],
		[
			Q(.8, -.12, .45),
			Q(1.4, -.3, .3),
			Q(1.75, -.38, 0)
		],
		[
			Q(2, -.2, 0),
			Q(1.2, .5, 0),
			Q(.3, .95, 0)
		],
		[
			Q(1.7, -.45, .2),
			Q(-1.5, -.5, .3),
			Q(-4.5, .2, .12),
			Q(-5.9, .62, 0)
		],
		[
			Q(3.85, .3, 0),
			Q(2.8, .75, 0),
			Q(1.8, .95, 0)
		],
		[
			Q(4.1, .2, 0),
			Q(4.8, -.2, 0),
			Q(4.83, -.6, 0)
		]
	];
	for (let e of u) t.add(Hf(e, n.harness.wire, .028));
	n.harness.meshes.push(Q(1.2, .4, 0));
	for (let e of Object.values(n)) e.mat.uniforms.uGain.value = .42, e.wire.uniforms.uC.value.multiplyScalar(.55);
	return {
		root: t,
		sys: n,
		props: a,
		wing: i,
		tail: l,
		extent: 10.6,
		height: 2.2,
		ground: -7.5,
		kind: "air",
		lights: !0,
		bloom: [
			.18,
			.2,
			.85
		],
		order: [
			"harness",
			"power",
			"batt",
			"fuel",
			"fc",
			"payload"
		]
	};
}
function np() {
	let e = new Tn(), t = Wf([
		"power",
		"batt",
		"fuel",
		"fc",
		"payload",
		"motor",
		"sensors",
		"harness"
	]);
	e.add(Rf([
		[
			16.5,
			.05,
			.05,
			.6,
			2
		],
		[
			15.6,
			1.6,
			1.5,
			.5,
			2.2
		],
		[
			13.5,
			2.8,
			2.7,
			.3,
			2.8
		],
		[
			10,
			3.3,
			3.2,
			.1,
			3.4
		],
		[
			0,
			3.4,
			3.3,
			.1,
			3.6
		],
		[
			-8,
			3.3,
			3.2,
			.25,
			3.4
		],
		[
			-12,
			2.6,
			2.6,
			.9,
			3
		],
		[
			-15.5,
			1.5,
			1.5,
			2,
			2.6
		],
		[
			-18.5,
			.5,
			.6,
			2.9,
			2.2
		],
		[
			-19.4,
			.05,
			.05,
			3,
			2
		]
	], {
		steps: 4,
		longs: 12,
		alpha: .045,
		rim: .3
	})), e.add(If(Ff([[
		Q(-8.5, -3, -2.6),
		Q(-14.5, -.2, -1.8),
		Q(-14.5, -.2, 1.8),
		Q(-8.5, -3, 2.6)
	]]), Af(vf, 1, .7)));
	let n = zf({
		le: 0,
		chord: 5.5,
		y: 0,
		z0: 0,
		z1: 7.5,
		t: .11,
		stations: 5,
		sweep: 3.2,
		taper: .62
	});
	n.rotation.x = -Math.PI / 2, n.position.set(-13.4, 2.4, 0), e.add(n), e.add(zf({
		le: -16.2,
		chord: 3.4,
		y: 9.8,
		z0: -7.5,
		z1: 7.5,
		t: .1,
		stations: 6,
		taper: .7,
		sweep: .8
	}));
	let r = [];
	for (let [e, t] of [
		[11, 0],
		[-2, -3.2],
		[-2, 3.2],
		[-6, -3.2],
		[-6, 3.2]
	]) r.push([Q(e, -2.6, t * .9), Q(e, -4.4, t)]);
	e.add(If(Ff(r), Af(vf, 1, .65)));
	for (let [n, r] of [
		[11, 0],
		[-2, -3.2],
		[-2, 3.2],
		[-6, -3.2],
		[-6, 3.2]
	]) $(e, t.sensors, Gf(.5, .35, 18), Q(n, -4.6, r), [
		Math.PI / 2,
		0,
		0
	]);
	t.sensors.meshes.length = 0, $(e, t.payload, new Gi(12.5, 4, 4.4), Q(-1.2, -.7, 0)), t.payload.mat.uniforms.uGain.value = .32;
	for (let n of [-1.6, 1.6]) $(e, t.power, Gf(.65, 3.4, 22), Q(5, 2.3, n), Kf), $(e, t.power, new bo(.75, .08, 8, 24), Q(6.8, 2.3, n), [
		0,
		Math.PI / 2,
		0
	]), $(e, t.power, Gf(.45, 1, 18), Q(2.9, 2.3, n), Kf);
	$(e, t.batt, new Gi(2.6, .9, 3.4), Q(9.2, -1.9, 0));
	for (let n of [-2.7, 2.7]) $(e, t.fuel, new Ki(.45, 11, 6, 14), Q(-1.2, -2.6, n), [
		0,
		0,
		Math.PI / 2
	]);
	$(e, t.fc, new Gi(1.3, .5, 1), Q(12.8, 1.2, 0)), $(e, t.sensors, new yo(.7, 20, 14), Q(13.6, -2.6, 0)), $(e, t.sensors, Gf(1.4, .12, 28), Q(15.2, .5, 0), [
		0,
		0,
		Math.PI / 2
	]);
	let i = new Tn();
	i.position.set(1, 3.7, 0), e.add(i), i.add(zf({
		le: 2.6,
		chord: 6,
		y: 0,
		z0: -31,
		z1: 31,
		t: .15,
		stations: 24,
		taper: .8
	}));
	let a = [];
	for (let e of [-1, 1]) for (let [n, r] of [
		9,
		18.5,
		28
	].entries()) {
		let o = e * r, s = Rf([
			[
				6.6,
				.05,
				.05,
				0,
				2
			],
			[
				6.1,
				.75,
				.75,
				0,
				2.2
			],
			[
				4.4,
				.95,
				.95,
				0,
				2.4
			],
			[
				0,
				.85,
				.85,
				0,
				2.4
			],
			[
				-2.6,
				.3,
				.3,
				0,
				2
			]
		], {
			steps: 2,
			N: 20,
			longs: 6,
			alpha: .05,
			rim: .3,
			lineW: 1,
			lineO: .65
		});
		s.position.set(0, 0, o), i.add(s), $(i, t.motor, Gf(.7, 1.6, 22), Q(4.6, 0, o), Kf), $(i, t.motor, new bo(.72, .07, 8, 22), Q(3.6, 0, o), [
			0,
			Math.PI / 2,
			0
		]);
		let c = Uf({
			r: 4.3,
			blades: 3,
			chord: .55,
			cruise: n !== 0
		});
		c.position.set(7, 0, o), i.add(c), a.push(c), i.add(Hf([
			Q(0, -.2, e * 1),
			Q(-.4, -.15, o * .5),
			Q(-.2, -.1, o - e * .9),
			Q(3.8, 0, o)
		], t.harness.wire, .09));
	}
	for (let n of [-1.6, 1.6]) e.add(Hf([
		Q(2.4, 2.3, n),
		Q(1, 3.2, n * .6),
		Q(1, 3.7, 0)
	], t.harness.wire, .09)), e.add(Hf([
		Q(2.4, 2.1, n),
		Q(6, 0, n * .8),
		Q(9.2, -1.4, n * .5)
	], t.harness.wire, .09));
	return e.add(Hf([
		Q(12.8, 1.2, 0),
		Q(13.4, -1, 0),
		Q(13.6, -2, 0)
	], t.harness.wire, .07)), t.harness.meshes.push(Q(1, 3.4, 0)), {
		root: e,
		sys: t,
		props: a,
		wing: i,
		tail: null,
		extent: 31,
		height: 9,
		ground: -14,
		kind: "air",
		order: [
			"harness",
			"power",
			"motor",
			"batt",
			"fuel",
			"fc",
			"payload"
		]
	};
}
function rp() {
	let e = new Tn(), t = Wf([
		"power",
		"batt",
		"fuel",
		"fc",
		"payload",
		"motor",
		"sensors",
		"harness"
	]), n = Mf([
		[
			20.2,
			.05,
			3.2,
			.04,
			2.4,
			1.6
		],
		[
			18.8,
			1.6,
			2.95,
			1.1,
			.9,
			-.2
		],
		[
			16.4,
			3.2,
			2.6,
			2.5,
			-.1,
			-1.2
		],
		[
			12,
			4.4,
			1.85,
			3.9,
			-.5,
			-1.8
		],
		[
			6,
			5.1,
			1.75,
			4.6,
			-.6,
			-2.1
		],
		[
			0,
			5.3,
			1.7,
			4.8,
			-.6,
			-2
		],
		[
			-8,
			5.3,
			1.7,
			4.85,
			-.55,
			-1.8
		],
		[
			-14,
			5.2,
			1.7,
			4.8,
			-.5,
			-1.6
		],
		[
			-19,
			5.1,
			1.7,
			4.75,
			-.45,
			-1.45
		]
	], 4), r = n.map(([e, t, n, r, i, a]) => [
		Q(e, n, -t),
		Q(e, i, -r),
		Q(e, (i + a) / 2 - .15, -r * .5),
		Q(e, a, 0),
		Q(e, (i + a) / 2 - .15, r * .5),
		Q(e, i, r),
		Q(e, n, t)
	]);
	e.add(Lf(r, {
		ringEvery: 2,
		longs: 0,
		alpha: .07,
		rim: .4,
		closed: !1
	}));
	let i = [];
	for (let e of [
		0,
		1,
		2,
		3,
		4,
		5,
		6
	]) for (let t = 0; t < r.length - 1; t++) {
		let n = r[t][e], a = r[t + 1][e];
		i.push(n.x, n.y, n.z, a.x, a.y, a.z);
	}
	let a = r[r.length - 1];
	for (let e = 0; e < a.length - 1; e++) i.push(a[e].x, a[e].y, a[e].z, a[e + 1].x, a[e + 1].y, a[e + 1].z);
	i.push(a[0].x, a[0].y, a[0].z, a[6].x, a[6].y, a[6].z), e.add(If(i, Af(vf, 1.2, .85)));
	let o = n.map(([e, t, n]) => [Q(e, n, -t), Q(e, n, t)]);
	e.add(new _i(Nf(o, !1), Tf(.025, .05)));
	let s = [];
	for (let e of [-1, 1]) s.push(n.filter((e) => e[0] > 4).map(([t, n, r]) => Q(t, r + 1.1, e * (n - .3))));
	e.add(If(Ff(s), Af(vf, .9, .5)));
	let c = [];
	for (let [e, t, r] of n.filter((e, t) => e[0] > 4 && t % 2 == 0)) for (let n of [-1, 1]) c.push([Q(e, r, n * (t - .3)), Q(e, r + 1.1, n * (t - .3))]);
	e.add(If(Ff(c), Af(vf, .8, .4)));
	let l = [], u = 7.5, d = 3.6, f = 5.3, p = 1.75, m = [
		Q(-3, p, -3.6),
		Q(u, p, -3.6),
		Q(u, p, d),
		Q(-3, p, d)
	], h = [
		Q(-3, f, -3.6 + .3),
		Q(5.9, f, -3.6 + .3),
		Q(5.9, f, 3.3000000000000003),
		Q(-3, f, 3.3000000000000003)
	];
	m.concat([m[0]]), h.concat([h[0]]), new Dr().setFromPoints([]).dispose(), l.push(m.concat([m[0]]), h.concat([h[0]]));
	for (let e = 0; e < 4; e++) l.push([m[e], h[e]]);
	let g = (e) => [
		Q(-2.7, p + 3.55 * e, -3.45),
		Q(u - 1.6 * e - .1, p + 3.55 * e, -3.6 + .3 * e),
		Q(u - 1.6 * e - .1, p + 3.55 * e, d - .3 * e),
		Q(-2.7, p + 3.55 * e, 3.45)
	];
	l.push(g(.55), g(.9));
	for (let e = -2; e <= 2; e++) l.push([Q(6.6, 3.7025, e * 1.3), Q(6, 4.945, e * 1.2)]);
	e.add(If(Ff(l), Af(vf, 1.1, .8)));
	let _ = [m.map((e) => e.clone()), h.map((e) => e.clone())];
	e.add(new _i(Nf(_, !0), Tf(.05, .25)));
	let v = [];
	for (let [e, t] of [
		[[-.5, -.5], [-.25, -.25]],
		[[-.5, .5], [-.25, .25]],
		[[.5, -.5], [.25, -.25]],
		[[.5, .5], [.25, .25]]
	]) v.push([Q(2 + e[0], f, e[1]), Q(2 + t[0], 11.5, t[1])]);
	for (let e = 6.5; e < 11.5; e += 1.3) {
		let t = .5 - .25 * ((e - f) / 6.2);
		v.push([
			Q(2 - t, e, -t),
			Q(2 + t, e, -t),
			Q(2 + t, e, t),
			Q(2 - t, e, t),
			Q(2 - t, e, -t)
		]), v.push([Q(2 - t, e, -t), Q(2 + t, e + 1.3, t)]);
	}
	v.push([Q(2, 11.5, 0), Q(2, 13.6, 0)], [Q(.8, 12.6, .6), Q(.8, 15, .6)], [Q(.8, 12.6, -.6), Q(.8, 14.4, -.6)], [Q(2, 11.8, 0), Q(.8, 12.6, .6)], [Q(2, 11.8, 0), Q(.8, 12.6, -.6)]), e.add(If(Ff(v), Af(vf, 1, .7)));
	let y = new Tn();
	y.position.set(2, 12.2, 0), e.add(y), $(y, t.sensors, new Gi(.35, .3, 4.6), Q(0, 0, 0)), $(e, t.sensors, Gf(.25, .4), Q(2, 11.7, 0)), $(e, t.sensors, new yo(.45, 18, 12), Q(2.9, 10.6, 0)), $(e, t.sensors, Gf(.2, .5), Q(2, 13.8, 0));
	for (let n of [-1.7, 1.7]) {
		$(e, t.power, new Gi(3.6, 1.4, 1.3), Q(-12, -.35, n)), $(e, t.power, Gf(.45, .9), Q(-9.7, -.35, n), Kf);
		for (let r = 0; r < 4; r++) $(e, t.power, new Gi(.5, .3, .9), Q(-13.3 + r * .85, .5, n));
		$(e, t.motor, Gf(.11, 7, 10), Q(-17.1, -1.15, n), [
			0,
			0,
			Math.PI / 2 - .09
		]), $(e, t.fuel, new Gi(6, 1.2, 1.5), Q(-3.5, -.5, n * 1.65)), e.add(If(Ff([[
			Q(-20.2, -1.1, n),
			Q(-21.2, -1.1, n),
			Q(-21.2, -2.6, n),
			Q(-20.2, -2.6, n),
			Q(-20.2, -1.1, n)
		]]), Af(vf, 1, .7)));
	}
	$(e, t.batt, new Gi(2, .8, 2.2), Q(-7.6, -.7, 0)), $(e, t.fc, new Gi(1.4, .6, 1.2), Q(5, 2.4, 0)), $(e, t.payload, new Gi(2.4, 1, 3), Q(-15.5, 2.25, 0));
	let b = [];
	for (let t of [-1.7, 1.7]) {
		let n = Uf({
			r: .95,
			blades: 3,
			chord: .35,
			cruise: !0
		});
		n.position.set(-20.5, -1.75, t), e.add(n), b.push(n);
	}
	let x = [
		[
			Q(5, 2.4, 0),
			Q(2, 4.2, 0),
			Q(2, f, 0),
			Q(2, 10.4, .1)
		],
		[
			Q(4.3, 2.3, .3),
			Q(0, .6, .6),
			Q(-6.6, -.6, .3)
		],
		[
			Q(-8.6, -.6, .2),
			Q(-9.6, .2, 1),
			Q(-9.7, -.2, 1.7)
		],
		[
			Q(-8.6, -.6, -.2),
			Q(-9.6, .2, -1),
			Q(-9.7, -.2, -1.7)
		],
		[
			Q(4.3, 2.3, -.3),
			Q(-6, 1.6, -.4),
			Q(-14.3, 2, 0)
		]
	];
	for (let n of x) e.add(Hf(n, t.harness.wire, .06));
	return t.harness.meshes.push(Q(-2, .8, 0)), {
		root: e,
		sys: t,
		props: b,
		radar: y,
		wing: null,
		tail: null,
		extent: 21,
		height: 8,
		ground: -.15,
		kind: "sea",
		order: [
			"harness",
			"power",
			"fuel",
			"batt",
			"fc",
			"sensors",
			"payload"
		]
	};
}
var ip = {
	ravionics: tp,
	atlas: np,
	usv: rp
};
function ap(e, t, n) {
	let r = [], i = t / 2, a = t / 110;
	for (let t = 0; t <= 110; t++) {
		let n = -i + t * a;
		for (let o = 0; o < 110; o++) {
			let s = -i + o * a, c = s + a;
			r.push(n, 0, s, n, 0, c), (e !== "sea" || t % 2 == 0) && r.push(s, 0, n, c, 0, n);
		}
	}
	let o = new Dr();
	o.setAttribute("position", new Y(r, 3));
	let s = new zi(o, new Mo({
		uniforms: {
			uT: { value: 0 },
			uSize: { value: t },
			uAmp: { value: e === "sea" ? t * .006 : t * .035 },
			uFlow: { value: 1 },
			uShadow: { value: new G(0, 0, t * .08) },
			uC: { value: new J(e === "sea" ? "#5f8fb8" : "#7f8ea8") },
			uKind: { value: e === "sea" ? 0 : 1 },
			uRings: { value: 0 }
		},
		vertexShader: "uniform float uT; uniform float uSize; uniform float uAmp; uniform float uFlow; uniform float uKind; varying vec3 vP; varying float vH;\n      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }\n      float noise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);\n        return mix(mix(hash(i), hash(i+vec2(1,0)), u.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y); }\n      float fbm(vec2 p){ float s = 0.0, a = 0.5; for(int i=0;i<4;i++){ s += a*noise(p); p *= 2.03; a *= 0.5; } return s; }\n      void main(){ vec3 p = position; vec2 q = p.xz / uSize;\n        float hgt;\n        if (uKind < 0.5) { vec2 r = q * 9.0 + vec2(uT * 0.18 * uFlow, 0.0);\n          hgt = sin(r.x * 3.1 + r.y * 0.7) * 0.55 + sin(r.x * 1.3 - r.y * 1.9 + uT * 0.6) * 0.35 + (fbm(r * 1.7 + uT * 0.05) - 0.5) * 0.9; }\n        else { vec2 r = q * 4.0 + vec2(uT * 0.035 * uFlow, 0.0);\n          float ridge = 1.0 - abs(fbm(r) * 2.0 - 1.0); hgt = ridge * ridge * 1.6 + fbm(r * 2.6) * 0.5 - 0.9;\n          hgt *= smoothstep(0.05, 0.45, length(q)); }\n        p.y += hgt * uAmp; vH = hgt; vP = p; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }",
		fragmentShader: "uniform vec3 uC; uniform float uSize; uniform vec3 uShadow; uniform float uT; uniform float uRings; varying vec3 vP; varying float vH;\n      void main(){ vec2 q = vP.xz / uSize; float r = length(q * vec2(1.0, 1.25));\n        float a = (1.0 - smoothstep(0.12, 0.5, r)) * (0.32 + 0.22 * clamp(vH, -1.0, 1.0));\n        float d = length(vP.xz - uShadow.xy);\n        a *= mix(0.12, 1.0, smoothstep(uShadow.z * 0.25, uShadow.z, d));\n        vec3 c = uC;\n        if (uRings > 0.0) { float w = fract(d / (uShadow.z * 0.9) - uT * 0.9); float ring = smoothstep(0.0, 0.05, w) * (1.0 - smoothstep(0.05, 0.22, w)) * (1.0 - smoothstep(uShadow.z * 0.6, uShadow.z * 2.4, d));\n          c += vec3(1.0, 0.7, 0.3) * ring * uRings * 1.6; a += ring * uRings * 0.35; }\n        gl_FragColor = vec4(c * a, 1.0); }",
		transparent: !0,
		depthWrite: !1,
		blending: 2
	}));
	return s.position.y = n, s.renderOrder = 0, s;
}
function op(e, t) {
	let n = [], r = [];
	for (let i of [-1, 1]) for (let a of [
		0,
		1,
		2
	]) for (let o = 0; o < 60; o++) {
		let s = o / 60, c = (o + 1) / 60, l = (n) => [
			-19 - n * e,
			t,
			i * (4.6 + n * e * (.32 + a * .06) + a * .4)
		];
		n.push(...l(s), ...l(c)), r.push(s, a, c, a);
	}
	for (let i of [
		0,
		1,
		2,
		3
	]) for (let a = 0; a < 60; a++) {
		let o = a / 60, s = (a + 1) / 60, c = (i - 1.5) * 1.1;
		n.push(-20 - o * e * .8, t, c * (1 + o * 2), -20 - s * e * .8, t, c * (1 + s * 2)), r.push(o, 3 + i, s, 3 + i);
	}
	let i = new Dr();
	return i.setAttribute("position", new Y(n, 3)), i.setAttribute("uv", new Y(r, 2)), new zi(i, new Mo({
		uniforms: { uT: { value: 0 } },
		vertexShader: "varying vec2 vUv; uniform float uT; void main(){ vUv = uv; vec3 p = position; p.y += sin(p.x * 0.5 + uT * 2.0 + uv.y) * 0.15; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }",
		fragmentShader: "varying vec2 vUv; uniform float uT; void main(){ float f = vUv.x; float dash = 0.55 + 0.45 * sin(f * 60.0 - uT * 6.0 + vUv.y * 2.0);\n      float a = (1.0 - f) * (1.0 - f) * dash * (vUv.y > 2.5 ? 0.55 : 0.8); gl_FragColor = vec4(vec3(0.75, 0.88, 1.0) * a, 1.0); }",
		transparent: !0,
		depthWrite: !1,
		blending: 2
	}));
}
var sp = (e) => 1 - (1 - Math.min(1, Math.max(0, e))) ** 3;
function cp(e, t = {}) {
	let n = {
		model: "ravionics",
		mode: "orbit",
		tilt: 0,
		fold: 0,
		yaw: .7,
		pitch: .28,
		zoom: 1,
		lit: "all",
		still: !1,
		cycle: !1,
		ground: !0,
		...t
	}, r = ip[n.model](), i = new Pn();
	if (i.background = Cf, i.add(r.root), r.lights) {
		i.add(new is(10467544, 329482, 1.1));
		let e = new ys(16767400, 2.4);
		e.position.set(8, 14, 10), i.add(e);
		let t = new ys(8368383, 1.6);
		t.position.set(-12, 6, -10), i.add(t);
	}
	let a = r.extent * 9, o = n.ground ? ap(r.kind, a, r.ground) : null;
	o && i.add(o);
	let s = r.kind === "sea" ? op(r.extent * 2.2, .05) : null;
	s && i.add(s);
	let c = document.createElement("canvas");
	c.className = "v3d-canvas", c.setAttribute("aria-hidden", "true"), e.appendChild(c);
	let l = new cd({
		canvas: c,
		antialias: !1,
		powerPreference: "high-performance",
		preserveDrawingBuffer: !!n.preserve
	});
	l.setClearColor(Cf, 1);
	let u = new gs(28, 1, .5, r.extent * 40), d = new qt(4, 4, {
		type: v,
		samples: 4
	}), f = new _d(l, d);
	f.addPass(new vd(i, u));
	let p = new bd(new W(4, 4), ...r.bloom || [
		.58,
		.12,
		.5
	]);
	f.addPass(p), f.addPass(new Sd());
	let m = {
		tilt: n.tilt,
		fold: n.fold,
		yaw: n.yaw,
		pitch: n.pitch,
		zoom: n.zoom,
		lit: n.lit,
		dx: 0,
		dy: 0,
		glow: 1
	}, h = 1, g = 1, _ = 1, y = () => {
		let t = e.getBoundingClientRect();
		h = Math.max(1, Math.round(t.width)), g = Math.max(1, Math.round(t.height)), _ = Math.min(window.devicePixelRatio || 1, h < 700 ? 2 : 1.6), l.setPixelRatio(_), l.setSize(h, g, !1), f.setPixelRatio(_), f.setSize(h, g), p.resolution.set(h * _ * .5, g * _ * .5), p.strength = (r.bloom || [.58])[0] * (h < 700 ? .3 : 1), u.aspect = h / g, u.updateProjectionMatrix();
		let n = h < 700;
		for (let e of kf) e.resolution.set(h * _, g * _), e.linewidth = e.userData.w * _ * (n ? .7 : 1), e.userData.o !== void 0 && !e.userData.sys && (e.opacity = e.userData.o * (n ? .5 : 1));
	};
	y();
	let b = new ResizeObserver(y);
	b.observe(e);
	let x = (e) => {
		for (let [t, n] of Object.entries(r.sys)) n.target = e === "all" || Array.isArray(e) && e.includes(t) ? 1 : 0;
	};
	x(m.lit);
	for (let e of Object.values(r.sys)) e.cur = e.target;
	let S = new G(), C = (e) => {
		let t = r.extent * 1.12, n = u.fov * Math.PI / 180, i = 2 * Math.atan(Math.tan(n / 2) * u.aspect), a = t / Math.tan(i / 2), o = Math.max(r.height, r.extent * .42) / Math.tan(n / 2), s = Math.max(a, o) / m.zoom, c = m.yaw, l = m.pitch, d = Q(0, r.kind === "sea" ? 3 : 0, 0);
		u.position.set(d.x + Math.cos(l) * Math.cos(c) * s, d.y + Math.sin(l) * s, d.z + Math.cos(l) * Math.sin(c) * s), u.lookAt(d), u.setViewOffset(h, g, -m.dx * h, -m.dy * g, h, g);
	}, w = performance.now(), T = w, E = !1, D = 0, O = (e) => {
		let t = (e - w) / 1e3, i = Math.min(.05, (e - T) / 1e3);
		if (T = e, n.mode !== "orbit" && n.mode !== "systems" || n.still || (m.yaw = n.yaw + Math.sin(t * .16) * .5), n.cycle && !n.still) {
			let e = t % 16 / 16, n = e < .2 ? 1 : e < .42 ? 1 - sp((e - .2) / .22) : e < .7 ? 0 : e < .9 ? sp((e - .7) / .2) : 1;
			m.tilt = 90 * n, m.fold = +(n < .08);
		}
		let a = m.tilt * Math.PI / 180;
		r.wing && (r.wing.rotation.z = a), r.tail && (r.tail.rotation.z = a);
		for (let e of r.props) {
			let t = e.userData, r = !t.cruise && m.fold > .5;
			t.foldK = (t.foldK ?? +!!r) + (+!!r - (t.foldK ?? 0)) * Math.min(1, i * 4);
			let a = n.still ? 0 : (1 - t.foldK) * 26;
			if (t.spin.rotation.x += a * i, t.foldK > .5 && (t.spin.rotation.x += (Math.round(t.spin.rotation.x / Math.PI) * Math.PI - t.spin.rotation.x) * Math.min(1, i * 6)), t.vsp) t.blades.forEach((e, n) => e.rotation.y = (n ? 1 : -1) * t.foldK * 1.45);
			else for (let e of t.blades) e.rotation.z = t.foldK * 1.4;
			t.disc.material.uniforms.uFade.value = 1 - t.foldK, t.ring.material.opacity = (t.ringO ?? .35) * (1 - t.foldK);
		}
		r.radar && !n.still && (r.radar.rotation.y = t * 1.6), r.kind === "sea" && !n.still ? (r.root.rotation.z = Math.sin(t * .7) * .012, r.root.rotation.x = Math.sin(t * .9 + 1) * .02, r.root.position.y = Math.sin(t * 1.1) * .12) : n.still || (r.root.position.y = Math.sin(t * .8) * r.extent * .008);
		for (let e of Object.values(r.sys)) e.cur += (e.target - e.cur) * Math.min(1, i * 3.5), e.mat.uniforms.uLit.value = e.cur, e.mat.uniforms.uPulse.value = n.still ? 0 : .5 + .5 * Math.sin(t * 2.2), e.edge.opacity = .18 + .8 * e.cur, e.wire.uniforms.uT.value = t, e.wire.uniforms.uOn.value = e.cur;
		o && (o.material.uniforms.uT.value = n.still ? 3 : t, o.material.uniforms.uShadow.value.set(r.root.position.x, 0, r.extent * (r.kind === "sea" ? .75 : .65)), o.material.uniforms.uRings.value = r.kind === "air" ? Math.max(0, (m.tilt - 55) / 35) : 0, o.material.uniforms.uFlow.value = r.kind === "air" ? 1 + (1 - m.tilt / 90) * 2.5 : 1), s && (s.material.uniforms.uT.value = t), C(t), f.render(i), E && !n.still && (D = requestAnimationFrame(O));
	}, k = {
		el: e,
		model: r,
		set(e) {
			Object.assign(m, e), e.lit !== void 0 && x(e.lit), E || O(performance.now());
		},
		start() {
			E || n.still || (E = !0, T = performance.now(), D = requestAnimationFrame(O));
		},
		stop() {
			E = !1, cancelAnimationFrame(D);
		},
		draw() {
			O(performance.now());
		},
		screen(e) {
			let t = r.sys[e];
			if (!t || !t.meshes.length) return null;
			S.set(0, 0, 0);
			for (let e of t.meshes) S.add(e);
			S.divideScalar(t.meshes.length), r.root.updateMatrixWorld(!0);
			let n = S.clone().applyMatrix4(r.root.matrixWorld).project(u);
			return [(n.x + 1) / 2 * h, (1 - n.y) / 2 * g];
		},
		dispose() {
			k.stop(), b.disconnect(), l.dispose(), d.dispose(), c.remove();
		}
	};
	return O(performance.now()), k;
}
function lp(e, t = "#ffd58a") {
	let n = document.createElement("canvas"), r = n.getContext("2d"), i = "600 30px 'Hanken Grotesk', system-ui, sans-serif";
	r.font = i;
	let a = Math.ceil(r.measureText(e).width) + 28;
	n.width = a, n.height = 46, r.font = i, r.fillStyle = "rgba(5,7,10,0.82)", r.beginPath(), r.roundRect(0, 0, a, 46, 10), r.fill(), r.fillStyle = t, r.textBaseline = "middle", r.fillText(e, 14, 24);
	let o = new Vi(n);
	o.colorSpace = Le;
	let s = new Qr(new Rr({
		map: o,
		depthTest: !1,
		transparent: !0,
		sizeAttenuation: !1
	}));
	return s.center.set(.5, -.35), s.userData = {
		w: a,
		h: 46,
		text: e
	}, s.renderOrder = 10, s;
}
function up(e, t) {
	let n = nf, r = (t.box.s + t.box.n) / 2, i = (t.box.w + t.box.e) / 2, a = 1 / 100, o = 111320 * Math.cos(r * Math.PI / 180), s = (e, t, n = 0) => Q((t - i) * o * a, n * .3048 * a * 3, -(e - r) * 111320 * a), c = new Pn();
	c.background = Cf, c.fog = new Nn(Cf, 500, 1100);
	let l = document.createElement("canvas");
	l.className = "v3d-canvas", l.setAttribute("aria-hidden", "true"), e.appendChild(l);
	let u = new cd({
		canvas: l,
		antialias: !1
	});
	u.setClearColor(Cf, 1);
	let d = new gs(38, 1, 1, 4e3), f = new qt(4, 4, {
		type: v,
		samples: 4
	}), p = new _d(u, f);
	p.addPass(new vd(c, d));
	let m = new bd(new W(4, 4), .45, .3, .55);
	p.addPass(m), p.addPass(new Sd());
	let h = new Ys(1400, 70, 2767440, 1450028);
	h.material.transparent = !0, h.material.opacity = .55, c.add(h);
	let g = [];
	for (let e of t.coast) for (let t = 0; t < e.length - 1; t++) {
		let n = s(e[t][0], e[t][1]), r = s(e[t + 1][0], e[t + 1][1]);
		g.push(n.x, .2, n.z, r.x, .2, r.z);
	}
	c.add(If(g, Af(new J("#cfe6ff"), 1.6, 1)));
	let _ = t.mission.fence.map(([e, t]) => s(e, t)), y = 1500 * .3048 * a * 3, b = [];
	for (let e = 0; e < _.length; e++) {
		let t = _[e], n = _[(e + 1) % _.length];
		b.push(t.x, 0, t.z, n.x, 0, n.z, n.x, y, n.z, t.x, 0, t.z, n.x, y, n.z, t.x, y, t.z);
	}
	let x = new Dr();
	x.setAttribute("position", new Y(b, 3)), c.add(new _i(x, new ai({
		color: 16734794,
		transparent: !0,
		opacity: .09,
		side: 2,
		depthWrite: !1,
		blending: 2
	})));
	let S = [];
	for (let e = 0; e < _.length; e++) {
		let t = _[e], n = _[(e + 1) % _.length];
		S.push(t.x, y, t.z, n.x, y, n.z, t.x, .3, t.z, n.x, .3, n.z);
	}
	c.add(If(S, Af(new J("#ff6b57"), 1.3, .9)));
	let C = t.mission.orbit, w = s(C.c[0], C.c[1], C.ft), T = C.r * a, E = [];
	for (let e = 0; e < 96; e++) {
		let t = e / 96 * _f, n = (e + 1) / 96 * _f;
		E.push(w.x + Math.cos(t) * T, w.y, w.z + Math.sin(t) * T, w.x + Math.cos(n) * T, w.y, w.z + Math.sin(n) * T);
	}
	c.add(If(E, Af(yf, 1.4, 1)));
	let D = (e, t, n) => {
		let r = [], i = n ? e.length : e.length - 1;
		for (let t = 0; t < i; t++) {
			let n = e[t], i = e[(t + 1) % e.length], a = n.distanceTo(i), o = Math.max(2, Math.round(a / 4));
			for (let e = 0; e < o; e += 2) {
				let t = n.clone().lerp(i, e / o), a = n.clone().lerp(i, Math.min(1, (e + 1) / o));
				r.push(t.x, .4, t.z, a.x, .4, a.z);
			}
		}
		c.add(If(r, Af(new J(t), 1.2, .95)));
	};
	D(t.mission.patrol.map(([e, t]) => s(e, t)), "#a9dcff", !0), D([s(...t.mission.depot), s(...t.mission.site)], "#ff9a4a", !1);
	for (let [e, n, r, i] of [
		[
			t.mission.home,
			"Home base",
			"#f1f3f6",
			10
		],
		[
			t.mission.port,
			"Port",
			"#a9dcff",
			26
		],
		[
			t.mission.depot,
			"Atlas depot",
			"#ff9a4a",
			42
		]
	]) {
		let t = s(e[0], e[1]);
		c.add(If([
			t.x,
			0,
			t.z,
			t.x,
			i,
			t.z
		], Af(new J(r), 1.2, .8)));
		let a = lp(n, r);
		a.position.set(t.x, i, t.z), c.add(a);
	}
	let O = {
		rav: "#ffc56e",
		usv: "#a9dcff",
		atl: "#ff9a4a"
	}, k = /* @__PURE__ */ new Map(), A = (e, t) => {
		let n = new Tn(), r = new J(O[t]), i = t === "usv" ? new Ji(2.2, 6, 4) : new Ji(2.4, 7, 3);
		i.rotateX(Math.PI / 2);
		let a = new _i(i, new ai({ color: r }));
		n.add(a);
		let o = If([
			0,
			0,
			0,
			0,
			-1,
			0
		], Af(r, 1, .5));
		n.add(o);
		let s = lp(e, O[t]);
		s.position.set(0, 3, 0), n.add(s), c.add(n);
		let l = If([
			0,
			0,
			0,
			0,
			0,
			0
		], Af(r, 1.4, .8));
		c.add(l);
		let u = {
			g: n,
			body: a,
			stem: o,
			label: s,
			trail: l,
			pts: [],
			kind: t,
			lastText: e
		};
		return k.set(e, u), u;
	}, j = t.frames, ee = j[j.length - 1].t, te = 1, M = 1, N = 1, P = () => {
		let t = e.getBoundingClientRect();
		te = Math.max(1, Math.round(t.width)), M = Math.max(1, Math.round(t.height)), N = Math.min(window.devicePixelRatio || 1, 1.6), u.setPixelRatio(N), u.setSize(te, M, !1), p.setPixelRatio(N), p.setSize(te, M), m.resolution.set(te * N * .5, M * N * .5), d.aspect = te / M, d.updateProjectionMatrix();
		for (let e of kf) e.resolution.set(te * N, M * N), e.linewidth = e.userData.w * N;
		for (let e of k.values()) ne(e.label);
		c.traverse((e) => {
			e.isSprite && ne(e);
		});
	}, ne = (e) => {
		let t = 44 * Math.tan(d.fov * Math.PI / 360) / M;
		e.scale.set(t * (e.userData.w / e.userData.h), t, 1);
	};
	P();
	let F = new ResizeObserver(P);
	F.observe(e);
	let re = s(32.655, -117.36);
	d.position.set(re.x - 170, 230, re.z + 300);
	let ie = new n(d, l);
	ie.target.copy(re), ie.enableDamping = !0, ie.dampingFactor = .08, ie.minDistance = 60, ie.maxDistance = 900, ie.maxPolarAngle = Math.PI * .47, ie.autoRotate = !0, ie.autoRotateSpeed = .35, ie.addEventListener("start", () => {
		ie.autoRotate = !1, e.classList.add("touched");
	}), ie.update();
	let ae = (e, t, n) => e + (t - e) * n, oe = (e, t, n) => e + ((t - e + 540) % 360 - 180) * n, se = 0, I = !1, ce = performance.now(), le = (e) => {
		let t = ((e - ce) / 1e3 % ee + ee) % ee, n = j.findIndex((e) => e.t > t);
		n <= 0 && (n = 1);
		let r = j[n - 1], i = j[n], a = Math.min(1, Math.max(0, (t - r.t) / Math.max(.01, i.t - r.t))), o = new Map(i.v.map((e) => [e[0], e]));
		for (let e of r.v) {
			let n = o.get(e[0]) || e, r = k.get(e[0]) || A(e[0], e[1]), i = e[1] === "usv" ? e[6] !== "in_port" : e[4] > 0 || n[4] > 0;
			if (r.g.visible = i, r.trail.visible = i, !i) {
				r.pts.length = 0;
				continue;
			}
			let c = s(ae(e[2], n[2], a), ae(e[3], n[3], a), ae(e[4], n[4], a));
			r.g.position.copy(c), r.g.rotation.y = -((oe(e[5], n[5], a) - 90) * Math.PI) / 180, r.stem.geometry.setPositions([
				0,
				0,
				0,
				0,
				-c.y,
				0
			]);
			let l = `${e[0]} · ${e[6].replace(/_/g, " ")}${e[1] !== "usv" && e[4] ? ` · ${e[4]} ft` : ""}`;
			l !== r.lastText && (r.g.remove(r.label), r.label = lp(l, O[e[1]]), r.label.position.set(0, 4, 0), r.g.add(r.label), ne(r.label), r.lastText = l);
			let u = r.pts[r.pts.length - 1];
			if ((!u || u.distanceTo(c) > 1.5) && (r.pts.push(c.clone()), r.pts.length > 160 && r.pts.shift()), t < .6 && (r.pts.length = 0), r.pts.length > 1) {
				let e = [];
				for (let t = 0; t < r.pts.length - 1; t++) e.push(r.pts[t].x, r.pts[t].y, r.pts[t].z, r.pts[t + 1].x, r.pts[t + 1].y, r.pts[t + 1].z);
				r.trail.geometry.setPositions(e);
			}
		}
		ie.update(), p.render(), I && (se = requestAnimationFrame(le));
	};
	return le(performance.now()), {
		start() {
			I || (I = !0, se = requestAnimationFrame(le));
		},
		stop() {
			I = !1, cancelAnimationFrame(se);
		},
		dispose() {
			I = !1, cancelAnimationFrame(se), F.disconnect(), ie.dispose(), u.dispose(), f.dispose(), l.remove();
		}
	};
}
export { cp as mount, up as mountFleet };
