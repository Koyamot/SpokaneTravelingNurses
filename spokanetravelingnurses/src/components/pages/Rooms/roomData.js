const roomsUrl = process.env.REACT_APP_S3_BUCKET;
const rooms = [
  {
    room: [
      "Private Room Key",
      "Refrigerator with Freezer",
      "Queen-Sized Mattress",
      "Fresh Linens & Blankets",
      "Dresser",
      "32” TV with Dish TV",
      "Bluetooth Headset",
      "Vanity Mirror with Shelving",
      "Desk and Chair",
      "Tinted Windows",
      "Blackout Curtains",
    ],
  },
  {
    roomInfo: [
      {
        id: 0,
        name: "Room A",
        size: "10x15",
        link: "https://spokanetravelingnurses.com/room/",
        included: [
          {
            tv: "32' TV",
            bathroom: "shared",
            kitchen: "shared",
            dresser: "3 drawer dresser",
          },
        ],
        pictures: [
          `${roomsUrl}medium_rooma_00_4319f0dc3e.jpg`,
          `${roomsUrl}medium_rooma_01_e90099156f.jpg`,
          `${roomsUrl}medium_rooma_02_292ffa654d.jpg`,
        ],
      },
      {
        id: 1,
        name: "Room E",
        size: "10x15",
        link: "https://spokanetravelingnurses.com/room/",
        included: [
          {
            tv: "32' TV",
            bathroom: "shared",
            kitchen: "shared",
            dresser: "3 drawer dresser",
          },
        ],
        pictures: [
          `${roomsUrl}medium_roome_00_fba942e901.jpg`,
          `${roomsUrl}medium_roome_01_38b29ba8cf.jpg`,
        ],
      },
      {
        id: 2,
        name: "Room I",
        size: "10x15",
        link: "https://spokanetravelingnurses.com/room/",
        included: [
          {
            tv: "32' TV",
            bathroom: "shared",
            kitchen: "shared",
            dresser: "3 drawer dresser",
          },
        ],
        pictures: [
          `${roomsUrl}medium_roomi_00_e7c291e192.jpg`,
          `${roomsUrl}medium_roomi_01_8bec298c20.jpg`,
        ],
      },
      {
        id: 3,
        name: "Room O",
        size: "10x15",
        link: "https://spokanetravelingnurses.com/room/",
        included: [
          {
            tv: "32' TV",
            bathroom: "shared",
            kitchen: "shared",
            dresser: "3 drawer dresser",
          },
        ],
        pictures: [`${roomsUrl}medium_roomo_00_cf14d9623c.jpg`],
      },
      {
        id: 4,
        name: "Room U",
        size: "10x15",
        link: "https://spokanetravelingnurses.com/room/",
        included: [
          {
            tv: "32' TV",
            bathroom: "shared",
            kitchen: "shared",
            dresser: "3 drawer dresser",
          },
        ],
        pictures: [
          `${roomsUrl}medium_roomu_00_c7b2df1883.jpg`,
          `${roomsUrl}medium_roomu_01_9ab66f9ae3.jpg`,
        ],
      },
      {
        id: 5,
        name: "Room Y",
        size: "10x15",
        link: "https://spokanetravelingnurses.com/room/",
        included: [
          {
            tv: "32' TV",
            bathroom: "shared",
            kitchen: "shared",
            dresser: "3 drawer dresser",
          },
        ],
        pictures: [
          `${roomsUrl}medium_roomy_00_14564dd5d4.jpg`,
          `${roomsUrl}medium_roomy_01_1fe0f5ea41.jpg`,
        ],
      },
    ],
  },
  {
    tour: [
      {
        livingRoom: [
          `${roomsUrl}medium_livingroom_00_74d0cd00cc.jpg`,
          `${roomsUrl}medium_livingroom_01_5e0e3a488d.jpg`,
        ],
        kitchen: [
          `${roomsUrl}medium_kitchen_00_8d9d737d73.jpg`,
          `${roomsUrl}medium_kitchen_01_2910ba357a.jpg`,
          `${roomsUrl}medium_kitchen_02_fb58345546.jpg`,
          `${roomsUrl}medium_kitchen_03_8d0a569a16.jpg`,
        ],
        upstairs: [
          `${roomsUrl}medium_upstairs_00_fa404f804b.jpg`,
          `${roomsUrl}medium_upstairs_01_44485bd1ef.jpg`,
          `${roomsUrl}medium_upstairs_02_8ee4f2284f.jpg`,
          `${roomsUrl}medium_upstairs_03_7a4ca788ed.jpg`,
          `${roomsUrl}medium_upstairs_04_0ddd1ca9f0.jpg`,
        ],
        upstairsBathroom: [
          `${roomsUrl}medium_upstairs_bathroom00_c47258a4a4.jpg`,
          `${roomsUrl}medium_upstairs_bathroom01_50f18d263f.jpg`,
        ],
        diningRoom: [
          `${roomsUrl}medium_dining_00_2415798e91.jpg`,
          `${roomsUrl}medium_dining_01_56067c2f71.jpg`,
        ],
        downstairsBathroom: [
          `${roomsUrl}medium_downstairs_bathroom_00_cbe29f2406.jpg`,
        ],
      },
    ],
  },
];

module.exports = {
  rooms,
};
