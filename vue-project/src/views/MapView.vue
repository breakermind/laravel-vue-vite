<script>
import { Loader } from "@googlemaps/js-api-loader"

export default {
  data() {
    return {
      map: null,
      poly: null,
      polygon: null,
      api_key: '',
      lat: 24.886,
      lng: -70.268,
      scrollwheel: true,
      zoom: 5,
      disableDefaultUI: false,
    }
  },
  mounted: function() {
    this.loadMap()
  },
  methods: {
    loadMap() {
      const loader = new Loader({
        apiKey: this.api_key,
        version: "weekly",
      })

      loader.load().then(() => {
        this.map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: this.lat, lng: this.lng },
          scrollwheel: this.scrollwheel,
          zoom: this.zoom,
          disableDefaultUI: false,
        })

        this.marker = new google.maps.Marker({
          position: { lat: this.lat, lng: this.lng },
          map: this.map
        });

        this.polygon = [
          { lat: 25.774, lng: -80.19 },
          { lat: 18.466, lng: -66.118 },
          { lat: 32.321, lng: -64.757 },
          { lat: 25.774, lng: -80.19 },
        ];

        this.poly = new google.maps.Polygon({
          paths: this.polygon,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
        });

        this.poly.setMap(this.map);

        // Contain poly
        const isContain = (val, e) => {
          if(val) {
            alert("Wooow")
            console.log('Contain location', e.latLng)
          } else {
            alert("Pooow")
            console.log('Dont contain location', e.latLng)
          }
        }

        // Map event
        google.maps.event.addListener(this.map, "click", (e) => {
          const contain = google.maps.geometry.poly.containsLocation(e.latLng, this.poly) ? true : false;
          isContain(contain,e)
        })

        // Polygon event
        google.maps.event.addListener(this.poly, "click", (e) => {
          const contain = google.maps.geometry.poly.containsLocation(e.latLng, this.poly) ? true : false;
          isContain(contain,e)
        })
      })
    },
  }
}
</script>

<template>
    <div id="map"></div>
</template>

<style scoped>
#map {width: 100%; height: 400px;}

.about {
  margin-top: 20px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>


// https://www.npmjs.com/package/@googlemaps/js-api-loader
// https://developers.google.com/maps/documentation/javascript/overview#js_api_loader_package
// https://developers.google.com/maps/documentation/javascript/examples
// https://developers.google.com/maps/documentation/javascript/reference/polygon
// https://developers.google.com/maps/documentation/javascript/examples/poly-containsLocation
// https://developers.google.com/maps/documentation/javascript/geometry