import { ITarget } from './ITarget';
import { Adapter } from './adapter';
import { Service } from './service';

// Using the adapter via the Client Interface to swap adapters without
// needing to modify the client code
function clientCode(target: ITarget) {
  console.log(target.request());
}

const service = new Service();
const adapter = new Adapter(service);

clientCode(adapter);
