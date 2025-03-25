ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([672772.154962, 5926744.395654, 676236.029218, 5928879.047646]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_casa_1 = new ol.format.GeoJSON();
var features_casa_1 = format_casa_1.readFeatures(json_casa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_casa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casa_1.addFeatures(features_casa_1);
cluster_casa_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_casa_1
});
var lyr_casa_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_casa_1, 
                style: style_casa_1,
                popuplayertitle: 'casa',
                interactive: true,
                title: '<img src="styles/legend/casa_1.png" /> casa'
            });

lyr_OSMStandard_0.setVisible(true);lyr_casa_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_casa_1];
lyr_casa_1.set('fieldAliases', {'id': 'id', 'T_Pregunt': 'T_Pregunt', 'Porc_Co': 'Porc_Co', 'Porc_In': 'Porc_In', 'VIDEO': 'VIDEO', 'Nombre': 'Nombre', 'N_Preg_Co': 'N_Preg_Co', 'N_Preg_In': 'N_Preg_In', 'Porc_Total': 'Porc_Total', });
lyr_casa_1.set('fieldImages', {'id': 'TextEdit', 'T_Pregunt': 'Range', 'Porc_Co': 'Range', 'Porc_In': 'Range', 'VIDEO': 'TextEdit', 'Nombre': 'TextEdit', 'N_Preg_Co': 'Range', 'N_Preg_In': 'Range', 'Porc_Total': 'Range', });
lyr_casa_1.set('fieldLabels', {'id': 'no label', 'T_Pregunt': 'inline label - always visible', 'Porc_Co': 'inline label - visible with data', 'Porc_In': 'inline label - always visible', 'VIDEO': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'N_Preg_Co': 'inline label - always visible', 'N_Preg_In': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', });
lyr_casa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});