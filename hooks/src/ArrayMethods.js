
const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
  ];
  
  
  
  // average income of all poeple in the array?
  
        // reduce array method reduces array into single value which is stored in the accumulator 
        // add person.salary onto the acc but that would equal to Null cos acc has no value 
        // give acc a value of zero to start with 
  
    const sum = people.reduce((acc,person) => acc + parseInt(person.salary),0)
    // console.log(sum)  = 479000
  
    const avgSalary = sum / people.length 
  
    console.log(avgSalary)  //39916 
  
  // array of people older than 30 
      // use Date function 
  
      const thirty = people.filter((person) => new Date().getFullYear() - new Date(person.DOB).getFullYear()  > 30)
  
  
    console.log(thirty)
  
  
  // Get everyones first name and last name
    // spread old key and values, then create fullName, add first name and last name into ti 
  
  //  const getname = people.map((name => (...name , fullName: `${name.firstName}  ${name.lastName}`)
  
  
  // order from youngest to oldest
  
  // sort array method 
  const ages = people.sort((ageA, ageB) => new Date(ageA.DOB) - new Date(ageB.DOB)   )
  
  console.log(ages)
  
  
  
  const allPeople = people.reduce((acc, person) => acc + parseInt(person.length), 0)
  
  // console.log(allPeople)
   
  // all people in each department 
  
  const peopleDepartment = () => {
   const sales = people.filter((person) => person.department === 'Sales').length
  
  console.log(sales)
  }
  
  peopleDepartment()
  
  const isThirty = people.filter(name =>  ( new Date().getFullYear() - new Date(name.DOB).getFullYear() == 30 ))
  //  const work = people.map((name => (...name , shesThirty: `${name.firstName}`)
  
  
  
   people.forEach((e) =>{
     e.thirty = people.filter(name =>  ( new Date().getFullYear() - new Date(name.DOB).getFullYear() == 30 ))
   })
  
   console.log(people)
   
  
  // Array methods v2 
  
   const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
  ];
  
  
  // 1. get list of orders with custoemr id of 234 that have not been devlivered
  
  const notDelivered  = orders.filter((d) => d.customerId === '234' && !d.delivered)
  
  console.log(notDelivered) // easily completed 
  
  
  
  // 2. give each order a new property with total orders 
  
            // const total = orders.map((order) => ({...orders, orderTotal: order.items.reduce((acc,item) => acc + item.price, 0)}))
  
  
            const total = orders.forEach((order) =>{
                // returns single value so use reduce and go deeper into items aray to make it work. 
              order.orderTotal = order.items.reduce((acc,item) => acc + item.price, 0)
  
            })
  
            console.log(total) //  with some help 
  
  
  // 3. Have all the orders ben deliverd 
  
            const hasDelivered = orders.every((e) =>{
              return e.delivered === true 
            })
  
            // put that into the object 
            orders.forEach((e) =>{
  
  
              e.didDeliver = orders.every((e) =>{
                return e.delivered === true 
              })
            })
  
  
            console.log(orders)
            console.log(hasDelivered)
  
  
  
  // 4. has orders.id or 124 made any orders? 
  
  
  
  const isThis = orders.some((e) =>{
    let guy = e.orderId === '123' 
  
    if(guy.item !== null){
      return guy
    } else{}
  
  })
  
  console.log(isThis) // correct, done yourself 
  
  
  //  5. has any products with id of 123 been sold 
  
  
  const thisWorks = orders.some(e => e.items.find(i => i.productId == '123'));
  
  console.log(thisWorks)
  
  
  
  // Array methods part 3 
  
  const users = [
    { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
    { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
    { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
    { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
    { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
    { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
    { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
    { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
    { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
    { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
  ];
  
  const comments = [
    { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
    { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? ????' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
    { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one ????' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
    { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool ????' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
  ];
  
  
  
  // 1. what is madison marshels userID 
  
  const mm = users.filter((d) => d.firstName==='Madison' && d.lastName==='Marshall')
  
  const findMM = mm.find((e) => e).id
  
  console.log(findMM) // very close , syntax difference 
  
  
  // 2. which user commented first ?
  
  /// const first = comments[0]
  // users.filter((d) => d.id === first).find((e) => e).id // very close 
  
  const user = users.find((e) => e.id === comments[0].userId).firstName
  
  console.log(user) // Sam
  
  
  // 3) Which user commented 'OK great thanks'?
  
  
  
  const okay = comments.find((c) => c.text === 'OK great thanks')
  
  console.log(okay)
  const firstUser = users.find((f) => f.id === okay.userId).firstName

  console.log(firstUser) 

  // used filter first instead of find twice, almost there. 


// 4) Add the user's first and last name to each comment in the comments array

// first use find to get all userIds, destruture and put them into firstName and lastName, 
 // cos Map needs to return soething, return the comment (everythin in comments) and firstName and lastNam

comments.map((comment) =>{
    const {firstName, lastName} = users.find((user) => user.id === comment.userId )
    return{
        ...comment,
        firstName,
        lastName
        
    }

})

console.log(comments)


// 5. get list of users who have not commented 

// if we cant find the comments UserId that matcehs user iD, then return those users. simplyify i t


const hasNot= users.filter(user => !comments.find(comment => comment.userId == user.id));


console.log(hasNot)

const userss = [{
    id: "e0aafb31-8ac6-48d4-99ee-12af8ddcbdae",
    email: "tcasaletto0@soundcloud.com",
    ip_address: "53.215.156.73"
  }, {
    id: "a7b0221d-5228-4992-a964-b5f3e3d7a022",
    email: "nmoffett1@paginegialle.it",
    ip_address: "34.81.219.4"
  }, {
    id: "1019b52c-db9d-45a2-975f-404455925a6a",
    email: "rcrampin2@yale.edu",
    ip_address: "65.181.114.151"
  }, {
    id: "e8637c3b-645d-4742-a463-d2006742606f",
    email: "ddreinan3@smugmug.com",
    ip_address: "136.171.217.116"
  }, {
    id: "a20803f2-c372-4f39-97b1-d8e948151c8c",
    email: "gdorkin4@taobao.com",
    ip_address: "220.228.4.97"
  }, {
    id: "63f8e789-009d-4e7b-ad6b-cc8c8a1d1248",
    email: "vhucquart5@typepad.com",
    ip_address: "101.212.0.49"
  }, {
    id: "74120248-03b5-4888-84c0-d1a459c6273b",
    email: "vsircombe6@marriott.com",
    ip_address: "28.180.205.167"
  }, {
    id: "412a0669-7171-48b4-95eb-e898993ec1dc",
    email: "kdesouza7@t.co",
    ip_address: "61.44.195.62"
  }, {
    id: "6cd04ecc-8316-4542-9faa-b8438e82b4ad",
    email: "sbehnke8@booking.com",
    ip_address: "1.176.238.27"
  }, {
    id: "cfdf5009-84d3-4599-88c0-048c4fcae2ed",
    email: "clindsell9@nymag.com",
    ip_address: "44.37.119.76"
  }];
  

  //1. check if every user has valid email


  const email = userss.every((user) => user.email.includes('@'))

  //  or 

  
//   const email = userss.every((user) => /^@]+@[^\.]+\..+/.test(user.email))


console.log(email) // should be true


//2. 





//3. 










//4.  find email that has soundcloud


const sound = userss.find((f) => f.email.includes('soundcloud') )


console.log(sound)