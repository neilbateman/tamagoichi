import {
    Tamagatchi
} from './../src/tamagatchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import Pic from './img/tamagotchiwhitepink.jpg';
let pic = document.getElementById('imgPic');
pic.src = Pic;


$(document).ready(function () {
    $("#name").submit(function (event) {
        event.preventDefault();
        let name = $("#tamoName").val();
        let tamo = new Tamagatchi(name);
        $(".showName").text(tamo.name);
        $("#tamoStats").show();

        $("#satiateLevel").html(tamo.satiateLevel);

        $("#restLevel").text(tamo.restLevel);
        tamo.getSleepy();

        $("#happyLevel").text(tamo.happyLevel);
        tamo.happyDown();

        $("#satiateLevel").html(tamo.satiateLevel);
        tamo.gettingHungry();


        //buttons 
        $("#feed").click(function () {
            tamo.feed();
        });
        $("#jumpRope").click(function () {
            tamo.jumpRope();
        });
        $("#rest").click(function () {
            tamo.sleep();
        });

        if(tamo.kill()) {
          $("#kill").show();
        $("#tamoStats").hide();
  }
    });
});