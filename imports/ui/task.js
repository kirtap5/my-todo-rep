import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.html';

Template.body.events({

    'submit .new-task'(event){
        event.preventDefault();
        const target = event.target;
        const text = target.text.value;

        Tasks.insert({
            text,
            createdAt: new Date(),
        });
    
        target.text.value = '';
    },

});

Template.task.events({

    'click .delete'(event){
        Tasks.remove(this._id);
    },

});