// let cells = document.querySelectorAll('.cell')

// console.log(cells)

// cells.forEach((item)=> {
//     console.log(item);
// })
// // let cars = [1, 2, 3]
// // for (item of cars){
// //     console.log(item);
// // }

// // let x = 5
// // let y = 10

// // if(x < y){
// //     console.log(true);
// // }
// // else{
// //     console.log(false);
// // }

// // x < y ? console.log(true) : console.log(false);

let cells = document.querySelectorAll('.cell')
let result = document.getElementById('result')
let reset =  document.getElementById('reset')
let currentPlayer = 'X'
let gameActive = true;

let winingPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
] 

cells.forEach((item)=>{
    item.addEventListener('click', handleClick)
})

function handleClick(event){
    console.log(event)
   let cell = event.target;

  if(cell.innerHTML === '' && gameActive){
  cell.innerHTML = currentPlayer

  if(checkWin(currentPlayer)){
    console.log('checkWin');
    result.innerHTML = `${currentPlayer} wins!`
    gameActive = false
  }


  else if (draw()){
    console.log('draw');
    result.innerHTML =  "It is a Draw!"
    gameActive = false
       }
       else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
      }
   }
}


function checkWin(playerChoice){
   for(let item of winingPattern){
    if(
        cells[item[0]].innerHTML === playerChoice &&
        cells[item[1]].innerHTML === playerChoice &&
        cells[item[2]].innerHTML === playerChoice 
    ){
        return true
      }
   }
   return false
}


function draw(){
    for(let item of cells){
        if(item.innerHTML === ''){
              return false
        }
    }
    return true
}

reset.addEventListener ('click', resetGame)

function resetGame(){
       for (let item of cells){
        item.innerHTML = '';
    }
    currentPlayer = 'X'
    gameActive = true
}