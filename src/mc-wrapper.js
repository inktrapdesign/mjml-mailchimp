import { suffixCssClasses } from 'mjml-core';
import { flow, identity, join, filter } from 'lodash/fp';

import MjWrapper from 'mjml-wrapper';
import { registerDependencies } from 'mjml-validator';

registerDependencies({
  'mj-body': ['mc-wrapper'],
  'mc-wrapper': ['mj-section', 'mc-section', 'mj-group', 'mj-raw'],
});

export default class McWrapper extends MjWrapper {
  static componentName = 'mc-wrapper';

  static allowedAttributes = {
    ...MjWrapper.allowedAttributes,
    'mc:hideable': 'string',
    'mc:repeatable': 'string',
    'mc:variant': 'string',
    'mc:edit': 'string',
  };

  static defaultAttributes = {
    ...MjWrapper.defaultAttributes,
    'mc:hideable': false,
  };

  renderWrappedChildren() {
    const { children } = this.props;
    const { containerWidth } = this.context;

    return `
      ${this.renderChildren(children, {
        renderer: (component) =>
          component.constructor.isRawElement()
            ? component.render()
            : `
            <!--[if mso | IE]>
              <tr>
                <td
             
              ${component.htmlAttributes({
                align: component.getAttribute('align'),
                class: suffixCssClasses(
                  component.getAttribute('css-class'),
                  'outlook'
                ),
                width: containerWidth
              })}
            >
          <![endif]-->
            ${component.render()}
          <!--[if mso | IE]>
            </td>
            </tr>
          <![endif]-->
        `,
      })}
    `;
  }
}
