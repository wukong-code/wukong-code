import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { checkPublicDocs } from '../scripts/check-public-docs.mjs';

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'wukong-public-docs-'));
  fs.mkdirSync(path.join(root, 'docs'));
  fs.writeFileSync(path.join(root, 'docs/index.md'), '# Public technical guide\n');
  fs.writeFileSync(path.join(root, 'docs/public-documents.json'), JSON.stringify(['docs/index.md']));
  t.after(() => {
    assert.equal(fs.realpathSync(path.dirname(root)), fs.realpathSync(os.tmpdir()));
    assert.ok(path.basename(root).startsWith('wukong-public-docs-'));
    fs.rmSync(root, { recursive: true });
  });
  return root;
}

test('accepts reviewed documentation', (t) => {
  assert.doesNotThrow(() => checkPublicDocs(fixture(t)));
});

for (const extension of ['md', 'markdown', 'html', 'txt', 'csv']) {
  test(`rejects unreviewed .${extension} documents before publication`, (t) => {
    const root = fixture(t);
    fs.writeFileSync(path.join(root, `docs/planning.${extension}`), 'Unreviewed planning material');
    assert.throws(() => checkPublicDocs(root), /not in the reviewed public document list/);
  });
}

test('reviewed file names do not bypass private content checks', (t) => {
  const root = fixture(t);
  for (const content of ['Candidate $19/month', '<!-- WUKONG_PRIVATE_DOCUMENT -->', '11/9/7/3 cohort']) {
    fs.writeFileSync(path.join(root, 'docs/index.md'), content);
    assert.throws(() => checkPublicDocs(root), /boundary failed/);
  }
});

test('rejects document symlinks', (t) => {
  const root = fixture(t);
  fs.symlinkSync(path.join(root, 'docs/index.md'), path.join(root, 'docs/linked.md'));
  assert.throws(() => checkPublicDocs(root), /symlink is not allowed/);
});
