// Envoi unique des formulaires (D-048) : FormSubmit (formsubmit.co) → e-mail de Lys ; contact et newsletter.
// Aucun appel à api.framer.com. Première utilisation : FormSubmit envoie un e-mail d'activation à l'adresse, les messages
// n'arrivent qu'une fois le lien cliqué (avant : réponse success « false » → état Erreur du formulaire).
// shortcut: adresse en clair dans le code client ; après activation, la remplacer par l'alias aléatoire fourni par FormSubmit.
export type FormState = 'default' | 'incomplete' | 'pending' | 'success' | 'error';

const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || 'https://formsubmit.co/ajax/melyssa.kekelipro@gmail.com';

/** Données envoyées : champs remplis sauf pièges ; null si un champ piège est rempli (robot). */
export function formPayload(formName: string, data: FormData): Record<string, string> | null {
  const out: Record<string, string> = {};
  for (const [k, v] of data) {
    if (typeof v !== 'string') continue;
    if ((HONEYPOTS as readonly string[]).includes(k)) { if (v) return null; continue; }
    out[k] = v;
  }
  out._subject = formName === 'newsletter' ? 'Nouvelle inscription à la newsletter (site Lys Sama)' : `Nouveau message depuis le site Lys Sama (${formName})`;
  out._template = 'table';
  out._captcha = 'false';
  return out;
}

export async function submitForm(formName: string, data: FormData): Promise<boolean> {
  const payload = formPayload(formName, data);
  if (!payload) return true; // robot : réussite affichée, rien n'est envoyé
  try {
    const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) });
    if (!res.ok) return false;
    const j = (await res.json().catch(() => ({}))) as { success?: unknown };
    return String(j.success) === 'true';
  } catch {
    return false;
  }
}

/** « incomplete » tant qu'un champ texte obligatoire est vide (mesuré : champ vide → Incomplete, `abc` → Default). */
export function isIncomplete(form: HTMLFormElement | null): boolean {
  if (!form) return true;
  return [...form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[required], textarea[required]')]
    .some((i) => i.type !== 'checkbox' && i.type !== 'radio' && i.value === '');
}

// Champs pièges de l'original (11, cachés) : mêmes noms et attributs.
export const HONEYPOTS = ['website', 'company', 'message', 'subject', 'title', 'description', 'feedback', 'notes', 'details', 'remarks', 'comments'] as const;
