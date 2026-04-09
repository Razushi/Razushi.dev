import fs from 'node:fs';
import path from 'node:path';

const isExternalUrl = (value) => /^(?:[a-z]+:)?\/\//i.test(value ?? '');

const sanitizeUrl = (value) =>
  decodeURIComponent((value ?? '').replace(/[\u200B-\u200D\uFEFF]/gu, '').trim());

const createMissingImageChildren = (url, alt = '') => {
  const label = alt.trim() ? `${alt.trim()} ` : '';

  return [
    { type: 'text', value: `[MISSING IMAGE: ${label}${url}]` },
  ];
};

const replaceMissingImages = (node, resolveFrom) => {
  if (!node || !Array.isArray(node.children)) {
    return;
  }

  node.children = node.children.flatMap((child) => {
    if (child?.type === 'image' && typeof child.url === 'string') {
      const sanitizedUrl = sanitizeUrl(child.url);

      if (!sanitizedUrl || isExternalUrl(sanitizedUrl) || sanitizedUrl.startsWith('/')) {
        return [child];
      }

      const candidatePath = path.resolve(resolveFrom, sanitizedUrl);
      if (fs.existsSync(candidatePath)) {
        return [{ ...child, url: sanitizedUrl }];
      }

      return createMissingImageChildren(sanitizedUrl, child.alt);
    }

    replaceMissingImages(child, resolveFrom);
    return [child];
  });
};

export default function remarkMissingLocalImages() {
  return (tree, file) => {
    if (!tree || !Array.isArray(tree.children)) {
      return;
    }

    const filePath = typeof file?.path === 'string' ? file.path : null;
    if (!filePath) {
      return;
    }

    replaceMissingImages(tree, path.dirname(filePath));
  };
}
