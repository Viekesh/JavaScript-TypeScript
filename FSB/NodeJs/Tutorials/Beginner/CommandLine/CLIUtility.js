import { ArgumentParser } from "argparse";



const parser = new ArgumentParser({
    description: "a simole command line utility",
});

parser.add_argument("-f", "--foo", { help: "Enter some value" });

let args = console.dir(parser.add_argument());

console.log(args.foo);