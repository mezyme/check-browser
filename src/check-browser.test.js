/**
 * Created by zhaoyue on 2017/9/4 下午8:08
 */
import { isSafari, isChrome } from './check-browser';

const safariAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.1.2 Safari/603.3.8';
const chromeAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36';

test('isSafari', () => {
  expect(isSafari(safariAgent)).toBe('true');
});

test('isSafari', () => {
  expect(isSafari(chromeAgent)).toBe('false');
});

test('isChrome', () => {
  expect(isChrome(safariAgent)).toBe('false');
});

test('isChrome', () => {
  expect(isChrome(chromeAgent)).toBe('true');
});
