import { PiletApi } from '@arnold/app-shell';

import { NAVIGATION_ROOT } from './constants/navigation-root.const';
import { Page1 } from './pages/Page1';

function buildPath(path: string): string {
  return `/${NAVIGATION_ROOT}/${path}`;
}

export function setup(app: PiletApi): void {
  const page1 = buildPath('page1');

  app.registerSidebar('page-1', {
    title: 'React Template: Page 1',
    icon: 'zui-icon-med-zones',
    href: page1,
  });

  function callback(): void {
    console.log('Callback executed!');
  }

  app.registerPage(page1, () => <Page1 cb={callback} />);
  app.registerExtension('app-shell-homepage-tile', () => <div>Welcome to your Pilet!</div>);
}
