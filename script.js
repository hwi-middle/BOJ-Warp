// function test() {
//     const problemNum = document.getElementById('number').value;
//     window.open(`https://www.acmicpc.net/problem/${problemNum}`, "_blank");
// }

document.addEventListener('DOMContentLoaded', function () {
    const moveBtn = document.getElementById('apply-btn');
    moveBtn.addEventListener('click', function () {
        const problemNum = document.getElementById('number').value;
        window.open(`https://www.acmicpc.net/problem/${problemNum}`, "_blank");
    }, false);
}, false);