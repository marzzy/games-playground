/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import { configure } from '@testing-library/dom';

configure({
  testIdAttribute: 'data-test',
});
