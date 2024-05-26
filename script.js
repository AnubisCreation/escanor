document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('diagramCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = document.querySelector('.diagram').offsetWidth;
    canvas.height = document.querySelector('.diagram').offsetHeight;

    const connections = [
        [{ x: '10%', y: '10%' }, { x: '40%', y: '10%' }],
        [{ x: '40%', y: '10%' }, { x: '40%', y: '25%' }],
        [{ x: '40%', y: '25%' }, { x: '40%', y: '40%' }],
        [{ x: '40%', y: '40%' }, { x: '40%', y: '55%' }],
        [{ x: '40%', y: '55%' }, { x: '40%', y: '70%' }],
        [{ x: '40%', y: '70%' }, { x: '40%', y: '85%' }],
        [{ x: '40%', y: '25%' }, { x: '70%', y: '25%' }],
        [{ x: '70%', y: '25%' }, { x: '70%', y: '40%' }],
        [{ x: '70%', y: '40%' }, { x: '70%', y: '55%' }],
        [{ x: '70%', y: '55%' }, { x: '70%', y: '70%' }],
        [{ x: '70%', y: '70%' }, { x: '70%', y: '85%' }]
    ];

    function getOffset(percentage, size) {
        return (parseFloat(percentage) / 100) * size;
    }

    function drawLine(from, to) {
        const fromX = getOffset(from.x, canvas.width);
        const fromY = getOffset(from.y, canvas.height);
        const toX = getOffset(to.x, canvas.width);
        const toY = getOffset(to.y, canvas.height);

        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.stroke();
    }

    connections.forEach(connection => {
        drawLine(connection[0], connection[1]);
    });
});
