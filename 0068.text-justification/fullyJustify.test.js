const fullJustify = require('./fullyJustify')

test('test case 1', () => {
    const words = [
        'This',
        'is',
        'an',
        'example',
        'of',
        'text',
        'justification.'
    ]
    const maxWidth = 16
    const output = ['This    is    an', 'example  of text', 'justification.  ']
    const result = fullJustify(words, maxWidth)
    expect(result).toEqual(output)
})

test('test case 2', () => {
    const words = ['What', 'must', 'be', 'acknowledgment', 'shall', 'be']
    const maxWidth = 16
    const output = ['What   must   be', 'acknowledgment  ', 'shall be        ']
    const result = fullJustify(words, maxWidth)
    expect(result).toEqual(output)
})

test('test case 3', () => {
    const words = [
        'Science',
        'is',
        'what',
        'we',
        'understand',
        'well',
        'enough',
        'to',
        'explain',
        'to',
        'a',
        'computer.',
        'Art',
        'is',
        'everything',
        'else',
        'we',
        'do'
    ]
    const maxWidth = 20
    const output = [
        'Science  is  what we',
        'understand      well',
        'enough to explain to',
        'a  computer.  Art is',
        'everything  else  we',
        'do                  '
    ]
    const result = fullJustify(words, maxWidth)
    expect(result).toEqual(output)
})
