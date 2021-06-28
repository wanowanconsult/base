import * as React from 'react';
import {Row} from './row';
import {Grid} from '@wanowanconsult/base.surfaces.grid';
import {CSSProperties} from 'react';

const css: CSSProperties = {
    backgroundColor: 'rgba(255, 0, 0, 0.05)',
    padding: '2rem',
    margin: '1rem 0',
    border: 'solid 1px rgba(255,0,0,0.5)'
};

export const BasicRow = () => (
  <Grid>
      <Row ds={1} de={3} ms={1} me={6} ss={1} se={6}>
          <div style={css}>
              Row from 1 to 3
          </div>
      </Row>

      <Row ds={4} de={12} ms={1} me={6} ss={1} se={6}>
          <div style={css}>
              Row from 4 to 12
          </div>
      </Row>
  </Grid>
);
