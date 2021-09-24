function showStacks() {
    Java.perform(function () {
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
    });
}

var bytesToString = function (arr) {
    var str = '';
    arr = new Uint8Array(arr);
    for (var i in arr) {
        str += String.fromCharCode(arr[i]);
    }
    return str;
}
var bytesToHex = function (arr) {
    var str = '';
    var k, j;
    for (var i = 0; i < arr.length; i++) {
        k = arr[i];
        j = k;
        if (k < 0) {
            j = k + 256;
        }
        if (j < 16) {
            str += "0";
        }
        str += j.toString(16);
    }
    return str;
}

Java.perform(function () {
    var Base64 = Java.use('android.util.Base64')
    // Base64.encodeToString(raw.getBytes(),0); 
    var secretKeySpec = Java.use('javax.crypto.spec.SecretKeySpec');
    secretKeySpec.$init.overload('[B', 'java.lang.String').implementation = function (a, b) {
        showStacks();
        var result = this.$init(a, b);
        console.log("======================================");
        console.log("算法名：" + b + "|Dec密钥:" + bytesToString(a));
        console.log("算法名：" + b + "|Hex密钥:" + bytesToHex(a));
        console.log("算法名：" + b + "|b64密钥:" + Base64.encodeToString(a,0));

        return result;
    }
    var mac = Java.use('javax.crypto.Mac');
    mac.getInstance.overload('java.lang.String').implementation = function (a) {
        showStacks();
        var result = this.getInstance(a);
        console.log("======================================");
        console.log("算法名：" + a);
        return result;
    }
    mac.update.overload('[B').implementation = function (a) {
        showStacks();
        this.update(a);
        console.log("======================================");
        console.log("update:" + bytesToString(a))
    }
    mac.update.overload('[B', 'int', 'int').implementation = function (a, b, c) {
        showStacks();
        this.update(a, b, c)
        console.log("======================================");
        console.log("update:" + bytesToString(a) + "|" + b + "|" + c);

    }
    mac.doFinal.overload().implementation = function () {
        showStacks();
        var result = this.doFinal();
        console.log("======================================");
        console.log("doFinal结果:" + bytesToHex(result));
        // console.log("doFinal结果:" + bytesToBase64(result));
        console.log("doFinal b64结果:" + Base64.encodeToString(result,0));

        return result;
    }
    mac.doFinal.overload('[B').implementation = function (a) {
        showStacks();
        var result = this.doFinal(a);
        console.log("======================================");
        console.log("doFinal参数:" + bytesToString(a));
        console.log("doFinal结果:" + bytesToHex(result));
        // console.log("doFinal结果:" + bytesToBase64(result));
        console.log("doFinal b64结果:" + Base64.encodeToString(result,0));

        return result;
    }
    var md = Java.use('java.security.MessageDigest');
    md.getInstance.overload('java.lang.String', 'java.lang.String').implementation = function (a, b) {
        showStacks();
        console.log("======================================");
        console.log("算法名：" + a);
        return this.getInstance(a, b);
    }
    md.getInstance.overload('java.lang.String').implementation = function (a) {
        showStacks();
        console.log("======================================");
        console.log("算法名：" + a);
        return this.getInstance(a);
    }
    md.update.overload('[B').implementation = function (a) {
        showStacks();
        console.log("======================================");
        console.log("update:" + bytesToString(a))
        return this.update(a);
    }
    md.update.overload('[B', 'int', 'int').implementation = function (a, b, c) {
        showStacks();
        console.log("======================================");
        console.log("update:" + bytesToString(a) + "|" + b + "|" + c);
        return this.update(a, b, c);
    }
    md.digest.overload().implementation = function () {
        showStacks();
        console.log("======================================");
        var result = this.digest();
        console.log("digest结果:" + bytesToHex(result));
        // console.log("digest结果:" + bytesToBase64(result));
        console.log("digest b64结果:" + Base64.encodeToString(result,0));

        return result;
    }
    md.digest.overload('[B').implementation = function (a) {
        showStacks();
        console.log("======================================");
        console.log("digest参数:" + bytesToString(a));
        var result = this.digest(a);
        console.log("digest结果:" + bytesToHex(result));
        // console.log("digest结果:" + bytesToBase64(result));
        console.log("digest b64结果:" + Base64.encodeToString(result,0));

        return result;
    }
    var ivParameterSpec = Java.use('javax.crypto.spec.IvParameterSpec');
    ivParameterSpec.$init.overload('[B').implementation = function (a) {
        showStacks();
        var result = this.$init(a);
        console.log("======================================");
        console.log("iv向量:" + bytesToString(a));
        console.log("iv向量:" + bytesToHex(a));
        console.log("iv向量:" + Base64.encodeToString(a,0));

        return result;
    }
    var cipher = Java.use('javax.crypto.Cipher');
    cipher.getInstance.overload('java.lang.String').implementation = function (a) {
        showStacks();
        var result = this.getInstance(a);
        console.log("======================================");
        console.log("模式填充:" + a);
        return result;
    }
    cipher.update.overload('[B').implementation = function (a) {
        showStacks();
        var result = this.update(a);
        console.log("======================================");
        console.log("update:" + bytesToString(a));
        return result;
    }
    cipher.update.overload('[B', 'int', 'int').implementation = function (a, b, c) {
        showStacks();
        var result = this.update(a, b, c);
        console.log("======================================");
        console.log("update:" + bytesToString(a) + "|" + b + "|" + c);
        return result;
    }
    cipher.doFinal.overload().implementation = function () {
        showStacks();
        var result = this.doFinal();
        console.log("======================================");
        console.log("doFinal结果:" + bytesToHex(result));
        // console.log("doFinal结果:" + bytesToBase64(result));
        console.log("doFinal结果:" + Base64.encodeToString(result,0));

        return result;
    }
    cipher.doFinal.overload('[B').implementation = function (a) {
        showStacks();
        var result = this.doFinal(a);
        console.log("======================================");
        console.log("doFinal参数:" + bytesToString(a));
        console.log("doFinal结果:" + bytesToHex(result));
        // console.log("doFinal结果:" + bytesToBase64(result));
        console.log("doFinal结果:" + Base64.encodeToString(result,0));

        return result;
    }
    var x509EncodedKeySpec = Java.use('java.security.spec.X509EncodedKeySpec');
    x509EncodedKeySpec.$init.overload('[B').implementation = function (a) {
        showStacks();
        var result = this.$init(a);
        console.log("======================================");
        // console.log("RSA密钥:" + bytesToBase64(a));
        console.log("RSA密钥:" + Base64.encodeToString(a,0));

        return result;
    }
    var rSAPublicKeySpec = Java.use('java.security.spec.RSAPublicKeySpec');
    rSAPublicKeySpec.$init.overload('java.math.BigInteger', 'java.math.BigInteger').implementation = function (a, b) {
        showStacks();
        var result = this.$init(a, b);
        console.log("======================================");
        //console.log("RSA密钥:" + bytesToBase64(a));
        console.log("RSA密钥:" + Base64.encodeToString(a,0));

        console.log("RSA密钥N:" + a.toString(16));
        console.log("RSA密钥E:" + b.toString(16));
        return result;
    }
});
