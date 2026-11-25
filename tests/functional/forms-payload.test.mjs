// Données envoyées par les formulaires (D-048) : champs pièges écartés, robot détecté, objet du mail.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formPayload } from '../../src/lib/forms.ts';

const fd = (o) => { const f = new FormData(); for (const [k, v] of Object.entries(o)) f.append(k, v); return f; };

test('champs remplis gardés, pièges vides écartés, objet selon le formulaire', () => {
  const p = formPayload('home', fd({ Name: 'Awa', Email: 'awa@example.com', Budget: '500 000', website: '', message: '' }));
  assert.equal(p.Name, 'Awa');
  assert.equal(p.Budget, '500 000');
  assert.ok(!('website' in p) && !('message' in p));
  assert.match(p._subject, /Nouveau message.*\(home\)/);
  assert.match(formPayload('newsletter', fd({ Email: 'a@b.c' }))._subject, /newsletter/);
});

test('champ piège rempli : rien à envoyer', () => {
  assert.equal(formPayload('home', fd({ Email: 'bot@spam.test', website: 'http://spam' })), null);
});
