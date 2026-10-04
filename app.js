// >>> PUT YOUR ELDORADO OFFER LINK HERE <<<
const ELDORADO_URL = "https://www.eldorado.gg/";

document.querySelectorAll("[data-buy]").forEach(a => { a.href = ELDORADO_URL; });
const nav = document.querySelector("nav");
document.getElementById("burger").addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("#links a[href^='#']").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
