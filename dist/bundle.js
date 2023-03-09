/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Node {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Node);

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/node.js");


class Tree {
    constructor(sortedArray) {
        this.root = null;
        // Removes Duplicates by converting array to set and back to array then sorts array
        this.array = [...new Set(sortedArray)].sort(((a, b) => a - b));
    }

    buildTree(start = 0, end = this.array.length - 1) {
        if (start > end) {
            return null;
        }
        const mid = Math.floor((start + end) / 2);
        const newNode = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](this.array[mid]);
        newNode.leftChild = this.buildTree(start, mid - 1);
        newNode.rightChild = this.buildTree(mid + 1, end);
        return newNode;
    }

    insert(value, root = this.root) {
        const tree = root;
        if (tree == null) {
            return new _node__WEBPACK_IMPORTED_MODULE_0__["default"](value);
        }


        if (tree.data === value) {

            return tree;
        }

        if (tree.data > value) {
            tree.leftChild = this.insert(value, tree.leftChild);
        } else if (root.data < value) {
            tree.rightChild = this.insert(value, tree.rightChild)
        }

        return tree;

    }


    findParentNode(node, root = this.root) {
        if (this.root === null) {
            return null
        }

        if (node === this.root.data) {
            return ("No Parent!")
        }
        if (root === null) {
            return null
        }
        if ((root.leftChild && root.leftChild.data === node) || (root.rightChild && root.rightChild.data === node)) {
            return root;
        }

        if (node < root.data) {
            return this.findParentNode(node, root.leftChild);
        }
        if (node > root.data) {
            return this.findParentNode(node, root.rightChild)
        }

        return null;

    }

    // Start with deleteing leaf

    delete(value, root = this.root) {

        if (value === this.root.data) {
            if (this.root.leftChild === null && this.root.rightChild === null) {
                this.root = null;
            } else if (this.root.leftChild === null && this.root.rightChild !== null) {
                this.root = this.root.rightChild;
            } else if (this.root.leftChild !== null && this.root.rightChild === null) {
                this.root = this.root.leftChild;
            } else {
                let lowestValueInRightSubTree = this.root.rightChild;
                while (lowestValueInRightSubTree.leftChild) {
                    lowestValueInRightSubTree = lowestValueInRightSubTree.leftChild;
                }

                const temp = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](lowestValueInRightSubTree.data);
                temp.leftChild = lowestValueInRightSubTree.leftChild;
                temp.rightChild = lowestValueInRightSubTree.rightChild;

                const lowestValueInRightSubTreeParentNode = this.findParentNode(lowestValueInRightSubTree.data);
                lowestValueInRightSubTree.leftChild = this.root.leftChild;
                lowestValueInRightSubTree.rightChild = this.root.rightChild;
                if (lowestValueInRightSubTreeParentNode.leftChild === lowestValueInRightSubTree) {
                    if (lowestValueInRightSubTreeParentNode.leftChild.rightChild) {
                        console.log('goods')
                    }
                    lowestValueInRightSubTreeParentNode.leftChild = null;
                    this.root = lowestValueInRightSubTree
                } else if (lowestValueInRightSubTreeParentNode.rightChild === lowestValueInRightSubTree) {
                    lowestValueInRightSubTreeParentNode.rightChild = null;
                    this.root = lowestValueInRightSubTree
                }

            }
            return
        }
        // find node to be deleted and remove its parents reference
        const parentNode = (this.findParentNode(value, root));

        if (parentNode === null) {
            return
        }

        if (parentNode.leftChild !== null) {
            if (parentNode.leftChild.data === value) {
                if (parentNode.leftChild.leftChild === null && parentNode.leftChild.rightChild === null) {
                    parentNode.leftChild = null;

                } else if (parentNode.leftChild.leftChild !== null && parentNode.leftChild.rightChild === null) {
                    parentNode.leftChild = parentNode.leftChild.leftChild;
                } else if (parentNode.leftChild.leftChild === null && parentNode.leftChild.rightChild !== null) {
                    parentNode.leftChild = parentNode.leftChild.rightChild;
                } else {
                    let lowestValueInRightSubTree = parentNode.leftChild.rightChild;
                    while (lowestValueInRightSubTree.leftChild) {
                        lowestValueInRightSubTree = lowestValueInRightSubTree.leftChild;
                    }

                    const lowestValueInRightSubTreeParentNode = this.findParentNode(lowestValueInRightSubTree.data);

                    lowestValueInRightSubTree.leftChild = parentNode.leftChild.leftChild;
                    lowestValueInRightSubTree.rightChild = parentNode.leftChild.rightChild;
                    if (lowestValueInRightSubTreeParentNode.leftChild === lowestValueInRightSubTree) {
                        // check if lowest value has right child, if it does set the left 
                        lowestValueInRightSubTreeParentNode.leftChild = null;
                        parentNode.leftChild = lowestValueInRightSubTree
                    } else if (lowestValueInRightSubTreeParentNode.rightChild === lowestValueInRightSubTree) {
                        lowestValueInRightSubTreeParentNode.rightChild = null;
                        parentNode.leftChild = lowestValueInRightSubTree
                    }
                }



            }
        }
        if (parentNode.rightChild !== null) {
            if (parentNode.rightChild.data === value) {
                if (parentNode.rightChild.leftChild === null && parentNode.rightChild.rightChild === null) {
                    parentNode.rightChild = null;
                } else if (parentNode.rightChild.leftChild !== null && parentNode.rightChild.rightChild === null) {
                    parentNode.rightChild = parentNode.rightChild.leftChild;
                } else if (parentNode.rightChild.leftChild === null && parentNode.rightChild.rightChild !== null) {
                    parentNode.rightChild = parentNode.rightChild.rightChild;
                } else {
                    let lowestValueInRightSubTree = parentNode.rightChild.rightChild;
                    while (lowestValueInRightSubTree.leftChild) {
                        lowestValueInRightSubTree = lowestValueInRightSubTree.leftChild;
                    }
                    const lowestValueInRightSubTreeParentNode = this.findParentNode(lowestValueInRightSubTree.data);
                    lowestValueInRightSubTree.leftChild = parentNode.rightChild.leftChild;
                    lowestValueInRightSubTree.rightChild = parentNode.rightChild.rightChild;
                    if (lowestValueInRightSubTreeParentNode.leftChild === lowestValueInRightSubTree) {
                        lowestValueInRightSubTreeParentNode.leftChild = null;
                        parentNode.rightChild = lowestValueInRightSubTree
                    } else if (lowestValueInRightSubTreeParentNode.rightChild === lowestValueInRightSubTree) {
                        lowestValueInRightSubTreeParentNode.rightChild = null;
                        parentNode.rightChild = lowestValueInRightSubTree
                    }
                }



            }
        }


    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ "./src/tree.js");


function createRandomArray(arrayLength = 40, maxValue = 40) {
    return Array.from({ length: arrayLength }, () => Math.floor(Math.random() * maxValue));

}
createRandomArray();
const newTree = new _tree__WEBPACK_IMPORTED_MODULE_0__["default"]([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])

newTree.root = newTree.buildTree();

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.rightChild !== null) {
        prettyPrint(node.rightChild, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.leftChild !== null) {
        prettyPrint(node.leftChild, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }

}

console.log();
console.log();
console.log();
prettyPrint(newTree.root);
console.log();
console.log();
console.log();

newTree.delete(16);
// newTree.delete(17);


console.log();
console.log();
console.log();
prettyPrint(newTree.root);
console.log();
console.log();
console.log();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDUFc7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZDQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2Q0FBSTtBQUMzQjs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyw2Q0FBSTtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBLGlFQUFlOzs7Ozs7VUN0TGY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQjs7QUFFMUI7QUFDQSx3QkFBd0IscUJBQXFCOztBQUU3QztBQUNBO0FBQ0Esb0JBQW9CLDZDQUFJOztBQUV4Qjs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLE9BQU8sRUFBRSx5QkFBeUI7QUFDMUU7QUFDQSxtQkFBbUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDakU7QUFDQSx1Q0FBdUMsT0FBTyxFQUFFLHlCQUF5QjtBQUN6RTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL25vZGUuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL3RyZWUuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5sZWZ0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLnJpZ2h0Q2hpbGQgPSBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5vZGUiLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi9ub2RlXCI7XG5cbmNsYXNzIFRyZWUge1xuICAgIGNvbnN0cnVjdG9yKHNvcnRlZEFycmF5KSB7XG4gICAgICAgIHRoaXMucm9vdCA9IG51bGw7XG4gICAgICAgIC8vIFJlbW92ZXMgRHVwbGljYXRlcyBieSBjb252ZXJ0aW5nIGFycmF5IHRvIHNldCBhbmQgYmFjayB0byBhcnJheSB0aGVuIHNvcnRzIGFycmF5XG4gICAgICAgIHRoaXMuYXJyYXkgPSBbLi4ubmV3IFNldChzb3J0ZWRBcnJheSldLnNvcnQoKChhLCBiKSA9PiBhIC0gYikpO1xuICAgIH1cblxuICAgIGJ1aWxkVHJlZShzdGFydCA9IDAsIGVuZCA9IHRoaXMuYXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodGhpcy5hcnJheVttaWRdKTtcbiAgICAgICAgbmV3Tm9kZS5sZWZ0Q2hpbGQgPSB0aGlzLmJ1aWxkVHJlZShzdGFydCwgbWlkIC0gMSk7XG4gICAgICAgIG5ld05vZGUucmlnaHRDaGlsZCA9IHRoaXMuYnVpbGRUcmVlKG1pZCArIDEsIGVuZCk7XG4gICAgICAgIHJldHVybiBuZXdOb2RlO1xuICAgIH1cblxuICAgIGluc2VydCh2YWx1ZSwgcm9vdCA9IHRoaXMucm9vdCkge1xuICAgICAgICBjb25zdCB0cmVlID0gcm9vdDtcbiAgICAgICAgaWYgKHRyZWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBOb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRyZWUuZGF0YSA9PT0gdmFsdWUpIHtcblxuICAgICAgICAgICAgcmV0dXJuIHRyZWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJlZS5kYXRhID4gdmFsdWUpIHtcbiAgICAgICAgICAgIHRyZWUubGVmdENoaWxkID0gdGhpcy5pbnNlcnQodmFsdWUsIHRyZWUubGVmdENoaWxkKTtcbiAgICAgICAgfSBlbHNlIGlmIChyb290LmRhdGEgPCB2YWx1ZSkge1xuICAgICAgICAgICAgdHJlZS5yaWdodENoaWxkID0gdGhpcy5pbnNlcnQodmFsdWUsIHRyZWUucmlnaHRDaGlsZClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cmVlO1xuXG4gICAgfVxuXG5cbiAgICBmaW5kUGFyZW50Tm9kZShub2RlLCByb290ID0gdGhpcy5yb290KSB7XG4gICAgICAgIGlmICh0aGlzLnJvb3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZSA9PT0gdGhpcy5yb290LmRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiAoXCJObyBQYXJlbnQhXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgaWYgKChyb290LmxlZnRDaGlsZCAmJiByb290LmxlZnRDaGlsZC5kYXRhID09PSBub2RlKSB8fCAocm9vdC5yaWdodENoaWxkICYmIHJvb3QucmlnaHRDaGlsZC5kYXRhID09PSBub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZSA8IHJvb3QuZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluZFBhcmVudE5vZGUobm9kZSwgcm9vdC5sZWZ0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlID4gcm9vdC5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maW5kUGFyZW50Tm9kZShub2RlLCByb290LnJpZ2h0Q2hpbGQpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgIH1cblxuICAgIC8vIFN0YXJ0IHdpdGggZGVsZXRlaW5nIGxlYWZcblxuICAgIGRlbGV0ZSh2YWx1ZSwgcm9vdCA9IHRoaXMucm9vdCkge1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5yb290LmRhdGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJvb3QubGVmdENoaWxkID09PSBudWxsICYmIHRoaXMucm9vdC5yaWdodENoaWxkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290ID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yb290LmxlZnRDaGlsZCA9PT0gbnVsbCAmJiB0aGlzLnJvb3QucmlnaHRDaGlsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdCA9IHRoaXMucm9vdC5yaWdodENoaWxkO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJvb3QubGVmdENoaWxkICE9PSBudWxsICYmIHRoaXMucm9vdC5yaWdodENoaWxkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb290ID0gdGhpcy5yb290LmxlZnRDaGlsZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWUgPSB0aGlzLnJvb3QucmlnaHRDaGlsZDtcbiAgICAgICAgICAgICAgICB3aGlsZSAobG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZS5sZWZ0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZSA9IGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWUubGVmdENoaWxkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBuZXcgTm9kZShsb3dlc3RWYWx1ZUluUmlnaHRTdWJUcmVlLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRlbXAubGVmdENoaWxkID0gbG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZS5sZWZ0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgdGVtcC5yaWdodENoaWxkID0gbG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZS5yaWdodENoaWxkO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZVBhcmVudE5vZGUgPSB0aGlzLmZpbmRQYXJlbnROb2RlKGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWUuZGF0YSk7XG4gICAgICAgICAgICAgICAgbG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZS5sZWZ0Q2hpbGQgPSB0aGlzLnJvb3QubGVmdENoaWxkO1xuICAgICAgICAgICAgICAgIGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWUucmlnaHRDaGlsZCA9IHRoaXMucm9vdC5yaWdodENoaWxkO1xuICAgICAgICAgICAgICAgIGlmIChsb3dlc3RWYWx1ZUluUmlnaHRTdWJUcmVlUGFyZW50Tm9kZS5sZWZ0Q2hpbGQgPT09IGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWVQYXJlbnROb2RlLmxlZnRDaGlsZC5yaWdodENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ29vZHMnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWVQYXJlbnROb2RlLmxlZnRDaGlsZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9vdCA9IGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWVQYXJlbnROb2RlLnJpZ2h0Q2hpbGQgPT09IGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZVBhcmVudE5vZGUucmlnaHRDaGlsZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9vdCA9IGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIGZpbmQgbm9kZSB0byBiZSBkZWxldGVkIGFuZCByZW1vdmUgaXRzIHBhcmVudHMgcmVmZXJlbmNlXG4gICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSAodGhpcy5maW5kUGFyZW50Tm9kZSh2YWx1ZSwgcm9vdCkpO1xuXG4gICAgICAgIGlmIChwYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJlbnROb2RlLmxlZnRDaGlsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUubGVmdENoaWxkLmRhdGEgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUubGVmdENoaWxkLmxlZnRDaGlsZCA9PT0gbnVsbCAmJiBwYXJlbnROb2RlLmxlZnRDaGlsZC5yaWdodENoaWxkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUubGVmdENoaWxkID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyZW50Tm9kZS5sZWZ0Q2hpbGQubGVmdENoaWxkICE9PSBudWxsICYmIHBhcmVudE5vZGUubGVmdENoaWxkLnJpZ2h0Q2hpbGQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5sZWZ0Q2hpbGQgPSBwYXJlbnROb2RlLmxlZnRDaGlsZC5sZWZ0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJlbnROb2RlLmxlZnRDaGlsZC5sZWZ0Q2hpbGQgPT09IG51bGwgJiYgcGFyZW50Tm9kZS5sZWZ0Q2hpbGQucmlnaHRDaGlsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmxlZnRDaGlsZCA9IHBhcmVudE5vZGUubGVmdENoaWxkLnJpZ2h0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWUgPSBwYXJlbnROb2RlLmxlZnRDaGlsZC5yaWdodENoaWxkO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZS5sZWZ0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWUgPSBsb3dlc3RWYWx1ZUluUmlnaHRTdWJUcmVlLmxlZnRDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWVQYXJlbnROb2RlID0gdGhpcy5maW5kUGFyZW50Tm9kZShsb3dlc3RWYWx1ZUluUmlnaHRTdWJUcmVlLmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWUubGVmdENoaWxkID0gcGFyZW50Tm9kZS5sZWZ0Q2hpbGQubGVmdENoaWxkO1xuICAgICAgICAgICAgICAgICAgICBsb3dlc3RWYWx1ZUluUmlnaHRTdWJUcmVlLnJpZ2h0Q2hpbGQgPSBwYXJlbnROb2RlLmxlZnRDaGlsZC5yaWdodENoaWxkO1xuICAgICAgICAgICAgICAgICAgICBpZiAobG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZVBhcmVudE5vZGUubGVmdENoaWxkID09PSBsb3dlc3RWYWx1ZUluUmlnaHRTdWJUcmVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBsb3dlc3QgdmFsdWUgaGFzIHJpZ2h0IGNoaWxkLCBpZiBpdCBkb2VzIHNldCB0aGUgbGVmdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWVQYXJlbnROb2RlLmxlZnRDaGlsZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmxlZnRDaGlsZCA9IGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb3dlc3RWYWx1ZUluUmlnaHRTdWJUcmVlUGFyZW50Tm9kZS5yaWdodENoaWxkID09PSBsb3dlc3RWYWx1ZUluUmlnaHRTdWJUcmVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RWYWx1ZUluUmlnaHRTdWJUcmVlUGFyZW50Tm9kZS5yaWdodENoaWxkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUubGVmdENoaWxkID0gbG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnROb2RlLnJpZ2h0Q2hpbGQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnROb2RlLnJpZ2h0Q2hpbGQuZGF0YSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Tm9kZS5yaWdodENoaWxkLmxlZnRDaGlsZCA9PT0gbnVsbCAmJiBwYXJlbnROb2RlLnJpZ2h0Q2hpbGQucmlnaHRDaGlsZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJpZ2h0Q2hpbGQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyZW50Tm9kZS5yaWdodENoaWxkLmxlZnRDaGlsZCAhPT0gbnVsbCAmJiBwYXJlbnROb2RlLnJpZ2h0Q2hpbGQucmlnaHRDaGlsZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJpZ2h0Q2hpbGQgPSBwYXJlbnROb2RlLnJpZ2h0Q2hpbGQubGVmdENoaWxkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyZW50Tm9kZS5yaWdodENoaWxkLmxlZnRDaGlsZCA9PT0gbnVsbCAmJiBwYXJlbnROb2RlLnJpZ2h0Q2hpbGQucmlnaHRDaGlsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlLnJpZ2h0Q2hpbGQgPSBwYXJlbnROb2RlLnJpZ2h0Q2hpbGQucmlnaHRDaGlsZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZSA9IHBhcmVudE5vZGUucmlnaHRDaGlsZC5yaWdodENoaWxkO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZS5sZWZ0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWUgPSBsb3dlc3RWYWx1ZUluUmlnaHRTdWJUcmVlLmxlZnRDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb3dlc3RWYWx1ZUluUmlnaHRTdWJUcmVlUGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUobG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgbG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZS5sZWZ0Q2hpbGQgPSBwYXJlbnROb2RlLnJpZ2h0Q2hpbGQubGVmdENoaWxkO1xuICAgICAgICAgICAgICAgICAgICBsb3dlc3RWYWx1ZUluUmlnaHRTdWJUcmVlLnJpZ2h0Q2hpbGQgPSBwYXJlbnROb2RlLnJpZ2h0Q2hpbGQucmlnaHRDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWVQYXJlbnROb2RlLmxlZnRDaGlsZCA9PT0gbG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXN0VmFsdWVJblJpZ2h0U3ViVHJlZVBhcmVudE5vZGUubGVmdENoaWxkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmlnaHRDaGlsZCA9IGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWVcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsb3dlc3RWYWx1ZUluUmlnaHRTdWJUcmVlUGFyZW50Tm9kZS5yaWdodENoaWxkID09PSBsb3dlc3RWYWx1ZUluUmlnaHRTdWJUcmVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlc3RWYWx1ZUluUmlnaHRTdWJUcmVlUGFyZW50Tm9kZS5yaWdodENoaWxkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGUucmlnaHRDaGlsZCA9IGxvd2VzdFZhbHVlSW5SaWdodFN1YlRyZWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJlZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRyZWUgZnJvbSBcIi4vdHJlZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVSYW5kb21BcnJheShhcnJheUxlbmd0aCA9IDQwLCBtYXhWYWx1ZSA9IDQwKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGFycmF5TGVuZ3RoIH0sICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heFZhbHVlKSk7XG5cbn1cbmNyZWF0ZVJhbmRvbUFycmF5KCk7XG5jb25zdCBuZXdUcmVlID0gbmV3IFRyZWUoWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMjQsIDI1LCAyNiwgMjcsIDI4LCAyOSwgMzAsIDMxXSlcblxubmV3VHJlZS5yb290ID0gbmV3VHJlZS5idWlsZFRyZWUoKTtcblxuY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gJycsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgICBpZiAobm9kZS5yaWdodENoaWxkICE9PSBudWxsKSB7XG4gICAgICAgIHByZXR0eVByaW50KG5vZGUucmlnaHRDaGlsZCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUgiAgICcgOiAnICAgICd9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSU4pSA4pSAICcgOiAn4pSM4pSA4pSAICd9JHtub2RlLmRhdGF9YCk7XG4gICAgaWYgKG5vZGUubGVmdENoaWxkICE9PSBudWxsKSB7XG4gICAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdENoaWxkLCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAnICAgICcgOiAn4pSCICAgJ31gLCB0cnVlKTtcbiAgICB9XG5cbn1cblxuY29uc29sZS5sb2coKTtcbmNvbnNvbGUubG9nKCk7XG5jb25zb2xlLmxvZygpO1xucHJldHR5UHJpbnQobmV3VHJlZS5yb290KTtcbmNvbnNvbGUubG9nKCk7XG5jb25zb2xlLmxvZygpO1xuY29uc29sZS5sb2coKTtcblxubmV3VHJlZS5kZWxldGUoMTYpO1xuLy8gbmV3VHJlZS5kZWxldGUoMTcpO1xuXG5cbmNvbnNvbGUubG9nKCk7XG5jb25zb2xlLmxvZygpO1xuY29uc29sZS5sb2coKTtcbnByZXR0eVByaW50KG5ld1RyZWUucm9vdCk7XG5jb25zb2xlLmxvZygpO1xuY29uc29sZS5sb2coKTtcbmNvbnNvbGUubG9nKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9