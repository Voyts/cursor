let i = 0,
    sign = '';

function getChines() {
    return new Promise(char => {
        setTimeout(() => {
            char(String.fromCharCode(Date.now().toString().slice(-5)));
        }, 50);
    })
}

async function getRandomChinese(length) {
    let time = Date.now();
    for (; i < length; i++) {
        sign += await getChines();
    }
    time = Date.now() - time;
    console.log(sign);
    console.log(time + "ms");
    document.getElementById('symbols').textContent = sign;
}
getRandomChinese(4);