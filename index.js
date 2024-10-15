// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2); // Returns the first two elements of the array
};

// Example Usage
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Antonia', 'Nuru']


// 2. Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2); // Returns the last two elements of the array
};

// Example Usage
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Amari', 'Mo']


// 3. Selecting drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Example Usage
console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Antonia', 'Nuru']
console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Amari', 'Mo']


// 4. Create fare multiplier
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier; // Returns a function that multiplies the fare
    };
}

// 5. Fare doubler
const fareDoubler = createFareMultiplier(2);

// Example Usage
console.log(fareDoubler(10)); // Output: 20


// 6. Fare tripler
const fareTripler = createFareMultiplier(3);

// Example Usage
console.log(fareTripler(10)); // Output: 30


// 7. Select different drivers
function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers); // Calls the provided driver function with drivers
}

// Example Usage
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // Output: ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers));  // Output: ['Amari', 'Mo']
