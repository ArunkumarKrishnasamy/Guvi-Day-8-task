// a.Write a constructor for the class Movie, which takes a String representing the title of the movie,
// a String representing the studio, and a String representing the rating as its arguments, 
// and sets the respective class properties to these values.

class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        console.log(this.title,this.studio,this.rating );
    }
}
const a = new Movie("c","v","PG­13") 
// Output  : c v PG­13

// b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating="PG";
        console.log(this.title,this.studio,this.rating );
    }
}
const b = new Movie("c","v") 
// Output : c v PG

// c. Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". 
// You may assume the input array is full of Movie instances. The returned array need not be full.
class Movie{
        constructor(rating){
            this.rating ="PG";
        }
    getPG(title){
        for (let i = 0;i< title.length; i++){
            return title ;
        }     
        }    
}
const a= new Movie("PG");
let b = a.getPG(["z","y","x","w"]);
console.log(b);
// Output : [ 'z', 'y', 'x', 'w' ]

// // d. Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// //  the studio “Eon Productions”, and the rating “PG­13”
class Movie{
    constructor(title, studio, rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        console.log(this.title,this.studio,this.rating );
    }
}
const a= new Movie("Casino Royale","Eon Productions","PG13" )
// output : Casino Royale Eon Productions PG13
