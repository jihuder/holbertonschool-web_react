const { expect } = require('chai');
import { getFullYear, getLatestNotification, getFooterCopy } from './utils';

describe('Testing utils functions', () => {
  it('Validate correct year', () => {
    expect(getFullYear() === new Date().getFullYear()).to.be.true;
  });

  it('Correct string when is true', () => {
    expect(getFooterCopy(true) === 'Holberton School').to.be.true;
  });

  it('Correct string when is false', () => {
    expect(getFooterCopy(false) === 'Holberton School main dashboard').to.be.true;
  });

  it('Correct string in get latest notification', () => {
    expect(getLatestNotification() === '<strong>Urgent requirement</strong> - complete by EOD').to.be.true;
  });
});
