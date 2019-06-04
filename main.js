import { Tamagatchi } from './../src/tamagatchi.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
$(document).ready(function()){
  $("#name").submit(function(event){
    event.preventDefault();
    $("#tamoStats").show();

  let name = $("#tamoName").val();
  let tamo = new Tamagatchi(name);
  $("#satiateLevel").text(tamo.satiateLevel);
  $("#restLevel").text(tamo.restLevel);
  $("#happyLevel").text(tamo.happyLevel);
  tamo.gettingHungry();
  tamo.getSleepy();
  tamo.happyDown();
  $(".showName").text(tamo.name);


let countDown = setInterval(function(){

  $("#satiateLevel").text(tamo.satiateLevel);
  $("#restLevel").text(tamo.restLevel);
  $("#happyLevel").text(tamo.happyLevel);
  if(tamo.killTamagatchi()) {
    $("#kill").show();
    $("#tamoStats").hide();
  }
}, 1000)
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
