"use strict";


exports.polyFill = function () {
    var typedArrayTypes =
        [ Int8Array, Uint8Array, Uint8ClampedArray, Int16Array
        , Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array
        ];

    for (var k in typedArrayTypes) {
        for (var v in Array.prototype) {
            if (Array.prototype.hasOwnProperty(v) && !typedArrayTypes[k].prototype.hasOwnProperty(v))
                typedArrayTypes[k].prototype[v] = Array.prototype[v];
        }
    }
};


// module Data.ArrayBuffer.Typed

exports.buffer = function buffer (v) {
    return v.buffer;
};

exports.byteOffset = function byteOffset (v) {
    return v.byteOffset;
};

exports.byteLength = function byteLength (v) {
    return v.byteLength;
};

exports.lengthImpl = function lemgthImpl (v) {
    return v.length;
};


// Uint8Clamped

exports.newUint8ClampedArray = function newUint8ClampedArray (a) {
    return new Uint8ClampedArray(a);
};
exports.newUint8ClampedArray2 = function newUint8ClampedArray2 (a,b) {
    return new Uint8ClampedArray(a,b);
};
exports.newUint8ClampedArray3 = function newUint8ClampedArray3 (a,b,c) {
    return new Uint8ClampedArray(a,b,c);
};


exports.everyImpl = function everyImpl (a,p) {
    return a.every(p);
};
exports.someImpl = function someImpl (a,p) {
    return a.some(p);
};


exports.fillImpl = function fillImpl (a,x) {
    return a.fill(x);
};
exports.fillImpl2 = function fillImpl2 (a,x,s) {
    return a.fill(x,s);
};
exports.fillImpl3 = function fillImpl3 (a,x,s,e) {
    return a.fill(x,s,e);
};


exports.copyWithinImpl = function copyWithinImpl (a,t,s) {
    a.copyWithin(t,s);
};
exports.copyWithinImpl3 = function copyWithinImpl (a,t,s,e) {
    a.copyWithin(t,s,e);
};


exports.copy = function copy (a) {
    return a.slice();
};
exports.sliceRemainderImpl = function sliceRemainderImpl (a,s) {
    return a.slice(s);
};
exports.sliceImpl = function sliceImpl (a,s,e) {
    return a.slice(s,e);
};


exports.sortImpl = function sortImpl (a) {
    a.sort();
};


exports.subArrayImpl = function subArrayImpl (a,s) {
    return a.subarray(s);
};
exports.subArrayImpl2 = function subArrayImpl2 (a,s,e) {
    return a.subarray(s,e);
};


exports.toString = function toString (a) {
    return a.toString();
};


exports.setImpl = function(ra, off, a) {
  return function() {
    a.set(ra, off);
  };
}

exports.unsafeAtImpl = function(a, i) {
    return a[i];
}

exports.hasIndexImpl = function(a, i) {
  return i in a;
}

exports.toArray = function(a) {
  var l = a.length;
  var ret = new Array(l);
  for (var i = 0; i < l; i++)
    ret[i] = a[i];
  return ret;
}

exports.toIntArray = function(a) {
  var l = a.length;
  var ret = new Array(l);
  for (var i = 0; i < l; i++)
    ret[i] = a[i] | 0;
  return ret;
}
