let N = +prompt("Enter the number N");
let M = +prompt(`Enter the number M, the number must be greater ${N}`);


if (Number.isInteger(N) && N !== NaN || Number.isInteger(M) && M !== NaN && M >= N) {

  let isPairNumbers = confirm("Skip pair numbers?");
  let sumNumbers = 0;
  for (let i = N; i <= M; i++) {
    if (isPairNumbers && i % 2 === 0) continue;
    else
      sumNumbers += i;
  }

  let result = `Your number N: ${N} 
Your number M: ${M}
Sum: ${sumNumbers}`;
  document.write(result);
  console.log(sumNumbers);

} else {
  alert("Wrong number, repeat please. You must enter an integer, and M greater N")
  console.log("Wrong number, repeat please. You must enter an integer, and M greater N");
}