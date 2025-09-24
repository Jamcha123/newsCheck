(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="180",lp=0,ch=1,hp=2,sd=1,up=2,Xn=3,bi=0,qt=1,mn=2,Ti=0,br=1,lh=2,hh=3,uh=4,dp=5,Xi=100,fp=101,pp=102,mp=103,gp=104,_p=200,vp=201,Ep=202,Sp=203,Qa=204,ec=205,yp=206,xp=207,Tp=208,Mp=209,Ap=210,wp=211,bp=212,Rp=213,Cp=214,tc=0,nc=1,ic=2,Lr=3,rc=4,sc=5,oc=6,ac=7,od=0,Ip=1,Pp=2,Mi=0,Dp=1,Lp=2,Np=3,Up=4,Op=5,Fp=6,kp=7,ad=300,Nr=301,Ur=302,cc=303,lc=304,jo=306,hc=1e3,ji=1001,uc=1002,yn=1003,Bp=1004,Ys=1005,bn=1006,da=1007,Yi=1008,ei=1009,cd=1010,ld=1011,ps=1012,el=1013,er=1014,Yn=1015,As=1016,tl=1017,nl=1018,ms=1020,hd=35902,ud=35899,dd=1021,fd=1022,_n=1023,gs=1026,_s=1027,pd=1028,il=1029,md=1030,rl=1031,sl=1033,Ao=33776,wo=33777,bo=33778,Ro=33779,dc=35840,fc=35841,pc=35842,mc=35843,gc=36196,_c=37492,vc=37496,Ec=37808,Sc=37809,yc=37810,xc=37811,Tc=37812,Mc=37813,Ac=37814,wc=37815,bc=37816,Rc=37817,Cc=37818,Ic=37819,Pc=37820,Dc=37821,Lc=36492,Nc=36494,Uc=36495,Oc=36283,Fc=36284,kc=36285,Bc=36286,Vp=3200,zp=3201,Hp=0,Gp=1,Ei="",on="srgb",Or="srgb-linear",Uo="linear",dt="srgb",hr=7680,dh=519,Wp=512,Xp=513,qp=514,gd=515,$p=516,jp=517,Yp=518,Kp=519,fh=35044,ph="300 es",Rn=2e3,Oo=2001;class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mh=1234567;const as=Math.PI/180,vs=180/Math.PI;function Vr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function ol(n,e){return(n%e+e)%e}function Jp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Zp(n,e,t){return n!==e?(t-n)/(e-n):0}function cs(n,e,t){return(1-t)*n+t*e}function Qp(n,e,t,i){return cs(n,e,1-Math.exp(-t*i))}function em(n,e=1){return e-Math.abs(ol(n,e*2)-e)}function tm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function nm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function im(n,e){return n+Math.floor(Math.random()*(e-n+1))}function rm(n,e){return n+Math.random()*(e-n)}function sm(n){return n*(.5-Math.random())}function om(n){n!==void 0&&(mh=n);let e=mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function am(n){return n*as}function cm(n){return n*vs}function lm(n){return(n&n-1)===0&&n!==0}function hm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function um(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function dm(n,e,t,i,r){const s=Math.cos,a=Math.sin,c=s(t/2),l=a(t/2),h=s((e+i)/2),p=a((e+i)/2),m=s((e-i)/2),d=a((e-i)/2),S=s((i-e)/2),A=a((i-e)/2);switch(r){case"XYX":n.set(c*p,l*m,l*d,c*h);break;case"YZY":n.set(l*d,c*p,l*m,c*h);break;case"ZXZ":n.set(l*m,l*d,c*p,c*h);break;case"XZX":n.set(c*p,l*A,l*S,c*h);break;case"YXY":n.set(l*S,c*p,l*A,c*h);break;case"ZYZ":n.set(l*A,l*S,c*p,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const fa={DEG2RAD:as,RAD2DEG:vs,generateUUID:Vr,clamp:Je,euclideanModulo:ol,mapLinear:Jp,inverseLerp:Zp,lerp:cs,damp:Qp,pingpong:em,smoothstep:tm,smootherstep:nm,randInt:im,randFloat:rm,randFloatSpread:sm,seededRandom:om,degToRad:am,radToDeg:cm,isPowerOfTwo:lm,ceilPowerOfTwo:hm,floorPowerOfTwo:um,setQuaternionFromProperEuler:dm,normalize:Ht,denormalize:Mr};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ws{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,c){let l=i[r+0],h=i[r+1],p=i[r+2],m=i[r+3];const d=s[a+0],S=s[a+1],A=s[a+2],C=s[a+3];if(c===0){e[t+0]=l,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(c===1){e[t+0]=d,e[t+1]=S,e[t+2]=A,e[t+3]=C;return}if(m!==C||l!==d||h!==S||p!==A){let E=1-c;const f=l*d+h*S+p*A+m*C,N=f>=0?1:-1,L=1-f*f;if(L>Number.EPSILON){const k=Math.sqrt(L),O=Math.atan2(k,f*N);E=Math.sin(E*O)/k,c=Math.sin(c*O)/k}const P=c*N;if(l=l*E+d*P,h=h*E+S*P,p=p*E+A*P,m=m*E+C*P,E===1-c){const k=1/Math.sqrt(l*l+h*h+p*p+m*m);l*=k,h*=k,p*=k,m*=k}}e[t]=l,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,r,s,a){const c=i[r],l=i[r+1],h=i[r+2],p=i[r+3],m=s[a],d=s[a+1],S=s[a+2],A=s[a+3];return e[t]=c*A+p*m+l*S-h*d,e[t+1]=l*A+p*d+h*m-c*S,e[t+2]=h*A+p*S+c*d-l*m,e[t+3]=p*A-c*m-l*d-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,c=Math.cos,l=Math.sin,h=c(i/2),p=c(r/2),m=c(s/2),d=l(i/2),S=l(r/2),A=l(s/2);switch(a){case"XYZ":this._x=d*p*m+h*S*A,this._y=h*S*m-d*p*A,this._z=h*p*A+d*S*m,this._w=h*p*m-d*S*A;break;case"YXZ":this._x=d*p*m+h*S*A,this._y=h*S*m-d*p*A,this._z=h*p*A-d*S*m,this._w=h*p*m+d*S*A;break;case"ZXY":this._x=d*p*m-h*S*A,this._y=h*S*m+d*p*A,this._z=h*p*A+d*S*m,this._w=h*p*m-d*S*A;break;case"ZYX":this._x=d*p*m-h*S*A,this._y=h*S*m+d*p*A,this._z=h*p*A-d*S*m,this._w=h*p*m+d*S*A;break;case"YZX":this._x=d*p*m+h*S*A,this._y=h*S*m+d*p*A,this._z=h*p*A-d*S*m,this._w=h*p*m-d*S*A;break;case"XZY":this._x=d*p*m-h*S*A,this._y=h*S*m-d*p*A,this._z=h*p*A+d*S*m,this._w=h*p*m+d*S*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],c=t[5],l=t[9],h=t[2],p=t[6],m=t[10],d=i+c+m;if(d>0){const S=.5/Math.sqrt(d+1);this._w=.25/S,this._x=(p-l)*S,this._y=(s-h)*S,this._z=(a-r)*S}else if(i>c&&i>m){const S=2*Math.sqrt(1+i-c-m);this._w=(p-l)/S,this._x=.25*S,this._y=(r+a)/S,this._z=(s+h)/S}else if(c>m){const S=2*Math.sqrt(1+c-i-m);this._w=(s-h)/S,this._x=(r+a)/S,this._y=.25*S,this._z=(l+p)/S}else{const S=2*Math.sqrt(1+m-i-c);this._w=(a-r)/S,this._x=(s+h)/S,this._y=(l+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,c=t._x,l=t._y,h=t._z,p=t._w;return this._x=i*p+a*c+r*h-s*l,this._y=r*p+a*l+s*c-i*h,this._z=s*p+a*h+i*l-r*c,this._w=a*p-i*c-r*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let c=a*e._w+i*e._x+r*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-c*c;if(l<=Number.EPSILON){const S=1-t;return this._w=S*a+t*this._w,this._x=S*i+t*this._x,this._y=S*r+t*this._y,this._z=S*s+t*this._z,this.normalize(),this}const h=Math.sqrt(l),p=Math.atan2(h,c),m=Math.sin((1-t)*p)/h,d=Math.sin(t*p)/h;return this._w=a*m+this._w*d,this._x=i*m+this._x*d,this._y=r*m+this._y*d,this._z=s*m+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,c=e.z,l=e.w,h=2*(a*r-c*i),p=2*(c*t-s*r),m=2*(s*i-a*t);return this.x=t+l*h+a*m-c*p,this.y=i+l*p+c*h-s*m,this.z=r+l*m+s*p-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,c=t.y,l=t.z;return this.x=r*l-s*c,this.y=s*a-i*l,this.z=i*c-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pa.copy(this).projectOnVector(e),this.sub(pa)}reflect(e){return this.sub(pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pa=new W,gh=new ws;class We{constructor(e,t,i,r,s,a,c,l,h){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,c,l,h)}set(e,t,i,r,s,a,c,l,h){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=s,p[5]=l,p[6]=i,p[7]=a,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],c=i[3],l=i[6],h=i[1],p=i[4],m=i[7],d=i[2],S=i[5],A=i[8],C=r[0],E=r[3],f=r[6],N=r[1],L=r[4],P=r[7],k=r[2],O=r[5],M=r[8];return s[0]=a*C+c*N+l*k,s[3]=a*E+c*L+l*O,s[6]=a*f+c*P+l*M,s[1]=h*C+p*N+m*k,s[4]=h*E+p*L+m*O,s[7]=h*f+p*P+m*M,s[2]=d*C+S*N+A*k,s[5]=d*E+S*L+A*O,s[8]=d*f+S*P+A*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],l=e[6],h=e[7],p=e[8];return t*a*p-t*c*h-i*s*p+i*c*l+r*s*h-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],l=e[6],h=e[7],p=e[8],m=p*a-c*h,d=c*l-p*s,S=h*s-a*l,A=t*m+i*d+r*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=m*C,e[1]=(r*h-p*i)*C,e[2]=(c*i-r*a)*C,e[3]=d*C,e[4]=(p*t-r*l)*C,e[5]=(r*s-c*t)*C,e[6]=S*C,e[7]=(i*l-h*t)*C,e[8]=(a*t-i*s)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,c){const l=Math.cos(s),h=Math.sin(s);return this.set(i*l,i*h,-i*(l*a+h*c)+a+e,-r*h,r*l,-r*(-h*a+l*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new We;function _d(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fm(){const n=Fo("canvas");return n.style.display="block",n}const _h={};function Es(n){n in _h||(_h[n]=!0,console.warn(n))}function pm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const vh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mm(){const n={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=Rr(r.r),r.g=Rr(r.g),r.b=Rr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ei?Uo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Es("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Es("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Or]:{primaries:e,whitePoint:i,transfer:Uo,toXYZ:vh,fromXYZ:Eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:vh,fromXYZ:Eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}const nt=mm();function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ur;class gm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ur===void 0&&(ur=Fo("canvas")),ur.width=e.width,ur.height=e.height;const r=ur.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ur}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Zn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zn(t[i]/255)*255):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _m=0;class al{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,c=r.length;a<c;a++)r[a].isDataTexture?s.push(ga(r[a].image)):s.push(ga(r[a]))}else s=ga(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vm=0;const _a=new W;class $t extends Br{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=ji,r=ji,s=bn,a=Yi,c=_n,l=ei,h=$t.DEFAULT_ANISOTROPY,p=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Vr(),this.name="",this.source=new al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hc:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hc:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=ad;$t.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,h=l[0],p=l[4],m=l[8],d=l[1],S=l[5],A=l[9],C=l[2],E=l[6],f=l[10];if(Math.abs(p-d)<.01&&Math.abs(m-C)<.01&&Math.abs(A-E)<.01){if(Math.abs(p+d)<.1&&Math.abs(m+C)<.1&&Math.abs(A+E)<.1&&Math.abs(h+S+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,P=(S+1)/2,k=(f+1)/2,O=(p+d)/4,M=(m+C)/4,y=(A+E)/4;return L>P&&L>k?L<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(L),r=O/i,s=M/i):P>k?P<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(P),i=O/r,s=y/r):k<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(k),i=M/s,r=y/s),this.set(i,r,s,t),this}let N=Math.sqrt((E-A)*(E-A)+(m-C)*(m-C)+(d-p)*(d-p));return Math.abs(N)<.001&&(N=1),this.x=(E-A)/N,this.y=(m-C)/N,this.z=(d-p)/N,this.w=Math.acos((h+S+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Em extends Br{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new $t(r);this.textures=[];const a=i.count;for(let c=0;c<a;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new al(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends Em{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vd extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sm extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=s.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(s,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ks.copy(i.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Js.subVectors(this.max,es),dr.subVectors(e.a,es),fr.subVectors(e.b,es),pr.subVectors(e.c,es),di.subVectors(fr,dr),fi.subVectors(pr,fr),Oi.subVectors(dr,pr);let t=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Oi.z,Oi.y,di.z,0,-di.x,fi.z,0,-fi.x,Oi.z,0,-Oi.x,-di.y,di.x,0,-fi.y,fi.x,0,-Oi.y,Oi.x,0];return!va(t,dr,fr,pr,Js)||(t=[1,0,0,0,1,0,0,0,1],!va(t,dr,fr,pr,Js))?!1:(Zs.crossVectors(di,fi),t=[Zs.x,Zs.y,Zs.z],va(t,dr,fr,pr,Js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new W,new W,new W,new W,new W,new W,new W,new W],un=new W,Ks=new bs,dr=new W,fr=new W,pr=new W,di=new W,fi=new W,Oi=new W,es=new W,Js=new W,Zs=new W,Fi=new W;function va(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Fi.fromArray(n,s);const c=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),l=e.dot(Fi),h=t.dot(Fi),p=i.dot(Fi);if(Math.max(-Math.max(l,h,p),Math.min(l,h,p))>c)return!1}return!0}const ym=new bs,ts=new W,Ea=new W;class Yo{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ym.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ts,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(Ea)),this.expandByPoint(ts.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zn=new W,Sa=new W,Qs=new W,pi=new W,ya=new W,eo=new W,xa=new W;class Ed{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Sa.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Sa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qs),c=pi.dot(this.direction),l=-pi.dot(Qs),h=pi.lengthSq(),p=Math.abs(1-a*a);let m,d,S,A;if(p>0)if(m=a*l-c,d=a*c-l,A=s*p,m>=0)if(d>=-A)if(d<=A){const C=1/p;m*=C,d*=C,S=m*(m+a*d+2*c)+d*(a*m+d+2*l)+h}else d=s,m=Math.max(0,-(a*d+c)),S=-m*m+d*(d+2*l)+h;else d=-s,m=Math.max(0,-(a*d+c)),S=-m*m+d*(d+2*l)+h;else d<=-A?(m=Math.max(0,-(-a*s+c)),d=m>0?-s:Math.min(Math.max(-s,-l),s),S=-m*m+d*(d+2*l)+h):d<=A?(m=0,d=Math.min(Math.max(-s,-l),s),S=d*(d+2*l)+h):(m=Math.max(0,-(a*s+c)),d=m>0?s:Math.min(Math.max(-s,-l),s),S=-m*m+d*(d+2*l)+h);else d=a>0?-s:s,m=Math.max(0,-(a*d+c)),S=-m*m+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Sa).addScaledVector(Qs,d),S}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),c=i-a,l=i+a;return l<0?null:c<0?this.at(l,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,c,l;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,d=this.origin;return h>=0?(i=(e.min.x-d.x)*h,r=(e.max.x-d.x)*h):(i=(e.max.x-d.x)*h,r=(e.min.x-d.x)*h),p>=0?(s=(e.min.y-d.y)*p,a=(e.max.y-d.y)*p):(s=(e.max.y-d.y)*p,a=(e.min.y-d.y)*p),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(c=(e.min.z-d.z)*m,l=(e.max.z-d.z)*m):(c=(e.max.z-d.z)*m,l=(e.min.z-d.z)*m),i>l||c>r)||((c>i||i!==i)&&(i=c),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,r,s){ya.subVectors(t,e),eo.subVectors(i,e),xa.crossVectors(ya,eo);let a=this.direction.dot(xa),c;if(a>0){if(r)return null;c=1}else if(a<0)c=-1,a=-a;else return null;pi.subVectors(this.origin,e);const l=c*this.direction.dot(eo.crossVectors(pi,eo));if(l<0)return null;const h=c*this.direction.dot(ya.cross(pi));if(h<0||l+h>a)return null;const p=-c*pi.dot(xa);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,r,s,a,c,l,h,p,m,d,S,A,C,E){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,c,l,h,p,m,d,S,A,C,E)}set(e,t,i,r,s,a,c,l,h,p,m,d,S,A,C,E){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=c,f[13]=l,f[2]=h,f[6]=p,f[10]=m,f[14]=d,f[3]=S,f[7]=A,f[11]=C,f[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/mr.setFromMatrixColumn(e,0).length(),s=1/mr.setFromMatrixColumn(e,1).length(),a=1/mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),c=Math.sin(i),l=Math.cos(r),h=Math.sin(r),p=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const d=a*p,S=a*m,A=c*p,C=c*m;t[0]=l*p,t[4]=-l*m,t[8]=h,t[1]=S+A*h,t[5]=d-C*h,t[9]=-c*l,t[2]=C-d*h,t[6]=A+S*h,t[10]=a*l}else if(e.order==="YXZ"){const d=l*p,S=l*m,A=h*p,C=h*m;t[0]=d+C*c,t[4]=A*c-S,t[8]=a*h,t[1]=a*m,t[5]=a*p,t[9]=-c,t[2]=S*c-A,t[6]=C+d*c,t[10]=a*l}else if(e.order==="ZXY"){const d=l*p,S=l*m,A=h*p,C=h*m;t[0]=d-C*c,t[4]=-a*m,t[8]=A+S*c,t[1]=S+A*c,t[5]=a*p,t[9]=C-d*c,t[2]=-a*h,t[6]=c,t[10]=a*l}else if(e.order==="ZYX"){const d=a*p,S=a*m,A=c*p,C=c*m;t[0]=l*p,t[4]=A*h-S,t[8]=d*h+C,t[1]=l*m,t[5]=C*h+d,t[9]=S*h-A,t[2]=-h,t[6]=c*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,S=a*h,A=c*l,C=c*h;t[0]=l*p,t[4]=C-d*m,t[8]=A*m+S,t[1]=m,t[5]=a*p,t[9]=-c*p,t[2]=-h*p,t[6]=S*m+A,t[10]=d-C*m}else if(e.order==="XZY"){const d=a*l,S=a*h,A=c*l,C=c*h;t[0]=l*p,t[4]=-m,t[8]=h*p,t[1]=d*m+C,t[5]=a*p,t[9]=S*m-A,t[2]=A*m-S,t[6]=c*p,t[10]=C*m+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xm,e,Tm)}lookAt(e,t,i){const r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),mi.crossVectors(i,Zt),mi.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),mi.crossVectors(i,Zt)),mi.normalize(),to.crossVectors(Zt,mi),r[0]=mi.x,r[4]=to.x,r[8]=Zt.x,r[1]=mi.y,r[5]=to.y,r[9]=Zt.y,r[2]=mi.z,r[6]=to.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],c=i[4],l=i[8],h=i[12],p=i[1],m=i[5],d=i[9],S=i[13],A=i[2],C=i[6],E=i[10],f=i[14],N=i[3],L=i[7],P=i[11],k=i[15],O=r[0],M=r[4],y=r[8],g=r[12],v=r[1],x=r[5],I=r[9],w=r[13],ee=r[2],K=r[6],te=r[10],ne=r[14],j=r[3],ue=r[7],_e=r[11],Ce=r[15];return s[0]=a*O+c*v+l*ee+h*j,s[4]=a*M+c*x+l*K+h*ue,s[8]=a*y+c*I+l*te+h*_e,s[12]=a*g+c*w+l*ne+h*Ce,s[1]=p*O+m*v+d*ee+S*j,s[5]=p*M+m*x+d*K+S*ue,s[9]=p*y+m*I+d*te+S*_e,s[13]=p*g+m*w+d*ne+S*Ce,s[2]=A*O+C*v+E*ee+f*j,s[6]=A*M+C*x+E*K+f*ue,s[10]=A*y+C*I+E*te+f*_e,s[14]=A*g+C*w+E*ne+f*Ce,s[3]=N*O+L*v+P*ee+k*j,s[7]=N*M+L*x+P*K+k*ue,s[11]=N*y+L*I+P*te+k*_e,s[15]=N*g+L*w+P*ne+k*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],c=e[5],l=e[9],h=e[13],p=e[2],m=e[6],d=e[10],S=e[14],A=e[3],C=e[7],E=e[11],f=e[15];return A*(+s*l*m-r*h*m-s*c*d+i*h*d+r*c*S-i*l*S)+C*(+t*l*S-t*h*d+s*a*d-r*a*S+r*h*p-s*l*p)+E*(+t*h*m-t*c*S-s*a*m+i*a*S+s*c*p-i*h*p)+f*(-r*c*p-t*l*m+t*c*d+r*a*m-i*a*d+i*l*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],c=e[5],l=e[6],h=e[7],p=e[8],m=e[9],d=e[10],S=e[11],A=e[12],C=e[13],E=e[14],f=e[15],N=m*E*h-C*d*h+C*l*S-c*E*S-m*l*f+c*d*f,L=A*d*h-p*E*h-A*l*S+a*E*S+p*l*f-a*d*f,P=p*C*h-A*m*h+A*c*S-a*C*S-p*c*f+a*m*f,k=A*m*l-p*C*l-A*c*d+a*C*d+p*c*E-a*m*E,O=t*N+i*L+r*P+s*k;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/O;return e[0]=N*M,e[1]=(C*d*s-m*E*s-C*r*S+i*E*S+m*r*f-i*d*f)*M,e[2]=(c*E*s-C*l*s+C*r*h-i*E*h-c*r*f+i*l*f)*M,e[3]=(m*l*s-c*d*s-m*r*h+i*d*h+c*r*S-i*l*S)*M,e[4]=L*M,e[5]=(p*E*s-A*d*s+A*r*S-t*E*S-p*r*f+t*d*f)*M,e[6]=(A*l*s-a*E*s-A*r*h+t*E*h+a*r*f-t*l*f)*M,e[7]=(a*d*s-p*l*s+p*r*h-t*d*h-a*r*S+t*l*S)*M,e[8]=P*M,e[9]=(A*m*s-p*C*s-A*i*S+t*C*S+p*i*f-t*m*f)*M,e[10]=(a*C*s-A*c*s+A*i*h-t*C*h-a*i*f+t*c*f)*M,e[11]=(p*c*s-a*m*s-p*i*h+t*m*h+a*i*S-t*c*S)*M,e[12]=k*M,e[13]=(p*C*r-A*m*r+A*i*d-t*C*d-p*i*E+t*m*E)*M,e[14]=(A*c*r-a*C*r-A*i*l+t*C*l+a*i*E-t*c*E)*M,e[15]=(a*m*r-p*c*r+p*i*l-t*m*l-a*i*d+t*c*d)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,c=e.y,l=e.z,h=s*a,p=s*c;return this.set(h*a+i,h*c-r*l,h*l+r*c,0,h*c+r*l,p*c+i,p*l-r*a,0,h*l-r*c,p*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,c=t._z,l=t._w,h=s+s,p=a+a,m=c+c,d=s*h,S=s*p,A=s*m,C=a*p,E=a*m,f=c*m,N=l*h,L=l*p,P=l*m,k=i.x,O=i.y,M=i.z;return r[0]=(1-(C+f))*k,r[1]=(S+P)*k,r[2]=(A-L)*k,r[3]=0,r[4]=(S-P)*O,r[5]=(1-(d+f))*O,r[6]=(E+N)*O,r[7]=0,r[8]=(A+L)*M,r[9]=(E-N)*M,r[10]=(1-(d+C))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=mr.set(r[0],r[1],r[2]).length();const a=mr.set(r[4],r[5],r[6]).length(),c=mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],dn.copy(this);const h=1/s,p=1/a,m=1/c;return dn.elements[0]*=h,dn.elements[1]*=h,dn.elements[2]*=h,dn.elements[4]*=p,dn.elements[5]*=p,dn.elements[6]*=p,dn.elements[8]*=m,dn.elements[9]*=m,dn.elements[10]*=m,t.setFromRotationMatrix(dn),i.x=s,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,a,c=Rn,l=!1){const h=this.elements,p=2*s/(t-e),m=2*s/(i-r),d=(t+e)/(t-e),S=(i+r)/(i-r);let A,C;if(l)A=s/(a-s),C=a*s/(a-s);else if(c===Rn)A=-(a+s)/(a-s),C=-2*a*s/(a-s);else if(c===Oo)A=-a/(a-s),C=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=m,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=A,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,r,s,a,c=Rn,l=!1){const h=this.elements,p=2/(t-e),m=2/(i-r),d=-(t+e)/(t-e),S=-(i+r)/(i-r);let A,C;if(l)A=1/(a-s),C=a/(a-s);else if(c===Rn)A=-2/(a-s),C=-(a+s)/(a-s);else if(c===Oo)A=-1/(a-s),C=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=m,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=A,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const mr=new W,dn=new bt,xm=new W(0,0,0),Tm=new W(1,1,1),mi=new W,to=new W,Zt=new W,Sh=new bt,yh=new ws;class ti{constructor(e=0,t=0,i=0,r=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],c=r[8],l=r[1],h=r[5],p=r[9],m=r[2],d=r[6],S=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,S),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Sd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mm=0;const xh=new W,gr=new ws,Hn=new bt,no=new W,ns=new W,Am=new W,wm=new ws,Th=new W(1,0,0),Mh=new W(0,1,0),Ah=new W(0,0,1),wh={type:"added"},bm={type:"removed"},_r={type:"childadded",child:null},Ta={type:"childremoved",child:null};class jt extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new W,t=new ti,i=new ws,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new We}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(Mh,e)}rotateZ(e){return this.rotateOnAxis(Ah,e)}translateOnAxis(e,t){return xh.copy(e).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(Mh,e)}translateZ(e){return this.translateOnAxis(Ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?no.copy(e):no.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(ns,no,this.up):Hn.lookAt(no,ns,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),gr.setFromRotationMatrix(Hn),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wh),_r.child=e,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bm),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wh),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,Am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const l=c.shapes;if(Array.isArray(l))for(let h=0,p=l.length;h<p;h++){const m=l[h];s(e.shapes,m)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let l=0,h=this.material.length;l<h;l++)c.push(s(e.materials,this.material[l]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const l=this.animations[c];r.animations.push(s(e.animations,l))}}if(t){const c=a(e.geometries),l=a(e.materials),h=a(e.textures),p=a(e.images),m=a(e.shapes),d=a(e.skeletons),S=a(e.animations),A=a(e.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),d.length>0&&(i.skeletons=d),S.length>0&&(i.animations=S),A.length>0&&(i.nodes=A)}return i.object=r,i;function a(c){const l=[];for(const h in c){const p=c[h];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new W(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new W,Gn=new W,Ma=new W,Wn=new W,vr=new W,Er=new W,bh=new W,Aa=new W,wa=new W,ba=new W,Ra=new Tt,Ca=new Tt,Ia=new Tt;class gn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),Gn.subVectors(i,t),Ma.subVectors(e,t);const a=fn.dot(fn),c=fn.dot(Gn),l=fn.dot(Ma),h=Gn.dot(Gn),p=Gn.dot(Ma),m=a*h-c*c;if(m===0)return s.set(0,0,0),null;const d=1/m,S=(h*l-c*p)*d,A=(a*p-c*l)*d;return s.set(1-S-A,A,S)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,i,r,s,a,c,l){return this.getBarycoord(e,t,i,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(c,Wn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ra.setScalar(0),Ca.setScalar(0),Ia.setScalar(0),Ra.fromBufferAttribute(e,t),Ca.fromBufferAttribute(e,i),Ia.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ra,s.x),a.addScaledVector(Ca,s.y),a.addScaledVector(Ia,s.z),a}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),Gn.subVectors(e,t),fn.cross(Gn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),fn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,c;vr.subVectors(r,i),Er.subVectors(s,i),Aa.subVectors(e,i);const l=vr.dot(Aa),h=Er.dot(Aa);if(l<=0&&h<=0)return t.copy(i);wa.subVectors(e,r);const p=vr.dot(wa),m=Er.dot(wa);if(p>=0&&m<=p)return t.copy(r);const d=l*m-p*h;if(d<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(i).addScaledVector(vr,a);ba.subVectors(e,s);const S=vr.dot(ba),A=Er.dot(ba);if(A>=0&&S<=A)return t.copy(s);const C=S*h-l*A;if(C<=0&&h>=0&&A<=0)return c=h/(h-A),t.copy(i).addScaledVector(Er,c);const E=p*A-S*m;if(E<=0&&m-p>=0&&S-A>=0)return bh.subVectors(s,r),c=(m-p)/(m-p+(S-A)),t.copy(r).addScaledVector(bh,c);const f=1/(E+C+d);return a=C*f,c=d*f,t.copy(i).addScaledVector(vr,a).addScaledVector(Er,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},io={h:0,s:0,l:0};function Pa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=ol(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Pa(a,s,e+1/3),this.g=Pa(a,s,e),this.b=Pa(a,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=on){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],c=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=yd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return nt.workingToColorSpace(Vt.copy(this),e),Math.round(Je(Vt.r*255,0,255))*65536+Math.round(Je(Vt.g*255,0,255))*256+Math.round(Je(Vt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Vt.copy(this),t);const i=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(i,r,s),c=Math.min(i,r,s);let l,h;const p=(c+a)/2;if(c===a)l=0,h=0;else{const m=a-c;switch(h=p<=.5?m/(a+c):m/(2-a-c),a){case i:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-i)/m+2;break;case s:l=(i-r)/m+4;break}l/=6}return e.h=l,e.s=h,e.l=p,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=on){nt.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,r=Vt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(io);const i=cs(gi.h,io.h,t),r=cs(gi.s,io.s,t),s=cs(gi.l,io.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new at;at.NAMES=yd;let Rm=0;class Rs extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=br,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=ec,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qa&&(i.blendSrc=this.blendSrc),this.blendDst!==ec&&(i.blendDst=this.blendDst),this.blendEquation!==Xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const c in s){const l=s[c];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cl extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new W,ro=new ft;let Cm=0;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fh,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ro.fromBufferAttribute(this,t),ro.applyMatrix3(e),this.setXY(t,ro.x,ro.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fh&&(e.usage=this.usage),e}}class xd extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Td extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xn extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Im=0;const sn=new bt,Da=new jt,Sr=new W,Qt=new bs,is=new bs,Dt=new W;class Un extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_d(e)?Td:xd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];is.setFromBufferAttribute(c),this.morphTargetsRelative?(Dt.addVectors(Qt.min,is.min),Qt.expandByPoint(Dt),Dt.addVectors(Qt.max,is.max),Qt.expandByPoint(Dt)):(Qt.expandByPoint(is.min),Qt.expandByPoint(is.max))}Qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const c=t[s],l=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)Dt.fromBufferAttribute(c,h),l&&(Sr.fromBufferAttribute(e,h),Dt.add(Sr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),c=[],l=[];for(let y=0;y<i.count;y++)c[y]=new W,l[y]=new W;const h=new W,p=new W,m=new W,d=new ft,S=new ft,A=new ft,C=new W,E=new W;function f(y,g,v){h.fromBufferAttribute(i,y),p.fromBufferAttribute(i,g),m.fromBufferAttribute(i,v),d.fromBufferAttribute(s,y),S.fromBufferAttribute(s,g),A.fromBufferAttribute(s,v),p.sub(h),m.sub(h),S.sub(d),A.sub(d);const x=1/(S.x*A.y-A.x*S.y);isFinite(x)&&(C.copy(p).multiplyScalar(A.y).addScaledVector(m,-S.y).multiplyScalar(x),E.copy(m).multiplyScalar(S.x).addScaledVector(p,-A.x).multiplyScalar(x),c[y].add(C),c[g].add(C),c[v].add(C),l[y].add(E),l[g].add(E),l[v].add(E))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let y=0,g=N.length;y<g;++y){const v=N[y],x=v.start,I=v.count;for(let w=x,ee=x+I;w<ee;w+=3)f(e.getX(w+0),e.getX(w+1),e.getX(w+2))}const L=new W,P=new W,k=new W,O=new W;function M(y){k.fromBufferAttribute(r,y),O.copy(k);const g=c[y];L.copy(g),L.sub(k.multiplyScalar(k.dot(g))).normalize(),P.crossVectors(O,g);const x=P.dot(l[y])<0?-1:1;a.setXYZW(y,L.x,L.y,L.z,x)}for(let y=0,g=N.length;y<g;++y){const v=N[y],x=v.start,I=v.count;for(let w=x,ee=x+I;w<ee;w+=3)M(e.getX(w+0)),M(e.getX(w+1)),M(e.getX(w+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,S=i.count;d<S;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,a=new W,c=new W,l=new W,h=new W,p=new W,m=new W;if(e)for(let d=0,S=e.count;d<S;d+=3){const A=e.getX(d+0),C=e.getX(d+1),E=e.getX(d+2);r.fromBufferAttribute(t,A),s.fromBufferAttribute(t,C),a.fromBufferAttribute(t,E),p.subVectors(a,s),m.subVectors(r,s),p.cross(m),c.fromBufferAttribute(i,A),l.fromBufferAttribute(i,C),h.fromBufferAttribute(i,E),c.add(p),l.add(p),h.add(p),i.setXYZ(A,c.x,c.y,c.z),i.setXYZ(C,l.x,l.y,l.z),i.setXYZ(E,h.x,h.y,h.z)}else for(let d=0,S=t.count;d<S;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),p.subVectors(a,s),m.subVectors(r,s),p.cross(m),i.setXYZ(d+0,p.x,p.y,p.z),i.setXYZ(d+1,p.x,p.y,p.z),i.setXYZ(d+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(c,l){const h=c.array,p=c.itemSize,m=c.normalized,d=new h.constructor(l.length*p);let S=0,A=0;for(let C=0,E=l.length;C<E;C++){c.isInterleavedBufferAttribute?S=l[C]*c.data.stride+c.offset:S=l[C]*p;for(let f=0;f<p;f++)d[A++]=h[S++]}return new Pn(d,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,i=this.index.array,r=this.attributes;for(const c in r){const l=r[c],h=e(l,i);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const l=[],h=s[c];for(let p=0,m=h.length;p<m;p++){const d=h[p],S=e(d,i);l.push(S)}t.morphAttributes[c]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,l=a.length;c<l;c++){const h=a[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],p=[];for(let m=0,d=h.length;m<d;m++){const S=h[m];p.push(S.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const h in r){const p=r[h];this.setAttribute(h,p.clone(t))}const s=e.morphAttributes;for(const h in s){const p=[],m=s[h];for(let d=0,S=m.length;d<S;d++)p.push(m[d].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,p=a.length;h<p;h++){const m=a[h];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rh=new bt,ki=new Ed,so=new Yo,Ch=new W,oo=new W,ao=new W,co=new W,La=new W,lo=new W,Ih=new W,ho=new W;class Cn extends jt{constructor(e=new Un,t=new cl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(s&&c){lo.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const p=c[l],m=s[l];p!==0&&(La.fromBufferAttribute(m,e),a?lo.addScaledVector(La,p):lo.addScaledVector(La.sub(t),p))}t.add(lo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(s),ki.copy(e.ray).recast(e.near),!(so.containsPoint(ki.origin)===!1&&(ki.intersectSphere(so,Ch)===null||ki.origin.distanceToSquared(Ch)>(e.far-e.near)**2))&&(Rh.copy(s).invert(),ki.copy(e.ray).applyMatrix4(Rh),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,c=s.index,l=s.attributes.position,h=s.attributes.uv,p=s.attributes.uv1,m=s.attributes.normal,d=s.groups,S=s.drawRange;if(c!==null)if(Array.isArray(a))for(let A=0,C=d.length;A<C;A++){const E=d[A],f=a[E.materialIndex],N=Math.max(E.start,S.start),L=Math.min(c.count,Math.min(E.start+E.count,S.start+S.count));for(let P=N,k=L;P<k;P+=3){const O=c.getX(P),M=c.getX(P+1),y=c.getX(P+2);r=uo(this,f,e,i,h,p,m,O,M,y),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=E.materialIndex,t.push(r))}}else{const A=Math.max(0,S.start),C=Math.min(c.count,S.start+S.count);for(let E=A,f=C;E<f;E+=3){const N=c.getX(E),L=c.getX(E+1),P=c.getX(E+2);r=uo(this,a,e,i,h,p,m,N,L,P),r&&(r.faceIndex=Math.floor(E/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let A=0,C=d.length;A<C;A++){const E=d[A],f=a[E.materialIndex],N=Math.max(E.start,S.start),L=Math.min(l.count,Math.min(E.start+E.count,S.start+S.count));for(let P=N,k=L;P<k;P+=3){const O=P,M=P+1,y=P+2;r=uo(this,f,e,i,h,p,m,O,M,y),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=E.materialIndex,t.push(r))}}else{const A=Math.max(0,S.start),C=Math.min(l.count,S.start+S.count);for(let E=A,f=C;E<f;E+=3){const N=E,L=E+1,P=E+2;r=uo(this,a,e,i,h,p,m,N,L,P),r&&(r.faceIndex=Math.floor(E/3),t.push(r))}}}}function Pm(n,e,t,i,r,s,a,c){let l;if(e.side===qt?l=i.intersectTriangle(a,s,r,!0,c):l=i.intersectTriangle(r,s,a,e.side===bi,c),l===null)return null;ho.copy(c),ho.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(ho);return h<t.near||h>t.far?null:{distance:h,point:ho.clone(),object:n}}function uo(n,e,t,i,r,s,a,c,l,h){n.getVertexPosition(c,oo),n.getVertexPosition(l,ao),n.getVertexPosition(h,co);const p=Pm(n,e,t,i,oo,ao,co,Ih);if(p){const m=new W;gn.getBarycoord(Ih,oo,ao,co,m),r&&(p.uv=gn.getInterpolatedAttribute(r,c,l,h,m,new ft)),s&&(p.uv1=gn.getInterpolatedAttribute(s,c,l,h,m,new ft)),a&&(p.normal=gn.getInterpolatedAttribute(a,c,l,h,m,new W),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const d={a:c,b:l,c:h,normal:new W,materialIndex:0};gn.getNormal(oo,ao,co,d.normal),p.face=d,p.barycoord=m}return p}class Cs extends Un{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const c=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],h=[],p=[],m=[];let d=0,S=0;A("z","y","x",-1,-1,i,t,e,a,s,0),A("z","y","x",1,-1,i,t,-e,a,s,1),A("x","z","y",1,1,e,i,t,r,a,2),A("x","z","y",1,-1,e,i,-t,r,a,3),A("x","y","z",1,-1,e,t,i,r,s,4),A("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xn(h,3)),this.setAttribute("normal",new xn(p,3)),this.setAttribute("uv",new xn(m,2));function A(C,E,f,N,L,P,k,O,M,y,g){const v=P/M,x=k/y,I=P/2,w=k/2,ee=O/2,K=M+1,te=y+1;let ne=0,j=0;const ue=new W;for(let _e=0;_e<te;_e++){const Ce=_e*x-w;for(let Be=0;Be<K;Be++){const Ge=Be*v-I;ue[C]=Ge*N,ue[E]=Ce*L,ue[f]=ee,h.push(ue.x,ue.y,ue.z),ue[C]=0,ue[E]=0,ue[f]=O>0?1:-1,p.push(ue.x,ue.y,ue.z),m.push(Be/M),m.push(1-_e/y),ne+=1}}for(let _e=0;_e<y;_e++)for(let Ce=0;Ce<M;Ce++){const Be=d+Ce+K*_e,Ge=d+Ce+K*(_e+1),mt=d+(Ce+1)+K*(_e+1),Ye=d+(Ce+1)+K*_e;l.push(Be,Ge,Ye),l.push(Ge,mt,Ye),j+=6}c.addGroup(S,j,g),S+=j,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=Fr(n[t]);for(const r in i)e[r]=i[r]}return e}function Dm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Md(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Lm={clone:Fr,merge:Gt};var Nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nm,this.fragmentShader=Um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=Dm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ad extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new W,Ph=new ft,Dh=new ft;class an extends Ad{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,Ph,Dh),t.subVectors(Dh,Ph)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(as*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/h,r*=a.width/l,i*=a.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yr=-90,xr=1;class Om extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(yr,xr,e,t);r.layers=this.layers,this.add(r);const s=new an(yr,xr,e,t);s.layers=this.layers,this.add(s);const a=new an(yr,xr,e,t);a.layers=this.layers,this.add(a);const c=new an(yr,xr,e,t);c.layers=this.layers,this.add(c);const l=new an(yr,xr,e,t);l.layers=this.layers,this.add(l);const h=new an(yr,xr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,c,l]=t;for(const h of t)this.remove(h);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,c,l,h,p]=this.children,m=e.getRenderTarget(),d=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,c),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,h),i.texture.generateMipmaps=C,e.setRenderTarget(i,5,r),e.render(t,p),e.setRenderTarget(m,d,S),e.xr.enabled=A,i.texture.needsPMREMUpdate=!0}}class wd extends $t{constructor(e=[],t=Nr,i,r,s,a,c,l,h,p){super(e,t,i,r,s,a,c,l,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fm extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cs(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Ti});s.uniforms.tEquirect.value=t;const a=new Cn(r,s),c=t.minFilter;return t.minFilter===Yi&&(t.minFilter=bn),new Om(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class fo extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const km={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const c=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const C of e.hand.values()){const E=t.getJointPose(C,i),f=this._getHandJoint(h,C);E!==null&&(f.matrix.fromArray(E.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=E.radius),f.visible=E!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],d=p.position.distanceTo(m.position),S=.02,A=.005;h.inputState.pinching&&d>S+A?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=S-A&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(km)))}return c!==null&&(c.visible=r!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Bm extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ua=new W,Vm=new W,zm=new We;class Hi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ua.subVectors(i,t).cross(Vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ua),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zm.getNormalMatrix(e),r=this.coplanarPoint(Ua).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Yo,Hm=new ft(.5,.5),po=new W;class bd{constructor(e=new Hi,t=new Hi,i=new Hi,r=new Hi,s=new Hi,a=new Hi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(r),c[4].copy(s),c[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn,i=!1){const r=this.planes,s=e.elements,a=s[0],c=s[1],l=s[2],h=s[3],p=s[4],m=s[5],d=s[6],S=s[7],A=s[8],C=s[9],E=s[10],f=s[11],N=s[12],L=s[13],P=s[14],k=s[15];if(r[0].setComponents(h-a,S-p,f-A,k-N).normalize(),r[1].setComponents(h+a,S+p,f+A,k+N).normalize(),r[2].setComponents(h+c,S+m,f+C,k+L).normalize(),r[3].setComponents(h-c,S-m,f-C,k-L).normalize(),i)r[4].setComponents(l,d,E,P).normalize(),r[5].setComponents(h-l,S-d,f-E,k-P).normalize();else if(r[4].setComponents(h-l,S-d,f-E,k-P).normalize(),t===Rn)r[5].setComponents(h+l,S+d,f+E,k+P).normalize();else if(t===Oo)r[5].setComponents(l,d,E,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);const t=Hm.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(po.x=r.normal.x>0?e.max.x:e.min.x,po.y=r.normal.y>0?e.max.y:e.min.y,po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rd extends Rs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lh=new bt,Vc=new Ed,mo=new Yo,go=new W;class Gm extends jt{constructor(e=new Un,t=new Rd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(r),mo.radius+=s,e.ray.intersectsSphere(mo)===!1)return;Lh.copy(r).invert(),Vc.copy(e.ray).applyMatrix4(Lh);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,h=i.index,m=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),S=Math.min(h.count,a.start+a.count);for(let A=d,C=S;A<C;A++){const E=h.getX(A);go.fromBufferAttribute(m,E),Nh(go,E,l,r,e,t,this)}}else{const d=Math.max(0,a.start),S=Math.min(m.count,a.start+a.count);for(let A=d,C=S;A<C;A++)go.fromBufferAttribute(m,A),Nh(go,A,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function Nh(n,e,t,i,r,s,a){const c=Vc.distanceSqToPoint(n);if(c<t){const l=new W;Vc.closestPointToPoint(n,l),l.applyMatrix4(i);const h=r.ray.origin.distanceTo(l);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Cd extends $t{constructor(e,t,i=er,r,s,a,c=yn,l=yn,h,p=gs,m=1){if(p!==gs&&p!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:m};super(d,r,s,a,c,l,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new al(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Id extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ko extends Un{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,c=Math.floor(i),l=Math.floor(r),h=c+1,p=l+1,m=e/c,d=t/l,S=[],A=[],C=[],E=[];for(let f=0;f<p;f++){const N=f*d-a;for(let L=0;L<h;L++){const P=L*m-s;A.push(P,-N,0),C.push(0,0,1),E.push(L/c),E.push(1-f/l)}}for(let f=0;f<l;f++)for(let N=0;N<c;N++){const L=N+h*f,P=N+h*(f+1),k=N+1+h*(f+1),O=N+1+h*f;S.push(L,P,O),S.push(P,k,O)}this.setIndex(S),this.setAttribute("position",new xn(A,3)),this.setAttribute("normal",new xn(C,3)),this.setAttribute("uv",new xn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}class ll extends Un{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+c,Math.PI);let h=0;const p=[],m=new W,d=new W,S=[],A=[],C=[],E=[];for(let f=0;f<=i;f++){const N=[],L=f/i;let P=0;f===0&&a===0?P=.5/t:f===i&&l===Math.PI&&(P=-.5/t);for(let k=0;k<=t;k++){const O=k/t;m.x=-e*Math.cos(r+O*s)*Math.sin(a+L*c),m.y=e*Math.cos(a+L*c),m.z=e*Math.sin(r+O*s)*Math.sin(a+L*c),A.push(m.x,m.y,m.z),d.copy(m).normalize(),C.push(d.x,d.y,d.z),E.push(O+P,1-L),N.push(h++)}p.push(N)}for(let f=0;f<i;f++)for(let N=0;N<t;N++){const L=p[f][N+1],P=p[f][N],k=p[f+1][N],O=p[f+1][N+1];(f!==0||a>0)&&S.push(L,P,O),(f!==i-1||l<Math.PI)&&S.push(P,k,O)}this.setIndex(S),this.setAttribute("position",new xn(A,3)),this.setAttribute("normal",new xn(C,3)),this.setAttribute("uv",new xn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wm extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xm extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qm extends Ad{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,c=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,c-=p*this.view.offsetY,l=c-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $m extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Uh(n,e,t,i){const r=jm(i);switch(t){case dd:return n*e;case pd:return n*e/r.components*r.byteLength;case il:return n*e/r.components*r.byteLength;case md:return n*e*2/r.components*r.byteLength;case rl:return n*e*2/r.components*r.byteLength;case fd:return n*e*3/r.components*r.byteLength;case _n:return n*e*4/r.components*r.byteLength;case sl:return n*e*4/r.components*r.byteLength;case Ao:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bo:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fc:case mc:return Math.max(n,16)*Math.max(e,8)/4;case dc:case pc:return Math.max(n,8)*Math.max(e,8)/2;case gc:case _c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Lc:case Nc:case Uc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Oc:case Fc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kc:case Bc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jm(n){switch(n){case ei:case cd:return{byteLength:1,components:1};case ps:case ld:case As:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case er:case el:case Yn:return{byteLength:4,components:1};case hd:case ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ym(n){const e=new WeakMap;function t(c,l){const h=c.array,p=c.usage,m=h.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,h,p),c.onUploadCallback();let S;if(h instanceof Float32Array)S=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=n.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?S=n.HALF_FLOAT:S=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=n.SHORT;else if(h instanceof Uint32Array)S=n.UNSIGNED_INT;else if(h instanceof Int32Array)S=n.INT;else if(h instanceof Int8Array)S=n.BYTE;else if(h instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function i(c,l,h){const p=l.array,m=l.updateRanges;if(n.bindBuffer(h,c),m.length===0)n.bufferSubData(h,0,p);else{m.sort((S,A)=>S.start-A.start);let d=0;for(let S=1;S<m.length;S++){const A=m[d],C=m[S];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++d,m[d]=C)}m.length=d+1;for(let S=0,A=m.length;S<A;S++){const C=m[S];n.bufferSubData(h,C.start*p.BYTES_PER_ELEMENT,p,C.start,C.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=e.get(c);l&&(n.deleteBuffer(l.buffer),e.delete(c))}function a(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,l));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,c,l),h.version=c.version}}return{get:r,remove:s,update:a}}var Km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ng=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ag=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Eg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",bg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ig=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$g=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,s_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,p_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,__=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,E_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,A_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,U_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,B_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,W_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,j_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_v=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Av=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Km,alphahash_pars_fragment:Jm,alphamap_fragment:Zm,alphamap_pars_fragment:Qm,alphatest_fragment:eg,alphatest_pars_fragment:tg,aomap_fragment:ng,aomap_pars_fragment:ig,batching_pars_vertex:rg,batching_vertex:sg,begin_vertex:og,beginnormal_vertex:ag,bsdfs:cg,iridescence_fragment:lg,bumpmap_pars_fragment:hg,clipping_planes_fragment:ug,clipping_planes_pars_fragment:dg,clipping_planes_pars_vertex:fg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:gg,color_pars_vertex:_g,color_vertex:vg,common:Eg,cube_uv_reflection_fragment:Sg,defaultnormal_vertex:yg,displacementmap_pars_vertex:xg,displacementmap_vertex:Tg,emissivemap_fragment:Mg,emissivemap_pars_fragment:Ag,colorspace_fragment:wg,colorspace_pars_fragment:bg,envmap_fragment:Rg,envmap_common_pars_fragment:Cg,envmap_pars_fragment:Ig,envmap_pars_vertex:Pg,envmap_physical_pars_fragment:Hg,envmap_vertex:Dg,fog_vertex:Lg,fog_pars_vertex:Ng,fog_fragment:Ug,fog_pars_fragment:Og,gradientmap_pars_fragment:Fg,lightmap_pars_fragment:kg,lights_lambert_fragment:Bg,lights_lambert_pars_fragment:Vg,lights_pars_begin:zg,lights_toon_fragment:Gg,lights_toon_pars_fragment:Wg,lights_phong_fragment:Xg,lights_phong_pars_fragment:qg,lights_physical_fragment:$g,lights_physical_pars_fragment:jg,lights_fragment_begin:Yg,lights_fragment_maps:Kg,lights_fragment_end:Jg,logdepthbuf_fragment:Zg,logdepthbuf_pars_fragment:Qg,logdepthbuf_pars_vertex:e_,logdepthbuf_vertex:t_,map_fragment:n_,map_pars_fragment:i_,map_particle_fragment:r_,map_particle_pars_fragment:s_,metalnessmap_fragment:o_,metalnessmap_pars_fragment:a_,morphinstance_vertex:c_,morphcolor_vertex:l_,morphnormal_vertex:h_,morphtarget_pars_vertex:u_,morphtarget_vertex:d_,normal_fragment_begin:f_,normal_fragment_maps:p_,normal_pars_fragment:m_,normal_pars_vertex:g_,normal_vertex:__,normalmap_pars_fragment:v_,clearcoat_normal_fragment_begin:E_,clearcoat_normal_fragment_maps:S_,clearcoat_pars_fragment:y_,iridescence_pars_fragment:x_,opaque_fragment:T_,packing:M_,premultiplied_alpha_fragment:A_,project_vertex:w_,dithering_fragment:b_,dithering_pars_fragment:R_,roughnessmap_fragment:C_,roughnessmap_pars_fragment:I_,shadowmap_pars_fragment:P_,shadowmap_pars_vertex:D_,shadowmap_vertex:L_,shadowmask_pars_fragment:N_,skinbase_vertex:U_,skinning_pars_vertex:O_,skinning_vertex:F_,skinnormal_vertex:k_,specularmap_fragment:B_,specularmap_pars_fragment:V_,tonemapping_fragment:z_,tonemapping_pars_fragment:H_,transmission_fragment:G_,transmission_pars_fragment:W_,uv_pars_fragment:X_,uv_pars_vertex:q_,uv_vertex:$_,worldpos_vertex:j_,background_vert:Y_,background_frag:K_,backgroundCube_vert:J_,backgroundCube_frag:Z_,cube_vert:Q_,cube_frag:ev,depth_vert:tv,depth_frag:nv,distanceRGBA_vert:iv,distanceRGBA_frag:rv,equirect_vert:sv,equirect_frag:ov,linedashed_vert:av,linedashed_frag:cv,meshbasic_vert:lv,meshbasic_frag:hv,meshlambert_vert:uv,meshlambert_frag:dv,meshmatcap_vert:fv,meshmatcap_frag:pv,meshnormal_vert:mv,meshnormal_frag:gv,meshphong_vert:_v,meshphong_frag:vv,meshphysical_vert:Ev,meshphysical_frag:Sv,meshtoon_vert:yv,meshtoon_frag:xv,points_vert:Tv,points_frag:Mv,shadow_vert:Av,shadow_frag:wv,sprite_vert:bv,sprite_frag:Rv},pe={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},An={basic:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new at(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Gt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Gt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new at(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Gt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Gt([pe.points,pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Gt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Gt([pe.common,pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Gt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Gt([pe.sprite,pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Gt([pe.common,pe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Gt([pe.lights,pe.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};An.physical={uniforms:Gt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const _o={r:0,b:0,g:0},Vi=new ti,Cv=new bt;function Iv(n,e,t,i,r,s,a){const c=new at(0);let l=s===!0?0:1,h,p,m=null,d=0,S=null;function A(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function C(L){let P=!1;const k=A(L);k===null?f(c,l):k&&k.isColor&&(f(k,1),P=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(L,P){const k=A(P);k&&(k.isCubeTexture||k.mapping===jo)?(p===void 0&&(p=new Cn(new Cs(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Fr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,M,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Vi.copy(P.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),p.material.uniforms.envMap.value=k,p.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Cv.makeRotationFromEuler(Vi)),p.material.toneMapped=nt.getTransfer(k.colorSpace)!==dt,(m!==k||d!==k.version||S!==n.toneMapping)&&(p.material.needsUpdate=!0,m=k,d=k.version,S=n.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):k&&k.isTexture&&(h===void 0&&(h=new Cn(new Ko(2,2),new Ri({name:"BackgroundMaterial",uniforms:Fr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=k,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=nt.getTransfer(k.colorSpace)!==dt,k.matrixAutoUpdate===!0&&k.updateMatrix(),h.material.uniforms.uvTransform.value.copy(k.matrix),(m!==k||d!==k.version||S!==n.toneMapping)&&(h.material.needsUpdate=!0,m=k,d=k.version,S=n.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function f(L,P){L.getRGB(_o,Md(n)),i.buffers.color.setClear(_o.r,_o.g,_o.b,P,a)}function N(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(L,P=1){c.set(L),l=P,f(c,l)},getClearAlpha:function(){return l},setClearAlpha:function(L){l=L,f(c,l)},render:C,addToRenderList:E,dispose:N}}function Pv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function c(v,x,I,w,ee){let K=!1;const te=m(w,I,x);s!==te&&(s=te,h(s.object)),K=S(v,w,I,ee),K&&A(v,w,I,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,P(v,x,I,w),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function h(v){return n.bindVertexArray(v)}function p(v){return n.deleteVertexArray(v)}function m(v,x,I){const w=I.wireframe===!0;let ee=i[v.id];ee===void 0&&(ee={},i[v.id]=ee);let K=ee[x.id];K===void 0&&(K={},ee[x.id]=K);let te=K[w];return te===void 0&&(te=d(l()),K[w]=te),te}function d(v){const x=[],I=[],w=[];for(let ee=0;ee<t;ee++)x[ee]=0,I[ee]=0,w[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:I,attributeDivisors:w,object:v,attributes:{},index:null}}function S(v,x,I,w){const ee=s.attributes,K=x.attributes;let te=0;const ne=I.getAttributes();for(const j in ne)if(ne[j].location>=0){const _e=ee[j];let Ce=K[j];if(Ce===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(Ce=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(Ce=v.instanceColor)),_e===void 0||_e.attribute!==Ce||Ce&&_e.data!==Ce.data)return!0;te++}return s.attributesNum!==te||s.index!==w}function A(v,x,I,w){const ee={},K=x.attributes;let te=0;const ne=I.getAttributes();for(const j in ne)if(ne[j].location>=0){let _e=K[j];_e===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(_e=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(_e=v.instanceColor));const Ce={};Ce.attribute=_e,_e&&_e.data&&(Ce.data=_e.data),ee[j]=Ce,te++}s.attributes=ee,s.attributesNum=te,s.index=w}function C(){const v=s.newAttributes;for(let x=0,I=v.length;x<I;x++)v[x]=0}function E(v){f(v,0)}function f(v,x){const I=s.newAttributes,w=s.enabledAttributes,ee=s.attributeDivisors;I[v]=1,w[v]===0&&(n.enableVertexAttribArray(v),w[v]=1),ee[v]!==x&&(n.vertexAttribDivisor(v,x),ee[v]=x)}function N(){const v=s.newAttributes,x=s.enabledAttributes;for(let I=0,w=x.length;I<w;I++)x[I]!==v[I]&&(n.disableVertexAttribArray(I),x[I]=0)}function L(v,x,I,w,ee,K,te){te===!0?n.vertexAttribIPointer(v,x,I,ee,K):n.vertexAttribPointer(v,x,I,w,ee,K)}function P(v,x,I,w){C();const ee=w.attributes,K=I.getAttributes(),te=x.defaultAttributeValues;for(const ne in K){const j=K[ne];if(j.location>=0){let ue=ee[ne];if(ue===void 0&&(ne==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),ne==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor)),ue!==void 0){const _e=ue.normalized,Ce=ue.itemSize,Be=e.get(ue);if(Be===void 0)continue;const Ge=Be.buffer,mt=Be.type,Ye=Be.bytesPerElement,Q=mt===n.INT||mt===n.UNSIGNED_INT||ue.gpuType===el;if(ue.isInterleavedBufferAttribute){const ie=ue.data,Se=ie.stride,Fe=ue.offset;if(ie.isInstancedInterleavedBuffer){for(let Ae=0;Ae<j.locationSize;Ae++)f(j.location+Ae,ie.meshPerAttribute);v.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ae=0;Ae<j.locationSize;Ae++)E(j.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Ae=0;Ae<j.locationSize;Ae++)L(j.location+Ae,Ce/j.locationSize,mt,_e,Se*Ye,(Fe+Ce/j.locationSize*Ae)*Ye,Q)}else{if(ue.isInstancedBufferAttribute){for(let ie=0;ie<j.locationSize;ie++)f(j.location+ie,ue.meshPerAttribute);v.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ie=0;ie<j.locationSize;ie++)E(j.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let ie=0;ie<j.locationSize;ie++)L(j.location+ie,Ce/j.locationSize,mt,_e,Ce*Ye,Ce/j.locationSize*ie*Ye,Q)}}else if(te!==void 0){const _e=te[ne];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(j.location,_e);break;case 3:n.vertexAttrib3fv(j.location,_e);break;case 4:n.vertexAttrib4fv(j.location,_e);break;default:n.vertexAttrib1fv(j.location,_e)}}}}N()}function k(){y();for(const v in i){const x=i[v];for(const I in x){const w=x[I];for(const ee in w)p(w[ee].object),delete w[ee];delete x[I]}delete i[v]}}function O(v){if(i[v.id]===void 0)return;const x=i[v.id];for(const I in x){const w=x[I];for(const ee in w)p(w[ee].object),delete w[ee];delete x[I]}delete i[v.id]}function M(v){for(const x in i){const I=i[x];if(I[v.id]===void 0)continue;const w=I[v.id];for(const ee in w)p(w[ee].object),delete w[ee];delete I[v.id]}}function y(){g(),a=!0,s!==r&&(s=r,h(s.object))}function g(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:y,resetDefaultState:g,dispose:k,releaseStatesOfGeometry:O,releaseStatesOfProgram:M,initAttributes:C,enableAttribute:E,disableUnusedAttributes:N}}function Dv(n,e,t){let i;function r(h){i=h}function s(h,p){n.drawArrays(i,h,p),t.update(p,i,1)}function a(h,p,m){m!==0&&(n.drawArraysInstanced(i,h,p,m),t.update(p,i,m))}function c(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,m);let S=0;for(let A=0;A<m;A++)S+=p[A];t.update(S,i,1)}function l(h,p,m,d){if(m===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let A=0;A<h.length;A++)a(h[A],p[A],d[A]);else{S.multiDrawArraysInstancedWEBGL(i,h,0,p,0,d,0,m);let A=0;for(let C=0;C<m;C++)A+=p[C]*d[C];t.update(A,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=l}function Lv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(M){return!(M!==_n&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(M){const y=M===As&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ei&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Yn&&!y)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=l(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=n.getParameter(n.MAX_TEXTURE_SIZE),E=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),N=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),P=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),k=A>0,O=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:d,maxTextures:S,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:E,maxAttributes:f,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:k,maxSamples:O}}function Nv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Hi,c=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){const S=m.length!==0||d||i!==0||r;return r=d,i=m.length,S},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,d){t=p(m,d,0)},this.setState=function(m,d,S){const A=m.clippingPlanes,C=m.clipIntersection,E=m.clipShadows,f=n.get(m);if(!r||A===null||A.length===0||s&&!E)s?p(null):h();else{const N=s?0:i,L=N*4;let P=f.clippingState||null;l.value=P,P=p(A,d,L,S);for(let k=0;k!==L;++k)P[k]=t[k];f.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,d,S,A){const C=m!==null?m.length:0;let E=null;if(C!==0){if(E=l.value,A!==!0||E===null){const f=S+C*4,N=d.matrixWorldInverse;c.getNormalMatrix(N),(E===null||E.length<f)&&(E=new Float32Array(f));for(let L=0,P=S;L!==C;++L,P+=4)a.copy(m[L]).applyMatrix4(N,c),a.normal.toArray(E,P),E[P+3]=a.constant}l.value=E,l.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,E}}function Uv(n){let e=new WeakMap;function t(a,c){return c===cc?a.mapping=Nr:c===lc&&(a.mapping=Ur),a}function i(a){if(a&&a.isTexture){const c=a.mapping;if(c===cc||c===lc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new Fm(l.height);return h.fromEquirectangularTexture(n,a),e.set(a,h),a.addEventListener("dispose",r),t(h.texture,a.mapping)}else return null}}return a}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ar=4,Oh=[.125,.215,.35,.446,.526,.582],qi=20,Oa=new qm,Fh=new at;let Fa=null,ka=0,Ba=0,Va=!1;const Gi=(1+Math.sqrt(5))/2,Tr=1/Gi,kh=[new W(-Gi,Tr,0),new W(Gi,Tr,0),new W(-Tr,0,Gi),new W(Tr,0,Gi),new W(0,Gi,-Tr),new W(0,Gi,Tr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],Ov=new W;class Bh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:c=Ov}=s;Fa=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,c),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fa,ka,Ba),this._renderer.xr.enabled=Va,e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fa=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:As,format:_n,colorSpace:Or,depthBuffer:!1},r=Vh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fv(s)),this._blurMaterial=kv(s,e,t)}return r}_compileMaterial(e){const t=new Cn(this._lodPlanes[0],e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,i,r,s){const l=new an(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,d=m.autoClear,S=m.toneMapping;m.getClearColor(Fh),m.toneMapping=Mi,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null));const C=new cl({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),E=new Cn(new Cs,C);let f=!1;const N=e.background;N?N.isColor&&(C.color.copy(N),e.background=null,f=!0):(C.color.copy(Fh),f=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(l.up.set(0,h[L],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[L],s.y,s.z)):P===1?(l.up.set(0,0,h[L]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[L],s.z)):(l.up.set(0,h[L],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[L]));const k=this._cubeSize;vo(r,P*k,L>2?k:0,k,k),m.setRenderTarget(r),f&&m.render(E,l),m.render(e,l)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=S,m.autoClear=d,e.background=N}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Nr||e.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Cn(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const l=this._cubeSize;vo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Oa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=kh[(r-s-1)%kh.length];this._blur(e,s-1,s,a,c)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,c){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new Cn(this._lodPlanes[r],h),d=h.uniforms,S=this._sizeLods[i]-1,A=isFinite(s)?Math.PI/(2*S):2*Math.PI/(2*qi-1),C=s/A,E=isFinite(s)?1+Math.floor(p*C):qi;E>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${qi}`);const f=[];let N=0;for(let M=0;M<qi;++M){const y=M/C,g=Math.exp(-y*y/2);f.push(g),M===0?N+=g:M<E&&(N+=2*g)}for(let M=0;M<f.length;M++)f[M]=f[M]/N;d.envMap.value=e.texture,d.samples.value=E,d.weights.value=f,d.latitudinal.value=a==="latitudinal",c&&(d.poleAxis.value=c);const{_lodMax:L}=this;d.dTheta.value=A,d.mipInt.value=L-i;const P=this._sizeLods[r],k=3*P*(r>L-Ar?r-L+Ar:0),O=4*(this._cubeSize-P);vo(t,k,O,3*P,2*P),l.setRenderTarget(t),l.render(m,Oa)}}function Fv(n){const e=[],t=[],i=[];let r=n;const s=n-Ar+1+Oh.length;for(let a=0;a<s;a++){const c=Math.pow(2,r);t.push(c);let l=1/c;a>n-Ar?l=Oh[a-n+Ar-1]:a===0&&(l=0),i.push(l);const h=1/(c-2),p=-h,m=1+h,d=[p,p,m,p,m,m,p,p,m,m,p,m],S=6,A=6,C=3,E=2,f=1,N=new Float32Array(C*A*S),L=new Float32Array(E*A*S),P=new Float32Array(f*A*S);for(let O=0;O<S;O++){const M=O%3*2/3-1,y=O>2?0:-1,g=[M,y,0,M+2/3,y,0,M+2/3,y+1,0,M,y,0,M+2/3,y+1,0,M,y+1,0];N.set(g,C*A*O),L.set(d,E*A*O);const v=[O,O,O,O,O,O];P.set(v,f*A*O)}const k=new Un;k.setAttribute("position",new Pn(N,C)),k.setAttribute("uv",new Pn(L,E)),k.setAttribute("faceIndex",new Pn(P,f)),e.push(k),r>Ar&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vh(n,e,t){const i=new tr(n,e,t);return i.texture.mapping=jo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function kv(n,e,t){const i=new Float32Array(qi),r=new W(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function zh(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Hh(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bv(n){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const l=c.mapping,h=l===cc||l===lc,p=l===Nr||l===Ur;if(h||p){let m=e.get(c);const d=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==d)return t===null&&(t=new Bh(n)),m=h?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const S=c.image;return h&&S&&S.height>0||p&&S&&r(S)?(t===null&&(t=new Bh(n)),m=h?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",s),m.texture):null}}}return c}function r(c){let l=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&l++;return l===h}function s(c){const l=c.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Vv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Es("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zv(n,e,t,i){const r={},s=new WeakMap;function a(m){const d=m.target;d.index!==null&&e.remove(d.index);for(const A in d.attributes)e.remove(d.attributes[A]);d.removeEventListener("dispose",a),delete r[d.id];const S=s.get(d);S&&(e.remove(S),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function c(m,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(m){const d=m.attributes;for(const S in d)e.update(d[S],n.ARRAY_BUFFER)}function h(m){const d=[],S=m.index,A=m.attributes.position;let C=0;if(S!==null){const N=S.array;C=S.version;for(let L=0,P=N.length;L<P;L+=3){const k=N[L+0],O=N[L+1],M=N[L+2];d.push(k,O,O,M,M,k)}}else if(A!==void 0){const N=A.array;C=A.version;for(let L=0,P=N.length/3-1;L<P;L+=3){const k=L+0,O=L+1,M=L+2;d.push(k,O,O,M,M,k)}}else return;const E=new(_d(d)?Td:xd)(d,1);E.version=C;const f=s.get(m);f&&e.remove(f),s.set(m,E)}function p(m){const d=s.get(m);if(d){const S=m.index;S!==null&&d.version<S.version&&h(m)}else h(m);return s.get(m)}return{get:c,update:l,getWireframeAttribute:p}}function Hv(n,e,t){let i;function r(d){i=d}let s,a;function c(d){s=d.type,a=d.bytesPerElement}function l(d,S){n.drawElements(i,S,s,d*a),t.update(S,i,1)}function h(d,S,A){A!==0&&(n.drawElementsInstanced(i,S,s,d*a,A),t.update(S,i,A))}function p(d,S,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,S,0,s,d,0,A);let E=0;for(let f=0;f<A;f++)E+=S[f];t.update(E,i,1)}function m(d,S,A,C){if(A===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let f=0;f<d.length;f++)h(d[f]/a,S[f],C[f]);else{E.multiDrawElementsInstancedWEBGL(i,S,0,s,d,0,C,0,A);let f=0;for(let N=0;N<A;N++)f+=S[N]*C[N];t.update(f,i,1)}}this.setMode=r,this.setIndex=c,this.render=l,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Gv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,c){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=c*(s/3);break;case n.LINES:t.lines+=c*(s/2);break;case n.LINE_STRIP:t.lines+=c*(s-1);break;case n.LINE_LOOP:t.lines+=c*s;break;case n.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Wv(n,e,t){const i=new WeakMap,r=new Tt;function s(a,c,l){const h=a.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let d=i.get(c);if(d===void 0||d.count!==m){let v=function(){y.dispose(),i.delete(c),c.removeEventListener("dispose",v)};var S=v;d!==void 0&&d.texture.dispose();const A=c.morphAttributes.position!==void 0,C=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,f=c.morphAttributes.position||[],N=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let P=0;A===!0&&(P=1),C===!0&&(P=2),E===!0&&(P=3);let k=c.attributes.position.count*P,O=1;k>e.maxTextureSize&&(O=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const M=new Float32Array(k*O*4*m),y=new vd(M,k,O,m);y.type=Yn,y.needsUpdate=!0;const g=P*4;for(let x=0;x<m;x++){const I=f[x],w=N[x],ee=L[x],K=k*O*4*x;for(let te=0;te<I.count;te++){const ne=te*g;A===!0&&(r.fromBufferAttribute(I,te),M[K+ne+0]=r.x,M[K+ne+1]=r.y,M[K+ne+2]=r.z,M[K+ne+3]=0),C===!0&&(r.fromBufferAttribute(w,te),M[K+ne+4]=r.x,M[K+ne+5]=r.y,M[K+ne+6]=r.z,M[K+ne+7]=0),E===!0&&(r.fromBufferAttribute(ee,te),M[K+ne+8]=r.x,M[K+ne+9]=r.y,M[K+ne+10]=r.z,M[K+ne+11]=ee.itemSize===4?r.w:1)}}d={count:m,texture:y,size:new ft(k,O)},i.set(c,d),c.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let A=0;for(let E=0;E<h.length;E++)A+=h[E];const C=c.morphTargetsRelative?1:1-A;l.getUniforms().setValue(n,"morphTargetBaseInfluence",C),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Xv(n,e,t,i){let r=new WeakMap;function s(l){const h=i.render.frame,p=l.geometry,m=e.get(l,p);if(r.get(m)!==h&&(e.update(m),r.set(m,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return m}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}const Dd=new $t,Gh=new Cd(1,1),Ld=new vd,Nd=new Sm,Ud=new wd,Wh=[],Xh=[],qh=new Float32Array(16),$h=new Float32Array(9),jh=new Float32Array(4);function zr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Wh[r];if(s===void 0&&(s=new Float32Array(r),Wh[r]=s),e!==0){i.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,n[a].toArray(s,c)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Jo(n,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function Kv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ct(t,i))return;jh.set(i),n.uniformMatrix2fv(this.addr,!1,jh),It(t,i)}}function Jv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ct(t,i))return;$h.set(i),n.uniformMatrix3fv(this.addr,!1,$h),It(t,i)}}function Zv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ct(t,i))return;qh.set(i),n.uniformMatrix4fv(this.addr,!1,qh),It(t,i)}}function Qv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function n0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function i0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function s0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function o0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function a0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Gh.compareFunction=gd,s=Gh):s=Dd,t.setTexture2D(e||s,r)}function c0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Nd,r)}function l0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ud,r)}function h0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ld,r)}function u0(n){switch(n){case 5126:return qv;case 35664:return $v;case 35665:return jv;case 35666:return Yv;case 35674:return Kv;case 35675:return Jv;case 35676:return Zv;case 5124:case 35670:return Qv;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return r0;case 36295:return s0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return h0}}function d0(n,e){n.uniform1fv(this.addr,e)}function f0(n,e){const t=zr(e,this.size,2);n.uniform2fv(this.addr,t)}function p0(n,e){const t=zr(e,this.size,3);n.uniform3fv(this.addr,t)}function m0(n,e){const t=zr(e,this.size,4);n.uniform4fv(this.addr,t)}function g0(n,e){const t=zr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function _0(n,e){const t=zr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function v0(n,e){const t=zr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function E0(n,e){n.uniform1iv(this.addr,e)}function S0(n,e){n.uniform2iv(this.addr,e)}function y0(n,e){n.uniform3iv(this.addr,e)}function x0(n,e){n.uniform4iv(this.addr,e)}function T0(n,e){n.uniform1uiv(this.addr,e)}function M0(n,e){n.uniform2uiv(this.addr,e)}function A0(n,e){n.uniform3uiv(this.addr,e)}function w0(n,e){n.uniform4uiv(this.addr,e)}function b0(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Dd,s[a])}function R0(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Nd,s[a])}function C0(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ud,s[a])}function I0(n,e,t){const i=this.cache,r=e.length,s=Jo(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ld,s[a])}function P0(n){switch(n){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return _0;case 35676:return v0;case 5124:case 35670:return E0;case 35667:case 35671:return S0;case 35668:case 35672:return y0;case 35669:case 35673:return x0;case 5125:return T0;case 36294:return M0;case 36295:return A0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return I0}}class D0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=u0(t.type)}}class L0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P0(t.type)}}class N0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const c=r[s];c.setValue(e,t[c.id],i)}}}const za=/(\w+)(\])?(\[|\.)?/g;function Yh(n,e){n.seq.push(e),n.map[e.id]=e}function U0(n,e,t){const i=n.name,r=i.length;for(za.lastIndex=0;;){const s=za.exec(i),a=za.lastIndex;let c=s[1];const l=s[2]==="]",h=s[3];if(l&&(c=c|0),h===void 0||h==="["&&a+2===r){Yh(t,h===void 0?new D0(c,n,e):new L0(c,n,e));break}else{let m=t.map[c];m===void 0&&(m=new N0(c),Yh(t,m)),t=m}}}class Co{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);U0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const c=t[s],l=i[c.id];l.needsUpdate!==!1&&c.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Kh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const O0=37297;let F0=0;function k0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const c=a+1;i.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return i.join(`
`)}const Jh=new We;function B0(n){nt._getMatrix(Jh,nt.workingColorSpace,n);const e=`mat3( ${Jh.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Uo:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Zh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+k0(n.getShaderSource(e),c)}else return s}function V0(n,e){const t=B0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function z0(n,e){let t;switch(e){case Dp:t="Linear";break;case Lp:t="Reinhard";break;case Np:t="Cineon";break;case Up:t="ACESFilmic";break;case Fp:t="AgX";break;case kp:t="Neutral";break;case Op:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Eo=new W;function H0(){nt.getLuminanceCoefficients(Eo);const n=Eo.x.toFixed(4),e=Eo.y.toFixed(4),t=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function W0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function X0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let c=1;s.type===n.FLOAT_MAT2&&(c=2),s.type===n.FLOAT_MAT3&&(c=3),s.type===n.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:c}}return t}function rs(n){return n!==""}function Qh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(n){return n.replace(q0,j0)}const $0=new Map;function j0(n,e){let t=qe[e];if(t===void 0){const i=$0.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zc(t)}const Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(n){return n.replace(Y0,K0)}function K0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function J0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===up?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Z0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Nr:case Ur:e="ENVMAP_TYPE_CUBE";break;case jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function eE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case od:e="ENVMAP_BLENDING_MULTIPLY";break;case Ip:e="ENVMAP_BLENDING_MIX";break;case Pp:e="ENVMAP_BLENDING_ADD";break}return e}function tE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function nE(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,c=t.fragmentShader;const l=J0(t),h=Z0(t),p=Q0(t),m=eE(t),d=tE(t),S=G0(t),A=W0(s),C=r.createProgram();let E,f,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(E=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(rs).join(`
`),E.length>0&&(E+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(rs).join(`
`),f.length>0&&(f+=`
`)):(E=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),f=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?qe.tonemapping_pars_fragment:"",t.toneMapping!==Mi?z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,V0("linearToOutputTexel",t.outputColorSpace),H0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),a=zc(a),a=Qh(a,t),a=eu(a,t),c=zc(c),c=Qh(c,t),c=eu(c,t),a=tu(a),c=tu(c),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,E=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,f=["#define varying in",t.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const L=N+E+a,P=N+f+c,k=Kh(r,r.VERTEX_SHADER,L),O=Kh(r,r.FRAGMENT_SHADER,P);r.attachShader(C,k),r.attachShader(C,O),t.index0AttributeName!==void 0?r.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(C,0,"position"),r.linkProgram(C);function M(x){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(C)||"",w=r.getShaderInfoLog(k)||"",ee=r.getShaderInfoLog(O)||"",K=I.trim(),te=w.trim(),ne=ee.trim();let j=!0,ue=!0;if(r.getProgramParameter(C,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,C,k,O);else{const _e=Zh(r,k,"vertex"),Ce=Zh(r,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(C,r.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+K+`
`+_e+`
`+Ce)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(te===""||ne==="")&&(ue=!1);ue&&(x.diagnostics={runnable:j,programLog:K,vertexShader:{log:te,prefix:E},fragmentShader:{log:ne,prefix:f}})}r.deleteShader(k),r.deleteShader(O),y=new Co(r,C),g=X0(r,C)}let y;this.getUniforms=function(){return y===void 0&&M(this),y};let g;this.getAttributes=function(){return g===void 0&&M(this),g};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(C,O0)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F0++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=O,this}let iE=0;class rE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sE(e),t.set(e,i)),i}}class sE{constructor(e){this.id=iE++,this.code=e,this.usedTimes=0}}function oE(n,e,t,i,r,s,a){const c=new Sd,l=new rE,h=new Set,p=[],m=r.logarithmicDepthBuffer,d=r.vertexTextures;let S=r.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(g){return h.add(g),g===0?"uv":`uv${g}`}function E(g,v,x,I,w){const ee=I.fog,K=w.geometry,te=g.isMeshStandardMaterial?I.environment:null,ne=(g.isMeshStandardMaterial?t:e).get(g.envMap||te),j=ne&&ne.mapping===jo?ne.image.height:null,ue=A[g.type];g.precision!==null&&(S=r.getMaxPrecision(g.precision),S!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",S,"instead."));const _e=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ce=_e!==void 0?_e.length:0;let Be=0;K.morphAttributes.position!==void 0&&(Be=1),K.morphAttributes.normal!==void 0&&(Be=2),K.morphAttributes.color!==void 0&&(Be=3);let Ge,mt,Ye,Q;if(ue){const Ke=An[ue];Ge=Ke.vertexShader,mt=Ke.fragmentShader}else Ge=g.vertexShader,mt=g.fragmentShader,l.update(g),Ye=l.getVertexShaderID(g),Q=l.getFragmentShaderID(g);const ie=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),Fe=w.isInstancedMesh===!0,Ae=w.isBatchedMesh===!0,$e=!!g.map,Mt=!!g.matcap,U=!!ne,ut=!!g.aoMap,Ve=!!g.lightMap,Ne=!!g.bumpMap,Me=!!g.normalMap,gt=!!g.displacementMap,Te=!!g.emissiveMap,He=!!g.metalnessMap,yt=!!g.roughnessMap,St=g.anisotropy>0,D=g.clearcoat>0,T=g.dispersion>0,H=g.iridescence>0,q=g.sheen>0,Z=g.transmission>0,Y=St&&!!g.anisotropyMap,be=D&&!!g.clearcoatMap,ce=D&&!!g.clearcoatNormalMap,we=D&&!!g.clearcoatRoughnessMap,ye=H&&!!g.iridescenceMap,oe=H&&!!g.iridescenceThicknessMap,me=q&&!!g.sheenColorMap,Le=q&&!!g.sheenRoughnessMap,Re=!!g.specularMap,fe=!!g.specularColorMap,ze=!!g.specularIntensityMap,F=Z&&!!g.transmissionMap,ae=Z&&!!g.thicknessMap,le=!!g.gradientMap,ve=!!g.alphaMap,re=g.alphaTest>0,J=!!g.alphaHash,xe=!!g.extensions;let ke=Mi;g.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ke=n.toneMapping);const ct={shaderID:ue,shaderType:g.type,shaderName:g.name,vertexShader:Ge,fragmentShader:mt,defines:g.defines,customVertexShaderID:Ye,customFragmentShaderID:Q,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:S,batching:Ae,batchingColor:Ae&&w._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&w.instanceColor!==null,instancingMorph:Fe&&w.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Or,alphaToCoverage:!!g.alphaToCoverage,map:$e,matcap:Mt,envMap:U,envMapMode:U&&ne.mapping,envMapCubeUVHeight:j,aoMap:ut,lightMap:Ve,bumpMap:Ne,normalMap:Me,displacementMap:d&&gt,emissiveMap:Te,normalMapObjectSpace:Me&&g.normalMapType===Gp,normalMapTangentSpace:Me&&g.normalMapType===Hp,metalnessMap:He,roughnessMap:yt,anisotropy:St,anisotropyMap:Y,clearcoat:D,clearcoatMap:be,clearcoatNormalMap:ce,clearcoatRoughnessMap:we,dispersion:T,iridescence:H,iridescenceMap:ye,iridescenceThicknessMap:oe,sheen:q,sheenColorMap:me,sheenRoughnessMap:Le,specularMap:Re,specularColorMap:fe,specularIntensityMap:ze,transmission:Z,transmissionMap:F,thicknessMap:ae,gradientMap:le,opaque:g.transparent===!1&&g.blending===br&&g.alphaToCoverage===!1,alphaMap:ve,alphaTest:re,alphaHash:J,combine:g.combine,mapUv:$e&&C(g.map.channel),aoMapUv:ut&&C(g.aoMap.channel),lightMapUv:Ve&&C(g.lightMap.channel),bumpMapUv:Ne&&C(g.bumpMap.channel),normalMapUv:Me&&C(g.normalMap.channel),displacementMapUv:gt&&C(g.displacementMap.channel),emissiveMapUv:Te&&C(g.emissiveMap.channel),metalnessMapUv:He&&C(g.metalnessMap.channel),roughnessMapUv:yt&&C(g.roughnessMap.channel),anisotropyMapUv:Y&&C(g.anisotropyMap.channel),clearcoatMapUv:be&&C(g.clearcoatMap.channel),clearcoatNormalMapUv:ce&&C(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&C(g.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&C(g.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&C(g.iridescenceThicknessMap.channel),sheenColorMapUv:me&&C(g.sheenColorMap.channel),sheenRoughnessMapUv:Le&&C(g.sheenRoughnessMap.channel),specularMapUv:Re&&C(g.specularMap.channel),specularColorMapUv:fe&&C(g.specularColorMap.channel),specularIntensityMapUv:ze&&C(g.specularIntensityMap.channel),transmissionMapUv:F&&C(g.transmissionMap.channel),thicknessMapUv:ae&&C(g.thicknessMap.channel),alphaMapUv:ve&&C(g.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Me||St),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!K.attributes.uv&&($e||ve),fog:!!ee,useFog:g.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:g.flatShading===!0&&g.wireframe===!1,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Se,skinning:w.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Be,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&x.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:$e&&g.map.isVideoTexture===!0&&nt.getTransfer(g.map.colorSpace)===dt,decodeVideoTextureEmissive:Te&&g.emissiveMap.isVideoTexture===!0&&nt.getTransfer(g.emissiveMap.colorSpace)===dt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===mn,flipSided:g.side===qt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:xe&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&g.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ct.vertexUv1s=h.has(1),ct.vertexUv2s=h.has(2),ct.vertexUv3s=h.has(3),h.clear(),ct}function f(g){const v=[];if(g.shaderID?v.push(g.shaderID):(v.push(g.customVertexShaderID),v.push(g.customFragmentShaderID)),g.defines!==void 0)for(const x in g.defines)v.push(x),v.push(g.defines[x]);return g.isRawShaderMaterial===!1&&(N(v,g),L(v,g),v.push(n.outputColorSpace)),v.push(g.customProgramCacheKey),v.join()}function N(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}function L(g,v){c.disableAll(),v.supportsVertexTextures&&c.enable(0),v.instancing&&c.enable(1),v.instancingColor&&c.enable(2),v.instancingMorph&&c.enable(3),v.matcap&&c.enable(4),v.envMap&&c.enable(5),v.normalMapObjectSpace&&c.enable(6),v.normalMapTangentSpace&&c.enable(7),v.clearcoat&&c.enable(8),v.iridescence&&c.enable(9),v.alphaTest&&c.enable(10),v.vertexColors&&c.enable(11),v.vertexAlphas&&c.enable(12),v.vertexUv1s&&c.enable(13),v.vertexUv2s&&c.enable(14),v.vertexUv3s&&c.enable(15),v.vertexTangents&&c.enable(16),v.anisotropy&&c.enable(17),v.alphaHash&&c.enable(18),v.batching&&c.enable(19),v.dispersion&&c.enable(20),v.batchingColor&&c.enable(21),v.gradientMap&&c.enable(22),g.push(c.mask),c.disableAll(),v.fog&&c.enable(0),v.useFog&&c.enable(1),v.flatShading&&c.enable(2),v.logarithmicDepthBuffer&&c.enable(3),v.reversedDepthBuffer&&c.enable(4),v.skinning&&c.enable(5),v.morphTargets&&c.enable(6),v.morphNormals&&c.enable(7),v.morphColors&&c.enable(8),v.premultipliedAlpha&&c.enable(9),v.shadowMapEnabled&&c.enable(10),v.doubleSided&&c.enable(11),v.flipSided&&c.enable(12),v.useDepthPacking&&c.enable(13),v.dithering&&c.enable(14),v.transmission&&c.enable(15),v.sheen&&c.enable(16),v.opaque&&c.enable(17),v.pointsUvs&&c.enable(18),v.decodeVideoTexture&&c.enable(19),v.decodeVideoTextureEmissive&&c.enable(20),v.alphaToCoverage&&c.enable(21),g.push(c.mask)}function P(g){const v=A[g.type];let x;if(v){const I=An[v];x=Lm.clone(I.uniforms)}else x=g.uniforms;return x}function k(g,v){let x;for(let I=0,w=p.length;I<w;I++){const ee=p[I];if(ee.cacheKey===v){x=ee,++x.usedTimes;break}}return x===void 0&&(x=new nE(n,v,g,s),p.push(x)),x}function O(g){if(--g.usedTimes===0){const v=p.indexOf(g);p[v]=p[p.length-1],p.pop(),g.destroy()}}function M(g){l.remove(g)}function y(){l.dispose()}return{getParameters:E,getProgramCacheKey:f,getUniforms:P,acquireProgram:k,releaseProgram:O,releaseShaderCache:M,programs:p,dispose:y}}function aE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let c=n.get(a);return c===void 0&&(c={},n.set(a,c)),c}function i(a){n.delete(a)}function r(a,c,l){n.get(a)[c]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function cE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function iu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ru(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(m,d,S,A,C,E){let f=n[e];return f===void 0?(f={id:m.id,object:m,geometry:d,material:S,groupOrder:A,renderOrder:m.renderOrder,z:C,group:E},n[e]=f):(f.id=m.id,f.object=m,f.geometry=d,f.material=S,f.groupOrder=A,f.renderOrder=m.renderOrder,f.z=C,f.group=E),e++,f}function c(m,d,S,A,C,E){const f=a(m,d,S,A,C,E);S.transmission>0?i.push(f):S.transparent===!0?r.push(f):t.push(f)}function l(m,d,S,A,C,E){const f=a(m,d,S,A,C,E);S.transmission>0?i.unshift(f):S.transparent===!0?r.unshift(f):t.unshift(f)}function h(m,d){t.length>1&&t.sort(m||cE),i.length>1&&i.sort(d||iu),r.length>1&&r.sort(d||iu)}function p(){for(let m=e,d=n.length;m<d;m++){const S=n[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:p,sort:h}}function lE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new ru,n.set(i,[a])):r>=s.length?(a=new ru,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function hE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new at};break;case"SpotLight":t={position:new W,direction:new W,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function uE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dE=0;function fE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pE(n){const e=new hE,t=uE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new W);const r=new W,s=new bt,a=new bt;function c(h){let p=0,m=0,d=0;for(let g=0;g<9;g++)i.probe[g].set(0,0,0);let S=0,A=0,C=0,E=0,f=0,N=0,L=0,P=0,k=0,O=0,M=0;h.sort(fE);for(let g=0,v=h.length;g<v;g++){const x=h[g],I=x.color,w=x.intensity,ee=x.distance,K=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)p+=I.r*w,m+=I.g*w,d+=I.b*w;else if(x.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(x.sh.coefficients[te],w);M++}else if(x.isDirectionalLight){const te=e.get(x);if(te.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const ne=x.shadow,j=t.get(x);j.shadowIntensity=ne.intensity,j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,i.directionalShadow[S]=j,i.directionalShadowMap[S]=K,i.directionalShadowMatrix[S]=x.shadow.matrix,N++}i.directional[S]=te,S++}else if(x.isSpotLight){const te=e.get(x);te.position.setFromMatrixPosition(x.matrixWorld),te.color.copy(I).multiplyScalar(w),te.distance=ee,te.coneCos=Math.cos(x.angle),te.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),te.decay=x.decay,i.spot[C]=te;const ne=x.shadow;if(x.map&&(i.spotLightMap[k]=x.map,k++,ne.updateMatrices(x),x.castShadow&&O++),i.spotLightMatrix[C]=ne.matrix,x.castShadow){const j=t.get(x);j.shadowIntensity=ne.intensity,j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,i.spotShadow[C]=j,i.spotShadowMap[C]=K,P++}C++}else if(x.isRectAreaLight){const te=e.get(x);te.color.copy(I).multiplyScalar(w),te.halfWidth.set(x.width*.5,0,0),te.halfHeight.set(0,x.height*.5,0),i.rectArea[E]=te,E++}else if(x.isPointLight){const te=e.get(x);if(te.color.copy(x.color).multiplyScalar(x.intensity),te.distance=x.distance,te.decay=x.decay,x.castShadow){const ne=x.shadow,j=t.get(x);j.shadowIntensity=ne.intensity,j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,j.shadowCameraNear=ne.camera.near,j.shadowCameraFar=ne.camera.far,i.pointShadow[A]=j,i.pointShadowMap[A]=K,i.pointShadowMatrix[A]=x.shadow.matrix,L++}i.point[A]=te,A++}else if(x.isHemisphereLight){const te=e.get(x);te.skyColor.copy(x.color).multiplyScalar(w),te.groundColor.copy(x.groundColor).multiplyScalar(w),i.hemi[f]=te,f++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==S||y.pointLength!==A||y.spotLength!==C||y.rectAreaLength!==E||y.hemiLength!==f||y.numDirectionalShadows!==N||y.numPointShadows!==L||y.numSpotShadows!==P||y.numSpotMaps!==k||y.numLightProbes!==M)&&(i.directional.length=S,i.spot.length=C,i.rectArea.length=E,i.point.length=A,i.hemi.length=f,i.directionalShadow.length=N,i.directionalShadowMap.length=N,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=N,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=P+k-O,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=M,y.directionalLength=S,y.pointLength=A,y.spotLength=C,y.rectAreaLength=E,y.hemiLength=f,y.numDirectionalShadows=N,y.numPointShadows=L,y.numSpotShadows=P,y.numSpotMaps=k,y.numLightProbes=M,i.version=dE++)}function l(h,p){let m=0,d=0,S=0,A=0,C=0;const E=p.matrixWorldInverse;for(let f=0,N=h.length;f<N;f++){const L=h[f];if(L.isDirectionalLight){const P=i.directional[m];P.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(E),m++}else if(L.isSpotLight){const P=i.spot[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(E),P.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(E),S++}else if(L.isRectAreaLight){const P=i.rectArea[A];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(E),a.identity(),s.copy(L.matrixWorld),s.premultiply(E),a.extractRotation(s),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),A++}else if(L.isPointLight){const P=i.point[d];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(E),d++}else if(L.isHemisphereLight){const P=i.hemi[C];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(E),C++}}}return{setup:c,setupView:l,state:i}}function su(n){const e=new pE(n),t=[],i=[];function r(p){h.camera=p,t.length=0,i.length=0}function s(p){t.push(p)}function a(p){i.push(p)}function c(){e.setup(t)}function l(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:s,pushShadow:a}}function mE(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let c;return a===void 0?(c=new su(n),e.set(r,[c])):s>=a.length?(c=new su(n),a.push(c)):c=a[s],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const gE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_E=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vE(n,e,t){let i=new bd;const r=new ft,s=new ft,a=new Tt,c=new Wm({depthPacking:zp}),l=new Xm,h={},p=t.maxTextureSize,m={[bi]:qt,[qt]:bi,[mn]:mn},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:gE,fragmentShader:_E}),S=d.clone();S.defines.HORIZONTAL_PASS=1;const A=new Un;A.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Cn(A,d),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sd;let f=this.type;this.render=function(O,M,y){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||O.length===0)return;const g=n.getRenderTarget(),v=n.getActiveCubeFace(),x=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Ti),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const w=f!==Xn&&this.type===Xn,ee=f===Xn&&this.type!==Xn;for(let K=0,te=O.length;K<te;K++){const ne=O[K],j=ne.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ue=j.getFrameExtents();if(r.multiply(ue),s.copy(j.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/ue.x),r.x=s.x*ue.x,j.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/ue.y),r.y=s.y*ue.y,j.mapSize.y=s.y)),j.map===null||w===!0||ee===!0){const Ce=this.type!==Xn?{minFilter:yn,magFilter:yn}:{};j.map!==null&&j.map.dispose(),j.map=new tr(r.x,r.y,Ce),j.map.texture.name=ne.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const _e=j.getViewportCount();for(let Ce=0;Ce<_e;Ce++){const Be=j.getViewport(Ce);a.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),I.viewport(a),j.updateMatrices(ne,Ce),i=j.getFrustum(),P(M,y,j.camera,ne,this.type)}j.isPointLightShadow!==!0&&this.type===Xn&&N(j,y),j.needsUpdate=!1}f=this.type,E.needsUpdate=!1,n.setRenderTarget(g,v,x)};function N(O,M){const y=e.update(C);d.defines.VSM_SAMPLES!==O.blurSamples&&(d.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,d.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new tr(r.x,r.y)),d.uniforms.shadow_pass.value=O.map.texture,d.uniforms.resolution.value=O.mapSize,d.uniforms.radius.value=O.radius,n.setRenderTarget(O.mapPass),n.clear(),n.renderBufferDirect(M,null,y,d,C,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,n.setRenderTarget(O.map),n.clear(),n.renderBufferDirect(M,null,y,S,C,null)}function L(O,M,y,g){let v=null;const x=y.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(x!==void 0)v=x;else if(v=y.isPointLight===!0?l:c,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const I=v.uuid,w=M.uuid;let ee=h[I];ee===void 0&&(ee={},h[I]=ee);let K=ee[w];K===void 0&&(K=v.clone(),ee[w]=K,M.addEventListener("dispose",k)),v=K}if(v.visible=M.visible,v.wireframe=M.wireframe,g===Xn?v.side=M.shadowSide!==null?M.shadowSide:M.side:v.side=M.shadowSide!==null?M.shadowSide:m[M.side],v.alphaMap=M.alphaMap,v.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,v.map=M.map,v.clipShadows=M.clipShadows,v.clippingPlanes=M.clippingPlanes,v.clipIntersection=M.clipIntersection,v.displacementMap=M.displacementMap,v.displacementScale=M.displacementScale,v.displacementBias=M.displacementBias,v.wireframeLinewidth=M.wireframeLinewidth,v.linewidth=M.linewidth,y.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=n.properties.get(v);I.light=y}return v}function P(O,M,y,g,v){if(O.visible===!1)return;if(O.layers.test(M.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&v===Xn)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,O.matrixWorld);const w=e.update(O),ee=O.material;if(Array.isArray(ee)){const K=w.groups;for(let te=0,ne=K.length;te<ne;te++){const j=K[te],ue=ee[j.materialIndex];if(ue&&ue.visible){const _e=L(O,ue,g,v);O.onBeforeShadow(n,O,M,y,w,_e,j),n.renderBufferDirect(y,null,w,_e,O,j),O.onAfterShadow(n,O,M,y,w,_e,j)}}}else if(ee.visible){const K=L(O,ee,g,v);O.onBeforeShadow(n,O,M,y,w,K,null),n.renderBufferDirect(y,null,w,K,O,null),O.onAfterShadow(n,O,M,y,w,K,null)}}const I=O.children;for(let w=0,ee=I.length;w<ee;w++)P(I[w],M,y,g,v)}function k(O){O.target.removeEventListener("dispose",k);for(const y in h){const g=h[y],v=O.target.uuid;v in g&&(g[v].dispose(),delete g[v])}}}const EE={[tc]:nc,[ic]:oc,[rc]:ac,[Lr]:sc,[nc]:tc,[oc]:ic,[ac]:rc,[sc]:Lr};function SE(n,e){function t(){let F=!1;const ae=new Tt;let le=null;const ve=new Tt(0,0,0,0);return{setMask:function(re){le!==re&&!F&&(n.colorMask(re,re,re,re),le=re)},setLocked:function(re){F=re},setClear:function(re,J,xe,ke,ct){ct===!0&&(re*=ke,J*=ke,xe*=ke),ae.set(re,J,xe,ke),ve.equals(ae)===!1&&(n.clearColor(re,J,xe,ke),ve.copy(ae))},reset:function(){F=!1,le=null,ve.set(-1,0,0,0)}}}function i(){let F=!1,ae=!1,le=null,ve=null,re=null;return{setReversed:function(J){if(ae!==J){const xe=e.get("EXT_clip_control");J?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ae=J;const ke=re;re=null,this.setClear(ke)}},getReversed:function(){return ae},setTest:function(J){J?ie(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(J){le!==J&&!F&&(n.depthMask(J),le=J)},setFunc:function(J){if(ae&&(J=EE[J]),ve!==J){switch(J){case tc:n.depthFunc(n.NEVER);break;case nc:n.depthFunc(n.ALWAYS);break;case ic:n.depthFunc(n.LESS);break;case Lr:n.depthFunc(n.LEQUAL);break;case rc:n.depthFunc(n.EQUAL);break;case sc:n.depthFunc(n.GEQUAL);break;case oc:n.depthFunc(n.GREATER);break;case ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=J}},setLocked:function(J){F=J},setClear:function(J){re!==J&&(ae&&(J=1-J),n.clearDepth(J),re=J)},reset:function(){F=!1,le=null,ve=null,re=null,ae=!1}}}function r(){let F=!1,ae=null,le=null,ve=null,re=null,J=null,xe=null,ke=null,ct=null;return{setTest:function(Ke){F||(Ke?ie(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(Ke){ae!==Ke&&!F&&(n.stencilMask(Ke),ae=Ke)},setFunc:function(Ke,nn,_t){(le!==Ke||ve!==nn||re!==_t)&&(n.stencilFunc(Ke,nn,_t),le=Ke,ve=nn,re=_t)},setOp:function(Ke,nn,_t){(J!==Ke||xe!==nn||ke!==_t)&&(n.stencilOp(Ke,nn,_t),J=Ke,xe=nn,ke=_t)},setLocked:function(Ke){F=Ke},setClear:function(Ke){ct!==Ke&&(n.clearStencil(Ke),ct=Ke)},reset:function(){F=!1,ae=null,le=null,ve=null,re=null,J=null,xe=null,ke=null,ct=null}}}const s=new t,a=new i,c=new r,l=new WeakMap,h=new WeakMap;let p={},m={},d=new WeakMap,S=[],A=null,C=!1,E=null,f=null,N=null,L=null,P=null,k=null,O=null,M=new at(0,0,0),y=0,g=!1,v=null,x=null,I=null,w=null,ee=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ne=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(j)[1]),te=ne>=1):j.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),te=ne>=2);let ue=null,_e={};const Ce=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),Ge=new Tt().fromArray(Ce),mt=new Tt().fromArray(Be);function Ye(F,ae,le,ve){const re=new Uint8Array(4),J=n.createTexture();n.bindTexture(F,J),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<le;xe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(ae+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return J}const Q={};Q[n.TEXTURE_2D]=Ye(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=Ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=Ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=Ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),c.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Lr),Ne(!1),Me(ch),ie(n.CULL_FACE),ut(Ti);function ie(F){p[F]!==!0&&(n.enable(F),p[F]=!0)}function Se(F){p[F]!==!1&&(n.disable(F),p[F]=!1)}function Fe(F,ae){return m[F]!==ae?(n.bindFramebuffer(F,ae),m[F]=ae,F===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ae),F===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Ae(F,ae){let le=S,ve=!1;if(F){le=d.get(ae),le===void 0&&(le=[],d.set(ae,le));const re=F.textures;if(le.length!==re.length||le[0]!==n.COLOR_ATTACHMENT0){for(let J=0,xe=re.length;J<xe;J++)le[J]=n.COLOR_ATTACHMENT0+J;le.length=re.length,ve=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,ve=!0);ve&&n.drawBuffers(le)}function $e(F){return A!==F?(n.useProgram(F),A=F,!0):!1}const Mt={[Xi]:n.FUNC_ADD,[fp]:n.FUNC_SUBTRACT,[pp]:n.FUNC_REVERSE_SUBTRACT};Mt[mp]=n.MIN,Mt[gp]=n.MAX;const U={[_p]:n.ZERO,[vp]:n.ONE,[Ep]:n.SRC_COLOR,[Qa]:n.SRC_ALPHA,[Ap]:n.SRC_ALPHA_SATURATE,[Tp]:n.DST_COLOR,[yp]:n.DST_ALPHA,[Sp]:n.ONE_MINUS_SRC_COLOR,[ec]:n.ONE_MINUS_SRC_ALPHA,[Mp]:n.ONE_MINUS_DST_COLOR,[xp]:n.ONE_MINUS_DST_ALPHA,[wp]:n.CONSTANT_COLOR,[bp]:n.ONE_MINUS_CONSTANT_COLOR,[Rp]:n.CONSTANT_ALPHA,[Cp]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(F,ae,le,ve,re,J,xe,ke,ct,Ke){if(F===Ti){C===!0&&(Se(n.BLEND),C=!1);return}if(C===!1&&(ie(n.BLEND),C=!0),F!==dp){if(F!==E||Ke!==g){if((f!==Xi||P!==Xi)&&(n.blendEquation(n.FUNC_ADD),f=Xi,P=Xi),Ke)switch(F){case br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lh:n.blendFunc(n.ONE,n.ONE);break;case hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case hh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}N=null,L=null,k=null,O=null,M.set(0,0,0),y=0,E=F,g=Ke}return}re=re||ae,J=J||le,xe=xe||ve,(ae!==f||re!==P)&&(n.blendEquationSeparate(Mt[ae],Mt[re]),f=ae,P=re),(le!==N||ve!==L||J!==k||xe!==O)&&(n.blendFuncSeparate(U[le],U[ve],U[J],U[xe]),N=le,L=ve,k=J,O=xe),(ke.equals(M)===!1||ct!==y)&&(n.blendColor(ke.r,ke.g,ke.b,ct),M.copy(ke),y=ct),E=F,g=!1}function Ve(F,ae){F.side===mn?Se(n.CULL_FACE):ie(n.CULL_FACE);let le=F.side===qt;ae&&(le=!le),Ne(le),F.blending===br&&F.transparent===!1?ut(Ti):ut(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ve=F.stencilWrite;c.setTest(ve),ve&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Te(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(F){v!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),v=F)}function Me(F){F!==lp?(ie(n.CULL_FACE),F!==x&&(F===ch?n.cullFace(n.BACK):F===hp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),x=F}function gt(F){F!==I&&(te&&n.lineWidth(F),I=F)}function Te(F,ae,le){F?(ie(n.POLYGON_OFFSET_FILL),(w!==ae||ee!==le)&&(n.polygonOffset(ae,le),w=ae,ee=le)):Se(n.POLYGON_OFFSET_FILL)}function He(F){F?ie(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function yt(F){F===void 0&&(F=n.TEXTURE0+K-1),ue!==F&&(n.activeTexture(F),ue=F)}function St(F,ae,le){le===void 0&&(ue===null?le=n.TEXTURE0+K-1:le=ue);let ve=_e[le];ve===void 0&&(ve={type:void 0,texture:void 0},_e[le]=ve),(ve.type!==F||ve.texture!==ae)&&(ue!==le&&(n.activeTexture(le),ue=le),n.bindTexture(F,ae||Q[F]),ve.type=F,ve.texture=ae)}function D(){const F=_e[ue];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function T(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(F){Ge.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ge.copy(F))}function Le(F){mt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),mt.copy(F))}function Re(F,ae){let le=h.get(ae);le===void 0&&(le=new WeakMap,h.set(ae,le));let ve=le.get(F);ve===void 0&&(ve=n.getUniformBlockIndex(ae,F.name),le.set(F,ve))}function fe(F,ae){const ve=h.get(ae).get(F);l.get(ae)!==ve&&(n.uniformBlockBinding(ae,ve,F.__bindingPointIndex),l.set(ae,ve))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},ue=null,_e={},m={},d=new WeakMap,S=[],A=null,C=!1,E=null,f=null,N=null,L=null,P=null,k=null,O=null,M=new at(0,0,0),y=0,g=!1,v=null,x=null,I=null,w=null,ee=null,Ge.set(0,0,n.canvas.width,n.canvas.height),mt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),c.reset()}return{buffers:{color:s,depth:a,stencil:c},enable:ie,disable:Se,bindFramebuffer:Fe,drawBuffers:Ae,useProgram:$e,setBlending:ut,setMaterial:Ve,setFlipSided:Ne,setCullFace:Me,setLineWidth:gt,setPolygonOffset:Te,setScissorTest:He,activeTexture:yt,bindTexture:St,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:H,texImage2D:ye,texImage3D:oe,updateUBOMapping:Re,uniformBlockBinding:fe,texStorage2D:ce,texStorage3D:we,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:be,scissor:me,viewport:Le,reset:ze}}function yE(n,e,t,i,r,s,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ft,p=new WeakMap;let m;const d=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,T){return S?new OffscreenCanvas(D,T):Fo("canvas")}function C(D,T,H){let q=1;const Z=St(D);if((Z.width>H||Z.height>H)&&(q=H/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Y=Math.floor(q*Z.width),be=Math.floor(q*Z.height);m===void 0&&(m=A(Y,be));const ce=T?A(Y,be):m;return ce.width=Y,ce.height=be,ce.getContext("2d").drawImage(D,0,0,Y,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+be+")."),ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),D;return D}function E(D){return D.generateMipmaps}function f(D){n.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function L(D,T,H,q,Z=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Y=T;if(T===n.RED&&(H===n.FLOAT&&(Y=n.R32F),H===n.HALF_FLOAT&&(Y=n.R16F),H===n.UNSIGNED_BYTE&&(Y=n.R8)),T===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.R8UI),H===n.UNSIGNED_SHORT&&(Y=n.R16UI),H===n.UNSIGNED_INT&&(Y=n.R32UI),H===n.BYTE&&(Y=n.R8I),H===n.SHORT&&(Y=n.R16I),H===n.INT&&(Y=n.R32I)),T===n.RG&&(H===n.FLOAT&&(Y=n.RG32F),H===n.HALF_FLOAT&&(Y=n.RG16F),H===n.UNSIGNED_BYTE&&(Y=n.RG8)),T===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.RG8UI),H===n.UNSIGNED_SHORT&&(Y=n.RG16UI),H===n.UNSIGNED_INT&&(Y=n.RG32UI),H===n.BYTE&&(Y=n.RG8I),H===n.SHORT&&(Y=n.RG16I),H===n.INT&&(Y=n.RG32I)),T===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),H===n.UNSIGNED_INT&&(Y=n.RGB32UI),H===n.BYTE&&(Y=n.RGB8I),H===n.SHORT&&(Y=n.RGB16I),H===n.INT&&(Y=n.RGB32I)),T===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),H===n.UNSIGNED_INT&&(Y=n.RGBA32UI),H===n.BYTE&&(Y=n.RGBA8I),H===n.SHORT&&(Y=n.RGBA16I),H===n.INT&&(Y=n.RGBA32I)),T===n.RGB&&(H===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),T===n.RGBA){const be=Z?Uo:nt.getTransfer(q);H===n.FLOAT&&(Y=n.RGBA32F),H===n.HALF_FLOAT&&(Y=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Y=be===dt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function P(D,T){let H;return D?T===null||T===er||T===ms?H=n.DEPTH24_STENCIL8:T===Yn?H=n.DEPTH32F_STENCIL8:T===ps&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===er||T===ms?H=n.DEPTH_COMPONENT24:T===Yn?H=n.DEPTH_COMPONENT32F:T===ps&&(H=n.DEPTH_COMPONENT16),H}function k(D,T){return E(D)===!0||D.isFramebufferTexture&&D.minFilter!==yn&&D.minFilter!==bn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function O(D){const T=D.target;T.removeEventListener("dispose",O),y(T),T.isVideoTexture&&p.delete(T)}function M(D){const T=D.target;T.removeEventListener("dispose",M),v(T)}function y(D){const T=i.get(D);if(T.__webglInit===void 0)return;const H=D.source,q=d.get(H);if(q){const Z=q[T.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&g(D),Object.keys(q).length===0&&d.delete(H)}i.remove(D)}function g(D){const T=i.get(D);n.deleteTexture(T.__webglTexture);const H=D.source,q=d.get(H);delete q[T.__cacheKey],a.memory.textures--}function v(D){const T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(T.__webglFramebuffer[q]))for(let Z=0;Z<T.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(T.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(T.__webglFramebuffer[q]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[q])}else{if(Array.isArray(T.__webglFramebuffer))for(let q=0;q<T.__webglFramebuffer.length;q++)n.deleteFramebuffer(T.__webglFramebuffer[q]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let q=0;q<T.__webglColorRenderbuffer.length;q++)T.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[q]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const H=D.textures;for(let q=0,Z=H.length;q<Z;q++){const Y=i.get(H[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(H[q])}i.remove(D)}let x=0;function I(){x=0}function w(){const D=x;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),x+=1,D}function ee(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function K(D,T){const H=i.get(D);if(D.isVideoTexture&&He(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&H.__version!==D.version){const q=D.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(H,D,T);return}}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+T)}function te(D,T){const H=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){Q(H,D,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+T)}function ne(D,T){const H=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){Q(H,D,T);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+T)}function j(D,T){const H=i.get(D);if(D.version>0&&H.__version!==D.version){ie(H,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+T)}const ue={[hc]:n.REPEAT,[ji]:n.CLAMP_TO_EDGE,[uc]:n.MIRRORED_REPEAT},_e={[yn]:n.NEAREST,[Bp]:n.NEAREST_MIPMAP_NEAREST,[Ys]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[da]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},Ce={[Wp]:n.NEVER,[Kp]:n.ALWAYS,[Xp]:n.LESS,[gd]:n.LEQUAL,[qp]:n.EQUAL,[Yp]:n.GEQUAL,[$p]:n.GREATER,[jp]:n.NOTEQUAL};function Be(D,T){if(T.type===Yn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===bn||T.magFilter===da||T.magFilter===Ys||T.magFilter===Yi||T.minFilter===bn||T.minFilter===da||T.minFilter===Ys||T.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ue[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ue[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ue[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,_e[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,_e[T.minFilter]),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Ce[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yn||T.minFilter!==Ys&&T.minFilter!==Yi||T.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ge(D,T){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",O));const q=T.source;let Z=d.get(q);Z===void 0&&(Z={},d.set(q,Z));const Y=ee(T);if(Y!==D.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Z[Y].usedTimes++;const be=Z[D.__cacheKey];be!==void 0&&(Z[D.__cacheKey].usedTimes--,be.usedTimes===0&&g(T)),D.__cacheKey=Y,D.__webglTexture=Z[Y].texture}return H}function mt(D,T,H){return Math.floor(Math.floor(D/H)/T)}function Ye(D,T,H,q){const Y=D.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,H,q,T.data);else{Y.sort((oe,me)=>oe.start-me.start);let be=0;for(let oe=1;oe<Y.length;oe++){const me=Y[be],Le=Y[oe],Re=me.start+me.count,fe=mt(Le.start,T.width,4),ze=mt(me.start,T.width,4);Le.start<=Re+1&&fe===ze&&mt(Le.start+Le.count-1,T.width,4)===fe?me.count=Math.max(me.count,Le.start+Le.count-me.start):(++be,Y[be]=Le)}Y.length=be+1;const ce=n.getParameter(n.UNPACK_ROW_LENGTH),we=n.getParameter(n.UNPACK_SKIP_PIXELS),ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let oe=0,me=Y.length;oe<me;oe++){const Le=Y[oe],Re=Math.floor(Le.start/4),fe=Math.ceil(Le.count/4),ze=Re%T.width,F=Math.floor(Re/T.width),ae=fe,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,ze,F,ae,le,H,q,T.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,we),n.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function Q(D,T,H){let q=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(q=n.TEXTURE_3D);const Z=Ge(D,T),Y=T.source;t.bindTexture(q,D.__webglTexture,n.TEXTURE0+H);const be=i.get(Y);if(Y.version!==be.__version||Z===!0){t.activeTexture(n.TEXTURE0+H);const ce=nt.getPrimaries(nt.workingColorSpace),we=T.colorSpace===Ei?null:nt.getPrimaries(T.colorSpace),ye=T.colorSpace===Ei||ce===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let oe=C(T.image,!1,r.maxTextureSize);oe=yt(T,oe);const me=s.convert(T.format,T.colorSpace),Le=s.convert(T.type);let Re=L(T.internalFormat,me,Le,T.colorSpace,T.isVideoTexture);Be(q,T);let fe;const ze=T.mipmaps,F=T.isVideoTexture!==!0,ae=be.__version===void 0||Z===!0,le=Y.dataReady,ve=k(T,oe);if(T.isDepthTexture)Re=P(T.format===_s,T.type),ae&&(F?t.texStorage2D(n.TEXTURE_2D,1,Re,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Re,oe.width,oe.height,0,me,Le,null));else if(T.isDataTexture)if(ze.length>0){F&&ae&&t.texStorage2D(n.TEXTURE_2D,ve,Re,ze[0].width,ze[0].height);for(let re=0,J=ze.length;re<J;re++)fe=ze[re],F?le&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,fe.width,fe.height,me,Le,fe.data):t.texImage2D(n.TEXTURE_2D,re,Re,fe.width,fe.height,0,me,Le,fe.data);T.generateMipmaps=!1}else F?(ae&&t.texStorage2D(n.TEXTURE_2D,ve,Re,oe.width,oe.height),le&&Ye(T,oe,me,Le)):t.texImage2D(n.TEXTURE_2D,0,Re,oe.width,oe.height,0,me,Le,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){F&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Re,ze[0].width,ze[0].height,oe.depth);for(let re=0,J=ze.length;re<J;re++)if(fe=ze[re],T.format!==_n)if(me!==null)if(F){if(le)if(T.layerUpdates.size>0){const xe=Uh(fe.width,fe.height,T.format,T.type);for(const ke of T.layerUpdates){const ct=fe.data.subarray(ke*xe/fe.data.BYTES_PER_ELEMENT,(ke+1)*xe/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,ke,fe.width,fe.height,1,me,ct)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,oe.depth,me,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Re,fe.width,fe.height,oe.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,fe.width,fe.height,oe.depth,me,Le,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Re,fe.width,fe.height,oe.depth,0,me,Le,fe.data)}else{F&&ae&&t.texStorage2D(n.TEXTURE_2D,ve,Re,ze[0].width,ze[0].height);for(let re=0,J=ze.length;re<J;re++)fe=ze[re],T.format!==_n?me!==null?F?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,fe.width,fe.height,me,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Re,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?le&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,fe.width,fe.height,me,Le,fe.data):t.texImage2D(n.TEXTURE_2D,re,Re,fe.width,fe.height,0,me,Le,fe.data)}else if(T.isDataArrayTexture)if(F){if(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Re,oe.width,oe.height,oe.depth),le)if(T.layerUpdates.size>0){const re=Uh(oe.width,oe.height,T.format,T.type);for(const J of T.layerUpdates){const xe=oe.data.subarray(J*re/oe.data.BYTES_PER_ELEMENT,(J+1)*re/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,oe.width,oe.height,1,me,Le,xe)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,Le,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,oe.width,oe.height,oe.depth,0,me,Le,oe.data);else if(T.isData3DTexture)F?(ae&&t.texStorage3D(n.TEXTURE_3D,ve,Re,oe.width,oe.height,oe.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,Le,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Re,oe.width,oe.height,oe.depth,0,me,Le,oe.data);else if(T.isFramebufferTexture){if(ae)if(F)t.texStorage2D(n.TEXTURE_2D,ve,Re,oe.width,oe.height);else{let re=oe.width,J=oe.height;for(let xe=0;xe<ve;xe++)t.texImage2D(n.TEXTURE_2D,xe,Re,re,J,0,me,Le,null),re>>=1,J>>=1}}else if(ze.length>0){if(F&&ae){const re=St(ze[0]);t.texStorage2D(n.TEXTURE_2D,ve,Re,re.width,re.height)}for(let re=0,J=ze.length;re<J;re++)fe=ze[re],F?le&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,me,Le,fe):t.texImage2D(n.TEXTURE_2D,re,Re,me,Le,fe);T.generateMipmaps=!1}else if(F){if(ae){const re=St(oe);t.texStorage2D(n.TEXTURE_2D,ve,Re,re.width,re.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Le,oe)}else t.texImage2D(n.TEXTURE_2D,0,Re,me,Le,oe);E(T)&&f(q),be.__version=Y.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ie(D,T,H){if(T.image.length!==6)return;const q=Ge(D,T),Z=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+H);const Y=i.get(Z);if(Z.version!==Y.__version||q===!0){t.activeTexture(n.TEXTURE0+H);const be=nt.getPrimaries(nt.workingColorSpace),ce=T.colorSpace===Ei?null:nt.getPrimaries(T.colorSpace),we=T.colorSpace===Ei||be===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const ye=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,me=[];for(let J=0;J<6;J++)!ye&&!oe?me[J]=C(T.image[J],!0,r.maxCubemapSize):me[J]=oe?T.image[J].image:T.image[J],me[J]=yt(T,me[J]);const Le=me[0],Re=s.convert(T.format,T.colorSpace),fe=s.convert(T.type),ze=L(T.internalFormat,Re,fe,T.colorSpace),F=T.isVideoTexture!==!0,ae=Y.__version===void 0||q===!0,le=Z.dataReady;let ve=k(T,Le);Be(n.TEXTURE_CUBE_MAP,T);let re;if(ye){F&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,ze,Le.width,Le.height);for(let J=0;J<6;J++){re=me[J].mipmaps;for(let xe=0;xe<re.length;xe++){const ke=re[xe];T.format!==_n?Re!==null?F?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,0,0,ke.width,ke.height,Re,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,ze,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,0,0,ke.width,ke.height,Re,fe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,ze,ke.width,ke.height,0,Re,fe,ke.data)}}}else{if(re=T.mipmaps,F&&ae){re.length>0&&ve++;const J=St(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,ze,J.width,J.height)}for(let J=0;J<6;J++)if(oe){F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,me[J].width,me[J].height,Re,fe,me[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,me[J].width,me[J].height,0,Re,fe,me[J].data);for(let xe=0;xe<re.length;xe++){const ct=re[xe].image[J].image;F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,0,0,ct.width,ct.height,Re,fe,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,ze,ct.width,ct.height,0,Re,fe,ct.data)}}else{F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Re,fe,me[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,Re,fe,me[J]);for(let xe=0;xe<re.length;xe++){const ke=re[xe];F?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,0,0,Re,fe,ke.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,ze,Re,fe,ke.image[J])}}}E(T)&&f(n.TEXTURE_CUBE_MAP),Y.__version=Z.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Se(D,T,H,q,Z,Y){const be=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),we=L(H.internalFormat,be,ce,H.colorSpace),ye=i.get(T),oe=i.get(H);if(oe.__renderTarget=T,!ye.__hasExternalTextures){const me=Math.max(1,T.width>>Y),Le=Math.max(1,T.height>>Y);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,we,me,Le,T.depth,0,be,ce,null):t.texImage2D(Z,Y,we,me,Le,0,be,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Te(T)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,oe.__webglTexture,0,gt(T)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,oe.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(D,T,H){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer){const q=T.depthTexture,Z=q&&q.isDepthTexture?q.type:null,Y=P(T.stencilBuffer,Z),be=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=gt(T);Te(T)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,Y,T.width,T.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Y,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Y,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,D)}else{const q=T.textures;for(let Z=0;Z<q.length;Z++){const Y=q[Z],be=s.convert(Y.format,Y.colorSpace),ce=s.convert(Y.type),we=L(Y.internalFormat,be,ce,Y.colorSpace),ye=gt(T);H&&Te(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,we,T.width,T.height):Te(T)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,we,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,we,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(T.depthTexture);q.__renderTarget=T,(!q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K(T.depthTexture,0);const Z=q.__webglTexture,Y=gt(T);if(T.depthTexture.format===gs)Te(T)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(T.depthTexture.format===_s)Te(T)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function $e(D){const T=i.get(D),H=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const q=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),q){const Z=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),T.__depthDisposeCallback=Z}T.__boundDepthTexture=q}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const q=D.texture.mipmaps;q&&q.length>0?Ae(T.__webglFramebuffer[0],D):Ae(T.__webglFramebuffer,D)}else if(H){T.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[q]),T.__webglDepthbuffer[q]===void 0)T.__webglDepthbuffer[q]=n.createRenderbuffer(),Fe(T.__webglDepthbuffer[q],D,!1);else{const Z=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=T.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Y)}}else{const q=D.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Fe(T.__webglDepthbuffer,D,!1);else{const Z=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(D,T,H){const q=i.get(D);T!==void 0&&Se(q.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&$e(D)}function U(D){const T=D.texture,H=i.get(D),q=i.get(T);D.addEventListener("dispose",M);const Z=D.textures,Y=D.isWebGLCubeRenderTarget===!0,be=Z.length>1;if(be||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=T.version,a.memory.textures++),Y){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[ce]=[];for(let we=0;we<T.mipmaps.length;we++)H.__webglFramebuffer[ce][we]=n.createFramebuffer()}else H.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let ce=0;ce<T.mipmaps.length;ce++)H.__webglFramebuffer[ce]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(be)for(let ce=0,we=Z.length;ce<we;ce++){const ye=i.get(Z[ce]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(D.samples>0&&Te(D)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ce=0;ce<Z.length;ce++){const we=Z[ce];H.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ce]);const ye=s.convert(we.format,we.colorSpace),oe=s.convert(we.type),me=L(we.internalFormat,ye,oe,we.colorSpace,D.isXRRenderTarget===!0),Le=gt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,me,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,H.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(H.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Be(n.TEXTURE_CUBE_MAP,T);for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)Se(H.__webglFramebuffer[ce][we],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,we);else Se(H.__webglFramebuffer[ce],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);E(T)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ce=0,we=Z.length;ce<we;ce++){const ye=Z[ce],oe=i.get(ye);let me=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(me=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,oe.__webglTexture),Be(me,ye),Se(H.__webglFramebuffer,D,ye,n.COLOR_ATTACHMENT0+ce,me,0),E(ye)&&f(me)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ce=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,q.__webglTexture),Be(ce,T),T.mipmaps&&T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)Se(H.__webglFramebuffer[we],D,T,n.COLOR_ATTACHMENT0,ce,we);else Se(H.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,ce,0);E(T)&&f(ce),t.unbindTexture()}D.depthBuffer&&$e(D)}function ut(D){const T=D.textures;for(let H=0,q=T.length;H<q;H++){const Z=T[H];if(E(Z)){const Y=N(D),be=i.get(Z).__webglTexture;t.bindTexture(Y,be),f(Y),t.unbindTexture()}}}const Ve=[],Ne=[];function Me(D){if(D.samples>0){if(Te(D)===!1){const T=D.textures,H=D.width,q=D.height;let Z=n.COLOR_BUFFER_BIT;const Y=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(D),ce=T.length>1;if(ce)for(let ye=0;ye<T.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const we=D.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ye=0;ye<T.length;ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);const oe=i.get(T[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,H,q,0,0,H,q,Z,n.NEAREST),l===!0&&(Ve.length=0,Ne.length=0,Ve.push(n.COLOR_ATTACHMENT0+ye),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ve.push(Y),Ne.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ye=0;ye<T.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);const oe=i.get(T[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function gt(D){return Math.min(r.maxSamples,D.samples)}function Te(D){const T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function He(D){const T=a.render.frame;p.get(D)!==T&&(p.set(D,T),D.update())}function yt(D,T){const H=D.colorSpace,q=D.format,Z=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==Or&&H!==Ei&&(nt.getTransfer(H)===dt?(q!==_n||Z!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function St(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=w,this.resetTextureUnits=I,this.setTexture2D=K,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=j,this.rebindTextures=Mt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Te}function xE(n,e){function t(i,r=Ei){let s;const a=nt.getTransfer(r);if(i===ei)return n.UNSIGNED_BYTE;if(i===tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ud)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===cd)return n.BYTE;if(i===ld)return n.SHORT;if(i===ps)return n.UNSIGNED_SHORT;if(i===el)return n.INT;if(i===er)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===As)return n.HALF_FLOAT;if(i===dd)return n.ALPHA;if(i===fd)return n.RGB;if(i===_n)return n.RGBA;if(i===gs)return n.DEPTH_COMPONENT;if(i===_s)return n.DEPTH_STENCIL;if(i===pd)return n.RED;if(i===il)return n.RED_INTEGER;if(i===md)return n.RG;if(i===rl)return n.RG_INTEGER;if(i===sl)return n.RGBA_INTEGER;if(i===Ao||i===wo||i===bo||i===Ro)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dc||i===fc||i===pc||i===mc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gc||i===_c||i===vc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gc||i===_c)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ec||i===Sc||i===yc||i===xc||i===Tc||i===Mc||i===Ac||i===wc||i===bc||i===Rc||i===Cc||i===Ic||i===Pc||i===Dc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ec)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ac)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ic)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lc||i===Nc||i===Uc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Lc)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oc||i===Fc||i===kc||i===Bc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Oc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const TE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ME=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Id(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ri({vertexShader:TE,fragmentShader:ME,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Cn(new Ko(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wE extends Br{constructor(e,t){super();const i=this;let r=null,s=1,a=null,c="local-floor",l=1,h=null,p=null,m=null,d=null,S=null,A=null;const C=typeof XRWebGLBinding<"u",E=new AE,f={},N=t.getContextAttributes();let L=null,P=null;const k=[],O=[],M=new ft;let y=null;const g=new an;g.viewport=new Tt;const v=new an;v.viewport=new Tt;const x=[g,v],I=new $m;let w=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=k[Q];return ie===void 0&&(ie=new Na,k[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=k[Q];return ie===void 0&&(ie=new Na,k[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=k[Q];return ie===void 0&&(ie=new Na,k[Q]=ie),ie.getHandSpace()};function K(Q){const ie=O.indexOf(Q.inputSource);if(ie===-1)return;const Se=k[ie];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,h||a),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function te(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",ne);for(let Q=0;Q<k.length;Q++){const ie=O[Q];ie!==null&&(O[Q]=null,k[Q].disconnect(ie))}w=null,ee=null,E.reset();for(const Q in f)delete f[Q];e.setRenderTarget(L),S=null,d=null,m=null,r=null,P=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return d!==null?d:S},this.getBinding=function(){return m===null&&C&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return A},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(L=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",te),r.addEventListener("inputsourceschange",ne),N.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(M),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Fe=null,Ae=null;N.depth&&(Ae=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=N.stencil?_s:gs,Fe=N.stencil?ms:er);const $e={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};m=this.getBinding(),d=m.createProjectionLayer($e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),P=new tr(d.textureWidth,d.textureHeight,{format:_n,type:ei,depthTexture:new Cd(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Se={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:s};S=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new tr(S.framebufferWidth,S.framebufferHeight,{format:_n,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await r.requestReferenceSpace(c),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ne(Q){for(let ie=0;ie<Q.removed.length;ie++){const Se=Q.removed[ie],Fe=O.indexOf(Se);Fe>=0&&(O[Fe]=null,k[Fe].disconnect(Se))}for(let ie=0;ie<Q.added.length;ie++){const Se=Q.added[ie];let Fe=O.indexOf(Se);if(Fe===-1){for(let $e=0;$e<k.length;$e++)if($e>=O.length){O.push(Se),Fe=$e;break}else if(O[$e]===null){O[$e]=Se,Fe=$e;break}if(Fe===-1)break}const Ae=k[Fe];Ae&&Ae.connect(Se)}}const j=new W,ue=new W;function _e(Q,ie,Se){j.setFromMatrixPosition(ie.matrixWorld),ue.setFromMatrixPosition(Se.matrixWorld);const Fe=j.distanceTo(ue),Ae=ie.projectionMatrix.elements,$e=Se.projectionMatrix.elements,Mt=Ae[14]/(Ae[10]-1),U=Ae[14]/(Ae[10]+1),ut=(Ae[9]+1)/Ae[5],Ve=(Ae[9]-1)/Ae[5],Ne=(Ae[8]-1)/Ae[0],Me=($e[8]+1)/$e[0],gt=Mt*Ne,Te=Mt*Me,He=Fe/(-Ne+Me),yt=He*-Ne;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(yt),Q.translateZ(He),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const St=Mt+He,D=U+He,T=gt-yt,H=Te+(Fe-yt),q=ut*U/D*St,Z=Ve*U/D*St;Q.projectionMatrix.makePerspective(T,H,q,Z,St,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ce(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ie=Q.near,Se=Q.far;E.texture!==null&&(E.depthNear>0&&(ie=E.depthNear),E.depthFar>0&&(Se=E.depthFar)),I.near=v.near=g.near=ie,I.far=v.far=g.far=Se,(w!==I.near||ee!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),w=I.near,ee=I.far),I.layers.mask=Q.layers.mask|6,g.layers.mask=I.layers.mask&3,v.layers.mask=I.layers.mask&5;const Fe=Q.parent,Ae=I.cameras;Ce(I,Fe);for(let $e=0;$e<Ae.length;$e++)Ce(Ae[$e],Fe);Ae.length===2?_e(I,g,v):I.projectionMatrix.copy(g.projectionMatrix),Be(Q,I,Fe)};function Be(Q,ie,Se){Se===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=vs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&S===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(I)},this.getCameraTexture=function(Q){return f[Q]};let Ge=null;function mt(Q,ie){if(p=ie.getViewerPose(h||a),A=ie,p!==null){const Se=p.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Fe=!1;Se.length!==I.cameras.length&&(I.cameras.length=0,Fe=!0);for(let U=0;U<Se.length;U++){const ut=Se[U];let Ve=null;if(S!==null)Ve=S.getViewport(ut);else{const Me=m.getViewSubImage(d,ut);Ve=Me.viewport,U===0&&(e.setRenderTargetTextures(P,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(P))}let Ne=x[U];Ne===void 0&&(Ne=new an,Ne.layers.enable(U),Ne.viewport=new Tt,x[U]=Ne),Ne.matrix.fromArray(ut.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ut.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),U===0&&(I.matrix.copy(Ne.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Fe===!0&&I.cameras.push(Ne)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&C){m=i.getBinding();const U=m.getDepthInformation(Se[0]);U&&U.isValid&&U.texture&&E.init(U,r.renderState)}if(Ae&&Ae.includes("camera-access")&&C){e.state.unbindTexture(),m=i.getBinding();for(let U=0;U<Se.length;U++){const ut=Se[U].camera;if(ut){let Ve=f[ut];Ve||(Ve=new Id,f[ut]=Ve);const Ne=m.getCameraImage(ut);Ve.sourceTexture=Ne}}}}for(let Se=0;Se<k.length;Se++){const Fe=O[Se],Ae=k[Se];Fe!==null&&Ae!==void 0&&Ae.update(Fe,ie,h||a)}Ge&&Ge(Q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),A=null}const Ye=new Pd;Ye.setAnimationLoop(mt),this.setAnimationLoop=function(Q){Ge=Q},this.dispose=function(){}}}const zi=new ti,bE=new bt;function RE(n,e){function t(E,f){E.matrixAutoUpdate===!0&&E.updateMatrix(),f.value.copy(E.matrix)}function i(E,f){f.color.getRGB(E.fogColor.value,Md(n)),f.isFog?(E.fogNear.value=f.near,E.fogFar.value=f.far):f.isFogExp2&&(E.fogDensity.value=f.density)}function r(E,f,N,L,P){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(E,f):f.isMeshToonMaterial?(s(E,f),m(E,f)):f.isMeshPhongMaterial?(s(E,f),p(E,f)):f.isMeshStandardMaterial?(s(E,f),d(E,f),f.isMeshPhysicalMaterial&&S(E,f,P)):f.isMeshMatcapMaterial?(s(E,f),A(E,f)):f.isMeshDepthMaterial?s(E,f):f.isMeshDistanceMaterial?(s(E,f),C(E,f)):f.isMeshNormalMaterial?s(E,f):f.isLineBasicMaterial?(a(E,f),f.isLineDashedMaterial&&c(E,f)):f.isPointsMaterial?l(E,f,N,L):f.isSpriteMaterial?h(E,f):f.isShadowMaterial?(E.color.value.copy(f.color),E.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(E,f){E.opacity.value=f.opacity,f.color&&E.diffuse.value.copy(f.color),f.emissive&&E.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(E.map.value=f.map,t(f.map,E.mapTransform)),f.alphaMap&&(E.alphaMap.value=f.alphaMap,t(f.alphaMap,E.alphaMapTransform)),f.bumpMap&&(E.bumpMap.value=f.bumpMap,t(f.bumpMap,E.bumpMapTransform),E.bumpScale.value=f.bumpScale,f.side===qt&&(E.bumpScale.value*=-1)),f.normalMap&&(E.normalMap.value=f.normalMap,t(f.normalMap,E.normalMapTransform),E.normalScale.value.copy(f.normalScale),f.side===qt&&E.normalScale.value.negate()),f.displacementMap&&(E.displacementMap.value=f.displacementMap,t(f.displacementMap,E.displacementMapTransform),E.displacementScale.value=f.displacementScale,E.displacementBias.value=f.displacementBias),f.emissiveMap&&(E.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,E.emissiveMapTransform)),f.specularMap&&(E.specularMap.value=f.specularMap,t(f.specularMap,E.specularMapTransform)),f.alphaTest>0&&(E.alphaTest.value=f.alphaTest);const N=e.get(f),L=N.envMap,P=N.envMapRotation;L&&(E.envMap.value=L,zi.copy(P),zi.x*=-1,zi.y*=-1,zi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),E.envMapRotation.value.setFromMatrix4(bE.makeRotationFromEuler(zi)),E.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=f.reflectivity,E.ior.value=f.ior,E.refractionRatio.value=f.refractionRatio),f.lightMap&&(E.lightMap.value=f.lightMap,E.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,E.lightMapTransform)),f.aoMap&&(E.aoMap.value=f.aoMap,E.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,E.aoMapTransform))}function a(E,f){E.diffuse.value.copy(f.color),E.opacity.value=f.opacity,f.map&&(E.map.value=f.map,t(f.map,E.mapTransform))}function c(E,f){E.dashSize.value=f.dashSize,E.totalSize.value=f.dashSize+f.gapSize,E.scale.value=f.scale}function l(E,f,N,L){E.diffuse.value.copy(f.color),E.opacity.value=f.opacity,E.size.value=f.size*N,E.scale.value=L*.5,f.map&&(E.map.value=f.map,t(f.map,E.uvTransform)),f.alphaMap&&(E.alphaMap.value=f.alphaMap,t(f.alphaMap,E.alphaMapTransform)),f.alphaTest>0&&(E.alphaTest.value=f.alphaTest)}function h(E,f){E.diffuse.value.copy(f.color),E.opacity.value=f.opacity,E.rotation.value=f.rotation,f.map&&(E.map.value=f.map,t(f.map,E.mapTransform)),f.alphaMap&&(E.alphaMap.value=f.alphaMap,t(f.alphaMap,E.alphaMapTransform)),f.alphaTest>0&&(E.alphaTest.value=f.alphaTest)}function p(E,f){E.specular.value.copy(f.specular),E.shininess.value=Math.max(f.shininess,1e-4)}function m(E,f){f.gradientMap&&(E.gradientMap.value=f.gradientMap)}function d(E,f){E.metalness.value=f.metalness,f.metalnessMap&&(E.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,E.metalnessMapTransform)),E.roughness.value=f.roughness,f.roughnessMap&&(E.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,E.roughnessMapTransform)),f.envMap&&(E.envMapIntensity.value=f.envMapIntensity)}function S(E,f,N){E.ior.value=f.ior,f.sheen>0&&(E.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),E.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(E.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,E.sheenColorMapTransform)),f.sheenRoughnessMap&&(E.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,E.sheenRoughnessMapTransform))),f.clearcoat>0&&(E.clearcoat.value=f.clearcoat,E.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(E.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,E.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(E.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qt&&E.clearcoatNormalScale.value.negate())),f.dispersion>0&&(E.dispersion.value=f.dispersion),f.iridescence>0&&(E.iridescence.value=f.iridescence,E.iridescenceIOR.value=f.iridescenceIOR,E.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(E.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,E.iridescenceMapTransform)),f.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),f.transmission>0&&(E.transmission.value=f.transmission,E.transmissionSamplerMap.value=N.texture,E.transmissionSamplerSize.value.set(N.width,N.height),f.transmissionMap&&(E.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,E.transmissionMapTransform)),E.thickness.value=f.thickness,f.thicknessMap&&(E.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=f.attenuationDistance,E.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(E.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(E.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=f.specularIntensity,E.specularColor.value.copy(f.specularColor),f.specularColorMap&&(E.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,E.specularColorMapTransform)),f.specularIntensityMap&&(E.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,E.specularIntensityMapTransform))}function A(E,f){f.matcap&&(E.matcap.value=f.matcap)}function C(E,f){const N=e.get(f).light;E.referencePosition.value.setFromMatrixPosition(N.matrixWorld),E.nearDistance.value=N.shadow.camera.near,E.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CE(n,e,t,i){let r={},s={},a=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(N,L){const P=L.program;i.uniformBlockBinding(N,P)}function h(N,L){let P=r[N.id];P===void 0&&(A(N),P=p(N),r[N.id]=P,N.addEventListener("dispose",E));const k=L.program;i.updateUBOMapping(N,k);const O=e.render.frame;s[N.id]!==O&&(d(N),s[N.id]=O)}function p(N){const L=m();N.__bindingPointIndex=L;const P=n.createBuffer(),k=N.__size,O=N.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,k,O),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,L,P),P}function m(){for(let N=0;N<c;N++)if(a.indexOf(N)===-1)return a.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(N){const L=r[N.id],P=N.uniforms,k=N.__cache;n.bindBuffer(n.UNIFORM_BUFFER,L);for(let O=0,M=P.length;O<M;O++){const y=Array.isArray(P[O])?P[O]:[P[O]];for(let g=0,v=y.length;g<v;g++){const x=y[g];if(S(x,O,g,k)===!0){const I=x.__offset,w=Array.isArray(x.value)?x.value:[x.value];let ee=0;for(let K=0;K<w.length;K++){const te=w[K],ne=C(te);typeof te=="number"||typeof te=="boolean"?(x.__data[0]=te,n.bufferSubData(n.UNIFORM_BUFFER,I+ee,x.__data)):te.isMatrix3?(x.__data[0]=te.elements[0],x.__data[1]=te.elements[1],x.__data[2]=te.elements[2],x.__data[3]=0,x.__data[4]=te.elements[3],x.__data[5]=te.elements[4],x.__data[6]=te.elements[5],x.__data[7]=0,x.__data[8]=te.elements[6],x.__data[9]=te.elements[7],x.__data[10]=te.elements[8],x.__data[11]=0):(te.toArray(x.__data,ee),ee+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,x.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(N,L,P,k){const O=N.value,M=L+"_"+P;if(k[M]===void 0)return typeof O=="number"||typeof O=="boolean"?k[M]=O:k[M]=O.clone(),!0;{const y=k[M];if(typeof O=="number"||typeof O=="boolean"){if(y!==O)return k[M]=O,!0}else if(y.equals(O)===!1)return y.copy(O),!0}return!1}function A(N){const L=N.uniforms;let P=0;const k=16;for(let M=0,y=L.length;M<y;M++){const g=Array.isArray(L[M])?L[M]:[L[M]];for(let v=0,x=g.length;v<x;v++){const I=g[v],w=Array.isArray(I.value)?I.value:[I.value];for(let ee=0,K=w.length;ee<K;ee++){const te=w[ee],ne=C(te),j=P%k,ue=j%ne.boundary,_e=j+ue;P+=ue,_e!==0&&k-_e<ne.storage&&(P+=k-_e),I.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=P,P+=ne.storage}}}const O=P%k;return O>0&&(P+=k-O),N.__size=P,N.__cache={},this}function C(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function E(N){const L=N.target;L.removeEventListener("dispose",E);const P=a.indexOf(L.__bindingPointIndex);a.splice(P,1),n.deleteBuffer(r[L.id]),delete r[L.id],delete s[L.id]}function f(){for(const N in r)n.deleteBuffer(r[N]);a=[],r={},s={}}return{bind:l,update:h,dispose:f}}class IE{constructor(e={}){const{canvas:t=fm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=a;const A=new Uint32Array(4),C=new Int32Array(4);let E=null,f=null;const N=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let k=!1;this._outputColorSpace=on;let O=0,M=0,y=null,g=-1,v=null;const x=new Tt,I=new Tt;let w=null;const ee=new at(0);let K=0,te=t.width,ne=t.height,j=1,ue=null,_e=null;const Ce=new Tt(0,0,te,ne),Be=new Tt(0,0,te,ne);let Ge=!1;const mt=new bd;let Ye=!1,Q=!1;const ie=new bt,Se=new W,Fe=new Tt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Mt(){return y===null?j:1}let U=i;function ut(b,B){return t.getContext(b,B)}try{const b={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qc}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",re,!1),U===null){const B="webgl2";if(U=ut(B,b),U===null)throw ut(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ve,Ne,Me,gt,Te,He,yt,St,D,T,H,q,Z,Y,be,ce,we,ye,oe,me,Le,Re,fe,ze;function F(){Ve=new Vv(U),Ve.init(),Re=new xE(U,Ve),Ne=new Lv(U,Ve,e,Re),Me=new SE(U,Ve),Ne.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),gt=new Gv(U),Te=new aE,He=new yE(U,Ve,Me,Te,Ne,Re,gt),yt=new Uv(P),St=new Bv(P),D=new Ym(U),fe=new Pv(U,D),T=new zv(U,D,gt,fe),H=new Xv(U,T,D,gt),oe=new Wv(U,Ne,He),ce=new Nv(Te),q=new oE(P,yt,St,Ve,Ne,fe,ce),Z=new RE(P,Te),Y=new lE,be=new mE(Ve),ye=new Iv(P,yt,St,Me,H,S,l),we=new vE(P,H,Ne),ze=new CE(U,gt,Ne,Me),me=new Dv(U,Ve,gt),Le=new Hv(U,Ve,gt),gt.programs=q.programs,P.capabilities=Ne,P.extensions=Ve,P.properties=Te,P.renderLists=Y,P.shadowMap=we,P.state=Me,P.info=gt}F();const ae=new wE(P,U);this.xr=ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(te,ne,!1))},this.getSize=function(b){return b.set(te,ne)},this.setSize=function(b,B,G=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,ne=B,t.width=Math.floor(b*j),t.height=Math.floor(B*j),G===!0&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(te*j,ne*j).floor()},this.setDrawingBufferSize=function(b,B,G){te=b,ne=B,j=G,t.width=Math.floor(b*G),t.height=Math.floor(B*G),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(Ce)},this.setViewport=function(b,B,G,X){b.isVector4?Ce.set(b.x,b.y,b.z,b.w):Ce.set(b,B,G,X),Me.viewport(x.copy(Ce).multiplyScalar(j).round())},this.getScissor=function(b){return b.copy(Be)},this.setScissor=function(b,B,G,X){b.isVector4?Be.set(b.x,b.y,b.z,b.w):Be.set(b,B,G,X),Me.scissor(I.copy(Be).multiplyScalar(j).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(b){Me.setScissorTest(Ge=b)},this.setOpaqueSort=function(b){ue=b},this.setTransparentSort=function(b){_e=b},this.getClearColor=function(b){return b.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,G=!0){let X=0;if(b){let V=!1;if(y!==null){const se=y.texture.format;V=se===sl||se===rl||se===il}if(V){const se=y.texture.type,de=se===ei||se===er||se===ps||se===ms||se===tl||se===nl,Ee=ye.getClearColor(),ge=ye.getClearAlpha(),De=Ee.r,Ue=Ee.g,Ie=Ee.b;de?(A[0]=De,A[1]=Ue,A[2]=Ie,A[3]=ge,U.clearBufferuiv(U.COLOR,0,A)):(C[0]=De,C[1]=Ue,C[2]=Ie,C[3]=ge,U.clearBufferiv(U.COLOR,0,C))}else X|=U.COLOR_BUFFER_BIT}B&&(X|=U.DEPTH_BUFFER_BIT),G&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ye.dispose(),Y.dispose(),be.dispose(),Te.dispose(),yt.dispose(),St.dispose(),H.dispose(),fe.dispose(),ze.dispose(),q.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",_t),ae.removeEventListener("sessionend",Xr),Yt.stop()};function le(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const b=gt.autoReset,B=we.enabled,G=we.autoUpdate,X=we.needsUpdate,V=we.type;F(),gt.autoReset=b,we.enabled=B,we.autoUpdate=G,we.needsUpdate=X,we.type=V}function re(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function J(b){const B=b.target;B.removeEventListener("dispose",J),xe(B)}function xe(b){ke(b),Te.remove(b)}function ke(b){const B=Te.get(b).programs;B!==void 0&&(B.forEach(function(G){q.releaseProgram(G)}),b.isShaderMaterial&&q.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,G,X,V,se){B===null&&(B=Ae);const de=V.isMesh&&V.matrixWorld.determinant()<0,Ee=qr(b,B,G,X,V);Me.setMaterial(X,de);let ge=G.index,De=1;if(X.wireframe===!0){if(ge=T.getWireframeAttribute(G),ge===void 0)return;De=2}const Ue=G.drawRange,Ie=G.attributes.position;let je=Ue.start*De,it=(Ue.start+Ue.count)*De;se!==null&&(je=Math.max(je,se.start*De),it=Math.min(it,(se.start+se.count)*De)),ge!==null?(je=Math.max(je,0),it=Math.min(it,ge.count)):Ie!=null&&(je=Math.max(je,0),it=Math.min(it,Ie.count));const vt=it-je;if(vt<0||vt===1/0)return;fe.setup(V,X,Ee,G,ge);let lt,ot=me;if(ge!==null&&(lt=D.get(ge),ot=Le,ot.setIndex(lt)),V.isMesh)X.wireframe===!0?(Me.setLineWidth(X.wireframeLinewidth*Mt()),ot.setMode(U.LINES)):ot.setMode(U.TRIANGLES);else if(V.isLine){let Pe=X.linewidth;Pe===void 0&&(Pe=1),Me.setLineWidth(Pe*Mt()),V.isLineSegments?ot.setMode(U.LINES):V.isLineLoop?ot.setMode(U.LINE_LOOP):ot.setMode(U.LINE_STRIP)}else V.isPoints?ot.setMode(U.POINTS):V.isSprite&&ot.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Es("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Pe=V._multiDrawStarts,Et=V._multiDrawCounts,Ze=V._multiDrawCount,Ot=ge?D.get(ge).bytesPerElement:1,kn=Te.get(X).currentProgram.getUniforms();for(let zt=0;zt<Ze;zt++)kn.setValue(U,"_gl_DrawID",zt),ot.render(Pe[zt]/Ot,Et[zt])}else if(V.isInstancedMesh)ot.renderInstances(je,vt,V.count);else if(G.isInstancedBufferGeometry){const Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Et=Math.min(G.instanceCount,Pe);ot.renderInstances(je,vt,Et)}else ot.render(je,vt)};function ct(b,B,G){b.transparent===!0&&b.side===mn&&b.forceSinglePass===!1?(b.side=qt,b.needsUpdate=!0,rr(b,B,G),b.side=bi,b.needsUpdate=!0,rr(b,B,G),b.side=mn):rr(b,B,G)}this.compile=function(b,B,G=null){G===null&&(G=b),f=be.get(G),f.init(B),L.push(f),G.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),b!==G&&b.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const X=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const se=V.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const Ee=se[de];ct(Ee,G,V),X.add(Ee)}else ct(se,G,V),X.add(se)}),f=L.pop(),X},this.compileAsync=function(b,B,G=null){const X=this.compile(b,B,G);return new Promise(V=>{function se(){if(X.forEach(function(de){Te.get(de).currentProgram.isReady()&&X.delete(de)}),X.size===0){V(b);return}setTimeout(se,10)}Ve.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Ke=null;function nn(b){Ke&&Ke(b)}function _t(){Yt.stop()}function Xr(){Yt.start()}const Yt=new Pd;Yt.setAnimationLoop(nn),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(b){Ke=b,ae.setAnimationLoop(b),b===null?Yt.stop():Yt.start()},ae.addEventListener("sessionstart",_t),ae.addEventListener("sessionend",Xr),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(B),B=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,B,y),f=be.get(b,L.length),f.init(B),L.push(f),ie.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),mt.setFromProjectionMatrix(ie,Rn,B.reversedDepth),Q=this.localClippingEnabled,Ye=ce.init(this.clippingPlanes,Q),E=Y.get(b,N.length),E.init(),N.push(E),ae.enabled===!0&&ae.isPresenting===!0){const se=P.xr.getDepthSensingMesh();se!==null&&Fn(se,B,-1/0,P.sortObjects)}Fn(b,B,0,P.sortObjects),E.finish(),P.sortObjects===!0&&E.sort(ue,_e),$e=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,$e&&ye.addToRenderList(E,b),this.info.render.frame++,Ye===!0&&ce.beginShadows();const G=f.state.shadowsArray;we.render(G,b,B),Ye===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=E.opaque,V=E.transmissive;if(f.setupLights(),B.isArrayCamera){const se=B.cameras;if(V.length>0)for(let de=0,Ee=se.length;de<Ee;de++){const ge=se[de];Fs(X,V,b,ge)}$e&&ye.render(b);for(let de=0,Ee=se.length;de<Ee;de++){const ge=se[de];Os(E,b,ge,ge.viewport)}}else V.length>0&&Fs(X,V,b,B),$e&&ye.render(b),Os(E,b,B);y!==null&&M===0&&(He.updateMultisampleRenderTarget(y),He.updateRenderTargetMipmap(y)),b.isScene===!0&&b.onAfterRender(P,b,B),fe.resetDefaultState(),g=-1,v=null,L.pop(),L.length>0?(f=L[L.length-1],Ye===!0&&ce.setGlobalState(P.clippingPlanes,f.state.camera)):f=null,N.pop(),N.length>0?E=N[N.length-1]:E=null};function Fn(b,B,G,X){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||mt.intersectsSprite(b)){X&&Fe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ie);const de=H.update(b),Ee=b.material;Ee.visible&&E.push(b,de,Ee,G,Fe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||mt.intersectsObject(b))){const de=H.update(b),Ee=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Fe.copy(b.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Fe.copy(de.boundingSphere.center)),Fe.applyMatrix4(b.matrixWorld).applyMatrix4(ie)),Array.isArray(Ee)){const ge=de.groups;for(let De=0,Ue=ge.length;De<Ue;De++){const Ie=ge[De],je=Ee[Ie.materialIndex];je&&je.visible&&E.push(b,de,je,G,Fe.z,Ie)}}else Ee.visible&&E.push(b,de,Ee,G,Fe.z,null)}}const se=b.children;for(let de=0,Ee=se.length;de<Ee;de++)Fn(se[de],B,G,X)}function Os(b,B,G,X){const V=b.opaque,se=b.transmissive,de=b.transparent;f.setupLightsView(G),Ye===!0&&ce.setGlobalState(P.clippingPlanes,G),X&&Me.viewport(x.copy(X)),V.length>0&&ln(V,B,G),se.length>0&&ln(se,B,G),de.length>0&&ln(de,B,G),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Fs(b,B,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new tr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?As:ei,minFilter:Yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const se=f.state.transmissionRenderTarget[X.id],de=X.viewport||x;se.setSize(de.z*P.transmissionResolutionScale,de.w*P.transmissionResolutionScale);const Ee=P.getRenderTarget(),ge=P.getActiveCubeFace(),De=P.getActiveMipmapLevel();P.setRenderTarget(se),P.getClearColor(ee),K=P.getClearAlpha(),K<1&&P.setClearColor(16777215,.5),P.clear(),$e&&ye.render(G);const Ue=P.toneMapping;P.toneMapping=Mi;const Ie=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),Ye===!0&&ce.setGlobalState(P.clippingPlanes,X),ln(b,G,X),He.updateMultisampleRenderTarget(se),He.updateRenderTargetMipmap(se),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let it=0,vt=B.length;it<vt;it++){const lt=B[it],ot=lt.object,Pe=lt.geometry,Et=lt.material,Ze=lt.group;if(Et.side===mn&&ot.layers.test(X.layers)){const Ot=Et.side;Et.side=qt,Et.needsUpdate=!0,ks(ot,G,X,Pe,Et,Ze),Et.side=Ot,Et.needsUpdate=!0,je=!0}}je===!0&&(He.updateMultisampleRenderTarget(se),He.updateRenderTargetMipmap(se))}P.setRenderTarget(Ee,ge,De),P.setClearColor(ee,K),Ie!==void 0&&(X.viewport=Ie),P.toneMapping=Ue}function ln(b,B,G){const X=B.isScene===!0?B.overrideMaterial:null;for(let V=0,se=b.length;V<se;V++){const de=b[V],Ee=de.object,ge=de.geometry,De=de.group;let Ue=de.material;Ue.allowOverride===!0&&X!==null&&(Ue=X),Ee.layers.test(G.layers)&&ks(Ee,B,G,ge,Ue,De)}}function ks(b,B,G,X,V,se){b.onBeforeRender(P,B,G,X,V,se),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(P,B,G,X,b,se),V.transparent===!0&&V.side===mn&&V.forceSinglePass===!1?(V.side=qt,V.needsUpdate=!0,P.renderBufferDirect(G,B,X,V,b,se),V.side=bi,V.needsUpdate=!0,P.renderBufferDirect(G,B,X,V,b,se),V.side=mn):P.renderBufferDirect(G,B,X,V,b,se),b.onAfterRender(P,B,G,X,V,se)}function rr(b,B,G){B.isScene!==!0&&(B=Ae);const X=Te.get(b),V=f.state.lights,se=f.state.shadowsArray,de=V.state.version,Ee=q.getParameters(b,V.state,se,B,G),ge=q.getProgramCacheKey(Ee);let De=X.programs;X.environment=b.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(b.isMeshStandardMaterial?St:yt).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,De===void 0&&(b.addEventListener("dispose",J),De=new Map,X.programs=De);let Ue=De.get(ge);if(Ue!==void 0){if(X.currentProgram===Ue&&X.lightsStateVersion===de)return Bs(b,Ee),Ue}else Ee.uniforms=q.getUniforms(b),b.onBeforeCompile(Ee,P),Ue=q.acquireProgram(Ee,ge),De.set(ge,Ue),X.uniforms=Ee.uniforms;const Ie=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=ce.uniform),Bs(b,Ee),X.needsLights=Tn(b),X.lightsStateVersion=de,X.needsLights&&(Ie.ambientLightColor.value=V.state.ambient,Ie.lightProbe.value=V.state.probe,Ie.directionalLights.value=V.state.directional,Ie.directionalLightShadows.value=V.state.directionalShadow,Ie.spotLights.value=V.state.spot,Ie.spotLightShadows.value=V.state.spotShadow,Ie.rectAreaLights.value=V.state.rectArea,Ie.ltc_1.value=V.state.rectAreaLTC1,Ie.ltc_2.value=V.state.rectAreaLTC2,Ie.pointLights.value=V.state.point,Ie.pointLightShadows.value=V.state.pointShadow,Ie.hemisphereLights.value=V.state.hemi,Ie.directionalShadowMap.value=V.state.directionalShadowMap,Ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ie.spotShadowMap.value=V.state.spotShadowMap,Ie.spotLightMatrix.value=V.state.spotLightMatrix,Ie.spotLightMap.value=V.state.spotLightMap,Ie.pointShadowMap.value=V.state.pointShadowMap,Ie.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Ue,X.uniformsList=null,Ue}function sr(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Co.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Bs(b,B){const G=Te.get(b);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function qr(b,B,G,X,V){B.isScene!==!0&&(B=Ae),He.resetTextureUnits();const se=B.fog,de=X.isMeshStandardMaterial?B.environment:null,Ee=y===null?P.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Or,ge=(X.isMeshStandardMaterial?St:yt).get(X.envMap||de),De=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ue=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ie=!!G.morphAttributes.position,je=!!G.morphAttributes.normal,it=!!G.morphAttributes.color;let vt=Mi;X.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(vt=P.toneMapping);const lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ot=lt!==void 0?lt.length:0,Pe=Te.get(X),Et=f.state.lights;if(Ye===!0&&(Q===!0||b!==v)){const Pt=b===v&&X.id===g;ce.setState(X,b,Pt)}let Ze=!1;X.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Et.state.version||Pe.outputColorSpace!==Ee||V.isBatchedMesh&&Pe.batching===!1||!V.isBatchedMesh&&Pe.batching===!0||V.isBatchedMesh&&Pe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Pe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Pe.instancing===!1||!V.isInstancedMesh&&Pe.instancing===!0||V.isSkinnedMesh&&Pe.skinning===!1||!V.isSkinnedMesh&&Pe.skinning===!0||V.isInstancedMesh&&Pe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Pe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Pe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Pe.instancingMorph===!1&&V.morphTexture!==null||Pe.envMap!==ge||X.fog===!0&&Pe.fog!==se||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ce.numPlanes||Pe.numIntersection!==ce.numIntersection)||Pe.vertexAlphas!==De||Pe.vertexTangents!==Ue||Pe.morphTargets!==Ie||Pe.morphNormals!==je||Pe.morphColors!==it||Pe.toneMapping!==vt||Pe.morphTargetsCount!==ot)&&(Ze=!0):(Ze=!0,Pe.__version=X.version);let Ot=Pe.currentProgram;Ze===!0&&(Ot=rr(X,B,V));let kn=!1,zt=!1,Kt=!1;const et=Ot.getUniforms(),Lt=Pe.uniforms;if(Me.useProgram(Ot.program)&&(kn=!0,zt=!0,Kt=!0),X.id!==g&&(g=X.id,zt=!0),kn||v!==b){Me.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),et.setValue(U,"projectionMatrix",b.projectionMatrix),et.setValue(U,"viewMatrix",b.matrixWorldInverse);const Xe=et.map.cameraPosition;Xe!==void 0&&Xe.setValue(U,Se.setFromMatrixPosition(b.matrixWorld)),Ne.logarithmicDepthBuffer&&et.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&et.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,zt=!0,Kt=!0)}if(V.isSkinnedMesh){et.setOptional(U,V,"bindMatrix"),et.setOptional(U,V,"bindMatrixInverse");const Pt=V.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),et.setValue(U,"boneTexture",Pt.boneTexture,He))}V.isBatchedMesh&&(et.setOptional(U,V,"batchingTexture"),et.setValue(U,"batchingTexture",V._matricesTexture,He),et.setOptional(U,V,"batchingIdTexture"),et.setValue(U,"batchingIdTexture",V._indirectTexture,He),et.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&et.setValue(U,"batchingColorTexture",V._colorsTexture,He));const Nt=G.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0)&&oe.update(V,G,Ot),(zt||Pe.receiveShadow!==V.receiveShadow)&&(Pe.receiveShadow=V.receiveShadow,et.setValue(U,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Lt.envMap.value=ge,Lt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(Lt.envMapIntensity.value=B.environmentIntensity),zt&&(et.setValue(U,"toneMappingExposure",P.toneMappingExposure),Pe.needsLights&&or(Lt,Kt),se&&X.fog===!0&&Z.refreshFogUniforms(Lt,se),Z.refreshMaterialUniforms(Lt,X,j,ne,f.state.transmissionRenderTarget[b.id]),Co.upload(U,sr(Pe),Lt,He)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Co.upload(U,sr(Pe),Lt,He),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&et.setValue(U,"center",V.center),et.setValue(U,"modelViewMatrix",V.modelViewMatrix),et.setValue(U,"normalMatrix",V.normalMatrix),et.setValue(U,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Pt=X.uniformsGroups;for(let Xe=0,li=Pt.length;Xe<li;Xe++){const Jt=Pt[Xe];ze.update(Jt,Ot),ze.bind(Jt,Ot)}}return Ot}function or(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Tn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(b,B,G){const X=Te.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Te.get(b.texture).__webglTexture=B,Te.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:G,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const G=Te.get(b);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0};const Vs=U.createFramebuffer();this.setRenderTarget=function(b,B=0,G=0){y=b,O=B,M=G;let X=!0,V=null,se=!1,de=!1;if(b){const ge=Te.get(b);if(ge.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(ge.__webglFramebuffer===void 0)He.setupRenderTarget(b);else if(ge.__hasExternalTextures)He.rebindTextures(b,Te.get(b.texture).__webglTexture,Te.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ie=b.depthTexture;if(ge.__boundDepthTexture!==Ie){if(Ie!==null&&Te.has(Ie)&&(b.width!==Ie.image.width||b.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(b)}}const De=b.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(de=!0);const Ue=Te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ue[B])?V=Ue[B][G]:V=Ue[B],se=!0):b.samples>0&&He.useMultisampledRTT(b)===!1?V=Te.get(b).__webglMultisampledFramebuffer:Array.isArray(Ue)?V=Ue[G]:V=Ue,x.copy(b.viewport),I.copy(b.scissor),w=b.scissorTest}else x.copy(Ce).multiplyScalar(j).floor(),I.copy(Be).multiplyScalar(j).floor(),w=Ge;if(G!==0&&(V=Vs),Me.bindFramebuffer(U.FRAMEBUFFER,V)&&X&&Me.drawBuffers(b,V),Me.viewport(x),Me.scissor(I),Me.setScissorTest(w),se){const ge=Te.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge.__webglTexture,G)}else if(de){const ge=B;for(let De=0;De<b.textures.length;De++){const Ue=Te.get(b.textures[De]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+De,Ue.__webglTexture,G,ge)}}else if(b!==null&&G!==0){const ge=Te.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ge.__webglTexture,G)}g=-1},this.readRenderTargetPixels=function(b,B,G,X,V,se,de,Ee=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){Me.bindFramebuffer(U.FRAMEBUFFER,ge);try{const De=b.textures[Ee],Ue=De.format,Ie=De.type;if(!Ne.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-X&&G>=0&&G<=b.height-V&&(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee),U.readPixels(B,G,X,V,Re.convert(Ue),Re.convert(Ie),se))}finally{const De=y!==null?Te.get(y).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(b,B,G,X,V,se,de,Ee=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge)if(B>=0&&B<=b.width-X&&G>=0&&G<=b.height-V){Me.bindFramebuffer(U.FRAMEBUFFER,ge);const De=b.textures[Ee],Ue=De.format,Ie=De.type;if(!Ne.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,je),U.bufferData(U.PIXEL_PACK_BUFFER,se.byteLength,U.STREAM_READ),b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ee),U.readPixels(B,G,X,V,Re.convert(Ue),Re.convert(Ie),0);const it=y!==null?Te.get(y).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,it);const vt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await pm(U,vt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,je),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,se),U.deleteBuffer(je),U.deleteSync(vt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,G=0){const X=Math.pow(2,-G),V=Math.floor(b.image.width*X),se=Math.floor(b.image.height*X),de=B!==null?B.x:0,Ee=B!==null?B.y:0;He.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,de,Ee,V,se),Me.unbindTexture()};const zs=U.createFramebuffer(),$r=U.createFramebuffer();this.copyTextureToTexture=function(b,B,G=null,X=null,V=0,se=null){se===null&&(V!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=V,V=0):se=0);let de,Ee,ge,De,Ue,Ie,je,it,vt;const lt=b.isCompressedTexture?b.mipmaps[se]:b.image;if(G!==null)de=G.max.x-G.min.x,Ee=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,De=G.min.x,Ue=G.min.y,Ie=G.isBox3?G.min.z:0;else{const Nt=Math.pow(2,-V);de=Math.floor(lt.width*Nt),Ee=Math.floor(lt.height*Nt),b.isDataArrayTexture?ge=lt.depth:b.isData3DTexture?ge=Math.floor(lt.depth*Nt):ge=1,De=0,Ue=0,Ie=0}X!==null?(je=X.x,it=X.y,vt=X.z):(je=0,it=0,vt=0);const ot=Re.convert(B.format),Pe=Re.convert(B.type);let Et;B.isData3DTexture?(He.setTexture3D(B,0),Et=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(He.setTexture2DArray(B,0),Et=U.TEXTURE_2D_ARRAY):(He.setTexture2D(B,0),Et=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Ze=U.getParameter(U.UNPACK_ROW_LENGTH),Ot=U.getParameter(U.UNPACK_IMAGE_HEIGHT),kn=U.getParameter(U.UNPACK_SKIP_PIXELS),zt=U.getParameter(U.UNPACK_SKIP_ROWS),Kt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,lt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,De),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ue),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ie);const et=b.isDataArrayTexture||b.isData3DTexture,Lt=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const Nt=Te.get(b),Pt=Te.get(B),Xe=Te.get(Nt.__renderTarget),li=Te.get(Pt.__renderTarget);Me.bindFramebuffer(U.READ_FRAMEBUFFER,Xe.__webglFramebuffer),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let Jt=0;Jt<ge;Jt++)et&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(b).__webglTexture,V,Ie+Jt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(B).__webglTexture,se,vt+Jt)),U.blitFramebuffer(De,Ue,de,Ee,je,it,de,Ee,U.DEPTH_BUFFER_BIT,U.NEAREST);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||Te.has(b)){const Nt=Te.get(b),Pt=Te.get(B);Me.bindFramebuffer(U.READ_FRAMEBUFFER,zs),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,$r);for(let Xe=0;Xe<ge;Xe++)et?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Nt.__webglTexture,V,Ie+Xe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Nt.__webglTexture,V),Lt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.__webglTexture,se,vt+Xe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,se),V!==0?U.blitFramebuffer(De,Ue,de,Ee,je,it,de,Ee,U.COLOR_BUFFER_BIT,U.NEAREST):Lt?U.copyTexSubImage3D(Et,se,je,it,vt+Xe,De,Ue,de,Ee):U.copyTexSubImage2D(Et,se,je,it,De,Ue,de,Ee);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Lt?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Et,se,je,it,vt,de,Ee,ge,ot,Pe,lt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,se,je,it,vt,de,Ee,ge,ot,lt.data):U.texSubImage3D(Et,se,je,it,vt,de,Ee,ge,ot,Pe,lt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,se,je,it,de,Ee,ot,Pe,lt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,se,je,it,lt.width,lt.height,ot,lt.data):U.texSubImage2D(U.TEXTURE_2D,se,je,it,de,Ee,ot,Pe,lt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ze),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ot),U.pixelStorei(U.UNPACK_SKIP_PIXELS,kn),U.pixelStorei(U.UNPACK_SKIP_ROWS,zt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Kt),se===0&&B.generateMipmaps&&U.generateMipmap(Et),Me.unbindTexture()},this.initRenderTarget=function(b){Te.get(b).__webglFramebuffer===void 0&&He.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?He.setTextureCube(b,0):b.isData3DTexture?He.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?He.setTexture2DArray(b,0):He.setTexture2D(b,0),Me.unbindTexture()},this.resetState=function(){O=0,M=0,y=null,Me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const PE=()=>{};var ou={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},DE=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],a=n[t++],c=n[t++],l=((r&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|a&63)}}return e.join("")},ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],a=r+1<n.length,c=a?n[r+1]:0,l=r+2<n.length,h=l?n[r+2]:0,p=s>>2,m=(s&3)<<4|c>>4;let d=(c&15)<<2|h>>6,S=h&63;l||(S=64,a||(d=64)),i.push(t[p],t[m],t[d],t[S])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Od(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):DE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const m=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||c==null||h==null||m==null)throw new LE;const d=s<<2|c>>4;if(i.push(d),h!==64){const S=c<<4&240|h>>2;if(i.push(S),m!==64){const A=h<<6&192|m;i.push(A)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class LE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NE=function(n){const e=Od(n);return ul.encodeByteArray(e,!0)},Fd=function(n){return NE(n).replace(/\./g,"")},kd=function(n){try{return ul.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=()=>Bd().__FIREBASE_DEFAULTS__,OE=()=>{if(typeof process>"u"||typeof ou>"u")return;const n=ou.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},FE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&kd(n[1]);return e&&JSON.parse(e)},dl=()=>{try{return PE()||UE()||OE()||FE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kE=n=>dl()?.emulatorHosts?.[n],Vd=()=>dl()?.config,zd=n=>dl()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function BE(n){return(await fetch(n,{credentials:"include"})).ok}const ls={};function VE(){const n={prod:[],emulator:[]};for(const e of Object.keys(ls))ls[e]?n.emulator.push(e):n.prod.push(e);return n}function zE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let au=!1;function HE(n,e){if(typeof window>"u"||typeof document>"u"||!Zo(window.location.host)||ls[n]===e||ls[n]||au)return;ls[n]=e;function t(d){return`__firebase__banner__${d}`}const i="__firebase__banner",s=VE().prod.length>0;function a(){const d=document.getElementById(i);d&&d.remove()}function c(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function l(d,S){d.setAttribute("width","24"),d.setAttribute("id",S),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function h(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{au=!0,a()},d}function p(d,S){d.setAttribute("id",S),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function m(){const d=zE(i),S=t("text"),A=document.getElementById(S)||document.createElement("span"),C=t("learnmore"),E=document.getElementById(C)||document.createElement("a"),f=t("preprendIcon"),N=document.getElementById(f)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const L=d.element;c(L),p(E,C);const P=h();l(N,f),L.append(N,A,E,P),document.body.appendChild(L)}s?(A.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function WE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $E(){const n=Wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function fl(){try{return typeof indexedDB=="object"}catch{return!1}}function jE(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="FirebaseError";class ai extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=YE,Object.setPrototypeOf(this,ai.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hr.prototype.create)}}class Hr{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],a=s?KE(s,i):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new ai(r,c,i)}}function KE(n,e){return n.replace(JE,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const JE=/\{\$([^}]+)}/g;function ZE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function kr(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],a=e[r];if(cu(s)&&cu(a)){if(!kr(s,a))return!1}else if(s!==a)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function cu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ss(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function os(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function QE(n,e){const t=new eS(n,e);return t.subscribe.bind(t)}class eS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");tS(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Ha),r.error===void 0&&(r.error=Ha),r.complete===void 0&&(r.complete=Ha);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ha(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=1e3,iS=2,rS=14400*1e3,sS=.5;function oS(n,e=nS,t=iS){const i=e*Math.pow(t,n),r=Math.round(sS*i*(Math.random()-.5)*2);return Math.min(rS,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(n){return n&&n._delegate?n._delegate:n}class ni{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ss;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lS(e))try{this.getOrInitializeService({instanceIdentifier:Wi})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wi){return this.instances.has(e)}getOptions(e=Wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);i===c&&a.resolve(r)}return r}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(i)??new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:cS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Wi){return this.component?this.component.multipleInstances?e:Wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cS(n){return n===Wi?void 0:n}function lS(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new aS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ht||(ht={}));const uS={debug:ht.DEBUG,verbose:ht.VERBOSE,info:ht.INFO,warn:ht.WARN,error:ht.ERROR,silent:ht.SILENT},dS=ht.INFO,fS={[ht.DEBUG]:"log",[ht.VERBOSE]:"log",[ht.INFO]:"info",[ht.WARN]:"warn",[ht.ERROR]:"error"},pS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=fS[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qo{constructor(e){this.name=e,this._logLevel=dS,this._logHandler=pS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ht))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ht.DEBUG,...e),this._logHandler(this,ht.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ht.VERBOSE,...e),this._logHandler(this,ht.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ht.INFO,...e),this._logHandler(this,ht.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ht.WARN,...e),this._logHandler(this,ht.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ht.ERROR,...e),this._logHandler(this,ht.ERROR,...e)}}const mS=(n,e)=>e.some(t=>n instanceof t);let lu,hu;function gS(){return lu||(lu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _S(){return hu||(hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hd=new WeakMap,Hc=new WeakMap,Gd=new WeakMap,Ga=new WeakMap,pl=new WeakMap;function vS(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Ai(n.result)),r()},a=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Hd.set(t,n)}).catch(()=>{}),pl.set(e,n),e}function ES(n){if(Hc.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),r()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Hc.set(n,e)}let Gc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Gd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ai(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function SS(n){Gc=n(Gc)}function yS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Wa(this),e,...t);return Gd.set(i,e.sort?e.sort():[e]),Ai(i)}:_S().includes(n)?function(...e){return n.apply(Wa(this),e),Ai(Hd.get(this))}:function(...e){return Ai(n.apply(Wa(this),e))}}function xS(n){return typeof n=="function"?yS(n):(n instanceof IDBTransaction&&ES(n),mS(n,gS())?new Proxy(n,Gc):n)}function Ai(n){if(n instanceof IDBRequest)return vS(n);if(Ga.has(n))return Ga.get(n);const e=xS(n);return e!==n&&(Ga.set(n,e),pl.set(e,n)),e}const Wa=n=>pl.get(n);function TS(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const a=indexedDB.open(n,e),c=Ai(a);return i&&a.addEventListener("upgradeneeded",l=>{i(Ai(a.result),l.oldVersion,l.newVersion,Ai(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const MS=["get","getKey","getAll","getAllKeys","count"],AS=["put","add","delete","clear"],Xa=new Map;function uu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xa.get(e))return Xa.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=AS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||MS.includes(t)))return;const s=async function(a,...c){const l=this.transaction(a,r?"readwrite":"readonly");let h=l.store;return i&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),r&&l.done]))[0]};return Xa.set(e,s),s}SS(n=>({...n,get:(e,t,i)=>uu(e,t)||n.get(e,t,i),has:(e,t)=>!!uu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function bS(n){return n.getComponent()?.type==="VERSION"}const Wc="@firebase/app",du="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new Qo("@firebase/app"),RS="@firebase/app-compat",CS="@firebase/analytics-compat",IS="@firebase/analytics",PS="@firebase/app-check-compat",DS="@firebase/app-check",LS="@firebase/auth",NS="@firebase/auth-compat",US="@firebase/database",OS="@firebase/data-connect",FS="@firebase/database-compat",kS="@firebase/functions",BS="@firebase/functions-compat",VS="@firebase/installations",zS="@firebase/installations-compat",HS="@firebase/messaging",GS="@firebase/messaging-compat",WS="@firebase/performance",XS="@firebase/performance-compat",qS="@firebase/remote-config",$S="@firebase/remote-config-compat",jS="@firebase/storage",YS="@firebase/storage-compat",KS="@firebase/firestore",JS="@firebase/ai",ZS="@firebase/firestore-compat",QS="firebase",ey="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="[DEFAULT]",ty={[Wc]:"fire-core",[RS]:"fire-core-compat",[IS]:"fire-analytics",[CS]:"fire-analytics-compat",[DS]:"fire-app-check",[PS]:"fire-app-check-compat",[LS]:"fire-auth",[NS]:"fire-auth-compat",[US]:"fire-rtdb",[OS]:"fire-data-connect",[FS]:"fire-rtdb-compat",[kS]:"fire-fn",[BS]:"fire-fn-compat",[VS]:"fire-iid",[zS]:"fire-iid-compat",[HS]:"fire-fcm",[GS]:"fire-fcm-compat",[WS]:"fire-perf",[XS]:"fire-perf-compat",[qS]:"fire-rc",[$S]:"fire-rc-compat",[jS]:"fire-gcs",[YS]:"fire-gcs-compat",[KS]:"fire-fst",[ZS]:"fire-fst-compat",[JS]:"fire-vertex","fire-js":"fire-js",[QS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Map,ny=new Map,qc=new Map;function fu(n,e){try{n.container.addComponent(e)}catch(t){ii.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ci(n){const e=n.name;if(qc.has(e))return ii.debug(`There were multiple attempts to register component ${e}.`),!1;qc.set(e,n);for(const t of ko.values())fu(t,n);for(const t of ny.values())fu(t,n);return!0}function ea(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wi=new Hr("app","Firebase",iy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=ey;function Wd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Xc,automaticDataCollectionEnabled:!0,...e},r=i.name;if(typeof r!="string"||!r)throw wi.create("bad-app-name",{appName:String(r)});if(t||(t=Vd()),!t)throw wi.create("no-options");const s=ko.get(r);if(s){if(kr(t,s.options)&&kr(i,s.config))return s;throw wi.create("duplicate-app",{appName:r})}const a=new hS(r);for(const l of qc.values())a.addComponent(l);const c=new ry(t,i,a);return ko.set(r,c),c}function Xd(n=Xc){const e=ko.get(n);if(!e&&n===Xc&&Vd())return Wd();if(!e)throw wi.create("no-app",{appName:n});return e}function Qn(n,e,t){let i=ty[n]??n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ii.warn(a.join(" "));return}Ci(new ni(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="firebase-heartbeat-database",oy=1,ys="firebase-heartbeat-store";let qa=null;function qd(){return qa||(qa=TS(sy,oy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ys)}catch(t){console.warn(t)}}}}).catch(n=>{throw wi.create("idb-open",{originalErrorMessage:n.message})})),qa}async function ay(n){try{const t=(await qd()).transaction(ys),i=await t.objectStore(ys).get($d(n));return await t.done,i}catch(e){if(e instanceof ai)ii.warn(e.message);else{const t=wi.create("idb-get",{originalErrorMessage:e?.message});ii.warn(t.message)}}}async function pu(n,e){try{const i=(await qd()).transaction(ys,"readwrite");await i.objectStore(ys).put(e,$d(n)),await i.done}catch(t){if(t instanceof ai)ii.warn(t.message);else{const i=wi.create("idb-set",{originalErrorMessage:t?.message});ii.warn(i.message)}}}function $d(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=1024,ly=30;class hy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dy(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>ly){const r=fy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ii.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mu(),{heartbeatsToSend:t,unsentEntries:i}=uy(this._heartbeatsCache.heartbeats),r=Fd(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return ii.warn(e),""}}}function mu(){return new Date().toISOString().substring(0,10)}function uy(n,e=cy){const t=[];let i=n.slice();for(const r of n){const s=t.find(a=>a.agent===r.agent);if(s){if(s.dates.push(r.date),gu(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),gu(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class dy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fl()?jE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ay(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return pu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return pu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gu(n){return Fd(JSON.stringify({version:2,heartbeats:n})).length}function fy(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(n){Ci(new ni("platform-logger",e=>new wS(e),"PRIVATE")),Ci(new ni("heartbeat",e=>new hy(e),"PRIVATE")),Qn(Wc,du,n),Qn(Wc,du,"esm2020"),Qn("fire-js","")}py("");var my="firebase",gy="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn(my,gy,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new Map,jd={activated:!1,tokenObservers:[]},_y={initialized:!1,enabled:!1};function Rt(n){return $c.get(n)||{...jd}}function vy(n,e){return $c.set(n,e),$c.get(n)}function ta(){return _y}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="https://content-firebaseappcheck.googleapis.com/v1",Ey="exchangeRecaptchaEnterpriseToken",Sy="exchangeDebugToken",_u={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3},yy=1440*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,t,i,r,s){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ss,this.pending.promise.catch(t=>{}),await Ty(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ss,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function Ty(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Xt=new Hr("appCheck","AppCheck",My);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n=!1){return n?self.grecaptcha?.enterprise:self.grecaptcha}function ml(n){if(!Rt(n).activated)throw Xt.create("use-before-activation",{appName:n.name})}function Kd(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),i=Math.floor((e-t*3600*24)/3600),r=Math.floor((e-t*3600*24-i*3600)/60),s=e-t*3600*24-i*3600-r*60;let a="";return t&&(a+=So(t)+"d:"),i&&(a+=So(i)+"h:"),a+=So(r)+"m:"+So(s)+"s",a}function So(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl({url:n,body:e},t){const i={"Content-Type":"application/json"},r=t.getImmediate({optional:!0});if(r){const m=await r.getHeartbeatsHeader();m&&(i["X-Firebase-Client"]=m)}const s={method:"POST",body:JSON.stringify(e),headers:i};let a;try{a=await fetch(n,s)}catch(m){throw Xt.create("fetch-network-error",{originalErrorMessage:m?.message})}if(a.status!==200)throw Xt.create("fetch-status-error",{httpStatus:a.status});let c;try{c=await a.json()}catch(m){throw Xt.create("fetch-parse-error",{originalErrorMessage:m?.message})}const l=c.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw Xt.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${c.ttl}`});const h=Number(l[1])*1e3,p=Date.now();return{token:c.token,expireTimeMillis:p+h,issuedAtTimeMillis:p}}function Ay(n,e){const{projectId:t,appId:i,apiKey:r}=n.options;return{url:`${Yd}/projects/${t}/apps/${i}:${Ey}?key=${r}`,body:{recaptcha_enterprise_token:e}}}function Jd(n,e){const{projectId:t,appId:i,apiKey:r}=n.options;return{url:`${Yd}/projects/${t}/apps/${i}:${Sy}?key=${r}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="firebase-app-check-database",by=1,xs="firebase-app-check-store",Zd="debug-token";let yo=null;function Qd(){return yo||(yo=new Promise((n,e)=>{try{const t=indexedDB.open(wy,by);t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{e(Xt.create("storage-open",{originalErrorMessage:i.target.error?.message}))},t.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(xs,{keyPath:"compositeKey"})}}}catch(t){e(Xt.create("storage-open",{originalErrorMessage:t?.message}))}}),yo)}function Ry(n){return tf(nf(n))}function Cy(n,e){return ef(nf(n),e)}function Iy(n){return ef(Zd,n)}function Py(){return tf(Zd)}async function ef(n,e){const i=(await Qd()).transaction(xs,"readwrite"),s=i.objectStore(xs).put({compositeKey:n,value:e});return new Promise((a,c)=>{s.onsuccess=l=>{a()},i.onerror=l=>{c(Xt.create("storage-set",{originalErrorMessage:l.target.error?.message}))}})}async function tf(n){const t=(await Qd()).transaction(xs,"readonly"),r=t.objectStore(xs).get(n);return new Promise((s,a)=>{r.onsuccess=c=>{const l=c.target.result;s(l?l.value:void 0)},t.onerror=c=>{a(Xt.create("storage-get",{originalErrorMessage:c.target.error?.message}))}})}function nf(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Qo("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dy(n){if(fl()){let e;try{e=await Ry(n)}catch(t){xi.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function $a(n,e){return fl()?Cy(n,e).catch(t=>{xi.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function Ly(){let n;try{n=await Py()}catch{}if(n)return n;{const e=crypto.randomUUID();return Iy(e).catch(t=>xi.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){return ta().enabled}async function vl(){const n=ta();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function Ny(){const n=Bd(),e=ta();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new Ss;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(Ly())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy={error:"UNKNOWN_ERROR"};function Oy(n){return ul.encodeString(JSON.stringify(n),!1)}async function jc(n,e=!1,t=!1){const i=n.app;ml(i);const r=Rt(i);let s=r.token,a;if(s&&!wr(s)&&(r.token=void 0,s=void 0),!s){const h=await r.cachedTokenPromise;h&&(wr(h)?s=h:await $a(i,void 0))}if(!e&&s&&wr(s))return{token:s.token};let c=!1;if(_l())try{r.exchangeTokenPromise||(r.exchangeTokenPromise=gl(Jd(i,await vl()),n.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),c=!0);const h=await r.exchangeTokenPromise;return await $a(i,h),r.token=h,{token:h.token}}catch(h){return h.code==="appCheck/throttled"||h.code==="appCheck/initial-throttle"?xi.warn(h.message):t&&xi.error(h),ja(h)}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),c=!0),s=await Rt(i).exchangeTokenPromise}catch(h){h.code==="appCheck/throttled"||h.code==="appCheck/initial-throttle"?xi.warn(h.message):t&&xi.error(h),a=h}let l;return s?a?wr(s)?l={token:s.token,internalError:a}:l=ja(a):(l={token:s.token},r.token=s,await $a(i,s)):l=ja(a),c&&of(i,l),l}async function Fy(n){const e=n.app;ml(e);const{provider:t}=Rt(e);if(_l()){const i=await vl(),{token:r}=await gl(Jd(e,i),n.heartbeatServiceProvider);return{token:r}}else{const{token:i}=await t.getToken();return{token:i}}}function rf(n,e,t,i){const{app:r}=n,s=Rt(r),a={next:t,error:i,type:e};if(s.tokenObservers=[...s.tokenObservers,a],s.token&&wr(s.token)){const c=s.token;Promise.resolve().then(()=>{t({token:c.token}),Eu(n)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Eu(n))}function sf(n,e){const t=Rt(n),i=t.tokenObservers.filter(r=>r.next!==e);i.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=i}function Eu(n){const{app:e}=n,t=Rt(e);let i=t.tokenRefresher;i||(i=ky(n),t.tokenRefresher=i),!i.isRunning()&&t.isTokenAutoRefreshEnabled&&i.start()}function ky(n){const{app:e}=n;return new xy(async()=>{const t=Rt(e);let i;if(t.token?i=await jc(n,!0):i=await jc(n),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const t=Rt(e);if(t.token){let i=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const r=t.token.expireTimeMillis-300*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},_u.RETRIAL_MIN_WAIT,_u.RETRIAL_MAX_WAIT)}function of(n,e){const t=Rt(n).tokenObservers;for(const i of t)try{i.type==="EXTERNAL"&&e.error!=null?i.error(e.error):i.next(e)}catch{}}function wr(n){return n.expireTimeMillis-Date.now()>0}function ja(n){return{token:Oy(Uy),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Rt(this.app);for(const t of e)sf(this.app,t.next);return Promise.resolve()}}function Vy(n,e){return new By(n,e)}function zy(n){return{getToken:e=>jc(n,e),getLimitedUseToken:()=>Fy(n),addTokenListener:e=>rf(n,"INTERNAL",e),removeTokenListener:e=>sf(n.app,e)}}const Hy="@firebase/app-check",Gy="0.11.0",Wy="https://www.google.com/recaptcha/enterprise.js";function Xy(n,e){const t=new Ss,i=Rt(n);i.reCAPTCHAState={initialized:t};const r=qy(n),s=vu(!0);return s?Su(n,e,s,r,t):Yy(()=>{const a=vu(!0);if(!a)throw new Error("no recaptcha");Su(n,e,a,r,t)}),t.promise}function Su(n,e,t,i,r){t.ready(()=>{jy(n,e,t,i),r.resolve(t)})}function qy(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function $y(n){ml(n);const t=await Rt(n).reCAPTCHAState.initialized.promise;return new Promise((i,r)=>{const s=Rt(n).reCAPTCHAState;t.ready(()=>{i(t.execute(s.widgetId,{action:"fire_app_check"}))})})}function jy(n,e,t,i){const r=t.render(i,{sitekey:e,size:"invisible",callback:()=>{Rt(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Rt(n).reCAPTCHAState.succeeded=!1}}),s=Rt(n);s.reCAPTCHAState={...s.reCAPTCHAState,widgetId:r}}function Yy(n){const e=document.createElement("script");e.src=Wy,e.onload=n,document.head.appendChild(e)}class El{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){Jy(this._throttleData);const e=await $y(this._app).catch(i=>{throw Xt.create("recaptcha-error")});if(!Rt(this._app).reCAPTCHAState?.succeeded)throw Xt.create("recaptcha-error");let t;try{t=await gl(Ay(this._app,e),this._heartbeatServiceProvider)}catch(i){throw i.code?.includes("fetch-status-error")?(this._throttleData=Ky(Number(i.customData?.httpStatus),this._throttleData),Xt.create("initial-throttle",{time:Kd(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):i}return this._throttleData=null,t}initialize(e){this._app=e,this._heartbeatServiceProvider=ea(e,"heartbeat"),Xy(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof El?this._siteKey===e._siteKey:!1}}function Ky(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+yy,httpStatus:n};{const t=e?e.backoffCount:0,i=oS(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+i,httpStatus:n}}}function Jy(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw Xt.create("throttled",{time:Kd(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(n=Xd(),e){n=On(n);const t=ea(n,"app-check");if(ta().initialized||Ny(),_l()&&vl().then(r=>console.log(`App Check debug token: ${r}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(s.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&s.provider.isEqual(e.provider))return r;throw Xt.create("already-initialized",{appName:n.name})}const i=t.initialize({options:e});return Qy(n,e.provider,e.isTokenAutoRefreshEnabled),Rt(n).isTokenAutoRefreshEnabled&&rf(i,"INTERNAL",()=>{}),i}function Qy(n,e,t=!1){const i=vy(n,{...jd});i.activated=!0,i.provider=e,i.cachedTokenPromise=Dy(n).then(r=>(r&&wr(r)&&(i.token=r,of(n,{token:r.token})),r)),i.isTokenAutoRefreshEnabled=t&&n.automaticDataCollectionEnabled,!n.automaticDataCollectionEnabled&&t&&xi.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),i.provider.initialize(n)}const ex="app-check",yu="app-check-internal";function tx(){Ci(new ni(ex,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return Vy(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(yu).initialize()})),Ci(new ni(yu,n=>{const e=n.getProvider("app-check").getImmediate();return zy(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Qn(Hy,Gy)}tx();function af(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nx=af,cf=new Hr("auth","Firebase",af());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=new Qo("@firebase/auth");function ix(n,...e){Bo.logLevel<=ht.WARN&&Bo.warn(`Auth (${Gr}): ${n}`,...e)}function Io(n,...e){Bo.logLevel<=ht.ERROR&&Bo.error(`Auth (${Gr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n,...e){throw yl(n,...e)}function Dn(n,...e){return yl(n,...e)}function Sl(n,e,t){const i={...nx(),[e]:t};return new Hr("auth","Firebase",i).create(e,{appName:n.name})}function Ln(n){return Sl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rx(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&cn(n,"argument-error"),Sl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yl(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return cf.create(n,...e)}function Oe(n,e,...t){if(!n)throw yl(e,...t)}function Kn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Io(e),new Error(e)}function ri(n,e){n||Kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(){return typeof self<"u"&&self.location?.href||""}function sx(){return xu()==="http:"||xu()==="https:"}function xu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sx()||XE()||"connection"in navigator)?navigator.onLine:!0}function ax(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.shortDelay=e,this.longDelay=t,ri(t>e,"Short delay should be less than long delay!"),this.isMobile=GE()||qE()}get(){return ox()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(n,e){ri(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hx=new Ps(3e4,6e4);function Di(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Li(n,e,t,i,r={}){return hf(n,r,async()=>{let s={},a={};i&&(e==="GET"?a=i:s={body:JSON.stringify(i)});const c=Is({key:n.config.apiKey,...a}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...s};return WE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Zo(n.emulatorConfig.host)&&(h.credentials="include"),lf.fetch()(await uf(n,n.config.apiHost,t,c),h)})}async function hf(n,e,t){n._canInitEmulator=!1;const i={...cx,...e};try{const r=new dx(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw xo(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xo(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw xo(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw xo(n,"user-disabled",a);const p=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Sl(n,p,h);cn(n,p)}}catch(r){if(r instanceof ai)throw r;cn(n,"network-request-failed",{message:String(r)})}}async function Ds(n,e,t,i,r={}){const s=await Li(n,e,t,i,r);return"mfaPendingCredential"in s&&cn(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function uf(n,e,t,i){const r=`${e}${t}?${i}`,s=n,a=s.config.emulator?xl(n.config,r):`${n.config.apiScheme}://${r}`;return lx.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function ux(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Dn(this.auth,"network-request-failed")),hx.get())})}}function xo(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=Dn(n,e,i);return r.customData._tokenResponse=t,r}function Tu(n){return n!==void 0&&n.enterprise!==void 0}class fx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ux(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function px(n,e){return Li(n,"GET","/v2/recaptchaConfig",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mx(n,e){return Li(n,"POST","/v1/accounts:delete",e)}async function Vo(n,e){return Li(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gx(n,e=!1){const t=On(n),i=await t.getIdToken(e),r=Tl(i);Oe(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,a=s?.sign_in_provider;return{claims:r,token:i,authTime:hs(Ya(r.auth_time)),issuedAtTime:hs(Ya(r.iat)),expirationTime:hs(Ya(r.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Ya(n){return Number(n)*1e3}function Tl(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Io("JWT malformed, contained fewer than 3 sections"),null;try{const r=kd(t);return r?JSON.parse(r):(Io("Failed to decode base64 JWT payload"),null)}catch(r){return Io("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Mu(n){const e=Tl(n);return Oe(e,"internal-error"),Oe(typeof e.exp<"u","internal-error"),Oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ai&&_x(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function _x({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hs(this.lastLoginAt),this.creationTime=hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(n){const e=n.auth,t=await n.getIdToken(),i=await Ts(n,Vo(e,{idToken:t}));Oe(i?.users.length,e,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const s=r.providerUserInfo?.length?df(r.providerUserInfo):[],a=Sx(n.providerData,s),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!a?.length,h=c?l:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Kc(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function Ex(n){const e=On(n);await zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sx(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function df(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yx(n,e){const t=await hf(n,{},async()=>{const i=Is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,a=await uf(n,r,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&Zo(n.emulatorConfig.host)&&(l.credentials="include"),lf.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xx(n,e){return Li(n,"POST","/v2/accounts:revokeToken",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Oe(e.idToken,"internal-error"),Oe(typeof e.idToken<"u","internal-error"),Oe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Oe(e.length!==0,"internal-error");const t=Mu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await yx(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,a=new Cr;return i&&(Oe(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),r&&(Oe(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),s&&(Oe(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n,e){Oe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class vn{constructor({uid:e,auth:t,stsTokenManager:i,...r}){this.providerId="firebase",this.proactiveRefresh=new vx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Kc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ts(this,this.stsTokenManager.getToken(this.auth,e));return Oe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gx(this,e)}reload(){return Ex(this)}_assign(e){this!==e&&(Oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await zo(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await Ts(this,mx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,r=t.email??void 0,s=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:m,emailVerified:d,isAnonymous:S,providerData:A,stsTokenManager:C}=t;Oe(m&&C,e,"internal-error");const E=Cr.fromJSON(this.name,C);Oe(typeof m=="string",e,"internal-error"),vi(i,e.name),vi(r,e.name),Oe(typeof d=="boolean",e,"internal-error"),Oe(typeof S=="boolean",e,"internal-error"),vi(s,e.name),vi(a,e.name),vi(c,e.name),vi(l,e.name),vi(h,e.name),vi(p,e.name);const f=new vn({uid:m,auth:e,email:r,emailVerified:d,displayName:i,isAnonymous:S,photoURL:a,phoneNumber:s,tenantId:c,stsTokenManager:E,createdAt:h,lastLoginAt:p});return A&&Array.isArray(A)&&(f.providerData=A.map(N=>({...N}))),l&&(f._redirectEventId=l),f}static async _fromIdTokenResponse(e,t,i=!1){const r=new Cr;r.updateFromServerResponse(t);const s=new vn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await zo(s),s}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];Oe(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?df(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!s?.length,c=new Cr;c.updateFromIdToken(i);const l=new vn({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Kc(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!s?.length};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new Map;function Jn(n){ri(n instanceof Function,"Expected a class definition");let e=Au.get(n);return e?(ri(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Au.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ff.type="NONE";const wu=ff;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n,e,t){return`firebase:${n}:${e}:${t}`}class Ir{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Po(this.userKey,r.apiKey,s),this.fullPersistenceKey=Po("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Vo(this.auth,{idToken:e}).catch(()=>{});return t?vn._fromGetAccountInfoResponse(this.auth,t,e):null}return vn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ir(Jn(wu),e,i);const r=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=r[0]||Jn(wu);const a=Po(i,e.config.apiKey,e.name);let c=null;for(const h of t)try{const p=await h._get(a);if(p){let m;if(typeof p=="string"){const d=await Vo(e,{idToken:p}).catch(()=>{});if(!d)break;m=await vn._fromGetAccountInfoResponse(e,d,p)}else m=vn._fromJSON(e,p);h!==s&&(c=m),s=h;break}}catch{}const l=r.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ir(s,e,i):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new Ir(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_f(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ef(e))return"Blackberry";if(Sf(e))return"Webos";if(mf(e))return"Safari";if((e.includes("chrome/")||gf(e))&&!e.includes("edge/"))return"Chrome";if(vf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function pf(n=Wt()){return/firefox\//i.test(n)}function mf(n=Wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gf(n=Wt()){return/crios\//i.test(n)}function _f(n=Wt()){return/iemobile/i.test(n)}function vf(n=Wt()){return/android/i.test(n)}function Ef(n=Wt()){return/blackberry/i.test(n)}function Sf(n=Wt()){return/webos/i.test(n)}function Ml(n=Wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Tx(n=Wt()){return Ml(n)&&!!window.navigator?.standalone}function Mx(){return $E()&&document.documentMode===10}function yf(n=Wt()){return Ml(n)||vf(n)||Sf(n)||Ef(n)||/windows phone/i.test(n)||_f(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n,e=[]){let t;switch(n){case"Browser":t=bu(Wt());break;case"Worker":t=`${bu(Wt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gr}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((a,c)=>{try{const l=e(s);a(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wx(n,e={}){return Li(n,"GET","/v2/passwordPolicy",Di(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=6;class Rx{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??bx,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ru(this),this.idTokenSubscription=new Ru(this),this.beforeStateQueue=new Ax(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Jn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ir.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Vo(this,{idToken:e}),i=await vn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(tn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,a=i?._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===a)&&c?.user&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zo(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ax()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(Ln(this));const t=e?On(e):null;return t&&Oe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wx(this),t=new Rx(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hr("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await xx(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Jn(e)||this._popupRedirectResolver;Oe(t,this,"argument-error"),this.redirectPersistenceManager=await Ir.create(this,[Jn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Oe(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,r);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&ix(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ni(n){return On(n)}class Ru{constructor(e){this.auth=e,this.observer=null,this.addObserver=QE(t=>this.observer=t)}get next(){return Oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ix(n){na=n}function Tf(n){return na.loadJS(n)}function Px(){return na.recaptchaEnterpriseScript}function Dx(){return na.gapiScript}function Lx(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Nx{constructor(){this.enterprise=new Ux}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ux{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Ox="recaptcha-enterprise",Mf="NO_RECAPTCHA";class Fx{constructor(e){this.type=Ox,this.auth=Ni(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{px(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new fx(l);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function r(s,a,c){const l=window.grecaptcha;Tu(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(Mf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Nx().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{i(this.auth).then(c=>{if(!t&&Tu(window.grecaptcha))r(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Px();l.length!==0&&(l+=c),Tf(l).then(()=>{r(c,s,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function Cu(n,e,t,i=!1,r=!1){const s=new Fx(n);let a;if(r)a=Mf;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Jc(n,e,t,i,r){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Cu(n,e,t,t==="getOobCode");return i(n,s)}else return i(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Cu(n,e,t,t==="getOobCode");return i(n,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(n,e){const t=ea(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(kr(s,e??{}))return r;cn(r,"already-initialized")}return t.initialize({options:e})}function Bx(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Jn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function Vx(n,e,t){const i=Ni(n);Oe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=Af(e),{host:a,port:c}=zx(e),l=c===null?"":`:${c}`,h={url:`${s}//${a}${l}/`},p=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){Oe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Oe(kr(h,i.config.emulator)&&kr(p,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=p,i.settings.appVerificationDisabledForTesting=!0,Zo(a)?(BE(`${s}//${a}${l}`),HE("Auth",!0)):Hx()}function Af(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zx(n){const e=Af(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Iu(i.substr(s.length+1))}}else{const[s,a]=i.split(":");return{host:s,port:Iu(a)}}}function Iu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Hx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,t){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}async function Gx(n,e){return Li(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wx(n,e){return Ds(n,"POST","/v1/accounts:signInWithPassword",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xx(n,e){return Ds(n,"POST","/v1/accounts:signInWithEmailLink",Di(n,e))}async function qx(n,e){return Ds(n,"POST","/v1/accounts:signInWithEmailLink",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Al{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ms(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ms(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jc(e,t,"signInWithPassword",Wx);case"emailLink":return Xx(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jc(e,i,"signUpPassword",Gx);case"emailLink":return qx(e,{idToken:t,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(n,e){return Ds(n,"POST","/v1/accounts:signInWithIdp",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="http://localhost";class nr extends Al{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,...s}=t;if(!i||!r)return null;const a=new nr(i,r);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Pr(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Pr(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pr(e,t)}buildRequest(){const e={requestUri:$x,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Is(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yx(n){const e=ss(os(n)).link,t=e?ss(os(e)).deep_link_id:null,i=ss(os(n)).deep_link_id;return(i?ss(os(i)).link:null)||i||t||e||n}class wl{constructor(e){const t=ss(os(e)),i=t.apiKey??null,r=t.oobCode??null,s=jx(t.mode??null);Oe(i&&r&&s,"argument-error"),this.apiKey=i,this.operation=s,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Yx(e);try{return new wl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.providerId=Wr.PROVIDER_ID}static credential(e,t){return Ms._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=wl.parseLink(t);return Oe(i,"argument-error"),Ms._fromEmailAndCode(e,i.code,i.tenantId)}}Wr.PROVIDER_ID="password";Wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends bl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Ls{constructor(){super("facebook.com")}static credential(e){return nr._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Si.credential(e.oauthAccessToken)}catch{return null}}}Si.FACEBOOK_SIGN_IN_METHOD="facebook.com";Si.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return qn.credential(t,i)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Ls{constructor(){super("github.com")}static credential(e){return nr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Ls{constructor(){super("twitter.com")}static credential(e,t){return nr._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return yi.credential(t,i)}catch{return null}}}yi.TWITTER_SIGN_IN_METHOD="twitter.com";yi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wf(n,e){return Ds(n,"POST","/v1/accounts:signUp",Di(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await vn._fromIdTokenResponse(e,i,r),a=Pu(i);return new si({user:s,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Pu(i);return new si({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Pu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kx(n){if(tn(n.app))return Promise.reject(Ln(n));const e=Ni(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new si({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await wf(e,{returnSecureToken:!0}),i=await si._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends ai{constructor(e,t,i,r){super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Ho.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Ho(e,t,i,r)}}function bf(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ho._fromErrorAndOperation(n,s,e,i):s})}async function Jx(n,e,t=!1){const i=await Ts(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return si._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zx(n,e,t=!1){const{auth:i}=n;if(tn(i.app))return Promise.reject(Ln(i));const r="reauthenticate";try{const s=await Ts(n,bf(i,r,e,n),t);Oe(s.idToken,i,"internal-error");const a=Tl(s.idToken);Oe(a,i,"internal-error");const{sub:c}=a;return Oe(n.uid===c,i,"user-mismatch"),si._forOperation(n,r,s)}catch(s){throw s?.code==="auth/user-not-found"&&cn(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rf(n,e,t=!1){if(tn(n.app))return Promise.reject(Ln(n));const i="signIn",r=await bf(n,i,e),s=await si._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}async function Qx(n,e){return Rf(Ni(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cf(n){const e=Ni(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eT(n,e,t){if(tn(n.app))return Promise.reject(Ln(n));const i=Ni(n),a=await Jc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wf).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Cf(n),l}),c=await si._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function tT(n,e,t){return tn(n.app)?Promise.reject(Ln(n)):Qx(On(n),Wr.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Cf(n),i})}function nT(n,e,t,i){return On(n).onIdTokenChanged(e,t,i)}function iT(n,e,t){return On(n).beforeAuthStateChanged(e,t)}function rT(n,e,t,i){return On(n).onAuthStateChanged(e,t,i)}const Go="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Go,"1"),this.storage.removeItem(Go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=1e3,oT=10;class Pf extends If{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},s=this.storage.getItem(i);Mx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,oT):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},sT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pf.type="LOCAL";const aT=Pf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df extends If{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Df.type="SESSION";const Lf=Df;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new ia(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const c=Array.from(a).map(async h=>h(t.origin,s)),l=await cT(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ia.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{const h=Rl("",20);r.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},i);a={messageChannel:r,onMessage(m){const d=m;if(d.data.eventId===h)switch(d.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(d.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function hT(n){Nn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function uT(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dT(){return navigator?.serviceWorker?.controller||null}function fT(){return Nf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="firebaseLocalStorageDb",pT=1,Wo="firebaseLocalStorage",Of="fbase_key";class Ns{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ra(n,e){return n.transaction([Wo],e?"readwrite":"readonly").objectStore(Wo)}function mT(){const n=indexedDB.deleteDatabase(Uf);return new Ns(n).toPromise()}function Zc(){const n=indexedDB.open(Uf,pT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Wo,{keyPath:Of})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Wo)?e(i):(i.close(),await mT(),e(await Zc()))})})}async function Du(n,e,t){const i=ra(n,!0).put({[Of]:e,value:t});return new Ns(i).toPromise()}async function gT(n,e){const t=ra(n,!1).get(e),i=await new Ns(t).toPromise();return i===void 0?null:i.value}function Lu(n,e){const t=ra(n,!0).delete(e);return new Ns(t).toPromise()}const _T=800,vT=3;class Ff{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>vT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ia._getInstance(fT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await uT(),!this.activeServiceWorker)return;this.sender=new lT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zc();return await Du(e,Go,"1"),await Lu(e,Go),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Du(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>gT(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Lu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=ra(r,!1).getAll();return new Ns(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_T)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ff.type="LOCAL";const ET=Ff;new Ps(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(n,e){return e?Jn(e):(Oe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends Al{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ST(n){return Rf(n.auth,new Cl(n),n.bypassAuthState)}function yT(n){const{auth:e,user:t}=n;return Oe(t,e,"internal-error"),Zx(t,new Cl(n),n.bypassAuthState)}async function xT(n){const{auth:e,user:t}=n;return Oe(t,e,"internal-error"),Jx(t,new Cl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ST;case"linkViaPopup":case"linkViaRedirect":return xT;case"reauthViaPopup":case"reauthViaRedirect":return yT;default:cn(this.auth,"internal-error")}}resolve(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=new Ps(2e3,1e4);async function sa(n,e,t){const i=On(n);rx(i.auth,e,bl);const r=kf(i.auth,t);return new Ki(i.auth,"linkViaPopup",e,r,i).executeNotNull()}class Ki extends Bf{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Ki.currentPopupAction&&Ki.currentPopupAction.cancel(),Ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Oe(e,this.auth,"internal-error"),e}async onExecution(){ri(this.filter.length===1,"Popup operations only handle one event");const e=Rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TT.get())};e()}}Ki.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="pendingRedirect",Do=new Map;class AT extends Bf{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const i=await wT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wT(n,e){const t=CT(e),i=RT(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function bT(n,e){Do.set(n._key(),e)}function RT(n){return Jn(n._redirectPersistence)}function CT(n){return Po(MT,n.config.apiKey,n.name)}async function IT(n,e,t=!1){if(tn(n.app))return Promise.reject(Ln(n));const i=Ni(n),r=kf(i,e),a=await new AT(i,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=600*1e3;class DT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Vf(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Dn(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nu(e))}saveEventToCache(e){this.cachedEventUids.add(Nu(e)),this.lastProcessedEventTime=Date.now()}}function Nu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Vf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function LT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NT(n,e={}){return Li(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OT=/^https?/;async function FT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await NT(n);for(const t of e)try{if(kT(t))return}catch{}cn(n,"unauthorized-domain")}function kT(n){const e=Yc(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!OT.test(t))return!1;if(UT.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=new Ps(3e4,6e4);function Uu(){const n=Nn().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function VT(n){return new Promise((e,t)=>{function i(){Uu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uu(),t(Dn(n,"network-request-failed"))},timeout:BT.get()})}if(Nn().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Nn().gapi?.load)i();else{const r=Lx("iframefcb");return Nn()[r]=()=>{gapi.load?i():t(Dn(n,"network-request-failed"))},Tf(`${Dx()}?onload=${r}`).catch(s=>t(s))}}).catch(e=>{throw Lo=null,e})}let Lo=null;function zT(n){return Lo=Lo||VT(n),Lo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=new Ps(5e3,15e3),GT="__/auth/iframe",WT="emulator/auth/iframe",XT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $T(n){const e=n.config;Oe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?xl(e,WT):`https://${n.config.authDomain}/${GT}`,i={apiKey:e.apiKey,appName:n.name,v:Gr},r=qT.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Is(i).slice(1)}`}async function jT(n){const e=await zT(n),t=Nn().gapi;return Oe(t,n,"internal-error"),e.open({where:document.body,url:$T(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XT,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const a=Dn(n,"network-request-failed"),c=Nn().setTimeout(()=>{s(a)},HT.get());function l(){Nn().clearTimeout(c),r(i)}i.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KT=500,JT=600,ZT="_blank",QT="http://localhost";class Ou{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eM(n,e,t,i=KT,r=JT){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...YT,width:i.toString(),height:r.toString(),top:s,left:a},h=Wt().toLowerCase();t&&(c=gf(h)?ZT:t),pf(h)&&(e=e||QT,l.scrollbars="yes");const p=Object.entries(l).reduce((d,[S,A])=>`${d}${S}=${A},`,"");if(Tx(h)&&c!=="_self")return tM(e||"",c),new Ou(null);const m=window.open(e||"",c,p);Oe(m,n,"popup-blocked");try{m.focus()}catch{}return new Ou(m)}function tM(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM="__/auth/handler",iM="emulator/auth/handler",rM=encodeURIComponent("fac");async function Fu(n,e,t,i,r,s){Oe(n.config.authDomain,n,"auth-domain-config-required"),Oe(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Gr,eventId:r};if(e instanceof bl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ZE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof Ls){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),h=l?`#${rM}=${encodeURIComponent(l)}`:"";return`${sM(n)}?${Is(c).slice(1)}${h}`}function sM({config:n}){return n.emulator?xl(n,iM):`https://${n.authDomain}/${nM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="webStorageSupport";class oM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lf,this._completeRedirectFn=IT,this._overrideRedirectResult=bT}async _openPopup(e,t,i,r){ri(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await Fu(e,t,i,Yc(),r);return eM(e,s,Rl())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await Fu(e,t,i,Yc(),r);return hT(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(ri(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await jT(e),i=new DT(e);return t.register("authEvent",r=>(Oe(r?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ka,{type:Ka},r=>{const s=r?.[0]?.[Ka];s!==void 0&&t(!!s),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=FT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yf()||mf()||Ml()}}const aM=oM;var ku="@firebase/auth",Bu="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lM(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hM(n){Ci(new ni("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=i.options;Oe(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xf(n)},h=new Cx(i,r,s,l);return Bx(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ci(new ni("auth-internal",e=>{const t=Ni(e.getProvider("auth").getImmediate());return(i=>new cM(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(ku,Bu,lM(n)),Qn(ku,Bu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM=300,dM=zd("authIdTokenMaxAge")||uM;let Vu=null;const fM=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>dM)return;const r=t?.token;Vu!==r&&(Vu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function pM(n=Xd()){const e=ea(n,"auth");if(e.isInitialized())return e.getImmediate();const t=kx(n,{popupRedirectResolver:aM,persistence:[ET,aT,Lf]}),i=zd("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const a=fM(s.toString());iT(t,a,()=>a(t.currentUser)),nT(t,c=>a(c))}}const r=kE("auth");return r&&Vx(t,`http://${r}`),t}function mM(){return document.getElementsByTagName("head")?.[0]??document}Ix({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=Dn("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",mM().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hM("Browser");var zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Il;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,y){function g(){}g.prototype=y.prototype,M.D=y.prototype,M.prototype=new g,M.prototype.constructor=M,M.C=function(v,x,I){for(var w=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)w[ee-2]=arguments[ee];return y.prototype[x].apply(v,w)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(M,y,g){g||(g=0);var v=Array(16);if(typeof y=="string")for(var x=0;16>x;++x)v[x]=y.charCodeAt(g++)|y.charCodeAt(g++)<<8|y.charCodeAt(g++)<<16|y.charCodeAt(g++)<<24;else for(x=0;16>x;++x)v[x]=y[g++]|y[g++]<<8|y[g++]<<16|y[g++]<<24;y=M.g[0],g=M.g[1],x=M.g[2];var I=M.g[3],w=y+(I^g&(x^I))+v[0]+3614090360&4294967295;y=g+(w<<7&4294967295|w>>>25),w=I+(x^y&(g^x))+v[1]+3905402710&4294967295,I=y+(w<<12&4294967295|w>>>20),w=x+(g^I&(y^g))+v[2]+606105819&4294967295,x=I+(w<<17&4294967295|w>>>15),w=g+(y^x&(I^y))+v[3]+3250441966&4294967295,g=x+(w<<22&4294967295|w>>>10),w=y+(I^g&(x^I))+v[4]+4118548399&4294967295,y=g+(w<<7&4294967295|w>>>25),w=I+(x^y&(g^x))+v[5]+1200080426&4294967295,I=y+(w<<12&4294967295|w>>>20),w=x+(g^I&(y^g))+v[6]+2821735955&4294967295,x=I+(w<<17&4294967295|w>>>15),w=g+(y^x&(I^y))+v[7]+4249261313&4294967295,g=x+(w<<22&4294967295|w>>>10),w=y+(I^g&(x^I))+v[8]+1770035416&4294967295,y=g+(w<<7&4294967295|w>>>25),w=I+(x^y&(g^x))+v[9]+2336552879&4294967295,I=y+(w<<12&4294967295|w>>>20),w=x+(g^I&(y^g))+v[10]+4294925233&4294967295,x=I+(w<<17&4294967295|w>>>15),w=g+(y^x&(I^y))+v[11]+2304563134&4294967295,g=x+(w<<22&4294967295|w>>>10),w=y+(I^g&(x^I))+v[12]+1804603682&4294967295,y=g+(w<<7&4294967295|w>>>25),w=I+(x^y&(g^x))+v[13]+4254626195&4294967295,I=y+(w<<12&4294967295|w>>>20),w=x+(g^I&(y^g))+v[14]+2792965006&4294967295,x=I+(w<<17&4294967295|w>>>15),w=g+(y^x&(I^y))+v[15]+1236535329&4294967295,g=x+(w<<22&4294967295|w>>>10),w=y+(x^I&(g^x))+v[1]+4129170786&4294967295,y=g+(w<<5&4294967295|w>>>27),w=I+(g^x&(y^g))+v[6]+3225465664&4294967295,I=y+(w<<9&4294967295|w>>>23),w=x+(y^g&(I^y))+v[11]+643717713&4294967295,x=I+(w<<14&4294967295|w>>>18),w=g+(I^y&(x^I))+v[0]+3921069994&4294967295,g=x+(w<<20&4294967295|w>>>12),w=y+(x^I&(g^x))+v[5]+3593408605&4294967295,y=g+(w<<5&4294967295|w>>>27),w=I+(g^x&(y^g))+v[10]+38016083&4294967295,I=y+(w<<9&4294967295|w>>>23),w=x+(y^g&(I^y))+v[15]+3634488961&4294967295,x=I+(w<<14&4294967295|w>>>18),w=g+(I^y&(x^I))+v[4]+3889429448&4294967295,g=x+(w<<20&4294967295|w>>>12),w=y+(x^I&(g^x))+v[9]+568446438&4294967295,y=g+(w<<5&4294967295|w>>>27),w=I+(g^x&(y^g))+v[14]+3275163606&4294967295,I=y+(w<<9&4294967295|w>>>23),w=x+(y^g&(I^y))+v[3]+4107603335&4294967295,x=I+(w<<14&4294967295|w>>>18),w=g+(I^y&(x^I))+v[8]+1163531501&4294967295,g=x+(w<<20&4294967295|w>>>12),w=y+(x^I&(g^x))+v[13]+2850285829&4294967295,y=g+(w<<5&4294967295|w>>>27),w=I+(g^x&(y^g))+v[2]+4243563512&4294967295,I=y+(w<<9&4294967295|w>>>23),w=x+(y^g&(I^y))+v[7]+1735328473&4294967295,x=I+(w<<14&4294967295|w>>>18),w=g+(I^y&(x^I))+v[12]+2368359562&4294967295,g=x+(w<<20&4294967295|w>>>12),w=y+(g^x^I)+v[5]+4294588738&4294967295,y=g+(w<<4&4294967295|w>>>28),w=I+(y^g^x)+v[8]+2272392833&4294967295,I=y+(w<<11&4294967295|w>>>21),w=x+(I^y^g)+v[11]+1839030562&4294967295,x=I+(w<<16&4294967295|w>>>16),w=g+(x^I^y)+v[14]+4259657740&4294967295,g=x+(w<<23&4294967295|w>>>9),w=y+(g^x^I)+v[1]+2763975236&4294967295,y=g+(w<<4&4294967295|w>>>28),w=I+(y^g^x)+v[4]+1272893353&4294967295,I=y+(w<<11&4294967295|w>>>21),w=x+(I^y^g)+v[7]+4139469664&4294967295,x=I+(w<<16&4294967295|w>>>16),w=g+(x^I^y)+v[10]+3200236656&4294967295,g=x+(w<<23&4294967295|w>>>9),w=y+(g^x^I)+v[13]+681279174&4294967295,y=g+(w<<4&4294967295|w>>>28),w=I+(y^g^x)+v[0]+3936430074&4294967295,I=y+(w<<11&4294967295|w>>>21),w=x+(I^y^g)+v[3]+3572445317&4294967295,x=I+(w<<16&4294967295|w>>>16),w=g+(x^I^y)+v[6]+76029189&4294967295,g=x+(w<<23&4294967295|w>>>9),w=y+(g^x^I)+v[9]+3654602809&4294967295,y=g+(w<<4&4294967295|w>>>28),w=I+(y^g^x)+v[12]+3873151461&4294967295,I=y+(w<<11&4294967295|w>>>21),w=x+(I^y^g)+v[15]+530742520&4294967295,x=I+(w<<16&4294967295|w>>>16),w=g+(x^I^y)+v[2]+3299628645&4294967295,g=x+(w<<23&4294967295|w>>>9),w=y+(x^(g|~I))+v[0]+4096336452&4294967295,y=g+(w<<6&4294967295|w>>>26),w=I+(g^(y|~x))+v[7]+1126891415&4294967295,I=y+(w<<10&4294967295|w>>>22),w=x+(y^(I|~g))+v[14]+2878612391&4294967295,x=I+(w<<15&4294967295|w>>>17),w=g+(I^(x|~y))+v[5]+4237533241&4294967295,g=x+(w<<21&4294967295|w>>>11),w=y+(x^(g|~I))+v[12]+1700485571&4294967295,y=g+(w<<6&4294967295|w>>>26),w=I+(g^(y|~x))+v[3]+2399980690&4294967295,I=y+(w<<10&4294967295|w>>>22),w=x+(y^(I|~g))+v[10]+4293915773&4294967295,x=I+(w<<15&4294967295|w>>>17),w=g+(I^(x|~y))+v[1]+2240044497&4294967295,g=x+(w<<21&4294967295|w>>>11),w=y+(x^(g|~I))+v[8]+1873313359&4294967295,y=g+(w<<6&4294967295|w>>>26),w=I+(g^(y|~x))+v[15]+4264355552&4294967295,I=y+(w<<10&4294967295|w>>>22),w=x+(y^(I|~g))+v[6]+2734768916&4294967295,x=I+(w<<15&4294967295|w>>>17),w=g+(I^(x|~y))+v[13]+1309151649&4294967295,g=x+(w<<21&4294967295|w>>>11),w=y+(x^(g|~I))+v[4]+4149444226&4294967295,y=g+(w<<6&4294967295|w>>>26),w=I+(g^(y|~x))+v[11]+3174756917&4294967295,I=y+(w<<10&4294967295|w>>>22),w=x+(y^(I|~g))+v[2]+718787259&4294967295,x=I+(w<<15&4294967295|w>>>17),w=g+(I^(x|~y))+v[9]+3951481745&4294967295,M.g[0]=M.g[0]+y&4294967295,M.g[1]=M.g[1]+(x+(w<<21&4294967295|w>>>11))&4294967295,M.g[2]=M.g[2]+x&4294967295,M.g[3]=M.g[3]+I&4294967295}i.prototype.u=function(M,y){y===void 0&&(y=M.length);for(var g=y-this.blockSize,v=this.B,x=this.h,I=0;I<y;){if(x==0)for(;I<=g;)r(this,M,I),I+=this.blockSize;if(typeof M=="string"){for(;I<y;)if(v[x++]=M.charCodeAt(I++),x==this.blockSize){r(this,v),x=0;break}}else for(;I<y;)if(v[x++]=M[I++],x==this.blockSize){r(this,v),x=0;break}}this.h=x,this.o+=y},i.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var y=1;y<M.length-8;++y)M[y]=0;var g=8*this.o;for(y=M.length-8;y<M.length;++y)M[y]=g&255,g/=256;for(this.u(M),M=Array(16),y=g=0;4>y;++y)for(var v=0;32>v;v+=8)M[g++]=this.g[y]>>>v&255;return M};function s(M,y){var g=c;return Object.prototype.hasOwnProperty.call(g,M)?g[M]:g[M]=y(M)}function a(M,y){this.h=y;for(var g=[],v=!0,x=M.length-1;0<=x;x--){var I=M[x]|0;v&&I==y||(g[x]=I,v=!1)}this.g=g}var c={};function l(M){return-128<=M&&128>M?s(M,function(y){return new a([y|0],0>y?-1:0)}):new a([M|0],0>M?-1:0)}function h(M){if(isNaN(M)||!isFinite(M))return m;if(0>M)return E(h(-M));for(var y=[],g=1,v=0;M>=g;v++)y[v]=M/g|0,g*=4294967296;return new a(y,0)}function p(M,y){if(M.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(M.charAt(0)=="-")return E(p(M.substring(1),y));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=h(Math.pow(y,8)),v=m,x=0;x<M.length;x+=8){var I=Math.min(8,M.length-x),w=parseInt(M.substring(x,x+I),y);8>I?(I=h(Math.pow(y,I)),v=v.j(I).add(h(w))):(v=v.j(g),v=v.add(h(w)))}return v}var m=l(0),d=l(1),S=l(16777216);n=a.prototype,n.m=function(){if(C(this))return-E(this).m();for(var M=0,y=1,g=0;g<this.g.length;g++){var v=this.i(g);M+=(0<=v?v:4294967296+v)*y,y*=4294967296}return M},n.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(A(this))return"0";if(C(this))return"-"+E(this).toString(M);for(var y=h(Math.pow(M,6)),g=this,v="";;){var x=P(g,y).g;g=f(g,x.j(y));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(M);if(g=x,A(g))return I+v;for(;6>I.length;)I="0"+I;v=I+v}},n.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function A(M){if(M.h!=0)return!1;for(var y=0;y<M.g.length;y++)if(M.g[y]!=0)return!1;return!0}function C(M){return M.h==-1}n.l=function(M){return M=f(this,M),C(M)?-1:A(M)?0:1};function E(M){for(var y=M.g.length,g=[],v=0;v<y;v++)g[v]=~M.g[v];return new a(g,~M.h).add(d)}n.abs=function(){return C(this)?E(this):this},n.add=function(M){for(var y=Math.max(this.g.length,M.g.length),g=[],v=0,x=0;x<=y;x++){var I=v+(this.i(x)&65535)+(M.i(x)&65535),w=(I>>>16)+(this.i(x)>>>16)+(M.i(x)>>>16);v=w>>>16,I&=65535,w&=65535,g[x]=w<<16|I}return new a(g,g[g.length-1]&-2147483648?-1:0)};function f(M,y){return M.add(E(y))}n.j=function(M){if(A(this)||A(M))return m;if(C(this))return C(M)?E(this).j(E(M)):E(E(this).j(M));if(C(M))return E(this.j(E(M)));if(0>this.l(S)&&0>M.l(S))return h(this.m()*M.m());for(var y=this.g.length+M.g.length,g=[],v=0;v<2*y;v++)g[v]=0;for(v=0;v<this.g.length;v++)for(var x=0;x<M.g.length;x++){var I=this.i(v)>>>16,w=this.i(v)&65535,ee=M.i(x)>>>16,K=M.i(x)&65535;g[2*v+2*x]+=w*K,N(g,2*v+2*x),g[2*v+2*x+1]+=I*K,N(g,2*v+2*x+1),g[2*v+2*x+1]+=w*ee,N(g,2*v+2*x+1),g[2*v+2*x+2]+=I*ee,N(g,2*v+2*x+2)}for(v=0;v<y;v++)g[v]=g[2*v+1]<<16|g[2*v];for(v=y;v<2*y;v++)g[v]=0;return new a(g,0)};function N(M,y){for(;(M[y]&65535)!=M[y];)M[y+1]+=M[y]>>>16,M[y]&=65535,y++}function L(M,y){this.g=M,this.h=y}function P(M,y){if(A(y))throw Error("division by zero");if(A(M))return new L(m,m);if(C(M))return y=P(E(M),y),new L(E(y.g),E(y.h));if(C(y))return y=P(M,E(y)),new L(E(y.g),y.h);if(30<M.g.length){if(C(M)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var g=d,v=y;0>=v.l(M);)g=k(g),v=k(v);var x=O(g,1),I=O(v,1);for(v=O(v,2),g=O(g,2);!A(v);){var w=I.add(v);0>=w.l(M)&&(x=x.add(g),I=w),v=O(v,1),g=O(g,1)}return y=f(M,x.j(y)),new L(x,y)}for(x=m;0<=M.l(y);){for(g=Math.max(1,Math.floor(M.m()/y.m())),v=Math.ceil(Math.log(g)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),I=h(g),w=I.j(y);C(w)||0<w.l(M);)g-=v,I=h(g),w=I.j(y);A(I)&&(I=d),x=x.add(I),M=f(M,w)}return new L(x,M)}n.A=function(M){return P(this,M).h},n.and=function(M){for(var y=Math.max(this.g.length,M.g.length),g=[],v=0;v<y;v++)g[v]=this.i(v)&M.i(v);return new a(g,this.h&M.h)},n.or=function(M){for(var y=Math.max(this.g.length,M.g.length),g=[],v=0;v<y;v++)g[v]=this.i(v)|M.i(v);return new a(g,this.h|M.h)},n.xor=function(M){for(var y=Math.max(this.g.length,M.g.length),g=[],v=0;v<y;v++)g[v]=this.i(v)^M.i(v);return new a(g,this.h^M.h)};function k(M){for(var y=M.g.length+1,g=[],v=0;v<y;v++)g[v]=M.i(v)<<1|M.i(v-1)>>>31;return new a(g,M.h)}function O(M,y){var g=y>>5;y%=32;for(var v=M.g.length-g,x=[],I=0;I<v;I++)x[I]=0<y?M.i(I+g)>>>y|M.i(I+g+1)<<32-y:M.i(I+g);return new a(x,M.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,Il=a}).apply(typeof zu<"u"?zu:typeof self<"u"?self:typeof window<"u"?window:{});var To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,_){return o==Array.prototype||o==Object.prototype||(o[u]=_.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof To=="object"&&To];for(var u=0;u<o.length;++u){var _=o[u];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function r(o,u){if(u)e:{var _=i;o=o.split(".");for(var R=0;R<o.length-1;R++){var z=o[R];if(!(z in _))break e;_=_[z]}o=o[o.length-1],R=_[o],u=u(R),u!=R&&u!=null&&e(_,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var _=0,R=!1,z={next:function(){if(!R&&_<o.length){var $=_++;return{value:u($,o[$]),done:!1}}return R=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}r("Array.prototype.values",function(o){return o||function(){return s(this,function(u,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function p(o,u,_){return o.call.apply(o.bind,arguments)}function m(o,u,_){if(!o)throw Error();if(2<arguments.length){var R=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,R),o.apply(u,z)}}return function(){return o.apply(u,arguments)}}function d(o,u,_){return d=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,d.apply(null,arguments)}function S(o,u){var _=Array.prototype.slice.call(arguments,1);return function(){var R=_.slice();return R.push.apply(R,arguments),o.apply(this,R)}}function A(o,u){function _(){}_.prototype=u.prototype,o.aa=u.prototype,o.prototype=new _,o.prototype.constructor=o,o.Qb=function(R,z,$){for(var he=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)he[pt-2]=arguments[pt];return u.prototype[z].apply(R,he)}}function C(o){const u=o.length;if(0<u){const _=Array(u);for(let R=0;R<u;R++)_[R]=o[R];return _}return[]}function E(o,u){for(let _=1;_<arguments.length;_++){const R=arguments[_];if(l(R)){const z=o.length||0,$=R.length||0;o.length=z+$;for(let he=0;he<$;he++)o[z+he]=R[he]}else o.push(R)}}class f{constructor(u,_){this.i=u,this.j=_,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function P(o){return P[" "](o),o}P[" "]=function(){};var k=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function O(o,u,_){for(const R in o)u.call(_,o[R],R,o)}function M(o,u){for(const _ in o)u.call(void 0,o[_],_,o)}function y(o){const u={};for(const _ in o)u[_]=o[_];return u}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,u){let _,R;for(let z=1;z<arguments.length;z++){R=arguments[z];for(_ in R)o[_]=R[_];for(let $=0;$<g.length;$++)_=g[$],Object.prototype.hasOwnProperty.call(R,_)&&(o[_]=R[_])}}function x(o){var u=1;o=o.split(":");const _=[];for(;0<u&&o.length;)_.push(o.shift()),u--;return o.length&&_.push(o.join(":")),_}function I(o){c.setTimeout(()=>{throw o},0)}function w(){var o=ue;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ee{constructor(){this.h=this.g=null}add(u,_){const R=K.get();R.set(u,_),this.h?this.h.next=R:this.g=R,this.h=R}}var K=new f(()=>new te,o=>o.reset());class te{constructor(){this.next=this.g=this.h=null}set(u,_){this.h=u,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,j=!1,ue=new ee,_e=()=>{const o=c.Promise.resolve(void 0);ne=()=>{o.then(Ce)}};var Ce=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(_){I(_)}var u=K;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}j=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var mt=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const _=()=>{};c.addEventListener("test",_,u),c.removeEventListener("test",_,u)}catch{}return o})();function Ye(o,u){if(Ge.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var _=this.type=o.type,R=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(k){e:{try{P(u.nodeName);var z=!0;break e}catch{}z=!1}z||(u=null)}}else _=="mouseover"?u=o.fromElement:_=="mouseout"&&(u=o.toElement);this.relatedTarget=u,R?(this.clientX=R.clientX!==void 0?R.clientX:R.pageX,this.clientY=R.clientY!==void 0?R.clientY:R.pageY,this.screenX=R.screenX||0,this.screenY=R.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Q[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ye.aa.h.call(this)}}A(Ye,Ge);var Q={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ie="closure_listenable_"+(1e6*Math.random()|0),Se=0;function Fe(o,u,_,R,z){this.listener=o,this.proxy=null,this.src=u,this.type=_,this.capture=!!R,this.ha=z,this.key=++Se,this.da=this.fa=!1}function Ae(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function $e(o){this.src=o,this.g={},this.h=0}$e.prototype.add=function(o,u,_,R,z){var $=o.toString();o=this.g[$],o||(o=this.g[$]=[],this.h++);var he=U(o,u,R,z);return-1<he?(u=o[he],_||(u.fa=!1)):(u=new Fe(u,this.src,$,!!R,z),u.fa=_,o.push(u)),u};function Mt(o,u){var _=u.type;if(_ in o.g){var R=o.g[_],z=Array.prototype.indexOf.call(R,u,void 0),$;($=0<=z)&&Array.prototype.splice.call(R,z,1),$&&(Ae(u),o.g[_].length==0&&(delete o.g[_],o.h--))}}function U(o,u,_,R){for(var z=0;z<o.length;++z){var $=o[z];if(!$.da&&$.listener==u&&$.capture==!!_&&$.ha==R)return z}return-1}var ut="closure_lm_"+(1e6*Math.random()|0),Ve={};function Ne(o,u,_,R,z){if(Array.isArray(u)){for(var $=0;$<u.length;$++)Ne(o,u[$],_,R,z);return null}return _=H(_),o&&o[ie]?o.K(u,_,h(R)?!!R.capture:!1,z):Me(o,u,_,!1,R,z)}function Me(o,u,_,R,z,$){if(!u)throw Error("Invalid event type");var he=h(z)?!!z.capture:!!z,pt=D(o);if(pt||(o[ut]=pt=new $e(o)),_=pt.add(u,_,R,he,$),_.proxy)return _;if(R=gt(),_.proxy=R,R.src=o,R.listener=_,o.addEventListener)mt||(z=he),z===void 0&&(z=!1),o.addEventListener(u.toString(),R,z);else if(o.attachEvent)o.attachEvent(yt(u.toString()),R);else if(o.addListener&&o.removeListener)o.addListener(R);else throw Error("addEventListener and attachEvent are unavailable.");return _}function gt(){function o(_){return u.call(o.src,o.listener,_)}const u=St;return o}function Te(o,u,_,R,z){if(Array.isArray(u))for(var $=0;$<u.length;$++)Te(o,u[$],_,R,z);else R=h(R)?!!R.capture:!!R,_=H(_),o&&o[ie]?(o=o.i,u=String(u).toString(),u in o.g&&($=o.g[u],_=U($,_,R,z),-1<_&&(Ae($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete o.g[u],o.h--)))):o&&(o=D(o))&&(u=o.g[u.toString()],o=-1,u&&(o=U(u,_,R,z)),(_=-1<o?u[o]:null)&&He(_))}function He(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ie])Mt(u.i,o);else{var _=o.type,R=o.proxy;u.removeEventListener?u.removeEventListener(_,R,o.capture):u.detachEvent?u.detachEvent(yt(_),R):u.addListener&&u.removeListener&&u.removeListener(R),(_=D(u))?(Mt(_,o),_.h==0&&(_.src=null,u[ut]=null)):Ae(o)}}}function yt(o){return o in Ve?Ve[o]:Ve[o]="on"+o}function St(o,u){if(o.da)o=!0;else{u=new Ye(u,this);var _=o.listener,R=o.ha||o.src;o.fa&&He(o),o=_.call(R,u)}return o}function D(o){return o=o[ut],o instanceof $e?o:null}var T="__closure_events_fn_"+(1e9*Math.random()>>>0);function H(o){return typeof o=="function"?o:(o[T]||(o[T]=function(u){return o.handleEvent(u)}),o[T])}function q(){Be.call(this),this.i=new $e(this),this.M=this,this.F=null}A(q,Be),q.prototype[ie]=!0,q.prototype.removeEventListener=function(o,u,_,R){Te(this,o,u,_,R)};function Z(o,u){var _,R=o.F;if(R)for(_=[];R;R=R.F)_.push(R);if(o=o.M,R=u.type||u,typeof u=="string")u=new Ge(u,o);else if(u instanceof Ge)u.target=u.target||o;else{var z=u;u=new Ge(R,o),v(u,z)}if(z=!0,_)for(var $=_.length-1;0<=$;$--){var he=u.g=_[$];z=Y(he,R,!0,u)&&z}if(he=u.g=o,z=Y(he,R,!0,u)&&z,z=Y(he,R,!1,u)&&z,_)for($=0;$<_.length;$++)he=u.g=_[$],z=Y(he,R,!1,u)&&z}q.prototype.N=function(){if(q.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var _=o.g[u],R=0;R<_.length;R++)Ae(_[R]);delete o.g[u],o.h--}}this.F=null},q.prototype.K=function(o,u,_,R){return this.i.add(String(o),u,!1,_,R)},q.prototype.L=function(o,u,_,R){return this.i.add(String(o),u,!0,_,R)};function Y(o,u,_,R){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var z=!0,$=0;$<u.length;++$){var he=u[$];if(he&&!he.da&&he.capture==_){var pt=he.listener,Ut=he.ha||he.src;he.fa&&Mt(o.i,he),z=pt.call(Ut,R)!==!1&&z}}return z&&!R.defaultPrevented}function be(o,u,_){if(typeof o=="function")_&&(o=d(o,_));else if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function ce(o){o.g=be(()=>{o.g=null,o.i&&(o.i=!1,ce(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class we extends Be{constructor(u,_){super(),this.m=u,this.l=_,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ce(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ye(o){Be.call(this),this.h=o,this.g={}}A(ye,Be);var oe=[];function me(o){O(o.g,function(u,_){this.g.hasOwnProperty(_)&&He(u)},o),o.g={}}ye.prototype.N=function(){ye.aa.N.call(this),me(this)},ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Le=c.JSON.stringify,Re=c.JSON.parse,fe=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ze(){}ze.prototype.h=null;function F(o){return o.h||(o.h=o.i())}function ae(){}var le={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ve(){Ge.call(this,"d")}A(ve,Ge);function re(){Ge.call(this,"c")}A(re,Ge);var J={},xe=null;function ke(){return xe=xe||new q}J.La="serverreachability";function ct(o){Ge.call(this,J.La,o)}A(ct,Ge);function Ke(o){const u=ke();Z(u,new ct(u))}J.STAT_EVENT="statevent";function nn(o,u){Ge.call(this,J.STAT_EVENT,o),this.stat=u}A(nn,Ge);function _t(o){const u=ke();Z(u,new nn(u,o))}J.Ma="timingevent";function Xr(o,u){Ge.call(this,J.Ma,o),this.size=u}A(Xr,Ge);function Yt(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Fn(){this.g=!0}Fn.prototype.xa=function(){this.g=!1};function Os(o,u,_,R,z,$){o.info(function(){if(o.g)if($)for(var he="",pt=$.split("&"),Ut=0;Ut<pt.length;Ut++){var tt=pt[Ut].split("=");if(1<tt.length){var Ft=tt[0];tt=tt[1];var kt=Ft.split("_");he=2<=kt.length&&kt[1]=="type"?he+(Ft+"="+tt+"&"):he+(Ft+"=redacted&")}}else he=null;else he=$;return"XMLHTTP REQ ("+R+") [attempt "+z+"]: "+u+`
`+_+`
`+he})}function Fs(o,u,_,R,z,$,he){o.info(function(){return"XMLHTTP RESP ("+R+") [ attempt "+z+"]: "+u+`
`+_+`
`+$+" "+he})}function ln(o,u,_,R){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+rr(o,_)+(R?" "+R:"")})}function ks(o,u){o.info(function(){return"TIMEOUT: "+u})}Fn.prototype.info=function(){};function rr(o,u){if(!o.g)return u;if(!u)return null;try{var _=JSON.parse(u);if(_){for(o=0;o<_.length;o++)if(Array.isArray(_[o])){var R=_[o];if(!(2>R.length)){var z=R[1];if(Array.isArray(z)&&!(1>z.length)){var $=z[0];if($!="noop"&&$!="stop"&&$!="close")for(var he=1;he<z.length;he++)z[he]=""}}}}return Le(_)}catch{return u}}var sr={NO_ERROR:0,TIMEOUT:8},Bs={},qr;function or(){}A(or,ze),or.prototype.g=function(){return new XMLHttpRequest},or.prototype.i=function(){return{}},qr=new or;function Tn(o,u,_,R){this.j=o,this.i=u,this.l=_,this.R=R||1,this.U=new ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vs}function Vs(){this.i=null,this.g="",this.h=!1}var zs={},$r={};function b(o,u,_){o.L=1,o.v=li(et(u)),o.m=_,o.P=!0,B(o,null)}function B(o,u){o.F=Date.now(),V(o),o.A=et(o.v);var _=o.A,R=o.R;Array.isArray(R)||(R=[String(R)]),Vl(_.i,"t",R),o.C=0,_=o.j.J,o.h=new Vs,o.g=rh(o.j,_?u:null,!o.m),0<o.O&&(o.M=new we(d(o.Y,o,o.g),o.O)),u=o.U,_=o.g,R=o.ca;var z="readystatechange";Array.isArray(z)||(z&&(oe[0]=z.toString()),z=oe);for(var $=0;$<z.length;$++){var he=Ne(_,z[$],R||u.handleEvent,!1,u.h||u);if(!he)break;u.g[he.key]=he}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ke(),Os(o.i,o.u,o.A,o.l,o.R,o.m)}Tn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Bn(o)==3?u.j():this.Y(o)},Tn.prototype.Y=function(o){try{if(o==this.g)e:{const kt=Bn(this.g);var u=this.g.Ba();const lr=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||$l(this.g)))){this.J||kt!=4||u==7||(u==8||0>=lr?Ke(3):Ke(2)),de(this);var _=this.g.Z();this.X=_;t:if(G(this)){var R=$l(this.g);o="";var z=R.length,$=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ge(this),Ee(this);var he="";break t}this.h.i=new c.TextDecoder}for(u=0;u<z;u++)this.h.h=!0,o+=this.h.i.decode(R[u],{stream:!($&&u==z-1)});R.length=0,this.h.g+=o,this.C=0,he=this.h.g}else he=this.g.oa();if(this.o=_==200,Fs(this.i,this.u,this.A,this.l,this.R,kt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var pt,Ut=this.g;if((pt=Ut.g?Ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(pt)){var tt=pt;break t}}tt=null}if(_=tt)ln(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,De(this,_);else{this.o=!1,this.s=3,_t(12),ge(this),Ee(this);break e}}if(this.P){_=!0;let hn;for(;!this.J&&this.C<he.length;)if(hn=X(this,he),hn==$r){kt==4&&(this.s=4,_t(14),_=!1),ln(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==zs){this.s=4,_t(15),ln(this.i,this.l,he,"[Invalid Chunk]"),_=!1;break}else ln(this.i,this.l,hn,null),De(this,hn);if(G(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||he.length!=0||this.h.h||(this.s=1,_t(16),_=!1),this.o=this.o&&_,!_)ln(this.i,this.l,he,"[Invalid Chunked Response]"),ge(this),Ee(this);else if(0<he.length&&!this.W){this.W=!0;var Ft=this.j;Ft.g==this&&Ft.ba&&!Ft.M&&(Ft.j.info("Great, no buffering proxy detected. Bytes received: "+he.length),ha(Ft),Ft.M=!0,_t(11))}}else ln(this.i,this.l,he,null),De(this,he);kt==4&&ge(this),this.o&&!this.J&&(kt==4?eh(this.j,this):(this.o=!1,V(this)))}else ap(this.g),_==400&&0<he.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),ge(this),Ee(this)}}}catch{}finally{}};function G(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function X(o,u){var _=o.C,R=u.indexOf(`
`,_);return R==-1?$r:(_=Number(u.substring(_,R)),isNaN(_)?zs:(R+=1,R+_>u.length?$r:(u=u.slice(R,R+_),o.C=R+_,u)))}Tn.prototype.cancel=function(){this.J=!0,ge(this)};function V(o){o.S=Date.now()+o.I,se(o,o.I)}function se(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Yt(d(o.ba,o),u)}function de(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Tn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ks(this.i,this.A),this.L!=2&&(Ke(),_t(17)),ge(this),this.s=2,Ee(this)):se(this,this.S-o)};function Ee(o){o.j.G==0||o.J||eh(o.j,o)}function ge(o){de(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,me(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function De(o,u){try{var _=o.j;if(_.G!=0&&(_.g==o||vt(_.h,o))){if(!o.K&&vt(_.h,o)&&_.G==3){try{var R=_.Da.g.parse(u)}catch{R=null}if(Array.isArray(R)&&R.length==3){var z=R;if(z[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<o.F)$s(_),Xs(_);else break e;la(_),_t(18)}}else _.za=z[1],0<_.za-_.T&&37500>z[2]&&_.F&&_.v==0&&!_.C&&(_.C=Yt(d(_.Za,_),6e3));if(1>=it(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ui(_,11)}else if((o.K||_.g==o)&&$s(_),!N(u))for(z=_.Da.g.parse(u),u=0;u<z.length;u++){let tt=z[u];if(_.T=tt[0],tt=tt[1],_.G==2)if(tt[0]=="c"){_.K=tt[1],_.ia=tt[2];const Ft=tt[3];Ft!=null&&(_.la=Ft,_.j.info("VER="+_.la));const kt=tt[4];kt!=null&&(_.Aa=kt,_.j.info("SVER="+_.Aa));const lr=tt[5];lr!=null&&typeof lr=="number"&&0<lr&&(R=1.5*lr,_.L=R,_.j.info("backChannelRequestTimeoutMs_="+R)),R=_;const hn=o.g;if(hn){const js=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(js){var $=R.h;$.g||js.indexOf("spdy")==-1&&js.indexOf("quic")==-1&&js.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(lt($,$.h),$.h=null))}if(R.D){const ua=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;ua&&(R.ya=ua,Xe(R.I,R.D,ua))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-o.F,_.j.info("Handshake RTT: "+_.R+"ms")),R=_;var he=o;if(R.qa=ih(R,R.J?R.ia:null,R.W),he.K){ot(R.h,he);var pt=he,Ut=R.L;Ut&&(pt.I=Ut),pt.B&&(de(pt),V(pt)),R.g=he}else Zl(R);0<_.i.length&&qs(_)}else tt[0]!="stop"&&tt[0]!="close"||Ui(_,7);else _.G==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?Ui(_,7):ca(_):tt[0]!="noop"&&_.l&&_.l.ta(tt),_.v=0)}}Ke(4)}catch{}}var Ue=class{constructor(o,u){this.g=o,this.map=u}};function Ie(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function je(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function it(o){return o.h?1:o.g?o.g.size:0}function vt(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function lt(o,u){o.g?o.g.add(u):o.h=u}function ot(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Ie.prototype.cancel=function(){if(this.i=Pe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Pe(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const _ of o.g.values())u=u.concat(_.D);return u}return C(o.i)}function Et(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],_=o.length,R=0;R<_;R++)u.push(o[R]);return u}u=[],_=0;for(R in o)u[_++]=o[R];return u}function Ze(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var _=0;_<o;_++)u.push(_);return u}u=[],_=0;for(const R in o)u[_++]=R;return u}}}function Ot(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var _=Ze(o),R=Et(o),z=R.length,$=0;$<z;$++)u.call(void 0,R[$],_&&_[$],o)}var kn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zt(o,u){if(o){o=o.split("&");for(var _=0;_<o.length;_++){var R=o[_].indexOf("="),z=null;if(0<=R){var $=o[_].substring(0,R);z=o[_].substring(R+1)}else $=o[_];u($,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Kt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Kt){this.h=o.h,Lt(this,o.j),this.o=o.o,this.g=o.g,Nt(this,o.s),this.l=o.l;var u=o.i,_=new Yr;_.i=u.i,u.g&&(_.g=new Map(u.g),_.h=u.h),Pt(this,_),this.m=o.m}else o&&(u=String(o).match(kn))?(this.h=!1,Lt(this,u[1]||"",!0),this.o=Jt(u[2]||""),this.g=Jt(u[3]||"",!0),Nt(this,u[4]),this.l=Jt(u[5]||"",!0),Pt(this,u[6]||"",!0),this.m=Jt(u[7]||"")):(this.h=!1,this.i=new Yr(null,this.h))}Kt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(jr(u,Fl,!0),":");var _=this.g;return(_||u=="file")&&(o.push("//"),(u=this.o)&&o.push(jr(u,Fl,!0),"@"),o.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&o.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&o.push("/"),o.push(jr(_,_.charAt(0)=="/"?Jf:Kf,!0))),(_=this.i.toString())&&o.push("?",_),(_=this.m)&&o.push("#",jr(_,Qf)),o.join("")};function et(o){return new Kt(o)}function Lt(o,u,_){o.j=_?Jt(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Nt(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Pt(o,u,_){u instanceof Yr?(o.i=u,ep(o.i,o.h)):(_||(u=jr(u,Zf)),o.i=new Yr(u,o.h))}function Xe(o,u,_){o.i.set(u,_)}function li(o){return Xe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Jt(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function jr(o,u,_){return typeof o=="string"?(o=encodeURI(o).replace(u,Yf),_&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Yf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Fl=/[#\/\?@]/g,Kf=/[#\?:]/g,Jf=/[#\?]/g,Zf=/[#\?@]/g,Qf=/#/g;function Yr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function hi(o){o.g||(o.g=new Map,o.h=0,o.i&&zt(o.i,function(u,_){o.add(decodeURIComponent(u.replace(/\+/g," ")),_)}))}n=Yr.prototype,n.add=function(o,u){hi(this),this.i=null,o=ar(this,o);var _=this.g.get(o);return _||this.g.set(o,_=[]),_.push(u),this.h+=1,this};function kl(o,u){hi(o),u=ar(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Bl(o,u){return hi(o),u=ar(o,u),o.g.has(u)}n.forEach=function(o,u){hi(this),this.g.forEach(function(_,R){_.forEach(function(z){o.call(u,z,R,this)},this)},this)},n.na=function(){hi(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),_=[];for(let R=0;R<u.length;R++){const z=o[R];for(let $=0;$<z.length;$++)_.push(u[R])}return _},n.V=function(o){hi(this);let u=[];if(typeof o=="string")Bl(this,o)&&(u=u.concat(this.g.get(ar(this,o))));else{o=Array.from(this.g.values());for(let _=0;_<o.length;_++)u=u.concat(o[_])}return u},n.set=function(o,u){return hi(this),this.i=null,o=ar(this,o),Bl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Vl(o,u,_){kl(o,u),0<_.length&&(o.i=null,o.g.set(ar(o,u),C(_)),o.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var _=0;_<u.length;_++){var R=u[_];const $=encodeURIComponent(String(R)),he=this.V(R);for(R=0;R<he.length;R++){var z=$;he[R]!==""&&(z+="="+encodeURIComponent(String(he[R]))),o.push(z)}}return this.i=o.join("&")};function ar(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function ep(o,u){u&&!o.j&&(hi(o),o.i=null,o.g.forEach(function(_,R){var z=R.toLowerCase();R!=z&&(kl(this,R),Vl(this,z,_))},o)),o.j=u}function tp(o,u){const _=new Fn;if(c.Image){const R=new Image;R.onload=S(ui,_,"TestLoadImage: loaded",!0,u,R),R.onerror=S(ui,_,"TestLoadImage: error",!1,u,R),R.onabort=S(ui,_,"TestLoadImage: abort",!1,u,R),R.ontimeout=S(ui,_,"TestLoadImage: timeout",!1,u,R),c.setTimeout(function(){R.ontimeout&&R.ontimeout()},1e4),R.src=o}else u(!1)}function np(o,u){const _=new Fn,R=new AbortController,z=setTimeout(()=>{R.abort(),ui(_,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:R.signal}).then($=>{clearTimeout(z),$.ok?ui(_,"TestPingServer: ok",!0,u):ui(_,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(z),ui(_,"TestPingServer: error",!1,u)})}function ui(o,u,_,R,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),R(_)}catch{}}function ip(){this.g=new fe}function rp(o,u,_){const R=_||"";try{Ot(o,function(z,$){let he=z;h(z)&&(he=Le(z)),u.push(R+$+"="+encodeURIComponent(he))})}catch(z){throw u.push(R+"type="+encodeURIComponent("_badmap")),z}}function Hs(o){this.l=o.Ub||null,this.j=o.eb||!1}A(Hs,ze),Hs.prototype.g=function(){return new Gs(this.l,this.j)},Hs.prototype.i=(function(o){return function(){return o}})({});function Gs(o,u){q.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Gs,q),n=Gs.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Jr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Jr(this)),this.g&&(this.readyState=3,Jr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function zl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Kr(this):Jr(this),this.readyState==3&&zl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Kr(this))},n.Qa=function(o){this.g&&(this.response=o,Kr(this))},n.ga=function(){this.g&&Kr(this)};function Kr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Jr(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var _=u.next();!_.done;)_=_.value,o.push(_[0]+": "+_[1]),_=u.next();return o.join(`\r
`)};function Jr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Hl(o){let u="";return O(o,function(_,R){u+=R,u+=":",u+=_,u+=`\r
`}),u}function aa(o,u,_){e:{for(R in _){var R=!1;break e}R=!0}R||(_=Hl(_),typeof o=="string"?_!=null&&encodeURIComponent(String(_)):Xe(o,u,_))}function xt(o){q.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(xt,q);var sp=/^https?$/i,op=["POST","PUT"];n=xt.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,_,R){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qr.g(),this.v=this.o?F(this.o):F(qr),this.g.onreadystatechange=d(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch($){Gl(this,$);return}if(o=_||"",_=new Map(this.headers),R)if(Object.getPrototypeOf(R)===Object.prototype)for(var z in R)_.set(z,R[z]);else if(typeof R.keys=="function"&&typeof R.get=="function")for(const $ of R.keys())_.set($,R.get($));else throw Error("Unknown input type for opt_headers: "+String(R));R=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),z=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(op,u,void 0))||R||z||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,he]of _)this.g.setRequestHeader($,he);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ql(this),this.u=!0,this.g.send(o),this.u=!1}catch($){Gl(this,$)}};function Gl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Wl(o),Ws(o)}function Wl(o){o.A||(o.A=!0,Z(o,"complete"),Z(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Z(this,"complete"),Z(this,"abort"),Ws(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ws(this,!0)),xt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xl(this):this.bb())},n.bb=function(){Xl(this)};function Xl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Bn(o)!=4||o.Z()!=2)){if(o.u&&Bn(o)==4)be(o.Ea,0,o);else if(Z(o,"readystatechange"),Bn(o)==4){o.h=!1;try{const he=o.Z();e:switch(he){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var _;if(!(_=u)){var R;if(R=he===0){var z=String(o.D).match(kn)[1]||null;!z&&c.self&&c.self.location&&(z=c.self.location.protocol.slice(0,-1)),R=!sp.test(z?z.toLowerCase():"")}_=R}if(_)Z(o,"complete"),Z(o,"success");else{o.m=6;try{var $=2<Bn(o)?o.g.statusText:""}catch{$=""}o.l=$+" ["+o.Z()+"]",Wl(o)}}finally{Ws(o)}}}}function Ws(o,u){if(o.g){ql(o);const _=o.g,R=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Z(o,"ready");try{_.onreadystatechange=R}catch{}}}function ql(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Bn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Re(u)}};function $l(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ap(o){const u={};o=(o.g&&2<=Bn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let R=0;R<o.length;R++){if(N(o[R]))continue;var _=x(o[R]);const z=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=u[z]||[];u[z]=$,$.push(_)}M(u,function(R){return R.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zr(o,u,_){return _&&_.internalChannelParams&&_.internalChannelParams[o]||u}function jl(o){this.Aa=0,this.i=[],this.j=new Fn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zr("baseRetryDelayMs",5e3,o),this.cb=Zr("retryDelaySeedMs",1e4,o),this.Wa=Zr("forwardChannelMaxRetries",2,o),this.wa=Zr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ie(o&&o.concurrentRequestLimit),this.Da=new ip,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=jl.prototype,n.la=8,n.G=1,n.connect=function(o,u,_,R){_t(0),this.W=o,this.H=u||{},_&&R!==void 0&&(this.H.OSID=_,this.H.OAID=R),this.F=this.X,this.I=ih(this,null,this.W),qs(this)};function ca(o){if(Yl(o),o.G==3){var u=o.U++,_=et(o.I);if(Xe(_,"SID",o.K),Xe(_,"RID",u),Xe(_,"TYPE","terminate"),Qr(o,_),u=new Tn(o,o.j,u),u.L=2,u.v=li(et(_)),_=!1,c.navigator&&c.navigator.sendBeacon)try{_=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!_&&c.Image&&(new Image().src=u.v,_=!0),_||(u.g=rh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),V(u)}nh(o)}function Xs(o){o.g&&(ha(o),o.g.cancel(),o.g=null)}function Yl(o){Xs(o),o.u&&(c.clearTimeout(o.u),o.u=null),$s(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function qs(o){if(!je(o.h)&&!o.s){o.s=!0;var u=o.Ga;ne||_e(),j||(ne(),j=!0),ue.add(u,o),o.B=0}}function cp(o,u){return it(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Yt(d(o.Ga,o,u),th(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const z=new Tn(this,this.j,o);let $=this.o;if(this.S&&($?($=y($),v($,this.S)):$=this.S),this.m!==null||this.O||(z.H=$,$=null),this.P)e:{for(var u=0,_=0;_<this.i.length;_++){t:{var R=this.i[_];if("__data__"in R.map&&(R=R.map.__data__,typeof R=="string")){R=R.length;break t}R=void 0}if(R===void 0)break;if(u+=R,4096<u){u=_;break e}if(u===4096||_===this.i.length-1){u=_+1;break e}}u=1e3}else u=1e3;u=Jl(this,z,u),_=et(this.I),Xe(_,"RID",o),Xe(_,"CVER",22),this.D&&Xe(_,"X-HTTP-Session-Id",this.D),Qr(this,_),$&&(this.O?u="headers="+encodeURIComponent(String(Hl($)))+"&"+u:this.m&&aa(_,this.m,$)),lt(this.h,z),this.Ua&&Xe(_,"TYPE","init"),this.P?(Xe(_,"$req",u),Xe(_,"SID","null"),z.T=!0,b(z,_,null)):b(z,_,u),this.G=2}}else this.G==3&&(o?Kl(this,o):this.i.length==0||je(this.h)||Kl(this))};function Kl(o,u){var _;u?_=u.l:_=o.U++;const R=et(o.I);Xe(R,"SID",o.K),Xe(R,"RID",_),Xe(R,"AID",o.T),Qr(o,R),o.m&&o.o&&aa(R,o.m,o.o),_=new Tn(o,o.j,_,o.B+1),o.m===null&&(_.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Jl(o,_,1e3),_.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),lt(o.h,_),b(_,R,u)}function Qr(o,u){o.H&&O(o.H,function(_,R){Xe(u,R,_)}),o.l&&Ot({},function(_,R){Xe(u,R,_)})}function Jl(o,u,_){_=Math.min(o.i.length,_);var R=o.l?d(o.l.Na,o.l,o):null;e:{var z=o.i;let $=-1;for(;;){const he=["count="+_];$==-1?0<_?($=z[0].g,he.push("ofs="+$)):$=0:he.push("ofs="+$);let pt=!0;for(let Ut=0;Ut<_;Ut++){let tt=z[Ut].g;const Ft=z[Ut].map;if(tt-=$,0>tt)$=Math.max(0,z[Ut].g-100),pt=!1;else try{rp(Ft,he,"req"+tt+"_")}catch{R&&R(Ft)}}if(pt){R=he.join("&");break e}}}return o=o.i.splice(0,_),u.D=o,R}function Zl(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ne||_e(),j||(ne(),j=!0),ue.add(u,o),o.v=0}}function la(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Yt(d(o.Fa,o),th(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ql(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Yt(d(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Xs(this),Ql(this))};function ha(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Ql(o){o.g=new Tn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=et(o.qa);Xe(u,"RID","rpc"),Xe(u,"SID",o.K),Xe(u,"AID",o.T),Xe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Xe(u,"TO",o.ja),Xe(u,"TYPE","xmlhttp"),Qr(o,u),o.m&&o.o&&aa(u,o.m,o.o),o.L&&(o.g.I=o.L);var _=o.g;o=o.ia,_.L=1,_.v=li(et(u)),_.m=null,_.P=!0,B(_,o)}n.Za=function(){this.C!=null&&(this.C=null,Xs(this),la(this),_t(19))};function $s(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function eh(o,u){var _=null;if(o.g==u){$s(o),ha(o),o.g=null;var R=2}else if(vt(o.h,u))_=u.D,ot(o.h,u),R=1;else return;if(o.G!=0){if(u.o)if(R==1){_=u.m?u.m.length:0,u=Date.now()-u.F;var z=o.B;R=ke(),Z(R,new Xr(R,_)),qs(o)}else Zl(o);else if(z=u.s,z==3||z==0&&0<u.X||!(R==1&&cp(o,u)||R==2&&la(o)))switch(_&&0<_.length&&(u=o.h,u.i=u.i.concat(_)),z){case 1:Ui(o,5);break;case 4:Ui(o,10);break;case 3:Ui(o,6);break;default:Ui(o,2)}}}function th(o,u){let _=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(_*=2),_*u}function Ui(o,u){if(o.j.info("Error code "+u),u==2){var _=d(o.fb,o),R=o.Xa;const z=!R;R=new Kt(R||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Lt(R,"https"),li(R),z?tp(R.toString(),_):np(R.toString(),_)}else _t(2);o.G=0,o.l&&o.l.sa(u),nh(o),Yl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function nh(o){if(o.G=0,o.ka=[],o.l){const u=Pe(o.h);(u.length!=0||o.i.length!=0)&&(E(o.ka,u),E(o.ka,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.ra()}}function ih(o,u,_){var R=_ instanceof Kt?et(_):new Kt(_);if(R.g!="")u&&(R.g=u+"."+R.g),Nt(R,R.s);else{var z=c.location;R=z.protocol,u=u?u+"."+z.hostname:z.hostname,z=+z.port;var $=new Kt(null);R&&Lt($,R),u&&($.g=u),z&&Nt($,z),_&&($.l=_),R=$}return _=o.D,u=o.ya,_&&u&&Xe(R,_,u),Xe(R,"VER",o.la),Qr(o,R),R}function rh(o,u,_){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new xt(new Hs({eb:_})):new xt(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sh(){}n=sh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function rn(o,u){q.call(this),this.g=new jl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!N(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!N(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new cr(this)}A(rn,q),rn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},rn.prototype.close=function(){ca(this.g)},rn.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var _={};_.__data__=o,o=_}else this.u&&(_={},_.__data__=Le(o),o=_);u.i.push(new Ue(u.Ya++,o)),u.G==3&&qs(u)},rn.prototype.N=function(){this.g.l=null,delete this.j,ca(this.g),delete this.g,rn.aa.N.call(this)};function oh(o){ve.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const _ in u){o=_;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}A(oh,ve);function ah(){re.call(this),this.status=1}A(ah,re);function cr(o){this.g=o}A(cr,sh),cr.prototype.ua=function(){Z(this.g,"a")},cr.prototype.ta=function(o){Z(this.g,new oh(o))},cr.prototype.sa=function(o){Z(this.g,new ah)},cr.prototype.ra=function(){Z(this.g,"b")},rn.prototype.send=rn.prototype.o,rn.prototype.open=rn.prototype.m,rn.prototype.close=rn.prototype.close,sr.NO_ERROR=0,sr.TIMEOUT=8,sr.HTTP_ERROR=6,Bs.COMPLETE="complete",ae.EventType=le,le.OPEN="a",le.CLOSE="b",le.ERROR="c",le.MESSAGE="d",q.prototype.listen=q.prototype.K,xt.prototype.listenOnce=xt.prototype.L,xt.prototype.getLastError=xt.prototype.Ka,xt.prototype.getLastErrorCode=xt.prototype.Ba,xt.prototype.getStatus=xt.prototype.Z,xt.prototype.getResponseJson=xt.prototype.Oa,xt.prototype.getResponseText=xt.prototype.oa,xt.prototype.send=xt.prototype.ea,xt.prototype.setWithCredentials=xt.prototype.Ha}).apply(typeof To<"u"?To:typeof self<"u"?self:typeof window<"u"?window:{});const Hu="@firebase/firestore",Gu="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}en.UNAUTHENTICATED=new en(null),en.GOOGLE_CREDENTIALS=new en("google-credentials-uid"),en.FIRST_PARTY=new en("first-party-uid"),en.MOCK_USER=new en("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Qo("@firebase/firestore");function En(n,...e){if(Xo.logLevel<=ht.DEBUG){const t=e.map(Hf);Xo.debug(`Firestore (${oa}): ${n}`,...t)}}function zf(n,...e){if(Xo.logLevel<=ht.ERROR){const t=e.map(Hf);Xo.error(`Firestore (${oa}): ${n}`,...t)}}function Hf(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Gf(n,i,t)}function Gf(n,e,t){let i=`FIRESTORE (${oa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw zf(i),new Error(i)}function us(n,e,t,i){let r="Unexpected state";typeof t=="string"?r=t:i=t,n||Gf(e,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class st extends ai{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _M{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(en.UNAUTHENTICATED)))}shutdown(){}}class vM{constructor(e){this.t=e,this.currentUser=en.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){us(this.o===void 0,42304);let i=this.i;const r=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let s=new ds;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ds,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const l=s;e.enqueueRetryable((async()=>{await l.promise,await r(this.currentUser)}))},c=l=>{En("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(En("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ds)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(En("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(us(typeof i.accessToken=="string",31837,{l:i}),new gM(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return us(e===null||typeof e=="string",2055,{h:e}),new en(e)}}class EM{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=en.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class SM{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new EM(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(en.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yM{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){us(this.o===void 0,3512);const i=s=>{s.error!=null&&En("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,En("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>i(s)))};const r=s=>{En("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>r(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?r(s):En("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Wu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(us(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Wu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const r=xM(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<t&&(i+=e.charAt(r[s]%62))}return i}}function Ii(n,e){return n<e?-1:n>e?1:0}function MM(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const r=n.charAt(i),s=e.charAt(i);if(r!==s)return Ja(r)===Ja(s)?Ii(r,s):Ja(r)?1:-1}return Ii(n.length,e.length)}const AM=55296,wM=57343;function Ja(n){const e=n.charCodeAt(0);return e>=AM&&e<=wM}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="__name__";class Mn{constructor(e,t,i){t===void 0?t=0:t>e.length&&qo(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&qo(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Mn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mn?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const s=Mn.compareSegments(e.get(r),t.get(r));if(s!==0)return s}return Ii(e.length,t.length)}static compareSegments(e,t){const i=Mn.isNumericId(e),r=Mn.isNumericId(t);return i&&!r?-1:!i&&r?1:i&&r?Mn.extractNumericId(e).compare(Mn.extractNumericId(t)):MM(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Il.fromString(e.substring(4,e.length-2))}}class pn extends Mn{construct(e,t,i){return new pn(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new st(rt.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((r=>r.length>0)))}return new pn(t)}static emptyPath(){return new pn([])}}const bM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $i extends Mn{construct(e,t,i){return new $i(e,t,i)}static isValidIdentifier(e){return bM.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$i.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xu}static keyField(){return new $i([Xu])}static fromServerFormat(e){const t=[];let i="",r=0;const s=()=>{if(i.length===0)throw new st(rt.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new st(rt.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new st(rt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(i+=c,r++):(s(),r++)}if(s(),a)throw new st(rt.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $i(t)}static emptyPath(){return new $i([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.path=e}static fromPath(e){return new Ji(pn.fromString(e))}static fromName(e){return new Ji(pn.fromString(e).popFirst(5))}static empty(){return new Ji(pn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pn.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return pn.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ji(new pn(e.slice()))}}function RM(n,e,t,i){if(e===!0&&i===!0)throw new st(rt.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function CM(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Us(n,e){if(!CM(n))throw new st(rt.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const r=e[i].typeString,s="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const a=n[i];if(r&&typeof a!==r){t=`JSON field '${i}' must be a ${r}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${i}' field to equal '${s.value}'`;break}}if(t)throw new st(rt.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=-62135596800,$u=1e6;class wn{static now(){return wn.fromMillis(Date.now())}static fromDate(e){return wn.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*$u);return new wn(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new st(rt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new st(rt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<qu)throw new st(rt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new st(rt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$u}_compareTo(e){return this.seconds===e.seconds?Ii(this.nanoseconds,e.nanoseconds):Ii(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:wn._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Us(e,wn._jsonSchema))return new wn(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}wn._jsonSchemaVersion="firestore/timestamp/1.0",wn._jsonSchema={type:wt("string",wn._jsonSchemaVersion),seconds:wt("number"),nanoseconds:wt("number")};function IM(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new PM("Invalid base64 string: "+s):s}})(e);return new ir(t)}static fromUint8Array(e){const t=(function(r){let s="";for(let a=0;a<r.length;++a)s+=String.fromCharCode(r[a]);return s})(e);return new ir(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ii(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ir.EMPTY_BYTE_STRING=new ir("");const ju="(default)";class $o{constructor(e,t){this.projectId=e,this.database=t||ju}static empty(){return new $o("","")}get isDefaultDatabase(){return this.database===ju}isEqual(e){return e instanceof $o&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e,t=null,i=[],r=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function LM(n){return new DM(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yu,Qe;(Qe=Yu||(Yu={}))[Qe.OK=0]="OK",Qe[Qe.CANCELLED=1]="CANCELLED",Qe[Qe.UNKNOWN=2]="UNKNOWN",Qe[Qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qe[Qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qe[Qe.NOT_FOUND=5]="NOT_FOUND",Qe[Qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qe[Qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qe[Qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qe[Qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qe[Qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qe[Qe.ABORTED=10]="ABORTED",Qe[Qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qe[Qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qe[Qe.INTERNAL=13]="INTERNAL",Qe[Qe.UNAVAILABLE=14]="UNAVAILABLE",Qe[Qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Il([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM=1048576;function Za(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e,t,i=1e3,r=1.5,s=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=r,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-i);r>0&&En("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t,i,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new ds,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,r,s){const a=Date.now()+i,c=new Pl(e,t,a,r,s);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new st(rt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ku,Ju;(Ju=Ku||(Ku={})).Ma="default",Ju.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FM(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM="firestore.googleapis.com",Qu=!0;class ed{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new st(rt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kM,this.ssl=Qu}else this.host=e.host,this.ssl=e.ssl??Qu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=NM;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<UM)throw new st(rt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=FM(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new st(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new st(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new st(rt.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,r){return i.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class BM{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ed({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new st(rt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new st(rt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ed(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new _M;switch(i.type){case"firstParty":return new SM(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new st(rt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Zu.get(t);i&&(En("ComponentProvider","Removing Datastore"),Zu.delete(t),i.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Dl(this.firestore,e,this._query)}}class In{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ll(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new In(this.firestore,e,this._key)}toJSON(){return{type:In._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Us(t,In._jsonSchema))return new In(e,i||null,new Ji(pn.fromString(t.referencePath)))}}In._jsonSchemaVersion="firestore/documentReference/1.0",In._jsonSchema={type:wt("string",In._jsonSchemaVersion),referencePath:wt("string")};class Ll extends Dl{constructor(e,t,i){super(e,t,LM(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new In(this.firestore,null,new Ji(e))}withConverter(e){return new Ll(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="AsyncQueue";class nd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new OM(this,"async_queue_retry"),this._c=()=>{const i=Za();i&&En(td,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Za();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Za();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ds;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!IM(e))throw e;En(td,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,zf("INTERNAL UNHANDLED ERROR: ",id(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Pl.createAndSchedule(this,e,t,i,(s=>this.hc(s)));return this.tc.push(r),r}uc(){this.nc&&qo(47125,{Pc:id(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function id(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class VM extends BM{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=new nd,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nd(e),this._firestoreClient=void 0,await e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jn(ir.fromBase64String(e))}catch(t){throw new st(rt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new jn(ir.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:jn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Us(e,jn._jsonSchema))return jn.fromBase64String(e.bytes)}}jn._jsonSchemaVersion="firestore/bytes/1.0",jn._jsonSchema={type:wt("string",jn._jsonSchemaVersion),bytes:wt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new st(rt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $i(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new st(rt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new st(rt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ii(this._lat,e._lat)||Ii(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zi._jsonSchemaVersion}}static fromJSON(e){if(Us(e,Zi._jsonSchema))return new Zi(e.latitude,e.longitude)}}Zi._jsonSchemaVersion="firestore/geoPoint/1.0",Zi._jsonSchema={type:wt("string",Zi._jsonSchemaVersion),latitude:wt("number"),longitude:wt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Qi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Us(e,Qi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Qi(e.vectorValues);throw new st(rt.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qi._jsonSchemaVersion="firestore/vectorValue/1.0",Qi._jsonSchema={type:wt("string",Qi._jsonSchemaVersion),vectorValues:wt("object")};const zM=new RegExp("[~\\*/\\[\\]]");function HM(n,e,t){if(e.search(zM)>=0)throw rd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Wf(...e.split("."))._internalPath}catch{throw rd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function rd(n,e,t,i,r){let s=`Function ${e}() called with invalid data`;s+=". ";let a="";return new st(rt.INVALID_ARGUMENT,s+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t,i,r,s){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new In(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(qf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class GM extends Xf{data(){return super.data()}}function qf(n,e){return typeof e=="string"?HM(n,e):e instanceof Wf?e._internalPath:e._delegate._internalPath}class Mo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dr extends Xf{constructor(e,t,i,r,s,a){super(e,t,i,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new No(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(qf("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new st(rt.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Dr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Dr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Dr._jsonSchema={type:wt("string",Dr._jsonSchemaVersion),bundleSource:wt("string","DocumentSnapshot"),bundleName:wt("string"),bundle:wt("string")};class No extends Dr{data(e={}){return super.data(e)}}class fs{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Mo(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new No(this._firestore,this._userDataWriter,i.key,i,new Mo(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new st(rt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,s){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((c=>{const l=new No(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Mo(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>s||c.type!==3)).map((c=>{const l=new No(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Mo(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,p=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:WM(c.type),doc:l,oldIndex:h,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new st(rt.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=TM.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],r=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),i.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),r.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function WM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return qo(61501,{type:n})}}fs._jsonSchemaVersion="firestore/querySnapshot/1.0",fs._jsonSchema={type:wt("string",fs._jsonSchemaVersion),bundleSource:wt("string","QuerySnapshot"),bundleName:wt("string"),bundle:wt("string")};(function(e,t=!0){(function(r){oa=r})(Gr),Ci(new ni("firestore",((i,{instanceIdentifier:r,options:s})=>{const a=i.getProvider("app").getImmediate(),c=new VM(new vM(i.getProvider("auth-internal")),new yM(a,i.getProvider("app-check-internal")),(function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new st(rt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $o(h.options.projectId,p)})(a,r),a);return s={useFetchStreams:t,...s},c._setSettings(s),c}),"PUBLIC").setMultipleInstances(!0)),Qn(Hu,Gu,e),Qn(Hu,Gu,"esm2020")})();const XM={apiKey:"AIzaSyCkx-d2l8i3bKYpylwLRiILl8nz9eH8T0E",authDomain:"nobias-cc487.firebaseapp.com",projectId:"nobias-cc487",storageBucket:"nobias-cc487.firebasestorage.app",messagingSenderId:"548125799355",appId:"1:548125799355:web:06adbe84ae25bacc1d0a9e",measurementId:"G-SZTFYVR9GV"},$f=Wd(XM);Zy($f,{provider:new El("6Lep1MgrAAAAANy9KG_ji-dWa5ozf7QXjDcfULMi"),isTokenAutoRefreshEnabled:!0});const ci=pM($f);ci.useDeviceLanguage();Kx(ci);rT(ci,n=>{n!=null&&n.isAnonymous!==!0&&alert("not anonymous")});const Nl=new $n;Nl.addScope("https://github.com/Jamcha123/NoBS");const jf=new qn,Ul=document.getElementById("login"),Ol=document.getElementById("register");document.getElementById("GetRegister").addEventListener("click",async n=>{n.preventDefault(),Ul.style.display="none",Ol.style.display="flex"});document.getElementById("GetLogin").addEventListener("click",async n=>{n.preventDefault(),Ul.style.display="flex",Ol.style.display="none"});const[qM,$M]=[document.getElementById("email1"),document.getElementById("email2")],[jM,YM]=[document.getElementById("pass1"),document.getElementById("pass2")];Ul.addEventListener("submit",n=>{n.preventDefault(),tT(ci,qM.value,jM.value).then(e=>{alert(e),window.location.href="/dashboard.html"}).catch(e=>{alert(e)})});Ol.addEventListener("submit",n=>{n.preventDefault(),eT(ci,$M.value,YM.value).then(e=>{alert(e),window.location.href="/dashboard.html"}).catch(e=>{alert(e)})});const[KM,JM]=[document.getElementById("google1"),document.getElementById("google2")],[ZM,QM]=[document.getElementById("github1"),document.getElementById("github2")];KM.addEventListener("click",n=>{n.preventDefault(),sa(ci.currentUser,jf).then(e=>{alert(e),window.location.href="/dashboard.html"}).catch(e=>{alert(e)})});JM.addEventListener("click",n=>{n.preventDefault(),sa(ci.currentUser,jf).then(e=>{alert(e),window.location.href="/dashboard.html"}).catch(e=>{alert(e)})});ZM.addEventListener("click",n=>{n.preventDefault(),sa(ci.currentUser,Nl).then(e=>{alert(e),window.location.href="/dashboard.html"}).catch(e=>{alert(e)})});QM.addEventListener("click",n=>{n.preventDefault(),sa(ci.currentUser,Nl).then(e=>{alert(e),window.location.href="/dashboard.html"}).catch(e=>{alert(e)})});const Pi=new Bm;Pi.background=new at(0);const Sn=new an(60,window.innerWidth/window.innerHeight,1,1e4);Sn.position.set(0,0,30);const oi=new IE({canvas:document.querySelector("#bg"),antialias:!0,depth:!0});oi.setPixelRatio(window.devicePixelRatio);oi.setSize(window.innerWidth,window.innerHeight);oi.render(Pi,Sn);function eA(){const n=[];for(let r=0;r!=1e4;r++){const s=fa.randFloatSpread(2e3),a=fa.randFloatSpread(2e3),c=fa.randFloatSpread(2e3);n.push(s,a,c)}const e=new Un;e.setAttribute("position",new xn(n,3));const t=new Rd({color:16777215,side:mn,size:2}),i=new Gm(e,t);i.name="stars",Pi.add(i),oi.render(Pi,Sn)}eA();function tA(n,e,t){const i=new ll(1,32),r=new cl({color:16777215,side:mn,wireframe:!0}),s=new Cn(i,r);s.name="1",s.position.set(n,e,t),Pi.add(s),oi.render(Pi,Sn)}Array(100).fill().forEach(n=>{const e=Math.floor(Math.random()*500+-250),t=Math.floor(Math.random()*500+-250),i=Math.floor(Math.random()*500+-250);tA(e,t,i)});function nA(){Sn.aspect=window.innerWidth/window.innerHeight,Sn.updateProjectionMatrix(),oi.setSize(window.innerWidth,window.innerHeight),oi.render(Pi,Sn)}function iA(){window.addEventListener("resize",nA),Sn.rotation.x+=5e-4,Sn.rotation.y+=5e-5,Sn.rotation.z+=5e-5,oi.render(Pi,Sn)}oi.setAnimationLoop(iA);
