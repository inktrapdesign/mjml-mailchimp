import { min } from 'lodash';
import widthParser from 'mjml-core/lib/helpers/widthParser';
import MjImage from 'mjml-image';
import { registerDependencies } from 'mjml-validator';

registerDependencies({
  'mj-column': ['mc-image'],
  'mj-hero': ['mc-image'],
  'mc-image': [],
});

export default class McImage extends MjImage {
  static componentName = 'mc-image';

  static allowedAttributes = {
    ...MjImage.allowedAttributes,
    'mc:edit': 'string',
    'mc:hideable': 'string',
    'full-width': 'string',
  };

  static defaultAttributes = {
    ...MjImage.defaultAttributes,
    'mc:hideable': false,
    'full-width': false,
  };

  getStyles() {
    const width = this.getContentWidth();
    const fullWidth = this.getAttribute('full-width') === 'full-width';

    const { parsedWidth, unit } = widthParser(width);

    return {
      img: {
        border: this.getAttribute('border'),
        'border-left': this.getAttribute('border-left'),
        'border-right': this.getAttribute('border-right'),
        'border-top': this.getAttribute('border-top'),
        'border-bottom': this.getAttribute('border-bottom'),
        'border-radius': this.getAttribute('border-radius'),
        display: 'block',
        outline: 'none',
        'text-decoration': 'none',
        height: this.getAttribute('height'),
        'max-height': this.getAttribute('max-height'),
        'min-width': fullWidth ? '100%' : null,
        width: `${parsedWidth}${unit}`,
        'max-width': fullWidth ? '100%' : null,
        'font-size': this.getAttribute('font-size'),
      },
      td: {
        width: `${parsedWidth}${unit}`,
      },
      table: {
        'min-width': fullWidth ? '100%' : null,
        'max-width': fullWidth ? '100%' : null,
        width: `${parsedWidth}${unit}`,
        'border-collapse': 'collapse',
        'border-spacing': '0px',
      },
    };
  }

  getContentWidth() {
    const width = this.getAttribute('width')
      ? parseInt(this.getAttribute('width'), 10)
      : Infinity;

    const { box } = this.getBoxWidths();

    return min([box, width]);
  }

  renderImage() {
    const height = this.getAttribute('height');

    const img = `
      <img
        ${this.htmlAttributes({
          alt: this.getAttribute('alt'),
          height: height && (height === 'auto' ? height : parseInt(height, 10)),
          src: this.getAttribute('src'),
          srcset: this.getAttribute('srcset'),
          sizes: this.getAttribute('sizes'),
          style: 'img',
          title: this.getAttribute('title'),
          width: this.getContentWidth(),
          usemap: this.getAttribute('usemap'),
          'mc:edit': this.getAttribute('mc:edit'),
          'mc:hideable': this.getAttribute('mc:hideable')
            ? 'mc:hideable'
            : null,
        })}
      />
    `;

    if (this.getAttribute('href')) {
      return `
        <a
          ${this.htmlAttributes({
            href: this.getAttribute('href'),
            target: this.getAttribute('target'),
            rel: this.getAttribute('rel'),
            name: this.getAttribute('name'),
            title: this.getAttribute('title'),
          })}
        >
          ${img}
        </a>
      `;
    }

    return img;
  }

  headStyle = (breakpoint) => `
    @media only screen and (max-width:${breakpoint}) {
      table.mj-full-width-mobile { width: 100% !important; }
      td.mj-full-width-mobile { width: auto !important; }
    }
  `;

  render() {
    return `
      <table
        ${this.htmlAttributes({
          border: '0',
          cellpadding: '0',
          cellspacing: '0',
          role: 'presentation',
          style: 'table',
          class: this.getAttribute('fluid-on-mobile')
            ? 'mj-full-width-mobile'
            : null,
        })}
      >
        <tbody>
          <tr>
            <td ${this.htmlAttributes({
              style: 'td',
              class: this.getAttribute('fluid-on-mobile')
                ? 'mj-full-width-mobile'
                : null,
            })}>
              ${this.renderImage()}
            </td>
          </tr>
        </tbody>
      </table>
    `;
  }
}
