import { FormView } from "./form.js";
import { ImportView } from "./importExport.js";
import { AuthorManager } from "./manager.js";
import { NavBar } from "./navBar.js"
import { TableView } from "./table.js";

const formFields = [{ //formfieldek listája (ez alapján példányosít a FormController)
    id: 'author',
    label: 'Név',
    name: 'author'
},
{
    id: 'work',
    label: 'Mű',
    name: 'work'
},
{
    id: 'concept',
    label: 'Fogalom',
    name: 'concept'
}]

const headerArray = ['Szerző', 'Mű', 'Fogalom'] // header lista
const manager = new AuthorManager();// Authormanager



/**
 * @typedef {{id: number, author?: string, work?: string, concept?: string}} AuthorType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 */


const navBar = new NavBar(); // NavBar
navBar.appendTo(document.body); //add to body

const tableView = new TableView('Table', headerArray, manager); // table id 'Table'
tableView.appendTo(document.body); //add table to body
navBar.addViewElement('Táblázat', tableView); //add table radio button to navbar

const formView = new FormView('TableForm', formFields, manager); //formkontroller
formView.appendTo(document.body); // add to body
navBar.addViewElement('Form', formView); //add form radio button

const importExport = new ImportView("importexport", manager); //importexport
importExport.appendTo(document.body);// add to body
navBar.addViewElement("import/export", importExport); //add radi buttton to navbar

navBar.activate(tableView.id);// megjelenítjük a táblázatot az id-je alapján (mint deafult view)


