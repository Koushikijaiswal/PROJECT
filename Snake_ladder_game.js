/*
 Javascript program to find minimum number of dice
throws required to reach last cell from first
 cell of a given snake and ladder board
*/
class Snake_ladder_game
{
	constructor()
	{
		this.v = 0;
		this.dist = 0;
	}
}
/*
1.This function returns minimum number of dice
2.	throws required to Reach last cell from 0'th cell
3.	in a snake and ladder game. move[] is an array of
4.	size N where N is no. of cells on board If there
5.	is no snake or ladder from cell i, then move[i]
6.	is -1 Otherwise move[i] contains cell to which
7.	snake or ladder at i takes to.*/
function getMinDiceThrows(move,n)
{
	let visited = new Array(n);
	for(let i = 0; i < n; i++)
		visited[i] = false;
		let q = [];
		let qe = new Snake_ladder_game();
		qe.v = 0;
		qe.dist = 0;

		// Mark the node 0 as visited and enqueue it.
		visited[0] = 1;
		q.push(qe);

		// Do a BFS starting from vertex at index 0
		while (q.length != 0)
		{
			qe = q.shift();
			let v = qe.v;

			// If front vertex is the destination
			// vertex, we are done
			if (v == n - 1)
				break;

			// Otherwise dequeue the front vertex and
			// enqueue its adjacent vertices (or cell
			// numbers reachable through a dice throw)
			for (let j = v + 1; j <= (v + 6) && j < n; ++j)
			{
				// If this cell is already visited, then ignore
				if (visited[j] == 0)
				{
					// Otherwise calculate its distance and
					// mark it as visited
					let a = new Snake_ladder_game();
					a.dist = (qe.dist + 1);
					visited[j] = 1;

					// Check if there a snake or ladder at 'j'
					// then tail of snake or top of ladder
					// become the adjacent of 'i'
					if (move[j] != -1)
						a.v = move[j];
					else
						a.v = j;
					q.push(a);
				}
			}
           // console.log(q);
		}

		// We reach here when 'qe' has last vertex
		// return the distance of vertex in 'qe'
        
		return qe.dist;
}

// Let us construct the board given in above diagram
let N = 35;
let moves = new Array(N);
for (let i = 1; i <= N; i++)
	moves[i] = -1;

// Ladders
moves[3] = 17;
moves[9] = 23;
moves[11] = 26;
moves[13]= 31;
moves[14]= 29;

// Snakes
moves[18] = 2;
moves[22] = 6;
moves[25] = 5;
moves[34]= 1;

console.log("Min Dice will be throwing to reach to goal -> " +getMinDiceThrows(moves, N));


