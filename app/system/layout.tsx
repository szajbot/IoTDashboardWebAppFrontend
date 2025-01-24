export default function SystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full h-full">
      <div className="mt-4 mx-8">
        {children}
      </div>
    </section>
  );
}
