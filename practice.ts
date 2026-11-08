const add = (num1: number, num2: number) => {
      return num1 + num2;
}

add(5, "5");


//Primitive types

const studentName : string = "John DOe";
const studentAge: number = 23;
const isStudent: boolean = true;
const studentHobbies: string[] = ["Reading", "Swimming", "Coding", "Travelling", "Singing", "Painting", "Sports"];
 const cupon : null = null;
 const DelevieryAddress : undefined = undefined;
 
 
 //NoN-Primitive types
 //object
 //Array
 //Function

 const foodName : string[] = ["chao mien", "chicken", "beef"]

 //tuple => fixed length array and fixed data type
 const studentLocation : [number, number] = [22.55, 88.33];
 const studentWithRollNumber : [string, number] = ['jk', 123];

 studentWithRollNumber.push(234);

 //object
 const student : {
     name: string,
     id: number,
     age: number,
     isStudent: boolean,
     hobbies: string[],
     DreamJob: string[]
 }
  ={
      id: 3,
      name: "jk",
      age: 23,
      isStudent: true,
      hobbies: ["Travelling", "Singing", "Painting", "Sports"],
      DreamJob: ["Software Engineer", "CA Of ACCA in UK"]
 }