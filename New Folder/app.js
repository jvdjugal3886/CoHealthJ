//DATABASE STARTS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBVhx41o0u9L5d8NcXZ6gliiB_xs7ZH4sA",
    authDomain: "pjwebsite-77411.firebaseapp.com",
    databaseURL: "https://pjwebsite-77411-default-rtdb.firebaseio.com",
    projectId: "pjwebsite-77411",
    storageBucket: "pjwebsite-77411.appspot.com",
    messagingSenderId: "639602543460",
    appId: "1:639602543460:web:c1d233e870809b87618871"
};

firebase.initializeApp(firebaseConfig);
console.log('hi');
const regFormDB = firebase.database().ref('form');

document.getElementById('msform').addEventListener('submit', submitForm);

function submitForm(e){
    var firstName = getElementVal('firstName');
    var lastName = getElementVal('lastName');

    console.log(firstName, lastName);

    saveMessages(firstName, lastName);

    e.preventDefault();
}

const saveMessages = (firstName, lastName) => {
    var newRegForm = regFormDB.push();

    newRegForm.set({
        firstName : firstName,
        lastName: lastName
    })

}

const getElementVal = (id) =>{
    return document.getElementById(id).value ;
}
