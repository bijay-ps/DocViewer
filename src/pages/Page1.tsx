import { ZuiButton } from '@zeiss/zui-react';
import type { FC } from 'react';

import GlobalStyle from '../styles';

export const Page1: FC<{ cb?: () => void }> = ({ cb }) => {
  function clickMe(): void {
    if (cb) {
      cb();
    }
  }

  return (
    <>
      <GlobalStyle />
      {/*<iframe src="https://mozilla.github.io/pdf.js/web/viewer.html?file=https://api.slingacademy.com/v1/sample-data/files/just-text.pdf" width="1920" height="830" />*/}
      <iframe src="https://mozilla.github.io/pdf.js/web/viewer.html?file=https://mystrgacc23.blob.core.windows.net/mycontainer/Wick_John_19931001_20210901_1229_PDF_OS_urn_oid_1.2.276.0.75.2.5.80.25.3.210901123311149.123926587919512.4158555.pdf?sp=r&st=2024-05-30T04:48:25Z&se=2025-05-30T12:48:25Z&spr=https&sv=2022-11-02&sr=b&sig=teGcLnrIcgTjJlm3gaAAAbA8MVmIj8BJVmI0h1wPp1A%3D" width="1920" height="830" />
      {/*<iframe src="http://localhost:8888/web/viewer.html?file=compressed.tracemonkey-pldi-09.pdf" width="1920" height="830" />*/}
    </>
  );
};
