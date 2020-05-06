export default {
  "absorbers": [],
  "background": {},
  "backgroundMask": {
    "cover": {
      "color": {
        "value": "#0ef"
      },
      "opacity": 0.5
    },
    "enable": false
  },
  "detectRetina": false,
  "emitters": [],
  "fpsLimit": 30,
  "interactivity": {
    "detectsOn": "canvas",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push",
      },
      "onDiv": {
        "elementId": "",
        "enable": false,
        "mode": []
      },
      "onHover": {
        "enable": true,
        "mode": [],
        "parallax": {
          "enable": true,
          "force": 10,
          "smooth": 50
        }
      },
      "resize": true
    },
    "modes": {
      "absorbers": [],
      "bubble": {
        "distance": 200,
        "duration": 0.4
      },
      "connect": {
        "distance": 80,
        "lineLinked": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "emitters": [],
      "grab": {
        "distance": 100,
        "lineLinked": {
          "opacity": 1
        }
      },
      "push": {
        "quantity": 1
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
        "speed": 1
      },
      "slow": {
        "factor": 3,
        "radius": 200
      }
    }
  },
  "particles": {
    "collisions": {
      "enable": false,
      "mode": "bounce"
    },
    "color": {
      "value": "#0de"
    },
    "lineLinked": {
      "blink": false,
      "color": {
        "value": "#ffffff"
      },
      "consent": false,
      "distance": 150,
      "enable": true,
      "opacity": 0.4,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "lime"
        },
        "enable": false
      },
      "width": 1
    },
    "move": {
      "attract": {
        "enable": false,
        "rotate": {
          "x": 3000,
          "y": 3000
        }
      },
      "direction": "none",
      "enable": true,
      "outMode": "out",
      "random": false,
      "speed": 2,
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fillColor": {
          "value": "#000000"
        }
      }
    },
    "number": {
      "density": {
        "enable": false,
        "area": 800
      },
      "limit": 0,
      "value": 100
    },
    "opacity": {
      "animation": {
        "enable": false,
        "minimumValue": 0,
        "speed": 2,
        "sync": false
      },
      "random": {
        "enable": false,
        "minimumValue": 1
      },
      "value": 1
    },
    "rotate": {
      "animation": {
        "enable": false,
        "speed": 0,
        "sync": false
      },
      "direction": "clockwise",
      "random": false,
      "value": 0
    },
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "options": {
        "character": {
          "fill": true,
          "close": true,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "char": {
          "fill": true,
          "close": true,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "polygon": {
          "fill": true,
          "close": true,
          "sides": 5
        },
        "star": {
          "fill": true,
          "close": true,
          "sides": 5
        }
      },
      "image": {
        "fill": true,
        "close": true,
        "height": 100,
        "replaceColor": true,
        "src": "",
        "width": 100
      },
      "type": "circle"
    },
    "size": {
      "animation": {
        "enable": false,
        "minimumValue": 0,
        "speed": 5,
        "sync": false
      },
      "random": {
        "enable": false,
        "minimumValue": 1
      },
      "value": 3
    },
    "stroke": {
      "color": {
        "value": "#ff0000"
      },
      "width": 0,
      "opacity": 1
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    }
  },
  "pauseOnBlur": true,
  "polygon": {
    "draw": {
      "enable": false,
      "stroke": {
        "color": {
          "value": "#fff"
        },
        "width": 0.5,
        "opacity": 1
      }
    },
    "enable": false,
    "inline": {
      "arrangement": "one-per-point"
    },
    "move": {
      "radius": 10,
      "type": "path"
    },
    "scale": 1,
    "type": "none",
    "url": ""
  }
}
