export const themingSections = [
  {
    level: '1. CSS Custom Properties',
    intro: {
      title: 'The Power of Variables',
      body: "Before native CSS Variables existed, developers had to use SASS or LESS pre-processors to maintain color palettes. Now, CSS Custom Properties allow us to store exact values in memory inside the browser. \n\nThey cascade like normal CSS. If you define a variable on `:root`, it is globally available everywhere! If you define it on a `.card`, only the card and its children can see it."
    },
    properties: [
      {
        id: 'var-declaration',
        name: '--variable-name',
        cssProperty: '--primary',
        description: 'You declare a variable by typing two dashes `--` followed by whatever name you want.',
        values: ['#3b82f6', '2rem', '250ms ease'],
        default: '#3b82f6',
        chips: [
          { key: '#3b82f6', meaning: 'Stores a HEX color globally' },
          { key: '2rem', meaning: 'Stores a typography constraint' },
          { key: '250ms ease', meaning: 'Variables can store literally any valid CSS string!' }
        ],
        getCode: (val) => `:root {\n  --brand-color: ${val};\n}`
      },
      {
        id: 'var-usage',
        name: 'var(--name)',
        cssProperty: 'background',
        description: 'You literally inject the stored value into any CSS property by wrapping it in the `var()` function.',
        values: ['var(--brand-color)', 'var(--spacing-md)'],
        default: 'var(--brand-color)',
        chips: [
          { key: 'var(--brand)', meaning: 'Injects the color directly into the background' },
          { key: 'var(--spacing)', meaning: 'Injects the sizing variable into padding/margin' }
        ],
        getCode: (val) => `.button {\n  background: ${val};\n}`
      },
      {
        id: 'var-fallback',
        name: 'Fallback Values',
        cssProperty: 'color',
        description: 'What happens if the variable is missing or misspelled? The browser drops the property. You can provide a safety fallback by adding a comma.',
        values: ['var(--text-color, black)', 'var(--bg, #ffffff)'],
        default: 'var(--text-color, black)',
        chips: [
          { key: '..., black', meaning: 'If --text-color is undefined, default to black' },
          { key: '..., #ffffff', meaning: 'Ensures the background never fails' }
        ],
        getCode: (val) => `.text {\n  color: ${val};\n}`
      }
    ]
  },
  {
    level: '2. The calc() Engine',
    intro: {
      title: 'Dynamic Mathematics',
      body: "CSS is not just a styling language; it's a Turing-complete engine. Using the `calc()` function, you can perform addition, subtraction, multiplication, and division natively in the browser.\n\nEven better, you can multiply hardcoded numbers by your CSS variables to build perfectly scaled, mathematically robust layouts!"
    },
    properties: [
      {
        id: 'calc-basic',
        name: 'calc()',
        cssProperty: 'width',
        description: 'Allows you to mix entirely different units of measurement! You can subtract fixed pixels from fluid percentages.',
        values: ['calc(100% - 40px)', 'calc(50vw + 2rem)'],
        default: 'calc(100% - 40px)',
        chips: [
          { key: '100% - 40px', meaning: 'Calculates full width minus EXACTLY 40px for margins' },
          { key: '50vw + 2rem', meaning: 'Takes half the screen width, plus 2rem' }
        ],
        getCode: (val) => `.sidebar {\n  width: ${val};\n}`
      },
      {
        id: 'calc-vars',
        name: 'calc(var)',
        cssProperty: 'padding',
        description: 'You can multiply a base sizing variable. This is how professional Design Systems build "Spacing Scales".',
        values: ['calc(var(--base-space) * 2)', 'calc(var(--fluid-text) * 1.5)'],
        default: 'calc(var(--base-space) * 2)',
        chips: [
          { key: '* 2', meaning: 'Doubles the defined base spacing unit' },
          { key: '* 1.5', meaning: 'Calculates a perfect typography hierarchy' }
        ],
        getCode: (val) => `.card {\n  padding: ${val};\n}`
      }
    ]
  }
];

export const themingPatterns = [];
