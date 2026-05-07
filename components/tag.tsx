import { getTagColor } from '@/lib/tag-colors';

interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  const color = getTagColor(label);

  return (
    <span
      style={{
        background: color,
        color: '#0a0a0a',
        border: '1px solid #0a0a0a',
        padding: '4px 6px',
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        display: 'inline-block',
      }}
    >
      {label}
    </span>
  );
}
