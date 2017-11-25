const config = {
    development: {
        baseRoutingPath: '/'
    },

    production: {
        baseRoutingPath: '/webnote'
    }
}

export default config[process.env.NODE_ENV];
