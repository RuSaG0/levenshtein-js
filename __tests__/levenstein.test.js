const {levenshteinDistance} = require('../index');

describe('Levenshtein method', () => {
    it('Equal values return 0 steps & 0 relative', () => {
        const l = levenshteinDistance({a: 'RuSaG0', b: 'RuSaG0'})

        expect(l).toMatchObject({
            relative: 0,
            similarity: 1,
            steps: 0
        })
    })
    it('Ruslan / ruslan return 1 step', () => {
        const l = levenshteinDistance({a: 'Ruslan', b: 'ruslan'})

        expect(l).toMatchObject({
            steps: 1
        })
    })
    it('github / gethub return 1 step', () => {
        const l = levenshteinDistance({a: 'github', b: 'gethub'})

        expect(l).toMatchObject({
            steps: 1
        })
    })
    it('123 / RuSaG0 return 1.0.6', () => {
        const l = levenshteinDistance({a: '123', b: 'RuSaG0'})

        expect(l).toMatchObject({
            relative: 1,
            similarity: 0,
            steps: 6
        })
    })
    it('Ruslan / "" return 1 relative', () => {
        const l = levenshteinDistance({a: '', b: 'Ruslan'})

        expect(l).toMatchObject({
            relative: 1,
        })
    })
    it('pen / pen_pineapple_apple_pen => 20 steps', () => {
        const l = levenshteinDistance({a: 'pen', b: 'pen_pineapple_apple_pen'})

        expect(l).toMatchObject({
            steps: 20,
        })
    })
    it('pen / pen_pineapple_apple_pen + maxDistance(5)=> 5 steps', () => {
        const l = levenshteinDistance({a: 'pen', b: 'pen_pineapple_apple_pen', maxDistance: 5})

        expect(l).toMatchObject({
            steps: 5,
        })
    })
})