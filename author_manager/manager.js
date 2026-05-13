/**
 * @callback tableCallback;
 * @param {Author[]}
 * @returns {void}
 * @callback addElementResultCallback
 * @param {string} message
 * @returns {void}
 * @callback ImportResultCallback
 * @param {string}  message
 * @returns {void}
*/
class AuthorManager{ //authormanager class def
    /**
     * @type {Author[]}
     */
    #authorList; //authorok listája
    /**
     * @type {tableCallback}
     */
    #tableCallback; //kibaszott callback
    /**
     * @type {ImportResultCallback}
     */
    #importResultCallback; //kibaszott callback

    #addElementResultCallback; //kibaszott callback
    // callback-ek használatával komunikálunk az osztályok között (valamiért)
    constructor(){
        this.#authorList = [];
    }

    /**
     * @param {tableCallback} value 
     */
    set tableCallback(value){
        this.#tableCallback = value;
    }

    /**
     * @param {AuthorType} element
     */
    addElement(element){
        const author = new Author();
        author.id = this.#authorList.length;
        author.name = element.author;
        author.work = element.work;
        author.concept = element.concept;
        if(author.value()){
        this.#authorList.push(author);
        this.#addElementResultCallback("Sikeres adatfelvétel.")
        }
        else{
            this.#addElementResultCallback("Nem volt sikeres az elemfelvétel.")
        }
    }

    /**
     * 
     * @param {import(".").AuthorType[]} elementList 
     */
    addElementList(elementList){
        for (const element of elementList) {
            const author = new Author();
            author.name = element.author;
            author.work = element.work;
            author.concept = element.concept;
            author.concept = element.concept;
            if(author.value()){
                this.#authorList.push(author);
                this.#importResultCallback("Siker");
            }
            else{
                this.#importResultCallback("Sikertelen");
                break;
            }
        }
    }


    getAllElement(){
        this.#tableCallback(this.#authorList);
    }

    /**
     * @returns {string}
     */
    getExportString(){
        const result = [];
        for (const author of this.#authorList) {
            result.push(`${author.name};${author.work};${author.concept}`);
        }
        return result.join("\n");
    }

    /**
     * @param {addElementResultCallback} value 
     */
    set addElementResultCallback(value){
        this.#addElementResultCallback = value;
    }
    /**
     * @param {ImportResultCallback} value 
     */
    set importResultCallback(value){
        this.#importResultCallback = value;
    }
}
 
class Author{ // Author entitánsosztály def
    /**
     * @type {string}
     */
    #id;
        /**
     * @type {string}
     */
    #name;
        /**
     * @type {string}
     */
    #work;
        /**
     * @type {string}
     */
    #concept;

    get id(){
        return this.#id;
    }
    get name(){
        return this.#name;
    }
    get work(){
        return this.#work
    }
    get concept(){
        return this.#concept;
    }

    set id(value){
        this.#id = value;
    }
    
    set name(value){
        this.#name = value;
    }
    
    set work(value){
        this.#work = value;
    }
    
    set concept(value){
        this.#concept = value;
    }

    /**
     * @returns {boolean}
     */
    value(){ //ez amúgy validate() csak balfasz voltam
        return this.id >=0 && this.#name && this.#concept && this.#work; // ha minden jó akkor true ha nem akkor false
    }
    //id, name, work, concept mind string, midennek geter és setter
}

export {AuthorManager}