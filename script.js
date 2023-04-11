//setAttribute()
let a = document.querySelector('a');
a.setAttribute('class', 'bkred');

//getAttribute()

//removeAttribute()
let btn = document.querySelector('#btn-remove');
btn.addEventListener('click', function(event){
    a.removeAttribute('class');
})


//classList
let btnYell = document.querySelector('#btn-yellow');
let btnRed =  document.getElementById('btn-red');
let btnGreen = document.querySelector('#btn-green');
let btnBlue = document.querySelector('#btn-blue');
let btnPink = document.querySelector('#btn-pink');
let btnPurple = document.querySelector('#btn-purple');
;

btnYell.addEventListener('click', function(event){
    a.classList.remove('bkred');
    a.classList.remove('bkblue');
    a.classList.remove('bkgreen');
    a.classList.add('bkyellow');
    a.classList.remove('bkpink');
    a.classList.remove('bkpurple');
    
})
btnRed.addEventListener('click', function(event){
    a.classList.toggle('bkred');
    a.classList.remove('bkblue');
    a.classList.remove('bkgreen');
    a.classList.remove('bkyellow');
    a.classList.remove('bkpink');
    a.classList.remove('bkpurple');
    
})
btnGreen.addEventListener('click', function(event){
    a.classList.remove('bkred');
    a.classList.remove('bkblue');
    a.classList.toggle('bkgreen');
    a.classList.remove('bkyellow');
    a.classList.remove('bkpink');
    a.classList.remove('bkpurple');
    
})
btnBlue.addEventListener('click', function(event){
    a.classList.remove('bkred');
    a.classList.toggle('bkblue');
    a.classList.remove('bkgreen');
    a.classList.remove('bkyellow');
    a.classList.remove('bkpink');
    a.classList.remove('bkpurple');
})

btnPink.addEventListener('click', function(event){
    a.classList.remove('bkred');
    a.classList.remove('bkblue');
    a.classList.remove('bkgreen');
    a.classList.remove('bkyellow');
    a.classList.toggle('bkpink');
    a.classList.remove('bkpurple');
   
})

btnPurple.addEventListener('click', function(event){
    a.classList.remove('bkred');
    a.classList.remove('bkblue');
    a.classList.remove('bkgreen');
    a.classList.remove('bkyellow');
    a.classList.remove('bkpink');
    a.classList.toggle('bkpurple');
   
})



function createRemoveButton() {
    const removeButton = document.createElement("button"); // Criamos um botão
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", (e) => { // Adicionamos um evento nele.
        let arr = []
        for(let i = 0; i<list.length; i++){
            if(e.path[1].id !== i){
                arr.push(list[i]);
            } 
        }
        list = arr;

    //   list = list.filter(function(_, index){ 
    //     index !== Number(e.path[1].id)}
    //   );
      reloadList(); // Chamamos a função para recarregar a lista.
    });
    return removeButton;
}