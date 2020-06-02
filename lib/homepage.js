
export const homepage =
  `<h1>Request Header Parser Service</h1>
    <p>This service returns a JSON object containing the information on the
    system being used to access the service.<p>
    <p>The API format is</p>
    <pre>  https://[hostname]/api/client</pre>
    <p>where [hostname] is the host name of the server hosting the service.
    <p>The result is a JSON message with the format</p>
    <pre>  { "ip":"123.45.67.890", "language":"en-US" "os":"Windows NT 6.1; WOW64" }</pre>
`;
