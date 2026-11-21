// Le DOM de l'original porte des variables CSS en style en ligne, `corner-shape`, et un attribut `name` sur des div/a.
import 'react';
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
    cornerShape?: string;
  }
  interface HTMLAttributes<T> {
    name?: string;
  }
}
