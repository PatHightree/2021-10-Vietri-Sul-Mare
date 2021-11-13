var APP_DATA = {
  "scenes": [
    {
      "id": "0-terras",
      "name": "Terras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -3.101152756747016,
        "pitch": -0.12557808079482768,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": -2.9458817585964407,
          "pitch": 0.06193918188255232,
          "rotation": 0,
          "target": "4-keuken"
        },
        {
          "yaw": -3.022294367588332,
          "pitch": -0.6667373374307317,
          "rotation": 0,
          "target": "10-jaccuzi"
        },
        {
          "yaw": 2.5572039108566758,
          "pitch": 0.032289750582542354,
          "rotation": 0,
          "target": "1-hal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hal",
      "name": "Hal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 1.5113147541361762,
        "pitch": 0.05137705570081863,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": -1.6012852399783402,
          "pitch": 0.11424531830043705,
          "rotation": 0,
          "target": "0-terras"
        },
        {
          "yaw": 1.239377387358541,
          "pitch": 0.034324076266029735,
          "rotation": 0,
          "target": "2-eet-tafel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-eet-tafel",
      "name": "Eet tafel",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 2.5957228469543274,
        "pitch": 0.08449355224016664,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": 1.9867181111218049,
          "pitch": 0.05512521525724878,
          "rotation": 0,
          "target": "1-hal"
        },
        {
          "yaw": -2.8736131823850393,
          "pitch": 0.0689560717384996,
          "rotation": 6.283185307179586,
          "target": "3-woonkamer"
        },
        {
          "yaw": 0.40033135486070925,
          "pitch": 0.08119956520193483,
          "rotation": 0,
          "target": "4-keuken"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-woonkamer",
      "name": "Woonkamer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.949325167067448,
          "pitch": 0.08722446264726003,
          "rotation": 0,
          "target": "2-eet-tafel"
        },
        {
          "yaw": 2.967767174502198,
          "pitch": -0.22639677384104573,
          "rotation": 0,
          "target": "5-trap"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-keuken",
      "name": "Keuken",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.240416914776823,
        "pitch": 0.07616505832701037,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": -2.376981913527098,
          "pitch": 0.07857891903845271,
          "rotation": 0,
          "target": "0-terras"
        },
        {
          "yaw": 0.997996267119321,
          "pitch": 0.01614863931813737,
          "rotation": 0,
          "target": "2-eet-tafel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-trap",
      "name": "Trap",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0.7333744038987984,
        "pitch": 0.5236626123121297,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": 0.6144067591094782,
          "pitch": 0.3835079992330108,
          "rotation": 0,
          "target": "1-hal"
        },
        {
          "yaw": 1.7107838855250552,
          "pitch": 0.757671275013692,
          "rotation": 0,
          "target": "2-eet-tafel"
        },
        {
          "yaw": 1.6553564930109363,
          "pitch": 0.403217339665062,
          "rotation": 0,
          "target": "3-woonkamer"
        },
        {
          "yaw": -1.1437322753625985,
          "pitch": 0.3107357604492922,
          "rotation": 0,
          "target": "6-slaapkamer-kids"
        },
        {
          "yaw": -3.0575391392753097,
          "pitch": 0.18035828416370947,
          "rotation": 0,
          "target": "7-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-slaapkamer-kids",
      "name": "Slaapkamer kids",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0325981607365886,
          "pitch": 0.18826306879874366,
          "rotation": 0,
          "target": "5-trap"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-gang",
      "name": "Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.4992428106809186,
        "pitch": 0.28218083110733083,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": -2.061474174409245,
          "pitch": 0.11330230624917448,
          "rotation": 0,
          "target": "8-kamer-fm"
        },
        {
          "yaw": 3.1358749524568994,
          "pitch": 0.23231869899085034,
          "rotation": 0,
          "target": "5-trap"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kamer-fm",
      "name": "Kamer F&M",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 1.556272489931855,
        "pitch": 0.009687499733638916,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": 1.5877645150054356,
          "pitch": 0.0395762014850245,
          "rotation": 0,
          "target": "9-balkon"
        },
        {
          "yaw": -2.1469583876591987,
          "pitch": 0.10303603499725256,
          "rotation": 0,
          "target": "7-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-balkon",
      "name": "Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 1.166844871645619,
        "pitch": 0.044474675162280874,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": -2.002366463395104,
          "pitch": 0.09064093873671553,
          "rotation": 0,
          "target": "8-kamer-fm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-jaccuzi",
      "name": "Jaccuzi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -2.743641483276882,
        "pitch": 0.14094879920261683,
        "fov": 1.439976990459326
      },
      "linkHotspots": [
        {
          "yaw": 2.6859481672131693,
          "pitch": 0.34853042998771144,
          "rotation": 0,
          "target": "0-terras"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
