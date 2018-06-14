
import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/polymer/lib/elements/dom-repeat';
import * as view from './app.template.html';

import * as data from './data.ts';

export class MyApp extends PolymerElement {

    gridData: PolyTest.Users[];;

    // Define a string template instead of a `<template>` element.
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    static get properties() {
        return {
           gridData:{
               type:Array,
               value: data.default
           }
        };
    }

    ready() {
        super.ready();
        //console.log('1',this.gridData);
        //this.set('gridData',data);
    }

    add(){        
        this.push('gridData',{
            id:this.gridData.length+1,
            name: "NEW!!!!!!!!!!!",
            "email": "mauris@Craslorem.ca",
            "regDate": "2015-11-19T19:11:33-08:00",
            "city": "Bruderheim",
            "age": 31
        });
       // this.notifyPath('gridData');
    }

    delete(){
        const newGrid = this.gridData.map(obj => {
            if( obj && (!obj.selected || obj.selected === false)){
                return obj;
            }
            
        });        
        this.set('gridData',newGrid);
    }

    selectRow( e ){
        var user=  e.model.get('item')
        //user.selected = e.target.checked;
        console.log(this.gridData)
        this.gridData.map((obj)=>{
            if ( obj && obj.id == user.id){
                user.selected = e.target.checked;
            }
            return obj;
        })
        console.log(user)
    }
    
}