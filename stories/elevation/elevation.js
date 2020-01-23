import { storiesOf } from '@storybook/html';

import '../../packages/button/button.scss';
import '../../packages/elevation/elevation.scss';

storiesOf('Elevation', module)
  .add('Contained Button (2dp to 8dp)', () => `
    <button class="mca-button--contained">
      <span class="mca-button__label">BUTTON</span>
    </button>
  `);
