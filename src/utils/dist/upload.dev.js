"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadToIpfs = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _nft = require("nft.storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweERBNTQzZUE4NTBlQzQ5MEZEYjYwRGMzNzM4NkMyZDJhMTY5RTYzNjAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1OTE3OTMxOTYxNCwibmFtZSI6Im5ld0tleSJ9.L939Un52xPfMeTA2F84RXfWYfq633QfdavdTVhECV_g';
var client = new _nft.NFTStorage({
  token: apiKey
});

var uploadToIpfs = function uploadToIpfs(name, description, symbol, imgFile) {
  var metadata;
  return regeneratorRuntime.async(function uploadToIpfs$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(client.store({
            name: name,
            description: description,
            image: new _nft.File([imgFile], imgFile.name, {
              type: imgFile.type
            }),
            symbol: symbol,
            decimals: 0,
            shouldPreferSymbol: false,
            isBooleanAmount: true,
            artifactUri: new _nft.File([imgFile], imgFile.name, {
              type: imgFile.type
            }),
            displayUri: new _nft.File([imgFile], imgFile.name, {
              type: imgFile.type
            }),
            thumbnailUri: new _nft.File([imgFile], imgFile.name, {
              type: imgFile.type
            }),
            creators: ['EASYMINT']
          }));

        case 2:
          metadata = _context.sent;
          return _context.abrupt("return", metadata.url);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.uploadToIpfs = uploadToIpfs;