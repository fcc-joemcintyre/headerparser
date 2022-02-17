import assert from 'assert';
import fetch from 'node-fetch';
import { processCommand } from '../src/cmd.js';
import { start, stop } from '../src/server.js';

before (async function () {
  await start (3000);
});

after (async function () {
  await stop ();
});

describe ('test server', function () {
  describe ('/', function () {
    it ('should return 200 with home page', async function () {
      const res = await fetch ('http://localhost:3000/');
      if (res.status === 200) {
        const body = await res.text ();
        assert (body.startsWith ('<h1>Request Header Parser Service</h1>'));
      } else {
        assert (false);
      }
    });
  });

  describe ('invalid URL content', function () {
    it ('should return 200 with home page', async function () {
      const res = await fetch ('http://localhost:3000/dummy');
      if (res.status === 200) {
        const body = await res.text ();
        assert (body.startsWith ('<h1>Request Header Parser Service</h1>'));
      } else {
        assert (false);
      }
    });
  });

  describe ('valid request', function () {
    it ('should return JSON object with header information', async function () {
      const res = await fetch ('http://localhost:3000/api/client');
      if (res.status === 200) {
        try {
          const body = await res.json () as { ip: string, os: string };
          assert (typeof (body.ip) === 'string');
          assert (typeof (body.os) === 'string');
        } catch (e) {
          assert (false);
        }
      } else {
        assert (false);
      }
    });
  });
});

describe ('cmd', function () {
  describe ('empty command', function () {
    it ('should not fail', function () {
      const cmd = processCommand ([]);
      assert.deepStrictEqual (cmd, { code: 0, exit: false, port: 3000 });
    });
  });

  describe ('invalid standalone option', function () {
    it ('should fail with code 1', function () {
      const cmd = processCommand (['-j']);
      assert.deepStrictEqual (cmd, { code: 1, exit: true, port: 3000 });
    });
  });

  describe ('invalid settings option', function () {
    it ('should fail with code 1', function () {
      const cmd = processCommand (['-j=foo.js']);
      assert.deepStrictEqual (cmd, { code: 1, exit: true, port: 3000 });
    });
  });

  describe ('proper port command', function () {
    it ('should succeed', function () {
      const cmd = processCommand (['-p=2000']);
      assert.deepStrictEqual (cmd, { code: 0, exit: false, port: 2000 });
    });
  });

  describe ('port out of range (negative)', function () {
    it ('should fail', function () {
      const cmd = processCommand (['-p=-1']);
      assert.deepStrictEqual (cmd, { code: 1, exit: true, port: 0 });
    });
  });

  describe ('port out of range (positive)', function () {
    it ('should fail', function () {
      const cmd = processCommand (['-p=200000']);
      assert.deepStrictEqual (cmd, { code: 1, exit: true, port: 0 });
    });
  });

  describe ('port not an integer', function () {
    it ('should fail', function () {
      const cmd = processCommand (['-p=2000.5']);
      assert.deepStrictEqual (cmd, { code: 1, exit: true, port: 0 });
    });
  });

  describe ('port not a number', function () {
    it ('should fail', function () {
      const cmd = processCommand (['-p=ABC']);
      assert.deepStrictEqual (cmd, { code: 1, exit: true, port: 0 });
    });
  });

  describe ('unary help command', function () {
    it ('should succeed', function () {
      let cmd = processCommand (['-h']);
      assert.deepStrictEqual (cmd, { code: 0, exit: true, port: 3000 });
      cmd = processCommand (['--help']);
      assert.deepStrictEqual (cmd, { code: 0, exit: true, port: 3000 });
    });
  });

  describe ('help in command', function () {
    it ('should succeed', function () {
      let cmd = processCommand (['-p=2000', '-h']);
      assert.deepStrictEqual (cmd, { code: 0, exit: true, port: 2000 });
      cmd = processCommand (['-p=2000', '--help']);
      assert.deepStrictEqual (cmd, { code: 0, exit: true, port: 2000 });
    });
  });
});
