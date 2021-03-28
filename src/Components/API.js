export default function API() {
    const env = 'development'
    const development = 'http://localhost:3001/'
    const production = 'https://greenlite-api.herokuapp.com/'

    if (env === 'development') {
        return development
    } else {
        return production
    }
}