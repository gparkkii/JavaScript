const rows = document.querySelector('#rows');
const columns = document.querySelector('#columns');
const mine = document.querySelector('#mine');
const exec = document.querySelector('#exec');
const table = document.querySelector('#table');
const tbody = table.querySelector('tbody');
const timer = document.querySelector('#timer');
const col = Number(columns.value);
const row = Number(rows.value);
const mineCounts = Number(mine.value);

let dataset = [];

const shuffleMines = () => {
  // 배열 1~100까지 만들기
  // 이런 셔플을 피셔 예이츠 셔플이라고 한다.
  const random = Array(col*row)
    .fill()
    .map((item, index) => {
      return index;
    });
  let shuffle = [];
  //랜덤으로 지뢰 발생
  while (random.length > ((col*row) - mineCounts)) {
    const randomValue = random.splice(Math.floor(Math.random()*random.length),1);
    shuffle.push(randomValue);
  }
  // 지뢰 심기
  for(let nums = 0; nums < shuffle.length; nums++) {
    const yNumber = Math.floor(shuffle[nums] / 10);
    const xNumber = (shuffle[nums] % 10);
    tbody.children[yNumber].children[xNumber].textContent = 'X';
    dataset[yNumber][xNumber] = 'X';
  }
}

// 지뢰 위치 찾기
const findMines = (currentValue, tr, td) => {
  const parent = currentValue.parentNode;
  const tdRow = Array.prototype.indexOf.call(parent.childNodes, td);
  const trColumn = Array.prototype.indexOf.call(parent.parentNode.childNodes, tr);
  return [trColumn,tdRow];
}

const changeContext = (currentValue, mines) => {
  if(currentValue.textContent === '' || currentValue.textContent === 'X') {
    currentValue.textContent = '!';
  } else if (currentValue.textContent === '!') {
    currentValue.textContent = '?';
  } else {
    if(dataset[mines[0]][mines[1]] === 'X') {
      currentValue.textContent = 'X';
    } else {
      currentValue.textContent = '';
    }
  }
}

const possibleMines = (y,x) => {
  console.log('y,x',y,x);
  let cnt = 0;
  const dx = [0,0,1,1,1,-1,-1,-1];
  const dy = [1,-1,0,1,-1,0,1,-1];
  for(let i=0; i<8; i++) {
    let next_x = x+dx[i];
    let next_y = y+dy[i];
    if(col > next_y && next_y >= 0 && row > next_x && next_x >= 0 && dataset[next_y][next_x] === 'X') {
      console.log(next_y, next_x);
      cnt++;
    }
  }
  return cnt;
}

exec.addEventListener('click', (e) => {
  e.preventDefault();
  tbody.innerHTML = '';
  dataset=[];
  // 테이블 만들기
  for (let y = 0; y < col; y++) {
    const tr = document.createElement('tr');
    let array = [];
    dataset.push(array);
    for (let x = 0; x < row; x++) {
      const td = document.createElement('td');
      array.push('');
      tr.appendChild(td);
      td.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const currentValue = e.currentTarget;
        let mines = findMines(currentValue, tr, td);
        changeContext(currentValue, mines);
      })
      td.addEventListener('click', (e) => {
        e.preventDefault();
        const currentValue = e.currentTarget;
        let mines = findMines(currentValue, tr, td);
        const yMine = mines[0];
        const xMine = mines[1];
        if(dataset[yMine][xMine] === 'X') {
          currentValue.textContent = '펑';
        } else {
          let minesLocation = possibleMines(yMine,xMine);
          currentValue.textContent = minesLocation;
        }
    })
    }
    tbody.appendChild(tr);
  }
  console.log(dataset);
  shuffleMines();
})
