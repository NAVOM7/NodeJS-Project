// const square = (x) => {
//     return x*x;
// }

// const square = (x) => x*x;

// console.log(square(43));  


const event = {
    name: 'Birthday Party',
    guestList: ['Nanhe', 'Sujeet', 'Bhim'],
    printGuestList() {
        console.log(this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
        console.log(this.guestList);
    }
}

event.printGuestList();


