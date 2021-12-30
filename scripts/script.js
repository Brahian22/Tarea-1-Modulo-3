function resul() {
    let moneda = [`Elige tu moneda`, `Dolar`, `Peso Mexicano`, `Peso Colombiano`, `Euro`, `Libra Esterlina`];
    let dinero = document.getElementById("dinero").value;
    let mon1 = document.getElementById("moneda1").value;
    let mon2 = document.getElementById("moneda2").value;
    let resultado;
    /* let resultadomostrar = document.getElementById("resul"); */


    //Convertir Dolar


    let dolar_pmex = 20.58;
    let dolar_pcol = 4037;
    let dolar_euro = 0.88;
    let dolar_libra = 0.74;

    if (mon1 == 1 && mon2 == 2) {
        resultado = dinero * dolar_pmex;
    }
    else if (mon1 == 1 && mon2 == 3) {
        resultado = dinero * dolar_pcol;
    }
    else if (mon1 == 1 && mon2 == 4) {
        resultado = dinero * dolar_euro;
    }
    else if (mon1 == 1 && mon2 == 5) {
        resultado = dinero * dolar_libra;
    };

    //convertir peso mexicano

    let pmex_dolar = 0.049;
    let pmex_pcol = 196.28;
    let pmex_euro = 0.043;
    let pmex_libra = 20.58;



    if (mon1 == 2 && mon2 == 1) {
        resultado = dinero * pmex_dolar;
    }
    else if (mon1 == 2 && mon2 == 3) {
        resultado = dinero * pmex_pcol;
    }
    else if (mon1 == 2 && mon2 == 4) {
        resultado = dinero * pmex_euro;
    }
    else if (mon1 == 2 && mon2 == 5) {
        resultado = dinero * pmex_libra;
    };

    //convertir peso colombiano

    let pcol_dolar = 0.00025;
    let pcol_pmex = 0.0052;
    let pcol_euro = 0.00022;
    let pcol_libra = 0.00019;


    if (mon1 == 3 && mon2 == 1) {
        resultado = dinero * pcol_dolar;
    }
    else if (mon1 == 3 && mon2 == 2) {
        resultado = dinero * pcol_pmex;
    }
    else if (mon1 == 3 && mon2 == 4) {
        resultado = dinero * pcol_euro;
    }
    else if (mon1 == 3 && mon2 == 5) {
        resultado = dinero * pcol_libra;
    };

    //convertir euro

    let euro_dolar = 1.13;
    let euro_pmex = 23.34;
    let euro_pcol = 4581;
    let euro_libra = 0.84;

    if (mon1 == 4 && mon2 == 1) {
        resultado = dinero * euro_dolar;
    }
    else if (mon1 == 4 && mon2 == 2) {
        resultado = dinero * euro_pmex;
    }
    else if (mon1 == 4 && mon2 == 3) {
        resultado = dinero * euro_pcol;
    }
    else if (mon1 == 4 && mon2 == 5) {
        resultado = dinero * euro_libra;
    };

    //convertir libra esterlina

    let libra_dolar = 1.35;
    let libra_pmex = 27.64;
    let libra_euro = 1.19;
    let libra_pcol = 1146;

    if (mon1 == 5 && mon2 == 1) {
        resultado = dinero * libra_dolar;
    }
    else if (mon1 == 5 && mon2 == 2) {
        resultado = dinero * libra_pmex;
    }
    else if (mon1 == 5 && mon2 == 3) {
        resultado = dinero * libra_pcol;
    }
    else if (mon1 == 5 && mon2 == 4) {
        resultado = dinero * libra_euro;
    };

    /* let nuevoinput = document.createElement("input");
    nuevoinput.textContent("el resultado es:" + resultado);
    resultadomostrar.appendChild(nuevoinput); */



    alert(`el resultado convertido es de: ${resultado}`)
}

