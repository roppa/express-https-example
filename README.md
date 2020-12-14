## Node/Express with HTTPS

Creating unsigned local certs

```
openssl genrsa -out localhost.key 2048
```

```
openssl req -new -x509 -key localhost.key -out localhost.cert -days 3650 -subj /CN=localhost
```

Any port under 1000 needs to be run with root privileges `sudo node server.js`.
