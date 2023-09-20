// important
// A fetch() promise only rejects when a network error is encountered(which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors(404, etc.). Instead a then() handler must check the Respone.ok and/or Response.status properties

// How fetch works

/*

const response = fetch('somthing');
1)to reserve the memory for data
    // Below variable are private we cannot access these variable
    ---> Data:
    --->onFullFilled[]--------------------------------------------------------------------------------------------------<
    --->onRejection[]--------------------------------------------------------------------------------------<-onrejection|
2)Web brower or Native node to handle the request                                                                       |
    --->Network request (We cannot directly fire request. we need resource which will be given by browser or nodejs)    |
    --->AFter network request either it will be go on network and get response then the response will be stored in -----^
    --->if network is not go on to the request then the error will be stored in onRejection[]---------------------------^
    then if response will be get on onfullFilled then it will store in Data variabl which is private and date will be stored in response variable which is globally available
*/