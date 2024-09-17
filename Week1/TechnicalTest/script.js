var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : "12"
};

console.log(Object.keys(student).length);

console.log(Object.keys(student));

console.log(student);
delete student.rollno;
console.log(student);

console.log(Object.keys(student).length);

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
]


for (var i = 0; i < library.length; i++) {
    console.log(`Title: ${library[i].title}`);
    console.log(`Author: ${library[i].author}`);
    console.log(`Reading: ${library[i].readingStatus}`);
    console.log(`\n`);
}

function getSubSet(str){
    var result = [];
    for (var x = 0; x < str.length; x++) {
        for (var y = x + 1; y < str.length + 1; y++) {
            result.push(str.slice(x, y));
        }
    }
    return result;

}

console.log(getSubSet('dog'));

var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    },
];

library.sort((a, b) => {
    return b.libraryID - a.libraryID;
});

for (var i = 0; i < library.length; i++) {
    console.log(`${library[i]}`);
    console.log(JSON.stringify(library[i]));
}

function all_properties(obj){

    var objectProperties = Object.getOwnPropertyNames(obj);
    var objectMethods = objectProperties.filter(function(property){
        return typeof obj[property] == 'function';
    });

    return objectMethods;

}

console.log(all_properties(Array));

function parseURL(url){
    const parsedURL = new URL(url);
    return {
        href: parsedURL.href,
        protocol: parsedURL.protocol,
        host: parsedURL.host,
        hostname: parsedURL.hostname,
        pathname: parsedURL.pathname,
        origin: parsedURL.origin,
    };
}

console.log(parseURL('https://teach2give.github.io/Javascript-Docs/introduction.html'));

function getObjectProperties(obj){
    var ownProperties = Object.getOwnPropertyNames(obj);
    var inheritedProperties = Object.getOwnPropertyNames(obj.prototype);
    return ownProperties.concat(inheritedProperties);

}

console.log(getObjectProperties(Array));

function getValues(obj){
    return Object.values(obj);
}

var student = {
    name: 'David Rayy',
    sclass: 'VI',
    rollno: 12
};

console.log(getValues(student));

function objectToList(obj){
    return Object.entries(obj);
}

var student = {
    name: 'David Rayy',
    sclass: 'VI',
    rollno: 12
};

console.log(objectToList(student));

function keyToValues(obj){

    var invertedObject = {};

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
           invertedObject[obj[key]] = key; 
    }

    }
    return invertedObject;
    
}

var student = {
    name: 'David Rayy',
    sclass: 'VI',
    rollno: 12
};

console.log(keyToValues(student));

function getProperty(obj, key){
    return obj[key];
}

var student = {
    name: 'David Rayy',
    sclass: 'VI',
    rollno: 12
};

console.log(getProperty(student, 'name'));