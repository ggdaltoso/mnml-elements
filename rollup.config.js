import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const outFolder = 'lib';

function onwarn(warning) {
  if (warning.code === 'THIS_IS_UNDEFINED') return;
  console.error(warning.message);
}

export default [
  {
    input: [
      'src/mnml-elements.js',
      'src/mnml-avatar/mnml-avatar.js',
      'src/mnml-badge/mnml-badge.js',
      'src/mnml-button/mnml-button.js',
      'src/mnml-card/mnml-card.js',
      'src/mnml-card-actions/mnml-card-actions.js',
      'src/mnml-card-content/mnml-card-content.js',
      'src/mnml-card-image/mnml-card-image.js',
      'src/mnml-card-title/mnml-card-title.js',
      'src/mnml-chip/mnml-chip.js',
      'src/mnml-dialog/mnml-dialog.js',
      'src/mnml-dialog-actions/mnml-dialog-actions.js',
      'src/mnml-dialog-content/mnml-dialog-content.js',
      'src/mnml-dialog-title/mnml-dialog-title.js',
      'src/mnml-divider/mnml-divider.js',
      'src/mnml-list/mnml-list.js',
      'src/mnml-list-item/mnml-list-item.js',
      'src/mnml-list-item-text/mnml-list-item-text.js',
      'src/mnml-masonry/mnml-masonry.js',
    ],
    output: {
      dir: outFolder,
      format: 'es',
    },
    onwarn,
    plugins: [resolve(), terser()],
  },
];
