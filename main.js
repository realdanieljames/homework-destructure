/*You will probably not have to take destructuring to such a level 
as this but this is for you to really wrap your brains around the 
mechanics. 
EVERY EXERCISE SHOULD USE DESTRUCTURING*/
//================================================================================================================================================================//
//=================================================================================================================================================================//
/****************************************************************************
 * /*********************************************************************** *
 * *                //3.  DESTRUCTURE THIS OBJECT LITERAL                *  *
 * *           // SO THAT EACH VALUE CAN BE CALLED BY ITS KEY.           *  *
 * * // RE-NAME THE ARRAY VALUES FOR THE 'NAMES' KEY OF THE OCEAN OBJECT *  *
 * *                      // TO AT, PA, IN, AND AR                       *  *
 * ***********************************************************************//*
/****************************************************************************/

// const water = {
//     lake: {
//         description: 'surrounded by land',
//         popular: { state: 'Michigan', name: 'Lake Michigan' },
//     },
//     river: {
//         definition: 'flows towards ocean',
//         known: { place: 'New York', label: 'Hudson River' },
//     },
//     ocean: {
//         context: 'body of water that composes much of a planet hydrosphere',
//         names: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
//     },
// };


// const nameInitials = ['AT', 'PA', 'IN', 'AR']
// let { lake, river, ocean } = water;

// let { context, names } = ocean
// ocean.names = nameInitials


// console.log('water :', water)




// const {
//     lake: {
//         description, 
//         popular: {staate, name}
//     },
//     river: {
//         definition,
//         popular known 
//     }
//     ocean : {
//         context
//     }

// }




//================================================================================================================================================================//
//=================================================================================================================================================================//
/**********************************************************************************
/***************************************************************************************
 * * //4.  USING DESTRUCTURING CREATE A NEW ARRAY THAT MAPS THROUGH THE ITEMS ARRAY *  *
 * *                      //  AND FROM EACH ITEM IN THE LOOP,                       *  *
 * *          // A STRING OF THE COLOR AND SHAPE VALUES SHOULD BE LOGGED.           *  *
 * *   // FOR EXAMPLE ONE LOOP SHOULD RETURN 'BLUE CIRCLE' FROM THE ITEMS ARRAY.    *  *
 * *                           // THIS IS NOT A FUNCTION.                           *  *
 * *        // YOU WILL JUST MAP AND USE THE ITEMS ARRAY AS THE ONLY ARRAY.         *  *
 * **********************************************************************************/ /*
/***************************************************************************************/

// let items = [
//     { color: 'blue', shape: 'circle' },
//     { color: 'orange', shape: 'triangle' },
//     { color: 'red', shape: 'square' },
// ];

// // const [{color, shape }] = items;


// let colorShape = items.map(({ color, shape}) => {
//     return `${color} ${shape}`
// })

// console.log(colorShape.join(', '))

// //================================================================================================================================================================//
//=================================================================================================================================================================//
/******************************************************************************
 * /************************************************************************* *
 * *          // 5.  DECONSTRUCT THE COMPLETE CAR OBJECT LITERAL           *  *
 * * // FIND A WAY TO CALL JUST ONE VARIABLE NAME FOR EACH OF THE CARTYPES *  *
 * *        // RENAME THE ARRAY VALUES INSIDE THE OTHERSHOPS ARRAY         *  *
 * *           // TO THIRD, FOURTH, AND FOR THE LAST TWO VALUES            *  *
 * *              // THEY SHOULD BE IN AN ARRAY CALLED FIFTH               *  *
 * *************************************************************************/ /*
/******************************************************************************/
const car = {
    carTypes: {
        one: { make: 'Mercedes', model: 'Meybach', year: 2020 },
        two: {
            make: 'toyota',
            model: 'Landcruiser',
            year: 2018,
        },
    },
    numWheels: 4,
    gps: true,
    autoSteer: true,
    repairPlaces: {
        main: 'Dealership',
        second: 'Roe Park Car Shop',
        otherShops: [
            'Bozo Repair',
            'Johnson Body',
            'Fixer Upper Central',
            'Last Chance Repairs',
        ],
    },
};

// const {carTypes:{one, two}, numWheels, gps, autoSteer, repairPlaces } = car
// console.log('one:', one)
// console.log('two: ', two)


// const {main, second, otherShops} = repairPlaces
// const [third, fourth, ...fifth] = otherShops




// console.log('third: ', third)
// console.log('fourth: ', fourth)
// console.log('fifth: ', fifth)


// const {
//     carTypes: {
//         one: { make: carOneMake, model: carOneModel, year: carOneYear }, 
//         two: { make: carTwoMake, model: carTwoModel, year: carTwoYear }
// },
//     numWheels,
//     gps,
//     autoSteer,
//     repairPlaces: {
//         main,
//         second,
//         others: [third, fourth, ...fifth]
//     } = car







//================================================================================================================================================================//
//=================================================================================================================================================================//

/********************************************************************
 * /**************************************************************  *
 *  * /*6.  CREATE A CLASS CARS THAT TAKES MAKE, COLOR, AND YEAR *  *
 *  *         INSTANTIATE 4 CARS, CAR1,CAR2, CAR3, CAR4          *  *
 *  *              USING DESTRUCTURING DECLARE THE               *  *
 *  *       // MAKE, COLOR AND YEAR VARIABLES FOR EACH CAR       *  *
 *  *              // AND CONSOLE.LOG THE VARIABLES              *  *
 *  *                      OR SHOULD I SAY                       *  *
 *  *              DECLARE THE MAKE, COLOR AND YEAR              *  *
 *  *                 AND LIST A STRING FOR EACH                 *  *
 * *                  SHOWING THEIR VALUES.*/                   /*  *
* /**************************************************************/ /*
// ********************************************************************/
// class Car {
//     constructor(make, color, year) {
//         this.make = make;
//         this.color =color;
//         this.year = year
//     }
//     toString(){
//         return `Make: ${this.make}, Color: ${this.color}, Year: ${this.year}`;
//     }

// }

// const myCars = [
//     new Car('car1', 'blue', '2000'),
//     new Car('car2', 'red', '2010'),
//     new Car('car3', 'green', '2020'),
//     new Car('car4', 'yellow', '1980')
// ];

// let [car1, car2, car3, car4] = myCars

// console.log(car1.toString(), car2.toString(), car3.toString(), car4.toString())






//================================================================================================================================================================//
//=================================================================================================================================================================//

//7. Using destructuring, choose all the schools with a gpa higher than 3.5,
//and list the chosen object ascending by major and log the average gpa,
//use method chaining if you can

let schoolArray = [
    { school: 'Pataway', major: 'comp sci', year: 'sophomore', gpa: 3.2 },
    { school: 'Bronxville', major: 'medicine', year: 'junior', gpa: 4.0 },
    { school: 'Scarsdale', major: 'accounting', year: 'freshman', gpa: 2.6 },
    { school: 'Peekskill', major: 'liberal arts', year: 'freshman', gpa: 4.0 },
    { school: 'Anopram', major: 'accounting', year: 'senior', gpa: 3.7 },
];







let x = schoolArray
.filter(item => item.gpa > 3.5)
.sort( (a,b)=> (a.majorl > b.major ? 1 : -1))
// .map(item => console.log(item))
.reduce((acc, curr, idx, arr)=> {
    return  idx === arr.length - 1 ? acc /arr.length: acc + curr.gpa;
}, 0);

console.log(x);


//================================================================================================================================================================//
//=================================================================================================================================================================//
