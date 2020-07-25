let numberN = +prompt("Enter the number N");
let numberM = +prompt(`Enter the number M, the number must be greater ${numberN}`);


if (Number.isInteger(numberN) && numberN !== NaN || Number.isInteger(numberM) && numberM !== NaN && numberM >= numberN) {

    let isPairNumbers = confirm("Skip pair numbers?");
    let sumNumbers = 0;
    for (let i = numberN; i <= numberM; i++) {
        if (isPairNumbers && i % 2 === 0) continue;
        else
            sumNumbers += i;
    }

    let result = `Your number N: ${numberN} 
Your number M: ${numberM}
Sum: ${sumNumbers}`;
    document.write(result);
    console.log(sumNumbers);

} else {
    alert("Wrong number, repeat please. You must enter an integer, and M greater N")
    console.log("Wrong number, repeat please. You must enter an integer, and M greater N");
}
