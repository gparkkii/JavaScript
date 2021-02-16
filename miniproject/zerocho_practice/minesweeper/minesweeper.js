const row = document.querySelector('#rows');
const col = document.querySelector('#columns');
const mine = document.querySelector('#mine');
const exec = document.querySelector('#exec');
const table = document.querySelector('#table');
const tbody = table.querySelector('tbody');
const timer = document.querySelector('#timer');
const dx = [0,0,1,-1,1,1,-1,-1];
const dy = [1,-1,0,0,1,-1,1,-1];
let dataset = [];
let answer = 0;
let flags = 0;
let td;

const initValues = () => {
  tbody.innerHTML = '';
  dataset=[];
  answer = 0;
  row.value = "";
  col.value = "";
  mine.value = "";
  row.focus();
  col.focus();
  mine.focus();
}

const shuffleMines = () => {
  let temp_cnt = Number(mine.value);
  while(temp_cnt>0){
    let temp_y = Math.floor(Math.random()*1e5)%Number(Number(col.value)); 
    let temp_x = Math.floor(Math.random()*1e5)%Number(Number(row.value)); 
    if( dataset[temp_y][temp_x] === 'X') continue;
    dataset[temp_y][temp_x] = 'X';
    temp_cnt--;
  }
}

const findMines = (currentValue, tr, td) => {
  const parent = currentValue.parentNode;
  const tdRow = Array.prototype.indexOf.call(parent.childNodes, td);
  const trColumn = Array.prototype.indexOf.call(parent.parentNode.childNodes, tr);
  return [trColumn,tdRow];
}

const isRange = (next_y,next_x) => {
  return Number(col.value) > next_y && next_y >= 0 && Number(row.value) > next_x && next_x >= 0;
}

const isMines = (y,x) => {
  let cnt = 0;
  for(let i=0; i<8; i++) {
    let next_x = x+dx[i];
    let next_y = y+dy[i];
    if(isRange(next_y,next_x) && dataset[next_y][next_x] === 'X') {
      cnt++;
    }
  }
  dataset[y][x]=cnt;
  tbody.children[y].children[x].className = imgNumber[cnt];
}

const imgNumber = ['empty','one','two','three','four','five','six','seven','eight'];

const dfs = (y,x) => {
  isMines(y,x);
  if(dataset[y][x]!='0') return;
  for(let i = 0; i <4; i++){
    next_y=y+dy[i];
    next_x=x+dx[i];
    if(isRange(next_y,next_x) && dataset[next_y][next_x] === ''){ 
      dfs(next_y,next_x);
    }
  }
}

const onClickHandler = (tr,td) => {
  td.addEventListener('click', (e) => {
    e.preventDefault();
    const currentValue = e.currentTarget;
    let mines = findMines(currentValue, tr, td);
    if(dataset[mines[0]][mines[1]] === 'X') {
      currentValue.className = 'mine';
      alert("지뢰를 밟았습니다.");
      setTimeout(initValues, 500);
    } else {
      dfs(mines[0],mines[1]);
    }
  })
}

const onContextHandler = (tr,td) => {
  td.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const currentValue = e.currentTarget;
    let mines = findMines(currentValue, tr, td);
    let isMineHere = dataset[mines[0]][mines[1]] === 'X';
    if(currentValue.className === 'default' || currentValue.textContent === 'mine') {
      currentValue.className = 'flag';
      flags += 1;
      if(isMineHere) {
        answer += 1;
        if(answer === Number(mine.value)){
          alert("지뢰를 모두 찾았습니다.");
          setTimeout(initValues, 500);
        }
      } else if (flags === Number(mine.value)) {
        alert("정답이 틀렸습니다.");
      }
    } else if (currentValue.className === 'flag') {
      currentValue.className = 'questionMark';
      if(isMineHere) { answer-=1, flags -= 1 }
    } else if(currentValue.className === 'questionMark') {
      currentValue.className = 'default';
    }
  })
}

exec.addEventListener('click', (e) => {
  e.preventDefault();
  tbody.innerHTML = '';
  dataset=[];
  for (let y = 0; y < Number(col.value); y++) {
    const tr = document.createElement('tr');
    let array = [];
    dataset.push(array);
    for (let x = 0; x < Number(row.value); x++) {
      const createTd = document.createElement('td');
      td = createTd;
      td.className = 'default'
      array.push('');
      tr.appendChild(td);
      onContextHandler(tr,td);
      onClickHandler(tr,td);
    }
    tbody.appendChild(tr);
  }
  shuffleMines();
  console.log(dataset);
})
