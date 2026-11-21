// Envoi unique des formulaires (D-023) : NEXT_PUBLIC_FORM_ENDPOINT si défini, sinon réussite simulée.
// Aucun appel à api.framer.com.
export type FormState = 'default' | 'incomplete' | 'pending' | 'success' | 'error';

export async function submitForm(formName: string, data: FormData): Promise<boolean> {
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT; // TODO: remplacer — point d'envoi du propriétaire
  if (!endpoint) return true;
  try {
    const res = await fetch(endpoint, { method: 'POST', body: data, headers: { 'x-form-name': formName } });
    return res.ok;
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
