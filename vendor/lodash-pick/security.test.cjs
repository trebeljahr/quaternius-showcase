const assert = require('node:assert/strict');
const test = require('node:test');
const { createRequire } = require('node:module');
const method = createRequire(require.resolve('@react-three/drei'))('lodash.pick');

test('nested property behavior remains compatible', () => {
  assert.deepEqual(method({ camera: { x: 3, y: 4 }, other: true }, ['camera.x']), { camera: { x: 3 } });
});

test('untrusted paths cannot modify Object.prototype', () => {
  for (const path of ['__proto__.polluted', 'constructor.prototype.polluted']) {
    const source = JSON.parse('{"__proto__": {"polluted": "unsafe"}, "constructor": {"prototype": {"polluted": "unsafe"}}}');
    method(source, [path]);
    assert.equal({}.polluted, undefined);
  }
});
