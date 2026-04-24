import { AuthorManager } from "./manager.js";
import { ViewElement } from "./viewElement.js";

class ImportView extends ViewElement{ // import class definition
    /**
     * @type {AuthorManager}
     */
    #manager; // az import managerje

    /**
     * 
     * @param {string} id 
     * @param {AuthorManager} manager 
     */
    constructor(id, manager){
        super(id); // ős khonhus "importexprot értékkel"
        this.#manager = manager;
        const fileInput = document.createElement("input"); // fájlinput
        fileInput.type = "file"; // settype
        this.div.appendChild(fileInput); //add to div
        const resultDiv = document.createElement("div");
        this.div.appendChild(resultDiv); // resultdiv a divhez
        this.#manager.importResultCallback = (message) =>{ ////kibaszott callback (hívjukn az Authormanager.addElementList()-ben)
            resultDiv.innerText = message; // resultiv tartalom set
            setTimeout(() =>{ // resultidv tartalmának törlése 1.5 mp múlva
                resultDiv.innerText = "";
            }, 1500)
        }
        fileInput.addEventListener("change", (e) =>{ //input change evenllsterner
            const file = e.target.files[0]; //target files első eleme/
            const reader = new FileReader(); //FileReader példány
            reader.readAsText(file, "UTF-8"); // fájl memóriába olvasása
            reader.onload = () =>{ //onload event listener callbackel (fájlbeolvasás után fut le)
                /**
                 * @type {import("./index.js").AuthorType}
                 */
                const result = [];
                const fileContent = reader.result; // fileRaeder result tulajdonsága
                const fileContentLines = fileContent.split("\n"); //spliteljük a fájl tartalmát soronként
                for (const line of fileContentLines) { //végigmegy a sorokon
                    const data = line.split(";"); //sorokat splitelése ;-nél
                    /**
                     * @type {import("./index.js").AuthorType}
                     */
                    const authorType = { //authorType object
                        author : data[0], //athor: 1 elem
                        work : data[1], //work: 2 elem
                        concept : data[2], //concpet: 3. elem
                    };
                    result.push(authorType); // result tömbbe pusholás
                }
                this.#manager.addElementList(result); //meghívjuk az AuthorManager.addElementLoist()-et
            }
        })
        const exportButton = document.createElement("button"); //export gomb
        exportButton.innerText = "Export"; //set text
        this.div.appendChild(exportButton); //add buttonto ősdiv
        exportButton.addEventListener("click", () =>{ //exportbutton click listener
            const a = document.createElement('a');// link 
            const fileContent = this.#manager.getExportString(); // authorok stringreprezentációja (exporthoz kell egy fügvények)
            const file = new Blob([fileContent]); // példányosítunk egy Blob-ot, amaelynek megadunk egy tömböt ami tartalmazz az authorok strireprezentációját
            const fileUrl = URL.createObjectURL(file); // url a blob alapján
            a.href = fileUrl; // a link hrfjének megadjuk az urlt
            a.download = "export.csv"; // letöltendő fájl neve
            a.click(); // rákkatintunk a linkre
            URL.revokeObjectURL(a.href); // visszavonjuk a blob linkjének az url-jét
        })
    }
}

export {ImportView}