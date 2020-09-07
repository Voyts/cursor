const square = document.body.insertAdjacentHTML('beforeend', '<div id="cont">' + '<div></div>'.repeat(25) + '</div>');
const blocks = document.querySelectorAll('#cont>div');

function generateBlocks() {
    blocks.forEach(el => {
        el.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
        el.onclick = e => generateBlocks();
    });

}

function generateBlocksInterval() {
    setInterval(generateBlocks, 1000);
}

generateBlocks();
generateBlocksInterval();