function STUDENT(){
    var name="";
    var roll="";
} //class

STUDENT.prototype.getInput = function(){
    STUDENT.prototype.name = prompt("Enter Name");
    STUDENT.prototype.roll = parseInt(prompt("Enter roll numbmer")) //NaN
}

STUDENT.prototype.getOutput= function (){
    document.write("<br>Name of student - " +  STUDENT.prototype.name);
    document.write(`<br>Roll number ${STUDENT.prototype.roll}`);
}



function MARKS(){
    var m1=0;
    var m2=0;
}



MARKS = STUDENT // Inherit 

MARKS.prototype.getMarkInput = function(){
    MARKS.prototype.m1 = parseInt(prompt("Enter M1 Mark "));
    MARKS.prototype.m2 = parseInt(prompt("Enter M2 Mark"))
}

MARKS.prototype.getMarkOutput= function (){
    document.write("<br>M1 - " +  MARKS.prototype.m1);
    document.write(`<br>M2 ${MARKS.prototype.m2}`);
}

var m =new MARKS();
m.getInput();
m.getOutput()
m.getMarkInput()
m.getMarkOutput()
