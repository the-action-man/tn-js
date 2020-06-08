// innerHTML и outerHTML не использовать - это слишком просто
//
// 1. Вывести в консоль иерархическую структуру документа,
// так, как это показано на практической части.
//
// Реализовать 3 функции, выполняющие это разными способами



//========= case 1 (Elements) ===========

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
    return Array(depth).fill(' ').join('')
}

showElementsHierarchy();



//========= case 2 (Nodes) ===========

function showNodesHierarchy() {
    showNode(document.childNodes[1], 0);
}

/**
 * @param {Node} node
 * @param {number} depth
 */
function showNode(node, depth) {
    console.info(defineIndent(depth) + node.tagName);
    if (node.childNodes !== undefined) {
        for (let childNode of node.children) {
            showElement(childNode, depth + 1)
        }
    }
}

// showNodesHierarchy();

