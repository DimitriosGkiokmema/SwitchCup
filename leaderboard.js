function createLeaderBoard() {
    fetch("rankings.csv")
    .then(response => response.text())
    .then(text => {
        const rows = text.split('\n');
        const file = rows.map(row => row.split(','));

        var entries = [];

        file.forEach((line) => {
            entries.push([line[0], line[1]]);
        });

        const displayArea = document.getElementById('entries');
        var rank = 1;
        while (entries.length > 1) {
            var max = 0;
            for (let i = 1; i < entries.length; i++) {
                if (parseInt(entries[i][1]) > parseInt(entries[max][1])) {
                    max = i;
                }
            }
            createBoardEntry(displayArea, entries[max][0], entries[max][1], rank);
            console.log(entries[max]);
            entries.splice(max, 1);
            rank += 1;
        }
    })
}

function createBoardEntry(displayArea, name, points, rank) {
    // Add name & points to board
    var listItem = document.createElement('div');
    var left = document.createElement('div');
    left.className = 'left_text';
    left.textContent = name;
    var right = document.createElement('div');
    right.className = 'right_text';
    right.textContent = points;
    listItem.className = 'boardEntry';

    // // Sets different colours for top three, but idk what colour the rest should be
    // if (rank == 1) {
    //     listItem.style.backgroundColor = 'rgb(255, 215, 0)'; // gold
    // }
    // else if (rank == 2) {
    //     listItem.style.backgroundColor = 'rgb(192, 192, 192)'; // silver
    // }
    // else if (rank == 3) {
    //     listItem.style.backgroundColor = 'rgb(205, 127, 50)'; // bronze
    // }
    // else {
    //     listItem.style.backgroundColor = 'blue';
    // }

    listItem.appendChild(left);
    listItem.appendChild(right);
    displayArea.appendChild(listItem);
}

createLeaderBoard();
