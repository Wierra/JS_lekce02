const hodinovka = 300
const pocetHodin = Number(prompt("Zadej pocet hodina zamestnance", "160"))
const premie = Number(prompt("Zadej mimořádnou odměnu v Kč"))
const plat = (hodinovka * pocetHodin) + premie

document.body.innerHTML = "<p>Josef Novák si vydělal: " + plat + " Kč </p>"

document.body.innerHTML += '12' + '5'+ "<br>"
document.body.innerHTML += 12 + 5


const nazev = "Kniha MOJE"
const autor = "Halina Pawlovská"
const cena = 500
const naSklade = true


const kniha = {
    nazev: "Kniha MOJE",
    autor: "Halina Pawlovská",
    cena: 500,
    naSklade: true,
}

kniha.autor = "Věnceslav"
kniha.jazyk = "cestina"

document.body.innerHTML += "<p>Kniha: " + nazev + ", autor: " + autor + "</p>"
document.body.innerHTML += "<p>Kniha: " + kniha.nazev + ", autor: " + kniha.autor + "</p>"