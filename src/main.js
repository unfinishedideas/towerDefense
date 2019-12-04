import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Smashedwindow from './img/smashedwindow.jpg';
import Student from './student.js';
import Tower from './tower.js';
import GameState from './gameState.js';
import Brain from './img/brain.png';
import Jail from './img/jail2.jpeg';
import GameOver from './img/gameOver.jpg';
//////////////////////
//ignore this please for jo  :)
// $(document).ready(function() {
//   $('.apocalypse').addClass();
//   $('.apocalypse').removeClass();
//  $('.jail').addClass();
// $('.jail').removeClass();
// $("#brainImage").
// attr('src','./img/brain.png');
//
//
// attr("<img src='"+Brain+"' alt='Image of a brain'>");
///////////////////////////////

  $('#start').click(function(event) {
     $('#start').hide();
     let game = new GameState();
     let creationMode = null;
     let time = 0;
     let newStudent = new StudentType;
     let spaceNumber = 53;
     let towerNumber = 5;
     attachContactListeners();

    setInterval(() => {
      if (game.health > 0) {
        console.log(time);
        time++;

        // Adding students every second
        if (time < 10) {
          game.students.addStudent(newStudent.types[0]);
        } else if (time < 20) {
          game.students.addStudent(newStudent.types[1]);
        } else if (time < 30) {
          game.students.addStudent(newStudent.types[2]);
        } else {
          game.students.addStudent(newStudent.types[3]);
        }
        game.students.advanceStudents();
        game.students.checkHealth();

        // Increment game health down - gameState.js

        // for (let i = 0; i < game.students.length; i++) {
        //   if (game.students[i].progress > 10) {
        //     game.health -= 10;
        //   }
        // }

        game.money += 10;
      } else {
        console.log("you lost");
      }

      // board.checkIfWon();
      // students.addStudent(board.time);

    }, 1000);

    function attachContactListeners() {
      $("#towerSelection").on("click", "button", function() {
        if (this.id == "tower3") {
          creationMode = game.towers.types[0];
          console.log("tower3");
        }
        console.log("should print out name of button: " + this.id);
      });
    }
  });

 });
