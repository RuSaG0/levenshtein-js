# levenshtein-js

## Usage

### Steps: 
```
levenshteinDistance({a: 'fish', b: 'fosh'}).steps // {1}
levenshteinDistance({a: 'fish', b: 'Fish'}).steps // {1} case sensitive
```
### relative & similarity
```
levenshteinDistance({a:'github', b: 'gethub'}); 
/* {
    relative: 0.16666666666666666, 
    similarity: 0.8333333333333334, 
    steps: 1 
} */
```

## Try to take best from all js impls

https://github.com/gustf/js-levenshtein
The only one impl algorithm that has fn Big O notation of work less than O (n2) (also known as fast levenshtein). This can be improved by adding the maximum distance after which it makes no sense to go through the matrix.

https://github.com/tad-lispy/node-damerau-levenshtein
Has scoring model(relative, similarity), I use it

## New:
### maxDistance model
Optional parameter. I recommend using it ONLY if there is a strong need for optimization. It slightly increases speed, but noticeably decreases accuracy (relative/similarity).In most cases don't use!
```
levenshteinDistance({a: 'pen_pineapple_apple_pen', b: 'pen'}).steps // {20} 
levenshteinDistance({a: 'pen_pineapple_apple_pen', b: 'pen', maxDistance: 5}).steps // {5} You can set maxDistance for faster work. By default it's doesn't matter
```

## Upgrade smart search
If you want to make search more smart, you can upgrade score method. For Example:
```
let bonusScore = 0;
let сInclude = .05;

function prepare(_dd) {
    const relative = Math.max(0, (_dd / _b.length - bonusScore));
    const similarity = 1 - relative;
    return {
      steps:_dd,
      relative,
      similarity
    };
  }

if(_b.includes(_a))
    bonusScore+= сInclude * _a.length;

levenshteinDistance({a: '23176515', b: 'signage-23176515'}) // { relative: 0.09999999999999998, similarity: 0.9, steps: 8}
levenshteinDistance({a: 'Ruslan', b: 'Ruslan-Yoda'}) // { relative: 0.09999999999999998, similarity: 0.9, steps: 8}
```
## Materials for understand 
### ENG
* https://www.youtube.com/watch?v=_jK_sJrvrkY&list=PLrS21S1jm43igE57Ye_edwds_iL7ZOAG4&index=10
* https://www.youtube.com/watch?v=kBtTT3fTSc8&list=PLrS21S1jm43igE57Ye_edwds_iL7ZOAG4&index=11
* aditya bhargava grokking algorithms chapter 9
### RUS
* https://habr.com/ru/company/directum/blog/460263/
* https://www.youtube.com/watch?v=P6-7bcuPs3k&list=PLrS21S1jm43jz48qjdfYNpuIPgL3lNJ_o&index=10
* https://www.youtube.com/watch?v=9s6UALbavlY&list=PLrS21S1jm43jz48qjdfYNpuIPgL3lNJ_o&index=11
* Адитья Бхаргава - Грокаем алгоритмы. Глава 9
