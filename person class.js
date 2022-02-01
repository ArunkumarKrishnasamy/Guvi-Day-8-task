// 3.Write a “person” class to hold all the details.
class person{
    constructor(name){
       this.name=name;
       console.log(this.name);
    }
    qualification(q){
        console.log(q);
    }
    address(a){
        console.log(a);
    }
    mobile(m){
        console.log(m);
    }
    email(e){
        console.log(e);
    }
}
const details =new person("Arun");
details.qualification("BE");
details.address("Chennai");
details.email("aaa@email.com");
details.mobile(99999);