import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productsList = [
    {
        "name": "Tostapane",
        "price": "39.99",
        "brand": "ToastMaster",
        "desc": "Tostapane moderno con funzione di riscaldamento rapido, Tostapane moderno con funzione di riscaldamento rapido, Tostapane moderno con funzione di riscaldamento rapido, Tostapane moderno con funzione di riscaldamento rapido, Tostapane moderno con funzione di riscaldamento rapido, Tostapane moderno con funzione di riscaldamento rapido, Tostapane moderno con funzione di riscaldamento rapido, Tostapane moderno con funzione di riscaldamento rapido, Tostapane moderno con funzione di riscaldamento rapido, Tostapane moderno con funzione di riscaldamento rapido, "
    },
    {
        "name": "Aspirapolvere",
        "price": "149.99",
        "brand": "CleanPro",
        "desc": "Potente aspirapolvere senza sacchetto"
    },
    {
        "name": "Forno a microonde",
        "price": "79.99",
        "brand": "HeatWave",
        "desc": "Forno a microonde con diverse impostazioni di cottura"
    },
    {
        "name": "Friggitrice ad aria",
        "price": "89.99",
        "brand": "AirFryTech",
        "desc": "Friggitrice ad aria senza olio per alimenti croccanti"
    },
    {
        "name": "Bilancia da cucina",
        "price": "19.99",
        "brand": "WeighEasy",
        "desc": "Bilancia digitale precisa per la cucina"
    },
    {
        "name": "Macchina per il caffè",
        "price": "129.99",
        "brand": "BrewMatic",
        "desc": "Macchina per il caffè automatica con timer programmabile"
    },
    {
        "name": "Robot da cucina",
        "price": "199.99",
        "brand": "ChefBot",
        "desc": "Robot da cucina multifunzione per tritare, mescolare e impastare"
    },
    {
        "name": "Tostiera",
        "price": "49.99",
        "brand": "CrunchyToast",
        "desc": "Tostiera con ampie fessure per toast croccanti"
    },
    {
        "name": "Teiera elettrica",
        "price": "34.99",
        "brand": "TeaTime",
        "desc": "Teiera elettrica con controllo della temperatura"
    },
    {
        "name": "Ventilatore",
        "price": "79.99",
        "brand": "BreezeCool",
        "desc": "Ventilatore da pavimento con tre velocità regolabili"
    },
    {
        "name": "Tritatutto",
        "price": "59.99",
        "brand": "ChopMaster",
        "desc": "Tritatutto potente per verdure, carne e altro"
    },
    {
        "name": "Bollitore elettrico",
        "price": "24.99",
        "brand": "BoilFast",
        "desc": "Bollitore elettrico con spegnimento automatico"
    },
    {
        "name": "Fornello elettrico",
        "price": "69.99",
        "brand": "HeatUp",
        "desc": "Fornello elettrico portatile con quattro zone di cottura"
    },
    {
        "name": "Grill elettrico",
        "price": "79.99",
        "brand": "GrillMaster",
        "desc": "Grill elettrico per barbecue senza fumo"
    },
    {
        "name": "Macchina per il pane",
        "price": "129.99",
        "brand": "BreadMaker",
        "desc": "Macchina per il pane automatica con diverse ricette preimpostate"
    },
    {
        "name": "Tappetino per yoga",
        "price": "19.99",
        "brand": "ZenYogi",
        "desc": "Tappetino per yoga antiscivolo ed ecologico"
    },
    {
        "name": "Spremiagrumi elettrico",
        "price": "29.99",
        "brand": "JuicePress",
        "desc": "Spremiagrumi elettrico per succhi freschi"
    },
    {
        "name": "Scaldabagno istantaneo",
        "price": "199.99",
        "brand": "HotFlow",
        "desc": "Scaldabagno istantaneo con controllo digitale della temperatura"
    },
    {
        "name": "Filtro per acqua",
        "price": "49.99",
        "brand": "PureFlow",
        "desc": "Filtro per acqua con sistema di purificazione avanzato"
    },
    {
        "name": "Cucina elettrica a induzione",
        "price": "149.99",
        "brand": "InductoCook",
        "desc": "Cucina elettrica a induzione con controllo touch"
    }
]

}
