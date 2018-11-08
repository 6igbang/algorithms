import Drawable from '../../utils/drawable.js';
import Queue from './index.js';

const width = 600;
const height = 300;

export default class DrawableQueue extends Drawable {
    constructor (d3, ele) {
        super(ele);
        this.d3 = d3;
        this.queue = new Queue();

        this.svg = d3.select(ele).append('svg')
            .attr('width', width)
            .attr('height', height);

        this.items = this.svg.selectAll('.item');
    }

    getData () {
        return this.queue.list;
    }

    run () {
        this.queue.enqueue(1);
        this.queue.enqueue(2);
        this.queue.enqueue(3);
        this.queue.enqueue(4);
        this.draw();
        setTimeout(() => {
            this.queue.enqueue(5);
            this.draw();
        }, 1000);
        setTimeout(() => {
            this.queue.dequeue();
            this.draw();
        }, 2000);
    }

    draw () {
        const rectWidth = 30;
        const rectHeight = 60;
        const data = this.getData();

        this.items = this.items.data(data, d => d);
        this.items.exit()
            .transition()
            .duration(350)
            .attr('transform', (d, index) => {
                return `translate(${-rectWidth + index * (rectWidth + 2)}, ${height / 2 - rectHeight / 2})`;
            })
            .attr('opacity', 0)
            .remove();
        const g = this.items
            .enter().append('g')
            .attr('opacity', 1)
            .attr('transform', (d, index) => {
                return `translate(${rectWidth * 2 + index * (rectWidth + 2)}, ${height / 2 - rectHeight / 2})`;
            });
        g
            .append('rect')
            .attr('width', rectWidth)
            .attr('height', rectHeight)
            .attr('fill', '#e0e0e0');
        g
            .append('text')
            .attr('font-size', '18px')
            .attr('fill', '#999')
            .attr('text-anchor', 'middle')
            .attr('x', rectWidth / 2)
            .attr('y', rectHeight / 2 + 6)
            .text(d => d);

        this.items
            .transition()
            .duration(350)
            .attr('transform', (d, index) => {
                return `translate(${rectWidth + index * (rectWidth + 2)}, ${height / 2 - rectHeight / 2})`;
            });
    }
}