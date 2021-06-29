import * as React from 'react';
import {Row} from './row';
import {Grid} from '@wanowanconsult/base.surfaces.grid';
import {CSSProperties} from 'react';

const gridStyle: CSSProperties = {
    padding: '1rem 0',
    border: 'solid 1px rgba(255,0,0,0.5)'
};

const rowStyle: CSSProperties = {
    backgroundColor: 'rgba(255, 0, 0, 0.05)',
    padding: '2rem',
    border: 'solid 1px rgba(255,0,0,0.2)'
};

export const BasicRow = () => (
  <Grid style={gridStyle}>
      <Row ds={1} de={3} ms={1} me={3} ss={1} se={4}>
          <div style={rowStyle}>
              Row from 1 to 3
          </div>
      </Row>

      <Row ds={4} de={12} ms={4} me={6} ss={1} se={4}>
          <div style={rowStyle}>
              Row from 4 to 12
          </div>
      </Row>

      <Row ds={1} de={4} ms={1} me={3} ss={1} se={4}>
          <div style={rowStyle}>
              Row from 1 to 4
          </div>
      </Row>

      <Row ds={5} de={8} ms={4} me={6} ss={1} se={4}>
          <div style={rowStyle}>
              Row from 5 to 8
          </div>
      </Row>

      <Row ds={9} de={12} ms={4} me={6} ss={1} se={4}>
          <div style={rowStyle}>
              Row from 9 to 12
          </div>
      </Row>
  </Grid>
);
