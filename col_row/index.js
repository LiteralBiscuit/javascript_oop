/**
 * @import {functions.js}
 */
import { Manager } from './manager.js';
import { Table } from './table.js';
import data from './data.json' with {type:'json'};

const manager = new Manager();
manager.setCallback = (param) =>{
    console.log(param);
}
for (const data1 of data.colspanDataArr) {
    manager.addElement(data1);
}