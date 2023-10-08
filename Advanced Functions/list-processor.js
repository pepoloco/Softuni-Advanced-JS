function solve(commands) {
    let output = [];
    for (const el of commands) {
        let [operation, word] = el.split(' ');
        if (operation === 'add') {
            output.push(word);
        } else if (operation === 'remove') {
            output = output.filter(item => item !== word);
        } else if (operation === 'print') {
            console.log(output.join(','));
        }
    }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);

function solve1(commands) {
    function createProcess() {
        let list = [];

        function add(string) {
            list.push(string);
        }
        function remove(string) {
            list = list.filter(item => item !== string);
        }
        function print() {
            console.log(list.join(','));
        }
        return {
            add, remove, print
        }
    }
    let process = createProcess();
    for (const el of commands) {
        let [operation, word] = el.split(' ');
        process[operation](word)

    }
}
solve1(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve1(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);