


// Code goes here

var app = angular.module('myApp',
    []);

 app.controller('countryCtrl', [
         '$scope',
 function($scope) {

$scope.countriesWithPhoneCode = [{
               "name": "Afghanistan",
                "dial_code": "+93",
                "states": [{
                        "name": "Badakhshan"
                    },
                    {
                        "name": "Badghīs"
                    },
                    {
                        "name": "Baghlan"
                    },
                    {
                        "name": "Balkh"

                    },
                    {
                        "name": "Bamyān"

                    },
                    {
                        "name": "Daykundī"
                    },
                    {
                        "name": "Farah"
                    },
                    {
                        "name": "Faryāb"
                    },
                    {
                        "name": "Ghaznī"
                    },
                    {
                        "name": "Ghōr"
                    },
                    {
                        "name": "Helmand"

                    },
                    {
                        "name": "Herat"

                    },
                    {
                        "name": "Jowzjan"

                    },
                    {
                        "name": "Kabul"

                    },
                    {
                        "name": "Kandahar"

                    },
                    {
                        " name": "Kapīsā"

                    },
                    {
                        "name": "Khōst"
                    },
                    {
                        "name": "Kunaṟ",

                    },
                    {
                        "name": "Kunduz"

                    },
                    {
                        "name": "Laghman"

                    },
                    {
                        "name": "Lōgar"

                    },
                    {
                        "name": "Nangarhar"

                    },
                    {
                        "name": "Nīmrōz"

                    },
                    {
                        "name": "Nūristan"

                    },
                    {
                        "name": "Paktiya"

                    },
                    {
                        "name": "Paktīka"

                    },
                    {
                        "name": "Panjshayr"

                    },
                    {
                        "name": "Parwan"

                    },
                    {
                        "name": "Samangan"

                    },
                    {
                        "name": "Sar-e Pul"

                    },
                    {
                        "name": "Takhar"

                    },
                    {
                        "name": "Uruzgan"

                    },
                    {
                        "name": "Wardak"

                    },
                    {
                        "name": "Zabul"

                    }

                ],
                "code": "AF"
            },
            // ... (other countries)


            {
                "name": "Aland Islands",
                "dial_code": "+358",
                "states": [{
                    "name": "Aland Islands"
                }],

                "code": "AX"
            },

            {
                "name": "Albania",
                "dial_code": "+355",
                "states": [{
                        "name": "Bera"
                    },
                    {
                        "name": "Dibër"
                    },
                    {
                        "name": "Durrës"
                    },
                    {
                        "name": "Elbasan"
                    },
                    {
                        "name": "Fier"
                    },
                    {
                        "name": "Gjirokastër"
                    },
                    {
                        "name": "Korçë"
                    },
                    {
                        "name": "Kukës"
                    },
                    {
                        "name": "Lezhë"
                    },
                    {
                        "name": "Shkodër"
                    },
                    {
                        "name": "Tiranë"
                    },
                    {
                        "name": "Vlorë"
                    },
                ],

                "code": "AL"
            },


            {
                "name": "Algeria",
                "dial_code": "+213",

                "states": [{
                        "name": "Adrar"
                    },
                    {
                        "name": "Alger"
                    },
                    {
                        "name": "Annaba"
                    },
                    {
                        "name": "Aïn Defla"
                    },
                    {
                        "name": "Aïn Témouchent"
                    },
                    {
                        "name": "Batna"
                    },
                    {
                        "name": "Biskra"
                    },
                    {
                        "name": "Blida"
                    },
                    {
                        "name": "Bordj Bou Arréridj"
                    },
                    {
                        "name": "Bouira"
                    },
                    {
                        "name": "Boumerdès"
                    },
                    {
                        "name": "Béchar"
                    },
                    {
                        "name": "Béjaïa"
                    },
                    {
                        "name": "Chlef"
                    },
                    {
                        "name": "Constantine"
                    },
                    {
                        "name": "Djelfa"
                    },
                    {
                        "name": "El Bayadh"
                    },
                    {
                        "name": "El Oued"
                    },
                    {
                        "name": "El Tarf"
                    },
                    {
                        "name": "Ghardaïa"
                    },
                    {
                        "name": "Guelma"
                    },
                    {
                        "name": "Illizi"
                    },
                    {
                        "name": "Jijel"
                    },
                    {
                        "name": "Khenchela"
                    },
                    {
                        "name": "Laghouat"
                    },
                    {
                        "name": "M'sila"
                    },
                    {
                        "name": "Mascara"
                    },
                    {
                        "name": "Mila"
                    },
                    {
                        "name": "Mostaganem"
                    },
                    {
                        "name": "Médéa"
                    },
                    {
                        "name": "Naama"
                    },
                    {
                        "name": "Oran"
                    },
                    {
                        "name": "Ouargla"
                    },
                    {
                        "name": "Oum el Bouaghi"
                    },
                    {
                        "name": "Relizane"
                    },
                    {
                        "name": "Saïda"
                    },
                    {
                        "name": "Sidi Bel Abbès"
                    },
                    {
                        "name": "Skikda"
                    },
                    {
                        "name": "Souk Ahras"
                    },
                    {
                        "name": "Sétif"
                    },
                    {
                        "name": "Tamanrasset"
                    },
                    {
                        "name": "Tiaret"
                    },
                    {
                        "name": "Tindouf"
                    },
                    {
                        "name": "Tipaza"
                    },
                    {
                        "name": "Tissemsilt"
                    },
                    {
                        "name": "Tizi Ouzou"
                    },
                    {
                        "name": "Tlemcen"
                    },
                    {
                        "name": "Tébessa"
                    },

                ],

                "code": "DZ"
            },


            {
                "name": "AmericanSamoa",
                "dial_code": "+1684",
                "states": [{
                    "name": "American Samoa"
                }],

                "code": "AS"
            },


            {
                "name": "Andorra",
                "dial_code": "+376",
                "states": [{
                        "name": "Andorra la Vella"
                    },
                    {
                        "name": "Canillo"
                    },
                    {
                        "name": "Encamp"
                    },
                    {
                        "name": "Escaldes-Engordany"
                    },
                    {
                        "name": "La Massana"
                    },
                    {
                        "name": "Ordino"
                    },
                    {
                        "name": "Sant Julià de Lòria"
                    },
                ],
                "code": "AD"
            },

            {
                "name": "Angola",
                "dial_code": "+244",
                "states": [{
                        "name": "Bengo"
                    },
                    {
                        "name": "Benguela"
                    },
                    {
                        "name": "Bié"
                    },
                    {
                        "name": "Cabinda"
                    },
                    {
                        "name": "Cuando Cubango"
                    },
                    {
                        "name": "Cuanza-Norte"
                    },
                    {
                        "name": "Cuanza-Sul"
                    },
                    {
                        "name": "Cunene"
                    },
                    {
                        "name": "Huambo"
                    },
                    {
                        "name": "Huíla"
                    },
                    {
                        "name": "Luanda"
                    },
                    {
                        "name": "Lunda-Norte"
                    },
                    {
                        "name": "Lunda-Sul"
                    },
                    {
                        "name": "Malange"
                    },
                    {
                        "name": "Moxico"
                    },
                    {
                        "name": "Namibe"
                    },
                    {
                        "name": "Uíge"
                    },
                    {
                        "name": "Zaire"
                    },
                ],
                "code": "AO"
            },

            {
                "name": "Anguilla",
                "dial_code": "+1264",
                "states": [{
                    "name": "Anguilla"
                }],
                "code": "AI"
            },

            {
                "name": "Antarctica",
                "dial_code": "+672",
                "states": [{
                    "name": "Antarctica"
                }],
                "code": "AQ"
            },
            
            {
                "name": "Antigua and Barbuda",
                "dial_code": "+1268",
                "states": [{
                        "name": "Barbuda"
                    },
                    {
                        "name": "Redonda"
                    },
                    {
                        "name": "Saint George"
                    },
                    {
                        "name": "Saint John"
                    },
                    {
                        "name": "Saint Mary"
                    },
                    {
                        "name": "Saint Paul"
                    },
                    {
                        "name": "Saint Peter"
                    },
                    {
                        "name": "Saint Philip"
                    },
                ],
                "code": "AG"
            },

            {
                "name": "Argentina",
                "dial_code": "+54",
                "states": [{
                        "name": "Buenos Aires"
                    },
                    {
                        "name": "Catamarca"
                    },
                    {
                        "name": "Chaco"
                    },
                    {
                        "name": "Chubut"
                    },
                    {
                        "name": "Ciudad Autónoma de Buenos Aires"
                    },
                    {
                        "name": "Corrientes"
                    },
                    {
                        "name": "Córdoba"
                    },
                    {
                        "name": "Entre Ríos"
                    },
                    {
                        "name": "Formosa"
                    },
                    {
                        "name": "Jujuy"
                    },
                    {
                        "name": "La Pampa"
                    },
                    {
                        "name": "La Rioja"
                    },
                    {
                        "name": "Mendoza"
                    },
                    {
                        "name": "Misiones"
                    },
                    {
                        "name": "Neuquén"
                    },
                    {
                        "name": "Río Negro"
                    },
                    {
                        "name": "Salta"
                    },
                    {
                        "name": "San Juan"
                    },
                    {
                        "name": "San Luis"
                    },
                    {
                        "name": "Santa Cruz"
                    },
                    {
                        "name": "Santa Fe"
                    },
                    {
                        "name": "Santiago del Estero"
                    },
                    {
                        "name": "Tierra del Fuego"
                    },
                    {
                        "name": "Tucumán"
                    },
                ],
                "code": "AR"
            },

            {
                "name": "Armenia",
                "dial_code": "+374",
                "states": [{
                        "name": "Aragac̣otn"
                    },
                    {
                        "name": "Ararat"
                    },
                    {
                        "name": "Armavir"
                    },
                    {
                        "name": "Erevan"
                    },
                    {
                        "name": "Geġark'unik'"
                    },
                    {
                        "name": "Kotayk'"
                    },
                    {
                        "name": "Loṙi"
                    },
                    {
                        "name": "Syunik'"
                    },
                    {
                        "name": "Tavuš"
                    },
                    {
                        "name": "Vayoć Jor"
                    },
                    {
                        "name": "Širak"
                    },
                ],
                "code": "AM"
            },
            {
                "name": "Aruba",
                "dial_code": "+297",
                "states": [{
                    "name": "Aruba"
                }],
                "code": "AW"
            },
            {
                "name": "Australia",
                "dial_code": "+61",
                "states": [{
                        "name": "Australian Capital Territory"
                    },
                    {
                        "name": "New South Wales"
                    },
                    {
                        "name": "Northern Territory"
                    },
                    {
                        "name": "Queensland"
                    },
                    {
                        "name": "South Australia"
                    },
                    {
                        "name": "Tasmania"
                    },
                    {
                        "name": "Victoria"
                    },
                    {
                        "name": "Western Australia"
                    },
                ],
                "code": "AU"
            },
            {
                "name": "Austria",
                "dial_code": "+43",
                "states": [{
                        "name": "Burgenland"
                    },
                    {
                        "name": "Carinthia"
                    },
                    {
                        "name": "Lower Austria"
                    },
                    {
                        "name": "Salzburg"
                    },
                    {
                        "name": "Styria"
                    },
                    {
                        "name": "Tyrol"
                    },
                    {
                        "name": "Upper Austria"
                    },
                    {
                        "name": "Vienna"
                    },
                    {
                        "name": "Vorarlberg"
                    },
                ],
                "code": "AT"
            },


            {
                "name": "Azerbaijan",
                "dial_code": "+994",
                "states": [{
                        "name": "Absheron District"
                    },
                    {
                        "name": "Agdam District"
                    },
                    {
                        "name": "Agdash District"
                    },
                    {
                        "name": "Aghjabadi District"
                    },
                    {
                        "name": "Agstafa District"
                    },
                    {
                        "name": "Agsu District"
                    },
                    {
                        "name": "Astara District"
                    },
                    {
                        "name": "Babek District"
                    },
                    {
                        "name": "Baku"
                    },
                    {
                        "name": "Balakan District"
                    },
                    {
                        "name": "Barda District"
                    },
                    {
                        "name": "Beylagan District"
                    },
                    {
                        "name": "Bilasuvar District"
                    },
                    {
                        "name": "Dashkasan District"
                    },
                    {
                        "name": "Fizuli District"
                    },
                    {
                        "name": "Ganja"
                    },
                    {
                        "name": "Gədəbəy"
                    },
                    {
                        "name": "Gobustan District"
                    },
                    {
                        "name": "Goranboy District"
                    },
                    {
                        "name": "Goychay"
                    },
                    {
                        "name": "Goygol District"
                    },
                    {
                        "name": "Hajigabul District"
                    },
                    {
                        "name": "Imishli District"
                    },
                    {
                        "name": "Ismailli District"
                    },
                    {
                        "name": "Jabrayil District"
                    },
                    {
                        "name": "Jalilabad District"
                    },
                    {
                        "name": "Julfa District"
                    },
                    {
                        "name": "Kalbajar District"
                    },
                    {
                        "name": "Kangarli District"
                    },
                    {
                        "name": "Khachmaz District"
                    },
                    {
                        "name": "Khizi District"
                    },
                    {
                        "name": "Khojali District"
                    },
                    {
                        "name": "Kurdamir District"
                    },
                    {
                        "name": "Lachin District"
                    },
                    {
                        "name": "Lankaran"
                    },
                    {
                        "name": "Lankaran District"
                    },
                    {
                        "name": "Lerik District"
                    },
                    {
                        "name": "Martuni"
                    },
                    {
                        "name": "Masally District"
                    },
                    {
                        "name": "Mingachevir"
                    },
                    {
                        "name": "Nakhchivan Autonomous Republic"
                    },
                    {
                        "name": "Neftchala District"
                    },
                    {
                        "name": "Oghuz District"
                    },
                    {
                        "name": "Ordubad District"
                    },
                    {
                        "name": "Qabala District"
                    },
                    {
                        "name": "Qakh District"
                    },
                    {
                        "name": "Qazakh District"
                    },
                    {
                        "name": "Quba District"
                    },
                    {
                        "name": "Qubadli District"
                    },
                    {
                        "name": "Qusar District"
                    },
                    {
                        "name": "Saatly District"
                    },
                    {
                        "name": "Sabirabad District"
                    },
                    {
                        "name": "Sadarak District"
                    },
                    {
                        "name": "Salyan District"
                    },
                    {
                        "name": "Samukh District"
                    },
                    {
                        "name": "Shabran District"
                    },
                    {
                        "name": "Shahbuz District"
                    },
                    {
                        "name": "Shaki"
                    },
                    {
                        "name": "Shaki District"
                    },
                    {
                        "name": "Shamakhi District"
                    },
                    {
                        "name": "Shamkir District"
                    },
                    {
                        "name": "Sharur District"
                    },
                    {
                        "name": "Shirvan"
                    },
                    {
                        "name": "Shusha District"
                    },
                    {
                        "name": "Siazan District"
                    },
                    {
                        "name": "Sumqayit"
                    },
                    {
                        "name": "Tartar District"
                    },
                    {
                        "name": "Tovuz District"
                    },
                    {
                        "name": "Ujar District"
                    },
                    {
                        "name": "Yardymli District"
                    },
                    {
                        "name": "Yevlakh"
                    },
                    {
                        "name": "Yevlakh District"
                    },
                    {
                        "name": "Zangilan District"
                    },
                    {
                        "name": "Zaqatala District"
                    },
                    {
                        "name": "Zardab District"
                    },
                ],
                "code": "AZ"
            },


            {
                "name": "Bahamas",
                "dial_code": "+1242",
                "states": [{
                        "name": "Acklins"
                    },
                    {
                        "name": "Acklins and Crooked Islands"
                    },
                    {
                        "name": "Berry Islands"
                    },
                    {
                        "name": "Bimini"
                    },
                    {
                        "name": "Black Point"
                    },
                    {
                        "name": "Cat Island"
                    },
                    {
                        "name": "Central Abaco"
                    },
                    {
                        "name": "Central Andros"
                    },
                    {
                        "name": "Central Eleuthera"
                    },
                    {
                        "name": "Crooked Island"
                    },
                    {
                        "name": "East Grand Bahama"
                    },
                    {
                        "name": "Exuma"
                    },
                    {
                        "name": "Freeport"
                    },
                    {
                        "name": "Fresh Creek"
                    },
                    {
                        "name": "Governor's Harbour"
                    },
                    {
                        "name": "Grand Cay"
                    },
                    {
                        "name": "Green Turtle Cay"
                    },
                    {
                        "name": "Harbour Island"
                    },
                    {
                        "name": "High Rock"
                    },
                    {
                        "name": "Hope Town"
                    },
                    {
                        "name": "Inagua"
                    },
                    {
                        "name": "Kemps Bay"
                    },
                    {
                        "name": "Long Island"
                    },
                    {
                        "name": "Mangrove Cay"
                    },
                    {
                        "name": "Marsh Harbour"
                    },
                    {
                        "name": "Mayaguana District"
                    },
                    {
                        "name": "New Providence"
                    },
                    {
                        "name": "Nichollstown and Berry Islands"
                    },
                    {
                        "name": "North Abaco"
                    },
                    {
                        "name": "North Andros"
                    },
                    {
                        "name": "North Eleuthera"
                    },
                    {
                        "name": "Ragged Island"
                    },
                    {
                        "name": "Rock Sound"
                    },
                    {
                        "name": "Rum Cay District"
                    },
                    {
                        "name": "San Salvador and Rum Cay"
                    },
                    {
                        "name": "San Salvador Island"
                    },
                    {
                        "name": "Sandy Point"
                    },
                    {
                        "name": "South Abaco"
                    },
                    {
                        "name": "South Andros"
                    },
                    {
                        "name": "South Eleuthera"
                    },
                    {
                        "name": "Spanish Wells"
                    },
                    {
                        "name": "West Grand Bahama"
                    },
                ],
                "code": "BS"
            },
            {
                "name": "Bahrain",
                "dial_code": "+973",
                "states": [{
                        "name": "Capital Governorate"
                    },
                    {
                        "name": "Central Governorate"
                    },
                    {
                        "name": "Muharraq Governorate"
                    },
                    {
                        "name": "Northern Governorate"
                    },
                    {
                        "name": "Southern Governorate"
                    },
                ],
                "code": "BH"
            },

            {
                "name": "Bangladesh",
                "dial_code": "+880",
                "states": [{
                        "name": "Bagerhat District"
                    },
                    {
                        "name": "Bahadia"
                    },
                    {
                        "name": "Bandarban District"
                    },
                    {
                        "name": "Barguna District"
                    },
                    {
                        "name": "Barisal District"
                    },
                    {
                        "name": "Barisal Division"
                    },
                    {
                        "name": "Bhola District"
                    },
                    {
                        "name": "Bogra District"
                    },
                    {
                        "name": "Brahmanbaria District"
                    },
                    {
                        "name": "Chandpur District"
                    },
                    {
                        "name": "Chapai Nawabganj District"
                    },
                    {
                        "name": "Chittagong District"
                    },
                    {
                        "name": "Chittagong Division"
                    },
                    {
                        "name": "Chuadanga District"
                    },
                    {
                        "name": "Comilla District"
                    },
                    {
                        "name": "Cox's Bazar District"
                    },
                    {
                        "name": "Dhaka District"
                    },
                    {
                        "name": "Dhaka Division"
                    },
                    {
                        "name": "Dinajpur District"
                    },
                    {
                        "name": "Faridpur District"
                    },
                    {
                        "name": "Feni District"
                    },
                    {
                        "name": "Gaibandha District"
                    },
                    {
                        "name": "Gazipur District"
                    },
                    {
                        "name": "Gopalganj District"
                    },
                    {
                        "name": "Habiganj District"
                    },
                    {
                        "name": "Jamalpur District"
                    },
                    {
                        "name": "Jessore District"
                    },
                    {
                        "name": "Jhalokati District"
                    },
                    {
                        "name": "Jhenaidah District"
                    },
                    {
                        "name": "Joypurhat District"
                    },
                    {
                        "name": "Khagrachari District"
                    },
                    {
                        "name": "Khulna District"
                    },
                    {
                        "name": "Khulna Division"
                    },
                    {
                        "name": "Kishoreganj District"
                    },
                    {
                        "name": "Kurigram District"
                    },
                    {
                        "name": "Kushtia District"
                    },
                    {
                        "name": "Lakshmipur District"
                    },
                    {
                        "name": "Lalmonirhat District"
                    },
                    {
                        "name": "Madaripur District"
                    },
                    {
                        "name": "Meherpur District"
                    },
                    {
                        "name": "Moulvibazar District"
                    },
                    {
                        "name": "Munshiganj District"
                    },
                    {
                        "name": "Mymensingh District"
                    },
                    {
                        "name": "Mymensingh Division"
                    },
                    {
                        "name": "Naogaon District"
                    },
                    {
                        "name": "Narail District"
                    },
                    {
                        "name": "Narayanganj District"
                    },
                    {
                        "name": "Natore District"
                    },
                    {
                        "name": "Netrokona District"
                    },
                    {
                        "name": "Nilphamari District"
                    },
                    {
                        "name": "Noakhali District"
                    },
                    {
                        "name": "Pabna District"
                    },
                    {
                        "name": "Panchagarh District"
                    },
                    {
                        "name": "Patuakhali District"
                    },
                    {
                        "name": "Pirojpur District"
                    },
                    {
                        "name": "Rajbari District"
                    },
                    {
                        "name": "Rajshahi District"
                    },
                    {
                        "name": "Rajshahi Division"
                    },
                    {
                        "name": "Rangamati Hill District"
                    },
                    {
                        "name": "Rangpur District"
                    },
                    {
                        "name": "Rangpur Division"
                    },
                    {
                        "name": "Satkhira District"
                    },
                    {
                        "name": "Shariatpur District"
                    },
                    {
                        "name": "Sherpur District"
                    },
                    {
                        "name": "Sirajganj District"
                    },
                    {
                        "name": "Sunamganj District"
                    },
                    {
                        "name": "Sylhet District"
                    },
                    {
                        "name": "Sylhet Division"
                    },
                    {
                        "name": "Tangail District"
                    },
                    {
                        "name": "Thakurgaon District"
                    },
                ],
                "code": "BD"
            },


            {
                "name": "Barbados",
                "dial_code": "+1246",
                "states": [{
                        "name": "Christ Church"
                    },
                    {
                        "name": "Saint Andrew"
                    },
                    {
                        "name": "Saint George"
                    },
                    {
                        "name": "Saint James"
                    },
                    {
                        "name": "Saint John"
                    },
                    {
                        "name": "Saint Joseph"
                    },
                    {
                        "name": "Saint Lucy"
                    },
                    {
                        "name": "Saint Michael"
                    },
                    {
                        "name": "Saint Peter"
                    },
                    {
                        "name": "Saint Philip"
                    },
                    {
                        "name": "Saint Thomas"
                    },
                ],
                "code": "BB"
            },
            {
                "name": "Belarus",
                "dial_code": "+375",

                "states": [{
                        "name": "Brest Region"
                    },
                    {
                        "name": "Gomel Region"
                    },
                    {
                        "name": "Grodno Region"
                    },
                    {
                        "name": "Minsk"
                    },
                    {
                        "name": "Minsk Region"
                    },
                    {
                        "name": "Mogilev Region"
                    },
                    {
                        "name": "Vitebsk Region"
                    },
                ],
                "code": "BY"
            },
            {
                "name": "Belgium",
                "dial_code": "+32",
                "states": [{
                        "name": "Antwerp"
                    },
                    {
                        "name": "Brussels-Capital Region"
                    },
                    {
                        "name": "East Flanders"
                    },
                    {
                        "name": "Flanders"
                    },
                    {
                        "name": "Flemish Brabant"
                    },
                    {
                        "name": "Hainaut"
                    },
                    {
                        "name": "Liège"
                    },
                    {
                        "name": "Limburg"
                    },
                    {
                        "name": "Luxembourg"
                    },
                    {
                        "name": "Namur"
                    },
                    {
                        "name": "Wallonia"
                    },
                    {
                        "name": "Walloon Brabant"
                    },
                    {
                        "name": "West Flanders"
                    },
                ],
                "code": "BE"
            },

            {
                "name": "Belize",
                "dial_code": "+501",
                "states": [{
                        "name": "Belize District"
                    },
                    {
                        "name": "Cayo District"
                    },
                    {
                        "name": "Corozal District"
                    },
                    {
                        "name": "Orange Walk District"
                    },
                    {
                        "name": "Stann Creek District"
                    },
                    {
                        "name": "Toledo District"
                    },
                ],
                "code": "BZ"
            },

            {
                "name": "Benin",
                "dial_code": "+229",
                "states": [{
                        "name": "Alibori Department"
                    },
                    {
                        "name": "Atakora Department"
                    },
                    {
                        "name": "Atlantique Department"
                    },
                    {
                        "name": "Borgou Department"
                    },
                    {
                        "name": "Collines Department"
                    },
                    {
                        "name": "Donga Department"
                    },
                    {
                        "name": "Kouffo Department"
                    },
                    {
                        "name": "Littoral Department"
                    },
                    {
                        "name": "Mono Department"
                    },
                    {
                        "name": "Ouémé Department"
                    },
                    {
                        "name": "Plateau Department"
                    },
                    {
                        "name": "Zou Department"
                    },
                ],
                "code": "BJ"
            },


            {
                "name": "Bermuda",
                "dial_code": "+1441",
                "states": [{
                        "name": "Devonshire Parish"
                    },
                    {
                        "name": "Hamilton Municipality"
                    },
                    {
                        "name": "Hamilton Parish"
                    },
                    {
                        "name": "Paget Parish"
                    },
                    {
                        "name": "Pembroke Parish"
                    },
                    {
                        "name": "Saint George's Municipality"
                    },
                    {
                        "name": "Saint George's Parish"
                    },
                    {
                        "name": "Sandys Parish"
                    },
                    {
                        "name": "Smith's Parish,"
                    },
                    {
                        "name": "Southampton Parish"
                    },
                    {
                        "name": "Warwick Parish"
                    },
                ],
                "code": "BM"
            },


            {
                "name": "Bhutan",
                "dial_code": "+975",
                "states": [{
                        "name": "Bumthang District"
                    },
                    {
                        "name": "Chukha District"
                    },
                    {
                        "name": "Dagana District"
                    },
                    {
                        "name": "Gasa District"
                    },
                    {
                        "name": "Haa District"
                    },
                    {
                        "name": "Lhuntse District"
                    },
                    {
                        "name": "Mongar District"
                    },
                    {
                        "name": "Paro District"
                    },
                    {
                        "name": "Pemagatshel District"
                    },
                    {
                        "name": "Punakha District"
                    },
                    {
                        "name": "Samdrup Jongkhar District"
                    },
                    {
                        "name": "Samtse District"
                    },
                    {
                        "name": "Sarpang District"
                    },
                    {
                        "name": "Thimphu District"
                    },
                    {
                        "name": "Trashigang District"
                    },
                    {
                        "name": "Trongsa District"
                    },
                    {
                        "name": "Tsirang District"
                    },
                    {
                        "name": "Wangdue Phodrang District"
                    },
                    {
                        "name": "Zhemgang District"
                    },
                ],
                "code": "BT"
            },
            {
                "name": "Bolivia, Plurinational State of",
                "dial_code": "+591",
                "states": [{
                        "name": "Beni Department"

                    },
                    {
                        "name": "Chuquisaca Department"

                    },
                    {
                        "name": "Cochabamba Department"

                    },
                    {
                        "name": "La Paz Department"

                    },
                    {
                        "name": "Oruro Department"

                    },
                    {
                        "name": "Pando Department"

                    },
                    {
                        "name": "Potosí Department"

                    },
                    {
                        "name": "Santa Cruz Department"

                    },
                    {
                        "name": "Tarija Department"

                    },
                ],
                "code": "BO"
            },



            {
                "name": "Bosnia and Herzegovina",
                "dial_code": "+387",
                "states": [{
                        "name": "Bosnian Podrinje Canton"

                    },
                    {
                        "name": "Brčko District"

                    },
                    {
                        "name": "Canton 10"
                    },
                    {
                        "name": "Central Bosnia Canton"

                    },
                    {
                        "name": "Federation of Bosnia and Herzegovina"

                    },
                    {
                        "name": "Herzegovina-Neretva Canton"
                    },
                    {
                        "name": "Posavina Canton"
                    },
                    {
                        "name": "Republika Srpska"

                    },
                    {
                        "name": "Sarajevo Canton"

                    },
                    {
                        "name": "Tuzla Canton"

                    },
                    {
                        "name": "Una-Sana Canton"

                    },
                    {
                        "name": "West Herzegovina Canton"

                    },
                    {
                        "name": "Zenica-Doboj Canton"

                    },
                ],
                "code": "BA"
            },


            {
                "name": "Botswana",
                "dial_code": "+267",
                "states": [{
                        "name": "Central District"

                    },
                    {
                        "name": "Ghanzi District"

                    },
                    {
                        "name": "Kgalagadi District"
                    },
                    {
                        "name": "Kgatleng District"

                    },
                    {
                        "name": "Kweneng District"

                    },
                    {
                        "name": "Ngamiland"

                    },
                    {
                        "name": "North-East District"
                    },
                    {
                        "name": "North-West District"

                    },
                    {
                        "name": "South-East District"

                    },
                    {
                        "name": "Southern District"

                    },
                ],
                "code": "BW"
            },

            {
                "name": "Brazil",
                "dial_code": "+55",

                "states": [{
                        "name": "Acre"

                    },
                    {
                        "name": "Alagoas"

                    },
                    {
                        "name": "Amapá"

                    },
                    {
                        "name": "Amazonas"

                    },
                    {
                        "name": "Bahia"

                    },
                    {
                        "name": "Ceará"

                    },
                    {
                        "name": "Espírito Santo"

                    },
                    {
                        "name": "Federal District"

                    },
                    {
                        "name": "Goiás"

                    },
                    {
                        "name": "Maranhão"

                    },
                    {
                        "name": "Mato Grosso"

                    },
                    {
                        "name": "Mato Grosso do Sul"
                    },
                    {
                        "name": "Minas Gerais"

                    },
                    {
                        "name": "Pará"

                    },
                    {
                        "name": "Paraíba"

                    },
                    {
                        "name": "Paraná"

                    },
                    {
                        "name": "Pernambuco"

                    },
                    {
                        "name": "Piauí"

                    },
                    {
                        "name": "Rio de Janeiro"

                    },
                    {
                        "name": "Rio Grande do Norte"

                    },
                    {
                        "name": "Rio Grande do Sul"

                    },
                    {
                        "name": "Rondônia"
                    },
                    {
                        "name": "Roraima"

                    },
                    {
                        "name": "Santa Catarina"

                    },
                    {
                        "name": "São Paulo"

                    },
                    {
                        "name": "Sergipe"

                    },
                    {
                        "name": "Tocantins"
                    },
           
                ],
                "code": "BR"
            },

            {
                "name": "British Indian Ocean Territory",
                "dial_code": "+246",
                "states": [{
                    "name": "British Indian Ocean Territory"

                }, ],
                "code": "IO"
            },
            {
                "name": "Brunei Darussalam",
                "dial_code": "+673",
                "states": [{
                        "name": "Belait District"

                    },
                    {
                        "name": "Brunei-Muara District"

                    },
                    {
                        "name": "Temburong District"

                    },
                    {
                        "name": "Tutong District"

                    },
                ],
                "code": "BN"
            },
            {
                "name": "Bulgaria",
                "dial_code": "+359",
                "states": [{
                        "name": "Blagoevgrad province"

                    },
                    {
                        "name": "Burgas province"

                    },
                    {
                        "name": "Dobrich province"

                    },
                    {
                        "name": "Gabrovo province"

                    },
                    {
                        "name": "Haskovo province"

                    },
                    {
                        "name": "Kardzhali province"
                    },
                    {
                        "name": "Kyustendil province"

                    },
                    {
                        "name": "Lovech province"

                    },
                    {
                        "name": "Montana province"

                    },
                    {
                        "name": "Pazardzhik province"

                    },
                    {
                        "name": "Pernik province"

                    },
                    {
                        "name": "Pleven province"

                    },
                    {
                        "name": "Plovdiv province"

                    },
                    {
                        "name": "Razgrad province"

                    },
                    {
                        "name": "Ruse province"

                    },
                    {
                        "name": "Shumen"

                    },
                    {
                        "name": "Silistra province"

                    },
                    {
                        "name": "Sliven province"

                    },
                    {
                        "name": "Smolyan province"

                    },
                    {
                        "name": "Sofia City province"

                    },
                    {
                        "name": "Sofia province"

                    },
                    {
                        "name": "Stara Zagora province"

                    },
                    {
                        "name": "Targovishte province"

                    },
                    {
                        "name": "Varna province"

                    },
                    {
                        "name": "Veliko Tarnovo province"

                    },
                    {
                        "name": "Vidin province"

                    },
                    {
                        "name": "Vratsa province"

                    },
                    {
                        "name": "Yambol province"

                    },
                ],
                "code": "BG"
            },
            {
                "name": "Burkina Faso",
                "dial_code": "+226",
                "states": [{
                        "name": "Balé province"

                    },
                    {
                        "name": "Bam province"

                    },
                    {
                        "name": "Banwa province"

                    },
                    {
                        "name": "Bazèga province"

                    },
                    {
                        "name": "Boucle du Mouhoun Region"

                    },
                    {
                        "name": "Bougouriba province"

                    },
                    {
                        "name": "Boulgou",

                    },
                    {
                        "name": "Cascades Region"

                    },
                    {
                        "name": "Centre",

                    },
                    {
                        "name": "Centre-Est region"

                    },
                    {
                        "name": "Centre-Nord region"

                    },
                    {
                        "name": "Centre-Ouest region"

                    },
                    {
                        "name": "Centre-Sud region"

                    },
                    {
                        "name": "Comoé province"

                    },
                    {
                        "name": "Est region"

                    },
                    {
                        "name": "Ganzourgou province"

                    },
                    {
                        "name": "Gnagna province"

                    },
                    {
                        "name": "Gourma Province"
                    },
                    {
                        "name": "Hauts-Bassins Region"

                    },
                    {
                        "name": "Houet Province"

                    },
                    {
                        "name": "Ioba Province"

                    },
                    {
                        "name": "Kadiogo province"

                    },
                    {
                        "name": "Kénédougou province"

                    },
                    {
                        "name": "Komondjari province"

                    },
                    {
                        "name": "Kompienga province"

                    },
                    {
                        "name": "Kossi province"

                    },
                    {
                        "name": "Koulpélogo province"

                    },
                    {
                        "name": "Kouritenga province"

                    },
                    {
                        "name": "Kourwéogo province"

                    },
                    {
                        "name": "Léraba province"

                    },
                    {
                        "name": "Loroum province"

                    },
                    {
                        "name": "Mouhoun"

                    },
                    {
                        "name": "Nahouri province"

                    },
                    {
                        "name": "Namentenga province"

                    },
                    {
                        "name": "Nayala province"

                    },
                    {
                        "name": "Nord Region, Burkina Faso"

                    },
                    {
                        "name": "Noumbiel province"

                    },
                    {
                        "name": "Oubritenga province"

                    },
                    {
                        "name": "Oudalan province"

                    },
                    {
                        "name": "Passoré province"

                    },
                    {
                        "name": "Plateau-Central region"

                    },
                    {
                        "name": "Poni province"

                    },
                    {
                        "name": "Sahel region"

                    },
                    {
                        "name": "Sanguié province"

                    },
                    {
                        "name": "Sanmatenga province"

                    },
                    {
                        "name": "Séno province"

                    },
                    {
                        "name": "Sissili province"

                    },
                    {
                        "name": "Soum province"

                    },
                    {
                        "name": "Sourou province"

                    },
                    {
                        "name": "Sud-Ouest region"

                    },
                    {
                        "name": "Tapoa province"

                    },
                    {
                        "name": "Tuy province"

                    },
                    {
                        "name": "Yagha province"

                    },
                    {
                        "name": "Yatenga province"

                    },
                    {
                        "name": "Ziro Province"

                    },
                    {
                        "name": "Zondoma Province"

                    },
                    {
                        "name": "Zoundwéogo Province"

                    },
                ],
                "code": "BF"
            },

            {
                "name": "Burundi",
                "dial_code": "+257",
                "states": [{
                        "name": "Bubanza Province"
                    },
                    {
                        "name": "Bujumbura Mairie Province"

                    },
                    {
                        "name": "Bujumbura Rural Province"

                    },
                    {
                        "name": "Bururi Province"

                    },
                    {
                        "name": "Cankuzo Province"

                    },
                    {
                        "name": "Cibitoke Province"

                    },
                    {
                        "name": "Gitega Province"

                    },
                    {
                        "name": "Karuzi Province"

                    },
                    {
                        "name": "Kayanza Province"

                    },
                    {
                        "name": "Kirundo Province"

                    },
                    {
                        "name": "Makamba Province"

                    },
                    {
                        "name": "Muramvya Province"

                    },
                    {
                        "name": "Muyinga Province"

                    },
                    {
                        "name": "Mwaro Province"

                    },
                    {
                        "name": "Ngozi Province"

                    },
                    {
                        "name": "Rumonge Province"

                    },
                    {
                        "name": "Rutana Province"

                    },
                    {
                        "name": "Ruyigi Province"

                    },
                ],
                "code": "BI"
            },

            {
                "name": "Cambodia",
                "dial_code": "+855",
                "states": [{
                        "name": "Banteay Meanchey province"

                    },
                    {
                        "name": "Battambang Province"

                    },
                    {
                        "name": "Kampong Cham Province"

                    },
                    {
                        "name": "Kampong Chhnang Province"
                    },
                    {
                        "name": "Kampong Speu Province"
                    },
                    {
                        "name": "Kampot Province"

                    },
                    {
                        "name": "Kandal Province"

                    },
                    {
                        "name": "Kep Province"

                    },
                    {
                        "name": "Koh Kong Province"

                    },
                    {
                        "name": "Kratié Province"

                    },
                    {
                        "name": "Mondulkiri Province"

                    },
                    {
                        "name": "Oddar Meanchey Province"

                    },
                    {
                        "name": "Pailin Province"

                    },
                    {
                        "name": "Phnom Penh"

                    },
                    {
                        "name": "Preah Vihear Province"

                    },
                    {
                        "name": "Prey Veng Province"

                    },
                    {
                        "name": "Pursat Province"

                    },
                    {
                        "name": "Ratanakiri Province"

                    },
                    {
                        "name": "Siem Reap Province"

                    },
                    {
                        "name": "Sihanoukville Province"

                    },
                    {
                        "name": "Stung Treng Province"

                    },
                    {
                        "name": "Svay Rieng Province"

                    },
                    {
                        "name": "Takéo Province"

                    },
                    {
                        "name": "Tai Po District"

                    },
                ],
                "code": "KH"
            },
           {
                "name": "Cameroon",
                "dial_code": "+237",
                "states": [{
                        "name": "Adamawa"

                    },
                    {
                        "name": "Centre"

                    },
                    {
                        "name": "East"

                    },
                    {
                        "name": "Far North"

                    },
                    {
                        "name": "Littoral"

                    },
                    {
                        "name": "North"

                    },
                    {
                        "name": "Northwest"

                    },
                    {
                        "name": "South"

                    },
                    {
                        "name": "Southwest"

                    },
                    {
                        "name": "West"

                    },
                ],
                "code": "CM"
            },
            {
                "name": "Canada",
                "dial_code": "+1",
                states: [{
                        "name": "Alberta"

                    },
                    {
                        "name": "British Columbia"

                    },
                    {
                        "name": "Manitoba"

                    },
                    {
                        "name": "New Brunswick"
                    },
                    {
                        "name": "Newfoundland and Labrador"

                    },
                    {
                        "name": "Northwest Territories"

                    },
                    {
                        "name": "Nova Scotia"

                    },
                    {
                        "name": "Nunavut"

                    },
                    {
                        "name": "Ontario"

                    },
                    {
                        "name": "Prince Edward Island"

                    },
                    {
                        "name": "Quebec"

                    },
                    {
                        "name": "Saskatchewan"

                    },
                    {
                        "name": "Yukon"

                    },
                ],
                "code": "CA"
            },
            {
                "name": "Cape Verde",
                "dial_code": "+238",
                "states": [{
                        "name": "Barlavento Islands"

                    },
                    {
                        "name": "Boa Vista"

                    },
                    {
                        "name": "Brava"

                    },
                    {
                        "name": "Maio Municipality"

                    },
                    {
                        "name": "Mosteiros"

                    },
                    {
                        "name": "Paul"

                    },
                    {
                        "name": "Porto Novo"

                    },
                    {
                        "name": "Praia"

                    },
                    {
                        "name": "Ribeira Brava Municipality"

                    },
                    {
                        "name": "Ribeira Grande"

                    },
                    {
                        "name": "Ribeira Grande de Santiago"

                    },
                    {
                        "name": "Sal"

                    },
                    {
                        "name": "Santa Catarina"

                    },
                    {
                        "name": "Santa Catarina do Fogo"
                    },
                    {
                        "name": "Santa Cruz"

                    },
                    {
                        "name": "São Domingos"

                    },
                    {
                        "name": "São Filipe"

                    },
                    {
                        "name": "São Lourenço dos Órgãos"
                    },
                    {
                        "name": "São Miguel"

                    },
                    {
                        "name": "São Vicente"
                    },
                    {
                        "name": "Sotavento Islands"

                    },
                    {
                        "name": "Tarrafal"

                    },
                    {
                        "name": "Tarrafal de São Nicolau"

                    },
                ],
                "code": "CV"
            },
            {
                "name": "Cayman Islands",
                "dial_code": "+ 345",
                "states": [{
                    "name": "Cayman Islands"

                }],
                "code": "KY"
            },
         {
                "name": "Central African Republic",
                "dial_code": "+236",
                "states": [{
                        "name": "Bamingui-Bangoran Prefecture"

                    },
                    {
                        "name": "Bangui"

                    },
                    {
                        "name": "Basse-Kotto Prefecture"

                    },
                    {
                        "name": "Haut-Mbomou Prefecture"
                    },
                    {
                        "name": "Haute-Kotto Prefecture"
                    },
                    {
                        "name": "Kémo Prefecture"
                    },
                    {
                        "name": "Lobaye Prefecture"
                    },
                    {
                        "name": "Mambéré-Kadéï"
                    },
                    {
                        "name": "Mbomou Prefecture"
                    },
                    {
                        "name": "Nana-Grébizi Economic Prefecture"
                    },
                    {
                        "name": "Nana-Mambéré Prefecture"
                    },
                    {
                        "name": "Ombella-M'Poko Prefecture"
                    },
                    {
                        "name": "Ouaka Prefecture"
                    },
                    {
                        "name": "Ouham Prefecture"
                    },
                    {
                        "name": "Ouham-Pendé Prefecture"
                    },
                    {
                        "name": "Sangha-Mbaéré"
                    },
                    {
                        "name": "Vakaga Prefecture"
                    },
                ],
                "code": "CF"
            },
         {
                "name": "Chad",
                "dial_code": "+235",
                "states": [{
                        "name": "Bahr el Gazel"
                    },
                    {
                        "name": "Batha region"
                    },
                    {
                        "name": "Borkou"
                    },
                    {
                        "name": "Ennedi region"
                    },
                    {
                        "name": "Ennedi-Est"
                    },
                    {
                        "name": "Ennedi-Ouest"
                    },
                    {
                        "name": "Guéra region"
                    },
                    {
                        "name": "Hadjer-Lamis"
                    },
                    {
                        "name": "Kanem region"
                    },
                    {
                        "name": "Lac region"
                    },
                    {
                        "name": "Logone Occidental region"
                    },
                    {
                        "name": "Logone Oriental region"
                    },
                    {
                        "name": "Mandoul region"
                    },
                    {
                        "name": "Mayo-Kebbi Est region"
                    },
                    {
                        "name": "Mayo-Kebbi Ouest region"
                    },
                    {
                        "name": "Moyen-Chari region"
                    },
                    {
                        "name": "N'Djamena"
                    },
                    {
                        "name": "Ouaddaï region"
                    },
                    {
                        "name": "Salamat region"
                    },
                    {
                        "name": "Sila region"
                    },
                    {
                        "name": "Tandjilé region"
                    },
                    {
                        "name": "Tibesti region"
                    },
                    {
                        "name": "Wadi Fira region"
                    },
                ],
                "code": "TD"
            },
        {
                "name": "Chile",
                "dial_code": "+56",
                "states": [{
                        "name": "Antofagasta region"
                    },
                    {
                        "name": "Araucanía region"
                    },
                    {
                        "name": "Arica y Parinacota region"
                    },
                    {
                        "name": "Atacama region"
                    },
                    {
                        "name": "Aysén region"
                    },
                    {
                        "name": "Bío Bío region"
                    },
                    {
                        "name": "Coquimbo region"
                    },
                    {
                        "name": "Los Lagos region"
                    },
                    {
                        "name": "Los Ríos region"
                    },
                    {
                        "name": "Magellan and the Chilean Antarctic region"
                    },
                    {
                        "name": "Maule region"
                    },
                    {
                        "name": "Ñuble region"
                    },
                    {
                        "name": "O'Higgins"
                    },
                    {
                        "name": "Santiago Metropolitan region"
                    },
                    {
                        "name": "Tarapacá region"
                    },
                    {
                        "name": "Valparaíso"
                    },
                ],
                "code": "CL"
            },
      {
                "name": "China",
                "dial_code": "+86",
                "states": [{
                        "name": "Anhui"
                    },
                    {
                        "name": "Beijing"
                    },
                    {
                        "name": "Chongqing"
                    },
                    {
                        "name": "Fujian"
                    },
                    {
                        "name": "Gansu"
                    },
                    {
                        "name": "Guangdong"
                    },
                    {
                        "name": "Guangxi Zhuang Autonomous region"
                    },
                    {
                        "name": "Guizhou"
                    },
                    {
                        "name": "Hainan"
                    },
                    {
                        "name": "Hebei"
                    },
                    {
                        "name": "Heilongjiang"
                    },
                    {
                        "name": "Henan"
                    },
                    {
                        "name": "Hong Kong"
                    },
                    {
                        "name": "Hubei"
                    },
                    {
                        "name": "Hunan"
                    },
                    {
                        "name": "Inner Mongolia"
                    },
                    {
                        "name": "Jiangsu"
                    },
                    {
                        "name": "Jiangxi"
                    },
                    {
                        "name": "Jilin"
                    },
                    {
                        "name": "Keelung"
                    },
                    {
                        "name": "Liaoning"
                    },
                    {
                        "name": "Macau"
                    },
                    {
                        "name": "Ningxia Hui Autonomous region"
                    },
                    {
                        "name": "Qinghai"
                    },
                    {
                        "name": "Shaanxi"
                    },
                    {
                        "name": "Shandong"
                    },
                    {
                        "name": "Shanghai"
                    },
                    {
                        "name": "Shanxi"
                    },
                    {
                        "name": "Sichuan"
                    },
                    {
                        "name": "Taiwan Province, People's Republic of China"
                    },
                    {
                        "name": "Tibet Autonomous region"
                    },
                    {
                        "name": "Xinjiang"
                    },
                    {
                        "name": "Yunnan"
                    },
                    {
                        "name": "Zhejiang"
                    },
                ],
                "code": "CN"
            },
        {
                "name": "Christmas Island",
                "dial_code": "+61",
                "states": [{
                    "name": "Christmas Island"
                }],
                "code": "CX"
            },
  {
                "name": "Cocos (Keeling) Islands",
                "dial_code": "+61",
                "states": [{
                    "name": "Cocos (Keeling) Islands"
                }],
                "code": "CC"
            },
       {
                "name": "Colombia",
                "dial_code": "+57",
                "states": [{
                        "name": "Amazonas Department"
                    },
                    {
                        "name": "Antioquia Department"
                    },
                    {
                        "name": "Arauca Department"
                    },
                    {
                        "name": "Archipelago of Saint Andréws, Providence and Saint Catalina"
                    },
                    {
                        "name": "Atlántico Department"
                    },
                    {
                        "name": "Bolívar Department"
                    },
                    {
                        "name": "Boyacá Department"
                    },
                    {
                        "name": "Caldas Department"
                    },
                    {
                        "name": "Caquetá Department"
                    },
                    {
                        "name": "Casanare Department"
                    },
                    {
                        "name": "Cauca Department"
                    },
                    {
                        "name": "Cesar Department"
                    },
                    {
                        "name": "Chocó Department"
                    },
                    {
                        "name": "Córdoba Department"
                    },
                    {
                        "name": "Cundinamarca Department"
                    },
                    {
                        "name": "Guainía Department"
                    },
                    {
                        "name": "Guaviare Department"
                    },
                    {
                        "name": "Huila Department"
                    },
                    {
                        "name": "La Guajira Department"
                    },
                    {
                        "name": "Magdalena Department"
                    },
                    {
                        "name": "Meta"
                    },
                    {
                        "name": "Nariño Department"
                    },
                    {
                        "name": "Norte de Santander Department"
                    },
                    {
                        "name": "Putumayo Department"
                    },
                    {
                        "name": "Quindío Department"
                    },
                    {
                        "name": "Risaralda Department"
                    },
                    {
                        "name": "Santander Department"
                    },
                    {
                        "name": "Sucre Department"
                    },
                    {
                        "name": "Tolima Department"
                    },
                    {
                        "name": "Valle del Cauca Department"
                    },
                    {
                        "name": "Vaupés Department"
                    },
                    {
                        "name": "Vichada Department"
                    },
                ],
                "code": "CO"
            },
       {
                "name": "Comoros",
                "dial_code": "+269",
                "states": [{
                        "name": "Anjouan"
                    },
                    {
                        "name": "Grande Comore"
                    },
                    {
                        "name": "Mohéli"
                    },
                ],
                "code": "KM"
            },
            {
                "name": "Congo",
                "dial_code": "+242",
                "states": [{
                        "name": "Bouenza Department"
                    },
                    {
                        "name": "Brazzaville"
                    },
                    {
                        "name": "Cuvette Department"
                    },
                    {
                        "name": "Cuvette-Ouest Department"
                    },
                    {
                        "name": "Kouilou Department"
                    },
                    {
                        "name": "Lékoumou Department"
                    },
                    {
                        "name": "Likouala Department"
                    },
                    {
                        "name": "Niari Department"
                    },
                    {
                        "name": "Plateaux Department"
                    },
                    {
                        "name": "Pointe-Noire"
                    },
                    {
                        "name": "Pool Department"
                    },
                    {
                        "name": "Sangha Department"
                    },
                ],
                "code": "CG"
            },
   {
                "name": "Congo, The Democratic Republic of the Congo",
                "dial_code": "+243",
                states: [{
                        "name": "Bandundu province"
                    },
                    {
                        "name": "Bas-Congo province"
                    },
                    {
                        "name": "Bas-Uele"
                    },
                    {
                        "name": "Équateur"
                    },
                    {
                        "name": "Haut-Katanga province"
                    },
                    {
                        "name": "Haut-Lomami District"
                    },
                    {
                        "name": "Haut-Uele"
                    },
                    {
                        "name": "Ituri Interim Administration"
                    },
                    {
                        "name": "Kasaï District"
                    },
                    {
                        "name": "Kasaï-Occidental"
                    },
                    {
                        "name": "Kasaï-Oriental"
                    },
                    {
                        "name": "Katanga province"
                    },
                    {
                        "name": "Kinshasa"
                    },
                    {
                        "name": "Kwango District"
                    },
                    {
                        "name": "Kwilu District"
                    },
                    {
                        "name": "Lomami province"
                    },
                    {
                        "name": "Mai-Ndombe province"
                    },
                    {
                        "name": "Maniema"
                    },
                    {
                        "name": "Mongala District"
                    },
                    {
                        "name": "Nord-Ubangi District"
                    },
                    {
                        "name": "North Kivu"
                    },
                    {
                        "name": "Orientale province"
                    },
                    {
                        "name": "Sankuru District"
                    },
                    {
                        "name": "South Kivu"
                    },
                    {
                        "name": "Sud-Ubangi"
                    },
                    {
                        "name": "Tanganyika province"
                    },
                    {
                        "name": "Tshopo District"
                    },
                    {
                        "name": "Tshuapa District"
                    },
                ],
                "code": "CD"
            },
            {
                "name": "Cook Islands",
                "dial_code": "+682",
                "states": [{
                    "name": "Cook Islands"
                }],
                "code": "CK"
            },
            {
                "name": "Costa Rica",
                "dial_code": "+506",
                "states": [{
                        "name": "Alajuela province"
                    },
                    {
                        "name": "Guanacaste province"
                    },
                    {
                        "name": "Heredia province"
                    },
                    {
                        "name": "Limón province"
                    },
                    {
                        "name": "Provincia de Cartago"
                    },
                    {
                        "name": "Puntarenas province"
                    },
                    {
                        "name": "San José province"
                    },
                ],
                "code": "CR"
            },
    {
                "name": "Cote d'Ivoire",
                "dial_code": "+225",
                "states": [{
                        "name": "Abidjan"
                    },
                    {
                        "name": "Agnéby"
                    },
                    {
                        "name": "Bafing region"
                    },
                    {
                        "name": "Bas-Sassandra District"
                    },
                    {
                        "name": "Bas-Sassandra region"
                    },
                    {
                        "name": "Comoé District"
                    },
                    {
                        "name": "Denguélé District"
                    },
                    {
                        "name": "Denguélé region"
                    },
                    {
                        "name": "Dix-Huit Montagnes"
                    },
                    {
                        "name": "Fromager"
                    },
                    {
                        "name": "Gôh-Djiboua District"
                    },
                    {
                        "name": "Haut-Sassandra"
                    },
                    {
                        "name": "Lacs District"
                    },
                    {
                        "name": "Lacs region"
                    },
                    {
                        "name": "Lagunes District"
                    },
                    {
                        "name": "Lagunes region"
                    },
                    {
                        "name": "Marahoué region"
                    },
                    {
                        "name": "Montagnes District"
                    },
                    {
                        "name": "Moyen-Cavally"
                    },
                    {
                        "name": "Moyen-Comoé"
                    },
                    {
                        "name": "N'zi-Comoé"
                    },
                    {
                        "name": "Sassandra-Marahoué District"
                    },
                    {
                        "name": "Savanes region"
                    },
                    {
                        "name": "Sud-Bandama"
                    },
                    {
                        "name": "Sud-Comoé"
                    },
                    {
                        "name": "Vallée du Bandama District"
                    },
                    {
                        "name": "Vallée du Bandama region"
                    },
                    {
                        "name": "Woroba District"
                    },
                    {
                        "name": "Worodougou"
                    },
                    {
                        "name": "Yamoussoukro"
                    },
                    {
                        "name": "Zanzan region"
                    },
                ],
                "code": "CI"
            },
            {
                "name": "Croatia",
                "dial_code": "+385",
                "states": [{
                        "name": "Bjelovar-Bilogora County"
                    },
                    {
                        "name": "Brod-Posavina County"
                    },
                    {
                        "name": "Dubrovnik-Neretva County"
                    },
                    {
                        "name": "Istria County"
                    },
                    {
                        "name": "Koprivnica-Križevci County"
                    },
                    {
                        "name": "Krapina-Zagorje County"
                    },
                    {
                        "name": "Lika-Senj County"
                    },
                    {
                        "name": "Međimurje County"
                    },
                    {
                        "name": "Osijek-Baranja County"
                    },
                    {
                        "name": "Požega-Slavonia County"
                    },
                    {
                        "name": "Primorje-Gorski Kotar County"
                    },
                    {
                        "name": "Šibenik-Knin County"
                    },
                    {
                        "name": "Sisak-Moslavina County"
                    },
                    {
                        "name": "Split-Dalmatia County"
                    },
                    {
                        "name": "Varaždin County"
                    },
                    {
                        "name": "Virovitica-Podravina County"
                    },
                    {
                        "name": "Vukovar-Syrmia County"
                    },
                    {
                        "name": "Zadar County"
                    },
                    {
                        "name": "Zagreb"
                    },
                    {
                        "name": "Zagreb County"
                    },
                ],
                "code": "HR"
            },
            {
                "name": "Cuba",
                "dial_code": "+53",
                "states": [{
                        "name": "Artemisa province"
                    },
                    {
                        "name": "Camagüey province"
                    },
                    {
                        "name": "Ciego de Ávila province"
                    },
                    {
                        "name": "Cienfuegos province"
                    },
                    {
                        "name": "Granma province"
                    },
                    {
                        "name": "Guantánamo province"
                    },
                    {
                        "name": "Havana province"
                    },
                    {
                        "name": "Holguín province"
                    },
                    {
                        "name": "Isla de la Juventud"
                    },
                    {
                        "name": "Las Tunas province"
                    },
                    {
                        "name": "Matanzas province"
                    },
                    {
                        "name": "Mayabeque province"
                    },
                    {
                        "name": "Pinar del Río province"
                    },
                    {
                        "name": "Sancti Spíritus province"
                    },
                    {
                        "name": "Santiago de Cuba province"
                    },
                    {
                        "name": "Villa Clara province"
                    },
                ],
                "code": "CU"
            },
            {
                "name": "Cyprus",
                "dial_code": "+357",
                "states": [{
                        "name": "Famagusta District"
                    },
                    {
                        "name": "Kyrenia District"
                    },
                    {
                        "name": "Larnaca District"
                    },
                    {
                        "name": "Limassol District"
                    },
                    {
                        "name": "Nicosia District"
                    },
                    {
                        "name": "Paphos District"
                    },
                ],
                "code": "CY"
            },
   {
                "name": "Czech Republic",
                "dial_code": "+420",
                "states": [{
                        "name": "Benešov District"
                    },
                    {
                        "name": "Beroun District"
                    },
                    {
                        "name": "Blansko District"
                    },
                    {
                        "name": "Břeclav District"
                    },
                    {
                        "name": "Brno-City District"
                    },
                    {
                        "name": "Brno-Country District"
                    },
                    {
                        "name": "Bruntál District"
                    },
                    {
                        "name": "Central Bohemian region"
                    },
                    {
                        "name": "Česká Lípa District"
                    },
                    {
                        "name": "České Budějovice District"
                    },
                    {
                        "name": "Český Krumlov District"
                    },
                    {
                        "name": "Cheb District"
                    },
                    {
                        "name": "Chomutov District"
                    },
                    {
                        "name": "Chrudim District"
                    },
                    {
                        "name": "Děčín District"
                    },
                    {
                        "name": "Domažlice District"
                    },
                    {
                        "name": "Frýdek-Místek District"
                    },
                    {
                        "name": "Havlíčkův Brod District"
                    },
                    {
                        "name": "Hodonín District"
                    },
                    {
                        "name": "Horní Počernice"
                    },
                    {
                        "name": "Hradec Králové District"
                    },
                    {
                        "name": "Hradec Králové region"
                    },
                    {
                        "name": "Jablonec nad Nisou District"
                    },
                    {
                        "name": "Jeseník District"
                    },
                    {
                        "name": "Jičín District"
                    },
                    {
                        "name": "Jihlava District"
                    },
                    {
                        "name": "Jindřichův Hradec District"
                    },
                    {
                        "name": "Karlovy Vary District"
                    },
                    {
                        "name": "Karlovy Vary region"
                    },
                    {
                        "name": "Karviná District"
                    },
                    {
                        "name": "Kladno District"
                   
                    },
                    {
                        "name": "Klatovy District"
                 
                    },
                    {
                        "name": "Kolín District"
                    },
                    {
                        "name": "Kroměříž District"
                    },
                    {
                        "name": "Liberec District"
                    },
                    {
                        "name": "Liberec region"
                    },
                    {
                        "name": "Litoměřice District"
                    },
                    {
                        "name": "Louny District"
                    },
                    {
                        "name": "Mělník District"
                    },
                    {
                        "name": "Mladá Boleslav District"
                    },
                    {
                        "name": "Moravian-Silesian region"
                    },
                    {
                        "name": "Most District"
                    },
                    {
                        "name": "Náchod District"
                    },
                    {
                        "name": "Nový Jičín District"
                    },
                    {
                        "name": "Nymburk District"
                    },
                    {
                        "name": "Olomouc District"
                    },
                    {
                        "name": "Olomouc region"
                    },
                    {
                        "name": "Opava District"
                    },
                    {
                        "name": "Ostrava-City District"
                    },
                    {
                        "name": "Pardubice District"
                    },
                    {
                        "name": "Pardubice region"
                    },
                    {
                        "name": "Pelhřimov District"
                    },
                    {
                        "name": "Písek District"
                    },
                    {
                        "name": "Plzeň region"
                    },
                    {
                        "name": "Plzeň-City District"
                    },
                    {
                        "name": "Plzeň-North District"
                    },
                    {
                        "name": "Plzeň-South District"
                    },
                    {
                        "name": "Prachatice District"
                    },
                    {
                        "name": "Prague"
                    },
                    {
                        "name": "Prague 1"
                    },
                    {
                        "name": "Prague 10"
                    },
                    {
                        "name": "Prague 11"
                    },
                    {
                        "name": "Prague 12"
                    },
                    {
                        "name": "Prague 13"
                    },
                    {
                        "name": "Prague 14"
                    },
                    {
                        "name": "Prague 15"
                    },
                    {
                        "name": "Prague 16"
                    },
                    {
                        "name": "Prague 2"
                    },
                    {
                        "name": "Prague 21"
                    },
                    {
                        "name": "Prague 3"
                    },
                    {
                        "name": "Prague 4"
                    },
                    {
                        "name": "Prague 5"
                    },
                    {
                        "name": "Prague 6"
                    },
                    {
                        "name": "Prague 7"
                    },
                    {
                        "name": "Prague 8"
                    },
                    {
                        "name": "Prague 9"
                    },
                    {
                        "name": "Prague-East District"
                    },
                    {
                        "name": "Prague-West District"
                    },
                    {
                        "name": "Přerov District"
                    },
                    {
                        "name": "Příbram District"
                    },
                    {
                        "name": "Prostějov District"
                    },
                    {
                        "name": "Rakovník District"
                    },
                    {
                        "name": "Rokycany District"
                    },
                    {
                        "name": "Rychnov nad Kněžnou District"
                    },
                    {
                        "name": "Semily District"
                    },
                    {
                        "name": "Sokolov District"
                    },
                    {
                        "name": "South Bohemian region"
                    },
                    {
                        "name": "South Moravian region"
                    },
                    {
                        "name": "Strakonice District"
                    },
                    {
                        "name": "Šumperk District"
                    },
                    {
                        "name": "Svitavy District"
                    },
                    {
                        "name": "Tábor District"
                    },
                    {
                        "name": "Tachov District"
                    },
                    {
                        "name": "Teplice District"
                    },
                    {
                        "name": "Třebíč District"
                    },
                    {
                        "name": "Trutnov District"
                    },
                    {
                        "name": "Uherské Hradiště District"
                    },
                    {
                        "name": "Ústí nad Labem District"
                    },
                    {
                        "name": "Ústí nad Labem region"
                    },
                    {
                        "name": "Ústí nad Orlicí District"
                    },
                    {
                        "name": "Vsetín District"
                    },
                    {
                        "name": "Vyškov District"
                    },
                    {
                        "name": "Vysočina region"
                    },
                    {
                        "name": "Žďár nad Sázavou District"
                    },
                    {
                        "name": "Zlín District"
                    },
                    {
                        "name": "Zlín region"
                    },
                    {
                        "name": "Znojmo District"
                    },
                ],
                "code": "CZ"
            },
            {
                "name": "Denmark",
                "dial_code": "+45",
                "states": [{
                        "name": "Capital Region of Denmark"
                    },
                    {
                        "name": "Central Denmark region"
                    },
                    {
                        "name": "North Denmark region"
                    },
                    {
                        "name": "Region of Southern Denmark"
                    },
                    {
                        "name": "Region Zealand"
                    },
                ],
                "code": "DK"
            },
            {
                "name": "Djibouti",
                "dial_code": "+253",
                "states": [{
                        "name": "Ali Sabieh region"
                    },
                    {
                        "name": "Arta region"
                    },
                    {
                        "name": "Dikhil region"
                    },
                    {
                        "name": "Djibouti"
                    },
                    {
                        "name": "Obock region"
                    },
                    {
                        "name": "Tadjourah region"
                    },
                ],
                "code": "DJ"
            },
     {
                "name": "Dominica",
                "dial_code": "+1767",
                "states": [{
                        "name": "Saint Andrew Parish"
                    },
                    {
                        "name": "Saint David Parish"
                    },
                    {
                        "name": "Saint George Parish"
                    },
                    {
                        "name": "Saint John Parish"
                    },
                    {
                        "name": "Saint Joseph Parish"
                    },
                    {
                        "name": "Saint Luke Parish"
                    },
                    {
                        "name": "Saint Mark Parish"
                    },
                    {
                        "name": "Saint Patrick Parish"
                    },
                    {
                        "name": "Saint Paul Parish"
                    },
                    {
                        "name": "Saint Peter Parish"
                    },
                ],
                "code": "DM"
            },
            {
                "name": "Dominican Republic",
                "dial_code": "+1849",
                "states": [{
                        "name": "Azua province"
                    },
                    {
                        "name": "Baoruco province"
                    },
                    {
                        "name": "Barahona province"
                    },
                    {
                        "name": "Dajabón province"
                    },
                    {
                        "name": "Distrito Nacional"
                    },
                    {
                        "name": "Duarte province"
                    },
                    {
                        "name": "El Seibo province"
                    },
                    {
                        "name": "Espaillat province"
                    },
                    {
                        "name": "Hato Mayor province"
                    },
                    {
                        "name": "Hermanas Mirabal province"
                    },
                    {
                        "name": "Independencia"
                    },
                    {
                        "name": "La Altagracia province"
                    },
                    {
                        "name": "La Romana province"
                    },
                    {
                        "name": "La Vega province"
                    },
                    {
                        "name": "María Trinidad Sánchez province"
                    },
                    {
                        "name": "Monseñor Nouel province"
                    },
                    {
                        "name": "Monte Cristi province"
                    },
                    {
                        "name": "Monte Plata province"
                    },
                    {
                        "name": "Pedernales province"
                    },
                    {
                        "name": "Peravia province"
                    },
                    {
                        "name": "Puerto Plata province"
                    },
                    {
                        "name": "Samaná province"
                    },
                    {
                        "name": "San Cristóbal province"
                    },
                    {
                        "name": "San José de Ocoa province"
                    },
                    {
                        "name": "San Juan province"
                    },
                    {
                        "name": "San Pedro de Macorís"
                    },
                    {
                        "name": "Sánchez Ramírez province"
                    },
                    {
                        "name": "Santiago province"
                    },
                    {
                        "name": "Santiago Rodríguez province"
                    },
                    {
                        "name": "Santo Domingo province"
                    },
                    {
                        "name": "Valverde province"
                    },
                ],
                "code": "DO"
            },
            {
                "name": "Ecuador",
                "dial_code": "+593",
                "states": [{
                        "name": "Azuay province"
                    },
                    {
                        "name": "Bolívar province"
                    },
                    {
                        "name": "Cañar province"
                    },
                    {
                        "name": "Carchi province"
                    },
                    {
                        "name": "Chimborazo province"
                    },
                    {
                        "name": "Cotopaxi province"
                    },
                    {
                        "name": "El Oro province"
                    },
                    {
                        "name": "Esmeraldas"
                    },
                    {
                        "name": "Galápagos province"
                    },
                    {
                        "name": "Guayas province"
                    },
                    {
                        "name": "Imbabura province"
                    },
                    {
                        "name": "Los Ríos province"
                    },
                    {
                        "name": "Manabí province"
                    },
                    {
                        "name": "Morona-Santiago province"
                    },
                    {
                        "name": "Napo province"
                    },
                    {
                        "name": "Orellana province"
                    },
                    {
                        "name": "Pastaza province"
                    },
                    {
                        "name": "Pichincha province"
                    },
                    {
                        "name": "Santa Elena province"
                    },
                    {
                        "name": "Santo Domingo de los Tsáchilas province"
                    },
                    {
                        "name": "Sucumbíos province"
                    },
                    {
                        "name": "Tungurahua province"
                    },
                    {
                        "name": "Zamora-Chinchipe province"
                    },
                ],
                "code": "EC"
            },
         {
                "name": "Egypt",
                "dial_code": "+20",
                "states": [{
                        "name": "Alexandria Governorate"
                    },
                    {
                        "name": "Aswan Governorate"
                    },
                    {
                        "name": "Asyut Governorate"
                    },
                    {
                        "name": "Beheira Governorate"
                    },
                    {
                        "name": "Beni Suef Governorate"
                    },
                    {
                        "name": "Cairo Governorate"
                    },
                    {
                        "name": "Dakahlia Governorate"
                    },
                    {
                        "name": "Damietta Governorate"
                    },
                    {
                        "name": "Faiyum Governorate"
                    },
                    {
                        "name": "Gharbia Governorate"
                    },
                    {
                        "name": "Giza Governorate"
                    },
                    {
                        "name": "Ismailia Governorate"
                    },
                    {
                        "name": "Kafr el-Sheikh Governorate"
                    },
                    {
                        "name": "Luxor Governorate"
                    },
                    {
                        "name": "Matrouh Governorate"
                    },
                    {
                        "name": "Minya Governorate"
                    },
                    {
                        "name": "Monufia Governorate"
                    },
                    {
                        "name": "New Valley Governorate"
                    },
                    {
                        "name": "North Sinai Governorate"
                    },
                    {
                        "name": "Port Said Governorate"
                    },
                    {
                        "name": "Qalyubia Governorate"
                    },
                    {
                        "name": "Qena Governorate"
                    },
                    {
                        "name": "Red Sea Governorate"
                    },
                    {
                        "name": "Sohag Governorate"
                    },
                    {
                        "name": "South Sinai Governorate"
                    },
                    {
                        "name": "Suez Governorate"
                    },
                ],
                "code": "EG"
            },
            {
                "name": "El Salvador",
                "dial_code": "+503",
                "states": [{
                        "name": "Ahuachapán Department"
                    },
                    {
                        "name": "Cabañas Department"
                    },
                    {
                        "name": "Chalatenango Department"
                    },
                    {
                        "name": "Cuscatlán Department"
                    },
                    {
                        "name": "La Libertad Department"
                    },
                    {
                        "name": "La Paz Department"
                    },
                    {
                        "name": "La Unión Department"
                    },
                    {
                        "name": "Morazán Department"
                    },
                    {
                        "name": "San Miguel Department"
                    },
                    {
                        "name": "San Salvador Department"
                    },
                    {
                        "name": "San Vicente Department"
                    },
                    {
                        "name": "Santa Ana Department"
                    },
                    {
                        "name": "Sonsonate Department"
                    },
                    {
                        "name": "Usulután Department"
                    },
                ],
                "code": "SV"
            },
            {
                "name": "Equatorial Guinea",
                "dial_code": "+240",
                "states": [{
                        "name": "Annobón province"
                    },
                    {
                        "name": "Bioko Norte province"
                    },
                    {
                        "name": "Bioko Sur province"
                    },
                    {
                        "name": "Centro Sur province"
                    },
                    {
                        "name": "Insular region"
                    },
                    {
                        "name": "Kié-Ntem province"
                    },
                    {
                        "name": "Litoral province"
                    },
                    {
                        "name": "Río Muni"
                    },
                    {
                        "name": "Wele-Nzas province"
                    },
                ],
                "code": "GQ"
            },
            {
                "name": "Eritrea",
                "dial_code": "+291",
                "states": [{
                        "name": "Anseba region"
                    },
                    {
                        "name": "Debub region"
                    },
                    {
                        "name": "Gash-Barka region"
                    },
                    {
                        "name": "Maekel region"
                    },
                    {
                        "name": "Northern Red Sea region"
                    },
                    {
                        "name": "Southern Red Sea region"
                    },
                ],
                "code": "ER"
            },

     {
                "name": "Estonia",
                "dial_code": "+372",
                "states": [{
                        "name": "Harju County"
                    },
                    {
                        "name": "Hiiu County"
                    },
                    {
                        "name": "Ida-Viru County"
                    },
                    {
                        "name": "Järva County"
                    },
                    {
                        "name": "Jõgeva County"
                    },
                    {
                        "name": "Lääne County"
                    },
                    {
                        "name": "Lääne-Viru County"
                    },
                    {
                        "name": "Pärnu County"
                    },
                    {
                        "name": "Põlva County"
                    },
                    {
                        "name": "Rapla County"
                    },
                    {
                        "name": "Saare County"
                    },
                    {
                        "name": "Tartu County"
                    },
                    {
                        "name": "Valga County"
                    },
                    {
                        "name": "Viljandi County"
                    },
                    {
                        "name": "Võru County"
                    },
                ],
                "code": "EE"
            },
            {
                "name": "Ethiopia",
                "dial_code": "+251",
                "states": [{
                        "name": "Addis Ababa"
                    },
                    {
                        "name": "Afar region"
                    },
                    {
                        "name": "Amhara region"
                    },
                    {
                        "name": "Benishangul-Gumuz region"
                    },
                    {
                        "name": "Dire Dawa"
                    },
                    {
                        "name": "Gambela region"
                    },
                    {
                        "name": "Harari region"
                    },
                    {
                        "name": "Oromia region"
                    },
                    {
                        "name": "Somali region"
                    },
                    {
                        "name": "Southern Nations, Nationalities, and Peoples' region"
                    },
                    {
                        "name": "Tigray region"
                    },
                ],
                "code": "ET"
            },
            {
                "name": "Falkland Islands (Malvinas)",
                "dial_code": "+500",
                "states": [{
                    "name": "Falkland Islands (Malvinas)"
                }, ],
                "code": "FK"
            },
            {
                "name": "Faroe Islands",
                "dial_code": "+298",
                "states": [{
                    "name": "Faroe Islands"
                }],
                "code": "FO"
            },

          {
                "name": "Fiji",
                "dial_code": "+679",
                "states": [{
                        "name": "Ba"
                    },
                    {
                        "name": "Bua"
                    },
                    {
                        "name": "Cakaudrove"
                    },
                    {
                        "name": "Central Division"
                    },
                    {
                        "name": "Eastern Division"
                    },
                    {
                        "name": "Kadavu"
                    },
                    {
                        "name": "Lau"
                    },
                    {
                        "name": "Lomaiviti"
                    },
                    {
                        "name": "Macuata"
                    },
                    {
                        "name": "Nadroga-Navosa"
                    },
                    {
                        "name": "Naitasiri"
                    },
                    {
                        "name": "Namosi"
                    },
                    {
                        "name": "Northern Division"
                    },
                    {
                        "name": "Ra"
                    },
                    {
                        "name": "Rewa"
                    },
                    {
                        "name": "Rotuma"
                    },
                    {
                        "name": "Serua"
                    },
                    {
                        "name": "Tailevu"
                    },
                    {
                        "name": "Western Division"
                    },
                ],
                "code": "FJ"
            },
            {
                "name": "Finland",
                "dial_code": "+358",
                "states": [{
                        "name": "Åland Islands"
                    },
                    {
                        "name": "Central Finland"
                    },
                    {
                        "name": "Central Ostrobothnia"
                    },
                    {
                        "name": "Eastern Finland province"
                    },
                    {
                        "name": "Finland Proper"
                    },
                    {
                        "name": "Kainuu"
                    },
                    {
                        "name": "Kymenlaakso"
                    },
                    {
                        "name": "Lapland"
                    },
                    {
                        "name": "North Karelia"
                    },
                    {
                        "name": "Northern Ostrobothnia"
                    },
                    {
                        "name": "Northern Savonia"
                    },
                    {
                        "name": "Ostrobothnia"
                    },
                    {
                        "name": "Oulu province"
                    },
                    {
                        "name": "Päijänne Tavastia"
                    },
                    {
                        "name": "Pirkanmaa"
                    },
                    {
                        "name": "Satakunta"
                    },
                    {
                        "name": "South Karelia"
                    },
                    {
                        "name": "Southern Ostrobothnia"
                    },
                    {
                        "name": "Southern Savonia"
                    },
                    {
                        "name": "Tavastia Proper"
                    },
                    {
                        "name": "Uusimaa"
                    },
                ],
                "code": "FI"
            },
            {
                "name": "France",
                "dial_code": "+33",
                "states": [{
                        "name": "Alo"
                    },
                    {
                        "name": "Alsace"
                    },
                    {
                        "name": "Aquitaine"
                    },
                    {
                        "name": "Auvergne"
                    },
                    {
                        "name": "Auvergne-Rhône-Alpes"
                    },
                    {
                        "name": "Bourgogne-Franche-Comté"
                    },
                    {
                        "name": "Brittany"
                    },
                    {
                        "name": "Burgundy"
                    },
                    {
                        "name": "Centre-Val de Loire"
                    },
                    {
                        "name": "Champagne-Ardenne"
                    },
                    {
                        "name": "Corsica"
                    },
                    {
                        "name": "Franche-Comté"
                    },
                    {
                        "name": "French Guiana"
                    },
                    {
                        "name": "French Polynesia"
                    },
                    {
                        "name": "Grand Est"
                    },
                    {
                        "name": "Guadeloupe"
                    },
                    {
                        "name": "Hauts-de-France"
                    },
                    {
                        "name": "Île-de-France"
                    },
                    {
                        "name": "Languedoc-Roussillon"
                    },
                    {
                        "name": "Limousin"
                    },
                    {
                        "name": "Lorraine"
                    },
                    {
                        "name": "Lower Normandy"
                    },
                    {
                        "name": "Martinique"
                    },
                    {
                        "name": "Mayotte"
                    },
                    {
                        "name": "Nord-Pas-de-Calais"
                    },
                    {
                        "name": "Normandy"
                    },
                    {
                        "name": "Nouvelle-Aquitaine"
                    },
                    {
                        "name": "Occitania"
                    },
                    {
                        "name": "Paris"
                    },
                    {
                        "name": "Pays de la Loire"
                    },
                    {
                        "name": "Picardy"
                    },
                    {
                        "name": "Poitou-Charentes"
                    },
                    {
                        "name": "Provence-Alpes-Côte d'Azur"
                    },
                    {
                        "name": "Réunion"
                    },
                    {
                        "name": "Rhône-Alpes"
                    },
                    {
                        "name": "Saint Barthélemy"
                    },
                    {
                        "name": "Saint Martin"
                    },
                    {
                        "name": "Saint Pierre and Miquelon"
                    },
                    {
                        "name": "Sigave"
                    },
                    {
                        "name": "Upper Normandy"
                    },
                    {
                        "name": "Uvea"
                    },
                    {
                        "name": "Wallis and Futuna"
                    },
                ],
                "code": "FR"
            },
            {
                "name": "French Guiana",
                "dial_code": "+594",
                "states": [{
                    "name": "French Guiana"
                }],

                "code": "GF"
            },

         {
                "name": "French Polynesia",
                "dial_code": "+689",
                "states": [{
                    "name": "French Polynesia"
                }],

                "code": "PF"
            },
            {
                "name": "Gabon",
                "dial_code": "+241",
                "states": [{
                        "name": "Estuaire province"
                    },
                    {
                        "name": "Haut-Ogooué province"
                    },
                    {
                        "name": "Moyen-Ogooué province"
                    },
                    {
                        "name": "Ngounié province"
                    },
                    {
                        "name": "Nyanga province"
                    },
                    {
                        "name": "Ogooué-Ivindo province"
                    },
                    {
                        "name": "Ogooué-Lolo province"
                    },
                    {
                        "name": "Ogooué-Maritime province"
                    },
                    {
                        "name": "Woleu-Ntem province"
                    },
                ],
                "code": "GA"
            },
            {
                "name": "Gambia",
                "dial_code": "+220",
                "states": [{
                        "name": "Banjul"
                    },
                    {
                        "name": "Central River Division"
                    },
                    {
                        "name": "Lower River Division"
                    },
                    {
                        "name": "North Bank Division"
                    },
                    {
                        "name": "Upper River Division"
                    },
                    {
                        "name": "West Coast Division"
                    },
                ],
                "code": "GM"
            },
            {
                "name": "Georgia",
                "dial_code": "+995",
                "states": [{
                        "name": "Adjara"
                    },
                    {
                        "name": "Autonomous Republic of Abkhazia"
                    },
                    {
                        "name": "Guria"
                    },
                    {
                        "name": "Imereti"
                    },
                    {
                        "name": "Kakheti"
                    },
                    {
                        "name": "Khelvachauri Municipality"
                    },
                    {
                        "name": "Kvemo Kartli"
                    },
                    {
                        "name": "Mtskheta-Mtianeti"
                    },
                    {
                        "name": "Racha-Lechkhumi and Kvemo Svaneti"
                    },
                    {
                        "name": "Samegrelo-Zemo Svaneti"
                    },
                    {
                        "name": "Samtskhe-Javakheti"
                    },
                    {
                        "name": "Senaki Municipality"
                    },
                    {
                        "name": "Shida Kartli"
                    },
                    {
                        "name": "Tbilisi"
                    },
                ],
                "code": "GE"
            },

           {
                "name": "Germany",
                "dial_code": "+49",
                "states": [{
                        "name": "Baden-Württemberg"
                    },
                    {
                        "name": "Bavaria"
                    },
                    {
                        "name": "Berlin"
                    },
                    {
                        "name": "Brandenburg"
                    },
                    {
                        "name": "Bremen"
                    },
                    {
                        "name": "Hamburg"
                    },
                    {
                        "name": "Hesse"
                    },
                    {
                        "name": "Lower Saxony"
                    },
                    {
                        "name": "Mecklenburg-Vorpommern"
                    },
                    {
                        "name": "North Rhine-Westphalia"
                    },
                    {
                        "name": "Rhineland-Palatinate"
                    },
                    {
                        "name": "Saarland"
                    },
                    {
                        "name": "Saxony"
                    },
                    {
                        "name": "Saxony-Anhalt"
                    },
                    {
                        "name": "Schleswig-Holstein"
                    },
                    {
                        "name": "Thuringia"
                    },
                ],
                "code": "DE"
            },
            {
                "name": "Ghana",
                "dial_code": "+233",
                "states": [{
                        "name": "Ashanti region"
                    },
                    {
                        "name": "Brong-Ahafo region"
                    },
                    {
                        "name": "Central region"
                    },
                    {
                        "name": "Eastern region"
                    },
                    {
                        "name": "Greater Accra region"
                    },
                    {
                        "name": "Northern region"
                    },
                    {
                        "name": "Upper East region"
                    },
                    {
                        "name": "Upper West region"
                    },
                    {
                        "name": "Volta region"
                    },
                    {
                        "name": "Western region"
                    },
                ],
                "code": "GH"
            },
            {
                "name": "Gibraltar",
                "dial_code": "+350",
                "states": [{
                    "name": "Gibraltar"
                }],
                "code": "GI"
            },
            {
                "name": "Greece",
                "dial_code": "+30",
                "states": [{
                        "name": "Achaea Regional Unit"
                    },
                    {
                        "name": "Aetolia-Acarnania Regional Unit"
                    },
                    {
                        "name": "Arcadia Prefecture"
                    },
                    {
                        "name": "Argolis Regional Unit"
                    },
                    {
                        "name": "Attica region"
                    },
                    {
                        "name": "Boeotia Regional Unit"
                    },
                    {
                        "name": "Central Greece region"
                    },
                    {
                        "name": "Central Macedonia"
                    },
                    {
                        "name": "Chania Regional Unit"
                    },
                    {
                        "name": "Corfu Prefecture"
                    },
                    {
                        "name": "Corinthia Regional Unit"
                    },
                    {
                        "name": "Crete region"
                    },
                    {
                        "name": "Drama Regional Unit"
                    },
                    {
                        "name": "East Attica Regional Unit"
                    },
                    {
                        "name": "East Macedonia and Thrace"
                    },
                    {
                        "name": "Epirus region"
                    },
                    {
                        "name": "Euboea"
                    },
                    {
                        "name": "Grevena Prefecture"
                    },
                    {
                        "name": "Imathia Regional Unit"
                    },
                    {
                        "name": "Ioannina Regional Unit"
                    },
                    {
                        "name": "Ionian Islands region"
                    },
                    {
                        "name": "Karditsa Regional Unit"
                    },
                    {
                        "name": "Kastoria Regional Unit"
                    },
                    {
                        "name": "Kefalonia Prefecture"
                    },
                    {
                        "name": "Kilkis Regional Unit"
                    },
                    {
                        "name": "Kozani Prefecture"
                    },
                    {
                        "name": "Laconia"
                    },
                    {
                        "name": "Larissa Prefecture"
                    },
                    {
                        "name": "Lefkada Regional Unit"
                    },
                    {
                        "name": "Pella Regional Unit"
                    },
                    {
                        "name": "Peloponnese region"
                    },
                    {
                        "name": "Phthiotis Prefecture"
                    },
                    {
                        "name": "Preveza Prefecture"
                    },
                    {
                        "name": "Serres Prefecture"
                    },
                    {
                        "name": "South Aegean"
                    },
                    {
                        "name": "Thessaloniki Regional Unit"
                    },
                    {
                        "name": "West Greece region"
                    },
                    {
                        "name": "West Macedonia region"
                    },
                ],
                "code": "GR"
            },

          {
                "name": "Greenland",
                "dial_code": "+299",
                "states": [{
                    "name": "Greenland"
                }],
                "code": "GL"
            },
            {
                "name": "Grenada",
                "dial_code": "+1473",
                "states": [{
                        "name": "Carriacou and Petite Martinique"
                    },
                    {
                        "name": "Saint Andrew Parish"
                    },
                    {
                        "name": "Saint David Parish"
                    },
                    {
                        "name": "Saint George Parish"
                    },
                    {
                        "name": "Saint John Parish"
                    },
                    {
                        "name": "Saint Mark Parish"
                    },
                    {
                        "name": "Saint Patrick Parish"
                    },
                ],
                "code": "GD"
            },
            {
                "name": "Guadeloupe",
                "dial_code": "+590",
                "states": [{
                    "name": "Guadeloupe"
                }],
                "code": "GP"
            },

    {
                "name": "Guam",
                "dial_code": "+1671",
                "states": [{
                    "name": "Guam"
                }],
                "code": "GU"
            },
            {
                "name": "Guatemala",
                "dial_code": "+502",
                "states": [{
                        "name": "Alta Verapaz Department"
                    },
                    {
                        "name": "Baja Verapaz Department"
                    },
                    {
                        "name": "Chimaltenango Department"
                    },
                    {
                        "name": "Chiquimula Department"
                    },
                    {
                        "name": "El Progreso Department"
                    },
                    {
                        "name": "Escuintla Department"
                    },
                    {
                        "name": "Guatemala Department"
                    },
                    {
                        "name": "Huehuetenango Department"
                    },
                    {
                        "name": "Izabal Department"
                    },
                    {
                        "name": "Jalapa Department"
                    },
                    {
                        "name": "Jutiapa Department"
                    },
                    {
                        "name": "Petén Department"
                    },
                    {
                        "name": "Quetzaltenango Department"
                    },
                    {
                        "name": "Quiché Department"
                    },
                    {
                        "name": "Retalhuleu Department"
                    },
                    {
                        "name": "Sacatepéquez Department"
                    },
                    {
                        "name": "San Marcos Department"
                    },
                    {
                        "name": "Santa Rosa Department"
                    },
                    {
                        "name": "Sololá Department"
                    },
                    {
                        "name": "Suchitepéquez Department"
                    },
                    {
                        "name": "Totonicapán Department"
                    },
                ],
                "code": "GT"
            },
            {
                "name": "Guernsey",
                "dial_code": "+44",
                "states": [{
                    "name": "Guernsey"
                }],
                "code": "GG"
            },
            {
                "name": "Guinea",
                "dial_code": "+224",
                "states": [{
                        "name": "Beyla Prefecture"
                    },
                    {
                        "name": "Boffa Prefecture"
                    },
                    {
                        "name": "Boké Prefecture"
                    },
                    {
                        "name": "Boké region"
                    },
                    {
                        "name": "Conakry"
                    },
                    {
                        "name": "Coyah Prefecture"
                    },
                    {
                        "name": "Dabola Prefecture"
                    },
                    {
                        "name": "Dalaba Prefecture"
                    },
                    {
                        "name": "Dinguiraye Prefecture"
                    },
                    {
                        "name": "Dubréka Prefecture"
                    },
                    {
                        "name": "Faranah Prefecture"
                    },
                    {
                        "name": "Forécariah Prefecture"
                    },
                    {
                        "name": "Fria Prefecture"
                    },
                    {
                        "name": "Gaoual Prefecture"
                    },
                    {
                        "name": "Guéckédou Prefecture"
                    },
                    {
                        "name": "Kankan Prefecture"
                    },
                    {
                        "name": "Kankan region"
                    },
                    {
                        "name": "Kérouané Prefecture"
                    },
                    {
                        "name": "Kindia Prefecture"
                    },
                    {
                        "name": "Kindia region"
                    },
                    {
                        "name": "Kissidougou Prefecture"
                    },
                    {
                        "name": "Koubia Prefecture"
                    },
                    {
                        "name": "Koundara Prefecture"
                    },
                    {
                        "name": "Kouroussa Prefecture"
                    },
                    {
                        "name": "Labé Prefecture"
                    },
                    {
                        "name": "Labé region"
                    },
                    {
                        "name": "Lélouma Prefecture"
                    },
                    {
                        "name": "Lola Prefecture"
                    },
                    {
                        "name": "Macenta Prefecture"
                    },
                    {
                        "name": "Mali Prefecture"
                    },
                    {
                        "name": "Mamou Prefecture"
                    },
                    {
                        "name": "Mamou region"
                    },
                    {
                        "name": "Mandiana Prefecture"
                    },
                    {
                        "name": "Nzérékoré Prefecture"
                    },
                    {
                        "name": "Nzérékoré region"
                    },
                    {
                        "name": "Pita Prefecture"
                    },
                    {
                        "name": "Siguiri Prefecture"
                    },
                    {
                        "name": "Télimélé Prefecture"
                    },
                    {
                        "name": "Tougué Prefecture"
                    },
                    {
                        "name": "Yomou Prefecture"
                    },
                ],
                "code": "GN"
            },

      {
                "name": "Guinea-Bissau",
                "dial_code": "+245",
                "states": [{
                        "name": "Bafatá"
                    },
                    {
                        "name": "Biombo region"
                    },
                    {
                        "name": "Bolama region"
                    },
                    {
                        "name": "Cacheu region"
                    },
                    {
                        "name": "Gabú region"
                    },
                    {
                        "name": "Leste province"
                    },
                    {
                        "name": "Norte province"
                    },
                    {
                        "name": "Oio region"
                    },
                    {
                        "name": "Quinara region"
                    },
                    {
                        "name": "Sul province"
                    },
                    {
                        "name": "Tombali region"
                    },
                ],
                "code": "GW"
            },
            {
                "name": "Guyana",
                "dial_code": "+595",
                "states": [{
                        "name": "Barima-Waini"
                    },
                    {
                        "name": "Cuyuni-Mazaruni"
                    },
                    {
                        "name": "Demerara-Mahaica"
                    },
                    {
                        "name": "East Berbice-Corentyne"
                    },
                    {
                        "name": "Essequibo Islands-West Demerara"
                    },
                    {
                        "name": "Mahaica-Berbice"
                    },
                    {
                        "name": "Pomeroon-Supenaam"
                    },
                    {
                        "name": "Potaro-Siparuni"
                    },
                    {
                        "name": "Upper Demerara-Berbice"
                    },
                    {
                        "name": "Upper Takutu-Upper Essequibo"
                    },
                ],
                "code": "GY"
            },
            {
                "name": "Haiti",
                "dial_code": "+509",
                "states": [{
                        "name": "Artibonite"
                    },
                    {
                        "name": "Centre"
                    },
                    {
                        "name": "Grand'Anse"
                    },
                    {
                        "name": "Nippes"
                    },
                    {
                        "name": "Nord"
                    },
                    {
                        "name": "Nord-Est"
                    },
                    {
                        "name": "Nord-Ouest"
                    },
                    {
                        "name": "Ouest"
                    },
                    {
                        "name": "Sud"
                    },
                    {
                        "name": "Sud-Est"
                    },
                ],
                "code": "HT"
            },
            {
                "name": "Holy See (Vatican City State)",
                "dial_code": "+379",
                "states": [{
                    "name": "Holy See (Vatican City State)"
                }, ],
                "code": "VA"
            },

   {
                "name": "Honduras",
                "dial_code": "+504",
                "states": [{
                        "name": "Atlántida Department"

                    },
                    {
                        "name": "Bay Islands Department"
                    },
                    {
                        "name": "Choluteca Department"
                    },
                    {
                        "name": "Colón Department"
                    },
                    {
                        "name": "Comayagua Department"
                    },
                    {
                        "name": "Copán Department"
                    },
                    {
                        "name": "Cortés Department"
                    },
                    {
                        "name": "El Paraíso Department"
                    },
                    {
                        "name": "Francisco Morazán Department"
                    },
                    {
                        "name": "Gracias a Dios Department"
                    },
                    {
                        "name": "Intibucá Department"
                    },
                    {
                        "name": "La Paz Department"
                    },
                    {
                        "name": "Lempira Department"
                    },
                    {
                        "name": "Ocotepeque Department"
                    },
                    {
                        "name": "Olancho Department"
                    },
                    {
                        "name": "Santa Bárbara Department"
                    },
                    {
                        "name": "Valle Department"
                    },
                    {
                        "name": "Yoro Department"
                    },
                ],
                "code": "HN"
            },
            {
                "name": "Hong Kong",
                "dial_code": "+852",
                "states": [{
                        "name": "Central and Western District"
                    },
                    {
                        "name": "Eastern"
                    },
                    {
                        "name": "Islands District"
                    },
                    {
                        "name": "Kowloon City"
                    },
                    {
                        "name": "Kwai Tsing"
                    },
                    {
                        "name": "Kwun Tong"
                    },
                    {
                        "name": "North"
                    },
                    {
                        "name": "Sai Kung District"
                    },
                    {
                        "name": "Sha Tin"
                    },
                    {
                        "name": "Sham Shui Po"
                    },
                    {
                        "name": "Southern"
                    },
                    {
                        "name": "Tsuen Wan District"
                    },
                    {
                        "name": "Tuen Mun"
                    },
                    {
                        "name": "Wan Chai"
                    },
                    {
                        "name": "Wong Tai Sin"
                    },
                    {
                        "name": "Yau Tsim Mong"
                    },
                    {
                        "name": "Yuen Long District"
                    },
                ],
                "code": "HK"
            },
            {
                "name": "Hungary",
                "dial_code": "+36",
                "states": [{
                        "name": "Bács-Kiskun County"
                    },
                    {
                        "name": "Baranya County"
                    },
                    {
                        "name": "Békés County"
                    },
                    {
                        "name": "Békéscsaba"
                    },
                    {
                        "name": "Borsod-Abaúj-Zemplén County"
                    },
                    {
                        "name": "Budapest"
                    },
                    {
                        "name": "Csongrád County"
                    },
                    {
                        "name": "Debrecen"
                    },
                    {
                        "name": "Dunaújváros"
                    },
                    {
                        "name": "Eger"
                    },
                    {
                        "name": "Érd"
                    },
                    {
                        "name": "Fejér County"
                    },
                    {
                        "name": "Győr"
                    },
                    {
                        "name": "Győr-Moson-Sopron County"
                    },
                    {
                        "name": "Hajdú-Bihar County"
                    },
                    {
                        "name": "Heves County"
                    },
                    {
                        "name": "Hódmezővásárhely"
                    },
                    {
                        "name": "Jász-Nagykun-Szolnok County"
                    },
                    {
                        "name": "Kaposvár"
                    },
                    {
                        "name": "Kecskemét"
                    },
                    {
                        "name": "Miskolc"
                    },
                    {
                        "name": "Nagykanizsa"
                    },
                    {
                        "name": "Nógrád County"
                    },
                    {
                        "name": "Nyíregyháza"
                    },
                    {
                        "name": "Pécs"
                    },
                    {
                        "name": "Pest County"
                    },
                    {
                        "name": "Salgótarján"
                    },
                    {
                        "name": "Somogy County"
                    },
                    {
                        "name": "Sopron"
                    },
                    {
                        "name": "Szabolcs-Szatmár-Bereg County"
                    },
                    {
                        "name": "Szeged"
                    },
                    {
                        "name": "Székesfehérvár"
                    },
                    {
                        "name": "Szekszárd"
                    },
                    {
                        "name": "Szolnok"
                    },
                    {
                        "name": "Szombathely"
                    },
                    {
                        "name": "Tatabánya"
                    },
                    {
                        "name": "Tolna County"
                    },
                    {
                        "name": "Vas County"
                    },
                    {
                        "name": "Veszprém"
                    },
                    {
                        "name": "Veszprém County"
                    },
                    {
                        "name": "Zala County"
                    },
                    {
                        "name": "Zalaegerszeg"
                    },
                ],
                "code": "HU"
            },
            {
                "name": "Iceland",
                "dial_code": "+354",
                "states": [{
                        "name": "Capital region"
                    },
                    {
                        "name": "Eastern region"
                    },
                    {
                        "name": "Northeastern region"
                    },
                    {
                        "name": "Northwestern region"
                    },
                    {
                        "name": "Southern Peninsula region"
                    },
                    {
                        "name": "Southern region"
                    },
                    {
                        "name": "Western region"
                    },
                    {
                        "name": "Westfjords"
                    },
                ],
                "code": "IS"
            },
            {
                "name": "India",
                "dial_code": "+91",
                "states": [{
                        "name": "Andaman and Nicobar Islands"

                    },
                    {
                        "name": "Andhra Pradesh"

                    },
                    {
                        "name": "Arunachal Pradesh"

                    },
                    {
                        "name": "Assam"

                    },
                    {
                        "name": "Bihar"

                    },
                    {
                        "name": "Chandigarh"

                    },
                    {
                        "name": "Chhattisgarh"

                    },
                    {
                        "name": "Dadra and Nagar Haveli"

                    },
                    {
                        "name": "Daman and Diu"

                    },
                    {
                        "name": "Delhi"

                    },
                    {
                        "name": "Goa"

                    },
                    {
                        "name": "Gujarat"

                    },
                    {
                        "name": "Haryana"

                    },
                    {
                        "name": "Himachal Pradesh"

                    },
                    {
                        "name": "Jammu and Kashmir"

                    },
                    {
                        "name": "Jharkhand"

                    },
                    {
                        "name": "Karnataka"

                    },
                    {
                        "name": "Kerala"

                    },
                    {
                        "name": "Ladakh"

                    },
                    {
                        "name": "Lakshadweep"

                    },
                    {
                        "name": "Madhya Pradesh"

                    },
                    {
                        "name": "Maharashtra"

                    },
                    {
                        "name": "Manipur"

                    },
                    {
                        "name": "Meghalaya"

                    },
                    {
                        "name": "Mizoram"

                    },
                    {
                        "name": "Nagaland"

                    },
                    {
                        "name": "Odisha"

                    },
                    {
                        "name": "Puducherry"

                    },
                    {
                        "name": "Punjab"

                    },
                    {
                        "name": "Rajasthan"

                    },
                    {
                        "name": "Sikkim"

                    },
                    {
                        "name": "Tamil Nadu"

                    },
                    {
                        "name": "Telangana"

                    },
                    {
                        "name": "Tripura"

                    },
                    {
                        "name": "Uttar Pradesh"

                    },
                    {
                        "name": "Uttarakhand"

                    },
                    {
                        "name": "West Bengal"

                    },
                ],
                "code": "IN"
            },
            {
                "name": "Indonesia",
                "dial_code": "+62",
                "states": [{
                        "name": "Aceh"

                    },
                    {
                        "name": "Bali"

                    },
                    {
                        "name": "Bangka Belitung Islands"

                    },
                    {
                        "name": "Banten"

                    },
                    {
                        "name": "Bengkulu"

                    },
                    {
                        "name": "Central Java"

                    },
                    {
                        "name": "Central Kalimantan"

                    },
                    {
                        "name": "Central Sulawesi"

                    },
                    {
                        "name": "East Java"

                    },
                    {
                        "name": "East Kalimantan"

                    },
                    {
                        "name": "East Nusa Tenggara"

                    },
                    {
                        "name": "Gorontalo"

                    },
                    {
                        "name": "Jakarta"

                    },
                    {
                        "name": "Jambi"

                    },
                    {
                        "name": "Kalimantan"

                    },
                    {
                        "name": "Lampung"

                    },
                    {
                        "name": "Lesser Sunda Islands"

                    },
                    {
                        "name": "Maluku"

                    },
                    {
                        "name": "Maluku Islands"

                    },
                    {
                        "name": "North Kalimantan"

                    },
                    {
                        "name": "North Maluku"

                    },
                    {
                        "name": "North Sulawesi"

                    },
                    {
                        "name": "North Sumatra"

                    },
                    {
                        "name": "Papua"

                    },
                    {
                        "name": "Riau"

                    },
                    {
                        "name": "Riau Islands"

                    },
                    {
                        "name": "South Kalimantan"

                    },
                    {
                        "name": "South Sulawesi"

                    },
                    {
                        "name": "South Sumatra"

                    },
                    {
                        "name": "Southeast Sulawesi"

                    },
                    {
                        "name": "Special Region of Yogyakarta"

                    },
                    {
                        "name": "Sulawesi"

                    },
                    {
                        "name": "Sumatra"

                    },
                    {
                        "name": "West Java"

                    },
                    {
                        "name": "West Nusa Tenggara"

                    },
                    {
                        "name": "West Papua"

                    },
                    {
                        "name": "West Sulawesi"

                    },
                    {
                        "name": "West Sumatra"

                    },
                ],
                "code": "ID"
            },

       {
                "name": "Iran, Islamic Republic of Persian Gulf",
                "dial_code": "+98",
                "states": [{
                        "name": "Alborz province"
                    },
                    {
                        "name": "Ardabil province"
                    },
                    {
                        "name": "Bushehr province"
                    },
                    {
                        "name": "Chaharmahal and Bakhtiari province"
                    },
                    {
                        "name": "East Azerbaijan province"
                    },
                    {
                        "name": "Fars province"
                    },
                    {
                        "name": "Gilan province"
                    },
                    {
                        "name": "Golestan province"
                    },
                    {
                        "name": "Hormozgan province"
                    },
                    {
                        "name": "Ilam province"
                    },
                    {
                        "name": "Isfahan province"
                    },
                    {
                        "name": "Kerman province"
                    },
                    {
                        "name": "Kermanshah province"
                    },
                    {
                        "name": "Khuzestan province"
                    },
                    {
                        "name": "Kohgiluyeh and Boyer-Ahmad province"
                    },
                    {
                        "name": "Kurdistan province"
                    },
                    {
                        "name": "Lorestan province"
                    },
                    {
                        "name": "Markazi province"
                    },
                    {
                        "name": "Mazandaran province"
                    },
                    {
                        "name": "North Khorasan province"
                    },
                    {
                        "name": "Qazvin province"
                    },
                    {
                        "name": "Qom province"
                    },
                    {
                        "name": "Razavi Khorasan province"
                    },
                    {
                        "name": "Semnan province"
                    },
                    {
                        "name": "Sistan and Baluchestan"
                    },
                    {
                        "name": "South Khorasan province"
                    },
                    {
                        "name": "Tehran province"
                    },
                    {
                        "name": "West Azarbaijan province"
                    },
                    {
                        "name": "Yazd province"
                    },
                    {
                        "name": "Zanjan province"
                    },
                ],
                "code": "IR"
            },
            {
                "name": "Iraq",
                "dial_code": "+964",
                "states": [{
                        "name": "Al Anbar Governorate"
                    },
                    {
                        "name": "Al Muthanna Governorate"
                    },
                    {
                        "name": "Al-Qādisiyyah Governorate"
                    },
                    {
                        "name": "Babylon Governorate"
                    },
                    {
                        "name": "Baghdad Governorate"
                    },
                    {
                        "name": "Basra Governorate"
                    },
                    {
                        "name": "Dhi Qar Governorate"
                    },
                    {
                        "name": "Diyala Governorate"
                    },
                    {
                        "name": "Dohuk Governorate"
                    },
                    {
                        "name": "Erbil Governorate"
                    },
                    {
                        "name": "Karbala Governorate"
                    },
                    {
                        "name": "Kirkuk Governorate"
                    },
                    {
                        "name": "Maysan Governorate"
                    },
                    {
                        "name": "Najaf Governorate"
                    },
                    {
                        "name": "Nineveh Governorate"
                    },
                    {
                        "name": "Saladin Governorate"
                    },
                    {
                        "name": "Sulaymaniyah Governorate"
                    },
                    {
                        "name": "Wasit Governorate"
                    },
                ],
                "code": "IQ"
            },
            {
                "name": "Ireland",
                "dial_code": "+353",
                "states": [{
                        "name": "Connacht"
                    },
                    {
                        "name": "County Carlow"
                    },
                    {
                        "name": "County Cavan"
                    },
                    {
                        "name": "County Clare"
                    },
                    {
                        "name": "County Cork"

                    },
                    {
                        "name": "County Donegal"
                    },
                    {
                        "name": "County Dublin"
                    },
                    {
                        "name": "County Galway"
                    },
                    {
                        "name": "County Kerry"
                    },
                    {
                        "name": "County Kildare"
                    },
                    {
                        "name": "County Kilkenny"
                    },
                    {
                        "name": "County Laois"
                    },
                    {
                        "name": "County Limerick"
                    },
                    {
                        "name": "County Longford"
                    },
                    {
                        "name": "County Louth"
                    },
                    {
                        "name": "County Mayo"
                    },
                    {
                        "name": "County Meath"
                    },
                    {
                        "name": "County Monaghan"
                    },
                    {
                        "name": "County Offaly"
                    },
                    {
                        "name": "County Roscommon"
                    },
                    {
                        "name": "County Sligo"

                    },
                    {
                        "name": "County Tipperary"

                    },
                    {
                        "name": "County Waterford"

                    },
                    {
                        "name": "County Westmeath"
                    },
                    {
                        "name": "County Wexford"
                    },
                    {
                        "name": "County Wicklow"
                    },
                    {
                        "name": "Leinster"
                    },
                    {
                        "name": "Munster"
                    },
                    {
                        "name": "Ulster"
                    },
                ],
                "code": "IE"
            },
            {
                "name": "Isle of Man",
                "dial_code": "+44",
                "states": [{
                    "name": "Isle of Man"
                }],
                "code": "IM"
            },
            {
                "name": "Israel",
                "dial_code": "+972",
                "states": [{
                        "name": "Central District"
                    },
                    {
                        "name": "Haifa District"
                    },
                    {
                        "name": "Jerusalem District"
                    },
                    {
                        "name": "Northern District"
                    },
                    {
                        "name": "Southern District"
                    },
                    {
                        "name": "Tel Aviv District"
                    },
                ],
                "code": "IL"
            },
            {
                "name": "Italy",
                "dial_code": "+39",
                "states": [{
                        "name": "Abruzzo"
                    },
                    {
                        "name": "Aosta Valley"
                    },
                    {
                        "name": "Apulia"
                    },
                    {
                        "name": "Basilicata"
                    },
                    {
                        "name": "Benevento province"
                    },
                    {
                        "name": "Calabria"
                    },
                    {
                        "name": "Campania"
                    },
                    {
                        "name": "Emilia-Romagna"
                    },
                    {
                        "name": "Friuli–Venezia Giulia"
                    },
                    {
                        "name": "Lazio"
                    },
                    {
                        "name": "Libero consorzio comunale di Agrigento"
                    },
                    {
                        "name": "Libero consorzio comunale di Caltanissetta"
                    },
                    {
                        "name": "Libero consorzio comunale di Enna"
                    },
                    {
                        "name": "Libero consorzio comunale di Ragusa"
                    },
                    {
                        "name": "Libero consorzio comunale di Siracusa"
                    },
                    {
                        "name": "Libero consorzio comunale di Trapani"
                    },
                    {
                        "name": "Liguria"
                    },
                    {
                        "name": "Lombardy"
                    },
                    {
                        "name": "Marche"
                    },
                    {
                        "name": "Metropolitan City of Bari"
                    },
                    {
                        "name": "Metropolitan City of Bologna"
                    },
                    {
                        "name": "Metropolitan City of Cagliari"
                    },
                    {
                        "name": "Metropolitan City of Catania"
                    },
                    {
                        "name": "Metropolitan City of Florence"
                    },
                    {
                        "name": "Metropolitan City of Genoa"
                    },
                    {
                        "name": "Metropolitan City of Messina"
                    },
                    {
                        "name": "Metropolitan City of Milan"
                    },
                    {
                        "name": "Metropolitan City of Naples"
                    },
                    {
                        "name": "Metropolitan City of Palermo"
                    },
                    {
                        "name": "Metropolitan City of Reggio Calabria"
                    },
                    {
                        "name": "Metropolitan City of Rome"
                    },
                    {
                        "name": "Metropolitan City of Turin"
                    },
                    {
                        "name": "Metropolitan City of Venice"
                    },
                    {
                        "name": "Molise"
                    },
                    {
                        "name": "Pesaro and Urbino province"
                    },
                    {
                        "name": "Piedmont"
                    },
                    {
                        "name": "Province of Alessandria"
                    },
                    {
                        "name": "Province of Ancona"
                    },
                    {
                        "name": "Province of Ascoli Piceno"
                    },
                    {
                        "name": "Province of Asti"
                    },
                    {
                        "name": "Province of Avellino"
                    },
                    {
                        "name": "Province of Barletta-Andria-Trani"
                    },
                    {
                        "name": "Province of Belluno"
                    },
                    {
                        "name": "Province of Bergamo"
                    },
                    {
                        "name": "Province of Biella"
                    },
                    {
                        "name": "Province of Brescia"
                    },
                    {
                        "name": "Province of Brindisi"
                    },
                    {
                        "name": "Province of Campobasso"
                    },
                    {
                        "name": "Province of Carbonia-Iglesias"
                    },
                    {
                        "name": "Province of Caserta"
                    },
                    {
                        "name": "Province of Catanzaro"
                    },
                    {
                        "name": "Province of Chieti"
                    },
                    {
                        "name": "Province of Como"
                    },
                    {
                        "name": "Province of Cosenza"
                    },
                    {
                        "name": "Province of Cremona"
                    },
                    {
                        "name": "Province of Crotone"
                    },
                    {
                        "name": "Province of Cuneo"
                    },
                    {
                        "name": "Province of Fermo"
                    },
                    {
                        "name": "Province of Ferrara"
                    },
                    {
                        "name": "Province of Foggia"

                    },
                    {
                        "name": "Province of Forlì-Cesena"

                    },
                    {
                        "name": "Province of Frosinone"

                    },
                    {
                        "name": "Province of Gorizia"

                    },
                    {
                        "name": "Province of Grosseto"

                    },
                    {
                        "name": "Province of Imperia"

                    },
                    {
                        "name": "Province of Isernia"

                    },
                    {
                        "name": "Province of L'Aquila"

                    },
                    {
                        "name": "Province of La Spezia"

                    },
                    {
                        "name": "Province of Latina"

                    },
                    {
                        "name": "Province of Lecce"

                    },
                    {
                        "name": "Province of Lecco"
                    },
                    {
                        "name": "Province of Livorno"
                    },
                    {
                        "name": "Province of Lodi"
                    },
                    {
                        "name": "Province of Lucca"
                    },
                    {
                        "name": "Province of Macerata"
                    },
                    {
                        "name": "Province of Mantua"
                    },
                    {
                        "name": "Province of Massa and Carrara"
                    },
                    {
                        "name": "Province of Matera"
                    },
                    {
                        "name": "Province of Medio Campidano"
                    },
                    {
                        "name": "Province of Modena"
                    },
                    {
                        "name": "Province of Monza and Brianza"
                    },
                    {
                        "name": "Province of Novara"
                    },
                    {
                        "name": "Province of Nuoro"
                    },
                    {
                        "name": "Province of Ogliastra"
                    },
                    {
                        "name": "Province of Olbia-Tempio"
                    },
                    {
                        "name": "Province of Oristano"
                    },
                    {
                        "name": "Province of Padua"
                    },
                    {
                        "name": "Province of Parma"
                    },
                    {
                        "name": "Province of Pavia"
                    },
                    {
                        "name": "Province of Perugia"
                    },
                    {
                        "name": "Province of Pescara"
                    },
                    {
                        "name": "Province of Piacenza"
                    },
                    {
                        "name": "Province of Pisa"
                    },
                    {
                        "name": "Province of Pistoia"
                    },
                    {
                        "name": "Province of Pordenone"
                    },
                    {
                        "name": "Province of Potenza"
                    },
                    {
                        "name": "Province of Prato"
                    },
                    {
                        "name": "Province of Ravenna"
                    },
                    {
                        "name": "Province of Reggio Emilia"
                    },
                    {
                        "name": "Province of Rieti"
                    },
                    {
                        "name": "Province of Rimini"
                    },
                    {
                        "name": "Province of Rovigo"
                    },
                    {
                        "name": "Province of Salerno"
                    },
                    {
                        "name": "Province of Sassari"
                    },
                    {
                        "name": "Province of Savona"
                    },
                    {
                        "name": "Province of Siena"
                    },
                    {
                        "name": "Province of Sondrio"
                    },
                    {
                        "name": "Province of Taranto"
                    },
                    {
                        "name": "Province of Teramo"
                    },
                    {
                        "name": "Province of Terni"
                    },
                    {
                        "name": "Province of Treviso"
                    },
                    {
                        "name": "Province of Trieste"
                    },
                    {
                        "name": "Province of Udine"
                    },
                    {
                        "name": "Province of Varese"
                    },
                    {
                        "name": "Province of Verbano-Cusio-Ossola"
                    },
                    {
                        "name": "Province of Vercelli"
                    },
                    {
                        "name": "Province of Verona"
                    },
                    {
                        "name": "Province of Vibo Valentia"
                    },
                    {
                        "name": "Province of Vicenza"
                    },
                    {
                        "name": "Province of Viterbo"
                    },
                    {
                        "name": "Sardinia"
                    },
                    {
                        "name": "Sicily"
                    },
                    {
                        "name": "South Tyrol"
                    },
                    {
                        "name": "Trentino"
                    },
                    {
                        "name": "Trentino-South Tyrol"
                    },
                    {
                        "name": "Tuscany"
                    },
                    {
                        "name": "Umbria"
                    },
                    {
                        "name": "Veneto"
                    },
                ],
                "code": "IT"
            },
            {
                "name": "Jamaica",
                "dial_code": "+1876",
                "states": [{
                        "name": "Clarendon Parish"
                    },
                    {
                        "name": "Hanover Parish"
                    },
                    {
                        "name": "Kingston Parish"
                    },
                    {
                        "name": "Manchester Parish"
                    },
                    {
                        "name": "Portland Parish"
                    },
                    {
                        "name": "Saint Andrew"
                    },
                    {
                        "name": "Saint Ann Parish"
                    },
                    {
                        "name": "Saint Catherine Parish"
                    },
                    {
                        "name": "Saint Elizabeth Parish"
                    },
                    {
                        "name": "Saint James Parish"
                    },
                    {
                        "name": "Saint Mary Parish"
                    },
                    {
                        "name": "Saint Thomas Parish"
                    },
                    {
                        "name": "Trelawny Parish"
                    },
                    {
                        "name": "Westmoreland Parish"
                    },
                ],
                "code": "JM"
            },

     {
                "name": "Japan",
                "dial_code": "+81",
                "states": [{
                        "name": "Aichi Prefecture"
                    },
                    {
                        "name": "Akita Prefecture"
                    },
                    {
                        "name": "Aomori Prefecture"
                    },
                    {
                        "name": "Chiba Prefecture"
                    },
                    {
                        "name": "Ehime Prefecture"
                    },
                    {
                        "name": "Fukui Prefecture"
                    },
                    {
                        "name": "Fukuoka Prefecture"
                    },
                    {
                        "name": "Fukushima Prefecture"
                    },
                    {
                        "name": "Gifu Prefecture"
                    },
                    {
                        "name": "Gunma Prefecture"
                    },
                    {
                        "name": "Hiroshima Prefecture"
                    },
                    {
                        "name": "Hokkaidō Prefecture"
                    },
                    {
                        "name": "Hyōgo Prefecture"
                    },
                    {
                        "name": "Ibaraki Prefecture"
                    },
                    {
                        "name": "Ishikawa Prefecture"
                    },
                    {
                        "name": "Iwate Prefecture"
                    },
                    {
                        "name": "Kagawa Prefecture"
                    },
                    {
                        "name": "Kagoshima Prefecture"
                    },
                    {
                        "name": "Kanagawa Prefecture"
                    },
                    {
                        "name": "Kumamoto Prefecture"
                    },
                    {
                        "name": "Kyōto Prefecture"
                    },
                    {
                        "name": "Mie Prefecture"
                    },
                    {
                        "name": "Miyagi Prefecture"
                    },
                    {
                        "name": "Miyazaki Prefecture"
                    },
                    {
                        "name": "Nagano Prefecture"
                    },
                    {
                        "name": "Nagasaki Prefecture"
                    },
                    {
                        "name": "Nara Prefecture"
                    },
                    {
                        "name": "Niigata Prefecture"
                    },
                    {
                        "name": "Ōita Prefecture"
                    },
                    {
                        "name": "Okayama Prefecture"
                    },
                    {
                        "name": "Okinawa Prefecture"
                    },
                    {
                        "name": "Ōsaka Prefecture"
                    },
                    {
                        "name": "Saga Prefecture"
                    },
                    {
                        "name": "Saitama Prefecture"
                    },
                    {
                        "name": "Shiga Prefecture"
                    },
                    {
                        "name": "Shimane Prefecture"
                    },
                    {
                        "name": "Shizuoka Prefecture"
                    },
                    {
                        "name": "Tochigi Prefecture"
                    },
                    {
                        "name": "Tokushima Prefecture"
                    },
                    {
                        "name": "Tokyo",
                    },
                    {
                        "name": "Tottori Prefecture"
                    },
                    {
                        "name": "Toyama Prefecture"
                    },
                    {
                        "name": "Wakayama Prefecture"
                    },
                    {
                        "name": "Yamagata Prefecture"
                    },
                    {
                        "name": "Yamaguchi Prefecture"
                    },
                    {
                        "name": "Yamanashi Prefecture"
                    },
                ],
                "code": "JP"
            },
            {
                "name": "Jersey",
                "dial_code": "+44",
                "states": [{
                    "name": "Jersey",
                    code: "Jersey"
                }],
                "code": "JE"
            },
            {
                "name": "Jordan",
                "dial_code": "+962",
                "states": [{
                        "name": "Ajloun Governorate"
                    },
                    {
                        "name": "Amman Governorate"
                    },
                    {
                        "name": "Aqaba Governorate"
                    },
                    {
                        "name": "Balqa Governorate"
                    },
                    {
                        "name": "Irbid Governorate"
                    },
                    {
                        "name": "Jerash Governorate"
                    },
                    {
                        "name": "Karak Governorate"
                    },
                    {
                        "name": "Ma'an Governorate"
                    },
                    {
                        "name": "Madaba Governorate"
                    },
                    {
                        "name": "Mafraq Governorate"
                    },
                    {
                        "name": "Tafilah Governorate"
                    },
                    {
                        "name": "Zarqa Governorate"
                    },
                ],
                "code": "JO"
            },
            {
                "name": "Kazakhstan",
                "dial_code": "+77",
                "states": [{
                        "name": "Akmola region"
                    },
                    {
                        "name": "Aktobe region"
                    },
                    {
                        "name": "Almaty"
                    },
                    {
                        "name": "Almaty region"
                    },
                    {
                        "name": "Atyrau region"
                    },
                    {
                        "name": "Baikonur"
                    },
                    {
                        "name": "East Kazakhstan region"
                    },
                    {
                        "name": "Jambyl region"
                    },
                    {
                        "name": "Karaganda region"
                    },
                    {
                        "name": "Kostanay region"
                    },
                    {
                        "name": "Kyzylorda region"
                    },
                    {
                        "name": "Mangystau region"
                    },
                    {
                        "name": "North Kazakhstan region"
                    },
                    {
                        "name": "Nur-Sultan"
                    },
                    {
                        "name": "Pavlodar region"
                    },
                    {
                        "name": "Turkestan region"
                    },
                    {
                        "name": "West Kazakhstan province"
                    },
                ],
                "code": "KZ"
            },
            {
                "name": "Kenya",
                "dial_code": "+254",
                "states": [{
                        "name": "Baringo County"
                    },
                    {
                        "name": "Bomet County"
                    },
                    {
                        "name": "Bungoma County"
                    },
                    {
                        "name": "Busia County"
                    },
                    {
                        "name": "Central province"
                    },
                    {
                        "name": "Coast province"
                    },
                    {
                        "name": "Eastern province"
                    },
                    {
                        "name": "Elgeyo-Marakwet County"
                    },
                    {
                        "name": "Embu County"
                    },
                    {
                        "name": "Garissa County"
                    },
                    {
                        "name": "Homa Bay County"
                    },
                    {
                        "name": "Isiolo County"
                    },
                    {
                        "name": "Kajiado County"
                    },
                    {
                        "name": "Kakamega County"
                    },
                    {
                        "name": "Kericho County"
                    },
                    {
                        "name": "Kiambu County"
                    },
                    {
                        "name": "Kilifi County"
                    },
                    {
                        "name": "Kirinyaga County"
                    },
                    {
                        "name": "Kisii County"
                    },
                    {
                        "name": "Kisumu County"
                    },
                    {
                        "name": "Kitui County"
                    },
                    {
                        "name": "Kwale County"
                    },
                    {
                        "name": "Laikipia County"
                    },
                    {
                        "name": "Lamu County"
                    },
                    {
                        "name": "Machakos County"
                    },
                    {
                        "name": "Makueni County"
                    },
                    {
                        "name": "Mandera County"
                    },
                    {
                        "name": "Marsabit County"
                    },
                    {
                        "name": "Meru County"
                    },
                    {
                        "name": "Migori County"
                    },
                    {
                        "name": "Mombasa County"
                    },
                    {
                        "name": "Muranga County"
                    },
                    {
                        "name": "Nairobi"
                    },
                    {
                        "name": "Nakuru District"
                    },
                    {
                        "name": "Nandi District"
                    },
                    {
                        "name": "Narok County"
                    },
                    {
                        "name": "North Eastern province"
                    },
                    {
                        "name": "Nyamira District"
                    },
                    {
                        "name": "Nyandarua County"
                    },
                    {
                        "name": "Nyanza province"
                    },
                    {
                        "name": "Nyeri County"
                    },
                    {
                        "name": "Rift Valley province"
                    },
                    {
                        "name": "Samburu County"
                    },
                    {
                        "name": "Siaya County"
                    },
                    {
                        "name": "Taita–Taveta County"
                    },
                    {
                        "name": "Tana River County"
                    },
                    {
                        "name": "Tharaka Nithi County"
                    },
                    {
                        "name": "Trans-Nzoia District"
                    },
                    {
                        "name": "Turkana County"
                    },
                    {
                        "name": "Uasin Gishu District"
                    },
                    {
                        "name": "Vihiga District"
                    },
                    {
                        "name": "Wajir County"
                    },
                    {
                        "name": "West Pokot County"
                    },
                    {
                        "name": "Western province"
                    },
                ],
                "code": "KE"
            },

   {
                "name": "Kiribati",
                "dial_code": "+686",
                "states": [{
                        "name": "Gilbert Islands"
                    },
                    {
                        "name": "Line Islands"
                    },
                    {
                        "name": "Phoenix Islands"
                    },
                ],
                "code":"KI"
            },
            {
                "name": "Korea, Democratic People's Republic of Korea",
                "dial_code": "+850",
                "states": [{
                        "name": "Chagang province"
                    },
                    {
                        "name": "Kangwon province"
                    },
                    {
                        "name": "North Hamgyong province"
                    },
                    {
                        "name": "North Hwanghae province"
                    },
                    {
                        "name": "North Pyongan province"
                    },
                    {
                        "name": "Pyongyang",
                    },
                    {
                        "name": "Rason",
                    },
                    {
                        "name": "Ryanggang province"
                    },
                    {
                        "name": "South Hamgyong province"
                    },
                    {
                        "name": "South Hwanghae province"
                    },
                    {
                        "name": "South Pyongan province"
                    },
                ],
                "code": "KP"
            },
            {
                "name": "Korea, Republic of South Korea",
                "dial_code": "+82",
                "states": [{
                        "name": "Busan"
                    },
                    {
                        "name": "Daegu"
                    },
                    {
                        "name": "Daejeon"
                    },
                    {
                        "name": "Gangwon province"
                    },
                    {
                        "name": "Gwangju"
                    },
                    {
                        "name": "Gyeonggi province"
                    },
                    {
                        "name": "Incheon"
                    },
                    {
                        "name": "Jeju"
                    },
                    {
                        "name": "North Chungcheong province"
                    },
                    {
                        "name": "North Gyeongsang province"
                    },
                    {
                        "name": "North Jeolla province"
                    },
                    {
                        "name": "Sejong City"
                    },
                    {
                        "name": "Seoul"
                    },
                    {
                        "name": "South Chungcheong province"
                    },
                    {
                        "name": "South Gyeongsang province"
                    },
                    {
                        "name": "South Jeolla province"
                    },
                    {
                        "name": "Ulsan"
                    },
                ],
                "code": "KR"
            },
            {
                "name": "Kuwait",
                "dial_code": "+965",
                "states": [{
                        "name": "Al Ahmadi Governorate"
                    },
                    {
                        "name": "Al Farwaniyah Governorate"
                    },
                    {
                        "name": "Al Jahra Governorate"
                    },
                    {
                        "name": "Capital Governorate"
                    },
                    {
                        "name": "Hawalli Governorate"
                    },
                    {
                        "name": "Mubarak Al-Kabeer Governorate"
                    },
                ],
                "code": "KW"
            },
            {
                "name": "Kyrgyzstan",
                "dial_code": "+996",
                "states": [{
                        "name": "Batken region"
                    },
                    {
                        "name": "Bishkek"
                    },
                    {
                        "name": "Chuy region"
                    },
                    {
                        "name": "Issyk-Kul region"
                    },
                    {
                        "name": "Jalal-Abad region"
                    },
                    {
                        "name": "Naryn region"
                    },
                    {
                        "name": "Osh"
                    },
                    {
                        "name": "Osh region"
                    },
                    {
                        "name": "Talas region"
                    },
                ],
                "code": "KG"
            },

     {
                "name": "Laos",
                "dial_code": "+856",
                "states": [{
                        "name": "Attapeu province"
                    },
                    {
                        "name": "Bokeo province"
                    },
                    {
                        "name": "Bolikhamsai province"
                    },
                    {
                        "name": "Champasak province"
                    },
                    {
                        "name": "Houaphanh province"
                    },
                    {
                        "name": "Khammouane province"
                    },
                    {
                        "name": "Luang Namtha province"
                    },
                    {
                        "name": "Luang Prabang province"
                    },
                    {
                        "name": "Oudomxay province"
                    },
                    {
                        "name": "Phongsaly province"
                    },
                    {
                        "name": "Sainyabuli province"
                    },
                    {
                        "name": "Salavan province"
                    },
                    {
                        "name": "Savannakhet province"
                    },
                    {
                        "name": "Sekong province"
                    },
                    {
                        "name": "Vientiane Prefecture"
                    },
                    {
                        "name": "Vientiane province"
                    },
                    {
                        "name": "Xaisomboun"
                    },
                    {
                        "name": "Xaisomboun province"
                    },
                    {
                        "name": "Xiangkhouang province"
                    },
                ],
                "code": "LA"
            },
            {
                "name": "Latvia",
                "dial_code": "+371",
                "states": [{
                        "name": "Aglona Municipality"
                    },
                    {
                        "name": "Aizkraukle Municipality"
                    },
                    {
                        "name": "Aizpute Municipality"
                    },
                    {
                        "name": "Aknīste Municipality"
                    },
                    {
                        "name": "Aloja Municipality"
                    },
                    {
                        "name": "Alsunga Municipality"
                    },
                    {
                        "name": "Alūksne Municipality"
                    },
                    {
                        "name": "Amata Municipality"
                    },
                    {
                        "name": "Ape Municipality"
                    },
                    {
                        "name": "Auce Municipality"
                    },
                    {
                        "name": "Babīte Municipality"
                    },
                    {
                        "name": "Baldone Municipality"
                    },
                    {
                        "name": "Baltinava Municipality"
                    },
                    {
                        "name": "Balvi Municipality"
                    },
                    {
                        "name": "Bauska Municipality"
                    },
                    {
                        "name": "Beverīna Municipality"
                    },
                    {
                        "name": "Brocēni Municipality"
                    },
                    {
                        "name": "Burtnieki Municipality"
                    },
                    {
                        "name": "Carnikava Municipality"
                    },
                    {
                        "name": "Cēsis Municipality"
                    },
                    {
                        "name": "Cesvaine Municipality"
                    },
                    {
                        "name": "Cibla Municipality"
                    },
                    {
                        "name": "Dagda Municipality"
                    },
                    {
                        "name": "Daugavpils"
                    },
                    {
                        "name": "Daugavpils Municipality"
                    },
                    {
                        "name": "Dobele Municipality"
                    },
                    {
                        "name": "Dundaga Municipality"
                    },
                    {
                        "name": "Durbe Municipality"
                    },
                    {
                        "name": "Engure Municipality"
                    },
                    {
                        "name": "Ērgļi Municipality"
                    },
                    {
                        "name": "Garkalne Municipality"
                    },
                    {
                        "name": "Grobiņa Municipality"
                    },
                    {
                        "name": "Gulbene Municipality"
                    },
                    {
                        "name": "Iecava Municipality"
                    },
                    {
                        "name": "Ikšķile Municipality"
                    },
                    {
                        "name": "Ilūkste Municipality"
                    },
                    {
                        "name": "Inčukalns Municipality"
                    },
                    {
                        "name": "Jaunjelgava Municipality"
                    },
                    {
                        "name": "Jaunpiebalga Municipality"
                    },
                    {
                        "name": "Jaunpils Municipality"
                    },
                    {
                        "name": "Jēkabpils"
                    },
                    {
                        "name": "Jēkabpils Municipality"
                    },
                    {
                        "name": "Jelgava"
                    },
                    {
                        "name": "Jelgava Municipality"
                    },
                    {
                        "name": "Jūrmala"
                    },
                    {
                        "name": "Kandava Municipality"
                    },
                    {
                        "name": "Kārsava Municipality"
                    },
                    {
                        "name": "Ķegums Municipality"
                    },
                    {
                        "name": "Ķekava Municipality"
                    },
                    {
                        "name": "Kocēni Municipality"
                    },
                    {
                        "name": "Koknese Municipality"
                    },
                    {
                        "name": "Krāslava Municipality"
                    },
                    {
                        "name": "Krimulda Municipality"
                    },
                    {
                        "name": "Krustpils Municipality"
                    },
                    {
                        "name": "Kuldīga Municipality"
                    },
                    {
                        "name": "Lielvārde Municipality"
                    },
                    {
                        "name": "Liepāja"
                    },
                    {
                        "name": "Līgatne Municipality"
                    },
                    {
                        "name": "Limbaži Municipality"
                    },
                    {
                        "name": "Līvāni Municipality"
                    },
                    {
                        "name": "Lubāna Municipality"
                    },
                    {
                        "name": "Ludza Municipality"
                    },
                    {
                        "name": "Madona Municipality"
                    },
                    {
                        "name": "Mālpils Municipality"
                    },
                    {
                        "name": "Mārupe Municipality"
                    },
                    {
                        "name": "Mazsalaca Municipality"
                    },
                    {
                        "name": "Mērsrags Municipality"
                    },
                    {
                        "name": "Naukšēni Municipality"
                    },
                    {
                        "name": "Nereta Municipality"
                    },
                    {
                        "name": "Nīca Municipality"
                    },
                    {
                        "name": "Ogre Municipality"
                    },
                    {
                        "name": "Olaine Municipality"
                    },
                    {
                        "name": "Ozolnieki Municipality"
                    },
                    {
                        "name": "Pārgauja Municipality"
                    },
                    {
                        "name": "Pāvilosta Municipality"
                    },
                    {
                        "name": "Pļaviņas Municipality"
                    },
                    {
                        "name": "Preiļi Municipality"
                    },
                    {
                        "name": "Priekule Municipality"
                    },
                    {
                        "name": "Priekuļi Municipality"
                    },
                    {
                        "name": "Rauna Municipality"
                    },
                    {
                        "name": "Rēzekne"
                    },
                    {
                        "name": "Rēzekne Municipality"
                    },
                    {
                        "name": "Riebiņi Municipality"
                    },
                    {
                        "name": "Riga"
                    },
                    {
                        "name": "Roja Municipality"
                    },
                    {
                        "name": "Ropaži Municipality"
                    },
                    {
                        "name": "Rucava Municipality"
                    },
                    {
                        "name": "Rugāji Municipality"
                    },
                    {
                        "name": "Rūjiena Municipality"
                    },
                    {
                        "name": "Rundāle Municipality"
                    },
                    {
                        "name": "Sala Municipality"
                    },
                    {
                        "name": "Salacgrīva Municipality"
                    },
                    {
                        "name": "Salaspils Municipality"
                    },
                    {
                        "name": "Saldus Municipality"
                    },
                    {
                        "name": "Saulkrasti Municipality"
                    },
                    {
                        "name": "Sēja Municipality"
                    },
                    {
                        "name": "Sigulda Municipality"
                    },
                    {
                        "name": "Skrīveri Municipality"
                    },
                    {
                        "name": "Skrunda Municipality"
                    },
                    {
                        "name": "Smiltene Municipality"
                    },
                    {
                        "name": "Stopiņi Municipality"
                    },
                    {
                        "name": "Strenči Municipality"
                    },
                    {
                        "name": "Talsi Municipality"
                    },
                    {
                        "name": "Tērvete Municipality"
                    },
                    {
                        "name": "Tukums Municipality"
                    },
                    {
                        "name": "Vaiņode Municipality"
                    },
                    {
                        "name": "Valka Municipality"
                    },
                    {
                        "name": "Valmiera"
                    },
                    {
                        "name": "Varakļāni Municipality"
                    },
                    {
                        "name": "Vārkava Municipality"
                    },
                    {
                        "name": "Vecpiebalga Municipality"
                    },
                    {
                        "name": "Vecumnieki Municipality"
                    },
                    {
                        "name": "Ventspils"
                    },
                    {
                        "name": "Ventspils Municipality"
                    },
                    {
                        "name": "Viesīte Municipality"
                    },
                    {
                        "name": "Viļaka Municipality"
                    },
                    {
                        "name": "Viļāni Municipality"
                    },
                    {
                        "name": "Zilupe Municipality"
                    },
                ],
                "code": "LV"
            },
            {
                "name": "Lebanon",
                "dial_code": "+961",
                "states": [{
                        "name": "Akkar Governorate"
                    },
                    {
                        "name": "Baalbek-Hermel Governorate"
                    },
                    {
                        "name": "Beirut Governorate"
                    },
                    {
                        "name": "Beqaa Governorate"
                    },
                    {
                        "name": "Mount Lebanon Governorate"
                    },
                    {
                        "name": "Nabatieh Governorate"
                    },
                    {
                        "name": "North Governorate"
                    },
                    {
                        "name": "South Governorate"
                    },
                ],
                "code": "LB"
            },
            {
                "name": "Lesotho",
                "dial_code": "+266",
                "states": [{
                        "name": "Berea District"
                    },
                    {
                        "name": "Butha-Buthe District"
                    },
                    {
                        "name": "Leribe District"
                    },
                    {
                        "name": "Mafeteng District"
                    },
                    {
                        "name": "Maseru District"
                    },
                    {
                        "name": "Mohale's Hoek District"
                    },
                    {
                        "name": "Mokhotlong District"
                    },
                    {
                        "name": "Qacha's Nek District"
                    },
                    {
                        "name": "Quthing District"
                    },
                    {
                        "name": "Thaba-Tseka District"
                    },
                ],
                "code": "LS"
            },
            {
                "name": "Liberia",
                "dial_code": "+231",
                "states": [{
                        "name": "Bomi County"
                    },
                    {
                        "name": "Bong County"
                    },
                    {
                        "name": "Gbarpolu County"
                    },
                    {
                        "name": "Grand Bassa County"
                    },
                    {
                        "name": "Grand Cape Mount County"
                    },
                    {
                        "name": "Grand Gedeh County"
                    },
                    {
                        "name": "Grand Kru County"
                    },
                    {
                        "name": "Lofa County"
                    },
                    {
                        "name": "Margibi County"
                    },
                    {
                        "name": "Maryland County"
                    },
                    {
                        "name": "Montserrado County"
                    },
                    {
                        "name": "Nimba"
                    },
                    {
                        "name": "River Cess County"
                    },
                    {
                        "name": "River Gee County"
                    },
                    {
                        "name": "Sinoe County"
                    },
                ],
                "code": "LR"
            },
            {
                "name": "Libyan Arab Jamahiriya",
                "dial_code": "+218",
                "states": [{
                        "name": "Al Wahat District"
                    },
                    {
                        "name": "Benghazi"
                    },
                    {
                        "name": "Derna District"
                    },
                    {
                        "name": "Ghat District"
                    },
                    {
                        "name": "Jabal al Akhdar"
                    },
                    {
                        "name": "Jabal al Gharbi District"
                    },
                    {
                        "name": "Jafara"
                    },
                    {
                        "name": "Jufra"
                    },
                    {
                        "name": "Kufra District"
                    },
                    {
                        "name": "Marj District"
                    },
                    {
                        "name": "Misrata District"
                    },
                    {
                        "name": "Murqub"
                    },
                    {
                        "name": "Murzuq District"
                    },
                    {
                        "name": "Nalut District"
                    },
                    {
                        "name": "Nuqat al Khams"
                    },
                    {
                        "name": "Sabha District"
                    },
                    {
                        "name": "Sirte District"
                    },
                    {
                        "name": "Tripoli District"
                    },
                    {
                        "name": "Wadi al Hayaa District"
                    },
                    {
                        "name": "Wadi al Shatii District"
                    },
                    {
                        "name": "Zawiya District"
                    },
                ],
                "code": "LY"
            },

            
            {
                "name": "Liechtenstein",
                "dial_code": "+423",
                "states": [{
                        "name": "Balzers"
                    },
                    {
                        "name": "Eschen"
                    },
                    {
                        "name": "Gamprin"
                    },
                    {
                        "name": "Mauren"
                    },
                    {
                        "name": "Planken"
                    },
                    {
                        "name": "Ruggell"
                    },
                    {
                        "name": "Schaan"
                    },
                    {
                        "name": "Schellenberg"
                    },
                    {
                        "name": "Triesen"
                    },
                    {
                        "name": "Triesenberg"
                    },
                    {
                        "name": "Vaduz"
                    },
                ],
                "code": "LI"
            },
            {
                "name": "Lithuania",
                "dial_code": "+370",
                "states": [{
                        "name": "Akmenė District Municipality"
                    },
                    {
                        "name": "Alytus City Municipality"
                    },
                    {
                        "name": "Alytus County"
                    },
                    {
                        "name": "Alytus District Municipality"
                    },
                    {
                        "name": "Birštonas Municipality"
                    },
                    {
                        "name": "Biržai District Municipality"
                    },
                    {
                        "name": "Druskininkai Municipality"
                    },
                    {
                        "name": "Elektrėnai Municipality"
                    },
                    {
                        "name": "Ignalina District Municipality"
                    },
                    {
                        "name": "Jonava District Municipality"
                    },
                    {
                        "name": "Joniškis District Municipality"
                    },
                    {
                        "name": "Jurbarkas District Municipality"
                    },
                    {
                        "name": "Kaišiadorys District Municipality"
                    },
                    {
                        "name": "Kalvarija Municipality"
                    },
                    {
                        "name": "Kaunas City Municipality"
                    },
                    {
                        "name": "Kaunas County"
                    },
                    {
                        "name": "Kaunas District Municipality"
                    },
                    {
                        "name": "Kazlų Rūda Municipality"
                    },
                    {
                        "name": "Kėdainiai District Municipality"
                    },
                    {
                        "name": "Kelmė District Municipality"
                    },
                    {
                        "name": "Klaipeda City Municipality"
                    },
                    {
                        "name": "Klaipėda County"
                    },
                    {
                        "name": "Klaipėda District Municipality"
                    },
                    {
                        "name": "Kretinga District Municipality"
                    },
                    {
                        "name": "Kupiškis District Municipality"
                    },
                    {
                        "name": "Lazdijai District Municipality"
                    },
                    {
                        "name": "Marijampolė County"
                    },
                    {
                        "name": "Marijampolė Municipality"
                    },
                    {
                        "name": "Mažeikiai District Municipality"
                    },
                    {
                        "name": "Molėtai District Municipality"
                    },
                    {
                        "name": "Neringa Municipality"
                    },
                    {
                        "name": "Pagėgiai Municipality"
                    },
                    {
                        "name": "Pakruojis District Municipality"
                    },
                    {
                        "name": "Palanga City Municipality"
                    },
                    {
                        "name": "Panevėžys City Municipality"
                    },
                    {
                        "name": "Panevėžys County"
                    },
                    {
                        "name": "Panevėžys District Municipality"
                    },
                    {
                        "name": "Pasvalys District Municipality"
                    },
                    {
                        "name": "Plungė District Municipality"
                    },
                    {
                        "name": "Prienai District Municipality"
                    },
                    {
                        "name": "Radviliškis District Municipality"
                    },
                    {
                        "name": "Raseiniai District Municipality"
                    },
                    {
                        "name": "Rietavas Municipality"
                    },
                    {
                        "name": "Rokiškis District Municipality"
                    },
                    {
                        "name": "Šakiai District Municipality"
                    },
                    {
                        "name": "Šalčininkai District Municipality"
                    },
                    {
                        "name": "Šiauliai City Municipality"
                    },
                    {
                        "name": "Šiauliai County"
                    },
                    {
                        "name": "Šiauliai District Municipality"
                    },
                    {
                        "name": "Šilalė District Municipality"
                    },
                    {
                        "name": "Šilutė District Municipality"
                    },
                    {
                        "name": "Širvintos District Municipality"
                    },
                    {
                        "name": "Skuodas District Municipality"
                    },
                    {
                        "name": "Švenčionys District Municipality"
                    },
                    {
                        "name": "Tauragė County"
                    },
                    {
                        "name": "Tauragė District Municipality"
                    },
                    {
                        "name": "Telšiai County"
                    },
                    {
                        "name": "Telšiai District Municipality"
                    },
                    {
                        "name": "Trakai District Municipality"
                    },
                    {
                        "name": "Ukmergė District Municipality"
                    },
                    {
                        "name": "Utena County"
                    },
                    {
                        "name": "Utena District Municipality"
                    },
                    {
                        "name": "Varėna District Municipality"
                    },
                    {
                        "name": "Vilkaviškis District Municipality"
                    },
                    {
                        "name": "Vilnius City Municipality"
                    },
                    {
                        "name": "Vilnius County"
                    },
                    {
                        "name": "Vilnius District Municipality"
                    },
                    {
                        "name": "Visaginas Municipality"
                    },
                    {
                        "name": "Zarasai District Municipality"
                    },
                ],
                "code": "LT"
            },
            {
                "name": "Luxembourg",
                "dial_code": "+352",
                "states": [{
                        "name": "Canton of Capellen"
                    },
                    {
                        "name": "Canton of Clervaux"
                    },
                    {
                        "name": "Canton of Diekirch"
                    },
                    {
                        "name": "Canton of Echternach"
                    },
                    {
                        "name": "Canton of Esch-sur-Alzette"
                    },
                    {
                        "name": "Canton of Grevenmacher"
                    },
                    {
                        "name": "Canton of Luxembourg"
                    },
                    {
                        "name": "Canton of Mersch"
                    },
                    {
                        "name": "Canton of Redange"
                    },
                    {
                        "name": "Canton of Remich"
                    },
                    {
                        "name": "Canton of Vianden"
                    },
                    {
                        "name": "Canton of Wiltz"
                    },
                    {
                        "name": "Diekirch District"
                    },
                    {
                        "name": "Grevenmacher District"
                    },
                    {
                        "name": "Luxembourg District"
                    },
                ],
                "code": "LU"
            },
            {
                "name": "Macao",
                "dial_code": "+853",
                "states": [{
                    "name": "Macao"
                }],
                "code": "MO"
            },
            {
                "name": "Macedonia",
                "dial_code": "+389",
                "states": [{
                        "name": "Aerodrom Municipality"
                    },
                    {
                        "name": "Aračinovo Municipality"
                    },
                    {
                        "name": "Berovo Municipality"
                    },
                    {
                        "name": "Bitola Municipality"
                    },
                    {
                        "name": "Bogdanci Municipality"
                    },
                    {
                        "name": "Bogovinje Municipality"
                    },
                    {
                        "name": "Bosilovo Municipality"
                    },
                    {
                        "name": "Brvenica Municipality"
                    },
                    {
                        "name": "Butel Municipality"
                    },
                    {
                        "name": "Čair Municipality"
                    },
                    {
                        "name": "Čaška Municipality"
                    },
                    {
                        "name": "Centar Municipality"
                    },
                    {
                        "name": "Centar Župa Municipality"
                    },
                    {
                        "name": "Češinovo-Obleševo Municipality"
                    },
                    {
                        "name": "Čučer-Sandevo Municipality"
                    },
                    {
                        "name": "Debarca Municipality"
                    },
                    {
                        "name": "Delčevo Municipality"
                    },
                    {
                        "name": "Demir Hisar Municipality"
                    },
                    {
                        "name": "Demir Kapija Municipality"
                    },
                    {
                        "name": "Dojran Municipality"
                    },
                    {
                        "name": "Dolneni Municipality"
                    },
                    {
                        "name": "Drugovo Municipality"
                    },
                    {
                        "name": "Gazi Baba Municipality"
                    },
                    {
                        "name": "Gevgelija Municipality"
                    },
                    {
                        "name": "Gjorče Petrov Municipality"
                    },
                    {
                        "name": "Gostivar Municipality"
                    },
                    {
                        "name": "Gradsko Municipality"
                    },
                    {
                        "name": "Greater Skopje",
                    },
                    {
                        "name": "Ilinden Municipality"
                    },
                    {
                        "name": "Jegunovce Municipality"
                    },
                    {
                        "name": "Karbinci",
                    },
                    {
                        "name": "Karpoš Municipality"
                    },
                    {
                        "name": "Kavadarci Municipality"
                    },
                    {
                        "name": "Kičevo Municipality"
                    },
                    {
                        "name": "Kisela Voda Municipality"
                    },
                    {
                        "name": "Kočani Municipality"
                    },
                    {
                        "name": "Konče Municipality"
                    },
                    {
                        "name": "Kratovo Municipality"
                    },
                    {
                        "name": "Kriva Palanka Municipality"
                    },
                    {
                        "name": "Krivogaštani Municipality"
                    },
                    {
                        "name": "Kruševo Municipality"
                    },
                    {
                        "name": "Kumanovo Municipality"
                    },
                    {
                        "name": "Lipkovo Municipality"
                    },
                    {
                        "name": "Lozovo Municipality"
                    },
                    {
                        "name": "Makedonska Kamenica Municipality"
                    },
                    {
                        "name": "Makedonski Brod Municipality"
                    },
                    {
                        "name": "Mavrovo and Rostuša Municipality"
                    },
                    {
                        "name": "Mogila Municipality"
                    },
                    {
                        "name": "Negotino Municipality"
                    },
                    {
                        "name": "Novaci Municipality"
                    },
                    {
                        "name": "Novo Selo Municipality"
                    },
                    {
                        "name": "Ohrid Municipality"
                    },
                    {
                        "name": "Oslomej Municipality"
                    },
                    {
                        "name": "Pehčevo Municipality"
                    },
                    {
                        "name": "Petrovec Municipality"
                    },
                    {
                        "name": "Plasnica Municipality"
                    },
                    {
                        "name": "Prilep Municipality"
                    },
                    {
                        "name": "Probištip Municipality"
                    },
                    {
                        "name": "Radoviš Municipality"
                    },
                    {
                        "name": "Rankovce Municipality"
                    },
                    {
                        "name": "Resen Municipality"
                    },
                    {
                        "name": "Rosoman Municipality"
                    },
                    {
                        "name": "Saraj Municipality"
                    },
                    {
                        "name": "Sopište Municipality"
                    },
                    {
                        "name": "Staro Nagoričane Municipality"
                    },
                    {
                        "name": "Štip Municipality"
                    },
                    {
                        "name": "Struga Municipality"
                    },
                    {
                        "name": "Strumica Municipality"
                    },
                    {
                        "name": "Studeničani Municipality"
                    },
                    {
                        "name": "Šuto Orizari Municipality"
                    },
                    {
                        "name": "Sveti Nikole Municipality"
                    },
                    {
                        "name": "Tearce Municipality"
                    },
                    {
                        "name": "Tetovo Municipality"
                    },
                    {
                        "name": "Valandovo Municipality"
                    },
                    {
                        "name": "Vasilevo Municipality"
                    },
                    {
                        "name": "Veles Municipality"
                    },
                    {
                        "name": "Vevčani Municipality"
                    },
                    {
                        "name": "Vinica Municipality"
                    },
                    {
                        "name": "Vraneštica Municipality"
                    },
                    {
                        "name": "Vrapčište Municipality"
                    },
                    {
                        "name": "Zajas Municipality"
                    },
                    {
                        "name": "Zelenikovo Municipality"
                    },
                    {
                        "name": "Želino Municipality"
                    },
                    {
                        "name": "Zrnovci Municipality"
                    },
                ],
                "code": "MK"
            },
            {
                "name": "Madagascar",
                "dial_code": "+261",
                "states": [{
                        "name": "Antananarivo province"
                    },
                    {
                        "name": "Antsiranana province"
                    },
                    {
                        "name": "Fianarantsoa province"
                    },
                    {
                        "name": "Mahajanga province"
                    },
                    {
                        "name": "Toamasina province"
                    },
                    {
                        "name": "Toliara province"
                    },
                ],
                "code": "MG"
            },
            {
                "name": "Malawi",
                "dial_code": "+265",
                "states": [{
                        "name": "Balaka District"
                    },
                    {
                        "name": "Blantyre District"
                    },
                    {
                        "name": "Central region"
                    },
                    {
                        "name": "Chikwawa District"
                    },
                    {
                        "name": "Chiradzulu District"
                    },
                    {
                        "name": "Chitipa District"
                    },
                    {
                        "name": "Dedza District"
                    },
                    {
                        "name": "Dowa District"
                    },
                    {
                        "name": "Karonga District"
                    },
                    {
                        "name": "Kasungu District"
                    },
                    {
                        "name": "Likoma District"
                    },
                    {
                        "name": "Lilongwe District"
                    },
                    {
                        "name": "Machinga District"
                    },
                    {
                        "name": "Mangochi District"
                    },
                    {
                        "name": "Mchinji District"
                    },
                    {
                        "name": "Mulanje District"
                    },
                    {
                        "name": "Mwanza District"
                    },
                    {
                        "name": "Mzimba District"
                    },
                    {
                        "name": "Nkhata Bay District"
                    },
                    {
                        "name": "Nkhotakota District"
                    },
                    {
                        "name": "Northern region"
                    },
                    {
                        "name": "Nsanje District"
                    },
                    {
                        "name": "Ntcheu District"
                    },
                    {
                        "name": "Ntchisi District"
                    },
                    {
                        "name": "Phalombe District"
                    },
                    {
                        "name": "Rumphi District"
                    },
                    {
                        "name": "Salima District"
                    },
                    {
                        "name": "Southern region"
                    },
                    {
                        "name": "Thyolo District"
                    },
                    {
                        "name": "Zomba District"
                    },
                ],
                "code": "MW"
            },
            {
                "name": "Malaysia",
                "dial_code": "+60",
                "states": [{
                        "name": "Johor"
                    },
                    {
                        "name": "Kedah"
                    },
                    {
                        "name": "Kelantan"
                    },
                    {
                        "name": "Kuala Lumpur"
                    },
                    {
                        "name": "Labuan"
                    },
                    {
                        "name": "Melaka"
                    },
                    {
                        "name": "Negeri Sembilan"
                    },
                    {
                        "name": "Pahang"
                    },
                    {
                        "name": "Penang"
                    },
                    {
                        "name": "Perak"
                    },
                    {
                        "name": "Perlis"
                    },
                    {
                        "name": "Putrajaya"
                    },
                    {
                        "name": "Sabah"
                    },
                    {
                        "name": "Sarawak"
                    },
                    {
                        "name": "Selangor"
                    },
                    {
                        "name": "Terengganu"
                    },
                ],
                "code": "MY"
            },
            {
                "name": "Maldives",
                "dial_code": "+960",
                "states": [{
                        "name": "Addu Atoll"
                    },
                    {
                        "name": "Alif Alif Atoll"
                    },
                    {
                        "name": "Alif Dhaal Atoll"
                    },
                    {
                        "name": "Central province"
                    },
                    {
                        "name": "Dhaalu Atoll"
                    },
                    {
                        "name": "Faafu Atoll"
                    },
                    {
                        "name": "Gaafu Alif Atoll"
                    },
                    {
                        "name": "Gaafu Dhaalu Atoll"
                    },
                    {
                        "name": "Gnaviyani Atoll"
                    },
                    {
                        "name": "Haa Alif Atoll"
                    },
                    {
                        "name": "Haa Dhaalu Atoll"
                    },
                    {
                        "name": "Kaafu Atoll"
                    },
                    {
                        "name": "Laamu Atoll"
                    },
                    {
                        "name": "Lhaviyani Atoll"
                    },
                    {
                        "name": "Malé"
                    },
                    {
                        "name": "Meemu Atoll"
                    },
                    {
                        "name": "Noonu Atoll"
                    },
                    {
                        "name": "North Central province"
                    },
                    {
                        "name": "North province"
                    },
                    {
                        "name": "Raa Atoll"
                    },
                    {
                        "name": "Shaviyani Atoll"
                    },
                    {
                        "name": "South Central province"
                    },
                    {
                        "name": "South province"
                    },
                    {
                        "name": "Thaa Atoll"
                    },
                    {
                        "name": "Upper South province"
                    },
                    {
                        "name": "Vaavu Atoll"
                    },
                ],
                "code": "MV"
            },
            {
                "name": "Mali",
                "dial_code": "+223",
                "states": [{
                        "name": "Bamako"
                    },
                    {
                        "name": "Gao region"
                    },
                    {
                        "name": "Kayes region"
                    },
                    {
                        "name": "Kidal region"
                    },
                    {
                        "name": "Koulikoro region"
                    },
                    {
                        "name": "Ménaka region"
                    },
                    {
                        "name": "Mopti region"
                    },
                    {
                        "name": "Ségou region"
                    },
                    {
                        "name": "Sikasso region"
                    },
                    {
                        "name": "Taoudénit region"
                    },
                    {
                        "name": "Tombouctou region"
                    },
                ],
                "code": "ML"
            },


      {
                "name": "Malta",
                "dial_code": "+356",
                "states": [{
                        "name": "Attard"
                    },
                    {
                        "name": "Balzan"
                    },
                    {
                        "name": "Birgu"
                    },
                    {
                        "name": "Birkirkara"
                    },
                    {
                        "name": "Birżebbuġa"
                    },
                    {
                        "name": "Cospicua"
                    },
                    {
                        "name": "Dingli"
                    },
                    {
                        "name": "Fgura"
                    },
                    {
                        "name": "Floriana"
                    },
                    {
                        "name": "Fontana"
                    },
                    {
                        "name": "Għajnsielem"
                    },
                    {
                        "name": "Għarb"
                    },
                    {
                        "name": "Għargħur"
                    },
                    {
                        "name": "Għasri"
                    },
                    {
                        "name": "Għaxaq"
                    },
                    {
                        "name": "Gudja"
                    },
                    {
                        "name": "Gżira"
                    },
                    {
                        "name": "Ħamrun"
                    },
                    {
                        "name": "Iklin"
                    },
                    {
                        "name": "Kalkara"
                    },
                    {
                        "name": "Kerċem"
                    },
                    {
                        "name": "Kirkop"
                    },
                    {
                        "name": "Lija"
                    },
                    {
                        "name": "Luqa"
                    },
                    {
                        "name": "Marsa"
                    },
                    {
                        "name": "Marsaskala"
                    },
                    {
                        "name": "Marsaxlokk"
                    },
                    {
                        "name": "Mdina"
                    },
                    {
                        "name": "Mellieħa"
                    },
                    {
                        "name": "Mġarr"
                    },
                    {
                        "name": "Mosta"
                    },
                    {
                        "name": "Mqabba"
                    },
                    {
                        "name": "Msida"
                    },
                    {
                        "name": "Mtarfa"
                    },
                    {
                        "name": "Munxar"
                    },
                    {
                        "name": "Nadur"
                    },
                    {
                        "name": "Naxxar"
                    },
                    {
                        "name": "Paola"
                    },
                    {
                        "name": "Pembroke"
                    },
                    {
                        "name": "Pietà"
                    },
                    {
                        "name": "Qala"
                    },
                    {
                        "name": "Qormi"
                    },
                    {
                        "name": "Qrendi"
                    },
                    {
                        "name": "Rabat"
                    },
                    {
                        "name": "Saint Lawrence"
                    },
                    {
                        "name": "San Ġwann"
                    },
                    {
                        "name": "Sannat"
                    },
                    {
                        "name": "Santa Luċija"
                    },
                    {
                        "name": "Santa Venera"
                    },
                    {
                        "name": "Senglea"
                    },
                    {
                        "name": "Siġġiewi"
                    },
                    {
                        "name": "Sliema"
                    },
                    {
                        "name": "St. Julian's"
                    },
                    {
                        "name": "St. Paul's Bay"
                    },
                    {
                        "name": "Swieqi"
                    },
                    {
                        "name": "Ta' Xbiex"
                    },
                    {
                        "name": "Tarxien"
                    },
                    {
                        "name": "Valletta"
                    },
                    {
                        "name": "Victoria"
                    },
                    {
                        "name": "Xagħra"
                    },
                    {
                        "name": "Xewkija"
                    },
                    {
                        "name": "Xgħajra"
                    },
                    {
                        "name": "Żabbar"
                    },
                    {
                        "name": "Żebbuġ Gozo"
                    },
                    {
                        "name": "Żebbuġ Malta"
                    },
                    {
                        "name": "Żejtun"
                    },
                    {
                        "name": "Żurrieq"
                    },
                ],
                "code": "MT"
            },
            {
                "name": "Marshall Islands",
                "dial_code": "+692",
                "states": [{
                        "name": "Ralik Chain"
                    },
                    {
                        "name": "Ratak Chain"
                    },
                ],
                "code": "MH"
            },
            {
                "name": "Martinique",
                "dial_code": "+596",
                "states": [{
                    "name": "Martinique"
                }],
                "code": "MQ"
            },
            {
                "name": "Mauritania",
                "dial_code": "+222",
                "states": [{
                        "name": "Adrar region"
                    },
                    {
                        "name": "Assaba region"
                    },
                    {
                        "name": "Brakna region"
                    },
                    {
                        "name": "Dakhlet Nouadhibou"
                    },
                    {
                        "name": "Gorgol region"
                    },
                    {
                        "name": "Guidimaka region"
                    },
                    {
                        "name": "Hodh Ech Chargui region"
                    },
                    {
                        "name": "Hodh El Gharbi region"
                    },
                    {
                        "name": "Inchiri region"
                    },
                    {
                        "name": "Nouakchott-Nord region"
                    },
                    {
                        "name": "Nouakchott-Ouest region"
                    },
                    {
                        "name": "Nouakchott-Sud region"
                    },
                    {
                        "name": "Tagant region"
                    },
                    {
                        "name": "Tiris Zemmour region"
                    },
                    {
                        "name": "Trarza region"
                    },
                ],
                "code": "MR"
            },
            {
                "name": "Mauritius",
                "dial_code": "+230",
                "states": [{
                        "name": "Agaléga"
                    },
                    {
                        "name": "Beau Bassin-Rose Hill"
                    },
                    {
                        "name": "Cargados Carajos"
                    },
                    {
                        "name": "Curepipe"
                    },
                    {
                        "name": "Flacq District"
                    },
                    {
                        "name": "Grand Port District"
                    },
                    {
                        "name": "Moka District"
                    },
                    {
                        "name": "Pamplemousses District"
                    },
                    {
                        "name": "Plaines Wilhems District"
                    },
                    {
                        "name": "Port Louis"
                    },
                    {
                        "name": "Port Louis District"
                    },
                    {
                        "name": "Quatre Bornes"
                    },
                    {
                        "name": "Rivière du Rempart District"
                    },
                    {
                        "name": "Rivière Noire District"
                    },
                    {
                        "name": "Rodrigues"
                    },
                    {
                        "name": "Savanne District"
                    },
                    {
                        "name": "Vacoas-Phoenix"
                    },
                ],
                "code": "MU"
            },
            {
                "name": "Mayotte",
                "dial_code": "+262",
                "states": [{
                    "name": "Mayotte",
                }],
                "code": "YT"
            },

    
            {
                "name": "Mexico",
                "dial_code": "+52",
                "states": [{
                        "name": "Aguascalientes"
                    },
                    {
                        "name": "Baja California"
                    },
                    {
                        "name": "Baja California Sur"
                    },
                    {
                        "name": "Campeche"
                    },
                    {
                        "name": "Chiapas"
                    },
                    {
                        "name": "Chihuahua"
                    },
                    {
                        "name": "Coahuila"
                    },
                    {
                        "name": "Colima"
                    },
                    {
                        "name": "Durango"
                    },
                    {
                        "name": "Guanajuato"
                    },
                    {
                        "name": "Guerrero"
                    },
                    {
                        "name": "Hidalgo"
                    },
                    {
                        "name": "Jalisco"
                    },
                    {
                        "name": "México"
                    },
                    {
                        "name": "Mexico City"
                    },
                    {
                        "name": "Michoacán"
                    },
                    {
                        "name": "Morelos"
                    },
                    {
                        "name": "Nayarit"
                    },
                    {
                        "name": "Nuevo León"
                    },
                    {
                        "name": "Oaxaca"
                    },
                    {
                        "name": "Puebla"
                    },
                    {
                        "name": "Querétaro"
                    },
                    {
                        "name": "Quintana Roo"
                    },
                    {
                        "name": "San Luis Potosí"
                    },
                    {
                        "name": "Sinaloa"
                    },
                    {
                        "name": "Sonora"
                    },
                    {
                        "name": "Tabasco"
                    },
                    {
                        "name": "Tamaulipas"
                    },
                    {
                        "name": "Tlaxcala"
                    },
                    {
                        "name": "Veracruz"
                    },
                    {
                        "name": "Yucatán"
                    },
                    {
                        "name": "Zacatecas"
                    },
                ],
                "code": "MX"
            },
            {
                "name": "Micronesia, Federated States of Micronesia",
                "dial_code": "+691",
                "states": [{
                        "name": "Chuuk State"
                    },
                    {
                        "name": "Kosrae State"
                    },
                    {
                        "name": "Pohnpei State"
                    },
                    {
                        "name": "Yap State"
                    },
                ],
                "code": "FM"
            },
            {
                "name": "Moldova",
                "dial_code": "+373",
                "states": [{
                        "name": "Anenii Noi District"
                    },
                    {
                        "name": "Bălți Municipality"
                    },
                    {
                        "name": "Basarabeasca District"
                    },
                    {
                        "name": "Bender Municipality"
                    },
                    {
                        "name": "Briceni District"
                    },
                    {
                        "name": "Cahul District"
                    },
                    {
                        "name": "Călărași District"
                    },
                    {
                        "name": "Cantemir District"
                    },
                    {
                        "name": "Căușeni District"
                    },
                    {
                        "name": "Chișinău Municipality"
                    },
                    {
                        "name": "Cimișlia District"
                    },
                    {
                        "name": "Criuleni District"
                    },
                    {
                        "name": "Dondușeni District"
                    },
                    {
                        "name": "Drochia District"
                    },
                    {
                        "name": "Dubăsari District"
                    },
                    {
                        "name": "Edineț District"
                    },
                    {
                        "name": "Fălești District"
                    },
                    {
                        "name": "Florești District"
                    },
                    {
                        "name": "Gagauzia"
                    },
                    {
                        "name": "Glodeni District"
                    },
                    {
                        "name": "Hîncești District"
                    },
                    {
                        "name": "Ialoveni District"
                    },
                    {
                        "name": "Nisporeni District"
                    },
                    {
                        "name": "Ocnița District"
                    },
                    {
                        "name": "Orhei District"
                    },
                    {
                        "name": "Rezina District"
                    },
                    {
                        "name": "Rîșcani District"
                    },
                    {
                        "name": "Sîngerei District"
                    },
                    {
                        "name": "Șoldănești District"
                    },
                    {
                        "name": "Soroca District"
                    },
                    {
                        "name": "Ștefan Vodă District"
                    },
                    {
                        "name": "Strășeni District"
                    },
                    {
                        "name": "Taraclia District"
                    },
                    {
                        "name": "Telenești District"
                    },
                    {
                        "name": "Transnistria autonomous territorial unit"
                    },
                    {
                        "name": "Ungheni District"
                    },
                ],
                "code": "MD"
            },
            {
                "name": "Monaco",
                "dial_code": "+377",
                "states": [{
                    "name": "Monaco"
                }],
                "code": "MC"
            },

    {
                "name": "Mongolia",
                "dial_code": "+976",
                "states": [{
                        "name": "Arkhangai province"
                    },
                    {
                        "name": "Bayan-Ölgii province"
                    },
                    {
                        "name": "Bayankhongor province"
                    },
                    {
                        "name": "Bulgan province"
                    },
                    {
                        "name": "Darkhan-Uul province"
                    },
                    {
                        "name": "Dornod province"
                    },
                    {
                        "name": "Dornogovi province"
                    },
                    {
                        "name": "Dundgovi province"
                    },
                    {
                        "name": "Govi-Altai province"
                    },
                    {
                        "name": "Govisümber province"
                    },
                    {
                        "name": "Khentii province"
                    },
                    {
                        "name": "Khovd province"
                    },
                    {
                        "name": "Khövsgöl province"
                    },
                    {
                        "name": "Ömnögovi province"
                    },
                    {
                        "name": "Orkhon province"
                    },
                    {
                        "name": "Övörkhangai province"
                    },
                    {
                        "name": "Selenge province"
                    },
                    {
                        "name": "Sükhbaatar province"
                    },
                    {
                        "name": "Töv province"
                    },
                    {
                        "name": "Uvs province"
                    },
                    {
                        "name": "Zavkhan province"
                    },
                ],
                "code": "MN"
            },
            {
                "name": "Montenegro",
                "dial_code": "+382",
                "states": [{
                        "name": "Andrijevica Municipality"
                    },
                    {
                        "name": "Bar Municipality"
                    },
                    {
                        "name": "Berane Municipality"
                    },
                    {
                        "name": "Bijelo Polje Municipality"
                    },
                    {
                        "name": "Budva Municipality"
                    },
                    {
                        "name": "Danilovgrad Municipality"
                    },
                    {
                        "name": "Gusinje Municipality"
                    },
                    {
                        "name": "Kolašin Municipality"
                    },
                    {
                        "name": "Kotor Municipality"
                    },
                    {
                        "name": "Mojkovac Municipality"
                    },
                    {
                        "name": "Nikšić Municipality"
                    },
                    {
                        "name": "Old Royal Capital Cetinje"
                    },
                    {
                        "name": "Petnjica Municipality"
                    },
                    {
                        "name": "Plav Municipality"
                    },
                    {
                        "name": "Pljevlja Municipality"
                    },
                    {
                        "name": "Plužine Municipality"
                    },
                    {
                        "name": "Podgorica Municipality"
                    },
                    {
                        "name": "Rožaje Municipality"
                    },
                    {
                        "name": "Šavnik Municipality"
                    },
                    {
                        "name": "Tivat Municipality"
                    },
                    {
                        "name": "Ulcinj Municipality"
                    },
                    {
                        "name": "Žabljak Municipality"
                    },
                ],
                "code": "ME"
            },
            {
                "name": "Montserrat",
                "dial_code": "+1664",
                "states": [{
                    "name": "Montserrat"
                }],
                "code": "MS"
            },
            {
                "name": "Morocco",
                "dial_code": "+212",
                "states": [{
                        "name": "Al Haouz province"
                    },
                    {
                        "name": "Al Hoceïma province"
                    },
                    {
                        "name": "Aousserd province"
                    },
                    {
                        "name": "Assa-Zag province"
                    },
                    {
                        "name": "Azilal province"
                    },
                    {
                        "name": "Ben Slimane province"
                    },
                    {
                        "name": "Béni Mellal-Khénifra"
                    },
                    {
                        "name": "Béni-Mellal province"
                    },
                    {
                        "name": "Berkane province"
                    },
                    {
                        "name": "Boujdour province"
                    },
                    {
                        "name": "Boulemane province"
                    },
                    {
                        "name": "Casablanca-Settat"
                    },
                    {
                        "name": "Chefchaouen province"
                    },
                    {
                        "name": "Chichaoua province"
                    },
                    {
                        "name": "Dakhla-Oued Ed-Dahab"
                    },
                    {
                        "name": "Drâa-Tafilalet"
                    },
                    {
                        "name": "El Hajeb province"
                    },
                    {
                        "name": "El Jadida province"
                    },
                    {
                        "name": "Errachidia province"
                    },
                    {
                        "name": "Es Semara province"
                    },
                    {
                        "name": "Essaouira province"
                    },
                    {
                        "name": "Fahs Anjra province"
                    },
                    {
                        "name": "Fès-Meknès"
                    },
                    {
                        "name": "Figuig province"
                    },
                    {
                        "name": "Guelmim province"
                    },
                    {
                        "name": "Guelmim-Oued Noun"
                    },
                    {
                        "name": "Ifrane province"
                    },
                    {
                        "name": "Inezgane-Aït Melloul Prefecture"
                    },
                    {
                        "name": "Jerada province"
                    },
                    {
                        "name": "Kelaat Sraghna province"
                    },
                    {
                        "name": "Kénitra province"
                    },
                    {
                        "name": "Khémisset province"
                    },
                    {
                        "name": "Khénifra province"
                    },
                    {
                        "name": "Khouribga province"
                    },
                    {
                        "name": "Laâyoune province"
                    },
                    {
                        "name": "Laâyoune-Sakia El Hamra"
                    },
                    {
                        "name": "Larache province"
                    },
                    {
                        "name": "Marrakesh-Safi"
                    },
                    {
                        "name": "Mediouna province"
                    },
                    {
                        "name": "Moulay Yacoub province"
                    },
                    {
                        "name": "Nador province"
                    },
                    {
                        "name": "Nouaceur province"
                    },
                    {
                        "name": "Oriental"
                    },
                    {
                        "name": "Ouarzazate province"
                    },
                    {
                        "name": "Oued Ed-Dahab province"
                    },
                    {
                        "name": "Safi province"
                    },
                    {
                        "name": "Sefrou province"
                    },
                    {
                        "name": "Settat province"
                    },
                    {
                        "name": "Shtouka Ait Baha province"
                    },
                    {
                        "name": "Sidi Kacem province"
                    },
                    {
                        "name": "Sidi Youssef Ben Ali"
                    },
                    {
                        "name": "Souss-Massa"
                    },
                    {
                        "name": "Tan-Tan province"
                    },
                    {
                        "name": "Tanger-Tétouan-Al Hoceïma"
                    },
                    {
                        "name": "Taounate province"
                    },
                    {
                        "name": "Taourirt province"
                    },
                    {
                        "name": "Taroudant province"
                    },
                    {
                        "name": "Tata province"
                    },
                    {
                        "name": "Taza province"
                    },
                    {
                        "name": "Tétouan province"
                    },
                    {
                        "name": "Tiznit province"
                    },
                    {
                        "name": "Zagora province"
                    },
                ],
                "code": "MA"
            },
            {
                "name": "Mozambique",
                "dial_code": "+258",
                "states": [{
                        "name": "Cabo Delgado province"
                    },
                    {
                        "name": "Gaza province"
                    },
                    {
                        "name": "Inhambane province"
                    },
                    {
                        "name": "Manica province"
                    },
                    {
                        "name": "Maputo"
                    },
                    {
                        "name": "Maputo province"
                    },
                    {
                        "name": "Nampula province"
                    },
                    {
                        "name": "Niassa province"
                    },
                    {
                        "name": "Sofala province"
                    },
                    {
                        "name": "Tete province"
                    },
                    {
                        "name": "Zambezia province"
                    },
                ],
                "code": "MZ"
            },
            {
                "name": "Myanmar",
                "dial_code": "+95",
                "states": [{
                        "name": "Ayeyarwady region"
                    },
                    {
                        "name": "Bago"
                    },
                    {
                        "name": "Chin State"
                    },
                    {
                        "name": "Kachin State"
                    },
                    {
                        "name": "Kayah State"
                    },
                    {
                        "name": "Kayin State"
                    },
                    {
                        "name": "Magway region"
                    },
                    {
                        "name": "Mandalay region"
                    },
                    {
                        "name": "Mon State"
                    },
                    {
                        "name": "Naypyidaw Union Territory"
                    },
                    {
                        "name": "Rakhine State"
                    },
                    {
                        "name": "Sagaing region"
                    },
                    {
                        "name": "Shan State"
                    },
                    {
                        "name": "Tanintharyi region"
                    },
                    {
                        "name": "Yangon region"
                    },
                ],
                "code": "MM"
            },
            {
                "name": "Namibia",
                "dial_code": "+264",
                "states": [{
                        "name": "Erongo region"
                    },
                    {
                        "name": "Hardap region"
                    },
                    {
                        "name": "Karas region"
                    },
                    {
                        "name": "Kavango East region"
                    },
                    {
                        "name": "Kavango West region"
                    },
                    {
                        "name": "Khomas region"
                    },
                    {
                        "name": "Kunene region"
                    },
                    {
                        "name": "Ohangwena region"
                    },
                    {
                        "name": "Omaheke region"
                    },
                    {
                        "name": "Omusati region"
                    },
                    {
                        "name": "Oshana region"
                    },
                    {
                        "name": "Oshikoto region"
                    },
                    {
                        "name": "Otjozondjupa region"
                    },
                    {
                        "name": "Zambezi region"
                    },
                ],
                "code": "NA"
            },
         {
                "name": "Nauru",
                "dial_code": "+674",
                "states": [{
                        "name": "Aiwo District"
                    },
                    {
                        "name": "Anabar District"
                    },
                    {
                        "name": "Anetan District"
                    },
                    {
                        "name": "Anibare District"
                    },
                    {
                        "name": "Baiti District"
                    },
                    {
                        "name": "Boe District"
                    },
                    {
                        "name": "Buada District"
                    },
                    {
                        "name": "Denigomodu District"
                    },
                    {
                        "name": "Ewa District"
                    },
                    {
                        "name": "Ijuw District"
                    },
                    {
                        "name": "Meneng District"
                    },
                    {
                        "name": "Nibok District"
                    },
                    {
                        "name": "Uaboe District"
                    },
                    {
                        "name": "Yaren District"
                    },
                ],
                "code": "NR"
            },
            {
                "name": "Nepal",
                "dial_code": "+977",
                "states": [{
                        "name": "Bagmati Zone"
                    },
                    {
                        "name": "Bheri Zone"
                    },
                    {
                        "name": "Central region"
                    },
                    {
                        "name": "Dhaulagiri Zone"
                    },
                    {
                        "name": "Eastern Development region"
                    },
                    {
                        "name": "Far-Western Development region"
                    },
                    {
                        "name": "Gandaki Zone"
                    },
                    {
                        "name": "Janakpur Zone"
                    },
                    {
                        "name": "Karnali Zone"
                    },
                    {
                        "name": "Kosi Zone"
                    },
                    {
                        "name": "Lumbini Zone"
                    },
                    {
                        "name": "Mahakali Zone"
                    },
                    {
                        "name": "Mechi Zone"
                    },
                    {
                        "name": "Mid-Western region"
                    },
                    {
                        "name": "Narayani Zone"
                    },
                    {
                        "name": "Rapti Zone"
                    },
                    {
                        "name": "Sagarmatha Zone"
                    },
                    {
                        "name": "Seti Zone"
                    },
                    {
                        "name": "Western region"
                    },
                ],
                "code": "NP"
            },
            {
                "name": "Netherlands",
                "dial_code": "+31",
                "states": [{
                        "name": "Bonaire"
                    },
                    {
                        "name": "Drenthe"
                    },
                    {
                        "name": "Flevoland"
                    },
                    {
                        "name": "Friesland"
                    },
                    {
                        "name": "Gelderland"
                    },
                    {
                        "name": "Groningen"
                    },
                    {
                        "name": "Limburg"
                    },
                    {
                        "name": "North Brabant"
                    },
                    {
                        "name": "North Holland"
                    },
                    {
                        "name": "Overijssel"
                    },
                    {
                        "name": "Saba"
                    },
                    {
                        "name": "Sint Eustatius"
                    },
                    {
                        "name": "South Holland"
                    },
                    {
                        "name": "Utrecht"
                    },
                    {
                        "name": "Zeeland"
                    },
                ],
                "code": "NL"
            },
            {
                "name": "Netherlands Antilles",
                "dial_code": "+599",
                "states": [{
                    "name": "Netherlands Antilles"
                },],
                "code": "AN"
            },
            {
                "name": "New Caledonia",
                "dial_code": "+687",
                "states": [{
                    "name": "New Caledonia"
                }],
                "code": "NC"
            },
            {
                "name": "New Zealand",
                "dial_code": "+64",
                "states": [{
                        "name": "Auckland region"
                    },
                    {
                        "name": "Bay of Plenty region"
                    },
                    {
                        "name": "Canterbury region"
                    },
                    {
                        "name": "Chatham Islands"
                    },
                    {
                        "name": "Gisborne District"
                    },
                    {
                        "name": "Hawke's Bay region"
                    },
                    {
                        "name": "Manawatu-Wanganui region"
                    },
                    {
                        "name": "Marlborough region"
                    },
                    {
                        "name": "Nelson region"
                    },
                    {
                        "name": "Northland region"
                    },
                    {
                        "name": "Otago region"
                    },
                    {
                        "name": "Southland region"
                    },
                    {
                        "name": "Taranaki region"
                    },
                    {
                        "name": "Tasman District"
                    },
                    {
                        "name": "Waikato region"
                    },
                    {
                        "name": "Wellington region"
                    },
                    {
                        "name": "West Coast region"
                    },
                ],
                "code": "NZ"
            },
            {
                "name": "Nicaragua",
                "dial_code": "+505",
                "states": [{
                        "name": "Boaco Department"
                    },
                    {
                        "name": "Carazo Department"
                    },
                    {
                        "name": "Chinandega Department"
                    },
                    {
                        "name": "Chontales Department"
                    },
                    {
                        "name": "Estelí Department"
                    },
                    {
                        "name": "Granada Department"
                    },
                    {
                        "name": "Jinotega Department"
                    },
                    {
                        "name": "León Department"
                    },
                    {
                        "name": "Madriz Department"
                    },
                    {
                        "name": "Managua Department"
                    },
                    {
                        "name": "Masaya Department"
                    },
                    {
                        "name": "Matagalpa Department"
                    },
                    {
                        "name": "North Caribbean Coast Autonomous region"
                    },
                    {
                        "name": "Río San Juan Department"
                    },
                    {
                        "name": "Rivas Department"
                    },
                    {
                        "name": "South Caribbean Coast Autonomous region"
                    },
                ],
                "code": "NI"
            },
            {
                "name": "Niger",
                "dial_code": "+227",
                "states": [{
                        "name": "Agadez region"
                    },
                    {
                        "name": "Diffa region"
                    },
                    {
                        "name": "Dosso region"
                    },
                    {
                        "name": "Maradi region"
                    },
                    {
                        "name": "Tahoua region"
                    },
                    {
                        "name": "Tillabéri region"
                    },
                    {
                        "name": "Zinder region"
                    },
                ],
                "code": "NE"
            },



            {
                "name": "Nigeria",
                "dial_code": "+234",
                "states": [{
                        "name": "Abia State"
                    },
                    {
                        "name": "Adamawa State"
                    },
                    {
                        "name": "Akwa Ibom State"
                    },
                    {
                        "name": "Anambra State"
                    },
                    {
                        "name": "Bauchi State"
                    },
                    {
                        "name": "Bayelsa State"
                    },
                    {
                        "name": "Benue State"
                    },
                    {
                        "name": "Borno State"
                    },
                    {
                        "name": "Cross River State"
                    },
                    {
                        "name": "Delta State"
                    },
                    {
                        "name": "Ebonyi State"
                    },
                    {
                        "name": "Edo State"
                    },
                    {
                        "name": "Ekiti State"
                    },
                    {
                        "name": "Enugu State"
                    },
                    {
                        "name": "Federal Capital Territory"
                    },
                    {
                        "name": "Gombe State"
                    },
                    {
                        "name": "Imo State"
                    },
                    {
                        "name": "Jigawa State"
                    },
                    {
                        "name": "Kaduna State"
                    },
                    {
                        "name": "Kano State"
    
                    },
                    {
                        "name": "Katsina State"
            
                    },
                    {
                        "name": "Kebbi State"
      
                    },
                    {
                        "name": "Kogi State"

                    },
                    {
                        "name": "Kwara State"
               
                    },
                    {
                        "name": "Lagos"

                    },
                    {
                        "name": "Nasarawa State"

                    },
                    {
                        "name": "Niger State"
            
                    },
                    {
                        "name": "Ogun State"
                    },
                    {
                        "name": "Ondo State"
                    },
                    {
                        "name": "Osun State"
                    },
                    {
                        "name": "Oyo State"
                    },
                    {
                        "name": "Plateau State"
                    },
                    {
                        "name": "Sokoto State"
                    },
                    {
                        "name": "Taraba State"
                    },
                    {
                        "name": "Yobe State"
                    },
                    {
                        "name": "Zamfara State"
                    },
                ],
                "code": "NG"
            },
            {
                "name": "Niue",
                "dial_code": "+683",
                "states": [{
                    "name": "Niue"
                }],
                "code": "NU"
            },
            {
                "name": "Norfolk Island",
                "dial_code": "+672",
                "states": [{
                    "name": "Norfolk Island"
                }],
                "code": "NF"
            },
            {
                "name": "Northern Mariana Islands",
                "dial_code": "+1670",
                "states": [{
                    "name": "Northern Mariana Islands"
                }, ],
                "code": "MP"
            },
            {
                "name": "Norway",
                "dial_code": "+47",
                "states": [{
                        "name": "Akershus"
                    },
                    {
                        "name": "Buskerud"
                    },
                    {
                        "name": "Finnmark"
                    },
                    {
                        "name": "Hedmark"
                    },
                    {
                        "name": "Hordaland"
                    },
                    {
                        "name": "Jan Mayen"
                    },
                    {
                        "name": "Møre og Romsdal"
                    },
                    {
                        "name": "Nord-Trøndelag"
                    },
                    {
                        "name": "Nordland"
                    },
                    {
                        "name": "Oppland"
                    },
                    {
                        "name": "Oslo"
                    },
                    {
                        "name": "Østfold"
                    },
                    {
                        "name": "Rogaland"
                    },
                    {
                        "name": "Sogn og Fjordane"
                    },
                    {
                        "name": "Sør-Trøndelag"
                    },
                    {
                        "name": "Svalbard"
                    },
                    {
                        "name": "Telemark"
                    },
                    {
                        "name": "Troms"
                    },
                    {
                        "name": "Trøndelag"
                    },
                    {
                        "name": "Vest-Agder"
                    },
                    {
                        "name": "Vestfold"
                    },
                ],
                "code": "NO"
            },
            {
                "name": "Oman",
                "dial_code": "+968",
                "states": [{
                        "name": "Ad Dakhiliyah Governorate"
                    },
                    {
                        "name": "Ad Dhahirah Governorate"
                    },
                    {
                        "name": "Al Batinah North Governorate"
                    },
                    {
                        "name": "Al Batinah region"
                    },
                    {
                        "name": "Al Batinah South Governorate"
                    },
                    {
                        "name": "Al Buraimi Governorate"
                    },
                    {
                        "name": "Al Wusta Governorate"
                    },
                    {
                        "name": "Ash Sharqiyah North Governorate"
                    },
                    {
                        "name": "Ash Sharqiyah region"
                    },
                    {
                        "name": "Ash Sharqiyah South Governorate"
                    },
                    {
                        "name": "Dhofar Governorate"
                    },
                    {
                        "name": "Musandam Governorate"
                    },
                    {
                        "name": "Muscat Governorate"
                    },
                ],
                "code": "OM"
            },
            {
                "name": "Pakistan",
                "dial_code": "+92",
                "states": [{
                        "name": "Azad Kashmir"
                    },
                    {
                        "name": "Balochistan"
                    },
                    {
                        "name": "Federally Administered Tribal Areas"
                    },
                    {
                        "name": "Gilgit-Baltistan"
                    },
                    {
                        "name": "Islamabad Capital Territory"
                    },
                    {
                        "name": "Khyber Pakhtunkhwa"
                    },
                    {
                        "name": "Punjab"
                    },
                    {
                        "name": "Sindh"
                    },
                ],
                "code": "PK"
            },
            {
                "name": "Palau",
                "dial_code": "+680",
                "states": [{
                        "name": "Aimeliik"
                    },
                    {
                        "name": "Airai"
                    },
                    {
                        "name": "Angaur"
                    },
                    {
                        "name": "Hatohobei"
                    },
                    {
                        "name": "Kayangel"
                    },
                    {
                        "name": "Koror"
                    },
                    {
                        "name": "Melekeok"
                    },
                    {
                        "name": "Ngaraard"
                    },
                    {
                        "name": "Ngarchelong"
                    },
                    {
                        "name": "Ngardmau"
                    },
                    {
                        "name": "Ngatpang"
                    },
                    {
                        "name": "Ngchesar"
                    },
                    {
                        "name": "Ngeremlengui"
                    },
                    {
                        "name": "Ngiwal"
                    },
                    {
                        "name": "Peleliu"
                    },
                    {
                        "name": "Sonsorol"
                    },
                ],
                "code": "PW"
            },
            {
                "name": "Palestinian Territory, Occupied",
                "dial_code": "+970",
                "states": [{
                    "name": "Palestinian Territory, Occupied"
                }, ],
                "code": "PS"
            },
            {
                "name": "Panama",
                "dial_code": "+507",
                "states": [{
                        "name": "Bocas del Toro province"
                    },
                    {
                        "name": "Chiriquí province"
                    },
                    {
                        "name": "Coclé province"
                    },
                    {
                        "name": "Colón province"
                    },
                    {
                        "name": "Darién province"
                    },
                    {
                        "name": "Emberá-Wounaan Comarca"
                    },
                    {
                        "name": "Guna Yala"
                    },
                    {
                        "name": "Herrera province"
                    },
                    {
                        "name": "Los Santos province"
                    },
                    {
                        "name": "Ngöbe-Buglé Comarca"
                    },
                    {
                        "name": "Panamá Oeste province"
                    },
                    {
                        "name": "Panamá province"
                    },
                    {
                        "name": "Veraguas province"
                    },
                ],
                "code": "PA"
            },



        {
                "name": "Papua New Guinea",
                "dial_code": "+675",
                "states": [{
                        "name": "Bougainville"
                    },
                    {
                        "name": "Central province"
                    },
                    {
                        "name": "Chimbu province"
                    },
                    {
                        "name": "East New Britain"
                    },
                    {
                        "name": "Eastern Highlands province"
                    },
                    {
                        "name": "Enga province"
                    },
                    {
                        "name": "Gulf"
                    },
                    {
                        "name": "Hela"
                        
                    },
                    {
                        "name": "Jiwaka province"
                        
                    },
                    {
                        "name": "Madang province"
                        
                    },
                    {
                        "name": "Manus province"
                        
                    },
                    {
                        "name": "Milne Bay province"
                    },
                    {
                        "name": "Morobe province"
                    },
                    {
                        "name": "New Ireland province"
                    },
                    {
                        "name": "Oro province"
                    },
                    {
                        "name": "Port Moresby"
                    },
                    {
                        "name": "Sandaun province"
                    },
                    {
                        "name": "Southern Highlands province"
                    },
                    {
                        "name": "West New Britain province"
                    },
                    {
                        "name": "Western Highlands province"
                    },
                    {
                        "name": "Western province"
                    },
                ],
                "code": "PG"
            },
            {
                "name": "Paraguay",
                "dial_code": "+595",
                "states": [{
                        "name": "Alto Paraguay Department"
                    },
                    {
                        "name": "Alto Paraná Department"
                    },
                    {
                        "name": "Amambay Department"
                    },
                    {
                        "name": "Boquerón Department"
                    },
                    {
                        "name": "Caaguazú"
                    },
                    {
                        "name": "Caazapá"
                    },
                    {
                        "name": "Canindeyú"
                    },
                    {
                        "name": "Central Department"
                    },
                    {
                        "name": "Concepción Department"
                    },
                    {
                        "name": "Cordillera Department"
                    },
                    {
                        "name": "Guairá Department"
                    },
                    {
                        "name": "Itapúa"
                    },
                    {
                        "name": "Misiones Department"
                    },
                    {
                        "name": "Ñeembucú Department"
                    },
                    {
                        "name": "Paraguarí Department"
                    },
                    {
                        "name": "Presidente Hayes Department"
                    },
                    {
                        "name": "San Pedro Department"
                    },
                ],
                "code": "PY"
            },
            {
                "name": "Peru",
                "dial_code": "+51",
                "states": [{
                        "name": "Amazonas"
                    },
                    {
                        "name": "Áncash"
                    },
                    {
                        "name": "Apurímac"
                    },
                    {
                        "name": "Arequipa"
                    },
                    {
                        "name": "Ayacucho"
                    },
                    {
                        "name": "Cajamarca"
                    },
                    {
                        "name": "Callao"
                    },
                    {
                        "name": "Cusco"
                    },
                    {
                        "name": "Huancavelica"
                    },
                    {
                        "name": "Huanuco"
                    },
                    {
                        "name": "Ica"
                    },
                    {
                        "name": "Junín"
                    },
                    {
                        "name": "La Libertad"
                    },
                    {
                        "name": "Lambayeque"
                    },
                    {
                        "name": "Lima"
                    },
                    {
                        "name": "Madre de Dios"
                    },
                    {
                        "name": "Moquegua"
                    },
                    {
                        "name": "Pasco"
                    },
                    {
                        "name": "Piura"
                    },
                    {
                        "name": "Puno"
                    },
                    {
                        "name": "San Martín"
                    },
                    {
                        "name": "Tacna"
                    },
                    {
                        "name": "Tumbes"
                    },
                    {
                        "name": "Ucayali"
                    },
                ],
                "code": "PE"
            },
            {
                "name": "Philippines",
                "dial_code": "+63",
                "states": [{
                        "name": "Abra"
                    },
                    {
                        "name": "Agusan del Norte"
                    },
                    {
                        "name": "Agusan del Sur"
                        
                    },
                    {
                        "name": "Aklan"
        
                    },
                    {
                        "name": "Albay"
                    },
                    {
                        "name": "Antique"
                    },
                    {
                        "name": "Apayao"
                    },
                    {
                        "name": "Aurora"
                    },
                    {
                        "name": "Autonomous Region in Muslim Mindanao"
                    },
                    {
                        "name": "Basilan"
                    },
                    {
                        "name": "Bataan"
                    },
                    {
                        "name": "Batanes"
                    },
                    {
                        "name": "Batangas"
                    },
                    {
                        "name": "Benguet"
                    },
                    {
                        "name": "Bicol region"
                    },
                    {
                        "name": "Biliran"
                        
                    },
                    {
                        "name": "Bohol"
                        
                    },
                    {
                        "name": "Bukidnon"
                        
                    },
                    {
                        "name": "Bulacan"
                        
                    },
                    {
                        "name": "Cagayan"
                        
                    },
                    {
                        "name": "Cagayan Valley"
                    },
                    {
                        "name": "Calabarzon"
                    },
                    {
                        "name": "Camarines Norte"
                    },
                    {
                        "name": "Camarines Sur"
                        
                    },
                    {
                        "name": "Camiguin"
                        
                    },
                    {
                        "name": "Capiz"
                        
                    },
                    {
                        "name": "Caraga"
                    },
                    {
                        "name": "Catanduanes"
                        
                    },
                    {
                        "name": "Cavite"
        
                    },
                    {
                        "name": "Cebu"
                    },
                    {
                        "name": "Central Luzon"
                    },
                    {
                        "name": "Central Visayas"
                    },
                    {
                        "name": "Compostela Valley"
                        
                    },
                    {
                        "name": "Cordillera Administrative region"
                    },
                    {
                        "name": "Cotabato"
                        
                    },
                    {
                        "name": "Davao del Norte"
                        
                    },
                    {
                        "name": "Davao del Sur"
                        
                    },
                    {
                        "name": "Davao Occidental"
                    },
                    {
                        "name": "Davao Oriental"
                    },
                    {
                        "name": "Davao region"
                    },
                    {
                        "name": "Dinagat Islands"
                
                    },
                    {
                        "name": "Eastern Samar"
                        
                    },
                    {
                        "name": "Eastern Visayas"
                    },
                    {
                        "name": "Guimaras"
                        
                    },
                    {
                        "name": "Ifugao"
                    },
                    {
                        "name": "Ilocos Norte"
                    },
                    {
                        "name": "Ilocos region"
                    },
                    {
                        "name": "Ilocos Sur"
                    },
                    {
                        "name": "Iloilo"
                    },
                    {
                        "name": "Isabela"
                    },
                    {
                        "name": "Kalinga"
                    },
                    {
                        "name": "La Union"
                    },
                    {
                        "name": "Laguna"
                    },
                    {
                        "name": "Lanao del Norte"
                    },
                    {
                        "name": "Lanao del Sur"
                    },
                    {
                        "name": "Leyte"
                    },
                    {
                        "name": "Maguindanao"
                    },
                    {
                        "name": "Marinduque"
                    },
                    {
                        "name": "Masbate"
                    },
                    {
                        "name": "Metro Manila"
                    },
                    {
                        "name": "Mimaropa"
                    },
                    {
                        "name": "Misamis Occidental"
                    },
                    {
                        "name": "Misamis Oriental"
                    },
                    {
                        "name": "Mountain province"
                    },
                    {
                        "name": "Negros Occidental"
                    },
                    {
                        "name": "Negros Oriental"
                    },
                    {
                        "name": "Northern Mindanao"
                    },
                    {
                        "name": "Northern Samar"
                    },
                    {
                        "name": "Nueva Ecija"
                    },
                    {
                        "name": "Nueva Vizcaya"
                    },
                    {
                        "name": "Occidental Mindoro"
                    },
                    {
                        "name": "Oriental Mindoro"
                    },
                    {
                        "name": "Palawan"
                    },
                    {
                        "name": "Pampanga"
                    },
                    {
                        "name": "Pangasinan"
                    },
                    {
                        "name": "Quezon"
                    },
                    {
                        "name": "Quirino"
                    },
                    {
                        "name": "Rizal"
                    },
                    {
                        "name": "Romblon"
                    },
                    {
                        "name": "Sarangani"
                    },
                    {
                        "name": "Siquijor"
                    },
                    {
                        "name": "Soccsksargen"
                    },
                    {
                        "name": "Sorsogon"
                    },
                    {
                        "name": "South Cotabato"
                    },
                    {
                        "name": "Southern Leyte"
                    },
                    {
                        "name": "Sultan Kudarat"
                    },
                    {
                        "name": "Sulu"
                    },
                    {
                        "name": "Surigao del Norte"
                    },
                    {
                        "name": "Surigao del Sur"
                    },
                    {
                        "name": "Tarlac"
                    },
                    {
                        "name": "Tawi-Tawi"
                    },
                    {
                        "name": "Western Visayas"
                    },
                    {
                        "name": "Zambales"
                    },
                    {
                        "name": "Zamboanga del Norte"
                    },
                    {
                        "name": "Zamboanga del Sur"
                    },
                    {
                        "name": "Zamboanga Peninsula"
                    },
                    {
                        "name": "Zamboanga Sibugay"
                    },
                ],
                "code": "PH"
            },
            {
                "name": "Pitcairn",
                "dial_code": "+872",
                "states": [{
                    "name": "Pitcairn"
                },],
                "code": "PN"
            },
            {
                "name": "Poland",
                "dial_code": "+48",
                "states": [{
                        "name": "Greater Poland Voivodeship"
                    },
                    {
                        "name": "Kielce"
                    },
                    {
                        "name": "Kuyavian-Pomeranian Voivodeship"
                    },
                    {
                        "name": "Lesser Poland Voivodeship"
                    },
                    {
                        "name": "Lower Silesian Voivodeship"
                    },
                    {
                        "name": "Lublin Voivodeship"
                    },
                    {
                        "name": "Lubusz Voivodeship"
                    },
                    {
                        "name": "Łódź Voivodeship"
                    },
                    {
                        "name": "Masovian Voivodeship"
                    },
                    {
                        "name": "Opole Voivodeship"
                    },
                    {
                        "name": "Podkarpackie Voivodeship"
                    },
                    {
                        "name": "Podlaskie Voivodeship"
                    },
                    {
                        "name": "Pomeranian Voivodeship"
                    },
                    {
                        "name": "Silesian Voivodeship"
                    },
                    {
                        "name": "Świętokrzyskie Voivodeship"
                    },
                    {
                        "name": "Warmian-Masurian Voivodeship"
                    },
                    {
                        "name": "West Pomeranian Voivodeship"
                    },
                ],
                "code": "PL"
            },
            {
                "name": "Portugal",
                "dial_code": "+351",
                "states": [{
                        "name": "Aveiro District"
                    },
                    {
                        "name": "Azores"
                    },
                    {
                        "name": "Beja District"
                    },
                    {
                        "name": "Braga District"
                    },
                    {
                        "name": "Bragança District"
                    },
                    {
                        "name": "Castelo Branco District"
                    },
                    {
                        "name": "Coimbra District"
                    },
                    {
                        "name": "Évora District"
                    },
                    {
                        "name": "Faro District"
                    },
                    {
                        "name": "Guarda District"
                    },
                    {
                        "name": "Leiria District"
                    },
                    {
                        "name": "Lisbon District"
                    },
                    {
                        "name": "Madeira"
                    },
                    {
                        "name": "Portalegre District"
                    },
                    {
                        "name": "Porto District"
                    },
                    {
                        "name": "Santarém District"
                    },
                    {
                        "name": "Setúbal District"
                    },
                    {
                        "name": "Viana do Castelo District"
                    },
                    {
                        "name": "Vila Real District"
                    },
                    {
                        "name": "Viseu District"
                    },
                ],
                "code": "PT"
            },
            {
                "name": "Puerto Rico",
                "dial_code": "+1939",
                "states": [{
                    "name": "Puerto Rico"
                },],
                "code": "PR"
            },

    {
                "name": "Qatar",
                "dial_code": "+974",
                "states": [{
                        "name": "Al Daayen"
                    },
                    {
                        "name": "Al Khor"
                    },
                    {
                        "name": "Al Rayyan Municipality"
                    },
                    {
                        "name": "Al Wakrah"
                    },
                    {
                        "name": "Al-Shahaniya"
                    },
                    {
                        "name": "Doha"
                    },
                    {
                        "name": "Madinat ash Shamal"
                    },
                    {
                        "name": "Umm Salal Municipality"
                    },
                ],
                "code": "QA"
            },
            {
                "name": "Romania",
                "dial_code": "+40",
                "states": [{
                        "name": "Alba"
                    },
                    {
                        "name": "Arad County"
                    },
                    {
                        "name": "Arges"
                    },
                    {
                        "name": "Bacău County"
                    },
                    {
                        "name": "Bihor County"
                    },
                    {
                        "name": "Bistrița-Năsăud County"
                    },
                    {
                        "name": "Botoșani County"
                    },
                    {
                        "name": "Braila"
                    },
                    {
                        "name": "Brașov County"
                    },
                    {
                        "name": "Bucharest"
                    },
                    {
                        "name": "Buzău County"
                    },
                    {
                        "name": "Călărași County"
                    },
                    {
                        "name": "Caraș-Severin County"
                    },
                    {
                        "name": "Cluj County"
                    },
                    {
                        "name": "Constanța County"
                    },
                    {
                        "name": "Covasna County"
                    },
                    {
                        "name": "Dâmbovița County"
                    },
                    {
                        "name": "Dolj County"
                    },
                    {
                        "name": "Galați County"
                    },
                    {
                        "name": "Giurgiu County"
                    },
                    {
                        "name": "Gorj County"
                    },
                    {
                        "name": "Harghita County"
                    },
                    {
                        "name": "Hunedoara County"
                    },
                    {
                        "name": "Ialomița County"
                    },
                    {
                        "name": "Iași County"
                    },
                    {
                        "name": "Ilfov County"
                    },
                    {
                        "name": "Mehedinți County"
                    },
                    {
                        "name": "Mureș County"
                    },
                    {
                        "name": "Neamț County"
                    },
                    {
                        "name": "Olt County"
                    },
                    {
                        "name": "Prahova County"
                    },
                    {
                        "name": "Sălaj County"
                    },
                    {
                        "name": "Satu Mare County"
                    },
                    {
                        "name": "Sibiu County"
                    },
                    {
                        "name": "Suceava County"
                    },
                    {
                        "name": "Teleorman County"
                    },
                    {
                        "name": "Timiș County"
                    },
                    {
                        "name": "Tulcea County"
                    },
                    {
                        "name": "Vâlcea County"
                    },
                    {
                        "name": "Vaslui County"
                    },
                    {
                        "name": "Vrancea County"
                    },
                ],
                "code": "RO"
            },
            {
                "name": "Russia",
                "dial_code": "+7",
                "states": [{
                        "name": "Altai Krai"
                    },
                    {
                        "name": "Altai Republic"
                    },
                    {
                        "name": "Amur Oblast"
                    },
                    {
                        "name": "Arkhangelsk"
                    },
                    {
                        "name": "Astrakhan Oblast"
                    },
                    {
                        "name": "Belgorod Oblast"
                    },
                    {
                        "name": "Bryansk Oblast"
                    },
                    {
                        "name": "Chechen Republic"
                    },
                    {
                        "name": "Chelyabinsk Oblast"
                    },
                    {
                        "name": "Chukotka Autonomous Okrug"
                    },
                    {
                        "name": "Chuvash Republic"
                    },
                    {
                        "name": "Irkutsk"
                    },
                    {
                        "name": "Ivanovo Oblast"
                    },
                    {
                        "name": "Jewish Autonomous Oblast"
                    },
                    {
                        "name": "Kabardino-Balkar Republic"
                    },
                    {
                        "name": "Kaliningrad"
                    },
                    {
                        "name": "Kaluga Oblast"
                    },
                    {
                        "name": "Kamchatka Krai"
                    },
                    {
                        "name": "Karachay-Cherkess Republic"
                    },
                    {
                        "name": "Kemerovo Oblast"
                    },
                    {
                        "name": "Khabarovsk Krai"
                    },
                    {
                        "name": "Khanty-Mansi Autonomous Okrug"
                    },
                    {
                        "name": "Kirov Oblast"
                    },
                    {
                        "name": "Komi Republic"
                    },
                    {
                        "name": "Kostroma Oblast"
                    },
                    {
                        "name": "Krasnodar Krai"
                    },
                    {
                        "name": "Krasnoyarsk Krai"
                    },
                    {
                        "name": "Kurgan Oblast"
                    },
                    {
                        "name": "Kursk Oblast"
                    },
                    {
                        "name": "Leningrad Oblast"
                    },
                    {
                        "name": "Lipetsk Oblast"
                    },
                    {
                        "name": "Magadan Oblast"
                    },
                    {
                        "name": "Mari El Republic"
                       
                    },
                    {
                        "name": "Moscow"
                    },
                    {
                        "name": "Moscow Oblast"
                    },
                    {
                        "name": "Murmansk Oblast"
                    },
                    {
                        "name": "Nenets Autonomous Okrug"
                    },
                    {
                        "name": "Nizhny Novgorod Oblast"
                    },
                    {
                        "name": "Novgorod Oblast"
                    
                    },
                    {
                        "name": "Novosibirsk"
                      
                    },
                    {
                        "name": "Omsk Oblast"
                     
                    },
                    {
                        "name": "Orenburg Oblast"
                       
                    },
                    {
                        "name": "Oryol Oblast"
                     
                    },
                    {
                        "name": "Penza Oblast"
                    
                    },
                    {
                        "name": "Perm Krai"
                   
                    },
                    {
                        "name": "Primorsky Krai"
                    
                    },
                    {
                        "name": "Pskov Oblast"
                        
                    },
                    {
                        "name": "Republic of Adygea"
                     
                    },
                    {
                        "name": "Republic of Bashkortostan"
                    
                    },
                    {
                        "name": "Republic of Buryatia"
                      
                    },
                    {
                        "name": "Republic of Dagestan"
                    
                    },
                    {
                        "name": "Republic of Ingushetia"
                        
                    },
                    {
                        "name": "Republic of Kalmykia"
                    
                    },
                    {
                        "name": "Republic of Karelia"
                     
                    },
                    {
                        "name": "Republic of Khakassia"
                    },
                    {
                        "name": "Republic of Mordovia"
                    },
                    {
                        "name": "Republic of North Ossetia-Alania"
                    },
                    {
                        "name": "Republic of Tatarstan"
                    },
                    {
                        "name": "Rostov Oblast"
                    },
                    {
                        "name": "Ryazan Oblast"
                    },
                    {
                        "name": "Saint Petersburg"
                    },
                    {
                        "name": "Sakha Republic"
                    },
                    {
                        "name": "Sakhalin"
                    },
                    {
                        "name": "Samara Oblast"
                    },
                    {
                        "name": "Saratov Oblast"
                    },
                    {
                        "name": "Sevastopol"
                    },
                    {
                        "name": "Smolensk Oblast"
                    },
                    {
                        "name": "Stavropol Krai"
                    },
                    {
                        "name": "Sverdlovsk"
                    },
                    {
                        "name": "Tambov Oblast"
                    },
                    {
                        "name": "Tomsk Oblast"
                    },
                    {
                        "name": "Tula Oblast"
                    },
                    {
                        "name": "Tuva Republic"
                    },
                    {
                        "name": "Tver Oblast"
                    },
                    {
                        "name": "Tyumen Oblast"
                    },
                    {
                        "name": "Udmurt Republic"
                    },
                    {
                        "name": "Ulyanovsk Oblast"
                    },
                    {
                        "name": "Vladimir Oblast"
                    },
                    {
                        "name": "Vologda Oblast"
                    },
                    {
                        "name": "Voronezh Oblast"
                    },
                    {
                        "name": "Yamalo-Nenets Autonomous Okrug"
                    },
                    {
                        "name": "Yaroslavl Oblast"
                    },
                    {
                        "name": "Zabaykalsky Krai"
                    },
                ],
                "code": "RU"
            },
            {
                "name": "Rwanda",
                "dial_code": "+250",
                "states": [{
                        "name": "Eastern province"
                    },
                    {
                        "name": "Kigali District"
                    },
                    {
                        "name": "Northern province"
                    },
                    {
                        "name": "Southern province"
                    },
                    {
                        "name": "Western province"
                    },
                ],
                "code": "RW"
            },
            {
                "name": "Reunion",
                "dial_code": "+262",
                "states": [{
                    "name": "Reunion"
                }],
                "code": "RE"
            },
            {
                "name": "Saint Barthelemy",
                "dial_code": "+590",
                "states": [{
                    "name": "Saint Barthelemy"
                }],
                "code": "BL"
            },



            {
                "name": "Saint Helena, Ascension and Tristan Da Cunha",
                "dial_code": "+290",
                "states": [{
                    "name": "Saint Helena"
                }],
                "code": "SH"
            },
            {
                "name": "Saint Kitts and Nevis",
                "dial_code": "+1869",
                "states": [{
                        "name": "Christ Church Nichola Town Parish"
                    },
                    {
                        "name": "Nevis"
                    },
                    {
                        "name": "Saint Anne Sandy Point Parish"
                    },
                    {
                        "name": "Saint George Gingerland Parish"
                    },
                    {
                        "name": "Saint James Windward Parish"
                    },
                    {
                        "name": "Saint John Capisterre Parish"
                    },
                    {
                        "name": "Saint John Figtree Parish"
                    },
                    {
                        "name": "Saint Kitts"
                    },
                    {
                        "name": "Saint Mary Cayon Parish"
                    },
                    {
                        "name": "Saint Paul Capisterre Parish"
                    },
                    {
                        "name": "Saint Paul Charlestown Parish"
                    },
                    {
                        "name": "Saint Peter Basseterre Parish"
                    },
                    {
                        "name": "Saint Thomas Lowland Parish"
                    },
                    {
                        "name": "Saint Thomas Middle Island Parish"
                    },
                    {
                        "name": "Trinity Palmetto Point Parish"
                    },
                ],
                "code": "KN"
            },
            {
                "name": "Saint Lucia",
                "dial_code": "+1758",
                "states": [{
                        "name": "Anse la Raye Quarter"
                    },
                    {
                        "name": "Canaries"
                    },
                    {
                        "name": "Castries Quarter"
                    },
                    {
                        "name": "Choiseul Quarter"
                    },
                    {
                        "name": "Dauphin Quarter"
                    },
                    {
                        "name": "Dennery Quarter"
                    },
                    {
                        "name": "Gros Islet Quarter"
                    },
                    {
                        "name": "Laborie Quarter"
                    },
                    {
                        "name": "Micoud Quarter"
                    },
                    {
                        "name": "Praslin Quarter"
                    },
                    {
                        "name": "Soufrière Quarter"
                    },
                    {
                        "name": "Vieux Fort Quarter"
                    },
                ],
                "code": "LC"
            },
            {
                "name": "Saint Martin",
                "dial_code": "+590",
                "states": [{
                    "name": "Saint Martin"
                }],
                "code": "MF"
            },
            {
                "name": "Saint Pierre and Miquelon",
                "dial_code": "+508",
                "states": [{
                    "name": "Saint Pierre and Miquelon"
                }, ],
                "code": "PM"
            },
            {
                "name": "Saint Vincent and the Grenadines",
                "dial_code": "+1784",
                "states": [{
                        "name": "Charlotte Parish"
                    },
                    {
                        "name": "Grenadines Parish"
                    },
                    {
                        "name": "Saint Andrew Parish"
                    },
                    {
                        "name": "Saint David Parish"
                    },
                    {
                        "name": "Saint George Parish"
                    },
                    {
                        "name": "Saint Patrick Parish"
                    },
                ],
                "code": "VC"
            },


            {
                "name": "Samoa",
                "dial_code": "+685",
                "states": [{
                        "name": "A'ana"
                    },
                    {
                        "name": "Aiga-i-le-Tai"
                    },
                    {
                        "name": "Atua"
                    },
                    {
                        "name": "Fa'asaleleaga"
                    },
                    {
                        "name": "Gaga'emauga"
                    },
                    {
                        "name": "Gaga'ifomauga"
                    },
                    {
                        "name": "Palauli"
                    },
                    {
                        "name": "Satupa'itea"
                    },
                    {
                        "name": "Tuamasaga"
                    },
                    {
                        "name": "Va'a-o-Fonoti"
                    },
                    {
                        "name": "Vaisigano"
                    },
                ],
                "code": "WS"
            },
            {
                "name": "San Marino",
                "dial_code": "+378",
                "states": [{
                        "name": "Acquaviva"
                    },
                    {
                        "name": "Borgo Maggiore"
                    },
                    {
                        "name": "Chiesanuova"
                    },
                    {
                        "name": "Domagnano"
                    },
                    {
                        "name": "Faetano"
                    },
                    {
                        "name": "Fiorentino"
                    },
                    {
                        "name": "Montegiardino"
                    },
                    {
                        "name": "San Marino"
                    },
                    {
                        "name": "Serravalle"
                    },
                ],
                "code": "SM"
            },
            {
                "name": "Sao Tome and Principe",
                "dial_code": "+239",
                "states": [{
                        "name": "Príncipe province"
                    },
                    {
                        "name": "São Tomé province"
                    },
                ],
                "code": "ST"
            },
            {
                "name": "Saudi Arabia",
                "dial_code": "+966",
                "states": [{
                        "name": "'Asir region"
                    },
                    {
                        "name": "Al Bahah region"
                    },
                    {
                        "name": "Al Jawf region"
                    },
                    {
                        "name": "Al Madinah region"
                    },
                    {
                        "name": "Al-Qassim region"
                    },
                    {
                        "name": "Eastern province"
                    },
                    {
                        "name": "Ha'il region"
                    },
                    {
                        "name": "Jizan region"
                    },
                    {
                        "name": "Makkah region"
                    },
                    {
                        "name": "Najran region"
                    },
                    {
                        "name": "Northern Borders region"
                    },
                    {
                        "name": "Riyadh region"
                    },
                    {
                        "name": "Tabuk region"
                    },
                ],
                "code": "SA"
            },
            {
                "name": "Senegal",
                "dial_code": "+221",
                "states": [{
                        "name": "Dakar"
                    },
                    {
                        "name": "Diourbel region"
                    },
                    {
                        "name": "Fatick"
                    },
                    {
                        "name": "Kaffrine"
                    },
                    {
                        "name": "Kaolack"
                    },
                    {
                        "name": "Kédougou"
                    },
                    {
                        "name": "Kolda"
                    },
                    {
                        "name": "Louga"
                    },
                    {
                        "name": "Matam"
                    },
                    {
                        "name": "Saint-Louis"
                    },
                    {
                        "name": "Sédhiou"
                    },
                    {
                        "name": "Tambacounda region"
                    },
                    {
                        "name": "Thiès region"
                    },
                    {
                        "name": "Ziguinchor"
                    },
                ],
                "code": "SN"
            },
            {
                "name": "Serbia",
                "dial_code": "+381",
                "states": [{
                        "name": "Belgrade",
                    },
                    {
                        "name": "Bor District"
                    },
                    {
                        "name": "Braničevo District"
                    },
                    {
                        "name": "Central Banat District"
                    },
                    {
                        "name": "Jablanica District"
                    },
                    {
                        "name": "Kolubara District"
                    },
                    {
                        "name": "Mačva District"
                    },
                    {
                        "name": "Moravica District"
                    },
                    {
                        "name": "Nišava District"
                    },
                    {
                        "name": "North Bačka District"
                    },
                    {
                        "name": "North Banat District"
                    },
                    {
                        "name": "Pčinja District"
                    },
                    {
                        "name": "Pirot District"
                    },
                    {
                        "name": "Podunavlje District"
                    },
                    {
                        "name": "Pomoravlje District"
                    },
                    {
                        "name": "Rasina District"
                    },
                    {
                        "name": "Raška District"
                    },
                    {
                        "name": "South Bačka District"
                    },
                    {
                        "name": "South Banat District"
                    },
                    {
                        "name": "Srem District"
                    },
                    {
                        "name": "Šumadija District"
                    },
                    {
                        "name": "Toplica District"
                    },
                    {
                        "name": "Vojvodina"
                    },
                    {
                        "name": "West Bačka District"
                    },
                    {
                        "name": "Zaječar District"
                    },
                    {
                        "name": "Zlatibor District"
                    },
                ],
                "code": "RS"
            },
            {
                "name": "Seychelles",
                "dial_code": "+248",
                "states": [{
                        "name": "Anse Boileau"
                    },
                    {
                        "name": "Anse Royale"
                    },
                    {
                        "name": "Anse-aux-Pins"
                    },
                    {
                        "name": "Au Cap"
                    },
                    {
                        "name": "Baie Lazare"
                    },
                    {
                        "name": "Baie Sainte Anne"
                    },
                    {
                        "name": "Beau Vallon"
                    },
                    {
                        "name": "Bel Air"
                    },
                    {
                        "name": "Bel Ombre"
                    },
                    {
                        "name": "Cascade"
                    },
                    {
                        "name": "Glacis"
                    },
                    {
                        "name": "Grand'Anse Mahé"
                    },
                    {
                        "name": "Grand'Anse Praslin"
                    },
                    {
                        "name": "La Digue"
                    },
                    {
                        "name": "La Rivière Anglaise"
                    },
                    {
                        "name": "Les Mamelles"
                    },
                    {
                        "name": "Mont Buxton"
                    },
                    {
                        "name": "Mont Fleuri"
                    },
                    {
                        "name": "Plaisance"
                    },
                    {
                        "name": "Pointe La Rue"
                    },
                    {
                        "name": "Port Glaud"
                    },
                    {
                        "name": "Roche Caiman"
                    },
                    {
                        "name": "Saint Louis"
                    },
                    {
                        "name": "Takamaka"
                    },
                ],
                "code": "SC"
            },
            {
                "name": "Sierra Leone",
                "dial_code": "+232",
                "states": [{
                        "name": "Eastern province"
                    },
                    {
                        "name": "Northern province"
                    },
                    {
                        "name": "Southern province"
                    },
                    {
                        "name": "Western Area"
                    },
                ],
                "code": "SL"
            },
            {
                "name": "Singapore",
                "dial_code": "+65",
                "states": [{
                        "name": "Central Singapore Community Development Council"
                    },
                    {
                        "name": "North East Community Development Council"
                    },
                    {
                        "name": "North West Community Development Council"
                    },
                    {
                        "name": "South East Community Development Council"
                    },
                    {
                        "name": "South West Community Development Council"
                    },
                ],
                "code": "SG"
            },
            {
                "name": "Slovakia",
                "dial_code": "+421",
                "states": [{
                        "name": "Banská Bystrica region"
                    },
                    {
                        "name": "Bratislava region"
                    },
                    {
                        "name": "Košice region"
                    },
                    {
                        "name": "Nitra region"
                    },
                    {
                        "name": "Prešov region"
                    },
                    {
                        "name": "Trenčín region"
                    },
                    {
                        "name": "Trnava region"
                    },
                    {
                        "name": "Žilina region"
                    },
                ],
                "code": "SK"
            },



            {
                "name": "Slovenia",
                "dial_code": "+386",
                "states": [{
                        "name": "Ajdovščina Municipality"
                    },
                    {
                        "name": "Ankaran Municipality"
                    
                    },
                    {
                        "name": "Beltinci Municipality"
                    },
                    {
                        "name": "Benedikt Municipality"
                    
                    },
                    {
                        "name": "Bistrica ob Sotli Municipality"
                    
                    },
                    {
                        "name": "Bled Municipality"
                    },
                    {
                        "name": "Bloke Municipality"
                      
                    },
                    {
                        "name": "Bohinj Municipality"
                    },
                    {
                        "name": "Borovnica Municipality"
                    },
                    {
                        "name": "Bovec Municipality"
                    },
                    {
                        "name": "Braslovče Municipality"
                      
                    },
                    {
                        "name": "Brda Municipality"
                    },
                    {
                        "name": "Brežice Municipality"
                    },
                    {
                        "name": "Brezovica Municipality"
                    },
                    {
                        "name": "Cankova Municipality"
                      
                    },
                    {
                        "name": "Cerklje na Gorenjskem Municipality"
                    },
                    {
                        "name": "Cerknica Municipality"
                    },
                    {
                        "name": "Cerkno Municipality"
                    },
                    {
                        "name": "Cerkvenjak Municipality"
                
                    },
                    {
                        "name": "City Municipality of Celje"
                    },
                    {
                        "name": "City Municipality of Novo Mesto"
                    },
                    {
                        "name": "Črenšovci Municipality"
                    },
                    {
                        "name": "Črna na Koroškem Municipality"
                    },
                    {
                        "name": "Črnomelj Municipality"
                    },
                    {
                        "name": "Destrnik Municipality"
                    },
                    {
                        "name": "Divača Municipality"
                    },
                    {
                        "name": "Dobje Municipality"
                      
                    },
                    {
                        "name": "Dobrepolje Municipality"
                    },
                    {
                        "name": "Dobrna Municipality"
                    
                    },
                    {
                        "name": "Dobrova–Polhov Gradec Municipality"
                    },
                    {
                        "name": "Dobrovnik Municipality"
                     
                    },
                    {
                        "name": "Dol pri Ljubljani Municipality"
                    },
                    {
                        "name": "Dolenjske Toplice Municipality"
                     
                    },
                    {
                        "name": "Domžale Municipality"
                    },
                    {
                        "name": "Dornava Municipality"
                    },
                    {
                        "name": "Dravograd Municipality"
                    },
                    {
                        "name": "Duplek Municipality"
                    },
                    {
                        "name": "Gorenja Vas–Poljane Municipality"
                    },
                    {
                        "name": "Gorišnica Municipality"
                    },
                    {
                        "name": "Gorje Municipality"
                   
                    },
                    {
                        "name": "Gornja Radgona Municipality"
                    },
                    {
                        "name": "Gornji Grad Municipality"
                    },
                    {
                        "name": "Gornji Petrovci Municipality"
                    },
                    {
                        "name": "Grad Municipality"
                    
                    },
                    {
                        "name": "Grosuplje Municipality"
                    },
                    {
                        "name": "Hajdina Municipality"
                     
                    },
                    {
                        "name": "Hoče–Slivnica Municipality"
                       
                    },
                    {
                        "name": "Hodoš Municipality"
                    
                    },
                    {
                        "name": "Horjul Municipality"
                    
                    },
                    {
                        "name": "Hrastnik Municipality"
                    },
                    {
                        "name": "Hrpelje–Kozina Municipality"
                    },
                    {
                        "name": "Idrija Municipality"
                    },
                    {
                        "name": "Ig Municipality"
                    },
                    {
                        "name": "Ivančna Gorica Municipality"
                    },
                    {
                        "name": "Izola Municipality"
                    },
                    {
                        "name": "Jesenice Municipality"
                    },
                    {
                        "name": "Jezersko Municipality"
                    
                    },
                    {
                        "name": "Juršinci Municipality"
                    },
                    {
                        "name": "Kamnik Municipality"
                    },
                    {
                        "name": "Kanal ob Soči Municipality"
                    },
                    {
                        "name": "Kidričevo Municipality"
                    },
                    {
                        "name": "Kobarid Municipality"
                    },
                    {
                        "name": "Kobilje Municipality"
                    },
                    {
                        "name": "Kočevje Municipality"
                    },
                    {
                        "name": "Komen Municipality"
                    },
                    {
                        "name": "Komenda Municipality"
                     
                    },
                    {
                        "name": "Koper City Municipality"
                    },
                    {
                        "name": "Kostanjevica na Krki Municipality"
                     
                    },
                    {
                        "name": "Kostel Municipality"
                      
                    },
                    {
                        "name": "Kozje Municipality"
                    },
                    {
                        "name": "Kranj City Municipality"
                    },
                    {
                        "name": "Kranjska Gora Municipality"
                    },
                    {
                        "name": "Križevci Municipality"
                     
                    },
                    {
                        "name": "Kungota"
                    },
                    {
                        "name": "Kuzma Municipality"
                    },
                    {
                        "name": "Laško Municipality"
                    },
                    {
                        "name": "Lenart Municipality"
                    },
                    {
                        "name": "Lendava Municipality"
                    },
                    {
                        "name": "Litija Municipality"
                    },
                    {
                        "name": "Ljubljana City Municipality"
                    },
                    {
                        "name": "Ljubno Municipality"
                    },
                    {
                        "name": "Ljutomer Municipality"
                    },
                    {
                        "name": "Log–Dragomer Municipality"
                    
                    },
                    {
                        "name": "Logatec Municipality"
                    },
                    {
                        "name": "Loška Dolina Municipality"
                    },
                    {
                        "name": "Loški Potok Municipality"
                    },
                    {
                        "name": "Lovrenc na Pohorju Municipality"
                     
                    },
                    {
                        "name": "Luče Municipality"
                    },
                    {
                        "name": "Lukovica Municipality"
                    },
                    {
                        "name": "Majšperk Municipality"
                    },
                    {
                        "name": "Makole Municipality"
                      
                    },
                    {
                        "name": "Maribor City Municipality"
                    },
                    {
                        "name": "Markovci Municipality"
                  
                    },
                    {
                        "name": "Medvode Municipality"
                    },
                    {
                        "name": "Mengeš Municipality"
                    },
                    {
                        "name": "Metlika Municipality"
                    },
                    {
                        "name": "Mežica Municipality"
                    },
                    {
                        "name": "Miklavž na Dravskem Polju Municipality"
                    },
                    {
                        "name": "Miren–Kostanjevica Municipality"
                    },
                    {
                        "name": "Mirna Municipality"
                    },
                    {
                        "name": "Mirna Peč Municipality"
                    },
                    {
                        "name": "Mislinja Municipality"
                    },
                    {
                        "name": "Mokronog–Trebelno Municipality"
                    },
                    {
                        "name": "Moravče Municipality"
                    },
                    {
                        "name": "Moravske Toplice Municipality"
                    },
                    {
                        "name": "Mozirje Municipality"
                    },
                    {
                        "name": "Municipality of Apače"
                    },
                    {
                        "name": "Municipality of Cirkulane"
                    },
                    {
                        "name": "Municipality of Ilirska Bistrica"
                    },
                    {
                        "name": "Municipality of Krško"
                    },
                    {
                        "name": "Municipality of Škofljica"
                    },
                    {
                        "name": "Murska Sobota City Municipality"
                    },
                    {
                        "name": "Muta Municipality"
                    },
                    {
                        "name": "Naklo Municipality"
                    },
                    {
                        "name": "Nazarje Municipality"
                    },
                    {
                        "name": "Nova Gorica City Municipality"
                    },
                    {
                        "name": "Odranci Municipality"
                    },
                    {
                        "name": "Oplotnica"
                    },
                    {
                        "name": "Ormož Municipality"
                    },
                    {
                        "name": "Osilnica Municipality"
                    },
                    {
                        "name": "Pesnica Municipality"
                    },
                    {
                        "name": "Piran Municipality"
                    },
                    {
                        "name": "Pivka Municipality"
                    },
                    {
                        "name": "Podčetrtek Municipality"
                    },
                    {
                        "name": "Podlehnik Municipality"
                    },
                    {
                        "name": "Podvelka Municipality"
                    },
                    {
                        "name": "Poljčane Municipality"
                    },
                    {
                        "name": "Polzela Municipality"
                    },
                    {
                        "name": "Postojna Municipality"
                    },
                    {
                        "name": "Prebold Municipality"
                    },
                    {
                        "name": "Preddvor Municipality"
                    },
                    {
                        "name": "Prevalje Municipality"
                    },
                    {
                        "name": "Ptuj City Municipality"
                    },
                    {
                        "name": "Puconci Municipality"
                    },
                    {
                        "name": "Rače–Fram Municipality"
                    },
                    {
                        "name": "Radeče Municipality"
                    },
                    {
                        "name": "Radenci Municipality"
                    },
                    {
                        "name": "Radlje ob Dravi Municipality"
                    },
                    {
                        "name": "Radovljica Municipality"
                    },
                    {
                        "name": "Ravne na Koroškem Municipality"
                    },
                    {
                        "name": "Razkrižje Municipality"
                    },
                    {
                        "name": "Rečica ob Savinji Municipality"
                    },
                    {
                        "name": "Renče–Vogrsko Municipality"
                    },
                    {
                        "name": "Ribnica Municipality"
                    },
                    {
                        "name": "Ribnica na Pohorju Municipality"
                    },
                    {
                        "name": "Rogaška Slatina Municipality"
                    },
                    {
                        "name": "Rogašovci Municipality"
                    },
                    {
                        "name": "Rogatec Municipality"
                    },
                    {
                        "name": "Ruše Municipality"
                    },
                    {
                        "name": "Šalovci Municipality"
                    },
                    {
                        "name": "Selnica ob Dravi Municipality"
                    },
                    {
                        "name": "Semič Municipality"
                    },
                    {
                        "name": "Šempeter–Vrtojba Municipality"
                    },
                    {
                        "name": "Šenčur Municipality"
                    },
                    {
                        "name": "Šentilj Municipality"
                    },
                    {
                        "name": "Šentjernej Municipality"
                    },
                    {
                        "name": "Šentjur Municipality"
                    },
                    {
                        "name": "Šentrupert Municipality"
                    },
                    {
                        "name": "Sevnica Municipality"
                    },
                    {
                        "name": "Sežana Municipality"
                    },
                    {
                        "name": "Škocjan Municipality"
                    },
                    {
                        "name": "Škofja Loka Municipality"
                    },
                    {
                        "name": "Slovenj Gradec City Municipality"
                    },
                    {
                        "name": "Slovenska Bistrica Municipality"
                    },
                    {
                        "name": "Slovenske Konjice Municipality"
                    },
                    {
                        "name": "Šmarje pri Jelšah Municipality"
                    },
                    {
                        "name": "Šmarješke Toplice Municipality"
                    },
                    {
                        "name": "Šmartno ob Paki Municipality"
                    },
                    {
                        "name": "Šmartno pri Litiji Municipality"
                    },
                    {
                        "name": "Sodražica Municipality"
                    },
                    {
                        "name": "Solčava Municipality"
                    },
                    {
                        "name": "Šoštanj Municipality"
                    },
                    {
                        "name": "Središče ob Dravi"
                    },
                    {
                        "name": "Starše Municipality"
                    },
                    {
                        "name": "Štore Municipality"
                    },
                    {
                        "name": "Straža Municipality"
                    },
                    {
                        "name": "Sveta Ana Municipality"
                    },
                    {
                        "name": "Sveta Trojica v Slovenskih Goricah Municipality"
                    },
                    {
                        "name": "Sveti Andraž v Slovenskih Goricah Municipality"
                    },
                    {
                        "name": "Sveti Jurij ob Ščavnici Municipality"
                    },
                    {
                        "name": "Sveti Jurij v Slovenskih Goricah Municipality"
                    },
                    {
                        "name": "Sveti Tomaž Municipality"
                    },
                    {
                        "name": "Tabor Municipality"
                    },
                    {
                        "name": "Tišina Municipality"
                    },
                    {
                        "name": "Tolmin Municipality"
                    },
                    {
                        "name": "Trbovlje Municipality"
                    },
                    {
                        "name": "Trebnje Municipality"
                    },
                    {
                        "name": "Trnovska Vas Municipality"
                    },
                    {
                        "name": "Tržič Municipality"
                    },
                    {
                        "name": "Trzin Municipality"
                    },
                    {
                        "name": "Turnišče Municipality"
                    },
                    {
                        "name": "Velika Polana Municipality"
                    },
                    {
                        "name": "Velike Lašče Municipality"
                    },
                    {
                        "name": "Veržej Municipality"
                    },
                    {
                        "name": "Videm Municipality"
                    },
                    {
                        "name": "Vipava Municipality"
                    },
                    {
                        "name": "Vitanje Municipality"
                    },
                    {
                        "name": "Vodice Municipality"
                    },
                    {
                        "name": "Vojnik Municipality"
                    },
                    {
                        "name": "Vransko Municipality"
                    },
                    {
                        "name": "Vrhnika Municipality"
                    },
                    {
                        "name": "Vuzenica Municipality"
                    },
                    {
                        "name": "Zagorje ob Savi Municipality"
                    },
                    {
                        "name": "Žalec Municipality"
                    },
                    {
                        "name": "Zavrč Municipality"
                    },
                    {
                        "name": "Železniki Municipality"
                    },
                    {
                        "name": "Žetale Municipality"
                    },
                    {
                        "name": "Žiri Municipality"
                    },
                    {
                        "name": "Žirovnica Municipality"
                    },
                    {
                        "name": "Zreče Municipality"
                    },
                    {
                        "name": "Žužemberk Municipality"
                    },
                ],
                "code": "SI"
            },
            {
                "name": "Solomon Islands",
                "dial_code": "+677",
                "states": [{
                        "name": "Central province"
                    },
                    {
                        "name": "Choiseul province"
                    },
                    {
                        "name": "Guadalcanal province"
                    },
                    {
                        "name": "Honiara"
                    },
                    {
                        "name": "Isabel province"
                    },
                    {
                        "name": "Makira-Ulawa province"
                    },
                    {
                        "name": "Malaita province"
                    },
                    {
                        "name": "Rennell and Bellona province"
                    },
                    {
                        "name": "Temotu province"
                    },
                    {
                        "name": "Western province"
                    },
                ],
                "code": "SB"
            },
            {
                "name": "Somalia",
                "dial_code": "+252",
                "states": [{
                        "name": "Awdal region"
                    },
                    {
                        "name": "Bakool"
                    },
                    {
                        "name": "Banaadir"
                    },
                    {
                        "name": "Bari"
                    },
                    {
                        "name": "Bay"
                    },
                    {
                        "name": "Galguduud"
                    },
                    {
                        "name": "Gedo"
                    },
                    {
                        "name": "Hiran"
                    },
                    {
                        "name": "Lower Juba"
                    },
                    {
                        "name": "Lower Shebelle"
                    },
                    {
                        "name": "Middle Juba"
                    },
                    {
                        "name": "Middle Shebelle"
                    },
                    {
                        "name": "Mudug"
                    },
                    {
                        "name": "Nugal"
                    },
                    {
                        "name": "Sanaag region"
                    },
                    {
                        "name": "Togdheer region"
                    },
                ],
                "code": "SO"
            },
            {
                "name": "South Africa",
                "dial_code": "+27",
                "states": [{
                        "name": "Eastern Cape"
                    },
                    {
                        "name": "Free State"
                    },
                    {
                        "name": "Gauteng"
                    },
                    {
                        "name": "KwaZulu-Natal"
                    },
                    {
                        "name": "Limpopo"
                    },
                    {
                        "name": "Mpumalanga"
                    },
                    {
                        "name": "North West"
                    },
                    {
                        "name": "Northern Cape"
                    },
                    {
                        "name": "Western Cape"
                    },
                ],
                "code": "ZA"
            },
            {
                "name": "South Sudan",
                "dial_code": "+211",
                "states": [{
                        "name": "Central Equatoria"
                    },
                    {
                        "name": "Eastern Equatoria"
                    },
                    {
                        "name": "Jonglei State"
                    },
                    {
                        "name": "Lakes"
                    },
                    {
                        "name": "Northern Bahr el Ghazal"
                    },
                    {
                        "name": "Unity"
                    },
                    {
                        "name": "Upper Nile"
                    },
                    {
                        "name": "Warrap"
                    },
                    {
                        "name": "Western Bahr el Ghazal"
                    },
                    {
                        "name": "Western Equatoria"
                    },
                ],
                "code": "SS"
            },
            {
                "name": "South Georgia and the South Sandwich Islands",
                "dial_code": "+500",
                "states": [{
                    "name": "South Georgia and the South Sandwich Islands"
                }, ],
                "code": "GS"
            },
            {
                "name": "Spain",
                "dial_code": "+34",
                "states": [{
                        "name": "A Coruña province"
                    },
                    {
                        "name": "Albacete province"
                    },
                    {
                        "name": "Alicante province"
                    },
                    {
                        "name": "Almería province"
                    },
                    {
                        "name": "Andalusia"
                    },
                    {
                        "name": "Araba / Álava"
                    },
                    {
                        "name": "Aragon"
                    },
                    {
                        "name": "Badajoz province"
                    },
                    {
                        "name": "Balearic Islands"
                    },
                    {
                        "name": "Barcelona province"
                    },
                    {
                        "name": "Basque Country"
                    },
                    {
                        "name": "Biscay"
                    },
                    {
                        "name": "Burgos province"
                    },
                    {
                        "name": "Cáceres province"
                    },
                    {
                        "name": "Cádiz province"
                    },
                    {
                        "name": "Canary Islands"
                    },
                    {
                        "name": "Cantabria"
                    },
                    {
                        "name": "Castellón province"
                    },
                    {
                        "name": "Castile and León"
                    },
                    {
                        "name": "Castile-La Mancha"
                    },
                    {
                        "name": "Catalonia"
                    },
                    {
                        "name": "Ceuta"
                    },
                    {
                        "name": "Ciudad Real province"
                     
                    },
                    {
                        "name": "Community of Madrid"
                    },
                    {
                        "name": "Córdoba province"
                    },
                    {
                        "name": "Cuenca province"
                    },
                    {
                        "name": "Extremadura"
                    },
                    {
                        "name": "Galicia"
                    },
                    {
                        "name": "Gipuzkoa"
                    },
                    {
                        "name": "Girona province"
                    },
                    {
                        "name": "Granada province"
                    },
                    {
                        "name": "Guadalajara province"
                    },
                    {
                        "name": "Huelva province"
                    },
                    {
                        "name": "Huesca province"
                    },
                    {
                        "name": "Jaén province"
                    },
                    {
                        "name": "La Rioja"
                    },
                    {
                        "name": "Las Palmas province"
                    },
                    {
                        "name": "León province"
                    },
                    {
                        "name": "Lleida province"
                    },
                    {
                        "name": "Lugo province"
                    },
                    {
                        "name": "Madrid province"
                    },
                    {
                        "name": "Málaga province"
                    },
                    {
                        "name": "Melilla"
                    },
                    {
                        "name": "Murcia province"
                    },
                    {
                        "name": "Navarre"
                    },
                    {
                        "name": "Ourense province"
                    },
                    {
                        "name": "Palencia province"
                    },
                    {
                        "name": "Pontevedra province"
                    },
                    {
                        "name": "Province of Asturias"
                    },
                    {
                        "name": "Province of Ávila"
                    },
                    {
                        "name": "Region of Murcia"
                    },
                    {
                        "name": "Salamanca province"
                    },
                    {
                        "name": "Santa Cruz de Tenerife province"
                    },
                    {
                        "name": "Segovia province"
                    },
                    {
                        "name": "Seville province"
                    },
                    {
                        "name": "Soria province"
                    },
                    {
                        "name": "Tarragona province"
                    },
                    {
                        "name": "Teruel province"
                    },
                    {
                        "name": "Toledo province"
                    },
                    {
                        "name": "Valencia province"
                    },
                    {
                        "name": "Valencian Community"
                    },
                    {
                        "name": "Valladolid province"
                    },
                    {
                        "name": "Zamora province"
                    },
                    {
                        "name": "Zaragoza province"
                    },
                ],
                "code": "ES"
            },
            {
                "name": "Sri Lanka",
                "dial_code": "+94",
                "states": [{
                        "name": "Ampara District"
                    },
                    {
                        "name": "Anuradhapura District"
                    },
                    {
                        "name": "Badulla District"
                    },
                    {
                        "name": "Batticaloa District"
                    },
                    {
                        "name": "Central province"
                    },
                    {
                        "name": "Colombo District"
                    },
                    {
                        "name": "Eastern province"
                    },
                    {
                        "name": "Galle District"
                    },
                    {
                        "name": "Gampaha District"
                    },
                    {
                        "name": "Hambantota District"
                    },
                    {
                        "name": "Jaffna District"
                    },
                    {
                        "name": "Kalutara District"
                    },
                    {
                        "name": "Kandy District"
                    },
                    {
                        "name": "Kegalle District"
                    },
                    {
                        "name": "Kilinochchi District"
                    },
                    {
                        "name": "Mannar District"
                    },
                    {
                        "name": "Matale District"
                    },
                    {
                        "name": "Matara District"
                    },
                    {
                        "name": "Monaragala District"
                    },
                    {
                        "name": "Mullaitivu District"
                    },
                    {
                        "name": "North Central province"
                    },
                    {
                        "name": "North Western province"
                    },
                    {
                        "name": "Northern province"
                    },
                    {
                        "name": "Nuwara Eliya District"
                    },
                    {
                        "name": "Polonnaruwa District"
                    },
                    {
                        "name": "Puttalam District"
                    },
                    {
                        "name": "Ratnapura District"
                    },
                    {
                        "name": "Sabaragamuwa province"
                    },
                    {
                        "name": "Southern province"
                    },
                    {
                        "name": "Trincomalee District"
                    },
                    {
                        "name": "Uva province"
                    },
                    {
                        "name": "Vavuniya District"
                    },
                    {
                        "name": "Western province"
                    },
                ],
                "code": "LK"
            },


 {
                "name": "Sudan",
                "dial_code": "+249",
                "states": [{
                        "name": "Al Jazirah"
                    },
                    {
                        "name": "Al Qadarif"
                    },
                    {
                        "name": "Blue Nile"
                    },
                    {
                        "name": "Central Darfur"
                    },
                    {
                        "name": "East Darfur"
                    },
                    {
                        "name": "Kassala"
                    },
                    {
                        "name": "Khartoum"
                    },
                    {
                        "name": "North Darfur"
                    },
                    {
                        "name": "North Kordofan"
                    },
                    {
                        "name": "Northern"
                    },
                    {
                        "name": "Red Sea"
                    },
                    {
                        "name": "River Nile"
                    },
                    {
                        "name": "Sennar"
                    },
                    {
                        "name": "South Darfur"
                    },
                    {
                        "name": "South Kordofan"
                    },
                    {
                        "name": "West Darfur"
                    },
                    {
                        "name": "West Kordofan"
                    },
                    {
                        "name": "White Nile"
                    },
                ],
                "code": "SD"
            },
            {
                "name": "Suriname",
                "dial_code": "+597",
                "states": [{
                        "name": "Brokopondo District"
                    },
                    {
                        "name": "Commewijne District"
                    },
                    {
                        "name": "Coronie District"
                    },
                    {
                        "name": "Marowijne District"
                    },
                    {
                        "name": "Nickerie District"
                    },
                    {
                        "name": "Para District"
                    },
                    {
                        "name": "Paramaribo District"
                    },
                    {
                        "name": "Saramacca District"
                    },
                    {
                        "name": "Sipaliwini District"

                    },
                    {
                        "name": "Wanica District"
                    },
                ],
                "code": "SR"
            },
            {
                "name": "Svalbard and Jan Mayen",
                "dial_code": "+47",
                "states": [{
                    "name": "Svalbard and Jan Mayen"
                },],

                "code": "SJ"
            },
            {
                "name": "Swaziland",
                "dial_code": "+268",
                "states": [{
                        "name": "Hhohho District"
                    },
                    {
                        "name": "Lubombo District"
                    },
                    {
                        "name": "Manzini District"
                    },
                    {
                        "name": "Shiselweni District"
                    },
                ],
                "code": "SZ"
            },
            {
                "name": "Sweden",
                "dial_code": "+46",
                "states": [{
                        "name": "Blekinge"
                    },
                    {
                        "name": "Dalarna County"
                    },
                    {
                        "name": "Gävleborg County"
                    },
                    {
                        "name": "Gotland County"
                    },
                    {
                        "name": "Halland County"
                    },
                    {
                        "name": "Jönköping County"
                    },
                    {
                        "name": "Kalmar County"
                    },
                    {
                        "name": "Kronoberg County"
                    },
                    {
                        "name": "Norrbotten County"
                    },
                    {
                        "name": "Örebro County"
                    },
                    {
                        "name": "Östergötland County"
                    },
                    {
                        "name": "Skåne County"
                    },
                    {
                        "name": "Södermanland County"
                    },
                    {
                        "name": "Stockholm County"
                    },
                    {
                        "name": "Uppsala County"
                    },
                    {
                        "name": "Värmland County"
                    },
                    {
                        "name": "Västerbotten County"
                    },
                    {
                        "name": "Västernorrland County"
                    },
                    {
                        "name": "Västmanland County"
                    },
                    {
                        "name": "Västra Götaland County"
                    },
                ],
                "code": "SE"
            },
            {
                "name": "Switzerland",
                "dial_code": "+41",
                "states": [{
                        "name": "Aargau"
                    },
                    {
                        "name": "Appenzell Ausserrhoden"
                    },
                    {
                        "name": "Appenzell Innerrhoden"
                    },
                    {
                        "name": "Basel-Landschaft"
                    },
                    {
                        "name": "canton of Bern"
                    },
                    {
                        "name": "Canton of Fribourg"
                    },
                    {
                        "name": "Canton of Geneva"
                    },
                    {
                        "name": "Canton of Jura"
                    },
                    {
                        "name": "Canton of Lucerne"
                    },
                    {
                        "name": "Canton of Neuchâtel"
                    },
                    {
                        "name": "Canton of Schaffhausen"
                    },
                    {
                        "name": "Canton of Solothurn"
                    },
                    {
                        "name": "Canton of St. Gallen"
                    },
                    {
                        "name": "Canton of Valais"
                    },
                    {
                        "name": "Canton of Vaud"
                    },
                    {
                        "name": "Canton of Zug"
                    },
                    {
                        "name": "canton of Zürich"
                    },
                    {
                        "name": "Glarus"
                    },
                    {
                        "name": "Graubünden"
                    },
                    {
                        "name": "Nidwalden"
                    },
                    {
                        "name": "Obwalden"
                    },
                    {
                        "name": "Schwyz"
                    },
                    {
                        "name": "Thurgau"
                    },
                    {
                        "name": "Ticino"
                    },
                    {
                        "name": "Uri"
                    },
                ],
                "code": "CH"
            },
            {
                "name": "Syrian Arab Republic",
                "dial_code": "+963",
                "states": [{
                        "name": "Al-Hasakah Governorate"
                    },
                    {
                        "name": "Al-Raqqah Governorate"
                    },
                    {
                        "name": "Aleppo Governorate"
                    },
                    {
                        "name": "As-Suwayda Governorate"
                    },
                    {
                        "name": "Damascus Governorate"
                    },
                    {
                        "name": "Daraa Governorate"
                    },
                    {
                        "name": "Deir ez-Zor Governorate"
                    },
                    {
                        "name": "Hama Governorate"
                    },
                    {
                        "name": "Homs Governorate"
                    },
                    {
                        "name": "Idlib Governorate"
                    },
                    {
                        "name": "Latakia Governorate"
                    },
                    {
                        "name": "Quneitra Governorate"
                    },
                    {
                        "name": "Rif Dimashq Governorate"
                    },
                    {
                        "name": "Tartus Governorate"
                    },
                ],
                "code": "SY"
            },
            {
                "name": "Taiwan",
                "dial_code": "+886",
                "states": [{
                        "name": "Changhua County"
                    },
                    {
                        "name": "Chiayi City"
                    },
                    {
                        "name": "Chiayi County"
                    },
                    {
                        "name": "Hsinchu"
                    },
                    {
                        "name": "Hsinchu County"
                    },
                    {
                        "name": "Hualien County"
                    },
                    {
                        "name": "Kaohsiung"
                    },
                    {
                        "name": "Kaohsiung County"
                    },
                    {
                        "name": "Kinmen"
                    },
                    {
                        "name": "Lienchiang County"
                    },
                    {
                        "name": "Miaoli County"
                    },
                    {
                        "name": "Nantou County"
                    },
                    {
                        "name": "Penghu County"
                    },
                    {
                        "name": "Pingtung County"
                    },
                    {
                        "name": "Taichung"
                    },
                    {
                        "name": "Taichung County"
                    },
                    {
                        "name": "Tainan"
                    },
                    {
                        "name": "Tainan County"
                    },
                    {
                        "name": "Taipei"
                    },
                    {
                        "name": "Taitung County"
                   
                    },
                    {
                        "name": "Taoyuan City"
                    },
                    {
                        "name": "Yilan County"
                    },
                    {
                        "name": "Yunlin County"
                    },
                ],
                "code": "TW"
            },
            {
                "name": "Tajikistan",
                "dial_code": "+992",
                "states": [{
                        "name": "districts of Republican Subordination"
                    },
                    {
                        "name": "Gorno-Badakhshan Autonomous province"
                    },
                    {
                        "name": "Khatlon province"
                    },
                    {
                        "name": "Sughd province"
                    },
                ],
                "code": "TJ"
            },
            {
                "name": "Tanzania, United Republic of Tanzania",
                "dial_code": "+255",
                "states": [{
                        "name": "Arusha region"
                    },
                    {
                        "name": "Dar es Salaam region"
                    },
                    {
                        "name": "Dodoma region"
                    },
                    {
                        "name": "Geita region"
                    },
                    {
                        "name": "Iringa region"
                    },
                    {
                        "name": "Kagera region"
                    },
                    {
                        "name": "Katavi region"
                    },
                    {
                        "name": "Kigoma region"
                    },
                    {
                        "name": "Kilimanjaro region"
                    },
                    {
                        "name": "Lindi region"
                    },
                    {
                        "name": "Manyara region"
                    },
                    {
                        "name": "Mara region"
                    },
                    {
                        "name": "Morogoro region"
                    },
                    {
                        "name": "Mtwara region"
                    },
                    {
                        "name": "Mwanza region"
                    },
                    {
                        "name": "Njombe region"
                    },
                    {
                        "name": "North Pemba region"
                    },
                    {
                        "name": "Pwani region"
                    },
                    {
                        "name": "Rukwa region"
                    },
                    {
                        "name": "Ruvuma region"
                    },
                    {
                        "name": "Shinyanga region"
                    },
                    {
                        "name": "Simiyu region"
                    },
                    {
                        "name": "Singida region"
                    },
                    {
                        "name": "South Pemba region"
                    },
                    {
                        "name": "Tabora region"
                    },
                    {
                        "name": "Tanga region"
                    },
                    {
                        "name": "Zanzibar Central/South region"
                    },
                    {
                        "name": "Zanzibar North region"
                    },
                    {
                        "name": "Zanzibar Urban/West region"
                    },
                ],
                "code": "TZ"
            },
            {
                "name": "Thailand",
                "dial_code": "+66",
                "states": [{
                        "name": "Amnat Charoen"
                    },
                    {
                        "name": "Ang Thong"
                    },
                    {
                        "name": "Bangkok"
                    },
                    {
                        "name": "Bueng Kan"
                    },
                    {
                        "name": "Buri Ram"
                    },
                    {
                        "name": "Chachoengsao"
                    },
                    {
                        "name": "Chai Nat"
                    },
                    {
                        "name": "Chanthaburi"
                    },
                    {
                        "name": "Chiang Mai"
                    },
                    {
                        "name": "Chiang Rai"
                    },
                    {
                        "name": "Chon Buri"
                    },
                    {
                        "name": "Chumphon"
                    },
                    {
                        "name": "Kalasin"
                    },
                    {
                        "name": "Kamphaeng Phet"
                    },
                    {
                        "name": "Kanchanaburi"
                    },
                    {
                        "name": "Khon Kaen"
                    },
                    {
                        "name": "Krabi"
                    },
                    {
                        "name": "Lampang"
                    },
                    {
                        "name": "Lamphun"
                    },
                    {
                        "name": "Loei"
                    },
                    {
                        "name": "Lopburi"
                    },
                    {
                        "name": "Mae Hong Son"
                    },
                    {
                        "name": "Maha Sarakham"
                    },
                    {
                        "name": "Mukdahan"
                    },
                    {
                        "name": "Nakhon Nayok"
                    },
                    {
                        "name": "Nakhon Pathom"
                    },
                    {
                        "name": "Nakhon Phanom"
                    },
                    {
                        "name": "Nakhon Ratchasima"
                    },
                    {
                        "name": "Nakhon Sawan"
                    },
                    {
                        "name": "Nakhon Si Thammarat"
                    },
                    {
                        "name": "Nan"
                    },
                    {
                        "name": "Narathiwat"
                    },
                    {
                        "name": "Nong Bua Lam Phu"
                    },
                    {
                        "name": "Nong Khai"
                    },
                    {
                        "name": "Nonthaburi"
                    },
                    {
                        "name": "Pathum Thani"
                    },
                    {
                        "name": "Pattani"
                    },
                    {
                        "name": "Pattaya"
                    },
                    {
                        "name": "Phang Nga"
                    },
                    {
                        "name": "Phatthalung"
                    },
                    {
                        "name": "Phayao"
                    },
                    {
                        "name": "Phetchabun"
                    },
                    {
                        "name": "Phetchaburi"
                    },
                    {
                        "name": "Phichit"
                    },
                    {
                        "name": "Phitsanulok"
                    },
                    {
                        "name": "Phra Nakhon Si Ayutthaya"
                    },
                    {
                        "name": "Phrae"
                    },
                    {
                        "name": "Phuket"
                    },
                    {
                        "name": "Prachin Buri"
                    },
                    {
                        "name": "Prachuap Khiri Khan"
                    },
                    {
                        "name": "Ranong"
                    },
                    {
                        "name": "Ratchaburi"
                    },
                    {
                        "name": "Rayong"
                    },
                    {
                        "name": "Roi Et"
                    },
                    {
                        "name": "Sa Kaeo"
                    },
                    {
                        "name": "Sakon Nakhon"
                    },
                    {
                        "name": "Samut Prakan"
                    },
                    {
                        "name": "Samut Sakhon"
                    },
                    {
                        "name": "Samut Songkhram"
                    },
                    {
                        "name": "Saraburi"
                    },
                    {
                        "name": "Satun"
                    },
                    {
                        "name": "Si Sa Ket"
                    },
                    {
                        "name": "Sing Buri"
                    },
                    {
                        "name": "Songkhla"
                    },
                    {
                        "name": "Sukhothai"
                    },
                    {
                        "name": "Suphanburi"
                    },
                    {
                        "name": "Surat Thani"
                    },
                    {
                        "name": "Surin"
                    },
                    {
                        "name": "Tak"
                    },
                    {
                        "name": "Trang"
                    },
                    {
                        "name": "Trat"
                    },
                    {
                        "name": "Ubon Ratchathani"
                    },
                    {
                        "name": "Udon Thani"
                    },
                    {
                        "name": "Uthai Thani"
                    },
                    {
                        "name": "Uttaradit"
                    },
                    {
                        "name": "Yala"
                    },
                    {
                        "name": "Yasothon"
                    },
                ],
                "code": "TH"
            },

            {
                "name": "Timor-Leste",
                "dial_code": "+670",
                "states": [{
                        "name": "Aileu Municipality"
                    },
                    {
                        "name": "Ainaro Municipality"
                    },
                    {
                        "name": "Baucau Municipality"
                    },
                    {
                        "name": "Bobonaro Municipality"
                    },
                    {
                        "name": "Cova Lima Municipality"
                    },
                    {
                        "name": "Dili Municipality"
                    },
                    {
                        "name": "Ermera District"
                    
                    },
                    {
                        "name": "Lautém Municipality"
                    },
                    {
                        "name": "Liquiçá Municipality"
                    },
                    {
                        "name": "Manatuto District"
                    },
                    {
                        "name": "Manufahi Municipality"
                    },
                    {
                        "name": "Viqueque Municipality"
                    },
                ],
                "code": "TL"
            },
            {
                "name": "Togo",
                "dial_code": "+228",
                "states": [{
                        "name": "Centrale region"
                    },
                    {
                        "name": "Kara region"
                    },
                    {
                        "name": "Maritime"
                    },
                    {
                        "name": "Plateaux region"
                    },
                    {
                        "name": "Savanes region"
                    },
                ],
                "code": "TG"
            },
            {
                "name": "Tokelau",
                "dial_code": "+690",
                "states": [{
                    "name": "Tokelau"
                },],
                "code": "TK"
            },
            {
                "name": "Tonga",
                "dial_code": "+676",
                "states": [{
                        "name": "Haʻapai"
                    },
                    {
                        "name": "ʻEua"
                    },
                    {
                        "name": "Niuas"
                    },
                    {
                        "name": "Tongatapu"
                    },
                    {
                        "name": "Vavaʻu"
                    },
                ],
                "code": "TO"
            },
            {
                "name": "Trinidad and Tobago",
                "dial_code": "+1868",
                "states": [{
                        "name": "Arima"
                    },
                    {
                        "name": "Chaguanas"
                    },
                    {
                        "name": "Couva-Tabaquite-Talparo Regional Corporation"
                    },
                    {
                        "name": "Diego Martin Regional Corporation"
                    },
                    {
                        "name": "Eastern Tobago"
                    },
                    {
                        "name": "Penal-Debe Regional Corporation"
                    },
                    {
                        "name": "Point Fortin"
                    },
                    {
                        "name": "Port of Spain"
                    },
                    {
                        "name": "Princes Town Regional Corporation"
                    },
                    {
                        "name": "Rio Claro-Mayaro Regional Corporation"
                    },
                    {
                        "name": "San Fernando"
                    },
                    {
                        "name": "San Juan-Laventille Regional Corporation"
                    },
                    {
                        "name": "Sangre Grande Regional Corporation"
                    },
                    {
                        "name": "Siparia Regional Corporation"
                    },
                    {
                        "name": "Tunapuna-Piarco Regional Corporation"
                    },
                    {
                        "name": "Western Tobago"
                    },
                ],
                "code": "TT"
            },
            {
                "name": "Tunisia",
                "dial_code": "+216",
                "states": [{
                        "name": "Ariana Governorate"
                    },
                    {
                        "name": "Ben Arous Governorate"
                    },
                    {
                        "name": "Bizerte Governorate"
                    },
                    {
                        "name": "Gabès Governorate"
                    },
                    {
                        "name": "Gafsa Governorate"
                    },
                    {
                        "name": "Jendouba Governorate"
                    },
                    {
                        "name": "Kairouan Governorate"
                    },
                    {
                        "name": "Kasserine Governorate"
                    },
                    {
                        "name": "Kassrine"
                    },
                    {
                        "name": "Kebili Governorate"
                    },
                    {
                        "name": "Kef Governorate"
                    },
                    {
                        "name": "Mahdia Governorate"
                    },
                    {
                        "name": "Manouba Governorate"
                    },
                    {
                        "name": "Medenine Governorate"
                    },
                    {
                        "name": "Monastir Governorate"
                    },
                    {
                        "name": "Sfax Governorate"
                    },
                    {
                        "name": "Sidi Bouzid Governorate"
                    },
                    {
                        "name": "Siliana Governorate"
                    },
                    {
                        "name": "Sousse Governorate"
                    },
                    {
                        "name": "Tataouine Governorate"
                    },
                    {
                        "name": "Tozeur Governorate"
                    },
                    {
                        "name": "Tunis Governorate"
                    },
                    {
                        "name": "Zaghouan Governorate"
                    },
                ],
                "code": "TN"
            },
            {
                "name": "Turkey",
                "dial_code": "+90",
                "states": [{
                        "name": "Adana province"
                    },
                    {
                        "name": "Adıyaman province"
                    },
                    {
                        "name": "Afyonkarahisar province"
                    },
                    {
                        "name": "Ağrı province"
                    },
                    {
                        "name": "Aksaray province"
                    },
                    {
                        "name": "Amasya province"
                    },
                    {
                        "name": "Ankara province"
                    },
                    {
                        "name": "Antalya province"
                    },
                    {
                        "name": "Ardahan province"
                    },
                    {
                        "name": "Artvin province"
                    },
                    {
                        "name": "Aydın province"
                    },
                    {
                        "name": "Balıkesir province"
                    },
                    {
                        "name": "Bartın province"
                    },
                    {
                        "name": "Batman province"
                    },
                    {
                        "name": "Bayburt province"
                    },
                    {
                        "name": "Bilecik province"
                    },
                    {
                        "name": "Bingöl province"
                    },
                    {
                        "name": "Bitlis province"
                    },
                    {
                        "name": "Bolu province"
                    },
                    {
                        "name": "Burdur province"
                    },
                    {
                        "name": "Bursa province"
                    },
                    {
                        "name": "Çanakkale province"
                    },
                    {
                        "name": "Çankırı province"
                    },
                    {
                        "name": "Çorum province"
                    },
                    {
                        "name": "Denizli province"
                    },
                    {
                        "name": "Diyarbakır province"
                    },
                    {
                        "name": "Düzce province"
                    },
                    {
                        "name": "Edirne province"
                    },
                    {
                        "name": "Elazığ province"
                    },
                    {
                        "name": "Erzincan province"
                    },
                    {
                        "name": "Erzurum province"
                    },
                    {
                        "name": "Eskişehir province"
                    },
                    {
                        "name": "Gaziantep province"
                    },
                    {
                        "name": "Giresun province"
                    },
                    {
                        "name": "Gümüşhane province"
                    },
                    {
                        "name": "Hakkâri province"
                    },
                    {
                        "name": "Hatay province"
                    },
                    {
                        "name": "Iğdır province"
                    },
                    {
                        "name": "Isparta province"
                    },
                    {
                        "name": "Istanbul province"
                    },
                    {
                        "name": "İzmir province"
                    },
                    {
                        "name": "Kahramanmaraş province"
                    },
                    {
                        "name": "Karabük province"
                    },
                    {
                        "name": "Karaman province"
                    },
                    {
                        "name": "Kars province"
                    },
                    {
                        "name": "Kastamonu province"
                    },
                    {
                        "name": "Kayseri province"
                    },
                    {
                        "name": "Kilis province"
                    },
                    {
                        "name": "Kırıkkale province"
                    },
                    {
                        "name": "Kırklareli province"
                    },
                    {
                        "name": "Kırşehir province"
                    },
                    {
                        "name": "Kocaeli province"
                    },
                    {
                        "name": "Konya province"
                    },
                    {
                        "name": "Kütahya province"
                    },
                    {
                        "name": "Malatya province"
                    },
                    {
                        "name": "Manisa province"
                    },
                    {
                        "name": "Mardin province"
                    },
                    {
                        "name": "Mersin province"
                    },
                    {
                        "name": "Muğla province"
                    },
                    {
                        "name": "Muş province"
                    },
                    {
                        "name": "Nevşehir province"
                    },
                    {
                        "name": "Niğde province"
                    },
                    {
                        "name": "Ordu province"
                    },
                    {
                        "name": "Osmaniye province"
                    },
                    {
                        "name": "Rize province"
                    },
                    {
                        "name": "Sakarya province"
                    },
                    {
                        "name": "Samsun province"
                    },
                    {
                        "name": "Şanlıurfa province"
                    },
                    {
                        "name": "Siirt province"
                    },
                    {
                        "name": "Sinop province"
                    },
                    {
                        "name": "Sivas province"
                    },
                    {
                        "name": "Şırnak province"
                    },
                    {
                        "name": "Tekirdağ province"
                    },
                    {
                        "name": "Tokat province"
                    },
                    {
                        "name": "Trabzon province"
                    },
                    {
                        "name": "Tunceli province"
                    },
                    {
                        "name": "Uşak province"
                    },
                    {
                        "name": "Van province"
                    },
                    {
                        "name": "Yalova province"
                    },
                    {
                        "name": "Yozgat province"
                    },
                    {
                        "name": "Zonguldak province"
                    },
                ],
                "code": "TR"
            },
            {
                "name": "Turkmenistan",
                "dial_code": "+993",
                "states": [{
                        "name": "Ahal region"
                    },
                    {
                        "name": "Ashgabat"
                    },
                    {
                        "name": "Balkan region"
                    },
                    {
                        "name": "Daşoguz region"
                    },
                    {
                        "name": "Lebap region"
                    },
                    {
                        "name": "Mary region"

                    },
                ],
                "code": "TM"
            },

            {
                "name": "Turks and Caicos Islands",
                "dial_code": "+1649",
                "states": [{
                    "name": "Turks and Caicos Islands"
                }, ],
                "code": "TC"
            },
            {
                "name": "Tuvalu",
                "dial_code": "+688",
                "states": [{
                        "name": "Funafuti"
                    },
                    {
                        "name": "Nanumanga"
                    },
                    {
                        "name": "Nanumea"
                    },
                    {
                        "name": "Niutao Island Council"
                    },
                    {
                        "name": "Nui"
                    },
                    {
                        "name": "Nukufetau"
                    },
                    {
                        "name": "Nukulaelae"
                    },
                    {
                        "name": "Vaitupu"
                    },
                ],
                "code": "TV"
            },
            {
                "name": "Uganda",
                "dial_code": "+256",
                "states": [{
                        "name": "Abim District"
                    },
                    {
                        "name": "Adjumani District"
                    },
                    {
                        "name": "Agago District"
                    },
                    {
                        "name": "Alebtong District"
                    },
                    {
                        "name": "Amolatar District"
                    },
                    {
                        "name": "Amudat District"
                    },
                    {
                        "name": "Amuria District"
                    },
                    {
                        "name": "Amuru District"
                    },
                    {
                        "name": "Apac District"
                    },
                    {
                        "name": "Arua District"
                    },
                    {
                        "name": "Budaka District"
                    },
                    {
                        "name": "Bududa District"
                    },
                    {
                        "name": "Bugiri District"
                    },
                    {
                        "name": "Buhweju District"
                    },
                    {
                        "name": "Buikwe District"
                    },
                    {
                        "name": "Bukedea District"
                    },
                    {
                        "name": "Bukomansimbi District"
                    },
                    {
                        "name": "Bukwo District"
                    },
                    {
                        "name": "Bulambuli District"
                    },
                    {
                        "name": "Buliisa District"
                    },
                    {
                        "name": "Bundibugyo District"
                    },
                    {
                        "name": "Bunyangabu District"
                    },
                    {
                        "name": "Bushenyi District"
                    },
                    {
                        "name": "Busia District"
                    },
                    {
                        "name": "Butaleja District"
                    },
                    {
                        "name": "Butambala District"
                    },
                    {
                        "name": "Butebo District"
                    },
                    {
                        "name": "Buvuma District"
                    },
                    {
                        "name": "Buyende District"
                    },
                    {
                        "name": "Central region"
                    },
                    {
                        "name": "Dokolo District"
                    },
                    {
                        "name": "Eastern region"
                    },
                    {
                        "name": "Gomba District"
                    },
                    {
                        "name": "Gulu District"
                    },
                    {
                        "name": "Ibanda District"
                    },
                    {
                        "name": "Iganga District"
                    },
                    {
                        "name": "Isingiro District"
                    },
                    {
                        "name": "Jinja District"
                    },
                    {
                        "name": "Kaabong District"
                    },
                    {
                        "name": "Kabale District"
                    },
                    {
                        "name": "Kabarole District"
                    },
                    {
                        "name": "Kaberamaido District"
                    },
                    {
                        "name": "Kagadi District"
                    },
                    {
                        "name": "Kakumiro District"
                    },
                    {
                        "name": "Kalangala District"
                    },
                    {
                        "name": "Kaliro District"
                    },
                    {
                        "name": "Kalungu District"
                    },
                    {
                        "name": "Kampala District"
                    },
                    {
                        "name": "Kamuli District"
                    },
                    {
                        "name": "Kamwenge District"
                    },
                    {
                        "name": "Kanungu District"
                    },
                    {
                        "name": "Kapchorwa District"
                    },
                    {
                        "name": "Kasese District"
                    },
                    {
                        "name": "Katakwi District"
                    },
                    {
                        "name": "Kayunga District"
                    },
                    {
                        "name": "Kibaale District"
                    },
                    {
                        "name": "Kiboga District"

                    },
                    {
                        "name": "Kibuku District"
                    },
                    {
                        "name": "Kiruhura District"
                    },
                    {
                        "name": "Kiryandongo District"
                    },
                    {
                        "name": "Kisoro District"

                    },
                    {
                        "name": "Kitgum District"
                    },
                    {
                        "name": "Koboko District"
                    },
                    {
                        "name": "Kole District"
                    },
                    {
                        "name": "Kotido District"
                    },
                    {
                        "name": "Kumi District"
                    },
                    {
                        "name": "Kween District"
                    },
                    {
                        "name": "Kyankwanzi District"
                    },
                    {
                        "name": "Kyegegwa District"
                    },
                    {
                        "name": "Kyenjojo District"
                    },
                    {
                        "name": "Kyotera District"
                    },
                    {
                        "name": "Lamwo District"
                    },
                    {
                        "name": "Lira District"
                    },
                    {
                        "name": "Luuka District"
                    },
                    {
                        "name": "Luwero District"
                    },
                    {
                        "name": "Lwengo District"
                    },
                    {
                        "name": "Lyantonde District"
                    },
                    {
                        "name": "Manafwa District"
                    },
                    {
                        "name": "Maracha District"
                    },
                    {
                        "name": "Masaka District"
                    },
                    {
                        "name": "Masindi District"
                    },
                    {
                        "name": "Mayuge District"
                    },
                    {
                        "name": "Mbale District"
                    },
                    {
                        "name": "Mbarara District"
                    },
                    {
                        "name": "Mitooma District"
                    },
                    {
                        "name": "Mityana District"
                    },
                    {
                        "name": "Moroto District"
                    },
                    {
                        "name": "Moyo District"
                    },
                    {
                        "name": "Mpigi District"
                    },
                    {
                        "name": "Mubende District"
                    },
                    {
                        "name": "Mukono District"
                    },
                    {
                        "name": "Nakapiripirit District"
                    },
                    {
                        "name": "Nakaseke District"
                    },
                    {
                        "name": "Nakasongola District"
                    },
                    {
                        "name": "Namayingo District"
                    },
                    {
                        "name": "Namisindwa District"
                    },
                    {
                        "name": "Namutumba District"
                    },
                    {
                        "name": "Napak District"
                    },
                    {
                        "name": "Nebbi District"
                    },
                    {
                        "name": "Ngora District"
                    },
                    {
                        "name": "Northern region"
                    },
                    {
                        "name": "Ntoroko District"
                    },
                    {
                        "name": "Ntungamo District"
                    },
                    {
                        "name": "Nwoya District"
                    },
                    {
                        "name": "Omoro District"
                    },
                    {
                        "name": "Otuke District"
                    },
                    {
                        "name": "Oyam District"
                    },
                    {
                        "name": "Pader District"
                    },
                    {
                        "name": "Pakwach District"
                    },
                    {
                        "name": "Pallisa District"
                    },
                    {
                        "name": "Rakai District"
                    },
                    {
                        "name": "Rubanda District"
                    },
                    {
                        "name": "Rubirizi District"
                    },
                    {
                        "name": "Rukiga District"
                    },
                    {
                        "name": "Rukungiri District"
                    },
                    {
                        "name": "Sembabule District"
                    },
                    {
                        "name": "Serere District"
                    },
                    {
                        "name": "Sheema District"
                    },
                    {
                        "name": "Sironko District"
                    },
                    {
                        "name": "Soroti District"
                    },
                    {
                        "name": "Tororo District"
                    },
                    {
                        "name": "Wakiso District"

                    },
                    {
                        "name": "Western region"
                    },
                    {
                        "name": "Yumbe District"
                    },
                    {
                        "name": "Zombo District"
                    },
                ],
                "code": "UG"
            },
            {
                "name": "Ukraine",
                "dial_code": "+380",
                "states": [{
                        "name": "Autonomous Republic of Crimea"
                    },
                    {
                        "name": "Cherkasy Oblast"
                    },
                    {
                        "name": "Chernihiv Oblast"
                    },
                    {
                        "name": "Chernivtsi Oblast"
                    },
                    {
                        "name": "Dnipropetrovsk Oblast"
                    },
                    {
                        "name": "Donetsk Oblast"
                    },
                    {
                        "name": "Ivano-Frankivsk Oblast"
                    },
                    {
                        "name": "Kharkiv Oblast"
                    },
                    {
                        "name": "Kherson Oblast"
                    },
                    {
                        "name": "Khmelnytsky Oblast"
                    },
                    {
                        "name": "Kiev"
                    },
                    {
                        "name": "Kirovohrad Oblast"
                    },
                    {
                        "name": "Kyiv Oblast"
                    },
                    {
                        "name": "Luhansk Oblast"
                    },
                    {
                        "name": "Lviv Oblast"
                    },
                    {
                        "name": "Mykolaiv Oblast"
                    },
                    {
                        "name": "Odessa Oblast"
                    },
                    {
                        "name": "Rivne Oblast"
                    },
                    {
                        "name": "Sumy Oblast"
                    },
                    {
                        "name": "Ternopil Oblast"
                    },
                    {
                        "name": "Vinnytsia Oblast"
                    },
                    {
                        "name": "Volyn Oblast"
                    },
                    {
                        "name": "Zakarpattia Oblast"
                    },
                    {
                        "name": "Zaporizhzhya Oblast"
                    },
                    {
                        "name": "Zhytomyr Oblast"
                    },
                ],
                "code": "UA"
            },
            {
                "name": "United Arab Emirates",
                "dial_code": "+971",
                "states": [{
                        "name": "Abu Dhabi"
                    },
                    {
                        "name": "Ajman"
                    },
                    {
                        "name": "Dubai"
                    },
                    {
                        "name": "Fujairah"
                    },
                    {
                        "name": "Ras al-Khaimah"
                    },
                    {
                        "name": "Sharjah"
                    },
                    {
                        "name": "Umm al-Quwain"
                    },
                ],
                "code": "AE"
            },
            {
                "name": "United Kingdom",
                "dial_code": "+44",
                "states": [{
                        "name": "London, City of"
                    },
                    {
                        "name": "Aberdeen City"
                    },
                    {
                        "name": "Aberdeenshire"
                    },
                    {
                        "name": "Angus"
                    },
                    {
                        "name": "Argyll and Bute"
                    },
                    {
                        "name": "Clackmannanshire"
                    },
                    {
                        "name": "Dumfries and Galloway"
                    },
                    {
                        "name": "Dundee City"
                    },
                    {
                        "name": "East Ayrshire"
                    },
                    {
                        "name": "East Dunbartonshire"
                    },
                    {
                        "name": "East Lothian"
                    },
                    {
                        "name": "East Renfrewshire"
                    },
                    {
                        "name": "Edinburgh, City of"
                    },
                    {
                        "name": "Eilean Siar"
                    },
                    {
                        "name": "Falkirk"
                    },
                    {
                        "name": "Fife"
                    },
                    {
                        "name": "Glasgow City"
                    },
                    {
                        "name": "Highland"
                    },
                    {
                        "name": "Inverclyde"
                    },
                    {
                        "name": "Midlothian"
                    },
                    {
                        "name": "Moray"
                    },
                    {
                        "name": "North Ayrshire"
                    },
                    {
                        "name": "North Lanarkshire"
                    },
                    {
                        "name": "Orkney Islands"
                    },
                    {
                        "name": "Perth and Kinross"
                    },
                    {
                        "name": "Renfrewshire"
                    },
                    {
                        "name": "Scottish Borders"
                    },
                    {
                        "name": "Shetland Islands"
                    },
                    {
                        "name": "South Ayrshire"
                    },
                    {
                        "name": "South Lanarkshire"
                    },
                    {
                        "name": "Stirling"
                    },
                    {
                        "name": "West Dunbartonshire"
                    },
                    {
                        "name": "West Lothian"
                    },
                    {
                        "name": "Antrim and Newtownabbey"
                    },
                    {
                        "name": "Ards and North Down"
                    },
                    {
                        "name": "Armagh City, Banbridge and Craigavon"
                    },
                    {
                        "name": "Belfast City"
                    },
                    {
                        "name": "Causeway Coast and Glens"
                    },
                    {
                        "name": "Derry and Strabane"
                    },
                    {
                        "name": "Fermanagh and Omagh"
                    },
                    {
                        "name": "Lisburn and Castlereagh"
                    },
                    {
                        "name": "Mid and East Antrim"
                    },
                    {
                        "name": "Mid-Ulster"
                    },
                    {
                        "name": "Newry, Mourne and Down"
                    },
                    {
                        "name": "Barking and Dagenham"
                    },
                    {
                        "name": "Barnet"
                    },
                    {
                        "name": "Bexley"
                    },
                    {
                        "name": "Brent"
                    },
                    {
                        "name": "Bromley"
                    },
                    {
                        "name": "Camden"
                    },
                    {
                        "name": "Croydon"
                    },
                    {
                        "name": "Ealing"
                    },
                    {
                        "name": "Enfield"
                    },
                    {
                        "name": "Greenwich"
                    },
                    {
                        "name": "Hackney"
                    },
                    {
                        "name": "Hammersmith and Fulham"
                    },
                    {
                        "name": "Haringey"
                    },
                    {
                        "name": "Harrow"
                    },
                    {
                        "name": "Havering"
                    },
                    {
                        "name": "Hillingdon"
                    },
                    {
                        "name": "Hounslow"
                    },
                    {
                        "name": "Islington"
                    },
                    {
                        "name": "Kensington and Chelsea"
                    },
                    {
                        "name": "Kingston upon Thames"
                    },
                    {
                        "name": "Lambeth"
                    },
                    {
                        "name": "Lewisham"
                    },
                    {
                        "name": "Merton"
                    },
                    {
                        "name": "Newham"
                    },
                    {
                        "name": "Redbridge"
                    },
                    {
                        "name": "Richmond upon Thames"
                    },
                    {
                        "name": "Southwark"
                    },
                    {
                        "name": "Sutton"
                    },
                    {
                        "name": "Tower Hamlets"
                    },
                    {
                        "name": "Waltham Forest"
                    },
                    {
                        "name": "Wandsworth"
                    },
                    {
                        "name": "Westminster"
                    },
                    {
                        "name": "Barnsley"
                    },
                    {
                        "name": "Birmingham"
                    },
                    {
                        "name": "Bolton"
                    },
                    {
                        "name": "Bradford"
                    },
                    {
                        "name": "Bury"
                    },
                    {
                        "name": "Calderdale"
                    },
                    {
                        "name": "Coventry"
                    },
                    {
                        "name": "Doncaster"
                    },
                    {
                        "name": "Dudley"
                    },
                    {
                        "name": "Gateshead"
                    },
                    {
                        "name": "Kirklees"
                    },
                    {
                        "name": "Knowsley"
                    },
                    {
                        "name": "Leeds"
                    },
                    {
                        "name": "Liverpool"
                    },
                    {
                        "name": "Manchester"
                    },
                    {
                        "name": "Newcastle upon Tyne"
                    },
                    {
                        "name": "North Tyneside"
                    },
                    {
                        "name": "Oldham"
                    },
                    {
                        "name": "Rochdale"
                    },
                    {
                        "name": "Rotherham"
                    },
                    {
                        "name": "Salford"
                    },
                    {
                        "name": "Sandwell"
                    },
                    {
                        "name": "Sefton"
                    },
                    {
                        "name": "Sheffield"
                    },
                    {
                        "name": "Solihull"
                    },
                    {
                        "name": "South Tyneside"
                    },
                    {
                        "name": "St. Helens"

                    },
                    {
                        "name": "Stockport"
                    },
                    {
                        "name": "Sunderland"
                    },
                    {
                        "name": "Tameside"
                    },
                    {
                        "name": "Trafford"
                    },
                    {
                        "name": "Wakefield"
                    },
                    {
                        "name": "Walsall"
                    },
                    {
                        "name": "Wigan"
                    },
                    {
                        "name": "Wirral"
                    },
                    {
                        "name": "Wolverhampton"
                    },
                    {
                        "name": "Buckinghamshire"
                    },
                    {
                        "name": "Cambridgeshire"
                    },
                    {
                        "name": "Cumbria"
                    },
                    {
                        "name": "Derbyshire"
                    },
                    {
                        "name": "Devon"
                    },
                    {
                        "name": "Dorset"
                    },
                    {
                        "name": "East Sussex"
                    },
                    {
                        "name": "Essex"
                    },
                    {
                        "name": "Gloucestershire"
                    },
                    {
                        "name": "Hampshire"
                    },
                    {
                        "name": "Hertfordshire"
                    },
                    {
                        "name": "Kent"
                    },
                    {
                        "name": "Lancashire"
                    },
                    {
                        "name": "Leicestershire"
                    },
                    {
                        "name": "Lincolnshire"
                    },
                    {
                        "name": "Norfolk"
                    },
                    {
                        "name": "North Yorkshire"
                    },
                    {
                        "name": "Northamptonshire"
                    },
                    {
                        "name": "Nottinghamshire"
                    },
                    {
                        "name": "Oxfordshire"
                    },
                    {
                        "name": "Somerset"
                    },
                    {
                        "name": "Staffordshire"
                    },
                    {
                        "name": "Suffolk"
                    },
                    {
                        "name": "Surrey"
                    },
                    {
                        "name": "Warwickshire"
                    },
                    {
                        "name": "West Sussex"
                    },
                    {
                        "name": "Worcestershire"
                    },
                    {
                        "name": "Bath and North East Somerset"
                    },
                    {
                        "name": "Bedford"
                    },
                    {
                        "name": "Blackburn with Darwen"
                    },
                    {
                        "name": "Blackpool"
                    },
                    {
                        "name": "Blaenau Gwent"
                    },
                    {
                        "name": "Bournemouth, Christchurch and Poole"
                    },
                    {
                        "name": "Bracknell Forest"
                    },
                    {
                        "name": "Bridgend [Pen-y-bont ar Ogwr GB-POG]"
                    },
                    {
                        "name": "Brighton and Hove"
                    },
                    {
                        "name": "Bristol, City of"
                    },
                    {
                        "name": "Caerphilly [Caerffili GB-CAF]"
                    },
                    {
                        "name": "Cardiff [Caerdydd GB-CRD]"
                    },
                    {
                        "name": "Carmarthenshire [Sir Gaerfyrddin GB-GFY]"
                    },
                    {
                        "name": "Central Bedfordshire"
                    },
                    {
                        "name": "Ceredigion [Sir Ceredigion]"
                    },
                    {
                        "name": "Cheshire East"
                    },
                    {
                        "name": "Cheshire West and Chester"
                    },
                    {
                        "name": "Conwy"
                    },
                    {
                        "name": "Cornwall"
                    },
                    {
                        "name": "Darlington"
                    },
                    {
                        "name": "Denbighshire [Sir Ddinbych GB-DDB]"
                    },
                    {
                        "name": "Derby"

                    },
                    {
                        "name": "Durham, County"
                    },
                    {
                        "name": "East Riding of Yorkshire"
                    },
                    {
                        "name": "Flintshire [Sir y Fflint GB-FFL]"
                    },
                    {
                        "name": "Gwynedd"
                    },
                    {
                        "name": "Halton"
                    },
                    {
                        "name": "Hartlepool"
                    },
                    {
                        "name": "Herefordshire"
                    },
                    {
                        "name": "Isle of Anglesey [Sir Ynys Môn GB-YNM]"
                    },
                    {
                        "name": "Isle of Wight"
                    },
                    {
                        "name": "Isles of Scilly"
                    },
                    {
                        "name": "Kingston upon Hull"
                    },
                    {
                        "name": "Leicester"
                    },
                    {
                        "name": "Luton"
                    },
                    {
                        "name": "Medway"
                    },
                    {
                        "name": "Merthyr Tydfil [Merthyr Tudful GB-MTU]"
                    },
                    {
                        "name": "Middlesbrough"
                    },
                    {
                        "name": "Milton Keynes"
                    },
                    {
                        "name": "Monmouthshire [Sir Fynwy GB-FYN]"
                    },
                    {
                        "name": "Neath Port Talbot [Castell-nedd Port Talbot GB-CTL]"
                    },
                    {
                        "name": "Newport [Casnewydd GB-CNW]"
                    },
                    {
                        "name": "North East Lincolnshire"
                    },
                    {
                        "name": "North Lincolnshire"
                    },
                    {
                        "name": "North Somerset"
                    },
                    {
                        "name": "Northumberland"
                    },
                    {
                        "name": "Nottingham"
                    },
                    {
                        "name": "Pembrokeshire [Sir Benfro GB-BNF]"
                    },
                    {
                        "name": "Peterborough"
                    },
                    {
                        "name": "Plymouth"
                    },
                    {
                        "name": "Portsmouth"
                    },
                    {
                        "name": "Powys"
                    },
                    {
                        "name": "Reading"
                    },
                    {
                        "name": "Redcar and Cleveland"
                    },
                    {
                        "name": "Rhondda Cynon Taff [Rhondda CynonTaf]"
                    },
                    {
                        "name": "Rutland"
                    },
                    {
                        "name": "Shropshire"
                    },
                    {
                        "name": "Slough"

                    },
                    {
                        "name": "South Gloucestershire"
                    },
                    {
                        "name": "Southampton"
                    },
                    {
                        "name": "Southend-on-Sea"
                    },
                    {
                        "name": "Stockton-on-Tees"
                    },
                    {
                        "name": "Stoke-on-Trent"
                    },
                    {
                        "name": "Swansea [Abertawe GB-ATA]"
                    },
                    {
                        "name": "Swindon"
                    },
                    {
                        "name": "Telford and Wrekin"
                    },
                    {
                        "name": "Thurrock"
                    },
                    {
                        "name": "Torbay"
                    },
                    {
                        "name": "Torfaen [Tor-faen]"
                    },
                    {
                        "name": "Vale of Glamorgan, The [Bro Morgannwg GB-BMG]"
                    },
                    {
                        "name": "Warrington"
                    },
                    {
                        "name": "West Berkshire"
                    },
                    {
                        "name": "Wiltshire"
                    },
                    {
                        "name": "Windsor and Maidenhead"
                    },
                    {
                        "name": "Wokingham"
                    },
                    {
                        "name": "Wrexham [Wrecsam GB-WRC]"
                    },
                    {
                        "name": "York"
                    },
                ],
                "code": "GB"
            },
            {
                "name": "United States",
                "dial_code": "+1",
                "states": [{
                        "name": "Alabama"

                    },
                    {
                        "name": "Alaska"

                    },
                    {
                        "name": "American Samoa"

                    },
                    {
                        "name": "Arizona"

                    },
                    {
                        "name": "Arkansas"

                    },
                    {
                        "name": "Baker Island"

                    },
                    {
                        "name": "California"

                    },
                    {
                        "name": "Colorado"

                    },
                    {
                        "name": "Connecticut"

                    },
                    {
                        "name": "Delaware"

                    },
                    {
                        "name": "District of Columbia"

                    },
                    {
                        "name": "Florida"

                    },
                    {
                        "name": "Georgia"

                    },
                    {
                        "name": "Guam"

                    },
                    {
                        "name": "Hawaii"

                    },
                    {
                        "name": "Howland Island"

                    },
                    {
                        "name": "Idaho"

                    },
                    {
                        "name": "Illinois"
                    },
                    {
                        "name": "Indiana"

                    },
                    {
                        "name": "Iowa"

                    },
                    {
                        "name": "Jarvis Island"

                    },
                    {
                        "name": "Johnston Atoll"

                    },
                    {
                        "name": "Kansas"

                    },
                    {
                        "name": "Kentucky"

                    },
                    {
                        "name": "Kingman Reef"

                    },
                    {
                        "name": "Louisiana"

                    },
                    {
                        "name": "Maine"

                    },
                    {
                        "name": "Maryland"

                    },
                    {
                        "name": "Massachusetts"

                    },
                    {
                        "name": "Michigan"

                    },
                    {
                        "name": "Midway Atoll"

                    },
                    {
                        "name": "Minnesota"

                    },
                    {
                        "name": "Mississippi"

                    },
                    {
                        "name": "Missouri"

                    },
                    {
                        "name": "Montana"

                    },
                    {
                        "name": "Navassa Island"

                    },
                    {
                        "name": "Nebraska"

                    },
                    {
                        "name": "Nevada"

                    },
                    {
                        "name": "New Hampshire"

                    },
                    {
                        "name": "New Jersey"

                    },
                    {
                        "name": "New Mexico"

                    },
                    {
                        "name": "New York"

                    },
                    {
                        "name": "North Carolina"

                    },
                    {
                        "name": "North Dakota"

                    },
                    {
                        "name": "Northern Mariana Islands"

                    },
                    {
                        "name": "Ohio"

                    },
                    {
                        "name": "Oklahoma"

                    },
                    {
                        "name": "Oregon"

                    },
                    {
                        "name": "Palmyra Atoll"

                    },
                    {
                        "name": "Pennsylvania"

                    },
                    {
                        "name": "Puerto Rico"

                    },
                    {
                        "name": "Rhode Island"

                    },
                    {
                        "name": "South Carolina"

                    },
                    {
                        "name": "South Dakota"

                    },
                    {
                        "name": "Tennessee"

                    },
                    {
                        "name": "Texas"

                    },
                    {
                        "name": "United States Minor Outlying Islands"

                    },
                    {
                        "name": "United States Virgin Islands"

                    },
                    {
                        "name": "Utah"

                    },
                    {
                        "name": "Vermont"

                    },
                    {
                        "name": "Virginia"

                    },
                    {
                        "name": "Wake Island"

                    },
                    {
                        "name": "Washington"

                    },
                    {
                        "name": "West Virginia"

                    },
                    {
                        "name": "Wisconsin"

                    },
                    {
                        "name": "Wyoming"

                    },
                ],
                "code": "US"
            },
            {
                "name": "Uruguay",
                "dial_code": "+598",
                "states": [{
                        "name": "Artigas Department"

                    },
                    {
                        "name": "Canelones Department"

                    },
                    {
                        "name": "Cerro Largo Department"

                    },
                    {
                        "name": "Colonia Department"

                    },
                    {
                        "name": "Durazno Department"

                    },
                    {
                        "name": "Flores Department"

                    },
                    {
                        "name": "Florida Department"

                    },
                    {
                        "name": "Lavalleja Department"

                    },
                    {
                        "name": "Maldonado Department"

                    },
                    {
                        "name": "Montevideo Department"

                    },
                    {
                        "name": "Paysandú Department"

                    },
                    {
                        "name": "Río Negro Department"

                    },
                    {
                        "name": "Rivera Department"

                    },
                    {
                        "name": "Rocha Department"

                    },
                    {
                        "name": "Salto Department"

                    },
                    {
                        "name": "San José Department"

                    },
                    {
                        "name": "Soriano Department"

                    },
                    {
                        "name": "Tacuarembó Department"

                    },
                    {
                        "name": "Treinta y Tres Department"

                    },
                ],
                "code": "UY"
            },
            {
                "name": "Uzbekistan",
                "dial_code": "+998",
                "states": [{
                        "name": "Andijan region"

                    },
                    {
                        "name": "Bukhara region"

                    },
                    {
                        "name": "Fergana region"

                    },
                    {
                        "name": "Jizzakh region"

                    },
                    {
                        "name": "Karakalpakstan"

                    },
                    {
                        "name": "Namangan region"

                    },
                    {
                        "name": "Navoiy region"
                
                    },
                    {
                        "name": "Qashqadaryo region"

                    },
                    {
                        "name": "Samarqand region"

                    },
                    {
                        "name": "Sirdaryo region"

                    },
                    {
                        "name": "Surxondaryo region"

                    },
                    {
                        "name": "Tashkent"

                    },
                    {
                        "name": "Tashkent region"

                    },
                    {
                        "name": "Xorazm region"

                    },
                ],
                "code": "UZ"
            },

        {
                "name": "Vanuatu",
                "dial_code": "+678",
                "states": [{
                        "name": "Malampa"

                    },
                    {
                        "name": "Penama"

                    },
                    {
                        "name": "Sanma"

                    },
                    {
                        "name": "Shefa"

                    },
                    {
                        "name": "Tafea"

                    },
                    {
                        "name": "Torba"

                    },
                ],
                "code": "VU"
            },
            {
                "name": "Venezuela, Bolivarian Republic of Venezuela",
                "dial_code": "+58",
                "states": [{
                        "name": "Amazonas"

                    },
                    {
                        "name": "Anzoátegui"

                    },
                    {
                        "name": "Apure"

                    },
                    {
                        "name": "Aragua"

                    },
                    {
                        "name": "Barinas"

                    },
                    {
                        "name": "Bolívar"

                    },
                    {
                        "name": "Capital District"
                    },
                    {
                        "name": "Carabobo"

                    },
                    {
                        "name": "Cojedes"

                    },
                    {
                        "name": "Delta Amacuro"

                    },
                    {
                        "name": "Falcón"

                    },
                    {
                        "name": "Federal Dependencies of Venezuela"

                    },
                    {
                        "name": "Guárico"

                    },
                    {
                        "name": "Lara"

                    },
                    {
                        "name": "Mérida"

                    },
                    {
                        "name": "Miranda"

                    },
                    {
                        "name": "Monagas"

                    },
                    {
                        "name": "Nueva Esparta"

                    },
                    {
                        "name": "Portuguesa"

                    },
                    {
                        "name": "Sucre"

                    },
                    {
                        "name": "Táchira"

                    },
                    {
                        "name": "Trujillo"

                    },
                    {
                        "name": "Vargas"

                    },
                    {
                        "name": "Yaracuy"

                    },
                    {
                        "name": "Zulia"

                    },
                ],
                "code": "VE"
            },
            {
                "name": "Vietnam",
                "dial_code": "+84",
                "states": [{
                        "name": "An Giang"

                    },
                    {
                        "name": "Bà Rịa-Vũng Tàu"

                    },
                    {
                        "name": "Bắc Giang"

                    },
                    {
                        "name": "Bắc Kạn"

                    },
                    {
                        "name": "Bạc Liêu"

                    },
                    {
                        "name": "Bắc Ninh"

                    },
                    {
                        "name": "Bến Tre"

                    },
                    {
                        "name": "Bình Dương"

                    },
                    {
                        "name": "Bình Định"

                    },
                    {
                        "name": "Bình Phước"

                    },
                    {
                        "name": "Bình Thuận"

                    },
                    {
                        "name": "Cà Mau"

                    },
                    {
                        "name": "Cao Bằng"

                    },
                    {
                        "name": "Da Nang"

                    },
                    {
                        "name": "Đắk Lắk"

                    },
                    {
                        "name": "Đắk Nông"

                    },
                    {
                        "name": "Điện Biên"

                    },
                    {
                        "name": "Đồng Nai"

                    },
                    {
                        "name": "Đồng Tháp"

                    },
                    {
                        "name": "Gia Lai"

                    },
                    {
                        "name": "Hà Giang"

                    },
                    {
                        "name": "Hà Nam"

                    },
                    {
                        "name": "Hà Tây"

                    },
                    {
                        "name": "Hà Tĩnh"

                    },
                    {
                        "name": "Hải Dương"

                    },
                    {
                        "name": "Haiphong"

                    },
                    {
                        "name": "Hanoi"

                    },
                    {
                        "name": "Hậu Giang"
                    },
                    {
                        "name": "Ho Chi Minh City"

                    },
                    {
                        "name": "Hòa Bình"

                    },
                    {
                        "name": "Hưng Yên"

                    },
                    {
                        "name": "Khánh Hòa"

                    },
                    {
                        "name": "Kiên Giang"

                    },
                    {
                        "name": "Kon Tum"

                    },
                    {
                        "name": "Lai Châu"

                    },
                    {
                        "name": "Lâm Đồng"

                    },
                    {
                        "name": "Lạng Sơn"
                    },
                    {
                        "name": "Lào Cai"

                    },
                    {
                        "name": "Long An"

                    },
                    {
                        "name": "Nam Định"

                    },
                    {
                        "name": "Nghệ An"

                    },
                    {
                        "name": "Ninh Bình"

                    },
                    {
                        "name": "Ninh Thuận"

                    },
                    {
                        "name": "Phú Thọ"

                    },
                    {
                        "name": "Phú Yên"

                    },
                    {
                        "name": "Quảng Bình"

                    },
                    {
                        "name": "Quảng Nam"

                    },
                    {
                        "name": "Quảng Ngãi"

                    },
                    {
                        "name": "Quảng Ninh"

                    },
                    {
                        "name": "Quảng Trị"
                    },
                    {
                        "name": "Sóc Trăng"

                    },
                    {
                        "name": "Sơn La"

                    },
                    {
                        "name": "Tây Ninh"

                    },
                    {
                        "name": "Thái Bình"

                    },
                    {
                        "name": "Thái Nguyên"

                    },
                    {
                        "name": "Thanh Hóa"

                    },
                    {
                        "name": "Thừa Thiên-Huế"

                    },
                    {
                        "name": "Tiền Giang"

                    },
                    {
                        "name": "Trà Vinh"

                    },
                    {
                        "name": "Tuyên Quang"

                    },
                    {
                        "name": "Vĩnh Long"

                    },
                    {
                        "name": "Vĩnh Phúc"

                    },
                    {
                        "name": "Yên Bái"

                    },
                ],
                "code": "VN"
            },
            {
                "name": "Virgin Islands, British",
                "dial_code": "+1284",
                "states": [{
                    "name": "Virgin Islands, British"

                }],

                "code": "VG"
            },
            {
                "name": "Virgin Islands, U.S.",
                "dial_code": "+1340",
                "states": [{
                    "name": "Virgin Islands, U.s."

                }],

                "code": "VI"
            },
            {
                "name": "Wallis and Futuna",
                "dial_code": "+681",
                "states": [{
                    "name": "Wallis and Futuna"

                }],

                "code": "WF"
            },
            {
                "name": "Yemen",
                "dial_code": "+967",
                "states": [{
                        "name": "'Adan Governorate"

                    },
                    {
                        "name": "'Amran Governorate"

                    },
                    {
                        "name": "Abyan Governorate"

                    },
                    {
                        "name": "Al Bayda' Governorate"

                    },
                    {
                        "name": "Al Hudaydah Governorate"

                    },
                    {
                        "name": "Al Jawf Governorate"

                    },
                    {
                        "name": "Al Mahrah Governorate"

                    },
                    {
                        "name": "Al Mahwit Governorate"
                    },
                    {
                        "name": "Dhamar Governorate"

                    },
                    {
                        "name": "Hadhramaut Governorate"

                    },
                    {
                        "name": "Hajjah Governorate"

                    },
                    {
                        "name": "Ibb Governorate"

                    },
                    {
                        "name": "Lahij Governorate"

                    },
                    {
                        "name": "Ma'rib Governorate"

                    },
                    {
                        "name": "Raymah Governorate"

                    },
                    {
                        "name": "Saada Governorate"

                    },
                    {
                        "name": "Sana'a"

                    },
                    {
                        "name": "Sana'a Governorate"

                    },
                    {
                        "name": "Shabwah Governorate"

                    },
                    {
                        "name": "Socotra Governorate"

                    },
                    {
                        "name": "Ta'izz Governorate"

                    },
                ],
                "code": "YE"
            },
            {
                "name": "Zambia",
                "dial_code": "+260",
                "states": [{
                        "name": "Central province"

                    },
                    {
                        "name": "Copperbelt province"

                    },
                    {
                        "name": "Eastern province"

                    },
                    {
                        "name": "Luapula province"

                    },
                    {
                        "name": "Lusaka province"

                    },
                    {
                        "name": "Muchinga province"

                    },
                    {
                        "name": "Northern province"

                    },
                    {
                        "name": "Northwestern province"

                    },
                    {
                        "name": "Southern province"

                    },
                    {
                        "name": "Western province"

                    },
                ],
                "code": "ZM"
            },
            {
                "name": "Zimbabwe",
                "dial_code": "+263",
                "states": [{
                        "name": "Bulawayo province"

                    },
                    {
                        "name": "Harare province"

                    },
                    {
                        "name": "Manicaland"
                    },
                    {
                        "name": "Mashonaland Central province"

                    },
                    {
                        "name": "Mashonaland East Province"
                    },
                    {
                        "name": "Mashonaland West Province"
                    },
                    {
                        "name": "Masvingo Province"
                    },
                    {
                        "name": "Matabeleland North Province"
                    },
                    {
                        "name": "Matabeleland South Province"
                    },
                    {
                        "name": "Midlands Province"
                    },
                ],
                "code": "ZW"
            }
];

}]);


