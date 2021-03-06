import * as dotenv from 'dotenv';
import * as http from 'http';
import App from './app';
import { Environment } from './utils/environment';

dotenv.config();
const port = normalizePort(Environment.port || 3000);
App.set('port', port);

const server = http.createServer(App);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val: number | string): number | string | boolean {
  const normalizedPort: number = (typeof val === 'string') ? parseInt(val, 10) : val;
  if (isNaN(normalizedPort)) return val;
  else if (normalizedPort >= 0) return normalizedPort;
  else return false;
}

function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== 'listen') throw error;
  const bind = (typeof port === 'string') ? `Pipe ${port}` : `Port ${port}`;
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening(): void {
  const addr = server.address();
  const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr!.port}`;
  console.log(`Listening on ${bind}`);
}
