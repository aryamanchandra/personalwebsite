// components/CodeSnippet.tsx
import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Paper, Typography, makeStyles } from '@mui/material';

interface CodeSnippetProps {
  code: string;
  language?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = 'tsx' }) => {

  return (
    <Paper elevation={3} sx={{ background: "#1c1c1c" }}>
      <Typography variant="body2" color="textSecondary">
        Language: {language}
      </Typography>
      <SyntaxHighlighter language={language} style={docco}>
        {code}
      </SyntaxHighlighter>
    </Paper>
  );
};

export default CodeSnippet;
