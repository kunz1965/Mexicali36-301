var APP_DATA = {
  "scenes": [
    {
      "id": "0-street-view-360-1",
      "name": "Street View 360 1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -2.013876721191675,
        "pitch": -0.11204653570029421,
        "fov": 0.8606502439777018
      },
      "linkHotspots": [
        {
          "yaw": -2.3505438453853955,
          "pitch": 0.20478663834394872,
          "rotation": 0,
          "target": "1-recepcin"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.137042387649675,
          "pitch": 0.18840499813719802,
          "title": "Renta Departamento",
          "text": "Excelente ubicación en la<div>Hipódromo Condesa<br><div>Mexicali # 36, 3er piso</div></div>"
        },
        {
          "yaw": -1.527042387649675,
          "pitch": -0.45040499813719802,
          "title": "IMÁGENES 360°",
          "text": "Instrucciones:<br><div>Mantener botón izquierdo del 🖱 y mover 360°,<br><div>Click sobre los íconos:<br><div>&#9830&nbsp<mark>&nbspUP&nbsp</mark>&nbsp<mark>&nbspDW&nbsp</mark>&nbsp<mark>&nbspLT&nbsp</mark>&nbsp<mark>&nbspRT&nbsp</mark>&nbsp Mover en 360,<br><div>&#9830&nbsp<mark>&nbsp+&nbsp</mark>&nbspy&nbsp<mark>&nbsp-&nbsp</mark>&nbsp&nbsp Ajuste de zoom,<br></div>&#9830&nbsp<mark>&nbsp ⅈ &nbsp</mark>&nbsp&nbsp&nbsp Información disponible.<br><br><div>Recorrido: Click sobre la flecha en fondo blanco o sobre la lista a la izquierda</div>"
        }
      ]
    },
    {
      "id": "1-recepcin",
      "name": "Recepción",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.27827246817159335,
        "pitch": 0.30163842507293026,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.24259764982244647,
          "pitch": 0.6953952958054224,
          "rotation": 0.7853981633974483,
          "target": "2-accespdpto-301"
        },
        {
          "yaw": 3.0936357582749885,
          "pitch": 0.2761829413560193,
          "rotation": 0,
          "target": "0-street-view-360-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2034976166463736,
          "pitch": -0.05584213080982181,
          "title": "Amplia Recepción",
          "text": "Dos lugares de estacionamiento independientes."
        }
      ]
    },
    {
      "id": "2-accespdpto-301",
      "name": "AccespDpto-301",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.5674236742328915,
        "pitch": 0.27845034190744045,
        "fov": 1.5814077492034926
      },
      "linkHotspots": [
        {
          "yaw": -1.7783172379905903,
          "pitch": 0.652527682311332,
          "rotation": 0,
          "target": "1-recepcin"
        },
        {
          "yaw": -0.03296765202635399,
          "pitch": 0.461453363519448,
          "rotation": 6.283185307179586,
          "target": "3-pasilloacceso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pasilloacceso",
      "name": "PasilloAcceso",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.7763006689973704,
        "pitch": 0.48387747482909127,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5962503455381984,
          "pitch": 0.7347951769009669,
          "rotation": 0.7853981633974483,
          "target": "4-cuartoservicio"
        },
        {
          "yaw": -0.06723295253499906,
          "pitch": 0.30745373467668813,
          "rotation": 0,
          "target": "5-estanciacocina"
        },
        {
          "yaw": 3.10564454654941,
          "pitch": 0.5248359972918735,
          "rotation": 0,
          "target": "2-accespdpto-301"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cuartoservicio",
      "name": "CuartoServicio",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.5380542660033036,
        "pitch": 0.33009488026849354,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8962296143174093,
          "pitch": 0.653186514863453,
          "rotation": 0,
          "target": "3-pasilloacceso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-estanciacocina",
      "name": "EstanciaCocina",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.24036030735393155,
        "pitch": 0.08536936558668451,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7607621558909834,
          "pitch": 0.39563710282837583,
          "rotation": 0,
          "target": "3-pasilloacceso"
        },
        {
          "yaw": 2.2589005713973354,
          "pitch": 0.5621217411873793,
          "rotation": 5.497787143782138,
          "target": "6-pasillorecmaras"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1271751165101627,
          "pitch": -0.09040282978425118,
          "title": "Departamento 301: 100 m2",
          "text": "Amplia Estancia,<div>Cocina Abierta con refrigerador,</div><div>2 Recámaras, la principal con vestidor y baño,</div><div>Baño de visitas,</div><div>Cuarto de servicio Integrado,</div><div>Bodega,&nbsp;</div><div>Elevador,&nbsp;</div><div>Vigilancia 24 horas,</div><div>2 Lugares de estacionamiento</div>"
        }
      ]
    },
    {
      "id": "6-pasillorecmaras",
      "name": "PasilloRecámaras",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.34028912923865207,
        "pitch": 0.23655170208591514,
        "fov": 1.5835240076122732
      },
      "linkHotspots": [
        {
          "yaw": 0.2814680562000227,
          "pitch": 0.6381642129049183,
          "rotation": 0.7853981633974483,
          "target": "7-vestidorrecmara1"
        },
        {
          "yaw": 0.03621809213648319,
          "pitch": 0.3279823637537369,
          "rotation": 0,
          "target": "9-recmara1"
        },
        {
          "yaw": 2.632299368606308,
          "pitch": 0.8183320550964179,
          "rotation": 5.497787143782138,
          "target": "10-bao2"
        },
        {
          "yaw": 3.0794710500296496,
          "pitch": 0.410154568587334,
          "rotation": 0,
          "target": "11-recmara2"
        },
        {
          "yaw": -1.233197005618468,
          "pitch": 0.555036874445781,
          "rotation": 0,
          "target": "5-estanciacocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-vestidorrecmara1",
      "name": "VestidorRecámara1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 1.6353315707990141,
        "pitch": 0.15935614909513518,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9253039570626695,
          "pitch": 0.8472897044716774,
          "rotation": 0,
          "target": "8-bao1"
        },
        {
          "yaw": 2.651248573220631,
          "pitch": 0.7268764590128782,
          "rotation": 5.497787143782138,
          "target": "6-pasillorecmaras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bao1",
      "name": "Baño1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.6553995485935271,
        "pitch": 0.23345273938378597,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.098629326276148,
          "pitch": 0.9403844955889831,
          "rotation": 0.7853981633974483,
          "target": "7-vestidorrecmara1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-recmara1",
      "name": "Recámara1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -3.0547985702245732,
        "pitch": 0.30996598834703804,
        "fov": 1.5835240076122732
      },
      "linkHotspots": [
        {
          "yaw": -2.467757488841837,
          "pitch": 0.5353502723740533,
          "rotation": 0,
          "target": "6-pasillorecmaras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bao2",
      "name": "Baño2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.8474592755557602,
        "pitch": 0.14797356701692266,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1341962799055434,
          "pitch": 0.8738672977861448,
          "rotation": 0,
          "target": "6-pasillorecmaras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-recmara2",
      "name": "Recámara2",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 2.9286645728132443,
        "pitch": 0.23330705647153138,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3976423061575325,
          "pitch": 0.5826608087839578,
          "rotation": 0,
          "target": "6-pasillorecmaras"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mexicali36-301",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
