const printAngka = (data) => {
	if (typeof data === "number") {
		for (let i = data; i >= 1; i--) {
			let baris = "";

			for (let j = 1; j <= i; j++) {
				baris += j;
			}
			console.log(baris);
		}
	} else {
		console.log("Data harus number");
	}
};

let printSegitiga = 5;

printAngka(printSegitiga);
// 12345
// 1234
// 123
// 12
// 1
