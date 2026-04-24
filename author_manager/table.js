import { createTableCell, createTableHeader } from "./gomszab.min.js";
import { AuthorManager } from "./manager.js";
import { ViewElement } from "./viewElement.js";

class TableView extends ViewElement{ // table viewelement def (extends viwelement)
    /**
     * @type {AuthorManager}
     */
    #manager; // table managerje
    /**
     * @type {HTMLTabelsectionElement}
     */
    #tbody; // tbody
    /**
     * 
     * @param {string} id 
     * @param {string[]} headerArray 
     * @param {AuthorManager} manager 
     */
    constructor(id, headerArray, manager){
        super(id); //vielement létrhozása 'table id vel'
        this.#manager = manager;
        const table = document.createElement("table");
        this.div.appendChild(table); // ősdichez adjuk a tablet
        const thead = createTableHeader(headerArray); // create header for table
        table.appendChild(thead); //aadd thead
        this.#tbody = document.createElement("tbody"); //create tbody
        table.append(this.#tbody); //add tbody
        this.#manager.tableCallback = (authorList) =>{ // manager tablecallback-je a setterrel see authormanager.tablecallback
            if(authorList.length == 0){ // ha a lista üres (az author egy szimpla object)
                const tr = document.createElement("tr"); // sor
                this.#tbody.appendChild(tr); // add to tbody
                createTableCell(tr, "Nincs megjelenítendő sor. (nigger)", tr).colSpan=3; // cella tartalommal, add to tr, colspan=3 (üresség placeholder)
            } // lehetne egy else ágon de nem kell
            for (const author of authorList) { // végigmegy az author listéán
                const tr = document.createElement("tr"); // tr
                this.#tbody.appendChild(tr); //ad to tbody

                createTableCell(tr, author.name); // name cella
                createTableCell(tr, author.work); //work cella
                createTableCell(tr, author.concept); //concept cella
                // mind ugye megy a tr-be
            }
        }
        this.activateCallback = () =>{ //activatecallback definition
            this.#tbody.innerHTML = ""; // tbody törlés
            this.#manager.getAllElement(); //manager.getAllElement (ami meghívja a tablecallbacket see authormanager.tablecallback)
        }
    }
}

export {TableView}