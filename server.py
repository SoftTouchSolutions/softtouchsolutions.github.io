#!/usr/bin/env python3
# python3 update of https://gist.github.com/dergachev/7028596
# Create a basic certificate using openssl: 
#     openssl req -new -x509 -keyout server.pem -out server.pem -days 365 -nodes
# Or to set CN, SAN and/or create a cert signed by your own root CA: https://thegreycorner.com/pentesting_stuff/writeups/selfsignedcert.html

import http.server
import ssl

httpd = http.server.HTTPServer(('127.0.0.1', 3443), http.server.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket (httpd.socket, certfile='./.server.pem', server_side=True)
print("Serving at https:// on port 3443")
httpd.serve_forever()
