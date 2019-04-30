
function perulangan() {
    var a = 14;
    var c = 10;
    var m = 6105;
    var z0 = 1500;
    var zhasil = 0;
    var u = 0;

    for (var i=1; i < 21; i++)  {
    let zhasil = (a * z0 + c) % m;
    z0 = zhasil;
    u = z0 / m

    // console.log("Z", i,"=",zhasil , "", );
    // console.log("U", i, "=",u.toFixed(3));
    
    }
}

perulangan()
