var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_CitraEFOBKM_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Citra EFO BKM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CitraEFOBKM_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13605855.698200, -397158.564300, 13606810.831800, -396245.559300]
                            })
                        });
var format_EFOBKM_2 = new ol.format.GeoJSON();
var features_EFOBKM_2 = format_EFOBKM_2.readFeatures(json_EFOBKM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EFOBKM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EFOBKM_2.addFeatures(features_EFOBKM_2);
var lyr_EFOBKM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EFOBKM_2, 
                style: style_EFOBKM_2,
                popuplayertitle: "EFO BKM",
                interactive: true,
    title: 'EFO BKM<br />\
    <img src="styles/legend/EFOBKM_2_0.png" /> EFO  BSA Kosongan<br />\
    <img src="styles/legend/EFOBKM_2_1.png" /> EFO BSA Atas<br />\
    <img src="styles/legend/EFOBKM_2_2.png" /> Efo BSA Bawah<br />\
    <img src="styles/legend/EFOBKM_2_3.png" /> EFO Gorong-gorong<br />\
    <img src="styles/legend/EFOBKM_2_4.png" /> EFO Kampung Bajo<br />\
    <img src="styles/legend/EFOBKM_2_5.png" /> EFO Sample House<br />\
    <img src="styles/legend/EFOBKM_2_6.png" /> <br />'
        });
var format_RuteMessBKM_3 = new ol.format.GeoJSON();
var features_RuteMessBKM_3 = format_RuteMessBKM_3.readFeatures(json_RuteMessBKM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteMessBKM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteMessBKM_3.addFeatures(features_RuteMessBKM_3);
var lyr_RuteMessBKM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteMessBKM_3, 
                style: style_RuteMessBKM_3,
                popuplayertitle: "Rute Mess - BKM",
                interactive: true,
                title: '<img src="styles/legend/RuteMessBKM_3.png" /> Rute Mess - BKM'
            });
var format_IUPPTBKM_4 = new ol.format.GeoJSON();
var features_IUPPTBKM_4 = format_IUPPTBKM_4.readFeatures(json_IUPPTBKM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUPPTBKM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUPPTBKM_4.addFeatures(features_IUPPTBKM_4);
var lyr_IUPPTBKM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUPPTBKM_4, 
                style: style_IUPPTBKM_4,
                popuplayertitle: "IUP PT. BKM",
                interactive: true,
                title: '<img src="styles/legend/IUPPTBKM_4.png" /> IUP PT. BKM'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CitraEFOBKM_1.setVisible(true);lyr_EFOBKM_2.setVisible(true);lyr_RuteMessBKM_3.setVisible(true);lyr_IUPPTBKM_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CitraEFOBKM_1,lyr_EFOBKM_2,lyr_RuteMessBKM_3,lyr_IUPPTBKM_4];
lyr_EFOBKM_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Kapasitas (MT)': 'Kapasitas (MT)', 'Deskripsi': 'Deskripsi', });
lyr_RuteMessBKM_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Deskripsi': 'Deskripsi', 'Panjang (Km)': 'Panjang (Km)', });
lyr_IUPPTBKM_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Luas (Ha)': 'Luas (Ha)', });
lyr_EFOBKM_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Kapasitas (MT)': 'Range', 'Deskripsi': 'TextEdit', });
lyr_RuteMessBKM_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Deskripsi': 'TextEdit', 'Panjang (Km)': 'Range', });
lyr_IUPPTBKM_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Luas (Ha)': '', });
lyr_EFOBKM_2.set('fieldLabels', {'fid': 'no label', 'ID': 'inline label - always visible', 'Kapasitas (MT)': 'inline label - always visible', 'Deskripsi': 'inline label - always visible', });
lyr_RuteMessBKM_3.set('fieldLabels', {'fid': 'no label', 'ID': 'inline label - always visible', 'Deskripsi': 'inline label - always visible', 'Panjang (Km)': 'inline label - always visible', });
lyr_IUPPTBKM_4.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - always visible', 'Luas (Ha)': 'inline label - always visible', });
lyr_IUPPTBKM_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});