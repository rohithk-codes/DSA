
class Node {
    constructor() {
        this.child = {}
        this.isEnd = false
    }
}
class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let node = this.root
        for (let char of word) {
            if (!node.child[char]) {
                node.child[char] = new Node()
            }
            node = node.child[char]
        }
        node.isEnd = true
    }

    search(word) {
        let node = this.root
        for (let char of word) {
            if (!node.child[char]) return false
            node = node.child[char]
        }
        return node.isEnd
    }

    startwith(prifix) {
        let node = this.root
        for (let char of prifix) {
            if (!node.child[char]) return false
            node = node.child[char]
        }
        return true
    }

    autocomplete(prefix) {
        let node = this.root
        let result = []
        for (let char of prefix) {
            if (!node.child[char]) return result
            node = node.child[char]
        }
        this.dfs(node, prefix, result)
        return result
    }

    dfs(node, prefix, result){
        if (node.isEnd) {
         result.push(word)
        }
        for (let char in node.child){
            this.dfs(node.child[char], prefix + char, result)
        }
    }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apps");
trie.insert("apex");
trie.insert("bat");
trie.insert("ball");

console.log(trie.autocomplete("ap")); // ["apple", "app", "apps", "apex"]
console.log(trie.autocomplete("b"));  // ["bat", "ball"]
console.log(trie.autocomplete("c"));  // []
console.log(trie.search('pple'))