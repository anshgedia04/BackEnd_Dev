# How the Internet Works: The Role of DNS

# Step 1: User types the URL
input: www.google.com

# Step 2: Browser checks its local DNS cache
if cache.has("www.google.com"):
    ip_address = cache.get("www.google.com")
else:
    # Step 3: If not found in cache, request is sent to the DNS resolver
    ip_address = DNSResolver.lookup("www.google.com")

    # Step 4: DNS Resolver begins querying the DNS hierarchy
    # 4.1: Query Root DNS Server for the TLD (.com)
    tld_server = RootDNS.query("com")

    # 4.2: Query the TLD Server for the authoritative server of the domain
    authoritative_server = tld_server.query("google.com")

    # 4.3: Query the Authoritative DNS Server for the IP address
    ip_address = authoritative_server.query("www.google.com")

    # Step 5: Resolver sends the IP address back to the browser
    DNSResolver.cache("www.google.com", ip_address)  # Save in cache for future use

# Step 6: Browser uses the IP address to contact the web server
response = WebServer.request(ip_address, "GET /")

# Step 7: Web Server processes the request and sends back a response
response = {
    status: 200,              # HTTP Status OK
    content: "<html>...</html>"  # HTML, CSS, JS, etc.
}

# Step 8: Browser renders the web page
browser.render(response.content)

# Output: The website (www.google.com) is displayed to the user
