//original text
let customers = [
    {name: "Sandra Jackson",
        email: "sjackson@gmail.com",
        purchases: ["strainer", "ladle"] },
        
        {name: "Amanda West",
        email: "amanda_w@gmail.com",
        purchases: ["blender", "cutting board"] },

        {name: "David Smith",
        email: "dav-smith1@gmail.com",
        purchases: ["knife", "saucepan"] },
];

//adding new customer
customers.push({name: "Mark Wilson",
    email: "mwilson22@gmail.com",
    purchases: ["meat hammer", "spatula"]
});

//removing 1st customer
customers.shift();

//updating email
customers[0].email = "amanda_west@gmail.com";

//add new purchase (David)
customers[1].purchases.push("fruit bowl");

//customer information
customers.forEach(customer => {
    console.log(`Name: ${customer.name}`);
    console.log(`Email: ${customer.email}`);
    console.log(`Total Purchases: ${customer.purchases.length}`);
    console.log("-------------------------");
});