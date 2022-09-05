const showAlert = () => {
    alert('ki khobor dosto');
}
const askSome = () => {
    const decision = confirm('are u sure');
    console.log(decision);
}

const getInfo = () => {
    const info = prompt('What is your name: ');
    if (!!info) {
        console.log("welcome here", info);
    }
}
