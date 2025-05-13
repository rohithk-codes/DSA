
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
        this.collectingWords(node, prefix, result)
        return result
    }

    collectingWords(node, prefix, result){
        if (node.isEnd) {
         result.push(prefix)
        }
        for (let char in node.child){
            this.collectingWords(node.child[char], prefix + char, result)
        }
    }

    // findLongestPrefix(word){
    //     let node = this.root
    //     let currentPrefix = ''
    //     let longestPrefix = ''
    //     for(let char of word){
    //      if(!node.child[char])break
         
    //      currentPrefix+=char
    //      node = node.child[char]
    //      if(node.isEnd){
    //         longestPrefix = currentPrefix
    //      }
    //     }
    //     return longestPrefix
    // }

    findLongestPrefix(word){
        let node = this.root
        let longest =''
        let current =''
        for(let char of word){
           if(! node.child[char])break
            current+=char
           node = node.child[char]
if (node.isEnd){
    longest = current
}
        }
        return longest
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
    console.log(trie.search('pple'))//
    console.log(trie.findLongestPrefix('appss'))