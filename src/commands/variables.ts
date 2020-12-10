import {Command} from '@oclif/command'
import {Config} from "../Config";

export default class Variables extends Command {
    static description = 'export the environment variables'

    async run() {
        this.log(JSON.stringify(await Variables.getOutput(), undefined, 2));
    }

    static async getOutput() {
        const stack = (new Config).getStack();

        return await stack.variables();
    }
}
