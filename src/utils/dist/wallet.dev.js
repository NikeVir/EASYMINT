"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mulmintNFT = exports.getNFTs = exports.mintNFT = exports.getContractdetails = exports.getPKH = exports.disconnectWallet = exports.connectWallet = exports.NETWORK = exports.CONTRACT_ADDRESS = exports.NAME = void 0;

var _taquito = require("@taquito/taquito");

var _beaconWallet = require("@taquito/beacon-wallet");

var _utils = require("@taquito/utils");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NAME = 'Tutorial';
exports.NAME = NAME;
var CONTRACT_ADDRESS = 'KT1XSqpRQUqubwJwdjRFduYwKa3vXAqBssxU';
exports.CONTRACT_ADDRESS = CONTRACT_ADDRESS;
var NETWORK = 'jakartanet';
exports.NETWORK = NETWORK;
var tezos = new _taquito.TezosToolkit("https://jakartanet.smartpy.io");
var wallet = new _beaconWallet.BeaconWallet({
  name: "tezosNFT",
  preferredNetwork: "jakartanet"
});

var connectWallet = function connectWallet() {
  return regeneratorRuntime.async(function connectWallet$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(wallet.requestPermissions({
            network: {
              type: "jakartanet"
            }
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.connectWallet = connectWallet;
tezos.setWalletProvider(wallet);

var getContractdetails = function getContractdetails() {
  var contract;
  return regeneratorRuntime.async(function getContractdetails$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(tezos.wallet.at("KT1XSqpRQUqubwJwdjRFduYwKa3vXAqBssxU"));

        case 2:
          contract = _context2.sent;
          return _context2.abrupt("return", contract);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getContractdetails = getContractdetails;

var disconnectWallet = function disconnectWallet() {
  return regeneratorRuntime.async(function disconnectWallet$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(wallet.clearActiveAccount());

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.disconnectWallet = disconnectWallet;

var getPKH = function getPKH() {
  var pkh;
  return regeneratorRuntime.async(function getPKH$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(wallet.client.getActiveAccount());

        case 2:
          pkh = _context4.sent;

          if (!pkh) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", pkh.address);

        case 7:
          return _context4.abrupt("return", '');

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.getPKH = getPKH;

var mulmintNFT = function mulmintNFT(address, urlobj) {
  var obj, amount, url, contract, token_id, i, op, batch, operation;
  return regeneratorRuntime.async(function mulmintNFT$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(disconnectWallet());

        case 3:
          _context5.next = 5;
          return regeneratorRuntime.awrap(connectWallet());

        case 5:
          obj = [];
          amount = 1;
          _context5.next = 9;
          return regeneratorRuntime.awrap(getContractdetails());

        case 9:
          contract = _context5.sent;
          _context5.next = 12;
          return regeneratorRuntime.awrap(getNFTs());

        case 12:
          token_id = _context5.sent;

          for (i = 0; i < urlobj.length; i++) {
            url = (0, _utils.char2Bytes)(urlobj[i].toString());
            console.log(url);
            op = contract.methods.mint(address, amount, _taquito.MichelsonMap.fromLiteral({
              "": url
            }), token_id.length + i).toTransferParams();
            op.kind = _taquito.OpKind.TRANSACTION;
            obj[i] = op;
          }

          console.log(obj);
          _context5.next = 17;
          return regeneratorRuntime.awrap(tezos.wallet.batch(obj));

        case 17:
          batch = _context5.sent;
          _context5.next = 20;
          return regeneratorRuntime.awrap(batch.send());

        case 20:
          operation = _context5.sent;
          _context5.next = 23;
          return regeneratorRuntime.awrap(operation.receipt);

        case 23:
          return _context5.abrupt("return", _context5.sent);

        case 26:
          _context5.prev = 26;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);

        case 29:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 26]]);
};

exports.mulmintNFT = mulmintNFT;

var mintNFT = function mintNFT(address, urlobj) {
  var amount, token_id, contract, url, op;
  return regeneratorRuntime.async(function mintNFT$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          amount = 1;
          _context6.next = 4;
          return regeneratorRuntime.awrap(getNFTs());

        case 4:
          token_id = _context6.sent;
          _context6.next = 7;
          return regeneratorRuntime.awrap(getContractdetails());

        case 7:
          contract = _context6.sent;
          url = (0, _utils.char2Bytes)(urlobj);
          _context6.next = 11;
          return regeneratorRuntime.awrap(contract.methods.mint(address, amount, _taquito.MichelsonMap.fromLiteral({
            "": url
          }), token_id.length).send());

        case 11:
          op = _context6.sent;
          _context6.next = 14;
          return regeneratorRuntime.awrap(op.confirmation(3));

        case 14:
          return _context6.abrupt("return", _context6.sent);

        case 17:
          _context6.prev = 17;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);

        case 20:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 17]]);
};

exports.mintNFT = mintNFT;

var getNFTs = function getNFTs() {
  var response, data, tokens, i, url, token;
  return regeneratorRuntime.async(function getNFTs$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("https://api.jakartanet.tzkt.io/v1/contracts/".concat(CONTRACT_ADDRESS, "/bigmaps/token_metadata/keys")));

        case 2:
          response = _context7.sent;
          data = response.data;
          tokens = [];

          for (i = 0; i < data.length; i++) {
            url = data[i].value.token_info[''];

            if (url) {
              url = (0, _utils.bytes2Char)(url);
            }

            token = {
              token_id: data[i].value.token_id,
              url: url
            };
            tokens.push(token);
          }

          return _context7.abrupt("return", tokens);

        case 7:
        case "end":
          return _context7.stop();
      }
    }
  });
};

exports.getNFTs = getNFTs;