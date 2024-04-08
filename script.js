function prevest() {
    const binárníČíslo = document.getElementById("binární-číslo").value;
    let desítkovéČíslo = 0;
    let mocninaDvojky = 1;

    for (let i = binárníČíslo.length - 1; i >= 0; i--) {
        const číslice = binárníČíslo[i];

        if (číslice !== "0" && číslice !== "1") {
            alert("Neplatné binární číslo!");
            return;
        }
        desítkovéČíslo += mocninaDvojky * parseInt(číslice);
        mocninaDvojky *= 2;
    }

    document.getElementById("výsledek").innerHTML = `Desítkové číslo: ${desítkovéČíslo}`;
}
