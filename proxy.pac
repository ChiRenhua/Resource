function FindProxyForURL(url, host)
{
    url = url.toLowerCase();
    host = host.toLowerCase();

    return "PROXY 192.168.31.244:8888; DIRECT";
}
