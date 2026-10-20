export default function ClientNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="client-note">
      <span>Voor FloriZand — nog in te vullen</span>
      {children}
    </p>
  );
}
