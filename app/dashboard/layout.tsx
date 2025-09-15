import '../globals.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">
        <div className="min-h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
