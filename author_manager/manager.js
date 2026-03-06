/**
 * @callback tableCallback;
 * @param {Author[]}
 * @returns {void}
 */
class AuthorManager{
    /**
     * @type {Author[]}
     */
    #authorList;
    /**
     * @type {tableCallback}
     */
    #tableCallback;

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
        this.#authorList.push(author);
    }


    getAllElement(){
        this.#tableCallback(this.#authorList);
    }
}
 
class Author{
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

}

export {AuthorManager}