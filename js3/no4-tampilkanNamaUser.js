fetch("https://jsonplaceholder.typicode.com/users")
	.then((res) => res.json())
	.then((data) => data.map((item) => console.log(`nama: ${item.name}`)));

// nama: Leanne Graham
// nama: Ervin Howell
// nama: Clementine Bauch
// nama: Patricia Lebsack
// nama: Chelsey Dietrich
// nama: Mrs. Dennis Schulist
// nama: Kurtis Weissnat
// nama: Nicholas Runolfsdottir V
// nama: Glenna Reichert
// nama: Clementina DuBuque
