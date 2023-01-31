var myNum1 = 7;
var myNum2 = 10;
if (myNum1 < myNum2) {
    alert("JavaScript is easy to learn.");
}

var myNum1 = 7;
var myNum2 = 10;
if (myNum1 > myNum2) {
    alert("This is my first condition");
}
else {
    alert("This is my second condition");
}

var course = 1;
if (course == 1) {
    document.write("<h1>HTML Tutorial</h1>");
} else if (course == 2) {
    document.write("<h1>CSS Tutorial</h1>");
} else {
    document.write("<h1>JavaScript Tutorial</h1>");
}

var day = 2;
switch (day) {
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Tuesday");
        break;
    case 3:
        document.write("Wednesday");
        break;
    default:
        document.write("Another day");
}

document.write("<br />");
for (i=1; i<=5; i++) {
    document.write(i + "<br />");
}

document.write("<br />");
var i=0;
while (i<=10) {
    document.write(i + "<br />");
    i++;
}

document.write("<br />");
var i=20;
do {  
    document.write(i + "<br />");
    i++;  
}
while (i<=25); 