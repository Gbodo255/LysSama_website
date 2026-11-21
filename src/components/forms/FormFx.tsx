'use client';
// Formulaire Framer généré (D-023) : validation native, état Incomplete/Default selon la validité, envoi par submitForm()
// (jamais vers Framer), états Loading/Success/Error. Diffuse l'état au bouton (contexte) et au composant englobant
// (événement `framer-form-state`, cf. VRoot `events`) : onLoading, onSuccess, onError du code compilé.
import { createContext, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { isIncomplete, submitForm, type FormState } from '@/lib/forms';
import { FormButton } from './FormButton';
import { VEl } from '@/components/fx/Variant';

const FCtx = createContext<FormState>('incomplete');

/** `vel` : le formulaire porte des styles par variante du composant englobant (ex. flou pendant l'envoi) → rendu par VEl. */
export function FormFx({ kind, vel, base, variants, children, ...rest }: { kind: string; vel?: boolean; base?: Record<string, unknown>; variants?: Record<string, Record<string, unknown>>; children: ReactNode } & Record<string, unknown>) {
  const ref = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>('incomplete');
  const emit = (s: string) => ref.current?.dispatchEvent(new CustomEvent('framer-form-state', { bubbles: true, detail: s }));
  const refresh = () => setState((s) => (s === 'pending' || s === 'success' ? s : isIncomplete(ref.current) ? 'incomplete' : 'default'));
  useEffect(refresh, []);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === 'pending') return;
    setState('pending'); emit('loading');
    const ok = await submitForm(kind, new FormData(e.currentTarget));
    setState(ok ? 'success' : 'error'); emit(ok ? 'success' : 'error');
  };
  const p = { ...rest, ref, onSubmit, onInput: refresh, onChange: refresh };
  return <FCtx.Provider value={state}>{vel && base && variants ? <VEl as="form" base={base} variants={variants} {...p}>{children}</VEl> : <form {...p}>{children}</form>}</FCtx.Provider>;
}

export function FormButtonFx(props: { label: string; textColor: string; color: string; name?: string; style?: Record<string, string> }) {
  return <FormButton state={useContext(FCtx)} {...props} />;
}
