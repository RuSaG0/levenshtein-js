# levenshtein-js

## Usage

### Steps: 
```
levenshteinDistance({a: 'fish', b: 'fosh'}).steps // {1}
levenshteinDistance({a: 'fish', b: 'Fish'}).steps // {1} case sensitive
```
### relative & similarity
```
levenshteinDistance({a:'github', b: 'gethub'}); // {relative: 0.16666666666666666, similarity: 0.8333333333333334, steps: 1}
```

### Try to take best from all js impls

https://github.com/gustf/js-levenshtein
The only one impl algorithm that has fn Big O notation of work less than O (n2) (also known as fast levenshtein). This can be improved by adding the maximum distance after which it makes no sense to go through the matrix.

https://github.com/tad-lispy/node-damerau-levenshtein
Has scoring model(relative, similarity), I use it

## New:
### maxDistance model
```
levenshteinDistance({a: 'pen_pineapple_apple_pen', b: 'pen'}).steps // {20} 
levenshteinDistance({a: 'pen_pineapple_apple_pen', b: 'pen', maxDistance: 5}).steps // {5} You can set maxDistance for faster work. By default it's doesn't matter
```

## Upgrade smart search
If you want to make search more smart, you can upgrade score method. For Example:
```
let bonusScore = 0;
let сInclude = .4;

function prepare(_dd) {
    cconst relative = Math.max(0, (_dd / _b.length - bonusScore));
    const similarity = 1 - relative;
    return {
      steps:_dd,
      relative,
      similarity
    };
  }

if(_b.includes(_a))
    bonusScore+= сInclude;

levenshteinDistance({a: '23176515', b: 'signage-23176515'}) // { relative: 0.09999999999999998, similarity: 0.9, steps: 8}
levenshteinDistance({a: 'Ruslan', b: 'Ruslan-Yoda'}) // { relative: 0.09999999999999998, similarity: 0.9, steps: 8}
```
