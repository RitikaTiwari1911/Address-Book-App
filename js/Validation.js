let isUpdate = false;
let addressBookObj = {};

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#fullname');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).fullname = name.value;;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    phone.addEventListener('input', function () {
        if (phone.value.length == 0) {
            phoneError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).phone = phone.value;;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.add-error');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            adddressError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).address = address.value;;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });

    const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.zip-error');
    zip.addEventListener('input', function () {
        if (zip.value.length == 0) {
            zipError.textContent = "";
            return;
        }
        try {
            (new AddressBookData()).zip = zip.value;;
            zipError.textContent = "";
        } catch (e) {
            zipError.textContent = e;
        }
    });
    checkForUpdate();
});

// UC-6
const save = () => {
    try{
        let addressBookData = createAddressBook();
        createAndUpdateStorage(addressBookData);
    }catch (e) {
        return;
    }
}

//UC-6
const createAddressBook = () => {
    let addressBookData = new AddressBookData();
    try{
        addressBookData.fullname = getInputValuesById('#fullname');
    }catch(e){
        setTextValue('.test-error', e);
        throw e;
    }
    addressBookData.id = Math.floor((Math.random() * 100000) + 1);
    addressBookData.phone = getInputValuesById('#phone');
    addressBookData.address = getInputValuesById('#address');
    addressBookData.city = getInputValuesById('#city');
    addressBookData.state = getInputValuesById('#state');
    addressBookData.zip = getInputValuesById('#zip');
    alert(addressBookData.toString());
    return addressBookData;
}

const getInputValuesById = (id => {
    let value = document.querySelector(id).value;
    return value;
});

//function to set text value
const setTextValue = (id,value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}


// UC-8
function createAndUpdateStorage(addressBookData){
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if(addressBookList != undefined){
        addressBookList.push(addressBookData);
    }
    else{
        addressBookList = [addressBookData];
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}

//reset function
const resetForm=()=>{
    setValue('#name',' ');
    setValue('#address',' ');
    setValue('#city','Select City');
    setValue('#state','Select State');
    setValue('#zipcode','Select ZipCode');
    setValue('#phone',' '); 
}

const setValue = (id, value) =>{
    const element = document.querySelector(id);
    element.value = value;
}

//check for update
const checkForUpdate = () => {
    const addressBookJson = localStorage.getItem('editPerson');
    isUpdate = addressBookJson ? true : false ;
    if (!isUpdate) return;
    addressBookObj = JSON.parse(addressBookJson);
    setForm();
}

//set updated values
const setForm = () => {
    setValue('#fullname',addressBookObj._fullname);
    setValue('#address',addressBookObj._address);
    setValue('#city',addressBookObj._city);
    setValue('#state',addressBookObj._state);
    setValue('#zip',addressBookObj._zip);
    setValue('#phone',addressBookObj._phone);
}



