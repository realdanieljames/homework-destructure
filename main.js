/*You will probably not have to take destructuring to such a level 
as this but this is for you to really wrap your brains around the 
mechanics. 
EVERY EXERCISE SHOULD USE DESTRUCTURING*/
//================================================================================================================================================================//
//=================================================================================================================================================================//

/***********************************************************************
 *                //3.  DESTRUCTURE THIS OBJECT LITERAL                *
 *           // SO THAT EACH VALUE CAN BE CALLED BY ITS KEY.           *
 * // RE-NAME THE ARRAY VALUES FOR THE 'NAMES' KEY OF THE OCEAN OBJECT *
 *                      // TO AT, PA, IN, AND AR                       *
 ***********************************************************************/

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

// // const nameInitials = ['AT', 'PA', 'IN', 'AR']
// let { lake, river, ocean } = water;
// // let { context, names} = ocean;

// let { context, names: ['AT', 'PA', 'IN', 'AR'] = ocean
// names = ['AT', 'PA', 'IN', 'AR']

// console.log(names)


// // console.log('lake :', lake)
// // console.log('river :', river)
// console.log('ocean :', ocean)




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

let items = [
    { color: 'blue', shape: 'circle' },
    { color: 'orange', shape: 'triangle' },
    { color: 'red', shape: 'square' },
];

// const [{color, shape }] = items;


let colorShape = items.map(({ color, shape}) => {
    return `${color} ${shape}`
})

console.log(colorShape.join(', '))

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
// const car = {
//     carTypes: {
//         one: { make: 'Mercedes', model: 'Meybach', year: 2020 },
//         two: {
//             make: 'toyota',
//             model: 'Landcruiser',
//             year: 2018,
//         },
//     },
//     numWheels: 4,
//     gps: true,
//     autoSteer: true,
//     repairPlaces: {
//         main: 'Dealership',
//         second: 'Roe Park Car Shop',
//         otherShops: [
//             'Bozo Repair',
//             'Johnson Body',
//             'Fixer Upper Central',
//             'Last Chance Repairs',
//         ],
//     },
// };

// const {carTypes:{one, two}, numWheels, gps, autoSteer, repairPlaces } = car
// console.log('one:', one)
// console.log('two: ', two)



// const {main, second, otherShops} = repairPlaces
// // console.log(otherShops)
// const [third, fourth, ...fifth] = otherShops
// console.log('third: ', third)
// console.log('fourth: ', fourth)
// console.log('fifth: ', fifth)







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
********************************************************************/
// class Cars {
//     constructor(make, color, year) {
//         this.make = make;
//         this.color =color;
//         this.year = year
//     }

// }
// let car1 = new Cars('benz', 'black', 2022)
// let car2 = new Cars('bmw', 'white', 2020)
// let car3 = new Cars('lambourghini', 'black', 2019)
// let car4 = new Cars('tesla', 'burgundy', 2021)
// const {make, color, year} = car1;

// console.log('car1: ', car1)
// console.log('car2: ', car2)
// console.log('car3: ', car3)
// console.log('car4: ', car4)







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


let dontUse = []
let allGPA =  schoolArray.map(({gpa}) => {

    return gpa > 3.5 ? gpa: dontUse.push(gpa)
})
console.log(allGPA)

let reducer = allGPA.reduce( (pValue, cValue, cIndex, array) => {
    console.log(pValue)
    console.log(cValue)
    console.log(cIndex)
    let newValue = cValue + pValue
}
)
// console.log(newValue)






//================================================================================================================================================================//
//=================================================================================================================================================================//
