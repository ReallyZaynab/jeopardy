//Initialize the game board on page load
initBoard()
initCatRow()

function initCatRow(){

    let catRow = document.getElementById('category-row')
    for(let i=0; i<6; i++){
        let box = document.createElement('div')
        box.className = 'clue-box category-box'
        catRow.appendChild(box)
    }
}

function initBoard(){
    let board = document.getElementById('clue-board')

    for(let i=0; i<5; i++){
        let boxValue = 200 * (i+1)
        let row = document.createElement('div')
        row.className = 'clue-row'

        for(let j=0; j<6; j++){
            let box = document.createElement('div')
            box.className = 'clue-box'
            box.textContent="$" + boxValue;
            row.appendChild(box)
            box.addEventListener('click',getClue,false)
        }
        board.appendChild(row)
    }

    function randomInt(){
        return Math.floor(Math.random*(18418)+1)
    }

    function buildCategories(){
        const fetchReq1 = fetch(
            `https://jservice.io/api/category?&id=${randomInt()}`
        ).then((res)=>res.json())

        const fetchReq2 = fetch(
            `https://jservice.io/api/category?&id=${randomInt()}`
        ).then((res)=>res.json())

        const fetchReq3 = fetch(
            `https://jservice.io/api/category?&id=${randomInt()}`
        ).then((res)=>res.json())

        const fetchReq4 = fetch(
            `https://jservice.io/api/category?&id=${randomInt()}`
        ).then((res)=>res.json())

        const fetchReq5 = fetch(
            `https://jservice.io/api/category?&id=${randomInt()}`
        ).then((res)=>res.json())

        const fetchReq6 = fetch(
            `https://jservice.io/api/category?&id=${randomInt()}`
        ).then((res)=>res.json())

        const allData = Promise.all([fetchReq1,fetchReq2, fetchReq3, fetchReq4, fetchReq5, fetchReq6]);

        allData.then((res)=>{
            console.log(res);
        })
    }

    function getClue (){
        console.log('Hello!')
    }

}