import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Orbe Studio — Sites que ficam na memória', description: 'Portfólio de uma agência digital independente que cria experiências para marcas com ambição.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
