// Lesson 1
// Task 1 forEach method
// const a = [1,2,3,4,5];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }


// Task 2 Map Method
// const a = [1,2,3,4,5];
// let b = [];
// for (let i = 0; i < a.length; i++) {
//     b.push(a[i]*2)
// }
// console.log(b);


// Task 3 Filter Method
// const a = [1,2,3,4,5];
// let b = [];
// for (let i = 0; i < a.length; i++) {
//     if (a[i]>2) {
//         b.push(a[i])
//     }
// }
// console.log(b);


// Task 4 Find Method
// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];

//   for (let i = 0; i < inventory.length; i++) {
//     if (inventory[i].name.includes("apples")) {
//         console.log(inventory[i]);
//     }
//     else {
//              console.log("yoxdur");
//          }
//     }

// Task 5 Every Method
// const array1 = [1, 42, 39, 29, 10, 13];
// let arr2 = [];
// for (let i = 0; i < array1.length; i++) {
//     if (array1[i]<40) {
//         arr2.push(array1[i])
//     }
// }
// console.log(array1.length==arr2.length);


// Task 6 Some Method
// const arr = [1,2,3,4,5,6];
// const a = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]==3) {
//         a.push(arr[i])
//     }
// }
// console.log(a.length>0);


// Task 7 Reduce Method
// const array1 = [1, 2, 3, 4];
// let cem = 0;
// for (let i = 0; i < array1.length; i++) {
//     cem += array1[i];
// }
// console.log(cem);
// ---------------------------------------------------------------------------



// Lesson 2
// Task 1 Filter Method
// let numbers = [1,2,3,4,5,6,7,8,9];
// let tek = numbers.filter((number,index)=>number%2==1);
// console.log(tek);

// let kvadrat = tek.map((num1,index)=>num1**2)
// console.log(kvadrat);

// let boyuk10 = kvadrat.reduce((big,current) => {
//     if (current>10) big+=current;
//         return big;
// } );

// console.log(boyuk10);
// --------------------------------------------------------------------------------



// Lesson 3
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// let names = [];
// characters.forEach((characters) => {
//     let name = characters.name
//     names.push(name)
//   });
//   console.log(names);

// let heights = [];
// characters.forEach((characters) => {
//     let height = characters.height
//     heights.push(height)
//   });
//   console.log(heights);


// let kutle100 = characters.filter((item)=>item.mass<100)
// console.log(kutle100);

// let hundurluy200 = characters.filter((item)=>item.height>200)
// console.log(hundurluy200);

// let maleUser = characters.filter((item)=>item.gender=="male")
// console.log(maleUser);

// let femaleUser = characters.filter((item)=>item.gender=="female")
// console.log(femaleUser);

// let blueEye = characters.every((item)=>item.eye_color=="blue")
// console.log(blueEye);

// let User = characters.every((item)=>item.mass > 40)
// console.log(User);

// let heightUser = characters.filter((item)=>item.height<200)
// console.log(heightUser);

// let AllUserMale = characters.every((item)=>item.gender=="male")
// console.log(AllUserMale);

// let BlueEyeUser = characters.some((item)=>item.eye_color=="blue")
// console.log(BlueEyeUser);

// let HeightUser = characters.some((item)=>item.height>200)
// console.log(HeightUser);

// let MassUser = characters.some((item)=>item.mass<50)
// console.log(MassUser);

// let sortName = characters.sort((x,y)=>x.name - y.name)
// console.log(sortName);