import Queue from './index';

describe('Queue', () => {
    it('should create empty queue', () => {
        const queue = new Queue();
        expect(queue).not.toBeNull();
        expect(queue.list).not.toBeNull();
    });
});