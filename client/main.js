import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Messages = new Meteor.Collection('Messages');

Template.messages.helpers({
  messages: function () {
    return Messages.find({}, {sort: {time: -1}});
  }
});

Template.input.events = {
  'keydown input#message': function (event) {
    const enterKey = 13;
    if (event.which === enterKey) {
      let name = 'User';
      let message = document.getElementById('message');

      if (message.value !== '') {
        Messages.insert({
          name: name,
          message: message.value,
          time: Date.now()
        });

        message.value = '';
      }
    }
  }
}
