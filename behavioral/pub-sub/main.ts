import { Newspaper } from "./newspaper";
import { NewspaperReader } from "./newspaperReader";

const newYorkTimes = new Newspaper();
const reader1 = new NewspaperReader('vic');
const reader2 = new NewspaperReader('mark')

newYorkTimes.subscribe(reader1);
newYorkTimes.subscribe(reader2);

newYorkTimes.releaseNewspaper('TypeScript does not need to be compiled anymore');
newYorkTimes.unsubscribe(reader2);
newYorkTimes.releaseNewspaper('Multiple UFOs sighthings');