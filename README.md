# levenshtein-js

```
levenshteinDistance({a: 'fish', b: 'fosh'}) // {1}
levenshteinDistance({a: 'fish', b: 'Fish'}) // {1} case sensitive
levenshteinDistance({a: 'pen_pineapple_apple_pen', b: 'pen', maxDistance: 5}) // {20} 
levenshteinDistance({a: 'pen_pineapple_apple_pen', b: 'pen', maxDistance: 5}) // {5} You can set maxDistance for more faster work. By default it's doesn't matter
```

Solution without maxDistance model https://github.com/gustf/js-levenshtein
