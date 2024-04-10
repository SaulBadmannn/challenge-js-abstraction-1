import { test } from 'node:test';
import { strict as assert } from 'assert';
import {
  make,
  getProtocol,
  getHost,
  getPath,
  setProtocol,
  setHost,
  setPath,
  getQueryParam,
  setQueryParam,
  toString,
} from '../index.js';

test('make', () => {
  const url = make('https://hexlet.io/community?q=low');
  assert.strictEqual(toString(url), 'https://hexlet.io/community?q=low');
});

test('getProtocol', () => {
  const url = make('http://hexlet.io:8080/community?q=low');
  assert.strictEqual(getProtocol(url), 'http:');
});

test('getHost', () => {
  const url = make('http://hexlet.io:8080/community?q=low');
  assert.strictEqual(getHost(url), 'hexlet.io:8080');
});

test('getPath', () => {
  const url = make('http://hexlet.io:8080/community?q=low');
  assert.strictEqual(getPath(url), '/community');
});

test('setProtocol', () => {
  const url = make('http://hexlet.io/community?q=low');
  setProtocol(url, 'https:');
  assert.strictEqual(toString(url), 'https://hexlet.io/community?q=low');
});

test('setHost', () => {
  const url = make('https://hexlet.io/community?q=high');
  setHost(url, 'code-basics.com');
  assert.strictEqual(toString(url), 'https://code-basics.com/community?q=high');
});

test('setPath', () => {
  const url = make('https://hexlet.io/community?q=low');
  setPath(url, '/404');
  assert.strictEqual(toString(url), 'https://hexlet.io/404?q=low');
});

test('getQueryParam', () => {
  const url = make('https://hexlet.io/community?q=low&user=guest');
  assert.strictEqual(getQueryParam(url, 'q'), 'low');
  assert.strictEqual(getQueryParam(url, 'user'), 'guest');
  assert.strictEqual(getQueryParam(url, 'low', 'user'), 'user');
  assert.strictEqual(getQueryParam(url, 'b'), null);
});

test('setQueryParam', () => {
  const url = make('https://hexlet.io/community?q=low&user=guest');
  setQueryParam(url, 'q', 'high');
  assert.strictEqual(toString(url), 'https://hexlet.io/community?q=high&user=guest');

  setQueryParam(url, 'page', 5);
  assert.strictEqual(toString(url), 'https://hexlet.io/community?q=high&user=guest&page=5');
});

test('urlWithEmptyParams', () => {
  const url = make('https://hexlet.io/community');
  assert.strictEqual(toString(url), 'https://hexlet.io/community');
});

test('urlWithEmptyPath', () => {
  const url = make('https://hexlet.io/?q=high&page=5');
  assert.strictEqual(toString(url), 'https://hexlet.io/?q=high&page=5');
});
