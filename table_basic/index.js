/** 
* @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
* @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
* @typedef {{name: string, colSpan?: number}} HeaderType
* @callback Logbait
* @param {HTMLTableSectionElement}
*/

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    },
    {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }
]



/** @type {ColspanRowType[]} */
const colspanBodyArr = [ 
    {
        author: "Appolliniare", 
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés", 
    },
    {
        author: "Appolliniare", 
        title: "Búcsú", 
        concepts: "Avantgárd" 
    },
    {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény" 
    },
    {
        author: "Franz Kafka",
        title: "A per", 
        concepts: "regény" 
    },
    {
        author: "Franz Kafka", 
        title: "Az átváltozás",
        concepts: "kisregény", 
        concepts2: "groteszk" 
    }
]


class Table{

    #tbody;

    get tbody() {
        return this.#tbody;
    }

    /**
     * @param {Logbait} param 
     */
    name(param) {
        param(this.#tbody);
    }

    /**
     * @param {HeaderType[]} tableHeaderArray 
     */
    constructor(tableHeaderArray) {
        this.#tbody = makeTableBodyWithHeader(tableHeaderArray);
    }
}


class ColspanTable extends Table {
    /**
     * @param {HeaderType[]} tableHeaderArray 
     */
    constructor(tableHeaderArray) {
        super(tableHeaderArray);
    }

    /**
     * @param {ColspanRowType[]} colSpanArray
     */
    render(colSpanArray) {
        renderColspanBody(this.tbody, colSpanArray);
    }
}


class RowSpanTable extends Table {
    /**
     * @param {HeaderType[]} tableHeaderArray 
     */
    constructor(tableHeaderArray) {
        super(tableHeaderArray);
    }

    /**
     * @param {RowspanRowType[]} rowSpanArray
     */
    render(rowSpanArray) {
        renderRowspanBody(this.tbody, rowSpanArray);
    }
}

const colSpanTable = new ColspanTable(colspanHeaderArr);
const rowSpanTable = new RowSpanTable(rowspanHeaderArr);
colSpanTable.render(colspanBodyArr);
rowSpanTable.render(rowspanBodyArr);

const button = document.createElement("button");
button.innerText = "rowspan";
button.addEventListener("click", eHandler.bind(rowSpanTable));
document.body.appendChild(button);
 
/**
 * @this {RowSpanTable} példány
 */
function eHandler(){
    /**
     * @type {RowspanRowType}
     */
    const obj = {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    }
    this.name(function(body){
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.innerText = "Appolliniare";
        const td2 = document.createElement("td");
        td2.innerText = "A megsebzett galamb és a szökőkút";
        const td3 = document.createElement("td");
        td3.innerText = "képvers";
        const td4 = document.createElement("td");
        td4.innerText = "Búcsú";
        const td5 = document.createElement("td");
        td5.innerText = "avantgard";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        body.appendChild(tr);
    })
}

const button2 = document.createElement("button");
button2.innerText = "Colspan Hozzáadás";
document.body.appendChild(button2);
button2.addEventListener("click", onButtonClick2.bind(colSpanTable))

/**
 * @this {colspanTable}
 */
function onButtonClick2(){
    /**
     * @type {ColspanRowType}
     */
    const obj = {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény"
    }
    this.ujMetodus(function(body){
        const tr = document.createElement("tr");

        const td1 = document.createElement("td");
        td1.innerText = obj.author;
        tr.appendChild(td1);
        
        const td2 = document.createElement("td");
        td2.innerText = obj.title;
        tr.appendChild(td2);

        const td3 = document.createElement("td");
        td3.innerText = obj.concepts;
        td3.colSpan = "2";
        tr.appendChild(td3);

        body.appendChild(tr);
    })
}