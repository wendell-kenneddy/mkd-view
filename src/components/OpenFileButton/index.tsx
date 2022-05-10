import { Button } from '@mantine/core';
import { cleanNotifications, showNotification } from '@mantine/notifications';
import { useRef } from 'react';

interface OpenFileButtonProps {
  onFileRead: (text: string) => void;
}

export function OpenFileButton({ onFileRead }: OpenFileButtonProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function showToast() {
    cleanNotifications();
    showNotification({
      title: 'Invalid file type',
      message: 'Only Markdown files (.md) are accepted.',
      color: 'red',
      autoClose: 3000
    });
  }

  function handleOpenFile() {
    inputRef.current && inputRef.current.click();
  }

  function handleReadFile(files: FileList | null) {
    if (!files) return;

    const file = files[0];

    if (file.type !== 'text/markdown') return showToast();

    const reader = new FileReader();
    reader.onload = (e) => onFileRead(String(e.target?.result));
    reader.readAsText(file);
  }

  return (
    <>
      <input
        type="file"
        name="file-input"
        hidden
        ref={inputRef}
        onChange={(e) => handleReadFile(e.target.files)}
      />

      <Button color="orange" my="md" onClick={handleOpenFile}>
        Open File
      </Button>
    </>
  );
}
