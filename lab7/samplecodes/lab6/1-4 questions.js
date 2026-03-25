//desturcturing the object!
          const sandwich ={
            bread:"dutch crunch",
            meat:"tuna",
            cheese:"swiss"
          };
          const {bread,meat}=sandwich;
        console.log(bread); 

//destructuring array
const flowers =["lilly","rose","banthi","chamanthi"];
 let[, , ,cha] =  flowers;
 console.log(cha);
 
 //traditional method of creating object
  const obj ={
    name:"Thrilok",
    age:55
    };
//object literal enhancement
 const name1 ="Thrilok";
 const age = 55;
 const obj1 ={name1,age};
 console.log(obj);
 console.log(obj1);

 
//spread operator clone
const flower1=[...flowers];
console.log(flower1);
//spread Operator merge
const ahh=[...flowers,...flower1];
console.log(ahh);
