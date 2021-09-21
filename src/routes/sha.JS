"use strict";
// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
/*
 * Adapted to deno from:
 *
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _block, _blocks, _bytes, _finalized, _first, _h0, _h1, _h2, _h3, _h4, _h5, _h6, _h7, _hashed, _hBytes, _is224, _lastByteIndex, _start, _inner, _is224_1, _oKeyPad, _sharedMemory;
exports.HmacSha256 = exports.Sha256 = void 0;
var HEX_CHARS = "0123456789abcdef".split("");
var EXTRA = [-2147483648, 8388608, 32768, 128];
var SHIFT = [24, 16, 8, 0];
// deno-fmt-ignore
var K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1,
    0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
    0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
    0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
    0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
    0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
    0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
    0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
    0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
];
var blocks = [];
var Sha256 = /** @class */ (function () {
    function Sha256(is224, sharedMemory) {
        if (is224 === void 0) { is224 = false; }
        if (sharedMemory === void 0) { sharedMemory = false; }
        _block.set(this, void 0);
        _blocks.set(this, void 0);
        _bytes.set(this, void 0);
        _finalized.set(this, void 0);
        _first.set(this, void 0);
        _h0.set(this, void 0);
        _h1.set(this, void 0);
        _h2.set(this, void 0);
        _h3.set(this, void 0);
        _h4.set(this, void 0);
        _h5.set(this, void 0);
        _h6.set(this, void 0);
        _h7.set(this, void 0);
        _hashed.set(this, void 0);
        _hBytes.set(this, void 0);
        _is224.set(this, void 0);
        _lastByteIndex.set(this, 0);
        _start.set(this, void 0);
        this.init(is224, sharedMemory);
    }
    Sha256.prototype.init = function (is224, sharedMemory) {
        if (sharedMemory) {
            // deno-fmt-ignore
            blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            __classPrivateFieldSet(this, _blocks, blocks);
        }
        else {
            __classPrivateFieldSet(this, _blocks, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }
        if (is224) {
            __classPrivateFieldSet(this, _h0, 0xc1059ed8);
            __classPrivateFieldSet(this, _h1, 0x367cd507);
            __classPrivateFieldSet(this, _h2, 0x3070dd17);
            __classPrivateFieldSet(this, _h3, 0xf70e5939);
            __classPrivateFieldSet(this, _h4, 0xffc00b31);
            __classPrivateFieldSet(this, _h5, 0x68581511);
            __classPrivateFieldSet(this, _h6, 0x64f98fa7);
            __classPrivateFieldSet(this, _h7, 0xbefa4fa4);
        }
        else {
            // 256
            __classPrivateFieldSet(this, _h0, 0x6a09e667);
            __classPrivateFieldSet(this, _h1, 0xbb67ae85);
            __classPrivateFieldSet(this, _h2, 0x3c6ef372);
            __classPrivateFieldSet(this, _h3, 0xa54ff53a);
            __classPrivateFieldSet(this, _h4, 0x510e527f);
            __classPrivateFieldSet(this, _h5, 0x9b05688c);
            __classPrivateFieldSet(this, _h6, 0x1f83d9ab);
            __classPrivateFieldSet(this, _h7, 0x5be0cd19);
        }
        __classPrivateFieldSet(this, _block, __classPrivateFieldSet(this, _start, __classPrivateFieldSet(this, _bytes, __classPrivateFieldSet(this, _hBytes, 0))));
        __classPrivateFieldSet(this, _finalized, __classPrivateFieldSet(this, _hashed, false));
        __classPrivateFieldSet(this, _first, true);
        __classPrivateFieldSet(this, _is224, is224);
    };
    /** Update hash
     *
     * @param message The message you want to hash.
     */
    Sha256.prototype.update = function (message) {
        if (__classPrivateFieldGet(this, _finalized)) {
            return this;
        }
        var msg;
        if (message instanceof ArrayBuffer) {
            msg = new Uint8Array(message);
        }
        else {
            msg = message;
        }
        var index = 0;
        var length = msg.length;
        var blocks = __classPrivateFieldGet(this, _blocks);
        while (index < length) {
            var i = void 0;
            if (__classPrivateFieldGet(this, _hashed)) {
                __classPrivateFieldSet(this, _hashed, false);
                blocks[0] = __classPrivateFieldGet(this, _block);
                // deno-fmt-ignore
                blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            }
            if (typeof msg !== "string") {
                for (i = __classPrivateFieldGet(this, _start); index < length && i < 64; ++index) {
                    blocks[i >> 2] |= msg[index] << SHIFT[i++ & 3];
                }
            }
            else {
                for (i = __classPrivateFieldGet(this, _start); index < length && i < 64; ++index) {
                    var code = msg.charCodeAt(index);
                    if (code < 0x80) {
                        blocks[i >> 2] |= code << SHIFT[i++ & 3];
                    }
                    else if (code < 0x800) {
                        blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                    }
                    else if (code < 0xd800 || code >= 0xe000) {
                        blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                    }
                    else {
                        code = 0x10000 +
                            (((code & 0x3ff) << 10) | (msg.charCodeAt(++index) & 0x3ff));
                        blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
                        blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                    }
                }
            }
            __classPrivateFieldSet(this, _lastByteIndex, i);
            __classPrivateFieldSet(this, _bytes, __classPrivateFieldGet(this, _bytes) + (i - __classPrivateFieldGet(this, _start)));
            if (i >= 64) {
                __classPrivateFieldSet(this, _block, blocks[16]);
                __classPrivateFieldSet(this, _start, i - 64);
                this.hash();
                __classPrivateFieldSet(this, _hashed, true);
            }
            else {
                __classPrivateFieldSet(this, _start, i);
            }
        }
        if (__classPrivateFieldGet(this, _bytes) > 4294967295) {
            __classPrivateFieldSet(this, _hBytes, __classPrivateFieldGet(this, _hBytes) + ((__classPrivateFieldGet(this, _bytes) / 4294967296) << 0));
            __classPrivateFieldSet(this, _bytes, __classPrivateFieldGet(this, _bytes) % 4294967296);
        }
        return this;
    };
    Sha256.prototype.finalize = function () {
        if (__classPrivateFieldGet(this, _finalized)) {
            return;
        }
        __classPrivateFieldSet(this, _finalized, true);
        var blocks = __classPrivateFieldGet(this, _blocks);
        var i = __classPrivateFieldGet(this, _lastByteIndex);
        blocks[16] = __classPrivateFieldGet(this, _block);
        blocks[i >> 2] |= EXTRA[i & 3];
        __classPrivateFieldSet(this, _block, blocks[16]);
        if (i >= 56) {
            if (!__classPrivateFieldGet(this, _hashed)) {
                this.hash();
            }
            blocks[0] = __classPrivateFieldGet(this, _block);
            // deno-fmt-ignore
            blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
        }
        blocks[14] = (__classPrivateFieldGet(this, _hBytes) << 3) | (__classPrivateFieldGet(this, _bytes) >>> 29);
        blocks[15] = __classPrivateFieldGet(this, _bytes) << 3;
        this.hash();
    };
    Sha256.prototype.hash = function () {
        var a = __classPrivateFieldGet(this, _h0);
        var b = __classPrivateFieldGet(this, _h1);
        var c = __classPrivateFieldGet(this, _h2);
        var d = __classPrivateFieldGet(this, _h3);
        var e = __classPrivateFieldGet(this, _h4);
        var f = __classPrivateFieldGet(this, _h5);
        var g = __classPrivateFieldGet(this, _h6);
        var h = __classPrivateFieldGet(this, _h7);
        var blocks = __classPrivateFieldGet(this, _blocks);
        var s0;
        var s1;
        var maj;
        var t1;
        var t2;
        var ch;
        var ab;
        var da;
        var cd;
        var bc;
        for (var j = 16; j < 64; ++j) {
            // rightrotate
            t1 = blocks[j - 15];
            s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
            t1 = blocks[j - 2];
            s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^
                (t1 >>> 10);
            blocks[j] = (blocks[j - 16] + s0 + blocks[j - 7] + s1) << 0;
        }
        bc = b & c;
        for (var j = 0; j < 64; j += 4) {
            if (__classPrivateFieldGet(this, _first)) {
                if (__classPrivateFieldGet(this, _is224)) {
                    ab = 300032;
                    t1 = blocks[0] - 1413257819;
                    h = (t1 - 150054599) << 0;
                    d = (t1 + 24177077) << 0;
                }
                else {
                    ab = 704751109;
                    t1 = blocks[0] - 210244248;
                    h = (t1 - 1521486534) << 0;
                    d = (t1 + 143694565) << 0;
                }
                __classPrivateFieldSet(this, _first, false);
            }
            else {
                s0 = ((a >>> 2) | (a << 30)) ^
                    ((a >>> 13) | (a << 19)) ^
                    ((a >>> 22) | (a << 10));
                s1 = ((e >>> 6) | (e << 26)) ^
                    ((e >>> 11) | (e << 21)) ^
                    ((e >>> 25) | (e << 7));
                ab = a & b;
                maj = ab ^ (a & c) ^ bc;
                ch = (e & f) ^ (~e & g);
                t1 = h + s1 + ch + K[j] + blocks[j];
                t2 = s0 + maj;
                h = (d + t1) << 0;
                d = (t1 + t2) << 0;
            }
            s0 = ((d >>> 2) | (d << 30)) ^
                ((d >>> 13) | (d << 19)) ^
                ((d >>> 22) | (d << 10));
            s1 = ((h >>> 6) | (h << 26)) ^
                ((h >>> 11) | (h << 21)) ^
                ((h >>> 25) | (h << 7));
            da = d & a;
            maj = da ^ (d & b) ^ ab;
            ch = (h & e) ^ (~h & f);
            t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
            t2 = s0 + maj;
            g = (c + t1) << 0;
            c = (t1 + t2) << 0;
            s0 = ((c >>> 2) | (c << 30)) ^
                ((c >>> 13) | (c << 19)) ^
                ((c >>> 22) | (c << 10));
            s1 = ((g >>> 6) | (g << 26)) ^
                ((g >>> 11) | (g << 21)) ^
                ((g >>> 25) | (g << 7));
            cd = c & d;
            maj = cd ^ (c & a) ^ da;
            ch = (g & h) ^ (~g & e);
            t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
            t2 = s0 + maj;
            f = (b + t1) << 0;
            b = (t1 + t2) << 0;
            s0 = ((b >>> 2) | (b << 30)) ^
                ((b >>> 13) | (b << 19)) ^
                ((b >>> 22) | (b << 10));
            s1 = ((f >>> 6) | (f << 26)) ^
                ((f >>> 11) | (f << 21)) ^
                ((f >>> 25) | (f << 7));
            bc = b & c;
            maj = bc ^ (b & d) ^ cd;
            ch = (f & g) ^ (~f & h);
            t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
            t2 = s0 + maj;
            e = (a + t1) << 0;
            a = (t1 + t2) << 0;
        }
        __classPrivateFieldSet(this, _h0, (__classPrivateFieldGet(this, _h0) + a) << 0);
        __classPrivateFieldSet(this, _h1, (__classPrivateFieldGet(this, _h1) + b) << 0);
        __classPrivateFieldSet(this, _h2, (__classPrivateFieldGet(this, _h2) + c) << 0);
        __classPrivateFieldSet(this, _h3, (__classPrivateFieldGet(this, _h3) + d) << 0);
        __classPrivateFieldSet(this, _h4, (__classPrivateFieldGet(this, _h4) + e) << 0);
        __classPrivateFieldSet(this, _h5, (__classPrivateFieldGet(this, _h5) + f) << 0);
        __classPrivateFieldSet(this, _h6, (__classPrivateFieldGet(this, _h6) + g) << 0);
        __classPrivateFieldSet(this, _h7, (__classPrivateFieldGet(this, _h7) + h) << 0);
    };
    /** Return hash in hex string. */
    Sha256.prototype.hex = function () {
        this.finalize();
        var h0 = __classPrivateFieldGet(this, _h0);
        var h1 = __classPrivateFieldGet(this, _h1);
        var h2 = __classPrivateFieldGet(this, _h2);
        var h3 = __classPrivateFieldGet(this, _h3);
        var h4 = __classPrivateFieldGet(this, _h4);
        var h5 = __classPrivateFieldGet(this, _h5);
        var h6 = __classPrivateFieldGet(this, _h6);
        var h7 = __classPrivateFieldGet(this, _h7);
        var hex = HEX_CHARS[(h0 >> 28) & 0x0f] +
            HEX_CHARS[(h0 >> 24) & 0x0f] +
            HEX_CHARS[(h0 >> 20) & 0x0f] +
            HEX_CHARS[(h0 >> 16) & 0x0f] +
            HEX_CHARS[(h0 >> 12) & 0x0f] +
            HEX_CHARS[(h0 >> 8) & 0x0f] +
            HEX_CHARS[(h0 >> 4) & 0x0f] +
            HEX_CHARS[h0 & 0x0f] +
            HEX_CHARS[(h1 >> 28) & 0x0f] +
            HEX_CHARS[(h1 >> 24) & 0x0f] +
            HEX_CHARS[(h1 >> 20) & 0x0f] +
            HEX_CHARS[(h1 >> 16) & 0x0f] +
            HEX_CHARS[(h1 >> 12) & 0x0f] +
            HEX_CHARS[(h1 >> 8) & 0x0f] +
            HEX_CHARS[(h1 >> 4) & 0x0f] +
            HEX_CHARS[h1 & 0x0f] +
            HEX_CHARS[(h2 >> 28) & 0x0f] +
            HEX_CHARS[(h2 >> 24) & 0x0f] +
            HEX_CHARS[(h2 >> 20) & 0x0f] +
            HEX_CHARS[(h2 >> 16) & 0x0f] +
            HEX_CHARS[(h2 >> 12) & 0x0f] +
            HEX_CHARS[(h2 >> 8) & 0x0f] +
            HEX_CHARS[(h2 >> 4) & 0x0f] +
            HEX_CHARS[h2 & 0x0f] +
            HEX_CHARS[(h3 >> 28) & 0x0f] +
            HEX_CHARS[(h3 >> 24) & 0x0f] +
            HEX_CHARS[(h3 >> 20) & 0x0f] +
            HEX_CHARS[(h3 >> 16) & 0x0f] +
            HEX_CHARS[(h3 >> 12) & 0x0f] +
            HEX_CHARS[(h3 >> 8) & 0x0f] +
            HEX_CHARS[(h3 >> 4) & 0x0f] +
            HEX_CHARS[h3 & 0x0f] +
            HEX_CHARS[(h4 >> 28) & 0x0f] +
            HEX_CHARS[(h4 >> 24) & 0x0f] +
            HEX_CHARS[(h4 >> 20) & 0x0f] +
            HEX_CHARS[(h4 >> 16) & 0x0f] +
            HEX_CHARS[(h4 >> 12) & 0x0f] +
            HEX_CHARS[(h4 >> 8) & 0x0f] +
            HEX_CHARS[(h4 >> 4) & 0x0f] +
            HEX_CHARS[h4 & 0x0f] +
            HEX_CHARS[(h5 >> 28) & 0x0f] +
            HEX_CHARS[(h5 >> 24) & 0x0f] +
            HEX_CHARS[(h5 >> 20) & 0x0f] +
            HEX_CHARS[(h5 >> 16) & 0x0f] +
            HEX_CHARS[(h5 >> 12) & 0x0f] +
            HEX_CHARS[(h5 >> 8) & 0x0f] +
            HEX_CHARS[(h5 >> 4) & 0x0f] +
            HEX_CHARS[h5 & 0x0f] +
            HEX_CHARS[(h6 >> 28) & 0x0f] +
            HEX_CHARS[(h6 >> 24) & 0x0f] +
            HEX_CHARS[(h6 >> 20) & 0x0f] +
            HEX_CHARS[(h6 >> 16) & 0x0f] +
            HEX_CHARS[(h6 >> 12) & 0x0f] +
            HEX_CHARS[(h6 >> 8) & 0x0f] +
            HEX_CHARS[(h6 >> 4) & 0x0f] +
            HEX_CHARS[h6 & 0x0f];
        if (!__classPrivateFieldGet(this, _is224)) {
            hex += HEX_CHARS[(h7 >> 28) & 0x0f] +
                HEX_CHARS[(h7 >> 24) & 0x0f] +
                HEX_CHARS[(h7 >> 20) & 0x0f] +
                HEX_CHARS[(h7 >> 16) & 0x0f] +
                HEX_CHARS[(h7 >> 12) & 0x0f] +
                HEX_CHARS[(h7 >> 8) & 0x0f] +
                HEX_CHARS[(h7 >> 4) & 0x0f] +
                HEX_CHARS[h7 & 0x0f];
        }
        return hex;
    };
    /** Return hash in hex string. */
    Sha256.prototype.toString = function () {
        return this.hex();
    };
    /** Return hash in integer array. */
    Sha256.prototype.digest = function () {
        this.finalize();
        var h0 = __classPrivateFieldGet(this, _h0);
        var h1 = __classPrivateFieldGet(this, _h1);
        var h2 = __classPrivateFieldGet(this, _h2);
        var h3 = __classPrivateFieldGet(this, _h3);
        var h4 = __classPrivateFieldGet(this, _h4);
        var h5 = __classPrivateFieldGet(this, _h5);
        var h6 = __classPrivateFieldGet(this, _h6);
        var h7 = __classPrivateFieldGet(this, _h7);
        var arr = [
            (h0 >> 24) & 0xff,
            (h0 >> 16) & 0xff,
            (h0 >> 8) & 0xff,
            h0 & 0xff,
            (h1 >> 24) & 0xff,
            (h1 >> 16) & 0xff,
            (h1 >> 8) & 0xff,
            h1 & 0xff,
            (h2 >> 24) & 0xff,
            (h2 >> 16) & 0xff,
            (h2 >> 8) & 0xff,
            h2 & 0xff,
            (h3 >> 24) & 0xff,
            (h3 >> 16) & 0xff,
            (h3 >> 8) & 0xff,
            h3 & 0xff,
            (h4 >> 24) & 0xff,
            (h4 >> 16) & 0xff,
            (h4 >> 8) & 0xff,
            h4 & 0xff,
            (h5 >> 24) & 0xff,
            (h5 >> 16) & 0xff,
            (h5 >> 8) & 0xff,
            h5 & 0xff,
            (h6 >> 24) & 0xff,
            (h6 >> 16) & 0xff,
            (h6 >> 8) & 0xff,
            h6 & 0xff,
        ];
        if (!__classPrivateFieldGet(this, _is224)) {
            arr.push((h7 >> 24) & 0xff, (h7 >> 16) & 0xff, (h7 >> 8) & 0xff, h7 & 0xff);
        }
        return arr;
    };
    /** Return hash in integer array. */
    Sha256.prototype.array = function () {
        return this.digest();
    };
    /** Return hash in ArrayBuffer. */
    Sha256.prototype.arrayBuffer = function () {
        this.finalize();
        var buffer = new ArrayBuffer(__classPrivateFieldGet(this, _is224) ? 28 : 32);
        var dataView = new DataView(buffer);
        dataView.setUint32(0, __classPrivateFieldGet(this, _h0));
        dataView.setUint32(4, __classPrivateFieldGet(this, _h1));
        dataView.setUint32(8, __classPrivateFieldGet(this, _h2));
        dataView.setUint32(12, __classPrivateFieldGet(this, _h3));
        dataView.setUint32(16, __classPrivateFieldGet(this, _h4));
        dataView.setUint32(20, __classPrivateFieldGet(this, _h5));
        dataView.setUint32(24, __classPrivateFieldGet(this, _h6));
        if (!__classPrivateFieldGet(this, _is224)) {
            dataView.setUint32(28, __classPrivateFieldGet(this, _h7));
        }
        return buffer;
    };
    return Sha256;
}());
exports.Sha256 = Sha256;
_block = new WeakMap(), _blocks = new WeakMap(), _bytes = new WeakMap(), _finalized = new WeakMap(), _first = new WeakMap(), _h0 = new WeakMap(), _h1 = new WeakMap(), _h2 = new WeakMap(), _h3 = new WeakMap(), _h4 = new WeakMap(), _h5 = new WeakMap(), _h6 = new WeakMap(), _h7 = new WeakMap(), _hashed = new WeakMap(), _hBytes = new WeakMap(), _is224 = new WeakMap(), _lastByteIndex = new WeakMap(), _start = new WeakMap();
var HmacSha256 = /** @class */ (function (_super) {
    __extends(HmacSha256, _super);
    function HmacSha256(secretKey, is224, sharedMemory) {
        if (is224 === void 0) { is224 = false; }
        if (sharedMemory === void 0) { sharedMemory = false; }
        var _this = _super.call(this, is224, sharedMemory) || this;
        _inner.set(_this, void 0);
        _is224_1.set(_this, void 0);
        _oKeyPad.set(_this, void 0);
        _sharedMemory.set(_this, void 0);
        var key;
        if (typeof secretKey === "string") {
            var bytes = [];
            var length = secretKey.length;
            var index = 0;
            for (var i = 0; i < length; ++i) {
                var code = secretKey.charCodeAt(i);
                if (code < 0x80) {
                    bytes[index++] = code;
                }
                else if (code < 0x800) {
                    bytes[index++] = 0xc0 | (code >> 6);
                    bytes[index++] = 0x80 | (code & 0x3f);
                }
                else if (code < 0xd800 || code >= 0xe000) {
                    bytes[index++] = 0xe0 | (code >> 12);
                    bytes[index++] = 0x80 | ((code >> 6) & 0x3f);
                    bytes[index++] = 0x80 | (code & 0x3f);
                }
                else {
                    code = 0x10000 +
                        (((code & 0x3ff) << 10) | (secretKey.charCodeAt(++i) & 0x3ff));
                    bytes[index++] = 0xf0 | (code >> 18);
                    bytes[index++] = 0x80 | ((code >> 12) & 0x3f);
                    bytes[index++] = 0x80 | ((code >> 6) & 0x3f);
                    bytes[index++] = 0x80 | (code & 0x3f);
                }
            }
            key = bytes;
        }
        else {
            if (secretKey instanceof ArrayBuffer) {
                key = new Uint8Array(secretKey);
            }
            else {
                key = secretKey;
            }
        }
        if (key.length > 64) {
            key = new Sha256(is224, true).update(key).array();
        }
        var oKeyPad = [];
        var iKeyPad = [];
        for (var i = 0; i < 64; ++i) {
            var b = key[i] || 0;
            oKeyPad[i] = 0x5c ^ b;
            iKeyPad[i] = 0x36 ^ b;
        }
        _this.update(iKeyPad);
        __classPrivateFieldSet(_this, _oKeyPad, oKeyPad);
        __classPrivateFieldSet(_this, _inner, true);
        __classPrivateFieldSet(_this, _is224_1, is224);
        __classPrivateFieldSet(_this, _sharedMemory, sharedMemory);
        return _this;
    }
    HmacSha256.prototype.finalize = function () {
        _super.prototype.finalize.call(this);
        if (__classPrivateFieldGet(this, _inner)) {
            __classPrivateFieldSet(this, _inner, false);
            var innerHash = this.array();
            _super.prototype.init.call(this, __classPrivateFieldGet(this, _is224_1), __classPrivateFieldGet(this, _sharedMemory));
            this.update(__classPrivateFieldGet(this, _oKeyPad));
            this.update(innerHash);
            _super.prototype.finalize.call(this);
        }
    };
    return HmacSha256;
}(Sha256));
exports.HmacSha256 = HmacSha256;
_inner = new WeakMap(), _is224_1 = new WeakMap(), _oKeyPad = new WeakMap(), _sharedMemory = new WeakMap();

