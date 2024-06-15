"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Question # 1
async function fetchGreeting() {
    setTimeout(() => {
        console.log(`Assalam O Alaikum, "Hajj Mubarak"`);
    }, 2000); // 2 second delay
}
fetchGreeting(); //calling function
//Question # 2
function simulateTask() {
    console.log("Task started");
    setTimeout(() => {
        console.log("Task completed");
    }, 1000); // 1 second delay
}
simulateTask(); //calling function
//Question # 3
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000); // 1 second delay
    });
}
fetchData().then((message) => {
    console.log(message);
});
// 
//Qustion # 4
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Randomly decide success or failure
            if (success) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000); // 1 second delay
    });
}
fetchWithError()
    .then((message) => {
    console.log(message);
})
    .catch((error) => {
    console.error(error);
});
//Question # 5
function fetchedData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000); // 1 second delay
    });
}
function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processing result: ${data}`);
        }, 1000); // 1 second delay
    });
}
function executeSequentially() {
    fetchedData()
        .then((data) => {
        console.log(data);
        return processData(data);
    })
        .then((processedData) => {
        console.log(processedData);
    })
        .catch((error) => {
        console.error(error);
    });
}
executeSequentially();
