module.exports = {
    images : {
        remotePatterns: [
            {
              protocol: "https",
              pathname: "**",
              hostname: "links.papareact.com"
            },
            {
              protocol: "https",
              pathname: "**",
              hostname: "jsonkeeper.com"
            }
          ],
    },
    env: {
      mapbox_key: 'pk.eyJ1IjoicmFzcHlwaTYiLCJhIjoiY2x0emtzZGg2MDEzYTJtbng0cnJ2eTRneCJ9.8d16NART-cIpaL7C9Epj8A'
    }
}