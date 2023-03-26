import './env';
import { medievalOrNot } from './shitModels/medievalOrNot';
import { sayMedievalShitIfYES } from './shitModels/medievalSpeechGen';

export async function run() {
    // Determine if the input JS phrase is medieval, and send back "YES/NO" JS objects:
    const stage_1 = medievalOrNot;
    // Take in some "YES/NO" JS objects, if yes, send back some medieval JSON:
    const stage_2 = sayMedievalShitIfYES;
    
    // Pipe conversation 1 into conversation 2 (which has the input type of 1's output):
    const conversation = stage_1.pipe(stage_2);

    for (const word of [
        'testing',
        'hale',
        'healthy',
        'knave',
        'crapulence',
        'tiktok',
        'give me a favor',
        'give me my favorite'
    ]) {
        console.log('\r\n\r\n');
        console.log(`Input test: ${word.toUpperCase()} -- Final Output:`);
        console.log((await conversation.send({ maybeMedievalPhrase: word })).message());
        console.log('\r\n\r\n')
    }
}

run();