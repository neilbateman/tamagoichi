export class Tamagatchi {
    constructor(name){
        this.name = name;
        this.satiateLevel = 10;
        this.happyLevel = 10;
        this.restLevel  = 10;
    }

    gettingHungry() {
        setInterval(() => {
         this.satiateLevel--;
        }, 1000);
    }

     screams() {
        if (this.satiateLevel > 0) {
            return false;
        } else {
            return alert(`Feed me NOW!`);
        }
    }

    feed() {
        this.satiateLevel = 10;
    }

    happyDown() {
      setInterval(() => {
        this.happyLevel--;
     }, 1000);
    }

    cries(){
        if(this.happyLevel > 0) {
            return false;
        } else{
            return console.log("Waahhhhhhh");
         }
     }
       jumpRope() {
        this.happyLevel ++;
    }

        getSleepy() {
            setInterval(() => {
                this.sleepLevel--; 
            }, 1000);

        }
        sleep(){
            this.restLevel = 20;
        }
    }

  

 