import { Textarea } from '@mantine/core';

interface MarkdownTextAreaProps {
  onChange: (value: string) => void;
  value: string;
}

export function MarkdownTextArea({ onChange, value }: MarkdownTextAreaProps) {
  return (
    <Textarea
      label="Type the markdown here"
      placeholder="# Hello, world!"
      color="orange"
      minRows={15}
      onChange={(e) => onChange(e.currentTarget.value)}
      value={value}
    />
  );
}
