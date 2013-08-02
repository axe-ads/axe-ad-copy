(function (win) {
  "use strict";

  var
    Person = function (understands, preferredGender, name) {
      this.understandsProgramming = understands;
      this.preferredGender = preferredGender;
      this.name = name;
    };

  function makeThemYours(name, pronoun) {
    win.console.log(name + ', will you be my ' + pronoun + '?');
    // TODO insert API call to a candy delivery service?
  }

  function findAMate(person) {
    var pronoun;
    switch (person.preferredGender) {
    case 'female':
      pronoun = 'girlfriend';
      break;
    case 'male':
      pronoun = 'boyfriend';
      break;
    default:
      pronoun = 'partner';
    }

    if (person.understandsProgramming === true) {
      makeThemYours(person.name, pronoun);
    }

  }

})(window);
