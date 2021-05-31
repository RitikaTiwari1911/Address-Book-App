// UC-12 Ability to view Person Address Book details in a Tabular Format
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHTML();
});

const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Full Name</th><th>Address</th><th>City</th><th>State</th><th>Zip-Code</th><th>Phone Number</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let addressBookList = createAddressBookJSON();
    for(const addressBookData of addressBookList) {
        innerHtml = `${innerHtml}
        <tr>
            <td></td>
            <td>${addressBookData._name}</td>
            <td>${addressBookData._address}</td>
            <td>${addressBookData._city}</td>
            <td>${addressBookData._state}</td>
            <td>${addressBookData._zip}</td>
            <td>${addressBookData._phone}</td>
            <td>
            <img id="1" onclick="remove(this)" src="../Assets/delete-black-18dp.svg" alt="delete">
            <img id="1" onclick="update(this)" src="../Assets/create-black-18dp.svg" alt="edit">
            </td>
        </tr>`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createAddressBookJSON = () => {
    let addressBookLocal = [
        {
            _name: 'Ritika',
            _address: 'JC 111/C',
            _city: 'Tezpur',
            _state: 'Assam',
            _zip: '478410',
            _phone: '7984561235',
        },
        {
            _name: 'Tanya',
            _address: '22-A',
            _city: 'Prayagraj',
            _state: 'Uttar Pradesh',
            _zip: '211012',
            _phone: '2135468792',
        },
        {
            _name: 'Anju',
            _address: 'F-2,101',
            _city: 'Jammu',
            _state: 'Jammu and Kashmir',
            _zip: '212546',
            _phone: '2135478992',

        }
    ];
    return addressBookLocal;
} 
