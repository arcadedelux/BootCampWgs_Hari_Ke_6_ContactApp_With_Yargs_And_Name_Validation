const yargs =require('yargs')
 const contact = require('./contact')
// console.log(yargs.argv)

yargs.command({
    command:'add',
    describe:'add new contact',
    builder:{
        name:{
            describe:'Contact Name',
            demandOption:true,
            type:'string'
        },
        mobile:{ 
            describe:'Contact mobile number',
            demandOption:true,
            type:'string'
        },
        email:{ 
            describe:'Contact Email',
            demandOption:false,
            type:'string'
        },
        
    },
    handler(argv){
       contact.saveData(argv.name,argv.mobile,argv.email)
        // const contact ={
        //     name:argv.name,
        //     email:argv.email,
        //     mobile:argv.mobile
        // }
        // console.log(contact)
    },
})

yargs.parse()


// const run = async () => {
//     const name =  await questions('Whats is your name?')
//     const phone =  await questions('Whats is your mobile phone number?')
//     const email=  await questions('Whats is your email address?')

//     saveData(name,phone,email)
// }

// run()

// rl.question('Whats is your name?',(name)=>{
//     rl.question('Your Mobile Phone Number',(phone)=>{
//         const contact ={name,phone}
//         const file = fs.readFileSync('data/contacts.json','utf-8')
//         const contacts=JSON.parse(file)
//         contacts.push(contact)
//         fs.writeFileSync('data/contacts.json',JSON.stringify(contacts))
//         console.log('terimakasih sudah menginput data!')
//         rl.close()
//     })
// })