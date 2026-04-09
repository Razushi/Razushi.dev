/**
 * Recolors simple shell commands inside Nix multiline strings so shellHook
 * snippets read closer to editor highlighting.
 *
 * @type {import('shiki').ShikiTransformer}
 */
const nixShellHookTransformer = {
  name: 'nix-shellhook-transformer',
  tokens(tokens) {
    if (this.options.lang === 'nix') {
      const commandColor = '#efe669';

      return tokens.map((line) => {
        if (line.length !== 1) {
          return line;
        }

        const [token] = line;

        if (token.color?.toLowerCase() !== '#7cc55c') {
          return line;
        }

        const match = token.content.match(/^(\s*)(echo)(\b.*)$/);

        if (!match) {
          return line;
        }

        const [, leadingWhitespace, command, trailingContent] = match;
        let offset = token.offset;
        const nextLine = [];

        if (leadingWhitespace) {
          nextLine.push({
            ...token,
            content: leadingWhitespace,
            offset,
          });
          offset += leadingWhitespace.length;
        }

        nextLine.push({
          ...token,
          content: command,
          color: commandColor,
          offset,
        });
        offset += command.length;

        if (trailingContent) {
          nextLine.push({
            ...token,
            content: trailingContent,
            offset,
          });
        }

        return nextLine;
      });
    }

    if (this.options.lang !== 'c') {
      return;
    }

    const identifierColor = '#ed5658';
    const identifierPattern = /([A-Za-z_][A-Za-z0-9_]*)/g;

    return tokens.map((line) =>
      line.flatMap((token) => {
        if (token.color?.toLowerCase() !== '#abb2bf') {
          return [token];
        }

        if (!identifierPattern.test(token.content)) {
          identifierPattern.lastIndex = 0;
          return [token];
        }

        identifierPattern.lastIndex = 0;

        const parts = [];
        let offset = token.offset;
        let lastIndex = 0;

        for (const match of token.content.matchAll(identifierPattern)) {
          const [identifier] = match;
          const start = match.index ?? 0;

          if (start > lastIndex) {
            const content = token.content.slice(lastIndex, start);
            parts.push({
              ...token,
              content,
              offset,
            });
            offset += content.length;
          }

          parts.push({
            ...token,
            content: identifier,
            color: identifierColor,
            offset,
          });
          offset += identifier.length;
          lastIndex = start + identifier.length;
        }

        if (lastIndex < token.content.length) {
          parts.push({
            ...token,
            content: token.content.slice(lastIndex),
            offset,
          });
        }

        return parts;
      }),
    );
  },
};

export default nixShellHookTransformer;
