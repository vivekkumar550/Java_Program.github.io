
const number = 23;

let Prime = true;

if (number === 1) {
    console.log("1 is not prime or not a composite number.");
}


else if (number > 1) {


    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            Prime = false;
            break;
        }
    }

    if (Prime) {
        console.log(number + " is a prime number");
    } else {
        console.log(number + " is a not prime number");
    }
}


else {
    console.log("The number is not a prime number.");
}