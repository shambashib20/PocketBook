import React from 'react';
import { Redirect } from 'react-router';
// React Router is a collection of navigational components.

// this will hide our note id div from showing on the note screen
const divStyle = {
    display: 'none'
};

// we use a class component because our notes will consist of states and 
// inheritance from a parent component which will pass properties 
// down the functional component via props. 

class NewNotes extends React.Component {
    // We use a constructor to set the intial state of the class objects.
    constructor(props) {
        super(props);
        // we set the intial state of the note nav to false, 
        // ie. there will be no notes to show thus no notes to "redirect" to when clicked
        this.state = {
            redirect: false
        };
        // we bind the components to our
        // event handlers to be executed.
        this.saveNote = this.saveNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }
    
}