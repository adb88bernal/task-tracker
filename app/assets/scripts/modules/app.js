/* create logic for weekly and monthly tasks
to reappear again using the day and time substringed
from the Date();
*/

// var date = Date();
//
// console.log(date);
// var day_deadline = date.substring(0,3);
//
// if (day_deadline === 'Sat'){
//   console.log('You\'re tasks are almost up');
// } else {
//   console.log('You\'r good.')
// }


var taskController = (function(){
  // some code
})();

var UIController = (function(){

    var DOMstrings = {
        inputSelection: '.select',
        inputTask: '.taskMain__weekly-add',
        inputButton: '.btn'
    }

    return {

        getInput: function(){
            return{
                type: document.querySelector(DOMstrings.inputSelection).value,
                task: document.querySelector(DOMstrings.inputTask).value
            };
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    };

})();

var controller = (function(taskCtrl, UICtrl){
    var DOM = UICtrl.getDOMstrings();

    var ctrlAddTask = function(){

        // 1. Get the filed input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. Add the item to the task controller

        // 3. Add the item to the UI within the designated column

        // 4. Display the budget on the UI
    }


    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddTask);
    document.addEventListener('keypress', function(event){
    if(event.keyCode === 13 || event.which === 13){
      ctrlAddTask();
    }
  });



})(taskController, UIController);
