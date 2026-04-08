export const selectorsSections = [
  {
    level: '1. Relational Selectors',
    intro: {
      title: 'Targeting Relationships',
      body: "Often you need to select an element not by its class, but based on where it lives inside the DOM tree. Relational CSS selectors allow you to target children, siblings, and exact descendants without having to pollute your HTML with millions of classes."
    },
    properties: [
      {
        id: 'descendant-selector',
        name: 'Descendant (Space)',
        cssProperty: 'color',
        description: 'Targets ALL matching elements nestled anywhere inside the parent wrapper, regardless of how deep they are nested.',
        values: ['.card p', '.nav a'],
        default: '.card p',
        chips: [
          { key: '.card p', meaning: 'Targets every single <p> inside the .card' },
          { key: '.nav a', meaning: 'Targets every link inside the navigation' }
        ],
        getCode: (val) => `${val} {\n  color: #c084fc;\n}`
      },
      {
        id: 'child-selector',
        name: 'Direct Child (>)',
        cssProperty: 'background',
        description: 'Strict targeting. Only affects elements that are the EXACT direct children of the parent. Ignores grandchildren elements.',
        values: ['.list > li', '.grid > div'],
        default: '.list > li',
        chips: [
          { key: '> li', meaning: 'Only the top-level list items' },
          { key: '> div', meaning: 'Only the direct children of the grid wrapper' }
        ],
        getCode: (val) => `${val} {\n  background: rgba(255,255,255,0.1);\n}`
      },
      {
        id: 'sibling-selector',
        name: 'Adjacent Sibling (+)',
        cssProperty: 'margin-top',
        description: 'Targets an element ONLY if it is immediately adjacent to the previous element at the exact same DOM level.',
        values: ['h2 + p', '.btn + .btn'],
        default: 'h2 + p',
        chips: [
          { key: 'h2 + p', meaning: 'Targets only the first paragraph directly following an H2' },
          { key: '.btn + .btn', meaning: 'Adds margin between sibling buttons' }
        ],
        getCode: (val) => `${val} {\n  margin-top: 16px;\n}`
      }
    ]
  },
  {
    level: '2. Pseudo-classes',
    intro: {
      title: 'State and Indexing',
      body: "Pseudo-classes act like dynamic JavaScript event listeners attached natively into CSS. They trigger styling based on user interaction (state) or the mathematical position of an element in an array (indexing)."
    },
    properties: [
      {
        id: 'state-pseudo',
        name: ':hover, :focus, :active',
        cssProperty: 'transform',
        description: 'Dynamically responds to user engagement. :hover triggers when the mouse is over. :focus triggers when keyboard tabbed into.',
        values: ['.btn:hover', 'input:focus'],
        default: '.btn:hover',
        chips: [
          { key: ':hover', meaning: 'Mouse pointer is above the element' },
          { key: ':focus', meaning: 'Input is actively selected' }
        ],
        getCode: (val) => `${val} {\n  transform: scale(1.05);\n}`
      },
      {
        id: 'nth-child',
        name: ':nth-child(n)',
        cssProperty: 'background',
        description: 'The master mathematical selector. Targets elements based on their exact index or a repeating pattern. (e.g. Zebra-striping a table).',
        values: ['li:nth-child(3)', 'div:nth-child(even)', 'tr:nth-child(3n+1)'],
        default: 'li:nth-child(3)',
        chips: [
          { key: '(3)', meaning: 'Targets exactly the 3rd child' },
          { key: '(even)', meaning: 'Targets the 2nd, 4th, 6th... elements' },
          { key: '(3n+1)', meaning: 'A complex recurring mathematical sequence' }
        ],
        getCode: (val) => `${val} {\n  background: #3ecfff;\n}`
      },
      {
        id: 'edge-pseudo',
        name: ':first-child, :last-child',
        cssProperty: 'border-radius',
        description: 'The fastest way to target the boundary items in a list without writing custom classes.',
        values: ['li:first-child', 'li:last-child'],
        default: 'li:first-child',
        chips: [
          { key: ':first-child', meaning: 'The absolute first element in the parent array' },
          { key: ':last-child', meaning: 'The absolute last element in the parent array' }
        ],
        getCode: (val) => `${val} {\n  border-top-left-radius: 8px;\n}`
      }
    ]
  },
  {
    level: '3. Pseudo-elements',
    intro: {
      title: 'Ghost HTML',
      body: "Pseudo-elements allow you to literally inject graphical HTML into the DOM strictly via CSS. Using `::before` and `::after`, you can spawn visual \"ghost\" elements for decorative shapes, icons, and tooltips without touching the actual React/HTML file."
    },
    properties: [
      {
        id: 'before-after',
        name: '::before / ::after',
        cssProperty: 'content',
        description: 'Spawns a fake element. You MUST include the `content: ""` property, or the browser will refuse to render the ghost element!',
        values: ['.card::before', '.tooltip::after'],
        default: '.card::before',
        chips: [
          { key: '::before', meaning: 'Spawns the element visually right BEFORE the content' },
          { key: '::after', meaning: 'Spawns the element visually right AFTER the content' }
        ],
        getCode: (val) => `${val} {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(red, blue);\n}`
      }
    ]
  }
];

export const selectorsPatterns = [];
