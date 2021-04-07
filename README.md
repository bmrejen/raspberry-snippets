## Serving static JS files on a local Raspberry Pi

This is for when you want to host JS files on a local Pi 

1. First step is to generate a private key (private.pem) and the SSL certificate (cert.pem)

```
openssl req -x509 -newkey rsa:4096 -nodes -sha256 -subj '/CN=localhost' -days 1024 -keyout private.pem -out cert.pem
```

2. Now move these two files to the root of the project



## How to execute JS files remotely

From any tab, open your DevTools and run:

```
fetch("https://192.168.0.30:3443/snippet.js").then(res => res.text()).then(eval)
```

Careful, all CORS origins are allowed.



## Tell your browser to trust this CA

Chrome -> Settings -> Manage certificates -> Import -> choose cert.pem (you might néed to rename it .crt)
