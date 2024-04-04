function prevest() {
    const binárníČíslo = document.getElementById("binární-číslo").value;
    let desítkovéČíslo = 0;
    let mocninaDvojky = 1;

    // Procházíme binární číslo od konce
    for (let i = binárníČíslo.length - 1; i >= 0; i--) {
        // Získáme i-tou číslici z binárního čísla
        const číslice = binárníČíslo[i];

        // Kontrolujeme, zda je číslice platná
        if (číslice !== "0" && číslice !== "1") {
            alert("Neplatné binární číslo!");
            return;
        }

        // Přidáme hodnotu číslice k desítkovému číslu
        desítkovéČíslo += mocninaDvojky * parseInt(číslice);

        // Vynásobíme mocninu dvojky 2
        mocninaDvojky *= 2;
    }

    // Zobrazíme výsledek
    document.getElementById("výsledek").innerHTML = `Desítkové číslo: ${desítkovéČíslo}`;
}