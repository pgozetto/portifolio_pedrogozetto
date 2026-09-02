import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Pedro Gozetto — Agência Digital', description: 'Portfólio de Pedro Gozetto, agência digital que cria experiências para marcas com ambição.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
