import { Tamagatchi } from './../src/tamagatchi.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


let tamo = new Tamagatchi("Tamo");



document.querySelector("#btnPet").addEventListener("click", function(){
    tamo.pet();
});


document.querySelector("#btnFeed").addEventListener("click", function(){
    tamo.feed();

});
document.querySelector("#btnExercise").addEventListener("click", function(){
    tamo.exercise();

});
