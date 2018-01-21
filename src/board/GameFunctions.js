export function gameState(Array) {
    let newArray = Array.map(item => item.map(i => 0))

    for (let i = 0; i < Array.length; i++) {
        for (let j = 0; j < Array[i].length; j++) {
            newArray[i][j] = checkRules(getLiveNeighbours(i, j, Array), Array[i][j]);
        }
    }

    return newArray;
}

export function checkRules(liveNeighbours, oldArrayPosition) {
    let newArrayPosition = 0;

    switch (liveNeighbours) {
        case 0:
            newArrayPosition = 0;
            break;
        case 1:
            newArrayPosition = 0;
            break;
        case 2:
            newArrayPosition = oldArrayPosition;
            break;
        case 3:
            newArrayPosition = 1;
            break;
        case 4:
            newArrayPosition = 0;
            break;
        case 5:
            newArrayPosition = 0;
            break;
        case 6:
            newArrayPosition = 0;
            break;
        case 7:
            newArrayPosition = 0;
            break;
        case 8:
            newArrayPosition = 0;
    }

    return newArrayPosition;
}

export function getLiveNeighbours(x, y, Array) {
    let count = 0;
    for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
            if (i >= 0 && j >= 0 && i < Array.length && j < Array[x].length) {
                if (Array[i][j] === 1) {
                    count++;
                }
            }
        }
    }

    return count - Array[x][y];
}

