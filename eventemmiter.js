const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`Data received ${name} ${id}`)
})
// customEmitter.emit("response");

customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})

// customEmitter.emit("response");
//We can add arguements as well
customEmitter.emit('response','rehman','20')
