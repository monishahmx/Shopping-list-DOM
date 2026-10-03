//DOCUMENT ELEMENT PROPERTY

let output;
//THIS HELPS TO GET ALL THE ELEMENTS IN THE HTML

output = document.all;

// to get everything in the html we use documentElement property

output = document.documentElement;

//to only get the head elements we can head property

output = document.head;

// to only get the body we can use the body property

output = document.body;

// but to get the children that is present in the head or the body we can use the children property

output = document.head.children;
output = document.body.children;

//to get the doctype of the html we can use doctype perperty

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

// to get the html collection of the forms we can forms property

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

//to get the html collection of the images we can use images property

output = document.images;
// to get the first image we can use index of zero

output = document.images[0];
output = document.images[0].src;

//to loop through an array in the forms

const forms = Array.form(document.forms);
forms.forEach((form) => console.log(form));
