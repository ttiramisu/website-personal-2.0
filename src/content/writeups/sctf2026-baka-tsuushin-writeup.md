# バカ通信

## Overview
A .E01 file was provided, asking to find the flag from within.

## Exploit Path
We need to mount the .E01 file to inspect the contents. We can use tools like autopsy, but I will use ```ewf-tools``` to mount the file instead.

```bash
$ ewfmount idiot_communication.E01 ~/mnt
```

Verifying the mount
```bash
$ ls -l ~/mnt
total 0
-r--r--r-- 1 root root 5366611968 Jun 20 22:18 ewf1
```

From the challenge description, we can see that there is a GitHub credential present in the filesystem. Lets first view the files using ```fls```

```bash
$ fls -r -p ~/mnt/ewf1 | less

... bunch of files ...

```

Closer inspection of the output shows that this is a Windows system.

Since we know that it is something inside the files, we can use the ```grep``` command to find the GitHub credentials. There are multiple kind of GitHub credentials: Classic Tokens, Fine-Grained Tokens, OAuth/Refresh Tokens. These tokens all have different formats. Lets use the ```grep``` command on all of them one by one.

```bash
$ grep -a -oE "(ghp_[a-zA-Z0-9]{36,251}|github_pat_[a-zA-Z0-9_]{82})" ~/mnt/ewf1
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
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
```

Ok we have found the Classic Token match. Lets test this.

```bash
curl -H "Authorization: Bearer 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" https://api.github.com/user
```

Running the above command shows that the GitHub username is ```JohnRichFromSCTF```. Visiting his GitHub page showed nothing useful as all the repositories are private.

Since we have the Classic Token, we can try and see if the token allow access to read the owned repositories using the command below.

```bash
$ curl -H "Authorization: Bearer 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" https://api.github.com/user/repos
```

Scrolling through the output we find the flag
```
"html_url": "https://github.com/JohnRichFromSCTF/idiot-communication",
"description": "sctf{0n1y_4n_idi0t_1s_th1s_uns3cur3}",
"fork": false,
"url": "https://api.github.com/repos/JohnRichFromSCTF/idiot-communication",
```

This gives us the flag for this challenge
```sctf{0n1y_4n_idi0t_1s_th1s_uns3cur3}```