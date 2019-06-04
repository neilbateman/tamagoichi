import { Tamagatchi } from './../src/tamagatchi.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
$(document).ready(function()){
  $("#name").submit(function(event){
    event.preventDefault();


  let name = $("#tamoName").val();
  let tamo = new Tamagatchi(name);

  $("#feed").click(function(){
    tamo.feed();
  })
  $("#pet").click(function(){
    tamo.pet();
  })
  $("#exercise").click(function(){
    tamo.exercise();
  })

  })
}
