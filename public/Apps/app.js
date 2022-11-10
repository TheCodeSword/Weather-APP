
//storing dom objects in constants
const zipField = document.querySelector('#zip');
const feelingsField = document.querySelector('#feelings');
const myButton = document.querySelector('#generate');

const dateOut = document.querySelector('#date');
const tempOut = document.querySelector('#temp');
const contentOut = document.querySelector('#content');


//API keys
let key = 'cfe29d0488d649e5dddf957537949d9c&units=imperial';



//getting the date
let d = new Date();
let dateNow = d.getDay() + ',' + d.getMonth() + ',' + d.getFullYear();


//activating function
myButton.addEventListener('click', async function generate(e){
    e.preventDefault();
    let zipCode = zipField.value;
    let baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${key}`;
    //base url is declared inside the event because if it is declared outside it will return the default value 
    console.log(baseURL);
    try {
        //getting temperature and collecting data
        const resData = await fetch(baseURL).then(res => res.json());
        const receivedTemp = resData.main.temp;
        console.log(receivedTemp);
        let Data = {
            zipCode: zipField.value,
            date: dateNow,
            Temperature: receivedTemp,
            feeling: feelingsField.value
        };

        //posting the data into the server
        await fetch('../saveData', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type':"application/json"
            },
            body: JSON.stringify(Data)
        })

        //getting data from the server
        const dataOut = await fetch('/getData').then(res => res.json())

        //Update UI
        dateOut.innerHTML = dataOut.date;
        tempOut.innerHTML = dataOut.Temperature;
        contentOut.innerHTML = dataOut.feeling;

    } catch(error) {
        console.log(`There's an error`, error);
    }
})




