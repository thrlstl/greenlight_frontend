// DYNAMIC API URL 
// Set environment variable equal to
// 'development' or 'production'

export default function API() {
    const env = 'development'
    const development = 'http://localhost:3001/'
    const production = 'https://greenlite-api.herokuapp.com/'

    return env === 'development'
    ? development
    : production
}