# Benchmark on fuzzy search libraries

```js
cpu: Apple M1 Pro
runtime: node v16.13.1 (arm64-darwin)

benchmark                time (avg)             (min … max)       p75       p99      p995
----------------------------------------------------------- -----------------------------
• search once with default
----------------------------------------------------------- -----------------------------
fast-fuzzy            13.43 ms/iter   (11.23 ms … 28.57 ms)  13.17 ms  28.57 ms  28.57 ms
fastest-levenshtein  720.63 µs/iter    (710 µs … 822.21 µs)  719.5 µs 775.71 µs 786.71 µs
fuse.js               21.95 ms/iter    (21.22 ms … 30.8 ms)  21.85 ms   30.8 ms   30.8 ms
fuzzy                797.69 µs/iter   (757.88 µs … 1.07 ms)  799.5 µs      1 ms   1.02 ms
fuzzy-search           2.21 ms/iter     (2.15 ms … 2.54 ms)   2.23 ms   2.41 ms   2.52 ms
minisearch             8.28 ms/iter    (7.29 ms … 18.13 ms)   8.16 ms  18.13 ms  18.13 ms

summary for search once with default
  fastest-levenshtein
   1.11x faster than fuzzy
   3.06x faster than fuzzy-search
   11.49x faster than minisearch
   18.63x faster than fast-fuzzy
   30.46x faster than fuse.js
```