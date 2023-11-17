import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../app.employee'
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [CommonModule, AppComponent],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponent {
  title = 'Progettino angularae';
  ics = 'ciao';
  abc: string = '';
  disabledTest: boolean = true;
  testBinding: string = '';
  testTitle = '';
  testStyle = {color: 'green'};
  testClass = 'backgroundRed';
  isOK = true;
  empList: any[] = [];
  num1: number = 12.3;
  today = new Date();
  @Input() employeesList: any[] =
  [
    {
      "matricola": "F022",
      "nominativo": "Eloisia Significata",
      "ruolo": "Operaio",
      "reparto": "Addetta Servizio Mensa",
      "eta": 51,
      "indirizzo": "Piazza Salamandra 29",
      "città": "Milano",
      "provincia": "MI",
      "cap": "00002",
      "telefono": "4433",
      "attivitaDipendentes": [
          {
              "id": 13,
              "dataAttivita": "2023-10-09T00:00:00",
              "attivita": "Sede",
              "ore": 8.00,
              "matricola": "F022",
              "matricolaNavigation": null
          },
          {
              "id": 14,
              "dataAttivita": "2022-10-10T00:00:00",
              "attivita": "Sede",
              "ore": 8.00,
              "matricola": "F022",
              "matricolaNavigation": null
          },
          {
              "id": 15,
              "dataAttivita": "2022-10-11T00:00:00",
              "attivita": "Sede",
              "ore": 8.00,
              "matricola": "F022",
              "matricolaNavigation": null
          },
          {
              "id": 16,
              "dataAttivita": "2022-10-12T00:00:00",
              "attivita": "Sede",
              "ore": 8.00,
              "matricola": "F022",
              "matricolaNavigation": null
          },
          {
              "id": 17,
              "dataAttivita": "2022-10-13T00:00:00",
              "attivita": "Sede",
              "ore": 8.00,
              "matricola": "F022",
              "matricolaNavigation": null
          }
      ]
  },
  {
      "matricola": "F042",
      "nominativo": "string",
      "ruolo": "string",
      "reparto": "string",
      "eta": 90,
      "indirizzo": "string",
      "città": "string",
      "provincia": "sing",
      "cap": "52983",
      "telefono": "4981616357",
      "attivitaDipendentes": [
          {
              "id": 19,
              "dataAttivita": "2023-11-08T14:13:45.313",
              "attivita": "string",
              "ore": 0.00,
              "matricola": "F042",
              "matricolaNavigation": null
          }
      ]
  },
  {
      "matricola": "H601",
      "nominativo": "Ciao",
      "ruolo": "string",
      "reparto": "string",
      "eta": 90,
      "indirizzo": "string",
      "città": "string",
      "provincia": "dsd",
      "cap": "12345",
      "telefono": "12345",
      "attivitaDipendentes": []
  },
  {
      "matricola": "I001",
      "nominativo": "Mario Rossi",
      "ruolo": "Impiegato",
      "reparto": "Ufficio Acquisti",
      "eta": 49,
      "indirizzo": "Largo Uvia 69",
      "città": "Roma",
      "provincia": "Roma",
      "cap": "00000",
      "telefono": "123456789",
      "attivitaDipendentes": [
          {
              "id": 1,
              "dataAttivita": "2023-10-07T00:00:00",
              "attivita": "Pre Festivo",
              "ore": 4.00,
              "matricola": "I001",
              "matricolaNavigation": null
          },
          {
              "id": 2,
              "dataAttivita": "2023-10-09T00:00:00",
              "attivita": "Ufficio",
              "ore": 10.00,
              "matricola": "I001",
              "matricolaNavigation": null
          },
          {
              "id": 3,
              "dataAttivita": "2023-10-10T00:00:00",
              "attivita": "Ufficio",
              "ore": 8.00,
              "matricola": "I001",
              "matricolaNavigation": null
          },
          {
              "id": 4,
              "dataAttivita": "2023-10-11T00:00:00",
              "attivita": "Ferie",
              "ore": 4.00,
              "matricola": "I001",
              "matricolaNavigation": null
          },
          {
              "id": 5,
              "dataAttivita": "2023-10-12T00:00:00",
              "attivita": "Ufficio",
              "ore": 8.00,
              "matricola": "I001",
              "matricolaNavigation": null
          },
          {
              "id": 6,
              "dataAttivita": "2023-10-13T00:00:00",
              "attivita": "Ufficio",
              "ore": 9.00,
              "matricola": "I001",
              "matricolaNavigation": null
          }
      ]
  },
  {
      "matricola": "M154",
      "nominativo": "Jenny Sapone",
      "ruolo": "Impiegata",
      "reparto": "ContabilitÃ ",
      "eta": 47,
      "indirizzo": "Piazzetta dei Puffi 721",
      "città": "Venezia",
      "provincia": "VE",
      "cap": "00003",
      "telefono": "00998810",
      "attivitaDipendentes": []
  },
  {
      "matricola": "P269",
      "nominativo": "Ciaobe llo",
      "ruolo": "string",
      "reparto": "string",
      "eta": 90,
      "indirizzo": "string",
      "città": "string",
      "provincia": "sng",
      "cap": "86268",
      "telefono": "9166997336",
      "attivitaDipendentes": []
  },
  {
      "matricola": "R002",
      "nominativo": "Geppo Il Folle",
      "ruolo": "Operaio",
      "reparto": "Addetto Servizio Mensa",
      "eta": 45,
      "indirizzo": "Cala delle Sirene 44",
      "città": "Messina",
      "provincia": "ME",
      "cap": "03000",
      "telefono": "12039124",
      "attivitaDipendentes": []
  },
  {
      "matricola": "R025",
      "nominativo": "Porfirio Cecato",
      "ruolo": "Impiegato",
      "reparto": "ContabilitÃ ",
      "eta": 38,
      "indirizzo": "Viale Guerrieri della Galassia 8",
      "città": "Bergamo",
      "provincia": "BG",
      "cap": "20002",
      "telefono": "39335",
      "attivitaDipendentes": []
  },
  {
      "matricola": "S027",
      "nominativo": "Gianno Pocuciu",
      "ruolo": "Operaio",
      "reparto": "Manutenzione",
      "eta": 50,
      "indirizzo": "Via dei Licantropi Spaventati 8887",
      "città": "Matera",
      "provincia": "MT",
      "cap": "01000",
      "telefono": "28230",
      "attivitaDipendentes": []
  },
  {
      "matricola": "T048",
      "nominativo": "string",
      "ruolo": "string",
      "reparto": "string",
      "eta": 90,
      "indirizzo": "string",
      "città": "string",
      "provincia": "stri",
      "cap": "81486",
      "telefono": "5528332185",
      "attivitaDipendentes": [
          {
              "id": 20,
              "dataAttivita": "2022-11-09T10:03:05.177",
              "attivita": "string",
              "ore": 24.00,
              "matricola": "T048",
              "matricolaNavigation": null
          }
      ]
  },
  {
      "matricola": "T098",
      "nominativo": "Vespasiano Titillo",
      "ruolo": "Operaio",
      "reparto": "Manutenzione",
      "eta": 42,
      "indirizzo": "Viottolo delle CImici Profumate 1000",
      "città": "Roma",
      "provincia": "Roma",
      "cap": "00000",
      "telefono": "3303942",
      "attivitaDipendentes": []
  },
  {
    "matricola": "T098",
    "nominativo": "Vespasiano Titillo",
    "ruolo": "Operaio",
    "reparto": "Manutenzione",
    "eta": 42,
    "indirizzo": "Viottolo delle CImici Profumate 1000",
    "città": "Roma",
    "provincia": "Roma",
    "cap": "00000",
    "telefono": "3303942",
    "attivitaDipendentes": []
    },
    {
    "matricola": "T098",
    "nominativo": "Vespasiano Titillo",
    "ruolo": "Operaio",
    "reparto": "Manutenzione",
    "eta": 42,
    "indirizzo": "Viottolo delle CImici Profumate 1000",
    "città": "Roma",
    "provincia": "Roma",
    "cap": "00000",
    "telefono": "3303942",
    "attivitaDipendentes": []
    }
  ]

  movieList: any[] = [
    {
      title: "Fight club",
      year: 1999,
      type: "drama",
    },
    {
      title: "Donnie darko",
      year: 2001,
      type: "triller",
    },
    {
      title: "Shutter Island",
      year: 2001,
      type: "triller",
    },
    {
      title: "Titanic",
      year: 2001,
      type: "drama",
    },
    {
      title: "Ex",
      year: 2001,
      type: "horror",
    }
  ]

  bidirezionale: string = 'ciao';

  constructor() {}
  updateTitle(){
    console.log("Prova")
    this.testTitle = this.testBinding
    this.disabledTest = !this.disabledTest;
    if(this.testStyle.color == 'red'){
      this.testStyle = {color: 'green'};
    } else{
      this.testStyle = {color: 'red'};
    }
    if(this.testClass == 'backgroundRed'){
      this.testClass = 'backgroundGreen'
    } else{
      this.testClass = 'backgroundRed'
    }
  }

  InsertEmployee()
  {
    let emp = new Employee('K001', 'Gabriele Saragosa', 'Lanzada', 'Via fellaria 223')

    this.empList.push(emp)
  }
}
