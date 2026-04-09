const isExternalUrl = (value) => /^https?:\/\//i.test(value ?? '');

const extractText = (node) => {
  if (!node || typeof node !== 'object') {
    return '';
  }

  if ('value' in node && typeof node.value === 'string') {
    return node.value;
  }

  if (!('children' in node) || !Array.isArray(node.children)) {
    return '';
  }

  return node.children.map((child) => extractText(child)).join('');
};

const createCitationBacklink = (number) => ({
  type: 'html',
  value: `<a class="appendix-backlink" href="#appendix-ref-${number}" aria-label="Back to reference ${number}"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/></svg></a>`,
});

export default function remarkExternalCitations() {
  return (tree) => {
    if (!tree || !Array.isArray(tree.children)) {
      return;
    }

    const citations = [];
    const citationNumbersByUrl = new Map();

    const visit = (node) => {
      if (!node || !Array.isArray(node.children)) {
        return;
      }

      node.children = node.children.flatMap((child) => {
        if (child.type === 'link' && isExternalUrl(child.url)) {
          const label = extractText(child).trim();
          const hasCustomText = label && label !== child.url;

          let number = citationNumbersByUrl.get(child.url);

          if (!number) {
            number = citations.length + 1;
            citations.push({
              number,
              url: child.url,
              label,
              title: typeof child.title === 'string' ? child.title.trim() : '',
            });
            citationNumbersByUrl.set(child.url, number);
          }

          const citationSup = {
            type: 'html',
            value: `<sup class="citation-ref"><a href="#appendix-note-${number}" id="appendix-ref-${number}" aria-label="Reference ${number}">${number}</a></sup>`,
          };

          // Named links: keep the text visible and append the superscript.
          // Raw URLs are replaced entirely with just the superscript.
          if (hasCustomText) {
            return [
              {
                type: 'html',
                value: `<a href="${child.url}">${label}</a><sup class="citation-ref"><a href="#appendix-note-${number}" id="appendix-ref-${number}" aria-label="Reference ${number}">${number}</a></sup>`,
              },
            ];
          }

          return [citationSup];
        }

        visit(child);
        return [child];
      });
    };

    visit(tree);

    if (citations.length === 0) {
      return;
    }

    tree.children.push(
      {
        type: 'heading',
        depth: 2,
        children: [{ type: 'text', value: 'Footnotes' }],
      },
      {
        type: 'list',
        ordered: true,
        spread: true,
        children: citations.map((citation) => ({
          type: 'listItem',
          spread: false,
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'html',
                  value: `<span id="appendix-note-${citation.number}"></span>`,
                },
                {
                  type: 'link',
                  url: citation.url,
                  children: [{ type: 'text', value: citation.url }],
                },
                { type: 'text', value: ' ' },
                createCitationBacklink(citation.number),
              ],
            },
          ],
        })),
      },
    );
  };
}
