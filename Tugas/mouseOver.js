const testMouse = document.getElementById('testMouse')
const message = document.getElementById('message')

testMouse.addEventListener('mouseover',  function(){
    message.textContent = "Mouse is over the button!";
});

testMouse.addEventListener('mouseout',  function(){
    message.textContent = " ";
});