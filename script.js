const audioBtn = document.querySelector('.audio-btn');
const audio = document.getElementById('voice-audio');

audioBtn.addEventListener('click', () => {
    audio.play();
});

const mazeMap = [
  [0,1,0,0,0],
  [0,1,0,1,0],
  [0,1,0,1,0],
  [0,0,0,1,0],
  [1,1,1,0,0]
];

const maze = document.getElementById("maze");
const message = document.getElementById("maze-message");

let player = {x:0,y:0};
let goal = {x:3,y:4};

function drawMaze(){
  maze.innerHTML="";

  for(let y=0;y<5;y++){
    for(let x=0;x<5;x++){

      const cell=document.createElement("div");
      cell.classList.add("cell");

      if(mazeMap[y][x]===1){
        cell.classList.add("wall");
      }

      if(player.x===x && player.y===y){
        cell.textContent="❤️";
      }

      if(goal.x===x && goal.y===y){
        cell.textContent="👩";
      }

      maze.appendChild(cell);
    }
  }
}

function move(dir){
  let nx=player.x;
  let ny=player.y;

  if(dir==="up") ny--;
  if(dir==="down") ny++;
  if(dir==="left") nx--;
  if(dir==="right") nx++;

  if(nx<0 || ny<0 || nx>4 || ny>4) return;
  if(mazeMap[ny][nx]===1) return;

  player.x=nx;
  player.y=ny;

  if(player.x===goal.x && player.y===goal.y){
    message.textContent="Умничка! Следующее место: Телевизор.";
  }

  drawMaze();
}

drawMaze();