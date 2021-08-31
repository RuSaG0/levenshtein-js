# levenshtein-js

Steps: 
```
levenshteinDistance({a: 'fish', b: 'fosh'}).steps // {1}
levenshteinDistance({a: 'fish', b: 'Fish'}).steps // {1} case sensitive
```
relative & similarity
```
levenshteinDistance({a:'github', b: 'gethub'}); // {relative: 0.16666666666666666, similarity: 0.8333333333333334, steps: 1}
```

Try to take best from all js impls

https://github.com/gustf/js-levenshtein
The only one impl algorithm that has fn Big O notation of work less than O (n2) (also known as fast levenshtein). This can be improved by adding the maximum distance after which it makes no sense to go through the matrix.

https://github.com/tad-lispy/node-damerau-levenshtein
Has scoring model(relative, similarity), I use it

New:
maxDistance model
```
levenshteinDistance({a: 'pen_pineapple_apple_pen', b: 'pen', maxDistance: 5}).steps // {20} 
levenshteinDistance({a: 'pen_pineapple_apple_pen', b: 'pen', maxDistance: 5}).steps // {5} You can set maxDistance for more faster work. By default it's doesn't matter
```
