type CardProps = {
  title: string;
  category: string;
  detail: string;
};

export function Card({ title, category, detail }: CardProps) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '1em',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        background: '#fff',
        minWidth: '400px',
      }}
    >
      <h2 style={{ margin: '0 0 0.5em 0', fontSize: '1.2em' }}>{title}</h2>
      <span style={{ color: '#888', fontSize: '0.95em' }}>{category}</span>
      <p style={{ margin: '0.7em 0 0 0', fontSize: '1em' }}>{detail}</p>
    </div>
  );
}
