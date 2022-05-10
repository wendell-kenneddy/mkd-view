import { Button } from '@mantine/core';

interface ExportButtonProps {
  markdown: string;
}

export function ExportButton({ markdown }: ExportButtonProps) {
  function handleExportMarkdown() {
    const date = new Date();
    const fileName = `mkdview-${date.toLocaleDateString(
      'pt-br'
    )}-${date.toLocaleTimeString('pt-br', { hour12: false })}.md`;
    const anchor = document.createElement('a');
    const file = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(file);
    anchor.href = url;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    URL.revokeObjectURL(url);
    anchor.remove();
  }

  return (
    <Button color="orange" onClick={handleExportMarkdown} disabled={!markdown}>
      Export
    </Button>
  );
}
