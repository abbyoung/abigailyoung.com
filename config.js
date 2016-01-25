// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/

var path = require('path'),  
        config;

config = {  
        // ### Production
        production: {
                url: process.env.BLOG_URL,

                fileStorage: true,
				// Use Postgres so it can live on Heroku
                database: {
                    client: 'postgres',
                    connection: {
                        host: process.env.POSTGRES_HOST,
                        user: process.env.POSTGRES_USER,
                        password: process.env.POSTGRES_PASSWORD,
                        database: process.env.POSTGRES_DATABASE,
                        port: '5432'
                    },
                    debug: false
                },

                aws: {
                    accessKeyId: process.env.AWS_ACCESS_ID,
                    secretAccessKey: process.env.AWS_ACCESS_SECRET,
                    bucket: process.env.AWS_BUCKET_NAME
                },

                server: {
                    host: '0.0.0.0',
                    port: process.env.PORT
                }
        },

        // ### Development **(default)**
        development: {
                url: 'http://localhost:2368',

                fileStorage: false,

                database: {
                        client: 'sqlite3',
                        connection: {
                                filename: path.join(__dirname, '/content/data/ghost-dev.db')
                        },
                        debug: false
                },

                server: {
                        // Host to be passed to node's `net.Server#listen()`
                        host: '127.0.0.1',
                        // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
                        port: '2368'
                },

                paths: {
                        contentPath: path.join(__dirname, '/content/')
                }
        }
};

// Export config
module.exports = config;