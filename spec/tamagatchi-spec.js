import { Tamagatchi } from './../src/tamagatchi.js';

describe('Tamagatchi', function() {
   let tamo;

    it('should have a name, and hunger, happy, and rest level of ten when created', function() {
        expect(tamo.name).toEqual("Tamo");
        expect(tamo.satiateLevel).toEqual(10);
        expect(tamo.happyLevel).toEqual(10);
        expect(tamo.restLevel).toEqual(10);
   });

    beforeEach(function() {
        tamo = new Tamagatchi("Tamo");
        jasmine.clock().install();
        tamo.gettingHungry();
        tamo.happyDown();
        tamo.getSleepy();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it('should have a satiateLevel of 7 after 3001 milliseconds', function(){
        jasmine.clock().tick(3001);
        expect(tamo.satiateLevel).toEqual(7);
    });

    it('should get very hungry if the food level drops below zero', function() {
        tamo.satiateLevel = 0;
        expect(tamo.screams()).toEqual(alert(`Feed me NOW!`));
    });

    it('should get very hungry if the food level drops below zero', function() {
        jasmine.clock().tick(10001);
        expect(tamo.screams()).toEqual(alert(`Feed me NOW!`));
    });

    it('should have a satiateLevel of 10 if it is fed', function(){
        jasmine.clock().tick(9001);
        tamo.feed();
        expect(tamo.satiateLevel).toEqual(10);
    });

    it('should have a happiness level of 7 after 3001 milliseconds', function() {
        jasmine.clock().tick(5001);
        expect(tamo.happyLevel).toEqual(5);
    });

    it('should get very sad if the happyLevel is 0', function() {
        tamo.happyLevel = 0;
        expect(tamo.cries()).toEqual(console.log("Waahhhhhhh"));
    })

    it('should get very happy if he jumps rope ', function(){
        tamo.jumpRope();
        expect(tamo.happyLevel).toEqual(11);
    })
    it('should be rested when it sleeps', function(){
        tamo.sleep();
        expect(tamo.restLevel).toEqual(20);
    })

    it('should get sleepy with time, it will go to sleep after 10 seconds', function() {
        jasmine.clock().tick(10001);
        expect(tamo.getSleepy()).toEqual(console.log("tamo needs sleep"));
    })
});