function Start() {
    console.log('Start of the execution queue');
    Final();
}

function Final() {
    setTimeout(() => {
        console.log('Final code block to be executed');        
    }, 0);
}

function End() {
    console.log('End of the loop printing');
}

Start();
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
End();
