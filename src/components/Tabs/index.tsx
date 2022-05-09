import { Group, Tabs as MantineTabs } from '@mantine/core';
import { useState } from 'react';
import { MarkdownTextArea } from '../MarkdownTextArea';
import ReactMarkdown from 'react-markdown';
import RemarkGFM from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { OpenFileButton } from '../OpenFileButton';
import { ExportButton } from '../ExportButton';

export function Tabs() {
  const [markdown, setMarkdown] = useState('');

  return (
    <>
      <MantineTabs color="orange" grow>
        <MantineTabs.Tab label="Markdown">
          <MarkdownTextArea
            onChange={(value) => setMarkdown(value)}
            value={markdown}
          />
        </MantineTabs.Tab>

        <MantineTabs.Tab label="Preview">
          <ReactMarkdown
            remarkPlugins={[RemarkGFM]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={materialOceanic}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {markdown}
          </ReactMarkdown>
        </MantineTabs.Tab>
      </MantineTabs>

      <Group>
        <OpenFileButton onFileRead={(text) => setMarkdown(text)} />
        <ExportButton markdown={markdown} />
      </Group>
    </>
  );
}
