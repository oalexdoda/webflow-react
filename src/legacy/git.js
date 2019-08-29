import execa from 'execa';
import path from 'path';
import rimraf from 'rimraf';
// import { fs } from "./libs";

// Attempt at supporting windows by monkey patching path.relative to prevent backslashes.
const orPathRel = path.relative;
path.relative = (from, to) => orPathRel(from, to).replace(/\\/gi, '/');

// Will add given files and will ignore those who aren't exist
export const add = async (files, config) => {
    const { stdout: root } = await execa('git', [
        'rev-parse',
        '--show-toplevel',
    ]);

    files = files.map(file => path.resolve(root, file));

    let unstaged = await Promise.all([
        execa('git', ['diff', '--name-only']),
        execa('git', ['ls-files', '--others', '--exclude-standard']),
    ]).then(results => {
        return results.reduce((unstaged, { stdout }) => {
            return unstaged.concat(stdout.split('\n').filter(Boolean));
        }, []);
    });

    unstaged = unstaged.map(file => path.resolve(root, file));
    files = files.filter(file => unstaged.includes(file));

    await execa('git', [
        'add',
        ...files,
        config.output.src.views,
        config.output.src.components,
        config.output.src.styles,
        config.output.public,
    ]);

    return [
        ...files,
        config.output.src.views,
        config.output.src.components,
        config.output.src.styles,
        config.output.public,
    ];
};

// Will commit changes, and if files not exist, will print status
export const commit = (files, message, stdio = 'inherit') => {
    if (files && files.length)
        try {
            return execa(
                'git',
                ['commit', '-m', `Webflow React: ${message}`, '--allow-empty'],
                {
                    stdio,
                }
            );
        } catch (e) {
            // Probably no changes were made
        }

    return execa('git', ['status'], {
        stdio,
    });
};

export const removeWFRFiles = async config => {
    const { stdout: diffFiles } = await execa('git', ['diff', '--name-only']);

    if (diffFiles) {
        // throw Error(
        //   [
        //     "Cannot transpile: Your index contains uncommitted changes.",
        //     "Please commit or stash them."
        //   ].join("\n")
        // );
        console.log(
            [
                '=========',
                'Warning: You have uncommitted changes!',
                '=========',
            ].join('\n')
        );
    }

    // let { stderr, stdout: hash } = await execa("git", [
    //   "log",
    //   "-1",
    //   "--format=%H",
    //   `--grep=webflow-react: Updated`
    // ]);

    // // Probably git is not initialized
    // if (stderr) throw Error(stderr);
    // // No previous migrations found
    // if (!hash) return [];

    // List all files but deleted ones
    // let { stdout: files } = await execa("git", [
    //   "diff",
    //   "--name-only",
    //   "--diff-filter=ACMRTUXB",
    //   `${hash}~1`,
    //   hash
    // ]);
    // files = files.split("\n").filter(Boolean);
    // console.log(files)

    // const { stdout: root } = await execa("git", ["rev-parse", "--show-toplevel"]);

    await Promise.all([
        // ...files.map(async file => {
        //   return fs.unlink(`${root}/${file}`);
        // }),

        new Promise(res => rimraf(config.output.src.views, () => res())),
        new Promise(res => rimraf(config.output.src.components, () => res())),
        new Promise(res => rimraf(config.output.src.styles, () => res())),
    ]);

    // return [...files||[]];
    return [
        config.output.src.views,
        config.output.src.components,
        config.output.src.styles,
        config.output.public,
    ];
};

export default {
    add,
    commit,
    removeWFRFiles,
};
