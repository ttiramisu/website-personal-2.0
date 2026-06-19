# Web Login Bypass

> Challenge focus: auth logic, response differences, and a simple bypass chain.

## Overview

This writeup walks through a web challenge where the login system looked
normal at first, but small differences in response handling gave the exploit
away.

## Recon

1. Inspect the login form and requests.
2. Compare successful and failed responses.
3. Look for hidden validation differences.

## Exploit path

The key issue was that the backend trusted one field more than it should have.
By manipulating the request body, the auth flow could be pushed into a branch
that accepted a session without properly verifying credentials.

```http
POST /login HTTP/1.1
Content-Type: application/json

{
  "username": "admin",
  "password": "anything",
  "role": "admin"
}
```

## Takeaway

When a challenge feels "too normal", diff every response and check which parts
of the request are actually validated.
