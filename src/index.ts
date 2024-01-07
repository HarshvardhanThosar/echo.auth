import app from './app';
import http from 'http';
import dotenv from 'dotenv';
import debugModule from 'debug';

dotenv.config();
const debug = debugModule('auth:server');
const { PORT = '3000' } = process.env;
const port = normalizePort(PORT);

app.set('port', port);
const server = http.createServer(app);
server.listen(port);

server.on('error', onError);
server.on('listening', onListening);

export function normalizePort(val: string): string | number | boolean {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

export type SysError = {
  syscall: 'listen' | '';
  code:
    | 'EACCES'
    | 'EADDRINUSE'
    | 'ECONNREFUSED'
    | 'ECONNRESET'
    | 'ECONNREFUSED'
    | 'ECONNRESET'
    | '';
} & Error;

export function onError(error: SysError): void {
  if (error?.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error?.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

export function onListening(): void {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr?.port;
  const message = 'Listening on ' + bind;
  debug(message);
  console.info(message);
}
