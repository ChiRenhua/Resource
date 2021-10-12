function FindProxyForURL(url, host)
{
    url = url.toLowerCase();
    host = host.toLowerCase();

    return "PROXY 192.168.3.214:8888; DIRECT";
}