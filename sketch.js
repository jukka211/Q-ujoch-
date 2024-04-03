document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / -5.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / 7.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement2");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / -7.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement3");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / 5.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement4");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / 8.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement5");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / -8.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement6");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / -6.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement7");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / 6.5; // Adjust the division factor as needed

    const element = document.getElementById("translateElement8");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / -9; // Adjust the division factor as needed

    const element = document.getElementById("translateElement9");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / 9; // Adjust the division factor as needed

    const element = document.getElementById("translateElement10");
    element.style.transform = `translateY(${translateAmount}px)`;
});
document.addEventListener("mousemove", function(event) {
    const mouseY = event.clientY;
    const translateAmount = mouseY / 40; // Adjust the division factor as needed

    const element = document.getElementById("translateElement11");
    element.style.transform = `translateY(${translateAmount}px)`;
});



$(document).ready(function() {
    $('.Q, .A').hover(function() {
        $('.Q, .A').css('display', 'block');
    });
    $('.Q2, .A2').hover(function() {
        $('.Q2, .A2').css('display', 'block');
    });
    $('.Q3, .A3').hover(function() {
        $('.Q3, .A3').css('display', 'block');
    });

    $('.block1').hover(function() {
        $('.Q3, .A3, .Q2, .A2, .text, .text-bottom').css('display', 'none');
        $('.Q, .A').css('display', 'block');
        
        $('body').css('background', 'red');
    });

    $('.block2').hover(function() {
        $('.Q3, .A3, .Q, .A, .text, .text-bottom').css('display', 'none');
        $('.Q2, .A2').css('display', 'block');
       
        $('body').css('background', '#F5F5F5');
    });

    $('.block3').hover(function() {
        $('.Q, .A, .Q2, .A2, .text, .text-bottom').css('display', 'none');
        
        $('.Q3, .A3').css('display', 'block');
        
        $('body').css('background', 'hotpink');
    });
    
});

//$('.one, .two, .three, .four, .five, .six, .sev, .eit, .nin, .ten, .el, .Q, .Q2, .Q3, .A, .A2, .A3, .archive, .text, .kontakt ').css('color', '#FF00FF');









