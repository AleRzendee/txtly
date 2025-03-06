export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Txtly - Editor de Texto Online</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
