# Part one
1. Local ip is **10.11.23.25** (founded in `ipconfig /all`)
2. MAC address is **98-BD-80-32-67-89** (founded in `ipconfig /all`)
3. hosts.txt located in **C:\Windows\System32\drivers\etc**
4. [yandex.ru](yandex.ru) ip set (using `nslookup`):
    1. 5.255.255.77
    2. 77.88.44.55
    3. 77.88.55.88
5. Path to [yandex.ru](yandex.ru) (using `tracert`):
    1. 8 ms     8 ms    64 ms  10.11.20.1
    2. 14 ms    59 ms     5 ms  gw.fr-lif.citytelecom.ru [31.28.10.1]
    3. 18 ms     4 ms     7 ms  31.28.20.5
    4. 14 ms    51 ms    46 ms  31.28.18.33
    5. 39 ms    32 ms    31 ms  10.3.6.1
    6. 374 ms   194 ms    60 ms  yandex.ru [5.255.255.77]
6. Global ip is **31.28.10.139** (founded using [2ip.ru](https://2ip.ru/))
7. DNS cache can be found using command `ipconfig /displaydns`
    - `geover.prod.do.dsp.mp.microsoft.com` is prikolniy address, i swear
8. You can clear dns cache using `ipconfig /flushdns`
# Part two
1. Pinging **localhost**:
    - Pinging lgn [::1] with 32 bytes of data:
    - Reply from ::1: time<1ms
    - Reply from ::1: time<1ms
    - Reply from ::1: time<1ms
    - Reply from ::1: time<1ms
    - 
    - Ping statistics for ::1:
        - Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
    - Approximate round trip times in milli-seconds:
        - Minimum = 0ms, Maximum = 0ms, Average = 0ms
2. Pinging **default gateway**:
    - Pinging 10.11.20.1 with 32 bytes of data:
    - Reply from 10.11.20.1: bytes=32 time=3ms TTL=64
    - Reply from 10.11.20.1: bytes=32 time=1ms TTL=64
    - Reply from 10.11.20.1: bytes=32 time=3ms TTL=64
    - Reply from 10.11.20.1: bytes=32 time=3ms TTL=64
    -
    - Ping statistics for 10.11.20.1:
        - Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
    - Approximate round trip times in milli-seconds:
        - Minimum = 1ms, Maximum = 3ms, Average = 2ms
3. Pinging **world** (Google DNS servers, i used **8.8.8.8**)
    - Pinging 8.8.8.8 with 32 bytes of data:
    - Reply from 8.8.8.8: bytes=32 time=7ms TTL=111
    - Reply from 8.8.8.8: bytes=32 time=8ms TTL=111
    - Reply from 8.8.8.8: bytes=32 time=8ms TTL=111
    - Reply from 8.8.8.8: bytes=32 time=16ms TTL=111
    -
    - Ping statistics for 8.8.8.8:
        - Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
    - Approximate round trip times in milli-seconds:
        - Minimum = 7ms, Maximum = 16ms, Average = 9ms
4. Pinging [yandex.ru](yandex.ru) using `ping`:
    - Pinging yandex.ru [77.88.44.55] with 32 bytes of data:
    - Reply from 77.88.44.55: bytes=32 time=16ms TTL=58
    - Reply from 77.88.44.55: bytes=32 time=15ms TTL=58
    - Reply from 77.88.44.55: bytes=32 time=15ms TTL=58
    - Reply from 77.88.44.55: bytes=32 time=15ms TTL=58
    -
    - Ping statistics for 77.88.44.55:
        - Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
    - Approximate round trip times in milli-seconds:
        - Minimum = 15ms, Maximum = 16ms, Average = 15ms
