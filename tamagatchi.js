import $ from 'jquery';
export class Tamagatchi {
    constructor(name) {
        this.name = name;
        this.satiateLevel = 10;
        this.happyLevel = 10;
        this.restLevel = 10;
    }

    // killTamagatchi() {
    //     if (this.satiateLevel === 0 || this.happyLevel === 0 || this.restLevel === 0) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

 
    gettingHungry() {
        setInterval(() => {
            this.satiateLevel--;
            $("#satiateLevel").html(this.satiateLevel);
        }, 1000);
    }

    screams() {
        if (this.satiateLevel > 0) {
            return false;
      }
   }

    feed() {
        console.log(20);
        this.satiateLevel += 5;
    }


    happyDown() {
        setInterval(() => {
            this.happyLevel--;
            $("#happyLevel").html(this.happyLevel);
        }, 1000);
    }

    cries() {
        if (this.happyLevel > 0) {
            return false;
      }
    }
    jumpRope() {
        this.happyLevel++;
    }

    getSleepy() {
        setInterval(() => {
            this.restLevel--;
            $("#restLevel").html(this.restLevel);
        }, 1000);
    }

    sleep() {
        this.restLevel = 20;
    }

    noddingOff(){
        if(this.restLevel > 0){ 
            return false;
       }
     }
    }