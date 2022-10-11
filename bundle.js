/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\nlet employees = [\r\n    {\r\n        id: 1,\r\n        ciam_id: 987655,\r\n        wiw_id: \"lkubik\",\r\n        code: 69315,\r\n        area: \"developer\",\r\n        name: \"Kubik Lukas\",\r\n        email: \"lukas.kubik@telekom.com\"\r\n    },\r\n    {\r\n        id: 2,\r\n        ciam_id: 525311,\r\n        wiw_id: \"knovotna\",\r\n        code: 12581,\r\n        area: \"assistant\",\r\n        name: \"Novotna Klara\",\r\n        email: \"klara.novotna@telekom.com\"\r\n    },\r\n    {\r\n        id: 3,\r\n        ciam_id: 261923,\r\n        wiw_id: \"jmrkvicka\",\r\n        code: 77819,\r\n        area: \"manager\",\r\n        name: \"Mrkvicka Jozef\",\r\n        email: \"jozef.mrkvicka@telekom.com\"\r\n    },\r\n    {\r\n        id: 4,\r\n        ciam_id: 471994,\r\n        wiw_id: \"mkovac\",\r\n        code: 90741,\r\n        area: \"hr\",\r\n        name: \"Kovac Miroslav\",\r\n        email: \"miroslav.kovac@telekom.com\"\r\n    },\r\n];\r\n\r\nconst tbody = document.querySelector('tbody');\r\nconst manfil = document.querySelector('.manfil');\r\nconst asifil = document.querySelector('.asifil');\r\nconst hrfil = document.querySelector('.hrfil');\r\nconst devfil = document.querySelector('.devfil');\r\nconst rows = document.querySelectorAll('tr');\r\nconst form = document.querySelector('.search');\r\n\r\nconst createTable = (employees => {\r\n    tbody.innerHTML = ``;\r\n    employees.forEach((employee => {\r\n        let html = `\r\n        <tr>\r\n            <td class=\"cell\">${employee.id}</td>\r\n            <td class=\"cell\">${employee.ciam_id}</td>\r\n            <td class=\"cell\">${employee.wiw_id}</td>\r\n            <td class=\"cell\">${employee.code}</td>\r\n            <td class=\"cell\">${employee.area}</td>\r\n            <td class=\"cell\">${employee.name}</td>\r\n            <td class=\"cell\">${employee.email}</td>\r\n        </tr>\r\n        `;\r\n        tbody.innerHTML += html;\r\n    }))\r\n});\r\n\r\nconst filter = ((employees,area) => {\r\n    form.value = '';\r\n    let newArray = employees.filter(employee => employee.area === area);\r\n    createTable(newArray);\r\n    \r\n})\r\n\r\nmanfil.addEventListener('click', () => {\r\n    asifil.classList.remove('filter-pushed');\r\n    hrfil.classList.remove('filter-pushed');\r\n    devfil.classList.remove('filter-pushed');\r\n\r\n    if(!manfil.classList.contains('filter-pushed')){\r\n        filter(employees, 'manager');\r\n        manfil.classList.add('filter-pushed');\r\n    }else{\r\n        manfil.classList.remove('filter-pushed');\r\n        createTable(employees);\r\n    }\r\n});\r\nasifil.addEventListener('click', () => {\r\n    manfil.classList.remove('filter-pushed');\r\n    hrfil.classList.remove('filter-pushed');\r\n    devfil.classList.remove('filter-pushed');\r\n\r\n    if(!asifil.classList.contains('filter-pushed')){\r\n        filter(employees, 'assistant');\r\n        asifil.classList.add('filter-pushed');\r\n    }else{\r\n        asifil.classList.remove('filter-pushed');\r\n        createTable(employees);\r\n    }\r\n});\r\nhrfil.addEventListener('click', () => {\r\n    manfil.classList.remove('filter-pushed');\r\n    asifil.classList.remove('filter-pushed');\r\n    devfil.classList.remove('filter-pushed');\r\n\r\n    if(!hrfil.classList.contains('filter-pushed')){\r\n        filter(employees, 'hr');\r\n        hrfil.classList.add('filter-pushed');\r\n    }else{\r\n        hrfil.classList.remove('filter-pushed');\r\n        createTable(employees);\r\n    }\r\n});\r\ndevfil.addEventListener('click', () => {\r\n    manfil.classList.remove('filter-pushed');\r\n    hrfil.classList.remove('filter-pushed');\r\n    asifil.classList.remove('filter-pushed');\r\n\r\n    if(!devfil.classList.contains('filter-pushed')){\r\n        filter(employees, 'developer');\r\n        devfil.classList.add('filter-pushed');\r\n    }else{\r\n        devfil.classList.remove('filter-pushed');\r\n        createTable(employees);\r\n    }\r\n});\r\n\r\nconst filterEmployees = term => {\r\n    let newArray = employees.filter(employee => employee.wiw_id.includes(term));\r\n    createTable(newArray);\r\n}\r\n\r\nform.addEventListener('keyup', () => {\r\n    manfil.classList.remove('filter-pushed');\r\n    hrfil.classList.remove('filter-pushed');\r\n    asifil.classList.remove('filter-pushed');\r\n    devfil.classList.remove('filter-pushed');\r\n    createTable(employees);\r\n    const term = form.value.trim().toLowerCase();\r\n    filterEmployees(term);\r\n});\r\n\r\n\r\ncreateTable(employees);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://employeemanager/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;