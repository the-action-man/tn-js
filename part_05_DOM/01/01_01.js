// innerHTML и outerHTML не использовать - это слишком просто
//
// 1. Вывести в консоль иерархическую структуру документа,
// так, как это показано на практической части.
//
// Реализовать 3 функции, выполняющие это разными способами



//========= case 1 (Elements) ===========
console.info("========= Elements ==============");

function showElementsHierarchy() {
    showElement(document.childNodes[1], 0);
}

/**
 * @param {Node} node
 * @param {number} depth
 */
function showElement(node, depth) {
    console.info(defineIndent(depth) + node.tagName);
    if (node.children.length > 0) {
        for (let childNode of node.children) {
            showElement(childNode, depth + 1)
        }
    }
}

/**
 * @param {number} depth
 */
function defineIndent(depth) {
    return Array(depth).fill('  ').join('')
}

showElementsHierarchy();



//========= case 2 (Nodes) ===========
console.info("========= Nodes ==============");

function showNodesHierarchy() {
    showNode(document.childNodes[1], 0);
}

/**
 * @param {Node} node
 * @param {number} depth
 */
function showNode(node, depth) {
    console.info(defineIndent(depth) + node.nodeName);
    if (node.hasChildNodes()) {
        for (let childNode of node.childNodes) {
            showNode(childNode, depth + 1)
        }
    }
}

showNodesHierarchy();



//========= case 2 (Sibling) ===========
console.info("========== Sibling =============");

function showSiblingHierarchy() {
    showTheNode(document.childNodes[1], 0);
}

/**
 * @param {Node} node
 * @param {number} depth
 */
function showTheNode(node, depth) {
    printNodeInfo(node, depth);
    const firstChild = node.firstChild;
    if (!firstChild) return;

    showTheNode(firstChild, depth + 1)

    let nextSibling = firstChild;
    while (true) {
        nextSibling = nextSibling.nextSibling
        if (!nextSibling) return;

        showTheNode(nextSibling, depth + 1)
    }

}

/**
 * @param {Node} node
 * @param {number} depth
 */
function printNodeInfo(node, depth) {
    console.info(defineIndent(depth) + node.nodeName);
}

showSiblingHierarchy();
