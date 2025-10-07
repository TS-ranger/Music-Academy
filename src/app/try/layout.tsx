

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h2 className="text-2xl font-bold text-center">Inner Layout Item</h2>
        {children}
    </>
    
  );
}
