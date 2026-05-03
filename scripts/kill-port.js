/**
 * Free a TCP port before starting the app (Linux servers / Plesk).
 * Uses `fuser -k PORT/tcp` when available. No-op on Windows.
 *
 * Port: KILL_PORT → PORT (e.g. Plesk sets this) → 3000 (Next.js default).
 */
const { execSync } = require('child_process');
const os = require('os');

const port = process.env.KILL_PORT || process.env.PORT || '3000';

if (os.platform() === 'win32') {
  console.log('kill-port: skipped on Windows (use Task Manager or Stop-Process if needed)');
  process.exit(0);
}

try {
  execSync(`fuser -k ${port}/tcp`, { stdio: 'inherit' });
  console.log(`kill-port: freed TCP ${port}`);
} catch {
  console.log(`kill-port: nothing listening on ${port}, or fuser unavailable`);
}
