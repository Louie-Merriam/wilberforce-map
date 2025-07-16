var wms_layers = [];

var format_Wil_0 = new ol.format.GeoJSON();
var features_Wil_0 = format_Wil_0.readFeatures(json_Wil_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wil_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wil_0.addFeatures(features_Wil_0);
var lyr_Wil_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wil_0, 
                style: style_Wil_0,
                popuplayertitle: 'Wil',
                interactive: true,
                title: '<img src="styles/legend/Wil_0.png" /> Wil'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_inlaymap_modified_modified_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'inlaymap_modified_modified<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/inlaymap_modified_modified_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8580482.985430, 4709389.962722, -8579002.412439, 4711284.994857]
        })
    });
var lyr_Screenshot20250716at40618PM_modified_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Screenshot 2025-07-16 at 4.06.18 PM_modified<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Screenshot20250716at40618PM_modified_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8580294.889698, 4709476.557010, -8579061.597684, 4711036.712609]
        })
    });
var lyr_inlaymap_modified_modified_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'inlaymap_modified_modified<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/inlaymap_modified_modified_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8580482.985430, 4709389.962722, -8579002.412439, 4711284.994857]
        })
    });
var format_W_5 = new ol.format.GeoJSON();
var features_W_5 = format_W_5.readFeatures(json_W_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_W_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_W_5.addFeatures(features_W_5);
var lyr_W_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_W_5, 
                style: style_W_5,
                popuplayertitle: 'W',
                interactive: true,
                title: '<img src="styles/legend/W_5.png" /> W'
            });

lyr_Wil_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_inlaymap_modified_modified_2.setVisible(true);lyr_Screenshot20250716at40618PM_modified_3.setVisible(true);lyr_inlaymap_modified_modified_4.setVisible(true);lyr_W_5.setVisible(true);
var layersList = [lyr_Wil_0,lyr_OpenStreetMap_1,lyr_inlaymap_modified_modified_2,lyr_Screenshot20250716at40618PM_modified_3,lyr_inlaymap_modified_modified_4,lyr_W_5];
lyr_Wil_0.set('fieldAliases', {'fid': 'fid', 'Blurb': 'Blurb', });
lyr_W_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Info': 'Info', 'Dates': 'Dates', 'Address': 'Address', });
lyr_Wil_0.set('fieldImages', {'fid': 'TextEdit', 'Blurb': 'TextEdit', });
lyr_W_5.set('fieldImages', {'fid': '', 'Name': '', 'Info': '', 'Dates': '', 'Address': '', });
lyr_Wil_0.set('fieldLabels', {'fid': 'no label', 'Blurb': 'no label', });
lyr_W_5.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Info': 'no label', 'Dates': 'no label', 'Address': 'no label', });
lyr_W_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});