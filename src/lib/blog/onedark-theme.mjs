// Incandescent — Vestige syntax theme
// Colors mirror the --semantic-* series from tokens.css
// Font styles reflect nvim onedarkpro config: comments italic, keywords bold italic, functions italic
//
// Color reference (keep in sync with tokens.css):
//   comment:  #7f848e  --code-comment
//   keyword:  #b58af7  --semantic-purple
//   operator: #93e3e3  --semantic-cyan
//   string:   #7cc55c  --semantic-green
//   number:   #f4af66  --semantic-orange
//   function: #369ef8  --semantic-blue
//   type:     #efe669  --semantic-yellow
//   property: #ed5658  --semantic-red
//   fg:       #abb2bf  --code-text
//   invalid:  #ed5658  --accent-danger

/** @type {import('shiki').ThemeRegistrationRaw} */
export default {
  name: 'incandescent',
  type: 'dark',
  colors: {
    'editor.background': '#181818',
    'editor.foreground': '#abb2bf',
  },
  tokenColors: [
    // Comments — italic
    {
      scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
      settings: { foreground: '#7f848e', fontStyle: 'italic' },
    },

    // Keywords — bold italic
    {
      scope: [
        'keyword.control',
        'keyword.control.flow',
        'keyword.control.import',
        'keyword.control.from',
        'keyword.control.export',
        'keyword.control.default',
        'keyword.control.as',
        'keyword.control.conditional',
        'keyword.control.loop',
        'keyword.declaration',
        'keyword.other',
        'storage',
        'storage.modifier',
      ],
      settings: { foreground: '#b58af7', fontStyle: 'bold italic' },
    },

    // Storage types — keyword color, upright
    {
      scope: [
        'storage.type',
        'storage.type.built-in',
        'storage.type.built-in.primitive',
        'storage.type.built-in.primitive.c',
        'storage.type.built-in.c',
      ],
      settings: { foreground: '#b58af7', fontStyle: '' },
    },

    // Word operators (typeof, instanceof, etc.) — keyword color, upright
    {
      scope: [
        'keyword.operator.word',
        'keyword.operator.new',
        'keyword.operator.typeof',
        'keyword.operator.instanceof',
        'keyword.operator.void',
        'keyword.operator.delete',
        'keyword.operator.in',
        'keyword.operator.of',
        'keyword.operator.expression.import',
        'keyword.operator.expression.is',
      ],
      settings: { foreground: '#b58af7' },
    },

    // Operators — cyan
    {
      scope: [
        'keyword.operator',
        'keyword.operator.arithmetic',
        'keyword.operator.assignment',
        'keyword.operator.assignment.compound',
        'keyword.operator.comparison',
        'keyword.operator.logical',
        'keyword.operator.bitwise',
        'keyword.operator.relational',
        'keyword.operator.spread',
        'keyword.operator.rest',
        'keyword.operator.optional',
        'keyword.operator.bind.nix',
        'keyword.operator.nix',
      ],
      settings: { foreground: '#93e3e3' },
    },

    // Strings — green
    {
      scope: [
        'string',
        'string.quoted',
        'string.quoted.single',
        'string.quoted.double',
        'string.quoted.backtick',
        'string.template',
        'string.interpolated',
      ],
      settings: { foreground: '#7cc55c' },
    },

    // String escape sequences — operator color
    {
      scope: ['constant.character.escape', 'constant.other.placeholder'],
      settings: { foreground: '#93e3e3' },
    },

    // Template literal / interpolation punctuation — keyword color
    {
      scope: ['punctuation.definition.template-expression', 'punctuation.section.embedded'],
      settings: { foreground: '#b58af7' },
    },

    // Regex — operator color
    {
      scope: ['string.regexp', 'constant.regexp', 'keyword.operator.quantifier.regexp'],
      settings: { foreground: '#93e3e3' },
    },

    // Numbers — orange
    {
      scope: [
        'constant.numeric',
        'constant.numeric.integer',
        'constant.numeric.float',
        'constant.numeric.hex',
        'constant.numeric.octal',
        'constant.numeric.binary',
      ],
      settings: { foreground: '#f4af66' },
    },

    // Language constants (true, false, null, undefined...) — orange
    {
      scope: [
        'constant.language',
        'constant.language.boolean',
        'constant.language.null',
        'constant.language.undefined',
        'constant.language.none',
        'constant.language.nan',
      ],
      settings: { foreground: '#f4af66' },
    },

    // Enum / other constants — orange
    {
      scope: ['variable.other.constant', 'variable.other.enummember'],
      settings: { foreground: '#f4af66' },
    },

    // Functions — blue, italic
    {
      scope: [
        'entity.name.function',
        'entity.name.function.member',
        'support.function',
        'support.function.builtin',
        'variable.function',
        'meta.function-call entity.name.function',
        'meta.method-call entity.name.function',
        'entity.name.function.member.c',
        'meta.function-call.generic.python',
      ],
      settings: { foreground: '#369ef8', fontStyle: 'italic' },
    },

    // Types / Classes / Interfaces — yellow
    {
      scope: [
        'entity.name.type',
        'entity.name.class',
        'entity.name.type.class',
        'entity.name.type.interface',
        'entity.name.type.enum',
        'entity.name.type.alias',
        'support.type',
        'support.class',
        'support.type.primitive',
        'support.type.builtin',
      ],
      settings: { foreground: '#efe669' },
    },

    // Decorators — type color
    {
      scope: ['entity.name.function.decorator', 'punctuation.decorator', 'meta.decorator'],
      settings: { foreground: '#efe669' },
    },

    // Variables — red
    {
      scope: [
        'variable',
        'variable.other',
        'variable.other.readwrite',
        'variable.other.readwrite.c',
        'variable.other.readwrite.cpp',
        'variable.parameter.name.nix',
      ],
      settings: { foreground: '#ed5658' },
    },

    // Object-ish variables — neutral fg
    {
      scope: ['variable.other.object'],
      settings: { foreground: '#abb2bf' },
    },

    // Parameters — red
    {
      scope: ['variable.parameter', 'variable.parameter.function'],
      settings: { foreground: '#ed5658' },
    },

    // C variables — red
    {
      scope: [
        'variable.other.c',
        'variable.other.member.c',
        'variable.parameter.c',
        'variable.parameter.probably.c',
      ],
      settings: { foreground: '#ed5658' },
    },

    // this / self / super — red
    {
      scope: ['variable.language.this', 'variable.language.self', 'variable.language.super'],
      settings: { foreground: '#ed5658' },
    },

    // Object properties / Nix attribute keys — red
    {
      scope: [
        'variable.other.property',
        'variable.other.object.property',
        'support.type.property-name',
        'meta.object-literal.key',
        'entity.other.attribute-name.single.nix',
        'entity.other.attribute-name.multipart.nix',
      ],
      settings: { foreground: '#ed5658' },
    },

    // HTML/JSX tags — red
    {
      scope: ['entity.name.tag', 'meta.tag.sgml'],
      settings: { foreground: '#ed5658' },
    },

    // HTML/JSX attributes + Nix attribute keys — red
    {
      scope: ['entity.other.attribute-name'],
      settings: { foreground: '#ed5658' },
    },

    // CSS property names — red
    {
      scope: ['support.type.property-name.css', 'meta.property-name'],
      settings: { foreground: '#ed5658' },
    },

    // CSS values / units — orange
    {
      scope: [
        'support.constant.property-value',
        'meta.property-value',
        'constant.other.color',
        'keyword.other.unit',
      ],
      settings: { foreground: '#f4af66' },
    },

    // CSS selectors — type color
    {
      scope: ['entity.other.attribute-name.class.css', 'entity.other.attribute-name.id.css'],
      settings: { foreground: '#efe669' },
    },

    // Namespaces / Modules — type color
    {
      scope: ['entity.name.namespace', 'entity.name.module', 'support.module'],
      settings: { foreground: '#efe669' },
    },

    // Punctuation — neutral fg
    {
      scope: [
        'punctuation',
        'punctuation.definition',
        'punctuation.separator',
        'punctuation.terminator',
        'punctuation.accessor',
        'punctuation.definition.block',
        'punctuation.definition.parameters',
        'punctuation.section',
      ],
      settings: { foreground: '#abb2bf' },
    },

    // Invalid
    {
      scope: ['invalid', 'invalid.illegal'],
      settings: { foreground: '#ed5658' },
    },

    // Markup headings — function color, bold
    {
      scope: ['markup.heading', 'entity.name.section'],
      settings: { foreground: '#369ef8', fontStyle: 'bold' },
    },

    // Markup bold
    {
      scope: ['markup.bold'],
      settings: { foreground: '#efe669', fontStyle: 'bold' },
    },

    // Markup italic
    {
      scope: ['markup.italic'],
      settings: { foreground: '#abb2bf', fontStyle: 'italic' },
    },

    // Markup inline code — orange
    {
      scope: ['markup.inline.raw'],
      settings: { foreground: '#f4af66' },
    },
  ],
};
