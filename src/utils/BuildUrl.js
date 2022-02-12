import requestList from "./requests.json"
import server from "./server.json"

// const RequestList = JSON.parse(requestList)
// const Server = JSON.parse(server)

const get = (obj, str) => typeof obj[str] === "undefined" ? "" : obj[str]

const getR = str => get(requestList, str)

const getS = str => get(server, str)


export default function buildUrl(request){
    return getS("server") + getR(request)
}