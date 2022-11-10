const chatroomStatus = (users) => {

    switch (users.length) {
        case 0:
            return `no one online`;
            break;
        case 1:
            return `${users[0]} online`;
            break;
        case 2:
            return `${users[0]} and ${users[1]} online`;
            break;
        default:
            return `${users[0]}, ${users[1]} and ${users.length -2} more online`;
            break;
    }
}

// console.log(chatroomStatus(['jed', 'dwa']));
console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]));