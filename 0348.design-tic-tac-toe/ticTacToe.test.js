const TicTacToe = require('./ticTacToe')

test('test case 1', () => {
    const ticTacToe = new TicTacToe(3)
    const res1 = ticTacToe.move(0, 0, 1) // return 0 (no one wins)
    expect(res1).toBe(0)

    const res2 = ticTacToe.move(0, 2, 2) // return 0 (no one wins)
    expect(res2).toBe(0)

    const res3 = ticTacToe.move(2, 2, 1) // return 0 (no one wins)
    expect(res3).toBe(0)

    const res4 = ticTacToe.move(1, 1, 2) // return 0 (no one wins)
    expect(res4).toBe(0)

    const res5 = ticTacToe.move(2, 0, 1) // return 0 (no one wins)
    expect(res5).toBe(0)

    const res6 = ticTacToe.move(1, 0, 2) // return 0 (no one wins)
    expect(res6).toBe(0)

    const res7 = ticTacToe.move(2, 1, 1) // return 1 (player 1 wins)
    expect(res7).toBe(1)
})
