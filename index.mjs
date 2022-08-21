import { run, bench, group } from 'mitata';
import { faker } from '@faker-js/faker';
import { search as fastFuzzySearch } from 'fast-fuzzy';
import { closest } from 'fastest-levenshtein';
import Fuse from 'fuse.js';
import fuzzy from 'fuzzy';
import FuzzySearch from 'fuzzy-search';
import MiniSearch from 'minisearch';

const data = new Array(10000).fill(0).map(() => faker.random.word());
const target = data[faker.random.numeric(4)];

const data2 = data.map(s => ({ id: s }));

group('search once with default', () => {
  bench('fast-fuzzy', () => fastFuzzySearch(target, data));
  bench('fastest-levenshtein', () => closest(target, data));
  bench('fuse.js', () => new Fuse(data).search(target));
  bench('fuzzy', () => fuzzy.filter(target, data));
  bench('fuzzy-search', () => new FuzzySearch(data).search(target));
  bench('minisearch', () => {
    const miniSearch = new MiniSearch({ fields: ['id'] });
    miniSearch.addAll(data2);
    miniSearch.search(target);
  })
})

await run()
