var adfoxBiddersMap = {
  myTarget: "1637611",
  sape: "1894635",
};

var adUnits = [
  {
    code: "adfox_block_1",
    sizes: [
      [300, 300],
      [300, 250],
    ],
    bids: [
      {
        bidder: "myTarget",
        params: {
          placementId: "1977225",
          sendTargetRef: true,
          additional: {
            fpid: window.rb_sync && window.rb_sync.id ? window.rb_sync.id : "",
          },
        },
      },
      {
        bidder: "sape",
        params: {
          placementId: "1060963",
        },
      },
    ],
  },
  {
    code: "adfox_block_2",
    bids: [
      {
        bidder: "myTarget",
        params: {
          placementId: "1977223",
          sendTargetRef: true,
          additional: {
            fpid: window.rb_sync && window.rb_sync.id ? window.rb_sync.id : "",
          },
        },
      },
      {
        bidder: "sape",
        params: {
          placementId: "1060964",
        },
      },
    ],
  },
];

var userTimeout = 1500;

window.YaHeaderBiddingSettings = {
  biddersMap: adfoxBiddersMap,
  adUnits: adUnits,
  timeout: userTimeout,
};
