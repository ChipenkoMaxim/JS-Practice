// My Solution
function unique(arr) {
  const set = new Set();
  // eslint-disable-next-line no-restricted-syntax
  for (const item of arr) {
    set.add(item);
  }
  // console.log(set);
  return Array.from(set);
}

// Better Solution
function unique1(arr) {
  return Array.from(new Set(arr));
}

const values = ['Hare', 'Krishna', 'Hare', 'Krishna',
  'Krishna', 'Krishna', 'Hare', 'Hare', ':-O',
];

console.log(unique(values));

function aclean(arr) {
  const map = new Map();
  // eslint-disable-next-line no-restricted-syntax
  for (const item of arr) {
    const modifiedItem = item.toLowerCase().split('').sort().join('');
    // For Last anogramma each type
    // map.set(modifiedItem, item);

    // For first anogramma each type
    if (!map.has(modifiedItem)) {
      map.set(modifiedItem, item);
    }
  }

  return Array.from(map.values());
}

const aArray = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
console.log(aclean(aArray));

const map = new Map();

map.set('name', 'John');

const keys = Array.from(map.keys());

keys.push('more');
console.log(keys);
