const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env){
        case 'dev':
            return {
                bd_string: 'mongodb+srv://<bduser>:<password>@clusterapi-jmgml.mongodb.net/test?retryWrites=true&w=majority',
                jwt_pass: 'batatasfrita2019',
                jwt_expires_in: '7d'
            }
        
        case 'hml':
            return {
                bd_string: 'mongodb+srv://<bduser>:<password>@clusterapi-jmgml.mongodb.net/test?retryWrites=true&w=majority',
                jwt_pass: 'batatasfrita2019',
                jwt_expires_in: '7d'
            }
        
        case 'prod':
            return {
                bd_string: 'mongodb+srv://<bduser>:<password>@clusterapi-jmgml.mongodb.net/test?retryWrites=true&w=majority',
                jwt_pass: 'batatasfrita2019',
                jwt_expires_in: '7d'
            }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config()