class Keyboard {
	constructor() {

		this.currentLang = null;

		this.container = null;
		this.headerElements = null;
		this.keyboardContainer = null;
		this.keyboardKeys = null;

		this.keysEn = [
			"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
			"Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del",
			"CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
			"Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift",
			"Ctrl", "Win", "Alt", "Space", "Alt", "←", "↓", "→", "Ctrl",
		];

		this.keysEnShift = [
			"~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace",
			"Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del",
			"CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter",
			"Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "↑", "Shift",
			"Ctrl", "Win", "Alt", "Space", "Alt", "←", "↓", "→", "Ctrl",
		];

		this.keysEnCaps = [
			"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
			"Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "Del",
			"CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter",
			"Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "↑", "Shift",
			"Ctrl", "Win", "Alt", "Space", "Alt", "←", "↓", "→", "Ctrl",
		];

		this.keysEnShiftCaps = [
			"~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace",
			"Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "|", "Del",
			"CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", "\"", "Enter",
			"Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "↑", "Shift",
			"Ctrl", "Win", "Alt", "Space", "Alt", "←", "↓", "→", "Ctrl",
		];

		this.keysRu = [
			"ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
			"Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del",
			"CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
			"Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "↑", "Shift",
			"Ctrl", "Win", "Alt", "Пробел", "Alt", "←", "↓", "→", "Ctrl",
		];

		this.keysRuShift = [
			"Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace",
			"Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del",
			"CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter",
			"Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "↑", "Shift",
			"Ctrl", "Win", "Alt", "Пробел", "Alt", "←", "↓", "→", "Ctrl",
		];

		this.keysRuCaps = [
			"Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
			"Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\", "Del",
			"CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter",
			"Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "↑", "Shift",
			"Ctrl", "Win", "Alt", "Пробел", "Alt", "←", "↓", "→", "Ctrl",
		];

		this.keysRuShiftCaps = [
			"ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace",
			"Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "/", "Del",
			"CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
			"Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "↑", "Shift",
			"Ctrl", "Win", "Alt", "Пробел", "Alt", "←", "↓", "→", "Ctrl",
		];

		this.dataKeysCodes = [
			"Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",
			"Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete",
			"CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",
			"ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight",
			"ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight",
		];

		this.keysCodesToSymbolsEn = {

			"Backquote": "`", 
			"Digit1": "1", 
			"Digit2": "2",
			"Digit3": "3",
			"Digit4": "4",
			"Digit5": "5",
			"Digit6": "6",
			"Digit7": "7",
			"Digit8": "8",
			"Digit9": "9",
			"Digit0": "0",
			"Minus": "-",
			"Equal": "=",
			"Backspace": true,

			"Tab": "    ",
			"KeyQ": "q",
			"KeyW": "w",
			"KeyE": "e",
			"KeyR": "r",
			"KeyT": "t",
			"KeyY": "y",
			"KeyU": "u",
			"KeyI": "i",
			"KeyO": "o",
			"KeyP": "p",
			"BracketLeft": "[",
			"BracketRight": "]",
			"Backslash": "\\",
			"Delete": true,

			"CapsLock": true,
			"KeyA": "a",
			"KeyS": "s",
			"KeyD": "d",
			"KeyF": "f",
			"KeyG": "g",
			"KeyH": "h",
			"KeyJ": "j",
			"KeyK": "k",
			"KeyL": "l",
			"Semicolon": ";",
			"Quote": "'",
			"Enter": true,

			"ShiftLeft": true,
			"KeyZ": "z",
			"KeyX": "x",
			"KeyC": "c",
			"KeyV": "v",
			"KeyB": "b",
			"KeyN": "n",
			"KeyM": "m",
			"Comma": ",",
			"Period": ".",
			"Slash": "/",
			"ArrowUp": "↑",
			"ShiftRight": true,

			"ControlLeft": true,
			"MetaLeft": true,
			"AltLeft": true,
			"Space": " ",
			"AltRight": true,
			"ArrowLeft": "←",
			"ArrowDown": "↓",
			"ArrowRight": "→",
			"ControlRight": true,

		};

		this.keysCodesToSymbolsEnShift = {

			"Backquote": "~", 
			"Digit1": "!", 
			"Digit2": "@",
			"Digit3": "#",
			"Digit4": "$",
			"Digit5": "%",
			"Digit6": "^",
			"Digit7": "&",
			"Digit8": "*",
			"Digit9": "(",
			"Digit0": ")",
			"Minus": "_",
			"Equal": "+",
			"Backspace": true,

			"Tab": "    ",
			"KeyQ": "Q",
			"KeyW": "W",
			"KeyE": "E",
			"KeyR": "R",
			"KeyT": "T",
			"KeyY": "Y",
			"KeyU": "U",
			"KeyI": "I",
			"KeyO": "O",
			"KeyP": "P",
			"BracketLeft": "{",
			"BracketRight": "}",
			"Backslash": "|",
			"Delete": true,

			"CapsLock": true,
			"KeyA": "A",
			"KeyS": "S",
			"KeyD": "D",
			"KeyF": "F",
			"KeyG": "G",
			"KeyH": "H",
			"KeyJ": "J",
			"KeyK": "K",
			"KeyL": "L",
			"Semicolon": ":",
			"Quote": "\"",
			"Enter": true,

			"ShiftLeft": true,
			"KeyZ": "Z",
			"KeyX": "X",
			"KeyC": "C",
			"KeyV": "V",
			"KeyB": "B",
			"KeyN": "N",
			"KeyM": "M",
			"Comma": "<",
			"Period": ">",
			"Slash": "?",
			"ArrowUp": "↑",
			"ShiftRight": true,

			"ControlLeft": true,
			"MetaLeft": true,
			"AltLeft": true,
			"Space": " ",
			"AltRight": true,
			"ArrowLeft": "←",
			"ArrowDown": "↓",
			"ArrowRight": "→",
			"ControlRight": true,

		};

		this.keysCodesToSymbolsEnCaps = {

			"Backquote": "`", 
			"Digit1": "1", 
			"Digit2": "2",
			"Digit3": "3",
			"Digit4": "4",
			"Digit5": "5",
			"Digit6": "6",
			"Digit7": "7",
			"Digit8": "8",
			"Digit9": "9",
			"Digit0": "0",
			"Minus": "-",
			"Equal": "=",
			"Backspace": true,

			"Tab": "    ",
			"KeyQ": "Q",
			"KeyW": "W",
			"KeyE": "E",
			"KeyR": "R",
			"KeyT": "T",
			"KeyY": "Y",
			"KeyU": "U",
			"KeyI": "I",
			"KeyO": "O",
			"KeyP": "P",
			"BracketLeft": "[",
			"BracketRight": "]",
			"Backslash": "\\",
			"Delete": true,

			"CapsLock": true,
			"KeyA": "A",
			"KeyS": "S",
			"KeyD": "D",
			"KeyF": "F",
			"KeyG": "G",
			"KeyH": "H",
			"KeyJ": "J",
			"KeyK": "K",
			"KeyL": "L",
			"Semicolon": ";",
			"Quote": "'",
			"Enter": true,

			"ShiftLeft": true,
			"KeyZ": "Z",
			"KeyX": "X",
			"KeyC": "C",
			"KeyV": "V",
			"KeyB": "B",
			"KeyN": "N",
			"KeyM": "M",
			"Comma": ",",
			"Period": ".",
			"Slash": "/",
			"ArrowUp": "↑",
			"ShiftRight": true,

			"ControlLeft": true,
			"MetaLeft": true,
			"AltLeft": true,
			"Space": " ",
			"AltRight": true,
			"ArrowLeft": "←",
			"ArrowDown": "↓",
			"ArrowRight": "→",
			"ControlRight": true,

		};

		this.keysCodesToSymbolsEnShiftCaps = {

			"Backquote": "~", 
			"Digit1": "!", 
			"Digit2": "@",
			"Digit3": "#",
			"Digit4": "$",
			"Digit5": "%",
			"Digit6": "^",
			"Digit7": "&",
			"Digit8": "*",
			"Digit9": "(",
			"Digit0": ")",
			"Minus": "_",
			"Equal": "+",
			"Backspace": true,

			"Tab": "    ",
			"KeyQ": "q",
			"KeyW": "w",
			"KeyE": "e",
			"KeyR": "r",
			"KeyT": "t",
			"KeyY": "y",
			"KeyU": "u",
			"KeyI": "i",
			"KeyO": "o",
			"KeyP": "p",
			"BracketLeft": "{",
			"BracketRight": "}",
			"Backslash": "|",
			"Delete": true,

			"CapsLock": true,
			"KeyA": "a",
			"KeyS": "s",
			"KeyD": "d",
			"KeyF": "f",
			"KeyG": "g",
			"KeyH": "h",
			"KeyJ": "j",
			"KeyK": "k",
			"KeyL": "l",
			"Semicolon": ":",
			"Quote": "\"",
			"Enter": true,

			"ShiftLeft": true,
			"KeyZ": "z",
			"KeyX": "x",
			"KeyC": "c",
			"KeyV": "v",
			"KeyB": "b",
			"KeyN": "n",
			"KeyM": "m",
			"Comma": "<",
			"Period": ">",
			"Slash": "?",
			"ArrowUp": "↑",
			"ShiftRight": true,

			"ControlLeft": true,
			"MetaLeft": true,
			"AltLeft": true,
			"Space": " ",
			"AltRight": true,
			"ArrowLeft": "←",
			"ArrowDown": "↓",
			"ArrowRight": "→",
			"ControlRight": true,

		};

		this.keysCodesToSymbolsRu = {

			"Backquote": "ё", 
			"Digit1": "1", 
			"Digit2": "2",
			"Digit3": "3",
			"Digit4": "4",
			"Digit5": "5",
			"Digit6": "6",
			"Digit7": "7",
			"Digit8": "8",
			"Digit9": "9",
			"Digit0": "0",
			"Minus": "-",
			"Equal": "=",
			"Backspace": true,

			"Tab": "    ",
			"KeyQ": "й",
			"KeyW": "ц",
			"KeyE": "у",
			"KeyR": "к",
			"KeyT": "е",
			"KeyY": "н",
			"KeyU": "г",
			"KeyI": "ш",
			"KeyO": "щ",
			"KeyP": "з",
			"BracketLeft": "х",
			"BracketRight": "ъ",
			"Backslash": "\\",
			"Delete": true,

			"CapsLock": true,
			"KeyA": "ф",
			"KeyS": "ы",
			"KeyD": "в",
			"KeyF": "а",
			"KeyG": "п",
			"KeyH": "р",
			"KeyJ": "о",
			"KeyK": "л",
			"KeyL": "д",
			"Semicolon": "ж",
			"Quote": "э",
			"Enter": true,

			"ShiftLeft": true,
			"KeyZ": "я",
			"KeyX": "ч",
			"KeyC": "с",
			"KeyV": "м",
			"KeyB": "и",
			"KeyN": "т",
			"KeyM": "ь",
			"Comma": "б",
			"Period": "ю",
			"Slash": ".",
			"ArrowUp": "↑",
			"ShiftRight": true,

			"ControlLeft": true,
			"MetaLeft": true,
			"AltLeft": true,
			"Space": " ",
			"AltRight": true,
			"ArrowLeft": "←",
			"ArrowDown": "↓",
			"ArrowRight": "→",
			"ControlRight": true,

		};

		this.keysCodesToSymbolsRuShift = {

			"Backquote": "Ё", 
			"Digit1": "!", 
			"Digit2": "\"",
			"Digit3": "№",
			"Digit4": ";",
			"Digit5": "%",
			"Digit6": ":",
			"Digit7": "?",
			"Digit8": "*",
			"Digit9": "(",
			"Digit0": ")",
			"Minus": "_",
			"Equal": "+",
			"Backspace": true,

			"Tab": "    ",
			"KeyQ": "Й",
			"KeyW": "Ц",
			"KeyE": "У",
			"KeyR": "К",
			"KeyT": "Е",
			"KeyY": "Н",
			"KeyU": "Г",
			"KeyI": "Ш",
			"KeyO": "Щ",
			"KeyP": "З",
			"BracketLeft": "Х",
			"BracketRight": "Ъ",
			"Backslash": "/",
			"Delete": true,

			"CapsLock": true,
			"KeyA": "Ф",
			"KeyS": "Ы",
			"KeyD": "В",
			"KeyF": "А",
			"KeyG": "П",
			"KeyH": "Р",
			"KeyJ": "О",
			"KeyK": "Л",
			"KeyL": "Д",
			"Semicolon": "Ж",
			"Quote": "Э",
			"Enter": true,

			"ShiftLeft": true,
			"KeyZ": "Я",
			"KeyX": "Ч",
			"KeyC": "С",
			"KeyV": "М",
			"KeyB": "И",
			"KeyN": "Т",
			"KeyM": "Ь",
			"Comma": "Б",
			"Period": "Ю",
			"Slash": ",",
			"ArrowUp": "↑",
			"ShiftRight": true,

			"ControlLeft": true,
			"MetaLeft": true,
			"AltLeft": true,
			"Space": " ",
			"AltRight": true,
			"ArrowLeft": "←",
			"ArrowDown": "↓",
			"ArrowRight": "→",
			"ControlRight": true,

		};

		this.keysCodesToSymbolsRuCaps = {

			"Backquote": "Ё", 
			"Digit1": "1", 
			"Digit2": "2",
			"Digit3": "3",
			"Digit4": "4",
			"Digit5": "5",
			"Digit6": "6",
			"Digit7": "7",
			"Digit8": "8",
			"Digit9": "9",
			"Digit0": "0",
			"Minus": "-",
			"Equal": "=",
			"Backspace": true,

			"Tab": "    ",
			"KeyQ": "Й",
			"KeyW": "Ц",
			"KeyE": "У",
			"KeyR": "К",
			"KeyT": "Е",
			"KeyY": "Н",
			"KeyU": "Г",
			"KeyI": "Ш",
			"KeyO": "Щ",
			"KeyP": "З",
			"BracketLeft": "Х",
			"BracketRight": "Ъ",
			"Backslash": "\\",
			"Delete": true,

			"CapsLock": true,
			"KeyA": "Ф",
			"KeyS": "Ы",
			"KeyD": "В",
			"KeyF": "А",
			"KeyG": "П",
			"KeyH": "Р",
			"KeyJ": "О",
			"KeyK": "Л",
			"KeyL": "Д",
			"Semicolon": "Ж",
			"Quote": "Э",
			"Enter": true,

			"ShiftLeft": true,
			"KeyZ": "Я",
			"KeyX": "Ч",
			"KeyC": "С",
			"KeyV": "М",
			"KeyB": "И",
			"KeyN": "Т",
			"KeyM": "Ь",
			"Comma": "Б",
			"Period": "Ю",
			"Slash": ".",
			"ArrowUp": "↑",
			"ShiftRight": true,

			"ControlLeft": true,
			"MetaLeft": true,
			"AltLeft": true,
			"Space": " ",
			"AltRight": true,
			"ArrowLeft": "←",
			"ArrowDown": "↓",
			"ArrowRight": "→",
			"ControlRight": true,

		};

		this.keysCodesToSymbolsRuShiftCaps = {

			"Backquote": "ё", 
			"Digit1": "!", 
			"Digit2": "\"",
			"Digit3": "№",
			"Digit4": ";",
			"Digit5": "%",
			"Digit6": ":",
			"Digit7": "?",
			"Digit8": "*",
			"Digit9": "(",
			"Digit0": ")",
			"Minus": "_",
			"Equal": "+",
			"Backspace": true,

			"Tab": "    ",
			"KeyQ": "й",
			"KeyW": "ц",
			"KeyE": "у",
			"KeyR": "к",
			"KeyT": "е",
			"KeyY": "н",
			"KeyU": "г",
			"KeyI": "ш",
			"KeyO": "щ",
			"KeyP": "з",
			"BracketLeft": "х",
			"BracketRight": "ъ",
			"Backslash": "/",
			"Delete": true,

			"CapsLock": true,
			"KeyA": "ф",
			"KeyS": "ы",
			"KeyD": "в",
			"KeyF": "а",
			"KeyG": "п",
			"KeyH": "р",
			"KeyJ": "о",
			"KeyK": "л",
			"KeyL": "д",
			"Semicolon": "ж",
			"Quote": "э",
			"Enter": true,

			"ShiftLeft": true,
			"KeyZ": "я",
			"KeyX": "ч",
			"KeyC": "с",
			"KeyV": "м",
			"KeyB": "и",
			"KeyN": "т",
			"KeyM": "ь",
			"Comma": "б",
			"Period": "ю",
			"Slash": ",",
			"ArrowUp": "↑",
			"ShiftRight": true,

			"ControlLeft": true,
			"MetaLeft": true,
			"AltLeft": true,
			"Space": " ",
			"AltRight": true,
			"ArrowLeft": "←",
			"ArrowDown": "↓",
			"ArrowRight": "→",
			"ControlRight": true,

		};

		this.ControlLeftAndAltLeft = {
			"ControlLeft": false,
			"AltLeft": false,
		}

		this.textarea = null;
		this.textAreaСontent = '';
		this.virtualCaret = null;
		this.capsLockElement = null;
		this.capsLockStatus = false;
		this.shiftStatus = false;
	}


	init() {
		this._getLangStorage();

		this.container = document.createElement('div');
		this.container.classList.add('container');


		this.headerElements = `
		<div class="header">Виртуальная клавиатура создана в ОС Виндовс</div>
		<div class="description">Для смены раскладки нажмите левый Контрол + левый Альт</div>
		`;

		this.textarea = document.createElement('textarea');
		this.textarea.classList.add('keyboard-textarea');
		this.textarea.name = 'tArea';
		this.textarea.id = 'textarea';
		this.textarea.cols = '77';
		this.textarea.rows = '10';		

		this.keyboardContainer = document.createElement('div');
		this.keyboardContainer.classList.add('keyboard-container');

		this.keyboardContainer.append( this._createKeyboardKeys(this.currentLang) );
		this.keyboardKeys = this.keyboardContainer.querySelectorAll('.key');

		this.container.innerHTML = this.headerElements;
		this.container.append(this.textarea);
		this.container.append(this.keyboardContainer);
		document.body.append(this.container);

		this._createRealKeyboarListener();
	}


	_createKeyboardKeys(curLang) {
		const keys = document.createDocumentFragment();
		const keyItems = (curLang === 'EN') ? this.keysEn : this.keysRu;

		for (let i = 0; i < keyItems.length; i++) {
			const keyElem = document.createElement('span');
			keyElem.classList.add('key');
			keyElem.dataset.key = this.dataKeysCodes[i];
			keyElem.textContent = keyItems[i];

			if (keyItems[i] === 'Backspace') {
				keyElem.classList.add('double-width');
				keyElem.addEventListener('click', () => {
					this._actionBackspace();
				});
			}

			else if (keyItems[i] === 'Del') {
				keyElem.addEventListener('click', () => {
					this._actionDelete();
				});
			}

			else if (keyItems[i] === 'Tab') {
				keyElem.addEventListener('click', () => {
					this._actionTab();
				});
			}

			else if (keyItems[i] === 'CapsLock') {
				keyElem.classList.add('double-width');
				this.capsLockElement = keyElem;

				keyElem.addEventListener('click', () => {
					this._toggleCapsLock();
				});
			}

			else if (keyItems[i] === 'Enter') {
				keyElem.classList.add('double-width');
				keyElem.addEventListener('click', () => {
					this._actionEnter();
				});				
			}

			else if (keyItems[i] === 'Shift') {
				keyElem.classList.add('double-width');

				keyElem.addEventListener('mousedown', () => {

					this.shiftStatus = true;
					this._toggleKeyboardKeysSizeToLarge();

				});

				keyElem.addEventListener('mouseup', () => {
					this.shiftStatus = false;
					this._toggleKeyboardKeysSizeToSmall();
				});
			}

			else if (keyItems[i] === 'Space' || keyItems[i] === 'Пробел') {
				keyElem.classList.add('space-width');
				keyElem.addEventListener('click', () => {
					this._actionSpace();
				});				
			}

			else if (keyItems[i] === 'Ctrl') {
				keyElem.addEventListener('mousedown', () => {
					this.ControlLeftAndAltLeft.ControlLeft = true;
					if (this.ControlLeftAndAltLeft.AltLeft) {
						this._toggleKeyboardKeysLang();
					}					
				});

				keyElem.addEventListener('mouseup', () => {
					this.ControlLeftAndAltLeft.ControlLeft = false;
				});
			}

			else if (keyItems[i] === 'Win') {
				keyElem.addEventListener('click', () => {
					return;
				});
			}

			else if (keyItems[i] === 'Alt') {
				keyElem.addEventListener('mousedown', () => {
					this.ControlLeftAndAltLeft.AltLeft = true;
					if (this.ControlLeftAndAltLeft.ControlLeft) {
						this._toggleKeyboardKeysLang();
					}
				});

				keyElem.addEventListener('mouseup', () => {
					this.ControlLeftAndAltLeft.AltLeft = false;
				});
			
			}

			else {
				keyElem.addEventListener('click', (e) => {

					this._actionVirtualKeyboard(e);
				});
			}

			keys.append(keyElem);
		} 

		return keys;
	} 


	_createRealKeyboarListener() {
		document.addEventListener('keydown', (e) => {
			e.preventDefault();
			if (!this.keysCodesToSymbolsRu[e.code]) return;

			if ((
				   e.code === 'ShiftLeft' 
				|| e.code === 'ShiftRight'
				|| e.code === 'Tab'
				|| e.code === 'ControlLeft'
				|| e.code === 'AltLeft'
				|| e.code === 'CapsLock'
				)
				&& e.repeat
				) { return; }

			for (let key of this.keyboardKeys) {
				if (key.dataset.key === e.code) {
					key.classList.add('key-active');
				}
			}

			if (e.code === 'Backspace') {
				this._actionBackspace();
			}

			else if (e.code === 'Tab') {
				this._actionTab();
			}

			else if (e.code === 'Delete') {
				this._actionDelete();
			}

			else if (e.code === 'CapsLock') {
				this._toggleCapsLock();
			}

			else if (e.code === 'Enter') {
				this._actionEnter();
			}

			else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
				this.shiftStatus = true;

				this._toggleKeyboardKeysSizeToLarge();

			}

			else if (e.code === 'ControlLeft') {
				this.ControlLeftAndAltLeft.ControlLeft = true; 

				if (this.ControlLeftAndAltLeft.AltLeft) {

					this._toggleKeyboardKeysLang();
				}
			}

			else if (e.code === 'AltLeft') {
				this.ControlLeftAndAltLeft.AltLeft = true; 

				if (this.ControlLeftAndAltLeft.ControlLeft) {

					this._toggleKeyboardKeysLang();
				}
			}

			else if (e.code === 'MetaLeft') {
				return;
			}

			else if (e.code === 'Space') {
				this._actionSpace();
			}

			else if (e.code === 'AltRight') {
				return;
			}

			else if (e.code === 'ControlRight') {
				return;
			}

			else {
				this._actionRealKeyboard(e);
			}

		});

		document.addEventListener('keyup', (e) => {

			for (let key of this.keyboardKeys) {
				if (key.dataset.key === e.code) {
					key.classList.remove('key-active');
				}
			}

			if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
				this.shiftStatus = false;

				this._toggleKeyboardKeysSizeToSmall();

			}

			else if (e.code === 'ControlLeft') {
				this.ControlLeftAndAltLeft.ControlLeft = false;
			}

			else if (e.code === 'AltLeft') {
				this.ControlLeftAndAltLeft.AltLeft = false;
			}

		});

	}


	_actionBackspace() {
		this.textarea.focus();
		const textareaCaretPosition = this.textarea.selectionStart;
		if (textareaCaretPosition < 1) return;
		this.textAreaСontent = this.textAreaСontent.slice(0, textareaCaretPosition - 1) + '' + this.textAreaСontent.slice(textareaCaretPosition);
		this._updateTextAreaСontent(this.textAreaСontent);
		this.textarea.selectionStart = this.textarea.selectionEnd = textareaCaretPosition - 1;
	}

	_actionTab() {
		this.textarea.focus();
		const textareaCaretPosition = this.textarea.selectionStart;
		this.textAreaСontent = this.textAreaСontent.slice(0, textareaCaretPosition) + '    ' + this.textAreaСontent.slice(textareaCaretPosition);
		this._updateTextAreaСontent(this.textAreaСontent);
		this.textarea.selectionStart = this.textarea.selectionEnd = textareaCaretPosition + 4;
	}

	_actionDelete() {
		this.textarea.focus();
		const textareaCaretPosition = this.textarea.selectionStart;
		this.textAreaСontent = this.textAreaСontent.slice(0, textareaCaretPosition) + '' + this.textAreaСontent.slice(textareaCaretPosition + 1);
		this._updateTextAreaСontent(this.textAreaСontent);
		this.textarea.selectionStart = this.textarea.selectionEnd = textareaCaretPosition;
	}

	_actionEnter() {
		this.textarea.focus();
		const textareaCaretPosition = this.textarea.selectionStart;
		this.textAreaСontent = this.textAreaСontent.slice(0, textareaCaretPosition) + '\n' + this.textAreaСontent.slice(textareaCaretPosition);
		this._updateTextAreaСontent(this.textAreaСontent);
		this.textarea.selectionStart = this.textarea.selectionEnd = textareaCaretPosition + 1;
	}

	_actionSpace() {
		this.textarea.focus();
		const textareaCaretPosition = this.textarea.selectionStart;
		this.textAreaСontent = this.textAreaСontent.slice(0, textareaCaretPosition) + ' ' + this.textAreaСontent.slice(textareaCaretPosition);
		this._updateTextAreaСontent(this.textAreaСontent);
		this.textarea.selectionStart = this.textarea.selectionEnd = textareaCaretPosition + 1;
	}
	
	_actionRealKeyboard(e) {
		this.textarea.focus();

		const textareaCaretPosition = this.textarea.selectionStart;

		let symbol = null;

		if (!this.capsLockStatus & !this.shiftStatus) {

			if (this.currentLang === 'EN') {
				symbol = this.keysCodesToSymbolsEn[e.code]; 
			}
			if (this.currentLang === 'RU') {
				symbol = this.keysCodesToSymbolsRu[e.code];
			}
		}

		else if (this.capsLockStatus && this.shiftStatus) {

			if (this.currentLang === 'EN') {
				symbol = this.keysCodesToSymbolsEnShiftCaps[e.code];
			}
			else {
				symbol = this.keysCodesToSymbolsRuShiftCaps[e.code];
			}
		}

		else if (this.capsLockStatus && !this.shiftStatus) {
			if (this.currentLang === 'EN') {
				symbol = this.keysCodesToSymbolsEnCaps[e.code];
			}
			else {
				symbol = this.keysCodesToSymbolsRuCaps[e.code];
			}
		}

		else if (!this.capsLockStatus && this.shiftStatus) {
			if (this.currentLang === 'EN') {
				symbol = this.keysCodesToSymbolsEnShift[e.code];
			}
			else {
				symbol = this.keysCodesToSymbolsRuShift[e.code];
			}
		}
		
		this.textAreaСontent = this.textAreaСontent.slice(0, textareaCaretPosition) + symbol + this.textAreaСontent.slice(textareaCaretPosition);
		this._updateTextAreaСontent(this.textAreaСontent);
		this.textarea.selectionStart = this.textarea.selectionEnd = this.virtualCaret = textareaCaretPosition + 1;

	}


	_actionVirtualKeyboard(e) {
		this.textarea.focus();
		const textareaCaretPosition = this.textarea.selectionStart;
		let symbol = null;

		if (!this.capsLockStatus & !this.shiftStatus) {

				if (this.currentLang === 'EN') {
					symbol = this.keysCodesToSymbolsEn[e.target.dataset.key]; 
				}
				if (this.currentLang === 'RU') {
					symbol = this.keysCodesToSymbolsRu[e.target.dataset.key];
				}
			}
	
			else if (this.capsLockStatus && this.shiftStatus) {

				if (this.currentLang === 'EN') {
					symbol = this.keysCodesToSymbolsEnShiftCaps[e.target.dataset.key];
				}
				else {
					symbol = this.keysCodesToSymbolsRuShiftCaps[e.target.dataset.key];
				}
			}
	
			else if (this.capsLockStatus && !this.shiftStatus) {
				if (this.currentLang === 'EN') {
					symbol = this.keysCodesToSymbolsEnCaps[e.target.dataset.key];
				}
				else {
					symbol = this.keysCodesToSymbolsRuCaps[e.target.dataset.key];
				}
			}
	
			else if (!this.capsLockStatus && this.shiftStatus) {
				if (this.currentLang === 'EN') {
					symbol = this.keysCodesToSymbolsEnShift[e.target.dataset.key];
				}
				else {
					symbol = this.keysCodesToSymbolsRuShift[e.target.dataset.key];
				}
			}

		this.textAreaСontent = this.textAreaСontent.slice(0, textareaCaretPosition) + symbol + this.textAreaСontent.slice(textareaCaretPosition);
		this._updateTextAreaСontent(this.textAreaСontent);
		this.textarea.selectionStart = this.textarea.selectionEnd = this.virtualCaret = textareaCaretPosition + 1;

	}


	_toggleKeyboardKeysSizeToLarge() {

		if (this.capsLockStatus) {
			if (this.currentLang === 'EN') {
				let i = 0;
				for (let key of this.keyboardKeys) {
					key.textContent = this.keysEnShiftCaps[i];
					i++;
				}
			}
	
			if (this.currentLang === 'RU') {
				let i = 0;
				for (let key of this.keyboardKeys) {
					key.textContent = this.keysRuShiftCaps[i];
					i++;
				}
			}
		}

		else if (!this.capsLockStatus) {
			if (this.currentLang === 'EN') {
				let i = 0;
				for (let key of this.keyboardKeys) {
					key.textContent = this.keysEnShift[i];
					i++;
				}
			}
	
			if (this.currentLang === 'RU') {
				let i = 0;
				for (let key of this.keyboardKeys) {
					key.textContent = this.keysRuShift[i];
					i++;
				}
			}
		}

	}


	_toggleKeyboardKeysSizeToSmall() {

		if (this.capsLockStatus) {
			if (this.currentLang === 'EN') {
				let i = 0;
				for (let key of this.keyboardKeys) {
					key.textContent = this.keysEnCaps[i];
					i++;
				}
			}
	
			if (this.currentLang === 'RU') {
				let i = 0;
				for (let key of this.keyboardKeys) {
					key.textContent = this.keysRuCaps[i];
					i++;
				}
			}
		}

		else if (!this.capsLockStatus) {
			if (this.currentLang === 'EN') {
				let i = 0;
				for (let key of this.keyboardKeys) {
					key.textContent = this.keysEn[i];
					i++;
				}
			}
	
			if (this.currentLang === 'RU') {
				let i = 0;
				for (let key of this.keyboardKeys) {
					key.textContent = this.keysRu[i];
					i++;
				}
			}
		}

	}


	_toggleKeyboardKeysLang() {
		
		this.currentLang = (this.currentLang === 'EN') ? 'RU' : 'EN';

		if (this.capsLockStatus) {
			if (this.shiftStatus) {

				if (this.currentLang === 'EN') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysEnShiftCaps[i];
						i++;
					}
				}
		
				if (this.currentLang === 'RU') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysRuShiftCaps[i];
						i++;
					}
				}
			} 
			
			else if (!this.shiftStatus) {

				if (this.currentLang === 'EN') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysEnCaps[i];
						i++;
					}
				}
		
				if (this.currentLang === 'RU') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysRuCaps[i];
						i++;
					}
				}

			}

		}
		else if (!this.capsLockStatus) {

			if (this.shiftStatus) {

				if (this.currentLang === 'EN') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysEnShift[i];
						i++;
					}
				}
		
				if (this.currentLang === 'RU') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysRuShift[i];
						i++;
					}
				}
			} 
			
			else if (!this.shiftStatus) {

				if (this.currentLang === 'EN') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysEn[i];
						i++;
					}
				}
		
				if (this.currentLang === 'RU') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysRu[i];
						i++;
					}
				}

			}
			this._setLangStorage(this.currentLang);
		}
		
	}


	_toggleCapsLock() {

		this.capsLockStatus = this.capsLockStatus ? false : true;

		this.capsLockElement.classList.toggle('key-active-capslock');

		if (this.capsLockStatus) {
			if (this.shiftStatus) {

				if (this.currentLang === 'EN') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysEnShiftCaps[i];
						i++;
					}
				}
		
				if (this.currentLang === 'RU') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysRuShiftCaps[i];
						i++;
					}
				}
			} 
			
			else if (!this.shiftStatus) {

				if (this.currentLang === 'EN') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysEnCaps[i];
						i++;
					}
				}
		
				if (this.currentLang === 'RU') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysRuCaps[i];
						i++;
					}
				}

			}

		}
		else if (!this.capsLockStatus) {

			if (this.shiftStatus) {

				if (this.currentLang === 'EN') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysEnShift[i];
						i++;
					}
				}
		
				if (this.currentLang === 'RU') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysRuShift[i];
						i++;
					}
				}
			} 
			
			else if (!this.shiftStatus) {

				if (this.currentLang === 'EN') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysEn[i];
						i++;
					}
				}
		
				if (this.currentLang === 'RU') {
					let i = 0;
					for (let key of this.keyboardKeys) {
						key.textContent = this.keysRu[i];
						i++;
					}
				}

			}
		}
	}


	_updateTextAreaСontent(text) {
		this.textarea.value = text;
	}


	_getLangStorage() {
		if (localStorage.getItem('storageLang')) {
			this.currentLang = localStorage.getItem('storageLang');
		} 
		else {
			this.currentLang = 'EN';
		}
	}

	_setLangStorage(lang) {
		localStorage.setItem('storageLang', lang);
	}
}

const virtualKeyboard = new Keyboard();
virtualKeyboard.init();